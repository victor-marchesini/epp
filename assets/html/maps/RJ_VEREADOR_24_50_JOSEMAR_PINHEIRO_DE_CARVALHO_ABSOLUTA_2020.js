    
            var map_495d22d2fc7046bd85758db0527a4e02 = L.map(
                "map_495d22d2fc7046bd85758db0527a4e02",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_e8ae0737615f46c6ac439bebd6ea0c73 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_495d22d2fc7046bd85758db0527a4e02);
        
    
            var choropleth_88fa6a8defd143cdad64730b4122664f = L.featureGroup(
                {}
            ).addTo(map_495d22d2fc7046bd85758db0527a4e02);
        
    
        function geo_json_54adbe9b6ed24060b9e50c89369d6e75_styler(feature) {
            switch(feature.properties.OBJECTID) {
                default:
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_54adbe9b6ed24060b9e50c89369d6e75_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_54adbe9b6ed24060b9e50c89369d6e75 = L.geoJson(null, {
                onEachFeature: geo_json_54adbe9b6ed24060b9e50c89369d6e75_onEachFeature,
            
                style: geo_json_54adbe9b6ed24060b9e50c89369d6e75_styler,
        });

        function geo_json_54adbe9b6ed24060b9e50c89369d6e75_add (data) {
            geo_json_54adbe9b6ed24060b9e50c89369d6e75
                .addData(data)
                .addTo(choropleth_88fa6a8defd143cdad64730b4122664f);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_54adbe9b6ed24060b9e50c89369d6e75_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_4fb0ceeaea5d420a94bd94681f0352e1 = {};

    
    color_map_4fb0ceeaea5d420a94bd94681f0352e1.color = d3.scale.threshold()
              .domain([0.0, 0.002004008016032064, 0.004008016032064128, 0.006012024048096192, 0.008016032064128256, 0.01002004008016032, 0.012024048096192385, 0.014028056112224449, 0.01603206412825651, 0.018036072144288578, 0.02004008016032064, 0.022044088176352707, 0.02404809619238477, 0.026052104208416832, 0.028056112224448898, 0.03006012024048096, 0.03206412825651302, 0.03406813627254509, 0.036072144288577156, 0.03807615230460922, 0.04008016032064128, 0.04208416833667335, 0.04408817635270541, 0.04609218436873747, 0.04809619238476954, 0.050100200400801605, 0.052104208416833664, 0.05410821643286573, 0.056112224448897796, 0.05811623246492986, 0.06012024048096192, 0.06212424849699399, 0.06412825651302605, 0.06613226452905811, 0.06813627254509018, 0.07014028056112225, 0.07214428857715431, 0.07414829659318638, 0.07615230460921844, 0.0781563126252505, 0.08016032064128256, 0.08216432865731463, 0.0841683366733467, 0.08617234468937876, 0.08817635270541083, 0.09018036072144289, 0.09218436873747494, 0.09418837675350701, 0.09619238476953908, 0.09819639278557114, 0.10020040080160321, 0.10220440881763528, 0.10420841683366733, 0.1062124248496994, 0.10821643286573146, 0.11022044088176353, 0.11222444889779559, 0.11422845691382766, 0.11623246492985972, 0.11823647294589178, 0.12024048096192384, 0.12224448897795591, 0.12424849699398798, 0.12625250501002003, 0.1282565130260521, 0.13026052104208416, 0.13226452905811623, 0.1342685370741483, 0.13627254509018036, 0.13827655310621242, 0.1402805611222445, 0.14228456913827656, 0.14428857715430862, 0.1462925851703407, 0.14829659318637275, 0.15030060120240482, 0.1523046092184369, 0.15430861723446893, 0.156312625250501, 0.15831663326653306, 0.16032064128256512, 0.1623246492985972, 0.16432865731462926, 0.16633266533066132, 0.1683366733466934, 0.17034068136272545, 0.17234468937875752, 0.1743486973947896, 0.17635270541082165, 0.17835671342685372, 0.18036072144288579, 0.18236472945891782, 0.1843687374749499, 0.18637274549098196, 0.18837675350701402, 0.1903807615230461, 0.19238476953907815, 0.19438877755511022, 0.1963927855711423, 0.19839679358717435, 0.20040080160320642, 0.20240480961923848, 0.20440881763527055, 0.20641282565130262, 0.20841683366733466, 0.21042084168336672, 0.2124248496993988, 0.21442885771543085, 0.21643286573146292, 0.218436873747495, 0.22044088176352705, 0.22244488977955912, 0.22444889779559118, 0.22645290581162325, 0.22845691382765532, 0.23046092184368738, 0.23246492985971945, 0.23446893787575152, 0.23647294589178355, 0.23847695390781562, 0.24048096192384769, 0.24248496993987975, 0.24448897795591182, 0.24649298597194388, 0.24849699398797595, 0.250501002004008, 0.25250501002004005, 0.2545090180360721, 0.2565130260521042, 0.25851703406813625, 0.2605210420841683, 0.2625250501002004, 0.26452905811623245, 0.2665330661322645, 0.2685370741482966, 0.27054108216432865, 0.2725450901803607, 0.2745490981963928, 0.27655310621242485, 0.2785571142284569, 0.280561122244489, 0.28256513026052105, 0.2845691382765531, 0.2865731462925852, 0.28857715430861725, 0.2905811623246493, 0.2925851703406814, 0.29458917835671344, 0.2965931863727455, 0.2985971943887776, 0.30060120240480964, 0.3026052104208417, 0.3046092184368738, 0.3066132264529058, 0.30861723446893785, 0.3106212424849699, 0.312625250501002, 0.31462925851703405, 0.3166332665330661, 0.3186372745490982, 0.32064128256513025, 0.3226452905811623, 0.3246492985971944, 0.32665330661322645, 0.3286573146292585, 0.3306613226452906, 0.33266533066132264, 0.3346693386773547, 0.3366733466933868, 0.33867735470941884, 0.3406813627254509, 0.342685370741483, 0.34468937875751504, 0.3466933867735471, 0.3486973947895792, 0.35070140280561124, 0.3527054108216433, 0.35470941883767537, 0.35671342685370744, 0.3587174348697395, 0.36072144288577157, 0.3627254509018036, 0.36472945891783565, 0.3667334669338677, 0.3687374749498998, 0.37074148296593185, 0.3727454909819639, 0.374749498997996, 0.37675350701402804, 0.3787575150300601, 0.3807615230460922, 0.38276553106212424, 0.3847695390781563, 0.3867735470941884, 0.38877755511022044, 0.3907815631262525, 0.3927855711422846, 0.39478957915831664, 0.3967935871743487, 0.39879759519038077, 0.40080160320641284, 0.4028056112224449, 0.40480961923847697, 0.40681362725450904, 0.4088176352705411, 0.41082164328657317, 0.41282565130260523, 0.4148296593186373, 0.4168336673346693, 0.4188376753507014, 0.42084168336673344, 0.4228456913827655, 0.4248496993987976, 0.42685370741482964, 0.4288577154308617, 0.4308617234468938, 0.43286573146292584, 0.4348697394789579, 0.43687374749499, 0.43887775551102204, 0.4408817635270541, 0.44288577154308617, 0.44488977955911824, 0.4468937875751503, 0.44889779559118237, 0.45090180360721444, 0.4529058116232465, 0.45490981963927857, 0.45691382765531063, 0.4589178356713427, 0.46092184368737477, 0.46292585170340683, 0.4649298597194389, 0.46693386773547096, 0.46893787575150303, 0.4709418837675351, 0.4729458917835671, 0.4749498997995992, 0.47695390781563124, 0.4789579158316633, 0.48096192384769537, 0.48296593186372744, 0.4849699398797595, 0.48697394789579157, 0.48897795591182364, 0.4909819639278557, 0.49298597194388777, 0.49498997995991983, 0.4969939879759519, 0.49899799599198397, 0.501002004008016, 0.503006012024048, 0.5050100200400801, 0.5070140280561122, 0.5090180360721442, 0.5110220440881763, 0.5130260521042084, 0.5150300601202404, 0.5170340681362725, 0.5190380761523046, 0.5210420841683366, 0.5230460921843687, 0.5250501002004008, 0.5270541082164328, 0.5290581162324649, 0.531062124248497, 0.533066132264529, 0.5350701402805611, 0.5370741482965932, 0.5390781563126252, 0.5410821643286573, 0.5430861723446894, 0.5450901803607214, 0.5470941883767535, 0.5490981963927856, 0.5511022044088176, 0.5531062124248497, 0.5551102204408818, 0.5571142284569138, 0.5591182364729459, 0.561122244488978, 0.56312625250501, 0.5651302605210421, 0.5671342685370742, 0.5691382765531062, 0.5711422845691383, 0.5731462925851704, 0.5751503006012024, 0.5771543086172345, 0.5791583166332666, 0.5811623246492986, 0.5831663326653307, 0.5851703406813628, 0.5871743486973948, 0.5891783567134269, 0.591182364729459, 0.593186372745491, 0.5951903807615231, 0.5971943887775552, 0.5991983967935872, 0.6012024048096193, 0.6032064128256514, 0.6052104208416834, 0.6072144288577155, 0.6092184368737475, 0.6112224448897795, 0.6132264529058116, 0.6152304609218436, 0.6172344689378757, 0.6192384769539078, 0.6212424849699398, 0.6232464929859719, 0.625250501002004, 0.627254509018036, 0.6292585170340681, 0.6312625250501002, 0.6332665330661322, 0.6352705410821643, 0.6372745490981964, 0.6392785571142284, 0.6412825651302605, 0.6432865731462926, 0.6452905811623246, 0.6472945891783567, 0.6492985971943888, 0.6513026052104208, 0.6533066132264529, 0.655310621242485, 0.657314629258517, 0.6593186372745491, 0.6613226452905812, 0.6633266533066132, 0.6653306613226453, 0.6673346693386774, 0.6693386773547094, 0.6713426853707415, 0.6733466933867736, 0.6753507014028056, 0.6773547094188377, 0.6793587174348698, 0.6813627254509018, 0.6833667334669339, 0.685370741482966, 0.687374749498998, 0.6893787575150301, 0.6913827655310621, 0.6933867735470942, 0.6953907815631263, 0.6973947895791583, 0.6993987975951904, 0.7014028056112225, 0.7034068136272545, 0.7054108216432866, 0.7074148296593187, 0.7094188376753507, 0.7114228456913828, 0.7134268537074149, 0.7154308617234469, 0.717434869739479, 0.7194388777555111, 0.7214428857715431, 0.7234468937875751, 0.7254509018036072, 0.7274549098196392, 0.7294589178356713, 0.7314629258517034, 0.7334669338677354, 0.7354709418837675, 0.7374749498997996, 0.7394789579158316, 0.7414829659318637, 0.7434869739478958, 0.7454909819639278, 0.7474949899799599, 0.749498997995992, 0.751503006012024, 0.7535070140280561, 0.7555110220440882, 0.7575150300601202, 0.7595190380761523, 0.7615230460921844, 0.7635270541082164, 0.7655310621242485, 0.7675350701402806, 0.7695390781563126, 0.7715430861723447, 0.7735470941883767, 0.7755511022044088, 0.7775551102204409, 0.779559118236473, 0.781563126252505, 0.7835671342685371, 0.7855711422845691, 0.7875751503006012, 0.7895791583166333, 0.7915831663326653, 0.7935871743486974, 0.7955911823647295, 0.7975951903807615, 0.7995991983967936, 0.8016032064128257, 0.8036072144288577, 0.8056112224448898, 0.8076152304609219, 0.8096192384769539, 0.811623246492986, 0.8136272545090181, 0.8156312625250501, 0.8176352705410822, 0.8196392785571143, 0.8216432865731463, 0.8236472945891784, 0.8256513026052105, 0.8276553106212425, 0.8296593186372746, 0.8316633266533067, 0.8336673346693386, 0.8356713426853707, 0.8376753507014028, 0.8396793587174348, 0.8416833667334669, 0.843687374749499, 0.845691382765531, 0.8476953907815631, 0.8496993987975952, 0.8517034068136272, 0.8537074148296593, 0.8557114228456913, 0.8577154308617234, 0.8597194388777555, 0.8617234468937875, 0.8637274549098196, 0.8657314629258517, 0.8677354709418837, 0.8697394789579158, 0.8717434869739479, 0.87374749498998, 0.875751503006012, 0.8777555110220441, 0.8797595190380761, 0.8817635270541082, 0.8837675350701403, 0.8857715430861723, 0.8877755511022044, 0.8897795591182365, 0.8917835671342685, 0.8937875751503006, 0.8957915831663327, 0.8977955911823647, 0.8997995991983968, 0.9018036072144289, 0.9038076152304609, 0.905811623246493, 0.9078156312625251, 0.9098196392785571, 0.9118236472945892, 0.9138276553106213, 0.9158316633266533, 0.9178356713426854, 0.9198396793587175, 0.9218436873747495, 0.9238476953907816, 0.9258517034068137, 0.9278557114228457, 0.9298597194388778, 0.9318637274549099, 0.9338677354709419, 0.935871743486974, 0.9378757515030061, 0.9398797595190381, 0.9418837675350702, 0.9438877755511023, 0.9458917835671342, 0.9478957915831663, 0.9498997995991983, 0.9519038076152304, 0.9539078156312625, 0.9559118236472945, 0.9579158316633266, 0.9599198396793587, 0.9619238476953907, 0.9639278557114228, 0.9659318637274549, 0.9679358717434869, 0.969939879759519, 0.9719438877755511, 0.9739478957915831, 0.9759519038076152, 0.9779559118236473, 0.9799599198396793, 0.9819639278557114, 0.9839679358717435, 0.9859719438877755, 0.9879759519038076, 0.9899799599198397, 0.9919839679358717, 0.9939879759519038, 0.9959919839679359, 0.9979959919839679, 1.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_4fb0ceeaea5d420a94bd94681f0352e1.x = d3.scale.linear()
              .domain([0.0, 1.0])
              .range([0, 400]);

    color_map_4fb0ceeaea5d420a94bd94681f0352e1.legend = L.control({position: 'topright'});
    color_map_4fb0ceeaea5d420a94bd94681f0352e1.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_4fb0ceeaea5d420a94bd94681f0352e1.legend.addTo(map_495d22d2fc7046bd85758db0527a4e02);

    color_map_4fb0ceeaea5d420a94bd94681f0352e1.xAxis = d3.svg.axis()
        .scale(color_map_4fb0ceeaea5d420a94bd94681f0352e1.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.16666666666666666, 0.3333333333333333, 0.5, 0.6666666666666666, 0.8333333333333333, 1.0]);

    color_map_4fb0ceeaea5d420a94bd94681f0352e1.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_4fb0ceeaea5d420a94bd94681f0352e1.g = color_map_4fb0ceeaea5d420a94bd94681f0352e1.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_4fb0ceeaea5d420a94bd94681f0352e1.g.selectAll("rect")
        .data(color_map_4fb0ceeaea5d420a94bd94681f0352e1.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_4fb0ceeaea5d420a94bd94681f0352e1.x(color_map_4fb0ceeaea5d420a94bd94681f0352e1.color.domain()[i - 1]) : color_map_4fb0ceeaea5d420a94bd94681f0352e1.x.range()[0],
            x1: i < color_map_4fb0ceeaea5d420a94bd94681f0352e1.color.domain().length ? color_map_4fb0ceeaea5d420a94bd94681f0352e1.x(color_map_4fb0ceeaea5d420a94bd94681f0352e1.color.domain()[i]) : color_map_4fb0ceeaea5d420a94bd94681f0352e1.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_4fb0ceeaea5d420a94bd94681f0352e1.g.call(color_map_4fb0ceeaea5d420a94bd94681f0352e1.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('24_50_JOSEMAR PINHEIRO DE CARVALHO');

