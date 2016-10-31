;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-jiantouyou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M227.995823 965.172173l55.053059 55.050804 508.518058-508.606717L283.048882 3.069919l-55.053059 55.050804 453.561194 453.528284L227.995823 965.172173zM227.995823 965.172173"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fangzi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M816.112 400.704v-272.336h-155.59v116.74l-155.682-155.643-427.964 427.919h77.794v428.015h233.434v-350.123h233.477v350.123h233.387v-428.015h77.794l-116.653-116.694zM426.951 945.507h155.871v-311.273h-155.871v311.273z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-plane" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M672.117744 955.687148l-156.524916-412.336116L349.876576 687.788655l-10.440793 121.030517-65.768913 57.253982L217.702254 720.682833l-128.97956-78.936817 69.494771-59.794851 109.136629 9.713222 168.109766-145.633868L63.990407 221.221404l87.349417-74.987878 462.467887 146.019655L856.875678 81.260745c26.15059-22.790052 65.011666-19.805068 86.806042 6.66377 21.793352 26.468838 18.254759 66.394153-7.883551 89.184205l-244.63158 213.218126 65.781192 491.427452L672.117744 955.687148"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiantouxia" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M964.423625 315.495534 903.590118 255.993349 511.999488 647.667889 120.408859 255.993349 59.576375 315.495534 511.999488 768.004605Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-youjiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M278.800797 959.941032 744.223992 512.245593 278.800797 64.892963 278.800797 959.941032zM278.800797 959.941032"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M439.296 251.904c60.416 0 110.592-49.152 110.592-110.592S500.736 30.72 439.296 30.72C378.88 30.72 329.728 79.872 329.728 141.312 329.728 201.728 378.88 251.904 439.296 251.904zM884.736 881.664c-2.048 0-4.096 0-7.168 0L753.664 773.12l-52.224-206.848c0-2.048 0-4.096-1.024-7.168l0 0 0 0c-1.024-4.096-2.048-7.168-3.072-10.24l-47.104-144.384 94.208 47.104L819.2 586.752c8.192 19.456 29.696 33.792 54.272 33.792 32.768 0 58.368-23.552 58.368-51.2 0-6.144-1.024-12.288-3.072-17.408l1.024 0-92.16-162.816 0 0c-5.12-7.168-12.288-13.312-20.48-17.408l0 0-198.656-99.328c-9.216-6.144-21.504-9.216-33.792-9.216-6.144 0-12.288 1.024-18.432 3.072l-153.6 22.528c-1.024 0-1.024 0-2.048 0-23.552 0-44.032 12.288-53.248 29.696L266.24 447.488c-2.048 1.024-5.12 2.048-7.168 4.096l-167.936 71.68 0 1.024c-17.408 9.216-28.672 25.6-28.672 44.032 0 28.672 26.624 51.2 58.368 51.2 13.312 0 26.624-4.096 36.864-11.264l155.648-67.584c14.336-4.096 26.624-13.312 33.792-24.576l62.464-83.968 26.624 122.88L315.392 707.584c-12.288 9.216-20.48 22.528-20.48 37.888l-5.12 0 0 166.912C284.672 921.6 281.6 931.84 281.6 942.08c0 33.792 27.648 60.416 62.464 60.416 31.744 0 57.344-22.528 61.44-51.2l0 0 0-2.048c0-2.048 0-5.12 0-7.168s0-5.12 0-7.168L405.504 769.024l122.88-150.528 66.56 0 47.104 188.416c2.048 10.24 7.168 19.456 15.36 26.624l0 0 178.176 156.672 5.12-4.096c11.264 10.24 26.624 16.384 43.008 16.384 34.816 0 63.488-26.624 63.488-60.416S919.552 881.664 884.736 881.664z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-meijiantouxia" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 739.555556l341.333333-455.111111L170.666667 284.444444 512 739.555556 512 739.555556z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-yonghu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.224104 917.319306c-77.375252 0-154.751526 0.081864-232.126778-0.045025-26.723641-0.044002-52.43421-4.900613-75.937506-18.372439-35.137265-20.140713-55.116295-50.706869-61.20599-90.454128-4.345981-28.366048-2.047636-56.843636 0.029676-85.208661 2.869351-39.186488 9.591449-77.761038 22.170952-115.085108 10.3006-30.56411 24.777313-58.95881 46.690392-83.018785 26.449395-29.040407 60.021002-42.817178 98.661044-46.334281 11.641131-1.060145 21.200858 1.968841 30.644951 8.175193 16.883529 11.095709 33.608445 22.578228 51.275827 32.3068 37.655621 20.73423 77.983095 32.903388 121.331369 32.41527 46.270836-0.51984 88.802512-14.421454 128.196731-38.241976 13.227256-7.998161 26.359344-16.225543 38.986943-25.125237 11.54801-8.138354 23.545252-10.837836 37.645388-9.131985 32.536021 3.937682 61.679781 15.095813 85.878926 37.527708 19.10922 17.71343 32.42141 39.578414 43.37795 63.001893 14.878872 31.810496 22.701025 65.61951 28.353768 100.030228 5.885034 35.827997 8.046257 71.955822 7.101745 108.197234-0.847298 32.527834-10.060123 62.342884-32.552393 86.857207-19.567661 21.326724-44.029796 34.114982-72.376401 39.089273-11.365862 1.994424-23.02132 3.227508-34.55091 3.269463C666.62259 917.454382 589.423347 917.319306 512.224104 917.319306z"  ></path>'+
      ''+
      '<path d="M309.606407 308.881906c-1.994424-107.937315 90.564645-202.308659 202.861244-202.233957 111.328551 0.074701 203.311499 93.649913 202.711841 203.866131-0.593518 109.069091-91.724051 201.926966-203.006554 201.914686C400.584468 512.416486 307.190381 418.46572 309.606407 308.881906z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-home" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M872.908328 459.82878l-290.731524-302.373679c-18.069541-18.760273-42.208311-29.104875-68.100004-29.104875-25.867134 0-50.030463 10.344602-68.088748 29.104875l-290.731524 302.373679c-30.005384 31.223119-26.136264 58.189284-21.180392 69.468165 3.530406 7.996115 15.464203 29.959336 49.842175 29.959336l42.6074 0 0 232.625128c0 52.78725 37.965683 102.537328 91.911316 102.537328l48.894593 0 74.857918 0 0-54.657854L442.189539 648.233777c0-26.394137-3.998057-41.098024 22.980387-41.098024l48.907896 0 48.919153 0c26.978445 0 22.968108 14.703887 22.968108 41.098024l0 191.527105 0 54.657854 74.857918 0 48.919153 0c53.93233 0 91.886757-49.750077 91.886757-102.537328L801.628912 559.25628l42.61968 0c34.376948 0 46.311769-21.963221 49.842175-29.959336C899.057895 518.018064 902.915759 491.050876 872.908328 459.82878zM844.248591 511.39011l-36.69269 0-24.452925 0-29.398564 0 0 280.491299c0 26.371624-17.008372 54.657854-43.962258 54.657854L633.890606 846.539262 633.890606 648.233777c0-52.79953-16.938788-88.977497-70.894653-88.977497l-48.919153 0-48.907896 0c-53.956889 0-70.89363 36.177967-70.89363 88.977497l0 198.305485-75.839269 0c-26.967188 0-43.986817-28.287253-43.986817-54.657854L274.449187 511.39011l-29.386284 0-24.453948 0-36.691667 0c-0.841158 0-1.612731-3.308349-2.313695-3.355421 1.659803-2.886747 4.51278-10.227945 9.269108-15.160281l290.75506-302.175157c8.6848-9.04705 20.946055-14.575973 32.832779-14.470573 11.887748-0.105401 23.403013 5.423523 32.077579 14.470573L837.303412 492.874407c4.747117 4.932336 7.599072 12.273535 9.257851 15.160281C845.861322 508.081761 845.101006 511.39011 844.248591 511.39011z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-qianbipencil82" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M895.856847 313.16299l-78.107152 78.107152L632.709534 206.228687l78.069657-78.107152c26.508929-26.508929 53.017859 0 53.017859 0l132.059798 132.022303C895.856847 260.145131 922.365776 286.654061 895.856847 313.16299zM116.361413 907.654465l224.336162-39.37099L155.246261 682.832162 116.361413 907.654465zM181.262584 657.661414l185.06602 185.06602 423.00897-423.00897L604.271554 234.652444 181.262584 657.661414z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-biaoge" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M283.3408 89.1904 69.2224 89.1904c-17.3056 0-31.3344 14.0288-31.3344 31.3344l0 173.1584c0 17.3056 14.0288 31.3344 31.3344 31.3344l214.2208 0c17.3056 0 31.3344-14.0288 31.3344-31.3344l0-173.1584C314.6752 103.1168 300.6464 89.1904 283.3408 89.1904z"  ></path>'+
      ''+
      '<path d="M616.5504 89.1904 402.3296 89.1904c-17.3056 0-31.3344 14.0288-31.3344 31.3344l0 173.1584c0 17.3056 14.0288 31.3344 31.3344 31.3344l214.2208 0c17.3056 0 31.3344-14.0288 31.3344-31.3344l0-173.1584C647.7824 103.1168 633.856 89.1904 616.5504 89.1904z"  ></path>'+
      ''+
      '<path d="M954.7776 89.1904l-214.2208 0c-17.3056 0-31.3344 14.0288-31.3344 31.3344l0 173.1584c0 17.3056 14.0288 31.3344 31.3344 31.3344l214.2208 0c17.3056 0 31.3344-14.0288 31.3344-31.3344l0-173.1584C986.112 103.1168 972.0832 89.1904 954.7776 89.1904z"  ></path>'+
      ''+
      '<path d="M283.3408 396.6976 69.2224 396.6976c-17.3056 0-31.3344 14.0288-31.3344 31.3344l0 173.1584c0 17.3056 14.0288 31.3344 31.3344 31.3344l214.2208 0c17.3056 0 31.3344-14.0288 31.3344-31.3344L314.7776 427.9296C314.6752 410.7264 300.6464 396.6976 283.3408 396.6976z"  ></path>'+
      ''+
      '<path d="M616.5504 396.6976 402.3296 396.6976c-17.3056 0-31.3344 14.0288-31.3344 31.3344l0 173.1584c0 17.3056 14.0288 31.3344 31.3344 31.3344l214.2208 0c17.3056 0 31.3344-14.0288 31.3344-31.3344L647.8848 427.9296C647.7824 410.7264 633.856 396.6976 616.5504 396.6976z"  ></path>'+
      ''+
      '<path d="M954.7776 396.6976l-214.2208 0c-17.3056 0-31.3344 14.0288-31.3344 31.3344l0 173.1584c0 17.3056 14.0288 31.3344 31.3344 31.3344l214.2208 0c17.3056 0 31.3344-14.0288 31.3344-31.3344L986.112 427.9296C986.112 410.7264 972.0832 396.6976 954.7776 396.6976z"  ></path>'+
      ''+
      '<path d="M283.3408 699.0848 69.2224 699.0848c-17.3056 0-31.3344 14.0288-31.3344 31.3344l0 173.1584c0 17.3056 14.0288 31.3344 31.3344 31.3344l214.2208 0c17.3056 0 31.3344-14.0288 31.3344-31.3344L314.7776 730.4192C314.6752 713.1136 300.6464 699.0848 283.3408 699.0848z"  ></path>'+
      ''+
      '<path d="M616.5504 699.0848 402.3296 699.0848c-17.3056 0-31.3344 14.0288-31.3344 31.3344l0 173.1584c0 17.3056 14.0288 31.3344 31.3344 31.3344l214.2208 0c17.3056 0 31.3344-14.0288 31.3344-31.3344L647.8848 730.4192C647.7824 713.1136 633.856 699.0848 616.5504 699.0848z"  ></path>'+
      ''+
      '<path d="M954.7776 699.0848l-214.2208 0c-17.3056 0-31.3344 14.0288-31.3344 31.3344l0 173.1584c0 17.3056 14.0288 31.3344 31.3344 31.3344l214.2208 0c17.3056 0 31.3344-14.0288 31.3344-31.3344L986.112 730.4192C986.112 713.1136 972.0832 699.0848 954.7776 699.0848z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tubulvxing" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M846.848 1003.52 846.848 245.76l40.96 0 0 757.76L846.848 1003.52zM557.4656 394.0352 519.168 552.96l252.1088 450.56L654.6432 1003.52 478.208 696.32l-61.44 307.2L293.888 1003.52c0 0 117.8624-631.0912 127.5904-688.128 7.3728-43.52 24.2688-58.9824 58.2656-58.9824 0 0 9.728 0 38.8096 0 29.184 0 37.2736 18.0224 58.2656 39.3216 21.0944 21.2992 58.2656 58.9824 58.2656 58.9824L805.888 307.2l0 81.92c0 0-141.0048 55.0912-170.7008 63.8976C615.936 458.752 557.4656 394.0352 557.4656 394.0352zM557.4656 217.088c-53.6576 0-97.1776-44.032-97.1776-98.304s43.52-98.304 97.1776-98.304 97.1776 44.032 97.1776 98.304C654.6432 173.056 611.1232 217.088 557.4656 217.088zM390.144 258.048c-13.312 61.0304-35.7376 193.4336-48.3328 257.8432-5.4272 27.648-21.1968 37.0688-42.8032 37.0688-35.9424 0-91.2384 0-128.6144 0-26.2144 0-38.2976-11.264-32.8704-37.1712C154.624 434.176 191.488 245.76 191.488 245.76s7.2704-20.48 40.96-20.48c0 0 79.0528 0 127.3856 0C376.4224 225.28 395.776 232.2432 390.144 258.048z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-diannao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M853.333333 768c46.933333 0 84.906667-38.4 84.906667-85.333333L938.666667 256c0-46.933333-38.4-85.333333-85.333333-85.333333L170.666667 170.666667C123.733333 170.666667 85.333333 209.066667 85.333333 256l0 426.666667c0 46.933333 38.4 85.333333 85.333333 85.333333L0 768l0 85.333333 1024 0 0-85.333333L853.333333 768zM170.666667 256l682.666667 0 0 426.666667L170.666667 682.666667 170.666667 256z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-diannao1" viewBox="0 0 1323 1024">'+
      ''+
      '<path d="M1226.368 1024 96.256 1024C43.093333 1024 0 996.736 0 963.050667L0 892.330667 1322.602667 892.330667 1322.602667 963.050667C1322.602667 996.736 1279.552 1024 1226.368 1024ZM779.434667 938.858667 543.210667 938.858667 543.210667 977.429333 779.434667 977.429333 779.434667 938.858667ZM1075.349333 785.194667 264.448 785.194667C201.728 785.194667 150.890667 725.056 150.890667 650.837333L150.890667 134.698667C150.890667 60.522667 201.728 0.298667 264.448 0.298667L1075.349333 0.298667C1138.048 0.298667 1188.864 60.522667 1188.864 134.698667L1188.864 650.837333C1188.864 725.056 1138.048 785.194667 1075.349333 785.194667ZM1130.624 162.858667C1130.624 100.437333 1085.994667 49.877333 1030.869333 49.877333L311.168 49.877333C256.085333 49.877333 211.413333 100.437333 211.413333 162.858667L211.413333 609.472C211.413333 671.744 256.085333 722.325333 311.168 722.325333L1030.869333 722.325333C1085.994667 722.325333 1130.624 671.744 1130.624 609.472L1130.624 162.858667Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-cogs" viewBox="0 0 1098 1024">'+
      ''+
      '<path d="M512 512q0-60.571429-42.857143-103.428571t-103.428571-42.857143-103.428571 42.857143-42.857143 103.428571 42.857143 103.428571 103.428571 42.857143 103.428571-42.857143 42.857143-103.428571zm438.857143 292.571429q0-29.714286-21.714286-51.428571t-51.428571-21.714286-51.428571 21.714286-21.714286 51.428571q0 30.285714 21.428571 51.714286t51.714286 21.428571 51.714286-21.428571 21.428571-51.714286zm0-585.142857q0-29.714286-21.714286-51.428571t-51.428571-21.714286-51.428571 21.714286-21.714286 51.428571q0 30.285714 21.428571 51.714286t51.714286 21.428571 51.714286-21.428571 21.428571-51.714286zm-219.428571 240.571429l0 105.714286q0 5.714286-4 11.142857t-9.142857 6l-88.571429 13.714286q-6.285714 20-18.285714 43.428571 19.428571 27.428571 51.428571 65.714286 4 5.714286 4 11.428571 0 6.857143-4 10.857143-13.142857 17.142857-47.142857 51.142857t-44.857143 34q-6.285714 0-12-4l-65.714286-51.428571q-21.142857 10.857143-44 17.714286-6.285714 61.714286-13.142857 88.571429-4 13.714286-17.142857 13.714286l-106.285714 0q-6.285714 0-11.428571-4.285714t-5.714286-10l-13.142857-87.428571q-19.428571-5.714286-42.857143-17.714286l-67.428571 50.857143q-4 4-11.428571 4-6.285714 0-12-4.571429-82.285714-76-82.285714-91.428571 0-5.142857 4-10.857143 5.714286-8 23.428571-30.285714t26.857143-34.857143q-13.142857-25.142857-20-46.857143l-86.857143-13.714286q-5.714286-0.571429-9.714286-5.428571t-4-11.142857l0-105.714286q0-5.714286 4-11.142857t9.142857-6l88.571429-13.714286q6.285714-20 18.285714-43.428571-19.428571-27.428571-51.428571-65.714286-4-6.285714-4-11.428571 0-6.857143 4-11.428571 12.571429-17.142857 46.857143-50.857143t45.142857-33.714286q6.285714 0 12 4l65.714286 51.428571q19.428571-10.285714 44-18.285714 6.285714-61.714286 13.142857-88 4-13.714286 17.142857-13.714286l106.285714 0q6.285714 0 11.428571 4.285714t5.714286 10l13.142857 87.428571q19.428571 5.714286 42.857143 17.714286l67.428571-50.857143q4.571429-4 11.428571-4 6.285714 0 12 4.571429 82.285714 76 82.285714 91.428571 0 5.142857-4 10.857143-6.857143 9.142857-24 30.857143t-25.714286 34.285714q13.142857 27.428571 19.428571 46.857143l86.857143 13.142857q5.714286 1.142857 9.714286 6t4 11.142857zm365.714286 304.571429l0 80q0 9.142857-85.142857 17.714286-6.857143 15.428571-17.142857 29.714286 29.142857 64.571429 29.142857 78.857143 0 2.285714-2.285714 4-69.714286 40.571429-70.857143 40.571429-4.571429 0-26.285714-26.857143t-29.714286-38.857143q-11.428571 1.142857-17.142857 1.142857t-17.142857-1.142857q-8 12-29.714286 38.857143t-26.285714 26.857143q-1.142857 0-70.857143-40.571429-2.285714-1.714286-2.285714-4 0-14.285714 29.142857-78.857143-10.285714-14.285714-17.142857-29.714286-85.142857-8.571429-85.142857-17.714286l0-80q0-9.142857 85.142857-17.714286 7.428571-16.571429 17.142857-29.714286-29.142857-64.571429-29.142857-78.857143 0-2.285714 2.285714-4 2.285714-1.142857 20-11.428571t33.714286-19.428571 17.142857-9.142857q4.571429 0 26.285714 26.571429t29.714286 38.571429q11.428571-1.142857 17.142857-1.142857t17.142857 1.142857q29.142857-40.571429 52.571429-64l3.428571-1.142857q2.285714 0 70.857143 40 2.285714 1.714286 2.285714 4 0 14.285714-29.142857 78.857143 9.714286 13.142857 17.142857 29.714286 85.142857 8.571429 85.142857 17.714286zm0-585.142857l0 80q0 9.142857-85.142857 17.714286-6.857143 15.428571-17.142857 29.714286 29.142857 64.571429 29.142857 78.857143 0 2.285714-2.285714 4-69.714286 40.571429-70.857143 40.571429-4.571429 0-26.285714-26.857143t-29.714286-38.857143q-11.428571 1.142857-17.142857 1.142857t-17.142857-1.142857q-8 12-29.714286 38.857143t-26.285714 26.857143q-1.142857 0-70.857143-40.571429-2.285714-1.714286-2.285714-4 0-14.285714 29.142857-78.857143-10.285714-14.285714-17.142857-29.714286-85.142857-8.571429-85.142857-17.714286l0-80q0-9.142857 85.142857-17.714286 7.428571-16.571429 17.142857-29.714286-29.142857-64.571429-29.142857-78.857143 0-2.285714 2.285714-4 2.285714-1.142857 20-11.428571t33.714286-19.428571 17.142857-9.142857q4.571429 0 26.285714 26.571429t29.714286 38.571429q11.428571-1.142857 17.142857-1.142857t17.142857 1.142857q29.142857-40.571429 52.571429-64l3.428571-1.142857q2.285714 0 70.857143 40 2.285714 1.714286 2.285714 4 0 14.285714-29.142857 78.857143 9.714286 13.142857 17.142857 29.714286 85.142857 8.571429 85.142857 17.714286z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shouzhong" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M236.051649 512.904603l7.018857-1.674129 0.717338-0.204661c18.964934-6.302543 31.707143-23.084765 31.707143-41.760103 0-18.025539-11.597129-34.08326-29.569456-40.98239-35.246759-16.014742-58.010205-51.127448-58.010205-89.527013 0-44.726667 39.574321-80.837096 78.666664-93.389994l4.191462-1.345648 1.364067-4.184299c7.196912-22.068621 18.057261-42.653449 32.281217-61.183478l0.530073-0.774643c2.372024-3.906983 4.976338-7.907087 7.740288-11.888771l8.866948-12.772908-15.530718-0.74292c-0.89744-0.042979-1.938142-0.189312-3.040243-0.343831-1.769296-0.248663-3.773953-0.530073-6.036483-0.530073-103.849206 0-188.337459 83.959204-188.337459 187.15861 0 42.7435 14.785751 83.977623 41.84299 117.26782C57.855154 508.024455 0.780251 605.099375 0.780251 711.937658l0 55.224766c0 24.438599 19.983123 44.322461 44.545542 44.322461l73.012897 0 0-8.613168c0-23.084765 2.180666-37.630039 7.068999-61.497633l2.117221-10.342556L80.086481 731.031529 80.086481 711.937658C80.086481 617.777115 144.261083 535.921829 236.051649 512.904603z"  ></path>'+
      ''+
      '<path d="M874.361402 456.023104c27.058262-33.290197 41.844014-74.525344 41.844014-117.26782 0-103.217826-84.488253-187.190333-188.338483-187.190333-2.2656 0-4.27128 0.283456-6.039553 0.533143-1.101077 0.155543-2.140757 0.301875-3.037173 0.344854l-15.533788 0.73985 8.867972 12.775978c2.77623 3.999081 5.380544 7.998161 7.740288 11.887748l0.531096 0.776689c14.235213 18.540262 25.086351 39.123043 32.252565 61.176314l1.363044 4.192485 4.196579 1.346671c41.034579 13.171997 84.647889 50.378387 84.647889 93.38897 0 38.409798-22.7614 73.522504-58.007135 89.527013-17.978467 6.892991-29.577642 22.948665-29.577642 40.98239 0 18.667152 12.742209 35.447327 31.706119 41.753963l7.642051 1.860371c91.88778 23.059182 156.064428 104.924701 156.064428 199.083198l0 19.09387-53.462632 0 2.13257 10.350742c4.78805 23.246447 7.065929 38.377052 7.065929 61.489446l0 8.613168 73.012897 0c24.563442 0 44.546565-19.882839 44.546565-44.322461l0-55.220672C1024.035284 605.105514 966.99108 508.032642 874.361402 456.023104z"  ></path>'+
      ''+
      '<path d="M661.87494 468.963835c47.843658-42.404786 75.000158-102.120842 75.000158-165.972079 0-122.877585-100.607372-222.846414-224.269833-222.846414-123.662461 0-224.269833 99.968829-224.269833 222.846414 0 63.854307 27.1565 123.56934 74.999135 165.972079-61.911048 27.375487-114.825189 70.942749-153.651472 126.670981-42.596144 61.137429-65.110927 132.799562-65.110927 207.235878l0 71.389934c0 24.442692 19.983123 44.327578 44.545542 44.327578l646.969994 0c24.563442 0 44.546565-19.884886 44.546565-44.327578l0-71.389934c0-74.458829-22.514783-146.128125-65.10888-207.258391C776.704222 539.900443 723.790082 496.340345 661.87494 468.963835zM512.631871 518.702656c163.614381 0 296.725028 132.231627 296.725028 294.76642l0 29.30749L215.822932 842.776565l0-29.30749C215.822932 650.934283 348.970418 518.702656 512.631871 518.702656zM365.20824 302.709323c0-80.704067 66.121953-146.362462 147.396002-146.362462s147.396002 65.657372 147.396002 146.362462S593.879313 449.070762 512.605265 449.070762 365.20824 383.41339 365.20824 302.709323z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-meettingcreaticosummary" viewBox="0 0 1061 1024">'+
      ''+
      '<path d="M1050.24 158.784C1029.866667 181.141333 970.986667 243.178667 970.986667 243.178667L813.909333 90.154667 891.285333 14.506667C891.285333 14.506667 906.901333 0 930.88 0 942.848 0 956.928 3.626667 972.16 14.506667 1017.877333 47.189333 1054.272 90.837333 1054.272 90.837333 1054.272 90.837333 1070.613333 136.448 1050.24 158.784ZM1013.248 113.344C1012.458667 109.76 1011.413333 106.496 1010.538667 104.042667 999.530667 92.693333 987.946667 78.506667 954.176 54.378667 947.008 49.258667 940.288 46.656 934.208 46.656 926.634667 46.656 920.682667 50.688 919.189333 51.797333L920.170667 50.837333 919.210667 51.754667 919.189333 51.797333C919.168 51.797333 919.168 51.797333 919.168 51.797333L880.405333 90.112 968.085333 177.728C988.501333 157.376 1002.304 140.096 1014.144 127.189333 1014.570667 125.696 1015.018667 121.216 1013.248 113.344ZM504.917333 697.514667 349.013333 539.349333 783.936 119.829333 933.973333 271.125333 504.917333 697.514667ZM422.485333 535.296 514.517333 626.88 872.810667 268.949333 786.026667 183.338667 422.485333 535.296ZM322.048 578.304 467.413333 718.144 234.666667 810.666667 320 576 322.048 578.304ZM390.250667 705.642667 337.024 653.632 298.730667 742.570667 390.250667 705.642667ZM64 959.338667 917.034667 960.576 917.034667 384.490667 980.821333 384.490667 980.821333 983.253333C980.821333 1005.717333 959.744 1024 937.109333 1024L41.066667 1024C18.432 1024 0 1005.717333 0 983.253333L0 105.216C0 82.730667 18.432 64.469333 41.066667 64.469333L640 64 640 128 64 128 64 959.338667Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
