// Firebase references
var database = firebase.database().ref('/wellsites/dynamic/')
var wellsiteRef = database.child('100-13-23-14-14-W4');
var data = [
    {
      "measured_depth": 300,
      "true_vertical_depth": 300,
      "gamma": 40,
      "rate_of_penetration": 5,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 311.845,
      "true_vertical_depth": 311.278,
      "gamma": 99.522,
      "rate_of_penetration": 42.21,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 323.817,
      "true_vertical_depth": 322.461,
      "gamma": 42.206,
      "rate_of_penetration": 61.13,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 334.878,
      "true_vertical_depth": 333.896,
      "gamma": 83.098,
      "rate_of_penetration": 51.392,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 346.132,
      "true_vertical_depth": 344.969,
      "gamma": 72.11,
      "rate_of_penetration": 49.855,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 357.666,
      "true_vertical_depth": 356.468,
      "gamma": 80.63,
      "rate_of_penetration": 59.959,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 368.871,
      "true_vertical_depth": 368.056,
      "gamma": 61.51,
      "rate_of_penetration": 52.879,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 380.795,
      "true_vertical_depth": 379.414,
      "gamma": 41.181,
      "rate_of_penetration": 67.111,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 392.011,
      "true_vertical_depth": 390.601,
      "gamma": 66.471,
      "rate_of_penetration": 75.118,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 403.181,
      "true_vertical_depth": 401.74,
      "gamma": 104.132,
      "rate_of_penetration": 64.512,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 414.602,
      "true_vertical_depth": 413.364,
      "gamma": 89.474,
      "rate_of_penetration": 74.792,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 425.705,
      "true_vertical_depth": 425.224,
      "gamma": 41.274,
      "rate_of_penetration": 54.937,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 437.455,
      "true_vertical_depth": 437.203,
      "gamma": 44.704,
      "rate_of_penetration": 70.35,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 449.117,
      "true_vertical_depth": 448.949,
      "gamma": 101.028,
      "rate_of_penetration": 80.154,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 461.079,
      "true_vertical_depth": 460.747,
      "gamma": 75.292,
      "rate_of_penetration": 61.448,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 473.057,
      "true_vertical_depth": 471.87,
      "gamma": 54.038,
      "rate_of_penetration": 68.796,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 484.93,
      "true_vertical_depth": 483.784,
      "gamma": 47.784,
      "rate_of_penetration": 77.154,
      "gas_co_dir": ""
    },
    {
      "measured_depth": 496.502,
      "true_vertical_depth": 495,
      "gamma": 93.959,
      "rate_of_penetration": 57.391,
      "gas_co_dir": 2.1
    },
    {
      "measured_depth": 507.829,
      "true_vertical_depth": 506.58,
      "gamma": 80.148,
      "rate_of_penetration": 60.696,
      "gas_co_dir": 818.06
    },
    {
      "measured_depth": 519.482,
      "true_vertical_depth": 517.671,
      "gamma": 65.822,
      "rate_of_penetration": 73.129,
      "gas_co_dir": 760.82
    },
    {
      "measured_depth": 531.467,
      "true_vertical_depth": 529.527,
      "gamma": 81.086,
      "rate_of_penetration": 71.044,
      "gas_co_dir": 563.73
    },
    {
      "measured_depth": 542.526,
      "true_vertical_depth": 540.643,
      "gamma": 106.614,
      "rate_of_penetration": 43.647,
      "gas_co_dir": 312.11
    },
    {
      "measured_depth": 554.232,
      "true_vertical_depth": 552.019,
      "gamma": 56.173,
      "rate_of_penetration": 48.275,
      "gas_co_dir": 580.88
    },
    {
      "measured_depth": 565.835,
      "true_vertical_depth": 563.044,
      "gamma": 108.522,
      "rate_of_penetration": 44.048,
      "gas_co_dir": 503.19
    },
    {
      "measured_depth": 577.062,
      "true_vertical_depth": 574.2,
      "gamma": 91.718,
      "rate_of_penetration": 43.647,
      "gas_co_dir": 751.71
    },
    {
      "measured_depth": 589.059,
      "true_vertical_depth": 585.377,
      "gamma": 92.643,
      "rate_of_penetration": 68.897,
      "gas_co_dir": 680.77
    },
    {
      "measured_depth": 600.34,
      "true_vertical_depth": 596.437,
      "gamma": 43.929,
      "rate_of_penetration": 62.578,
      "gas_co_dir": 380.09
    },
    {
      "measured_depth": 612.006,
      "true_vertical_depth": 607.584,
      "gamma": 86.749,
      "rate_of_penetration": 61.001,
      "gas_co_dir": 131.24
    },
    {
      "measured_depth": 623.193,
      "true_vertical_depth": 619.161,
      "gamma": 65.175,
      "rate_of_penetration": 79.711,
      "gas_co_dir": 194.38
    },
    {
      "measured_depth": 634.628,
      "true_vertical_depth": 630.626,
      "gamma": 60.06,
      "rate_of_penetration": 44.144,
      "gas_co_dir": 313.47
    },
    {
      "measured_depth": 646.341,
      "true_vertical_depth": 642.098,
      "gamma": 42.461,
      "rate_of_penetration": 65.528,
      "gas_co_dir": 463.82
    },
    {
      "measured_depth": 657.348,
      "true_vertical_depth": 653.337,
      "gamma": 101.828,
      "rate_of_penetration": 46.522,
      "gas_co_dir": 451.96
    },
    {
      "measured_depth": 668.622,
      "true_vertical_depth": 664.797,
      "gamma": 108.716,
      "rate_of_penetration": 43.876,
      "gas_co_dir": 514.84
    },
    {
      "measured_depth": 680.542,
      "true_vertical_depth": 676.207,
      "gamma": 108.001,
      "rate_of_penetration": 71.93,
      "gas_co_dir": 600.7
    },
    {
      "measured_depth": 692.052,
      "true_vertical_depth": 687.476,
      "gamma": 79.801,
      "rate_of_penetration": 78.914,
      "gas_co_dir": 642.58
    },
    {
      "measured_depth": 703.833,
      "true_vertical_depth": 698.871,
      "gamma": 99.126,
      "rate_of_penetration": 63.249,
      "gas_co_dir": 439.84
    },
    {
      "measured_depth": 715.593,
      "true_vertical_depth": 710.176,
      "gamma": 83.001,
      "rate_of_penetration": 52.736,
      "gas_co_dir": 466.01
    },
    {
      "measured_depth": 726.768,
      "true_vertical_depth": 722.109,
      "gamma": 85.149,
      "rate_of_penetration": 67.376,
      "gas_co_dir": 371.09
    },
    {
      "measured_depth": 738.563,
      "true_vertical_depth": 733.3,
      "gamma": 97.627,
      "rate_of_penetration": 42.891,
      "gas_co_dir": 169.02
    },
    {
      "measured_depth": 749.673,
      "true_vertical_depth": 745.24,
      "gamma": 106.798,
      "rate_of_penetration": 57.75,
      "gas_co_dir": 302.57
    },
    {
      "measured_depth": 761.254,
      "true_vertical_depth": 756.6,
      "gamma": 77.564,
      "rate_of_penetration": 44.555,
      "gas_co_dir": 607.29
    },
    {
      "measured_depth": 772.787,
      "true_vertical_depth": 768.421,
      "gamma": 49.27,
      "rate_of_penetration": 51.126,
      "gas_co_dir": 214.79
    },
    {
      "measured_depth": 784.654,
      "true_vertical_depth": 780.095,
      "gamma": 81.71,
      "rate_of_penetration": 70.748,
      "gas_co_dir": 401
    },
    {
      "measured_depth": 796.04,
      "true_vertical_depth": 792.01,
      "gamma": 43.125,
      "rate_of_penetration": 61.501,
      "gas_co_dir": 336.55
    },
    {
      "measured_depth": 807.727,
      "true_vertical_depth": 803.499,
      "gamma": 97.704,
      "rate_of_penetration": 76.252,
      "gas_co_dir": 269.89
    },
    {
      "measured_depth": 819.722,
      "true_vertical_depth": 814.923,
      "gamma": 82.085,
      "rate_of_penetration": 73.452,
      "gas_co_dir": 191.22
    },
    {
      "measured_depth": 830.943,
      "true_vertical_depth": 826.342,
      "gamma": 77.511,
      "rate_of_penetration": 43.76,
      "gas_co_dir": 503.87
    },
    {
      "measured_depth": 842.555,
      "true_vertical_depth": 837.751,
      "gamma": 49.722,
      "rate_of_penetration": 46.425,
      "gas_co_dir": 352.63
    },
    {
      "measured_depth": 853.843,
      "true_vertical_depth": 849.633,
      "gamma": 64.669,
      "rate_of_penetration": 75.639,
      "gas_co_dir": 644.74
    },
    {
      "measured_depth": 865.39,
      "true_vertical_depth": 860.845,
      "gamma": 100.98,
      "rate_of_penetration": 59.643,
      "gas_co_dir": 594.59
    },
    {
      "measured_depth": 876.651,
      "true_vertical_depth": 872.131,
      "gamma": 82.786,
      "rate_of_penetration": 48.658,
      "gas_co_dir": 269.9
    },
    {
      "measured_depth": 888.005,
      "true_vertical_depth": 883.947,
      "gamma": 95.465,
      "rate_of_penetration": 78.332,
      "gas_co_dir": 241.93
    },
    {
      "measured_depth": 899.487,
      "true_vertical_depth": 895.181,
      "gamma": 99.355,
      "rate_of_penetration": 69.389,
      "gas_co_dir": 809.6
    },
    {
      "measured_depth": 910.711,
      "true_vertical_depth": 906.459,
      "gamma": 65.991,
      "rate_of_penetration": 54.537,
      "gas_co_dir": 522.79
    },
    {
      "measured_depth": 922.619,
      "true_vertical_depth": 917.75,
      "gamma": 92.134,
      "rate_of_penetration": 47.918,
      "gas_co_dir": 447.4
    },
    {
      "measured_depth": 934.589,
      "true_vertical_depth": 921.362,
      "gamma": 104.96,
      "rate_of_penetration": 48.641,
      "gas_co_dir": 318.68
    },
    {
      "measured_depth": 945.699,
      "true_vertical_depth": 924.482,
      "gamma": 43.768,
      "rate_of_penetration": 52.073,
      "gas_co_dir": 704.18
    },
    {
      "measured_depth": 957.383,
      "true_vertical_depth": 927.862,
      "gamma": 56.715,
      "rate_of_penetration": 59.279,
      "gas_co_dir": 368.74
    },
    {
      "measured_depth": 968.619,
      "true_vertical_depth": 931.608,
      "gamma": 100.004,
      "rate_of_penetration": 65.178,
      "gas_co_dir": 666.31
    },
    {
      "measured_depth": 980.287,
      "true_vertical_depth": 934.708,
      "gamma": 114.592,
      "rate_of_penetration": 51.01,
      "gas_co_dir": 638.73
    },
    {
      "measured_depth": 991.922,
      "true_vertical_depth": 937.853,
      "gamma": 65.747,
      "rate_of_penetration": 59.455,
      "gas_co_dir": 336.82
    },
    {
      "measured_depth": 1003.552,
      "true_vertical_depth": 941.221,
      "gamma": 83.279,
      "rate_of_penetration": 77.01,
      "gas_co_dir": 613.94
    },
    {
      "measured_depth": 1014.869,
      "true_vertical_depth": 944.721,
      "gamma": 93.724,
      "rate_of_penetration": 71.695,
      "gas_co_dir": 372.61
    },
    {
      "measured_depth": 1026.549,
      "true_vertical_depth": 948.377,
      "gamma": 88.79,
      "rate_of_penetration": 51.508,
      "gas_co_dir": 621.97
    },
    {
      "measured_depth": 1038.374,
      "true_vertical_depth": 951.926,
      "gamma": 84.086,
      "rate_of_penetration": 63.38,
      "gas_co_dir": 865.19
    },
    {
      "measured_depth": 1049.874,
      "true_vertical_depth": 955.512,
      "gamma": 79.085,
      "rate_of_penetration": 50.843,
      "gas_co_dir": 589.29
    },
    {
      "measured_depth": 1060.937,
      "true_vertical_depth": 959.06,
      "gamma": 66.676,
      "rate_of_penetration": 50.033,
      "gas_co_dir": 217.7
    },
    {
      "measured_depth": 1072.122,
      "true_vertical_depth": 968.506,
      "gamma": 62.541,
      "rate_of_penetration": 57.069,
      "gas_co_dir": 332.09
    },
    {
      "measured_depth": 1083.357,
      "true_vertical_depth": 967.212,
      "gamma": 55.564,
      "rate_of_penetration": 54.702,
      "gas_co_dir": 834.7
    },
    {
      "measured_depth": 1095.283,
      "true_vertical_depth": 960.035,
      "gamma": 73.681,
      "rate_of_penetration": 48.153,
      "gas_co_dir": 575.52
    },
    {
      "measured_depth": 1106.98,
      "true_vertical_depth": 965.457,
      "gamma": 72.906,
      "rate_of_penetration": 67.421,
      "gas_co_dir": 264.78
    },
    {
      "measured_depth": 1118.281,
      "true_vertical_depth": 962.199,
      "gamma": 46.025,
      "rate_of_penetration": 58.287,
      "gas_co_dir": 583.63
    },
    {
      "measured_depth": 1129.806,
      "true_vertical_depth": 960.27,
      "gamma": 62.524,
      "rate_of_penetration": 79.104,
      "gas_co_dir": 373.27
    },
    {
      "measured_depth": 1141.492,
      "true_vertical_depth": 966.736,
      "gamma": 81.286,
      "rate_of_penetration": 69.383,
      "gas_co_dir": 632.87
    },
    {
      "measured_depth": 1152.74,
      "true_vertical_depth": 960.591,
      "gamma": 78.427,
      "rate_of_penetration": 58.977,
      "gas_co_dir": 213.53
    },
    {
      "measured_depth": 1163.981,
      "true_vertical_depth": 960.367,
      "gamma": 101.593,
      "rate_of_penetration": 48.822,
      "gas_co_dir": 380.56
    },
    {
      "measured_depth": 1175.851,
      "true_vertical_depth": 967.285,
      "gamma": 67.13,
      "rate_of_penetration": 54.555,
      "gas_co_dir": 353.76
    },
    {
      "measured_depth": 1187.712,
      "true_vertical_depth": 967.911,
      "gamma": 86.558,
      "rate_of_penetration": 75.028,
      "gas_co_dir": 220.9
    },
    {
      "measured_depth": 1198.83,
      "true_vertical_depth": 966.646,
      "gamma": 94.218,
      "rate_of_penetration": 60.498,
      "gas_co_dir": 613.31
    },
    {
      "measured_depth": 1210.059,
      "true_vertical_depth": 966.755,
      "gamma": 103.995,
      "rate_of_penetration": 79.112,
      "gas_co_dir": 429.58
    },
    {
      "measured_depth": 1221.952,
      "true_vertical_depth": 966.259,
      "gamma": 61.703,
      "rate_of_penetration": 61.177,
      "gas_co_dir": 226.95
    },
    {
      "measured_depth": 1233.416,
      "true_vertical_depth": 966.506,
      "gamma": 105.256,
      "rate_of_penetration": 48.326,
      "gas_co_dir": 112.05
    },
    {
      "measured_depth": 1245.254,
      "true_vertical_depth": 965.098,
      "gamma": 64.306,
      "rate_of_penetration": 75.404,
      "gas_co_dir": 473.19
    },
    {
      "measured_depth": 1256.759,
      "true_vertical_depth": 965.613,
      "gamma": 68.935,
      "rate_of_penetration": 57.755,
      "gas_co_dir": 291.69
    },
    {
      "measured_depth": 1267.786,
      "true_vertical_depth": 966.684,
      "gamma": 45.749,
      "rate_of_penetration": 58.017,
      "gas_co_dir": 61.66
    },
    {
      "measured_depth": 1278.915,
      "true_vertical_depth": 966.755,
      "gamma": 65.416,
      "rate_of_penetration": 70.14,
      "gas_co_dir": 296.55
    },
    {
      "measured_depth": 1290.898,
      "true_vertical_depth": 966.476,
      "gamma": 60.352,
      "rate_of_penetration": 61.918,
      "gas_co_dir": 789.8
    },
    {
      "measured_depth": 1302.724,
      "true_vertical_depth": 966.391,
      "gamma": 74.146,
      "rate_of_penetration": 66.596,
      "gas_co_dir": 386.86
    },
    {
      "measured_depth": 1314.027,
      "true_vertical_depth": 966.575,
      "gamma": 73.455,
      "rate_of_penetration": 79.262,
      "gas_co_dir": 439.66
    },
    {
      "measured_depth": 1325.127,
      "true_vertical_depth": 965.769,
      "gamma": 87.439,
      "rate_of_penetration": 59.419,
      "gas_co_dir": 882.92
    },
    {
      "measured_depth": 1336.41,
      "true_vertical_depth": 966.942,
      "gamma": 110.013,
      "rate_of_penetration": 54.785,
      "gas_co_dir": 45.82
    },
    {
      "measured_depth": 1348.074,
      "true_vertical_depth": 965.23,
      "gamma": 47.021,
      "rate_of_penetration": 57.301,
      "gas_co_dir": 129.49
    },
    {
      "measured_depth": 1359.627,
      "true_vertical_depth": 965.035,
      "gamma": 115.799,
      "rate_of_penetration": 57.759,
      "gas_co_dir": 405.76
    },
    {
      "measured_depth": 1370.646,
      "true_vertical_depth": 965.689,
      "gamma": 100.007,
      "rate_of_penetration": 75.171,
      "gas_co_dir": 197.77
    },
    {
      "measured_depth": 1381.836,
      "true_vertical_depth": 966.376,
      "gamma": 89.119,
      "rate_of_penetration": 62.769,
      "gas_co_dir": 516.29
    },
    {
      "measured_depth": 1393.697,
      "true_vertical_depth": 966.837,
      "gamma": 70.607,
      "rate_of_penetration": 76.922,
      "gas_co_dir": 736.85
    },
    {
      "measured_depth": 1405.275,
      "true_vertical_depth": 965.811,
      "gamma": 111.523,
      "rate_of_penetration": 51.992,
      "gas_co_dir": 667.67
    },
    {
      "measured_depth": 1416.609,
      "true_vertical_depth": 966.042,
      "gamma": 54.09,
      "rate_of_penetration": 50.582,
      "gas_co_dir": 68.31
    },
    {
      "measured_depth": 1427.848,
      "true_vertical_depth": 966.475,
      "gamma": 68.734,
      "rate_of_penetration": 50.234,
      "gas_co_dir": 117.72
    },
    {
      "measured_depth": 1439.833,
      "true_vertical_depth": 965.177,
      "gamma": 56.947,
      "rate_of_penetration": 47.393,
      "gas_co_dir": 633.53
    },
    {
      "measured_depth": 1451.284,
      "true_vertical_depth": 966.353,
      "gamma": 88.62,
      "rate_of_penetration": 74.431,
      "gas_co_dir": 513.26
    },
    {
      "measured_depth": 1462.91,
      "true_vertical_depth": 966.497,
      "gamma": 55.992,
      "rate_of_penetration": 71.5,
      "gas_co_dir": 345.1
    },
    {
      "measured_depth": 1473.959,
      "true_vertical_depth": 965.089,
      "gamma": 98.873,
      "rate_of_penetration": 52.243,
      "gas_co_dir": 459.17
    },
    {
      "measured_depth": 1485.524,
      "true_vertical_depth": 966.214,
      "gamma": 72.022,
      "rate_of_penetration": 71.504,
      "gas_co_dir": 521.92
    },
    {
      "measured_depth": 1497.286,
      "true_vertical_depth": 965.417,
      "gamma": 69.373,
      "rate_of_penetration": 76.647,
      "gas_co_dir": 317.77
    },
    {
      "measured_depth": 1508.855,
      "true_vertical_depth": 965.048,
      "gamma": 43.292,
      "rate_of_penetration": 50.633,
      "gas_co_dir": 383.07
    },
    {
      "measured_depth": 1520.235,
      "true_vertical_depth": 965.492,
      "gamma": 70.872,
      "rate_of_penetration": 50.806,
      "gas_co_dir": 112.36
    },
    {
      "measured_depth": 1531.716,
      "true_vertical_depth": 966.891,
      "gamma": 109.034,
      "rate_of_penetration": 46.015,
      "gas_co_dir": 497.27
    },
    {
      "measured_depth": 1543.107,
      "true_vertical_depth": 965.765,
      "gamma": 91.049,
      "rate_of_penetration": 53.549,
      "gas_co_dir": 271.93
    },
    {
      "measured_depth": 1555.038,
      "true_vertical_depth": 966.118,
      "gamma": 55.03,
      "rate_of_penetration": 67.831,
      "gas_co_dir": 168.11
    },
    {
      "measured_depth": 1566.318,
      "true_vertical_depth": 966.541,
      "gamma": 97.05,
      "rate_of_penetration": 65.66,
      "gas_co_dir": 142.48
    },
    {
      "measured_depth": 1577.532,
      "true_vertical_depth": 966.302,
      "gamma": 113.661,
      "rate_of_penetration": 45.384,
      "gas_co_dir": 584
    },
    {
      "measured_depth": 1589.528,
      "true_vertical_depth": 965.932,
      "gamma": 86.48,
      "rate_of_penetration": 59.208,
      "gas_co_dir": 257.33
    },
    {
      "measured_depth": 1600.962,
      "true_vertical_depth": 965.285,
      "gamma": 94.867,
      "rate_of_penetration": 71.814,
      "gas_co_dir": 707.39
    },
    {
      "measured_depth": 1612.67,
      "true_vertical_depth": 965.185,
      "gamma": 64.916,
      "rate_of_penetration": 65.787,
      "gas_co_dir": 344.13
    },
    {
      "measured_depth": 1624.227,
      "true_vertical_depth": 966.643,
      "gamma": 45.107,
      "rate_of_penetration": 57.496,
      "gas_co_dir": 711.97
    },
    {
      "measured_depth": 1635.515,
      "true_vertical_depth": 966.838,
      "gamma": 41.624,
      "rate_of_penetration": 62.24,
      "gas_co_dir": 20.76
    },
    {
      "measured_depth": 1646.88,
      "true_vertical_depth": 966.831,
      "gamma": 78.564,
      "rate_of_penetration": 61.463,
      "gas_co_dir": 524.49
    },
    {
      "measured_depth": 1658.321,
      "true_vertical_depth": 965.098,
      "gamma": 46.797,
      "rate_of_penetration": 67.731,
      "gas_co_dir": 254.45
    },
    {
      "measured_depth": 1669.674,
      "true_vertical_depth": 966.607,
      "gamma": 89.712,
      "rate_of_penetration": 76.075,
      "gas_co_dir": 685.19
    },
    {
      "measured_depth": 1681.625,
      "true_vertical_depth": 965.468,
      "gamma": 49.966,
      "rate_of_penetration": 56.82,
      "gas_co_dir": 859.31
    },
    {
      "measured_depth": 1693.143,
      "true_vertical_depth": 966.977,
      "gamma": 105.643,
      "rate_of_penetration": 78.032,
      "gas_co_dir": 792.52
    },
    {
      "measured_depth": 1704.62,
      "true_vertical_depth": 966.524,
      "gamma": 70.764,
      "rate_of_penetration": 74.628,
      "gas_co_dir": 394.93
    },
    {
      "measured_depth": 1716.16,
      "true_vertical_depth": 965.736,
      "gamma": 107.53,
      "rate_of_penetration": 55.323,
      "gas_co_dir": 747.3
    },
    {
      "measured_depth": 1727.504,
      "true_vertical_depth": 965.37,
      "gamma": 107.633,
      "rate_of_penetration": 41.203,
      "gas_co_dir": 696.33
    },
    {
      "measured_depth": 1739.298,
      "true_vertical_depth": 966.161,
      "gamma": 87.865,
      "rate_of_penetration": 74.873,
      "gas_co_dir": 816.83
    },
    {
      "measured_depth": 1750.65,
      "true_vertical_depth": 966.529,
      "gamma": 72.825,
      "rate_of_penetration": 65.65,
      "gas_co_dir": 160.86
    },
    {
      "measured_depth": 1761.925,
      "true_vertical_depth": 966.363,
      "gamma": 46.472,
      "rate_of_penetration": 70.678,
      "gas_co_dir": 321.08
    },
    {
      "measured_depth": 1772.981,
      "true_vertical_depth": 966.716,
      "gamma": 87.816,
      "rate_of_penetration": 49.584,
      "gas_co_dir": 759.83
    },
    {
      "measured_depth": 1784.137,
      "true_vertical_depth": 965.78,
      "gamma": 66.125,
      "rate_of_penetration": 43.325,
      "gas_co_dir": 99.38
    },
    {
      "measured_depth": 1795.635,
      "true_vertical_depth": 965.397,
      "gamma": 64.578,
      "rate_of_penetration": 58.233,
      "gas_co_dir": 612.49
    },
    {
      "measured_depth": 1807.601,
      "true_vertical_depth": 966.464,
      "gamma": 102.016,
      "rate_of_penetration": 66.059,
      "gas_co_dir": 240.7
    },
    {
      "measured_depth": 1819.346,
      "true_vertical_depth": 965.958,
      "gamma": 110.302,
      "rate_of_penetration": 58.364,
      "gas_co_dir": 707.88
    },
    {
      "measured_depth": 1830.483,
      "true_vertical_depth": 966.385,
      "gamma": 92.604,
      "rate_of_penetration": 63.271,
      "gas_co_dir": 327.46
    },
    {
      "measured_depth": 1841.833,
      "true_vertical_depth": 966.715,
      "gamma": 77.964,
      "rate_of_penetration": 42.143,
      "gas_co_dir": 106.65
    },
    {
      "measured_depth": 1853.358,
      "true_vertical_depth": 965.355,
      "gamma": 53.067,
      "rate_of_penetration": 43.468,
      "gas_co_dir": 884.33
    },
    {
      "measured_depth": 1864.393,
      "true_vertical_depth": 965.73,
      "gamma": 105.013,
      "rate_of_penetration": 73.761,
      "gas_co_dir": 821.22
    },
    {
      "measured_depth": 1875.406,
      "true_vertical_depth": 965.881,
      "gamma": 91.618,
      "rate_of_penetration": 68.523,
      "gas_co_dir": 60.23
    },
    {
      "measured_depth": 1887.066,
      "true_vertical_depth": 965.115,
      "gamma": 54.907,
      "rate_of_penetration": 59.54,
      "gas_co_dir": 101.98
    },
    {
      "measured_depth": 1898.236,
      "true_vertical_depth": 965.018,
      "gamma": 51.198,
      "rate_of_penetration": 45.397,
      "gas_co_dir": 869.01
    },
    {
      "measured_depth": 1909.473,
      "true_vertical_depth": 966.348,
      "gamma": 109.808,
      "rate_of_penetration": 42.424,
      "gas_co_dir": 783.86
    },
    {
      "measured_depth": 1920.703,
      "true_vertical_depth": 966.72,
      "gamma": 51.829,
      "rate_of_penetration": 58.837,
      "gas_co_dir": 272.09
    },
    {
      "measured_depth": 1931.811,
      "true_vertical_depth": 966.863,
      "gamma": 114.763,
      "rate_of_penetration": 41.511,
      "gas_co_dir": 499.76
    },
    {
      "measured_depth": 1943.364,
      "true_vertical_depth": 965.818,
      "gamma": 92.566,
      "rate_of_penetration": 63.43,
      "gas_co_dir": 611.02
    },
    {
      "measured_depth": 1954.54,
      "true_vertical_depth": 966.64,
      "gamma": 70.925,
      "rate_of_penetration": 42.709,
      "gas_co_dir": 40.62
    },
    {
      "measured_depth": 1965.847,
      "true_vertical_depth": 966.009,
      "gamma": 61.353,
      "rate_of_penetration": 79.709,
      "gas_co_dir": 534.01
    },
    {
      "measured_depth": 1977.182,
      "true_vertical_depth": 965.999,
      "gamma": 61.837,
      "rate_of_penetration": 53.881,
      "gas_co_dir": 452.46
    },
    {
      "measured_depth": 1989.095,
      "true_vertical_depth": 965.562,
      "gamma": 81.002,
      "rate_of_penetration": 43.566,
      "gas_co_dir": 267.25
    },
    {
      "measured_depth": 2000.522,
      "true_vertical_depth": 966.373,
      "gamma": 64.031,
      "rate_of_penetration": 71.61,
      "gas_co_dir": 821.9
    },
    {
      "measured_depth": 2012.267,
      "true_vertical_depth": 966.518,
      "gamma": 84.715,
      "rate_of_penetration": 60.162,
      "gas_co_dir": 29.97
    },
    {
      "measured_depth": 2023.946,
      "true_vertical_depth": 965.001,
      "gamma": 66.317,
      "rate_of_penetration": 76.196,
      "gas_co_dir": 10.24
    },
    {
      "measured_depth": 2035.549,
      "true_vertical_depth": 966.678,
      "gamma": 104.209,
      "rate_of_penetration": 75.015,
      "gas_co_dir": 794.3
    },
    {
      "measured_depth": 2047.471,
      "true_vertical_depth": 965.364,
      "gamma": 96.707,
      "rate_of_penetration": 72.897,
      "gas_co_dir": 443.52
    },
    {
      "measured_depth": 2059.323,
      "true_vertical_depth": 965.743,
      "gamma": 100.793,
      "rate_of_penetration": 80.325,
      "gas_co_dir": 480.24
    },
    {
      "measured_depth": 2071.288,
      "true_vertical_depth": 966.982,
      "gamma": 104.404,
      "rate_of_penetration": 43.098,
      "gas_co_dir": 538.96
    },
    {
      "measured_depth": 2082.648,
      "true_vertical_depth": 965.036,
      "gamma": 80.741,
      "rate_of_penetration": 59.029,
      "gas_co_dir": 147.77
    },
    {
      "measured_depth": 2094.233,
      "true_vertical_depth": 966.438,
      "gamma": 52.065,
      "rate_of_penetration": 73.237,
      "gas_co_dir": 575.76
    },
    {
      "measured_depth": 2105.943,
      "true_vertical_depth": 966.062,
      "gamma": 105.98,
      "rate_of_penetration": 79.013,
      "gas_co_dir": 738.45
    },
    {
      "measured_depth": 2117.153,
      "true_vertical_depth": 966.802,
      "gamma": 93.69,
      "rate_of_penetration": 68.618,
      "gas_co_dir": 439
    },
    {
      "measured_depth": 2128.768,
      "true_vertical_depth": 965.023,
      "gamma": 105.315,
      "rate_of_penetration": 51.546,
      "gas_co_dir": 630.1
    },
    {
      "measured_depth": 2140.143,
      "true_vertical_depth": 965.336,
      "gamma": 54.212,
      "rate_of_penetration": 56.043,
      "gas_co_dir": 192.12
    },
    {
      "measured_depth": 2151.228,
      "true_vertical_depth": 966.323,
      "gamma": 58.778,
      "rate_of_penetration": 59.22,
      "gas_co_dir": 289.69
    },
    {
      "measured_depth": 2162.775,
      "true_vertical_depth": 966.684,
      "gamma": 41.045,
      "rate_of_penetration": 75.206,
      "gas_co_dir": 99.79
    },
    {
      "measured_depth": 2174.266,
      "true_vertical_depth": 966.711,
      "gamma": 92.474,
      "rate_of_penetration": 77.862,
      "gas_co_dir": 671.6
    },
    {
      "measured_depth": 2185.39,
      "true_vertical_depth": 965.848,
      "gamma": 41.581,
      "rate_of_penetration": 58.112,
      "gas_co_dir": 61.15
    },
    {
      "measured_depth": 2196.807,
      "true_vertical_depth": 966.102,
      "gamma": 93.013,
      "rate_of_penetration": 62.875,
      "gas_co_dir": 716.31
    },
    {
      "measured_depth": 2208.747,
      "true_vertical_depth": 965.713,
      "gamma": 68.733,
      "rate_of_penetration": 80.568,
      "gas_co_dir": 505.67
    },
    {
      "measured_depth": 2220.396,
      "true_vertical_depth": 966.708,
      "gamma": 57.658,
      "rate_of_penetration": 57.052,
      "gas_co_dir": 568.37
    },
    {
      "measured_depth": 2231.456,
      "true_vertical_depth": 965.218,
      "gamma": 43.715,
      "rate_of_penetration": 75.677,
      "gas_co_dir": 172.72
    },
    {
      "measured_depth": 2243.09,
      "true_vertical_depth": 966.259,
      "gamma": 106.626,
      "rate_of_penetration": 74.981,
      "gas_co_dir": 33.5
    },
    {
      "measured_depth": 2254.79,
      "true_vertical_depth": 965.997,
      "gamma": 98.067,
      "rate_of_penetration": 67.595,
      "gas_co_dir": 101.66
    },
    {
      "measured_depth": 2266.075,
      "true_vertical_depth": 965.923,
      "gamma": 48.769,
      "rate_of_penetration": 51.074,
      "gas_co_dir": 459.75
    },
    {
      "measured_depth": 2277.139,
      "true_vertical_depth": 966.84,
      "gamma": 65.832,
      "rate_of_penetration": 64.864,
      "gas_co_dir": 193.49
    },
    {
      "measured_depth": 2288.549,
      "true_vertical_depth": 965.946,
      "gamma": 85.78,
      "rate_of_penetration": 60.813,
      "gas_co_dir": 365.32
    },
    {
      "measured_depth": 2299.889,
      "true_vertical_depth": 965.219,
      "gamma": 66.807,
      "rate_of_penetration": 57.032,
      "gas_co_dir": 312.92
    },
    {
      "measured_depth": 2311.64,
      "true_vertical_depth": 965.959,
      "gamma": 42.946,
      "rate_of_penetration": 58.379,
      "gas_co_dir": 347.02
    },
    {
      "measured_depth": 2323.282,
      "true_vertical_depth": 965.841,
      "gamma": 103.056,
      "rate_of_penetration": 75.721,
      "gas_co_dir": 872.85
    },
    {
      "measured_depth": 2335.274,
      "true_vertical_depth": 965.701,
      "gamma": 56.455,
      "rate_of_penetration": 55.256,
      "gas_co_dir": 291.81
    },
    {
      "measured_depth": 2346.605,
      "true_vertical_depth": 965.62,
      "gamma": 115.662,
      "rate_of_penetration": 67.283,
      "gas_co_dir": 445.15
    },
    {
      "measured_depth": 2358.08,
      "true_vertical_depth": 966.844,
      "gamma": 99.667,
      "rate_of_penetration": 66.992,
      "gas_co_dir": 534.79
    },
    {
      "measured_depth": 2369.545,
      "true_vertical_depth": 966.079,
      "gamma": 111.599,
      "rate_of_penetration": 64.194,
      "gas_co_dir": 402.86
    },
    {
      "measured_depth": 2381.489,
      "true_vertical_depth": 965.185,
      "gamma": 107.728,
      "rate_of_penetration": 42.358,
      "gas_co_dir": 656.15
    },
    {
      "measured_depth": 2392.576,
      "true_vertical_depth": 965.964,
      "gamma": 90.182,
      "rate_of_penetration": 75.78,
      "gas_co_dir": 816.23
    },
    {
      "measured_depth": 2403.695,
      "true_vertical_depth": 966.6,
      "gamma": 104.105,
      "rate_of_penetration": 64.449,
      "gas_co_dir": 637
    },
    {
      "measured_depth": 2415.408,
      "true_vertical_depth": 966.537,
      "gamma": 104.158,
      "rate_of_penetration": 52.855,
      "gas_co_dir": 717.3
    },
    {
      "measured_depth": 2426.978,
      "true_vertical_depth": 966.08,
      "gamma": 103.563,
      "rate_of_penetration": 60.301,
      "gas_co_dir": 360.75
    },
    {
      "measured_depth": 2438.843,
      "true_vertical_depth": 965.451,
      "gamma": 96.299,
      "rate_of_penetration": 50.68,
      "gas_co_dir": 361.71
    },
    {
      "measured_depth": 2450.599,
      "true_vertical_depth": 966.078,
      "gamma": 67.407,
      "rate_of_penetration": 71.786,
      "gas_co_dir": 42.32
    },
    {
      "measured_depth": 2462.388,
      "true_vertical_depth": 965.64,
      "gamma": 64.39,
      "rate_of_penetration": 55.218,
      "gas_co_dir": 183.93
    },
    {
      "measured_depth": 2474.253,
      "true_vertical_depth": 966.153,
      "gamma": 41.942,
      "rate_of_penetration": 70.273,
      "gas_co_dir": 743.76
    },
    {
      "measured_depth": 2485.895,
      "true_vertical_depth": 965.229,
      "gamma": 94.593,
      "rate_of_penetration": 53.472,
      "gas_co_dir": 779.08
    },
    {
      "measured_depth": 2497.072,
      "true_vertical_depth": 966.911,
      "gamma": 114.068,
      "rate_of_penetration": 74.527,
      "gas_co_dir": 412.4
    },
    {
      "measured_depth": 2508.261,
      "true_vertical_depth": 965.903,
      "gamma": 70.287,
      "rate_of_penetration": 52.237,
      "gas_co_dir": 683.65
    },
    {
      "measured_depth": 2519.868,
      "true_vertical_depth": 966.727,
      "gamma": 84.141,
      "rate_of_penetration": 41.488,
      "gas_co_dir": 101.79
    },
    {
      "measured_depth": 2531.433,
      "true_vertical_depth": 966.712,
      "gamma": 79.965,
      "rate_of_penetration": 65.471,
      "gas_co_dir": 194.2
    },
    {
      "measured_depth": 2543.044,
      "true_vertical_depth": 966.286,
      "gamma": 72.242,
      "rate_of_penetration": 65.545,
      "gas_co_dir": 257.84
    },
    {
      "measured_depth": 2554.491,
      "true_vertical_depth": 965.134,
      "gamma": 94.919,
      "rate_of_penetration": 64.816,
      "gas_co_dir": 589.81
    },
    {
      "measured_depth": 2566.265,
      "true_vertical_depth": 965.063,
      "gamma": 103.053,
      "rate_of_penetration": 67.452,
      "gas_co_dir": 572.94
    },
    {
      "measured_depth": 2578.17,
      "true_vertical_depth": 966.482,
      "gamma": 101.333,
      "rate_of_penetration": 70.305,
      "gas_co_dir": 547.02
    }
  ];

