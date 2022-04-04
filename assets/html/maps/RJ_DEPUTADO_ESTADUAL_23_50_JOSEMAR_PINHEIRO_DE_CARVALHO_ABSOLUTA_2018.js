    
            var map_836536906ca04ea1a9d1551d0d0a1687 = L.map(
                "map_836536906ca04ea1a9d1551d0d0a1687",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_dea366c7b0fc4a06b72325375684366b = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_836536906ca04ea1a9d1551d0d0a1687);
        
    
            var choropleth_69e0ad9801924c53b0e627a40f0360c3 = L.featureGroup(
                {}
            ).addTo(map_836536906ca04ea1a9d1551d0d0a1687);
        
    
        function geo_json_31c5a934dfcd4cb5a8fe7523dddb2ae0_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 412: case 449: case 447: case 446: case 444: case 381: case 369: case 352: case 343: case 396: case 427: case 408: case 411: case 397: case 385: case 346: case 454: case 433: case 429: case 409: case 471: case 387: case 378: case 511: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 436: case 510: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: case 419: case 370: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 430: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_31c5a934dfcd4cb5a8fe7523dddb2ae0_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_31c5a934dfcd4cb5a8fe7523dddb2ae0 = L.geoJson(null, {
                onEachFeature: geo_json_31c5a934dfcd4cb5a8fe7523dddb2ae0_onEachFeature,
            
                style: geo_json_31c5a934dfcd4cb5a8fe7523dddb2ae0_styler,
        });

        function geo_json_31c5a934dfcd4cb5a8fe7523dddb2ae0_add (data) {
            geo_json_31c5a934dfcd4cb5a8fe7523dddb2ae0
                .addData(data)
                .addTo(choropleth_69e0ad9801924c53b0e627a40f0360c3);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_31c5a934dfcd4cb5a8fe7523dddb2ae0_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_cca111ad150943188b0a8f5163d76d97 = {};

    
    color_map_cca111ad150943188b0a8f5163d76d97.color = d3.scale.threshold()
              .domain([0.0, 0.3527054108216433, 0.7054108216432866, 1.0581162324649298, 1.4108216432865732, 1.7635270541082164, 2.1162324649298596, 2.468937875751503, 2.8216432865731464, 3.1743486973947896, 3.527054108216433, 3.879759519038076, 4.232464929859719, 4.585170340681363, 4.937875751503006, 5.290581162324649, 5.643286573146293, 5.995991983967936, 6.348697394789579, 6.701402805611222, 7.054108216432866, 7.406813627254509, 7.759519038076152, 8.112224448897795, 8.464929859719438, 8.817635270541082, 9.170340681362726, 9.52304609218437, 9.875751503006011, 10.228456913827655, 10.581162324649299, 10.933867735470942, 11.286573146292586, 11.639278557114228, 11.991983967935871, 12.344689378757515, 12.697394789579159, 13.050100200400802, 13.402805611222444, 13.755511022044088, 14.108216432865731, 14.460921843687375, 14.813627254509019, 15.16633266533066, 15.519038076152304, 15.871743486973948, 16.22444889779559, 16.577154308617235, 16.929859719438877, 17.282565130260522, 17.635270541082164, 17.987975951903806, 18.34068136272545, 18.693386773547093, 19.04609218436874, 19.39879759519038, 19.751503006012022, 20.104208416833668, 20.45691382765531, 20.809619238476955, 21.162324649298597, 21.51503006012024, 21.867735470941884, 22.220440881763526, 22.57314629258517, 22.925851703406813, 23.278557114228455, 23.6312625250501, 23.983967935871743, 24.336673346693388, 24.68937875751503, 25.04208416833667, 25.394789579158317, 25.74749498997996, 26.100200400801604, 26.452905811623246, 26.805611222444888, 27.158316633266534, 27.511022044088175, 27.86372745490982, 28.216432865731463, 28.569138276553105, 28.92184368737475, 29.274549098196392, 29.627254509018037, 29.97995991983968, 30.33266533066132, 30.685370741482966, 31.03807615230461, 31.390781563126254, 31.743486973947896, 32.09619238476954, 32.44889779559118, 32.80160320641283, 33.15430861723447, 33.50701402805611, 33.859719438877754, 34.212424849699396, 34.565130260521045, 34.91783567134269, 35.27054108216433, 35.62324649298597, 35.97595190380761, 36.32865731462926, 36.6813627254509, 37.034068136272545, 37.38677354709419, 37.73947895791583, 38.09218436873748, 38.44488977955912, 38.79759519038076, 39.1503006012024, 39.503006012024045, 39.855711422845694, 40.208416833667336, 40.56112224448898, 40.91382765531062, 41.26653306613226, 41.61923847695391, 41.97194388777555, 42.324649298597194, 42.677354709418836, 43.03006012024048, 43.38276553106213, 43.73547094188377, 44.08817635270541, 44.44088176352705, 44.793587174348694, 45.14629258517034, 45.498997995991985, 45.85170340681363, 46.20440881763527, 46.55711422845691, 46.90981963927856, 47.2625250501002, 47.61523046092184, 47.967935871743485, 48.32064128256513, 48.673346693386776, 49.02605210420842, 49.37875751503006, 49.7314629258517, 50.08416833667334, 50.43687374749499, 50.789579158316634, 51.142284569138276, 51.49498997995992, 51.84769539078156, 52.20040080160321, 52.55310621242485, 52.90581162324649, 53.258517034068134, 53.611222444889776, 53.963927855711425, 54.31663326653307, 54.66933867735471, 55.02204408817635, 55.37474949899799, 55.72745490981964, 56.08016032064128, 56.432865731462925, 56.78557114228457, 57.13827655310621, 57.49098196392786, 57.8436873747495, 58.19639278557114, 58.549098196392784, 58.901803607214426, 59.254509018036075, 59.607214428857716, 59.95991983967936, 60.312625250501, 60.66533066132264, 61.01803607214429, 61.37074148296593, 61.723446893787575, 62.07615230460922, 62.42885771543086, 62.78156312625251, 63.13426853707415, 63.48697394789579, 63.83967935871743, 64.19238476953907, 64.54509018036072, 64.89779559118236, 65.25050100200401, 65.60320641282566, 65.9559118236473, 66.30861723446894, 66.66132264529058, 67.01402805611222, 67.36673346693387, 67.71943887775551, 68.07214428857715, 68.42484969939879, 68.77755511022045, 69.13026052104209, 69.48296593186373, 69.83567134268537, 70.18837675350701, 70.54108216432866, 70.8937875751503, 71.24649298597194, 71.59919839679358, 71.95190380761522, 72.30460921843688, 72.65731462925852, 73.01002004008016, 73.3627254509018, 73.71543086172345, 74.06813627254509, 74.42084168336673, 74.77354709418837, 75.12625250501002, 75.47895791583166, 75.83166332665331, 76.18436873747495, 76.5370741482966, 76.88977955911824, 77.24248496993988, 77.59519038076152, 77.94789579158316, 78.3006012024048, 78.65330661322645, 79.00601202404809, 79.35871743486975, 79.71142284569139, 80.06412825651303, 80.41683366733467, 80.76953907815631, 81.12224448897796, 81.4749498997996, 81.82765531062124, 82.18036072144288, 82.53306613226452, 82.88577154308618, 83.23847695390782, 83.59118236472946, 83.9438877755511, 84.29659318637275, 84.64929859719439, 85.00200400801603, 85.35470941883767, 85.70741482965931, 86.06012024048096, 86.41282565130261, 86.76553106212425, 87.1182364729459, 87.47094188376754, 87.82364729458918, 88.17635270541082, 88.52905811623246, 88.8817635270541, 89.23446893787575, 89.58717434869739, 89.93987975951904, 90.29258517034069, 90.64529058116233, 90.99799599198397, 91.35070140280561, 91.70340681362725, 92.0561122244489, 92.40881763527054, 92.76152304609218, 93.11422845691382, 93.46693386773548, 93.81963927855712, 94.17234468937876, 94.5250501002004, 94.87775551102204, 95.23046092184369, 95.58316633266533, 95.93587174348697, 96.28857715430861, 96.64128256513025, 96.99398797595191, 97.34669338677355, 97.6993987975952, 98.05210420841684, 98.40480961923848, 98.75751503006012, 99.11022044088176, 99.4629258517034, 99.81563126252505, 100.16833667334669, 100.52104208416834, 100.87374749498998, 101.22645290581163, 101.57915831663327, 101.93186372745491, 102.28456913827655, 102.6372745490982, 102.98997995991984, 103.34268537074148, 103.69539078156312, 104.04809619238478, 104.40080160320642, 104.75350701402806, 105.1062124248497, 105.45891783567134, 105.81162324649299, 106.16432865731463, 106.51703406813627, 106.86973947895791, 107.22244488977955, 107.57515030060121, 107.92785571142285, 108.28056112224449, 108.63326653306613, 108.98597194388778, 109.33867735470942, 109.69138276553106, 110.0440881763527, 110.39679358717434, 110.74949899799599, 111.10220440881764, 111.45490981963928, 111.80761523046093, 112.16032064128257, 112.51302605210421, 112.86573146292585, 113.21843687374749, 113.57114228456913, 113.92384769539078, 114.27655310621242, 114.62925851703407, 114.98196392785572, 115.33466933867736, 115.687374749499, 116.04008016032064, 116.39278557114228, 116.74549098196393, 117.09819639278557, 117.45090180360721, 117.80360721442885, 118.15631262525051, 118.50901803607215, 118.86172344689379, 119.21442885771543, 119.56713426853707, 119.91983967935872, 120.27254509018036, 120.625250501002, 120.97795591182364, 121.33066132264528, 121.68336673346694, 122.03607214428858, 122.38877755511022, 122.74148296593187, 123.09418837675351, 123.44689378757515, 123.79959919839679, 124.15230460921843, 124.50501002004007, 124.85771543086172, 125.21042084168337, 125.56312625250501, 125.91583166332666, 126.2685370741483, 126.62124248496994, 126.97394789579158, 127.32665330661322, 127.67935871743487, 128.0320641282565, 128.38476953907815, 128.7374749498998, 129.09018036072143, 129.44288577154308, 129.79559118236472, 130.14829659318636, 130.50100200400803, 130.85370741482967, 131.2064128256513, 131.55911823647295, 131.9118236472946, 132.26452905811624, 132.61723446893788, 132.96993987975952, 133.32264529058116, 133.6753507014028, 134.02805611222445, 134.3807615230461, 134.73346693386773, 135.08617234468937, 135.43887775551102, 135.79158316633266, 136.1442885771543, 136.49699398797594, 136.84969939879758, 137.20240480961922, 137.5551102204409, 137.90781563126254, 138.26052104208418, 138.61322645290582, 138.96593186372746, 139.3186372745491, 139.67134268537075, 140.0240480961924, 140.37675350701403, 140.72945891783567, 141.0821643286573, 141.43486973947896, 141.7875751503006, 142.14028056112224, 142.49298597194388, 142.84569138276552, 143.19839679358716, 143.5511022044088, 143.90380761523045, 144.2565130260521, 144.60921843687376, 144.9619238476954, 145.31462925851704, 145.6673346693387, 146.02004008016033, 146.37274549098197, 146.7254509018036, 147.07815631262525, 147.4308617234469, 147.78356713426854, 148.13627254509018, 148.48897795591182, 148.84168336673346, 149.1943887775551, 149.54709418837675, 149.8997995991984, 150.25250501002003, 150.60521042084167, 150.9579158316633, 151.31062124248496, 151.66332665330663, 152.01603206412827, 152.3687374749499, 152.72144288577155, 153.0741482965932, 153.42685370741484, 153.77955911823648, 154.13226452905812, 154.48496993987976, 154.8376753507014, 155.19038076152304, 155.5430861723447, 155.89579158316633, 156.24849699398797, 156.6012024048096, 156.95390781563125, 157.3066132264529, 157.65931863727454, 158.01202404809618, 158.36472945891782, 158.7174348697395, 159.07014028056113, 159.42284569138278, 159.77555110220442, 160.12825651302606, 160.4809619238477, 160.83366733466934, 161.18637274549098, 161.53907815631263, 161.89178356713427, 162.2444889779559, 162.59719438877755, 162.9498997995992, 163.30260521042084, 163.65531062124248, 164.00801603206412, 164.36072144288576, 164.7134268537074, 165.06613226452905, 165.4188376753507, 165.77154308617236, 166.124248496994, 166.47695390781564, 166.82965931863728, 167.18236472945893, 167.53507014028057, 167.8877755511022, 168.24048096192385, 168.5931863727455, 168.94589178356713, 169.29859719438878, 169.65130260521042, 170.00400801603206, 170.3567134268537, 170.70941883767534, 171.06212424849699, 171.41482965931863, 171.76753507014027, 172.1202404809619, 172.47294589178355, 172.82565130260522, 173.17835671342687, 173.5310621242485, 173.88376753507015, 174.2364729458918, 174.58917835671343, 174.94188376753507, 175.29458917835672, 175.64729458917836, 176.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_cca111ad150943188b0a8f5163d76d97.x = d3.scale.linear()
              .domain([0.0, 176.0])
              .range([0, 400]);

    color_map_cca111ad150943188b0a8f5163d76d97.legend = L.control({position: 'topright'});
    color_map_cca111ad150943188b0a8f5163d76d97.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_cca111ad150943188b0a8f5163d76d97.legend.addTo(map_836536906ca04ea1a9d1551d0d0a1687);

    color_map_cca111ad150943188b0a8f5163d76d97.xAxis = d3.svg.axis()
        .scale(color_map_cca111ad150943188b0a8f5163d76d97.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 29.333333333333332, 58.666666666666664, 88.0, 117.33333333333333, 146.66666666666666, 176.0]);

    color_map_cca111ad150943188b0a8f5163d76d97.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_cca111ad150943188b0a8f5163d76d97.g = color_map_cca111ad150943188b0a8f5163d76d97.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_cca111ad150943188b0a8f5163d76d97.g.selectAll("rect")
        .data(color_map_cca111ad150943188b0a8f5163d76d97.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_cca111ad150943188b0a8f5163d76d97.x(color_map_cca111ad150943188b0a8f5163d76d97.color.domain()[i - 1]) : color_map_cca111ad150943188b0a8f5163d76d97.x.range()[0],
            x1: i < color_map_cca111ad150943188b0a8f5163d76d97.color.domain().length ? color_map_cca111ad150943188b0a8f5163d76d97.x(color_map_cca111ad150943188b0a8f5163d76d97.color.domain()[i]) : color_map_cca111ad150943188b0a8f5163d76d97.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_cca111ad150943188b0a8f5163d76d97.g.call(color_map_cca111ad150943188b0a8f5163d76d97.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('23_50_JOSEMAR PINHEIRO DE CARVALHO');

