    
            var map_3694af5a2b56402a8c97095ff71a13eb = L.map(
                "map_3694af5a2b56402a8c97095ff71a13eb",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_70e0ed2874ad4c66974fddfa37cf8a91 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_3694af5a2b56402a8c97095ff71a13eb);
        
    
            var choropleth_8145ae89da234ea4a4db7c320ed01dc4 = L.featureGroup(
                {}
            ).addTo(map_3694af5a2b56402a8c97095ff71a13eb);
        
    
        function geo_json_c53f402789324f9ebd7f4d89eb48fff3_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 412: case 448: case 447: case 472: case 437: case 446: case 444: case 369: case 363: case 352: case 408: case 364: case 346: case 339: case 433: case 409: case 477: case 511: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 436: case 419: case 430: case 471: case 370: case 510: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_c53f402789324f9ebd7f4d89eb48fff3_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_c53f402789324f9ebd7f4d89eb48fff3 = L.geoJson(null, {
                onEachFeature: geo_json_c53f402789324f9ebd7f4d89eb48fff3_onEachFeature,
            
                style: geo_json_c53f402789324f9ebd7f4d89eb48fff3_styler,
        });

        function geo_json_c53f402789324f9ebd7f4d89eb48fff3_add (data) {
            geo_json_c53f402789324f9ebd7f4d89eb48fff3
                .addData(data)
                .addTo(choropleth_8145ae89da234ea4a4db7c320ed01dc4);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_c53f402789324f9ebd7f4d89eb48fff3_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_0982229df58b457cbf207944c5d3ead8 = {};

    
    color_map_0982229df58b457cbf207944c5d3ead8.color = d3.scale.threshold()
              .domain([1.0, 3.2985971943887775, 5.597194388777555, 7.895791583166333, 10.19438877755511, 12.492985971943888, 14.791583166332666, 17.090180360721444, 19.38877755511022, 21.687374749498996, 23.985971943887776, 26.284569138276552, 28.583166332665332, 30.881763527054108, 33.18036072144289, 35.478957915831664, 37.77755511022044, 40.07615230460922, 42.37474949899799, 44.673346693386776, 46.97194388777555, 49.27054108216433, 51.569138276553105, 53.86773547094188, 56.166332665330664, 58.46492985971944, 60.763527054108216, 63.06212424849699, 65.36072144288578, 67.65931863727455, 69.95791583166333, 72.2565130260521, 74.55511022044088, 76.85370741482966, 79.15230460921843, 81.45090180360721, 83.74949899799599, 86.04809619238478, 88.34669338677355, 90.64529058116233, 92.9438877755511, 95.24248496993988, 97.54108216432866, 99.83967935871743, 102.13827655310621, 104.43687374749499, 106.73547094188376, 109.03406813627255, 111.33266533066133, 113.6312625250501, 115.92985971943888, 118.22845691382766, 120.52705410821643, 122.82565130260521, 125.12424849699399, 127.42284569138276, 129.72144288577155, 132.02004008016033, 134.3186372745491, 136.61723446893788, 138.91583166332666, 141.21442885771543, 143.5130260521042, 145.81162324649299, 148.11022044088176, 150.40881763527054, 152.7074148296593, 155.0060120240481, 157.30460921843687, 159.60320641282564, 161.90180360721442, 164.2004008016032, 166.49899799599197, 168.79759519038078, 171.09619238476955, 173.39478957915833, 175.6933867735471, 177.99198396793588, 180.29058116232466, 182.58917835671343, 184.8877755511022, 187.18637274549098, 189.48496993987976, 191.78356713426854, 194.0821643286573, 196.3807615230461, 198.67935871743487, 200.97795591182364, 203.27655310621242, 205.5751503006012, 207.87374749498997, 210.17234468937875, 212.47094188376752, 214.7695390781563, 217.0681362725451, 219.36673346693388, 221.66533066132266, 223.96392785571143, 226.2625250501002, 228.56112224448898, 230.85971943887776, 233.15831663326654, 235.4569138276553, 237.7555110220441, 240.05410821643287, 242.35270541082164, 244.65130260521042, 246.9498997995992, 249.24849699398797, 251.54709418837675, 253.84569138276552, 256.14428857715427, 258.4428857715431, 260.7414829659319, 263.04008016032066, 265.33867735470943, 267.6372745490982, 269.935871743487, 272.23446893787576, 274.53306613226454, 276.8316633266533, 279.1302605210421, 281.42885771543087, 283.72745490981964, 286.0260521042084, 288.3246492985972, 290.62324649298597, 292.92184368737475, 295.2204408817635, 297.5190380761523, 299.8176352705411, 302.11623246492985, 304.4148296593186, 306.7134268537074, 309.0120240480962, 311.31062124248496, 313.60921843687373, 315.9078156312625, 318.2064128256513, 320.50501002004006, 322.80360721442884, 325.1022044088176, 327.4008016032064, 329.69939879759517, 331.99799599198394, 334.2965931863727, 336.59519038076155, 338.8937875751503, 341.1923847695391, 343.4909819639279, 345.78957915831666, 348.08817635270543, 350.3867735470942, 352.685370741483, 354.98396793587176, 357.28256513026054, 359.5811623246493, 361.8797595190381, 364.17835671342687, 366.47695390781564, 368.7755511022044, 371.0741482965932, 373.37274549098197, 375.67134268537075, 377.9699398797595, 380.2685370741483, 382.5671342685371, 384.86573146292585, 387.1643286573146, 389.4629258517034, 391.7615230460922, 394.06012024048096, 396.35871743486973, 398.6573146292585, 400.9559118236473, 403.25450901803606, 405.55310621242484, 407.8517034068136, 410.1503006012024, 412.44889779559117, 414.74749498997994, 417.0460921843687, 419.3446893787575, 421.64328657314627, 423.94188376753505, 426.2404809619238, 428.5390781563126, 430.8376753507014, 433.1362725450902, 435.434869739479, 437.73346693386776, 440.03206412825654, 442.3306613226453, 444.6292585170341, 446.92785571142286, 449.22645290581164, 451.5250501002004, 453.8236472945892, 456.12224448897797, 458.42084168336675, 460.7194388777555, 463.0180360721443, 465.3166332665331, 467.61523046092185, 469.9138276553106, 472.2124248496994, 474.5110220440882, 476.80961923847696, 479.10821643286573, 481.4068136272545, 483.7054108216433, 486.00400801603206, 488.30260521042084, 490.6012024048096, 492.8997995991984, 495.19839679358716, 497.49699398797594, 499.7955911823647, 502.0941883767535, 504.39278557114227, 506.69138276553105, 508.9899799599198, 511.2885771543086, 513.5871743486974, 515.8857715430862, 518.184368737475, 520.4829659318638, 522.7815631262525, 525.0801603206413, 527.3787575150301, 529.6773547094189, 531.9759519038076, 534.2745490981964, 536.5731462925852, 538.871743486974, 541.1703406813627, 543.4689378757515, 545.7675350701403, 548.0661322645291, 550.3647294589179, 552.6633266533066, 554.9619238476954, 557.2605210420842, 559.559118236473, 561.8577154308617, 564.1563126252505, 566.4549098196393, 568.7535070140281, 571.0521042084168, 573.3507014028056, 575.6492985971944, 577.9478957915832, 580.2464929859719, 582.5450901803607, 584.8436873747495, 587.1422845691383, 589.440881763527, 591.7394789579158, 594.0380761523046, 596.3366733466934, 598.6352705410821, 600.9338677354709, 603.2324649298597, 605.5310621242485, 607.8296593186373, 610.128256513026, 612.4268537074148, 614.7254509018036, 617.0240480961924, 619.3226452905811, 621.6212424849699, 623.9198396793587, 626.2184368737475, 628.5170340681362, 630.815631262525, 633.1142284569138, 635.4128256513026, 637.7114228456913, 640.0100200400801, 642.3086172344689, 644.6072144288577, 646.9058116232464, 649.2044088176352, 651.503006012024, 653.8016032064128, 656.1002004008016, 658.3987975951903, 660.6973947895791, 662.9959919839679, 665.2945891783567, 667.5931863727454, 669.8917835671342, 672.1903807615231, 674.4889779559119, 676.7875751503007, 679.0861723446894, 681.3847695390782, 683.683366733467, 685.9819639278558, 688.2805611222445, 690.5791583166333, 692.8777555110221, 695.1763527054109, 697.4749498997996, 699.7735470941884, 702.0721442885772, 704.370741482966, 706.6693386773547, 708.9679358717435, 711.2665330661323, 713.5651302605211, 715.8637274549098, 718.1623246492986, 720.4609218436874, 722.7595190380762, 725.058116232465, 727.3567134268537, 729.6553106212425, 731.9539078156313, 734.2525050100201, 736.5511022044088, 738.8496993987976, 741.1482965931864, 743.4468937875752, 745.7454909819639, 748.0440881763527, 750.3426853707415, 752.6412825651303, 754.939879759519, 757.2384769539078, 759.5370741482966, 761.8356713426854, 764.1342685370741, 766.4328657314629, 768.7314629258517, 771.0300601202405, 773.3286573146293, 775.627254509018, 777.9258517034068, 780.2244488977956, 782.5230460921844, 784.8216432865731, 787.1202404809619, 789.4188376753507, 791.7174348697395, 794.0160320641282, 796.314629258517, 798.6132264529058, 800.9118236472946, 803.2104208416833, 805.5090180360721, 807.8076152304609, 810.1062124248497, 812.4048096192384, 814.7034068136272, 817.002004008016, 819.3006012024048, 821.5991983967936, 823.8977955911823, 826.1963927855711, 828.4949899799599, 830.7935871743487, 833.0921843687374, 835.3907815631262, 837.689378757515, 839.9879759519038, 842.2865731462925, 844.5851703406813, 846.8837675350701, 849.1823647294589, 851.4809619238476, 853.7795591182364, 856.0781563126252, 858.376753507014, 860.6753507014027, 862.9739478957916, 865.2725450901804, 867.5711422845692, 869.869739478958, 872.1683366733467, 874.4669338677355, 876.7655310621243, 879.0641282565131, 881.3627254509018, 883.6613226452906, 885.9599198396794, 888.2585170340682, 890.557114228457, 892.8557114228457, 895.1543086172345, 897.4529058116233, 899.7515030060121, 902.0501002004008, 904.3486973947896, 906.6472945891784, 908.9458917835672, 911.2444889779559, 913.5430861723447, 915.8416833667335, 918.1402805611223, 920.438877755511, 922.7374749498998, 925.0360721442886, 927.3346693386774, 929.6332665330661, 931.9318637274549, 934.2304609218437, 936.5290581162325, 938.8276553106213, 941.12625250501, 943.4248496993988, 945.7234468937876, 948.0220440881764, 950.3206412825651, 952.6192384769539, 954.9178356713427, 957.2164328657315, 959.5150300601202, 961.813627254509, 964.1122244488978, 966.4108216432866, 968.7094188376753, 971.0080160320641, 973.3066132264529, 975.6052104208417, 977.9038076152304, 980.2024048096192, 982.501002004008, 984.7995991983968, 987.0981963927856, 989.3967935871743, 991.6953907815631, 993.9939879759519, 996.2925851703407, 998.5911823647294, 1000.8897795591182, 1003.188376753507, 1005.4869739478958, 1007.7855711422845, 1010.0841683366733, 1012.3827655310621, 1014.6813627254509, 1016.9799599198396, 1019.2785571142284, 1021.5771543086172, 1023.875751503006, 1026.1743486973949, 1028.4729458917836, 1030.7715430861724, 1033.0701402805612, 1035.36873747495, 1037.6673346693387, 1039.9659318637275, 1042.2645290581163, 1044.563126252505, 1046.8617234468938, 1049.1603206412826, 1051.4589178356714, 1053.7575150300602, 1056.056112224449, 1058.3547094188377, 1060.6533066132265, 1062.9519038076153, 1065.250501002004, 1067.5490981963928, 1069.8476953907816, 1072.1462925851704, 1074.4448897795592, 1076.743486973948, 1079.0420841683367, 1081.3406813627255, 1083.6392785571143, 1085.937875751503, 1088.2364729458918, 1090.5350701402806, 1092.8336673346694, 1095.1322645290581, 1097.430861723447, 1099.7294589178357, 1102.0280561122245, 1104.3266533066133, 1106.625250501002, 1108.9238476953908, 1111.2224448897796, 1113.5210420841684, 1115.8196392785571, 1118.118236472946, 1120.4168336673347, 1122.7154308617235, 1125.0140280561122, 1127.312625250501, 1129.6112224448898, 1131.9098196392786, 1134.2084168336673, 1136.5070140280561, 1138.805611222445, 1141.1042084168337, 1143.4028056112224, 1145.7014028056112, 1148.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_0982229df58b457cbf207944c5d3ead8.x = d3.scale.linear()
              .domain([1.0, 1148.0])
              .range([0, 400]);

    color_map_0982229df58b457cbf207944c5d3ead8.legend = L.control({position: 'topright'});
    color_map_0982229df58b457cbf207944c5d3ead8.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_0982229df58b457cbf207944c5d3ead8.legend.addTo(map_3694af5a2b56402a8c97095ff71a13eb);

    color_map_0982229df58b457cbf207944c5d3ead8.xAxis = d3.svg.axis()
        .scale(color_map_0982229df58b457cbf207944c5d3ead8.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 192.16666666666666, 383.3333333333333, 574.5, 765.6666666666666, 956.8333333333333, 1148.0]);

    color_map_0982229df58b457cbf207944c5d3ead8.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_0982229df58b457cbf207944c5d3ead8.g = color_map_0982229df58b457cbf207944c5d3ead8.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_0982229df58b457cbf207944c5d3ead8.g.selectAll("rect")
        .data(color_map_0982229df58b457cbf207944c5d3ead8.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_0982229df58b457cbf207944c5d3ead8.x(color_map_0982229df58b457cbf207944c5d3ead8.color.domain()[i - 1]) : color_map_0982229df58b457cbf207944c5d3ead8.x.range()[0],
            x1: i < color_map_0982229df58b457cbf207944c5d3ead8.color.domain().length ? color_map_0982229df58b457cbf207944c5d3ead8.x(color_map_0982229df58b457cbf207944c5d3ead8.color.domain()[i]) : color_map_0982229df58b457cbf207944c5d3ead8.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_0982229df58b457cbf207944c5d3ead8.g.call(color_map_0982229df58b457cbf207944c5d3ead8.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('15_50_DANIELLA MONTEIRO DA SILVA');

