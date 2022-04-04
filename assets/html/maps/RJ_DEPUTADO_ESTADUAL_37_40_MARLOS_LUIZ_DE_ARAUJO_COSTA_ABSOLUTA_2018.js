    
            var map_4add0017e6bc469d8dd94c710b9bcded = L.map(
                "map_4add0017e6bc469d8dd94c710b9bcded",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_e745ad9b340b461d9c7f4719dd134081 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_4add0017e6bc469d8dd94c710b9bcded);
        
    
            var choropleth_8d7708daccbc46dd82a18c518a9a2f3b = L.featureGroup(
                {}
            ).addTo(map_4add0017e6bc469d8dd94c710b9bcded);
        
    
        function geo_json_fca65dae0d804194a592e43735b489e4_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 482: case 443: case 428: case 325: case 417: case 335: case 474: case 452: case 353: case 345: case 393: case 383: case 426: case 340: case 400: case 396: case 423: case 415: case 408: case 431: case 404: case 371: case 373: case 401: case 394: case 368: case 386: case 348: case 354: case 349: case 342: case 336: case 329: case 358: case 367: case 460: case 475: case 360: case 357: case 355: case 350: case 459: case 463: case 481: case 479: case 366: case 391: case 465: case 451: case 388: case 458: case 480: case 341: case 405: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 455: case 427: case 378: case 389: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 449: case 447: case 436: case 446: case 444: case 381: case 352: case 419: case 379: case 433: case 445: case 430: case 471: case 511: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 370: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_fca65dae0d804194a592e43735b489e4_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_fca65dae0d804194a592e43735b489e4 = L.geoJson(null, {
                onEachFeature: geo_json_fca65dae0d804194a592e43735b489e4_onEachFeature,
            
                style: geo_json_fca65dae0d804194a592e43735b489e4_styler,
        });

        function geo_json_fca65dae0d804194a592e43735b489e4_add (data) {
            geo_json_fca65dae0d804194a592e43735b489e4
                .addData(data)
                .addTo(choropleth_8d7708daccbc46dd82a18c518a9a2f3b);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_fca65dae0d804194a592e43735b489e4_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_0f7c52581f4c44498724074e5254a5f8 = {};

    
    color_map_0f7c52581f4c44498724074e5254a5f8.color = d3.scale.threshold()
              .domain([1.0, 1.066132264529058, 1.1322645290581161, 1.1983967935871744, 1.2645290581162325, 1.3306613226452906, 1.3967935871743486, 1.4629258517034067, 1.529058116232465, 1.595190380761523, 1.6613226452905812, 1.7274549098196392, 1.7935871743486973, 1.8597194388777556, 1.9258517034068137, 1.9919839679358717, 2.05811623246493, 2.124248496993988, 2.190380761523046, 2.2565130260521045, 2.3226452905811623, 2.38877755511022, 2.4549098196392785, 2.5210420841683367, 2.5871743486973946, 2.653306613226453, 2.719438877755511, 2.785571142284569, 2.8517034068136273, 2.9178356713426856, 2.9839679358717435, 3.0501002004008018, 3.1162324649298596, 3.182364729458918, 3.2484969939879758, 3.314629258517034, 3.3807615230460923, 3.44689378757515, 3.5130260521042085, 3.5791583166332663, 3.6452905811623246, 3.711422845691383, 3.7775551102204408, 3.843687374749499, 3.909819639278557, 3.975951903807615, 4.0420841683366735, 4.108216432865731, 4.174348697394789, 4.240480961923847, 4.306613226452906, 4.3727454909819645, 4.438877755511022, 4.50501002004008, 4.571142284569138, 4.637274549098196, 4.703406813627255, 4.7695390781563125, 4.835671342685371, 4.901803607214429, 4.967935871743487, 5.034068136272545, 5.1002004008016035, 5.166332665330661, 5.232464929859719, 5.298597194388778, 5.364729458917836, 5.430861723446894, 5.4969939879759515, 5.56312625250501, 5.629258517034068, 5.695390781563126, 5.761523046092185, 5.8276553106212425, 5.8937875751503, 5.959919839679359, 6.026052104208417, 6.092184368737475, 6.158316633266533, 6.224448897795591, 6.290581162324649, 6.356713426853707, 6.422845691382766, 6.488977955911824, 6.5551102204408815, 6.62124248496994, 6.687374749498998, 6.753507014028056, 6.819639278557114, 6.885771543086173, 6.95190380761523, 7.018036072144288, 7.084168336673347, 7.150300601202405, 7.216432865731463, 7.282565130260521, 7.348697394789579, 7.414829659318637, 7.480961923847695, 7.547094188376754, 7.613226452905812, 7.679358717434869, 7.745490981963928, 7.811623246492986, 7.877755511022044, 7.943887775551103, 8.01002004008016, 8.076152304609218, 8.142284569138276, 8.208416833667336, 8.274549098196392, 8.340681362725451, 8.40681362725451, 8.472945891783567, 8.539078156312625, 8.605210420841683, 8.671342685370742, 8.737474949899799, 8.803607214428858, 8.869739478957916, 8.935871743486974, 9.002004008016032, 9.06813627254509, 9.134268537074147, 9.200400801603207, 9.266533066132265, 9.332665330661323, 9.39879759519038, 9.464929859719438, 9.531062124248496, 9.597194388777556, 9.663326653306614, 9.729458917835672, 9.79559118236473, 9.861723446893787, 9.927855711422845, 9.993987975951903, 10.060120240480963, 10.12625250501002, 10.192384769539078, 10.258517034068136, 10.324649298597194, 10.390781563126252, 10.45691382765531, 10.52304609218437, 10.589178356713427, 10.655310621242485, 10.721442885771543, 10.7875751503006, 10.853707414829659, 10.919839679358718, 10.985971943887776, 11.052104208416834, 11.118236472945892, 11.18436873747495, 11.250501002004007, 11.316633266533065, 11.382765531062125, 11.448897795591183, 11.51503006012024, 11.581162324649299, 11.647294589178356, 11.713426853707414, 11.779559118236472, 11.845691382765532, 11.91182364729459, 11.977955911823647, 12.044088176352705, 12.110220440881763, 12.176352705410821, 12.24248496993988, 12.308617234468938, 12.374749498997996, 12.440881763527054, 12.507014028056112, 12.57314629258517, 12.639278557114228, 12.705410821643287, 12.771543086172345, 12.837675350701403, 12.90380761523046, 12.969939879759519, 13.036072144288577, 13.102204408817636, 13.168336673346694, 13.234468937875752, 13.30060120240481, 13.366733466933868, 13.432865731462925, 13.498997995991983, 13.565130260521043, 13.6312625250501, 13.697394789579159, 13.763527054108216, 13.829659318637274, 13.895791583166332, 13.96192384769539, 14.02805611222445, 14.094188376753507, 14.160320641282565, 14.226452905811623, 14.292585170340681, 14.358717434869739, 14.424849699398798, 14.490981963927856, 14.557114228456914, 14.623246492985972, 14.68937875751503, 14.755511022044088, 14.821643286573146, 14.887775551102205, 14.953907815631263, 15.02004008016032, 15.086172344689379, 15.152304609218437, 15.218436873747494, 15.284569138276552, 15.350701402805612, 15.41683366733467, 15.482965931863728, 15.549098196392785, 15.615230460921843, 15.681362725450901, 15.74749498997996, 15.813627254509019, 15.879759519038076, 15.945891783567134, 16.012024048096194, 16.07815631262525, 16.144288577154306, 16.210420841683366, 16.276553106212425, 16.342685370741485, 16.40881763527054, 16.474949899799597, 16.541082164328657, 16.607214428857716, 16.673346693386776, 16.739478957915832, 16.805611222444888, 16.871743486973948, 16.937875751503007, 17.004008016032063, 17.070140280561123, 17.13627254509018, 17.20240480961924, 17.268537074148295, 17.334669338677354, 17.400801603206414, 17.46693386773547, 17.53306613226453, 17.599198396793586, 17.665330661322646, 17.731462925851705, 17.79759519038076, 17.86372745490982, 17.929859719438877, 17.995991983967937, 18.062124248496993, 18.128256513026052, 18.194388777555112, 18.260521042084168, 18.326653306613228, 18.392785571142284, 18.458917835671343, 18.5250501002004, 18.59118236472946, 18.65731462925852, 18.723446893787575, 18.789579158316634, 18.85571142284569, 18.92184368737475, 18.987975951903806, 19.054108216432866, 19.120240480961925, 19.18637274549098, 19.25250501002004, 19.318637274549097, 19.384769539078157, 19.450901803607213, 19.517034068136272, 19.583166332665332, 19.649298597194388, 19.715430861723448, 19.781563126252504, 19.847695390781563, 19.91382765531062, 19.97995991983968, 20.04609218436874, 20.112224448897795, 20.178356713426854, 20.24448897795591, 20.31062124248497, 20.37675350701403, 20.442885771543086, 20.509018036072145, 20.5751503006012, 20.64128256513026, 20.707414829659317, 20.773547094188377, 20.839679358717436, 20.905811623246493, 20.971943887775552, 21.03807615230461, 21.104208416833668, 21.170340681362724, 21.236472945891784, 21.302605210420843, 21.3687374749499, 21.43486973947896, 21.501002004008015, 21.567134268537075, 21.63326653306613, 21.69939879759519, 21.76553106212425, 21.831663326653306, 21.897795591182366, 21.96392785571142, 22.03006012024048, 22.096192384769537, 22.162324649298597, 22.228456913827657, 22.294589178356713, 22.360721442885772, 22.42685370741483, 22.492985971943888, 22.559118236472944, 22.625250501002004, 22.691382765531063, 22.75751503006012, 22.82364729458918, 22.889779559118235, 22.955911823647295, 23.022044088176354, 23.08817635270541, 23.15430861723447, 23.220440881763526, 23.286573146292586, 23.352705410821642, 23.4188376753507, 23.48496993987976, 23.551102204408817, 23.617234468937877, 23.683366733466933, 23.749498997995993, 23.81563126252505, 23.881763527054108, 23.947895791583168, 24.014028056112224, 24.080160320641284, 24.14629258517034, 24.2124248496994, 24.278557114228455, 24.344689378757515, 24.410821643286575, 24.47695390781563, 24.54308617234469, 24.609218436873746, 24.675350701402806, 24.741482965931862, 24.80761523046092, 24.87374749498998, 24.939879759519037, 25.006012024048097, 25.072144288577153, 25.138276553106213, 25.204408817635272, 25.27054108216433, 25.336673346693388, 25.402805611222444, 25.468937875751504, 25.53507014028056, 25.60120240480962, 25.66733466933868, 25.733466933867735, 25.799599198396795, 25.86573146292585, 25.93186372745491, 25.997995991983966, 26.064128256513026, 26.130260521042086, 26.196392785571142, 26.2625250501002, 26.328657314629258, 26.394789579158317, 26.460921843687373, 26.527054108216433, 26.593186372745492, 26.65931863727455, 26.725450901803608, 26.791583166332664, 26.857715430861724, 26.92384769539078, 26.98997995991984, 27.0561122244489, 27.122244488977955, 27.188376753507015, 27.25450901803607, 27.32064128256513, 27.386773547094187, 27.452905811623246, 27.519038076152306, 27.585170340681362, 27.65130260521042, 27.717434869739478, 27.783567134268537, 27.849699398797597, 27.915831663326653, 27.981963927855713, 28.04809619238477, 28.11422845691383, 28.180360721442884, 28.246492985971944, 28.312625250501004, 28.37875751503006, 28.44488977955912, 28.511022044088175, 28.577154308617235, 28.64328657314629, 28.70941883767535, 28.77555110220441, 28.841683366733466, 28.907815631262526, 28.973947895791582, 29.04008016032064, 29.106212424849698, 29.172344689378757, 29.238476953907817, 29.304609218436873, 29.370741482965933, 29.43687374749499, 29.50300601202405, 29.569138276553105, 29.635270541082164, 29.701402805611224, 29.76753507014028, 29.83366733466934, 29.899799599198396, 29.965931863727455, 30.03206412825651, 30.09819639278557, 30.16432865731463, 30.230460921843687, 30.296593186372746, 30.362725450901802, 30.428857715430862, 30.49498997995992, 30.561122244488978, 30.627254509018037, 30.693386773547093, 30.759519038076153, 30.82565130260521, 30.89178356713427, 30.95791583166333, 31.024048096192384, 31.090180360721444, 31.1563126252505, 31.22244488977956, 31.288577154308616, 31.354709418837675, 31.420841683366735, 31.48697394789579, 31.55310621242485, 31.619238476953907, 31.685370741482966, 31.751503006012022, 31.817635270541082, 31.88376753507014, 31.949899799599198, 32.016032064128254, 32.08216432865731, 32.14829659318637, 32.21442885771543, 32.28056112224449, 32.34669338677355, 32.412825651302605, 32.478957915831664, 32.54509018036072, 32.611222444889776, 32.677354709418836, 32.743486973947896, 32.809619238476955, 32.875751503006015, 32.941883767535074, 33.00801603206413, 33.07414829659319, 33.140280561122246, 33.206412825651306, 33.27254509018036, 33.33867735470942, 33.40480961923848, 33.47094188376754, 33.53707414829659, 33.60320641282565, 33.66933867735471, 33.73547094188377, 33.80160320641283, 33.86773547094188, 33.93386773547094, 34.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_0f7c52581f4c44498724074e5254a5f8.x = d3.scale.linear()
              .domain([1.0, 34.0])
              .range([0, 400]);

    color_map_0f7c52581f4c44498724074e5254a5f8.legend = L.control({position: 'topright'});
    color_map_0f7c52581f4c44498724074e5254a5f8.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_0f7c52581f4c44498724074e5254a5f8.legend.addTo(map_4add0017e6bc469d8dd94c710b9bcded);

    color_map_0f7c52581f4c44498724074e5254a5f8.xAxis = d3.svg.axis()
        .scale(color_map_0f7c52581f4c44498724074e5254a5f8.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 6.5, 12.0, 17.5, 23.0, 28.5, 34.0]);

    color_map_0f7c52581f4c44498724074e5254a5f8.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_0f7c52581f4c44498724074e5254a5f8.g = color_map_0f7c52581f4c44498724074e5254a5f8.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_0f7c52581f4c44498724074e5254a5f8.g.selectAll("rect")
        .data(color_map_0f7c52581f4c44498724074e5254a5f8.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_0f7c52581f4c44498724074e5254a5f8.x(color_map_0f7c52581f4c44498724074e5254a5f8.color.domain()[i - 1]) : color_map_0f7c52581f4c44498724074e5254a5f8.x.range()[0],
            x1: i < color_map_0f7c52581f4c44498724074e5254a5f8.color.domain().length ? color_map_0f7c52581f4c44498724074e5254a5f8.x(color_map_0f7c52581f4c44498724074e5254a5f8.color.domain()[i]) : color_map_0f7c52581f4c44498724074e5254a5f8.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_0f7c52581f4c44498724074e5254a5f8.g.call(color_map_0f7c52581f4c44498724074e5254a5f8.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('37_40_MARLOS LUIZ DE ARAUJO COSTA');
