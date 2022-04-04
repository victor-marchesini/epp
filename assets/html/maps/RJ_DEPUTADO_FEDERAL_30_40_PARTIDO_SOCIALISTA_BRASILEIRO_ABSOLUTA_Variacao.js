    
            var map_a48407444dda4e8c9c6652f1c65403c3 = L.map(
                "map_a48407444dda4e8c9c6652f1c65403c3",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_8d98e96ab5494248ab8266dbe116a7c6 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_a48407444dda4e8c9c6652f1c65403c3);
        
    
            var choropleth_3d31fe4fbb474451b384895328debca7 = L.featureGroup(
                {}
            ).addTo(map_a48407444dda4e8c9c6652f1c65403c3);
        
    
        function geo_json_f8d26b2357cb4fdea8ba54872a8e1273_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 426: case 423: case 431: case 404: case 349: case 342: case 336: case 358: case 460: case 475: case 481: case 479: case 366: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_f8d26b2357cb4fdea8ba54872a8e1273_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_f8d26b2357cb4fdea8ba54872a8e1273 = L.geoJson(null, {
                onEachFeature: geo_json_f8d26b2357cb4fdea8ba54872a8e1273_onEachFeature,
            
                style: geo_json_f8d26b2357cb4fdea8ba54872a8e1273_styler,
        });

        function geo_json_f8d26b2357cb4fdea8ba54872a8e1273_add (data) {
            geo_json_f8d26b2357cb4fdea8ba54872a8e1273
                .addData(data)
                .addTo(choropleth_3d31fe4fbb474451b384895328debca7);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_f8d26b2357cb4fdea8ba54872a8e1273_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_01b0b5d0b2b4483091cd7b56007340ca = {};

    
    color_map_01b0b5d0b2b4483091cd7b56007340ca.color = d3.scale.threshold()
              .domain([-20282.0, -20241.312625250503, -20200.625250501, -20159.937875751504, -20119.250501002003, -20078.563126252506, -20037.875751503005, -19997.188376753507, -19956.501002004006, -19915.81362725451, -19875.12625250501, -19834.43887775551, -19793.751503006013, -19753.064128256512, -19712.376753507015, -19671.689378757514, -19631.002004008016, -19590.314629258515, -19549.627254509018, -19508.93987975952, -19468.25250501002, -19427.565130260522, -19386.87775551102, -19346.190380761524, -19305.503006012023, -19264.815631262525, -19224.128256513028, -19183.440881763527, -19142.75350701403, -19102.06613226453, -19061.37875751503, -19020.69138276553, -18980.004008016032, -18939.31663326653, -18898.629258517034, -18857.941883767537, -18817.254509018036, -18776.56713426854, -18735.879759519037, -18695.19238476954, -18654.50501002004, -18613.81763527054, -18573.130260521044, -18532.442885771543, -18491.755511022046, -18451.068136272545, -18410.380761523047, -18369.693386773546, -18329.00601202405, -18288.318637274548, -18247.63126252505, -18206.943887775553, -18166.256513026052, -18125.569138276554, -18084.881763527053, -18044.194388777556, -18003.507014028055, -17962.819639278558, -17922.132264529057, -17881.44488977956, -17840.75751503006, -17800.07014028056, -17759.382765531063, -17718.695390781562, -17678.008016032065, -17637.320641282564, -17596.633266533066, -17555.945891783565, -17515.258517034068, -17474.57114228457, -17433.88376753507, -17393.196392785572, -17352.50901803607, -17311.821643286574, -17271.134268537073, -17230.446893787575, -17189.759519038074, -17149.072144288577, -17108.38476953908, -17067.69739478958, -17027.01002004008, -16986.32264529058, -16945.635270541083, -16904.94789579158, -16864.260521042084, -16823.573146292583, -16782.885771543086, -16742.19839679359, -16701.511022044087, -16660.82364729459, -16620.13627254509, -16579.44889779559, -16538.761523046094, -16498.074148296593, -16457.386773547092, -16416.699398797595, -16376.012024048096, -16335.324649298596, -16294.637274549099, -16253.9498997996, -16213.2625250501, -16172.575150300601, -16131.887775551102, -16091.200400801603, -16050.513026052104, -16009.825651302606, -15969.138276553105, -15928.450901803608, -15887.763527054109, -15847.07615230461, -15806.38877755511, -15765.701402805611, -15725.014028056112, -15684.326653306613, -15643.639278557115, -15602.951903807614, -15562.264529058117, -15521.577154308618, -15480.889779559118, -15440.20240480962, -15399.51503006012, -15358.827655310623, -15318.140280561121, -15277.452905811624, -15236.765531062123, -15196.078156312626, -15155.390781563126, -15114.703406813627, -15074.016032064128, -15033.328657314629, -14992.641282565131, -14951.95390781563, -14911.266533066133, -14870.579158316632, -14829.891783567135, -14789.204408817635, -14748.517034068136, -14707.829659318637, -14667.142284569138, -14626.45490981964, -14585.76753507014, -14545.080160320642, -14504.392785571143, -14463.705410821643, -14423.018036072144, -14382.330661322645, -14341.643286573148, -14300.955911823647, -14260.26853707415, -14219.581162324648, -14178.89378757515, -14138.206412825652, -14097.519038076152, -14056.831663326653, -14016.144288577154, -13975.456913827657, -13934.769539078156, -13894.082164328658, -13853.394789579157, -13812.70741482966, -13772.02004008016, -13731.332665330661, -13690.645290581162, -13649.957915831663, -13609.270541082165, -13568.583166332664, -13527.895791583167, -13487.208416833666, -13446.521042084169, -13405.83366733467, -13365.14629258517, -13324.458917835671, -13283.771543086172, -13243.084168336674, -13202.396793587173, -13161.709418837676, -13121.022044088177, -13080.334669338677, -13039.647294589178, -12998.959919839679, -12958.272545090182, -12917.58517034068, -12876.897795591183, -12836.210420841682, -12795.523046092185, -12754.835671342686, -12714.148296593186, -12673.460921843687, -12632.773547094188, -12592.08617234469, -12551.39879759519, -12510.711422845692, -12470.024048096191, -12429.336673346694, -12388.649298597195, -12347.961923847695, -12307.274549098196, -12266.587174348697, -12225.8997995992, -12185.212424849698, -12144.525050100201, -12103.837675350702, -12063.150300601203, -12022.462925851703, -11981.775551102204, -11941.088176352705, -11900.400801603206, -11859.713426853707, -11819.02605210421, -11778.33867735471, -11737.65130260521, -11696.963927855712, -11656.276553106212, -11615.589178356713, -11574.901803607214, -11534.214428857715, -11493.527054108217, -11452.839679358718, -11412.152304609219, -11371.46492985972, -11330.77755511022, -11290.090180360721, -11249.402805611222, -11208.715430861723, -11168.028056112224, -11127.340681362726, -11086.653306613227, -11045.965931863728, -11005.278557114229, -10964.59118236473, -10923.90380761523, -10883.21643286573, -10842.529058116232, -10801.841683366734, -10761.154308617235, -10720.466933867736, -10679.779559118237, -10639.092184368737, -10598.404809619238, -10557.717434869739, -10517.03006012024, -10476.34268537074, -10435.655310621243, -10394.967935871744, -10354.280561122245, -10313.593186372746, -10272.905811623246, -10232.218436873747, -10191.531062124248, -10150.843687374749, -10110.156312625251, -10069.468937875752, -10028.781563126253, -9988.094188376754, -9947.406813627254, -9906.719438877755, -9866.032064128256, -9825.344689378757, -9784.65731462926, -9743.96993987976, -9703.282565130261, -9662.595190380762, -9621.907815631263, -9581.220440881763, -9540.533066132264, -9499.845691382765, -9459.158316633266, -9418.470941883768, -9377.78356713427, -9337.09619238477, -9296.40881763527, -9255.721442885771, -9215.034068136272, -9174.346693386773, -9133.659318637274, -9092.971943887776, -9052.284569138277, -9011.597194388778, -8970.909819639279, -8930.22244488978, -8889.53507014028, -8848.847695390781, -8808.160320641282, -8767.472945891783, -8726.785571142285, -8686.098196392786, -8645.410821643287, -8604.723446893788, -8564.036072144288, -8523.34869739479, -8482.66132264529, -8441.97394789579, -8401.286573146293, -8360.599198396794, -8319.911823647295, -8279.224448897796, -8238.537074148297, -8197.849699398797, -8157.162324649298, -8116.474949899799, -8075.7875751503, -8035.100200400802, -7994.412825651303, -7953.725450901804, -7913.038076152305, -7872.3507014028055, -7831.663326653306, -7790.975951903807, -7750.288577154308, -7709.6012024048105, -7668.913827655311, -7628.226452905812, -7587.539078156313, -7546.851703406814, -7506.164328657314, -7465.476953907815, -7424.789579158316, -7384.102204408817, -7343.414829659319, -7302.72745490982, -7262.040080160321, -7221.352705410822, -7180.6653306613225, -7139.977955911823, -7099.290581162324, -7058.603206412825, -7017.9158316633275, -6977.228456913828, -6936.541082164329, -6895.85370741483, -6855.166332665331, -6814.478957915831, -6773.791583166332, -6733.104208416833, -6692.416833667334, -6651.729458917836, -6611.042084168337, -6570.354709418838, -6529.667334669339, -6488.9799599198395, -6448.29258517034, -6407.605210420841, -6366.917835671342, -6326.2304609218445, -6285.543086172345, -6244.855711422846, -6204.168336673347, -6163.480961923848, -6122.793587174348, -6082.106212424849, -6041.41883767535, -6000.731462925853, -5960.044088176353, -5919.356713426854, -5878.669338677355, -5837.981963927856, -5797.294589178357, -5756.607214428857, -5715.919839679358, -5675.232464929859, -5634.5450901803615, -5593.857715430862, -5553.170340681363, -5512.482965931864, -5471.795591182365, -5431.108216432865, -5390.420841683366, -5349.733466933867, -5309.04609218437, -5268.35871743487, -5227.671342685371, -5186.983967935872, -5146.296593186373, -5105.609218436874, -5064.921843687374, -5024.234468937875, -4983.547094188376, -4942.8597194388785, -4902.172344689379, -4861.48496993988, -4820.797595190381, -4780.110220440882, -4739.4228456913825, -4698.735470941883, -4658.048096192384, -4617.360721442887, -4576.673346693387, -4535.985971943888, -4495.298597194389, -4454.61122244489, -4413.923847695391, -4373.236472945891, -4332.549098196392, -4291.861723446893, -4251.1743486973955, -4210.486973947896, -4169.799599198397, -4129.112224448898, -4088.4248496993987, -4047.7374749498995, -4007.0501002004003, -3966.362725450901, -3925.6753507014037, -3884.9879759519026, -3844.3006012024052, -3803.613226452904, -3762.925851703407, -3722.2384769539094, -3681.5511022044084, -3640.863727454911, -3600.17635270541, -3559.4889779559126, -3518.8016032064115, -3478.114228456914, -3437.426853707413, -3396.7394789579157, -3356.0521042084183, -3315.3647294589173, -3274.67735470942, -3233.989979959919, -3193.3026052104215, -3152.6152304609204, -3111.927855711423, -3071.2404809619256, -3030.5531062124246, -2989.865731462927, -2949.178356713426, -2908.490981963929, -2867.8036072144278, -2827.1162324649304, -2786.4288577154293, -2745.741482965932, -2705.0541082164345, -2664.3667334669335, -2623.679358717436, -2582.991983967935, -2542.3046092184377, -2501.6172344689367, -2460.9298597194393, -2420.2424849699382, -2379.555110220441, -2338.8677354709434, -2298.1803607214424, -2257.492985971945, -2216.805611222444, -2176.1182364729466, -2135.4308617234456, -2094.743486973948, -2054.056112224447, -2013.3687374749497, -1972.6813627254523, -1931.9939879759513, -1891.306613226454, -1850.619238476953, -1809.9318637274555, -1769.2444889779545, -1728.557114228457, -1687.8697394789597, -1647.1823647294586, -1606.4949899799612, -1565.8076152304602, -1525.1202404809628, -1484.4328657314618, -1443.7454909819644, -1403.0581162324634, -1362.370741482966, -1321.6833667334686, -1280.9959919839675, -1240.3086172344701, -1199.6212424849691, -1158.9338677354717, -1118.2464929859707, -1077.5591182364733, -1036.8717434869723, -996.1843687374749, -955.4969939879775, -914.8096192384764, -874.122244488979, -833.434869739478, -792.7474949899806, -752.0601202404796, -711.3727454909822, -670.6853707414812, -629.9979959919838, -589.3106212424864, -548.6232464929853, -507.93587174348795, -467.2484969939869, -426.5611222444895, -385.8737474949885, -345.1863727454911, -304.4989979959937, -263.8116232464927, -223.12424849699528, -182.43687374749425, -141.74949899799685, -101.06212424849582, -60.374749498998426, -19.687374749497394, 21.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_01b0b5d0b2b4483091cd7b56007340ca.x = d3.scale.linear()
              .domain([-20282.0, 21.0])
              .range([0, 400]);

    color_map_01b0b5d0b2b4483091cd7b56007340ca.legend = L.control({position: 'topright'});
    color_map_01b0b5d0b2b4483091cd7b56007340ca.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_01b0b5d0b2b4483091cd7b56007340ca.legend.addTo(map_a48407444dda4e8c9c6652f1c65403c3);

    color_map_01b0b5d0b2b4483091cd7b56007340ca.xAxis = d3.svg.axis()
        .scale(color_map_01b0b5d0b2b4483091cd7b56007340ca.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-20282.0, -16898.166666666668, -13514.333333333332, -10130.5, -6746.666666666666, -3362.833333333332, 21.0]);

    color_map_01b0b5d0b2b4483091cd7b56007340ca.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_01b0b5d0b2b4483091cd7b56007340ca.g = color_map_01b0b5d0b2b4483091cd7b56007340ca.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_01b0b5d0b2b4483091cd7b56007340ca.g.selectAll("rect")
        .data(color_map_01b0b5d0b2b4483091cd7b56007340ca.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_01b0b5d0b2b4483091cd7b56007340ca.x(color_map_01b0b5d0b2b4483091cd7b56007340ca.color.domain()[i - 1]) : color_map_01b0b5d0b2b4483091cd7b56007340ca.x.range()[0],
            x1: i < color_map_01b0b5d0b2b4483091cd7b56007340ca.color.domain().length ? color_map_01b0b5d0b2b4483091cd7b56007340ca.x(color_map_01b0b5d0b2b4483091cd7b56007340ca.color.domain()[i]) : color_map_01b0b5d0b2b4483091cd7b56007340ca.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_01b0b5d0b2b4483091cd7b56007340ca.g.call(color_map_01b0b5d0b2b4483091cd7b56007340ca.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('30_40_Partido Socialista Brasileiro');

