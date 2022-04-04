    
            var map_344b680157e249c8a4cbfaf1d17ba4be = L.map(
                "map_344b680157e249c8a4cbfaf1d17ba4be",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_fd9805805760438e82c04e0f51eb2f38 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_344b680157e249c8a4cbfaf1d17ba4be);
        
    
            var choropleth_f02400e5fea84224af8d9a4b4da09eb9 = L.featureGroup(
                {}
            ).addTo(map_344b680157e249c8a4cbfaf1d17ba4be);
        
    
        function geo_json_702265fa7a694fdc8fb830d4dc8a8f57_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 448: case 449: case 447: case 472: case 446: case 444: case 381: case 369: case 363: case 427: case 419: case 346: case 339: case 433: case 370: case 387: case 511: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 510: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: case 436: case 430: case 471: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_702265fa7a694fdc8fb830d4dc8a8f57_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_702265fa7a694fdc8fb830d4dc8a8f57 = L.geoJson(null, {
                onEachFeature: geo_json_702265fa7a694fdc8fb830d4dc8a8f57_onEachFeature,
            
                style: geo_json_702265fa7a694fdc8fb830d4dc8a8f57_styler,
        });

        function geo_json_702265fa7a694fdc8fb830d4dc8a8f57_add (data) {
            geo_json_702265fa7a694fdc8fb830d4dc8a8f57
                .addData(data)
                .addTo(choropleth_f02400e5fea84224af8d9a4b4da09eb9);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_702265fa7a694fdc8fb830d4dc8a8f57_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_2cc76bda61dc4b4795ebc867c3705d50 = {};

    
    color_map_2cc76bda61dc4b4795ebc867c3705d50.color = d3.scale.threshold()
              .domain([0.0, 2.070140280561122, 4.140280561122244, 6.210420841683367, 8.280561122244489, 10.350701402805612, 12.420841683366733, 14.490981963927856, 16.561122244488978, 18.6312625250501, 20.701402805611224, 22.771543086172343, 24.841683366733466, 26.91182364729459, 28.981963927855713, 31.052104208416832, 33.122244488977955, 35.192384769539075, 37.2625250501002, 39.33266533066132, 41.40280561122245, 43.47294589178357, 45.54308617234469, 47.61322645290581, 49.68336673346693, 51.75350701402806, 53.82364729458918, 55.8937875751503, 57.963927855711425, 60.034068136272545, 62.104208416833664, 64.17434869739479, 66.24448897795591, 68.31462925851703, 70.38476953907815, 72.45490981963928, 74.5250501002004, 76.59519038076152, 78.66533066132264, 80.73547094188376, 82.8056112224449, 84.87575150300601, 86.94589178356713, 89.01603206412825, 91.08617234468937, 93.15631262525051, 95.22645290581163, 97.29659318637275, 99.36673346693387, 101.43687374749499, 103.50701402805612, 105.57715430861724, 107.64729458917836, 109.71743486973948, 111.7875751503006, 113.85771543086172, 115.92785571142285, 117.99799599198397, 120.06813627254509, 122.13827655310621, 124.20841683366733, 126.27855711422846, 128.34869739478958, 130.4188376753507, 132.48897795591182, 134.55911823647295, 136.62925851703406, 138.6993987975952, 140.7695390781563, 142.83967935871743, 144.90981963927857, 146.97995991983967, 149.0501002004008, 151.1202404809619, 153.19038076152304, 155.26052104208418, 157.33066132264528, 159.40080160320642, 161.47094188376752, 163.54108216432866, 165.6112224448898, 167.6813627254509, 169.75150300601203, 171.82164328657313, 173.89178356713427, 175.9619238476954, 178.0320641282565, 180.10220440881764, 182.17234468937875, 184.24248496993988, 186.31262525050101, 188.38276553106212, 190.45290581162325, 192.52304609218436, 194.5931863727455, 196.66332665330663, 198.73346693386773, 200.80360721442887, 202.87374749498997, 204.9438877755511, 207.01402805611224, 209.08416833667334, 211.15430861723448, 213.22444889779558, 215.29458917835672, 217.36472945891782, 219.43486973947896, 221.5050100200401, 223.5751503006012, 225.64529058116233, 227.71543086172343, 229.78557114228457, 231.8557114228457, 233.9258517034068, 235.99599198396794, 238.06613226452905, 240.13627254509018, 242.2064128256513, 244.27655310621242, 246.34669338677355, 248.41683366733466, 250.4869739478958, 252.55711422845692, 254.62725450901803, 256.69739478957916, 258.7675350701403, 260.8376753507014, 262.9078156312625, 264.97795591182364, 267.0480961923848, 269.1182364729459, 271.188376753507, 273.2585170340681, 275.32865731462925, 277.3987975951904, 279.4689378757515, 281.5390781563126, 283.60921843687373, 285.67935871743487, 287.749498997996, 289.81963927855713, 291.8897795591182, 293.95991983967934, 296.0300601202405, 298.1002004008016, 300.17034068136275, 302.2404809619238, 304.31062124248496, 306.3807615230461, 308.4509018036072, 310.52104208416836, 312.59118236472943, 314.66132264529057, 316.7314629258517, 318.80160320641284, 320.87174348697397, 322.94188376753505, 325.0120240480962, 327.0821643286573, 329.15230460921845, 331.2224448897796, 333.29258517034066, 335.3627254509018, 337.4328657314629, 339.50300601202406, 341.5731462925852, 343.64328657314627, 345.7134268537074, 347.78356713426854, 349.85370741482967, 351.9238476953908, 353.9939879759519, 356.064128256513, 358.13426853707415, 360.2044088176353, 362.2745490981964, 364.3446893787575, 366.4148296593186, 368.48496993987976, 370.5551102204409, 372.62525050100203, 374.6953907815631, 376.76553106212424, 378.8356713426854, 380.9058116232465, 382.97595190380764, 385.0460921843687, 387.11623246492985, 389.186372745491, 391.2565130260521, 393.32665330661325, 395.39679358717433, 397.46693386773546, 399.5370741482966, 401.60721442885773, 403.67735470941886, 405.74749498997994, 407.8176352705411, 409.8877755511022, 411.95791583166334, 414.0280561122245, 416.09819639278555, 418.1683366733467, 420.2384769539078, 422.30861723446895, 424.3787575150301, 426.44889779559117, 428.5190380761523, 430.58917835671343, 432.65931863727457, 434.72945891783564, 436.7995991983968, 438.8697394789579, 440.93987975951904, 443.0100200400802, 445.08016032064126, 447.1503006012024, 449.2204408817635, 451.29058116232466, 453.3607214428858, 455.43086172344687, 457.501002004008, 459.57114228456913, 461.64128256513027, 463.7114228456914, 465.7815631262525, 467.8517034068136, 469.92184368737475, 471.9919839679359, 474.062124248497, 476.1322645290581, 478.2024048096192, 480.27254509018036, 482.3426853707415, 484.4128256513026, 486.4829659318637, 488.55310621242484, 490.62324649298597, 492.6933867735471, 494.76352705410824, 496.8336673346693, 498.90380761523045, 500.9739478957916, 503.0440881763527, 505.11422845691385, 507.1843687374749, 509.25450901803606, 511.3246492985972, 513.3947895791583, 515.4649298597194, 517.5350701402806, 519.6052104208417, 521.6753507014027, 523.7454909819639, 525.815631262525, 527.8857715430862, 529.9559118236473, 532.0260521042084, 534.0961923847696, 536.1663326653306, 538.2364729458918, 540.3066132264529, 542.376753507014, 544.4468937875752, 546.5170340681362, 548.5871743486974, 550.6573146292585, 552.7274549098196, 554.7975951903808, 556.8677354709419, 558.937875751503, 561.0080160320641, 563.0781563126252, 565.1482965931864, 567.2184368737475, 569.2885771543087, 571.3587174348697, 573.4288577154308, 575.498997995992, 577.5691382765531, 579.6392785571143, 581.7094188376753, 583.7795591182364, 585.8496993987976, 587.9198396793587, 589.9899799599199, 592.060120240481, 594.130260521042, 596.2004008016032, 598.2705410821643, 600.3406813627255, 602.4108216432866, 604.4809619238476, 606.5511022044088, 608.6212424849699, 610.6913827655311, 612.7615230460922, 614.8316633266533, 616.9018036072144, 618.9719438877755, 621.0420841683367, 623.1122244488978, 625.1823647294589, 627.2525050100201, 629.3226452905811, 631.3927855711423, 633.4629258517034, 635.5330661322645, 637.6032064128257, 639.6733466933867, 641.7434869739479, 643.813627254509, 645.8837675350701, 647.9539078156313, 650.0240480961924, 652.0941883767536, 654.1643286573146, 656.2344689378757, 658.3046092184369, 660.374749498998, 662.4448897795592, 664.5150300601202, 666.5851703406813, 668.6553106212425, 670.7254509018036, 672.7955911823648, 674.8657314629259, 676.9358717434869, 679.0060120240481, 681.0761523046092, 683.1462925851704, 685.2164328657315, 687.2865731462925, 689.3567134268537, 691.4268537074148, 693.496993987976, 695.5671342685371, 697.6372745490982, 699.7074148296593, 701.7775551102204, 703.8476953907816, 705.9178356713427, 707.9879759519038, 710.058116232465, 712.128256513026, 714.1983967935872, 716.2685370741483, 718.3386773547094, 720.4088176352706, 722.4789579158316, 724.5490981963928, 726.6192384769539, 728.689378757515, 730.7595190380762, 732.8296593186373, 734.8997995991984, 736.9699398797595, 739.0400801603206, 741.1102204408818, 743.1803607214429, 745.2505010020041, 747.3206412825651, 749.3907815631262, 751.4609218436874, 753.5310621242485, 755.6012024048097, 757.6713426853707, 759.7414829659318, 761.811623246493, 763.8817635270541, 765.9519038076153, 768.0220440881764, 770.0921843687374, 772.1623246492986, 774.2324649298597, 776.3026052104209, 778.372745490982, 780.442885771543, 782.5130260521042, 784.5831663326653, 786.6533066132265, 788.7234468937876, 790.7935871743487, 792.8637274549098, 794.9338677354709, 797.0040080160321, 799.0741482965932, 801.1442885771543, 803.2144288577155, 805.2845691382765, 807.3547094188377, 809.4248496993988, 811.4949899799599, 813.5651302605211, 815.6352705410821, 817.7054108216433, 819.7755511022044, 821.8456913827655, 823.9158316633267, 825.9859719438878, 828.056112224449, 830.12625250501, 832.1963927855711, 834.2665330661323, 836.3366733466934, 838.4068136272546, 840.4769539078156, 842.5470941883767, 844.6172344689379, 846.687374749499, 848.7575150300602, 850.8276553106213, 852.8977955911823, 854.9679358717435, 857.0380761523046, 859.1082164328658, 861.1783567134269, 863.2484969939879, 865.3186372745491, 867.3887775551102, 869.4589178356713, 871.5290581162325, 873.5991983967936, 875.6693386773547, 877.7394789579158, 879.8096192384769, 881.8797595190381, 883.9498997995992, 886.0200400801604, 888.0901803607214, 890.1603206412825, 892.2304609218437, 894.3006012024048, 896.370741482966, 898.440881763527, 900.5110220440881, 902.5811623246493, 904.6513026052104, 906.7214428857716, 908.7915831663327, 910.8617234468937, 912.9318637274549, 915.002004008016, 917.0721442885772, 919.1422845691383, 921.2124248496993, 923.2825651302605, 925.3527054108216, 927.4228456913828, 929.4929859719439, 931.563126252505, 933.6332665330661, 935.7034068136272, 937.7735470941884, 939.8436873747495, 941.9138276553106, 943.9839679358718, 946.0541082164328, 948.124248496994, 950.1943887775551, 952.2645290581162, 954.3346693386774, 956.4048096192384, 958.4749498997996, 960.5450901803607, 962.6152304609218, 964.685370741483, 966.7555110220441, 968.8256513026053, 970.8957915831663, 972.9659318637274, 975.0360721442886, 977.1062124248497, 979.1763527054109, 981.2464929859719, 983.316633266533, 985.3867735470942, 987.4569138276553, 989.5270541082165, 991.5971943887776, 993.6673346693386, 995.7374749498998, 997.8076152304609, 999.8777555110221, 1001.9478957915832, 1004.0180360721442, 1006.0881763527054, 1008.1583166332665, 1010.2284569138277, 1012.2985971943888, 1014.3687374749499, 1016.438877755511, 1018.5090180360721, 1020.5791583166333, 1022.6492985971944, 1024.7194388777555, 1026.7895791583167, 1028.8597194388778, 1030.9298597194388, 1033.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_2cc76bda61dc4b4795ebc867c3705d50.x = d3.scale.linear()
              .domain([0.0, 1033.0])
              .range([0, 400]);

    color_map_2cc76bda61dc4b4795ebc867c3705d50.legend = L.control({position: 'topright'});
    color_map_2cc76bda61dc4b4795ebc867c3705d50.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_2cc76bda61dc4b4795ebc867c3705d50.legend.addTo(map_344b680157e249c8a4cbfaf1d17ba4be);

    color_map_2cc76bda61dc4b4795ebc867c3705d50.xAxis = d3.svg.axis()
        .scale(color_map_2cc76bda61dc4b4795ebc867c3705d50.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 172.16666666666666, 344.3333333333333, 516.5, 688.6666666666666, 860.8333333333333, 1033.0]);

    color_map_2cc76bda61dc4b4795ebc867c3705d50.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_2cc76bda61dc4b4795ebc867c3705d50.g = color_map_2cc76bda61dc4b4795ebc867c3705d50.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_2cc76bda61dc4b4795ebc867c3705d50.g.selectAll("rect")
        .data(color_map_2cc76bda61dc4b4795ebc867c3705d50.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_2cc76bda61dc4b4795ebc867c3705d50.x(color_map_2cc76bda61dc4b4795ebc867c3705d50.color.domain()[i - 1]) : color_map_2cc76bda61dc4b4795ebc867c3705d50.x.range()[0],
            x1: i < color_map_2cc76bda61dc4b4795ebc867c3705d50.color.domain().length ? color_map_2cc76bda61dc4b4795ebc867c3705d50.x(color_map_2cc76bda61dc4b4795ebc867c3705d50.color.domain()[i]) : color_map_2cc76bda61dc4b4795ebc867c3705d50.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_2cc76bda61dc4b4795ebc867c3705d50.g.call(color_map_2cc76bda61dc4b4795ebc867c3705d50.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('08_50_Partido Socialismo e Liberdade');
