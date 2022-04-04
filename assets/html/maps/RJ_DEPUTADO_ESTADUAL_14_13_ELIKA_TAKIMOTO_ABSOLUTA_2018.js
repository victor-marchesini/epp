    
            var map_99981e75558d4a2d8f80b0154bc0ccec = L.map(
                "map_99981e75558d4a2d8f80b0154bc0ccec",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_7ac305dc93b44a06a1869f3c1dba79ad = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_99981e75558d4a2d8f80b0154bc0ccec);
        
    
            var choropleth_ebe1c21056dd4b19bfec92ccd1dcd066 = L.featureGroup(
                {}
            ).addTo(map_99981e75558d4a2d8f80b0154bc0ccec);
        
    
        function geo_json_fb1d4fa9cffe4b4a9efa78399ea5c928_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 447: case 437: case 446: case 444: case 352: case 411: case 364: case 346: case 433: case 430: case 409: case 399: case 471: case 477: case 370: case 511: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 455: case 436: case 419: case 510: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_fb1d4fa9cffe4b4a9efa78399ea5c928_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_fb1d4fa9cffe4b4a9efa78399ea5c928 = L.geoJson(null, {
                onEachFeature: geo_json_fb1d4fa9cffe4b4a9efa78399ea5c928_onEachFeature,
            
                style: geo_json_fb1d4fa9cffe4b4a9efa78399ea5c928_styler,
        });

        function geo_json_fb1d4fa9cffe4b4a9efa78399ea5c928_add (data) {
            geo_json_fb1d4fa9cffe4b4a9efa78399ea5c928
                .addData(data)
                .addTo(choropleth_ebe1c21056dd4b19bfec92ccd1dcd066);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_fb1d4fa9cffe4b4a9efa78399ea5c928_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_23fc3e5862b1402aa8868e51afae907a = {};

    
    color_map_23fc3e5862b1402aa8868e51afae907a.color = d3.scale.threshold()
              .domain([1.0, 3.5771543086172346, 6.154308617234469, 8.731462925851703, 11.308617234468938, 13.885771543086172, 16.462925851703407, 19.04008016032064, 21.617234468937877, 24.194388777555112, 26.771543086172343, 29.34869739478958, 31.925851703406813, 34.503006012024045, 37.08016032064128, 39.657314629258515, 42.234468937875754, 44.811623246492985, 47.388777555110224, 49.965931863727455, 52.54308617234469, 55.120240480961925, 57.69739478957916, 60.274549098196395, 62.85170340681363, 65.42885771543087, 68.00601202404809, 70.58316633266533, 73.16032064128257, 75.7374749498998, 78.31462925851703, 80.89178356713427, 83.46893787575151, 86.04609218436873, 88.62324649298597, 91.20040080160321, 93.77755511022045, 96.35470941883767, 98.93186372745491, 101.50901803607215, 104.08617234468937, 106.66332665330661, 109.24048096192385, 111.81763527054109, 114.39478957915831, 116.97194388777555, 119.54909819639279, 122.12625250501002, 124.70340681362725, 127.28056112224449, 129.85771543086173, 132.43486973947896, 135.01202404809618, 137.58917835671343, 140.16633266533066, 142.7434869739479, 145.32064128256513, 147.89779559118236, 150.4749498997996, 153.05210420841684, 155.62925851703406, 158.2064128256513, 160.78356713426854, 163.36072144288576, 165.93787575150301, 168.51503006012024, 171.09218436873746, 173.66933867735472, 176.24649298597194, 178.82364729458916, 181.40080160320642, 183.97795591182364, 186.5551102204409, 189.13226452905812, 191.70941883767534, 194.2865731462926, 196.86372745490982, 199.44088176352705, 202.0180360721443, 204.59519038076152, 207.17234468937875, 209.749498997996, 212.32665330661322, 214.90380761523045, 217.4809619238477, 220.05811623246493, 222.63527054108218, 225.2124248496994, 227.78957915831663, 230.36673346693388, 232.9438877755511, 235.52104208416833, 238.09819639278558, 240.6753507014028, 243.25250501002003, 245.82965931863728, 248.4068136272545, 250.98396793587173, 253.56112224448898, 256.1382765531062, 258.71543086172346, 261.29258517034066, 263.8697394789579, 266.44689378757516, 269.02404809619236, 271.6012024048096, 274.17835671342687, 276.75551102204406, 279.3326653306613, 281.90981963927857, 284.4869739478958, 287.064128256513, 289.64128256513027, 292.2184368737475, 294.7955911823647, 297.37274549098197, 299.9498997995992, 302.5270541082164, 305.10420841683367, 307.6813627254509, 310.2585170340681, 312.8356713426854, 315.4128256513026, 317.9899799599198, 320.5671342685371, 323.1442885771543, 325.7214428857715, 328.2985971943888, 330.87575150300603, 333.4529058116232, 336.0300601202405, 338.60721442885773, 341.1843687374749, 343.7615230460922, 346.33867735470943, 348.9158316633266, 351.4929859719439, 354.07014028056113, 356.64729458917833, 359.2244488977956, 361.80160320641284, 364.3787575150301, 366.9559118236473, 369.53306613226454, 372.1102204408818, 374.687374749499, 377.26452905811624, 379.8416833667335, 382.4188376753507, 384.99599198396794, 387.5731462925852, 390.1503006012024, 392.72745490981964, 395.3046092184369, 397.8817635270541, 400.45891783567134, 403.0360721442886, 405.6132264529058, 408.19038076152304, 410.7675350701403, 413.3446893787575, 415.92184368737475, 418.498997995992, 421.0761523046092, 423.65330661322645, 426.2304609218437, 428.8076152304609, 431.38476953907815, 433.9619238476954, 436.5390781563126, 439.11623246492985, 441.6933867735471, 444.27054108216436, 446.84769539078155, 449.4248496993988, 452.00200400801606, 454.57915831663325, 457.1563126252505, 459.73346693386776, 462.31062124248496, 464.8877755511022, 467.46492985971946, 470.04208416833666, 472.6192384769539, 475.19639278557116, 477.77354709418836, 480.3507014028056, 482.92785571142286, 485.50501002004006, 488.0821643286573, 490.65931863727457, 493.23647294589176, 495.813627254509, 498.39078156312627, 500.96793587174346, 503.5450901803607, 506.12224448897797, 508.69939879759517, 511.2765531062124, 513.8537074148296, 516.4308617234469, 519.0080160320641, 521.5851703406813, 524.1623246492986, 526.7394789579158, 529.316633266533, 531.8937875751503, 534.4709418837675, 537.0480961923847, 539.625250501002, 542.2024048096192, 544.7795591182364, 547.3567134268537, 549.9338677354709, 552.5110220440881, 555.0881763527054, 557.6653306613226, 560.2424849699398, 562.8196392785571, 565.3967935871743, 567.9739478957916, 570.5511022044088, 573.128256513026, 575.7054108216433, 578.2825651302605, 580.8597194388777, 583.436873747495, 586.0140280561122, 588.5911823647294, 591.1683366733467, 593.7454909819639, 596.3226452905811, 598.8997995991984, 601.4769539078156, 604.0541082164328, 606.6312625250501, 609.2084168336673, 611.7855711422845, 614.3627254509018, 616.939879759519, 619.5170340681362, 622.0941883767536, 624.6713426853707, 627.2484969939879, 629.8256513026053, 632.4028056112224, 634.9799599198396, 637.557114228457, 640.1342685370741, 642.7114228456913, 645.2885771543087, 647.8657314629259, 650.442885771543, 653.0200400801604, 655.5971943887776, 658.1743486973947, 660.7515030060121, 663.3286573146293, 665.9058116232464, 668.4829659318638, 671.060120240481, 673.6372745490982, 676.2144288577155, 678.7915831663327, 681.3687374749499, 683.9458917835672, 686.5230460921844, 689.1002004008016, 691.6773547094189, 694.2545090180361, 696.8316633266533, 699.4088176352706, 701.9859719438878, 704.563126252505, 707.1402805611223, 709.7174348697395, 712.2945891783567, 714.871743486974, 717.4488977955912, 720.0260521042084, 722.6032064128257, 725.1803607214429, 727.7575150300602, 730.3346693386774, 732.9118236472946, 735.4889779559119, 738.0661322645291, 740.6432865731463, 743.2204408817636, 745.7975951903808, 748.374749498998, 750.9519038076153, 753.5290581162325, 756.1062124248497, 758.683366733467, 761.2605210420842, 763.8376753507014, 766.4148296593187, 768.9919839679359, 771.5691382765531, 774.1462925851704, 776.7234468937876, 779.3006012024048, 781.8777555110221, 784.4549098196393, 787.0320641282565, 789.6092184368738, 792.186372745491, 794.7635270541082, 797.3406813627255, 799.9178356713427, 802.4949899799599, 805.0721442885772, 807.6492985971944, 810.2264529058116, 812.8036072144289, 815.3807615230461, 817.9579158316633, 820.5350701402806, 823.1122244488978, 825.689378757515, 828.2665330661323, 830.8436873747495, 833.4208416833667, 835.997995991984, 838.5751503006012, 841.1523046092184, 843.7294589178357, 846.3066132264529, 848.8837675350701, 851.4609218436874, 854.0380761523046, 856.6152304609218, 859.1923847695391, 861.7695390781563, 864.3466933867735, 866.9238476953908, 869.501002004008, 872.0781563126252, 874.6553106212425, 877.2324649298597, 879.8096192384769, 882.3867735470942, 884.9639278557114, 887.5410821643287, 890.1182364729459, 892.6953907815631, 895.2725450901804, 897.8496993987976, 900.4268537074148, 903.0040080160321, 905.5811623246493, 908.1583166332665, 910.7354709418838, 913.312625250501, 915.8897795591182, 918.4669338677355, 921.0440881763527, 923.6212424849699, 926.1983967935872, 928.7755511022044, 931.3527054108216, 933.9298597194389, 936.5070140280561, 939.0841683366733, 941.6613226452906, 944.2384769539078, 946.815631262525, 949.3927855711423, 951.9699398797595, 954.5470941883767, 957.124248496994, 959.7014028056112, 962.2785571142284, 964.8557114228457, 967.4328657314629, 970.0100200400801, 972.5871743486974, 975.1643286573146, 977.7414829659318, 980.3186372745491, 982.8957915831663, 985.4729458917835, 988.0501002004008, 990.627254509018, 993.2044088176352, 995.7815631262525, 998.3587174348697, 1000.9358717434869, 1003.5130260521042, 1006.0901803607214, 1008.6673346693386, 1011.2444889779559, 1013.8216432865731, 1016.3987975951903, 1018.9759519038076, 1021.5531062124248, 1024.1302605210421, 1026.7074148296592, 1029.2845691382765, 1031.8617234468938, 1034.438877755511, 1037.0160320641282, 1039.5931863727455, 1042.1703406813626, 1044.74749498998, 1047.3246492985973, 1049.9018036072143, 1052.4789579158316, 1055.056112224449, 1057.633266533066, 1060.2104208416833, 1062.7875751503007, 1065.3647294589177, 1067.941883767535, 1070.5190380761524, 1073.0961923847694, 1075.6733466933867, 1078.250501002004, 1080.8276553106211, 1083.4048096192384, 1085.9819639278558, 1088.5591182364728, 1091.1362725450902, 1093.7134268537075, 1096.2905811623245, 1098.8677354709419, 1101.4448897795592, 1104.0220440881762, 1106.5991983967936, 1109.1763527054109, 1111.753507014028, 1114.3306613226453, 1116.9078156312626, 1119.4849699398796, 1122.062124248497, 1124.6392785571143, 1127.2164328657316, 1129.7935871743487, 1132.370741482966, 1134.9478957915833, 1137.5250501002004, 1140.1022044088177, 1142.679358717435, 1145.256513026052, 1147.8336673346694, 1150.4108216432867, 1152.9879759519038, 1155.565130260521, 1158.1422845691384, 1160.7194388777555, 1163.2965931863728, 1165.87374749499, 1168.4509018036072, 1171.0280561122245, 1173.6052104208418, 1176.1823647294589, 1178.7595190380762, 1181.3366733466935, 1183.9138276553106, 1186.4909819639279, 1189.0681362725452, 1191.6452905811623, 1194.2224448897796, 1196.799599198397, 1199.376753507014, 1201.9539078156313, 1204.5310621242486, 1207.1082164328657, 1209.685370741483, 1212.2625250501003, 1214.8396793587174, 1217.4168336673347, 1219.993987975952, 1222.571142284569, 1225.1482965931864, 1227.7254509018037, 1230.3026052104208, 1232.879759519038, 1235.4569138276554, 1238.0340681362725, 1240.6112224448898, 1243.188376753507, 1245.7655310621242, 1248.3426853707415, 1250.9198396793588, 1253.4969939879759, 1256.0741482965932, 1258.6513026052105, 1261.2284569138276, 1263.805611222445, 1266.3827655310622, 1268.9599198396793, 1271.5370741482966, 1274.114228456914, 1276.691382765531, 1279.2685370741483, 1281.8456913827656, 1284.4228456913827, 1287.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_23fc3e5862b1402aa8868e51afae907a.x = d3.scale.linear()
              .domain([1.0, 1287.0])
              .range([0, 400]);

    color_map_23fc3e5862b1402aa8868e51afae907a.legend = L.control({position: 'topright'});
    color_map_23fc3e5862b1402aa8868e51afae907a.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_23fc3e5862b1402aa8868e51afae907a.legend.addTo(map_99981e75558d4a2d8f80b0154bc0ccec);

    color_map_23fc3e5862b1402aa8868e51afae907a.xAxis = d3.svg.axis()
        .scale(color_map_23fc3e5862b1402aa8868e51afae907a.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 215.33333333333334, 429.6666666666667, 644.0, 858.3333333333334, 1072.6666666666667, 1287.0]);

    color_map_23fc3e5862b1402aa8868e51afae907a.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_23fc3e5862b1402aa8868e51afae907a.g = color_map_23fc3e5862b1402aa8868e51afae907a.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_23fc3e5862b1402aa8868e51afae907a.g.selectAll("rect")
        .data(color_map_23fc3e5862b1402aa8868e51afae907a.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_23fc3e5862b1402aa8868e51afae907a.x(color_map_23fc3e5862b1402aa8868e51afae907a.color.domain()[i - 1]) : color_map_23fc3e5862b1402aa8868e51afae907a.x.range()[0],
            x1: i < color_map_23fc3e5862b1402aa8868e51afae907a.color.domain().length ? color_map_23fc3e5862b1402aa8868e51afae907a.x(color_map_23fc3e5862b1402aa8868e51afae907a.color.domain()[i]) : color_map_23fc3e5862b1402aa8868e51afae907a.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_23fc3e5862b1402aa8868e51afae907a.g.call(color_map_23fc3e5862b1402aa8868e51afae907a.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('14_13_ELIKA TAKIMOTO');

