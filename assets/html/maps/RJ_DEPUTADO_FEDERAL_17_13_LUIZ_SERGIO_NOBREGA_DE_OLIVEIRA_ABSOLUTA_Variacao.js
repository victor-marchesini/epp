    
            var map_259b315a0e694030a02a1e88b24a5232 = L.map(
                "map_259b315a0e694030a02a1e88b24a5232",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_20c1fd63521a430a93447c07291892ba = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_259b315a0e694030a02a1e88b24a5232);
        
    
            var choropleth_9dd97d9944374d05ac0c1cc9311b9ef3 = L.featureGroup(
                {}
            ).addTo(map_259b315a0e694030a02a1e88b24a5232);
        
    
        function geo_json_3535d88c1ffd4a15980e3cbb5c85e325_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 423: case 431: case 349: case 342: case 336: case 367: case 460: case 475: case 357: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_3535d88c1ffd4a15980e3cbb5c85e325_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_3535d88c1ffd4a15980e3cbb5c85e325 = L.geoJson(null, {
                onEachFeature: geo_json_3535d88c1ffd4a15980e3cbb5c85e325_onEachFeature,
            
                style: geo_json_3535d88c1ffd4a15980e3cbb5c85e325_styler,
        });

        function geo_json_3535d88c1ffd4a15980e3cbb5c85e325_add (data) {
            geo_json_3535d88c1ffd4a15980e3cbb5c85e325
                .addData(data)
                .addTo(choropleth_9dd97d9944374d05ac0c1cc9311b9ef3);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_3535d88c1ffd4a15980e3cbb5c85e325_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_43bd1c8cb9604963acadd0fb403e136b = {};

    
    color_map_43bd1c8cb9604963acadd0fb403e136b.color = d3.scale.threshold()
              .domain([-3989.0, -3980.835671342685, -3972.6713426853707, -3964.507014028056, -3956.3426853707415, -3948.1783567134266, -3940.0140280561122, -3931.8496993987974, -3923.685370741483, -3915.521042084168, -3907.3567134268537, -3899.192384769539, -3891.0280561122245, -3882.8637274549096, -3874.699398797595, -3866.5350701402804, -3858.370741482966, -3850.206412825651, -3842.0420841683367, -3833.877755511022, -3825.7134268537075, -3817.5490981963926, -3809.384769539078, -3801.2204408817634, -3793.056112224449, -3784.891783567134, -3776.7274549098197, -3768.563126252505, -3760.3987975951904, -3752.2344689378756, -3744.070140280561, -3735.9058116232463, -3727.741482965932, -3719.577154308617, -3711.4128256513027, -3703.248496993988, -3695.0841683366734, -3686.9198396793586, -3678.755511022044, -3670.5911823647293, -3662.426853707415, -3654.2625250501, -3646.0981963927857, -3637.933867735471, -3629.7695390781564, -3621.6052104208416, -3613.440881763527, -3605.2765531062123, -3597.112224448898, -3588.947895791583, -3580.7835671342687, -3572.619238476954, -3564.4549098196394, -3556.2905811623245, -3548.12625250501, -3539.9619238476953, -3531.797595190381, -3523.633266533066, -3515.4689378757516, -3507.304609218437, -3499.1402805611224, -3490.9759519038075, -3482.811623246493, -3474.6472945891783, -3466.482965931864, -3458.318637274549, -3450.1543086172346, -3441.9899799599198, -3433.8256513026054, -3425.6613226452905, -3417.496993987976, -3409.3326653306613, -3401.168336673347, -3393.004008016032, -3384.8396793587176, -3376.6753507014027, -3368.5110220440883, -3360.3466933867735, -3352.1823647294586, -3344.0180360721442, -3335.85370741483, -3327.689378757515, -3319.5250501002, -3311.3607214428857, -3303.1963927855713, -3295.0320641282565, -3286.8677354709416, -3278.703406813627, -3270.539078156313, -3262.374749498998, -3254.210420841683, -3246.0460921843687, -3237.8817635270543, -3229.7174348697395, -3221.5531062124246, -3213.38877755511, -3205.224448897796, -3197.060120240481, -3188.895791583166, -3180.7314629258517, -3172.5671342685373, -3164.4028056112224, -3156.2384769539076, -3148.074148296593, -3139.909819639279, -3131.745490981964, -3123.581162324649, -3115.4168336673347, -3107.2525050100203, -3099.0881763527054, -3090.9238476953906, -3082.759519038076, -3074.595190380762, -3066.430861723447, -3058.266533066132, -3050.1022044088177, -3041.9378757515033, -3033.7735470941884, -3025.6092184368736, -3017.444889779559, -3009.2805611222448, -3001.11623246493, -2992.951903807615, -2984.7875751503007, -2976.6232464929863, -2968.4589178356714, -2960.2945891783565, -2952.130260521042, -2943.9659318637277, -2935.801603206413, -2927.637274549098, -2919.4729458917836, -2911.3086172344692, -2903.1442885771544, -2894.9799599198395, -2886.815631262525, -2878.6513026052107, -2870.486973947896, -2862.322645290581, -2854.1583166332666, -2845.993987975952, -2837.8296593186374, -2829.6653306613225, -2821.501002004008, -2813.3366733466937, -2805.172344689379, -2797.008016032064, -2788.8436873747496, -2780.679358717435, -2772.5150300601204, -2764.3507014028055, -2756.186372745491, -2748.0220440881762, -2739.8577154308614, -2731.693386773547, -2723.5290581162326, -2715.3647294589177, -2707.200400801603, -2699.0360721442885, -2690.871743486974, -2682.7074148296592, -2674.5430861723444, -2666.37875751503, -2658.2144288577156, -2650.0501002004007, -2641.885771543086, -2633.7214428857715, -2625.557114228457, -2617.392785571142, -2609.2284569138274, -2601.064128256513, -2592.8997995991986, -2584.7354709418837, -2576.571142284569, -2568.4068136272545, -2560.24248496994, -2552.078156312625, -2543.9138276553103, -2535.749498997996, -2527.5851703406815, -2519.4208416833667, -2511.256513026052, -2503.0921843687374, -2494.927855711423, -2486.763527054108, -2478.5991983967933, -2470.434869739479, -2462.2705410821645, -2454.1062124248497, -2445.941883767535, -2437.7775551102204, -2429.613226452906, -2421.448897795591, -2413.2845691382763, -2405.120240480962, -2396.9559118236475, -2388.7915831663327, -2380.627254509018, -2372.4629258517034, -2364.298597194389, -2356.134268537074, -2347.9699398797593, -2339.805611222445, -2331.6412825651305, -2323.4769539078156, -2315.312625250501, -2307.1482965931864, -2298.983967935872, -2290.819639278557, -2282.6553106212423, -2274.490981963928, -2266.3266533066135, -2258.1623246492986, -2249.9979959919838, -2241.8336673346694, -2233.669338677355, -2225.50501002004, -2217.3406813627253, -2209.176352705411, -2201.0120240480965, -2192.8476953907816, -2184.6833667334668, -2176.5190380761524, -2168.354709418838, -2160.190380761523, -2152.0260521042082, -2143.861723446894, -2135.6973947895794, -2127.5330661322646, -2119.3687374749497, -2111.2044088176353, -2103.040080160321, -2094.875751503006, -2086.7114228456912, -2078.547094188377, -2070.3827655310624, -2062.2184368737476, -2054.0541082164327, -2045.8897795591183, -2037.7254509018037, -2029.561122244489, -2021.3967935871744, -2013.2324649298598, -2005.0681362725452, -1996.9038076152306, -1988.739478957916, -1980.5751503006013, -1972.4108216432867, -1964.246492985972, -1956.0821643286574, -1947.9178356713426, -1939.753507014028, -1931.5891783567135, -1923.4248496993987, -1915.2605210420843, -1907.0961923847694, -1898.931863727455, -1890.7675350701402, -1882.6032064128258, -1874.438877755511, -1866.2745490981965, -1858.1102204408817, -1849.9458917835673, -1841.7815631262524, -1833.617234468938, -1825.4529058116232, -1817.2885771543088, -1809.124248496994, -1800.9599198396795, -1792.7955911823647, -1784.6312625250503, -1776.4669338677354, -1768.302605210421, -1760.1382765531062, -1751.9739478957918, -1743.809619238477, -1735.6452905811625, -1727.4809619238476, -1719.3166332665332, -1711.1523046092184, -1702.987975951904, -1694.8236472945891, -1686.6593186372747, -1678.4949899799599, -1670.3306613226455, -1662.1663326653306, -1654.0020040080162, -1645.8376753507014, -1637.673346693387, -1629.5090180360721, -1621.3446893787577, -1613.1803607214429, -1605.0160320641285, -1596.8517034068136, -1588.6873747494992, -1580.5230460921844, -1572.35871743487, -1564.194388777555, -1556.0300601202407, -1547.8657314629259, -1539.701402805611, -1531.5370741482966, -1523.3727454909817, -1515.2084168336673, -1507.0440881763525, -1498.879759519038, -1490.7154308617232, -1482.5511022044088, -1474.386773547094, -1466.2224448897796, -1458.0581162324647, -1449.8937875751503, -1441.7294589178355, -1433.565130260521, -1425.4008016032062, -1417.2364729458918, -1409.072144288577, -1400.9078156312626, -1392.7434869739477, -1384.5791583166333, -1376.4148296593185, -1368.250501002004, -1360.0861723446892, -1351.9218436873748, -1343.75751503006, -1335.5931863727455, -1327.4288577154307, -1319.2645290581163, -1311.1002004008014, -1302.935871743487, -1294.7715430861722, -1286.6072144288578, -1278.442885771543, -1270.2785571142285, -1262.1142284569137, -1253.9498997995993, -1245.7855711422844, -1237.62124248497, -1229.4569138276552, -1221.2925851703408, -1213.128256513026, -1204.9639278557115, -1196.7995991983967, -1188.6352705410823, -1180.4709418837674, -1172.306613226453, -1164.1422845691382, -1155.9779559118238, -1147.813627254509, -1139.6492985971945, -1131.4849699398796, -1123.3206412825652, -1115.1563126252504, -1106.991983967936, -1098.8276553106211, -1090.6633266533067, -1082.4989979959919, -1074.3346693386775, -1066.1703406813626, -1058.0060120240482, -1049.8416833667334, -1041.677354709419, -1033.5130260521041, -1025.3486973947897, -1017.1843687374749, -1009.0200400801605, -1000.8557114228456, -992.6913827655312, -984.5270541082164, -976.362725450902, -968.1983967935871, -960.0340681362727, -951.8697394789579, -943.7054108216435, -935.5410821643286, -927.3767535070142, -919.2124248496993, -911.048096192385, -902.8837675350701, -894.7194388777557, -886.5551102204408, -878.3907815631264, -870.2264529058116, -862.0621242484972, -853.8977955911823, -845.7334669338679, -837.5691382765531, -829.4048096192387, -821.2404809619238, -813.0761523046094, -804.9118236472946, -796.7474949899802, -788.5831663326653, -780.4188376753509, -772.2545090180361, -764.0901803607217, -755.9258517034068, -747.7615230460924, -739.5971943887776, -731.4328657314632, -723.2685370741483, -715.1042084168334, -706.939879759519, -698.7755511022042, -690.6112224448898, -682.4468937875749, -674.2825651302605, -666.1182364729457, -657.9539078156313, -649.7895791583164, -641.625250501002, -633.4609218436872, -625.2965931863728, -617.1322645290579, -608.9679358717435, -600.8036072144287, -592.6392785571143, -584.4749498997994, -576.310621242485, -568.1462925851702, -559.9819639278558, -551.8176352705409, -543.6533066132265, -535.4889779559117, -527.3246492985973, -519.1603206412824, -510.995991983968, -502.83166332665314, -494.66733466933874, -486.5030060120239, -478.3386773547095, -470.17434869739463, -462.01002004008024, -453.8456913827654, -445.681362725451, -437.5170340681361, -429.3527054108217, -421.1883767535069, -413.0240480961925, -404.8597194388776, -396.6953907815632, -388.53106212424836, -380.36673346693397, -372.2024048096191, -364.0380761523047, -355.87374749498986, -347.70941883767546, -339.5450901803606, -331.3807615230462, -323.21643286573135, -315.05210420841695, -306.8877755511021, -298.7234468937877, -290.55911823647284, -282.39478957915844, -274.2304609218436, -266.0661322645292, -257.90180360721433, -249.73747494989993, -241.57314629258508, -233.40881763527068, -225.24448897795583, -217.08016032064143, -208.91583166332657, -200.75150300601217, -192.58717434869732, -184.42284569138292, -176.25851703406806, -168.09418837675366, -159.9298597194388, -151.7655310621244, -143.60120240480956, -135.43687374749516, -127.2725450901803, -119.1082164328659, -110.94388777555105, -102.77955911823665, -94.6152304609218, -86.4509018036074, -78.28657314629254, -70.12224448897814, -61.957915831663286, -53.793587174348886, -45.62925851703403, -37.46492985971963, -29.300601202404778, -21.136272545090378, -12.971943887775524, -4.807615230461124, 3.35671342685373, 11.52104208416813, 19.685370741482984, 27.849699398797384, 36.01402805611224, 44.17835671342664, 52.34268537074149, 60.50701402805589, 68.67134268537075, 76.83567134268515, 85.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_43bd1c8cb9604963acadd0fb403e136b.x = d3.scale.linear()
              .domain([-3989.0, 85.0])
              .range([0, 400]);

    color_map_43bd1c8cb9604963acadd0fb403e136b.legend = L.control({position: 'topright'});
    color_map_43bd1c8cb9604963acadd0fb403e136b.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_43bd1c8cb9604963acadd0fb403e136b.legend.addTo(map_259b315a0e694030a02a1e88b24a5232);

    color_map_43bd1c8cb9604963acadd0fb403e136b.xAxis = d3.svg.axis()
        .scale(color_map_43bd1c8cb9604963acadd0fb403e136b.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-3989.0, -3310.0, -2631.0, -1952.0, -1273.0, -594.0, 85.0]);

    color_map_43bd1c8cb9604963acadd0fb403e136b.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_43bd1c8cb9604963acadd0fb403e136b.g = color_map_43bd1c8cb9604963acadd0fb403e136b.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_43bd1c8cb9604963acadd0fb403e136b.g.selectAll("rect")
        .data(color_map_43bd1c8cb9604963acadd0fb403e136b.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_43bd1c8cb9604963acadd0fb403e136b.x(color_map_43bd1c8cb9604963acadd0fb403e136b.color.domain()[i - 1]) : color_map_43bd1c8cb9604963acadd0fb403e136b.x.range()[0],
            x1: i < color_map_43bd1c8cb9604963acadd0fb403e136b.color.domain().length ? color_map_43bd1c8cb9604963acadd0fb403e136b.x(color_map_43bd1c8cb9604963acadd0fb403e136b.color.domain()[i]) : color_map_43bd1c8cb9604963acadd0fb403e136b.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_43bd1c8cb9604963acadd0fb403e136b.g.call(color_map_43bd1c8cb9604963acadd0fb403e136b.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('17_13_LUIZ SERGIO NOBREGA DE OLIVEIRA');
