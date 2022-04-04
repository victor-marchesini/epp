    
            var map_aff2763162554f8e80423a849fb6491d = L.map(
                "map_aff2763162554f8e80423a849fb6491d",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_c647f2950c1844c9a046992cc7c3d0b0 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_aff2763162554f8e80423a849fb6491d);
        
    
            var choropleth_3e7d4562365b469986aceeaaab588de6 = L.featureGroup(
                {}
            ).addTo(map_aff2763162554f8e80423a849fb6491d);
        
    
        function geo_json_403480c78853432a8b1a3b149338908c_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 428: case 423: case 431: case 349: case 342: case 336: case 367: case 460: case 475: case 357: case 481: case 479: case 366: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 449: case 472: case 436: case 446: case 444: case 419: case 471: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_403480c78853432a8b1a3b149338908c_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_403480c78853432a8b1a3b149338908c = L.geoJson(null, {
                onEachFeature: geo_json_403480c78853432a8b1a3b149338908c_onEachFeature,
            
                style: geo_json_403480c78853432a8b1a3b149338908c_styler,
        });

        function geo_json_403480c78853432a8b1a3b149338908c_add (data) {
            geo_json_403480c78853432a8b1a3b149338908c
                .addData(data)
                .addTo(choropleth_3e7d4562365b469986aceeaaab588de6);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_403480c78853432a8b1a3b149338908c_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_df7190e8a60a47ee8228f7f407944052 = {};

    
    color_map_df7190e8a60a47ee8228f7f407944052.color = d3.scale.threshold()
              .domain([1.0, 3.490981963927856, 5.981963927855712, 8.472945891783567, 10.963927855711423, 13.454909819639278, 15.945891783567134, 18.43687374749499, 20.927855711422847, 23.4188376753507, 25.909819639278556, 28.400801603206414, 30.89178356713427, 33.38276553106213, 35.87374749498998, 38.364729458917836, 40.855711422845694, 43.346693386773545, 45.8376753507014, 48.32865731462926, 50.81963927855711, 53.31062124248497, 55.80160320641283, 58.29258517034068, 60.78356713426854, 63.274549098196395, 65.76553106212425, 68.2565130260521, 70.74749498997996, 73.23847695390782, 75.72945891783567, 78.22044088176352, 80.71142284569139, 83.20240480961924, 85.69338677354709, 88.18436873747495, 90.6753507014028, 93.16633266533066, 95.65731462925852, 98.14829659318637, 100.63927855711422, 103.13026052104209, 105.62124248496994, 108.11222444889779, 110.60320641282566, 113.09418837675351, 115.58517034068136, 118.07615230460922, 120.56713426853707, 123.05811623246493, 125.54909819639279, 128.04008016032066, 130.5310621242485, 133.02204408817636, 135.5130260521042, 138.00400801603206, 140.4949899799599, 142.98597194388776, 145.47695390781564, 147.9679358717435, 150.45891783567134, 152.9498997995992, 155.44088176352705, 157.9318637274549, 160.42284569138278, 162.91382765531063, 165.40480961923848, 167.89579158316633, 170.38677354709418, 172.87775551102203, 175.3687374749499, 177.85971943887776, 180.3507014028056, 182.84168336673346, 185.3326653306613, 187.82364729458916, 190.31462925851704, 192.8056112224449, 195.29659318637275, 197.7875751503006, 200.27855711422845, 202.7695390781563, 205.26052104208418, 207.75150300601203, 210.24248496993988, 212.73346693386773, 215.22444889779558, 217.71543086172343, 220.2064128256513, 222.69739478957916, 225.18837675350701, 227.67935871743487, 230.17034068136272, 232.66132264529057, 235.15230460921845, 237.6432865731463, 240.13426853707415, 242.625250501002, 245.11623246492985, 247.6072144288577, 250.09819639278558, 252.58917835671343, 255.08016032064128, 257.57114228456913, 260.062124248497, 262.55310621242484, 265.0440881763527, 267.53507014028054, 270.0260521042084, 272.5170340681363, 275.0080160320641, 277.498997995992, 279.9899799599198, 282.4809619238477, 284.9719438877755, 287.4629258517034, 289.9539078156313, 292.4448897795591, 294.935871743487, 297.4268537074148, 299.9178356713427, 302.40881763527057, 304.8997995991984, 307.39078156312627, 309.8817635270541, 312.37274549098197, 314.8637274549098, 317.3547094188377, 319.84569138276555, 322.3366733466934, 324.82765531062125, 327.3186372745491, 329.80961923847696, 332.30060120240483, 334.79158316633266, 337.28256513026054, 339.77354709418836, 342.26452905811624, 344.75551102204406, 347.24649298597194, 349.7374749498998, 352.22845691382764, 354.7194388777555, 357.21042084168334, 359.7014028056112, 362.1923847695391, 364.6833667334669, 367.1743486973948, 369.6653306613226, 372.1563126252505, 374.64729458917833, 377.1382765531062, 379.6292585170341, 382.1202404809619, 384.6112224448898, 387.1022044088176, 389.5931863727455, 392.0841683366734, 394.5751503006012, 397.0661322645291, 399.5571142284569, 402.0480961923848, 404.5390781563126, 407.0300601202405, 409.52104208416836, 412.0120240480962, 414.50300601202406, 416.9939879759519, 419.48496993987976, 421.97595190380764, 424.46693386773546, 426.95791583166334, 429.44889779559117, 431.93987975951904, 434.43086172344687, 436.92184368737475, 439.4128256513026, 441.90380761523045, 444.3947895791583, 446.88577154308615, 449.37675350701403, 451.8677354709419, 454.35871743486973, 456.8496993987976, 459.34068136272543, 461.8316633266533, 464.32264529058114, 466.813627254509, 469.3046092184369, 471.7955911823647, 474.2865731462926, 476.7775551102204, 479.2685370741483, 481.7595190380762, 484.250501002004, 486.7414829659319, 489.2324649298597, 491.7234468937876, 494.2144288577154, 496.7054108216433, 499.19639278557116, 501.687374749499, 504.17835671342687, 506.6693386773547, 509.16032064128257, 511.65130260521045, 514.1422845691383, 516.6332665330661, 519.124248496994, 521.6152304609218, 524.1062124248497, 526.5971943887776, 529.0881763527054, 531.5791583166333, 534.0701402805611, 536.561122244489, 539.0521042084168, 541.5430861723447, 544.0340681362726, 546.5250501002004, 549.0160320641282, 551.5070140280561, 553.997995991984, 556.4889779559119, 558.9799599198396, 561.4709418837675, 563.9619238476954, 566.4529058116233, 568.943887775551, 571.4348697394789, 573.9258517034068, 576.4168336673347, 578.9078156312626, 581.3987975951903, 583.8897795591182, 586.3807615230461, 588.871743486974, 591.3627254509018, 593.8537074148296, 596.3446893787575, 598.8356713426854, 601.3266533066133, 603.8176352705411, 606.3086172344689, 608.7995991983968, 611.2905811623247, 613.7815631262525, 616.2725450901804, 618.7635270541082, 621.2545090180361, 623.7454909819639, 626.2364729458918, 628.7274549098196, 631.2184368737475, 633.7094188376753, 636.2004008016032, 638.6913827655311, 641.1823647294589, 643.6733466933867, 646.1643286573146, 648.6553106212425, 651.1462925851704, 653.6372745490982, 656.128256513026, 658.6192384769539, 661.1102204408818, 663.6012024048097, 666.0921843687374, 668.5831663326653, 671.0741482965932, 673.5651302605211, 676.056112224449, 678.5470941883767, 681.0380761523046, 683.5290581162325, 686.0200400801604, 688.5110220440881, 691.002004008016, 693.4929859719439, 695.9839679358718, 698.4749498997996, 700.9659318637274, 703.4569138276553, 705.9478957915832, 708.438877755511, 710.9298597194389, 713.4208416833667, 715.9118236472946, 718.4028056112224, 720.8937875751503, 723.3847695390782, 725.875751503006, 728.3667334669339, 730.8577154308617, 733.3486973947896, 735.8396793587175, 738.3306613226453, 740.8216432865731, 743.312625250501, 745.8036072144289, 748.2945891783567, 750.7855711422845, 753.2765531062124, 755.7675350701403, 758.2585170340682, 760.7494989979959, 763.2404809619238, 765.7314629258517, 768.2224448897796, 770.7134268537075, 773.2044088176352, 775.6953907815631, 778.186372745491, 780.6773547094189, 783.1683366733467, 785.6593186372745, 788.1503006012024, 790.6412825651303, 793.1322645290581, 795.623246492986, 798.1142284569138, 800.6052104208417, 803.0961923847696, 805.5871743486974, 808.0781563126252, 810.5691382765531, 813.060120240481, 815.5511022044088, 818.0420841683367, 820.5330661322645, 823.0240480961924, 825.5150300601202, 828.0060120240481, 830.496993987976, 832.9879759519038, 835.4789579158316, 837.9699398797595, 840.4609218436874, 842.9519038076153, 845.442885771543, 847.9338677354709, 850.4248496993988, 852.9158316633267, 855.4068136272546, 857.8977955911823, 860.3887775551102, 862.8797595190381, 865.370741482966, 867.8617234468937, 870.3527054108216, 872.8436873747495, 875.3346693386774, 877.8256513026053, 880.316633266533, 882.8076152304609, 885.2985971943888, 887.7895791583167, 890.2805611222445, 892.7715430861723, 895.2625250501002, 897.7535070140281, 900.2444889779559, 902.7354709418838, 905.2264529058116, 907.7174348697395, 910.2084168336673, 912.6993987975952, 915.1903807615231, 917.6813627254509, 920.1723446893787, 922.6633266533066, 925.1543086172345, 927.6452905811623, 930.1362725450902, 932.627254509018, 935.1182364729459, 937.6092184368738, 940.1002004008016, 942.5911823647294, 945.0821643286573, 947.5731462925852, 950.0641282565131, 952.5551102204408, 955.0460921843687, 957.5370741482966, 960.0280561122245, 962.5190380761524, 965.0100200400801, 967.501002004008, 969.9919839679359, 972.4829659318638, 974.9739478957916, 977.4649298597194, 979.9559118236473, 982.4468937875752, 984.937875751503, 987.4288577154308, 989.9198396793587, 992.4108216432866, 994.9018036072144, 997.3927855711423, 999.8837675350701, 1002.374749498998, 1004.8657314629259, 1007.3567134268537, 1009.8476953907816, 1012.3386773547094, 1014.8296593186373, 1017.3206412825651, 1019.811623246493, 1022.3026052104209, 1024.7935871743487, 1027.2845691382765, 1029.7755511022044, 1032.2665330661323, 1034.7575150300602, 1037.248496993988, 1039.739478957916, 1042.2304609218436, 1044.7214428857715, 1047.2124248496993, 1049.7034068136272, 1052.194388777555, 1054.685370741483, 1057.1763527054109, 1059.6673346693387, 1062.1583166332666, 1064.6492985971945, 1067.1402805611222, 1069.63126252505, 1072.122244488978, 1074.6132264529058, 1077.1042084168337, 1079.5951903807616, 1082.0861723446894, 1084.5771543086173, 1087.0681362725452, 1089.5591182364728, 1092.0501002004007, 1094.5410821643286, 1097.0320641282565, 1099.5230460921844, 1102.0140280561122, 1104.5050100200401, 1106.995991983968, 1109.4869739478959, 1111.9779559118238, 1114.4689378757514, 1116.9599198396793, 1119.4509018036072, 1121.941883767535, 1124.432865731463, 1126.9238476953908, 1129.4148296593187, 1131.9058116232466, 1134.3967935871744, 1136.887775551102, 1139.37875751503, 1141.8697394789579, 1144.3607214428857, 1146.8517034068136, 1149.3426853707415, 1151.8336673346694, 1154.3246492985973, 1156.8156312625251, 1159.306613226453, 1161.7975951903807, 1164.2885771543085, 1166.7795591182364, 1169.2705410821643, 1171.7615230460922, 1174.25250501002, 1176.743486973948, 1179.2344689378758, 1181.7254509018037, 1184.2164328657316, 1186.7074148296592, 1189.198396793587, 1191.689378757515, 1194.1803607214429, 1196.6713426853707, 1199.1623246492986, 1201.6533066132265, 1204.1442885771544, 1206.6352705410823, 1209.12625250501, 1211.6172344689378, 1214.1082164328657, 1216.5991983967936, 1219.0901803607214, 1221.5811623246493, 1224.0721442885772, 1226.563126252505, 1229.054108216433, 1231.5450901803608, 1234.0360721442885, 1236.5270541082164, 1239.0180360721442, 1241.5090180360721, 1244.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_df7190e8a60a47ee8228f7f407944052.x = d3.scale.linear()
              .domain([1.0, 1244.0])
              .range([0, 400]);

    color_map_df7190e8a60a47ee8228f7f407944052.legend = L.control({position: 'topright'});
    color_map_df7190e8a60a47ee8228f7f407944052.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_df7190e8a60a47ee8228f7f407944052.legend.addTo(map_aff2763162554f8e80423a849fb6491d);

    color_map_df7190e8a60a47ee8228f7f407944052.xAxis = d3.svg.axis()
        .scale(color_map_df7190e8a60a47ee8228f7f407944052.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 208.16666666666666, 415.3333333333333, 622.5, 829.6666666666666, 1036.8333333333333, 1244.0]);

    color_map_df7190e8a60a47ee8228f7f407944052.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_df7190e8a60a47ee8228f7f407944052.g = color_map_df7190e8a60a47ee8228f7f407944052.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_df7190e8a60a47ee8228f7f407944052.g.selectAll("rect")
        .data(color_map_df7190e8a60a47ee8228f7f407944052.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_df7190e8a60a47ee8228f7f407944052.x(color_map_df7190e8a60a47ee8228f7f407944052.color.domain()[i - 1]) : color_map_df7190e8a60a47ee8228f7f407944052.x.range()[0],
            x1: i < color_map_df7190e8a60a47ee8228f7f407944052.color.domain().length ? color_map_df7190e8a60a47ee8228f7f407944052.x(color_map_df7190e8a60a47ee8228f7f407944052.color.domain()[i]) : color_map_df7190e8a60a47ee8228f7f407944052.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_df7190e8a60a47ee8228f7f407944052.g.call(color_map_df7190e8a60a47ee8228f7f407944052.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('26_50_ORLANDO ZACCONE DELIA FILHO');

