    
            var map_017001d299a94b329597918c63a65e5b = L.map(
                "map_017001d299a94b329597918c63a65e5b",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_9080174e6a4641499ea532ea01d3411f = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_017001d299a94b329597918c63a65e5b);
        
    
            var choropleth_7c9287506b7f44d0bc882e1044419a68 = L.featureGroup(
                {}
            ).addTo(map_017001d299a94b329597918c63a65e5b);
        
    
        function geo_json_40b3318037564174be7621db78ebe579_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 370: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 449: case 455: case 474: case 436: case 369: case 363: case 352: case 392: case 351: case 419: case 346: case 347: case 433: case 430: case 409: case 378: case 389: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 442: case 381: case 511: case 374: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 387: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 510: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_40b3318037564174be7621db78ebe579_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_40b3318037564174be7621db78ebe579 = L.geoJson(null, {
                onEachFeature: geo_json_40b3318037564174be7621db78ebe579_onEachFeature,
            
                style: geo_json_40b3318037564174be7621db78ebe579_styler,
        });

        function geo_json_40b3318037564174be7621db78ebe579_add (data) {
            geo_json_40b3318037564174be7621db78ebe579
                .addData(data)
                .addTo(choropleth_7c9287506b7f44d0bc882e1044419a68);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_40b3318037564174be7621db78ebe579_add(obj);
            })
          }
            const file_path ='/covid/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_e5b356955c1f474f9e67e7f6dadfa34d = {};

    
    color_map_e5b356955c1f474f9e67e7f6dadfa34d.color = d3.scale.threshold()
              .domain([0.0, 0.21442885771543085, 0.4288577154308617, 0.6432865731462926, 0.8577154308617234, 1.0721442885771544, 1.2865731462925851, 1.501002004008016, 1.7154308617234468, 1.9298597194388778, 2.1442885771543088, 2.3587174348697393, 2.5731462925851702, 2.787575150300601, 3.002004008016032, 3.216432865731463, 3.4308617234468937, 3.6452905811623246, 3.8597194388777556, 4.074148296593187, 4.2885771543086175, 4.5030060120240485, 4.717434869739479, 4.9318637274549095, 5.1462925851703405, 5.3607214428857715, 5.575150300601202, 5.789579158316633, 6.004008016032064, 6.218436873747495, 6.432865731462926, 6.647294589178356, 6.861723446893787, 7.076152304609218, 7.290581162324649, 7.50501002004008, 7.719438877755511, 7.933867735470942, 8.148296593186373, 8.362725450901804, 8.577154308617235, 8.791583166332666, 9.006012024048097, 9.220440881763528, 9.434869739478957, 9.649298597194388, 9.863727454909819, 10.07815631262525, 10.292585170340681, 10.507014028056112, 10.721442885771543, 10.935871743486974, 11.150300601202405, 11.364729458917836, 11.579158316633267, 11.793587174348698, 12.008016032064129, 12.22244488977956, 12.43687374749499, 12.651302605210422, 12.865731462925853, 13.080160320641282, 13.294589178356713, 13.509018036072144, 13.723446893787575, 13.937875751503006, 14.152304609218437, 14.366733466933868, 14.581162324649299, 14.79559118236473, 15.01002004008016, 15.224448897795591, 15.438877755511022, 15.653306613226453, 15.867735470941884, 16.082164328657313, 16.296593186372746, 16.511022044088175, 16.725450901803608, 16.939879759519037, 17.15430861723447, 17.3687374749499, 17.583166332665332, 17.79759519038076, 18.012024048096194, 18.226452905811623, 18.440881763527056, 18.655310621242485, 18.869739478957914, 19.084168336673347, 19.298597194388776, 19.51302605210421, 19.727454909819638, 19.94188376753507, 20.1563126252505, 20.370741482965933, 20.585170340681362, 20.799599198396795, 21.014028056112224, 21.228456913827657, 21.442885771543086, 21.65731462925852, 21.871743486973948, 22.08617234468938, 22.30060120240481, 22.51503006012024, 22.72945891783567, 22.9438877755511, 23.158316633266534, 23.372745490981963, 23.587174348697395, 23.801603206412825, 24.016032064128257, 24.230460921843687, 24.44488977955912, 24.65931863727455, 24.87374749498998, 25.08817635270541, 25.302605210420843, 25.517034068136272, 25.731462925851705, 25.945891783567134, 26.160320641282564, 26.374749498997996, 26.589178356713425, 26.803607214428858, 27.018036072144287, 27.23246492985972, 27.44689378757515, 27.661322645290582, 27.87575150300601, 28.090180360721444, 28.304609218436873, 28.519038076152306, 28.733466933867735, 28.947895791583168, 29.162324649298597, 29.37675350701403, 29.59118236472946, 29.805611222444888, 30.02004008016032, 30.23446893787575, 30.448897795591183, 30.663326653306612, 30.877755511022045, 31.092184368737474, 31.306613226452907, 31.521042084168336, 31.73547094188377, 31.949899799599198, 32.16432865731463, 32.37875751503006, 32.59318637274549, 32.807615230460925, 33.02204408817635, 33.236472945891784, 33.450901803607216, 33.66533066132264, 33.879759519038075, 34.09418837675351, 34.30861723446894, 34.523046092184366, 34.7374749498998, 34.95190380761523, 35.166332665330664, 35.38076152304609, 35.59519038076152, 35.809619238476955, 36.02404809619239, 36.23847695390781, 36.452905811623246, 36.66733466933868, 36.88176352705411, 37.09619238476954, 37.31062124248497, 37.5250501002004, 37.73947895791583, 37.95390781563126, 38.168336673346694, 38.38276553106213, 38.59719438877755, 38.811623246492985, 39.02605210420842, 39.24048096192385, 39.454909819639276, 39.66933867735471, 39.88376753507014, 40.098196392785574, 40.312625250501, 40.52705410821643, 40.741482965931866, 40.95591182364729, 41.170340681362724, 41.38476953907816, 41.59919839679359, 41.813627254509015, 42.02805611222445, 42.24248496993988, 42.45691382765531, 42.67134268537074, 42.88577154308617, 43.100200400801604, 43.31462925851704, 43.52905811623246, 43.743486973947896, 43.95791583166333, 44.17234468937876, 44.38677354709419, 44.60120240480962, 44.81563126252505, 45.03006012024048, 45.24448897795591, 45.45891783567134, 45.673346693386776, 45.8877755511022, 46.102204408817634, 46.31663326653307, 46.5310621242485, 46.745490981963925, 46.95991983967936, 47.17434869739479, 47.388777555110224, 47.60320641282565, 47.81763527054108, 48.032064128256515, 48.24649298597194, 48.46092184368737, 48.675350701402806, 48.88977955911824, 49.104208416833664, 49.3186372745491, 49.53306613226453, 49.74749498997996, 49.96192384769539, 50.17635270541082, 50.390781563126254, 50.605210420841686, 50.81963927855711, 51.034068136272545, 51.24849699398798, 51.46292585170341, 51.677354709418836, 51.89178356713427, 52.1062124248497, 52.32064128256513, 52.53507014028056, 52.74949899799599, 52.963927855711425, 53.17835671342685, 53.392785571142284, 53.607214428857716, 53.82164328657315, 54.036072144288575, 54.25050100200401, 54.46492985971944, 54.67935871743487, 54.8937875751503, 55.10821643286573, 55.322645290581164, 55.53707414829659, 55.75150300601202, 55.965931863727455, 56.18036072144289, 56.394789579158314, 56.609218436873746, 56.82364729458918, 57.03807615230461, 57.25250501002004, 57.46693386773547, 57.6813627254509, 57.895791583166336, 58.11022044088176, 58.324649298597194, 58.53907815631263, 58.75350701402806, 58.967935871743485, 59.18236472945892, 59.39679358717435, 59.611222444889776, 59.82565130260521, 60.04008016032064, 60.254509018036075, 60.4689378757515, 60.68336673346693, 60.897795591182366, 61.1122244488978, 61.326653306613224, 61.54108216432866, 61.75551102204409, 61.96993987975952, 62.18436873747495, 62.39879759519038, 62.61322645290581, 62.82765531062124, 63.04208416833667, 63.256513026052104, 63.47094188376754, 63.68537074148296, 63.899799599198396, 64.11422845691382, 64.32865731462925, 64.54308617234469, 64.75751503006012, 64.97194388777555, 65.18637274549098, 65.40080160320642, 65.61523046092185, 65.82965931863727, 66.0440881763527, 66.25851703406813, 66.47294589178357, 66.687374749499, 66.90180360721443, 67.11623246492987, 67.33066132264528, 67.54509018036072, 67.75951903807615, 67.97394789579158, 68.18837675350701, 68.40280561122245, 68.61723446893788, 68.83166332665331, 69.04609218436873, 69.26052104208416, 69.4749498997996, 69.68937875751503, 69.90380761523046, 70.1182364729459, 70.33266533066133, 70.54709418837675, 70.76152304609218, 70.97595190380761, 71.19038076152304, 71.40480961923848, 71.61923847695391, 71.83366733466934, 72.04809619238478, 72.2625250501002, 72.47695390781563, 72.69138276553106, 72.90581162324649, 73.12024048096193, 73.33466933867736, 73.54909819639279, 73.76352705410822, 73.97795591182364, 74.19238476953907, 74.40681362725451, 74.62124248496994, 74.83567134268537, 75.0501002004008, 75.26452905811624, 75.47895791583166, 75.69338677354709, 75.90781563126252, 76.12224448897796, 76.33667334669339, 76.55110220440882, 76.76553106212425, 76.97995991983969, 77.1943887775551, 77.40881763527054, 77.62324649298597, 77.8376753507014, 78.05210420841684, 78.26653306613227, 78.4809619238477, 78.69539078156312, 78.90981963927855, 79.12424849699399, 79.33867735470942, 79.55310621242485, 79.76753507014028, 79.98196392785572, 80.19639278557115, 80.41082164328657, 80.625250501002, 80.83967935871743, 81.05410821643287, 81.2685370741483, 81.48296593186373, 81.69739478957916, 81.91182364729458, 82.12625250501002, 82.34068136272545, 82.55511022044088, 82.76953907815631, 82.98396793587175, 83.19839679358718, 83.41282565130261, 83.62725450901803, 83.84168336673346, 84.0561122244489, 84.27054108216433, 84.48496993987976, 84.6993987975952, 84.91382765531063, 85.12825651302605, 85.34268537074148, 85.55711422845691, 85.77154308617234, 85.98597194388778, 86.20040080160321, 86.41482965931864, 86.62925851703407, 86.84368737474949, 87.05811623246493, 87.27254509018036, 87.48697394789579, 87.70140280561122, 87.91583166332666, 88.13026052104209, 88.34468937875752, 88.55911823647294, 88.77354709418837, 88.9879759519038, 89.20240480961924, 89.41683366733467, 89.6312625250501, 89.84569138276554, 90.06012024048096, 90.27454909819639, 90.48897795591182, 90.70340681362725, 90.91783567134269, 91.13226452905812, 91.34669338677355, 91.56112224448898, 91.7755511022044, 91.98997995991984, 92.20440881763527, 92.4188376753507, 92.63326653306613, 92.84769539078157, 93.062124248497, 93.27655310621242, 93.49098196392785, 93.70541082164328, 93.91983967935872, 94.13426853707415, 94.34869739478958, 94.56312625250501, 94.77755511022045, 94.99198396793587, 95.2064128256513, 95.42084168336673, 95.63527054108216, 95.8496993987976, 96.06412825651303, 96.27855711422846, 96.49298597194388, 96.70741482965931, 96.92184368737475, 97.13627254509018, 97.35070140280561, 97.56513026052104, 97.77955911823648, 97.99398797595191, 98.20841683366733, 98.42284569138276, 98.6372745490982, 98.85170340681363, 99.06613226452906, 99.28056112224449, 99.49498997995993, 99.70941883767534, 99.92384769539078, 100.13827655310621, 100.35270541082164, 100.56713426853707, 100.78156312625251, 100.99599198396794, 101.21042084168337, 101.42484969939879, 101.63927855711422, 101.85370741482966, 102.06813627254509, 102.28256513026052, 102.49699398797596, 102.71142284569139, 102.92585170340682, 103.14028056112224, 103.35470941883767, 103.5691382765531, 103.78356713426854, 103.99799599198397, 104.2124248496994, 104.42685370741484, 104.64128256513025, 104.85571142284569, 105.07014028056112, 105.28456913827655, 105.49899799599199, 105.71342685370742, 105.92785571142285, 106.14228456913828, 106.3567134268537, 106.57114228456913, 106.78557114228457, 107.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_e5b356955c1f474f9e67e7f6dadfa34d.x = d3.scale.linear()
              .domain([0.0, 107.0])
              .range([0, 400]);

    color_map_e5b356955c1f474f9e67e7f6dadfa34d.legend = L.control({position: 'topright'});
    color_map_e5b356955c1f474f9e67e7f6dadfa34d.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_e5b356955c1f474f9e67e7f6dadfa34d.legend.addTo(map_017001d299a94b329597918c63a65e5b);

    color_map_e5b356955c1f474f9e67e7f6dadfa34d.xAxis = d3.svg.axis()
        .scale(color_map_e5b356955c1f474f9e67e7f6dadfa34d.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 17.833333333333332, 35.666666666666664, 53.5, 71.33333333333333, 89.16666666666666, 107.0]);

    color_map_e5b356955c1f474f9e67e7f6dadfa34d.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_e5b356955c1f474f9e67e7f6dadfa34d.g = color_map_e5b356955c1f474f9e67e7f6dadfa34d.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_e5b356955c1f474f9e67e7f6dadfa34d.g.selectAll("rect")
        .data(color_map_e5b356955c1f474f9e67e7f6dadfa34d.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_e5b356955c1f474f9e67e7f6dadfa34d.x(color_map_e5b356955c1f474f9e67e7f6dadfa34d.color.domain()[i - 1]) : color_map_e5b356955c1f474f9e67e7f6dadfa34d.x.range()[0],
            x1: i < color_map_e5b356955c1f474f9e67e7f6dadfa34d.color.domain().length ? color_map_e5b356955c1f474f9e67e7f6dadfa34d.x(color_map_e5b356955c1f474f9e67e7f6dadfa34d.color.domain()[i]) : color_map_e5b356955c1f474f9e67e7f6dadfa34d.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_e5b356955c1f474f9e67e7f6dadfa34d.g.call(color_map_e5b356955c1f474f9e67e7f6dadfa34d.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('65_PCdoB');

