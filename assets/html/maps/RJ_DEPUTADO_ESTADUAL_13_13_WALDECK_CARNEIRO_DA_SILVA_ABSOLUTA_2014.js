    
            var map_c89d9be31fd0446db58ba7a6e210bb72 = L.map(
                "map_c89d9be31fd0446db58ba7a6e210bb72",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_c6e62da16062422f81a07c3ecbe15819 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_c89d9be31fd0446db58ba7a6e210bb72);
        
    
            var choropleth_9b1c9b70c3d5424597b7c303e6ba74b4 = L.featureGroup(
                {}
            ).addTo(map_c89d9be31fd0446db58ba7a6e210bb72);
        
    
        function geo_json_34c2ca2457f14c16a1d0973abb849d0b_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 325: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 357: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_34c2ca2457f14c16a1d0973abb849d0b_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_34c2ca2457f14c16a1d0973abb849d0b = L.geoJson(null, {
                onEachFeature: geo_json_34c2ca2457f14c16a1d0973abb849d0b_onEachFeature,
            
                style: geo_json_34c2ca2457f14c16a1d0973abb849d0b_styler,
        });

        function geo_json_34c2ca2457f14c16a1d0973abb849d0b_add (data) {
            geo_json_34c2ca2457f14c16a1d0973abb849d0b
                .addData(data)
                .addTo(choropleth_9b1c9b70c3d5424597b7c303e6ba74b4);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_34c2ca2457f14c16a1d0973abb849d0b_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_81f59428aca74a0eb44c3cea012e7ebf = {};

    
    color_map_81f59428aca74a0eb44c3cea012e7ebf.color = d3.scale.threshold()
              .domain([0.0, 2.6452905811623246, 5.290581162324649, 7.935871743486974, 10.581162324649299, 13.226452905811623, 15.871743486973948, 18.517034068136272, 21.162324649298597, 23.80761523046092, 26.452905811623246, 29.09819639278557, 31.743486973947896, 34.388777555110224, 37.034068136272545, 39.67935871743487, 42.324649298597194, 44.96993987975952, 47.61523046092184, 50.26052104208417, 52.90581162324649, 55.55110220440882, 58.19639278557114, 60.84168336673347, 63.48697394789579, 66.13226452905812, 68.77755511022045, 71.42284569138276, 74.06813627254509, 76.71342685370742, 79.35871743486975, 82.00400801603206, 84.64929859719439, 87.29458917835672, 89.93987975951904, 92.58517034068136, 95.23046092184369, 97.87575150300601, 100.52104208416834, 103.16633266533066, 105.81162324649299, 108.45691382765531, 111.10220440881764, 113.74749498997996, 116.39278557114228, 119.03807615230461, 121.68336673346694, 124.32865731462925, 126.97394789579158, 129.6192384769539, 132.26452905811624, 134.90981963927857, 137.5551102204409, 140.2004008016032, 142.84569138276552, 145.49098196392785, 148.13627254509018, 150.7815631262525, 153.42685370741484, 156.07214428857716, 158.7174348697395, 161.3627254509018, 164.00801603206412, 166.65330661322645, 169.29859719438878, 171.9438877755511, 174.58917835671343, 177.23446893787576, 179.8797595190381, 182.5250501002004, 185.17034068136272, 187.81563126252505, 190.46092184368737, 193.1062124248497, 195.75150300601203, 198.39679358717436, 201.0420841683367, 203.68737474949899, 206.3326653306613, 208.97795591182364, 211.62324649298597, 214.2685370741483, 216.91382765531063, 219.55911823647295, 222.20440881763528, 224.84969939879758, 227.4949899799599, 230.14028056112224, 232.78557114228457, 235.4308617234469, 238.07615230460922, 240.72144288577155, 243.36673346693388, 246.01202404809618, 248.6573146292585, 251.30260521042084, 253.94789579158316, 256.5931863727455, 259.2384769539078, 261.88376753507015, 264.5290581162325, 267.1743486973948, 269.81963927855713, 272.46492985971946, 275.1102204408818, 277.75551102204406, 280.4008016032064, 283.0460921843687, 285.69138276553105, 288.3366733466934, 290.9819639278557, 293.62725450901803, 296.27254509018036, 298.9178356713427, 301.563126252505, 304.20841683366734, 306.85370741482967, 309.498997995992, 312.1442885771543, 314.78957915831666, 317.434869739479, 320.08016032064126, 322.7254509018036, 325.3707414829659, 328.01603206412824, 330.66132264529057, 333.3066132264529, 335.9519038076152, 338.59719438877755, 341.2424849699399, 343.8877755511022, 346.53306613226454, 349.17835671342687, 351.8236472945892, 354.4689378757515, 357.11422845691385, 359.7595190380762, 362.40480961923845, 365.0501002004008, 367.6953907815631, 370.34068136272543, 372.98597194388776, 375.6312625250501, 378.2765531062124, 380.92184368737475, 383.5671342685371, 386.2124248496994, 388.85771543086173, 391.50300601202406, 394.1482965931864, 396.7935871743487, 399.43887775551104, 402.0841683366734, 404.72945891783564, 407.37474949899797, 410.0200400801603, 412.6653306613226, 415.31062124248496, 417.9559118236473, 420.6012024048096, 423.24649298597194, 425.89178356713427, 428.5370741482966, 431.1823647294589, 433.82765531062125, 436.4729458917836, 439.1182364729459, 441.76352705410824, 444.40881763527057, 447.0541082164329, 449.69939879759517, 452.3446893787575, 454.9899799599198, 457.63527054108215, 460.2805611222445, 462.9258517034068, 465.57114228456913, 468.21643286573146, 470.8617234468938, 473.5070140280561, 476.15230460921845, 478.7975951903808, 481.4428857715431, 484.08817635270543, 486.73346693386776, 489.3787575150301, 492.02404809619236, 494.6693386773547, 497.314629258517, 499.95991983967934, 502.6052104208417, 505.250501002004, 507.89579158316633, 510.54108216432866, 513.186372745491, 515.8316633266533, 518.4769539078156, 521.1222444889779, 523.7675350701403, 526.4128256513026, 529.058116232465, 531.7034068136272, 534.3486973947896, 536.9939879759519, 539.6392785571143, 542.2845691382765, 544.9298597194389, 547.5751503006012, 550.2204408817636, 552.8657314629259, 555.5110220440881, 558.1563126252505, 560.8016032064128, 563.4468937875752, 566.0921843687374, 568.7374749498998, 571.3827655310621, 574.0280561122245, 576.6733466933867, 579.3186372745491, 581.9639278557114, 584.6092184368738, 587.2545090180361, 589.8997995991984, 592.5450901803607, 595.1903807615231, 597.8356713426854, 600.4809619238476, 603.12625250501, 605.7715430861723, 608.4168336673347, 611.062124248497, 613.7074148296593, 616.3527054108216, 618.997995991984, 621.6432865731463, 624.2885771543087, 626.9338677354709, 629.5791583166333, 632.2244488977956, 634.869739478958, 637.5150300601202, 640.1603206412825, 642.8056112224449, 645.4509018036072, 648.0961923847696, 650.7414829659318, 653.3867735470942, 656.0320641282565, 658.6773547094189, 661.3226452905811, 663.9679358717435, 666.6132264529058, 669.2585170340682, 671.9038076152304, 674.5490981963928, 677.1943887775551, 679.8396793587175, 682.4849699398798, 685.130260521042, 687.7755511022044, 690.4208416833667, 693.0661322645291, 695.7114228456913, 698.3567134268537, 701.002004008016, 703.6472945891784, 706.2925851703407, 708.937875751503, 711.5831663326653, 714.2284569138277, 716.87374749499, 719.5190380761524, 722.1643286573146, 724.8096192384769, 727.4549098196393, 730.1002004008016, 732.7454909819639, 735.3907815631262, 738.0360721442886, 740.6813627254509, 743.3266533066133, 745.9719438877755, 748.6172344689379, 751.2625250501002, 753.9078156312626, 756.5531062124248, 759.1983967935872, 761.8436873747495, 764.4889779559119, 767.1342685370741, 769.7795591182364, 772.4248496993988, 775.0701402805611, 777.7154308617235, 780.3607214428857, 783.0060120240481, 785.6513026052104, 788.2965931863728, 790.941883767535, 793.5871743486974, 796.2324649298597, 798.8777555110221, 801.5230460921844, 804.1683366733467, 806.813627254509, 809.4589178356713, 812.1042084168337, 814.7494989979959, 817.3947895791583, 820.0400801603206, 822.685370741483, 825.3306613226453, 827.9759519038076, 830.6212424849699, 833.2665330661323, 835.9118236472946, 838.557114228457, 841.2024048096192, 843.8476953907816, 846.4929859719439, 849.1382765531063, 851.7835671342685, 854.4288577154308, 857.0741482965932, 859.7194388777555, 862.3647294589179, 865.0100200400801, 867.6553106212425, 870.3006012024048, 872.9458917835672, 875.5911823647294, 878.2364729458918, 880.8817635270541, 883.5270541082165, 886.1723446893787, 888.8176352705411, 891.4629258517034, 894.1082164328658, 896.7535070140281, 899.3987975951903, 902.0440881763527, 904.689378757515, 907.3346693386774, 909.9799599198396, 912.625250501002, 915.2705410821643, 917.9158316633267, 920.561122244489, 923.2064128256513, 925.8517034068136, 928.496993987976, 931.1422845691383, 933.7875751503007, 936.4328657314629, 939.0781563126252, 941.7234468937876, 944.3687374749499, 947.0140280561122, 949.6593186372745, 952.3046092184369, 954.9498997995992, 957.5951903807616, 960.2404809619238, 962.8857715430862, 965.5310621242485, 968.1763527054109, 970.8216432865731, 973.4669338677355, 976.1122244488978, 978.7575150300602, 981.4028056112224, 984.0480961923847, 986.6933867735471, 989.3386773547094, 991.9839679358718, 994.629258517034, 997.2745490981964, 999.9198396793587, 1002.5651302605211, 1005.2104208416833, 1007.8557114228457, 1010.501002004008, 1013.1462925851704, 1015.7915831663327, 1018.436873747495, 1021.0821643286573, 1023.7274549098196, 1026.372745490982, 1029.0180360721442, 1031.6633266533065, 1034.308617234469, 1036.9539078156313, 1039.5991983967936, 1042.2444889779558, 1044.8897795591183, 1047.5350701402806, 1050.1803607214429, 1052.8256513026051, 1055.4709418837676, 1058.11623246493, 1060.7615230460922, 1063.4068136272545, 1066.0521042084167, 1068.6973947895792, 1071.3426853707415, 1073.9879759519038, 1076.633266533066, 1079.2785571142285, 1081.9238476953908, 1084.569138276553, 1087.2144288577153, 1089.8597194388778, 1092.5050100200401, 1095.1503006012024, 1097.7955911823647, 1100.4408817635272, 1103.0861723446894, 1105.7314629258517, 1108.376753507014, 1111.0220440881762, 1113.6673346693387, 1116.312625250501, 1118.9579158316633, 1121.6032064128256, 1124.248496993988, 1126.8937875751503, 1129.5390781563126, 1132.1843687374749, 1134.8296593186374, 1137.4749498997996, 1140.120240480962, 1142.7655310621242, 1145.4108216432867, 1148.056112224449, 1150.7014028056112, 1153.3466933867735, 1155.9919839679358, 1158.6372745490983, 1161.2825651302605, 1163.9278557114228, 1166.573146292585, 1169.2184368737476, 1171.8637274549098, 1174.5090180360721, 1177.1543086172344, 1179.799599198397, 1182.4448897795592, 1185.0901803607214, 1187.7354709418837, 1190.3807615230462, 1193.0260521042085, 1195.6713426853707, 1198.316633266533, 1200.9619238476953, 1203.6072144288578, 1206.25250501002, 1208.8977955911823, 1211.5430861723446, 1214.188376753507, 1216.8336673346694, 1219.4789579158316, 1222.124248496994, 1224.7695390781564, 1227.4148296593187, 1230.060120240481, 1232.7054108216432, 1235.3507014028055, 1237.995991983968, 1240.6412825651303, 1243.2865731462925, 1245.9318637274548, 1248.5771543086173, 1251.2224448897796, 1253.8677354709419, 1256.5130260521041, 1259.1583166332666, 1261.803607214429, 1264.4488977955912, 1267.0941883767534, 1269.739478957916, 1272.3847695390782, 1275.0300601202405, 1277.6753507014027, 1280.320641282565, 1282.9659318637275, 1285.6112224448898, 1288.256513026052, 1290.9018036072143, 1293.5470941883768, 1296.192384769539, 1298.8376753507014, 1301.4829659318636, 1304.1282565130261, 1306.7735470941884, 1309.4188376753507, 1312.064128256513, 1314.7094188376755, 1317.3547094188377, 1320.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_81f59428aca74a0eb44c3cea012e7ebf.x = d3.scale.linear()
              .domain([0.0, 1320.0])
              .range([0, 400]);

    color_map_81f59428aca74a0eb44c3cea012e7ebf.legend = L.control({position: 'topright'});
    color_map_81f59428aca74a0eb44c3cea012e7ebf.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_81f59428aca74a0eb44c3cea012e7ebf.legend.addTo(map_c89d9be31fd0446db58ba7a6e210bb72);

    color_map_81f59428aca74a0eb44c3cea012e7ebf.xAxis = d3.svg.axis()
        .scale(color_map_81f59428aca74a0eb44c3cea012e7ebf.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 220.0, 440.0, 660.0, 880.0, 1100.0, 1320.0]);

    color_map_81f59428aca74a0eb44c3cea012e7ebf.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_81f59428aca74a0eb44c3cea012e7ebf.g = color_map_81f59428aca74a0eb44c3cea012e7ebf.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_81f59428aca74a0eb44c3cea012e7ebf.g.selectAll("rect")
        .data(color_map_81f59428aca74a0eb44c3cea012e7ebf.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_81f59428aca74a0eb44c3cea012e7ebf.x(color_map_81f59428aca74a0eb44c3cea012e7ebf.color.domain()[i - 1]) : color_map_81f59428aca74a0eb44c3cea012e7ebf.x.range()[0],
            x1: i < color_map_81f59428aca74a0eb44c3cea012e7ebf.color.domain().length ? color_map_81f59428aca74a0eb44c3cea012e7ebf.x(color_map_81f59428aca74a0eb44c3cea012e7ebf.color.domain()[i]) : color_map_81f59428aca74a0eb44c3cea012e7ebf.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_81f59428aca74a0eb44c3cea012e7ebf.g.call(color_map_81f59428aca74a0eb44c3cea012e7ebf.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('13_13_WALDECK CARNEIRO DA SILVA');
