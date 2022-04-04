    
            var map_6fc26613921c42e18f16a24a50161544 = L.map(
                "map_6fc26613921c42e18f16a24a50161544",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_a46c8bdcff914b26a6b4746539b0b211 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_6fc26613921c42e18f16a24a50161544);
        
    
            var choropleth_ff50ebf4ed9c4d46b98c46e1c7039b70 = L.featureGroup(
                {}
            ).addTo(map_6fc26613921c42e18f16a24a50161544);
        
    
        function geo_json_ba909767811b4efdaef80d26332ad23c_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 439: case 382: case 346: case 347: case 337: case 378: case 406: case 890: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 418: case 447: case 466: case 473: case 472: case 470: case 478: case 436: case 446: case 392: case 343: case 351: case 396: case 375: case 419: case 411: case 398: case 385: case 368: case 372: case 356: case 355: case 350: case 454: case 433: case 429: case 409: case 471: case 458: case 384: case 414: case 476: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 474: case 374: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 369: case 370: case 511: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 423: case 431: case 349: case 342: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 457: case 389: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_ba909767811b4efdaef80d26332ad23c_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_ba909767811b4efdaef80d26332ad23c = L.geoJson(null, {
                onEachFeature: geo_json_ba909767811b4efdaef80d26332ad23c_onEachFeature,
            
                style: geo_json_ba909767811b4efdaef80d26332ad23c_styler,
        });

        function geo_json_ba909767811b4efdaef80d26332ad23c_add (data) {
            geo_json_ba909767811b4efdaef80d26332ad23c
                .addData(data)
                .addTo(choropleth_ff50ebf4ed9c4d46b98c46e1c7039b70);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_ba909767811b4efdaef80d26332ad23c_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_cf1876afb482421cb29cf808c4fdf363 = {};

    
    color_map_cf1876afb482421cb29cf808c4fdf363.color = d3.scale.threshold()
              .domain([1.0, 8.150300601202405, 15.30060120240481, 22.450901803607213, 29.60120240480962, 36.75150300601202, 43.901803607214426, 51.052104208416836, 58.20240480961924, 65.35270541082164, 72.50300601202404, 79.65330661322645, 86.80360721442885, 93.95390781563127, 101.10420841683367, 108.25450901803607, 115.40480961923848, 122.55511022044088, 129.70541082164328, 136.8557114228457, 144.0060120240481, 151.1563126252505, 158.3066132264529, 165.4569138276553, 172.6072144288577, 179.75751503006012, 186.90781563126254, 194.05811623246493, 201.20841683366734, 208.35871743486973, 215.50901803607215, 222.65931863727454, 229.80961923847696, 236.95991983967937, 244.11022044088176, 251.26052104208418, 258.41082164328657, 265.56112224448896, 272.7114228456914, 279.8617234468938, 287.0120240480962, 294.1623246492986, 301.312625250501, 308.4629258517034, 315.6132264529058, 322.76352705410824, 329.9138276553106, 337.064128256513, 344.2144288577154, 351.36472945891785, 358.51503006012024, 365.6653306613226, 372.8156312625251, 379.96593186372746, 387.11623246492985, 394.26653306613224, 401.4168336673347, 408.5671342685371, 415.71743486973946, 422.8677354709419, 430.0180360721443, 437.1683366733467, 444.3186372745491, 451.4689378757515, 458.6192384769539, 465.7695390781563, 472.91983967935874, 480.07014028056113, 487.2204408817635, 494.3707414829659, 501.52104208416836, 508.67134268537075, 515.8216432865731, 522.9719438877755, 530.1222444889779, 537.2725450901804, 544.4228456913828, 551.5731462925852, 558.7234468937876, 565.87374749499, 573.0240480961924, 580.1743486973947, 587.3246492985973, 594.4749498997996, 601.625250501002, 608.7755511022044, 615.9258517034068, 623.0761523046092, 630.2264529058116, 637.376753507014, 644.5270541082165, 651.6773547094189, 658.8276553106213, 665.9779559118236, 673.128256513026, 680.2785571142284, 687.4288577154308, 694.5791583166333, 701.7294589178357, 708.8797595190381, 716.0300601202405, 723.1803607214429, 730.3306613226453, 737.4809619238476, 744.6312625250501, 751.7815631262525, 758.9318637274549, 766.0821643286573, 773.2324649298597, 780.3827655310621, 787.5330661322645, 794.683366733467, 801.8336673346694, 808.9839679358718, 816.1342685370741, 823.2845691382765, 830.4348697394789, 837.5851703406813, 844.7354709418838, 851.8857715430862, 859.0360721442886, 866.186372745491, 873.3366733466934, 880.4869739478958, 887.6372745490982, 894.7875751503007, 901.937875751503, 909.0881763527054, 916.2384769539078, 923.3887775551102, 930.5390781563126, 937.689378757515, 944.8396793587175, 951.9899799599199, 959.1402805611223, 966.2905811623247, 973.440881763527, 980.5911823647294, 987.7414829659318, 994.8917835671342, 1002.0420841683367, 1009.1923847695391, 1016.3426853707415, 1023.4929859719439, 1030.6432865731463, 1037.7935871743487, 1044.943887775551, 1052.0941883767534, 1059.2444889779558, 1066.3947895791582, 1073.5450901803608, 1080.6953907815632, 1087.8456913827656, 1094.995991983968, 1102.1462925851704, 1109.2965931863728, 1116.4468937875752, 1123.5971943887776, 1130.74749498998, 1137.8977955911823, 1145.0480961923847, 1152.198396793587, 1159.3486973947895, 1166.4989979959919, 1173.6492985971945, 1180.799599198397, 1187.9498997995993, 1195.1002004008017, 1202.250501002004, 1209.4008016032064, 1216.5511022044088, 1223.7014028056112, 1230.8517034068136, 1238.002004008016, 1245.1523046092184, 1252.3026052104208, 1259.4529058116232, 1266.6032064128256, 1273.753507014028, 1280.9038076152306, 1288.054108216433, 1295.2044088176353, 1302.3547094188377, 1309.5050100200401, 1316.6553106212425, 1323.805611222445, 1330.9559118236473, 1338.1062124248497, 1345.256513026052, 1352.4068136272545, 1359.5571142284568, 1366.7074148296592, 1373.8577154308616, 1381.0080160320642, 1388.1583166332666, 1395.308617234469, 1402.4589178356714, 1409.6092184368738, 1416.7595190380762, 1423.9098196392786, 1431.060120240481, 1438.2104208416833, 1445.3607214428857, 1452.5110220440881, 1459.6613226452905, 1466.811623246493, 1473.9619238476953, 1481.112224448898, 1488.2625250501003, 1495.4128256513027, 1502.563126252505, 1509.7134268537075, 1516.8637274549098, 1524.0140280561122, 1531.1643286573146, 1538.314629258517, 1545.4649298597194, 1552.6152304609218, 1559.7655310621242, 1566.9158316633266, 1574.066132264529, 1581.2164328657316, 1588.366733466934, 1595.5170340681364, 1602.6673346693387, 1609.8176352705411, 1616.9679358717435, 1624.118236472946, 1631.2685370741483, 1638.4188376753507, 1645.569138276553, 1652.7194388777555, 1659.8697394789579, 1667.0200400801602, 1674.1703406813626, 1681.320641282565, 1688.4709418837676, 1695.62124248497, 1702.7715430861724, 1709.9218436873748, 1717.0721442885772, 1724.2224448897796, 1731.372745490982, 1738.5230460921844, 1745.6733466933867, 1752.8236472945891, 1759.9739478957915, 1767.124248496994, 1774.2745490981963, 1781.4248496993987, 1788.5751503006013, 1795.7254509018037, 1802.875751503006, 1810.0260521042085, 1817.1763527054109, 1824.3266533066133, 1831.4769539078156, 1838.627254509018, 1845.7775551102204, 1852.9278557114228, 1860.0781563126252, 1867.2284569138276, 1874.37875751503, 1881.5290581162324, 1888.679358717435, 1895.8296593186374, 1902.9799599198398, 1910.1302605210421, 1917.2805611222445, 1924.430861723447, 1931.5811623246493, 1938.7314629258517, 1945.881763527054, 1953.0320641282565, 1960.1823647294589, 1967.3326653306613, 1974.4829659318636, 1981.633266533066, 1988.7835671342684, 1995.933867735471, 2003.0841683366734, 2010.2344689378758, 2017.3847695390782, 2024.5350701402806, 2031.685370741483, 2038.8356713426854, 2045.9859719438878, 2053.1362725450904, 2060.2865731462925, 2067.436873747495, 2074.5871743486973, 2081.7374749499, 2088.887775551102, 2096.0380761523047, 2103.188376753507, 2110.3386773547095, 2117.4889779559117, 2124.6392785571143, 2131.7895791583164, 2138.939879759519, 2146.0901803607217, 2153.240480961924, 2160.3907815631264, 2167.5410821643286, 2174.691382765531, 2181.8416833667334, 2188.991983967936, 2196.142284569138, 2203.2925851703408, 2210.442885771543, 2217.5931863727455, 2224.7434869739477, 2231.8937875751503, 2239.0440881763525, 2246.194388777555, 2253.3446893787577, 2260.49498997996, 2267.6452905811625, 2274.7955911823647, 2281.9458917835673, 2289.0961923847694, 2296.246492985972, 2303.396793587174, 2310.547094188377, 2317.697394789579, 2324.8476953907816, 2331.9979959919838, 2339.1482965931864, 2346.298597194389, 2353.448897795591, 2360.599198396794, 2367.749498997996, 2374.8997995991986, 2382.0501002004007, 2389.2004008016033, 2396.3507014028055, 2403.501002004008, 2410.6513026052103, 2417.801603206413, 2424.951903807615, 2432.1022044088177, 2439.25250501002, 2446.4028056112224, 2453.553106212425, 2460.703406813627, 2467.85370741483, 2475.004008016032, 2482.1543086172346, 2489.304609218437, 2496.4549098196394, 2503.6052104208416, 2510.755511022044, 2517.9058116232463, 2525.056112224449, 2532.206412825651, 2539.3567134268537, 2546.507014028056, 2553.6573146292585, 2560.807615230461, 2567.9579158316633, 2575.108216432866, 2582.258517034068, 2589.4088176352707, 2596.559118236473, 2603.7094188376755, 2610.8597194388776, 2618.0100200400802, 2625.1603206412824, 2632.310621242485, 2639.460921843687, 2646.61122244489, 2653.7615230460924, 2660.9118236472946, 2668.062124248497, 2675.2124248496993, 2682.362725450902, 2689.513026052104, 2696.6633266533067, 2703.813627254509, 2710.9639278557115, 2718.1142284569137, 2725.2645290581163, 2732.4148296593185, 2739.565130260521, 2746.7154308617232, 2753.865731462926, 2761.0160320641285, 2768.1663326653306, 2775.3166332665332, 2782.4669338677354, 2789.617234468938, 2796.76753507014, 2803.917835671343, 2811.068136272545, 2818.2184368737476, 2825.3687374749497, 2832.5190380761524, 2839.6693386773545, 2846.819639278557, 2853.9699398797593, 2861.120240480962, 2868.2705410821645, 2875.4208416833667, 2882.5711422845693, 2889.7214428857715, 2896.871743486974, 2904.0220440881762, 2911.172344689379, 2918.322645290581, 2925.4729458917836, 2932.623246492986, 2939.7735470941884, 2946.9238476953906, 2954.074148296593, 2961.224448897796, 2968.374749498998, 2975.5250501002006, 2982.6753507014027, 2989.8256513026054, 2996.9759519038075, 3004.12625250501, 3011.2765531062123, 3018.426853707415, 3025.577154308617, 3032.7274549098197, 3039.877755511022, 3047.0280561122245, 3054.1783567134266, 3061.3286573146293, 3068.478957915832, 3075.629258517034, 3082.7795591182366, 3089.929859719439, 3097.0801603206414, 3104.2304609218436, 3111.380761523046, 3118.5310621242484, 3125.681362725451, 3132.831663326653, 3139.9819639278558, 3147.132264529058, 3154.2825651302605, 3161.432865731463, 3168.5831663326653, 3175.733466933868, 3182.88376753507, 3190.0340681362727, 3197.184368737475, 3204.3346693386775, 3211.4849699398796, 3218.6352705410823, 3225.7855711422844, 3232.935871743487, 3240.086172344689, 3247.236472945892, 3254.386773547094, 3261.5370741482966, 3268.687374749499, 3275.8376753507014, 3282.987975951904, 3290.138276553106, 3297.2885771543088, 3304.438877755511, 3311.5891783567135, 3318.7394789579157, 3325.8897795591183, 3333.0400801603205, 3340.190380761523, 3347.3406813627253, 3354.490981963928, 3361.64128256513, 3368.7915831663327, 3375.9418837675353, 3383.0921843687374, 3390.24248496994, 3397.392785571142, 3404.543086172345, 3411.693386773547, 3418.8436873747496, 3425.9939879759518, 3433.1442885771544, 3440.2945891783565, 3447.444889779559, 3454.5951903807613, 3461.745490981964, 3468.8957915831666, 3476.0460921843687, 3483.1963927855713, 3490.3466933867735, 3497.496993987976, 3504.6472945891783, 3511.797595190381, 3518.947895791583, 3526.0981963927857, 3533.248496993988, 3540.3987975951904, 3547.5490981963926, 3554.699398797595, 3561.8496993987974, 3569.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_cf1876afb482421cb29cf808c4fdf363.x = d3.scale.linear()
              .domain([1.0, 3569.0])
              .range([0, 400]);

    color_map_cf1876afb482421cb29cf808c4fdf363.legend = L.control({position: 'topright'});
    color_map_cf1876afb482421cb29cf808c4fdf363.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_cf1876afb482421cb29cf808c4fdf363.legend.addTo(map_6fc26613921c42e18f16a24a50161544);

    color_map_cf1876afb482421cb29cf808c4fdf363.xAxis = d3.svg.axis()
        .scale(color_map_cf1876afb482421cb29cf808c4fdf363.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 595.6666666666666, 1190.3333333333333, 1785.0, 2379.6666666666665, 2974.333333333333, 3569.0]);

    color_map_cf1876afb482421cb29cf808c4fdf363.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_cf1876afb482421cb29cf808c4fdf363.g = color_map_cf1876afb482421cb29cf808c4fdf363.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_cf1876afb482421cb29cf808c4fdf363.g.selectAll("rect")
        .data(color_map_cf1876afb482421cb29cf808c4fdf363.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_cf1876afb482421cb29cf808c4fdf363.x(color_map_cf1876afb482421cb29cf808c4fdf363.color.domain()[i - 1]) : color_map_cf1876afb482421cb29cf808c4fdf363.x.range()[0],
            x1: i < color_map_cf1876afb482421cb29cf808c4fdf363.color.domain().length ? color_map_cf1876afb482421cb29cf808c4fdf363.x(color_map_cf1876afb482421cb29cf808c4fdf363.color.domain()[i]) : color_map_cf1876afb482421cb29cf808c4fdf363.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_cf1876afb482421cb29cf808c4fdf363.g.call(color_map_cf1876afb482421cb29cf808c4fdf363.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('');

