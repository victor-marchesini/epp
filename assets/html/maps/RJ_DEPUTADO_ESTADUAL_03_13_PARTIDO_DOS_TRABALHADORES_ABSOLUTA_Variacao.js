    
            var map_25e2d82b14514313aa99971820124d48 = L.map(
                "map_25e2d82b14514313aa99971820124d48",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_1d37be55d5a440eabc1fceccd937dd8c = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_25e2d82b14514313aa99971820124d48);
        
    
            var choropleth_37f7face82d6436086af3ee6acf8d269 = L.featureGroup(
                {}
            ).addTo(map_25e2d82b14514313aa99971820124d48);
        
    
        function geo_json_2540f74bcf2f42ff92b595306ed2732e_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_2540f74bcf2f42ff92b595306ed2732e_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_2540f74bcf2f42ff92b595306ed2732e = L.geoJson(null, {
                onEachFeature: geo_json_2540f74bcf2f42ff92b595306ed2732e_onEachFeature,
            
                style: geo_json_2540f74bcf2f42ff92b595306ed2732e_styler,
        });

        function geo_json_2540f74bcf2f42ff92b595306ed2732e_add (data) {
            geo_json_2540f74bcf2f42ff92b595306ed2732e
                .addData(data)
                .addTo(choropleth_37f7face82d6436086af3ee6acf8d269);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_2540f74bcf2f42ff92b595306ed2732e_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_c4e4631db4664e2c94a7ffe6aeedfd5c = {};

    
    color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.color = d3.scale.threshold()
              .domain([-19127.0, -19087.436873747494, -19047.87374749499, -19008.310621242486, -18968.74749498998, -18929.184368737475, -18889.62124248497, -18850.058116232463, -18810.49498997996, -18770.931863727455, -18731.36873747495, -18691.805611222444, -18652.24248496994, -18612.679358717436, -18573.11623246493, -18533.553106212425, -18493.98997995992, -18454.426853707413, -18414.86372745491, -18375.300601202405, -18335.7374749499, -18296.174348697394, -18256.611222444888, -18217.048096192386, -18177.48496993988, -18137.921843687374, -18098.35871743487, -18058.795591182366, -18019.23246492986, -17979.669338677355, -17940.10621242485, -17900.543086172343, -17860.97995991984, -17821.416833667336, -17781.85370741483, -17742.290581162324, -17702.72745490982, -17663.164328657316, -17623.60120240481, -17584.038076152305, -17544.4749498998, -17504.911823647293, -17465.34869739479, -17425.785571142285, -17386.22244488978, -17346.659318637274, -17307.096192384768, -17267.533066132266, -17227.96993987976, -17188.406813627254, -17148.84368737475, -17109.280561122243, -17069.71743486974, -17030.154308617235, -16990.59118236473, -16951.028056112224, -16911.46492985972, -16871.901803607216, -16832.33867735471, -16792.775551102204, -16753.2124248497, -16713.649298597193, -16674.08617234469, -16634.523046092185, -16594.95991983968, -16555.396793587173, -16515.83366733467, -16476.270541082165, -16436.70741482966, -16397.144288577154, -16357.581162324648, -16318.018036072144, -16278.45490981964, -16238.891783567135, -16199.328657314629, -16159.765531062125, -16120.20240480962, -16080.639278557115, -16041.07615230461, -16001.513026052104, -15961.9498997996, -15922.386773547094, -15882.82364729459, -15843.260521042084, -15803.697394789579, -15764.134268537075, -15724.571142284569, -15685.008016032065, -15645.44488977956, -15605.881763527053, -15566.31863727455, -15526.755511022044, -15487.19238476954, -15447.629258517034, -15408.066132264528, -15368.503006012024, -15328.939879759519, -15289.376753507015, -15249.813627254509, -15210.250501002003, -15170.6873747495, -15131.124248496993, -15091.56112224449, -15051.997995991984, -15012.434869739478, -14972.871743486974, -14933.30861723447, -14893.745490981964, -14854.182364729459, -14814.619238476953, -14775.056112224449, -14735.492985971945, -14695.92985971944, -14656.366733466934, -14616.803607214428, -14577.240480961924, -14537.67735470942, -14498.114228456914, -14458.551102204408, -14418.987975951903, -14379.424849699399, -14339.861723446895, -14300.298597194389, -14260.735470941883, -14221.172344689377, -14181.609218436874, -14142.04609218437, -14102.482965931864, -14062.919839679358, -14023.356713426852, -13983.793587174348, -13944.230460921844, -13904.667334669339, -13865.104208416833, -13825.541082164329, -13785.977955911823, -13746.41482965932, -13706.851703406814, -13667.288577154308, -13627.725450901804, -13588.162324649298, -13548.599198396794, -13509.036072144288, -13469.472945891783, -13429.909819639279, -13390.346693386775, -13350.78356713427, -13311.220440881763, -13271.657314629258, -13232.094188376754, -13192.53106212425, -13152.967935871744, -13113.404809619238, -13073.841683366732, -13034.278557114229, -12994.715430861725, -12955.152304609219, -12915.589178356713, -12876.026052104207, -12836.462925851703, -12796.8997995992, -12757.336673346694, -12717.773547094188, -12678.210420841682, -12638.647294589178, -12599.084168336674, -12559.521042084169, -12519.957915831663, -12480.394789579157, -12440.831663326653, -12401.26853707415, -12361.705410821643, -12322.142284569138, -12282.579158316632, -12243.016032064128, -12203.452905811624, -12163.889779559118, -12124.326653306613, -12084.763527054109, -12045.200400801603, -12005.637274549099, -11966.074148296593, -11926.511022044087, -11886.947895791584, -11847.384769539078, -11807.821643286574, -11768.258517034068, -11728.695390781562, -11689.132264529058, -11649.569138276554, -11610.006012024049, -11570.442885771543, -11530.879759519037, -11491.316633266533, -11451.75350701403, -11412.190380761524, -11372.627254509018, -11333.064128256512, -11293.501002004008, -11253.937875751504, -11214.374749498998, -11174.811623246493, -11135.248496993987, -11095.685370741483, -11056.122244488979, -11016.559118236473, -10976.995991983968, -10937.432865731462, -10897.869739478958, -10858.306613226452, -10818.743486973948, -10779.180360721442, -10739.617234468938, -10700.054108216433, -10660.490981963927, -10620.927855711423, -10581.364729458917, -10541.801603206413, -10502.238476953908, -10462.675350701404, -10423.112224448898, -10383.549098196392, -10343.985971943888, -10304.422845691382, -10264.859719438879, -10225.296593186373, -10185.733466933867, -10146.170340681363, -10106.607214428857, -10067.044088176353, -10027.480961923848, -9987.917835671342, -9948.354709418838, -9908.791583166332, -9869.228456913828, -9829.665330661323, -9790.102204408817, -9750.539078156313, -9710.975951903807, -9671.412825651303, -9631.849699398797, -9592.286573146293, -9552.723446893788, -9513.160320641282, -9473.597194388778, -9434.034068136272, -9394.470941883768, -9354.907815631263, -9315.344689378757, -9275.781563126253, -9236.218436873747, -9196.655310621243, -9157.092184368737, -9117.529058116232, -9077.965931863728, -9038.402805611222, -8998.839679358718, -8959.276553106212, -8919.713426853707, -8880.150300601203, -8840.587174348697, -8801.024048096193, -8761.460921843687, -8721.897795591183, -8682.334669338677, -8642.771543086172, -8603.208416833668, -8563.645290581162, -8524.082164328658, -8484.519038076152, -8444.955911823647, -8405.392785571143, -8365.829659318637, -8326.266533066133, -8286.703406813627, -8247.140280561121, -8207.577154308618, -8168.014028056112, -8128.450901803608, -8088.887775551102, -8049.324649298596, -8009.761523046092, -7970.198396793587, -7930.635270541083, -7891.072144288577, -7851.509018036073, -7811.945891783567, -7772.3827655310615, -7732.819639278558, -7693.256513026052, -7653.693386773548, -7614.130260521042, -7574.567134268536, -7535.0040080160325, -7495.440881763527, -7455.877755511023, -7416.314629258517, -7376.751503006011, -7337.188376753507, -7297.625250501002, -7258.062124248498, -7218.498997995992, -7178.935871743486, -7139.372745490982, -7099.809619238476, -7060.2464929859725, -7020.683366733467, -6981.120240480963, -6941.557114228457, -6901.993987975951, -6862.430861723447, -6822.867735470942, -6783.304609218438, -6743.741482965932, -6704.178356713426, -6664.615230460922, -6625.0521042084165, -6585.488977955913, -6545.925851703407, -6506.362725450901, -6466.799599198397, -6427.236472945891, -6387.673346693387, -6348.110220440882, -6308.547094188376, -6268.983967935872, -6229.420841683366, -6189.857715430862, -6150.294589178357, -6110.731462925853, -6071.168336673347, -6031.605210420841, -5992.042084168337, -5952.478957915831, -5912.9158316633275, -5873.352705410822, -5833.789579158316, -5794.226452905812, -5754.663326653306, -5715.100200400802, -5675.537074148297, -5635.973947895791, -5596.410821643287, -5556.847695390781, -5517.284569138277, -5477.7214428857715, -5438.158316633266, -5398.595190380762, -5359.032064128256, -5319.468937875752, -5279.905811623246, -5240.342685370741, -5200.779559118237, -5161.216432865731, -5121.653306613227, -5082.090180360721, -5042.527054108217, -5002.9639278557115, -4963.400801603206, -4923.837675350702, -4884.274549098196, -4844.711422845692, -4805.148296593186, -4765.585170340681, -4726.022044088177, -4686.458917835671, -4646.895791583167, -4607.332665330661, -4567.7695390781555, -4528.206412825652, -4488.643286573146, -4449.080160320642, -4409.517034068136, -4369.95390781563, -4330.390781563126, -4290.827655310621, -4251.264529058117, -4211.701402805611, -4172.138276553107, -4132.575150300601, -4093.0120240480956, -4053.4488977955916, -4013.885771543086, -3974.322645290582, -3934.759519038076, -3895.1963927855704, -3855.6332665330665, -3816.0701402805607, -3776.507014028057, -3736.943887775551, -3697.3807615230453, -3657.8176352705414, -3618.2545090180356, -3578.6913827655317, -3539.128256513026, -3499.56513026052, -3460.0020040080162, -3420.4388777555105, -3380.8757515030065, -3341.312625250501, -3301.749498997997, -3262.186372745491, -3222.6232464929853, -3183.0601202404814, -3143.4969939879757, -3103.9338677354717, -3064.370741482966, -3024.80761523046, -2985.2444889779563, -2945.6813627254505, -2906.1182364729466, -2866.555110220441, -2826.991983967935, -2787.428857715431, -2747.8657314629254, -2708.3026052104215, -2668.7394789579157, -2629.17635270541, -2589.613226452904, -2550.050100200402, -2510.4869739478963, -2470.9238476953906, -2431.360721442885, -2391.797595190379, -2352.234468937877, -2312.671342685371, -2273.1082164328654, -2233.5450901803597, -2193.981963927854, -2154.418837675352, -2114.855711422846, -2075.2925851703403, -2035.7294589178346, -1996.1663326653324, -1956.6032064128267, -1917.040080160321, -1877.4769539078152, -1837.9138276553094, -1798.3507014028073, -1758.7875751503016, -1719.2244488977958, -1679.66132264529, -1640.0981963927843, -1600.5350701402822, -1560.9719438877764, -1521.4088176352707, -1481.845691382765, -1442.2825651302592, -1402.719438877757, -1363.1563126252513, -1323.5931863727455, -1284.0300601202398, -1244.466933867734, -1204.903807615232, -1165.3406813627262, -1125.7775551102204, -1086.2144288577147, -1046.651302605209, -1007.0881763527068, -967.525050100201, -927.9619238476953, -888.3987975951895, -848.8356713426838, -809.2725450901817, -769.7094188376759, -730.1462925851702, -690.5831663326644, -651.0200400801587, -611.4569138276565, -571.8937875751508, -532.330661322645, -492.7675350701393, -453.2044088176335, -413.6412825651314, -374.07815631262565, -334.5150300601199, -294.95190380761414, -255.38877755511203, -215.82565130260627, -176.26252505010052, -136.69939879759477, -97.13627254508901, -57.5731462925869, -18.010020040081145, 21.55310621242461, 61.11623246493036, 100.67935871743612, 140.24248496993823, 179.80561122244399, 219.36873747494974, 258.9318637274555, 298.49498997996125, 338.05811623246336, 377.6212424849691, 417.18436873747487, 456.7474949899806, 496.3106212424864, 535.8737474949885, 575.4368737474942, 615.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.x = d3.scale.linear()
              .domain([-19127.0, 615.0])
              .range([0, 400]);

    color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.legend = L.control({position: 'topright'});
    color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.legend.addTo(map_25e2d82b14514313aa99971820124d48);

    color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.xAxis = d3.svg.axis()
        .scale(color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-19127.0, -15836.666666666666, -12546.333333333332, -9256.0, -5965.666666666666, -2675.333333333332, 615.0]);

    color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.g = color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.g.selectAll("rect")
        .data(color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.x(color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.color.domain()[i - 1]) : color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.x.range()[0],
            x1: i < color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.color.domain().length ? color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.x(color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.color.domain()[i]) : color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.g.call(color_map_c4e4631db4664e2c94a7ffe6aeedfd5c.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('03_13_Partido dos Trabalhadores');

