    
            var map_ad99b134c588466eb333dbe4e14a2625 = L.map(
                "map_ad99b134c588466eb333dbe4e14a2625",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_db8ef8fd45ed4c61952e5dfd0c4c8ee8 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_ad99b134c588466eb333dbe4e14a2625);
        
    
            var choropleth_6fafc7a29cb2404d801bfc3941a40d13 = L.featureGroup(
                {}
            ).addTo(map_ad99b134c588466eb333dbe4e14a2625);
        
    
        function geo_json_7206efcac63c40d38a6bfa19b682e1b3_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 325: case 426: case 423: case 431: case 348: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 366: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 439: case 448: case 449: case 447: case 444: case 381: case 369: case 363: case 343: case 338: case 396: case 382: case 415: case 408: case 411: case 397: case 364: case 398: case 385: case 346: case 372: case 433: case 409: case 399: case 477: case 387: case 374: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 419: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: case 436: case 352: case 432: case 347: case 430: case 471: case 370: case 378: case 511: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 427: case 510: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_7206efcac63c40d38a6bfa19b682e1b3_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_7206efcac63c40d38a6bfa19b682e1b3 = L.geoJson(null, {
                onEachFeature: geo_json_7206efcac63c40d38a6bfa19b682e1b3_onEachFeature,
            
                style: geo_json_7206efcac63c40d38a6bfa19b682e1b3_styler,
        });

        function geo_json_7206efcac63c40d38a6bfa19b682e1b3_add (data) {
            geo_json_7206efcac63c40d38a6bfa19b682e1b3
                .addData(data)
                .addTo(choropleth_6fafc7a29cb2404d801bfc3941a40d13);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_7206efcac63c40d38a6bfa19b682e1b3_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_ac1c38f358594a2baa944cc6ee1d3e1d = {};

    
    color_map_ac1c38f358594a2baa944cc6ee1d3e1d.color = d3.scale.threshold()
              .domain([1.0, 1.2725450901803608, 1.5450901803607215, 1.817635270541082, 2.090180360721443, 2.3627254509018036, 2.635270541082164, 2.907815631262525, 3.1803607214428857, 3.4529058116232463, 3.7254509018036073, 3.997995991983968, 4.270541082164328, 4.543086172344689, 4.81563126252505, 5.0881763527054105, 5.3607214428857715, 5.6332665330661325, 5.905811623246493, 6.1783567134268536, 6.4509018036072145, 6.7234468937875755, 6.995991983967936, 7.268537074148297, 7.541082164328658, 7.813627254509018, 8.086172344689379, 8.358717434869739, 8.6312625250501, 8.90380761523046, 9.176352705410821, 9.448897795591183, 9.721442885771543, 9.993987975951903, 10.266533066132265, 10.539078156312625, 10.811623246492985, 11.084168336673347, 11.356713426853707, 11.629258517034069, 11.901803607214429, 12.17434869739479, 12.446893787575151, 12.719438877755511, 12.991983967935871, 13.264529058116233, 13.537074148296593, 13.809619238476953, 14.082164328657315, 14.354709418837675, 14.627254509018035, 14.899799599198397, 15.172344689378757, 15.444889779559118, 15.71743486973948, 15.98997995991984, 16.2625250501002, 16.53507014028056, 16.80761523046092, 17.080160320641284, 17.352705410821642, 17.625250501002004, 17.897795591182366, 18.170340681362724, 18.442885771543086, 18.715430861723448, 18.987975951903806, 19.260521042084168, 19.53306613226453, 19.805611222444888, 20.07815631262525, 20.350701402805612, 20.62324649298597, 20.895791583166332, 21.168336673346694, 21.440881763527056, 21.713426853707414, 21.985971943887776, 22.258517034068138, 22.531062124248496, 22.803607214428858, 23.07615230460922, 23.34869739478958, 23.62124248496994, 23.893787575150302, 24.16633266533066, 24.438877755511022, 24.711422845691384, 24.983967935871743, 25.256513026052104, 25.529058116232466, 25.801603206412825, 26.074148296593187, 26.34669338677355, 26.619238476953907, 26.89178356713427, 27.16432865731463, 27.43687374749499, 27.70941883767535, 27.981963927855713, 28.25450901803607, 28.527054108216433, 28.799599198396795, 29.072144288577153, 29.344689378757515, 29.617234468937877, 29.889779559118235, 30.162324649298597, 30.43486973947896, 30.707414829659317, 30.97995991983968, 31.25250501002004, 31.5250501002004, 31.79759519038076, 32.07014028056112, 32.34268537074148, 32.61523046092184, 32.88777555110221, 33.16032064128257, 33.432865731462925, 33.705410821643284, 33.97795591182365, 34.25050100200401, 34.523046092184366, 34.79559118236473, 35.06813627254509, 35.34068136272545, 35.61322645290581, 35.88577154308617, 36.15831663326653, 36.430861723446895, 36.703406813627254, 36.97595190380761, 37.24849699398798, 37.521042084168336, 37.793587174348694, 38.06613226452906, 38.33867735470942, 38.611222444889776, 38.88376753507014, 39.1563126252505, 39.42885771543086, 39.701402805611224, 39.97394789579158, 40.24649298597194, 40.519038076152306, 40.791583166332664, 41.06412825651302, 41.33667334669339, 41.609218436873746, 41.88176352705411, 42.15430861723447, 42.42685370741483, 42.699398797595194, 42.97194388777555, 43.24448897795591, 43.517034068136276, 43.789579158316634, 44.06212424849699, 44.33466933867736, 44.607214428857716, 44.879759519038075, 45.15230460921844, 45.4248496993988, 45.69739478957916, 45.96993987975952, 46.24248496993988, 46.51503006012024, 46.787575150300604, 47.06012024048096, 47.33266533066132, 47.605210420841686, 47.877755511022045, 48.1503006012024, 48.42284569138277, 48.69539078156313, 48.967935871743485, 49.24048096192385, 49.51302605210421, 49.78557114228457, 50.05811623246493, 50.33066132264529, 50.60320641282565, 50.875751503006015, 51.14829659318637, 51.42084168336673, 51.6933867735471, 51.965931863727455, 52.23847695390781, 52.51102204408818, 52.78356713426854, 53.056112224448896, 53.32865731462926, 53.60120240480962, 53.87374749498998, 54.14629258517034, 54.4188376753507, 54.69138276553106, 54.963927855711425, 55.236472945891784, 55.50901803607214, 55.78156312625251, 56.054108216432866, 56.326653306613224, 56.59919839679359, 56.87174348697395, 57.144288577154306, 57.41683366733467, 57.68937875751503, 57.96192384769539, 58.234468937875754, 58.50701402805611, 58.77955911823647, 59.052104208416836, 59.324649298597194, 59.59719438877755, 59.86973947895792, 60.142284569138276, 60.414829659318634, 60.687374749499, 60.95991983967936, 61.23246492985972, 61.50501002004008, 61.77755511022044, 62.0501002004008, 62.322645290581164, 62.59519038076152, 62.86773547094188, 63.140280561122246, 63.412825651302605, 63.68537074148296, 63.95791583166333, 64.23046092184369, 64.50300601202404, 64.77555110220442, 65.04809619238478, 65.32064128256513, 65.59318637274549, 65.86573146292585, 66.13827655310621, 66.41082164328657, 66.68336673346694, 66.9559118236473, 67.22845691382766, 67.50100200400801, 67.77354709418837, 68.04609218436873, 68.3186372745491, 68.59118236472946, 68.86372745490982, 69.13627254509018, 69.40881763527054, 69.6813627254509, 69.95390781563127, 70.22645290581163, 70.49899799599199, 70.77154308617234, 71.0440881763527, 71.31663326653306, 71.58917835671343, 71.86172344689379, 72.13426853707415, 72.40681362725451, 72.67935871743487, 72.95190380761522, 73.2244488977956, 73.49699398797596, 73.76953907815631, 74.04208416833667, 74.31462925851703, 74.58717434869739, 74.85971943887776, 75.13226452905812, 75.40480961923848, 75.67735470941884, 75.9498997995992, 76.22244488977955, 76.49498997995993, 76.76753507014028, 77.04008016032064, 77.312625250501, 77.58517034068136, 77.85771543086172, 78.13026052104209, 78.40280561122245, 78.6753507014028, 78.94789579158316, 79.22044088176352, 79.49298597194388, 79.76553106212425, 80.03807615230461, 80.31062124248497, 80.58316633266533, 80.85571142284569, 81.12825651302605, 81.40080160320642, 81.67334669338678, 81.94589178356713, 82.21843687374749, 82.49098196392785, 82.76352705410822, 83.03607214428858, 83.30861723446894, 83.5811623246493, 83.85370741482966, 84.12625250501002, 84.39879759519039, 84.67134268537075, 84.9438877755511, 85.21643286573146, 85.48897795591182, 85.76152304609218, 86.03406813627255, 86.30661322645291, 86.57915831663327, 86.85170340681363, 87.12424849699399, 87.39679358717434, 87.66933867735472, 87.94188376753507, 88.21442885771543, 88.48697394789579, 88.75951903807615, 89.03206412825651, 89.30460921843688, 89.57715430861724, 89.8496993987976, 90.12224448897796, 90.39478957915831, 90.66733466933867, 90.93987975951904, 91.2124248496994, 91.48496993987976, 91.75751503006012, 92.03006012024048, 92.30260521042084, 92.57515030060121, 92.84769539078157, 93.12024048096193, 93.39278557114228, 93.66533066132264, 93.937875751503, 94.21042084168337, 94.48296593186373, 94.75551102204409, 95.02805611222445, 95.3006012024048, 95.57314629258516, 95.84569138276554, 96.1182364729459, 96.39078156312625, 96.66332665330661, 96.93587174348697, 97.20841683366733, 97.4809619238477, 97.75350701402806, 98.02605210420842, 98.29859719438878, 98.57114228456913, 98.84368737474949, 99.11623246492987, 99.38877755511022, 99.66132264529058, 99.93386773547094, 100.2064128256513, 100.47895791583166, 100.75150300601203, 101.02404809619239, 101.29659318637275, 101.5691382765531, 101.84168336673346, 102.11422845691382, 102.3867735470942, 102.65931863727455, 102.93186372745491, 103.20440881763527, 103.47695390781563, 103.74949899799599, 104.02204408817636, 104.29458917835672, 104.56713426853707, 104.83967935871743, 105.11222444889779, 105.38476953907815, 105.65731462925852, 105.92985971943888, 106.20240480961924, 106.4749498997996, 106.74749498997996, 107.02004008016031, 107.29258517034069, 107.56513026052104, 107.8376753507014, 108.11022044088176, 108.38276553106212, 108.65531062124248, 108.92785571142285, 109.20040080160321, 109.47294589178357, 109.74549098196393, 110.01803607214428, 110.29058116232466, 110.56312625250501, 110.83567134268537, 111.10821643286573, 111.38076152304609, 111.65330661322645, 111.92585170340682, 112.19839679358718, 112.47094188376754, 112.7434869739479, 113.01603206412825, 113.28857715430861, 113.56112224448898, 113.83366733466934, 114.1062124248497, 114.37875751503006, 114.65130260521042, 114.92384769539078, 115.19639278557115, 115.46893787575151, 115.74148296593187, 116.01402805611222, 116.28657314629258, 116.55911823647294, 116.83166332665331, 117.10420841683367, 117.37675350701403, 117.64929859719439, 117.92184368737475, 118.1943887775551, 118.46693386773548, 118.73947895791584, 119.0120240480962, 119.28456913827655, 119.55711422845691, 119.82965931863727, 120.10220440881764, 120.374749498998, 120.64729458917836, 120.91983967935872, 121.19238476953907, 121.46492985971943, 121.7374749498998, 122.01002004008016, 122.28256513026052, 122.55511022044088, 122.82765531062124, 123.1002004008016, 123.37274549098197, 123.64529058116233, 123.91783567134269, 124.19038076152304, 124.4629258517034, 124.73547094188376, 125.00801603206413, 125.28056112224449, 125.55310621242485, 125.82565130260521, 126.09819639278557, 126.37074148296593, 126.6432865731463, 126.91583166332666, 127.18837675350701, 127.46092184368737, 127.73346693386773, 128.0060120240481, 128.27855711422848, 128.55110220440883, 128.8236472945892, 129.09619238476955, 129.3687374749499, 129.64128256513027, 129.91382765531063, 130.18637274549098, 130.45891783567134, 130.7314629258517, 131.00400801603206, 131.27655310621242, 131.54909819639278, 131.82164328657313, 132.0941883767535, 132.36673346693388, 132.63927855711424, 132.9118236472946, 133.18436873747495, 133.4569138276553, 133.72945891783567, 134.00200400801603, 134.2745490981964, 134.54709418837675, 134.8196392785571, 135.09218436873746, 135.36472945891782, 135.6372745490982, 135.90981963927857, 136.18236472945893, 136.45490981963928, 136.72745490981964, 137.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_ac1c38f358594a2baa944cc6ee1d3e1d.x = d3.scale.linear()
              .domain([1.0, 137.0])
              .range([0, 400]);

    color_map_ac1c38f358594a2baa944cc6ee1d3e1d.legend = L.control({position: 'topright'});
    color_map_ac1c38f358594a2baa944cc6ee1d3e1d.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_ac1c38f358594a2baa944cc6ee1d3e1d.legend.addTo(map_ad99b134c588466eb333dbe4e14a2625);

    color_map_ac1c38f358594a2baa944cc6ee1d3e1d.xAxis = d3.svg.axis()
        .scale(color_map_ac1c38f358594a2baa944cc6ee1d3e1d.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 23.666666666666668, 46.333333333333336, 69.0, 91.66666666666667, 114.33333333333334, 137.0]);

    color_map_ac1c38f358594a2baa944cc6ee1d3e1d.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_ac1c38f358594a2baa944cc6ee1d3e1d.g = color_map_ac1c38f358594a2baa944cc6ee1d3e1d.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_ac1c38f358594a2baa944cc6ee1d3e1d.g.selectAll("rect")
        .data(color_map_ac1c38f358594a2baa944cc6ee1d3e1d.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_ac1c38f358594a2baa944cc6ee1d3e1d.x(color_map_ac1c38f358594a2baa944cc6ee1d3e1d.color.domain()[i - 1]) : color_map_ac1c38f358594a2baa944cc6ee1d3e1d.x.range()[0],
            x1: i < color_map_ac1c38f358594a2baa944cc6ee1d3e1d.color.domain().length ? color_map_ac1c38f358594a2baa944cc6ee1d3e1d.x(color_map_ac1c38f358594a2baa944cc6ee1d3e1d.color.domain()[i]) : color_map_ac1c38f358594a2baa944cc6ee1d3e1d.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_ac1c38f358594a2baa944cc6ee1d3e1d.g.call(color_map_ac1c38f358594a2baa944cc6ee1d3e1d.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('27_40_EMANUEL BASTOS TORQUATO');

