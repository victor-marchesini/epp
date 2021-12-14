    
            var map_a3b570a22ac042ed9544a66473bfaca2 = L.map(
                "map_a3b570a22ac042ed9544a66473bfaca2",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_bf15d22c7bcc4ccea9f042ee76fa5458 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_a3b570a22ac042ed9544a66473bfaca2);
        
    
            var choropleth_cbc09670d4884fb3b514d3f42a7c9494 = L.featureGroup(
                {}
            ).addTo(map_a3b570a22ac042ed9544a66473bfaca2);
        
    
        function geo_json_5e2e5c16c69d422681e803ee7db9ace4_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 447: case 473: case 472: case 446: case 444: case 433: case 430: case 471: case 370: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 455: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 436: case 419: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_5e2e5c16c69d422681e803ee7db9ace4_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_5e2e5c16c69d422681e803ee7db9ace4 = L.geoJson(null, {
                onEachFeature: geo_json_5e2e5c16c69d422681e803ee7db9ace4_onEachFeature,
            
                style: geo_json_5e2e5c16c69d422681e803ee7db9ace4_styler,
        });

        function geo_json_5e2e5c16c69d422681e803ee7db9ace4_add (data) {
            geo_json_5e2e5c16c69d422681e803ee7db9ace4
                .addData(data)
                .addTo(choropleth_cbc09670d4884fb3b514d3f42a7c9494);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_5e2e5c16c69d422681e803ee7db9ace4_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_12e035cc7e3147e985308227cdad8de0 = {};

    
    color_map_12e035cc7e3147e985308227cdad8de0.color = d3.scale.threshold()
              .domain([0.0, 4.557114228456914, 9.114228456913828, 13.67134268537074, 18.228456913827657, 22.78557114228457, 27.34268537074148, 31.899799599198396, 36.45691382765531, 41.014028056112224, 45.57114228456914, 50.12825651302605, 54.68537074148296, 59.24248496993988, 63.79959919839679, 68.3567134268537, 72.91382765531063, 77.47094188376754, 82.02805611222445, 86.58517034068136, 91.14228456913828, 95.6993987975952, 100.2565130260521, 104.81362725450902, 109.37074148296593, 113.92785571142285, 118.48496993987976, 123.04208416833667, 127.59919839679358, 132.1563126252505, 136.7134268537074, 141.27054108216433, 145.82765531062125, 150.38476953907815, 154.94188376753507, 159.49899799599197, 164.0561122244489, 168.61322645290582, 173.17034068136272, 177.72745490981964, 182.28456913827657, 186.84168336673346, 191.3987975951904, 195.95591182364728, 200.5130260521042, 205.07014028056113, 209.62725450901803, 214.18436873747495, 218.74148296593185, 223.29859719438878, 227.8557114228457, 232.4128256513026, 236.96993987975952, 241.52705410821645, 246.08416833667334, 250.64128256513027, 255.19839679358716, 259.75551102204406, 264.312625250501, 268.8697394789579, 273.4268537074148, 277.98396793587176, 282.54108216432866, 287.09819639278555, 291.6553106212425, 296.2124248496994, 300.7695390781563, 305.32665330661325, 309.88376753507015, 314.44088176352705, 318.99799599198394, 323.5551102204409, 328.1122244488978, 332.6693386773547, 337.22645290581164, 341.78356713426854, 346.34068136272543, 350.8977955911824, 355.4549098196393, 360.0120240480962, 364.56913827655313, 369.12625250501003, 373.6833667334669, 378.2404809619238, 382.7975951903808, 387.3547094188377, 391.91182364729457, 396.4689378757515, 401.0260521042084, 405.5831663326653, 410.14028056112227, 414.69739478957916, 419.25450901803606, 423.811623246493, 428.3687374749499, 432.9258517034068, 437.4829659318637, 442.04008016032066, 446.59719438877755, 451.15430861723445, 455.7114228456914, 460.2685370741483, 464.8256513026052, 469.38276553106215, 473.93987975951904, 478.49699398797594, 483.0541082164329, 487.6112224448898, 492.1683366733467, 496.7254509018036, 501.28256513026054, 505.83967935871743, 510.39679358717433, 514.9539078156313, 519.5110220440881, 524.0681362725451, 528.625250501002, 533.1823647294589, 537.7394789579158, 542.2965931863728, 546.8537074148296, 551.4108216432866, 555.9679358717435, 560.5250501002004, 565.0821643286573, 569.6392785571143, 574.1963927855711, 578.7535070140281, 583.310621242485, 587.8677354709419, 592.4248496993988, 596.9819639278558, 601.5390781563126, 606.0961923847696, 610.6533066132265, 615.2104208416833, 619.7675350701403, 624.3246492985973, 628.8817635270541, 633.438877755511, 637.9959919839679, 642.5531062124248, 647.1102204408818, 651.6673346693386, 656.2244488977956, 660.7815631262525, 665.3386773547094, 669.8957915831663, 674.4529058116233, 679.0100200400801, 683.5671342685371, 688.124248496994, 692.6813627254509, 697.2384769539078, 701.7955911823648, 706.3527054108216, 710.9098196392786, 715.4669338677355, 720.0240480961924, 724.5811623246493, 729.1382765531063, 733.6953907815631, 738.2525050100201, 742.8096192384769, 747.3667334669339, 751.9238476953908, 756.4809619238476, 761.0380761523046, 765.5951903807616, 770.1523046092184, 774.7094188376753, 779.2665330661323, 783.8236472945891, 788.3807615230461, 792.937875751503, 797.4949899799599, 802.0521042084168, 806.6092184368738, 811.1663326653306, 815.7234468937876, 820.2805611222445, 824.8376753507014, 829.3947895791583, 833.9519038076153, 838.5090180360721, 843.0661322645291, 847.623246492986, 852.1803607214429, 856.7374749498998, 861.2945891783567, 865.8517034068136, 870.4088176352706, 874.9659318637274, 879.5230460921844, 884.0801603206413, 888.6372745490982, 893.1943887775551, 897.7515030060121, 902.3086172344689, 906.8657314629259, 911.4228456913828, 915.9799599198396, 920.5370741482966, 925.0941883767536, 929.6513026052104, 934.2084168336673, 938.7655310621243, 943.3226452905811, 947.8797595190381, 952.436873747495, 956.9939879759519, 961.5511022044088, 966.1082164328658, 970.6653306613226, 975.2224448897796, 979.7795591182364, 984.3366733466934, 988.8937875751503, 993.4509018036072, 998.0080160320641, 1002.5651302605211, 1007.1222444889779, 1011.6793587174349, 1016.2364729458918, 1020.7935871743487, 1025.3507014028055, 1029.9078156312626, 1034.4649298597194, 1039.0220440881762, 1043.5791583166333, 1048.1362725450902, 1052.693386773547, 1057.250501002004, 1061.807615230461, 1066.3647294589177, 1070.9218436873748, 1075.4789579158316, 1080.0360721442885, 1084.5931863727455, 1089.1503006012024, 1093.7074148296592, 1098.2645290581163, 1102.8216432865731, 1107.37875751503, 1111.935871743487, 1116.4929859719439, 1121.0501002004007, 1125.6072144288578, 1130.1643286573146, 1134.7214428857715, 1139.2785571142285, 1143.8356713426854, 1148.3927855711422, 1152.9498997995993, 1157.5070140280561, 1162.064128256513, 1166.62124248497, 1171.1783567134269, 1175.7354709418837, 1180.2925851703408, 1184.8496993987976, 1189.4068136272545, 1193.9639278557115, 1198.5210420841684, 1203.0781563126252, 1207.6352705410823, 1212.192384769539, 1216.749498997996, 1221.306613226453, 1225.8637274549098, 1230.4208416833667, 1234.9779559118238, 1239.5350701402806, 1244.0921843687374, 1248.6492985971945, 1253.2064128256513, 1257.7635270541082, 1262.320641282565, 1266.877755511022, 1271.434869739479, 1275.9919839679358, 1280.5490981963928, 1285.1062124248497, 1289.6633266533065, 1294.2204408817636, 1298.7775551102204, 1303.3346693386773, 1307.8917835671343, 1312.4488977955912, 1317.006012024048, 1321.563126252505, 1326.120240480962, 1330.6773547094188, 1335.2344689378758, 1339.7915831663327, 1344.3486973947895, 1348.9058116232466, 1353.4629258517034, 1358.0200400801602, 1362.5771543086173, 1367.1342685370741, 1371.691382765531, 1376.248496993988, 1380.805611222445, 1385.3627254509017, 1389.9198396793588, 1394.4769539078156, 1399.0340681362725, 1403.5911823647295, 1408.1482965931864, 1412.7054108216432, 1417.2625250501003, 1421.8196392785571, 1426.376753507014, 1430.933867735471, 1435.4909819639279, 1440.0480961923847, 1444.6052104208418, 1449.1623246492986, 1453.7194388777555, 1458.2765531062125, 1462.8336673346694, 1467.3907815631262, 1471.9478957915833, 1476.5050100200401, 1481.062124248497, 1485.6192384769538, 1490.1763527054109, 1494.7334669338677, 1499.2905811623245, 1503.8476953907816, 1508.4048096192384, 1512.9619238476953, 1517.5190380761524, 1522.0761523046092, 1526.633266533066, 1531.190380761523, 1535.74749498998, 1540.3046092184368, 1544.8617234468938, 1549.4188376753507, 1553.9759519038075, 1558.5330661322646, 1563.0901803607214, 1567.6472945891783, 1572.2044088176353, 1576.7615230460922, 1581.318637274549, 1585.875751503006, 1590.432865731463, 1594.9899799599198, 1599.5470941883768, 1604.1042084168337, 1608.6613226452905, 1613.2184368737476, 1617.7755511022044, 1622.3326653306613, 1626.8897795591183, 1631.4468937875752, 1636.004008016032, 1640.561122244489, 1645.118236472946, 1649.6753507014027, 1654.2324649298598, 1658.7895791583167, 1663.3466933867735, 1667.9038076152306, 1672.4609218436874, 1677.0180360721442, 1681.5751503006013, 1686.1322645290581, 1690.689378757515, 1695.246492985972, 1699.803607214429, 1704.3607214428857, 1708.9178356713426, 1713.4749498997996, 1718.0320641282565, 1722.5891783567133, 1727.1462925851704, 1731.7034068136272, 1736.260521042084, 1740.8176352705411, 1745.374749498998, 1749.9318637274548, 1754.4889779559119, 1759.0460921843687, 1763.6032064128256, 1768.1603206412826, 1772.7174348697395, 1777.2745490981963, 1781.8316633266534, 1786.3887775551102, 1790.945891783567, 1795.5030060120241, 1800.060120240481, 1804.6172344689378, 1809.1743486973949, 1813.7314629258517, 1818.2885771543085, 1822.8456913827656, 1827.4028056112224, 1831.9599198396793, 1836.5170340681364, 1841.0741482965932, 1845.63126252505, 1850.188376753507, 1854.745490981964, 1859.3026052104208, 1863.8597194388778, 1868.4168336673347, 1872.9739478957915, 1877.5310621242486, 1882.0881763527054, 1886.6452905811623, 1891.2024048096193, 1895.7595190380762, 1900.316633266533, 1904.87374749499, 1909.430861723447, 1913.9879759519038, 1918.5450901803608, 1923.1022044088177, 1927.6593186372745, 1932.2164328657316, 1936.7735470941884, 1941.3306613226453, 1945.887775551102, 1950.4448897795592, 1955.002004008016, 1959.5591182364728, 1964.11623246493, 1968.6733466933867, 1973.2304609218436, 1977.7875751503007, 1982.3446893787575, 1986.9018036072143, 1991.4589178356714, 1996.0160320641282, 2000.573146292585, 2005.1302605210421, 2009.687374749499, 2014.2444889779558, 2018.801603206413, 2023.3587174348697, 2027.9158316633266, 2032.4729458917836, 2037.0300601202405, 2041.5871743486973, 2046.1442885771544, 2050.701402805611, 2055.258517034068, 2059.815631262525, 2064.3727454909817, 2068.929859719439, 2073.486973947896, 2078.0440881763525, 2082.6012024048096, 2087.1583166332666, 2091.7154308617232, 2096.2725450901803, 2100.8296593186374, 2105.386773547094, 2109.943887775551, 2114.501002004008, 2119.0581162324647, 2123.615230460922, 2128.172344689379, 2132.7294589178355, 2137.2865731462925, 2141.8436873747496, 2146.400801603206, 2150.9579158316633, 2155.5150300601204, 2160.072144288577, 2164.629258517034, 2169.186372745491, 2173.7434869739477, 2178.300601202405, 2182.857715430862, 2187.4148296593185, 2191.9719438877755, 2196.5290581162326, 2201.086172344689, 2205.6432865731463, 2210.2004008016033, 2214.75751503006, 2219.314629258517, 2223.871743486974, 2228.4288577154307, 2232.9859719438878, 2237.543086172345, 2242.1002004008014, 2246.6573146292585, 2251.2144288577156, 2255.771543086172, 2260.3286573146293, 2264.8857715430863, 2269.442885771543, 2274.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_12e035cc7e3147e985308227cdad8de0.x = d3.scale.linear()
              .domain([0.0, 2274.0])
              .range([0, 400]);

    color_map_12e035cc7e3147e985308227cdad8de0.legend = L.control({position: 'topright'});
    color_map_12e035cc7e3147e985308227cdad8de0.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_12e035cc7e3147e985308227cdad8de0.legend.addTo(map_a3b570a22ac042ed9544a66473bfaca2);

    color_map_12e035cc7e3147e985308227cdad8de0.xAxis = d3.svg.axis()
        .scale(color_map_12e035cc7e3147e985308227cdad8de0.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 379.0, 758.0, 1137.0, 1516.0, 1895.0, 2274.0]);

    color_map_12e035cc7e3147e985308227cdad8de0.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_12e035cc7e3147e985308227cdad8de0.g = color_map_12e035cc7e3147e985308227cdad8de0.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_12e035cc7e3147e985308227cdad8de0.g.selectAll("rect")
        .data(color_map_12e035cc7e3147e985308227cdad8de0.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_12e035cc7e3147e985308227cdad8de0.x(color_map_12e035cc7e3147e985308227cdad8de0.color.domain()[i - 1]) : color_map_12e035cc7e3147e985308227cdad8de0.x.range()[0],
            x1: i < color_map_12e035cc7e3147e985308227cdad8de0.color.domain().length ? color_map_12e035cc7e3147e985308227cdad8de0.x(color_map_12e035cc7e3147e985308227cdad8de0.color.domain()[i]) : color_map_12e035cc7e3147e985308227cdad8de0.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_12e035cc7e3147e985308227cdad8de0.g.call(color_map_12e035cc7e3147e985308227cdad8de0.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('50000_ELIOMAR DE SOUZA COELHO');
