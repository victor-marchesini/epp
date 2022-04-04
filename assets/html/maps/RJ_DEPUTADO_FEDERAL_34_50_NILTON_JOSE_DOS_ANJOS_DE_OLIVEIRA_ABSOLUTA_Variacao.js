    
            var map_93b9cb20af5b405697ff62ebfa45a632 = L.map(
                "map_93b9cb20af5b405697ff62ebfa45a632",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_cb62271cc4b144749ec28795bcbe74b2 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_93b9cb20af5b405697ff62ebfa45a632);
        
    
            var choropleth_b23600b25ce44dcf8af6ef04c4392ce7 = L.featureGroup(
                {}
            ).addTo(map_93b9cb20af5b405697ff62ebfa45a632);
        
    
        function geo_json_1e4949c4006e4a4887de2542b3e135af_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 434: case 428: case 453: case 380: case 393: case 338: case 340: case 400: case 423: case 431: case 404: case 395: case 354: case 349: case 342: case 336: case 329: case 331: case 358: case 328: case 367: case 460: case 475: case 357: case 481: case 483: case 479: case 366: case 391: case 465: case 458: case 480: case 405: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 412: case 440: case 449: case 369: case 427: case 411: case 430: case 409: case 370: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: case 436: case 419: case 433: case 471: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 381: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_1e4949c4006e4a4887de2542b3e135af_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_1e4949c4006e4a4887de2542b3e135af = L.geoJson(null, {
                onEachFeature: geo_json_1e4949c4006e4a4887de2542b3e135af_onEachFeature,
            
                style: geo_json_1e4949c4006e4a4887de2542b3e135af_styler,
        });

        function geo_json_1e4949c4006e4a4887de2542b3e135af_add (data) {
            geo_json_1e4949c4006e4a4887de2542b3e135af
                .addData(data)
                .addTo(choropleth_b23600b25ce44dcf8af6ef04c4392ce7);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_1e4949c4006e4a4887de2542b3e135af_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_0b717989ea9c4dccbc607c73f0cebf5f = {};

    
    color_map_0b717989ea9c4dccbc607c73f0cebf5f.color = d3.scale.threshold()
              .domain([1.0, 1.0861723446893787, 1.1723446893787575, 1.2585170340681362, 1.344689378757515, 1.4308617234468937, 1.5170340681362724, 1.6032064128256514, 1.68937875751503, 1.7755511022044088, 1.8617234468937875, 1.9478957915831663, 2.034068136272545, 2.1202404809619235, 2.2064128256513027, 2.2925851703406814, 2.37875751503006, 2.464929859719439, 2.5511022044088176, 2.6372745490981964, 2.723446893787575, 2.809619238476954, 2.8957915831663326, 2.9819639278557117, 3.06813627254509, 3.1543086172344688, 3.2404809619238475, 3.3266533066132267, 3.4128256513026054, 3.498997995991984, 3.585170340681363, 3.6713426853707416, 3.7575150300601203, 3.843687374749499, 3.929859719438878, 4.0160320641282565, 4.102204408817635, 4.188376753507014, 4.274549098196393, 4.3607214428857715, 4.44689378757515, 4.533066132264529, 4.619238476953908, 4.705410821643286, 4.791583166332665, 4.877755511022045, 4.9639278557114235, 5.050100200400801, 5.13627254509018, 5.222444889779559, 5.3086172344689375, 5.394789579158316, 5.480961923847695, 5.567134268537074, 5.653306613226453, 5.739478957915832, 5.825651302605211, 5.9118236472945895, 5.997995991983968, 6.084168336673347, 6.170340681362726, 6.2565130260521045, 6.342685370741483, 6.428857715430862, 6.515030060120241, 6.601202404809619, 6.687374749498998, 6.773547094188377, 6.859719438877756, 6.945891783567134, 7.032064128256513, 7.118236472945892, 7.2044088176352705, 7.290581162324649, 7.376753507014028, 7.462925851703407, 7.5490981963927855, 7.635270541082164, 7.721442885771543, 7.807615230460922, 7.8937875751503, 7.979959919839679, 8.066132264529058, 8.152304609218437, 8.238476953907815, 8.324649298597194, 8.410821643286573, 8.496993987975952, 8.58316633266533, 8.669338677354709, 8.75551102204409, 8.841683366733466, 8.927855711422847, 9.014028056112224, 9.100200400801603, 9.186372745490981, 9.27254509018036, 9.358717434869739, 9.444889779559118, 9.531062124248496, 9.617234468937875, 9.703406813627254, 9.789579158316633, 9.875751503006011, 9.96192384769539, 10.048096192384769, 10.134268537074147, 10.220440881763528, 10.306613226452907, 10.392785571142285, 10.478957915831664, 10.565130260521043, 10.651302605210422, 10.7374749498998, 10.823647294589179, 10.909819639278558, 10.995991983967937, 11.082164328657315, 11.168336673346694, 11.254509018036073, 11.340681362725451, 11.42685370741483, 11.513026052104209, 11.599198396793588, 11.685370741482966, 11.771543086172345, 11.857715430861724, 11.943887775551103, 12.030060120240481, 12.11623246492986, 12.202404809619239, 12.288577154308618, 12.374749498997996, 12.460921843687375, 12.547094188376754, 12.633266533066132, 12.719438877755511, 12.80561122244489, 12.891783567134269, 12.977955911823647, 13.064128256513026, 13.150300601202405, 13.236472945891784, 13.322645290581162, 13.408817635270541, 13.49498997995992, 13.581162324649299, 13.667334669338677, 13.753507014028056, 13.839679358717435, 13.925851703406813, 14.012024048096192, 14.098196392785571, 14.18436873747495, 14.270541082164328, 14.356713426853707, 14.442885771543086, 14.529058116232465, 14.615230460921843, 14.701402805611222, 14.7875751503006, 14.87374749498998, 14.959919839679358, 15.046092184368737, 15.132264529058116, 15.218436873747494, 15.304609218436873, 15.390781563126252, 15.47695390781563, 15.56312625250501, 15.649298597194388, 15.735470941883767, 15.821643286573146, 15.907815631262524, 15.993987975951903, 16.080160320641284, 16.16633266533066, 16.252505010020037, 16.338677354709418, 16.4248496993988, 16.51102204408818, 16.597194388777556, 16.683366733466933, 16.769539078156313, 16.855711422845694, 16.94188376753507, 17.028056112224448, 17.11422845691383, 17.200400801603205, 17.286573146292586, 17.372745490981963, 17.458917835671343, 17.54509018036072, 17.6312625250501, 17.717434869739478, 17.803607214428858, 17.889779559118235, 17.975951903807616, 18.062124248496993, 18.148296593186373, 18.23446893787575, 18.32064128256513, 18.406813627254508, 18.492985971943888, 18.579158316633265, 18.665330661322646, 18.751503006012022, 18.837675350701403, 18.92384769539078, 19.01002004008016, 19.096192384769537, 19.182364729458918, 19.268537074148295, 19.354709418837675, 19.440881763527056, 19.527054108216433, 19.613226452905813, 19.69939879759519, 19.78557114228457, 19.871743486973948, 19.95791583166333, 20.044088176352705, 20.130260521042086, 20.216432865731463, 20.302605210420843, 20.38877755511022, 20.4749498997996, 20.561122244488978, 20.647294589178358, 20.733466933867735, 20.819639278557116, 20.905811623246493, 20.991983967935873, 21.07815631262525, 21.16432865731463, 21.250501002004007, 21.336673346693388, 21.422845691382765, 21.509018036072145, 21.595190380761522, 21.681362725450903, 21.76753507014028, 21.85370741482966, 21.939879759519037, 22.026052104208418, 22.112224448897795, 22.198396793587175, 22.284569138276552, 22.370741482965933, 22.45691382765531, 22.54308617234469, 22.629258517034067, 22.715430861723448, 22.801603206412825, 22.887775551102205, 22.973947895791582, 23.060120240480963, 23.14629258517034, 23.23246492985972, 23.318637274549097, 23.404809619238478, 23.490981963927855, 23.577154308617235, 23.663326653306612, 23.749498997995993, 23.83567134268537, 23.92184368737475, 24.008016032064127, 24.094188376753507, 24.180360721442884, 24.266533066132265, 24.352705410821642, 24.438877755511022, 24.5250501002004, 24.61122244488978, 24.697394789579157, 24.783567134268537, 24.869739478957914, 24.955911823647295, 25.04208416833667, 25.128256513026052, 25.21442885771543, 25.30060120240481, 25.386773547094187, 25.472945891783567, 25.559118236472944, 25.645290581162325, 25.731462925851705, 25.817635270541082, 25.903807615230463, 25.98997995991984, 26.07615230460922, 26.162324649298597, 26.248496993987978, 26.334669338677354, 26.420841683366735, 26.507014028056112, 26.593186372745492, 26.67935871743487, 26.76553106212425, 26.851703406813627, 26.937875751503007, 27.024048096192384, 27.110220440881765, 27.196392785571142, 27.282565130260522, 27.3687374749499, 27.45490981963928, 27.541082164328657, 27.627254509018037, 27.713426853707414, 27.799599198396795, 27.88577154308617, 27.971943887775552, 28.05811623246493, 28.14428857715431, 28.230460921843687, 28.316633266533067, 28.402805611222444, 28.488977955911825, 28.5751503006012, 28.661322645290582, 28.74749498997996, 28.83366733466934, 28.919839679358716, 29.006012024048097, 29.092184368737474, 29.178356713426854, 29.26452905811623, 29.350701402805612, 29.43687374749499, 29.52304609218437, 29.609218436873746, 29.695390781563127, 29.781563126252504, 29.867735470941884, 29.95390781563126, 30.04008016032064, 30.12625250501002, 30.2124248496994, 30.298597194388776, 30.384769539078157, 30.470941883767534, 30.557114228456914, 30.64328657314629, 30.72945891783567, 30.81563126252505, 30.90180360721443, 30.987975951903806, 31.074148296593187, 31.160320641282564, 31.246492985971944, 31.33266533066132, 31.4188376753507, 31.50501002004008, 31.59118236472946, 31.677354709418836, 31.763527054108216, 31.849699398797597, 31.935871743486974, 32.02204408817636, 32.10821643286573, 32.19438877755511, 32.28056112224449, 32.366733466933866, 32.452905811623246, 32.53907815631263, 32.625250501002, 32.71142284569139, 32.79759519038076, 32.88376753507014, 32.96993987975952, 33.056112224448896, 33.142284569138276, 33.22845691382766, 33.31462925851704, 33.40080160320641, 33.48697394789579, 33.57314629258517, 33.65931863727455, 33.745490981963925, 33.831663326653306, 33.91783567134269, 34.00400801603207, 34.09018036072144, 34.17635270541082, 34.2625250501002, 34.34869739478958, 34.434869739478955, 34.521042084168336, 34.607214428857716, 34.6933867735471, 34.77955911823647, 34.86573146292585, 34.95190380761523, 35.03807615230461, 35.124248496993985, 35.210420841683366, 35.296593186372746, 35.38276553106213, 35.4689378757515, 35.55511022044088, 35.64128256513026, 35.72745490981964, 35.813627254509015, 35.899799599198396, 35.985971943887776, 36.07214428857716, 36.15831663326653, 36.24448897795591, 36.33066132264529, 36.41683366733467, 36.503006012024045, 36.589178356713425, 36.675350701402806, 36.76152304609219, 36.84769539078156, 36.93386773547094, 37.02004008016032, 37.1062124248497, 37.192384769539075, 37.278557114228455, 37.364729458917836, 37.450901803607216, 37.53707414829659, 37.62324649298597, 37.70941883767535, 37.79559118236473, 37.88176352705411, 37.967935871743485, 38.054108216432866, 38.140280561122246, 38.22645290581163, 38.312625250501, 38.39879759519038, 38.48496993987976, 38.57114228456914, 38.657314629258515, 38.743486973947896, 38.829659318637276, 38.91583166332666, 39.00200400801603, 39.08817635270541, 39.17434869739479, 39.26052104208417, 39.346693386773545, 39.432865731462925, 39.519038076152306, 39.605210420841686, 39.69138276553106, 39.77755511022044, 39.86372745490982, 39.9498997995992, 40.036072144288575, 40.122244488977955, 40.208416833667336, 40.294589178356716, 40.38076152304609, 40.46693386773547, 40.55310621242485, 40.63927855711423, 40.725450901803605, 40.811623246492985, 40.897795591182366, 40.983967935871746, 41.07014028056112, 41.1563126252505, 41.24248496993988, 41.32865731462926, 41.414829659318634, 41.501002004008015, 41.587174348697395, 41.673346693386776, 41.75951903807615, 41.84569138276553, 41.93186372745491, 42.01803607214429, 42.104208416833664, 42.190380761523045, 42.276553106212425, 42.362725450901806, 42.44889779559118, 42.53507014028056, 42.62124248496994, 42.70741482965932, 42.793587174348694, 42.879759519038075, 42.965931863727455, 43.052104208416836, 43.13827655310621, 43.22444889779559, 43.31062124248497, 43.39679358717435, 43.482965931863724, 43.569138276553105, 43.655310621242485, 43.741482965931866, 43.82765531062124, 43.91382765531062, 44.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_0b717989ea9c4dccbc607c73f0cebf5f.x = d3.scale.linear()
              .domain([1.0, 44.0])
              .range([0, 400]);

    color_map_0b717989ea9c4dccbc607c73f0cebf5f.legend = L.control({position: 'topright'});
    color_map_0b717989ea9c4dccbc607c73f0cebf5f.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_0b717989ea9c4dccbc607c73f0cebf5f.legend.addTo(map_93b9cb20af5b405697ff62ebfa45a632);

    color_map_0b717989ea9c4dccbc607c73f0cebf5f.xAxis = d3.svg.axis()
        .scale(color_map_0b717989ea9c4dccbc607c73f0cebf5f.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 8.166666666666668, 15.333333333333334, 22.5, 29.666666666666668, 36.833333333333336, 44.0]);

    color_map_0b717989ea9c4dccbc607c73f0cebf5f.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_0b717989ea9c4dccbc607c73f0cebf5f.g = color_map_0b717989ea9c4dccbc607c73f0cebf5f.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_0b717989ea9c4dccbc607c73f0cebf5f.g.selectAll("rect")
        .data(color_map_0b717989ea9c4dccbc607c73f0cebf5f.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_0b717989ea9c4dccbc607c73f0cebf5f.x(color_map_0b717989ea9c4dccbc607c73f0cebf5f.color.domain()[i - 1]) : color_map_0b717989ea9c4dccbc607c73f0cebf5f.x.range()[0],
            x1: i < color_map_0b717989ea9c4dccbc607c73f0cebf5f.color.domain().length ? color_map_0b717989ea9c4dccbc607c73f0cebf5f.x(color_map_0b717989ea9c4dccbc607c73f0cebf5f.color.domain()[i]) : color_map_0b717989ea9c4dccbc607c73f0cebf5f.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_0b717989ea9c4dccbc607c73f0cebf5f.g.call(color_map_0b717989ea9c4dccbc607c73f0cebf5f.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('34_50_NILTON JOSE DOS ANJOS DE OLIVEIRA');

