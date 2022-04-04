    
            var map_fbd8423e35664514a3d2953f11e09504 = L.map(
                "map_fbd8423e35664514a3d2953f11e09504",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_c8fc8653611448c79c60fe2456557ae5 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_fbd8423e35664514a3d2953f11e09504);
        
    
            var choropleth_0f8964f292db47fdbcc132467efab9c2 = L.featureGroup(
                {}
            ).addTo(map_fbd8423e35664514a3d2953f11e09504);
        
    
        function geo_json_ccf60bee1a604b75953d04dc81434191_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 447: case 472: case 446: case 444: case 381: case 419: case 346: case 433: case 430: case 477: case 370: case 511: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 455: case 436: case 471: case 510: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_ccf60bee1a604b75953d04dc81434191_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_ccf60bee1a604b75953d04dc81434191 = L.geoJson(null, {
                onEachFeature: geo_json_ccf60bee1a604b75953d04dc81434191_onEachFeature,
            
                style: geo_json_ccf60bee1a604b75953d04dc81434191_styler,
        });

        function geo_json_ccf60bee1a604b75953d04dc81434191_add (data) {
            geo_json_ccf60bee1a604b75953d04dc81434191
                .addData(data)
                .addTo(choropleth_0f8964f292db47fdbcc132467efab9c2);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_ccf60bee1a604b75953d04dc81434191_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_42ed6a7747f147daaa72e70bc1df4507 = {};

    
    color_map_42ed6a7747f147daaa72e70bc1df4507.color = d3.scale.threshold()
              .domain([5.0, 12.847695390781563, 20.695390781563127, 28.54308617234469, 36.390781563126254, 44.23847695390781, 52.08617234468938, 59.93386773547094, 67.78156312625251, 75.62925851703407, 83.47695390781563, 91.3246492985972, 99.17234468937876, 107.02004008016031, 114.86773547094188, 122.71543086172345, 130.56312625250501, 138.41082164328657, 146.25851703406815, 154.1062124248497, 161.95390781563125, 169.80160320641284, 177.6492985971944, 185.49699398797594, 193.34468937875752, 201.19238476953907, 209.04008016032063, 216.8877755511022, 224.73547094188376, 232.58316633266534, 240.4308617234469, 248.27855711422845, 256.12625250501003, 263.9739478957916, 271.82164328657313, 279.6693386773547, 287.5170340681363, 295.36472945891785, 303.2124248496994, 311.06012024048096, 318.9078156312625, 326.75551102204406, 334.60320641282567, 342.4509018036072, 350.2985971943888, 358.14629258517033, 365.9939879759519, 373.8416833667335, 381.68937875751504, 389.5370741482966, 397.38476953907815, 405.2324649298597, 413.08016032064126, 420.92785571142286, 428.7755511022044, 436.62324649298597, 444.4709418837675, 452.3186372745491, 460.1663326653307, 468.01402805611224, 475.8617234468938, 483.70941883767534, 491.5571142284569, 499.40480961923845, 507.25250501002006, 515.1002004008017, 522.9478957915832, 530.7955911823648, 538.6432865731463, 546.4909819639279, 554.3386773547094, 562.186372745491, 570.0340681362726, 577.8817635270541, 585.7294589178357, 593.5771543086172, 601.4248496993988, 609.2725450901804, 617.1202404809619, 624.9679358717435, 632.815631262525, 640.6633266533066, 648.5110220440881, 656.3587174348697, 664.2064128256513, 672.0541082164328, 679.9018036072144, 687.7494989979959, 695.5971943887776, 703.4448897795592, 711.2925851703407, 719.1402805611223, 726.9879759519038, 734.8356713426854, 742.683366733467, 750.5310621242485, 758.3787575150301, 766.2264529058116, 774.0741482965932, 781.9218436873748, 789.7695390781563, 797.6172344689379, 805.4649298597194, 813.312625250501, 821.1603206412825, 829.0080160320641, 836.8557114228457, 844.7034068136272, 852.5511022044088, 860.3987975951903, 868.2464929859719, 876.0941883767536, 883.941883767535, 891.7895791583167, 899.6372745490982, 907.4849699398798, 915.3326653306614, 923.1803607214429, 931.0280561122245, 938.875751503006, 946.7234468937876, 954.5711422845692, 962.4188376753507, 970.2665330661323, 978.1142284569138, 985.9619238476954, 993.8096192384769, 1001.6573146292585, 1009.5050100200401, 1017.3527054108216, 1025.2004008016033, 1033.0480961923847, 1040.8957915831663, 1048.743486973948, 1056.5911823647295, 1064.438877755511, 1072.2865731462925, 1080.1342685370741, 1087.9819639278558, 1095.8296593186374, 1103.6773547094188, 1111.5250501002004, 1119.372745490982, 1127.2204408817636, 1135.0681362725452, 1142.9158316633266, 1150.7635270541082, 1158.6112224448898, 1166.4589178356714, 1174.306613226453, 1182.1543086172344, 1190.002004008016, 1197.8496993987976, 1205.6973947895792, 1213.5450901803608, 1221.3927855711422, 1229.2404809619238, 1237.0881763527054, 1244.935871743487, 1252.7835671342684, 1260.63126252505, 1268.4789579158316, 1276.3266533066133, 1284.1743486973949, 1292.0220440881762, 1299.8697394789579, 1307.7174348697395, 1315.565130260521, 1323.4128256513027, 1331.260521042084, 1339.1082164328657, 1346.9559118236473, 1354.803607214429, 1362.6513026052105, 1370.4989979959919, 1378.3466933867735, 1386.194388777555, 1394.0420841683367, 1401.8897795591183, 1409.7374749498997, 1417.5851703406813, 1425.432865731463, 1433.2805611222445, 1441.1282565130261, 1448.9759519038075, 1456.8236472945891, 1464.6713426853707, 1472.5190380761524, 1480.366733466934, 1488.2144288577153, 1496.062124248497, 1503.9098196392786, 1511.7575150300602, 1519.6052104208418, 1527.4529058116232, 1535.3006012024048, 1543.1482965931864, 1550.995991983968, 1558.8436873747496, 1566.691382765531, 1574.5390781563126, 1582.3867735470942, 1590.2344689378758, 1598.0821643286574, 1605.9298597194388, 1613.7775551102204, 1621.625250501002, 1629.4729458917836, 1637.320641282565, 1645.1683366733466, 1653.0160320641282, 1660.8637274549098, 1668.7114228456915, 1676.5591182364728, 1684.4068136272545, 1692.254509018036, 1700.1022044088177, 1707.9498997995993, 1715.7975951903807, 1723.6452905811623, 1731.4929859719439, 1739.3406813627255, 1747.188376753507, 1755.0360721442885, 1762.88376753507, 1770.7314629258517, 1778.5791583166333, 1786.426853707415, 1794.2745490981963, 1802.122244488978, 1809.9699398797595, 1817.8176352705411, 1825.6653306613227, 1833.5130260521041, 1841.3607214428857, 1849.2084168336673, 1857.056112224449, 1864.9038076152306, 1872.751503006012, 1880.5991983967936, 1888.4468937875752, 1896.2945891783568, 1904.1422845691384, 1911.9899799599198, 1919.8376753507014, 1927.685370741483, 1935.5330661322646, 1943.3807615230462, 1951.2284569138276, 1959.0761523046092, 1966.9238476953908, 1974.7715430861724, 1982.6192384769538, 1990.4669338677354, 1998.314629258517, 2006.1623246492986, 2014.0100200400802, 2021.8577154308616, 2029.7054108216432, 2037.5531062124248, 2045.4008016032064, 2053.248496993988, 2061.0961923847694, 2068.943887775551, 2076.7915831663327, 2084.6392785571143, 2092.486973947896, 2100.3346693386775, 2108.182364729459, 2116.0300601202407, 2123.877755511022, 2131.7254509018035, 2139.573146292585, 2147.4208416833667, 2155.2685370741483, 2163.11623246493, 2170.9639278557115, 2178.811623246493, 2186.6593186372747, 2194.507014028056, 2202.3547094188375, 2210.202404809619, 2218.0501002004007, 2225.8977955911823, 2233.745490981964, 2241.5931863727455, 2249.440881763527, 2257.2885771543088, 2265.1362725450904, 2272.9839679358715, 2280.831663326653, 2288.6793587174348, 2296.5270541082164, 2304.374749498998, 2312.2224448897796, 2320.070140280561, 2327.917835671343, 2335.7655310621244, 2343.613226452906, 2351.460921843687, 2359.308617234469, 2367.1563126252504, 2375.004008016032, 2382.8517034068136, 2390.699398797595, 2398.547094188377, 2406.3947895791584, 2414.24248496994, 2422.0901803607217, 2429.937875751503, 2437.7855711422844, 2445.633266533066, 2453.4809619238476, 2461.3286573146293, 2469.176352705411, 2477.0240480961925, 2484.871743486974, 2492.7194388777557, 2500.567134268537, 2508.4148296593185, 2516.2625250501, 2524.1102204408817, 2531.9579158316633, 2539.805611222445, 2547.6533066132265, 2555.501002004008, 2563.3486973947897, 2571.1963927855713, 2579.0440881763525, 2586.891783567134, 2594.7394789579157, 2602.5871743486973, 2610.434869739479, 2618.2825651302605, 2626.130260521042, 2633.9779559118238, 2641.8256513026054, 2649.673346693387, 2657.521042084168, 2665.3687374749497, 2673.2164328657313, 2681.064128256513, 2688.9118236472946, 2696.759519038076, 2704.607214428858, 2712.4549098196394, 2720.302605210421, 2728.1503006012026, 2735.9979959919838, 2743.8456913827654, 2751.693386773547, 2759.5410821643286, 2767.38877755511, 2775.236472945892, 2783.0841683366734, 2790.931863727455, 2798.7795591182366, 2806.6272545090183, 2814.4749498997994, 2822.322645290581, 2830.1703406813626, 2838.0180360721442, 2845.865731462926, 2853.7134268537075, 2861.561122244489, 2869.4088176352707, 2877.2565130260523, 2885.1042084168334, 2892.951903807615, 2900.7995991983967, 2908.6472945891783, 2916.49498997996, 2924.3426853707415, 2932.190380761523, 2940.0380761523047, 2947.8857715430863, 2955.733466933868, 2963.581162324649, 2971.4288577154307, 2979.2765531062123, 2987.124248496994, 2994.9719438877755, 3002.819639278557, 3010.6673346693387, 3018.5150300601204, 3026.362725450902, 3034.2104208416836, 3042.0581162324647, 3049.9058116232463, 3057.753507014028, 3065.6012024048096, 3073.448897795591, 3081.296593186373, 3089.1442885771544, 3096.991983967936, 3104.8396793587176, 3112.687374749499, 3120.5350701402804, 3128.382765531062, 3136.2304609218436, 3144.078156312625, 3151.925851703407, 3159.7735470941884, 3167.62124248497, 3175.4689378757516, 3183.3166332665332, 3191.164328657315, 3199.012024048096, 3206.8597194388776, 3214.7074148296592, 3222.555110220441, 3230.4028056112224, 3238.250501002004, 3246.0981963927857, 3253.9458917835673, 3261.793587174349, 3269.64128256513, 3277.4889779559117, 3285.3366733466933, 3293.184368737475, 3301.0320641282565, 3308.879759519038, 3316.7274549098197, 3324.5751503006013, 3332.422845691383, 3340.2705410821645, 3348.1182364729457, 3355.9659318637273, 3363.813627254509, 3371.6613226452905, 3379.509018036072, 3387.3567134268537, 3395.2044088176353, 3403.052104208417, 3410.8997995991986, 3418.74749498998, 3426.5951903807613, 3434.442885771543, 3442.2905811623245, 3450.138276553106, 3457.9859719438878, 3465.8336673346694, 3473.681362725451, 3481.5290581162326, 3489.376753507014, 3497.224448897796, 3505.072144288577, 3512.9198396793586, 3520.76753507014, 3528.615230460922, 3536.4629258517034, 3544.310621242485, 3552.1583166332666, 3560.0060120240482, 3567.85370741483, 3575.701402805611, 3583.5490981963926, 3591.396793587174, 3599.244488977956, 3607.0921843687374, 3614.939879759519, 3622.7875751503007, 3630.6352705410823, 3638.482965931864, 3646.3306613226455, 3654.1783567134266, 3662.0260521042082, 3669.87374749499, 3677.7214428857715, 3685.569138276553, 3693.4168336673347, 3701.2645290581163, 3709.112224448898, 3716.9599198396795, 3724.807615230461, 3732.6553106212423, 3740.503006012024, 3748.3507014028055, 3756.198396793587, 3764.0460921843687, 3771.8937875751503, 3779.741482965932, 3787.5891783567135, 3795.436873747495, 3803.2845691382768, 3811.132264529058, 3818.9799599198395, 3826.827655310621, 3834.6753507014027, 3842.5230460921844, 3850.370741482966, 3858.2184368737476, 3866.066132264529, 3873.913827655311, 3881.7615230460924, 3889.6092184368736, 3897.456913827655, 3905.304609218437, 3913.1523046092184, 3921.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_42ed6a7747f147daaa72e70bc1df4507.x = d3.scale.linear()
              .domain([5.0, 3921.0])
              .range([0, 400]);

    color_map_42ed6a7747f147daaa72e70bc1df4507.legend = L.control({position: 'topright'});
    color_map_42ed6a7747f147daaa72e70bc1df4507.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_42ed6a7747f147daaa72e70bc1df4507.legend.addTo(map_fbd8423e35664514a3d2953f11e09504);

    color_map_42ed6a7747f147daaa72e70bc1df4507.xAxis = d3.svg.axis()
        .scale(color_map_42ed6a7747f147daaa72e70bc1df4507.x)
        .orient("top")
        .tickSize(1)
        .tickValues([5.0, 657.6666666666666, 1310.3333333333333, 1963.0, 2615.6666666666665, 3268.333333333333, 3921.0]);

    color_map_42ed6a7747f147daaa72e70bc1df4507.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_42ed6a7747f147daaa72e70bc1df4507.g = color_map_42ed6a7747f147daaa72e70bc1df4507.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_42ed6a7747f147daaa72e70bc1df4507.g.selectAll("rect")
        .data(color_map_42ed6a7747f147daaa72e70bc1df4507.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_42ed6a7747f147daaa72e70bc1df4507.x(color_map_42ed6a7747f147daaa72e70bc1df4507.color.domain()[i - 1]) : color_map_42ed6a7747f147daaa72e70bc1df4507.x.range()[0],
            x1: i < color_map_42ed6a7747f147daaa72e70bc1df4507.color.domain().length ? color_map_42ed6a7747f147daaa72e70bc1df4507.x(color_map_42ed6a7747f147daaa72e70bc1df4507.color.domain()[i]) : color_map_42ed6a7747f147daaa72e70bc1df4507.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_42ed6a7747f147daaa72e70bc1df4507.g.call(color_map_42ed6a7747f147daaa72e70bc1df4507.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('05_50_TALIRIA PETRONE SOARES');

