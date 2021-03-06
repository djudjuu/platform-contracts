pragma solidity 0.4.26;

import "./ETODurationTerms.sol";
import "./ETOTokenTerms.sol";
import "./ETOTermsConstraints.sol";
import "../Standards/IContractId.sol";
import "../PlatformTerms.sol";
import "../Company/ShareholderRights.sol";
import "../Math.sol";
import "../Universe.sol";
import "../KnownInterfaces.sol";
import "../AccessControl/AccessControlled.sol";
import "../AccessRoles.sol";

// version history as per contract id
// 0 - initial version
// 1 - added ETOTermsConstraints to terms initialization
// 2 - whitelist management shifted from company to WHITELIST ADMIN
// 3 - SHARE_NOMINAL_VALUE_EUR_ULPS, TOKEN_NAME, TOKEN_SYMBOL moved to ETOTokenTerms
//     replaces EXISTING_COMPANY_SHARS with EXISTING_SHARE_CAPITAL, adds CURRENCY CODE
// 4 - introduces
//     MAX_AVAILABLE_TOKENS with the actual amount of tokens for sale
//     MAX_AVAILABLE_TOKENS_IN_WHITELIST with the actual amount of tokens for sale in whitelist
//     ALLOWS_REGD_INVESTORS are US investors on reg-d allowed to participate in this ETO


