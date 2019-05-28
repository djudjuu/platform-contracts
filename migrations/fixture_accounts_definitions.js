import fromPairs from "lodash";

const accounts = {
  DEPLOYER: {
    address: "0x8a194c13308326173423119F8dCb785CE14C732B",
    type: "external",
    seed:
      "bread sick proud swift orchard wish model mammal brass ready dinner pave runway can twelve best bundle filter stuff sister paddle kangaroo keep supply",
    derivationPath: null,
    privateKey: "0x2a9f4a59835a4cd455c9dbe463dcdf1b11b937e610d005c6b46300f0fa98d0b1",
    notes: "this has access to all roles in contracts",
  },
  DEPLOYER_UNIVERSE: {
    address: "0x30fD2af22459B61F5bdfdDcaeF9BFaD6AcBF9fDC",
    type: "external",
    seed:
      "submit defy item boss situate isolate purse major retire nothing mammal usual boil hope sentence group vivid clutch another indoor slam illegal street dust",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x7ccdc091ae2a3cccb338d1aa00f8ec7ff60f30abb9a447a17fe3326ebc0849f1",
    notes: "used ONLY to deploy UNIVERSE so this address never changes, do not touch, do not use!",
  },
  INV_ETH_ICBM_NO_KYC: {
    address: "0x429123b08DF32b0006fd1F3b0Ef893A8993802f3",
    type: "investor",
    seed:
      "argue resemble sustain tattoo know goat parade idea science okay loan float solution used order dune essay achieve illness keen guitar stumble idea strike",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x79177f5833b64c8fdcc9862f5a779b8ff0e1853bf6e9e4748898d4b6de7e8c93",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 8372.18218,
    },
  },
  INV_ETH_ICBM_NO_KYC_2: {
    address: "0xDE185A5c2Bd3913fAC1F64102e3DEFD9E1797C4d",
    type: "investor",
    seed:
      "force squeeze drift rigid dizzy cave random menu gap pudding trip elevator bleak essence decide camp screen glass oppose possible bunker piece merit much",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x26725897cd95531f8f06c963a29424af96ca61684f619316752112702d58e0b0",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 12871.18212,
    },
  },
  INV_EUR_ICBM_HAS_KYC: {
    address: "0xE6Ad2CdBA2FB15504232eBFa82f64c06c87F9326",
    type: "investor",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "juice chest position grace weather matter turn delay space abuse winter slice tell flip use between crouch shop open leg elegant bracket lamp day",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xb8c9391742bcf13c2efe56aa8d158ff8b50191a11d9fe5021d8b31cd86f96f46",
    balances: {
      etherToken: 387.198273981,
      euroToken: 0,
      initialEth: 8372.388182,
    },
  },
  INV_EUR_ICBM_HAS_KYC_2: {
    address: "0x619f0a73f02b8ac8F58440c21E15A461E69011a5",
    type: "investor",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "artwork orbit lobster supreme auto orphan quick neither stumble brown museum merit light over cube split nation divide submit diary intact junior win lens",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x42869be50f95ccdb68c21efe2af9a3a318325b191ea86b92a54bee6c1944efa6",
    balances: {
      etherToken: 10,
      euroToken: 0,
      initialEth: 6719.2717172,
    },
  },
  INV_EUR_ICBM_HAS_KYC_SEED: {
    address: "0xB3a2eb675288Bff642F5036235ffb541a4289E71",
    type: "investor",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "ribbon unfair dial explain device weather future version wood buyer finish purchase hair million sample forward join praise input violin mercy business purse weekend",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x4d17a67ae5e8eae9b9c86d9bc8386d83fd1c40081fa5bad7dc370d3134849a7f",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 7363.2281,
    },
  },
  INV_EUR_ICBM_HAS_KYC_SEED_2: {
    address: "0x7b85041Fe5E05A31a961445c3321EE426015D45F",
    type: "investor",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "collect oval chimney manual fancy volcano summer fish twice runway cradle filter polar bless dune flame erupt angle fly dinosaur gather bronze seek silver",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0xf8d1d4e602186bfd0b3363c54ed403d97a8041fe5703c46f8e60df92903259d3",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 3467.2717,
    },
  },
  INV_ETH_EUR_ICBM_M_HAS_KYC: {
    address: "0xDf5F67E6e4c643a2ceD1f9De88A5da42E1507eFD",
    type: "investor",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    seed:
      "then route cage lyrics arrange car pigeon gas rely canoe turn all weapon pepper lemon festival joy option drama forget tortoise useful canvas viable",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xfd4f06f51658d687910bb3675b5c093d4f93fff1183110101e0101fa88e08e5a",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 28737.18182,
    },
    icbmMigrations: {
      etherToken: true,
      euroToken: true,
    },
    etoParticipations: {
      whitelist: {
        ETOInWhitelistState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInPublicState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInSigningState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInPayoutState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInRefundState: {
          discountAmount: 500000,
          discount: 0.5,
        },
      },
    },
  },
  INV_ETH_EUR_ICBM_M_HAS_KYC_DUP: {
    address: "0x7824e49353BD72E20B61717cf82a06a4EEE209e8",
    type: "investor",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    seed:
      "escape filter champion bring denial siege cactus vivid used march smile over ocean repeat poet word media fluid fluid quantum faculty tattoo attract crush",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x03e568e86b296b69d51c364053f39d7f76b76799654fa6be22b48e902b0c04ec",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 8762.7271,
    },
    icbmMigrations: {
      etherToken: true,
      euroToken: true,
    },
    etoParticipations: {
      whitelist: {
        ETOInWhitelistState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInPublicState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInSigningState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInClaimState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInPayoutState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInRefundState: {
          discountAmount: 500000,
          discount: 0.5,
        },
      },
    },
  },
  INV_ETH_EUR_ICBM_M_HAS_KYC_DUP_HAS_NEUR_AND_NO_ETH: {
    address: "0xA622f39780fC8722243b49ACF3bFFEEb9B9201F2",
    type: "investor",
    identityClaims: {
      isVerified: true,
    },
    shouldHaveEther: false,
    seed:
      "kid welcome lion describe repair champion submit sing sugar vault avoid jar adapt little page boost happy sing vivid stone web rescue grape bicycle",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x6e6030bc2d1abf8147c6f3617b55c9fdef4814c075f8c4c192695b55cacdbf88",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 4653.17271,
    },
    icbmMigrations: {
      etherToken: true,
      euroToken: true,
    },
    etoParticipations: {
      whitelist: {
        ETOInWhitelistState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInPublicState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInSigningState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInClaimState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInPayoutState: {
          discountAmount: 500000,
          discount: 0.5,
        },
        ETOInRefundState: {
          discountAmount: 500000,
          discount: 0.5,
        },
      },
    },
  },
  INV_ICBM_ETH_M_HAS_KYC: {
    address: "0x139Fab72691f03eA1589A847b110096c7cD56e35",
    type: "investor",
    identityClaims: {
      isVerified: true,
      isSophisticatedInvestor: true,
    },
    seed:
      "mimic lumber mother guide coil theory elite fly tiny wink seed issue cupboard limb luggage reflect ladder menu menu still deny basket spring evil",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x5898803e5e8d401d1a9b97003ba39cdb9ab2997ccd9555fd5e8191401ad8bb37",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 21365.289082,
    },
    icbmMigrations: {
      etherToken: true,
    },
    etoParticipations: {
      sale: {
        ETOInWhitelistState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInPublicState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInSigningState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInClaimState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInPayoutState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInRefundState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
      },
      claim: ["ETOInPayoutState"],
    },
  },
  INV_ICBM_ETH_M_HAS_KYC_DUP: {
    address: "0xF7784a74Cc59d1e6e1C10ca2053f34D68d280aE7",
    type: "investor",
    identityClaims: {
      isVerified: true,
      isSophisticatedInvestor: true,
    },
    seed:
      "subject loan retire wash stairs joke dry boy submit already tuition sponsor focus small giggle tornado smile wheel income pudding palm zone tragic property",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0xdf6419aea83e2c8fbcba5aafee313ce55ded93b89b1b60853e95af09ca2f792b",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 7638.2891,
    },
    icbmMigrations: {
      etherToken: true,
    },
    etoParticipations: {
      sale: {
        ETOInWhitelistState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInPublicState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInSigningState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInClaimState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInPayoutState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInRefundState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
      },
      claim: ["ETOInPayoutState"],
    },
  },
  INV_ICBM_ETH_M_HAS_KYC_DUP_2: {
    address: "0xFa8ae4e924e14C834Ad48238a55A24Af97A8f3F3",
    type: "investor",
    identityClaims: {
      isVerified: true,
      isSophisticatedInvestor: true,
    },
    seed:
      "long ordinary situate fashion crime razor salon impact science powder aisle extra midnight dream hurt plastic bless soon viable abandon insect fabric hope brown",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x85e93122c429e8d4422016262b5a81437d8257457eb85aa2c393c3b0f5e3ea91",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 58732.198212,
    },
    icbmMigrations: {
      etherToken: true,
    },
    etoParticipations: {
      sale: {
        ETOInWhitelistState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInPublicState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInSigningState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInClaimState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInPayoutState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInRefundState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
      },
      claim: ["ETOInPayoutState"],
    },
  },
  INV_ICBM_ETH_M_HAS_KYC_DUP_HAS_NEURO: {
    address: "0x4A20381D628AEEc776335a89bb32106a8F9d4323",
    type: "investor",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "subway ritual clarify city picnic mean trip vocal neglect candy gaze parrot rocket typical hammer nasty library govern engage afford smooth wild rookie able",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x6935e67ba2870b1f236ce99fc34048b4b80ddb86f981e4c7241cab00a31583b7",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 76125.87981,
    },
    icbmMigrations: {
      etherToken: true,
      euroToken: true,
    },
    etoParticipations: {
      sale: {
        ETOInWhitelistState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInPublicState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInSigningState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInClaimState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInPayoutState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
        ETOInRefundState: {
          ETH: {
            wallet: 0,
            icbm: 3.71621,
          },
        },
      },
      claim: ["ETOInPayoutState"],
    },
  },
  INV_ICBM_EUR_M_HAS_KYC: {
    address: "0x6d65815Fcd587FAAe5dac7D6ce65De5d56BCF5E7",
    type: "investor",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    seed:
      "behind cool coyote edit have demise arena glare early embrace potato tray unit repair shine huge duty hybrid relax cage embrace cinnamon please hip",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0xd362d7c486ab49a91649dc9ccdff59186a74f1f2ea5d7cf0ed322a53a3849fbd",
    balances: {
      etherToken: 0,
      euroToken: 1271.1988,
    },
    icbmMigrations: {
      euroToken: true,
    },
    etoParticipations: {
      presale: {
        ETOInWhitelistState: {
          EUR: {
            wallet: 0,
            icbm: 100000,
          },
        },
        ETOInPublicState: {
          EUR: {
            wallet: 0,
            icbm: 100000,
          },
        },
        ETOInSigningState: {
          EUR: {
            wallet: 0,
            icbm: 100000,
          },
        },
        ETOInClaimState: {
          EUR: {
            wallet: 0,
            icbm: 100000,
          },
        },
        ETOInPayoutState: {
          EUR: {
            wallet: 0,
            icbm: 100000,
          },
        },
        ETOInRefundState: {
          EUR: {
            wallet: 0,
            icbm: 100000,
          },
        },
      },
    },
  },
  INV_HAS_EUR_HAS_KYC: {
    address: "0xfA1Af2E251ee739F83e14d7daCfd77B3d0E930b7",
    type: "investor",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
      initialEth: 16781.9328,
    },
    seed:
      "orange iron recycle unusual cannon theory myth echo dizzy prefer arrange ugly fatigue sell rain burden meadow tiny tone spy glance agent catalog clock",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0xc59be517c85798dfd8c8fefaec316a08dde716e7bb194471c0b9955f23b313cf",
    balances: {
      etherToken: 0,
      euroToken: 10278127.1988,
      initialEth: 7638.1829,
    },
    etoParticipations: {
      whitelist: {
        ETOInWhitelistState: {
          discountAmount: 0,
          discount: 0,
        },
        ETOInPublicState: {
          discountAmount: 0,
          discount: 0,
        },
        ETOInSigningState: {
          discountAmount: 0,
          discount: 0,
        },
        ETOInClaimState: {
          discountAmount: 0,
          discount: 0,
        },
        ETOInPayoutState: {
          discountAmount: 0,
          discount: 0,
        },
        ETOInRefundState: {
          discountAmount: 0,
          discount: 0,
        },
      },
      presale: {
        ETOInWhitelistState: {
          ETH: {
            wallet: 289,
            icbm: 0,
          },
        },
        ETOInPublicState: {
          ETH: {
            wallet: 289,
            icbm: 0,
          },
        },
        ETOInSigningState: {
          ETH: {
            wallet: 289,
            icbm: 0,
          },
        },
        ETOInClaimState: {
          ETH: {
            wallet: 289,
            icbm: 0,
          },
        },
        ETOInPayoutState: {
          ETH: {
            wallet: 289,
            icbm: 0,
          },
        },
        ETOInRefundState: {
          ETH: {
            wallet: 289,
            icbm: 0,
          },
        },
      },
      claim: ["ETOInPayoutState"],
    },
  },
  INV_HAS_ETH_T_NO_KYC: {
    address: "0x6C6f9115BE53c4424016f28d916196B29fF222dF",
    type: "investor",
    seed:
      "jar inform salt amused such world rate theory write drama feed save permit oval flower confirm soda mirror flash canvas casino bar warrior neglect",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x203be4ed7f7664d101c4624886d411b29afc22d688b733fbb5bbd783b860ca8e",
    balances: {
      etherToken: 1187.198273981,
      euroToken: 0,
      initialEth: 1188.198273981,
    },
  },
  INV_EMPTY_HAS_KYC: {
    address: "0x934e2B3d66B5725F17EB271A4ae7a35449Eb5cAf",
    type: "investor",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "urban boat between afraid duty yard title clerk basket glow photo level pottery bracket volume jump accident pistol scheme clever load hill shaft farm",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x5ce0831c27f636592006db7c3e5df45a00d6c29bf276066332bb87131e82a9bf",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 0,
    },
  },
  NOMINEE_NEUMINI: {
    address: "0xCB6470fa4b5D56C8f494e7c1CE56B28c548931a6",
    type: "nominee",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "faint inject car announce few flee sun sibling scheme dance oil garage pretty giggle blood box hybrid swift goose timber vanish good subway coffee",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x1354699398f5b5f518b9714457a24a872d4746561da0648cbe03d1785b6af649",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
  },
  ISSUER_SETUP: {
    address: "0x74180B56DD74BC56a2E9D5720F39247c55F23328",
    type: "issuer",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "rare work reason ladder hurdle junior moment sad lens panic random photo cave essence simple better merit stage road that humor term assist arrange",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x941a09e617aeb905e13c58d700d48875d5f05eeec1de1981d3227e3bbc72b689",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
  },
  ISSUER_WHITELIST: {
    address: "0x8e75544B848F0a32a1Ab119E3916Ec7138f3Bed2",
    type: "issuer",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "clarify picnic oppose degree live place want slot hospital motion voyage rent dawn daughter space image unable alone romance output maze inch addict way",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x9be0993812c14583c58e4456cce1ab50ce9bd8e891eb754518c13cffc27b95c3",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
  },
  ISSUER_PUBLIC: {
    address: "0x36Cec7081d2528a42D56fC1571D6D234dd2608EC",
    type: "issuer",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "month voyage ring assist airport head balance engine farm chicken vibrant noble useful more basic stable quiz slab lizard blind sadness already tribe addict",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x718e461177f610488c59a09f15c5a0b80e4ae864c0cb60a44de2de3d0b34830e",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
    notes: "etoissuer3",
  },
  ISSUER_SIGNING: {
    address: "0xC8f867Cf4Ed30b4fF0Aa4c4c8c6b684397B219B0",
    type: "issuer",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "skull broom ripple hour owner hurry render roof disagree drum eye narrow essay country unusual sadness jealous waste margin document east guitar tunnel dolphin",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x45f9d8f48f127a4804bcd313f26f6e5cc9f1c0f6d2eae1850b935f68af417d15",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
  },
  ISSUER_CLAIMS: {
    address: "0x6A57FeBaE70BfC83c64835eA58240958fba328ff",
    type: "issuer",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "recall insane member poet resemble mirror royal skull observe hope avoid present broom salt twin document gorilla wage notice page tide idle cram exotic",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x30447bbdbd68e220201e1fb838e79c36f3977f1bc768c8bf8a9a14a6b5522436",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
  },
  ISSUER_PAYOUT: {
    address: "0x95137084d1b6F58D177523De894293913394aA12",
    type: "issuer",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "kind between patch dream voyage silver arm cannon ring frozen annual small eager ribbon lumber sentence vendor unfold smoke welcome involve become marine urge",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xf358d59968b9b281390d47cb99ae606f1260901b83feb32445f007a83a4879fa",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
    notes: "etoissuer4",
  },
  ISSUER_REFUND: {
    address: "0x51305B1CC683dedF60b39E92AeF52f4e09E9E781",
    type: "issuer",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "volcano eye expire jaguar tail zero shrug trip creek glass receive adult shift anger ceiling man twist census blood bubble resist jelly wine cost",
    derivationPath: "m/44'/60'/0'/0/0	",
    privateKey: "0x6d4f48d431844fbe77f56e34f0813b2193d02ae3e514491b5a98d487931a4a3c",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
  },
  ISSUER_SETUP_NO_ST: {
    address: "0xd9C46960cE6bE33BbED615087ABbD35Fda77d42C",
    type: "issuer",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "pair half example curious then expose mosquito sadness entry hard pulse vendor goose random target frown slam panda orange custom man purse foster marble",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x9e16f58b0e2c8d4cb335a113485dc6397be601086a89051625a906f039224ee9",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
    notes: "etoissuer2",
  },
  ISSUER_PREVIEW: {
    address: "0x239fD29638c8f42e2675d84455a632157152df46",
    type: "issuer",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "indoor travel birth trial squirrel where dog trial culture couch mansion undo rural private lazy error pluck feel leaf open hover treat spirit merit",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x41db9214402eb72c1a5ddbb2475996205e33ba9c2cd96fd0e07d78927c5d7a74",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
    notes: "etoissuer1",
  },
  ISSUER_PENDING: {
    address: "0x0A00992Aea13E8E10287b577256717Aa4910a0Bb",
    type: "issuer",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "undo seek ball wagon dove region despair mountain unit paddle limb rather puppy slot disagree thunder execute garage stone use first session finger detail",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0xb5848686d0bc7e90cf0af17d539dc594d8ad5e4676f19a3e5cd7b49f7a4628e9",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
  },
  ISSUER_LISTED: {
    address: "0x007fF055641147d0a170a7A73B00F0eeb2f07f12",
    type: "issuer",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "credit short venture what speak castle embark nurse juice wild holiday pulp mixed gas jelly bachelor soft novel game matrix faculty vote argue black",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x73d36b0a24c4fd181a718672c627fd0caadd8d9ac0df72267f89f8f117d2fd39",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
  },
  ISSUER_PROSPECTUS_APPROVED: {
    address: "0x4B07fd23BAA7198061caEd44cF470B0F20cE1b7e",
    type: "issuer",
    identityClaims: {
      isVerified: true,
    },
    seed:
      "pulp car away mind fuel say swear language fade auto bottom body blame regular account cruise bread update clap language soup diagram man gate",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x2b7dc7e315fdd1192f5c9240f9ddd1032f7696107f0d177599e1a362f1e8e054",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
  },
  SPARE_1: {
    address: "0x9369dFD79049B7C3CF48d54435287b0AFd5227Da",
    type: "investor",
    identityClaims: {
      isVerified: true,
      hasBankAccount: false,
      isSophisticatedInvestor: false,
    },
    seed:
      "morning panther view ahead fashion client shallow sustain tool cost illegal wish alter demise extend trend task glory alert hurdle rail fragile vital about",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0xcc5e22b1568ea35e732a0952f6d873fd06190add23bfafe312afbb465f2d98c6",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
  },
  SPARE_2: {
    address: "0xE52Df6021c75f8DDf20Ab4dfC818Bce84f7cBD5D",
    type: "investor",
    identityClaims: {
      isVerified: true,
      hasBankAccount: false,
      isSophisticatedInvestor: false,
    },
    seed:
      "winter emerge indoor gather check ketchup fiction rotate actress hammer antenna brown bubble primary fury various put gallery scheme reform harsh inflict agent ball",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x87d63fa9252e2bdc5122559618c3726fe5f4539ab94b5220d1060b7df498f199",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
  },
  SPARE_3: {
    address: "0x798fD195575d195B9Bb9619ffb905E434f044f1D",
    type: "investor",
    identityClaims: {
      isVerified: true,
      hasBankAccount: false,
      isSophisticatedInvestor: false,
    },
    seed:
      "cricket index proud frame aerobic swear certain decrease vacant quick clock fantasy flock napkin puzzle tackle pony camp test property one garlic voice decline",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0xbd3861e2a5999d22a99531f8b028e7ea15e788625a8fd19dd4959479fb93dc6f",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
  },
  SPARE_4: {
    address: "0xC35ef5DA2607C70D812cA2F317E9958910450dF1",
    type: "investor",
    identityClaims: {
      isVerified: true,
      hasBankAccount: false,
      isSophisticatedInvestor: false,
    },
    seed:
      "tourist voice pilot search buyer parrot maid flush pulse silver void liar provide cushion burden mean relax oven plastic vessel grunt black twice vast",
    derivationPath: "m/44'/60'/0'/0/0",
    privateKey: "0x797a981f658de6799b6dc1b079a6af3f4feaea5f23133f3c2c054ddfeee60ab8",
    balances: {
      etherToken: 0,
      euroToken: 0,
      initialEth: 5,
    },
    etoParticipations: {
      whitelist: {
        ETO: {
          discountAmount: 0,
          discount: 0,
        },
      },
      presale: {
        ETO: {
          ETH: {
            wallet: 0,
            icbm: 0,
          },
          EUR: {
            wallet: 0,
            icbm: 0,
          },
        },
      },
      sale: {
        ETO: {
          ETH: {
            wallet: 0,
            icbm: 0,
          },
          EUR: {
            wallet: 0,
            icbm: 0,
          },
        },
      },
      claim: ["ETO"],
    },
  },
  NANO_1: {
    address: "0x79fe3C2DC5da59A5BEad8Cf71B2406Ad22ed2B3D",
    type: "external",
    seed: null,
    derivationPath: null,
    privateKey: null,
  },
  NANO_2: {
    address: "0x97d2e2Bf8EeDB82300B3D07Cb097b8f97Dc5f47C",
    type: "external",
    seed: null,
    derivationPath: null,
    privateKey: null,
  },
  NANO_3: {
    address: "0xaa4689311f3C3E88848CFd90f7dAA25eA2aacDD3",
    type: "external",
    seed: null,
    derivationPath: null,
    privateKey: null,
  },
  demoinvestor1: {
    seed:
      "bitter all rigid special style response forget two dust alien solid crunch solution nose easy discover mango panda runway yellow witness ridge clay economy",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x75df984aa49acb2a3306d513489eed2c4320f3a5f3067216baf4a1037f7958f4",
    address: "0x07D8B4d97F7B21020b332367692e11FDd5036D7b",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor1",
  },
  demoinvestor2: {
    seed:
      "alcohol hidden tornado crime fruit pig want object syrup argue rookie artwork pulp region chimney candy pumpkin below hotel dress result phone spoil print",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x9997cadadfd0df21c3261eafb9cbb82e7416b5894b7bbee6d8cc1052f0b8248f",
    address: "0x62b3f983F037828d76B4925655CC083cfDCd9E13",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor2",
  },
  demoinvestor3: {
    seed:
      "ridge juice churn fade that melt front leisure bracket one fun wait moment stamp title paper face seat certain tail father owner this orphan",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xc8d9c1829d7836c7463074e20d26ec8a9ab28a3466c8aff1c3889b7d4f657feb",
    address: "0x6E577c22f1c5F0021a057CfcE67aC7E630De38F7",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor3",
  },
  demoinvestor4: {
    seed:
      "obvious social rare jewel liquid fix giant sea exchange dilemma brush harsh pistol grief obvious promote visit web pluck imitate wire deliver neutral embrace",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x036b499ec4eb23b9220e6c197e7cb1d408259de13bf923dbfdc4e2cd1be8fbe1",
    address: "0x2824a394B5a3386b3140Bc426E40e24217f0a42f",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor4",
  },
  demoinvestor5: {
    seed:
      "maximum expose wire auction cannon club region always post depth make blame grunt wish lend reflect sword first farm useful net shiver void elbow",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xa0a1069c5773fee34430e0a3e1913fa5d5fb36cd455f793a62375e6664cb50e7",
    address: "0x8b5eCeCafECc6335FcBa939328898d4A3088f906",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor5",
  },
  demoinvestor6: {
    seed:
      "middle pledge deal worry carry actor boil tone country sketch bacon avoid student sponsor often army fitness robot tissue seat spell lab neutral flash",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x2a8818f9bc376234175f60f42724005ccab5542419e64c5af54b8e4feac6979b",
    address: "0x68B4b0274148F062F919C410a8c36078c03398BB",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor6",
  },
  demoinvestor7: {
    seed:
      "rubber rapid infant glance leg robot flight element extend vivid okay cigar clarify crush fun sock travel chat labor sad brick orphan sail release",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xb009c7dd2ef4c79cb86c75c80f125862d0a34409a618233006693d70da788815",
    address: "0x766BD4B833738FEe9Af4d1f330733c489A5f87B7",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor7",
  },
  demoinvestor8: {
    seed:
      "start protect loyal educate predict boss annual select peanut intact pottery moon parade husband mother merit tank path screen ankle breeze derive license awful",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xa1f664be37c3c01f54846936ee2990d1ce84a5c506716cde2386c7eab316093e",
    address: "0x72969Bf8DE31c47380ce21eeBC75BEf26cE31153",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor8",
  },
  demoinvestor9: {
    seed:
      "injury gym rich behave analyst gaze fall loop bean lounge mouse permit thing south seat imitate symbol gift install armed chair control kiss online",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x118d43c8201c0fead3d93341f777674a2f2855f08c579359fc19177fed201e2f",
    address: "0x0566DEA0412Dc4bcb9ef0c4d884E56dADefcB7F3",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor9",
  },
  demoinvestor10: {
    seed:
      "film frame vendor shove excite result beyond asthma milk cause post govern advance bargain rhythm issue trouble obscure thank fatal seek slight crew whip",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xb364dc614242bcc062a63d1aeb446acc9560a1823af5c8b94c91c25fc1d754bf",
    address: "0x0D54192b7C8F126DCd946Ffd03E336B24052EdF2",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor10",
  },
  demoinvestor11: {
    seed:
      "choose mouse peanut cotton reduce scrub immense quarter faculty giant sound left brief snake human siren pear trend garlic matter crystal return family sweet",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x0eaca0bc4bd0c600af0d45ca0eefe513ea342ef28153ab0e62aea0213a79cb64",
    address: "0x353d3030AF583fc0e547Da80700BbD953F330A4b",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor11",
  },
  demoinvestor12: {
    seed:
      "surround kangaroo train tuition dwarf author theory joke blouse report swim network such trust rural help chase abandon wine tip shop spin artwork debate",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x5493cf294af1de506a820e249b5e9e51e4f099a22b6b730091ca03ba786bac77",
    address: "0x5c104a588E47209b7248F4ea17996E9E69A6ADFc",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor12",
  },
  demoinvestor13: {
    seed:
      "crystal heavy name hello hood tiny prosper picnic disagree smooth world barrel update inside cook young ranch milk bargain prevent crash buyer april essay",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x2cfd70c871899cc14501cf46c979b7a0c06e7e679478c5b76d8c3b9652099685",
    address: "0x9CfE167F8f2b9D6A8A6311A766ffb63648e69c04",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor13",
  },
  demoinvestor14: {
    seed:
      "embrace wise evil jeans sight axis magic tool bitter case siren million inform alone jazz industry razor effort state paper symbol crop inside about",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xc7fb10a02bab09874475bf02a2c2eb056e3d4228ffd8b87ec1f6580390f642a1",
    address: "0x4fD82E066C68DdadFc99f98cb4eb50DE4B855A18",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor14",
  },
  demoinvestor15: {
    seed:
      "silk very flat expose seed black broken afraid slot twin crouch cash design dinner laugh tail dignity inside pizza year gauge property valley balcony",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xa5cac03efc48e3596f8d35712f2d2b257ad193585992f72fd6506c131ff7f479",
    address: "0x5989e17aDd9568A715E8330ed5Fac1540161C961",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor15",
  },
  demoinvestor16: {
    seed:
      "mix split then cloud chalk idle foam rich cement pond kangaroo adapt main enough sniff brick current upon fossil border puppy peace alley pipe",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x2e5ca6c7a9aeb4d8a3c6c75fa734704604579dce7924376e3e8bef5d895897b2",
    address: "0x87447BF7D8E1229122B1B088D6eeF07703457ACe",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor16",
  },
  demoinvestor17: {
    seed:
      "citizen puppy office apology horn staff glare float horn legal genuine purpose pudding refuse hurdle insane empty winter neither because frost quantum nose smoke",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xa9ec364e334e3591cc50dc303fd1d9da1ca5a6acc580eca0fe7a3df1bfddb7ee",
    address: "0xF73F063634E0250C5AFA2F72431e3F4783379c24",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor17",
  },
  demoinvestor18: {
    seed:
      "torch alien song senior tray process reduce sense sustain together swarm maximum print embark left race also square april catch agent heavy never party",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x1e93bae6a6b45d68443c98b0f87335a0fdc3e11b207a478260f77160f62b0105",
    address: "0xcB9e5e4CD1267653d5787181fec6202c016277a1",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor18",
  },
  demoinvestor19: {
    seed:
      "little paddle hungry perfect carbon miss poem term soda fortune ship better tell very ten produce certain hedgehog wrong horn absurd ignore long object",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x1dd092f80af2a29540a76c9f0aab31227142bc524e5d6bda9ef18ae0560affc3",
    address: "0x6d0c98717ce99E830DD0EC449E8c52B4915565aC",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor19",
  },
  demoinvestor20: {
    seed:
      "enlist eagle latin circle rack hammer depart shy umbrella topple menu demise grant scissors loan dinosaur success same seed wide always castle work issue",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x40c03bd04344287219d058cd136429a4ffce95dba56401946bfa957de0805cc7",
    address: "0xe33784584Ece52976A0742B50E6D60c2CF76980f",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor20",
  },
  demoinvestor21: {
    seed:
      "load power pair year awesome age corn soap omit ordinary weapon father body old excite clean ginger fine pink glad remember sibling trigger cycle",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x71495df0a9a474445a2badfb5c453adfc549b6785b1d6b11369ffef821cab457",
    address: "0xE8EE4200877Df51A5D871D4e7b6181a7168445D8",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor21",
  },
  demoinvestor22: {
    seed:
      "found funny banana hawk brother afford chase flight scissors require dolphin inherit unknown frown guess clump morning misery cry ceiling vague abuse dinner permit",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xa8cd2bac908f6c2b27ab98f908bb0885a9c13c4711eede3027444c7db0d279a7",
    address: "0x73174Ee5B22cF9ba4413bAe663631C5C9C996D3e",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor22",
  },
  demoinvestor23: {
    seed:
      "tomorrow machine oil impact begin brown shift pig neutral patch divert million tree airport broom forest can wash search plate educate exhaust choice dress",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xaed987bcaf116827bbfcdda8ef7e4e6442e596fd12582e49a0a4cb224847bfea",
    address: "0xC5C10aDbd1A1a835904908FBd734dD729aD6980a",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor23",
  },
  demoinvestor24: {
    seed:
      "ship animal loyal student jaguar hat version beach vacant hurt slogan cry join result common include tape ridge satoshi another champion carry sniff satisfy",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xb3fcc847f47504e6e42d275ca17fd02a1e354d512c9d16c331ae192050710aac",
    address: "0x92a0f60DE33f5f0952F8c60336dc6b8133e3DB5d",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    type: "investor",
    name: "demoinvestor24",
  },
  demoinvestor25: {
    seed:
      "client twenty physical decline save alpha excess certain mixed comic ghost jungle stem month friend vocal tattoo ship ball inflict ignore fame home muffin",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x76260b249171519e51452ce241c81c0a8ec2e72ec14eb9f2877e366e6cde2a6c",
    address: "0xB0DC0110d14E483CE3A43390fDd185BA458769A9",
    identityClaims: {
      isVerified: false,
    },
    type: "investor",
    name: "demoinvestor25",
  },
  demoinvestor26: {
    seed:
      "master expire lounge siege throw square shove rotate section goose basket train afford hard that arrest seed drip castle kidney mushroom balance jacket public",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x978f7f6952f87f27b14e516d7a6e3e27d8d20c5b7e5a6ac834c1b56e4229c016",
    address: "0x8D6Df43c57d4fBC12948Bb7FA8ee87AF72DAc1A0",
    identityClaims: {
      isVerified: false,
    },
    type: "investor",
    name: "demoinvestor26",
  },
  demoinvestor27: {
    seed:
      "actress mad occur divorce hundred february blood error home antenna rural rather garlic also tell asset burst cave loop inject seven accuse pudding unusual",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xec24dcfc91a71f519fa5a83e43da3b40fbb9f6fda426d7975e224677ce94c4ee",
    address: "0x504332aFbcbA7D4A71d5aa432F4B8C54D5b1626A",
    identityClaims: {
      isVerified: false,
    },
    type: "investor",
    name: "demoinvestor27",
  },
  demoinvestor28: {
    seed:
      "anger patrol feed protect siren gap uncover light shoot execute test runway hammer place visit patch family code hedgehog mom turtle useful wasp sad",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x2cb839919382e4bbdd08903d18b499cd37d9549c32b296801212578564348ffb",
    address: "0x9679ce376a40700E889e57F736B4D52De7806c39",
    identityClaims: {
      isVerified: false,
    },
    type: "investor",
    name: "demoinvestor28",
  },
  demoinvestor29: {
    seed:
      "manual inquiry mammal genuine village eyebrow loyal security opinion caught drum shadow real treat clutch deal inherit together topple universe lyrics front provide hat",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0xe226eee0aa21413bcd201a349a42c76d83ed82c68ce0de56f6443687a168fd33",
    address: "0x557eAB5FD06158EFC3a892b6027C88fE4D44fC17",
    identityClaims: {
      isVerified: false,
    },
    type: "investor",
    name: "demoinvestor29",
  },
  demoinvestor30: {
    seed:
      "document stock age bounce diamond scale produce flavor napkin defense gold online bronze defense seven bomb target height suffer tell cargo derive marble coconut",
    derivationPath: "m/44'/60'/0'/0",
    privateKey: "0x508034a99519bb473217d6011b96b62802b5b1a03319b847997db849bce08888",
    address: "0x9bB148c453a6aeA6759695C8da0D0918c8F494E9",
    type: "investor",
    identityClaims: {
      isVerified: true,
      hasBankAccount: true,
    },
    name: "demoinvestor30",
  },
};

