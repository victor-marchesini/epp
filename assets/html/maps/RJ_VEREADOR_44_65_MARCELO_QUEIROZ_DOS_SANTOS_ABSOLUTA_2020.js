    
            var map_58c437a907ab49508d82b6750fd3684f = L.map(
                "map_58c437a907ab49508d82b6750fd3684f",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_bb85be8e2e414d4a9780a5268bd15372 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_58c437a907ab49508d82b6750fd3684f);
        
    
            var choropleth_2dc3276fcc2842588e1f4f0283c3ccf3 = L.featureGroup(
                {}
            ).addTo(map_58c437a907ab49508d82b6750fd3684f);
        
    
        function geo_json_b91d787dc1294b74bf373623fc704f59_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 420: case 443: case 434: case 428: case 325: case 438: case 453: case 456: case 403: case 452: case 437: case 353: case 345: case 393: case 381: case 351: case 383: case 340: case 416: case 400: case 396: case 375: case 423: case 432: case 408: case 431: case 404: case 395: case 371: case 359: case 361: case 401: case 394: case 362: case 386: case 354: case 349: case 342: case 334: case 339: case 336: case 329: case 331: case 358: case 330: case 367: case 460: case 357: case 350: case 481: case 445: case 483: case 479: case 366: case 391: case 402: case 480: case 341: case 512: case 485: case 407: case 376: case 365: case 413: case 890: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 470: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 474: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_b91d787dc1294b74bf373623fc704f59_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_b91d787dc1294b74bf373623fc704f59 = L.geoJson(null, {
                onEachFeature: geo_json_b91d787dc1294b74bf373623fc704f59_onEachFeature,
            
                style: geo_json_b91d787dc1294b74bf373623fc704f59_styler,
        });

        function geo_json_b91d787dc1294b74bf373623fc704f59_add (data) {
            geo_json_b91d787dc1294b74bf373623fc704f59
                .addData(data)
                .addTo(choropleth_2dc3276fcc2842588e1f4f0283c3ccf3);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_b91d787dc1294b74bf373623fc704f59_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_b8f371c3a85f41f1bbab2cf33055935f = {};

    
    color_map_b8f371c3a85f41f1bbab2cf33055935f.color = d3.scale.threshold()
              .domain([1.0, 4.156312625250501, 7.312625250501002, 10.468937875751504, 13.625250501002004, 16.781563126252507, 19.937875751503007, 23.094188376753507, 26.250501002004007, 29.406813627254508, 32.563126252505015, 35.71943887775551, 38.875751503006015, 42.032064128256515, 45.188376753507015, 48.344689378757515, 51.501002004008015, 54.657314629258515, 57.813627254509015, 60.96993987975952, 64.12625250501003, 67.28256513026052, 70.43887775551102, 73.59519038076152, 76.75150300601203, 79.90781563126252, 83.06412825651303, 86.22044088176352, 89.37675350701403, 92.53306613226452, 95.68937875751503, 98.84569138276554, 102.00200400801603, 105.15831663326654, 108.31462925851703, 111.47094188376754, 114.62725450901803, 117.78356713426854, 120.93987975951904, 124.09619238476954, 127.25250501002004, 130.40881763527054, 133.56513026052104, 136.72144288577155, 139.87775551102203, 143.03406813627254, 146.19038076152304, 149.34669338677355, 152.50300601202406, 155.65931863727454, 158.81563126252505, 161.97194388777555, 165.12825651302606, 168.28456913827657, 171.44088176352705, 174.59719438877755, 177.75350701402806, 180.90981963927857, 184.06613226452905, 187.22244488977955, 190.37875751503006, 193.53507014028057, 196.69138276553107, 199.84769539078155, 203.00400801603206, 206.16032064128257, 209.31663326653307, 212.47294589178355, 215.62925851703406, 218.78557114228457, 221.94188376753507, 225.09819639278558, 228.25450901803606, 231.41082164328657, 234.56713426853707, 237.72344689378758, 240.8797595190381, 244.03607214428857, 247.19238476953907, 250.34869739478958, 253.5050100200401, 256.66132264529057, 259.8176352705411, 262.9739478957916, 266.1302605210421, 269.2865731462926, 272.4428857715431, 275.5991983967936, 278.75551102204406, 281.91182364729457, 285.0681362725451, 288.2244488977956, 291.3807615230461, 294.5370741482966, 297.6933867735471, 300.8496993987976, 304.0060120240481, 307.1623246492986, 310.3186372745491, 313.4749498997996, 316.6312625250501, 319.7875751503006, 322.9438877755511, 326.1002004008016, 329.2565130260521, 332.4128256513026, 335.56913827655313, 338.7254509018036, 341.8817635270541, 345.0380761523046, 348.1943887775551, 351.3507014028056, 354.5070140280561, 357.6633266533066, 360.81963927855713, 363.97595190380764, 367.1322645290581, 370.2885771543086, 373.4448897795591, 376.6012024048096, 379.7575150300601, 382.9138276553106, 386.07014028056113, 389.22645290581164, 392.38276553106215, 395.5390781563126, 398.6953907815631, 401.8517034068136, 405.0080160320641, 408.1643286573146, 411.32064128256513, 414.47695390781564, 417.63326653306615, 420.78957915831666, 423.9458917835671, 427.1022044088176, 430.2585170340681, 433.4148296593186, 436.57114228456913, 439.72745490981964, 442.88376753507015, 446.04008016032066, 449.19639278557116, 452.35270541082167, 455.5090180360721, 458.6653306613226, 461.82164328657313, 464.97795591182364, 468.13426853707415, 471.29058116232466, 474.44689378757516, 477.60320641282567, 480.7595190380762, 483.9158316633266, 487.07214428857714, 490.22845691382764, 493.38476953907815, 496.54108216432866, 499.69739478957916, 502.85370741482967, 506.0100200400802, 509.1663326653307, 512.3226452905811, 515.4789579158316, 518.6352705410821, 521.7915831663327, 524.9478957915832, 528.1042084168337, 531.2605210420842, 534.4168336673347, 537.5731462925852, 540.7294589178357, 543.8857715430862, 547.0420841683367, 550.1983967935872, 553.3547094188377, 556.5110220440881, 559.6673346693386, 562.8236472945891, 565.9799599198396, 569.1362725450902, 572.2925851703407, 575.4488977955912, 578.6052104208417, 581.7615230460922, 584.9178356713427, 588.0741482965932, 591.2304609218437, 594.3867735470942, 597.5430861723447, 600.6993987975952, 603.8557114228457, 607.0120240480962, 610.1683366733467, 613.3246492985973, 616.4809619238476, 619.6372745490982, 622.7935871743487, 625.9498997995992, 629.1062124248497, 632.2625250501002, 635.4188376753507, 638.5751503006012, 641.7314629258517, 644.8877755511022, 648.0440881763527, 651.2004008016032, 654.3567134268537, 657.5130260521042, 660.6693386773547, 663.8256513026053, 666.9819639278558, 670.1382765531063, 673.2945891783567, 676.4509018036072, 679.6072144288577, 682.7635270541082, 685.9198396793587, 689.0761523046092, 692.2324649298597, 695.3887775551102, 698.5450901803607, 701.7014028056112, 704.8577154308617, 708.0140280561122, 711.1703406813627, 714.3266533066133, 717.4829659318638, 720.6392785571143, 723.7955911823648, 726.9519038076153, 730.1082164328658, 733.2645290581162, 736.4208416833667, 739.5771543086172, 742.7334669338677, 745.8897795591182, 749.0460921843687, 752.2024048096192, 755.3587174348697, 758.5150300601202, 761.6713426853707, 764.8276553106213, 767.9839679358718, 771.1402805611223, 774.2965931863728, 777.4529058116233, 780.6092184368738, 783.7655310621243, 786.9218436873748, 790.0781563126252, 793.2344689378757, 796.3907815631262, 799.5470941883767, 802.7034068136272, 805.8597194388777, 809.0160320641282, 812.1723446893787, 815.3286573146293, 818.4849699398798, 821.6412825651303, 824.7975951903808, 827.9539078156313, 831.1102204408818, 834.2665330661323, 837.4228456913828, 840.5791583166333, 843.7354709418838, 846.8917835671342, 850.0480961923847, 853.2044088176352, 856.3607214428857, 859.5170340681362, 862.6733466933867, 865.8296593186373, 868.9859719438878, 872.1422845691383, 875.2985971943888, 878.4549098196393, 881.6112224448898, 884.7675350701403, 887.9238476953908, 891.0801603206413, 894.2364729458918, 897.3927855711423, 900.5490981963928, 903.7054108216433, 906.8617234468937, 910.0180360721442, 913.1743486973947, 916.3306613226453, 919.4869739478958, 922.6432865731463, 925.7995991983968, 928.9559118236473, 932.1122244488978, 935.2685370741483, 938.4248496993988, 941.5811623246493, 944.7374749498998, 947.8937875751503, 951.0501002004008, 954.2064128256513, 957.3627254509018, 960.5190380761524, 963.6753507014027, 966.8316633266533, 969.9879759519038, 973.1442885771543, 976.3006012024048, 979.4569138276553, 982.6132264529058, 985.7695390781563, 988.9258517034068, 992.0821643286573, 995.2384769539078, 998.3947895791583, 1001.5511022044088, 1004.7074148296593, 1007.8637274549098, 1011.0200400801604, 1014.1763527054109, 1017.3326653306614, 1020.4889779559119, 1023.6452905811623, 1026.801603206413, 1029.9579158316633, 1033.114228456914, 1036.2705410821643, 1039.426853707415, 1042.5831663326653, 1045.739478957916, 1048.8957915831663, 1052.0521042084167, 1055.2084168336673, 1058.3647294589177, 1061.5210420841684, 1064.6773547094188, 1067.8336673346694, 1070.9899799599198, 1074.1462925851704, 1077.3026052104208, 1080.4589178356714, 1083.6152304609218, 1086.7715430861724, 1089.9278557114228, 1093.0841683366734, 1096.2404809619238, 1099.3967935871744, 1102.5531062124248, 1105.7094188376755, 1108.8657314629259, 1112.0220440881762, 1115.1783567134269, 1118.3346693386773, 1121.4909819639279, 1124.6472945891783, 1127.803607214429, 1130.9599198396793, 1134.11623246493, 1137.2725450901803, 1140.428857715431, 1143.5851703406813, 1146.741482965932, 1149.8977955911823, 1153.054108216433, 1156.2104208416833, 1159.366733466934, 1162.5230460921844, 1165.679358717435, 1168.8356713426854, 1171.9919839679358, 1175.1482965931864, 1178.3046092184368, 1181.4609218436874, 1184.6172344689378, 1187.7735470941884, 1190.9298597194388, 1194.0861723446894, 1197.2424849699398, 1200.3987975951904, 1203.5551102204408, 1206.7114228456915, 1209.8677354709419, 1213.0240480961925, 1216.1803607214429, 1219.3366733466935, 1222.4929859719439, 1225.6492985971945, 1228.805611222445, 1231.9619238476953, 1235.118236472946, 1238.2745490981963, 1241.430861723447, 1244.5871743486973, 1247.743486973948, 1250.8997995991983, 1254.056112224449, 1257.2124248496993, 1260.36873747495, 1263.5250501002004, 1266.681362725451, 1269.8376753507014, 1272.993987975952, 1276.1503006012024, 1279.306613226453, 1282.4629258517034, 1285.6192384769538, 1288.7755511022044, 1291.9318637274548, 1295.0881763527054, 1298.2444889779558, 1301.4008016032064, 1304.5571142284568, 1307.7134268537075, 1310.8697394789579, 1314.0260521042085, 1317.1823647294589, 1320.3386773547095, 1323.4949899799599, 1326.6513026052105, 1329.807615230461, 1332.9639278557115, 1336.120240480962, 1339.2765531062125, 1342.432865731463, 1345.5891783567133, 1348.745490981964, 1351.9018036072143, 1355.058116232465, 1358.2144288577153, 1361.370741482966, 1364.5270541082164, 1367.683366733467, 1370.8396793587174, 1373.995991983968, 1377.1523046092184, 1380.308617234469, 1383.4649298597194, 1386.62124248497, 1389.7775551102204, 1392.933867735471, 1396.0901803607214, 1399.246492985972, 1402.4028056112224, 1405.5591182364728, 1408.7154308617235, 1411.8717434869739, 1415.0280561122245, 1418.1843687374749, 1421.3406813627255, 1424.4969939879759, 1427.6533066132265, 1430.809619238477, 1433.9659318637275, 1437.122244488978, 1440.2785571142285, 1443.434869739479, 1446.5911823647295, 1449.74749498998, 1452.9038076152306, 1456.060120240481, 1459.2164328657316, 1462.372745490982, 1465.5290581162324, 1468.685370741483, 1471.8416833667334, 1474.997995991984, 1478.1543086172344, 1481.310621242485, 1484.4669338677354, 1487.623246492986, 1490.7795591182364, 1493.935871743487, 1497.0921843687374, 1500.248496993988, 1503.4048096192384, 1506.561122244489, 1509.7174348697395, 1512.87374749499, 1516.0300601202405, 1519.1863727454909, 1522.3426853707415, 1525.4989979959919, 1528.6553106212425, 1531.811623246493, 1534.9679358717435, 1538.124248496994, 1541.2805611222445, 1544.436873747495, 1547.5931863727455, 1550.749498997996, 1553.9058116232466, 1557.062124248497, 1560.2184368737476, 1563.374749498998, 1566.5310621242486, 1569.687374749499, 1572.8436873747496, 1576.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_b8f371c3a85f41f1bbab2cf33055935f.x = d3.scale.linear()
              .domain([1.0, 1576.0])
              .range([0, 400]);

    color_map_b8f371c3a85f41f1bbab2cf33055935f.legend = L.control({position: 'topright'});
    color_map_b8f371c3a85f41f1bbab2cf33055935f.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_b8f371c3a85f41f1bbab2cf33055935f.legend.addTo(map_58c437a907ab49508d82b6750fd3684f);

    color_map_b8f371c3a85f41f1bbab2cf33055935f.xAxis = d3.svg.axis()
        .scale(color_map_b8f371c3a85f41f1bbab2cf33055935f.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 263.5, 526.0, 788.5, 1051.0, 1313.5, 1576.0]);

    color_map_b8f371c3a85f41f1bbab2cf33055935f.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_b8f371c3a85f41f1bbab2cf33055935f.g = color_map_b8f371c3a85f41f1bbab2cf33055935f.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_b8f371c3a85f41f1bbab2cf33055935f.g.selectAll("rect")
        .data(color_map_b8f371c3a85f41f1bbab2cf33055935f.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_b8f371c3a85f41f1bbab2cf33055935f.x(color_map_b8f371c3a85f41f1bbab2cf33055935f.color.domain()[i - 1]) : color_map_b8f371c3a85f41f1bbab2cf33055935f.x.range()[0],
            x1: i < color_map_b8f371c3a85f41f1bbab2cf33055935f.color.domain().length ? color_map_b8f371c3a85f41f1bbab2cf33055935f.x(color_map_b8f371c3a85f41f1bbab2cf33055935f.color.domain()[i]) : color_map_b8f371c3a85f41f1bbab2cf33055935f.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_b8f371c3a85f41f1bbab2cf33055935f.g.call(color_map_b8f371c3a85f41f1bbab2cf33055935f.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('44_65_MARCELO QUEIROZ DOS SANTOS');

