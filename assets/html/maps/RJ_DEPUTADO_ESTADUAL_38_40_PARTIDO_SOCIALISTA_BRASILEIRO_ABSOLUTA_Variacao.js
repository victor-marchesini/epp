    
            var map_d435bfe070224e05a66a79c26c837b79 = L.map(
                "map_d435bfe070224e05a66a79c26c837b79",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_11e5343d490f43c79121c6d61973639b = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_d435bfe070224e05a66a79c26c837b79);
        
    
            var choropleth_0941c550ae7b430abff0d0c6ee9e5d7f = L.featureGroup(
                {}
            ).addTo(map_d435bfe070224e05a66a79c26c837b79);
        
    
        function geo_json_be1a742fc4d74a33b505192f297ffcb7_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 366: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_be1a742fc4d74a33b505192f297ffcb7_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_be1a742fc4d74a33b505192f297ffcb7 = L.geoJson(null, {
                onEachFeature: geo_json_be1a742fc4d74a33b505192f297ffcb7_onEachFeature,
            
                style: geo_json_be1a742fc4d74a33b505192f297ffcb7_styler,
        });

        function geo_json_be1a742fc4d74a33b505192f297ffcb7_add (data) {
            geo_json_be1a742fc4d74a33b505192f297ffcb7
                .addData(data)
                .addTo(choropleth_0941c550ae7b430abff0d0c6ee9e5d7f);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_be1a742fc4d74a33b505192f297ffcb7_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_0fabf83a81894eea92e32a865fadd403 = {};

    
    color_map_0fabf83a81894eea92e32a865fadd403.color = d3.scale.threshold()
              .domain([-11360.0, -11337.134268537075, -11314.26853707415, -11291.402805611222, -11268.537074148297, -11245.671342685371, -11222.805611222444, -11199.939879759519, -11177.074148296593, -11154.208416833668, -11131.342685370742, -11108.476953907815, -11085.61122244489, -11062.745490981964, -11039.879759519037, -11017.014028056112, -10994.148296593186, -10971.282565130261, -10948.416833667336, -10925.551102204408, -10902.685370741483, -10879.819639278558, -10856.95390781563, -10834.088176352705, -10811.22244488978, -10788.356713426854, -10765.490981963929, -10742.625250501002, -10719.759519038076, -10696.89378757515, -10674.028056112224, -10651.162324649298, -10628.296593186373, -10605.430861723447, -10582.565130260522, -10559.699398797595, -10536.83366733467, -10513.967935871744, -10491.102204408817, -10468.236472945891, -10445.370741482966, -10422.50501002004, -10399.639278557115, -10376.773547094188, -10353.907815631263, -10331.042084168337, -10308.17635270541, -10285.310621242485, -10262.44488977956, -10239.579158316634, -10216.713426853708, -10193.847695390781, -10170.981963927856, -10148.11623246493, -10125.250501002003, -10102.384769539078, -10079.519038076152, -10056.653306613227, -10033.787575150302, -10010.921843687374, -9988.056112224449, -9965.190380761524, -9942.324649298596, -9919.458917835671, -9896.593186372746, -9873.72745490982, -9850.861723446895, -9827.995991983968, -9805.130260521042, -9782.264529058117, -9759.39879759519, -9736.533066132264, -9713.667334669339, -9690.801603206413, -9667.935871743488, -9645.07014028056, -9622.204408817635, -9599.33867735471, -9576.472945891783, -9553.607214428857, -9530.741482965932, -9507.875751503007, -9485.010020040081, -9462.144288577154, -9439.278557114229, -9416.412825651303, -9393.547094188376, -9370.68136272545, -9347.815631262525, -9324.9498997996, -9302.084168336674, -9279.218436873747, -9256.352705410822, -9233.486973947896, -9210.62124248497, -9187.755511022044, -9164.889779559118, -9142.024048096193, -9119.158316633268, -9096.29258517034, -9073.426853707415, -9050.56112224449, -9027.695390781562, -9004.829659318637, -8981.963927855712, -8959.098196392786, -8936.23246492986, -8913.366733466934, -8890.501002004008, -8867.635270541083, -8844.769539078156, -8821.90380761523, -8799.038076152305, -8776.17234468938, -8753.306613226454, -8730.440881763527, -8707.575150300601, -8684.709418837676, -8661.843687374749, -8638.977955911823, -8616.112224448898, -8593.246492985973, -8570.380761523047, -8547.51503006012, -8524.649298597195, -8501.78356713427, -8478.917835671342, -8456.052104208416, -8433.186372745491, -8410.320641282566, -8387.45490981964, -8364.589178356713, -8341.723446893788, -8318.857715430862, -8295.991983967935, -8273.12625250501, -8250.260521042084, -8227.394789579159, -8204.529058116234, -8181.663326653306, -8158.797595190381, -8135.9318637274555, -8113.066132264529, -8090.200400801603, -8067.3346693386775, -8044.468937875752, -8021.603206412826, -7998.7374749498995, -7975.871743486974, -7953.006012024049, -7930.140280561122, -7907.274549098196, -7884.408817635271, -7861.543086172345, -7838.677354709419, -7815.811623246493, -7792.945891783567, -7770.080160320642, -7747.214428857716, -7724.348697394789, -7701.482965931864, -7678.6172344689385, -7655.751503006012, -7632.885771543086, -7610.0200400801605, -7587.154308617235, -7564.288577154309, -7541.4228456913825, -7518.557114228457, -7495.691382765532, -7472.825651302605, -7449.959919839679, -7427.094188376754, -7404.228456913828, -7381.362725450902, -7358.496993987976, -7335.63126252505, -7312.765531062125, -7289.899799599199, -7267.034068136272, -7244.168336673347, -7221.302605210421, -7198.436873747495, -7175.571142284569, -7152.705410821643, -7129.839679358717, -7106.973947895792, -7084.108216432865, -7061.24248496994, -7038.376753507014, -7015.511022044088, -6992.645290581162, -6969.779559118237, -6946.91382765531, -6924.048096192385, -6901.182364729459, -6878.316633266533, -6855.450901803607, -6832.5851703406815, -6809.719438877755, -6786.85370741483, -6763.9879759519035, -6741.122244488978, -6718.256513026052, -6695.390781563126, -6672.5250501002, -6649.659318637275, -6626.793587174348, -6603.927855711423, -6581.062124248497, -6558.196392785571, -6535.330661322645, -6512.46492985972, -6489.599198396793, -6466.733466933868, -6443.867735470942, -6421.002004008016, -6398.13627254509, -6375.2705410821645, -6352.404809619238, -6329.539078156313, -6306.6733466933865, -6283.807615230461, -6260.941883767535, -6238.076152304609, -6215.210420841683, -6192.344689378758, -6169.478957915831, -6146.613226452906, -6123.74749498998, -6100.881763527054, -6078.016032064128, -6055.150300601203, -6032.284569138276, -6009.418837675351, -5986.553106212425, -5963.687374749499, -5940.821643286573, -5917.9559118236475, -5895.090180360721, -5872.224448897796, -5849.3587174348695, -5826.492985971944, -5803.627254509018, -5780.761523046092, -5757.895791583166, -5735.030060120241, -5712.164328657314, -5689.298597194389, -5666.432865731463, -5643.567134268537, -5620.701402805611, -5597.835671342686, -5574.969939879759, -5552.104208416834, -5529.238476953908, -5506.372745490982, -5483.507014028056, -5460.6412825651305, -5437.775551102204, -5414.909819639279, -5392.0440881763525, -5369.178356713427, -5346.312625250501, -5323.446893787575, -5300.581162324649, -5277.715430861724, -5254.849699398797, -5231.983967935872, -5209.118236472946, -5186.25250501002, -5163.386773547094, -5140.521042084169, -5117.655310621242, -5094.789579158317, -5071.923847695391, -5049.058116232465, -5026.192384769539, -5003.3266533066135, -4980.460921843687, -4957.595190380762, -4934.7294589178355, -4911.86372745491, -4888.997995991984, -4866.132264529058, -4843.266533066132, -4820.400801603207, -4797.53507014028, -4774.669338677355, -4751.803607214429, -4728.937875751503, -4706.072144288577, -4683.206412825652, -4660.340681362725, -4637.4749498998, -4614.609218436874, -4591.743486973948, -4568.877755511022, -4546.0120240480965, -4523.14629258517, -4500.280561122245, -4477.4148296593185, -4454.549098196393, -4431.683366733467, -4408.817635270541, -4385.951903807615, -4363.08617234469, -4340.220440881763, -4317.354709418838, -4294.488977955912, -4271.623246492986, -4248.75751503006, -4225.891783567135, -4203.026052104208, -4180.160320641283, -4157.294589178357, -4134.428857715431, -4111.563126252505, -4088.6973947895794, -4065.831663326653, -4042.9659318637277, -4020.1002004008014, -3997.234468937876, -3974.3687374749497, -3951.5030060120243, -3928.637274549098, -3905.7715430861726, -3882.9058116232463, -3860.040080160321, -3837.1743486973946, -3814.3086172344692, -3791.442885771543, -3768.5771543086175, -3745.7114228456912, -3722.845691382766, -3699.9799599198395, -3677.114228456914, -3654.248496993988, -3631.3827655310624, -3608.517034068136, -3585.6513026052107, -3562.7855711422844, -3539.919839679359, -3517.0541082164327, -3494.1883767535073, -3471.322645290581, -3448.4569138276556, -3425.5911823647293, -3402.725450901804, -3379.8597194388776, -3356.993987975952, -3334.128256513026, -3311.2625250501005, -3288.396793587174, -3265.531062124249, -3242.6653306613225, -3219.799599198397, -3196.933867735471, -3174.0681362725454, -3151.202404809619, -3128.3366733466937, -3105.4709418837683, -3082.605210420841, -3059.7394789579157, -3036.8737474949903, -3014.008016032065, -2991.1422845691377, -2968.2765531062123, -2945.410821643287, -2922.5450901803615, -2899.6793587174343, -2876.813627254509, -2853.9478957915835, -2831.082164328658, -2808.216432865731, -2785.3507014028055, -2762.48496993988, -2739.6192384769547, -2716.7535070140275, -2693.887775551102, -2671.0220440881767, -2648.1563126252513, -2625.290581162324, -2602.4248496993987, -2579.5591182364733, -2556.693386773548, -2533.8276553106207, -2510.9619238476953, -2488.09619238477, -2465.2304609218445, -2442.3647294589173, -2419.498997995992, -2396.6332665330665, -2373.767535070141, -2350.901803607214, -2328.0360721442885, -2305.170340681363, -2282.3046092184377, -2259.4388777555105, -2236.573146292585, -2213.7074148296597, -2190.8416833667343, -2167.975951903807, -2145.1102204408817, -2122.2444889779563, -2099.378757515031, -2076.5130260521037, -2053.6472945891783, -2030.7815631262529, -2007.9158316633275, -1985.0501002004003, -1962.1843687374749, -1939.3186372745495, -1916.452905811624, -1893.5871743486969, -1870.7214428857715, -1847.855711422846, -1824.9899799599207, -1802.1242484969935, -1779.258517034068, -1756.3927855711427, -1733.5270541082173, -1710.66132264529, -1687.7955911823647, -1664.9298597194393, -1642.0641282565139, -1619.1983967935867, -1596.3326653306613, -1573.4669338677359, -1550.6012024048105, -1527.7354709418832, -1504.8697394789579, -1482.0040080160325, -1459.138276553107, -1436.2725450901798, -1413.4068136272545, -1390.541082164329, -1367.6753507014037, -1344.8096192384764, -1321.943887775551, -1299.0781563126257, -1276.2124248497003, -1253.346693386773, -1230.4809619238476, -1207.6152304609222, -1184.7494989979969, -1161.8837675350696, -1139.0180360721442, -1116.1523046092188, -1093.2865731462934, -1070.4208416833662, -1047.5551102204408, -1024.6893787575154, -1001.82364729459, -978.9579158316628, -956.0921843687374, -933.226452905812, -910.3607214428866, -887.4949899799594, -864.629258517034, -841.7635270541086, -818.8977955911832, -796.032064128256, -773.1663326653306, -750.3006012024052, -727.4348697394798, -704.5691382765526, -681.7034068136272, -658.8376753507018, -635.9719438877764, -613.1062124248492, -590.2404809619238, -567.3747494989984, -544.509018036073, -521.6432865731458, -498.7775551102204, -475.911823647295, -453.0460921843696, -430.1803607214424, -407.314629258517, -384.4488977955916, -361.5831663326662, -338.717434869739, -315.8517034068136, -292.9859719438882, -270.1202404809628, -247.2545090180356, -224.3887775551102, -201.5230460921848, -178.65731462925942, -155.7915831663322, -132.9258517034068, -110.06012024048141, -87.19438877755601, -64.3286573146288, -41.4629258517034, -18.597194388778007, 4.268537074147389, 27.134268537074604, 50.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_0fabf83a81894eea92e32a865fadd403.x = d3.scale.linear()
              .domain([-11360.0, 50.0])
              .range([0, 400]);

    color_map_0fabf83a81894eea92e32a865fadd403.legend = L.control({position: 'topright'});
    color_map_0fabf83a81894eea92e32a865fadd403.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_0fabf83a81894eea92e32a865fadd403.legend.addTo(map_d435bfe070224e05a66a79c26c837b79);

    color_map_0fabf83a81894eea92e32a865fadd403.xAxis = d3.svg.axis()
        .scale(color_map_0fabf83a81894eea92e32a865fadd403.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-11360.0, -9458.333333333334, -7556.666666666666, -5655.0, -3753.333333333333, -1851.666666666666, 50.0]);

    color_map_0fabf83a81894eea92e32a865fadd403.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_0fabf83a81894eea92e32a865fadd403.g = color_map_0fabf83a81894eea92e32a865fadd403.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_0fabf83a81894eea92e32a865fadd403.g.selectAll("rect")
        .data(color_map_0fabf83a81894eea92e32a865fadd403.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_0fabf83a81894eea92e32a865fadd403.x(color_map_0fabf83a81894eea92e32a865fadd403.color.domain()[i - 1]) : color_map_0fabf83a81894eea92e32a865fadd403.x.range()[0],
            x1: i < color_map_0fabf83a81894eea92e32a865fadd403.color.domain().length ? color_map_0fabf83a81894eea92e32a865fadd403.x(color_map_0fabf83a81894eea92e32a865fadd403.color.domain()[i]) : color_map_0fabf83a81894eea92e32a865fadd403.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_0fabf83a81894eea92e32a865fadd403.g.call(color_map_0fabf83a81894eea92e32a865fadd403.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('38_40_Partido Socialista Brasileiro');

