    
            var map_caf0d11678e04fe790b6c86feca04eaa = L.map(
                "map_caf0d11678e04fe790b6c86feca04eaa",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_142a9cace67247a5a9c86c04372ccd0a = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_caf0d11678e04fe790b6c86feca04eaa);
        
    
            var choropleth_57c6888b768a46b8a6f67fa9eb98dd64 = L.featureGroup(
                {}
            ).addTo(map_caf0d11678e04fe790b6c86feca04eaa);
        
    
        function geo_json_15f5d0d2f7d743a99d17269578f4650c_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_15f5d0d2f7d743a99d17269578f4650c_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_15f5d0d2f7d743a99d17269578f4650c = L.geoJson(null, {
                onEachFeature: geo_json_15f5d0d2f7d743a99d17269578f4650c_onEachFeature,
            
                style: geo_json_15f5d0d2f7d743a99d17269578f4650c_styler,
        });

        function geo_json_15f5d0d2f7d743a99d17269578f4650c_add (data) {
            geo_json_15f5d0d2f7d743a99d17269578f4650c
                .addData(data)
                .addTo(choropleth_57c6888b768a46b8a6f67fa9eb98dd64);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_15f5d0d2f7d743a99d17269578f4650c_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_ba416bb4950b44659ab318cb078de539 = {};

    
    color_map_ba416bb4950b44659ab318cb078de539.color = d3.scale.threshold()
              .domain([0.0, 14.24248496993988, 28.48496993987976, 42.72745490981964, 56.96993987975952, 71.2124248496994, 85.45490981963928, 99.69739478957916, 113.93987975951904, 128.18236472945893, 142.4248496993988, 156.6673346693387, 170.90981963927857, 185.15230460921845, 199.39478957915833, 213.6372745490982, 227.8797595190381, 242.12224448897797, 256.36472945891785, 270.60721442885773, 284.8496993987976, 299.0921843687375, 313.3346693386774, 327.57715430861725, 341.81963927855713, 356.062124248497, 370.3046092184369, 384.5470941883768, 398.78957915831666, 413.03206412825654, 427.2745490981964, 441.5170340681363, 455.7595190380762, 470.00200400801606, 484.24448897795594, 498.4869739478958, 512.7294589178357, 526.9719438877755, 541.2144288577155, 555.4569138276553, 569.6993987975952, 583.941883767535, 598.184368737475, 612.4268537074148, 626.6693386773547, 640.9118236472946, 655.1543086172345, 669.3967935871743, 683.6392785571143, 697.8817635270541, 712.124248496994, 726.3667334669339, 740.6092184368738, 754.8517034068136, 769.0941883767536, 783.3366733466934, 797.5791583166333, 811.8216432865731, 826.0641282565131, 840.3066132264529, 854.5490981963928, 868.7915831663327, 883.0340681362726, 897.2765531062124, 911.5190380761524, 925.7615230460922, 940.0040080160321, 954.2464929859719, 968.4889779559119, 982.7314629258517, 996.9739478957916, 1011.2164328657315, 1025.4589178356714, 1039.7014028056112, 1053.943887775551, 1068.1863727454909, 1082.428857715431, 1096.6713426853707, 1110.9138276553106, 1125.1563126252504, 1139.3987975951904, 1153.6412825651303, 1167.88376753507, 1182.12625250501, 1196.36873747495, 1210.6112224448898, 1224.8537074148296, 1239.0961923847694, 1253.3386773547095, 1267.5811623246493, 1281.8236472945891, 1296.066132264529, 1310.308617234469, 1324.5511022044088, 1338.7935871743487, 1353.0360721442885, 1367.2785571142285, 1381.5210420841684, 1395.7635270541082, 1410.006012024048, 1424.248496993988, 1438.4909819639279, 1452.7334669338677, 1466.9759519038075, 1481.2184368737476, 1495.4609218436874, 1509.7034068136272, 1523.945891783567, 1538.188376753507, 1552.430861723447, 1566.6733466933867, 1580.9158316633266, 1595.1583166332666, 1609.4008016032064, 1623.6432865731463, 1637.885771543086, 1652.1282565130261, 1666.370741482966, 1680.6132264529058, 1694.8557114228456, 1709.0981963927857, 1723.3406813627255, 1737.5831663326653, 1751.8256513026051, 1766.0681362725452, 1780.310621242485, 1794.5531062124248, 1808.7955911823647, 1823.0380761523047, 1837.2805611222445, 1851.5230460921844, 1865.7655310621242, 1880.0080160320642, 1894.250501002004, 1908.4929859719439, 1922.7354709418837, 1936.9779559118238, 1951.2204408817636, 1965.4629258517034, 1979.7054108216432, 1993.9478957915833, 2008.190380761523, 2022.432865731463, 2036.6753507014027, 2050.917835671343, 2065.1603206412824, 2079.4028056112224, 2093.6452905811625, 2107.887775551102, 2122.130260521042, 2136.3727454909817, 2150.615230460922, 2164.857715430862, 2179.1002004008014, 2193.3426853707415, 2207.5851703406815, 2221.827655310621, 2236.070140280561, 2250.312625250501, 2264.555110220441, 2278.797595190381, 2293.0400801603205, 2307.2825651302605, 2321.5250501002006, 2335.76753507014, 2350.0100200400802, 2364.25250501002, 2378.49498997996, 2392.7374749499, 2406.9799599198395, 2421.2224448897796, 2435.4649298597196, 2449.7074148296592, 2463.9498997995993, 2478.192384769539, 2492.434869739479, 2506.677354709419, 2520.9198396793586, 2535.1623246492986, 2549.4048096192387, 2563.6472945891783, 2577.8897795591183, 2592.132264529058, 2606.374749498998, 2620.617234468938, 2634.8597194388776, 2649.1022044088177, 2663.3446893787577, 2677.5871743486973, 2691.8296593186374, 2706.072144288577, 2720.314629258517, 2734.557114228457, 2748.7995991983967, 2763.0420841683367, 2777.2845691382768, 2791.5270541082164, 2805.7695390781564, 2820.012024048096, 2834.254509018036, 2848.496993987976, 2862.7394789579157, 2876.9819639278558, 2891.224448897796, 2905.4669338677354, 2919.7094188376755, 2933.951903807615, 2948.194388777555, 2962.436873747495, 2976.6793587174348, 2990.921843687375, 3005.164328657315, 3019.4068136272545, 3033.6492985971945, 3047.891783567134, 3062.134268537074, 3076.376753507014, 3090.619238476954, 3104.861723446894, 3119.1042084168334, 3133.3466933867735, 3147.5891783567135, 3161.831663326653, 3176.074148296593, 3190.3166332665332, 3204.559118236473, 3218.801603206413, 3233.0440881763525, 3247.2865731462925, 3261.5290581162326, 3275.771543086172, 3290.0140280561122, 3304.2565130260523, 3318.498997995992, 3332.741482965932, 3346.9839679358715, 3361.2264529058116, 3375.4689378757516, 3389.7114228456912, 3403.9539078156313, 3418.1963927855713, 3432.438877755511, 3446.681362725451, 3460.9238476953906, 3475.1663326653306, 3489.4088176352707, 3503.6513026052103, 3517.8937875751503, 3532.1362725450904, 3546.37875751503, 3560.62124248497, 3574.8637274549096, 3589.1062124248497, 3603.3486973947897, 3617.5911823647293, 3631.8336673346694, 3646.0761523046094, 3660.318637274549, 3674.561122244489, 3688.8036072144287, 3703.0460921843687, 3717.2885771543088, 3731.5310621242484, 3745.7735470941884, 3760.0160320641285, 3774.258517034068, 3788.501002004008, 3802.7434869739477, 3816.9859719438878, 3831.228456913828, 3845.4709418837674, 3859.7134268537075, 3873.9559118236475, 3888.198396793587, 3902.440881763527, 3916.6833667334668, 3930.925851703407, 3945.168336673347, 3959.4108216432865, 3973.6533066132265, 3987.8957915831666, 4002.138276553106, 4016.380761523046, 4030.623246492986, 4044.865731462926, 4059.108216432866, 4073.3507014028055, 4087.5931863727455, 4101.835671342686, 4116.078156312626, 4130.320641282565, 4144.563126252505, 4158.805611222445, 4173.048096192385, 4187.290581162325, 4201.533066132264, 4215.775551102204, 4230.018036072144, 4244.260521042084, 4258.503006012024, 4272.7454909819635, 4286.9879759519035, 4301.230460921844, 4315.472945891784, 4329.715430861724, 4343.957915831664, 4358.200400801603, 4372.442885771543, 4386.685370741483, 4400.927855711423, 4415.170340681363, 4429.412825651302, 4443.655310621242, 4457.897795591182, 4472.140280561122, 4486.382765531062, 4500.625250501002, 4514.867735470942, 4529.110220440882, 4543.352705410822, 4557.595190380762, 4571.837675350702, 4586.080160320641, 4600.322645290581, 4614.565130260521, 4628.807615230461, 4643.050100200401, 4657.29258517034, 4671.53507014028, 4685.77755511022, 4700.0200400801605, 4714.2625250501005, 4728.50501002004, 4742.74749498998, 4756.98997995992, 4771.23246492986, 4785.4749498998, 4799.71743486974, 4813.959919839679, 4828.202404809619, 4842.444889779559, 4856.687374749499, 4870.929859719439, 4885.172344689378, 4899.4148296593185, 4913.6573146292585, 4927.899799599199, 4942.142284569139, 4956.384769539078, 4970.627254509018, 4984.869739478958, 4999.112224448898, 5013.354709418838, 5027.597194388778, 5041.839679358717, 5056.082164328657, 5070.324649298597, 5084.567134268537, 5098.809619238477, 5113.0521042084165, 5127.294589178357, 5141.537074148297, 5155.779559118237, 5170.022044088177, 5184.264529058116, 5198.507014028056, 5212.749498997996, 5226.991983967936, 5241.234468937876, 5255.476953907815, 5269.719438877755, 5283.961923847695, 5298.204408817635, 5312.446893787575, 5326.689378757515, 5340.931863727455, 5355.174348697395, 5369.416833667335, 5383.659318637275, 5397.901803607215, 5412.144288577154, 5426.386773547094, 5440.629258517034, 5454.871743486974, 5469.114228456914, 5483.356713426853, 5497.599198396793, 5511.841683366733, 5526.084168336673, 5540.3266533066135, 5554.5691382765535, 5568.811623246493, 5583.054108216433, 5597.296593186373, 5611.539078156313, 5625.781563126253, 5640.024048096192, 5654.266533066132, 5668.509018036072, 5682.751503006012, 5696.993987975952, 5711.236472945891, 5725.478957915831, 5739.7214428857715, 5753.9639278557115, 5768.206412825652, 5782.448897795592, 5796.691382765531, 5810.933867735471, 5825.176352705411, 5839.418837675351, 5853.661322645291, 5867.90380761523, 5882.14629258517, 5896.38877755511, 5910.63126252505, 5924.87374749499, 5939.116232464929, 5953.3587174348695, 5967.60120240481, 5981.84368737475, 5996.08617234469, 6010.32865731463, 6024.571142284569, 6038.813627254509, 6053.056112224449, 6067.298597194389, 6081.541082164329, 6095.783567134268, 6110.026052104208, 6124.268537074148, 6138.511022044088, 6152.753507014028, 6166.9959919839675, 6181.238476953908, 6195.480961923848, 6209.723446893788, 6223.965931863728, 6238.208416833667, 6252.450901803607, 6266.693386773547, 6280.935871743487, 6295.178356713427, 6309.420841683367, 6323.663326653306, 6337.905811623246, 6352.148296593186, 6366.390781563126, 6380.6332665330665, 6394.875751503006, 6409.118236472946, 6423.360721442886, 6437.603206412826, 6451.845691382766, 6466.088176352705, 6480.330661322645, 6494.573146292585, 6508.815631262525, 6523.058116232465, 6537.300601202405, 6551.543086172344, 6565.785571142284, 6580.0280561122245, 6594.2705410821645, 6608.513026052105, 6622.755511022044, 6636.997995991984, 6651.240480961924, 6665.482965931864, 6679.725450901804, 6693.967935871743, 6708.210420841683, 6722.452905811623, 6736.695390781563, 6750.937875751503, 6765.180360721443, 6779.4228456913825, 6793.6653306613225, 6807.907815631263, 6822.150300601203, 6836.392785571143, 6850.635270541082, 6864.877755511022, 6879.120240480962, 6893.362725450902, 6907.605210420842, 6921.847695390781, 6936.090180360721, 6950.332665330661, 6964.575150300601, 6978.817635270541, 6993.060120240481, 7007.302605210421, 7021.545090180361, 7035.787575150301, 7050.030060120241, 7064.272545090181, 7078.51503006012, 7092.75751503006, 7107.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_ba416bb4950b44659ab318cb078de539.x = d3.scale.linear()
              .domain([0.0, 7107.0])
              .range([0, 400]);

    color_map_ba416bb4950b44659ab318cb078de539.legend = L.control({position: 'topright'});
    color_map_ba416bb4950b44659ab318cb078de539.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_ba416bb4950b44659ab318cb078de539.legend.addTo(map_caf0d11678e04fe790b6c86feca04eaa);

    color_map_ba416bb4950b44659ab318cb078de539.xAxis = d3.svg.axis()
        .scale(color_map_ba416bb4950b44659ab318cb078de539.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 1184.5, 2369.0, 3553.5, 4738.0, 5922.5, 7107.0]);

    color_map_ba416bb4950b44659ab318cb078de539.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_ba416bb4950b44659ab318cb078de539.g = color_map_ba416bb4950b44659ab318cb078de539.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_ba416bb4950b44659ab318cb078de539.g.selectAll("rect")
        .data(color_map_ba416bb4950b44659ab318cb078de539.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_ba416bb4950b44659ab318cb078de539.x(color_map_ba416bb4950b44659ab318cb078de539.color.domain()[i - 1]) : color_map_ba416bb4950b44659ab318cb078de539.x.range()[0],
            x1: i < color_map_ba416bb4950b44659ab318cb078de539.color.domain().length ? color_map_ba416bb4950b44659ab318cb078de539.x(color_map_ba416bb4950b44659ab318cb078de539.color.domain()[i]) : color_map_ba416bb4950b44659ab318cb078de539.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_ba416bb4950b44659ab318cb078de539.g.call(color_map_ba416bb4950b44659ab318cb078de539.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('12_65_REJANE DE ALMEIDA');

