    
            var map_f746b20547cc440885c8874a8f1225fa = L.map(
                "map_f746b20547cc440885c8874a8f1225fa",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_3afbdbf2ed5645749fd7aedbeabd532e = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_f746b20547cc440885c8874a8f1225fa);
        
    
            var choropleth_63ea1d572eaa48488734de5089f46aa6 = L.featureGroup(
                {}
            ).addTo(map_f746b20547cc440885c8874a8f1225fa);
        
    
        function geo_json_13c1ce7322134a6594815b58fed00d30_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 439: case 377: case 343: case 351: case 382: case 375: case 419: case 408: case 411: case 364: case 398: case 385: case 368: case 379: case 372: case 356: case 457: case 454: case 433: case 429: case 409: case 399: case 471: case 388: case 458: case 384: case 414: case 406: case 476: case 890: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 369: case 346: case 347: case 337: case 378: case 389: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 370: case 511: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 374: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_13c1ce7322134a6594815b58fed00d30_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_13c1ce7322134a6594815b58fed00d30 = L.geoJson(null, {
                onEachFeature: geo_json_13c1ce7322134a6594815b58fed00d30_onEachFeature,
            
                style: geo_json_13c1ce7322134a6594815b58fed00d30_styler,
        });

        function geo_json_13c1ce7322134a6594815b58fed00d30_add (data) {
            geo_json_13c1ce7322134a6594815b58fed00d30
                .addData(data)
                .addTo(choropleth_63ea1d572eaa48488734de5089f46aa6);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_13c1ce7322134a6594815b58fed00d30_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_4da6a112cf1140c68516ea18ca3ea91a = {};

    
    color_map_4da6a112cf1140c68516ea18ca3ea91a.color = d3.scale.threshold()
              .domain([0.0, 27.22244488977956, 54.44488977955912, 81.66733466933867, 108.88977955911824, 136.1122244488978, 163.33466933867734, 190.55711422845692, 217.77955911823648, 245.00200400801603, 272.2244488977956, 299.44689378757516, 326.6693386773547, 353.89178356713427, 381.11422845691385, 408.3366733466934, 435.55911823647295, 462.7815631262525, 490.00400801603206, 517.2264529058116, 544.4488977955912, 571.6713426853707, 598.8937875751503, 626.1162324649299, 653.3386773547094, 680.561122244489, 707.7835671342685, 735.0060120240481, 762.2284569138277, 789.4509018036072, 816.6733466933867, 843.8957915831663, 871.1182364729459, 898.3406813627255, 925.563126252505, 952.7855711422845, 980.0080160320641, 1007.2304609218437, 1034.4529058116232, 1061.6753507014027, 1088.8977955911823, 1116.120240480962, 1143.3426853707415, 1170.565130260521, 1197.7875751503007, 1225.0100200400802, 1252.2324649298598, 1279.4549098196392, 1306.6773547094188, 1333.8997995991983, 1361.122244488978, 1388.3446893787575, 1415.567134268537, 1442.7895791583167, 1470.0120240480962, 1497.2344689378758, 1524.4569138276554, 1551.679358717435, 1578.9018036072143, 1606.124248496994, 1633.3466933867735, 1660.569138276553, 1687.7915831663327, 1715.0140280561122, 1742.2364729458918, 1769.4589178356714, 1796.681362725451, 1823.9038076152306, 1851.12625250501, 1878.3486973947895, 1905.571142284569, 1932.7935871743487, 1960.0160320641282, 1987.2384769539078, 2014.4609218436874, 2041.683366733467, 2068.9058116232463, 2096.128256513026, 2123.3507014028055, 2150.573146292585, 2177.7955911823647, 2205.0180360721442, 2232.240480961924, 2259.4629258517034, 2286.685370741483, 2313.9078156312626, 2341.130260521042, 2368.3527054108217, 2395.5751503006013, 2422.797595190381, 2450.0200400801605, 2477.24248496994, 2504.4649298597196, 2531.687374749499, 2558.9098196392783, 2586.132264529058, 2613.3547094188375, 2640.577154308617, 2667.7995991983967, 2695.0220440881762, 2722.244488977956, 2749.4669338677354, 2776.689378757515, 2803.9118236472946, 2831.134268537074, 2858.3567134268537, 2885.5791583166333, 2912.801603206413, 2940.0240480961925, 2967.246492985972, 2994.4689378757516, 3021.691382765531, 3048.913827655311, 3076.1362725450904, 3103.35871743487, 3130.581162324649, 3157.8036072144287, 3185.0260521042082, 3212.248496993988, 3239.4709418837674, 3266.693386773547, 3293.9158316633266, 3321.138276553106, 3348.3607214428857, 3375.5831663326653, 3402.805611222445, 3430.0280561122245, 3457.250501002004, 3484.4729458917836, 3511.695390781563, 3538.917835671343, 3566.1402805611224, 3593.362725450902, 3620.5851703406815, 3647.807615230461, 3675.0300601202407, 3702.25250501002, 3729.4749498997994, 3756.697394789579, 3783.9198396793586, 3811.142284569138, 3838.3647294589177, 3865.5871743486973, 3892.809619238477, 3920.0320641282565, 3947.254509018036, 3974.4769539078156, 4001.699398797595, 4028.921843687375, 4056.1442885771544, 4083.366733466934, 4110.589178356713, 4137.811623246493, 4165.034068136272, 4192.256513026052, 4219.478957915831, 4246.701402805611, 4273.923847695391, 4301.14629258517, 4328.36873747495, 4355.591182364729, 4382.813627254509, 4410.0360721442885, 4437.258517034068, 4464.480961923848, 4491.703406813627, 4518.925851703407, 4546.148296593186, 4573.370741482966, 4600.593186372746, 4627.815631262525, 4655.038076152305, 4682.260521042084, 4709.482965931864, 4736.705410821643, 4763.927855711423, 4791.150300601203, 4818.372745490982, 4845.595190380762, 4872.817635270541, 4900.040080160321, 4927.2625250501005, 4954.48496993988, 4981.70741482966, 5008.929859719439, 5036.152304609219, 5063.374749498998, 5090.597194388778, 5117.819639278557, 5145.042084168336, 5172.264529058116, 5199.486973947895, 5226.709418837675, 5253.931863727455, 5281.154308617234, 5308.376753507014, 5335.599198396793, 5362.821643286573, 5390.0440881763525, 5417.266533066132, 5444.488977955912, 5471.711422845691, 5498.933867735471, 5526.15631262525, 5553.37875751503, 5580.60120240481, 5607.823647294589, 5635.046092184369, 5662.268537074148, 5689.490981963928, 5716.7134268537075, 5743.935871743487, 5771.158316633267, 5798.380761523046, 5825.603206412826, 5852.825651302605, 5880.048096192385, 5907.2705410821645, 5934.492985971944, 5961.715430861724, 5988.937875751503, 6016.160320641283, 6043.382765531062, 6070.605210420842, 6097.827655310622, 6125.050100200401, 6152.272545090181, 6179.49498997996, 6206.71743486974, 6233.939879759519, 6261.162324649298, 6288.384769539078, 6315.607214428857, 6342.829659318637, 6370.0521042084165, 6397.274549098196, 6424.496993987976, 6451.719438877755, 6478.941883767535, 6506.164328657314, 6533.386773547094, 6560.609218436874, 6587.831663326653, 6615.054108216433, 6642.276553106212, 6669.498997995992, 6696.7214428857715, 6723.943887775551, 6751.166332665331, 6778.38877755511, 6805.61122244489, 6832.833667334669, 6860.056112224449, 6887.2785571142285, 6914.501002004008, 6941.723446893788, 6968.945891783567, 6996.168336673347, 7023.390781563126, 7050.613226452906, 7077.835671342686, 7105.058116232465, 7132.280561122245, 7159.503006012024, 7186.725450901804, 7213.9478957915835, 7241.170340681363, 7268.392785571143, 7295.615230460922, 7322.837675350702, 7350.060120240481, 7377.28256513026, 7404.50501002004, 7431.727454909819, 7458.949899799599, 7486.172344689378, 7513.394789579158, 7540.617234468938, 7567.839679358717, 7595.062124248497, 7622.284569138276, 7649.507014028056, 7676.7294589178355, 7703.951903807615, 7731.174348697395, 7758.396793587174, 7785.619238476954, 7812.841683366733, 7840.064128256513, 7867.2865731462925, 7894.509018036072, 7921.731462925852, 7948.953907815631, 7976.176352705411, 8003.39879759519, 8030.62124248497, 8057.84368737475, 8085.066132264529, 8112.288577154309, 8139.511022044088, 8166.733466933868, 8193.955911823647, 8221.178356713426, 8248.400801603206, 8275.623246492985, 8302.845691382765, 8330.068136272545, 8357.290581162324, 8384.513026052104, 8411.735470941883, 8438.957915831663, 8466.180360721442, 8493.402805611222, 8520.625250501002, 8547.847695390781, 8575.07014028056, 8602.29258517034, 8629.51503006012, 8656.7374749499, 8683.959919839679, 8711.182364729459, 8738.404809619238, 8765.627254509018, 8792.849699398797, 8820.072144288577, 8847.294589178357, 8874.517034068136, 8901.739478957916, 8928.961923847695, 8956.184368737475, 8983.406813627254, 9010.629258517034, 9037.851703406814, 9065.074148296593, 9092.296593186373, 9119.519038076152, 9146.741482965932, 9173.963927855712, 9201.186372745491, 9228.40881763527, 9255.63126252505, 9282.85370741483, 9310.07615230461, 9337.298597194389, 9364.521042084169, 9391.743486973948, 9418.965931863728, 9446.188376753507, 9473.410821643287, 9500.633266533066, 9527.855711422846, 9555.078156312626, 9582.300601202405, 9609.523046092185, 9636.745490981964, 9663.967935871744, 9691.190380761524, 9718.412825651303, 9745.635270541083, 9772.857715430862, 9800.080160320642, 9827.302605210421, 9854.525050100201, 9881.74749498998, 9908.96993987976, 9936.19238476954, 9963.41482965932, 9990.637274549099, 10017.859719438879, 10045.082164328658, 10072.304609218438, 10099.527054108217, 10126.749498997997, 10153.971943887776, 10181.194388777556, 10208.416833667334, 10235.639278557113, 10262.861723446893, 10290.084168336673, 10317.306613226452, 10344.529058116232, 10371.751503006011, 10398.97394789579, 10426.19639278557, 10453.41883767535, 10480.64128256513, 10507.86372745491, 10535.086172344689, 10562.308617234468, 10589.531062124248, 10616.753507014027, 10643.975951903807, 10671.198396793587, 10698.420841683366, 10725.643286573146, 10752.865731462925, 10780.088176352705, 10807.310621242485, 10834.533066132264, 10861.755511022044, 10888.977955911823, 10916.200400801603, 10943.422845691382, 10970.645290581162, 10997.867735470942, 11025.090180360721, 11052.3126252505, 11079.53507014028, 11106.75751503006, 11133.97995991984, 11161.20240480962, 11188.424849699399, 11215.647294589178, 11242.869739478958, 11270.092184368737, 11297.314629258517, 11324.537074148297, 11351.759519038076, 11378.981963927856, 11406.204408817635, 11433.426853707415, 11460.649298597195, 11487.871743486974, 11515.094188376754, 11542.316633266533, 11569.539078156313, 11596.761523046092, 11623.983967935872, 11651.206412825652, 11678.428857715431, 11705.65130260521, 11732.87374749499, 11760.09619238477, 11787.31863727455, 11814.541082164329, 11841.763527054109, 11868.985971943888, 11896.208416833668, 11923.430861723447, 11950.653306613227, 11977.875751503007, 12005.098196392786, 12032.320641282566, 12059.543086172345, 12086.765531062125, 12113.987975951904, 12141.210420841684, 12168.432865731464, 12195.655310621243, 12222.877755511023, 12250.100200400802, 12277.322645290582, 12304.545090180362, 12331.767535070141, 12358.98997995992, 12386.2124248497, 12413.43486973948, 12440.65731462926, 12467.879759519037, 12495.102204408817, 12522.324649298596, 12549.547094188376, 12576.769539078156, 12603.991983967935, 12631.214428857715, 12658.436873747494, 12685.659318637274, 12712.881763527053, 12740.104208416833, 12767.326653306613, 12794.549098196392, 12821.771543086172, 12848.993987975951, 12876.21643286573, 12903.43887775551, 12930.66132264529, 12957.88376753507, 12985.10621242485, 13012.328657314629, 13039.551102204408, 13066.773547094188, 13093.995991983968, 13121.218436873747, 13148.440881763527, 13175.663326653306, 13202.885771543086, 13230.108216432865, 13257.330661322645, 13284.553106212425, 13311.775551102204, 13338.997995991984, 13366.220440881763, 13393.442885771543, 13420.665330661323, 13447.887775551102, 13475.110220440882, 13502.332665330661, 13529.55511022044, 13556.77755511022, 13584.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_4da6a112cf1140c68516ea18ca3ea91a.x = d3.scale.linear()
              .domain([0.0, 13584.0])
              .range([0, 400]);

    color_map_4da6a112cf1140c68516ea18ca3ea91a.legend = L.control({position: 'topright'});
    color_map_4da6a112cf1140c68516ea18ca3ea91a.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_4da6a112cf1140c68516ea18ca3ea91a.legend.addTo(map_f746b20547cc440885c8874a8f1225fa);

    color_map_4da6a112cf1140c68516ea18ca3ea91a.xAxis = d3.svg.axis()
        .scale(color_map_4da6a112cf1140c68516ea18ca3ea91a.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 2264.0, 4528.0, 6792.0, 9056.0, 11320.0, 13584.0]);

    color_map_4da6a112cf1140c68516ea18ca3ea91a.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_4da6a112cf1140c68516ea18ca3ea91a.g = color_map_4da6a112cf1140c68516ea18ca3ea91a.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_4da6a112cf1140c68516ea18ca3ea91a.g.selectAll("rect")
        .data(color_map_4da6a112cf1140c68516ea18ca3ea91a.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_4da6a112cf1140c68516ea18ca3ea91a.x(color_map_4da6a112cf1140c68516ea18ca3ea91a.color.domain()[i - 1]) : color_map_4da6a112cf1140c68516ea18ca3ea91a.x.range()[0],
            x1: i < color_map_4da6a112cf1140c68516ea18ca3ea91a.color.domain().length ? color_map_4da6a112cf1140c68516ea18ca3ea91a.x(color_map_4da6a112cf1140c68516ea18ca3ea91a.color.domain()[i]) : color_map_4da6a112cf1140c68516ea18ca3ea91a.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_4da6a112cf1140c68516ea18ca3ea91a.g.call(color_map_4da6a112cf1140c68516ea18ca3ea91a.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');

