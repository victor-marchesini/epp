    
            var map_2c9ecb98f39d4ac194034cc61e57ae63 = L.map(
                "map_2c9ecb98f39d4ac194034cc61e57ae63",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_81f03d307a3147a3921c2901846d5398 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_2c9ecb98f39d4ac194034cc61e57ae63);
        
    
            var choropleth_8dae50c06c79444989d05c5abcf09577 = L.featureGroup(
                {}
            ).addTo(map_2c9ecb98f39d4ac194034cc61e57ae63);
        
    
        function geo_json_ea675fe1a6d2494fb21974f54dd6857d_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 434: case 428: case 393: case 423: case 431: case 394: case 349: case 342: case 327: case 336: case 367: case 460: case 481: case 479: case 341: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 510: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_ea675fe1a6d2494fb21974f54dd6857d_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_ea675fe1a6d2494fb21974f54dd6857d = L.geoJson(null, {
                onEachFeature: geo_json_ea675fe1a6d2494fb21974f54dd6857d_onEachFeature,
            
                style: geo_json_ea675fe1a6d2494fb21974f54dd6857d_styler,
        });

        function geo_json_ea675fe1a6d2494fb21974f54dd6857d_add (data) {
            geo_json_ea675fe1a6d2494fb21974f54dd6857d
                .addData(data)
                .addTo(choropleth_8dae50c06c79444989d05c5abcf09577);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_ea675fe1a6d2494fb21974f54dd6857d_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_1661339d769a4d9ebbac41491a7190c2 = {};

    
    color_map_1661339d769a4d9ebbac41491a7190c2.color = d3.scale.threshold()
              .domain([0.0, 6.885771543086173, 13.771543086172345, 20.65731462925852, 27.54308617234469, 34.42885771543086, 41.31462925851704, 48.20040080160321, 55.08617234468938, 61.97194388777555, 68.85771543086172, 75.7434869739479, 82.62925851703407, 89.51503006012024, 96.40080160320642, 103.28657314629258, 110.17234468937876, 117.05811623246493, 123.9438877755511, 130.82965931863728, 137.71543086172343, 144.6012024048096, 151.4869739478958, 158.37274549098197, 165.25851703406815, 172.1442885771543, 179.03006012024048, 185.91583166332666, 192.80160320641284, 199.68737474949899, 206.57314629258516, 213.45891783567134, 220.34468937875752, 227.2304609218437, 234.11623246492985, 241.00200400801603, 247.8877755511022, 254.7735470941884, 261.65931863727457, 268.5450901803607, 275.43086172344687, 282.3166332665331, 289.2024048096192, 296.08817635270543, 302.9739478957916, 309.85971943887773, 316.74549098196394, 323.6312625250501, 330.5170340681363, 337.40280561122245, 344.2885771543086, 351.1743486973948, 358.06012024048096, 364.9458917835671, 371.8316633266533, 378.71743486973946, 385.60320641282567, 392.4889779559118, 399.37474949899797, 406.2605210420842, 413.14629258517033, 420.03206412825654, 426.9178356713427, 433.80360721442884, 440.68937875751504, 447.5751503006012, 454.4609218436874, 461.34669338677355, 468.2324649298597, 475.1182364729459, 482.00400801603206, 488.8897795591182, 495.7755511022044, 502.66132264529057, 509.5470941883768, 516.4328657314629, 523.3186372745491, 530.2044088176352, 537.0901803607214, 543.9759519038076, 550.8617234468937, 557.7474949899799, 564.6332665330661, 571.5190380761524, 578.4048096192384, 585.2905811623247, 592.1763527054109, 599.062124248497, 605.9478957915832, 612.8336673346694, 619.7194388777555, 626.6052104208417, 633.4909819639279, 640.376753507014, 647.2625250501002, 654.1482965931864, 661.0340681362726, 667.9198396793587, 674.8056112224449, 681.6913827655311, 688.5771543086172, 695.4629258517034, 702.3486973947896, 709.2344689378757, 716.1202404809619, 723.0060120240481, 729.8917835671342, 736.7775551102204, 743.6633266533066, 750.5490981963928, 757.4348697394789, 764.3206412825651, 771.2064128256513, 778.0921843687374, 784.9779559118236, 791.8637274549098, 798.7494989979959, 805.6352705410821, 812.5210420841684, 819.4068136272546, 826.2925851703407, 833.1783567134269, 840.0641282565131, 846.9498997995992, 853.8356713426854, 860.7214428857716, 867.6072144288577, 874.4929859719439, 881.3787575150301, 888.2645290581162, 895.1503006012024, 902.0360721442886, 908.9218436873748, 915.8076152304609, 922.6933867735471, 929.5791583166333, 936.4649298597194, 943.3507014028056, 950.2364729458918, 957.1222444889779, 964.0080160320641, 970.8937875751503, 977.7795591182364, 984.6653306613226, 991.5511022044088, 998.436873747495, 1005.3226452905811, 1012.2084168336673, 1019.0941883767536, 1025.9799599198398, 1032.8657314629259, 1039.751503006012, 1046.6372745490983, 1053.5230460921844, 1060.4088176352705, 1067.2945891783568, 1074.1803607214429, 1081.066132264529, 1087.9519038076153, 1094.8376753507014, 1101.7234468937875, 1108.6092184368738, 1115.4949899799599, 1122.3807615230462, 1129.2665330661323, 1136.1523046092184, 1143.0380761523047, 1149.9238476953908, 1156.809619238477, 1163.6953907815632, 1170.5811623246493, 1177.4669338677354, 1184.3527054108217, 1191.2384769539078, 1198.124248496994, 1205.0100200400802, 1211.8957915831663, 1218.7815631262524, 1225.6673346693387, 1232.5531062124248, 1239.438877755511, 1246.3246492985973, 1253.2104208416833, 1260.0961923847694, 1266.9819639278558, 1273.8677354709419, 1280.753507014028, 1287.6392785571143, 1294.5250501002004, 1301.4108216432867, 1308.2965931863728, 1315.1823647294589, 1322.0681362725452, 1328.9539078156313, 1335.8396793587174, 1342.7254509018037, 1349.6112224448898, 1356.4969939879759, 1363.3827655310622, 1370.2685370741483, 1377.1543086172344, 1384.0400801603207, 1390.9258517034068, 1397.811623246493, 1404.6973947895792, 1411.5831663326653, 1418.4689378757514, 1425.3547094188377, 1432.2404809619238, 1439.12625250501, 1446.0120240480962, 1452.8977955911823, 1459.7835671342684, 1466.6693386773547, 1473.5551102204408, 1480.4408817635272, 1487.3266533066133, 1494.2124248496993, 1501.0981963927857, 1507.9839679358718, 1514.8697394789579, 1521.7555110220442, 1528.6412825651303, 1535.5270541082164, 1542.4128256513027, 1549.2985971943888, 1556.1843687374749, 1563.0701402805612, 1569.9559118236473, 1576.8416833667334, 1583.7274549098197, 1590.6132264529058, 1597.4989979959919, 1604.3847695390782, 1611.2705410821643, 1618.1563126252504, 1625.0420841683367, 1631.9278557114228, 1638.8136272545091, 1645.6993987975952, 1652.5851703406813, 1659.4709418837676, 1666.3567134268537, 1673.2424849699398, 1680.1282565130261, 1687.0140280561122, 1693.8997995991983, 1700.7855711422847, 1707.6713426853707, 1714.5571142284568, 1721.4428857715432, 1728.3286573146293, 1735.2144288577153, 1742.1002004008017, 1748.9859719438878, 1755.8717434869739, 1762.7575150300602, 1769.6432865731463, 1776.5290581162324, 1783.4148296593187, 1790.3006012024048, 1797.1863727454909, 1804.0721442885772, 1810.9579158316633, 1817.8436873747496, 1824.7294589178357, 1831.6152304609218, 1838.5010020040081, 1845.3867735470942, 1852.2725450901803, 1859.1583166332666, 1866.0440881763527, 1872.9298597194388, 1879.8156312625251, 1886.7014028056112, 1893.5871743486973, 1900.4729458917836, 1907.3587174348697, 1914.2444889779558, 1921.1302605210421, 1928.0160320641282, 1934.9018036072143, 1941.7875751503007, 1948.6733466933867, 1955.5591182364728, 1962.4448897795592, 1969.3306613226453, 1976.2164328657316, 1983.1022044088177, 1989.9879759519038, 1996.87374749499, 2003.7595190380762, 2010.6452905811623, 2017.5310621242486, 2024.4168336673347, 2031.3026052104208, 2038.188376753507, 2045.0741482965932, 2051.9599198396795, 2058.8456913827654, 2065.7314629258517, 2072.617234468938, 2079.503006012024, 2086.38877755511, 2093.2745490981965, 2100.1603206412824, 2107.0460921843687, 2113.931863727455, 2120.817635270541, 2127.703406813627, 2134.5891783567135, 2141.4749498997994, 2148.3607214428857, 2155.246492985972, 2162.132264529058, 2169.0180360721442, 2175.9038076152306, 2182.7895791583164, 2189.6753507014027, 2196.561122244489, 2203.446893787575, 2210.3326653306613, 2217.2184368737476, 2224.1042084168334, 2230.9899799599198, 2237.875751503006, 2244.7615230460924, 2251.6472945891783, 2258.5330661322646, 2265.418837675351, 2272.304609218437, 2279.190380761523, 2286.0761523046094, 2292.9619238476953, 2299.8476953907816, 2306.733466933868, 2313.619238476954, 2320.50501002004, 2327.3907815631264, 2334.2765531062123, 2341.1623246492986, 2348.048096192385, 2354.933867735471, 2361.819639278557, 2368.7054108216435, 2375.5911823647293, 2382.4769539078156, 2389.362725450902, 2396.248496993988, 2403.134268537074, 2410.0200400801605, 2416.9058116232463, 2423.7915831663327, 2430.677354709419, 2437.563126252505, 2444.448897795591, 2451.3346693386775, 2458.2204408817634, 2465.1062124248497, 2471.991983967936, 2478.877755511022, 2485.763527054108, 2492.6492985971945, 2499.5350701402804, 2506.4208416833667, 2513.306613226453, 2520.192384769539, 2527.078156312625, 2533.9639278557115, 2540.8496993987974, 2547.7354709418837, 2554.62124248497, 2561.507014028056, 2568.392785571142, 2575.2785571142285, 2582.164328657315, 2589.0501002004007, 2595.935871743487, 2602.8216432865734, 2609.7074148296592, 2616.5931863727455, 2623.478957915832, 2630.3647294589177, 2637.250501002004, 2644.1362725450904, 2651.0220440881762, 2657.9078156312626, 2664.793587174349, 2671.6793587174348, 2678.565130260521, 2685.4509018036074, 2692.3366733466933, 2699.2224448897796, 2706.108216432866, 2712.9939879759518, 2719.879759519038, 2726.7655310621244, 2733.6513026052103, 2740.5370741482966, 2747.422845691383, 2754.308617234469, 2761.194388777555, 2768.0801603206414, 2774.9659318637273, 2781.8517034068136, 2788.7374749499, 2795.623246492986, 2802.509018036072, 2809.3947895791584, 2816.2805611222443, 2823.1663326653306, 2830.052104208417, 2836.937875751503, 2843.823647294589, 2850.7094188376755, 2857.5951903807613, 2864.4809619238476, 2871.366733466934, 2878.25250501002, 2885.138276553106, 2892.0240480961925, 2898.9098196392783, 2905.7955911823647, 2912.681362725451, 2919.567134268537, 2926.452905811623, 2933.3386773547095, 2940.224448897796, 2947.1102204408817, 2953.995991983968, 2960.8817635270543, 2967.76753507014, 2974.6533066132265, 2981.539078156313, 2988.4248496993987, 2995.310621242485, 3002.1963927855713, 3009.082164328657, 3015.9679358717435, 3022.85370741483, 3029.7394789579157, 3036.625250501002, 3043.5110220440883, 3050.396793587174, 3057.2825651302605, 3064.168336673347, 3071.0541082164327, 3077.939879759519, 3084.8256513026054, 3091.7114228456912, 3098.5971943887776, 3105.482965931864, 3112.3687374749497, 3119.254509018036, 3126.1402805611224, 3133.0260521042082, 3139.9118236472946, 3146.797595190381, 3153.6833667334668, 3160.569138276553, 3167.4549098196394, 3174.3406813627253, 3181.2264529058116, 3188.112224448898, 3194.9979959919838, 3201.88376753507, 3208.7695390781564, 3215.6553106212423, 3222.5410821643286, 3229.426853707415, 3236.312625250501, 3243.198396793587, 3250.0841683366734, 3256.9699398797593, 3263.8557114228456, 3270.741482965932, 3277.6272545090183, 3284.513026052104, 3291.3987975951904, 3298.2845691382768, 3305.1703406813626, 3312.056112224449, 3318.9418837675353, 3325.827655310621, 3332.7134268537075, 3339.599198396794, 3346.4849699398796, 3353.370741482966, 3360.2565130260523, 3367.142284569138, 3374.0280561122245, 3380.913827655311, 3387.7995991983967, 3394.685370741483, 3401.5711422845693, 3408.456913827655, 3415.3426853707415, 3422.228456913828, 3429.1142284569137, 3436.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_1661339d769a4d9ebbac41491a7190c2.x = d3.scale.linear()
              .domain([0.0, 3436.0])
              .range([0, 400]);

    color_map_1661339d769a4d9ebbac41491a7190c2.legend = L.control({position: 'topright'});
    color_map_1661339d769a4d9ebbac41491a7190c2.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_1661339d769a4d9ebbac41491a7190c2.legend.addTo(map_2c9ecb98f39d4ac194034cc61e57ae63);

    color_map_1661339d769a4d9ebbac41491a7190c2.xAxis = d3.svg.axis()
        .scale(color_map_1661339d769a4d9ebbac41491a7190c2.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 572.6666666666666, 1145.3333333333333, 1718.0, 2290.6666666666665, 2863.333333333333, 3436.0]);

    color_map_1661339d769a4d9ebbac41491a7190c2.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_1661339d769a4d9ebbac41491a7190c2.g = color_map_1661339d769a4d9ebbac41491a7190c2.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_1661339d769a4d9ebbac41491a7190c2.g.selectAll("rect")
        .data(color_map_1661339d769a4d9ebbac41491a7190c2.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_1661339d769a4d9ebbac41491a7190c2.x(color_map_1661339d769a4d9ebbac41491a7190c2.color.domain()[i - 1]) : color_map_1661339d769a4d9ebbac41491a7190c2.x.range()[0],
            x1: i < color_map_1661339d769a4d9ebbac41491a7190c2.color.domain().length ? color_map_1661339d769a4d9ebbac41491a7190c2.x(color_map_1661339d769a4d9ebbac41491a7190c2.color.domain()[i]) : color_map_1661339d769a4d9ebbac41491a7190c2.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_1661339d769a4d9ebbac41491a7190c2.g.call(color_map_1661339d769a4d9ebbac41491a7190c2.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('15_50_WILLIAM CARLOS BRUM BISPO');