// Get DOM objects
const startBtn = document.getElementById('btn-start');
const clearBtn = document.getElementById('btn-clear');
// Set running state indicator
var runningState = false;
// Disable clear button by default
clearBtn.disabled = true;

// START/STOP LIVE UPDATE

// Listener for startBtn
startBtn.addEventListener('click', () => {
  if (startBtn.innerHTML == "START") {
    startBtn.innerHTML = "STOP";
  }
  else startBtn.innerHTML = "START";
  // Enable clear button
  clearBtn.disabled = false;
  // toggle runnning state
  runningState = !runningState;
    // Set a counter to 0
    var counter = 0;
    // Push data on 5s interval, clear interval when limit reached
    var i = setInterval(function(){
      // Push data
      wellsiteRef.push({
        // push properties from dataset
        measured_depth: data[counter].measured_depth,
        true_vertical_depth: data[counter].true_vertical_depth,
        gamma: data[counter].gamma,
        rate_of_penetration: data[counter].rate_of_penetration,
        gas_co_dir: data[counter].gas_co_dir
      });        
      // Increase counter
      counter++;
      // If counter reaches data end OR Button pushed
      if(counter === data.length || runningState == false) {
          // Clear the interval
          clearInterval(i);
      }
    // repeat every 0.5s
    }, 500);
});

// CLEAR DYNAMIC WELLSITE DATA
clearBtn.addEventListener('click', () => {
  wellsiteRef.remove()
});
