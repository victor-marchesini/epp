    
            var map_4c659c950eaf4498b3fde88d421ab8b3 = L.map(
                "map_4c659c950eaf4498b3fde88d421ab8b3",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_7dfec9b258e24b1d94e93738937d7b37 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_4c659c950eaf4498b3fde88d421ab8b3);
        
    
            var choropleth_e91519bf735d4c85b640187009301cdf = L.featureGroup(
                {}
            ).addTo(map_4c659c950eaf4498b3fde88d421ab8b3);
        
    
        function geo_json_18431e4bb29a4e4f81304f3b8d844e66_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 421: case 443: case 434: case 428: case 325: case 417: case 478: case 452: case 380: case 353: case 345: case 393: case 383: case 340: case 333: case 382: case 423: case 431: case 404: case 385: case 394: case 362: case 348: case 354: case 349: case 342: case 336: case 358: case 328: case 367: case 460: case 475: case 350: case 481: case 483: case 479: case 366: case 391: case 480: case 405: case 512: case 485: case 407: case 376: case 365: case 413: case 890: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 471: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_18431e4bb29a4e4f81304f3b8d844e66_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_18431e4bb29a4e4f81304f3b8d844e66 = L.geoJson(null, {
                onEachFeature: geo_json_18431e4bb29a4e4f81304f3b8d844e66_onEachFeature,
            
                style: geo_json_18431e4bb29a4e4f81304f3b8d844e66_styler,
        });

        function geo_json_18431e4bb29a4e4f81304f3b8d844e66_add (data) {
            geo_json_18431e4bb29a4e4f81304f3b8d844e66
                .addData(data)
                .addTo(choropleth_e91519bf735d4c85b640187009301cdf);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_18431e4bb29a4e4f81304f3b8d844e66_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_b2e2c0a0c7e940918e0ec9a42e49c772 = {};

    
    color_map_b2e2c0a0c7e940918e0ec9a42e49c772.color = d3.scale.threshold()
              .domain([0.0, 0.15430861723446893, 0.30861723446893785, 0.46292585170340683, 0.6172344689378757, 0.7715430861723447, 0.9258517034068137, 1.0801603206412826, 1.2344689378757514, 1.3887775551102204, 1.5430861723446894, 1.6973947895791583, 1.8517034068136273, 2.006012024048096, 2.1603206412825653, 2.314629258517034, 2.468937875751503, 2.623246492985972, 2.7775551102204408, 2.93186372745491, 3.0861723446893787, 3.2404809619238475, 3.3947895791583167, 3.5490981963927855, 3.7034068136272547, 3.8577154308617234, 4.012024048096192, 4.166332665330661, 4.320641282565131, 4.474949899799599, 4.629258517034068, 4.783567134268537, 4.937875751503006, 5.092184368737475, 5.246492985971944, 5.400801603206413, 5.5551102204408815, 5.709418837675351, 5.86372745490982, 6.018036072144288, 6.1723446893787575, 6.326653306613227, 6.480961923847695, 6.635270541082164, 6.789579158316633, 6.943887775551103, 7.098196392785571, 7.25250501002004, 7.406813627254509, 7.561122244488978, 7.715430861723447, 7.869739478957916, 8.024048096192384, 8.178356713426854, 8.332665330661323, 8.486973947895791, 8.641282565130261, 8.79559118236473, 8.949899799599198, 9.104208416833668, 9.258517034068136, 9.412825651302605, 9.567134268537075, 9.721442885771543, 9.875751503006011, 10.030060120240481, 10.18436873747495, 10.338677354709418, 10.492985971943888, 10.647294589178356, 10.801603206412826, 10.955911823647295, 11.110220440881763, 11.264529058116233, 11.418837675350701, 11.57314629258517, 11.72745490981964, 11.881763527054108, 12.036072144288577, 12.190380761523047, 12.344689378757515, 12.498997995991983, 12.653306613226453, 12.807615230460922, 12.96192384769539, 13.11623246492986, 13.270541082164328, 13.424849699398798, 13.579158316633267, 13.733466933867735, 13.887775551102205, 14.042084168336673, 14.196392785571142, 14.350701402805612, 14.50501002004008, 14.659318637274549, 14.813627254509019, 14.967935871743487, 15.122244488977955, 15.276553106212425, 15.430861723446894, 15.585170340681362, 15.739478957915832, 15.8937875751503, 16.04809619238477, 16.20240480961924, 16.35671342685371, 16.511022044088175, 16.665330661322646, 16.819639278557116, 16.973947895791582, 17.128256513026052, 17.282565130260522, 17.43687374749499, 17.59118236472946, 17.74549098196393, 17.899799599198396, 18.054108216432866, 18.208416833667336, 18.362725450901802, 18.517034068136272, 18.671342685370742, 18.82565130260521, 18.97995991983968, 19.13426853707415, 19.288577154308616, 19.442885771543086, 19.597194388777556, 19.751503006012022, 19.905811623246493, 20.060120240480963, 20.21442885771543, 20.3687374749499, 20.52304609218437, 20.677354709418836, 20.831663326653306, 20.985971943887776, 21.140280561122246, 21.294589178356713, 21.448897795591183, 21.603206412825653, 21.75751503006012, 21.91182364729459, 22.06613226452906, 22.220440881763526, 22.374749498997996, 22.529058116232466, 22.683366733466933, 22.837675350701403, 22.991983967935873, 23.14629258517034, 23.30060120240481, 23.45490981963928, 23.609218436873746, 23.763527054108216, 23.917835671342687, 24.072144288577153, 24.226452905811623, 24.380761523046093, 24.53507014028056, 24.68937875751503, 24.8436873747495, 24.997995991983966, 25.152304609218437, 25.306613226452907, 25.460921843687373, 25.615230460921843, 25.769539078156313, 25.92384769539078, 26.07815631262525, 26.23246492985972, 26.386773547094187, 26.541082164328657, 26.695390781563127, 26.849699398797597, 27.004008016032063, 27.158316633266534, 27.312625250501004, 27.46693386773547, 27.62124248496994, 27.77555110220441, 27.929859719438877, 28.084168336673347, 28.238476953907817, 28.392785571142284, 28.547094188376754, 28.701402805611224, 28.85571142284569, 29.01002004008016, 29.16432865731463, 29.318637274549097, 29.472945891783567, 29.627254509018037, 29.781563126252504, 29.935871743486974, 30.090180360721444, 30.24448897795591, 30.39879759519038, 30.55310621242485, 30.707414829659317, 30.861723446893787, 31.016032064128257, 31.170340681362724, 31.324649298597194, 31.478957915831664, 31.63326653306613, 31.7875751503006, 31.94188376753507, 32.09619238476954, 32.25050100200401, 32.40480961923848, 32.55911823647295, 32.71342685370742, 32.86773547094188, 33.02204408817635, 33.17635270541082, 33.33066132264529, 33.48496993987976, 33.63927855711423, 33.793587174348694, 33.947895791583164, 34.102204408817634, 34.256513026052104, 34.410821643286575, 34.565130260521045, 34.71943887775551, 34.87374749498998, 35.02805611222445, 35.18236472945892, 35.33667334669339, 35.49098196392786, 35.64529058116233, 35.79959919839679, 35.95390781563126, 36.10821643286573, 36.2625250501002, 36.41683366733467, 36.57114228456914, 36.725450901803605, 36.879759519038075, 37.034068136272545, 37.188376753507015, 37.342685370741485, 37.496993987975955, 37.65130260521042, 37.80561122244489, 37.95991983967936, 38.11422845691383, 38.2685370741483, 38.42284569138277, 38.57715430861723, 38.7314629258517, 38.88577154308617, 39.04008016032064, 39.19438877755511, 39.34869739478958, 39.503006012024045, 39.657314629258515, 39.811623246492985, 39.965931863727455, 40.120240480961925, 40.274549098196395, 40.42885771543086, 40.58316633266533, 40.7374749498998, 40.89178356713427, 41.04609218436874, 41.20040080160321, 41.35470941883767, 41.50901803607214, 41.66332665330661, 41.81763527054108, 41.97194388777555, 42.12625250501002, 42.28056112224449, 42.434869739478955, 42.589178356713425, 42.743486973947896, 42.897795591182366, 43.052104208416836, 43.206412825651306, 43.36072144288577, 43.51503006012024, 43.66933867735471, 43.82364729458918, 43.97795591182365, 44.13226452905812, 44.28657314629258, 44.44088176352705, 44.59519038076152, 44.74949899799599, 44.90380761523046, 45.05811623246493, 45.212424849699396, 45.366733466933866, 45.521042084168336, 45.675350701402806, 45.829659318637276, 45.983967935871746, 46.13827655310621, 46.29258517034068, 46.44689378757515, 46.60120240480962, 46.75551102204409, 46.90981963927856, 47.06412825651302, 47.21843687374749, 47.37274549098196, 47.52705410821643, 47.6813627254509, 47.83567134268537, 47.98997995991984, 48.144288577154306, 48.298597194388776, 48.452905811623246, 48.607214428857716, 48.76152304609219, 48.91583166332666, 49.07014028056112, 49.22444889779559, 49.37875751503006, 49.53306613226453, 49.687374749499, 49.84168336673347, 49.99599198396793, 50.1503006012024, 50.30460921843687, 50.45891783567134, 50.61322645290581, 50.76753507014028, 50.921843687374746, 51.07615230460922, 51.23046092184369, 51.38476953907816, 51.53907815631263, 51.6933867735471, 51.84769539078156, 52.00200400801603, 52.1563126252505, 52.31062124248497, 52.46492985971944, 52.61923847695391, 52.77354709418837, 52.92785571142284, 53.08216432865731, 53.236472945891784, 53.390781563126254, 53.545090180360724, 53.699398797595194, 53.85370741482966, 54.00801603206413, 54.1623246492986, 54.31663326653307, 54.47094188376754, 54.62525050100201, 54.77955911823647, 54.93386773547094, 55.08817635270541, 55.24248496993988, 55.39679358717435, 55.55110220440882, 55.705410821643284, 55.859719438877754, 56.014028056112224, 56.168336673346694, 56.322645290581164, 56.476953907815634, 56.6312625250501, 56.78557114228457, 56.93987975951904, 57.09418837675351, 57.24849699398798, 57.40280561122245, 57.55711422845691, 57.71142284569138, 57.86573146292585, 58.02004008016032, 58.17434869739479, 58.32865731462926, 58.482965931863724, 58.637274549098194, 58.791583166332664, 58.945891783567134, 59.100200400801604, 59.254509018036075, 59.408817635270545, 59.56312625250501, 59.71743486973948, 59.87174348697395, 60.02605210420842, 60.18036072144289, 60.33466933867736, 60.48897795591182, 60.64328657314629, 60.79759519038076, 60.95190380761523, 61.1062124248497, 61.26052104208417, 61.414829659318634, 61.569138276553105, 61.723446893787575, 61.877755511022045, 62.032064128256515, 62.186372745490985, 62.34068136272545, 62.49498997995992, 62.64929859719439, 62.80360721442886, 62.95791583166333, 63.1122244488978, 63.26653306613226, 63.42084168336673, 63.5751503006012, 63.72945891783567, 63.88376753507014, 64.03807615230461, 64.19238476953907, 64.34669338677355, 64.50100200400801, 64.65531062124248, 64.80961923847696, 64.96392785571142, 65.1182364729459, 65.27254509018036, 65.42685370741484, 65.5811623246493, 65.73547094188376, 65.88977955911824, 66.0440881763527, 66.19839679358718, 66.35270541082164, 66.50701402805612, 66.66132264529058, 66.81563126252505, 66.96993987975952, 67.12424849699399, 67.27855711422846, 67.43286573146293, 67.58717434869739, 67.74148296593187, 67.89579158316633, 68.0501002004008, 68.20440881763527, 68.35871743486975, 68.51302605210421, 68.66733466933867, 68.82164328657315, 68.97595190380761, 69.13026052104209, 69.28456913827655, 69.43887775551102, 69.59318637274549, 69.74749498997996, 69.90180360721443, 70.0561122244489, 70.21042084168337, 70.36472945891784, 70.5190380761523, 70.67334669338678, 70.82765531062124, 70.98196392785572, 71.13627254509018, 71.29058116232466, 71.44488977955912, 71.59919839679358, 71.75350701402806, 71.90781563126252, 72.062124248497, 72.21643286573146, 72.37074148296593, 72.5250501002004, 72.67935871743487, 72.83366733466934, 72.9879759519038, 73.14228456913828, 73.29659318637275, 73.45090180360721, 73.60521042084169, 73.75951903807615, 73.91382765531063, 74.06813627254509, 74.22244488977955, 74.37675350701403, 74.53106212424849, 74.68537074148297, 74.83967935871743, 74.99398797595191, 75.14829659318637, 75.30260521042084, 75.45691382765531, 75.61122244488978, 75.76553106212425, 75.91983967935872, 76.07414829659318, 76.22845691382766, 76.38276553106212, 76.5370741482966, 76.69138276553106, 76.84569138276554, 77.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_b2e2c0a0c7e940918e0ec9a42e49c772.x = d3.scale.linear()
              .domain([0.0, 77.0])
              .range([0, 400]);

    color_map_b2e2c0a0c7e940918e0ec9a42e49c772.legend = L.control({position: 'topright'});
    color_map_b2e2c0a0c7e940918e0ec9a42e49c772.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_b2e2c0a0c7e940918e0ec9a42e49c772.legend.addTo(map_4c659c950eaf4498b3fde88d421ab8b3);

    color_map_b2e2c0a0c7e940918e0ec9a42e49c772.xAxis = d3.svg.axis()
        .scale(color_map_b2e2c0a0c7e940918e0ec9a42e49c772.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 12.833333333333334, 25.666666666666668, 38.5, 51.333333333333336, 64.16666666666667, 77.0]);

    color_map_b2e2c0a0c7e940918e0ec9a42e49c772.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_b2e2c0a0c7e940918e0ec9a42e49c772.g = color_map_b2e2c0a0c7e940918e0ec9a42e49c772.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_b2e2c0a0c7e940918e0ec9a42e49c772.g.selectAll("rect")
        .data(color_map_b2e2c0a0c7e940918e0ec9a42e49c772.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_b2e2c0a0c7e940918e0ec9a42e49c772.x(color_map_b2e2c0a0c7e940918e0ec9a42e49c772.color.domain()[i - 1]) : color_map_b2e2c0a0c7e940918e0ec9a42e49c772.x.range()[0],
            x1: i < color_map_b2e2c0a0c7e940918e0ec9a42e49c772.color.domain().length ? color_map_b2e2c0a0c7e940918e0ec9a42e49c772.x(color_map_b2e2c0a0c7e940918e0ec9a42e49c772.color.domain()[i]) : color_map_b2e2c0a0c7e940918e0ec9a42e49c772.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_b2e2c0a0c7e940918e0ec9a42e49c772.g.call(color_map_b2e2c0a0c7e940918e0ec9a42e49c772.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('22_50_WANDERSON LUIZ CUNHA NOGUEIRA');
