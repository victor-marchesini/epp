    
            var map_703a79d2dc9e43a1a465b6a7ebb41451 = L.map(
                "map_703a79d2dc9e43a1a465b6a7ebb41451",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_eb4050383486417f889b21e117f76cf7 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_703a79d2dc9e43a1a465b6a7ebb41451);
        
    
            var choropleth_29636f94e81043ef9f09a5bc681315ce = L.featureGroup(
                {}
            ).addTo(map_703a79d2dc9e43a1a465b6a7ebb41451);
        
    
        function geo_json_eed24a67dbfc45508cddab2739314737_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 447: case 462: case 473: case 472: case 436: case 444: case 419: case 433: case 430: case 477: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 471: 
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

        function geo_json_eed24a67dbfc45508cddab2739314737_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_eed24a67dbfc45508cddab2739314737 = L.geoJson(null, {
                onEachFeature: geo_json_eed24a67dbfc45508cddab2739314737_onEachFeature,
            
                style: geo_json_eed24a67dbfc45508cddab2739314737_styler,
        });

        function geo_json_eed24a67dbfc45508cddab2739314737_add (data) {
            geo_json_eed24a67dbfc45508cddab2739314737
                .addData(data)
                .addTo(choropleth_29636f94e81043ef9f09a5bc681315ce);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_eed24a67dbfc45508cddab2739314737_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_f82b6d911d5543fb924a34b80944b241 = {};

    
    color_map_f82b6d911d5543fb924a34b80944b241.color = d3.scale.threshold()
              .domain([1.0, 3.0761523046092183, 5.152304609218437, 7.228456913827655, 9.304609218436873, 11.380761523046091, 13.45691382765531, 15.53306613226453, 17.609218436873746, 19.685370741482966, 21.761523046092183, 23.837675350701403, 25.91382765531062, 27.98997995991984, 30.06613226452906, 32.142284569138276, 34.21843687374749, 36.294589178356716, 38.37074148296593, 40.44689378757515, 42.523046092184366, 44.59919839679359, 46.675350701402806, 48.75150300601202, 50.82765531062124, 52.90380761523046, 54.97995991983968, 57.056112224448896, 59.13226452905812, 61.208416833667336, 63.28456913827655, 65.36072144288578, 67.43687374749499, 69.51302605210421, 71.58917835671343, 73.66533066132264, 75.74148296593187, 77.81763527054109, 79.8937875751503, 81.96993987975952, 84.04609218436873, 86.12224448897796, 88.19839679358718, 90.27454909819639, 92.35070140280561, 94.42685370741484, 96.50300601202404, 98.57915831663327, 100.65531062124248, 102.7314629258517, 104.80761523046093, 106.88376753507013, 108.95991983967936, 111.03607214428858, 113.11222444889779, 115.18837675350701, 117.26452905811624, 119.34068136272545, 121.41683366733467, 123.49298597194388, 125.5691382765531, 127.64529058116233, 129.72144288577155, 131.79759519038078, 133.87374749498997, 135.9498997995992, 138.02605210420842, 140.10220440881764, 142.17835671342687, 144.25450901803606, 146.33066132264528, 148.4068136272545, 150.48296593186373, 152.55911823647295, 154.63527054108218, 156.71142284569137, 158.7875751503006, 160.86372745490982, 162.93987975951904, 165.01603206412827, 167.09218436873746, 169.1683366733467, 171.2444889779559, 173.32064128256513, 175.39679358717436, 177.47294589178355, 179.54909819639278, 181.625250501002, 183.70140280561122, 185.77755511022045, 187.85370741482967, 189.92985971943887, 192.0060120240481, 194.0821643286573, 196.15831663326654, 198.23446893787576, 200.31062124248496, 202.38677354709418, 204.4629258517034, 206.53907815631263, 208.61523046092185, 210.69138276553107, 212.76753507014027, 214.8436873747495, 216.91983967935872, 218.99599198396794, 221.07214428857716, 223.14829659318636, 225.22444889779558, 227.3006012024048, 229.37675350701403, 231.45290581162325, 233.52905811623248, 235.60521042084167, 237.6813627254509, 239.75751503006012, 241.83366733466934, 243.90981963927857, 245.98597194388776, 248.06212424849699, 250.1382765531062, 252.21442885771543, 254.29058116232466, 256.36673346693385, 258.4428857715431, 260.5190380761523, 262.59519038076155, 264.67134268537075, 266.74749498997994, 268.8236472945892, 270.8997995991984, 272.97595190380764, 275.05210420841684, 277.12825651302603, 279.2044088176353, 281.2805611222445, 283.35671342685373, 285.4328657314629, 287.5090180360721, 289.5851703406814, 291.66132264529057, 293.7374749498998, 295.813627254509, 297.8897795591182, 299.96593186372746, 302.04208416833666, 304.1182364729459, 306.1943887775551, 308.27054108216436, 310.34669338677355, 312.42284569138275, 314.498997995992, 316.5751503006012, 318.65130260521045, 320.72745490981964, 322.80360721442884, 324.8797595190381, 326.9559118236473, 329.03206412825654, 331.10821643286573, 333.1843687374749, 335.2605210420842, 337.3366733466934, 339.4128256513026, 341.4889779559118, 343.565130260521, 345.64128256513027, 347.71743486973946, 349.7935871743487, 351.8697394789579, 353.9458917835671, 356.02204408817636, 358.09819639278555, 360.1743486973948, 362.250501002004, 364.32665330661325, 366.40280561122245, 368.47895791583164, 370.5551102204409, 372.6312625250501, 374.70741482965934, 376.78356713426854, 378.85971943887773, 380.935871743487, 383.0120240480962, 385.08817635270543, 387.1643286573146, 389.2404809619238, 391.3166332665331, 393.39278557114227, 395.4689378757515, 397.5450901803607, 399.6212424849699, 401.69739478957916, 403.77354709418836, 405.8496993987976, 407.9258517034068, 410.00200400801606, 412.07815631262525, 414.15430861723445, 416.2304609218437, 418.3066132264529, 420.38276553106215, 422.45891783567134, 424.53507014028054, 426.6112224448898, 428.687374749499, 430.76352705410824, 432.83967935871743, 434.9158316633266, 436.9919839679359, 439.0681362725451, 441.1442885771543, 443.2204408817635, 445.2965931863727, 447.37274549098197, 449.44889779559117, 451.5250501002004, 453.6012024048096, 455.67735470941886, 457.75350701402806, 459.82965931863725, 461.9058116232465, 463.9819639278557, 466.05811623246495, 468.13426853707415, 470.21042084168334, 472.2865731462926, 474.3627254509018, 476.43887775551104, 478.51503006012024, 480.59118236472943, 482.6673346693387, 484.7434869739479, 486.81963927855713, 488.89579158316633, 490.9719438877755, 493.0480961923848, 495.12424849699397, 497.2004008016032, 499.2765531062124, 501.35270541082167, 503.42885771543087, 505.50501002004006, 507.5811623246493, 509.6573146292585, 511.73346693386776, 513.8096192384769, 515.8857715430862, 517.9619238476954, 520.0380761523046, 522.1142284569138, 524.1903807615231, 526.2665330661323, 528.3426853707415, 530.4188376753507, 532.4949899799599, 534.5711422845692, 536.6472945891784, 538.7234468937876, 540.7995991983968, 542.875751503006, 544.9519038076153, 547.0280561122245, 549.1042084168337, 551.1803607214429, 553.2565130260521, 555.3326653306614, 557.4088176352706, 559.4849699398798, 561.561122244489, 563.6372745490982, 565.7134268537075, 567.7895791583167, 569.8657314629259, 571.941883767535, 574.0180360721442, 576.0941883767536, 578.1703406813627, 580.2464929859719, 582.3226452905811, 584.3987975951903, 586.4749498997996, 588.5511022044088, 590.627254509018, 592.7034068136272, 594.7795591182364, 596.8557114228457, 598.9318637274549, 601.0080160320641, 603.0841683366733, 605.1603206412825, 607.2364729458918, 609.312625250501, 611.3887775551102, 613.4649298597194, 615.5410821643287, 617.6172344689379, 619.6933867735471, 621.7695390781563, 623.8456913827655, 625.9218436873748, 627.997995991984, 630.0741482965932, 632.1503006012024, 634.2264529058116, 636.3026052104209, 638.3787575150301, 640.4549098196393, 642.5310621242485, 644.6072144288577, 646.683366733467, 648.7595190380762, 650.8356713426854, 652.9118236472946, 654.9879759519038, 657.0641282565131, 659.1402805611223, 661.2164328657315, 663.2925851703407, 665.3687374749499, 667.4448897795592, 669.5210420841684, 671.5971943887776, 673.6733466933867, 675.7494989979959, 677.8256513026053, 679.9018036072144, 681.9779559118236, 684.0541082164328, 686.130260521042, 688.2064128256513, 690.2825651302605, 692.3587174348697, 694.4348697394789, 696.5110220440881, 698.5871743486974, 700.6633266533066, 702.7394789579158, 704.815631262525, 706.8917835671342, 708.9679358717435, 711.0440881763527, 713.1202404809619, 715.1963927855711, 717.2725450901804, 719.3486973947896, 721.4248496993988, 723.501002004008, 725.5771543086172, 727.6533066132265, 729.7294589178357, 731.8056112224449, 733.8817635270541, 735.9579158316633, 738.0340681362726, 740.1102204408818, 742.186372745491, 744.2625250501002, 746.3386773547094, 748.4148296593187, 750.4909819639279, 752.5671342685371, 754.6432865731463, 756.7194388777555, 758.7955911823648, 760.871743486974, 762.9478957915832, 765.0240480961924, 767.1002004008016, 769.1763527054109, 771.2525050100201, 773.3286573146293, 775.4048096192384, 777.4809619238476, 779.557114228457, 781.6332665330661, 783.7094188376753, 785.7855711422845, 787.8617234468937, 789.937875751503, 792.0140280561122, 794.0901803607214, 796.1663326653306, 798.2424849699398, 800.3186372745491, 802.3947895791583, 804.4709418837675, 806.5470941883767, 808.623246492986, 810.6993987975952, 812.7755511022044, 814.8517034068136, 816.9278557114228, 819.0040080160321, 821.0801603206413, 823.1563126252505, 825.2324649298597, 827.3086172344689, 829.3847695390782, 831.4609218436874, 833.5370741482966, 835.6132264529058, 837.689378757515, 839.7655310621243, 841.8416833667335, 843.9178356713427, 845.9939879759519, 848.0701402805611, 850.1462925851704, 852.2224448897796, 854.2985971943888, 856.374749498998, 858.4509018036072, 860.5270541082165, 862.6032064128257, 864.6793587174349, 866.7555110220441, 868.8316633266533, 870.9078156312626, 872.9839679358718, 875.060120240481, 877.1362725450902, 879.2124248496993, 881.2885771543087, 883.3647294589179, 885.440881763527, 887.5170340681362, 889.5931863727454, 891.6693386773547, 893.7454909819639, 895.8216432865731, 897.8977955911823, 899.9739478957916, 902.0501002004008, 904.12625250501, 906.2024048096192, 908.2785571142284, 910.3547094188377, 912.4308617234469, 914.5070140280561, 916.5831663326653, 918.6593186372745, 920.7354709418838, 922.811623246493, 924.8877755511022, 926.9639278557114, 929.0400801603206, 931.1162324649299, 933.1923847695391, 935.2685370741483, 937.3446893787575, 939.4208416833667, 941.496993987976, 943.5731462925852, 945.6492985971944, 947.7254509018036, 949.8016032064128, 951.8777555110221, 953.9539078156313, 956.0300601202405, 958.1062124248497, 960.1823647294589, 962.2585170340682, 964.3346693386774, 966.4108216432866, 968.4869739478958, 970.563126252505, 972.6392785571143, 974.7154308617235, 976.7915831663327, 978.8677354709419, 980.943887775551, 983.0200400801604, 985.0961923847696, 987.1723446893787, 989.2484969939879, 991.3246492985973, 993.4008016032064, 995.4769539078156, 997.5531062124248, 999.629258517034, 1001.7054108216433, 1003.7815631262525, 1005.8577154308617, 1007.9338677354709, 1010.0100200400801, 1012.0861723446894, 1014.1623246492986, 1016.2384769539078, 1018.314629258517, 1020.3907815631262, 1022.4669338677355, 1024.5430861723448, 1026.6192384769538, 1028.6953907815632, 1030.7715430861724, 1032.8476953907816, 1034.9238476953908, 1037.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_f82b6d911d5543fb924a34b80944b241.x = d3.scale.linear()
              .domain([1.0, 1037.0])
              .range([0, 400]);

    color_map_f82b6d911d5543fb924a34b80944b241.legend = L.control({position: 'topright'});
    color_map_f82b6d911d5543fb924a34b80944b241.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_f82b6d911d5543fb924a34b80944b241.legend.addTo(map_703a79d2dc9e43a1a465b6a7ebb41451);

    color_map_f82b6d911d5543fb924a34b80944b241.xAxis = d3.svg.axis()
        .scale(color_map_f82b6d911d5543fb924a34b80944b241.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 173.66666666666666, 346.3333333333333, 519.0, 691.6666666666666, 864.3333333333333, 1037.0]);

    color_map_f82b6d911d5543fb924a34b80944b241.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_f82b6d911d5543fb924a34b80944b241.g = color_map_f82b6d911d5543fb924a34b80944b241.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_f82b6d911d5543fb924a34b80944b241.g.selectAll("rect")
        .data(color_map_f82b6d911d5543fb924a34b80944b241.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_f82b6d911d5543fb924a34b80944b241.x(color_map_f82b6d911d5543fb924a34b80944b241.color.domain()[i - 1]) : color_map_f82b6d911d5543fb924a34b80944b241.x.range()[0],
            x1: i < color_map_f82b6d911d5543fb924a34b80944b241.color.domain().length ? color_map_f82b6d911d5543fb924a34b80944b241.x(color_map_f82b6d911d5543fb924a34b80944b241.color.domain()[i]) : color_map_f82b6d911d5543fb924a34b80944b241.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_f82b6d911d5543fb924a34b80944b241.g.call(color_map_f82b6d911d5543fb924a34b80944b241.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('20_50_LUCIANA BOITEUX DE FIGUEIREDO RODRIGUES');

