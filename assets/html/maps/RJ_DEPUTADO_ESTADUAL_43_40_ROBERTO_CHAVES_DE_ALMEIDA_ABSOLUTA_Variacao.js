    
            var map_18a927a113104352a5f1d02004ec50cd = L.map(
                "map_18a927a113104352a5f1d02004ec50cd",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_16a311ceddf4402194a5a6abe5a04fd8 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_18a927a113104352a5f1d02004ec50cd);
        
    
            var choropleth_0bdd649efb494013a9d552bb2c0c6aba = L.featureGroup(
                {}
            ).addTo(map_18a927a113104352a5f1d02004ec50cd);
        
    
        function geo_json_d4823f1a4b41489094bf748d3979f4b0_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 434: case 393: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 366: case 480: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 446: case 444: case 381: case 392: case 343: case 351: case 338: case 382: case 408: case 364: case 346: case 339: case 337: case 445: case 409: case 477: case 387: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 352: case 430: case 471: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: case 436: case 369: case 419: case 370: case 511: case 510: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: case 363: case 433: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_d4823f1a4b41489094bf748d3979f4b0_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_d4823f1a4b41489094bf748d3979f4b0 = L.geoJson(null, {
                onEachFeature: geo_json_d4823f1a4b41489094bf748d3979f4b0_onEachFeature,
            
                style: geo_json_d4823f1a4b41489094bf748d3979f4b0_styler,
        });

        function geo_json_d4823f1a4b41489094bf748d3979f4b0_add (data) {
            geo_json_d4823f1a4b41489094bf748d3979f4b0
                .addData(data)
                .addTo(choropleth_0bdd649efb494013a9d552bb2c0c6aba);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_d4823f1a4b41489094bf748d3979f4b0_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_66b66903405740f79a764896504f6378 = {};

    
    color_map_66b66903405740f79a764896504f6378.color = d3.scale.threshold()
              .domain([1.0, 1.346693386773547, 1.6933867735470942, 2.0400801603206413, 2.3867735470941884, 2.7334669338677355, 3.0801603206412826, 3.4268537074148298, 3.773547094188377, 4.1202404809619235, 4.466933867735471, 4.813627254509019, 5.160320641282565, 5.507014028056112, 5.8537074148296595, 6.200400801603206, 6.547094188376754, 6.8937875751503, 7.240480961923848, 7.587174348697395, 7.933867735470942, 8.280561122244489, 8.627254509018037, 8.973947895791582, 9.32064128256513, 9.667334669338677, 10.014028056112224, 10.360721442885772, 10.707414829659319, 11.054108216432866, 11.400801603206412, 11.74749498997996, 12.094188376753507, 12.440881763527054, 12.7875751503006, 13.134268537074147, 13.480961923847696, 13.827655310621243, 14.17434869739479, 14.521042084168336, 14.867735470941884, 15.214428857715431, 15.561122244488978, 15.907815631262524, 16.254509018036075, 16.60120240480962, 16.947895791583164, 17.294589178356713, 17.64128256513026, 17.987975951903806, 18.334669338677354, 18.681362725450903, 19.028056112224448, 19.374749498997996, 19.721442885771545, 20.06813627254509, 20.414829659318638, 20.761523046092183, 21.10821643286573, 21.45490981963928, 21.801603206412825, 22.148296593186373, 22.49498997995992, 22.841683366733466, 23.188376753507015, 23.53507014028056, 23.881763527054108, 24.228456913827657, 24.5751503006012, 24.92184368737475, 25.268537074148295, 25.615230460921843, 25.96192384769539, 26.308617234468937, 26.655310621242485, 27.002004008016034, 27.34869739478958, 27.695390781563127, 28.04208416833667, 28.38877755511022, 28.73547094188377, 29.082164328657313, 29.428857715430862, 29.77555110220441, 30.122244488977955, 30.468937875751504, 30.81563126252505, 31.162324649298597, 31.509018036072145, 31.85571142284569, 32.20240480961924, 32.54909819639279, 32.89579158316633, 33.24248496993988, 33.589178356713425, 33.93587174348698, 34.28256513026052, 34.62925851703407, 34.97595190380761, 35.322645290581164, 35.66933867735471, 36.016032064128254, 36.362725450901806, 36.70941883767535, 37.056112224448896, 37.40280561122245, 37.74949899799599, 38.09619238476954, 38.44288577154309, 38.789579158316634, 39.13627254509018, 39.482965931863724, 39.829659318637276, 40.17635270541082, 40.523046092184366, 40.86973947895792, 41.21643286573146, 41.56312625250501, 41.90981963927856, 42.256513026052104, 42.60320641282565, 42.9498997995992, 43.296593186372746, 43.64328657314629, 43.98997995991984, 44.33667334669339, 44.68336673346693, 45.03006012024048, 45.37675350701403, 45.723446893787575, 46.07014028056112, 46.41683366733467, 46.763527054108216, 47.11022044088176, 47.45691382765531, 47.80360721442886, 48.1503006012024, 48.496993987975955, 48.8436873747495, 49.190380761523045, 49.53707414829659, 49.88376753507014, 50.23046092184369, 50.57715430861723, 50.92384769539078, 51.27054108216433, 51.61723446893787, 51.963927855711425, 52.31062124248497, 52.657314629258515, 53.00400801603207, 53.35070140280561, 53.69739478957916, 54.04408817635271, 54.390781563126254, 54.7374749498998, 55.08416833667334, 55.430861723446895, 55.77755511022044, 56.124248496993985, 56.47094188376754, 56.81763527054108, 57.16432865731463, 57.51102204408818, 57.857715430861724, 58.20440881763527, 58.55110220440882, 58.897795591182366, 59.24448897795591, 59.591182364729455, 59.93787575150301, 60.28456913827655, 60.6312625250501, 60.97795591182365, 61.324649298597194, 61.67134268537074, 62.01803607214429, 62.364729458917836, 62.71142284569138, 63.05811623246493, 63.40480961923848, 63.75150300601202, 64.09819639278558, 64.44488977955912, 64.79158316633266, 65.13827655310621, 65.48496993987976, 65.83166332665331, 66.17835671342685, 66.5250501002004, 66.87174348697395, 67.21843687374749, 67.56513026052104, 67.91182364729458, 68.25851703406813, 68.60521042084169, 68.95190380761522, 69.29859719438878, 69.64529058116233, 69.99198396793587, 70.33867735470942, 70.68537074148297, 71.03206412825651, 71.37875751503006, 71.72545090180361, 72.07214428857715, 72.4188376753507, 72.76553106212425, 73.11222444889779, 73.45891783567134, 73.8056112224449, 74.15230460921843, 74.49899799599199, 74.84569138276554, 75.19238476953907, 75.53907815631263, 75.88577154308618, 76.23246492985972, 76.57915831663327, 76.92585170340682, 77.27254509018036, 77.61923847695391, 77.96593186372745, 78.312625250501, 78.65931863727455, 79.00601202404809, 79.35270541082164, 79.6993987975952, 80.04609218436873, 80.39278557114228, 80.73947895791584, 81.08617234468937, 81.43286573146293, 81.77955911823648, 82.12625250501002, 82.47294589178357, 82.81963927855712, 83.16633266533066, 83.51302605210421, 83.85971943887776, 84.2064128256513, 84.55310621242485, 84.8997995991984, 85.24649298597194, 85.59318637274549, 85.93987975951904, 86.28657314629258, 86.63326653306613, 86.97995991983969, 87.32665330661322, 87.67334669338678, 88.02004008016031, 88.36673346693387, 88.71342685370742, 89.06012024048096, 89.40681362725451, 89.75350701402806, 90.1002004008016, 90.44689378757515, 90.7935871743487, 91.14028056112224, 91.48697394789579, 91.83366733466934, 92.18036072144288, 92.52705410821643, 92.87374749498998, 93.22044088176352, 93.56713426853707, 93.91382765531063, 94.26052104208416, 94.60721442885772, 94.95390781563127, 95.3006012024048, 95.64729458917836, 95.99398797595191, 96.34068136272545, 96.687374749499, 97.03406813627255, 97.38076152304609, 97.72745490981964, 98.07414829659318, 98.42084168336673, 98.76753507014028, 99.11422845691382, 99.46092184368737, 99.80761523046093, 100.15430861723446, 100.50100200400801, 100.84769539078157, 101.1943887775551, 101.54108216432866, 101.88777555110221, 102.23446893787575, 102.5811623246493, 102.92785571142285, 103.27454909819639, 103.62124248496994, 103.96793587174349, 104.31462925851703, 104.66132264529058, 105.00801603206413, 105.35470941883767, 105.70140280561122, 106.04809619238478, 106.39478957915831, 106.74148296593187, 107.08817635270542, 107.43486973947896, 107.78156312625251, 108.12825651302605, 108.4749498997996, 108.82164328657315, 109.16833667334669, 109.51503006012024, 109.86172344689379, 110.20841683366733, 110.55511022044088, 110.90180360721443, 111.24849699398797, 111.59519038076152, 111.94188376753507, 112.28857715430861, 112.63527054108216, 112.98196392785572, 113.32865731462925, 113.6753507014028, 114.02204408817636, 114.3687374749499, 114.71543086172345, 115.062124248497, 115.40881763527054, 115.75551102204409, 116.10220440881764, 116.44889779559118, 116.79559118236473, 117.14228456913828, 117.48897795591182, 117.83567134268537, 118.18236472945891, 118.52905811623246, 118.87575150300601, 119.22244488977955, 119.5691382765531, 119.91583166332666, 120.2625250501002, 120.60921843687375, 120.9559118236473, 121.30260521042084, 121.64929859719439, 121.99599198396794, 122.34268537074148, 122.68937875751503, 123.03607214428858, 123.38276553106212, 123.72945891783567, 124.07615230460922, 124.42284569138276, 124.76953907815631, 125.11623246492987, 125.4629258517034, 125.80961923847696, 126.15631262525051, 126.50300601202404, 126.8496993987976, 127.19639278557115, 127.54308617234469, 127.88977955911824, 128.23647294589176, 128.58316633266531, 128.92985971943887, 129.27655310621242, 129.62324649298597, 129.96993987975952, 130.31663326653307, 130.66332665330663, 131.01002004008015, 131.3567134268537, 131.70340681362725, 132.0501002004008, 132.39679358717436, 132.7434869739479, 133.09018036072143, 133.43687374749499, 133.78356713426854, 134.1302605210421, 134.47695390781564, 134.82364729458916, 135.17034068136272, 135.51703406813627, 135.86372745490982, 136.21042084168337, 136.55711422845692, 136.90380761523045, 137.250501002004, 137.59719438877755, 137.9438877755511, 138.29058116232466, 138.6372745490982, 138.98396793587173, 139.33066132264528, 139.67735470941884, 140.0240480961924, 140.37074148296594, 140.7174348697395, 141.06412825651302, 141.41082164328657, 141.75751503006012, 142.10420841683367, 142.45090180360722, 142.79759519038078, 143.1442885771543, 143.49098196392785, 143.8376753507014, 144.18436873747495, 144.5310621242485, 144.87775551102203, 145.22444889779558, 145.57114228456913, 145.9178356713427, 146.26452905811624, 146.6112224448898, 146.9579158316633, 147.30460921843687, 147.65130260521042, 147.99799599198397, 148.34468937875752, 148.69138276553107, 149.0380761523046, 149.38476953907815, 149.7314629258517, 150.07815631262525, 150.4248496993988, 150.77154308617236, 151.11823647294588, 151.46492985971943, 151.81162324649299, 152.15831663326654, 152.5050100200401, 152.85170340681364, 153.19839679358716, 153.54509018036072, 153.89178356713427, 154.23847695390782, 154.58517034068137, 154.9318637274549, 155.27855711422845, 155.625250501002, 155.97194388777555, 156.3186372745491, 156.66533066132266, 157.01202404809618, 157.35871743486973, 157.70541082164328, 158.05210420841684, 158.3987975951904, 158.74549098196394, 159.09218436873746, 159.43887775551102, 159.78557114228457, 160.13226452905812, 160.47895791583167, 160.82565130260522, 161.17234468937875, 161.5190380761523, 161.86573146292585, 162.2124248496994, 162.55911823647295, 162.9058116232465, 163.25250501002003, 163.59919839679358, 163.94589178356713, 164.2925851703407, 164.63927855711424, 164.98597194388776, 165.3326653306613, 165.67935871743487, 166.02605210420842, 166.37274549098197, 166.71943887775552, 167.06613226452905, 167.4128256513026, 167.75951903807615, 168.1062124248497, 168.45290581162325, 168.7995991983968, 169.14629258517033, 169.49298597194388, 169.83967935871743, 170.18637274549098, 170.53306613226454, 170.8797595190381, 171.2264529058116, 171.57314629258516, 171.91983967935872, 172.26653306613227, 172.61322645290582, 172.95991983967937, 173.3066132264529, 173.65330661322645, 174.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_66b66903405740f79a764896504f6378.x = d3.scale.linear()
              .domain([1.0, 174.0])
              .range([0, 400]);

    color_map_66b66903405740f79a764896504f6378.legend = L.control({position: 'topright'});
    color_map_66b66903405740f79a764896504f6378.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_66b66903405740f79a764896504f6378.legend.addTo(map_18a927a113104352a5f1d02004ec50cd);

    color_map_66b66903405740f79a764896504f6378.xAxis = d3.svg.axis()
        .scale(color_map_66b66903405740f79a764896504f6378.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 29.833333333333332, 58.666666666666664, 87.5, 116.33333333333333, 145.16666666666666, 174.0]);

    color_map_66b66903405740f79a764896504f6378.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_66b66903405740f79a764896504f6378.g = color_map_66b66903405740f79a764896504f6378.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_66b66903405740f79a764896504f6378.g.selectAll("rect")
        .data(color_map_66b66903405740f79a764896504f6378.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_66b66903405740f79a764896504f6378.x(color_map_66b66903405740f79a764896504f6378.color.domain()[i - 1]) : color_map_66b66903405740f79a764896504f6378.x.range()[0],
            x1: i < color_map_66b66903405740f79a764896504f6378.color.domain().length ? color_map_66b66903405740f79a764896504f6378.x(color_map_66b66903405740f79a764896504f6378.color.domain()[i]) : color_map_66b66903405740f79a764896504f6378.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_66b66903405740f79a764896504f6378.g.call(color_map_66b66903405740f79a764896504f6378.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('43_40_ROBERTO CHAVES DE ALMEIDA');
