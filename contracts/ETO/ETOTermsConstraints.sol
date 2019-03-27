pragma solidity 0.4.25;

import "../Standards/IContractId.sol";


/// @title sets the contraints of the eto
contract ETOTermsConstraints is IContractId {


    ////////////////////////
    // Types
    ////////////////////////
    enum OfferingDocumentType {
        Memorandum,
        Prospectus
    }

    enum OfferingDocumentSubType {
        Regular,
        Lean
    }

    enum AssetType {
        Security,
        VMA // Vermögensanlage
    }

    enum Jurisdiction {
        DE, // germany
        LI // Liechtenstein
    }

    ////////////////////////
    // Immutable state
    ////////////////////////

    // min duration from setting the date to ETO start
    uint256 public constant DATE_TO_WHITELIST_MIN_DURATION = 7 days;

    // duration constraints
    uint256 public constant MIN_WHITELIST_DURATION = 0 days;
    uint256 public constant MAX_WHITELIST_DURATION = 30 days;
    uint256 public constant MIN_PUBLIC_DURATION = 0 days;
    uint256 public constant MAX_PUBLIC_DURATION = 60 days;

    // minimum length of whole offer
    uint256 public constant MIN_OFFER_DURATION = 1 days;
    // quarter should be enough for everyone
    uint256 public constant MAX_OFFER_DURATION = 90 days;

    uint256 public constant MIN_SIGNING_DURATION = 14 days;
    uint256 public constant MAX_SIGNING_DURATION = 60 days;

    uint256 public constant MIN_CLAIM_DURATION = 7 days;
    uint256 public constant MAX_CLAIM_DURATION = 30 days;

    // defines wether transfers are allowed after the eto ends
    bool public CAN_SET_TRANSFERABILITY;

    // defines wether a nominee is needed in the investment structure
    bool public HAS_NOMINEE;

    // minimum ticket size for this investment type
    uint256 public MIN_TICKET_SIZE_EUR_ULPS;
    // maximum ticket size for this investment type
    uint256 public MAX_TICKET_SIZE_EUR_ULPS;
    // minimum total investment amount this investment type
    uint256 public MIN_INVESTMENT_AMOUNT_EUR_ULPS;
    // maximum total investment amount this investment type
    uint256 public MAX_INVESTMENT_AMOUNT_EUR_ULPS;

    // public name
    string public NAME;

    // spec of the required offering document
    OfferingDocumentType public OFFERING_DOCUMENT_TYPE;
    OfferingDocumentSubType public OFFERING_DOCUMENT_SUB_TYPE;

    // jurisdiction in which the ETO will be conducted
    Jurisdiction public JURISDICTION;

    // legal type of asset that will be used
    AssetType public ASSET_TYPE;


    ////////////////////////
    // Constructor
    ////////////////////////

    constructor(
        bool canSetTransferability,
        bool hasNominee,
        uint256 minTicketSizeEurUlps,
        uint256 maxTicketSizeEurUlps,
        uint256 minInvestmentAmountEurUlps,
        uint256 maxInvestmentAmountEurUlps,
        string name,
        OfferingDocumentType offeringDocumentType,
        OfferingDocumentSubType offeringDocumentSubType,
        Jurisdiction jurisdiction,
        AssetType assetType
    )
        public
    {   
        require(minTicketSizeEurUlps<=maxTicketSizeEurUlps);
        require(minInvestmentAmountEurUlps<=maxInvestmentAmountEurUlps);
        require(minTicketSizeEurUlps<=maxInvestmentAmountEurUlps);
        require(maxTicketSizeEurUlps>0);
        require(maxInvestmentAmountEurUlps>0);


        CAN_SET_TRANSFERABILITY = canSetTransferability;
        HAS_NOMINEE = hasNominee;
        MIN_TICKET_SIZE_EUR_ULPS = minTicketSizeEurUlps;
        MAX_TICKET_SIZE_EUR_ULPS = maxTicketSizeEurUlps;
        MIN_INVESTMENT_AMOUNT_EUR_ULPS = minInvestmentAmountEurUlps;
        MAX_INVESTMENT_AMOUNT_EUR_ULPS = maxInvestmentAmountEurUlps;
        NAME = name;
        OFFERING_DOCUMENT_TYPE = offeringDocumentType;
        OFFERING_DOCUMENT_SUB_TYPE = offeringDocumentSubType;
        JURISDICTION = jurisdiction;
        ASSET_TYPE = assetType;
    }

    //
    // Implements IContractId
    //
    function contractId() public pure returns (bytes32 id, uint256 version) {
        return (0x277dd384c6724be17e45c87c435d78a0384bfb93c0118a888ee7b4c75df9314b, 0);
    }

}
