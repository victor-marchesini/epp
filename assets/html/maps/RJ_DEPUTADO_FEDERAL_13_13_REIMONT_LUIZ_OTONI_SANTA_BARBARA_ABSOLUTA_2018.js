    
            var map_12182636cff74af1ba4a3ae797814134 = L.map(
                "map_12182636cff74af1ba4a3ae797814134",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_66211c6ce89f4acb9f627343dde6e89a = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_12182636cff74af1ba4a3ae797814134);
        
    
            var choropleth_0643cebe4514409dabb0e4a4bb63dd36 = L.featureGroup(
                {}
            ).addTo(map_12182636cff74af1ba4a3ae797814134);
        
    
        function geo_json_90f94a85df5a4e5e90fd5906811b7060_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 366: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 439: case 466: case 436: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_90f94a85df5a4e5e90fd5906811b7060_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_90f94a85df5a4e5e90fd5906811b7060 = L.geoJson(null, {
                onEachFeature: geo_json_90f94a85df5a4e5e90fd5906811b7060_onEachFeature,
            
                style: geo_json_90f94a85df5a4e5e90fd5906811b7060_styler,
        });

        function geo_json_90f94a85df5a4e5e90fd5906811b7060_add (data) {
            geo_json_90f94a85df5a4e5e90fd5906811b7060
                .addData(data)
                .addTo(choropleth_0643cebe4514409dabb0e4a4bb63dd36);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_90f94a85df5a4e5e90fd5906811b7060_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_7b89d4d7c5a3468e80950edaa21cd7b7 = {};

    
    color_map_7b89d4d7c5a3468e80950edaa21cd7b7.color = d3.scale.threshold()
              .domain([2.0, 6.573146292585171, 11.146292585170341, 15.719438877755511, 20.292585170340683, 24.86573146292585, 29.438877755511022, 34.012024048096194, 38.585170340681366, 43.15831663326653, 47.7314629258517, 52.30460921843687, 56.877755511022045, 61.450901803607216, 66.02404809619239, 70.59719438877755, 75.17034068136273, 79.7434869739479, 84.31663326653306, 88.88977955911824, 93.4629258517034, 98.03607214428858, 102.60921843687375, 107.18236472945891, 111.75551102204409, 116.32865731462925, 120.90180360721443, 125.4749498997996, 130.04809619238478, 134.62124248496994, 139.1943887775551, 143.76753507014027, 148.34068136272546, 152.91382765531063, 157.4869739478958, 162.06012024048096, 166.63326653306612, 171.2064128256513, 175.77955911823648, 180.35270541082164, 184.9258517034068, 189.49899799599197, 194.07214428857716, 198.64529058116233, 203.2184368737475, 207.79158316633266, 212.36472945891782, 216.93787575150301, 221.51102204408818, 226.08416833667334, 230.6573146292585, 235.2304609218437, 239.80360721442887, 244.37675350701403, 248.9498997995992, 253.52304609218436, 258.09619238476955, 262.6693386773547, 267.2424849699399, 271.8156312625251, 276.3887775551102, 280.9619238476954, 285.53507014028054, 290.10821643286573, 294.6813627254509, 299.25450901803606, 303.82765531062125, 308.4008016032064, 312.9739478957916, 317.5470941883768, 322.1202404809619, 326.6933867735471, 331.26653306613224, 335.83967935871743, 340.4128256513026, 344.98597194388776, 349.55911823647295, 354.1322645290581, 358.7054108216433, 363.2785571142285, 367.8517034068136, 372.4248496993988, 376.99799599198394, 381.57114228456913, 386.1442885771543, 390.71743486973946, 395.29058116232466, 399.8637274549098, 404.436873747495, 409.0100200400802, 413.5831663326653, 418.1563126252505, 422.72945891783564, 427.30260521042084, 431.87575150300603, 436.44889779559117, 441.02204408817636, 445.59519038076155, 450.1683366733467, 454.7414829659319, 459.314629258517, 463.8877755511022, 468.4609218436874, 473.03406813627254, 477.60721442885773, 482.18036072144287, 486.75350701402806, 491.32665330661325, 495.8997995991984, 500.4729458917836, 505.0460921843687, 509.6192384769539, 514.1923847695391, 518.7655310621243, 523.3386773547094, 527.9118236472946, 532.4849699398798, 537.058116232465, 541.6312625250501, 546.2044088176352, 550.7775551102204, 555.3507014028056, 559.9238476953908, 564.496993987976, 569.0701402805611, 573.6432865731463, 578.2164328657315, 582.7895791583167, 587.3627254509018, 591.9358717434869, 596.5090180360721, 601.0821643286573, 605.6553106212425, 610.2284569138277, 614.8016032064128, 619.374749498998, 623.9478957915832, 628.5210420841684, 633.0941883767536, 637.6673346693386, 642.2404809619238, 646.813627254509, 651.3867735470942, 655.9599198396794, 660.5330661322645, 665.1062124248497, 669.6793587174349, 674.2525050100201, 678.8256513026053, 683.3987975951903, 687.9719438877755, 692.5450901803607, 697.1182364729459, 701.6913827655311, 706.2645290581162, 710.8376753507014, 715.4108216432866, 719.9839679358718, 724.557114228457, 729.130260521042, 733.7034068136272, 738.2765531062124, 742.8496993987976, 747.4228456913828, 751.9959919839679, 756.5691382765531, 761.1422845691383, 765.7154308617235, 770.2885771543087, 774.8617234468937, 779.4348697394789, 784.0080160320641, 788.5811623246493, 793.1543086172345, 797.7274549098196, 802.3006012024048, 806.87374749499, 811.4468937875752, 816.0200400801604, 820.5931863727454, 825.1663326653306, 829.7394789579158, 834.312625250501, 838.8857715430862, 843.4589178356713, 848.0320641282565, 852.6052104208417, 857.1783567134269, 861.7515030060121, 866.3246492985973, 870.8977955911823, 875.4709418837675, 880.0440881763527, 884.6172344689379, 889.1903807615231, 893.7635270541082, 898.3366733466934, 902.9098196392786, 907.4829659318638, 912.056112224449, 916.629258517034, 921.2024048096192, 925.7755511022044, 930.3486973947896, 934.9218436873748, 939.4949899799599, 944.0681362725451, 948.6412825651303, 953.2144288577155, 957.7875751503007, 962.3607214428857, 966.9338677354709, 971.5070140280561, 976.0801603206413, 980.6533066132265, 985.2264529058116, 989.7995991983968, 994.372745490982, 998.9458917835672, 1003.5190380761524, 1008.0921843687374, 1012.6653306613226, 1017.2384769539078, 1021.811623246493, 1026.3847695390782, 1030.9579158316633, 1035.5310621242486, 1040.1042084168337, 1044.6773547094188, 1049.250501002004, 1053.8236472945891, 1058.3967935871744, 1062.9699398797595, 1067.5430861723446, 1072.11623246493, 1076.689378757515, 1081.2625250501003, 1085.8356713426854, 1090.4088176352705, 1094.9819639278558, 1099.5551102204408, 1104.1282565130261, 1108.7014028056112, 1113.2745490981963, 1117.8476953907816, 1122.4208416833667, 1126.993987975952, 1131.567134268537, 1136.1402805611222, 1140.7134268537075, 1145.2865731462925, 1149.8597194388778, 1154.432865731463, 1159.006012024048, 1163.5791583166333, 1168.1523046092184, 1172.7254509018037, 1177.2985971943888, 1181.8717434869739, 1186.4448897795592, 1191.0180360721442, 1195.5911823647295, 1200.1643286573146, 1204.7374749498997, 1209.310621242485, 1213.88376753507, 1218.4569138276554, 1223.0300601202405, 1227.6032064128256, 1232.1763527054109, 1236.749498997996, 1241.3226452905812, 1245.8957915831663, 1250.4689378757514, 1255.0420841683367, 1259.6152304609218, 1264.188376753507, 1268.7615230460922, 1273.3346693386773, 1277.9078156312626, 1282.4809619238476, 1287.054108216433, 1291.627254509018, 1296.200400801603, 1300.7735470941884, 1305.3466933867735, 1309.9198396793588, 1314.4929859719439, 1319.066132264529, 1323.6392785571143, 1328.2124248496993, 1332.7855711422847, 1337.3587174348697, 1341.9318637274548, 1346.5050100200401, 1351.0781563126252, 1355.6513026052105, 1360.2244488977956, 1364.7975951903807, 1369.370741482966, 1373.943887775551, 1378.5170340681364, 1383.0901803607214, 1387.6633266533065, 1392.2364729458918, 1396.809619238477, 1401.3827655310622, 1405.9559118236473, 1410.5290581162324, 1415.1022044088177, 1419.6753507014027, 1424.248496993988, 1428.8216432865731, 1433.3947895791582, 1437.9679358717435, 1442.5410821643286, 1447.114228456914, 1451.687374749499, 1456.260521042084, 1460.8336673346694, 1465.4068136272545, 1469.9799599198398, 1474.5531062124248, 1479.12625250501, 1483.6993987975952, 1488.2725450901803, 1492.8456913827656, 1497.4188376753507, 1501.9919839679358, 1506.565130260521, 1511.1382765531062, 1515.7114228456915, 1520.2845691382765, 1524.8577154308616, 1529.430861723447, 1534.004008016032, 1538.5771543086173, 1543.1503006012024, 1547.7234468937875, 1552.2965931863728, 1556.8697394789579, 1561.4428857715432, 1566.0160320641282, 1570.5891783567133, 1575.1623246492986, 1579.7354709418837, 1584.308617234469, 1588.881763527054, 1593.4549098196392, 1598.0280561122245, 1602.6012024048096, 1607.1743486973949, 1611.74749498998, 1616.320641282565, 1620.8937875751503, 1625.4669338677354, 1630.0400801603207, 1634.6132264529058, 1639.1863727454909, 1643.7595190380762, 1648.3326653306613, 1652.9058116232466, 1657.4789579158316, 1662.0521042084167, 1666.625250501002, 1671.198396793587, 1675.7715430861724, 1680.3446893787575, 1684.9178356713426, 1689.4909819639279, 1694.064128256513, 1698.6372745490983, 1703.2104208416833, 1707.7835671342684, 1712.3567134268537, 1716.9298597194388, 1721.5030060120241, 1726.0761523046092, 1730.6492985971945, 1735.2224448897796, 1739.7955911823647, 1744.36873747495, 1748.941883767535, 1753.5150300601204, 1758.0881763527054, 1762.6613226452905, 1767.2344689378758, 1771.807615230461, 1776.3807615230462, 1780.9539078156313, 1785.5270541082164, 1790.1002004008017, 1794.6733466933867, 1799.246492985972, 1803.8196392785571, 1808.3927855711422, 1812.9659318637275, 1817.5390781563126, 1822.112224448898, 1826.685370741483, 1831.258517034068, 1835.8316633266534, 1840.4048096192384, 1844.9779559118238, 1849.5511022044088, 1854.124248496994, 1858.6973947895792, 1863.2705410821643, 1867.8436873747496, 1872.4168336673347, 1876.9899799599198, 1881.563126252505, 1886.1362725450902, 1890.7094188376755, 1895.2825651302605, 1899.8557114228456, 1904.428857715431, 1909.002004008016, 1913.5751503006013, 1918.1482965931864, 1922.7214428857715, 1927.2945891783568, 1931.8677354709419, 1936.4408817635272, 1941.0140280561122, 1945.5871743486973, 1950.1603206412826, 1954.7334669338677, 1959.306613226453, 1963.879759519038, 1968.4529058116232, 1973.0260521042085, 1977.5991983967936, 1982.1723446893789, 1986.745490981964, 1991.318637274549, 1995.8917835671343, 2000.4649298597194, 2005.0380761523047, 2009.6112224448898, 2014.1843687374749, 2018.7575150300602, 2023.3306613226453, 2027.9038076152306, 2032.4769539078156, 2037.0501002004007, 2041.623246492986, 2046.196392785571, 2050.7695390781564, 2055.3426853707415, 2059.9158316633266, 2064.4889779559117, 2069.062124248497, 2073.6352705410823, 2078.2084168336673, 2082.7815631262524, 2087.3547094188375, 2091.927855711423, 2096.501002004008, 2101.074148296593, 2105.6472945891783, 2110.2204408817634, 2114.793587174349, 2119.366733466934, 2123.939879759519, 2128.513026052104, 2133.086172344689, 2137.6593186372747, 2142.23246492986, 2146.805611222445, 2151.37875751503, 2155.951903807615, 2160.5250501002006, 2165.0981963927857, 2169.6713426853707, 2174.244488977956, 2178.817635270541, 2183.3907815631264, 2187.9639278557115, 2192.5370741482966, 2197.1102204408817, 2201.6833667334668, 2206.2565130260523, 2210.8296593186374, 2215.4028056112224, 2219.9759519038075, 2224.5490981963926, 2229.122244488978, 2233.695390781563, 2238.2685370741483, 2242.8416833667334, 2247.4148296593185, 2251.987975951904, 2256.561122244489, 2261.134268537074, 2265.7074148296592, 2270.2805611222443, 2274.85370741483, 2279.426853707415, 2284.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_7b89d4d7c5a3468e80950edaa21cd7b7.x = d3.scale.linear()
              .domain([2.0, 2284.0])
              .range([0, 400]);

    color_map_7b89d4d7c5a3468e80950edaa21cd7b7.legend = L.control({position: 'topright'});
    color_map_7b89d4d7c5a3468e80950edaa21cd7b7.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_7b89d4d7c5a3468e80950edaa21cd7b7.legend.addTo(map_12182636cff74af1ba4a3ae797814134);

    color_map_7b89d4d7c5a3468e80950edaa21cd7b7.xAxis = d3.svg.axis()
        .scale(color_map_7b89d4d7c5a3468e80950edaa21cd7b7.x)
        .orient("top")
        .tickSize(1)
        .tickValues([2.0, 382.3333333333333, 762.6666666666666, 1143.0, 1523.3333333333333, 1903.6666666666665, 2284.0]);

    color_map_7b89d4d7c5a3468e80950edaa21cd7b7.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_7b89d4d7c5a3468e80950edaa21cd7b7.g = color_map_7b89d4d7c5a3468e80950edaa21cd7b7.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_7b89d4d7c5a3468e80950edaa21cd7b7.g.selectAll("rect")
        .data(color_map_7b89d4d7c5a3468e80950edaa21cd7b7.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_7b89d4d7c5a3468e80950edaa21cd7b7.x(color_map_7b89d4d7c5a3468e80950edaa21cd7b7.color.domain()[i - 1]) : color_map_7b89d4d7c5a3468e80950edaa21cd7b7.x.range()[0],
            x1: i < color_map_7b89d4d7c5a3468e80950edaa21cd7b7.color.domain().length ? color_map_7b89d4d7c5a3468e80950edaa21cd7b7.x(color_map_7b89d4d7c5a3468e80950edaa21cd7b7.color.domain()[i]) : color_map_7b89d4d7c5a3468e80950edaa21cd7b7.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_7b89d4d7c5a3468e80950edaa21cd7b7.g.call(color_map_7b89d4d7c5a3468e80950edaa21cd7b7.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('13_13_REIMONT LUIZ OTONI SANTA BARBARA');

