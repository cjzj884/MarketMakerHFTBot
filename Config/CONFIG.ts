export default {};

export const BITTREX = {
    MARKETS_TO_MONITOR: ["ETH-MCO", "BTC-BCH", "BTC-NEO"],
    START_BTC_QUANTITY: 0.00060000,
    START_ETH_QUANTITY: 0.025,
    TRANSACTION_FEE_PERCENTAGE: 0.25,
    ORDER_WATCH_INTERVAL_IN_MS: 100,
    TICK_POLL_INTERVAL_IN_MS: 100,
    SPAM_ORDER_MONITORING_DELAY_IN_MS: 500,
    API_RATE_LIMIT: null,

    MIN_QTY_TO_TRADE: { "BTC-LTC": 0.02879846, "BTC-DOGE": 1190.47619048, "BTC-VTC": 0.44786815, "BTC-PPC": 0.79390283,
                        "BTC-FTC": 9.15080527, "BTC-RDD": 2272.72727273, "BTC-NXT": 13.53546291, "BTC-DASH": 0.00318963,
                        "BTC-POT": 7.60109456, "BTC-BLK": 8.57927248, "BTC-EMC2": 5.23341009, "BTC-XMY": 641.02564103,
                        "BTC-AUR": 3.59195402, "BTC-EFL": 14.35956347, "BTC-GLD": 19.44012442, "BTC-SLR": 6.76589986,
                        "BTC-PTC": 60.09615385, "BTC-GRS": 3.90625, "BTC-NLG": 27.77777778, "BTC-RBY": 3.1924403,
                        "BTC-XWC": 33.87533875, "BTC-MONA": 0.40128411, "BTC-THC": 104.60251046,
                        "BTC-ENRG": 24.97502498,
                        "BTC-ERC": 5.0010002, "BTC-VRC": 5.33390228, "BTC-CURE": 7.10025561, "BTC-XMR": 0.01408293,
                        "BTC-CLOAK": 0.38479298, "BTC-START": 44.80286738, "BTC-KORE": 0.59645942, "BTC-XDN": 1000,
                        "BTC-TRUST": 19.51600312, "BTC-NAV": 2.45098039, "BTC-XST": 8.83080184, "BTC-BTCD": 0.02155172,
                        "BTC-VIA": 1.59083678, "BTC-PINK": 109.64912281, "BTC-IOC": 0.7102071, "BTC-CANN": 77.3993808,
                        "BTC-SYS": 9.11410864, "BTC-NEOS": 0.72729388, "BTC-DGB": 223.21428571,
                        "BTC-BURST": 316.4556962,
                        "BTC-EXCL": 1.72854871, "BTC-SWIFT": 2.13675214, "BTC-DOPE": 102.04081633,
                        "BTC-BLOCK": 0.11838242,
                        "BTC-ABY": 403.22580645, "BTC-BYC": 3.87657001, "BTC-XMG": 8.20748523, "BTC-BLITZ": 2.68586162,
                        "BTC-BAY": 51.75983437, "BTC-BTS": 28.21670429, "BTC-FAIR": 2.21572277, "BTC-SPR": 9.97207818,
                        "BTC-VTR": 10.08878128, "BTC-XRP": 10.49097776, "BTC-GAME": 1.28766418,
                        "BTC-COVAL": 543.47826087,
                        "BTC-NXS": 1.77923279, "BTC-XCP": 0.12604555, "BTC-BITB": 694.44444444, "BTC-GEO": 2.53292806,
                        "BTC-FLDC": 193.79844961, "BTC-GRC": 48.26254826, "BTC-FLO": 25, "BTC-NBT": 2.3939481,
                        "BTC-MUE": 16.77852349, "BTC-XEM": 11.10124334, "BTC-CLAM": 0.32629834, "BTC-DMD": 0.23221899,
                        "BTC-GAM": 0.28755794, "BTC-SPHR": 0.66247979, "BTC-OK": 7.21500722, "BTC-SNRG": 1.68044633,
                        "BTC-PKB": 2.90292615, "BTC-CPC": 7.05815923, "BTC-AEON": 0.69429016, "BTC-ETH": 0.00565611,
                        "BTC-GCR": 14.88095238, "BTC-TX": 1.001001, "BTC-BCY": 7.6289289, "BTC-EXP": 1.30371297,
                        "BTC-INFX": 3.62581581, "BTC-OMNI": 0.08542453, "BTC-AMP": 10.97935881, "BTC-AGRS": 2.89017341,
                        "BTC-XLM": 32.50975293, "USDT-BTC": 0.0003169, "BTC-CLUB": 0.41353757, "BTC-VOX": 35.71428571,
                        "BTC-EMC": 2.67694614, "BTC-FCT": 0.1118093, "BTC-MAID": 5.20291363, "BTC-EGC": 9.80392157,
                        "BTC-SLS": 0.13736264, "BTC-RADS": 0.5124631, "BTC-DCR": 0.04485987, "BTC-SAFEX": 231.48148148,
                        "BTC-BSD": 3.10443313, "BTC-XVG": 431.03448276, "BTC-PIVX": 0.61614295, "BTC-XVC": 3.02626801,
                        "BTC-MEME": 7.03630735, "BTC-STEEM": 2.38663484, "BTC-2GIVE": 378.78787879,
                        "BTC-LSK": 0.33115653,
                        "BTC-PDC": 26.06882169, "BTC-BRK": 11.60631383, "BTC-DGD": 0.02519135, "ETH-DGD": 0.02259025,
                        "BTC-WAVES": 0.51020408, "BTC-RISE": 8.71080139, "BTC-LBC": 10.79447323, "BTC-SBD": 1.83540122,
                        "BTC-BRX": 3.75375375, "BTC-ETC": 0.09574912, "ETH-ETC": 0.08404087, "BTC-STRAT": 0.46591375,
                        "BTC-UNB": 8.47170451, "BTC-SYNX": 8.22097994, "BTC-TRIG": 2.47794628, "BTC-EBST": 23.74169041,
                        "BTC-VRM": 1.1418132, "BTC-SEQ": 14.35956347, "BTC-XAUR": 13.08215594, "BTC-SNGLS": 20.30869212,
                        "BTC-REP": 0.09516414, "BTC-SHIFT": 1.15713955, "BTC-ARDR": 8.10372771, "BTC-XZC": 0.07200336,
                        "BTC-NEO": 0.06982343, "BTC-ZEC": 0.00816272, "BTC-ZCL": 1.31578947, "BTC-IOP": 0.81247969,
                        "BTC-GOLOS": 21.00840336, "BTC-UBQ": 1.56445557, "BTC-KMD": 1, "BTC-GBG": 21.72024327,
                        "BTC-SIB": 1.44142066, "BTC-ION": 1.77986615, "BTC-LMC": 40.58441558, "BTC-QWARK": 16.27604167,
                        "BTC-CRW": 1.89164649, "BTC-SWT": 1.58117766, "BTC-TIME": 0.10774794, "BTC-MLN": 0.038559,
                        "BTC-ARK": 0.77396985, "BTC-DYN": 0.73503469, "BTC-TKS": 1.21618992, "BTC-MUSIC": 159.23566879,
                        "BTC-DTB": 4.61084471, "BTC-INCNT": 11.75917215, "BTC-GBYTE": 0.0108696, "BTC-GNT": 8.04375804,
                        "BTC-NXC": 13.78169791, "BTC-EDG": 3.38066261, "BTC-LGD": 2.83125708, "BTC-TRST": 6.94637399, 
                        "ETH-GNT": 7.10227273,
                        "ETH-REP": 0.08476641, "USDT-ETH": 0.00715478, "ETH-WINGS": 4.35961601, "BTC-WINGS": 4.98007968,
                        "BTC-RLC": 4.78377344, "BTC-GNO": 0.02461609, "BTC-GUP": 14.28571429, "BTC-LUN": 0.47871627,
                        "ETH-GUP": 12.90056246, "ETH-RLC": 4.23194441, "ETH-LUN": 0.42951231, "ETH-SNGLS": 17.63979538,
                        "ETH-GNO": 0.02198149, "BTC-APX": 0.28594304, "BTC-TKN": 1.79597701, "ETH-TKN": 1.55763725,
                        "BTC-HMQ": 22.40143369, "ETH-HMQ": 18.86792453, "BTC-ANT": 1.37136588, "ETH-TRST": 6.27517916,
                        "ETH-ANT": 1.25, "BTC-SC": 454.54545455, "ETH-BAT": 13.66120219, "BTC-BAT": 15.40357363,
                        "BTC-ZEN": 0.08806693, "BTC-1ST": 6.78058042, "BTC-QRL": 2.30606033, "ETH-1ST": 6.03631447,
                        "ETH-QRL": 2.05170291, "BTC-CRB": 7.21917413, "ETH-CRB": 6.33031588, "ETH-LGD": 2.57940705,
                        "BTC-PTOY": 14.50957632, "ETH-PTOY": 12.94230321, "BTC-MYST": 4.52898551,
                        "ETH-MYST": 4.17696986,
                        "BTC-CFI": 23.32089552, "ETH-CFI": 20.35996417, "BTC-BNT": 1.02889127, "ETH-BNT": 0.90856559,
                        "BTC-NMR": 0.081318, "ETH-NMR": 0.07137431, "ETH-TIME": 0.09435038, "ETH-LTC": 0.02545335,
                        "ETH-XRP": 9.24556213, "BTC-SNT": 48.73294347, "ETH-SNT": 42.81555061, "BTC-DCT": 3.57091844,
                        "BTC-XEL": 9.46611132, "BTC-MCO": 0.43276554, "ETH-MCO": 0.37057405, "BTC-ADT": 121.95121951,
                        "ETH-ADT": 111.45786893, "BTC-FUN": 95.78544061, "ETH-FUN": 86.40055296, "BTC-PAY": 1.18962646,
                        "ETH-PAY": 1.05263158, "BTC-MTL": 0.48828125, "ETH-MTL": 0.41693594, "BTC-STORJ": 3.68459838,
                        "ETH-STORJ": 3.22661831, "BTC-ADX": 2.22182723, "ETH-ADX": 1.98236488, "ETH-DASH": 0.00282646,
                        "ETH-SC": 391.54267815, "ETH-ZEC": 0.00720593, "USDT-ZEC": 0.01032631, "USDT-LTC": 0.03654036,
                        "USDT-ETC": 0.12083421, "USDT-XRP": 13.24659814, "BTC-OMG": 0.29984648, "ETH-OMG": 0.26770049,
                        "BTC-CVC": 8.16993464, "ETH-CVC": 7.24637681, "BTC-PART": 0.30498963, "BTC-QTUM": 0.2062451,
                        "ETH-QTUM": 0.18115962, "ETH-XMR": 0.01254392, "ETH-XEM": 9.84251969, "ETH-XLM": 28.68288206,
                        "ETH-NEO": 0.0625, "USDT-XMR": 0.01785714, "USDT-DASH": 0.00405104, "ETH-BCC": 0.00167224,
                        "USDT-BCC": 0.00238928, "BTC-BCC": 0.00188466, "BTC-DNT": 58.96226415, "ETH-DNT": 52.38344683,
                        "USDT-NEO": 0.08763269, "ETH-WAVES": 0.45045045, "ETH-STRAT": 0.40656224,
                        "ETH-DGB": 197.23865878,
                        "ETH-FCT": 0.09957759, "ETH-BTS": 32.95544424, "USDT-OMG": 0.37804325, "BTC-ADA": 21.02607233,
                        "BTC-MANA": 164.47368421, "ETH-MANA": 148.98688915, "BTC-SALT": 0.56921676,
                        "ETH-SALT": 0.50877795,
                        "BTC-TIX": 6.25, "ETH-TIX": 5.56892097, "BTC-RCN": 21.02607233, "ETH-RCN": 18.6115764,
                        "BTC-VIB": 20.99076406, "ETH-VIB": 19.0861549, "BTC-MER": 7.8394481, "BTC-POWR": 3.45447008,
                        "ETH-POWR": 3.04878049, "BTC-BTG": 0.00865052, "ETH-BTG": 0.00758153, "USDT-BTG": 0.01092498,
                        "ETH-ADA": 18.5013876, "BTC-ENG": 3.93886876, "ETH-ENG": 3.4953058},

};

export const GLOBAL = {
    IS_LOG_ACTIVE: true,
    IS_TEST: true,
};
