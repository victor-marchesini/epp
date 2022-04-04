    
            var map_80f62b37299e46ceb7eea1e5d8f8401e = L.map(
                "map_80f62b37299e46ceb7eea1e5d8f8401e",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_f31df60c55464aee82c3a71a397c56b3 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_80f62b37299e46ceb7eea1e5d8f8401e);
        
    
            var choropleth_844bf697d25b4a10918d2b147fe6a9a0 = L.featureGroup(
                {}
            ).addTo(map_80f62b37299e46ceb7eea1e5d8f8401e);
        
    
        function geo_json_3111d7e5c9ac4f499338ecae5ddc75d6_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 439: case 369: case 419: case 368: case 356: case 457: case 454: case 409: case 406: case 890: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 377: case 472: case 470: case 474: case 446: case 392: case 351: case 333: case 396: case 385: case 361: case 327: case 330: case 360: case 337: case 445: case 429: case 458: case 389: case 384: case 414: case 476: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 423: case 431: case 349: case 342: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 346: case 347: case 471: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 370: case 511: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 374: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_3111d7e5c9ac4f499338ecae5ddc75d6_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_3111d7e5c9ac4f499338ecae5ddc75d6 = L.geoJson(null, {
                onEachFeature: geo_json_3111d7e5c9ac4f499338ecae5ddc75d6_onEachFeature,
            
                style: geo_json_3111d7e5c9ac4f499338ecae5ddc75d6_styler,
        });

        function geo_json_3111d7e5c9ac4f499338ecae5ddc75d6_add (data) {
            geo_json_3111d7e5c9ac4f499338ecae5ddc75d6
                .addData(data)
                .addTo(choropleth_844bf697d25b4a10918d2b147fe6a9a0);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_3111d7e5c9ac4f499338ecae5ddc75d6_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_12817530ff4847448b4357d3fdc4fb00 = {};

    
    color_map_12817530ff4847448b4357d3fdc4fb00.color = d3.scale.threshold()
              .domain([0.0, 21.5811623246493, 43.1623246492986, 64.7434869739479, 86.3246492985972, 107.90581162324649, 129.4869739478958, 151.0681362725451, 172.6492985971944, 194.2304609218437, 215.81162324649299, 237.3927855711423, 258.9739478957916, 280.5551102204409, 302.1362725450902, 323.71743486973946, 345.2985971943888, 366.8797595190381, 388.4609218436874, 410.04208416833666, 431.62324649298597, 453.2044088176353, 474.7855711422846, 496.36673346693385, 517.9478957915832, 539.5290581162325, 561.1102204408818, 582.6913827655311, 604.2725450901804, 625.8537074148296, 647.4348697394789, 669.0160320641282, 690.5971943887776, 712.1783567134269, 733.7595190380762, 755.3406813627255, 776.9218436873748, 798.503006012024, 820.0841683366733, 841.6653306613226, 863.2464929859719, 884.8276553106213, 906.4088176352706, 927.9899799599199, 949.5711422845692, 971.1523046092184, 992.7334669338677, 1014.314629258517, 1035.8957915831663, 1057.4769539078156, 1079.058116232465, 1100.6392785571143, 1122.2204408817636, 1143.801603206413, 1165.3827655310622, 1186.9639278557115, 1208.5450901803608, 1230.12625250501, 1251.7074148296592, 1273.2885771543085, 1294.8697394789579, 1316.4509018036072, 1338.0320641282565, 1359.6132264529058, 1381.194388777555, 1402.7755511022044, 1424.3567134268537, 1445.937875751503, 1467.5190380761524, 1489.1002004008017, 1510.681362725451, 1532.2625250501003, 1553.8436873747496, 1575.4248496993987, 1597.006012024048, 1618.5871743486973, 1640.1683366733466, 1661.749498997996, 1683.3306613226453, 1704.9118236472946, 1726.4929859719439, 1748.0741482965932, 1769.6553106212425, 1791.2364729458918, 1812.8176352705411, 1834.3987975951904, 1855.9799599198398, 1877.561122244489, 1899.1422845691384, 1920.7234468937875, 1942.3046092184368, 1963.885771543086, 1985.4669338677354, 2007.0480961923847, 2028.629258517034, 2050.2104208416836, 2071.7915831663327, 2093.3727454909817, 2114.9539078156313, 2136.5350701402804, 2158.11623246493, 2179.697394789579, 2201.2785571142285, 2222.8597194388776, 2244.440881763527, 2266.0220440881762, 2287.603206412826, 2309.184368737475, 2330.7655310621244, 2352.3466933867735, 2373.927855711423, 2395.509018036072, 2417.0901803607217, 2438.6713426853707, 2460.25250501002, 2481.8336673346694, 2503.4148296593185, 2524.995991983968, 2546.577154308617, 2568.1583166332666, 2589.7394789579157, 2611.3206412825652, 2632.9018036072143, 2654.482965931864, 2676.064128256513, 2697.6452905811625, 2719.2264529058116, 2740.807615230461, 2762.38877755511, 2783.9699398797593, 2805.551102204409, 2827.132264529058, 2848.7134268537075, 2870.2945891783565, 2891.875751503006, 2913.456913827655, 2935.0380761523047, 2956.619238476954, 2978.2004008016033, 2999.7815631262524, 3021.362725450902, 3042.943887775551, 3064.5250501002006, 3086.1062124248497, 3107.687374749499, 3129.2685370741483, 3150.8496993987974, 3172.430861723447, 3194.012024048096, 3215.5931863727455, 3237.1743486973946, 3258.755511022044, 3280.3366733466933, 3301.917835671343, 3323.498997995992, 3345.0801603206414, 3366.6613226452905, 3388.24248496994, 3409.823647294589, 3431.4048096192387, 3452.9859719438878, 3474.567134268537, 3496.1482965931864, 3517.7294589178355, 3539.310621242485, 3560.891783567134, 3582.4729458917836, 3604.0541082164327, 3625.6352705410823, 3647.2164328657313, 3668.797595190381, 3690.37875751503, 3711.9599198396795, 3733.5410821643286, 3755.122244488978, 3776.703406813627, 3798.2845691382768, 3819.865731462926, 3841.446893787575, 3863.0280561122245, 3884.6092184368736, 3906.190380761523, 3927.771543086172, 3949.3527054108217, 3970.933867735471, 3992.5150300601204, 4014.0961923847694, 4035.677354709419, 4057.258517034068, 4078.8396793587176, 4100.420841683367, 4122.002004008016, 4143.583166332665, 4165.164328657314, 4186.7454909819635, 4208.3266533066135, 4229.907815631263, 4251.488977955912, 4273.070140280561, 4294.651302605211, 4316.23246492986, 4337.813627254509, 4359.394789579158, 4380.975951903808, 4402.557114228457, 4424.138276553106, 4445.719438877755, 4467.300601202405, 4488.881763527054, 4510.462925851703, 4532.0440881763525, 4553.625250501002, 4575.206412825652, 4596.787575150301, 4618.36873747495, 4639.949899799599, 4661.531062124249, 4683.112224448898, 4704.693386773547, 4726.274549098196, 4747.855711422846, 4769.436873747495, 4791.018036072144, 4812.599198396793, 4834.180360721443, 4855.761523046092, 4877.3426853707415, 4898.923847695391, 4920.50501002004, 4942.08617234469, 4963.667334669339, 4985.248496993988, 5006.829659318637, 5028.410821643287, 5049.991983967936, 5071.573146292585, 5093.154308617234, 5114.735470941884, 5136.316633266533, 5157.897795591182, 5179.478957915831, 5201.060120240481, 5222.6412825651305, 5244.22244488978, 5265.803607214429, 5287.384769539078, 5308.965931863728, 5330.547094188377, 5352.128256513026, 5373.709418837675, 5395.290581162325, 5416.871743486974, 5438.452905811623, 5460.034068136272, 5481.615230460922, 5503.196392785571, 5524.77755511022, 5546.3587174348695, 5567.939879759519, 5589.521042084169, 5611.102204408818, 5632.683366733467, 5654.264529058116, 5675.845691382766, 5697.426853707415, 5719.008016032064, 5740.589178356713, 5762.170340681363, 5783.751503006012, 5805.332665330661, 5826.91382765531, 5848.49498997996, 5870.076152304609, 5891.6573146292585, 5913.238476953908, 5934.819639278557, 5956.400801603207, 5977.981963927856, 5999.563126252505, 6021.144288577154, 6042.725450901804, 6064.306613226453, 6085.887775551102, 6107.468937875751, 6129.050100200401, 6150.63126252505, 6172.212424849699, 6193.793587174348, 6215.374749498998, 6236.9559118236475, 6258.537074148297, 6280.118236472946, 6301.699398797595, 6323.280561122245, 6344.861723446894, 6366.442885771543, 6388.024048096192, 6409.605210420842, 6431.186372745491, 6452.76753507014, 6474.348697394789, 6495.929859719439, 6517.511022044088, 6539.092184368737, 6560.6733466933865, 6582.2545090180365, 6603.835671342686, 6625.416833667335, 6646.997995991984, 6668.579158316633, 6690.160320641283, 6711.741482965932, 6733.322645290581, 6754.90380761523, 6776.48496993988, 6798.066132264529, 6819.647294589178, 6841.228456913827, 6862.809619238477, 6884.390781563126, 6905.9719438877755, 6927.553106212425, 6949.134268537074, 6970.715430861724, 6992.296593186373, 7013.877755511022, 7035.458917835671, 7057.040080160321, 7078.62124248497, 7100.202404809619, 7121.783567134268, 7143.364729458918, 7164.945891783567, 7186.527054108216, 7208.108216432865, 7229.689378757515, 7251.2705410821645, 7272.851703406814, 7294.432865731463, 7316.014028056112, 7337.595190380762, 7359.176352705411, 7380.75751503006, 7402.338677354709, 7423.919839679359, 7445.501002004008, 7467.082164328657, 7488.663326653306, 7510.244488977956, 7531.825651302605, 7553.406813627254, 7574.9879759519035, 7596.5691382765535, 7618.150300601203, 7639.731462925852, 7661.312625250501, 7682.89378757515, 7704.4749498998, 7726.056112224449, 7747.637274549098, 7769.218436873747, 7790.799599198397, 7812.380761523046, 7833.961923847695, 7855.543086172344, 7877.124248496994, 7898.705410821643, 7920.2865731462925, 7941.867735470942, 7963.448897795592, 7985.030060120241, 8006.61122244489, 8028.192384769539, 8049.773547094188, 8071.354709418838, 8092.935871743487, 8114.517034068136, 8136.098196392785, 8157.679358717435, 8179.260521042084, 8200.841683366734, 8222.422845691382, 8244.004008016032, 8265.58517034068, 8287.16633266533, 8308.74749498998, 8330.328657314629, 8351.909819639279, 8373.490981963927, 8395.072144288577, 8416.653306613227, 8438.234468937875, 8459.815631262525, 8481.396793587175, 8502.977955911823, 8524.559118236473, 8546.140280561121, 8567.721442885771, 8589.302605210421, 8610.88376753507, 8632.46492985972, 8654.04609218437, 8675.627254509018, 8697.208416833668, 8718.789579158316, 8740.370741482966, 8761.951903807616, 8783.533066132264, 8805.114228456914, 8826.695390781562, 8848.276553106212, 8869.857715430862, 8891.43887775551, 8913.02004008016, 8934.60120240481, 8956.182364729459, 8977.763527054109, 8999.344689378757, 9020.925851703407, 9042.507014028057, 9064.088176352705, 9085.669338677355, 9107.250501002003, 9128.831663326653, 9150.412825651303, 9171.993987975951, 9193.575150300601, 9215.156312625251, 9236.7374749499, 9258.31863727455, 9279.899799599198, 9301.480961923848, 9323.062124248498, 9344.643286573146, 9366.224448897796, 9387.805611222444, 9409.386773547094, 9430.967935871744, 9452.549098196392, 9474.130260521042, 9495.711422845692, 9517.29258517034, 9538.87374749499, 9560.454909819638, 9582.036072144288, 9603.617234468938, 9625.198396793587, 9646.779559118237, 9668.360721442887, 9689.941883767535, 9711.523046092185, 9733.104208416833, 9754.685370741483, 9776.266533066133, 9797.847695390781, 9819.428857715431, 9841.01002004008, 9862.59118236473, 9884.17234468938, 9905.753507014027, 9927.334669338677, 9948.915831663327, 9970.496993987976, 9992.078156312626, 10013.659318637274, 10035.240480961924, 10056.821643286574, 10078.402805611222, 10099.983967935872, 10121.56513026052, 10143.14629258517, 10164.72745490982, 10186.308617234468, 10207.889779559118, 10229.470941883768, 10251.052104208416, 10272.633266533066, 10294.214428857715, 10315.795591182365, 10337.376753507015, 10358.957915831663, 10380.539078156313, 10402.120240480963, 10423.701402805611, 10445.282565130261, 10466.86372745491, 10488.44488977956, 10510.02605210421, 10531.607214428857, 10553.188376753507, 10574.769539078156, 10596.350701402805, 10617.931863727455, 10639.513026052104, 10661.094188376754, 10682.675350701404, 10704.256513026052, 10725.837675350702, 10747.41883767535, 10769.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_12817530ff4847448b4357d3fdc4fb00.x = d3.scale.linear()
              .domain([0.0, 10769.0])
              .range([0, 400]);

    color_map_12817530ff4847448b4357d3fdc4fb00.legend = L.control({position: 'topright'});
    color_map_12817530ff4847448b4357d3fdc4fb00.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_12817530ff4847448b4357d3fdc4fb00.legend.addTo(map_80f62b37299e46ceb7eea1e5d8f8401e);

    color_map_12817530ff4847448b4357d3fdc4fb00.xAxis = d3.svg.axis()
        .scale(color_map_12817530ff4847448b4357d3fdc4fb00.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 1794.8333333333333, 3589.6666666666665, 5384.5, 7179.333333333333, 8974.166666666666, 10769.0]);

    color_map_12817530ff4847448b4357d3fdc4fb00.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_12817530ff4847448b4357d3fdc4fb00.g = color_map_12817530ff4847448b4357d3fdc4fb00.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_12817530ff4847448b4357d3fdc4fb00.g.selectAll("rect")
        .data(color_map_12817530ff4847448b4357d3fdc4fb00.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_12817530ff4847448b4357d3fdc4fb00.x(color_map_12817530ff4847448b4357d3fdc4fb00.color.domain()[i - 1]) : color_map_12817530ff4847448b4357d3fdc4fb00.x.range()[0],
            x1: i < color_map_12817530ff4847448b4357d3fdc4fb00.color.domain().length ? color_map_12817530ff4847448b4357d3fdc4fb00.x(color_map_12817530ff4847448b4357d3fdc4fb00.color.domain()[i]) : color_map_12817530ff4847448b4357d3fdc4fb00.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_12817530ff4847448b4357d3fdc4fb00.g.call(color_map_12817530ff4847448b4357d3fdc4fb00.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('');
