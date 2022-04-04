    
            var map_7df145609f4443a1be3525f32c6c38ee = L.map(
                "map_7df145609f4443a1be3525f32c6c38ee",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_39b4a3f4490a40b7b1103dce24b6eb1d = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_7df145609f4443a1be3525f32c6c38ee);
        
    
            var choropleth_da39ca1d84a14cfd8ddf65f087ebac9c = L.featureGroup(
                {}
            ).addTo(map_7df145609f4443a1be3525f32c6c38ee);
        
    
        function geo_json_71fdf563da99431a9913c0b1cd655264_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 412: case 410: case 449: case 466: case 455: case 470: case 474: case 436: case 363: case 352: case 343: case 351: case 416: case 382: case 427: case 346: case 347: case 457: case 337: case 454: case 433: case 430: case 429: case 471: case 378: case 511: case 389: case 406: case 374: case 890: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: case 381: case 369: case 370: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 387: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 510: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_71fdf563da99431a9913c0b1cd655264_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_71fdf563da99431a9913c0b1cd655264 = L.geoJson(null, {
                onEachFeature: geo_json_71fdf563da99431a9913c0b1cd655264_onEachFeature,
            
                style: geo_json_71fdf563da99431a9913c0b1cd655264_styler,
        });

        function geo_json_71fdf563da99431a9913c0b1cd655264_add (data) {
            geo_json_71fdf563da99431a9913c0b1cd655264
                .addData(data)
                .addTo(choropleth_da39ca1d84a14cfd8ddf65f087ebac9c);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_71fdf563da99431a9913c0b1cd655264_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_51949833681f42039f092fc28f4f6cf1 = {};

    
    color_map_51949833681f42039f092fc28f4f6cf1.color = d3.scale.threshold()
              .domain([-173.0, -171.3246492985972, -169.6492985971944, -167.97394789579158, -166.29859719438878, -164.62324649298597, -162.94789579158316, -161.27254509018036, -159.59719438877755, -157.92184368737475, -156.24649298597194, -154.57114228456913, -152.89579158316633, -151.22044088176352, -149.54509018036072, -147.8697394789579, -146.1943887775551, -144.5190380761523, -142.8436873747495, -141.1683366733467, -139.49298597194388, -137.81763527054107, -136.14228456913827, -134.46693386773546, -132.79158316633266, -131.11623246492985, -129.44088176352705, -127.76553106212424, -126.09018036072143, -124.41482965931863, -122.73947895791582, -121.06412825651302, -119.38877755511022, -117.71342685370742, -116.03807615230461, -114.3627254509018, -112.687374749499, -111.0120240480962, -109.33667334669339, -107.66132264529058, -105.98597194388778, -104.31062124248497, -102.63527054108216, -100.95991983967936, -99.28456913827655, -97.60921843687375, -95.93386773547094, -94.25851703406813, -92.58316633266533, -90.90781563126252, -89.23246492985972, -87.55711422845691, -85.8817635270541, -84.2064128256513, -82.53106212424849, -80.85571142284569, -79.18036072144288, -77.50501002004007, -75.82965931863727, -74.15430861723446, -72.47895791583166, -70.80360721442885, -69.12825651302605, -67.45290581162325, -65.77755511022045, -64.10220440881764, -62.426853707414836, -60.75150300601203, -59.076152304609224, -57.40080160320642, -55.72545090180361, -54.050100200400806, -52.374749498998, -50.699398797595194, -49.02404809619239, -47.34869739478958, -45.673346693386776, -43.99799599198397, -42.322645290581164, -40.64729458917836, -38.97194388777555, -37.296593186372746, -35.62124248496994, -33.945891783567134, -32.27054108216433, -30.595190380761522, -28.919839679358716, -27.24448897795591, -25.569138276553105, -23.8937875751503, -22.218436873747493, -20.543086172344687, -18.86773547094188, -17.192384769539075, -15.517034068136269, -13.841683366733463, -12.166332665330657, -10.490981963927851, -8.815631262525045, -7.140280561122239, -5.464929859719433, -3.789579158316627, -2.114228456913821, -0.43887775551101527, 1.2364729458917907, 2.9118236472945966, 4.587174348697403, 6.2625250501002085, 7.9378757515030145, 9.61322645290582, 11.288577154308626, 12.963927855711432, 14.639278557114238, 16.314629258517044, 17.98997995991985, 19.665330661322656, 21.340681362725462, 23.016032064128268, 24.691382765531074, 26.36673346693388, 28.042084168336686, 29.717434869739492, 31.392785571142298, 33.068136272545104, 34.74348697394791, 36.41883767535069, 38.09418837675349, 39.7695390781563, 41.444889779559105, 43.12024048096191, 44.79559118236472, 46.47094188376752, 48.14629258517033, 49.821643286573135, 51.49699398797594, 53.17234468937875, 54.84769539078155, 56.52304609218436, 58.198396793587165, 59.87374749498997, 61.54909819639278, 63.22444889779558, 64.89979959919839, 66.5751503006012, 68.250501002004, 69.9258517034068, 71.60120240480961, 73.27655310621242, 74.95190380761522, 76.62725450901803, 78.30260521042084, 79.97795591182364, 81.65330661322645, 83.32865731462925, 85.00400801603206, 86.67935871743487, 88.35470941883767, 90.03006012024048, 91.70541082164328, 93.38076152304609, 95.0561122244489, 96.7314629258517, 98.40681362725451, 100.08216432865731, 101.75751503006012, 103.43286573146293, 105.10821643286573, 106.78356713426854, 108.45891783567134, 110.13426853707415, 111.80961923847696, 113.48496993987976, 115.16032064128257, 116.83567134268537, 118.51102204408818, 120.18637274549098, 121.86172344689379, 123.5370741482966, 125.2124248496994, 126.88777555110221, 128.56312625250501, 130.23847695390782, 131.91382765531063, 133.58917835671343, 135.26452905811624, 136.93987975951904, 138.61523046092185, 140.29058116232466, 141.96593186372746, 143.64128256513027, 145.31663326653307, 146.99198396793588, 148.6673346693387, 150.3426853707415, 152.0180360721443, 153.6933867735471, 155.3687374749499, 157.04408817635272, 158.71943887775552, 160.39478957915833, 162.07014028056113, 163.74549098196394, 165.42084168336675, 167.09619238476955, 168.77154308617236, 170.44689378757516, 172.12224448897797, 173.79759519038078, 175.47294589178358, 177.1482965931864, 178.8236472945892, 180.498997995992, 182.1743486973948, 183.8496993987976, 185.52505010020042, 187.20040080160322, 188.87575150300603, 190.55110220440883, 192.22645290581164, 193.90180360721445, 195.57715430861725, 197.25250501002006, 198.92785571142286, 200.60320641282567, 202.27855711422848, 203.95390781563128, 205.6292585170341, 207.3046092184369, 208.9799599198397, 210.6553106212425, 212.3306613226453, 214.00601202404812, 215.68136272545092, 217.35671342685373, 219.03206412825654, 220.70741482965934, 222.38276553106215, 224.05811623246495, 225.73346693386776, 227.40881763527057, 229.08416833667337, 230.75951903807618, 232.43486973947898, 234.1102204408818, 235.7855711422846, 237.4609218436874, 239.1362725450902, 240.811623246493, 242.48697394789582, 244.16232464929863, 245.83767535070137, 247.51302605210418, 249.188376753507, 250.8637274549098, 252.5390781563126, 254.2144288577154, 255.8897795591182, 257.565130260521, 259.2404809619238, 260.9158316633266, 262.59118236472943, 264.26653306613224, 265.94188376753505, 267.61723446893785, 269.29258517034066, 270.96793587174346, 272.64328657314627, 274.3186372745491, 275.9939879759519, 277.6693386773547, 279.3446893787575, 281.0200400801603, 282.6953907815631, 284.3707414829659, 286.0460921843687, 287.7214428857715, 289.39679358717433, 291.07214428857714, 292.74749498997994, 294.42284569138275, 296.09819639278555, 297.77354709418836, 299.44889779559117, 301.12424849699397, 302.7995991983968, 304.4749498997996, 306.1503006012024, 307.8256513026052, 309.501002004008, 311.1763527054108, 312.8517034068136, 314.5270541082164, 316.2024048096192, 317.87775551102203, 319.55310621242484, 321.22845691382764, 322.90380761523045, 324.57915831663325, 326.25450901803606, 327.92985971943887, 329.6052104208417, 331.2805611222445, 332.9559118236473, 334.6312625250501, 336.3066132264529, 337.9819639278557, 339.6573146292585, 341.33266533066137, 343.0080160320641, 344.683366733467, 346.35871743486973, 348.0340681362726, 349.70941883767534, 351.3847695390782, 353.06012024048096, 354.7354709418838, 356.41082164328657, 358.08617234468943, 359.7615230460922, 361.43687374749504, 363.1122244488978, 364.78757515030065, 366.4629258517034, 368.13827655310627, 369.813627254509, 371.4889779559119, 373.1643286573146, 374.8396793587175, 376.51503006012024, 378.1903807615231, 379.86573146292585, 381.5410821643287, 383.21643286573146, 384.8917835671342, 386.5671342685371, 388.2424849699398, 389.9178356713427, 391.59318637274544, 393.2685370741483, 394.94388777555105, 396.6192384769539, 398.29458917835666, 399.9699398797595, 401.64529058116227, 403.32064128256513, 404.9959919839679, 406.67134268537075, 408.3466933867735, 410.02204408817636, 411.6973947895791, 413.37274549098197, 415.0480961923847, 416.7234468937876, 418.39879759519033, 420.0741482965932, 421.74949899799594, 423.4248496993988, 425.10020040080155, 426.7755511022044, 428.45090180360717, 430.12625250501003, 431.8016032064128, 433.47695390781564, 435.1523046092184, 436.82765531062125, 438.503006012024, 440.17835671342687, 441.8537074148296, 443.5290581162325, 445.2044088176352, 446.8797595190381, 448.55511022044084, 450.2304609218437, 451.90581162324645, 453.5811623246493, 455.25651302605206, 456.9318637274549, 458.6072144288577, 460.28256513026054, 461.9579158316633, 463.63326653306615, 465.3086172344689, 466.98396793587176, 468.6593186372745, 470.3346693386774, 472.0100200400801, 473.685370741483, 475.36072144288573, 477.0360721442886, 478.71142284569135, 480.3867735470942, 482.06212424849696, 483.7374749498998, 485.41282565130257, 487.08817635270543, 488.7635270541082, 490.43887775551104, 492.1142284569138, 493.78957915831666, 495.4649298597194, 497.14028056112227, 498.815631262525, 500.4909819639279, 502.16633266533063, 503.8416833667335, 505.51703406813624, 507.1923847695391, 508.86773547094185, 510.5430861723447, 512.2184368737475, 513.8937875751503, 515.5691382765531, 517.2444889779559, 518.9198396793587, 520.5951903807616, 522.2705410821643, 523.9458917835672, 525.6212424849699, 527.2965931863728, 528.9719438877755, 530.6472945891784, 532.3226452905811, 533.997995991984, 535.6733466933867, 537.3486973947896, 539.0240480961924, 540.6993987975952, 542.374749498998, 544.0501002004008, 545.7254509018036, 547.4008016032064, 549.0761523046092, 550.7515030060121, 552.4268537074148, 554.1022044088177, 555.7775551102204, 557.4529058116233, 559.128256513026, 560.8036072144289, 562.4789579158316, 564.1543086172345, 565.8296593186373, 567.5050100200401, 569.1803607214429, 570.8557114228457, 572.5310621242485, 574.2064128256513, 575.8817635270541, 577.557114228457, 579.2324649298597, 580.9078156312626, 582.5831663326653, 584.2585170340682, 585.9338677354709, 587.6092184368738, 589.2845691382765, 590.9599198396794, 592.6352705410821, 594.310621242485, 595.9859719438878, 597.6613226452906, 599.3366733466934, 601.0120240480962, 602.687374749499, 604.3627254509018, 606.0380761523046, 607.7134268537075, 609.3887775551102, 611.0641282565131, 612.7394789579158, 614.4148296593187, 616.0901803607214, 617.7655310621243, 619.440881763527, 621.1162324649299, 622.7915831663327, 624.4669338677355, 626.1422845691383, 627.8176352705411, 629.4929859719439, 631.1683366733467, 632.8436873747495, 634.5190380761524, 636.1943887775551, 637.869739478958, 639.5450901803607, 641.2204408817636, 642.8957915831663, 644.5711422845692, 646.2464929859719, 647.9218436873748, 649.5971943887776, 651.2725450901804, 652.9478957915832, 654.623246492986, 656.2985971943888, 657.9739478957916, 659.6492985971944, 661.3246492985973, 663.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_51949833681f42039f092fc28f4f6cf1.x = d3.scale.linear()
              .domain([-173.0, 663.0])
              .range([0, 400]);

    color_map_51949833681f42039f092fc28f4f6cf1.legend = L.control({position: 'topright'});
    color_map_51949833681f42039f092fc28f4f6cf1.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_51949833681f42039f092fc28f4f6cf1.legend.addTo(map_7df145609f4443a1be3525f32c6c38ee);

    color_map_51949833681f42039f092fc28f4f6cf1.xAxis = d3.svg.axis()
        .scale(color_map_51949833681f42039f092fc28f4f6cf1.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-173.0, -33.66666666666666, 105.66666666666669, 245.0, 384.33333333333337, 523.6666666666667, 663.0]);

    color_map_51949833681f42039f092fc28f4f6cf1.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_51949833681f42039f092fc28f4f6cf1.g = color_map_51949833681f42039f092fc28f4f6cf1.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_51949833681f42039f092fc28f4f6cf1.g.selectAll("rect")
        .data(color_map_51949833681f42039f092fc28f4f6cf1.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_51949833681f42039f092fc28f4f6cf1.x(color_map_51949833681f42039f092fc28f4f6cf1.color.domain()[i - 1]) : color_map_51949833681f42039f092fc28f4f6cf1.x.range()[0],
            x1: i < color_map_51949833681f42039f092fc28f4f6cf1.color.domain().length ? color_map_51949833681f42039f092fc28f4f6cf1.x(color_map_51949833681f42039f092fc28f4f6cf1.color.domain()[i]) : color_map_51949833681f42039f092fc28f4f6cf1.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_51949833681f42039f092fc28f4f6cf1.g.call(color_map_51949833681f42039f092fc28f4f6cf1.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('05_13_Partido dos Trabalhadores');
