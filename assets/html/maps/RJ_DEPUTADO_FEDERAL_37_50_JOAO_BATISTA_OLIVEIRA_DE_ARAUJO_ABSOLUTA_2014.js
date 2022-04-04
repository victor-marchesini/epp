    
            var map_41caccd951dc44139701174757cb22fe = L.map(
                "map_41caccd951dc44139701174757cb22fe",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_2cdccce668a84986819e94bf4e5a2c55 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_41caccd951dc44139701174757cb22fe);
        
    
            var choropleth_977bdc5672b649efadc73f89b66d2fdc = L.featureGroup(
                {}
            ).addTo(map_41caccd951dc44139701174757cb22fe);
        
    
        function geo_json_886967e864664909ace4f40b1beac357_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 348: case 349: case 342: case 336: case 329: case 460: case 475: case 357: case 481: case 479: case 366: case 391: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_886967e864664909ace4f40b1beac357_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_886967e864664909ace4f40b1beac357 = L.geoJson(null, {
                onEachFeature: geo_json_886967e864664909ace4f40b1beac357_onEachFeature,
            
                style: geo_json_886967e864664909ace4f40b1beac357_styler,
        });

        function geo_json_886967e864664909ace4f40b1beac357_add (data) {
            geo_json_886967e864664909ace4f40b1beac357
                .addData(data)
                .addTo(choropleth_977bdc5672b649efadc73f89b66d2fdc);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_886967e864664909ace4f40b1beac357_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_97580932e4cf4fa3a3af8d6678a3056e = {};

    
    color_map_97580932e4cf4fa3a3af8d6678a3056e.color = d3.scale.threshold()
              .domain([-0.5, -0.49799599198396793, -0.49599198396793587, -0.4939879759519038, -0.49198396793587174, -0.48997995991983967, -0.4879759519038076, -0.48597194388777554, -0.48396793587174347, -0.4819639278557114, -0.47995991983967934, -0.4779559118236473, -0.4759519038076152, -0.47394789579158314, -0.4719438877755511, -0.46993987975951906, -0.467935871743487, -0.46593186372745493, -0.46392785571142287, -0.4619238476953908, -0.45991983967935873, -0.45791583166332667, -0.4559118236472946, -0.45390781563126253, -0.45190380761523047, -0.4498997995991984, -0.44789579158316634, -0.44589178356713427, -0.4438877755511022, -0.44188376753507014, -0.43987975951903807, -0.437875751503006, -0.43587174348697394, -0.4338677354709419, -0.4318637274549098, -0.42985971943887774, -0.4278557114228457, -0.4258517034068136, -0.42384769539078154, -0.42184368737474953, -0.41983967935871747, -0.4178356713426854, -0.41583166332665333, -0.41382765531062127, -0.4118236472945892, -0.40981963927855714, -0.40781563126252507, -0.405811623246493, -0.40380761523046094, -0.40180360721442887, -0.3997995991983968, -0.39779559118236474, -0.39579158316633267, -0.3937875751503006, -0.39178356713426854, -0.3897795591182365, -0.3877755511022044, -0.38577154308617234, -0.3837675350701403, -0.3817635270541082, -0.37975951903807614, -0.3777555110220441, -0.375751503006012, -0.37374749498997994, -0.3717434869739479, -0.3697394789579158, -0.36773547094188375, -0.3657314629258517, -0.3637274549098196, -0.36172344689378755, -0.3597194388777555, -0.3577154308617234, -0.35571142284569135, -0.3537074148296593, -0.3517034068136272, -0.34969939879759515, -0.3476953907815631, -0.3456913827655311, -0.343687374749499, -0.34168336673346694, -0.3396793587174349, -0.3376753507014028, -0.33567134268537074, -0.3336673346693387, -0.3316633266533066, -0.32965931863727455, -0.3276553106212425, -0.3256513026052104, -0.32364729458917835, -0.3216432865731463, -0.3196392785571142, -0.3176352705410822, -0.31563126252505014, -0.31362725450901807, -0.311623246492986, -0.30961923847695394, -0.3076152304609219, -0.3056112224448898, -0.30360721442885774, -0.3016032064128257, -0.2995991983967936, -0.29759519038076154, -0.2955911823647295, -0.2935871743486974, -0.29158316633266534, -0.2895791583166333, -0.2875751503006012, -0.28557114228456915, -0.2835671342685371, -0.281563126252505, -0.27955911823647295, -0.2775551102204409, -0.2755511022044088, -0.27354709418837675, -0.2715430861723447, -0.2695390781563126, -0.26753507014028055, -0.2655310621242485, -0.2635270541082164, -0.26152304609218435, -0.2595190380761523, -0.2575150300601202, -0.25551102204408815, -0.2535070140280561, -0.251503006012024, -0.249498997995992, -0.24749498997995995, -0.24549098196392788, -0.2434869739478958, -0.24148296593186375, -0.23947895791583168, -0.23747494989979961, -0.23547094188376755, -0.23346693386773548, -0.23146292585170342, -0.22945891783567135, -0.22745490981963928, -0.22545090180360722, -0.22344689378757515, -0.22144288577154309, -0.21943887775551102, -0.21743486973947895, -0.2154308617234469, -0.21342685370741482, -0.21142284569138275, -0.2094188376753507, -0.20741482965931862, -0.20541082164328656, -0.2034068136272545, -0.20140280561122242, -0.19939879759519036, -0.1973947895791583, -0.19539078156312623, -0.19338677354709422, -0.19138276553106215, -0.18937875751503008, -0.18737474949899802, -0.18537074148296595, -0.18336673346693388, -0.18136272545090182, -0.17935871743486975, -0.17735470941883769, -0.17535070140280562, -0.17334669338677355, -0.1713426853707415, -0.16933867735470942, -0.16733466933867736, -0.1653306613226453, -0.16332665330661322, -0.16132264529058116, -0.1593186372745491, -0.15731462925851702, -0.15531062124248496, -0.1533066132264529, -0.15130260521042083, -0.14929859719438876, -0.1472945891783567, -0.14529058116232463, -0.14328657314629256, -0.1412825651302605, -0.13927855711422843, -0.13727454909819642, -0.13527054108216435, -0.1332665330661323, -0.13126252505010022, -0.12925851703406815, -0.1272545090180361, -0.12525050100200402, -0.12324649298597196, -0.12124248496993989, -0.11923847695390782, -0.11723446893787576, -0.11523046092184369, -0.11322645290581163, -0.11122244488977956, -0.1092184368737475, -0.10721442885771543, -0.10521042084168336, -0.1032064128256513, -0.10120240480961923, -0.09919839679358716, -0.0971943887775551, -0.09519038076152303, -0.09318637274549096, -0.0911823647294589, -0.08917835671342683, -0.08717434869739477, -0.0851703406813627, -0.08316633266533069, -0.08116232464929862, -0.07915831663326656, -0.07715430861723449, -0.07515030060120242, -0.07314629258517036, -0.07114228456913829, -0.06913827655310623, -0.06713426853707416, -0.0651302605210421, -0.06312625250501003, -0.06112224448897796, -0.059118236472945895, -0.05711422845691383, -0.05511022044088176, -0.0531062124248497, -0.05110220440881763, -0.049098196392785565, -0.0470941883767535, -0.04509018036072143, -0.043086172344689366, -0.0410821643286573, -0.039078156312625234, -0.03707414829659317, -0.0350701402805611, -0.033066132264529036, -0.03106212424849697, -0.029058116232464903, -0.027054108216432893, -0.025050100200400827, -0.02304609218436876, -0.021042084168336694, -0.019038076152304628, -0.017034068136272562, -0.015030060120240496, -0.01302605210420843, -0.011022044088176364, -0.009018036072144298, -0.0070140280561122315, -0.005010020040080165, -0.003006012024048099, -0.001002004008016033, 0.0010020040080159776, 0.0030060120240480437, 0.00501002004008011, 0.007014028056112176, 0.009018036072144242, 0.011022044088176308, 0.013026052104208374, 0.01503006012024044, 0.017034068136272507, 0.019038076152304573, 0.02104208416833664, 0.023046092184368705, 0.02505010020040077, 0.027054108216432837, 0.029058116232464903, 0.03106212424849697, 0.033066132264529036, 0.0350701402805611, 0.03707414829659317, 0.039078156312625234, 0.0410821643286573, 0.043086172344689366, 0.04509018036072143, 0.0470941883767535, 0.049098196392785565, 0.05110220440881763, 0.0531062124248497, 0.05511022044088176, 0.05711422845691383, 0.059118236472945895, 0.06112224448897796, 0.06312625250501003, 0.0651302605210421, 0.06713426853707416, 0.06913827655310623, 0.07114228456913829, 0.07314629258517036, 0.07515030060120242, 0.07715430861723449, 0.07915831663326656, 0.08116232464929862, 0.08316633266533069, 0.08517034068136276, 0.08717434869739482, 0.08917835671342689, 0.09118236472945895, 0.09318637274549102, 0.09519038076152309, 0.09719438877755515, 0.09919839679358722, 0.10120240480961928, 0.10320641282565135, 0.10521042084168342, 0.10721442885771548, 0.10921843687374755, 0.1112224448897795, 0.11322645290581157, 0.11523046092184364, 0.1172344689378757, 0.11923847695390777, 0.12124248496993983, 0.1232464929859719, 0.12525050100200397, 0.12725450901803603, 0.1292585170340681, 0.13126252505010017, 0.13326653306613223, 0.1352705410821643, 0.13727454909819636, 0.13927855711422843, 0.1412825651302605, 0.14328657314629256, 0.14529058116232463, 0.1472945891783567, 0.14929859719438876, 0.15130260521042083, 0.1533066132264529, 0.15531062124248496, 0.15731462925851702, 0.1593186372745491, 0.16132264529058116, 0.16332665330661322, 0.1653306613226453, 0.16733466933867736, 0.16933867735470942, 0.1713426853707415, 0.17334669338677355, 0.17535070140280562, 0.17735470941883769, 0.17935871743486975, 0.18136272545090182, 0.18336673346693388, 0.18537074148296595, 0.18737474949899802, 0.18937875751503008, 0.19138276553106215, 0.19338677354709422, 0.19539078156312628, 0.19739478957915835, 0.1993987975951904, 0.20140280561122248, 0.20340681362725455, 0.2054108216432866, 0.20741482965931868, 0.20941883767535074, 0.2114228456913828, 0.21342685370741488, 0.21543086172344694, 0.217434869739479, 0.21943887775551107, 0.22144288577154314, 0.2234468937875751, 0.22545090180360716, 0.22745490981963923, 0.2294589178356713, 0.23146292585170336, 0.23346693386773543, 0.2354709418837675, 0.23747494989979956, 0.23947895791583163, 0.2414829659318637, 0.24348697394789576, 0.24549098196392782, 0.2474949899799599, 0.24949899799599196, 0.251503006012024, 0.2535070140280561, 0.25551102204408815, 0.2575150300601202, 0.2595190380761523, 0.26152304609218435, 0.2635270541082164, 0.2655310621242485, 0.26753507014028055, 0.2695390781563126, 0.2715430861723447, 0.27354709418837675, 0.2755511022044088, 0.2775551102204409, 0.27955911823647295, 0.281563126252505, 0.2835671342685371, 0.28557114228456915, 0.2875751503006012, 0.2895791583166333, 0.29158316633266534, 0.2935871743486974, 0.2955911823647295, 0.29759519038076154, 0.2995991983967936, 0.3016032064128257, 0.30360721442885774, 0.3056112224448898, 0.3076152304609219, 0.30961923847695394, 0.311623246492986, 0.31362725450901807, 0.31563126252505014, 0.3176352705410822, 0.31963927855711427, 0.32164328657314634, 0.3236472945891784, 0.32565130260521047, 0.32765531062124253, 0.3296593186372746, 0.33166332665330667, 0.3336673346693386, 0.3356713426853707, 0.33767535070140275, 0.3396793587174348, 0.3416833667334669, 0.34368737474949895, 0.345691382765531, 0.3476953907815631, 0.34969939879759515, 0.3517034068136272, 0.3537074148296593, 0.35571142284569135, 0.3577154308617234, 0.3597194388777555, 0.36172344689378755, 0.3637274549098196, 0.3657314629258517, 0.36773547094188375, 0.3697394789579158, 0.3717434869739479, 0.37374749498997994, 0.375751503006012, 0.3777555110220441, 0.37975951903807614, 0.3817635270541082, 0.3837675350701403, 0.38577154308617234, 0.3877755511022044, 0.3897795591182365, 0.39178356713426854, 0.3937875751503006, 0.39579158316633267, 0.39779559118236474, 0.3997995991983968, 0.40180360721442887, 0.40380761523046094, 0.405811623246493, 0.40781563126252507, 0.40981963927855714, 0.4118236472945892, 0.41382765531062127, 0.41583166332665333, 0.4178356713426854, 0.41983967935871747, 0.42184368737474953, 0.4238476953907816, 0.42585170340681366, 0.42785571142284573, 0.4298597194388778, 0.43186372745490986, 0.43386773547094193, 0.435871743486974, 0.43787575150300606, 0.4398797595190381, 0.4418837675350702, 0.44388777555110226, 0.4458917835671342, 0.4478957915831663, 0.44989979959919835, 0.4519038076152304, 0.4539078156312625, 0.45591182364729455, 0.4579158316633266, 0.4599198396793587, 0.46192384769539074, 0.4639278557114228, 0.4659318637274549, 0.46793587174348694, 0.469939879759519, 0.4719438877755511, 0.47394789579158314, 0.4759519038076152, 0.4779559118236473, 0.47995991983967934, 0.4819639278557114, 0.48396793587174347, 0.48597194388777554, 0.4879759519038076, 0.48997995991983967, 0.49198396793587174, 0.4939879759519038, 0.49599198396793587, 0.49799599198396793, 0.5])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_97580932e4cf4fa3a3af8d6678a3056e.x = d3.scale.linear()
              .domain([-0.5, 0.5])
              .range([0, 400]);

    color_map_97580932e4cf4fa3a3af8d6678a3056e.legend = L.control({position: 'topright'});
    color_map_97580932e4cf4fa3a3af8d6678a3056e.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_97580932e4cf4fa3a3af8d6678a3056e.legend.addTo(map_41caccd951dc44139701174757cb22fe);

    color_map_97580932e4cf4fa3a3af8d6678a3056e.xAxis = d3.svg.axis()
        .scale(color_map_97580932e4cf4fa3a3af8d6678a3056e.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-0.5, -0.33333333333333337, -0.16666666666666669, 0.0, 0.16666666666666663, 0.33333333333333326, 0.5]);

    color_map_97580932e4cf4fa3a3af8d6678a3056e.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_97580932e4cf4fa3a3af8d6678a3056e.g = color_map_97580932e4cf4fa3a3af8d6678a3056e.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_97580932e4cf4fa3a3af8d6678a3056e.g.selectAll("rect")
        .data(color_map_97580932e4cf4fa3a3af8d6678a3056e.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_97580932e4cf4fa3a3af8d6678a3056e.x(color_map_97580932e4cf4fa3a3af8d6678a3056e.color.domain()[i - 1]) : color_map_97580932e4cf4fa3a3af8d6678a3056e.x.range()[0],
            x1: i < color_map_97580932e4cf4fa3a3af8d6678a3056e.color.domain().length ? color_map_97580932e4cf4fa3a3af8d6678a3056e.x(color_map_97580932e4cf4fa3a3af8d6678a3056e.color.domain()[i]) : color_map_97580932e4cf4fa3a3af8d6678a3056e.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_97580932e4cf4fa3a3af8d6678a3056e.g.call(color_map_97580932e4cf4fa3a3af8d6678a3056e.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('37_50_JOAO BATISTA OLIVEIRA DE ARAUJO');

