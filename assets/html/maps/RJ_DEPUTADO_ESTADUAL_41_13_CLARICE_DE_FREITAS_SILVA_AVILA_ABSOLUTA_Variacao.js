    
            var map_cdec9486ed864dd0b8f49e2f01f79980 = L.map(
                "map_cdec9486ed864dd0b8f49e2f01f79980",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_f930affb1f3647c19b3219855a835677 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_cdec9486ed864dd0b8f49e2f01f79980);
        
    
            var choropleth_6e70be2684964caea46af31e62552202 = L.featureGroup(
                {}
            ).addTo(map_cdec9486ed864dd0b8f49e2f01f79980);
        
    
        function geo_json_3053c56b1bc6482da49e13bda0390d85_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 420: case 482: case 443: case 434: case 441: case 325: case 467: case 393: case 416: case 382: case 423: case 431: case 404: case 394: case 349: case 342: case 334: case 326: case 336: case 329: case 358: case 367: case 460: case 475: case 357: case 481: case 479: case 469: case 366: case 465: case 451: case 450: case 480: case 341: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 449: case 447: case 335: case 478: case 437: case 436: case 446: case 381: case 369: case 363: case 395: case 346: case 372: case 347: case 337: case 433: case 471: case 388: case 374: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 510: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: case 472: case 442: case 409: case 387: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 352: case 370: case 511: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 430: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_3053c56b1bc6482da49e13bda0390d85_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_3053c56b1bc6482da49e13bda0390d85 = L.geoJson(null, {
                onEachFeature: geo_json_3053c56b1bc6482da49e13bda0390d85_onEachFeature,
            
                style: geo_json_3053c56b1bc6482da49e13bda0390d85_styler,
        });

        function geo_json_3053c56b1bc6482da49e13bda0390d85_add (data) {
            geo_json_3053c56b1bc6482da49e13bda0390d85
                .addData(data)
                .addTo(choropleth_6e70be2684964caea46af31e62552202);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_3053c56b1bc6482da49e13bda0390d85_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_12272da642f047b588a5b4611e7790c3 = {};

    
    color_map_12272da642f047b588a5b4611e7790c3.color = d3.scale.threshold()
              .domain([1.0, 1.0901803607214429, 1.1803607214428857, 1.2705410821643286, 1.3607214428857715, 1.4509018036072145, 1.5410821643286572, 1.6312625250501003, 1.7214428857715431, 1.811623246492986, 1.9018036072144289, 1.9919839679358717, 2.0821643286573144, 2.1723446893787575, 2.2625250501002006, 2.352705410821643, 2.4428857715430863, 2.533066132264529, 2.623246492985972, 2.713426853707415, 2.8036072144288577, 2.8937875751503004, 2.9839679358717435, 3.0741482965931866, 3.164328657314629, 3.2545090180360723, 3.344689378757515, 3.434869739478958, 3.5250501002004007, 3.6152304609218437, 3.7054108216432864, 3.7955911823647295, 3.8857715430861726, 3.975951903807615, 4.066132264529058, 4.156312625250501, 4.246492985971944, 4.336673346693386, 4.42685370741483, 4.517034068136272, 4.6072144288577155, 4.697394789579159, 4.787575150300601, 4.877755511022045, 4.967935871743487, 5.05811623246493, 5.148296593186373, 5.238476953907815, 5.328657314629258, 5.4188376753507015, 5.509018036072145, 5.599198396793587, 5.68937875751503, 5.779559118236473, 5.869739478957916, 5.959919839679359, 6.050100200400801, 6.140280561122244, 6.2304609218436875, 6.320641282565131, 6.410821643286573, 6.501002004008016, 6.591182364729459, 6.681362725450902, 6.771543086172345, 6.861723446893787, 6.95190380761523, 7.0420841683366735, 7.132264529058117, 7.222444889779559, 7.312625250501002, 7.402805611222445, 7.492985971943888, 7.58316633266533, 7.673346693386773, 7.763527054108216, 7.8537074148296595, 7.943887775551103, 8.034068136272545, 8.124248496993989, 8.214428857715431, 8.304609218436873, 8.394789579158317, 8.48496993987976, 8.575150300601202, 8.665330661322646, 8.75551102204409, 8.84569138276553, 8.935871743486974, 9.026052104208416, 9.11623246492986, 9.206412825651302, 9.296593186372746, 9.386773547094188, 9.47695390781563, 9.567134268537075, 9.657314629258517, 9.74749498997996, 9.837675350701403, 9.927855711422845, 10.01803607214429, 10.108216432865731, 10.198396793587174, 10.288577154308618, 10.37875751503006, 10.468937875751504, 10.559118236472946, 10.649298597194388, 10.739478957915832, 10.829659318637274, 10.919839679358718, 11.01002004008016, 11.100200400801603, 11.190380761523047, 11.280561122244489, 11.370741482965931, 11.460921843687375, 11.551102204408817, 11.641282565130261, 11.731462925851703, 11.821643286573146, 11.91182364729459, 12.002004008016032, 12.092184368737476, 12.182364729458918, 12.27254509018036, 12.362725450901804, 12.452905811623246, 12.54308617234469, 12.633266533066132, 12.723446893787575, 12.813627254509019, 12.90380761523046, 12.993987975951903, 13.084168336673347, 13.17434869739479, 13.264529058116233, 13.354709418837675, 13.444889779559118, 13.535070140280562, 13.625250501002004, 13.715430861723448, 13.80561122244489, 13.895791583166332, 13.985971943887776, 14.076152304609218, 14.16633266533066, 14.256513026052104, 14.346693386773547, 14.43687374749499, 14.527054108216433, 14.617234468937875, 14.707414829659319, 14.797595190380761, 14.887775551102205, 14.977955911823647, 15.06813627254509, 15.158316633266534, 15.248496993987976, 15.338677354709418, 15.428857715430862, 15.519038076152304, 15.609218436873748, 15.69939879759519, 15.789579158316633, 15.879759519038076, 15.969939879759519, 16.060120240480963, 16.150300601202403, 16.240480961923847, 16.33066132264529, 16.42084168336673, 16.51102204408818, 16.60120240480962, 16.69138276553106, 16.781563126252507, 16.871743486973948, 16.961923847695388, 17.052104208416832, 17.142284569138276, 17.23246492985972, 17.322645290581164, 17.412825651302605, 17.50300601202405, 17.593186372745492, 17.683366733466933, 17.773547094188377, 17.86372745490982, 17.95390781563126, 18.044088176352705, 18.13426853707415, 18.22444889779559, 18.314629258517034, 18.404809619238478, 18.49498997995992, 18.585170340681362, 18.675350701402806, 18.76553106212425, 18.85571142284569, 18.945891783567134, 19.03607214428858, 19.12625250501002, 19.216432865731463, 19.306613226452907, 19.396793587174347, 19.48697394789579, 19.577154308617235, 19.66733466933868, 19.75751503006012, 19.847695390781563, 19.937875751503007, 20.028056112224448, 20.118236472945892, 20.208416833667336, 20.298597194388776, 20.38877755511022, 20.478957915831664, 20.569138276553105, 20.65931863727455, 20.749498997995993, 20.839679358717436, 20.929859719438877, 21.02004008016032, 21.110220440881765, 21.200400801603205, 21.29058116232465, 21.380761523046093, 21.470941883767534, 21.561122244488978, 21.65130260521042, 21.741482965931862, 21.831663326653306, 21.92184368737475, 22.012024048096194, 22.102204408817634, 22.19238476953908, 22.282565130260522, 22.372745490981963, 22.462925851703407, 22.55310621242485, 22.64328657314629, 22.733466933867735, 22.82364729458918, 22.91382765531062, 23.004008016032063, 23.094188376753507, 23.18436873747495, 23.274549098196392, 23.364729458917836, 23.45490981963928, 23.54509018036072, 23.635270541082164, 23.725450901803608, 23.81563126252505, 23.905811623246493, 23.995991983967937, 24.08617234468938, 24.17635270541082, 24.266533066132265, 24.35671342685371, 24.44689378757515, 24.537074148296593, 24.627254509018037, 24.717434869739478, 24.80761523046092, 24.897795591182366, 24.987975951903806, 25.07815631262525, 25.168336673346694, 25.258517034068138, 25.34869739478958, 25.438877755511022, 25.529058116232466, 25.619238476953907, 25.70941883767535, 25.799599198396795, 25.889779559118235, 25.97995991983968, 26.070140280561123, 26.160320641282564, 26.250501002004007, 26.34068136272545, 26.430861723446895, 26.521042084168336, 26.61122244488978, 26.701402805611224, 26.791583166332664, 26.881763527054108, 26.971943887775552, 27.062124248496993, 27.152304609218437, 27.24248496993988, 27.33266533066132, 27.422845691382765, 27.51302605210421, 27.603206412825653, 27.693386773547093, 27.783567134268537, 27.87374749498998, 27.96392785571142, 28.054108216432866, 28.14428857715431, 28.23446893787575, 28.324649298597194, 28.414829659318638, 28.50501002004008, 28.595190380761522, 28.685370741482966, 28.77555110220441, 28.86573146292585, 28.955911823647295, 29.04609218436874, 29.13627254509018, 29.226452905811623, 29.316633266533067, 29.406813627254508, 29.49699398797595, 29.587174348697395, 29.677354709418836, 29.76753507014028, 29.857715430861724, 29.947895791583168, 30.03807615230461, 30.128256513026052, 30.218436873747496, 30.308617234468937, 30.39879759519038, 30.488977955911825, 30.579158316633265, 30.66933867735471, 30.759519038076153, 30.849699398797597, 30.939879759519037, 31.03006012024048, 31.120240480961925, 31.210420841683366, 31.30060120240481, 31.390781563126254, 31.480961923847694, 31.571142284569138, 31.661322645290582, 31.751503006012022, 31.841683366733466, 31.93186372745491, 32.02204408817636, 32.11222444889779, 32.20240480961924, 32.292585170340686, 32.38276553106212, 32.47294589178357, 32.563126252505015, 32.65330661322645, 32.743486973947896, 32.83366733466934, 32.923847695390776, 33.014028056112224, 33.104208416833664, 33.19438877755511, 33.28456913827655, 33.37474949899799, 33.46492985971944, 33.55511022044088, 33.64529058116233, 33.73547094188377, 33.82565130260521, 33.91583166332666, 34.0060120240481, 34.09619238476954, 34.186372745490985, 34.276553106212425, 34.366733466933866, 34.45691382765531, 34.547094188376754, 34.637274549098194, 34.72745490981964, 34.81763527054108, 34.90781563126252, 34.99799599198397, 35.08817635270541, 35.17835671342685, 35.2685370741483, 35.35871743486974, 35.44889779559118, 35.53907815631263, 35.62925851703407, 35.71943887775551, 35.809619238476955, 35.899799599198396, 35.98997995991984, 36.08016032064128, 36.170340681362724, 36.26052104208417, 36.35070140280561, 36.44088176352705, 36.5310621242485, 36.62124248496994, 36.71142284569138, 36.80160320641283, 36.89178356713427, 36.98196392785571, 37.07214428857716, 37.1623246492986, 37.25250501002004, 37.342685370741485, 37.432865731462925, 37.523046092184366, 37.61322645290581, 37.703406813627254, 37.793587174348694, 37.88376753507014, 37.97394789579158, 38.06412825651302, 38.15430861723447, 38.24448897795591, 38.33466933867736, 38.4248496993988, 38.51503006012024, 38.605210420841686, 38.69539078156313, 38.78557114228457, 38.875751503006015, 38.965931863727455, 39.056112224448896, 39.14629258517034, 39.236472945891784, 39.326653306613224, 39.41683366733467, 39.50701402805611, 39.59719438877755, 39.687374749499, 39.77755511022044, 39.86773547094188, 39.95791583166333, 40.04809619238477, 40.13827655310621, 40.22845691382766, 40.3186372745491, 40.408817635270545, 40.498997995991985, 40.589178356713425, 40.67935871743487, 40.76953907815631, 40.859719438877754, 40.9498997995992, 41.04008016032064, 41.13026052104208, 41.22044088176353, 41.31062124248497, 41.40080160320641, 41.49098196392786, 41.5811623246493, 41.67134268537074, 41.76152304609219, 41.85170340681363, 41.94188376753507, 42.032064128256515, 42.122244488977955, 42.212424849699396, 42.30260521042084, 42.392785571142284, 42.482965931863724, 42.57314629258517, 42.66332665330661, 42.75350701402806, 42.8436873747495, 42.93386773547094, 43.02404809619239, 43.11422845691383, 43.20440881763527, 43.294589178356716, 43.38476953907816, 43.4749498997996, 43.565130260521045, 43.655310621242485, 43.745490981963925, 43.83567134268537, 43.92585170340681, 44.016032064128254, 44.1062124248497, 44.19639278557114, 44.28657314629258, 44.37675350701403, 44.46693386773547, 44.55711422845691, 44.64729458917836, 44.7374749498998, 44.82765531062124, 44.91783567134269, 45.00801603206413, 45.098196392785574, 45.188376753507015, 45.278557114228455, 45.3687374749499, 45.45891783567134, 45.549098196392784, 45.63927855711423, 45.72945891783567, 45.81963927855711, 45.90981963927856, 46.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_12272da642f047b588a5b4611e7790c3.x = d3.scale.linear()
              .domain([1.0, 46.0])
              .range([0, 400]);

    color_map_12272da642f047b588a5b4611e7790c3.legend = L.control({position: 'topright'});
    color_map_12272da642f047b588a5b4611e7790c3.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_12272da642f047b588a5b4611e7790c3.legend.addTo(map_cdec9486ed864dd0b8f49e2f01f79980);

    color_map_12272da642f047b588a5b4611e7790c3.xAxis = d3.svg.axis()
        .scale(color_map_12272da642f047b588a5b4611e7790c3.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 8.5, 16.0, 23.5, 31.0, 38.5, 46.0]);

    color_map_12272da642f047b588a5b4611e7790c3.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_12272da642f047b588a5b4611e7790c3.g = color_map_12272da642f047b588a5b4611e7790c3.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_12272da642f047b588a5b4611e7790c3.g.selectAll("rect")
        .data(color_map_12272da642f047b588a5b4611e7790c3.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_12272da642f047b588a5b4611e7790c3.x(color_map_12272da642f047b588a5b4611e7790c3.color.domain()[i - 1]) : color_map_12272da642f047b588a5b4611e7790c3.x.range()[0],
            x1: i < color_map_12272da642f047b588a5b4611e7790c3.color.domain().length ? color_map_12272da642f047b588a5b4611e7790c3.x(color_map_12272da642f047b588a5b4611e7790c3.color.domain()[i]) : color_map_12272da642f047b588a5b4611e7790c3.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_12272da642f047b588a5b4611e7790c3.g.call(color_map_12272da642f047b588a5b4611e7790c3.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('41_13_CLARICE DE FREITAS SILVA AVILA');

