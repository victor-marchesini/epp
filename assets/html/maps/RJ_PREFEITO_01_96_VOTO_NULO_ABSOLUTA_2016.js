    
            var map_d3fe097114294975b7d3dd9c0f2c98db = L.map(
                "map_d3fe097114294975b7d3dd9c0f2c98db",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_09e79920147642f79891ded98652209a = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_d3fe097114294975b7d3dd9c0f2c98db);
        
    
            var choropleth_06e342756e424ac4a6923bf046d04b4d = L.featureGroup(
                {}
            ).addTo(map_d3fe097114294975b7d3dd9c0f2c98db);
        
    
        function geo_json_e16db2f3ff8f4d15926a4178489e0680_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 381: case 369: case 363: case 352: case 346: case 347: case 337: case 433: case 378: case 389: case 374: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: case 430: case 387: case 511: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 370: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 510: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_e16db2f3ff8f4d15926a4178489e0680_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_e16db2f3ff8f4d15926a4178489e0680 = L.geoJson(null, {
                onEachFeature: geo_json_e16db2f3ff8f4d15926a4178489e0680_onEachFeature,
            
                style: geo_json_e16db2f3ff8f4d15926a4178489e0680_styler,
        });

        function geo_json_e16db2f3ff8f4d15926a4178489e0680_add (data) {
            geo_json_e16db2f3ff8f4d15926a4178489e0680
                .addData(data)
                .addTo(choropleth_06e342756e424ac4a6923bf046d04b4d);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_e16db2f3ff8f4d15926a4178489e0680_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_6c3ae3c274ed4b3bb1c649422f190391 = {};

    
    color_map_6c3ae3c274ed4b3bb1c649422f190391.color = d3.scale.threshold()
              .domain([0.0, 64.72945891783567, 129.45891783567134, 194.18837675350701, 258.9178356713427, 323.64729458917833, 388.37675350701403, 453.1062124248497, 517.8356713426854, 582.5651302605211, 647.2945891783567, 712.0240480961924, 776.7535070140281, 841.4829659318638, 906.2124248496993, 970.941883767535, 1035.6713426853707, 1100.4008016032064, 1165.1302605210421, 1229.8597194388778, 1294.5891783567133, 1359.318637274549, 1424.0480961923847, 1488.7775551102204, 1553.5070140280561, 1618.2364729458918, 1682.9659318637275, 1747.6953907815632, 1812.4248496993987, 1877.1543086172344, 1941.88376753507, 2006.6132264529058, 2071.3426853707415, 2136.072144288577, 2200.801603206413, 2265.5310621242484, 2330.2605210420843, 2394.9899799599198, 2459.7194388777557, 2524.448897795591, 2589.1783567134266, 2653.9078156312626, 2718.637274549098, 2783.366733466934, 2848.0961923847694, 2912.8256513026054, 2977.555110220441, 3042.2845691382768, 3107.0140280561122, 3171.7434869739477, 3236.4729458917836, 3301.202404809619, 3365.931863727455, 3430.6613226452905, 3495.3907815631264, 3560.120240480962, 3624.8496993987974, 3689.5791583166333, 3754.308617234469, 3819.0380761523047, 3883.76753507014, 3948.496993987976, 4013.2264529058116, 4077.9559118236475, 4142.685370741483, 4207.4148296593185, 4272.144288577154, 4336.87374749499, 4401.603206412826, 4466.332665330661, 4531.062124248497, 4595.791583166333, 4660.521042084169, 4725.250501002004, 4789.9799599198395, 4854.709418837675, 4919.438877755511, 4984.168336673347, 5048.897795591182, 5113.627254509018, 5178.356713426853, 5243.08617234469, 5307.815631262525, 5372.545090180361, 5437.274549098196, 5502.0040080160325, 5566.733466933868, 5631.462925851703, 5696.192384769539, 5760.921843687374, 5825.651302605211, 5890.380761523046, 5955.110220440882, 6019.839679358717, 6084.5691382765535, 6149.298597194389, 6214.0280561122245, 6278.75751503006, 6343.486973947895, 6408.216432865732, 6472.945891783567, 6537.675350701403, 6602.404809619238, 6667.134268537074, 6731.86372745491, 6796.593186372746, 6861.322645290581, 6926.0521042084165, 6990.781563126253, 7055.511022044088, 7120.240480961924, 7184.969939879759, 7249.699398797595, 7314.428857715431, 7379.158316633267, 7443.887775551102, 7508.617234468938, 7573.346693386774, 7638.076152304609, 7702.805611222445, 7767.53507014028, 7832.264529058116, 7896.993987975952, 7961.723446893788, 8026.452905811623, 8091.182364729459, 8155.911823647295, 8220.64128256513, 8285.370741482966, 8350.100200400802, 8414.829659318637, 8479.559118236473, 8544.288577154308, 8609.018036072144, 8673.74749498998, 8738.476953907815, 8803.206412825652, 8867.935871743486, 8932.665330661323, 8997.394789579159, 9062.124248496993, 9126.85370741483, 9191.583166332666, 9256.3126252505, 9321.042084168337, 9385.771543086172, 9450.501002004008, 9515.230460921844, 9579.959919839679, 9644.689378757515, 9709.41883767535, 9774.148296593186, 9838.877755511023, 9903.607214428857, 9968.336673346694, 10033.066132264528, 10097.795591182365, 10162.525050100201, 10227.254509018036, 10291.983967935872, 10356.713426853707, 10421.442885771543, 10486.17234468938, 10550.901803607214, 10615.63126252505, 10680.360721442887, 10745.090180360721, 10809.819639278558, 10874.549098196392, 10939.278557114229, 11004.008016032065, 11068.7374749499, 11133.466933867736, 11198.19639278557, 11262.925851703407, 11327.655310621243, 11392.384769539078, 11457.114228456914, 11521.843687374749, 11586.573146292585, 11651.302605210421, 11716.032064128256, 11780.761523046092, 11845.490981963927, 11910.220440881763, 11974.9498997996, 12039.679358717434, 12104.40881763527, 12169.138276553107, 12233.867735470942, 12298.597194388778, 12363.326653306613, 12428.056112224449, 12492.785571142285, 12557.51503006012, 12622.244488977956, 12686.97394789579, 12751.703406813627, 12816.432865731464, 12881.162324649298, 12945.891783567135, 13010.62124248497, 13075.350701402805, 13140.080160320642, 13204.809619238476, 13269.539078156313, 13334.268537074147, 13398.997995991984, 13463.72745490982, 13528.456913827655, 13593.186372745491, 13657.915831663327, 13722.645290581162, 13787.374749498998, 13852.104208416833, 13916.83366733467, 13981.563126252506, 14046.29258517034, 14111.022044088177, 14175.751503006011, 14240.480961923848, 14305.210420841684, 14369.939879759519, 14434.669338677355, 14499.39879759519, 14564.128256513026, 14628.857715430862, 14693.587174348697, 14758.316633266533, 14823.04609218437, 14887.775551102204, 14952.50501002004, 15017.234468937875, 15081.963927855712, 15146.693386773548, 15211.422845691382, 15276.152304609219, 15340.881763527053, 15405.61122244489, 15470.340681362726, 15535.07014028056, 15599.799599198397, 15664.529058116232, 15729.258517034068, 15793.987975951904, 15858.717434869739, 15923.446893787575, 15988.17635270541, 16052.905811623246, 16117.635270541083, 16182.364729458917, 16247.094188376754, 16311.82364729459, 16376.553106212425, 16441.28256513026, 16506.012024048097, 16570.741482965932, 16635.470941883766, 16700.200400801605, 16764.92985971944, 16829.659318637274, 16894.388777555112, 16959.118236472947, 17023.84769539078, 17088.577154308616, 17153.306613226454, 17218.03607214429, 17282.765531062123, 17347.49498997996, 17412.224448897796, 17476.95390781563, 17541.68336673347, 17606.412825651303, 17671.142284569138, 17735.871743486972, 17800.60120240481, 17865.330661322645, 17930.06012024048, 17994.789579158318, 18059.519038076152, 18124.248496993987, 18188.977955911825, 18253.70741482966, 18318.436873747494, 18383.166332665332, 18447.895791583167, 18512.625250501, 18577.354709418836, 18642.084168336674, 18706.81362725451, 18771.543086172343, 18836.27254509018, 18901.002004008016, 18965.73146292585, 19030.46092184369, 19095.190380761524, 19159.919839679358, 19224.649298597193, 19289.37875751503, 19354.108216432865, 19418.8376753507, 19483.56713426854, 19548.296593186373, 19613.026052104207, 19677.755511022046, 19742.48496993988, 19807.214428857715, 19871.943887775553, 19936.673346693387, 20001.402805611222, 20066.132264529057, 20130.861723446895, 20195.59118236473, 20260.320641282564, 20325.050100200402, 20389.779559118237, 20454.50901803607, 20519.23847695391, 20583.967935871744, 20648.69739478958, 20713.426853707413, 20778.15631262525, 20842.885771543086, 20907.61523046092, 20972.34468937876, 21037.074148296593, 21101.803607214428, 21166.533066132266, 21231.2625250501, 21295.991983967935, 21360.721442885773, 21425.450901803608, 21490.180360721442, 21554.909819639277, 21619.639278557115, 21684.36873747495, 21749.098196392784, 21813.827655310623, 21878.557114228457, 21943.28657314629, 22008.01603206413, 22072.745490981964, 22137.4749498998, 22202.204408817634, 22266.93386773547, 22331.663326653306, 22396.39278557114, 22461.12224448898, 22525.851703406814, 22590.581162324648, 22655.310621242486, 22720.04008016032, 22784.769539078156, 22849.498997995994, 22914.22845691383, 22978.957915831663, 23043.687374749497, 23108.416833667336, 23173.14629258517, 23237.875751503005, 23302.605210420843, 23367.334669338677, 23432.064128256512, 23496.79358717435, 23561.523046092185, 23626.25250501002, 23690.981963927854, 23755.711422845692, 23820.440881763527, 23885.17034068136, 23949.8997995992, 24014.629258517034, 24079.35871743487, 24144.088176352707, 24208.81763527054, 24273.547094188376, 24338.276553106214, 24403.00601202405, 24467.735470941883, 24532.464929859718, 24597.194388777556, 24661.92384769539, 24726.653306613225, 24791.382765531063, 24856.112224448898, 24920.841683366732, 24985.57114228457, 25050.300601202405, 25115.03006012024, 25179.759519038074, 25244.488977955913, 25309.218436873747, 25373.94789579158, 25438.67735470942, 25503.406813627254, 25568.13627254509, 25632.865731462927, 25697.59519038076, 25762.324649298596, 25827.054108216435, 25891.78356713427, 25956.513026052104, 26021.24248496994, 26085.971943887776, 26150.70140280561, 26215.430861723446, 26280.160320641284, 26344.88977955912, 26409.619238476953, 26474.34869739479, 26539.078156312626, 26603.80761523046, 26668.537074148295, 26733.266533066133, 26797.995991983968, 26862.725450901802, 26927.45490981964, 26992.184368737475, 27056.91382765531, 27121.643286573148, 27186.372745490982, 27251.102204408817, 27315.831663326655, 27380.56112224449, 27445.290581162324, 27510.02004008016, 27574.749498997997, 27639.47895791583, 27704.208416833666, 27768.937875751504, 27833.66733466934, 27898.396793587173, 27963.12625250501, 28027.855711422846, 28092.58517034068, 28157.31462925852, 28222.044088176353, 28286.773547094188, 28351.503006012023, 28416.23246492986, 28480.961923847695, 28545.69138276553, 28610.420841683368, 28675.150300601203, 28739.879759519037, 28804.609218436875, 28869.33867735471, 28934.068136272545, 28998.79759519038, 29063.527054108217, 29128.256513026052, 29192.985971943886, 29257.715430861725, 29322.44488977956, 29387.174348697394, 29451.903807615232, 29516.633266533066, 29581.3627254509, 29646.09218436874, 29710.821643286574, 29775.55110220441, 29840.280561122243, 29905.01002004008, 29969.739478957916, 30034.46893787575, 30099.19839679359, 30163.927855711423, 30228.657314629258, 30293.386773547096, 30358.11623246493, 30422.845691382765, 30487.5751503006, 30552.304609218438, 30617.034068136272, 30681.763527054107, 30746.492985971945, 30811.22244488978, 30875.951903807614, 30940.681362725452, 31005.410821643287, 31070.14028056112, 31134.86973947896, 31199.599198396794, 31264.32865731463, 31329.058116232463, 31393.7875751503, 31458.517034068136, 31523.24649298597, 31587.97595190381, 31652.705410821643, 31717.434869739478, 31782.164328657316, 31846.89378757515, 31911.623246492985, 31976.35270541082, 32041.082164328658, 32105.811623246493, 32170.541082164327, 32235.270541082165, 32300.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_6c3ae3c274ed4b3bb1c649422f190391.x = d3.scale.linear()
              .domain([0.0, 32300.0])
              .range([0, 400]);

    color_map_6c3ae3c274ed4b3bb1c649422f190391.legend = L.control({position: 'topright'});
    color_map_6c3ae3c274ed4b3bb1c649422f190391.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_6c3ae3c274ed4b3bb1c649422f190391.legend.addTo(map_d3fe097114294975b7d3dd9c0f2c98db);

    color_map_6c3ae3c274ed4b3bb1c649422f190391.xAxis = d3.svg.axis()
        .scale(color_map_6c3ae3c274ed4b3bb1c649422f190391.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 5383.333333333333, 10766.666666666666, 16150.0, 21533.333333333332, 26916.666666666664, 32300.0]);

    color_map_6c3ae3c274ed4b3bb1c649422f190391.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_6c3ae3c274ed4b3bb1c649422f190391.g = color_map_6c3ae3c274ed4b3bb1c649422f190391.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_6c3ae3c274ed4b3bb1c649422f190391.g.selectAll("rect")
        .data(color_map_6c3ae3c274ed4b3bb1c649422f190391.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_6c3ae3c274ed4b3bb1c649422f190391.x(color_map_6c3ae3c274ed4b3bb1c649422f190391.color.domain()[i - 1]) : color_map_6c3ae3c274ed4b3bb1c649422f190391.x.range()[0],
            x1: i < color_map_6c3ae3c274ed4b3bb1c649422f190391.color.domain().length ? color_map_6c3ae3c274ed4b3bb1c649422f190391.x(color_map_6c3ae3c274ed4b3bb1c649422f190391.color.domain()[i]) : color_map_6c3ae3c274ed4b3bb1c649422f190391.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_6c3ae3c274ed4b3bb1c649422f190391.g.call(color_map_6c3ae3c274ed4b3bb1c649422f190391.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');

