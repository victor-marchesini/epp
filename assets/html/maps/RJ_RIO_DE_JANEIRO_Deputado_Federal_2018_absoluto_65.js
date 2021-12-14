    
            var map_3d8cf201ccc3491eb6b0a60030483ea9 = L.map(
                "map_3d8cf201ccc3491eb6b0a60030483ea9",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_03afa34b0afa4d3389df6eb04f4b16c2 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_3d8cf201ccc3491eb6b0a60030483ea9);
        
    
            var choropleth_9694d921d133440aa266b6b76ae606e6 = L.featureGroup(
                {}
            ).addTo(map_3d8cf201ccc3491eb6b0a60030483ea9);
        
    
        function geo_json_8e4aa5b6fde94d65992b2345e1bda427_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 377: case 449: case 466: case 436: case 381: case 369: case 352: case 343: case 351: case 382: case 427: case 360: case 347: case 337: case 433: case 430: case 378: case 389: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: case 385: case 409: case 370: case 387: case 374: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 511: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 510: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_8e4aa5b6fde94d65992b2345e1bda427_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_8e4aa5b6fde94d65992b2345e1bda427 = L.geoJson(null, {
                onEachFeature: geo_json_8e4aa5b6fde94d65992b2345e1bda427_onEachFeature,
            
                style: geo_json_8e4aa5b6fde94d65992b2345e1bda427_styler,
        });

        function geo_json_8e4aa5b6fde94d65992b2345e1bda427_add (data) {
            geo_json_8e4aa5b6fde94d65992b2345e1bda427
                .addData(data)
                .addTo(choropleth_9694d921d133440aa266b6b76ae606e6);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_8e4aa5b6fde94d65992b2345e1bda427_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_ebccb7aecc6f48e598d6c50dc0a515d1 = {};

    
    color_map_ebccb7aecc6f48e598d6c50dc0a515d1.color = d3.scale.threshold()
              .domain([0.0, 0.12224448897795591, 0.24448897795591182, 0.3667334669338677, 0.48897795591182364, 0.6112224448897795, 0.7334669338677354, 0.8557114228456913, 0.9779559118236473, 1.1002004008016033, 1.222444889779559, 1.344689378757515, 1.4669338677354709, 1.5891783567134268, 1.7114228456913827, 1.8336673346693386, 1.9559118236472945, 2.0781563126252505, 2.2004008016032066, 2.3226452905811623, 2.444889779559118, 2.567134268537074, 2.68937875751503, 2.811623246492986, 2.9338677354709417, 3.056112224448898, 3.1783567134268536, 3.3006012024048097, 3.4228456913827654, 3.5450901803607215, 3.6673346693386772, 3.7895791583166334, 3.911823647294589, 4.034068136272545, 4.156312625250501, 4.278557114228457, 4.400801603206413, 4.5230460921843685, 4.645290581162325, 4.767535070140281, 4.889779559118236, 5.012024048096192, 5.134268537074148, 5.2565130260521045, 5.37875751503006, 5.501002004008016, 5.623246492985972, 5.745490981963928, 5.867735470941883, 5.98997995991984, 6.112224448897796, 6.234468937875752, 6.356713426853707, 6.478957915831663, 6.601202404809619, 6.7234468937875755, 6.845691382765531, 6.967935871743487, 7.090180360721443, 7.212424849699399, 7.3346693386773545, 7.456913827655311, 7.579158316633267, 7.701402805611222, 7.823647294589178, 7.945891783567134, 8.06813627254509, 8.190380761523047, 8.312625250501002, 8.434869739478957, 8.557114228456914, 8.67935871743487, 8.801603206412826, 8.923847695390782, 9.046092184368737, 9.168336673346694, 9.29058116232465, 9.412825651302605, 9.535070140280562, 9.657314629258517, 9.779559118236472, 9.901803607214429, 10.024048096192384, 10.146292585170341, 10.268537074148297, 10.390781563126252, 10.513026052104209, 10.635270541082164, 10.75751503006012, 10.879759519038076, 11.002004008016032, 11.124248496993989, 11.246492985971944, 11.3687374749499, 11.490981963927856, 11.613226452905812, 11.735470941883767, 11.857715430861724, 11.97995991983968, 12.102204408817636, 12.224448897795591, 12.346693386773547, 12.468937875751504, 12.591182364729459, 12.713426853707414, 12.835671342685371, 12.957915831663327, 13.080160320641282, 13.202404809619239, 13.324649298597194, 13.446893787575151, 13.569138276553106, 13.691382765531062, 13.813627254509019, 13.935871743486974, 14.05811623246493, 14.180360721442886, 14.302605210420841, 14.424849699398798, 14.547094188376754, 14.669338677354709, 14.791583166332666, 14.913827655310621, 15.036072144288577, 15.158316633266534, 15.280561122244489, 15.402805611222444, 15.525050100200401, 15.647294589178356, 15.769539078156313, 15.891783567134269, 16.014028056112224, 16.13627254509018, 16.258517034068138, 16.380761523046093, 16.50300601202405, 16.625250501002004, 16.74749498997996, 16.869739478957914, 16.991983967935873, 17.11422845691383, 17.236472945891784, 17.35871743486974, 17.480961923847694, 17.603206412825653, 17.725450901803608, 17.847695390781563, 17.96993987975952, 18.092184368737474, 18.21442885771543, 18.336673346693388, 18.458917835671343, 18.5811623246493, 18.703406813627254, 18.82565130260521, 18.947895791583168, 19.070140280561123, 19.19238476953908, 19.314629258517034, 19.43687374749499, 19.559118236472944, 19.681362725450903, 19.803607214428858, 19.925851703406813, 20.04809619238477, 20.170340681362724, 20.292585170340683, 20.414829659318638, 20.537074148296593, 20.65931863727455, 20.781563126252504, 20.903807615230463, 21.026052104208418, 21.148296593186373, 21.27054108216433, 21.392785571142284, 21.51503006012024, 21.637274549098198, 21.759519038076153, 21.881763527054108, 22.004008016032063, 22.12625250501002, 22.248496993987978, 22.370741482965933, 22.492985971943888, 22.615230460921843, 22.7374749498998, 22.859719438877754, 22.981963927855713, 23.104208416833668, 23.226452905811623, 23.34869739478958, 23.470941883767534, 23.593186372745492, 23.715430861723448, 23.837675350701403, 23.95991983967936, 24.082164328657313, 24.204408817635272, 24.326653306613228, 24.448897795591183, 24.571142284569138, 24.693386773547093, 24.81563126252505, 24.937875751503007, 25.060120240480963, 25.182364729458918, 25.304609218436873, 25.42685370741483, 25.549098196392787, 25.671342685370742, 25.793587174348698, 25.915831663326653, 26.03807615230461, 26.160320641282564, 26.282565130260522, 26.404809619238478, 26.527054108216433, 26.649298597194388, 26.771543086172343, 26.893787575150302, 27.016032064128257, 27.138276553106213, 27.260521042084168, 27.382765531062123, 27.50501002004008, 27.627254509018037, 27.749498997995993, 27.871743486973948, 27.993987975951903, 28.11623246492986, 28.238476953907817, 28.360721442885772, 28.482965931863728, 28.605210420841683, 28.727454909819638, 28.849699398797597, 28.971943887775552, 29.094188376753507, 29.216432865731463, 29.338677354709418, 29.460921843687373, 29.583166332665332, 29.705410821643287, 29.827655310621243, 29.949899799599198, 30.072144288577153, 30.194388777555112, 30.316633266533067, 30.438877755511022, 30.561122244488978, 30.683366733466933, 30.805611222444888, 30.927855711422847, 31.050100200400802, 31.172344689378757, 31.294589178356713, 31.416833667334668, 31.539078156312627, 31.661322645290582, 31.783567134268537, 31.905811623246493, 32.02805611222445, 32.1503006012024, 32.27254509018036, 32.394789579158314, 32.517034068136276, 32.63927855711423, 32.76152304609219, 32.88376753507014, 33.0060120240481, 33.12825651302605, 33.25050100200401, 33.37274549098196, 33.49498997995992, 33.61723446893787, 33.73947895791583, 33.86172344689379, 33.983967935871746, 34.1062124248497, 34.22845691382766, 34.35070140280561, 34.47294589178357, 34.59519038076152, 34.71743486973948, 34.83967935871743, 34.96192384769539, 35.08416833667334, 35.206412825651306, 35.32865731462926, 35.450901803607216, 35.57314629258517, 35.69539078156313, 35.81763527054108, 35.93987975951904, 36.06212424849699, 36.18436873747495, 36.3066132264529, 36.42885771543086, 36.55110220440882, 36.673346693386776, 36.79559118236473, 36.91783567134269, 37.04008016032064, 37.1623246492986, 37.28456913827655, 37.40681362725451, 37.52905811623246, 37.65130260521042, 37.77354709418837, 37.895791583166336, 38.01803607214429, 38.140280561122246, 38.2625250501002, 38.38476953907816, 38.50701402805611, 38.62925851703407, 38.75150300601202, 38.87374749498998, 38.99599198396793, 39.11823647294589, 39.24048096192385, 39.362725450901806, 39.48496993987976, 39.607214428857716, 39.72945891783567, 39.85170340681363, 39.97394789579158, 40.09619238476954, 40.21843687374749, 40.34068136272545, 40.46292585170341, 40.585170340681366, 40.70741482965932, 40.829659318637276, 40.95190380761523, 41.07414829659319, 41.19639278557114, 41.3186372745491, 41.44088176352705, 41.56312625250501, 41.68537074148296, 41.807615230460925, 41.92985971943888, 42.052104208416836, 42.17434869739479, 42.296593186372746, 42.4188376753507, 42.54108216432866, 42.66332665330661, 42.78557114228457, 42.90781563126252, 43.03006012024048, 43.15230460921844, 43.274549098196395, 43.39679358717435, 43.519038076152306, 43.64128256513026, 43.763527054108216, 43.88577154308617, 44.00801603206413, 44.13026052104208, 44.25250501002004, 44.37474949899799, 44.496993987975955, 44.61923847695391, 44.741482965931866, 44.86372745490982, 44.985971943887776, 45.10821643286573, 45.23046092184369, 45.35270541082164, 45.4749498997996, 45.59719438877755, 45.71943887775551, 45.84168336673347, 45.963927855711425, 46.08617234468938, 46.208416833667336, 46.33066132264529, 46.452905811623246, 46.5751503006012, 46.69739478957916, 46.81963927855711, 46.94188376753507, 47.06412825651302, 47.186372745490985, 47.30861723446894, 47.430861723446895, 47.55310621242485, 47.675350701402806, 47.79759519038076, 47.91983967935872, 48.04208416833667, 48.16432865731463, 48.28657314629258, 48.408817635270545, 48.5310621242485, 48.653306613226455, 48.77555110220441, 48.897795591182366, 49.02004008016032, 49.142284569138276, 49.26452905811623, 49.38677354709419, 49.50901803607214, 49.6312625250501, 49.75350701402806, 49.875751503006015, 49.99799599198397, 50.120240480961925, 50.24248496993988, 50.364729458917836, 50.48697394789579, 50.609218436873746, 50.7314629258517, 50.85370741482966, 50.97595190380761, 51.098196392785574, 51.22044088176353, 51.342685370741485, 51.46492985971944, 51.587174348697395, 51.70941883767535, 51.831663326653306, 51.95390781563126, 52.07615230460922, 52.19839679358717, 52.32064128256513, 52.44288577154309, 52.565130260521045, 52.687374749499, 52.809619238476955, 52.93186372745491, 53.054108216432866, 53.17635270541082, 53.298597194388776, 53.42084168336673, 53.54308617234469, 53.66533066132264, 53.787575150300604, 53.90981963927856, 54.032064128256515, 54.15430861723447, 54.276553106212425, 54.39879759519038, 54.521042084168336, 54.64328657314629, 54.765531062124246, 54.8877755511022, 55.01002004008016, 55.13226452905812, 55.254509018036075, 55.37675350701403, 55.498997995991985, 55.62124248496994, 55.743486973947896, 55.86573146292585, 55.987975951903806, 56.11022044088176, 56.23246492985972, 56.35470941883767, 56.476953907815634, 56.59919839679359, 56.721442885771545, 56.8436873747495, 56.965931863727455, 57.08817635270541, 57.210420841683366, 57.33266533066132, 57.454909819639276, 57.57715430861723, 57.699398797595194, 57.82164328657315, 57.943887775551104, 58.06613226452906, 58.188376753507015, 58.31062124248497, 58.432865731462925, 58.55511022044088, 58.677354709418836, 58.79959919839679, 58.921843687374746, 59.04408817635271, 59.166332665330664, 59.28857715430862, 59.410821643286575, 59.53306613226453, 59.655310621242485, 59.77755511022044, 59.899799599198396, 60.02204408817635, 60.144288577154306, 60.26653306613226, 60.388777555110224, 60.51102204408818, 60.633266533066134, 60.75551102204409, 60.877755511022045, 61.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_ebccb7aecc6f48e598d6c50dc0a515d1.x = d3.scale.linear()
              .domain([0.0, 61.0])
              .range([0, 400]);

    color_map_ebccb7aecc6f48e598d6c50dc0a515d1.legend = L.control({position: 'topright'});
    color_map_ebccb7aecc6f48e598d6c50dc0a515d1.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_ebccb7aecc6f48e598d6c50dc0a515d1.legend.addTo(map_3d8cf201ccc3491eb6b0a60030483ea9);

    color_map_ebccb7aecc6f48e598d6c50dc0a515d1.xAxis = d3.svg.axis()
        .scale(color_map_ebccb7aecc6f48e598d6c50dc0a515d1.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 10.166666666666666, 20.333333333333332, 30.5, 40.666666666666664, 50.83333333333333, 61.0]);

    color_map_ebccb7aecc6f48e598d6c50dc0a515d1.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_ebccb7aecc6f48e598d6c50dc0a515d1.g = color_map_ebccb7aecc6f48e598d6c50dc0a515d1.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_ebccb7aecc6f48e598d6c50dc0a515d1.g.selectAll("rect")
        .data(color_map_ebccb7aecc6f48e598d6c50dc0a515d1.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_ebccb7aecc6f48e598d6c50dc0a515d1.x(color_map_ebccb7aecc6f48e598d6c50dc0a515d1.color.domain()[i - 1]) : color_map_ebccb7aecc6f48e598d6c50dc0a515d1.x.range()[0],
            x1: i < color_map_ebccb7aecc6f48e598d6c50dc0a515d1.color.domain().length ? color_map_ebccb7aecc6f48e598d6c50dc0a515d1.x(color_map_ebccb7aecc6f48e598d6c50dc0a515d1.color.domain()[i]) : color_map_ebccb7aecc6f48e598d6c50dc0a515d1.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_ebccb7aecc6f48e598d6c50dc0a515d1.g.call(color_map_ebccb7aecc6f48e598d6c50dc0a515d1.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('65_PCdoB');
