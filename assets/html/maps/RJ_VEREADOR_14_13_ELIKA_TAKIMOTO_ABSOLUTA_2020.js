    
            var map_97c88af15af54fc4a2644f9f3d8c13f3 = L.map(
                "map_97c88af15af54fc4a2644f9f3d8c13f3",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_6ccc1bd0a6a244bc82fe7c3122dbf875 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_97c88af15af54fc4a2644f9f3d8c13f3);
        
    
            var choropleth_052054a749a24b7098eb445bd16538a9 = L.featureGroup(
                {}
            ).addTo(map_97c88af15af54fc4a2644f9f3d8c13f3);
        
    
        function geo_json_08436e4d1c914ceabdf7503d06bc56c7_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 431: case 349: case 342: case 336: case 460: case 481: case 479: case 391: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 447: case 437: case 446: case 444: case 364: case 346: case 433: case 430: case 399: case 477: case 370: case 511: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 455: case 436: case 419: case 471: case 510: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_08436e4d1c914ceabdf7503d06bc56c7_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_08436e4d1c914ceabdf7503d06bc56c7 = L.geoJson(null, {
                onEachFeature: geo_json_08436e4d1c914ceabdf7503d06bc56c7_onEachFeature,
            
                style: geo_json_08436e4d1c914ceabdf7503d06bc56c7_styler,
        });

        function geo_json_08436e4d1c914ceabdf7503d06bc56c7_add (data) {
            geo_json_08436e4d1c914ceabdf7503d06bc56c7
                .addData(data)
                .addTo(choropleth_052054a749a24b7098eb445bd16538a9);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_08436e4d1c914ceabdf7503d06bc56c7_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_ba30295f85f343aeae62114ae6c6625b = {};

    
    color_map_ba30295f85f343aeae62114ae6c6625b.color = d3.scale.threshold()
              .domain([1.0, 2.6713426853707416, 4.342685370741483, 6.014028056112225, 7.6853707414829655, 9.356713426853707, 11.02805611222445, 12.69939879759519, 14.370741482965931, 16.04208416833667, 17.713426853707414, 19.384769539078157, 21.0561122244489, 22.727454909819638, 24.39879759519038, 26.070140280561123, 27.741482965931862, 29.412825651302605, 31.084168336673347, 32.75551102204409, 34.42685370741483, 36.098196392785574, 37.76953907815631, 39.44088176352705, 41.1122244488978, 42.78356713426854, 44.454909819639276, 46.12625250501002, 47.79759519038076, 49.4689378757515, 51.140280561122246, 52.811623246492985, 54.482965931863724, 56.15430861723447, 57.82565130260521, 59.496993987975955, 61.168336673346694, 62.83967935871743, 64.51102204408818, 66.18236472945891, 67.85370741482966, 69.5250501002004, 71.19639278557115, 72.86773547094188, 74.53907815631263, 76.21042084168337, 77.8817635270541, 79.55310621242485, 81.2244488977956, 82.89579158316633, 84.56713426853707, 86.23847695390782, 87.90981963927855, 89.5811623246493, 91.25250501002004, 92.92384769539078, 94.59519038076152, 96.26653306613227, 97.937875751503, 99.60921843687375, 101.28056112224449, 102.95190380761522, 104.62324649298597, 106.29458917835672, 107.96593186372745, 109.6372745490982, 111.30861723446894, 112.97995991983969, 114.65130260521042, 116.32264529058116, 117.99398797595191, 119.66533066132264, 121.33667334669339, 123.00801603206413, 124.67935871743487, 126.35070140280561, 128.02204408817636, 129.6933867735471, 131.36472945891782, 133.03607214428857, 134.7074148296593, 136.37875751503006, 138.0501002004008, 139.72144288577155, 141.3927855711423, 143.06412825651302, 144.73547094188376, 146.4068136272545, 148.07815631262525, 149.749498997996, 151.42084168336675, 153.09218436873746, 154.7635270541082, 156.43486973947896, 158.1062124248497, 159.77755511022045, 161.4488977955912, 163.1202404809619, 164.79158316633266, 166.4629258517034, 168.13426853707415, 169.8056112224449, 171.47695390781564, 173.14829659318636, 174.8196392785571, 176.49098196392785, 178.1623246492986, 179.83366733466934, 181.5050100200401, 183.17635270541084, 184.84769539078155, 186.5190380761523, 188.19038076152304, 189.8617234468938, 191.53306613226454, 193.20440881763528, 194.875751503006, 196.54709418837675, 198.2184368737475, 199.88977955911824, 201.56112224448898, 203.23246492985973, 204.90380761523045, 206.5751503006012, 208.24649298597194, 209.9178356713427, 211.58917835671343, 213.26052104208418, 214.9318637274549, 216.60320641282564, 218.2745490981964, 219.94589178356713, 221.61723446893788, 223.28857715430863, 224.95991983967937, 226.6312625250501, 228.30260521042084, 229.97394789579158, 231.64529058116233, 233.31663326653307, 234.98797595190382, 236.65931863727454, 238.33066132264528, 240.00200400801603, 241.67334669338678, 243.34468937875752, 245.01603206412827, 246.68737474949899, 248.35871743486973, 250.03006012024048, 251.70140280561122, 253.37274549098197, 255.04408817635272, 256.71543086172346, 258.3867735470942, 260.05811623246495, 261.72945891783564, 263.4008016032064, 265.07214428857714, 266.7434869739479, 268.4148296593186, 270.0861723446894, 271.7575150300601, 273.42885771543087, 275.1002004008016, 276.77154308617236, 278.4428857715431, 280.11422845691385, 281.7855711422846, 283.4569138276553, 285.12825651302603, 286.7995991983968, 288.4709418837675, 290.14228456913827, 291.813627254509, 293.48496993987976, 295.1563126252505, 296.82765531062125, 298.498997995992, 300.17034068136275, 301.8416833667335, 303.5130260521042, 305.1843687374749, 306.8557114228457, 308.5270541082164, 310.19839679358716, 311.8697394789579, 313.54108216432866, 315.2124248496994, 316.88376753507015, 318.5551102204409, 320.22645290581164, 321.8977955911824, 323.56913827655313, 325.2404809619238, 326.91182364729457, 328.5831663326653, 330.25450901803606, 331.9258517034068, 333.59719438877755, 335.2685370741483, 336.93987975951904, 338.6112224448898, 340.28256513026054, 341.9539078156313, 343.62525050100203, 345.2965931863727, 346.96793587174346, 348.6392785571142, 350.31062124248496, 351.9819639278557, 353.65330661322645, 355.3246492985972, 356.99599198396794, 358.6673346693387, 360.33867735470943, 362.0100200400802, 363.6813627254509, 365.35270541082167, 367.02404809619236, 368.6953907815631, 370.36673346693385, 372.0380761523046, 373.70941883767534, 375.3807615230461, 377.05210420841684, 378.7234468937876, 380.3947895791583, 382.0661322645291, 383.7374749498998, 385.40881763527057, 387.08016032064126, 388.751503006012, 390.42284569138275, 392.0941883767535, 393.76553106212424, 395.436873747495, 397.10821643286573, 398.7795591182365, 400.4509018036072, 402.12224448897797, 403.7935871743487, 405.46492985971946, 407.1362725450902, 408.8076152304609, 410.47895791583164, 412.1503006012024, 413.82164328657313, 415.4929859719439, 417.1643286573146, 418.8356713426854, 420.5070140280561, 422.17835671342687, 423.8496993987976, 425.52104208416836, 427.1923847695391, 428.8637274549098, 430.53507014028054, 432.2064128256513, 433.87775551102203, 435.5490981963928, 437.2204408817635, 438.89178356713427, 440.563126252505, 442.23446893787576, 443.9058116232465, 445.57715430861725, 447.248496993988, 448.91983967935874, 450.59118236472943, 452.2625250501002, 453.9338677354709, 455.6052104208417, 457.2765531062124, 458.94789579158316, 460.6192384769539, 462.29058116232466, 463.9619238476954, 465.63326653306615, 467.3046092184369, 468.97595190380764, 470.64729458917833, 472.3186372745491, 473.9899799599198, 475.66132264529057, 477.3326653306613, 479.00400801603206, 480.6753507014028, 482.34669338677355, 484.0180360721443, 485.68937875751504, 487.3607214428858, 489.03206412825654, 490.7034068136273, 492.37474949899797, 494.0460921843687, 495.71743486973946, 497.3887775551102, 499.06012024048096, 500.7314629258517, 502.40280561122245, 504.0741482965932, 505.74549098196394, 507.4168336673347, 509.08817635270543, 510.7595190380762, 512.4308617234469, 514.1022044088177, 515.7735470941884, 517.4448897795592, 519.1162324649299, 520.7875751503007, 522.4589178356713, 524.130260521042, 525.8016032064128, 527.4729458917835, 529.1442885771543, 530.815631262525, 532.4869739478958, 534.1583166332665, 535.8296593186373, 537.501002004008, 539.1723446893787, 540.8436873747495, 542.5150300601202, 544.186372745491, 545.8577154308617, 547.5290581162325, 549.2004008016032, 550.871743486974, 552.5430861723447, 554.2144288577155, 555.8857715430862, 557.557114228457, 559.2284569138277, 560.8997995991984, 562.5711422845692, 564.2424849699398, 565.9138276553106, 567.5851703406813, 569.2565130260521, 570.9278557114228, 572.5991983967936, 574.2705410821643, 575.941883767535, 577.6132264529058, 579.2845691382765, 580.9559118236473, 582.627254509018, 584.2985971943888, 585.9699398797595, 587.6412825651303, 589.312625250501, 590.9839679358718, 592.6553106212425, 594.3266533066133, 595.997995991984, 597.6693386773547, 599.3406813627255, 601.0120240480962, 602.683366733467, 604.3547094188377, 606.0260521042084, 607.6973947895791, 609.3687374749499, 611.0400801603206, 612.7114228456913, 614.3827655310621, 616.0541082164328, 617.7254509018036, 619.3967935871743, 621.0681362725451, 622.7394789579158, 624.4108216432866, 626.0821643286573, 627.7535070140281, 629.4248496993988, 631.0961923847696, 632.7675350701403, 634.438877755511, 636.1102204408818, 637.7815631262525, 639.4529058116233, 641.124248496994, 642.7955911823648, 644.4669338677355, 646.1382765531063, 647.8096192384769, 649.4809619238476, 651.1523046092184, 652.8236472945891, 654.4949899799599, 656.1663326653306, 657.8376753507014, 659.5090180360721, 661.1803607214429, 662.8517034068136, 664.5230460921844, 666.1943887775551, 667.8657314629259, 669.5370741482966, 671.2084168336673, 672.8797595190381, 674.5511022044088, 676.2224448897796, 677.8937875751503, 679.5651302605211, 681.2364729458918, 682.9078156312626, 684.5791583166333, 686.2505010020041, 687.9218436873748, 689.5931863727454, 691.2645290581162, 692.9358717434869, 694.6072144288577, 696.2785571142284, 697.9498997995992, 699.6212424849699, 701.2925851703407, 702.9639278557114, 704.6352705410821, 706.3066132264529, 707.9779559118236, 709.6492985971944, 711.3206412825651, 712.9919839679359, 714.6633266533066, 716.3346693386774, 718.0060120240481, 719.6773547094189, 721.3486973947896, 723.0200400801604, 724.6913827655311, 726.3627254509018, 728.0340681362726, 729.7054108216433, 731.376753507014, 733.0480961923847, 734.7194388777555, 736.3907815631262, 738.062124248497, 739.7334669338677, 741.4048096192384, 743.0761523046092, 744.7474949899799, 746.4188376753507, 748.0901803607214, 749.7615230460922, 751.4328657314629, 753.1042084168337, 754.7755511022044, 756.4468937875752, 758.1182364729459, 759.7895791583167, 761.4609218436874, 763.1322645290581, 764.8036072144289, 766.4749498997996, 768.1462925851704, 769.8176352705411, 771.4889779559119, 773.1603206412825, 774.8316633266533, 776.503006012024, 778.1743486973947, 779.8456913827655, 781.5170340681362, 783.188376753507, 784.8597194388777, 786.5310621242485, 788.2024048096192, 789.87374749499, 791.5450901803607, 793.2164328657315, 794.8877755511022, 796.559118236473, 798.2304609218437, 799.9018036072144, 801.5731462925852, 803.2444889779559, 804.9158316633267, 806.5871743486974, 808.2585170340682, 809.9298597194389, 811.6012024048097, 813.2725450901804, 814.943887775551, 816.6152304609218, 818.2865731462925, 819.9579158316633, 821.629258517034, 823.3006012024048, 824.9719438877755, 826.6432865731463, 828.314629258517, 829.9859719438878, 831.6573146292585, 833.3286573146293, 835.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_ba30295f85f343aeae62114ae6c6625b.x = d3.scale.linear()
              .domain([1.0, 835.0])
              .range([0, 400]);

    color_map_ba30295f85f343aeae62114ae6c6625b.legend = L.control({position: 'topright'});
    color_map_ba30295f85f343aeae62114ae6c6625b.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_ba30295f85f343aeae62114ae6c6625b.legend.addTo(map_97c88af15af54fc4a2644f9f3d8c13f3);

    color_map_ba30295f85f343aeae62114ae6c6625b.xAxis = d3.svg.axis()
        .scale(color_map_ba30295f85f343aeae62114ae6c6625b.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 140.0, 279.0, 418.0, 557.0, 696.0, 835.0]);

    color_map_ba30295f85f343aeae62114ae6c6625b.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_ba30295f85f343aeae62114ae6c6625b.g = color_map_ba30295f85f343aeae62114ae6c6625b.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_ba30295f85f343aeae62114ae6c6625b.g.selectAll("rect")
        .data(color_map_ba30295f85f343aeae62114ae6c6625b.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_ba30295f85f343aeae62114ae6c6625b.x(color_map_ba30295f85f343aeae62114ae6c6625b.color.domain()[i - 1]) : color_map_ba30295f85f343aeae62114ae6c6625b.x.range()[0],
            x1: i < color_map_ba30295f85f343aeae62114ae6c6625b.color.domain().length ? color_map_ba30295f85f343aeae62114ae6c6625b.x(color_map_ba30295f85f343aeae62114ae6c6625b.color.domain()[i]) : color_map_ba30295f85f343aeae62114ae6c6625b.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_ba30295f85f343aeae62114ae6c6625b.g.call(color_map_ba30295f85f343aeae62114ae6c6625b.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('14_13_ELIKA TAKIMOTO');