/// @title base terms of Equity Token Offering
/// encapsulates pricing, discounts and whitelisting mechanism
/// @dev to be split is mixins
contract ETOTerms is
    AccessControlled,
    AccessRoles,
    IdentityRecord,
    Math,
    IContractId,
    KnownInterfaces
{

    ////////////////////////
    // Types
    ////////////////////////

    // @notice whitelist entry with a discount
    struct WhitelistTicket {
        // this also overrides maximum ticket
        uint128 discountAmountEurUlps;
        // a percentage of full price to be paid (1 - discount)
        uint128 fullTokenPriceFrac;
    }

    ////////////////////////
    // Constants state
    ////////////////////////

    bytes32 private constant EMPTY_STRING_HASH = 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470;

    ////////////////////////
    // Immutable state
    ////////////////////////

    // reference to duration terms
    ETODurationTerms public DURATION_TERMS;
    // reference to token terms
    ETOTokenTerms public TOKEN_TERMS;
    // currency code in which share capital is provided
    string public SHARE_CAPITAL_CURRENCY_CODE;
    // shares capital in ISHA currency at the beginning of the sale, excl. Authorized Capital
    uint256 public EXISTING_SHARE_CAPITAL;
    // maximum discount on token price that may be given to investor (as decimal fraction)
    // uint256 public MAXIMUM_TOKEN_PRICE_DISCOUNT_FRAC;
    // minimum ticket
    uint256 public MIN_TICKET_EUR_ULPS;
    // maximum ticket, is never 0, will be set to maximum possible cap to reduce number of conditions later
    uint256 public MAX_TICKET_EUR_ULPS;
    // should enable transfers on ETO success
    // transfers are always disabled during token offering
    // if set to False transfers on Equity Token will remain disabled after offering
    // once those terms are on-chain this flags fully controls token transferability
    bool public ENABLE_TRANSFERS_ON_SUCCESS;
    // represents the discount % for whitelist participants
    uint256 public WHITELIST_DISCOUNT_FRAC;
    // represents the discount % for public participants, using values > 0 will result
    // in automatic downround shareholder resolution
    uint256 public PUBLIC_DISCOUNT_FRAC;
    // tells is RegD US investors are allowed to participate
    uint256 public ALLOWS_REGD_INVESTORS;

    // paperwork
    // prospectus / investment memorandum / crowdfunding pamphlet etc.
    string public INVESTOR_OFFERING_DOCUMENT_URL;
    // settings for shareholder rights
    ShareholderRights public SHAREHOLDER_RIGHTS;

    // wallet registry of KYC procedure
    IIdentityRegistry public IDENTITY_REGISTRY;
    Universe public UNIVERSE;
    // terms constraints (a.k.a. "Product")
    ETOTermsConstraints public ETO_TERMS_CONSTRAINTS;
    // number of tokens that can be sold, + 2% = MAX_NUMBER_OF_TOKENS
    uint256 public MAX_AVAILABLE_TOKENS;
    // number of tokens that can be sold in whitelist
    uint256 public MAX_AVAILABLE_TOKENS_IN_WHITELIST;

    // base token price in EUR-T, without any discount scheme
    uint256 private TOKEN_PRICE_EUR_ULPS;
    // equity tokens per share
    uint256 private EQUITY_TOKENS_PER_SHARE;


    ////////////////////////
    // Mutable state
    ////////////////////////

    // mapping of investors allowed in whitelist
    mapping (address => WhitelistTicket) private _whitelist;

    ////////////////////////
    // Events
    ////////////////////////

    // raised on invesor added to whitelist
    event LogInvestorWhitelisted(
        address indexed investor,
        uint256 discountAmountEurUlps,
        uint256 fullTokenPriceFrac
    );

    ////////////////////////
    // Constructor
    ////////////////////////

    constructor(
        Universe universe,
        ETODurationTerms durationTerms,
        ETOTokenTerms tokenTerms,
        string shareCapitalCurrencyCode,
        uint256 existingShareCapital,
        uint256 minTicketEurUlps,
        uint256 maxTicketEurUlps,
        bool enableTransfersOnSuccess,
        string investorOfferingDocumentUrl,
        ShareholderRights shareholderRights,
        uint256 whitelistDiscountFrac,
        uint256 publicDiscountFrac,
        ETOTermsConstraints etoTermsConstraints
    )
        AccessControlled(universe.accessPolicy())
        public
    {
        require(durationTerms != address(0));
        require(tokenTerms != address(0));
        require(existingShareCapital > 0);
        require(keccak256(abi.encodePacked(investorOfferingDocumentUrl)) != EMPTY_STRING_HASH);
        require(keccak256(abi.encodePacked(shareCapitalCurrencyCode)) != EMPTY_STRING_HASH);
        require(shareholderRights != address(0));
        // test interface
        require(shareholderRights.HAS_GENERAL_INFORMATION_RIGHTS());
        require(whitelistDiscountFrac >= 0 && whitelistDiscountFrac <= 99*10**16, "NF_DISCOUNT_RANGE");
        require(publicDiscountFrac >= 0 && publicDiscountFrac <= 99*10**16, "NF_DISCOUNT_RANGE");
        require(minTicketEurUlps<=maxTicketEurUlps);
        require(tokenTerms.EQUITY_TOKENS_PRECISION() == 0);

        require(universe.isInterfaceCollectionInstance(KNOWN_INTERFACE_ETO_TERMS_CONSTRAINTS, etoTermsConstraints), "NF_TERMS_NOT_IN_UNIVERSE");
        // save reference to constraints
        ETO_TERMS_CONSTRAINTS = etoTermsConstraints;

        // copy token terms variables
        TOKEN_PRICE_EUR_ULPS = tokenTerms.TOKEN_PRICE_EUR_ULPS();
        EQUITY_TOKENS_PER_SHARE = tokenTerms.EQUITY_TOKENS_PER_SHARE();

        DURATION_TERMS = durationTerms;
        TOKEN_TERMS = tokenTerms;
        SHARE_CAPITAL_CURRENCY_CODE = shareCapitalCurrencyCode;
        EXISTING_SHARE_CAPITAL = existingShareCapital;
        MIN_TICKET_EUR_ULPS = minTicketEurUlps;
        MAX_TICKET_EUR_ULPS = maxTicketEurUlps;
        ENABLE_TRANSFERS_ON_SUCCESS = enableTransfersOnSuccess;
        INVESTOR_OFFERING_DOCUMENT_URL = investorOfferingDocumentUrl;
        SHAREHOLDER_RIGHTS = shareholderRights;
        WHITELIST_DISCOUNT_FRAC = whitelistDiscountFrac;
        PUBLIC_DISCOUNT_FRAC = publicDiscountFrac;
        IDENTITY_REGISTRY = IIdentityRegistry(universe.identityRegistry());
        UNIVERSE = universe;

        // compute max available tokens to be sold in ETO
        MAX_AVAILABLE_TOKENS = calculateAvailableTokens(tokenTerms.MAX_NUMBER_OF_TOKENS());
        MAX_AVAILABLE_TOKENS_IN_WHITELIST = min(MAX_AVAILABLE_TOKENS, tokenTerms.MAX_NUMBER_OF_TOKENS_IN_WHITELIST());

        // validate all settings
        requireValidTerms();
    }

    ////////////////////////
    // Public methods
    ////////////////////////

    // calculates token amount for a given commitment at a position of the curve
    // we require that equity token precision is 0
    function calculateTokenAmount(uint256 /*totalEurUlps*/, uint256 committedEurUlps)
        public
        constant
        returns (uint256 tokenAmountInt)
    {
        // we may disregard totalEurUlps as curve is flat, round down when calculating tokens
        return committedEurUlps / calculatePriceFraction(10**18 - PUBLIC_DISCOUNT_FRAC);
    }

    // calculates amount of euro required to acquire amount of tokens at a position of the (inverse) curve
    // we require that equity token precision is 0
    function calculateEurUlpsAmount(uint256 /*totalTokensInt*/, uint256 tokenAmountInt)
        public
        constant
        returns (uint256 committedEurUlps)
    {
        // we may disregard totalTokensInt as curve is flat
        return mul(tokenAmountInt, calculatePriceFraction(10**18 - PUBLIC_DISCOUNT_FRAC));
    }

    function calculatePriceFraction(uint256 priceFrac) public constant returns(uint256) {
        if (priceFrac == 1) {
            return TOKEN_PRICE_EUR_ULPS;
        } else {
            return decimalFraction(priceFrac, TOKEN_PRICE_EUR_ULPS);
        }
    }

    /// @notice returns number of shares as a decimal fraction
    function equityTokensToShares(uint256 amount)
        public
        constant
        returns (uint256)
    {
        return proportion(amount, 10**18, EQUITY_TOKENS_PER_SHARE);
    }

    function addWhitelisted(
        address[] investors,
        uint256[] discountAmountsEurUlps,
        uint256[] discountsFrac
    )
        external
        only(ROLE_WHITELIST_ADMIN)
    {
        require(investors.length == discountAmountsEurUlps.length);
        require(investors.length == discountsFrac.length);

        for (uint256 i = 0; i < investors.length; i += 1) {
            addWhitelistInvestorPrivate(investors[i], discountAmountsEurUlps[i], discountsFrac[i]);
        }
    }

    function whitelistTicket(address investor)
        public
        constant
        returns (bool isWhitelisted, uint256 discountAmountEurUlps, uint256 fullTokenPriceFrac)
    {
        WhitelistTicket storage wlTicket = _whitelist[investor];
        isWhitelisted = wlTicket.fullTokenPriceFrac > 0;
        discountAmountEurUlps = wlTicket.discountAmountEurUlps;
        fullTokenPriceFrac = wlTicket.fullTokenPriceFrac;
    }

    // calculate contribution of investor
    function calculateContribution(
        address investor,
        uint256 totalContributedEurUlps,
        uint256 existingInvestorContributionEurUlps,
        uint256 newInvestorContributionEurUlps,
        bool applyWhitelistDiscounts
    )
        public
        constant
        returns (
            bool isWhitelisted,
            bool isEligible,
            uint256 minTicketEurUlps,
            uint256 maxTicketEurUlps,
            uint256 equityTokenInt,
            uint256 fixedSlotEquityTokenInt
            )
    {
        (
            isWhitelisted,
            minTicketEurUlps,
            maxTicketEurUlps,
            equityTokenInt,
            fixedSlotEquityTokenInt
        ) = calculateContributionPrivate(
            investor,
            totalContributedEurUlps,
            existingInvestorContributionEurUlps,
            newInvestorContributionEurUlps,
            applyWhitelistDiscounts);
        // check if is eligible for investment
        IdentityClaims memory claims = deserializeClaims(IDENTITY_REGISTRY.getClaims(investor));
        // use simple formula to disallow us accredited investors
        isEligible = claims.isVerified && !claims.accountFrozen && !claims.requiresRegDAccreditation;
    }

    /// @notice checks terms against terms constraints, reverts on invalid
    function requireValidTerms()
        public
        constant
        returns (bool)
    {
        // available tokens >= MIN AVAIABLE TOKENS
        uint256 minTokens = TOKEN_TERMS.MIN_NUMBER_OF_TOKENS();
        require(MAX_AVAILABLE_TOKENS >= minTokens, "NF_AVAILABLE_TOKEN_LT_MIN_TOKENS");
        // min ticket must be > token price
        require(MIN_TICKET_EUR_ULPS >= TOKEN_TERMS.TOKEN_PRICE_EUR_ULPS(), "NF_MIN_TICKET_LT_TOKEN_PRICE");
        // it must be possible to collect more funds than max number of tokens
        uint256 estimatedMaxCap = calculateEurUlpsAmount(0, MAX_AVAILABLE_TOKENS);
        require(estimatedMaxCap >= MIN_TICKET_EUR_ULPS, "NF_MAX_FUNDS_LT_MIN_TICKET");
        // min cap must be less than MAX_CAP product limit, otherwise ETO always refunds
        uint256 constraintsMaxInvestment = ETO_TERMS_CONSTRAINTS.MAX_INVESTMENT_AMOUNT_EUR_ULPS();
        uint256 estimatedMinCap = calculateEurUlpsAmount(0, minTokens);
        require(constraintsMaxInvestment == 0 || estimatedMinCap <= constraintsMaxInvestment, "NF_MIN_CAP_GT_PROD_MAX_CAP");
        // ticket size checks
        require(MIN_TICKET_EUR_ULPS >= ETO_TERMS_CONSTRAINTS.MIN_TICKET_SIZE_EUR_ULPS(), "NF_ETO_TERMS_MIN_TICKET_EUR_ULPS");
        uint256 constraintsMaxTicket = ETO_TERMS_CONSTRAINTS.MAX_TICKET_SIZE_EUR_ULPS();
        require(
            constraintsMaxTicket == 0 || // unlimited investment allowed
            (MAX_TICKET_EUR_ULPS <= constraintsMaxTicket), // or max ticket of eto is NOT unlimited and lte the terms allow
            "NF_ETO_TERMS_MAX_TICKET_EUR_ULPS"
        );

        // only allow transferabilty if this is allowed in general
        require(!ENABLE_TRANSFERS_ON_SUCCESS || ETO_TERMS_CONSTRAINTS.CAN_SET_TRANSFERABILITY(), "NF_ETO_TERMS_ENABLE_TRANSFERS_ON_SUCCESS");

        // duration checks
        require(DURATION_TERMS.WHITELIST_DURATION() >= ETO_TERMS_CONSTRAINTS.MIN_WHITELIST_DURATION(), "NF_ETO_TERMS_WL_D_MIN");
        require(DURATION_TERMS.WHITELIST_DURATION() <= ETO_TERMS_CONSTRAINTS.MAX_WHITELIST_DURATION(), "NF_ETO_TERMS_WL_D_MAX");

        require(DURATION_TERMS.PUBLIC_DURATION() >= ETO_TERMS_CONSTRAINTS.MIN_PUBLIC_DURATION(), "NF_ETO_TERMS_PUB_D_MIN");
        require(DURATION_TERMS.PUBLIC_DURATION() <= ETO_TERMS_CONSTRAINTS.MAX_PUBLIC_DURATION(), "NF_ETO_TERMS_PUB_D_MAX");

        uint256 totalDuration = DURATION_TERMS.WHITELIST_DURATION() + DURATION_TERMS.PUBLIC_DURATION();
        require(totalDuration >= ETO_TERMS_CONSTRAINTS.MIN_OFFER_DURATION(), "NF_ETO_TERMS_TOT_O_MIN");
        require(totalDuration <= ETO_TERMS_CONSTRAINTS.MAX_OFFER_DURATION(), "NF_ETO_TERMS_TOT_O_MAX");

        require(DURATION_TERMS.SIGNING_DURATION() >= ETO_TERMS_CONSTRAINTS.MIN_SIGNING_DURATION(), "NF_ETO_TERMS_SIG_MIN");
        require(DURATION_TERMS.SIGNING_DURATION() <= ETO_TERMS_CONSTRAINTS.MAX_SIGNING_DURATION(), "NF_ETO_TERMS_SIG_MAX");

        require(DURATION_TERMS.CLAIM_DURATION() >= ETO_TERMS_CONSTRAINTS.MIN_CLAIM_DURATION(), "NF_ETO_TERMS_CLAIM_MIN");
        require(DURATION_TERMS.CLAIM_DURATION() <= ETO_TERMS_CONSTRAINTS.MAX_CLAIM_DURATION(), "NF_ETO_TERMS_CLAIM_MAX");

        return true;
    }

    //
    // Implements IContractId
    //

    function contractId() public pure returns (bytes32 id, uint256 version) {
        return (0x3468b14073c33fa00ee7f8a289b14f4a10c78ab72726033b27003c31c47b3f6a, 3);
    }

    ////////////////////////
    // Private methods
    ////////////////////////

    function calculateContributionPrivate(
        address investor,
        uint256 totalContributedEurUlps,
        uint256 existingInvestorContributionEurUlps,
        uint256 newInvestorContributionEurUlps,
        bool applyWhitelistDiscounts
    )
        private
        constant
        returns (
            bool isWhitelisted,
            uint256 minTicketEurUlps,
            uint256 maxTicketEurUlps,
            uint256 equityTokenInt,
            uint256 fixedSlotEquityTokenInt
        )
    {
        uint256 discountedAmount;
        minTicketEurUlps = MIN_TICKET_EUR_ULPS;
        maxTicketEurUlps = MAX_TICKET_EUR_ULPS;
        WhitelistTicket storage wlTicket = _whitelist[investor];
        // check if has access to discount
        isWhitelisted = wlTicket.fullTokenPriceFrac > 0;
        // whitelist use discount is possible
        if (applyWhitelistDiscounts) {
            // can invest more than general max ticket
            maxTicketEurUlps = max(wlTicket.discountAmountEurUlps, maxTicketEurUlps);
            // can invest less than general min ticket
            if (wlTicket.discountAmountEurUlps > 0) {
                minTicketEurUlps = min(wlTicket.discountAmountEurUlps, minTicketEurUlps);
            }
            if (existingInvestorContributionEurUlps < wlTicket.discountAmountEurUlps) {
                discountedAmount = min(newInvestorContributionEurUlps, wlTicket.discountAmountEurUlps - existingInvestorContributionEurUlps);
                // discount is fixed so use base token price
                if (discountedAmount > 0) {
                    // always round down when calculating tokens
                    fixedSlotEquityTokenInt = discountedAmount / calculatePriceFraction(wlTicket.fullTokenPriceFrac);
                    // todo: compute effective amount spent without the rounding
                    // discountAmount = fixedSlotEquityTokenInt *  calculatePriceFraction(wlTicket.fullTokenPriceFrac);
                }
            }
        }
        // if any amount above discount
        uint256 remainingAmount = newInvestorContributionEurUlps - discountedAmount;
        if (remainingAmount > 0) {
            if (applyWhitelistDiscounts && WHITELIST_DISCOUNT_FRAC > 0) {
                // will not overflow, WHITELIST_DISCOUNT_FRAC < Q18 from constructor, also round down
                equityTokenInt = remainingAmount / calculatePriceFraction(10**18 - WHITELIST_DISCOUNT_FRAC);
                // todo: compute effective amount spent without the rounding
                // remainingAmount = equityTokenInt * calculatePriceFraction(10**18 - WHITELIST_DISCOUNT_FRAC);
            } else {
                // use pricing along the curve
                equityTokenInt = calculateTokenAmount(totalContributedEurUlps + discountedAmount, remainingAmount);
                // todo: remove function above and calculate directly
                // remainingAmount = equityTokenInt * fullPrice;
            }
        }
        // should have all issued tokens
        equityTokenInt += fixedSlotEquityTokenInt;
        // todo: return remainingAmount as effective amount spent for the least gas used
    }

    function addWhitelistInvestorPrivate(
        address investor,
        uint256 discountAmountEurUlps,
        uint256 fullTokenPriceFrac
    )
        private
    {
        require(investor != address(0));
        // allow full token price and discount amount to be both 0 to allow deletions
        require((fullTokenPriceFrac > 0 || discountAmountEurUlps == 0) && fullTokenPriceFrac <= 10**18, "NF_DISCOUNT_RANGE");
        require(discountAmountEurUlps < 2**128);


        _whitelist[investor] = WhitelistTicket({
            discountAmountEurUlps: uint128(discountAmountEurUlps),
            fullTokenPriceFrac: uint128(fullTokenPriceFrac)
        });

        emit LogInvestorWhitelisted(investor, discountAmountEurUlps, fullTokenPriceFrac);
    }

    function calculateAvailableTokens(uint256 amountWithFee)
        private
        constant
        returns (uint256)
    {
        return PlatformTerms(UNIVERSE.platformTerms()).calculateAmountWithoutFee(amountWithFee);
    }
}
