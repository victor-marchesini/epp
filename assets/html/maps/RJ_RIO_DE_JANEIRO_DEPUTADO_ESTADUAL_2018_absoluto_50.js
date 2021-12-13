    
            var map_02a53250b21e4b2880047a2593d3cb88 = L.map(
                "map_02a53250b21e4b2880047a2593d3cb88",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_f2ff46486f234873a35961c0c558aef1 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_02a53250b21e4b2880047a2593d3cb88);
        
    
            var choropleth_c038f1b0091749bbbdbdedcdb0abaa0b = L.featureGroup(
                {}
            ).addTo(map_02a53250b21e4b2880047a2593d3cb88);
        
    
        function geo_json_8256ddf029e44e09ac9372b781568163_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 370: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 448: case 449: case 447: case 472: case 446: case 444: case 381: case 369: case 363: case 352: case 427: case 408: case 411: case 346: case 339: case 433: case 409: case 471: case 477: case 387: case 378: case 511: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 510: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: case 436: case 419: case 430: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_8256ddf029e44e09ac9372b781568163_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_8256ddf029e44e09ac9372b781568163 = L.geoJson(null, {
                onEachFeature: geo_json_8256ddf029e44e09ac9372b781568163_onEachFeature,
            
                style: geo_json_8256ddf029e44e09ac9372b781568163_styler,
        });

        function geo_json_8256ddf029e44e09ac9372b781568163_add (data) {
            geo_json_8256ddf029e44e09ac9372b781568163
                .addData(data)
                .addTo(choropleth_c038f1b0091749bbbdbdedcdb0abaa0b);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_8256ddf029e44e09ac9372b781568163_add(obj);
            })
          }
            const file_path ='/covid/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_8ff849e472dc4391b329998c0034a563 = {};

    
    color_map_8ff849e472dc4391b329998c0034a563.color = d3.scale.threshold()
              .domain([1.0, 4.266533066132265, 7.533066132264529, 10.799599198396793, 14.066132264529058, 17.33266533066132, 20.599198396793586, 23.86573146292585, 27.132264529058116, 30.39879759519038, 33.66533066132264, 36.93186372745491, 40.19839679358717, 43.46492985971944, 46.7314629258517, 49.99799599198397, 53.26452905811623, 56.5310621242485, 59.79759519038076, 63.06412825651302, 66.33066132264528, 69.59719438877755, 72.86372745490982, 76.13026052104209, 79.39679358717434, 82.66332665330661, 85.92985971943888, 89.19639278557115, 92.4629258517034, 95.72945891783567, 98.99599198396794, 102.2625250501002, 105.52905811623246, 108.79559118236473, 112.062124248497, 115.32865731462925, 118.59519038076152, 121.86172344689379, 125.12825651302605, 128.39478957915833, 131.66132264529057, 134.92785571142284, 138.1943887775551, 141.46092184368737, 144.72745490981964, 147.9939879759519, 151.26052104208418, 154.52705410821645, 157.7935871743487, 161.06012024048096, 164.32665330661322, 167.5931863727455, 170.85971943887776, 174.12625250501003, 177.3927855711423, 180.65931863727454, 183.9258517034068, 187.19238476953907, 190.45891783567134, 193.7254509018036, 196.99198396793588, 200.25851703406815, 203.5250501002004, 206.79158316633266, 210.05811623246493, 213.3246492985972, 216.59118236472946, 219.85771543086173, 223.124248496994, 226.39078156312624, 229.6573146292585, 232.92384769539078, 236.19038076152304, 239.4569138276553, 242.72344689378758, 245.98997995991985, 249.2565130260521, 252.52304609218436, 255.78957915831663, 259.0561122244489, 262.32264529058114, 265.58917835671343, 268.8557114228457, 272.12224448897797, 275.3887775551102, 278.6553106212425, 281.92184368737475, 285.188376753507, 288.4549098196393, 291.7214428857715, 294.9879759519038, 298.25450901803606, 301.52104208416836, 304.7875751503006, 308.0541082164329, 311.32064128256513, 314.5871743486974, 317.85370741482967, 321.1202404809619, 324.3867735470942, 327.65330661322645, 330.91983967935874, 334.186372745491, 337.4529058116232, 340.7194388777555, 343.98597194388776, 347.25250501002006, 350.5190380761523, 353.7855711422846, 357.05210420841684, 360.3186372745491, 363.5851703406814, 366.8517034068136, 370.1182364729459, 373.38476953907815, 376.65130260521045, 379.9178356713427, 383.1843687374749, 386.4509018036072, 389.71743486973946, 392.98396793587176, 396.250501002004, 399.5170340681363, 402.78356713426854, 406.0501002004008, 409.3166332665331, 412.5831663326653, 415.8496993987976, 419.11623246492985, 422.38276553106215, 425.6492985971944, 428.9158316633266, 432.1823647294589, 435.44889779559117, 438.71543086172346, 441.9819639278557, 445.248496993988, 448.51503006012024, 451.7815631262525, 455.0480961923848, 458.314629258517, 461.5811623246493, 464.84769539078155, 468.11422845691385, 471.3807615230461, 474.64729458917833, 477.9138276553106, 481.18036072144287, 484.44689378757516, 487.7134268537074, 490.9799599198397, 494.24649298597194, 497.5130260521042, 500.7795591182365, 504.0460921843687, 507.312625250501, 510.57915831663325, 513.8456913827655, 517.1122244488978, 520.3787575150301, 523.6452905811623, 526.9118236472946, 530.1783567134269, 533.4448897795592, 536.7114228456913, 539.9779559118236, 543.2444889779559, 546.5110220440881, 549.7775551102204, 553.0440881763527, 556.310621242485, 559.5771543086172, 562.8436873747495, 566.1102204408818, 569.376753507014, 572.6432865731463, 575.9098196392786, 579.1763527054109, 582.442885771543, 585.7094188376753, 588.9759519038076, 592.2424849699398, 595.5090180360721, 598.7755511022044, 602.0420841683367, 605.3086172344689, 608.5751503006012, 611.8416833667335, 615.1082164328658, 618.374749498998, 621.6412825651303, 624.9078156312626, 628.1743486973947, 631.440881763527, 634.7074148296593, 637.9739478957916, 641.2404809619238, 644.5070140280561, 647.7735470941884, 651.0400801603206, 654.3066132264529, 657.5731462925852, 660.8396793587175, 664.1062124248497, 667.372745490982, 670.6392785571143, 673.9058116232464, 677.1723446893787, 680.438877755511, 683.7054108216433, 686.9719438877755, 690.2384769539078, 693.5050100200401, 696.7715430861723, 700.0380761523046, 703.3046092184369, 706.5711422845692, 709.8376753507014, 713.1042084168337, 716.370741482966, 719.6372745490982, 722.9038076152304, 726.1703406813627, 729.436873747495, 732.7034068136272, 735.9699398797595, 739.2364729458918, 742.503006012024, 745.7695390781563, 749.0360721442886, 752.3026052104209, 755.5691382765531, 758.8356713426854, 762.1022044088177, 765.3687374749499, 768.6352705410821, 771.9018036072144, 775.1683366733467, 778.4348697394789, 781.7014028056112, 784.9679358717435, 788.2344689378757, 791.501002004008, 794.7675350701403, 798.0340681362726, 801.3006012024048, 804.5671342685371, 807.8336673346694, 811.1002004008016, 814.3667334669339, 817.6332665330661, 820.8997995991984, 824.1663326653306, 827.4328657314629, 830.6993987975952, 833.9659318637274, 837.2324649298597, 840.498997995992, 843.7655310621243, 847.0320641282565, 850.2985971943888, 853.5651302605211, 856.8316633266533, 860.0981963927856, 863.3647294589179, 866.6312625250501, 869.8977955911823, 873.1643286573146, 876.4308617234469, 879.6973947895791, 882.9639278557114, 886.2304609218437, 889.496993987976, 892.7635270541082, 896.0300601202405, 899.2965931863728, 902.563126252505, 905.8296593186373, 909.0961923847696, 912.3627254509018, 915.629258517034, 918.8957915831663, 922.1623246492986, 925.4288577154308, 928.6953907815631, 931.9619238476954, 935.2284569138277, 938.4949899799599, 941.7615230460922, 945.0280561122245, 948.2945891783567, 951.561122244489, 954.8276553106213, 958.0941883767536, 961.3607214428857, 964.627254509018, 967.8937875751503, 971.1603206412825, 974.4268537074148, 977.6933867735471, 980.9599198396794, 984.2264529058116, 987.4929859719439, 990.7595190380762, 994.0260521042084, 997.2925851703407, 1000.559118236473, 1003.8256513026053, 1007.0921843687374, 1010.3587174348697, 1013.625250501002, 1016.8917835671342, 1020.1583166332665, 1023.4248496993988, 1026.691382765531, 1029.9579158316633, 1033.2244488977956, 1036.4909819639279, 1039.7575150300602, 1043.0240480961925, 1046.2905811623245, 1049.5571142284568, 1052.8236472945891, 1056.0901803607214, 1059.3567134268537, 1062.623246492986, 1065.8897795591183, 1069.1563126252504, 1072.4228456913827, 1075.689378757515, 1078.9559118236473, 1082.2224448897796, 1085.4889779559119, 1088.7555110220442, 1092.0220440881762, 1095.2885771543085, 1098.5551102204408, 1101.8216432865731, 1105.0881763527054, 1108.3547094188377, 1111.62124248497, 1114.887775551102, 1118.1543086172344, 1121.4208416833667, 1124.687374749499, 1127.9539078156313, 1131.2204408817636, 1134.4869739478959, 1137.753507014028, 1141.0200400801602, 1144.2865731462925, 1147.5531062124248, 1150.8196392785571, 1154.0861723446894, 1157.3527054108217, 1160.6192384769538, 1163.885771543086, 1167.1523046092184, 1170.4188376753507, 1173.685370741483, 1176.9519038076153, 1180.2184368737476, 1183.4849699398796, 1186.751503006012, 1190.0180360721442, 1193.2845691382765, 1196.5511022044088, 1199.8176352705411, 1203.0841683366734, 1206.3507014028055, 1209.6172344689378, 1212.88376753507, 1216.1503006012024, 1219.4168336673347, 1222.683366733467, 1225.9498997995993, 1229.2164328657316, 1232.4829659318636, 1235.749498997996, 1239.0160320641282, 1242.2825651302605, 1245.5490981963928, 1248.8156312625251, 1252.0821643286574, 1255.3486973947895, 1258.6152304609218, 1261.881763527054, 1265.1482965931864, 1268.4148296593187, 1271.681362725451, 1274.9478957915833, 1278.2144288577153, 1281.4809619238476, 1284.74749498998, 1288.0140280561122, 1291.2805611222445, 1294.5470941883768, 1297.8136272545091, 1301.0801603206412, 1304.3466933867735, 1307.6132264529058, 1310.879759519038, 1314.1462925851704, 1317.4128256513027, 1320.679358717435, 1323.945891783567, 1327.2124248496993, 1330.4789579158316, 1333.745490981964, 1337.0120240480962, 1340.2785571142285, 1343.5450901803608, 1346.811623246493, 1350.0781563126252, 1353.3446893787575, 1356.6112224448898, 1359.877755511022, 1363.1442885771544, 1366.4108216432867, 1369.6773547094188, 1372.943887775551, 1376.2104208416833, 1379.4769539078156, 1382.743486973948, 1386.0100200400802, 1389.2765531062125, 1392.5430861723446, 1395.809619238477, 1399.0761523046092, 1402.3426853707415, 1405.6092184368738, 1408.875751503006, 1412.1422845691384, 1415.4088176352705, 1418.6753507014027, 1421.941883767535, 1425.2084168336673, 1428.4749498997996, 1431.741482965932, 1435.0080160320642, 1438.2745490981963, 1441.5410821643286, 1444.807615230461, 1448.0741482965932, 1451.3406813627255, 1454.6072144288578, 1457.87374749499, 1461.1402805611222, 1464.4068136272545, 1467.6733466933867, 1470.939879759519, 1474.2064128256513, 1477.4729458917836, 1480.739478957916, 1484.006012024048, 1487.2725450901803, 1490.5390781563126, 1493.805611222445, 1497.0721442885772, 1500.3386773547095, 1503.6052104208418, 1506.8717434869739, 1510.1382765531062, 1513.4048096192384, 1516.6713426853707, 1519.937875751503, 1523.2044088176353, 1526.4709418837676, 1529.7374749498997, 1533.004008016032, 1536.2705410821643, 1539.5370741482966, 1542.803607214429, 1546.0701402805612, 1549.3366733466935, 1552.6032064128256, 1555.8697394789579, 1559.1362725450902, 1562.4028056112224, 1565.6693386773547, 1568.935871743487, 1572.2024048096193, 1575.4689378757514, 1578.7354709418837, 1582.002004008016, 1585.2685370741483, 1588.5350701402806, 1591.801603206413, 1595.0681362725452, 1598.3346693386773, 1601.6012024048096, 1604.8677354709419, 1608.1342685370741, 1611.4008016032064, 1614.6673346693387, 1617.933867735471, 1621.200400801603, 1624.4669338677354, 1627.7334669338677, 1631.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_8ff849e472dc4391b329998c0034a563.x = d3.scale.linear()
              .domain([1.0, 1631.0])
              .range([0, 400]);

    color_map_8ff849e472dc4391b329998c0034a563.legend = L.control({position: 'topright'});
    color_map_8ff849e472dc4391b329998c0034a563.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_8ff849e472dc4391b329998c0034a563.legend.addTo(map_02a53250b21e4b2880047a2593d3cb88);

    color_map_8ff849e472dc4391b329998c0034a563.xAxis = d3.svg.axis()
        .scale(color_map_8ff849e472dc4391b329998c0034a563.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 272.6666666666667, 544.3333333333334, 816.0, 1087.6666666666667, 1359.3333333333335, 1631.0]);

    color_map_8ff849e472dc4391b329998c0034a563.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_8ff849e472dc4391b329998c0034a563.g = color_map_8ff849e472dc4391b329998c0034a563.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_8ff849e472dc4391b329998c0034a563.g.selectAll("rect")
        .data(color_map_8ff849e472dc4391b329998c0034a563.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_8ff849e472dc4391b329998c0034a563.x(color_map_8ff849e472dc4391b329998c0034a563.color.domain()[i - 1]) : color_map_8ff849e472dc4391b329998c0034a563.x.range()[0],
            x1: i < color_map_8ff849e472dc4391b329998c0034a563.color.domain().length ? color_map_8ff849e472dc4391b329998c0034a563.x(color_map_8ff849e472dc4391b329998c0034a563.color.domain()[i]) : color_map_8ff849e472dc4391b329998c0034a563.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_8ff849e472dc4391b329998c0034a563.g.call(color_map_8ff849e472dc4391b329998c0034a563.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('50_PSOL');

