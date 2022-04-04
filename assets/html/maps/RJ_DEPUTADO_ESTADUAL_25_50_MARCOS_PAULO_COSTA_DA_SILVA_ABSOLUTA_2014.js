    
            var map_95734016b8d34146b3d7d6722e2f5055 = L.map(
                "map_95734016b8d34146b3d7d6722e2f5055",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_ef32a9eca9b1408482e41d133738ce05 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_95734016b8d34146b3d7d6722e2f5055);
        
    
            var choropleth_151a2bdf00ec496fb8831e3315a8077e = L.featureGroup(
                {}
            ).addTo(map_95734016b8d34146b3d7d6722e2f5055);
        
    
        function geo_json_74a1a11b11d34cc2b0834fa12ee03373_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_74a1a11b11d34cc2b0834fa12ee03373_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_74a1a11b11d34cc2b0834fa12ee03373 = L.geoJson(null, {
                onEachFeature: geo_json_74a1a11b11d34cc2b0834fa12ee03373_onEachFeature,
            
                style: geo_json_74a1a11b11d34cc2b0834fa12ee03373_styler,
        });

        function geo_json_74a1a11b11d34cc2b0834fa12ee03373_add (data) {
            geo_json_74a1a11b11d34cc2b0834fa12ee03373
                .addData(data)
                .addTo(choropleth_151a2bdf00ec496fb8831e3315a8077e);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_74a1a11b11d34cc2b0834fa12ee03373_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_a57d02cb554344129a6e89543d275b29 = {};

    
    color_map_a57d02cb554344129a6e89543d275b29.color = d3.scale.threshold()
              .domain([0.0, 1.8917835671342684, 3.783567134268537, 5.675350701402806, 7.567134268537074, 9.458917835671343, 11.350701402805612, 13.24248496993988, 15.134268537074147, 17.026052104208418, 18.917835671342687, 20.809619238476955, 22.701402805611224, 24.593186372745492, 26.48496993987976, 28.37675350701403, 30.268537074148295, 32.16032064128257, 34.052104208416836, 35.943887775551104, 37.83567134268537, 39.72745490981964, 41.61923847695391, 43.51102204408818, 45.40280561122245, 47.294589178356716, 49.186372745490985, 51.078156312625254, 52.96993987975952, 54.86172344689379, 56.75350701402806, 58.64529058116233, 60.53707414829659, 62.42885771543086, 64.32064128256513, 66.2124248496994, 68.10420841683367, 69.99599198396794, 71.88777555110221, 73.77955911823648, 75.67134268537075, 77.56312625250501, 79.45490981963928, 81.34669338677355, 83.23847695390782, 85.13026052104209, 87.02204408817636, 88.91382765531063, 90.8056112224449, 92.69739478957916, 94.58917835671343, 96.4809619238477, 98.37274549098197, 100.26452905811624, 102.15631262525051, 104.04809619238478, 105.93987975951904, 107.83166332665331, 109.72344689378758, 111.61523046092185, 113.50701402805612, 115.39879759519039, 117.29058116232466, 119.18236472945891, 121.07414829659318, 122.96593186372745, 124.85771543086172, 126.74949899799599, 128.64128256513027, 130.53306613226454, 132.4248496993988, 134.31663326653307, 136.20841683366734, 138.1002004008016, 139.99198396793588, 141.88376753507015, 143.77555110220442, 145.6673346693387, 147.55911823647295, 149.45090180360722, 151.3426853707415, 153.23446893787576, 155.12625250501003, 157.0180360721443, 158.90981963927857, 160.80160320641284, 162.6933867735471, 164.58517034068137, 166.47695390781564, 168.3687374749499, 170.26052104208418, 172.15230460921845, 174.04408817635272, 175.93587174348698, 177.82765531062125, 179.71943887775552, 181.6112224448898, 183.50300601202406, 185.39478957915833, 187.2865731462926, 189.17835671342687, 191.07014028056113, 192.9619238476954, 194.85370741482967, 196.74549098196394, 198.6372745490982, 200.52905811623248, 202.42084168336675, 204.31262525050101, 206.20440881763528, 208.09619238476955, 209.98797595190382, 211.8797595190381, 213.77154308617236, 215.66332665330663, 217.5551102204409, 219.44689378757516, 221.33867735470943, 223.2304609218437, 225.12224448897797, 227.01402805611224, 228.9058116232465, 230.79759519038078, 232.68937875751504, 234.5811623246493, 236.47294589178355, 238.36472945891782, 240.2565130260521, 242.14829659318636, 244.04008016032063, 245.9318637274549, 247.82364729458916, 249.71543086172343, 251.6072144288577, 253.49899799599197, 255.39078156312624, 257.28256513026054, 259.1743486973948, 261.0661322645291, 262.95791583166334, 264.8496993987976, 266.7414829659319, 268.63326653306615, 270.5250501002004, 272.4168336673347, 274.30861723446895, 276.2004008016032, 278.0921843687375, 279.98396793587176, 281.87575150300603, 283.7675350701403, 285.65931863727457, 287.55110220440883, 289.4428857715431, 291.3346693386774, 293.22645290581164, 295.1182364729459, 297.0100200400802, 298.90180360721445, 300.7935871743487, 302.685370741483, 304.57715430861725, 306.4689378757515, 308.3607214428858, 310.25250501002006, 312.1442885771543, 314.0360721442886, 315.92785571142286, 317.81963927855713, 319.7114228456914, 321.60320641282567, 323.49498997995994, 325.3867735470942, 327.2785571142285, 329.17034068136275, 331.062124248497, 332.9539078156313, 334.84569138276555, 336.7374749498998, 338.6292585170341, 340.52104208416836, 342.4128256513026, 344.3046092184369, 346.19639278557116, 348.08817635270543, 349.9799599198397, 351.87174348697397, 353.76352705410824, 355.6553106212425, 357.5470941883768, 359.43887775551104, 361.3306613226453, 363.2224448897796, 365.11422845691385, 367.0060120240481, 368.8977955911824, 370.78957915831666, 372.6813627254509, 374.5731462925852, 376.46492985971946, 378.35671342685373, 380.248496993988, 382.14028056112227, 384.03206412825654, 385.9238476953908, 387.8156312625251, 389.70741482965934, 391.5991983967936, 393.4909819639279, 395.38276553106215, 397.2745490981964, 399.1663326653307, 401.05811623246495, 402.9498997995992, 404.8416833667335, 406.73346693386776, 408.62525050100203, 410.5170340681363, 412.40881763527057, 414.30060120240483, 416.1923847695391, 418.0841683366734, 419.97595190380764, 421.8677354709419, 423.7595190380762, 425.65130260521045, 427.5430861723447, 429.434869739479, 431.32665330661325, 433.2184368737475, 435.1102204408818, 437.00200400801606, 438.8937875751503, 440.7855711422846, 442.67735470941886, 444.56913827655313, 446.4609218436874, 448.35270541082167, 450.24448897795594, 452.1362725450902, 454.0280561122245, 455.91983967935874, 457.811623246493, 459.7034068136273, 461.59519038076155, 463.4869739478958, 465.3787575150301, 467.27054108216436, 469.1623246492986, 471.0541082164329, 472.9458917835671, 474.8376753507014, 476.72945891783564, 478.6212424849699, 480.5130260521042, 482.40480961923845, 484.2965931863727, 486.188376753507, 488.08016032064126, 489.9719438877755, 491.8637274549098, 493.75551102204406, 495.64729458917833, 497.5390781563126, 499.43086172344687, 501.32264529058114, 503.2144288577154, 505.1062124248497, 506.99799599198394, 508.8897795591182, 510.7815631262525, 512.6733466933867, 514.5651302605211, 516.4569138276553, 518.3486973947896, 520.2404809619238, 522.1322645290581, 524.0240480961924, 525.9158316633267, 527.8076152304609, 529.6993987975952, 531.5911823647294, 533.4829659318638, 535.374749498998, 537.2665330661323, 539.1583166332665, 541.0501002004008, 542.941883767535, 544.8336673346694, 546.7254509018036, 548.6172344689379, 550.5090180360721, 552.4008016032064, 554.2925851703407, 556.184368737475, 558.0761523046092, 559.9679358717435, 561.8597194388777, 563.7515030060121, 565.6432865731463, 567.5350701402806, 569.4268537074148, 571.3186372745491, 573.2104208416833, 575.1022044088177, 576.9939879759519, 578.8857715430862, 580.7775551102204, 582.6693386773547, 584.561122244489, 586.4529058116233, 588.3446893787575, 590.2364729458918, 592.128256513026, 594.0200400801604, 595.9118236472946, 597.8036072144289, 599.6953907815631, 601.5871743486974, 603.4789579158316, 605.370741482966, 607.2625250501002, 609.1543086172345, 611.0460921843687, 612.937875751503, 614.8296593186373, 616.7214428857716, 618.6132264529058, 620.5050100200401, 622.3967935871743, 624.2885771543087, 626.1803607214429, 628.0721442885772, 629.9639278557114, 631.8557114228457, 633.7474949899799, 635.6392785571143, 637.5310621242485, 639.4228456913828, 641.314629258517, 643.2064128256513, 645.0981963927856, 646.9899799599199, 648.8817635270541, 650.7735470941884, 652.6653306613226, 654.557114228457, 656.4488977955912, 658.3406813627255, 660.2324649298597, 662.124248496994, 664.0160320641282, 665.9078156312626, 667.7995991983968, 669.6913827655311, 671.5831663326653, 673.4749498997996, 675.3667334669339, 677.2585170340682, 679.1503006012024, 681.0420841683367, 682.9338677354709, 684.8256513026053, 686.7174348697395, 688.6092184368738, 690.501002004008, 692.3927855711423, 694.2845691382765, 696.1763527054109, 698.0681362725451, 699.9599198396794, 701.8517034068136, 703.7434869739479, 705.6352705410821, 707.5270541082165, 709.4188376753507, 711.310621242485, 713.2024048096192, 715.0941883767536, 716.9859719438878, 718.8777555110221, 720.7695390781563, 722.6613226452906, 724.5531062124248, 726.4448897795592, 728.3366733466934, 730.2284569138277, 732.1202404809619, 734.0120240480962, 735.9038076152304, 737.7955911823648, 739.687374749499, 741.5791583166333, 743.4709418837675, 745.3627254509018, 747.2545090180361, 749.1462925851704, 751.0380761523046, 752.9298597194389, 754.8216432865731, 756.7134268537075, 758.6052104208417, 760.496993987976, 762.3887775551102, 764.2805611222445, 766.1723446893787, 768.0641282565131, 769.9559118236473, 771.8476953907816, 773.7394789579158, 775.6312625250501, 777.5230460921844, 779.4148296593187, 781.3066132264529, 783.1983967935872, 785.0901803607214, 786.9819639278558, 788.87374749499, 790.7655310621243, 792.6573146292585, 794.5490981963928, 796.440881763527, 798.3326653306614, 800.2244488977956, 802.1162324649299, 804.0080160320641, 805.8997995991984, 807.7915831663327, 809.683366733467, 811.5751503006012, 813.4669338677355, 815.3587174348697, 817.2505010020041, 819.1422845691383, 821.0340681362726, 822.9258517034068, 824.8176352705411, 826.7094188376753, 828.6012024048097, 830.4929859719439, 832.3847695390782, 834.2765531062124, 836.1683366733467, 838.060120240481, 839.9519038076153, 841.8436873747495, 843.7354709418838, 845.627254509018, 847.5190380761524, 849.4108216432866, 851.3026052104209, 853.1943887775551, 855.0861723446894, 856.9779559118236, 858.869739478958, 860.7615230460922, 862.6533066132265, 864.5450901803607, 866.436873747495, 868.3286573146293, 870.2204408817636, 872.1122244488978, 874.0040080160321, 875.8957915831663, 877.7875751503007, 879.6793587174349, 881.5711422845692, 883.4629258517034, 885.3547094188377, 887.2464929859719, 889.1382765531063, 891.0300601202405, 892.9218436873748, 894.813627254509, 896.7054108216433, 898.5971943887776, 900.4889779559119, 902.3807615230461, 904.2725450901804, 906.1643286573146, 908.056112224449, 909.9478957915832, 911.8396793587175, 913.7314629258517, 915.623246492986, 917.5150300601202, 919.4068136272546, 921.2985971943888, 923.1903807615231, 925.0821643286573, 926.9739478957916, 928.8657314629259, 930.7575150300602, 932.6492985971944, 934.5410821643287, 936.4328657314629, 938.3246492985973, 940.2164328657315, 942.1082164328658, 944.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_a57d02cb554344129a6e89543d275b29.x = d3.scale.linear()
              .domain([0.0, 944.0])
              .range([0, 400]);

    color_map_a57d02cb554344129a6e89543d275b29.legend = L.control({position: 'topright'});
    color_map_a57d02cb554344129a6e89543d275b29.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_a57d02cb554344129a6e89543d275b29.legend.addTo(map_95734016b8d34146b3d7d6722e2f5055);

    color_map_a57d02cb554344129a6e89543d275b29.xAxis = d3.svg.axis()
        .scale(color_map_a57d02cb554344129a6e89543d275b29.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 157.33333333333334, 314.6666666666667, 472.0, 629.3333333333334, 786.6666666666667, 944.0]);

    color_map_a57d02cb554344129a6e89543d275b29.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_a57d02cb554344129a6e89543d275b29.g = color_map_a57d02cb554344129a6e89543d275b29.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_a57d02cb554344129a6e89543d275b29.g.selectAll("rect")
        .data(color_map_a57d02cb554344129a6e89543d275b29.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_a57d02cb554344129a6e89543d275b29.x(color_map_a57d02cb554344129a6e89543d275b29.color.domain()[i - 1]) : color_map_a57d02cb554344129a6e89543d275b29.x.range()[0],
            x1: i < color_map_a57d02cb554344129a6e89543d275b29.color.domain().length ? color_map_a57d02cb554344129a6e89543d275b29.x(color_map_a57d02cb554344129a6e89543d275b29.color.domain()[i]) : color_map_a57d02cb554344129a6e89543d275b29.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_a57d02cb554344129a6e89543d275b29.g.call(color_map_a57d02cb554344129a6e89543d275b29.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('25_50_MARCOS PAULO COSTA DA SILVA');
