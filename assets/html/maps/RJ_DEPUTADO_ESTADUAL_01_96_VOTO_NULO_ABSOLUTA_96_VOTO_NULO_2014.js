    
            var map_159a0cd0c3684e53aeac5a9b0a68f2d1 = L.map(
                "map_159a0cd0c3684e53aeac5a9b0a68f2d1",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_3f1ecf76c3634f62abe092bda610fc84 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_159a0cd0c3684e53aeac5a9b0a68f2d1);
        
    
            var choropleth_ddc49db46c4f4e98a90c73a830d39c8f = L.featureGroup(
                {}
            ).addTo(map_159a0cd0c3684e53aeac5a9b0a68f2d1);
        
    
        function geo_json_9839d35ce7b145dea8cbb87756ceaa53_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 439: case 369: case 419: case 346: case 368: case 356: case 454: case 409: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 377: case 472: case 474: case 446: case 392: case 351: case 396: case 330: case 360: case 457: case 337: case 445: case 429: case 458: case 389: case 384: case 414: case 406: case 476: case 890: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 423: case 431: case 349: case 342: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 347: case 471: case 374: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 370: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 511: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_9839d35ce7b145dea8cbb87756ceaa53_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_9839d35ce7b145dea8cbb87756ceaa53 = L.geoJson(null, {
                onEachFeature: geo_json_9839d35ce7b145dea8cbb87756ceaa53_onEachFeature,
            
                style: geo_json_9839d35ce7b145dea8cbb87756ceaa53_styler,
        });

        function geo_json_9839d35ce7b145dea8cbb87756ceaa53_add (data) {
            geo_json_9839d35ce7b145dea8cbb87756ceaa53
                .addData(data)
                .addTo(choropleth_ddc49db46c4f4e98a90c73a830d39c8f);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_9839d35ce7b145dea8cbb87756ceaa53_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_f6899d9ff6c14f97977acf427aeb2cd8 = {};

    
    color_map_f6899d9ff6c14f97977acf427aeb2cd8.color = d3.scale.threshold()
              .domain([0.0, 19.15430861723447, 38.30861723446894, 57.46292585170341, 76.61723446893788, 95.77154308617234, 114.92585170340682, 134.08016032064128, 153.23446893787576, 172.3887775551102, 191.5430861723447, 210.69739478957916, 229.85170340681364, 249.0060120240481, 268.16032064128257, 287.314629258517, 306.4689378757515, 325.62324649298597, 344.7775551102204, 363.9318637274549, 383.0861723446894, 402.2404809619238, 421.3947895791583, 440.5490981963928, 459.7034068136273, 478.85771543086173, 498.0120240480962, 517.1663326653306, 536.3206412825651, 555.4749498997996, 574.629258517034, 593.7835671342685, 612.937875751503, 632.0921843687374, 651.2464929859719, 670.4008016032064, 689.5551102204408, 708.7094188376753, 727.8637274549098, 747.0180360721442, 766.1723446893787, 785.3266533066133, 804.4809619238476, 823.6352705410821, 842.7895791583167, 861.943887775551, 881.0981963927856, 900.2525050100201, 919.4068136272546, 938.561122244489, 957.7154308617235, 976.869739478958, 996.0240480961924, 1015.1783567134269, 1034.3326653306613, 1053.4869739478959, 1072.6412825651303, 1091.7955911823647, 1110.9498997995993, 1130.1042084168337, 1149.258517034068, 1168.4128256513027, 1187.567134268537, 1206.7214428857715, 1225.875751503006, 1245.0300601202405, 1264.1843687374749, 1283.3386773547095, 1302.4929859719439, 1321.6472945891783, 1340.801603206413, 1359.9559118236473, 1379.1102204408817, 1398.2645290581163, 1417.4188376753507, 1436.573146292585, 1455.7274549098197, 1474.881763527054, 1494.0360721442885, 1513.190380761523, 1532.3446893787575, 1551.4989979959919, 1570.6533066132265, 1589.807615230461, 1608.9619238476953, 1628.11623246493, 1647.2705410821643, 1666.4248496993987, 1685.5791583166333, 1704.7334669338677, 1723.887775551102, 1743.0420841683367, 1762.196392785571, 1781.3507014028055, 1800.5050100200401, 1819.6593186372745, 1838.8136272545091, 1857.9679358717435, 1877.122244488978, 1896.2765531062125, 1915.430861723447, 1934.5851703406813, 1953.739478957916, 1972.8937875751503, 1992.0480961923847, 2011.2024048096193, 2030.3567134268537, 2049.5110220440883, 2068.6653306613225, 2087.819639278557, 2106.9739478957918, 2126.128256513026, 2145.2825651302605, 2164.436873747495, 2183.5911823647293, 2202.745490981964, 2221.8997995991986, 2241.0541082164327, 2260.2084168336673, 2279.362725450902, 2298.517034068136, 2317.6713426853707, 2336.8256513026054, 2355.9799599198395, 2375.134268537074, 2394.2885771543088, 2413.442885771543, 2432.5971943887776, 2451.751503006012, 2470.9058116232463, 2490.060120240481, 2509.2144288577156, 2528.3687374749497, 2547.5230460921844, 2566.677354709419, 2585.831663326653, 2604.9859719438878, 2624.1402805611224, 2643.2945891783565, 2662.448897795591, 2681.603206412826, 2700.75751503006, 2719.9118236472946, 2739.066132264529, 2758.2204408817634, 2777.374749498998, 2796.5290581162326, 2815.6833667334668, 2834.8376753507014, 2853.991983967936, 2873.14629258517, 2892.300601202405, 2911.4549098196394, 2930.6092184368736, 2949.763527054108, 2968.917835671343, 2988.072144288577, 3007.2264529058116, 3026.380761523046, 3045.5350701402804, 3064.689378757515, 3083.8436873747496, 3102.9979959919838, 3122.1523046092184, 3141.306613226453, 3160.460921843687, 3179.615230460922, 3198.7695390781564, 3217.9238476953906, 3237.078156312625, 3256.23246492986, 3275.386773547094, 3294.5410821643286, 3313.695390781563, 3332.8496993987974, 3352.004008016032, 3371.1583166332666, 3390.312625250501, 3409.4669338677354, 3428.62124248497, 3447.775551102204, 3466.929859719439, 3486.0841683366734, 3505.2384769539076, 3524.392785571142, 3543.547094188377, 3562.701402805611, 3581.8557114228456, 3601.0100200400802, 3620.164328657315, 3639.318637274549, 3658.4729458917836, 3677.6272545090183, 3696.7815631262524, 3715.935871743487, 3735.0901803607217, 3754.244488977956, 3773.3987975951904, 3792.553106212425, 3811.7074148296592, 3830.861723446894, 3850.0160320641285, 3869.1703406813626, 3888.3246492985973, 3907.478957915832, 3926.633266533066, 3945.7875751503007, 3964.9418837675353, 3984.0961923847694, 4003.250501002004, 4022.4048096192387, 4041.559118236473, 4060.7134268537075, 4079.867735470942, 4099.022044088177, 4118.176352705411, 4137.330661322645, 4156.48496993988, 4175.639278557114, 4194.793587174348, 4213.9478957915835, 4233.102204408818, 4252.256513026052, 4271.410821643287, 4290.565130260521, 4309.719438877755, 4328.87374749499, 4348.0280561122245, 4367.182364729459, 4386.336673346694, 4405.490981963928, 4424.645290581162, 4443.799599198397, 4462.953907815631, 4482.108216432865, 4501.2625250501005, 4520.416833667335, 4539.571142284569, 4558.725450901804, 4577.879759519038, 4597.034068136272, 4616.188376753507, 4635.3426853707415, 4654.496993987976, 4673.651302605211, 4692.805611222445, 4711.959919839679, 4731.114228456914, 4750.268537074148, 4769.4228456913825, 4788.5771543086175, 4807.731462925852, 4826.885771543086, 4846.040080160321, 4865.194388777555, 4884.348697394789, 4903.503006012024, 4922.6573146292585, 4941.811623246493, 4960.965931863728, 4980.120240480962, 4999.274549098196, 5018.428857715431, 5037.583166332665, 5056.7374749498995, 5075.891783567135, 5095.046092184369, 5114.200400801603, 5133.354709418838, 5152.509018036072, 5171.663326653306, 5190.817635270541, 5209.9719438877755, 5229.12625250501, 5248.280561122245, 5267.434869739479, 5286.589178356713, 5305.743486973948, 5324.897795591182, 5344.0521042084165, 5363.206412825652, 5382.360721442886, 5401.51503006012, 5420.669338677355, 5439.823647294589, 5458.977955911823, 5478.132264529058, 5497.2865731462925, 5516.440881763527, 5535.595190380762, 5554.749498997996, 5573.90380761523, 5593.058116232465, 5612.212424849699, 5631.3667334669335, 5650.521042084169, 5669.675350701403, 5688.829659318637, 5707.983967935872, 5727.138276553106, 5746.29258517034, 5765.446893787575, 5784.60120240481, 5803.755511022044, 5822.909819639279, 5842.064128256513, 5861.218436873747, 5880.372745490982, 5899.527054108216, 5918.6813627254505, 5937.835671342686, 5956.98997995992, 5976.144288577154, 5995.298597194389, 6014.452905811623, 6033.607214428857, 6052.761523046092, 6071.915831663327, 6091.070140280561, 6110.224448897796, 6129.37875751503, 6148.533066132264, 6167.687374749499, 6186.841683366733, 6205.9959919839675, 6225.150300601203, 6244.304609218437, 6263.458917835671, 6282.613226452906, 6301.76753507014, 6320.921843687374, 6340.076152304609, 6359.230460921844, 6378.384769539078, 6397.539078156313, 6416.693386773547, 6435.847695390781, 6455.002004008016, 6474.15631262525, 6493.310621242485, 6512.46492985972, 6531.619238476954, 6550.773547094188, 6569.927855711423, 6589.082164328657, 6608.236472945891, 6627.390781563126, 6646.545090180361, 6665.699398797595, 6684.85370741483, 6704.008016032064, 6723.162324649298, 6742.316633266533, 6761.470941883767, 6780.625250501002, 6799.779559118237, 6818.933867735471, 6838.088176352705, 6857.24248496994, 6876.396793587174, 6895.551102204408, 6914.705410821643, 6933.859719438878, 6953.014028056112, 6972.168336673347, 6991.322645290581, 7010.476953907815, 7029.63126252505, 7048.785571142284, 7067.939879759519, 7087.094188376754, 7106.248496993988, 7125.402805611222, 7144.557114228457, 7163.711422845691, 7182.865731462926, 7202.0200400801605, 7221.174348697395, 7240.32865731463, 7259.482965931864, 7278.637274549098, 7297.791583166333, 7316.945891783567, 7336.100200400801, 7355.2545090180365, 7374.408817635271, 7393.563126252505, 7412.71743486974, 7431.871743486974, 7451.026052104208, 7470.180360721443, 7489.3346693386775, 7508.488977955912, 7527.643286573147, 7546.797595190381, 7565.951903807615, 7585.10621242485, 7604.260521042084, 7623.4148296593185, 7642.5691382765535, 7661.723446893788, 7680.877755511022, 7700.032064128257, 7719.186372745491, 7738.340681362725, 7757.49498997996, 7776.6492985971945, 7795.803607214429, 7814.957915831664, 7834.112224448898, 7853.266533066132, 7872.420841683367, 7891.575150300601, 7910.7294589178355, 7929.883767535071, 7949.038076152305, 7968.192384769539, 7987.346693386774, 8006.501002004008, 8025.655310621242, 8044.809619238477, 8063.9639278557115, 8083.118236472946, 8102.272545090181, 8121.426853707415, 8140.581162324649, 8159.735470941884, 8178.889779559118, 8198.044088176353, 8217.198396793587, 8236.352705410822, 8255.507014028057, 8274.66132264529, 8293.815631262525, 8312.96993987976, 8332.124248496993, 8351.278557114229, 8370.432865731464, 8389.587174348697, 8408.741482965932, 8427.895791583167, 8447.0501002004, 8466.204408817635, 8485.35871743487, 8504.513026052104, 8523.667334669339, 8542.821643286574, 8561.975951903807, 8581.130260521042, 8600.284569138277, 8619.43887775551, 8638.593186372746, 8657.74749498998, 8676.901803607214, 8696.056112224449, 8715.210420841684, 8734.364729458917, 8753.519038076152, 8772.673346693387, 8791.82765531062, 8810.981963927856, 8830.13627254509, 8849.290581162324, 8868.44488977956, 8887.599198396794, 8906.753507014027, 8925.907815631263, 8945.062124248498, 8964.21643286573, 8983.370741482966, 9002.525050100201, 9021.679358717434, 9040.83366733467, 9059.987975951904, 9079.142284569138, 9098.296593186373, 9117.450901803608, 9136.605210420841, 9155.759519038076, 9174.913827655311, 9194.068136272545, 9213.22244488978, 9232.376753507015, 9251.531062124248, 9270.685370741483, 9289.839679358718, 9308.993987975951, 9328.148296593186, 9347.302605210421, 9366.456913827655, 9385.61122244489, 9404.765531062125, 9423.919839679358, 9443.074148296593, 9462.228456913828, 9481.382765531062, 9500.537074148297, 9519.691382765532, 9538.845691382765, 9558.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_f6899d9ff6c14f97977acf427aeb2cd8.x = d3.scale.linear()
              .domain([0.0, 9558.0])
              .range([0, 400]);

    color_map_f6899d9ff6c14f97977acf427aeb2cd8.legend = L.control({position: 'topright'});
    color_map_f6899d9ff6c14f97977acf427aeb2cd8.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_f6899d9ff6c14f97977acf427aeb2cd8.legend.addTo(map_159a0cd0c3684e53aeac5a9b0a68f2d1);

    color_map_f6899d9ff6c14f97977acf427aeb2cd8.xAxis = d3.svg.axis()
        .scale(color_map_f6899d9ff6c14f97977acf427aeb2cd8.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 1593.0, 3186.0, 4779.0, 6372.0, 7965.0, 9558.0]);

    color_map_f6899d9ff6c14f97977acf427aeb2cd8.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_f6899d9ff6c14f97977acf427aeb2cd8.g = color_map_f6899d9ff6c14f97977acf427aeb2cd8.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_f6899d9ff6c14f97977acf427aeb2cd8.g.selectAll("rect")
        .data(color_map_f6899d9ff6c14f97977acf427aeb2cd8.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_f6899d9ff6c14f97977acf427aeb2cd8.x(color_map_f6899d9ff6c14f97977acf427aeb2cd8.color.domain()[i - 1]) : color_map_f6899d9ff6c14f97977acf427aeb2cd8.x.range()[0],
            x1: i < color_map_f6899d9ff6c14f97977acf427aeb2cd8.color.domain().length ? color_map_f6899d9ff6c14f97977acf427aeb2cd8.x(color_map_f6899d9ff6c14f97977acf427aeb2cd8.color.domain()[i]) : color_map_f6899d9ff6c14f97977acf427aeb2cd8.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_f6899d9ff6c14f97977acf427aeb2cd8.g.call(color_map_f6899d9ff6c14f97977acf427aeb2cd8.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');

