    
            var map_18449cc0e4f242cebcc9072d1ba05f36 = L.map(
                "map_18449cc0e4f242cebcc9072d1ba05f36",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_d66566e145cf45f9849730a87a1ab1c8 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_18449cc0e4f242cebcc9072d1ba05f36);
        
    
            var choropleth_9913c368c49341ddb417ea8cbfced3d2 = L.featureGroup(
                {}
            ).addTo(map_18449cc0e4f242cebcc9072d1ba05f36);
        
    
        function geo_json_fb9ec1ec27484ad98dc6c1b564764162_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 439: case 474: case 392: case 343: case 351: case 396: case 382: case 375: case 419: case 411: case 398: case 385: case 368: case 372: case 356: case 360: case 355: case 350: case 454: case 433: case 429: case 409: case 471: case 388: case 458: case 384: case 414: case 476: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 369: case 378: case 389: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 423: case 431: case 349: case 342: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 346: case 347: case 457: case 337: case 406: case 890: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 370: case 511: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 374: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_fb9ec1ec27484ad98dc6c1b564764162_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_fb9ec1ec27484ad98dc6c1b564764162 = L.geoJson(null, {
                onEachFeature: geo_json_fb9ec1ec27484ad98dc6c1b564764162_onEachFeature,
            
                style: geo_json_fb9ec1ec27484ad98dc6c1b564764162_styler,
        });

        function geo_json_fb9ec1ec27484ad98dc6c1b564764162_add (data) {
            geo_json_fb9ec1ec27484ad98dc6c1b564764162
                .addData(data)
                .addTo(choropleth_9913c368c49341ddb417ea8cbfced3d2);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_fb9ec1ec27484ad98dc6c1b564764162_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_1ddd92652fdc4ce1b5fdd6a689cc6946 = {};

    
    color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.color = d3.scale.threshold()
              .domain([0.0, 11.641282565130261, 23.282565130260522, 34.92384769539078, 46.565130260521045, 58.206412825651306, 69.84769539078157, 81.48897795591182, 93.13026052104209, 104.77154308617234, 116.41282565130261, 128.05410821643287, 139.69539078156313, 151.33667334669337, 162.97795591182364, 174.6192384769539, 186.26052104208418, 197.90180360721442, 209.5430861723447, 221.18436873747495, 232.82565130260522, 244.46693386773546, 256.10821643286573, 267.749498997996, 279.39078156312627, 291.03206412825654, 302.67334669338675, 314.314629258517, 325.9559118236473, 337.59719438877755, 349.2384769539078, 360.8797595190381, 372.52104208416836, 384.1623246492986, 395.80360721442884, 407.4448897795591, 419.0861723446894, 430.72745490981964, 442.3687374749499, 454.0100200400802, 465.65130260521045, 477.29258517034066, 488.9338677354709, 500.5751503006012, 512.2164328657315, 523.8577154308617, 535.498997995992, 547.1402805611223, 558.7815631262525, 570.4228456913828, 582.0641282565131, 593.7054108216433, 605.3466933867735, 616.9879759519038, 628.629258517034, 640.2705410821643, 651.9118236472946, 663.5531062124248, 675.1943887775551, 686.8356713426854, 698.4769539078156, 710.1182364729459, 721.7595190380762, 733.4008016032064, 745.0420841683367, 756.683366733467, 768.3246492985973, 779.9659318637274, 791.6072144288577, 803.2484969939879, 814.8897795591182, 826.5310621242485, 838.1723446893787, 849.813627254509, 861.4549098196393, 873.0961923847696, 884.7374749498998, 896.3787575150301, 908.0200400801604, 919.6613226452906, 931.3026052104209, 942.943887775551, 954.5851703406813, 966.2264529058116, 977.8677354709419, 989.5090180360721, 1001.1503006012024, 1012.7915831663327, 1024.432865731463, 1036.0741482965932, 1047.7154308617235, 1059.3567134268537, 1070.997995991984, 1082.6392785571143, 1094.2805611222445, 1105.9218436873748, 1117.563126252505, 1129.2044088176353, 1140.8456913827656, 1152.4869739478959, 1164.1282565130261, 1175.7695390781564, 1187.4108216432867, 1199.0521042084167, 1210.693386773547, 1222.3346693386773, 1233.9759519038075, 1245.6172344689378, 1257.258517034068, 1268.8997995991983, 1280.5410821643286, 1292.1823647294589, 1303.8236472945891, 1315.4649298597194, 1327.1062124248497, 1338.74749498998, 1350.3887775551102, 1362.0300601202405, 1373.6713426853707, 1385.312625250501, 1396.9539078156313, 1408.5951903807616, 1420.2364729458918, 1431.877755511022, 1443.5190380761524, 1455.1603206412826, 1466.801603206413, 1478.4428857715432, 1490.0841683366734, 1501.7254509018037, 1513.366733466934, 1525.0080160320642, 1536.6492985971945, 1548.2905811623245, 1559.9318637274548, 1571.573146292585, 1583.2144288577153, 1594.8557114228456, 1606.4969939879759, 1618.1382765531062, 1629.7795591182364, 1641.4208416833667, 1653.062124248497, 1664.7034068136272, 1676.3446893787575, 1687.9859719438878, 1699.627254509018, 1711.2685370741483, 1722.9098196392786, 1734.5511022044088, 1746.192384769539, 1757.8336673346694, 1769.4749498997996, 1781.11623246493, 1792.7575150300602, 1804.3987975951904, 1816.0400801603207, 1827.681362725451, 1839.3226452905812, 1850.9639278557115, 1862.6052104208418, 1874.246492985972, 1885.887775551102, 1897.5290581162324, 1909.1703406813626, 1920.811623246493, 1932.4529058116232, 1944.0941883767534, 1955.7354709418837, 1967.376753507014, 1979.0180360721442, 1990.6593186372745, 2002.3006012024048, 2013.941883767535, 2025.5831663326653, 2037.2244488977956, 2048.865731462926, 2060.507014028056, 2072.1482965931864, 2083.7895791583164, 2095.430861723447, 2107.072144288577, 2118.7134268537075, 2130.3547094188375, 2141.995991983968, 2153.637274549098, 2165.2785571142285, 2176.9198396793586, 2188.561122244489, 2200.202404809619, 2211.8436873747496, 2223.4849699398796, 2235.12625250501, 2246.76753507014, 2258.4088176352707, 2270.0501002004007, 2281.691382765531, 2293.3326653306613, 2304.9739478957918, 2316.615230460922, 2328.2565130260523, 2339.8977955911823, 2351.539078156313, 2363.180360721443, 2374.8216432865734, 2386.4629258517034, 2398.1042084168334, 2409.745490981964, 2421.386773547094, 2433.0280561122245, 2444.6693386773545, 2456.310621242485, 2467.951903807615, 2479.5931863727455, 2491.2344689378756, 2502.875751503006, 2514.517034068136, 2526.1583166332666, 2537.7995991983967, 2549.440881763527, 2561.082164328657, 2572.7234468937877, 2584.3647294589177, 2596.0060120240482, 2607.6472945891783, 2619.2885771543088, 2630.929859719439, 2642.5711422845693, 2654.2124248496993, 2665.85370741483, 2677.49498997996, 2689.1362725450904, 2700.7775551102204, 2712.418837675351, 2724.060120240481, 2735.701402805611, 2747.3426853707415, 2758.9839679358715, 2770.625250501002, 2782.266533066132, 2793.9078156312626, 2805.5490981963926, 2817.190380761523, 2828.831663326653, 2840.4729458917836, 2852.1142284569137, 2863.755511022044, 2875.396793587174, 2887.0380761523047, 2898.6793587174348, 2910.3206412825652, 2921.9619238476953, 2933.603206412826, 2945.244488977956, 2956.8857715430863, 2968.5270541082164, 2980.168336673347, 2991.809619238477, 3003.4509018036074, 3015.0921843687374, 3026.733466933868, 3038.374749498998, 3050.0160320641285, 3061.6573146292585, 3073.298597194389, 3084.939879759519, 3096.581162324649, 3108.2224448897796, 3119.8637274549096, 3131.50501002004, 3143.14629258517, 3154.7875751503007, 3166.4288577154307, 3178.070140280561, 3189.7114228456912, 3201.3527054108217, 3212.9939879759518, 3224.6352705410823, 3236.2765531062123, 3247.917835671343, 3259.559118236473, 3271.2004008016033, 3282.8416833667334, 3294.482965931864, 3306.124248496994, 3317.7655310621244, 3329.4068136272545, 3341.048096192385, 3352.689378757515, 3364.3306613226455, 3375.9719438877755, 3387.613226452906, 3399.254509018036, 3410.8957915831666, 3422.5370741482966, 3434.1783567134266, 3445.819639278557, 3457.460921843687, 3469.1022044088177, 3480.7434869739477, 3492.384769539078, 3504.0260521042082, 3515.6673346693387, 3527.308617234469, 3538.9498997995993, 3550.5911823647293, 3562.23246492986, 3573.87374749499, 3585.5150300601204, 3597.1563126252504, 3608.797595190381, 3620.438877755511, 3632.0801603206414, 3643.7214428857715, 3655.362725450902, 3667.004008016032, 3678.6452905811625, 3690.2865731462925, 3701.927855711423, 3713.569138276553, 3725.2104208416836, 3736.8517034068136, 3748.492985971944, 3760.134268537074, 3771.775551102204, 3783.4168336673347, 3795.0581162324647, 3806.699398797595, 3818.3406813627253, 3829.9819639278558, 3841.623246492986, 3853.2645290581163, 3864.9058116232463, 3876.547094188377, 3888.188376753507, 3899.8296593186374, 3911.4709418837674, 3923.112224448898, 3934.753507014028, 3946.3947895791584, 3958.0360721442885, 3969.677354709419, 3981.318637274549, 3992.9599198396795, 4004.6012024048096, 4016.24248496994, 4027.88376753507, 4039.5250501002006, 4051.1663326653306, 4062.807615230461, 4074.448897795591, 4086.0901803607217, 4097.731462925852, 4109.372745490982, 4121.014028056112, 4132.655310621242, 4144.296593186373, 4155.937875751503, 4167.579158316633, 4179.220440881763, 4190.861723446894, 4202.503006012024, 4214.144288577154, 4225.785571142284, 4237.426853707415, 4249.068136272545, 4260.709418837675, 4272.3507014028055, 4283.991983967936, 4295.6332665330665, 4307.274549098196, 4318.915831663327, 4330.557114228457, 4342.198396793588, 4353.839679358717, 4365.480961923848, 4377.122244488978, 4388.763527054109, 4400.404809619238, 4412.046092184369, 4423.687374749499, 4435.32865731463, 4446.969939879759, 4458.61122244489, 4470.25250501002, 4481.89378757515, 4493.53507014028, 4505.176352705411, 4516.817635270541, 4528.458917835671, 4540.100200400801, 4551.741482965932, 4563.382765531062, 4575.024048096192, 4586.6653306613225, 4598.306613226453, 4609.9478957915835, 4621.589178356713, 4633.230460921844, 4644.871743486974, 4656.513026052105, 4668.154308617234, 4679.795591182365, 4691.436873747495, 4703.078156312626, 4714.719438877755, 4726.360721442886, 4738.002004008016, 4749.643286573147, 4761.284569138276, 4772.925851703407, 4784.567134268537, 4796.208416833667, 4807.849699398797, 4819.490981963928, 4831.132264529058, 4842.773547094188, 4854.4148296593185, 4866.056112224449, 4877.697394789579, 4889.338677354709, 4900.9799599198395, 4912.62124248497, 4924.2625250501005, 4935.90380761523, 4947.545090180361, 4959.186372745491, 4970.827655310622, 4982.468937875751, 4994.110220440882, 5005.751503006012, 5017.392785571143, 5029.034068136272, 5040.675350701403, 5052.316633266533, 5063.957915831664, 5075.599198396793, 5087.240480961924, 5098.881763527054, 5110.523046092185, 5122.164328657314, 5133.805611222445, 5145.446893787575, 5157.088176352705, 5168.7294589178355, 5180.370741482966, 5192.0120240480965, 5203.653306613226, 5215.294589178357, 5226.935871743487, 5238.5771543086175, 5250.218436873747, 5261.859719438878, 5273.501002004008, 5285.142284569139, 5296.783567134268, 5308.424849699399, 5320.066132264529, 5331.70741482966, 5343.348697394789, 5354.98997995992, 5366.63126252505, 5378.272545090181, 5389.91382765531, 5401.555110220441, 5413.196392785571, 5424.837675350702, 5436.478957915831, 5448.120240480962, 5459.761523046092, 5471.402805611222, 5483.0440881763525, 5494.685370741483, 5506.3266533066135, 5517.967935871743, 5529.609218436874, 5541.250501002004, 5552.891783567135, 5564.533066132264, 5576.174348697395, 5587.815631262525, 5599.456913827656, 5611.098196392785, 5622.739478957916, 5634.380761523046, 5646.022044088177, 5657.663326653306, 5669.304609218437, 5680.945891783567, 5692.587174348698, 5704.228456913827, 5715.869739478958, 5727.511022044088, 5739.152304609219, 5750.793587174348, 5762.434869739479, 5774.076152304609, 5785.71743486974, 5797.3587174348695, 5809.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.x = d3.scale.linear()
              .domain([0.0, 5809.0])
              .range([0, 400]);

    color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.legend = L.control({position: 'topright'});
    color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.legend.addTo(map_18449cc0e4f242cebcc9072d1ba05f36);

    color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.xAxis = d3.svg.axis()
        .scale(color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 968.1666666666666, 1936.3333333333333, 2904.5, 3872.6666666666665, 4840.833333333333, 5809.0]);

    color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.g = color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.g.selectAll("rect")
        .data(color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.x(color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.color.domain()[i - 1]) : color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.x.range()[0],
            x1: i < color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.color.domain().length ? color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.x(color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.color.domain()[i]) : color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.g.call(color_map_1ddd92652fdc4ce1b5fdd6a689cc6946.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('');

