    
            var map_7a2e418c1c1840f483703d9b8096a94c = L.map(
                "map_7a2e418c1c1840f483703d9b8096a94c",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_4987c8bbfe4b4e8b8f39af78d2a4e98b = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_7a2e418c1c1840f483703d9b8096a94c);
        
    
            var choropleth_0ed407ee45044cd4b4de2f93bfa7a1d3 = L.featureGroup(
                {}
            ).addTo(map_7a2e418c1c1840f483703d9b8096a94c);
        
    
        function geo_json_53af45a92ac94b2aa4ce659777f76239_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 439: case 377: case 418: case 472: case 470: case 446: case 392: case 351: case 333: case 396: case 419: case 385: case 361: case 360: case 337: case 459: case 463: case 384: case 476: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 474: case 369: case 346: case 368: case 356: case 457: case 454: case 429: case 409: case 471: case 458: case 389: case 414: case 406: case 890: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 423: case 431: case 349: case 342: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 347: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 370: case 511: case 374: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_53af45a92ac94b2aa4ce659777f76239_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_53af45a92ac94b2aa4ce659777f76239 = L.geoJson(null, {
                onEachFeature: geo_json_53af45a92ac94b2aa4ce659777f76239_onEachFeature,
            
                style: geo_json_53af45a92ac94b2aa4ce659777f76239_styler,
        });

        function geo_json_53af45a92ac94b2aa4ce659777f76239_add (data) {
            geo_json_53af45a92ac94b2aa4ce659777f76239
                .addData(data)
                .addTo(choropleth_0ed407ee45044cd4b4de2f93bfa7a1d3);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_53af45a92ac94b2aa4ce659777f76239_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_d2ed59a2b6b14fcd8212943f29439d82 = {};

    
    color_map_d2ed59a2b6b14fcd8212943f29439d82.color = d3.scale.threshold()
              .domain([0.0, 10.376753507014028, 20.753507014028056, 31.130260521042086, 41.50701402805611, 51.88376753507014, 62.26052104208417, 72.6372745490982, 83.01402805611222, 93.39078156312625, 103.76753507014028, 114.14428857715431, 124.52104208416834, 134.89779559118236, 145.2745490981964, 155.65130260521042, 166.02805611222445, 176.40480961923848, 186.7815631262525, 197.15831663326654, 207.53507014028057, 217.9118236472946, 228.28857715430863, 238.66533066132266, 249.0420841683367, 259.4188376753507, 269.7955911823647, 280.17234468937875, 290.5490981963928, 300.9258517034068, 311.30260521042084, 321.67935871743487, 332.0561122244489, 342.4328657314629, 352.80961923847696, 363.186372745491, 373.563126252505, 383.93987975951904, 394.3166332665331, 404.6933867735471, 415.07014028056113, 425.44689378757516, 435.8236472945892, 446.2004008016032, 456.57715430861725, 466.9539078156313, 477.3306613226453, 487.70741482965934, 498.0841683366734, 508.4609218436874, 518.8376753507014, 529.2144288577155, 539.5911823647294, 549.9679358717435, 560.3446893787575, 570.7214428857716, 581.0981963927856, 591.4749498997996, 601.8517034068136, 612.2284569138277, 622.6052104208417, 632.9819639278558, 643.3587174348697, 653.7354709418838, 664.1122244488978, 674.4889779559119, 684.8657314629259, 695.2424849699398, 705.6192384769539, 715.9959919839679, 726.372745490982, 736.7494989979959, 747.12625250501, 757.503006012024, 767.8797595190381, 778.2565130260521, 788.6332665330661, 799.0100200400801, 809.3867735470942, 819.7635270541082, 830.1402805611223, 840.5170340681362, 850.8937875751503, 861.2705410821643, 871.6472945891784, 882.0240480961924, 892.4008016032064, 902.7775551102204, 913.1543086172345, 923.5310621242485, 933.9078156312626, 944.2845691382765, 954.6613226452906, 965.0380761523046, 975.4148296593187, 985.7915831663327, 996.1683366733467, 1006.5450901803607, 1016.9218436873748, 1027.2985971943888, 1037.6753507014027, 1048.0521042084167, 1058.428857715431, 1068.805611222445, 1079.1823647294589, 1089.5591182364728, 1099.935871743487, 1110.312625250501, 1120.689378757515, 1131.066132264529, 1141.4428857715432, 1151.8196392785571, 1162.196392785571, 1172.573146292585, 1182.9498997995993, 1193.3266533066133, 1203.7034068136272, 1214.0801603206412, 1224.4569138276554, 1234.8336673346694, 1245.2104208416833, 1255.5871743486973, 1265.9639278557115, 1276.3406813627255, 1286.7174348697395, 1297.0941883767534, 1307.4709418837676, 1317.8476953907816, 1328.2244488977956, 1338.6012024048096, 1348.9779559118238, 1359.3547094188377, 1369.7314629258517, 1380.1082164328657, 1390.4849699398796, 1400.8617234468938, 1411.2384769539078, 1421.6152304609218, 1431.9919839679358, 1442.36873747495, 1452.745490981964, 1463.122244488978, 1473.4989979959919, 1483.875751503006, 1494.25250501002, 1504.629258517034, 1515.006012024048, 1525.3827655310622, 1535.7595190380762, 1546.1362725450902, 1556.5130260521041, 1566.8897795591183, 1577.2665330661323, 1587.6432865731463, 1598.0200400801602, 1608.3967935871744, 1618.7735470941884, 1629.1503006012024, 1639.5270541082164, 1649.9038076152306, 1660.2805611222445, 1670.6573146292585, 1681.0340681362725, 1691.4108216432867, 1701.7875751503007, 1712.1643286573146, 1722.5410821643286, 1732.9178356713426, 1743.2945891783568, 1753.6713426853707, 1764.0480961923847, 1774.4248496993987, 1784.801603206413, 1795.1783567134269, 1805.5551102204408, 1815.9318637274548, 1826.308617234469, 1836.685370741483, 1847.062124248497, 1857.438877755511, 1867.8156312625251, 1878.192384769539, 1888.569138276553, 1898.945891783567, 1909.3226452905812, 1919.6993987975952, 1930.0761523046092, 1940.4529058116232, 1950.8296593186374, 1961.2064128256513, 1971.5831663326653, 1981.9599198396793, 1992.3366733466935, 2002.7134268537075, 2013.0901803607214, 2023.4669338677354, 2033.8436873747496, 2044.2204408817636, 2054.5971943887776, 2064.9739478957918, 2075.3507014028055, 2085.7274549098197, 2096.1042084168334, 2106.4809619238476, 2116.857715430862, 2127.2344689378756, 2137.61122244489, 2147.987975951904, 2158.3647294589177, 2168.741482965932, 2179.1182364729457, 2189.49498997996, 2199.871743486974, 2210.248496993988, 2220.625250501002, 2231.0020040080162, 2241.37875751503, 2251.755511022044, 2262.132264529058, 2272.509018036072, 2282.8857715430863, 2293.2625250501, 2303.6392785571143, 2314.0160320641285, 2324.392785571142, 2334.7695390781564, 2345.14629258517, 2355.5230460921844, 2365.8997995991986, 2376.2765531062123, 2386.6533066132265, 2397.0300601202407, 2407.4068136272545, 2417.7835671342687, 2428.1603206412824, 2438.5370741482966, 2448.913827655311, 2459.2905811623245, 2469.6673346693387, 2480.0440881763525, 2490.4208416833667, 2500.797595190381, 2511.1743486973946, 2521.551102204409, 2531.927855711423, 2542.304609218437, 2552.681362725451, 2563.0581162324647, 2573.434869739479, 2583.811623246493, 2594.188376753507, 2604.565130260521, 2614.9418837675353, 2625.318637274549, 2635.695390781563, 2646.072144288577, 2656.448897795591, 2666.8256513026054, 2677.202404809619, 2687.5791583166333, 2697.9559118236475, 2708.3326653306613, 2718.7094188376755, 2729.086172344689, 2739.4629258517034, 2749.8396793587176, 2760.2164328657313, 2770.5931863727455, 2780.9699398797593, 2791.3466933867735, 2801.7234468937877, 2812.1002004008014, 2822.4769539078156, 2832.85370741483, 2843.2304609218436, 2853.607214428858, 2863.9839679358715, 2874.3607214428857, 2884.7374749499, 2895.1142284569137, 2905.490981963928, 2915.867735470942, 2926.244488977956, 2936.62124248497, 2946.9979959919838, 2957.374749498998, 2967.751503006012, 2978.128256513026, 2988.50501002004, 2998.8817635270543, 3009.258517034068, 3019.6352705410823, 3030.012024048096, 3040.38877755511, 3050.7655310621244, 3061.142284569138, 3071.5190380761524, 3081.8957915831666, 3092.2725450901803, 3102.6492985971945, 3113.0260521042082, 3123.4028056112224, 3133.7795591182366, 3144.1563126252504, 3154.5330661322646, 3164.9098196392783, 3175.2865731462925, 3185.6633266533067, 3196.0400801603205, 3206.4168336673347, 3216.793587174349, 3227.1703406813626, 3237.547094188377, 3247.9238476953906, 3258.300601202405, 3268.677354709419, 3279.0541082164327, 3289.430861723447, 3299.807615230461, 3310.184368737475, 3320.561122244489, 3330.937875751503, 3341.314629258517, 3351.691382765531, 3362.068136272545, 3372.444889779559, 3382.8216432865734, 3393.198396793587, 3403.5751503006013, 3413.951903807615, 3424.3286573146293, 3434.7054108216435, 3445.082164328657, 3455.4589178356714, 3465.835671342685, 3476.2124248496993, 3486.5891783567135, 3496.9659318637273, 3507.3426853707415, 3517.7194388777557, 3528.0961923847694, 3538.4729458917836, 3548.8496993987974, 3559.2264529058116, 3569.603206412826, 3579.9799599198395, 3590.3567134268537, 3600.733466933868, 3611.1102204408817, 3621.486973947896, 3631.8637274549096, 3642.240480961924, 3652.617234468938, 3662.9939879759518, 3673.370741482966, 3683.74749498998, 3694.124248496994, 3704.501002004008, 3714.877755511022, 3725.254509018036, 3735.6312625250503, 3746.008016032064, 3756.384769539078, 3766.7615230460924, 3777.138276553106, 3787.5150300601204, 3797.891783567134, 3808.2685370741483, 3818.6452905811625, 3829.0220440881762, 3839.3987975951904, 3849.775551102204, 3860.1523046092184, 3870.5290581162326, 3880.9058116232463, 3891.2825651302605, 3901.6593186372747, 3912.0360721442885, 3922.4128256513027, 3932.7895791583164, 3943.1663326653306, 3953.543086172345, 3963.9198396793586, 3974.296593186373, 3984.673346693387, 3995.0501002004007, 4005.426853707415, 4015.8036072144287, 4026.180360721443, 4036.557114228457, 4046.933867735471, 4057.310621242485, 4067.687374749499, 4078.064128256513, 4088.440881763527, 4098.817635270541, 4109.194388777555, 4119.571142284569, 4129.9478957915835, 4140.324649298597, 4150.701402805611, 4161.078156312626, 4171.454909819639, 4181.831663326653, 4192.208416833667, 4202.5851703406815, 4212.961923847695, 4223.338677354709, 4233.715430861724, 4244.092184368737, 4254.468937875751, 4264.845691382766, 4275.22244488978, 4285.599198396793, 4295.975951903808, 4306.352705410822, 4316.7294589178355, 4327.10621242485, 4337.482965931864, 4347.859719438878, 4358.236472945891, 4368.613226452906, 4378.98997995992, 4389.3667334669335, 4399.743486973948, 4410.120240480962, 4420.496993987976, 4430.87374749499, 4441.250501002004, 4451.627254509018, 4462.0040080160325, 4472.380761523046, 4482.75751503006, 4493.134268537074, 4503.511022044088, 4513.887775551102, 4524.264529058116, 4534.6412825651305, 4545.018036072144, 4555.394789579158, 4565.771543086173, 4576.148296593186, 4586.5250501002, 4596.901803607215, 4607.2785571142285, 4617.655310621242, 4628.032064128257, 4638.408817635271, 4648.785571142284, 4659.162324649298, 4669.539078156313, 4679.915831663327, 4690.29258517034, 4700.669338677355, 4711.046092184369, 4721.4228456913825, 4731.799599198397, 4742.176352705411, 4752.553106212425, 4762.929859719439, 4773.306613226453, 4783.683366733467, 4794.060120240481, 4804.436873747495, 4814.813627254509, 4825.190380761523, 4835.567134268537, 4845.943887775551, 4856.320641282565, 4866.697394789579, 4877.074148296593, 4887.450901803607, 4897.827655310622, 4908.204408817635, 4918.581162324649, 4928.957915831664, 4939.3346693386775, 4949.711422845691, 4960.088176352705, 4970.46492985972, 4980.841683366733, 4991.218436873747, 5001.595190380762, 5011.9719438877755, 5022.348697394789, 5032.725450901804, 5043.102204408818, 5053.478957915831, 5063.855711422846, 5074.23246492986, 5084.609218436874, 5094.985971943888, 5105.362725450902, 5115.739478957916, 5126.116232464929, 5136.492985971944, 5146.869739478958, 5157.246492985972, 5167.623246492986, 5178.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_d2ed59a2b6b14fcd8212943f29439d82.x = d3.scale.linear()
              .domain([0.0, 5178.0])
              .range([0, 400]);

    color_map_d2ed59a2b6b14fcd8212943f29439d82.legend = L.control({position: 'topright'});
    color_map_d2ed59a2b6b14fcd8212943f29439d82.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_d2ed59a2b6b14fcd8212943f29439d82.legend.addTo(map_7a2e418c1c1840f483703d9b8096a94c);

    color_map_d2ed59a2b6b14fcd8212943f29439d82.xAxis = d3.svg.axis()
        .scale(color_map_d2ed59a2b6b14fcd8212943f29439d82.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 863.0, 1726.0, 2589.0, 3452.0, 4315.0, 5178.0]);

    color_map_d2ed59a2b6b14fcd8212943f29439d82.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_d2ed59a2b6b14fcd8212943f29439d82.g = color_map_d2ed59a2b6b14fcd8212943f29439d82.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_d2ed59a2b6b14fcd8212943f29439d82.g.selectAll("rect")
        .data(color_map_d2ed59a2b6b14fcd8212943f29439d82.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_d2ed59a2b6b14fcd8212943f29439d82.x(color_map_d2ed59a2b6b14fcd8212943f29439d82.color.domain()[i - 1]) : color_map_d2ed59a2b6b14fcd8212943f29439d82.x.range()[0],
            x1: i < color_map_d2ed59a2b6b14fcd8212943f29439d82.color.domain().length ? color_map_d2ed59a2b6b14fcd8212943f29439d82.x(color_map_d2ed59a2b6b14fcd8212943f29439d82.color.domain()[i]) : color_map_d2ed59a2b6b14fcd8212943f29439d82.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_d2ed59a2b6b14fcd8212943f29439d82.g.call(color_map_d2ed59a2b6b14fcd8212943f29439d82.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('');

