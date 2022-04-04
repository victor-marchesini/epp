    
            var map_1c7e213944b143659063b26872a47531 = L.map(
                "map_1c7e213944b143659063b26872a47531",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_74f25dda1ee34ae8a2d6f94fc03b0731 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1c7e213944b143659063b26872a47531);
        
    
            var choropleth_76227b803f164c3da38e427e43880195 = L.featureGroup(
                {}
            ).addTo(map_1c7e213944b143659063b26872a47531);
        
    
        function geo_json_fdd6f677e2c745b0a25cb4dec197d47f_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 431: case 349: case 342: case 336: case 460: case 481: case 479: case 391: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 410: case 440: case 448: case 447: case 472: case 470: case 474: case 446: case 444: case 363: case 427: case 419: case 346: case 347: case 457: case 337: case 433: case 409: case 471: case 378: case 389: case 374: case 890: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 455: case 436: case 381: case 369: case 352: case 430: case 511: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 370: case 387: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: case 510: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_fdd6f677e2c745b0a25cb4dec197d47f_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_fdd6f677e2c745b0a25cb4dec197d47f = L.geoJson(null, {
                onEachFeature: geo_json_fdd6f677e2c745b0a25cb4dec197d47f_onEachFeature,
            
                style: geo_json_fdd6f677e2c745b0a25cb4dec197d47f_styler,
        });

        function geo_json_fdd6f677e2c745b0a25cb4dec197d47f_add (data) {
            geo_json_fdd6f677e2c745b0a25cb4dec197d47f
                .addData(data)
                .addTo(choropleth_76227b803f164c3da38e427e43880195);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_fdd6f677e2c745b0a25cb4dec197d47f_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_869085bd20004a9fb3f13218a2c25f4a = {};

    
    color_map_869085bd20004a9fb3f13218a2c25f4a.color = d3.scale.threshold()
              .domain([30.0, 58.71543086172345, 87.4308617234469, 116.14629258517034, 144.8617234468938, 173.57715430861722, 202.2925851703407, 231.00801603206412, 259.7234468937876, 288.43887775551104, 317.15430861723445, 345.8697394789579, 374.5851703406814, 403.30060120240483, 432.01603206412824, 460.7314629258517, 489.44689378757516, 518.1623246492986, 546.8777555110221, 575.5931863727454, 604.3086172344689, 633.0240480961924, 661.7394789579158, 690.4549098196393, 719.1703406813627, 747.8857715430862, 776.6012024048097, 805.316633266533, 834.0320641282565, 862.7474949899799, 891.4629258517034, 920.1783567134269, 948.8937875751503, 977.6092184368738, 1006.3246492985973, 1035.0400801603205, 1063.7555110220442, 1092.4709418837676, 1121.1863727454909, 1149.9018036072143, 1178.6172344689378, 1207.3326653306613, 1236.0480961923847, 1264.7635270541082, 1293.4789579158316, 1322.194388777555, 1350.9098196392786, 1379.625250501002, 1408.3406813627255, 1437.056112224449, 1465.7715430861724, 1494.4869739478959, 1523.2024048096193, 1551.9178356713426, 1580.633266533066, 1609.3486973947895, 1638.064128256513, 1666.7795591182364, 1695.4949899799599, 1724.2104208416833, 1752.9258517034068, 1781.6412825651303, 1810.3567134268537, 1839.0721442885772, 1867.7875751503007, 1896.5030060120241, 1925.2184368737476, 1953.933867735471, 1982.6492985971945, 2011.3647294589177, 2040.0801603206412, 2068.7955911823647, 2097.5110220440883, 2126.2264529058116, 2154.9418837675353, 2183.6573146292585, 2212.3727454909817, 2241.0881763527054, 2269.8036072144287, 2298.5190380761524, 2327.2344689378756, 2355.9498997995993, 2384.6653306613225, 2413.380761523046, 2442.0961923847694, 2470.811623246493, 2499.5270541082164, 2528.24248496994, 2556.9579158316633, 2585.673346693387, 2614.38877755511, 2643.1042084168334, 2671.819639278557, 2700.5350701402804, 2729.250501002004, 2757.9659318637273, 2786.681362725451, 2815.396793587174, 2844.112224448898, 2872.827655310621, 2901.543086172345, 2930.258517034068, 2958.9739478957918, 2987.689378757515, 3016.4048096192387, 3045.120240480962, 3073.835671342685, 3102.551102204409, 3131.266533066132, 3159.9819639278558, 3188.697394789579, 3217.4128256513027, 3246.128256513026, 3274.8436873747496, 3303.559118236473, 3332.2745490981965, 3360.9899799599198, 3389.7054108216435, 3418.4208416833667, 3447.1362725450904, 3475.8517034068136, 3504.567134268537, 3533.2825651302605, 3561.9979959919838, 3590.7134268537075, 3619.4288577154307, 3648.1442885771544, 3676.8597194388776, 3705.5751503006013, 3734.2905811623245, 3763.0060120240482, 3791.7214428857715, 3820.436873747495, 3849.1523046092184, 3877.867735470942, 3906.5831663326653, 3935.298597194389, 3964.0140280561122, 3992.7294589178355, 4021.444889779559, 4050.1603206412824, 4078.875751503006, 4107.591182364729, 4136.306613226453, 4165.022044088177, 4193.7374749498995, 4222.452905811623, 4251.168336673347, 4279.883767535071, 4308.599198396793, 4337.314629258517, 4366.030060120241, 4394.7454909819635, 4423.460921843687, 4452.176352705411, 4480.891783567135, 4509.607214428857, 4538.322645290581, 4567.038076152305, 4595.753507014028, 4624.468937875751, 4653.184368737475, 4681.899799599199, 4710.615230460922, 4739.330661322645, 4768.046092184369, 4796.761523046092, 4825.476953907815, 4854.192384769539, 4882.907815631263, 4911.623246492986, 4940.338677354709, 4969.054108216433, 4997.769539078156, 5026.48496993988, 5055.200400801603, 5083.915831663327, 5112.63126252505, 5141.346693386774, 5170.062124248497, 5198.77755511022, 5227.492985971944, 5256.208416833667, 5284.923847695391, 5313.639278557114, 5342.354709418838, 5371.070140280561, 5399.785571142284, 5428.501002004008, 5457.216432865732, 5485.931863727455, 5514.647294589178, 5543.362725450902, 5572.078156312626, 5600.793587174348, 5629.509018036072, 5658.224448897796, 5686.939879759519, 5715.655310621242, 5744.370741482966, 5773.08617234469, 5801.801603206412, 5830.517034068136, 5859.23246492986, 5887.9478957915835, 5916.663326653306, 5945.37875751503, 5974.094188376754, 6002.809619238477, 6031.5250501002, 6060.240480961924, 6088.9559118236475, 6117.67134268537, 6146.386773547094, 6175.102204408818, 6203.817635270541, 6232.533066132264, 6261.248496993988, 6289.9639278557115, 6318.679358717435, 6347.394789579158, 6376.110220440882, 6404.825651302605, 6433.541082164329, 6462.256513026052, 6490.9719438877755, 6519.687374749499, 6548.402805611222, 6577.118236472946, 6605.833667334669, 6634.549098196393, 6663.264529058116, 6691.9799599198395, 6720.695390781563, 6749.410821643287, 6778.12625250501, 6806.841683366733, 6835.557114228457, 6864.272545090181, 6892.9879759519035, 6921.703406813627, 6950.418837675351, 6979.134268537074, 7007.849699398797, 7036.565130260521, 7065.280561122245, 7093.9959919839675, 7122.711422845691, 7151.426853707415, 7180.142284569139, 7208.857715430861, 7237.573146292585, 7266.288577154309, 7295.0040080160325, 7323.719438877755, 7352.434869739479, 7381.150300601203, 7409.865731462926, 7438.581162324649, 7467.296593186373, 7496.0120240480965, 7524.727454909819, 7553.442885771543, 7582.158316633267, 7610.87374749499, 7639.589178356713, 7668.304609218437, 7697.0200400801605, 7725.735470941884, 7754.450901803607, 7783.166332665331, 7811.881763527054, 7840.597194388778, 7869.312625250501, 7898.0280561122245, 7926.743486973948, 7955.458917835671, 7984.174348697395, 8012.889779559118, 8041.605210420842, 8070.320641282565, 8099.0360721442885, 8127.751503006012, 8156.466933867736, 8185.182364729459, 8213.897795591183, 8242.613226452906, 8271.328657314629, 8300.044088176353, 8328.759519038076, 8357.474949899799, 8386.190380761524, 8414.905811623246, 8443.62124248497, 8472.336673346694, 8501.052104208416, 8529.767535070141, 8558.482965931864, 8587.198396793587, 8615.913827655311, 8644.629258517034, 8673.344689378757, 8702.060120240481, 8730.775551102204, 8759.490981963927, 8788.206412825652, 8816.921843687374, 8845.637274549099, 8874.352705410822, 8903.068136272545, 8931.78356713427, 8960.498997995992, 8989.214428857715, 9017.92985971944, 9046.645290581162, 9075.360721442887, 9104.07615230461, 9132.791583166332, 9161.507014028057, 9190.22244488978, 9218.937875751502, 9247.653306613227, 9276.36873747495, 9305.084168336673, 9333.799599198397, 9362.51503006012, 9391.230460921844, 9419.945891783567, 9448.66132264529, 9477.376753507015, 9506.092184368737, 9534.80761523046, 9563.523046092185, 9592.238476953908, 9620.95390781563, 9649.669338677355, 9678.384769539078, 9707.100200400802, 9735.815631262525, 9764.531062124248, 9793.246492985973, 9821.961923847695, 9850.677354709418, 9879.392785571143, 9908.108216432865, 9936.82364729459, 9965.539078156313, 9994.254509018036, 10022.96993987976, 10051.685370741483, 10080.400801603206, 10109.11623246493, 10137.831663326653, 10166.547094188376, 10195.2625250501, 10223.977955911823, 10252.693386773548, 10281.40881763527, 10310.124248496993, 10338.839679358718, 10367.55511022044, 10396.270541082164, 10424.985971943888, 10453.701402805611, 10482.416833667334, 10511.132264529058, 10539.847695390781, 10568.563126252506, 10597.278557114229, 10625.993987975951, 10654.709418837676, 10683.424849699399, 10712.140280561121, 10740.855711422846, 10769.571142284569, 10798.286573146293, 10827.002004008016, 10855.717434869739, 10884.432865731464, 10913.148296593186, 10941.86372745491, 10970.579158316634, 10999.294589178357, 11028.01002004008, 11056.725450901804, 11085.440881763527, 11114.156312625251, 11142.871743486974, 11171.587174348697, 11200.302605210421, 11229.018036072144, 11257.733466933867, 11286.448897795592, 11315.164328657314, 11343.879759519037, 11372.595190380762, 11401.310621242485, 11430.02605210421, 11458.741482965932, 11487.456913827655, 11516.17234468938, 11544.887775551102, 11573.603206412825, 11602.31863727455, 11631.034068136272, 11659.749498997997, 11688.46492985972, 11717.180360721442, 11745.895791583167, 11774.61122244489, 11803.326653306613, 11832.042084168337, 11860.75751503006, 11889.472945891783, 11918.188376753507, 11946.90380761523, 11975.619238476955, 12004.334669338677, 12033.0501002004, 12061.765531062125, 12090.480961923848, 12119.19639278557, 12147.911823647295, 12176.627254509018, 12205.34268537074, 12234.058116232465, 12262.773547094188, 12291.488977955913, 12320.204408817635, 12348.919839679358, 12377.635270541083, 12406.350701402805, 12435.066132264528, 12463.781563126253, 12492.496993987976, 12521.2124248497, 12549.927855711423, 12578.643286573146, 12607.35871743487, 12636.074148296593, 12664.789579158316, 12693.50501002004, 12722.220440881763, 12750.935871743486, 12779.65130260521, 12808.366733466934, 12837.082164328658, 12865.79759519038, 12894.513026052104, 12923.228456913828, 12951.943887775551, 12980.659318637274, 13009.374749498998, 13038.090180360721, 13066.805611222444, 13095.521042084169, 13124.236472945891, 13152.951903807616, 13181.667334669339, 13210.382765531062, 13239.098196392786, 13267.813627254509, 13296.529058116232, 13325.244488977956, 13353.959919839679, 13382.675350701404, 13411.390781563126, 13440.10621242485, 13468.821643286574, 13497.537074148297, 13526.25250501002, 13554.967935871744, 13583.683366733467, 13612.39879759519, 13641.114228456914, 13669.829659318637, 13698.545090180362, 13727.260521042084, 13755.975951903807, 13784.691382765532, 13813.406813627254, 13842.122244488977, 13870.837675350702, 13899.553106212425, 13928.268537074147, 13956.983967935872, 13985.699398797595, 14014.41482965932, 14043.130260521042, 14071.845691382765, 14100.56112224449, 14129.276553106212, 14157.991983967935, 14186.70741482966, 14215.422845691382, 14244.138276553107, 14272.85370741483, 14301.569138276553, 14330.284569138277, 14359.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_869085bd20004a9fb3f13218a2c25f4a.x = d3.scale.linear()
              .domain([30.0, 14359.0])
              .range([0, 400]);

    color_map_869085bd20004a9fb3f13218a2c25f4a.legend = L.control({position: 'topright'});
    color_map_869085bd20004a9fb3f13218a2c25f4a.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_869085bd20004a9fb3f13218a2c25f4a.legend.addTo(map_1c7e213944b143659063b26872a47531);

    color_map_869085bd20004a9fb3f13218a2c25f4a.xAxis = d3.svg.axis()
        .scale(color_map_869085bd20004a9fb3f13218a2c25f4a.x)
        .orient("top")
        .tickSize(1)
        .tickValues([30.0, 2418.1666666666665, 4806.333333333333, 7194.5, 9582.666666666666, 11970.833333333332, 14359.0]);

    color_map_869085bd20004a9fb3f13218a2c25f4a.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_869085bd20004a9fb3f13218a2c25f4a.g = color_map_869085bd20004a9fb3f13218a2c25f4a.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_869085bd20004a9fb3f13218a2c25f4a.g.selectAll("rect")
        .data(color_map_869085bd20004a9fb3f13218a2c25f4a.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_869085bd20004a9fb3f13218a2c25f4a.x(color_map_869085bd20004a9fb3f13218a2c25f4a.color.domain()[i - 1]) : color_map_869085bd20004a9fb3f13218a2c25f4a.x.range()[0],
            x1: i < color_map_869085bd20004a9fb3f13218a2c25f4a.color.domain().length ? color_map_869085bd20004a9fb3f13218a2c25f4a.x(color_map_869085bd20004a9fb3f13218a2c25f4a.color.domain()[i]) : color_map_869085bd20004a9fb3f13218a2c25f4a.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_869085bd20004a9fb3f13218a2c25f4a.g.call(color_map_869085bd20004a9fb3f13218a2c25f4a.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('03_13_BENEDITA SOUZA DA SILVA');