const standardInvestorWithKyc = {
  balances: {
    etherToken: 0,
    euroToken: 745000,
    initialEth: 543,
  },
  etoParticipations: {
    whitelist: {
      ETOInPublicState: { discount: 0.5, discountAmount: 10000 },
    },
    presale: { ETOInPublicState: { ETH: { wallet: 28.18 } } },
    sale: { ETOInPayoutState: { ETH: { wallet: 128.17 }, EUR: { wallet: 15000 } } },
    claim: ["ETOInPayoutState"],
  },
};

const standardInvestorNoKyc = {
  balances: {
    initialEth: 100,
  },
};

// now when I look at this I think loop would be better...
export const fixtures = Object.assign(
  accounts,
  fromPairs(
    Object.keys(accounts)
      .filter(a => a.startsWith("demoinvestor") && accounts[a].identityClaims.isVerified)
      .map(a => [a, Object.assign(accounts[a], standardInvestorWithKyc)]),
  ),
  fromPairs(
    Object.keys(accounts)
      .filter(a => a.startsWith("demoinvestor") && !accounts[a].identityClaims.isVerified)
      .map(a => [a, Object.assign(accounts[a], standardInvestorNoKyc)]),
  ),
);

// lodash apparently added this
delete fixtures.__wrapped__;
delete fixtures.__chain__;
delete fixtures.__actions__;
delete fixtures.__index__;
delete fixtures.__values__;