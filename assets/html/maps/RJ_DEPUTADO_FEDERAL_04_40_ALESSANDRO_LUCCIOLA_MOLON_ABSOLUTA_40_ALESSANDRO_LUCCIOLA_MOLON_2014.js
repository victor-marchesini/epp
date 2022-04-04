    
            var map_f89e26000d054dcb81389de07400ca17 = L.map(
                "map_f89e26000d054dcb81389de07400ca17",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_b344deff021040efa344bc8a3d2042c4 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_f89e26000d054dcb81389de07400ca17);
        
    
            var choropleth_02ce9a91643b4a228d442df58925bc0e = L.featureGroup(
                {}
            ).addTo(map_f89e26000d054dcb81389de07400ca17);
        
    
        function geo_json_c902ab1ea4ec4c25bb510a2fc1449ec0_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_c902ab1ea4ec4c25bb510a2fc1449ec0_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_c902ab1ea4ec4c25bb510a2fc1449ec0 = L.geoJson(null, {
                onEachFeature: geo_json_c902ab1ea4ec4c25bb510a2fc1449ec0_onEachFeature,
            
                style: geo_json_c902ab1ea4ec4c25bb510a2fc1449ec0_styler,
        });

        function geo_json_c902ab1ea4ec4c25bb510a2fc1449ec0_add (data) {
            geo_json_c902ab1ea4ec4c25bb510a2fc1449ec0
                .addData(data)
                .addTo(choropleth_02ce9a91643b4a228d442df58925bc0e);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_c902ab1ea4ec4c25bb510a2fc1449ec0_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_df79202866ac4d83a6bb914fef669490 = {};

    
    color_map_df79202866ac4d83a6bb914fef669490.color = d3.scale.threshold()
              .domain([0.0, 54.278557114228455, 108.55711422845691, 162.83567134268537, 217.11422845691382, 271.39278557114227, 325.67134268537075, 379.9498997995992, 434.22845691382764, 488.5070140280561, 542.7855711422845, 597.0641282565131, 651.3426853707415, 705.6212424849699, 759.8997995991984, 814.1783567134269, 868.4569138276553, 922.7354709418838, 977.0140280561122, 1031.2925851703408, 1085.571142284569, 1139.8496993987976, 1194.1282565130261, 1248.4068136272545, 1302.685370741483, 1356.9639278557115, 1411.2424849699398, 1465.5210420841684, 1519.799599198397, 1574.0781563126252, 1628.3567134268537, 1682.6352705410823, 1736.9138276553106, 1791.192384769539, 1845.4709418837676, 1899.749498997996, 1954.0280561122245, 2008.306613226453, 2062.5851703406815, 2116.8637274549096, 2171.142284569138, 2225.4208416833667, 2279.699398797595, 2333.9779559118238, 2388.2565130260523, 2442.5350701402804, 2496.813627254509, 2551.0921843687374, 2605.370741482966, 2659.6492985971945, 2713.927855711423, 2768.206412825651, 2822.4849699398796, 2876.763527054108, 2931.0420841683367, 2985.3206412825652, 3039.599198396794, 3093.877755511022, 3148.1563126252504, 3202.434869739479, 3256.7134268537075, 3310.991983967936, 3365.2705410821645, 3419.5490981963926, 3473.827655310621, 3528.1062124248497, 3582.384769539078, 3636.6633266533067, 3690.9418837675353, 3745.2204408817634, 3799.498997995992, 3853.7775551102204, 3908.056112224449, 3962.3346693386775, 4016.613226452906, 4070.891783567134, 4125.170340681363, 4179.448897795592, 4233.727454909819, 4288.006012024048, 4342.284569138276, 4396.563126252505, 4450.841683366733, 4505.120240480962, 4559.39879759519, 4613.677354709419, 4667.9559118236475, 4722.234468937876, 4776.513026052105, 4830.791583166333, 4885.070140280561, 4939.348697394789, 4993.627254509018, 5047.905811623246, 5102.184368737475, 5156.462925851703, 5210.741482965932, 5265.0200400801605, 5319.298597194389, 5373.5771543086175, 5427.855711422846, 5482.134268537074, 5536.412825651302, 5590.691382765531, 5644.969939879759, 5699.248496993988, 5753.527054108216, 5807.805611222445, 5862.084168336673, 5916.362725450902, 5970.6412825651305, 6024.919839679359, 6079.198396793588, 6133.476953907815, 6187.755511022044, 6242.034068136272, 6296.312625250501, 6350.591182364729, 6404.869739478958, 6459.148296593186, 6513.426853707415, 6567.705410821643, 6621.983967935872, 6676.2625250501005, 6730.541082164329, 6784.819639278557, 6839.098196392785, 6893.376753507014, 6947.655310621242, 7001.933867735471, 7056.212424849699, 7110.490981963928, 7164.769539078156, 7219.048096192385, 7273.3266533066135, 7327.605210420842, 7381.883767535071, 7436.162324649298, 7490.440881763527, 7544.719438877755, 7598.997995991984, 7653.276553106212, 7707.555110220441, 7761.833667334669, 7816.112224448898, 7870.390781563126, 7924.669338677355, 7978.9478957915835, 8033.226452905812, 8087.50501002004, 8141.783567134268, 8196.062124248498, 8250.340681362726, 8304.619238476955, 8358.897795591183, 8413.17635270541, 8467.454909819638, 8521.733466933867, 8576.012024048096, 8630.290581162324, 8684.569138276553, 8738.847695390781, 8793.12625250501, 8847.404809619238, 8901.683366733467, 8955.961923847695, 9010.240480961924, 9064.519038076152, 9118.79759519038, 9173.07615230461, 9227.354709418838, 9281.633266533066, 9335.911823647295, 9390.190380761524, 9444.468937875752, 9498.74749498998, 9553.02605210421, 9607.304609218438, 9661.583166332666, 9715.861723446893, 9770.140280561121, 9824.41883767535, 9878.697394789579, 9932.975951903807, 9987.254509018036, 10041.533066132264, 10095.811623246493, 10150.090180360721, 10204.36873747495, 10258.647294589178, 10312.925851703407, 10367.204408817635, 10421.482965931864, 10475.761523046092, 10530.040080160321, 10584.31863727455, 10638.597194388778, 10692.875751503007, 10747.154308617235, 10801.432865731464, 10855.711422845692, 10909.98997995992, 10964.268537074147, 11018.547094188376, 11072.825651302604, 11127.104208416833, 11181.382765531062, 11235.66132264529, 11289.939879759519, 11344.218436873747, 11398.496993987976, 11452.775551102204, 11507.054108216433, 11561.332665330661, 11615.61122244489, 11669.889779559118, 11724.168336673347, 11778.446893787575, 11832.725450901804, 11887.004008016032, 11941.282565130261, 11995.56112224449, 12049.839679358718, 12104.118236472947, 12158.396793587175, 12212.675350701404, 12266.95390781563, 12321.232464929859, 12375.511022044087, 12429.789579158316, 12484.068136272545, 12538.346693386773, 12592.625250501002, 12646.90380761523, 12701.182364729459, 12755.460921843687, 12809.739478957916, 12864.018036072144, 12918.296593186373, 12972.575150300601, 13026.85370741483, 13081.132264529058, 13135.410821643287, 13189.689378757515, 13243.967935871744, 13298.246492985973, 13352.525050100201, 13406.80360721443, 13461.082164328658, 13515.360721442887, 13569.639278557113, 13623.917835671342, 13678.19639278557, 13732.474949899799, 13786.753507014027, 13841.032064128256, 13895.310621242485, 13949.589178356713, 14003.867735470942, 14058.14629258517, 14112.424849699399, 14166.703406813627, 14220.981963927856, 14275.260521042084, 14329.539078156313, 14383.817635270541, 14438.09619238477, 14492.374749498998, 14546.653306613227, 14600.931863727455, 14655.210420841684, 14709.488977955913, 14763.767535070141, 14818.04609218437, 14872.324649298596, 14926.603206412825, 14980.881763527053, 15035.160320641282, 15089.43887775551, 15143.717434869739, 15197.995991983968, 15252.274549098196, 15306.553106212425, 15360.831663326653, 15415.110220440882, 15469.38877755511, 15523.667334669339, 15577.945891783567, 15632.224448897796, 15686.503006012024, 15740.781563126253, 15795.060120240481, 15849.33867735471, 15903.617234468938, 15957.895791583167, 16012.174348697396, 16066.452905811624, 16120.731462925853, 16175.01002004008, 16229.288577154308, 16283.567134268536, 16337.845691382765, 16392.124248496995, 16446.402805611222, 16500.681362725452, 16554.95991983968, 16609.23847695391, 16663.517034068136, 16717.795591182366, 16772.074148296593, 16826.35270541082, 16880.63126252505, 16934.909819639277, 16989.188376753507, 17043.466933867734, 17097.745490981964, 17152.02404809619, 17206.30260521042, 17260.581162324648, 17314.85971943888, 17369.138276553105, 17423.416833667336, 17477.695390781562, 17531.973947895793, 17586.25250501002, 17640.53106212425, 17694.809619238476, 17749.088176352707, 17803.366733466934, 17857.645290581164, 17911.92384769539, 17966.20240480962, 18020.480961923848, 18074.759519038074, 18129.038076152305, 18183.31663326653, 18237.59519038076, 18291.87374749499, 18346.15230460922, 18400.430861723446, 18454.709418837676, 18508.987975951903, 18563.266533066133, 18617.54509018036, 18671.82364729459, 18726.102204408817, 18780.380761523047, 18834.659318637274, 18888.937875751504, 18943.21643286573, 18997.49498997996, 19051.773547094188, 19106.05210420842, 19160.330661322645, 19214.609218436875, 19268.887775551102, 19323.166332665332, 19377.44488977956, 19431.723446893786, 19486.002004008016, 19540.280561122243, 19594.559118236473, 19648.8376753507, 19703.11623246493, 19757.394789579157, 19811.673346693387, 19865.951903807614, 19920.230460921844, 19974.50901803607, 20028.7875751503, 20083.06613226453, 20137.34468937876, 20191.623246492985, 20245.901803607216, 20300.180360721442, 20354.458917835673, 20408.7374749499, 20463.01603206413, 20517.294589178357, 20571.573146292587, 20625.851703406814, 20680.13026052104, 20734.40881763527, 20788.687374749497, 20842.965931863728, 20897.244488977954, 20951.523046092185, 21005.80160320641, 21060.080160320642, 21114.35871743487, 21168.6372745491, 21222.915831663326, 21277.194388777556, 21331.472945891783, 21385.751503006013, 21440.03006012024, 21494.30861723447, 21548.587174348697, 21602.865731462927, 21657.144288577154, 21711.422845691384, 21765.70140280561, 21819.97995991984, 21874.258517034068, 21928.537074148295, 21982.815631262525, 22037.094188376752, 22091.372745490982, 22145.65130260521, 22199.92985971944, 22254.208416833666, 22308.486973947896, 22362.765531062123, 22417.044088176353, 22471.32264529058, 22525.60120240481, 22579.879759519037, 22634.158316633268, 22688.436873747494, 22742.715430861725, 22796.99398797595, 22851.27254509018, 22905.55110220441, 22959.82965931864, 23014.108216432865, 23068.386773547096, 23122.665330661323, 23176.943887775553, 23231.22244488978, 23285.501002004006, 23339.779559118237, 23394.058116232463, 23448.336673346694, 23502.61523046092, 23556.89378757515, 23611.172344689377, 23665.450901803608, 23719.729458917835, 23774.008016032065, 23828.28657314629, 23882.565130260522, 23936.84368737475, 23991.12224448898, 24045.400801603206, 24099.679358717436, 24153.957915831663, 24208.236472945893, 24262.51503006012, 24316.79358717435, 24371.072144288577, 24425.350701402807, 24479.629258517034, 24533.90781563126, 24588.18637274549, 24642.464929859718, 24696.743486973948, 24751.022044088175, 24805.300601202405, 24859.579158316632, 24913.857715430862, 24968.13627254509, 25022.41482965932, 25076.693386773546, 25130.971943887776, 25185.250501002003, 25239.529058116234, 25293.80761523046, 25348.08617234469, 25402.364729458917, 25456.643286573148, 25510.921843687374, 25565.200400801605, 25619.47895791583, 25673.75751503006, 25728.03607214429, 25782.31462925852, 25836.593186372746, 25890.871743486972, 25945.150300601203, 25999.42885771543, 26053.70741482966, 26107.985971943886, 26162.264529058117, 26216.543086172343, 26270.821643286574, 26325.1002004008, 26379.37875751503, 26433.657314629258, 26487.935871743488, 26542.214428857715, 26596.492985971945, 26650.77154308617, 26705.050100200402, 26759.32865731463, 26813.60721442886, 26867.885771543086, 26922.164328657316, 26976.442885771543, 27030.721442885773, 27085.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_df79202866ac4d83a6bb914fef669490.x = d3.scale.linear()
              .domain([0.0, 27085.0])
              .range([0, 400]);

    color_map_df79202866ac4d83a6bb914fef669490.legend = L.control({position: 'topright'});
    color_map_df79202866ac4d83a6bb914fef669490.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_df79202866ac4d83a6bb914fef669490.legend.addTo(map_f89e26000d054dcb81389de07400ca17);

    color_map_df79202866ac4d83a6bb914fef669490.xAxis = d3.svg.axis()
        .scale(color_map_df79202866ac4d83a6bb914fef669490.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 4514.166666666667, 9028.333333333334, 13542.5, 18056.666666666668, 22570.833333333336, 27085.0]);

    color_map_df79202866ac4d83a6bb914fef669490.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_df79202866ac4d83a6bb914fef669490.g = color_map_df79202866ac4d83a6bb914fef669490.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_df79202866ac4d83a6bb914fef669490.g.selectAll("rect")
        .data(color_map_df79202866ac4d83a6bb914fef669490.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_df79202866ac4d83a6bb914fef669490.x(color_map_df79202866ac4d83a6bb914fef669490.color.domain()[i - 1]) : color_map_df79202866ac4d83a6bb914fef669490.x.range()[0],
            x1: i < color_map_df79202866ac4d83a6bb914fef669490.color.domain().length ? color_map_df79202866ac4d83a6bb914fef669490.x(color_map_df79202866ac4d83a6bb914fef669490.color.domain()[i]) : color_map_df79202866ac4d83a6bb914fef669490.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_df79202866ac4d83a6bb914fef669490.g.call(color_map_df79202866ac4d83a6bb914fef669490.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('04_40_ALESSANDRO LUCCIOLA MOLON');

