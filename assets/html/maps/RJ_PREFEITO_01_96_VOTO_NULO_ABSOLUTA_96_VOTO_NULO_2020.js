    
            var map_90085fe523aa4e43aa4df927988dc28d = L.map(
                "map_90085fe523aa4e43aa4df927988dc28d",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_5bc675c9630545cdb1d0e90f227381ac = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_90085fe523aa4e43aa4df927988dc28d);
        
    
            var choropleth_f0511c71d8f54d3ea45154842680871f = L.featureGroup(
                {}
            ).addTo(map_90085fe523aa4e43aa4df927988dc28d);
        
    
        function geo_json_1477bdc2418443789788fe3f22095585_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 439: case 377: case 343: case 351: case 382: case 419: case 411: case 364: case 398: case 385: case 368: case 372: case 356: case 457: case 454: case 433: case 429: case 409: case 399: case 471: case 388: case 458: case 384: case 414: case 406: case 890: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 369: case 346: case 347: case 337: case 378: case 389: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 370: case 511: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 374: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_1477bdc2418443789788fe3f22095585_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_1477bdc2418443789788fe3f22095585 = L.geoJson(null, {
                onEachFeature: geo_json_1477bdc2418443789788fe3f22095585_onEachFeature,
            
                style: geo_json_1477bdc2418443789788fe3f22095585_styler,
        });

        function geo_json_1477bdc2418443789788fe3f22095585_add (data) {
            geo_json_1477bdc2418443789788fe3f22095585
                .addData(data)
                .addTo(choropleth_f0511c71d8f54d3ea45154842680871f);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_1477bdc2418443789788fe3f22095585_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_7378454057df48478ca192a7a2c448cc = {};

    
    color_map_7378454057df48478ca192a7a2c448cc.color = d3.scale.threshold()
              .domain([0.0, 32.24649298597194, 64.49298597194388, 96.73947895791584, 128.98597194388776, 161.23246492985973, 193.47895791583167, 225.7254509018036, 257.9719438877755, 290.2184368737475, 322.46492985971946, 354.7114228456914, 386.95791583166334, 419.2044088176353, 451.4509018036072, 483.69739478957916, 515.943887775551, 548.1903807615231, 580.436873747495, 612.683366733467, 644.9298597194389, 677.1763527054109, 709.4228456913828, 741.6693386773547, 773.9158316633267, 806.1623246492986, 838.4088176352706, 870.6553106212425, 902.9018036072144, 935.1482965931864, 967.3947895791583, 999.6412825651303, 1031.887775551102, 1064.1342685370741, 1096.3807615230462, 1128.627254509018, 1160.87374749499, 1193.120240480962, 1225.366733466934, 1257.6132264529058, 1289.8597194388778, 1322.1062124248497, 1354.3527054108217, 1386.5991983967936, 1418.8456913827656, 1451.0921843687374, 1483.3386773547095, 1515.5851703406813, 1547.8316633266534, 1580.0781563126252, 1612.3246492985973, 1644.571142284569, 1676.8176352705411, 1709.064128256513, 1741.310621242485, 1773.5571142284568, 1805.803607214429, 1838.0501002004007, 1870.2965931863728, 1902.5430861723446, 1934.7895791583167, 1967.0360721442885, 1999.2825651302605, 2031.5290581162324, 2063.775551102204, 2096.0220440881762, 2128.2685370741483, 2160.5150300601204, 2192.7615230460924, 2225.008016032064, 2257.254509018036, 2289.501002004008, 2321.74749498998, 2353.9939879759518, 2386.240480961924, 2418.486973947896, 2450.733466933868, 2482.9799599198395, 2515.2264529058116, 2547.4729458917836, 2579.7194388777557, 2611.9659318637273, 2644.2124248496993, 2676.4589178356714, 2708.7054108216435, 2740.951903807615, 2773.198396793587, 2805.444889779559, 2837.691382765531, 2869.937875751503, 2902.184368737475, 2934.430861723447, 2966.677354709419, 2998.9238476953906, 3031.1703406813626, 3063.4168336673347, 3095.6633266533067, 3127.9098196392783, 3160.1563126252504, 3192.4028056112224, 3224.6492985971945, 3256.8957915831666, 3289.142284569138, 3321.38877755511, 3353.6352705410823, 3385.8817635270543, 3418.128256513026, 3450.374749498998, 3482.62124248497, 3514.867735470942, 3547.1142284569137, 3579.3607214428857, 3611.607214428858, 3643.85370741483, 3676.1002004008014, 3708.3466933867735, 3740.5931863727455, 3772.8396793587176, 3805.086172344689, 3837.3326653306613, 3869.5791583166333, 3901.8256513026054, 3934.072144288577, 3966.318637274549, 3998.565130260521, 4030.811623246493, 4063.0581162324647, 4095.304609218437, 4127.551102204408, 4159.797595190381, 4192.0440881763525, 4224.290581162325, 4256.537074148297, 4288.783567134268, 4321.030060120241, 4353.276553106212, 4385.523046092185, 4417.769539078156, 4450.016032064128, 4482.2625250501005, 4514.509018036072, 4546.755511022044, 4579.002004008016, 4611.248496993988, 4643.49498997996, 4675.741482965932, 4707.9879759519035, 4740.234468937876, 4772.480961923848, 4804.727454909819, 4836.973947895792, 4869.220440881763, 4901.466933867736, 4933.7134268537075, 4965.959919839679, 4998.206412825652, 5030.452905811623, 5062.699398797595, 5094.945891783567, 5127.192384769539, 5159.438877755511, 5191.685370741483, 5223.931863727455, 5256.178356713427, 5288.424849699399, 5320.67134268537, 5352.917835671343, 5385.164328657314, 5417.410821643287, 5449.6573146292585, 5481.90380761523, 5514.150300601203, 5546.396793587174, 5578.643286573147, 5610.889779559118, 5643.13627254509, 5675.382765531062, 5707.629258517034, 5739.875751503006, 5772.122244488978, 5804.36873747495, 5836.615230460922, 5868.861723446894, 5901.108216432865, 5933.354709418838, 5965.60120240481, 5997.847695390781, 6030.094188376754, 6062.340681362725, 6094.587174348698, 6126.833667334669, 6159.080160320641, 6191.3266533066135, 6223.573146292585, 6255.819639278557, 6288.066132264529, 6320.312625250501, 6352.559118236473, 6384.805611222445, 6417.0521042084165, 6449.298597194389, 6481.545090180361, 6513.791583166333, 6546.038076152305, 6578.284569138276, 6610.531062124249, 6642.77755511022, 6675.024048096192, 6707.2705410821645, 6739.517034068136, 6771.763527054109, 6804.01002004008, 6836.256513026052, 6868.503006012024, 6900.749498997996, 6932.9959919839675, 6965.24248496994, 6997.488977955912, 7029.735470941884, 7061.981963927856, 7094.228456913827, 7126.4749498998, 7158.7214428857715, 7190.967935871743, 7223.214428857716, 7255.460921843687, 7287.70741482966, 7319.953907815631, 7352.200400801603, 7384.446893787575, 7416.693386773547, 7448.939879759519, 7481.186372745491, 7513.432865731463, 7545.679358717435, 7577.925851703407, 7610.172344689378, 7642.418837675351, 7674.6653306613225, 7706.911823647295, 7739.158316633267, 7771.404809619238, 7803.651302605211, 7835.897795591182, 7868.144288577154, 7900.390781563126, 7932.637274549098, 7964.883767535071, 7997.130260521042, 8029.376753507014, 8061.623246492986, 8093.869739478958, 8126.116232464929, 8158.362725450902, 8190.609218436874, 8222.855711422846, 8255.102204408817, 8287.34869739479, 8319.595190380762, 8351.841683366734, 8384.088176352705, 8416.334669338677, 8448.58116232465, 8480.82765531062, 8513.074148296593, 8545.320641282566, 8577.567134268536, 8609.813627254509, 8642.060120240481, 8674.306613226452, 8706.553106212425, 8738.799599198397, 8771.04609218437, 8803.29258517034, 8835.539078156313, 8867.785571142285, 8900.032064128256, 8932.278557114229, 8964.525050100201, 8996.771543086172, 9029.018036072144, 9061.264529058117, 9093.511022044087, 9125.75751503006, 9158.004008016032, 9190.250501002003, 9222.496993987976, 9254.743486973948, 9286.98997995992, 9319.236472945891, 9351.482965931864, 9383.729458917836, 9415.975951903807, 9448.22244488978, 9480.468937875752, 9512.715430861723, 9544.961923847695, 9577.208416833668, 9609.454909819638, 9641.701402805611, 9673.947895791584, 9706.194388777556, 9738.440881763527, 9770.6873747495, 9802.933867735472, 9835.180360721442, 9867.426853707415, 9899.673346693387, 9931.919839679358, 9964.16633266533, 9996.412825651303, 10028.659318637274, 10060.905811623246, 10093.152304609219, 10125.39879759519, 10157.645290581162, 10189.891783567135, 10222.138276553107, 10254.384769539078, 10286.63126252505, 10318.877755511023, 10351.124248496993, 10383.370741482966, 10415.617234468938, 10447.86372745491, 10480.110220440882, 10512.356713426854, 10544.603206412825, 10576.849699398797, 10609.09619238477, 10641.34268537074, 10673.589178356713, 10705.835671342686, 10738.082164328658, 10770.328657314629, 10802.575150300601, 10834.821643286574, 10867.068136272545, 10899.314629258517, 10931.56112224449, 10963.80761523046, 10996.054108216433, 11028.300601202405, 11060.547094188376, 11092.793587174348, 11125.040080160321, 11157.286573146293, 11189.533066132264, 11221.779559118237, 11254.02605210421, 11286.27254509018, 11318.519038076152, 11350.765531062125, 11383.012024048096, 11415.258517034068, 11447.50501002004, 11479.751503006011, 11511.997995991984, 11544.244488977956, 11576.490981963927, 11608.7374749499, 11640.983967935872, 11673.230460921844, 11705.476953907815, 11737.723446893788, 11769.96993987976, 11802.21643286573, 11834.462925851703, 11866.709418837676, 11898.955911823647, 11931.20240480962, 11963.448897795592, 11995.695390781562, 12027.941883767535, 12060.188376753507, 12092.43486973948, 12124.68136272545, 12156.927855711423, 12189.174348697396, 12221.420841683366, 12253.667334669339, 12285.913827655311, 12318.160320641282, 12350.406813627254, 12382.653306613227, 12414.899799599198, 12447.14629258517, 12479.392785571143, 12511.639278557113, 12543.885771543086, 12576.132264529058, 12608.37875751503, 12640.625250501002, 12672.871743486974, 12705.118236472947, 12737.364729458917, 12769.61122244489, 12801.857715430862, 12834.104208416833, 12866.350701402805, 12898.597194388778, 12930.843687374749, 12963.090180360721, 12995.336673346694, 13027.583166332666, 13059.829659318637, 13092.07615230461, 13124.322645290582, 13156.569138276553, 13188.815631262525, 13221.062124248498, 13253.308617234468, 13285.55511022044, 13317.801603206413, 13350.048096192384, 13382.294589178357, 13414.541082164329, 13446.7875751503, 13479.034068136272, 13511.280561122245, 13543.527054108217, 13575.773547094188, 13608.02004008016, 13640.266533066133, 13672.513026052104, 13704.759519038076, 13737.006012024049, 13769.25250501002, 13801.498997995992, 13833.745490981964, 13865.991983967935, 13898.238476953908, 13930.48496993988, 13962.731462925853, 13994.977955911823, 14027.224448897796, 14059.470941883768, 14091.717434869739, 14123.963927855712, 14156.210420841684, 14188.456913827655, 14220.703406813627, 14252.9498997996, 14285.19639278557, 14317.442885771543, 14349.689378757515, 14381.935871743486, 14414.182364729459, 14446.428857715431, 14478.675350701404, 14510.921843687374, 14543.168336673347, 14575.41482965932, 14607.66132264529, 14639.907815631263, 14672.154308617235, 14704.400801603206, 14736.647294589178, 14768.89378757515, 14801.140280561121, 14833.386773547094, 14865.633266533066, 14897.879759519037, 14930.12625250501, 14962.372745490982, 14994.619238476955, 15026.865731462925, 15059.112224448898, 15091.35871743487, 15123.605210420841, 15155.851703406814, 15188.098196392786, 15220.344689378757, 15252.59118236473, 15284.837675350702, 15317.084168336673, 15349.330661322645, 15381.577154308618, 15413.82364729459, 15446.07014028056, 15478.316633266533, 15510.563126252506, 15542.809619238476, 15575.056112224449, 15607.302605210421, 15639.549098196392, 15671.795591182365, 15704.042084168337, 15736.288577154308, 15768.53507014028, 15800.781563126253, 15833.028056112224, 15865.274549098196, 15897.521042084169, 15929.767535070141, 15962.014028056112, 15994.260521042084, 16026.507014028057, 16058.753507014027, 16091.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_7378454057df48478ca192a7a2c448cc.x = d3.scale.linear()
              .domain([0.0, 16091.0])
              .range([0, 400]);

    color_map_7378454057df48478ca192a7a2c448cc.legend = L.control({position: 'topright'});
    color_map_7378454057df48478ca192a7a2c448cc.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_7378454057df48478ca192a7a2c448cc.legend.addTo(map_90085fe523aa4e43aa4df927988dc28d);

    color_map_7378454057df48478ca192a7a2c448cc.xAxis = d3.svg.axis()
        .scale(color_map_7378454057df48478ca192a7a2c448cc.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 2681.8333333333335, 5363.666666666667, 8045.5, 10727.333333333334, 13409.166666666668, 16091.0]);

    color_map_7378454057df48478ca192a7a2c448cc.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_7378454057df48478ca192a7a2c448cc.g = color_map_7378454057df48478ca192a7a2c448cc.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_7378454057df48478ca192a7a2c448cc.g.selectAll("rect")
        .data(color_map_7378454057df48478ca192a7a2c448cc.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_7378454057df48478ca192a7a2c448cc.x(color_map_7378454057df48478ca192a7a2c448cc.color.domain()[i - 1]) : color_map_7378454057df48478ca192a7a2c448cc.x.range()[0],
            x1: i < color_map_7378454057df48478ca192a7a2c448cc.color.domain().length ? color_map_7378454057df48478ca192a7a2c448cc.x(color_map_7378454057df48478ca192a7a2c448cc.color.domain()[i]) : color_map_7378454057df48478ca192a7a2c448cc.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_7378454057df48478ca192a7a2c448cc.g.call(color_map_7378454057df48478ca192a7a2c448cc.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');

