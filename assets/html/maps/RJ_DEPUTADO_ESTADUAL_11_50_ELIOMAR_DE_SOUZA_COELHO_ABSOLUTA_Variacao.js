    
            var map_7cd16caae8eb4b3eb492ed0e670444d4 = L.map(
                "map_7cd16caae8eb4b3eb492ed0e670444d4",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_dc960cbdbd77464da942ccada235ae54 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_7cd16caae8eb4b3eb492ed0e670444d4);
        
    
            var choropleth_cc35a1ec0bbc48258cded40b4680e494 = L.featureGroup(
                {}
            ).addTo(map_7cd16caae8eb4b3eb492ed0e670444d4);
        
    
        function geo_json_b2f72cb9085546b98eefd9a9f60b8ae6_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 447: case 466: case 473: case 455: case 442: case 436: case 444: case 419: case 433: case 430: case 510: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_b2f72cb9085546b98eefd9a9f60b8ae6_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_b2f72cb9085546b98eefd9a9f60b8ae6 = L.geoJson(null, {
                onEachFeature: geo_json_b2f72cb9085546b98eefd9a9f60b8ae6_onEachFeature,
            
                style: geo_json_b2f72cb9085546b98eefd9a9f60b8ae6_styler,
        });

        function geo_json_b2f72cb9085546b98eefd9a9f60b8ae6_add (data) {
            geo_json_b2f72cb9085546b98eefd9a9f60b8ae6
                .addData(data)
                .addTo(choropleth_cc35a1ec0bbc48258cded40b4680e494);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_b2f72cb9085546b98eefd9a9f60b8ae6_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583 = {};

    
    color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.color = d3.scale.threshold()
              .domain([-6308.0, -6291.807615230461, -6275.615230460922, -6259.4228456913825, -6243.230460921844, -6227.038076152305, -6210.845691382766, -6194.653306613226, -6178.460921843687, -6162.268537074148, -6146.076152304609, -6129.883767535071, -6113.691382765531, -6097.498997995992, -6081.306613226453, -6065.114228456914, -6048.921843687374, -6032.7294589178355, -6016.537074148297, -6000.344689378758, -5984.152304609219, -5967.959919839679, -5951.76753507014, -5935.575150300601, -5919.382765531062, -5903.190380761523, -5886.997995991984, -5870.805611222445, -5854.613226452906, -5838.420841683367, -5822.228456913827, -5806.0360721442885, -5789.84368737475, -5773.651302605211, -5757.458917835671, -5741.266533066132, -5725.074148296593, -5708.881763527054, -5692.689378757515, -5676.496993987976, -5660.304609218437, -5644.112224448898, -5627.919839679359, -5611.727454909819, -5595.53507014028, -5579.3426853707415, -5563.150300601203, -5546.957915831663, -5530.765531062124, -5514.573146292585, -5498.380761523046, -5482.188376753507, -5465.9959919839675, -5449.803607214429, -5433.61122244489, -5417.418837675351, -5401.226452905812, -5385.034068136272, -5368.841683366733, -5352.6492985971945, -5336.456913827656, -5320.264529058116, -5304.072144288577, -5287.879759519038, -5271.687374749499, -5255.494989979959, -5239.302605210421, -5223.110220440882, -5206.917835671343, -5190.725450901804, -5174.533066132264, -5158.340681362725, -5142.148296593186, -5125.9559118236475, -5109.763527054109, -5093.571142284569, -5077.37875751503, -5061.186372745491, -5044.993987975952, -5028.801603206413, -5012.609218436874, -4996.416833667335, -4980.224448897796, -4964.032064128256, -4947.839679358717, -4931.647294589178, -4915.454909819639, -4899.2625250501005, -4883.070140280561, -4866.877755511022, -4850.685370741483, -4834.492985971944, -4818.300601202405, -4802.108216432865, -4785.915831663327, -4769.723446893788, -4753.531062124249, -4737.33867735471, -4721.14629258517, -4704.953907815631, -4688.761523046092, -4672.569138276553, -4656.376753507014, -4640.184368737475, -4623.991983967936, -4607.799599198397, -4591.607214428857, -4575.4148296593185, -4559.22244488978, -4543.030060120241, -4526.837675350702, -4510.645290581162, -4494.452905811623, -4478.260521042084, -4462.068136272545, -4445.8757515030065, -4429.683366733467, -4413.490981963928, -4397.298597194389, -4381.106212424849, -4364.91382765531, -4348.7214428857715, -4332.529058116233, -4316.336673346694, -4300.144288577154, -4283.951903807615, -4267.759519038076, -4251.567134268536, -4235.374749498998, -4219.182364729459, -4202.98997995992, -4186.797595190381, -4170.605210420841, -4154.412825651303, -4138.220440881763, -4122.0280561122245, -4105.835671342686, -4089.6432865731463, -4073.4509018036074, -4057.258517034068, -4041.066132264529, -4024.87374749499, -4008.681362725451, -3992.4889779559117, -3976.296593186373, -3960.1042084168334, -3943.9118236472946, -3927.7194388777557, -3911.5270541082164, -3895.3346693386775, -3879.142284569138, -3862.9498997995993, -3846.75751503006, -3830.565130260521, -3814.3727454909817, -3798.180360721443, -3781.987975951904, -3765.7955911823647, -3749.603206412826, -3733.4108216432865, -3717.2184368737476, -3701.0260521042082, -3684.8336673346694, -3668.64128256513, -3652.448897795591, -3636.2565130260523, -3620.064128256513, -3603.871743486974, -3587.6793587174348, -3571.486973947896, -3555.2945891783565, -3539.1022044088177, -3522.9098196392783, -3506.7174348697395, -3490.5250501002006, -3474.3326653306613, -3458.1402805611224, -3441.947895791583, -3425.755511022044, -3409.563126252505, -3393.370741482966, -3377.1783567134266, -3360.9859719438878, -3344.793587174349, -3328.6012024048096, -3312.4088176352707, -3296.2164328657313, -3280.0240480961925, -3263.831663326653, -3247.6392785571143, -3231.446893787575, -3215.254509018036, -3199.062124248497, -3182.869739478958, -3166.677354709419, -3150.4849699398796, -3134.2925851703408, -3118.1002004008014, -3101.9078156312626, -3085.7154308617232, -3069.5230460921844, -3053.3306613226455, -3037.138276553106, -3020.9458917835673, -3004.753507014028, -2988.561122244489, -2972.3687374749497, -2956.176352705411, -2939.9839679358715, -2923.7915831663327, -2907.599198396794, -2891.4068136272545, -2875.2144288577156, -2859.0220440881762, -2842.8296593186374, -2826.637274549098, -2810.444889779559, -2794.25250501002, -2778.060120240481, -2761.867735470942, -2745.6753507014027, -2729.482965931864, -2713.2905811623245, -2697.0981963927857, -2680.9058116232463, -2664.7134268537075, -2648.521042084168, -2632.3286573146293, -2616.1362725450904, -2599.943887775551, -2583.751503006012, -2567.559118236473, -2551.366733466934, -2535.1743486973946, -2518.9819639278558, -2502.7895791583164, -2486.5971943887776, -2470.4048096192387, -2454.2124248496993, -2438.0200400801605, -2421.827655310621, -2405.6352705410823, -2389.442885771543, -2373.250501002004, -2357.0581162324647, -2340.865731462926, -2324.673346693387, -2308.4809619238476, -2292.2885771543088, -2276.0961923847694, -2259.9038076152306, -2243.7114228456912, -2227.5190380761524, -2211.3266533066135, -2195.1342685370737, -2178.941883767535, -2162.749498997996, -2146.557114228457, -2130.364729458918, -2114.1723446893784, -2097.9799599198395, -2081.7875751503007, -2065.595190380762, -2049.402805611222, -2033.2104208416831, -2017.0180360721442, -2000.8256513026054, -1984.6332665330665, -1968.4408817635267, -1952.2484969939878, -1936.056112224449, -1919.86372745491, -1903.6713426853703, -1887.4789579158314, -1871.2865731462925, -1855.0941883767537, -1838.9018036072148, -1822.709418837675, -1806.5170340681361, -1790.3246492985973, -1774.1322645290584, -1757.9398797595186, -1741.7474949899797, -1725.5551102204408, -1709.362725450902, -1693.170340681363, -1676.9779559118233, -1660.7855711422844, -1644.5931863727455, -1628.4008016032067, -1612.208416833667, -1596.016032064128, -1579.8236472945891, -1563.6312625250503, -1547.4388777555114, -1531.2464929859716, -1515.0541082164327, -1498.8617234468938, -1482.669338677355, -1466.4769539078152, -1450.2845691382763, -1434.0921843687374, -1417.8997995991986, -1401.7074148296597, -1385.51503006012, -1369.322645290581, -1353.1302605210421, -1336.9378757515033, -1320.7454909819635, -1304.5531062124246, -1288.3607214428857, -1272.1683366733469, -1255.975951903808, -1239.7835671342682, -1223.5911823647293, -1207.3987975951904, -1191.2064128256516, -1175.0140280561118, -1158.821643286573, -1142.629258517034, -1126.4368737474952, -1110.2444889779563, -1094.0521042084165, -1077.8597194388776, -1061.6673346693387, -1045.4749498997999, -1029.28256513026, -1013.0901803607212, -996.8977955911823, -980.7054108216435, -964.5130260521046, -948.3206412825648, -932.1282565130259, -915.935871743487, -899.7434869739482, -883.5511022044084, -867.3587174348695, -851.1663326653306, -834.9739478957918, -818.7815631262529, -802.5891783567131, -786.3967935871742, -770.2044088176353, -754.0120240480965, -737.8196392785567, -721.6272545090178, -705.4348697394789, -689.24248496994, -673.0501002004012, -656.8577154308614, -640.6653306613225, -624.4729458917836, -608.2805611222448, -592.088176352705, -575.8957915831661, -559.7034068136272, -543.5110220440883, -527.3186372745495, -511.1262525050097, -494.9338677354708, -478.74148296593194, -462.54909819639306, -446.3567134268533, -430.1643286573144, -413.9719438877755, -397.77955911823665, -381.5871743486978, -365.394789579158, -349.2024048096191, -333.01002004008024, -316.81763527054136, -300.6252505010016, -284.4328657314627, -268.2404809619238, -252.04809619238495, -235.85571142284607, -219.66332665330629, -203.4709418837674, -187.27855711422853, -171.08617234468966, -154.89378757514987, -138.701402805611, -122.50901803607212, -106.31663326653324, -90.12424849699437, -73.93186372745458, -57.73947895791571, -41.54709418837683, -25.354709418837956, -9.16232464929817, 7.030060120240705, 23.22244488977958, 39.41482965931846, 55.60721442885733, 71.79959919839712, 87.991983967936, 104.18436873747487, 120.37675350701375, 136.56913827655353, 152.7615230460924, 168.95390781563128, 185.14629258517016, 201.33867735470903, 217.53106212424882, 233.7234468937877, 249.91583166332657, 266.10821643286545, 282.30060120240523, 298.4929859719441, 314.685370741483, 330.87775551102186, 347.07014028056074, 363.2625250501005, 379.4549098196394, 395.6472945891783, 411.83967935871715, 428.03206412825693, 444.2244488977958, 460.4168336673347, 476.60921843687356, 492.80160320641244, 508.9939879759522, 525.1863727454911, 541.37875751503, 557.5711422845689, 573.7635270541086, 589.9559118236475, 606.1482965931864, 622.3406813627253, 638.5330661322641, 654.7254509018039, 670.9178356713428, 687.1102204408817, 703.3026052104206, 719.4949899799603, 735.6873747494992, 751.8797595190381, 768.072144288577, 784.2645290581158, 800.4569138276556, 816.6492985971945, 832.8416833667334, 849.0340681362723, 865.226452905812, 881.4188376753509, 897.6112224448898, 913.8036072144287, 929.9959919839675, 946.1883767535073, 962.3807615230462, 978.5731462925851, 994.765531062124, 1010.9579158316637, 1027.1503006012026, 1043.3426853707415, 1059.5350701402804, 1075.7274549098192, 1091.919839679359, 1108.112224448898, 1124.3046092184368, 1140.4969939879757, 1156.6893787575154, 1172.8817635270543, 1189.0741482965932, 1205.266533066132, 1221.458917835671, 1237.6513026052107, 1253.8436873747496, 1270.0360721442885, 1286.2284569138274, 1302.4208416833671, 1318.613226452906, 1334.805611222445, 1350.9979959919838, 1367.1903807615226, 1383.3827655310624, 1399.5751503006013, 1415.7675350701402, 1431.959919839679, 1448.1523046092188, 1464.3446893787577, 1480.5370741482966, 1496.7294589178355, 1512.9218436873743, 1529.1142284569141, 1545.306613226453, 1561.4989979959919, 1577.6913827655308, 1593.8837675350705, 1610.0761523046094, 1626.2685370741483, 1642.4609218436872, 1658.653306613226, 1674.8456913827658, 1691.0380761523047, 1707.2304609218436, 1723.4228456913825, 1739.6152304609222, 1755.8076152304611, 1772.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.x = d3.scale.linear()
              .domain([-6308.0, 1772.0])
              .range([0, 400]);

    color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.legend = L.control({position: 'topright'});
    color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.legend.addTo(map_7cd16caae8eb4b3eb492ed0e670444d4);

    color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.xAxis = d3.svg.axis()
        .scale(color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-6308.0, -4961.333333333333, -3614.6666666666665, -2268.0, -921.333333333333, 425.33333333333394, 1772.0]);

    color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.g = color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.g.selectAll("rect")
        .data(color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.x(color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.color.domain()[i - 1]) : color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.x.range()[0],
            x1: i < color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.color.domain().length ? color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.x(color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.color.domain()[i]) : color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.g.call(color_map_ad0d76dd0fbd449e9bd1fdcce4e4b583.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('11_50_ELIOMAR DE SOUZA COELHO');

