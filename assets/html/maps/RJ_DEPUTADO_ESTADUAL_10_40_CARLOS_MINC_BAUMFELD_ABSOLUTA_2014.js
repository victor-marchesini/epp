    
            var map_a64865e79c5342529d6f506712bf4cd7 = L.map(
                "map_a64865e79c5342529d6f506712bf4cd7",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_2ed9d419654a4a60b27082d380e9ea8b = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_a64865e79c5342529d6f506712bf4cd7);
        
    
            var choropleth_bb9125a1a023414197cd06714012bf00 = L.featureGroup(
                {}
            ).addTo(map_a64865e79c5342529d6f506712bf4cd7);
        
    
        function geo_json_32e33d8545104f7b88f4f32a3509811f_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_32e33d8545104f7b88f4f32a3509811f_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_32e33d8545104f7b88f4f32a3509811f = L.geoJson(null, {
                onEachFeature: geo_json_32e33d8545104f7b88f4f32a3509811f_onEachFeature,
            
                style: geo_json_32e33d8545104f7b88f4f32a3509811f_styler,
        });

        function geo_json_32e33d8545104f7b88f4f32a3509811f_add (data) {
            geo_json_32e33d8545104f7b88f4f32a3509811f
                .addData(data)
                .addTo(choropleth_bb9125a1a023414197cd06714012bf00);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_32e33d8545104f7b88f4f32a3509811f_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_6e3828fc35d5474f814dc3d4d936d1e3 = {};

    
    color_map_6e3828fc35d5474f814dc3d4d936d1e3.color = d3.scale.threshold()
              .domain([0.0, 18.793587174348698, 37.587174348697395, 56.38076152304609, 75.17434869739479, 93.96793587174349, 112.76152304609218, 131.5551102204409, 150.34869739478958, 169.14228456913827, 187.93587174348698, 206.72945891783567, 225.52304609218436, 244.31663326653307, 263.1102204408818, 281.90380761523045, 300.69739478957916, 319.4909819639279, 338.28456913827654, 357.07815631262525, 375.87174348697397, 394.6653306613226, 413.45891783567134, 432.25250501002006, 451.0460921843687, 469.83967935871743, 488.63326653306615, 507.4268537074148, 526.2204408817636, 545.0140280561122, 563.8076152304609, 582.6012024048097, 601.3947895791583, 620.188376753507, 638.9819639278558, 657.7755511022044, 676.5691382765531, 695.3627254509018, 714.1563126252505, 732.9498997995992, 751.7434869739479, 770.5370741482966, 789.3306613226453, 808.124248496994, 826.9178356713427, 845.7114228456913, 864.5050100200401, 883.2985971943888, 902.0921843687374, 920.8857715430862, 939.6793587174349, 958.4729458917835, 977.2665330661323, 996.060120240481, 1014.8537074148296, 1033.6472945891783, 1052.4408817635272, 1071.2344689378758, 1090.0280561122245, 1108.8216432865731, 1127.6152304609218, 1146.4088176352705, 1165.2024048096193, 1183.995991983968, 1202.7895791583167, 1221.5831663326653, 1240.376753507014, 1259.1703406813626, 1277.9639278557115, 1296.7575150300602, 1315.5511022044088, 1334.3446893787575, 1353.1382765531062, 1371.9318637274548, 1390.7254509018037, 1409.5190380761524, 1428.312625250501, 1447.1062124248497, 1465.8997995991983, 1484.693386773547, 1503.4869739478959, 1522.2805611222445, 1541.0741482965932, 1559.8677354709419, 1578.6613226452905, 1597.4549098196392, 1616.248496993988, 1635.0420841683367, 1653.8356713426854, 1672.629258517034, 1691.4228456913827, 1710.2164328657316, 1729.0100200400802, 1747.803607214429, 1766.5971943887776, 1785.3907815631262, 1804.1843687374749, 1822.9779559118238, 1841.7715430861724, 1860.565130260521, 1879.3587174348697, 1898.1523046092184, 1916.945891783567, 1935.739478957916, 1954.5330661322646, 1973.3266533066133, 1992.120240480962, 2010.9138276553106, 2029.7074148296592, 2048.501002004008, 2067.2945891783565, 2086.0881763527054, 2104.8817635270543, 2123.6753507014027, 2142.4689378757516, 2161.2625250501, 2180.056112224449, 2198.8496993987974, 2217.6432865731463, 2236.436873747495, 2255.2304609218436, 2274.0240480961925, 2292.817635270541, 2311.61122244489, 2330.4048096192387, 2349.198396793587, 2367.991983967936, 2386.7855711422844, 2405.5791583166333, 2424.3727454909817, 2443.1663326653306, 2461.9599198396795, 2480.753507014028, 2499.547094188377, 2518.3406813627253, 2537.134268537074, 2555.927855711423, 2574.7214428857715, 2593.5150300601204, 2612.308617234469, 2631.1022044088177, 2649.8957915831666, 2668.689378757515, 2687.482965931864, 2706.2765531062123, 2725.070140280561, 2743.8637274549096, 2762.6573146292585, 2781.4509018036074, 2800.244488977956, 2819.0380761523047, 2837.831663326653, 2856.625250501002, 2875.418837675351, 2894.2124248496993, 2913.0060120240482, 2931.7995991983967, 2950.5931863727455, 2969.386773547094, 2988.180360721443, 3006.9739478957918, 3025.76753507014, 3044.561122244489, 3063.3547094188375, 3082.1482965931864, 3100.9418837675353, 3119.7354709418837, 3138.5290581162326, 3157.322645290581, 3176.11623246493, 3194.9098196392783, 3213.703406813627, 3232.496993987976, 3251.2905811623245, 3270.0841683366734, 3288.877755511022, 3307.6713426853707, 3326.4649298597196, 3345.258517034068, 3364.052104208417, 3382.8456913827654, 3401.6392785571143, 3420.432865731463, 3439.2264529058116, 3458.0200400801605, 3476.813627254509, 3495.607214428858, 3514.400801603206, 3533.194388777555, 3551.987975951904, 3570.7815631262524, 3589.5751503006013, 3608.3687374749497, 3627.1623246492986, 3645.9559118236475, 3664.749498997996, 3683.543086172345, 3702.3366733466933, 3721.130260521042, 3739.9238476953906, 3758.7174348697395, 3777.5110220440883, 3796.304609218437, 3815.0981963927857, 3833.891783567134, 3852.685370741483, 3871.478957915832, 3890.2725450901803, 3909.066132264529, 3927.8597194388776, 3946.6533066132265, 3965.446893787575, 3984.240480961924, 4003.0340681362727, 4021.827655310621, 4040.62124248497, 4059.4148296593185, 4078.2084168336673, 4097.002004008016, 4115.795591182365, 4134.589178356713, 4153.382765531062, 4172.176352705411, 4190.969939879759, 4209.763527054109, 4228.557114228457, 4247.3507014028055, 4266.144288577154, 4284.937875751503, 4303.731462925852, 4322.5250501002, 4341.3186372745495, 4360.112224448898, 4378.905811623246, 4397.699398797595, 4416.492985971944, 4435.2865731462925, 4454.080160320641, 4472.87374749499, 4491.667334669339, 4510.460921843687, 4529.2545090180365, 4548.048096192385, 4566.841683366733, 4585.635270541082, 4604.428857715431, 4623.22244488978, 4642.016032064128, 4660.809619238477, 4679.603206412826, 4698.396793587174, 4717.190380761523, 4735.983967935872, 4754.77755511022, 4773.571142284569, 4792.364729458918, 4811.158316633267, 4829.951903807615, 4848.7454909819635, 4867.539078156313, 4886.332665330661, 4905.12625250501, 4923.919839679359, 4942.7134268537075, 4961.507014028056, 4980.300601202405, 4999.094188376754, 5017.887775551102, 5036.6813627254505, 5055.4749498998, 5074.268537074148, 5093.062124248497, 5111.855711422846, 5130.6492985971945, 5149.442885771543, 5168.236472945891, 5187.030060120241, 5205.823647294589, 5224.617234468938, 5243.410821643287, 5262.204408817635, 5280.997995991984, 5299.791583166333, 5318.5851703406815, 5337.37875751503, 5356.172344689378, 5374.965931863728, 5393.759519038076, 5412.553106212425, 5431.346693386774, 5450.140280561122, 5468.933867735471, 5487.727454909819, 5506.521042084169, 5525.314629258517, 5544.108216432865, 5562.901803607215, 5581.695390781563, 5600.488977955912, 5619.28256513026, 5638.076152304609, 5656.869739478958, 5675.663326653306, 5694.456913827656, 5713.250501002004, 5732.0440881763525, 5750.837675350702, 5769.63126252505, 5788.424849699399, 5807.218436873747, 5826.0120240480965, 5844.805611222445, 5863.599198396793, 5882.392785571143, 5901.186372745491, 5919.9799599198395, 5938.773547094188, 5957.567134268537, 5976.360721442886, 5995.154308617234, 6013.9478957915835, 6032.741482965932, 6051.53507014028, 6070.32865731463, 6089.122244488978, 6107.915831663327, 6126.709418837675, 6145.503006012024, 6164.296593186373, 6183.090180360721, 6201.883767535071, 6220.677354709419, 6239.470941883767, 6258.264529058116, 6277.058116232465, 6295.851703406814, 6314.645290581162, 6333.438877755511, 6352.23246492986, 6371.026052104208, 6389.819639278557, 6408.613226452906, 6427.406813627254, 6446.200400801603, 6464.993987975952, 6483.787575150301, 6502.581162324649, 6521.374749498998, 6540.168336673347, 6558.961923847695, 6577.755511022044, 6596.549098196393, 6615.3426853707415, 6634.13627254509, 6652.929859719439, 6671.723446893788, 6690.517034068136, 6709.310621242485, 6728.104208416834, 6746.897795591182, 6765.691382765531, 6784.48496993988, 6803.2785571142285, 6822.072144288577, 6840.865731462926, 6859.659318637275, 6878.452905811623, 6897.246492985972, 6916.040080160321, 6934.833667334669, 6953.627254509018, 6972.420841683367, 6991.214428857716, 7010.008016032064, 7028.801603206412, 7047.595190380762, 7066.38877755511, 7085.182364729459, 7103.975951903808, 7122.769539078156, 7141.563126252505, 7160.356713426853, 7179.150300601203, 7197.943887775551, 7216.7374749498995, 7235.531062124249, 7254.324649298597, 7273.118236472946, 7291.911823647295, 7310.705410821643, 7329.498997995992, 7348.29258517034, 7367.08617234469, 7385.879759519038, 7404.6733466933865, 7423.466933867736, 7442.260521042084, 7461.054108216433, 7479.847695390781, 7498.6412825651305, 7517.434869739479, 7536.228456913827, 7555.022044088177, 7573.815631262525, 7592.609218436874, 7611.402805611222, 7630.196392785571, 7648.98997995992, 7667.783567134268, 7686.5771543086175, 7705.370741482966, 7724.164328657314, 7742.957915831664, 7761.751503006012, 7780.545090180361, 7799.338677354709, 7818.132264529058, 7836.925851703407, 7855.719438877755, 7874.513026052105, 7893.306613226453, 7912.100200400801, 7930.89378757515, 7949.687374749499, 7968.480961923848, 7987.274549098196, 8006.068136272545, 8024.861723446894, 8043.655310621242, 8062.448897795592, 8081.24248496994, 8100.0360721442885, 8118.829659318637, 8137.623246492986, 8156.416833667335, 8175.210420841683, 8194.004008016032, 8212.79759519038, 8231.59118236473, 8250.384769539078, 8269.178356713426, 8287.971943887776, 8306.765531062125, 8325.559118236473, 8344.352705410822, 8363.14629258517, 8381.939879759519, 8400.733466933867, 8419.527054108217, 8438.320641282566, 8457.114228456914, 8475.907815631263, 8494.701402805611, 8513.49498997996, 8532.288577154308, 8551.082164328658, 8569.875751503007, 8588.669338677355, 8607.462925851703, 8626.256513026052, 8645.0501002004, 8663.843687374749, 8682.637274549099, 8701.430861723447, 8720.224448897796, 8739.018036072144, 8757.811623246493, 8776.605210420841, 8795.39879759519, 8814.19238476954, 8832.985971943888, 8851.779559118237, 8870.573146292585, 8889.366733466934, 8908.160320641282, 8926.95390781563, 8945.74749498998, 8964.541082164329, 8983.334669338677, 9002.128256513026, 9020.921843687374, 9039.715430861723, 9058.509018036073, 9077.302605210421, 9096.09619238477, 9114.889779559118, 9133.683366733467, 9152.476953907815, 9171.270541082164, 9190.064128256514, 9208.857715430862, 9227.65130260521, 9246.44488977956, 9265.238476953908, 9284.032064128256, 9302.825651302604, 9321.619238476955, 9340.412825651303, 9359.206412825652, 9378.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_6e3828fc35d5474f814dc3d4d936d1e3.x = d3.scale.linear()
              .domain([0.0, 9378.0])
              .range([0, 400]);

    color_map_6e3828fc35d5474f814dc3d4d936d1e3.legend = L.control({position: 'topright'});
    color_map_6e3828fc35d5474f814dc3d4d936d1e3.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_6e3828fc35d5474f814dc3d4d936d1e3.legend.addTo(map_a64865e79c5342529d6f506712bf4cd7);

    color_map_6e3828fc35d5474f814dc3d4d936d1e3.xAxis = d3.svg.axis()
        .scale(color_map_6e3828fc35d5474f814dc3d4d936d1e3.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 1563.0, 3126.0, 4689.0, 6252.0, 7815.0, 9378.0]);

    color_map_6e3828fc35d5474f814dc3d4d936d1e3.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_6e3828fc35d5474f814dc3d4d936d1e3.g = color_map_6e3828fc35d5474f814dc3d4d936d1e3.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_6e3828fc35d5474f814dc3d4d936d1e3.g.selectAll("rect")
        .data(color_map_6e3828fc35d5474f814dc3d4d936d1e3.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_6e3828fc35d5474f814dc3d4d936d1e3.x(color_map_6e3828fc35d5474f814dc3d4d936d1e3.color.domain()[i - 1]) : color_map_6e3828fc35d5474f814dc3d4d936d1e3.x.range()[0],
            x1: i < color_map_6e3828fc35d5474f814dc3d4d936d1e3.color.domain().length ? color_map_6e3828fc35d5474f814dc3d4d936d1e3.x(color_map_6e3828fc35d5474f814dc3d4d936d1e3.color.domain()[i]) : color_map_6e3828fc35d5474f814dc3d4d936d1e3.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_6e3828fc35d5474f814dc3d4d936d1e3.g.call(color_map_6e3828fc35d5474f814dc3d4d936d1e3.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('10_40_CARLOS MINC BAUMFELD');

