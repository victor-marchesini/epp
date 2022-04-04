    
            var map_6263ea19f93741fa82d9673785aad40a = L.map(
                "map_6263ea19f93741fa82d9673785aad40a",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_e4016bffa9a748cd842a529e666b2f29 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_6263ea19f93741fa82d9673785aad40a);
        
    
            var choropleth_6706336122b748779e59e3740f7c5734 = L.featureGroup(
                {}
            ).addTo(map_6263ea19f93741fa82d9673785aad40a);
        
    
        function geo_json_c5b25d9bab1241f78a545315f53cbd10_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 357: case 481: case 479: case 366: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_c5b25d9bab1241f78a545315f53cbd10_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_c5b25d9bab1241f78a545315f53cbd10 = L.geoJson(null, {
                onEachFeature: geo_json_c5b25d9bab1241f78a545315f53cbd10_onEachFeature,
            
                style: geo_json_c5b25d9bab1241f78a545315f53cbd10_styler,
        });

        function geo_json_c5b25d9bab1241f78a545315f53cbd10_add (data) {
            geo_json_c5b25d9bab1241f78a545315f53cbd10
                .addData(data)
                .addTo(choropleth_6706336122b748779e59e3740f7c5734);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_c5b25d9bab1241f78a545315f53cbd10_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_fcb45a8e7304487d92aec4e9cea85eb7 = {};

    
    color_map_fcb45a8e7304487d92aec4e9cea85eb7.color = d3.scale.threshold()
              .domain([0.0, 8.821643286573146, 17.64328657314629, 26.46492985971944, 35.28657314629258, 44.10821643286573, 52.92985971943888, 61.75150300601202, 70.57314629258516, 79.39478957915831, 88.21643286573146, 97.03807615230461, 105.85971943887776, 114.6813627254509, 123.50300601202404, 132.3246492985972, 141.14629258517033, 149.9679358717435, 158.78957915831663, 167.6112224448898, 176.43286573146293, 185.25450901803606, 194.07615230460922, 202.89779559118236, 211.71943887775552, 220.54108216432866, 229.3627254509018, 238.18436873747495, 247.0060120240481, 255.82765531062125, 264.6492985971944, 273.4709418837675, 282.29258517034066, 291.11422845691385, 299.935871743487, 308.7575150300601, 317.57915831663325, 326.4008016032064, 335.2224448897796, 344.0440881763527, 352.86573146292585, 361.687374749499, 370.5090180360721, 379.3306613226453, 388.15230460921845, 396.9739478957916, 405.7955911823647, 414.61723446893785, 423.43887775551104, 432.2605210420842, 441.0821643286573, 449.90380761523045, 458.7254509018036, 467.5470941883768, 476.3687374749499, 485.19038076152304, 494.0120240480962, 502.8336673346693, 511.6553106212425, 520.4769539078156, 529.2985971943888, 538.1202404809619, 546.941883767535, 555.7635270541082, 564.5851703406813, 573.4068136272546, 582.2284569138277, 591.0501002004008, 599.871743486974, 608.6933867735471, 617.5150300601202, 626.3366733466934, 635.1583166332665, 643.9799599198396, 652.8016032064128, 661.623246492986, 670.4448897795592, 679.2665330661323, 688.0881763527054, 696.9098196392786, 705.7314629258517, 714.5531062124248, 723.374749498998, 732.1963927855711, 741.0180360721442, 749.8396793587175, 758.6613226452906, 767.4829659318638, 776.3046092184369, 785.12625250501, 793.9478957915832, 802.7695390781563, 811.5911823647294, 820.4128256513026, 829.2344689378757, 838.056112224449, 846.8777555110221, 855.6993987975952, 864.5210420841684, 873.3426853707415, 882.1643286573146, 890.9859719438878, 899.8076152304609, 908.629258517034, 917.4509018036072, 926.2725450901804, 935.0941883767536, 943.9158316633267, 952.7374749498998, 961.559118236473, 970.3807615230461, 979.2024048096192, 988.0240480961924, 996.8456913827655, 1005.6673346693386, 1014.4889779559119, 1023.310621242485, 1032.1322645290581, 1040.9539078156313, 1049.7755511022044, 1058.5971943887776, 1067.4188376753507, 1076.2404809619238, 1085.062124248497, 1093.88376753507, 1102.7054108216432, 1111.5270541082164, 1120.3486973947895, 1129.1703406813626, 1137.9919839679358, 1146.8136272545091, 1155.6352705410823, 1164.4569138276554, 1173.2785571142285, 1182.1002004008017, 1190.9218436873748, 1199.743486973948, 1208.565130260521, 1217.3867735470942, 1226.2084168336673, 1235.0300601202405, 1243.8517034068136, 1252.6733466933867, 1261.4949899799599, 1270.316633266533, 1279.1382765531062, 1287.9599198396793, 1296.7815631262524, 1305.6032064128256, 1314.4248496993987, 1323.246492985972, 1332.0681362725452, 1340.8897795591183, 1349.7114228456915, 1358.5330661322646, 1367.3547094188377, 1376.1763527054109, 1384.997995991984, 1393.8196392785571, 1402.6412825651303, 1411.4629258517034, 1420.2845691382765, 1429.1062124248497, 1437.9278557114228, 1446.749498997996, 1455.571142284569, 1464.3927855711422, 1473.2144288577153, 1482.0360721442885, 1490.8577154308616, 1499.679358717435, 1508.5010020040081, 1517.3226452905812, 1526.1442885771544, 1534.9659318637275, 1543.7875751503007, 1552.6092184368738, 1561.430861723447, 1570.25250501002, 1579.0741482965932, 1587.8957915831663, 1596.7174348697395, 1605.5390781563126, 1614.3607214428857, 1623.1823647294589, 1632.004008016032, 1640.8256513026051, 1649.6472945891783, 1658.4689378757514, 1667.2905811623245, 1676.112224448898, 1684.933867735471, 1693.7555110220442, 1702.5771543086173, 1711.3987975951904, 1720.2204408817636, 1729.0420841683367, 1737.8637274549098, 1746.685370741483, 1755.5070140280561, 1764.3286573146293, 1773.1503006012024, 1781.9719438877755, 1790.7935871743487, 1799.6152304609218, 1808.436873747495, 1817.258517034068, 1826.0801603206412, 1834.9018036072143, 1843.7234468937875, 1852.5450901803608, 1861.366733466934, 1870.188376753507, 1879.0100200400802, 1887.8316633266534, 1896.6533066132265, 1905.4749498997996, 1914.2965931863728, 1923.118236472946, 1931.939879759519, 1940.7615230460922, 1949.5831663326653, 1958.4048096192384, 1967.2264529058116, 1976.0480961923847, 1984.8697394789579, 1993.691382765531, 2002.5130260521041, 2011.3346693386773, 2020.1563126252504, 2028.9779559118238, 2037.799599198397, 2046.62124248497, 2055.442885771543, 2064.2645290581163, 2073.086172344689, 2081.9078156312626, 2090.7294589178355, 2099.551102204409, 2108.3727454909817, 2117.194388777555, 2126.0160320641285, 2134.8376753507014, 2143.6593186372747, 2152.4809619238476, 2161.302605210421, 2170.124248496994, 2178.9458917835673, 2187.76753507014, 2196.5891783567135, 2205.4108216432865, 2214.23246492986, 2223.0541082164327, 2231.875751503006, 2240.697394789579, 2249.5190380761524, 2258.3406813627253, 2267.1623246492986, 2275.9839679358715, 2284.805611222445, 2293.6272545090183, 2302.448897795591, 2311.2705410821645, 2320.0921843687374, 2328.913827655311, 2337.7354709418837, 2346.557114228457, 2355.37875751503, 2364.2004008016033, 2373.0220440881762, 2381.8436873747496, 2390.6653306613225, 2399.486973947896, 2408.308617234469, 2417.130260521042, 2425.951903807615, 2434.7735470941884, 2443.5951903807613, 2452.4168336673347, 2461.2384769539076, 2470.060120240481, 2478.8817635270543, 2487.703406813627, 2496.5250501002006, 2505.3466933867735, 2514.168336673347, 2522.9899799599198, 2531.811623246493, 2540.633266533066, 2549.4549098196394, 2558.2765531062123, 2567.0981963927857, 2575.9198396793586, 2584.741482965932, 2593.563126252505, 2602.384769539078, 2611.206412825651, 2620.0280561122245, 2628.8496993987974, 2637.6713426853707, 2646.492985971944, 2655.314629258517, 2664.1362725450904, 2672.9579158316633, 2681.7795591182366, 2690.6012024048096, 2699.422845691383, 2708.244488977956, 2717.066132264529, 2725.887775551102, 2734.7094188376755, 2743.5310621242484, 2752.3527054108217, 2761.1743486973946, 2769.995991983968, 2778.817635270541, 2787.6392785571143, 2796.460921843687, 2805.2825651302605, 2814.1042084168334, 2822.925851703407, 2831.74749498998, 2840.569138276553, 2849.3907815631264, 2858.2124248496993, 2867.0340681362727, 2875.8557114228456, 2884.677354709419, 2893.498997995992, 2902.3206412825652, 2911.142284569138, 2919.9639278557115, 2928.7855711422844, 2937.607214428858, 2946.4288577154307, 2955.250501002004, 2964.072144288577, 2972.8937875751503, 2981.7154308617232, 2990.5370741482966, 2999.35871743487, 3008.180360721443, 3017.0020040080162, 3025.823647294589, 3034.6452905811625, 3043.4669338677354, 3052.2885771543088, 3061.1102204408817, 3069.931863727455, 3078.753507014028, 3087.5751503006013, 3096.396793587174, 3105.2184368737476, 3114.0400801603205, 3122.861723446894, 3131.6833667334668, 3140.50501002004, 3149.326653306613, 3158.1482965931864, 3166.9699398797593, 3175.7915831663327, 3184.613226452906, 3193.434869739479, 3202.2565130260523, 3211.078156312625, 3219.8997995991986, 3228.7214428857715, 3237.543086172345, 3246.3647294589177, 3255.186372745491, 3264.008016032064, 3272.8296593186374, 3281.6513026052103, 3290.4729458917836, 3299.2945891783565, 3308.11623246493, 3316.937875751503, 3325.759519038076, 3334.581162324649, 3343.4028056112224, 3352.224448897796, 3361.0460921843687, 3369.867735470942, 3378.689378757515, 3387.5110220440883, 3396.3326653306613, 3405.1543086172346, 3413.9759519038075, 3422.797595190381, 3431.619238476954, 3440.440881763527, 3449.2625250501, 3458.0841683366734, 3466.9058116232463, 3475.7274549098197, 3484.5490981963926, 3493.370741482966, 3502.192384769539, 3511.0140280561122, 3519.835671342685, 3528.6573146292585, 3537.478957915832, 3546.300601202405, 3555.122244488978, 3563.943887775551, 3572.7655310621244, 3581.5871743486973, 3590.4088176352707, 3599.2304609218436, 3608.052104208417, 3616.87374749499, 3625.695390781563, 3634.517034068136, 3643.3386773547095, 3652.1603206412824, 3660.9819639278558, 3669.8036072144287, 3678.625250501002, 3687.446893787575, 3696.2685370741483, 3705.0901803607217, 3713.9118236472946, 3722.733466933868, 3731.555110220441, 3740.376753507014, 3749.198396793587, 3758.0200400801605, 3766.8416833667334, 3775.6633266533067, 3784.4849699398796, 3793.306613226453, 3802.128256513026, 3810.9498997995993, 3819.771543086172, 3828.5931863727455, 3837.4148296593185, 3846.236472945892, 3855.0581162324647, 3863.879759519038, 3872.701402805611, 3881.5230460921844, 3890.3446893787577, 3899.1663326653306, 3907.987975951904, 3916.809619238477, 3925.6312625250503, 3934.452905811623, 3943.2745490981965, 3952.0961923847694, 3960.917835671343, 3969.7394789579157, 3978.561122244489, 3987.382765531062, 3996.2044088176353, 4005.0260521042082, 4013.8476953907816, 4022.6693386773545, 4031.490981963928, 4040.312625250501, 4049.134268537074, 4057.9559118236475, 4066.7775551102204, 4075.599198396794, 4084.4208416833667, 4093.24248496994, 4102.064128256513, 4110.885771543086, 4119.70741482966, 4128.529058116233, 4137.3507014028055, 4146.172344689378, 4154.993987975952, 4163.815631262525, 4172.637274549098, 4181.458917835671, 4190.280561122245, 4199.102204408818, 4207.923847695391, 4216.7454909819635, 4225.567134268537, 4234.38877755511, 4243.210420841683, 4252.032064128257, 4260.85370741483, 4269.675350701403, 4278.496993987976, 4287.3186372745495, 4296.140280561122, 4304.961923847695, 4313.783567134268, 4322.605210420842, 4331.426853707415, 4340.248496993988, 4349.070140280561, 4357.891783567135, 4366.7134268537075, 4375.53507014028, 4384.356713426853, 4393.178356713427, 4402.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_fcb45a8e7304487d92aec4e9cea85eb7.x = d3.scale.linear()
              .domain([0.0, 4402.0])
              .range([0, 400]);

    color_map_fcb45a8e7304487d92aec4e9cea85eb7.legend = L.control({position: 'topright'});
    color_map_fcb45a8e7304487d92aec4e9cea85eb7.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_fcb45a8e7304487d92aec4e9cea85eb7.legend.addTo(map_6263ea19f93741fa82d9673785aad40a);

    color_map_fcb45a8e7304487d92aec4e9cea85eb7.xAxis = d3.svg.axis()
        .scale(color_map_fcb45a8e7304487d92aec4e9cea85eb7.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 733.6666666666666, 1467.3333333333333, 2201.0, 2934.6666666666665, 3668.333333333333, 4402.0]);

    color_map_fcb45a8e7304487d92aec4e9cea85eb7.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_fcb45a8e7304487d92aec4e9cea85eb7.g = color_map_fcb45a8e7304487d92aec4e9cea85eb7.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_fcb45a8e7304487d92aec4e9cea85eb7.g.selectAll("rect")
        .data(color_map_fcb45a8e7304487d92aec4e9cea85eb7.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_fcb45a8e7304487d92aec4e9cea85eb7.x(color_map_fcb45a8e7304487d92aec4e9cea85eb7.color.domain()[i - 1]) : color_map_fcb45a8e7304487d92aec4e9cea85eb7.x.range()[0],
            x1: i < color_map_fcb45a8e7304487d92aec4e9cea85eb7.color.domain().length ? color_map_fcb45a8e7304487d92aec4e9cea85eb7.x(color_map_fcb45a8e7304487d92aec4e9cea85eb7.color.domain()[i]) : color_map_fcb45a8e7304487d92aec4e9cea85eb7.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_fcb45a8e7304487d92aec4e9cea85eb7.g.call(color_map_fcb45a8e7304487d92aec4e9cea85eb7.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('22_13_CELSO PANSERA');

