    
            var map_a30c4d5afa5b4edebb67c9ac15ce69ad = L.map(
                "map_a30c4d5afa5b4edebb67c9ac15ce69ad",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_1b2fdbf3281b49d7ba8f3ba933ba2239 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_a30c4d5afa5b4edebb67c9ac15ce69ad);
        
    
            var choropleth_e3078673479141679715f4e6c9a56216 = L.featureGroup(
                {}
            ).addTo(map_a30c4d5afa5b4edebb67c9ac15ce69ad);
        
    
        function geo_json_2007afa088c4458f90031e96ba76cfa4_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 447: case 473: case 472: case 470: case 436: case 444: case 419: case 430: case 471: case 370: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 455: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_2007afa088c4458f90031e96ba76cfa4_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_2007afa088c4458f90031e96ba76cfa4 = L.geoJson(null, {
                onEachFeature: geo_json_2007afa088c4458f90031e96ba76cfa4_onEachFeature,
            
                style: geo_json_2007afa088c4458f90031e96ba76cfa4_styler,
        });

        function geo_json_2007afa088c4458f90031e96ba76cfa4_add (data) {
            geo_json_2007afa088c4458f90031e96ba76cfa4
                .addData(data)
                .addTo(choropleth_e3078673479141679715f4e6c9a56216);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_2007afa088c4458f90031e96ba76cfa4_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_cf40429dd4a24b86822a8f6e39640c44 = {};

    
    color_map_cf40429dd4a24b86822a8f6e39640c44.color = d3.scale.threshold()
              .domain([1.0, 6.651302605210421, 12.302605210420841, 17.95390781563126, 23.605210420841683, 29.256513026052104, 34.90781563126252, 40.55911823647295, 46.210420841683366, 51.86172344689379, 57.51302605210421, 63.16432865731463, 68.81563126252505, 74.46693386773548, 80.1182364729459, 85.76953907815631, 91.42084168336673, 97.07214428857715, 102.72344689378758, 108.374749498998, 114.02605210420842, 119.67735470941884, 125.32865731462925, 130.97995991983967, 136.6312625250501, 142.2825651302605, 147.93386773547095, 153.58517034068137, 159.2364729458918, 164.8877755511022, 170.53907815631263, 176.19038076152304, 181.84168336673346, 187.49298597194388, 193.1442885771543, 198.79559118236472, 204.44689378757516, 210.09819639278558, 215.749498997996, 221.40080160320642, 227.05210420841684, 232.70340681362725, 238.35470941883767, 244.0060120240481, 249.6573146292585, 255.30861723446893, 260.95991983967934, 266.6112224448898, 272.2625250501002, 277.9138276553106, 283.565130260521, 289.21643286573146, 294.8677354709419, 300.5190380761523, 306.17034068136275, 311.82164328657313, 317.4729458917836, 323.12424849699397, 328.7755511022044, 334.4268537074148, 340.07815631262525, 345.72945891783564, 351.3807615230461, 357.03206412825654, 362.6833667334669, 368.3346693386774, 373.98597194388776, 379.6372745490982, 385.2885771543086, 390.93987975951904, 396.59118236472943, 402.2424849699399, 407.8937875751503, 413.5450901803607, 419.19639278557116, 424.84769539078155, 430.498997995992, 436.1503006012024, 441.80160320641284, 447.4529058116232, 453.10420841683367, 458.75551102204406, 464.4068136272545, 470.05811623246495, 475.70941883767534, 481.3607214428858, 487.0120240480962, 492.6633266533066, 498.314629258517, 503.96593186372746, 509.61723446893785, 515.2685370741483, 520.9198396793587, 526.5711422845692, 532.2224448897796, 537.87374749499, 543.5250501002004, 549.1763527054109, 554.8276553106213, 560.4789579158316, 566.130260521042, 571.7815631262525, 577.4328657314629, 583.0841683366733, 588.7354709418838, 594.3867735470942, 600.0380761523046, 605.689378757515, 611.3406813627255, 616.9919839679359, 622.6432865731463, 628.2945891783567, 633.9458917835672, 639.5971943887776, 645.2484969939879, 650.8997995991984, 656.5511022044088, 662.2024048096192, 667.8537074148296, 673.5050100200401, 679.1563126252505, 684.8076152304609, 690.4589178356713, 696.1102204408818, 701.7615230460922, 707.4128256513026, 713.0641282565131, 718.7154308617235, 724.3667334669339, 730.0180360721442, 735.6693386773547, 741.3206412825651, 746.9719438877755, 752.623246492986, 758.2745490981964, 763.9258517034068, 769.5771543086172, 775.2284569138277, 780.8797595190381, 786.5310621242485, 792.1823647294589, 797.8336673346694, 803.4849699398798, 809.1362725450902, 814.7875751503007, 820.438877755511, 826.0901803607214, 831.7414829659318, 837.3927855711423, 843.0440881763527, 848.6953907815631, 854.3466933867735, 859.997995991984, 865.6492985971944, 871.3006012024048, 876.9519038076153, 882.6032064128257, 888.2545090180361, 893.9058116232464, 899.557114228457, 905.2084168336673, 910.8597194388777, 916.5110220440881, 922.1623246492986, 927.813627254509, 933.4649298597194, 939.1162324649299, 944.7675350701403, 950.4188376753507, 956.0701402805611, 961.7214428857716, 967.372745490982, 973.0240480961924, 978.6753507014027, 984.3266533066133, 989.9779559118236, 995.629258517034, 1001.2805611222445, 1006.9318637274549, 1012.5831663326653, 1018.2344689378757, 1023.8857715430862, 1029.5370741482966, 1035.188376753507, 1040.8396793587174, 1046.4909819639279, 1052.1422845691384, 1057.7935871743487, 1063.4448897795592, 1069.0961923847694, 1074.74749498998, 1080.3987975951904, 1086.0501002004007, 1091.7014028056112, 1097.3527054108217, 1103.004008016032, 1108.6553106212425, 1114.306613226453, 1119.9579158316633, 1125.6092184368738, 1131.260521042084, 1136.9118236472946, 1142.563126252505, 1148.2144288577153, 1153.8657314629259, 1159.5170340681364, 1165.1683366733466, 1170.8196392785571, 1176.4709418837676, 1182.122244488978, 1187.7735470941884, 1193.4248496993987, 1199.0761523046092, 1204.7274549098197, 1210.37875751503, 1216.0300601202405, 1221.681362725451, 1227.3326653306613, 1232.9839679358718, 1238.6352705410823, 1244.2865731462925, 1249.937875751503, 1255.5891783567133, 1261.2404809619238, 1266.8917835671343, 1272.5430861723446, 1278.194388777555, 1283.8456913827656, 1289.4969939879759, 1295.1482965931864, 1300.799599198397, 1306.4509018036072, 1312.1022044088177, 1317.753507014028, 1323.4048096192384, 1329.056112224449, 1334.7074148296592, 1340.3587174348697, 1346.0100200400802, 1351.6613226452905, 1357.312625250501, 1362.9639278557115, 1368.6152304609218, 1374.2665330661323, 1379.9178356713426, 1385.569138276553, 1391.2204408817636, 1396.8717434869739, 1402.5230460921844, 1408.1743486973949, 1413.8256513026051, 1419.4769539078156, 1425.1282565130261, 1430.7795591182364, 1436.430861723447, 1442.0821643286574, 1447.7334669338677, 1453.3847695390782, 1459.0360721442885, 1464.687374749499, 1470.3386773547095, 1475.9899799599198, 1481.6412825651303, 1487.2925851703408, 1492.943887775551, 1498.5951903807616, 1504.246492985972, 1509.8977955911823, 1515.5490981963928, 1521.200400801603, 1526.8517034068136, 1532.5030060120241, 1538.1543086172344, 1543.805611222445, 1549.4569138276554, 1555.1082164328657, 1560.7595190380762, 1566.4108216432867, 1572.062124248497, 1577.7134268537075, 1583.3647294589177, 1589.0160320641282, 1594.6673346693387, 1600.318637274549, 1605.9699398797595, 1611.62124248497, 1617.2725450901803, 1622.9238476953908, 1628.5751503006013, 1634.2264529058116, 1639.877755511022, 1645.5290581162324, 1651.1803607214429, 1656.8316633266534, 1662.4829659318636, 1668.1342685370741, 1673.7855711422847, 1679.436873747495, 1685.0881763527054, 1690.739478957916, 1696.3907815631262, 1702.0420841683367, 1707.693386773547, 1713.3446893787575, 1718.995991983968, 1724.6472945891783, 1730.2985971943888, 1735.9498997995993, 1741.6012024048096, 1747.25250501002, 1752.9038076152306, 1758.5551102204408, 1764.2064128256513, 1769.8577154308616, 1775.5090180360721, 1781.1603206412826, 1786.811623246493, 1792.4629258517034, 1798.114228456914, 1803.7655310621242, 1809.4168336673347, 1815.0681362725452, 1820.7194388777555, 1826.370741482966, 1832.0220440881762, 1837.6733466933867, 1843.3246492985973, 1848.9759519038075, 1854.627254509018, 1860.2785571142285, 1865.9298597194388, 1871.5811623246493, 1877.2324649298598, 1882.88376753507, 1888.5350701402806, 1894.1863727454909, 1899.8376753507014, 1905.4889779559119, 1911.1402805611222, 1916.7915831663327, 1922.4428857715432, 1928.0941883767534, 1933.745490981964, 1939.3967935871744, 1945.0480961923847, 1950.6993987975952, 1956.3507014028055, 1962.002004008016, 1967.6533066132265, 1973.3046092184368, 1978.9559118236473, 1984.6072144288578, 1990.258517034068, 1995.9098196392786, 2001.561122244489, 2007.2124248496993, 2012.8637274549098, 2018.5150300601204, 2024.1663326653306, 2029.8176352705411, 2035.4689378757514, 2041.120240480962, 2046.7715430861724, 2052.422845691383, 2058.074148296593, 2063.7254509018035, 2069.376753507014, 2075.0280561122245, 2080.6793587174348, 2086.3306613226455, 2091.9819639278558, 2097.633266533066, 2103.2845691382768, 2108.935871743487, 2114.5871743486973, 2120.2384769539076, 2125.8897795591183, 2131.5410821643286, 2137.192384769539, 2142.8436873747496, 2148.49498997996, 2154.14629258517, 2159.797595190381, 2165.448897795591, 2171.1002004008014, 2176.751503006012, 2182.4028056112224, 2188.0541082164327, 2193.7054108216435, 2199.3567134268537, 2205.008016032064, 2210.6593186372747, 2216.310621242485, 2221.9619238476953, 2227.613226452906, 2233.2645290581163, 2238.9158316633266, 2244.567134268537, 2250.2184368737476, 2255.869739478958, 2261.521042084168, 2267.172344689379, 2272.823647294589, 2278.4749498997994, 2284.12625250501, 2289.7775551102204, 2295.4288577154307, 2301.0801603206414, 2306.7314629258517, 2312.382765531062, 2318.0340681362727, 2323.685370741483, 2329.3366733466933, 2334.987975951904, 2340.6392785571143, 2346.2905811623245, 2351.9418837675353, 2357.5931863727455, 2363.244488977956, 2368.8957915831666, 2374.547094188377, 2380.198396793587, 2385.8496993987974, 2391.501002004008, 2397.1523046092184, 2402.8036072144287, 2408.4549098196394, 2414.1062124248497, 2419.75751503006, 2425.4088176352707, 2431.060120240481, 2436.7114228456912, 2442.362725450902, 2448.0140280561122, 2453.6653306613225, 2459.3166332665332, 2464.9679358717435, 2470.619238476954, 2476.2705410821645, 2481.921843687375, 2487.573146292585, 2493.224448897796, 2498.875751503006, 2504.5270541082164, 2510.1783567134266, 2515.8296593186374, 2521.4809619238476, 2527.132264529058, 2532.7835671342687, 2538.434869739479, 2544.086172344689, 2549.7374749499, 2555.38877755511, 2561.0400801603205, 2566.691382765531, 2572.3426853707415, 2577.9939879759518, 2583.6452905811625, 2589.296593186373, 2594.947895791583, 2600.599198396794, 2606.250501002004, 2611.9018036072143, 2617.553106212425, 2623.2044088176353, 2628.8557114228456, 2634.507014028056, 2640.1583166332666, 2645.809619238477, 2651.460921843687, 2657.112224448898, 2662.763527054108, 2668.4148296593185, 2674.066132264529, 2679.7174348697395, 2685.3687374749497, 2691.0200400801605, 2696.6713426853707, 2702.322645290581, 2707.9739478957918, 2713.625250501002, 2719.2765531062123, 2724.927855711423, 2730.5791583166333, 2736.2304609218436, 2741.8817635270543, 2747.5330661322646, 2753.184368737475, 2758.835671342685, 2764.486973947896, 2770.138276553106, 2775.7895791583164, 2781.440881763527, 2787.0921843687374, 2792.7434869739477, 2798.3947895791584, 2804.0460921843687, 2809.697394789579, 2815.3486973947897, 2821.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_cf40429dd4a24b86822a8f6e39640c44.x = d3.scale.linear()
              .domain([1.0, 2821.0])
              .range([0, 400]);

    color_map_cf40429dd4a24b86822a8f6e39640c44.legend = L.control({position: 'topright'});
    color_map_cf40429dd4a24b86822a8f6e39640c44.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_cf40429dd4a24b86822a8f6e39640c44.legend.addTo(map_a30c4d5afa5b4edebb67c9ac15ce69ad);

    color_map_cf40429dd4a24b86822a8f6e39640c44.xAxis = d3.svg.axis()
        .scale(color_map_cf40429dd4a24b86822a8f6e39640c44.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 471.0, 941.0, 1411.0, 1881.0, 2351.0, 2821.0]);

    color_map_cf40429dd4a24b86822a8f6e39640c44.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_cf40429dd4a24b86822a8f6e39640c44.g = color_map_cf40429dd4a24b86822a8f6e39640c44.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_cf40429dd4a24b86822a8f6e39640c44.g.selectAll("rect")
        .data(color_map_cf40429dd4a24b86822a8f6e39640c44.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_cf40429dd4a24b86822a8f6e39640c44.x(color_map_cf40429dd4a24b86822a8f6e39640c44.color.domain()[i - 1]) : color_map_cf40429dd4a24b86822a8f6e39640c44.x.range()[0],
            x1: i < color_map_cf40429dd4a24b86822a8f6e39640c44.color.domain().length ? color_map_cf40429dd4a24b86822a8f6e39640c44.x(color_map_cf40429dd4a24b86822a8f6e39640c44.color.domain()[i]) : color_map_cf40429dd4a24b86822a8f6e39640c44.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_cf40429dd4a24b86822a8f6e39640c44.g.call(color_map_cf40429dd4a24b86822a8f6e39640c44.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('50888_MONICA SANTOS FRANCISCO');
