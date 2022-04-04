    
            var map_7007f9e607c34f628f60a09ef00368d2 = L.map(
                "map_7007f9e607c34f628f60a09ef00368d2",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_9ae65029736a472788fb98dc348991d3 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_7007f9e607c34f628f60a09ef00368d2);
        
    
            var choropleth_f4f43c59ecbc4290810bd9ff7b52e439 = L.featureGroup(
                {}
            ).addTo(map_7007f9e607c34f628f60a09ef00368d2);
        
    
        function geo_json_bfaa723dd4dc4aa29092845cb07239d4_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 421: case 443: case 434: case 428: case 410: case 325: case 438: case 417: case 456: case 452: case 353: case 345: case 393: case 381: case 351: case 383: case 426: case 400: case 382: case 423: case 431: case 404: case 361: case 401: case 394: case 348: case 354: case 349: case 342: case 334: case 326: case 336: case 329: case 331: case 358: case 328: case 367: case 460: case 475: case 357: case 355: case 459: case 481: case 429: case 483: case 399: case 479: case 469: case 366: case 391: case 370: case 480: case 341: case 384: case 405: case 512: case 476: case 485: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 448: case 462: case 466: case 455: case 437: case 411: case 454: case 433: case 389: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 436: case 430: case 471: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_bfaa723dd4dc4aa29092845cb07239d4_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_bfaa723dd4dc4aa29092845cb07239d4 = L.geoJson(null, {
                onEachFeature: geo_json_bfaa723dd4dc4aa29092845cb07239d4_onEachFeature,
            
                style: geo_json_bfaa723dd4dc4aa29092845cb07239d4_styler,
        });

        function geo_json_bfaa723dd4dc4aa29092845cb07239d4_add (data) {
            geo_json_bfaa723dd4dc4aa29092845cb07239d4
                .addData(data)
                .addTo(choropleth_f4f43c59ecbc4290810bd9ff7b52e439);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_bfaa723dd4dc4aa29092845cb07239d4_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_b4272ecf1c4f4d97be78610e13970aaa = {};

    
    color_map_b4272ecf1c4f4d97be78610e13970aaa.color = d3.scale.threshold()
              .domain([1.0, 1.0501002004008015, 1.1002004008016033, 1.1503006012024048, 1.2004008016032064, 1.250501002004008, 1.3006012024048097, 1.3507014028056112, 1.4008016032064128, 1.4509018036072145, 1.5010020040080159, 1.5511022044088176, 1.6012024048096194, 1.6513026052104207, 1.7014028056112225, 1.751503006012024, 1.8016032064128256, 1.8517034068136273, 1.9018036072144289, 1.9519038076152304, 2.0020040080160317, 2.052104208416834, 2.1022044088176353, 2.1523046092184366, 2.202404809619239, 2.25250501002004, 2.3026052104208414, 2.352705410821643, 2.402805611222445, 2.4529058116232463, 2.503006012024048, 2.55310621242485, 2.603206412825651, 2.653306613226453, 2.7034068136272547, 2.753507014028056, 2.8036072144288577, 2.8537074148296595, 2.903807615230461, 2.9539078156312626, 3.004008016032064, 3.0541082164328657, 3.1042084168336674, 3.1543086172344688, 3.2044088176352705, 3.2545090180360723, 3.3046092184368736, 3.3547094188376754, 3.404809619238477, 3.4549098196392785, 3.50501002004008, 3.555110220440882, 3.6052104208416833, 3.655310621242485, 3.7054108216432864, 3.755511022044088, 3.80561122244489, 3.8557114228456912, 3.905811623246493, 3.9559118236472948, 4.006012024048096, 4.056112224448897, 4.1062124248497, 4.156312625250501, 4.206412825651302, 4.2565130260521045, 4.306613226452906, 4.356713426853707, 4.406813627254509, 4.456913827655311, 4.507014028056112, 4.557114228456914, 4.6072144288577155, 4.657314629258517, 4.707414829659319, 4.75751503006012, 4.807615230460922, 4.857715430861724, 4.907815631262525, 4.9579158316633265, 5.008016032064128, 5.05811623246493, 5.108216432865731, 5.158316633266533, 5.208416833667335, 5.258517034068136, 5.3086172344689375, 5.35871743486974, 5.408817635270541, 5.458917835671342, 5.509018036072145, 5.559118236472946, 5.609218436873747, 5.659318637274549, 5.709418837675351, 5.759519038076152, 5.809619238476954, 5.859719438877756, 5.909819639278557, 5.959919839679359, 6.01002004008016, 6.060120240480962, 6.110220440881764, 6.160320641282565, 6.210420841683367, 6.260521042084168, 6.31062124248497, 6.3607214428857715, 6.410821643286573, 6.460921843687375, 6.511022044088176, 6.561122244488978, 6.61122244488978, 6.661322645290581, 6.7114228456913825, 6.761523046092185, 6.811623246492986, 6.861723446893787, 6.9118236472945895, 6.961923847695391, 7.012024048096192, 7.062124248496994, 7.112224448897796, 7.162324649298597, 7.212424849699399, 7.2625250501002006, 7.312625250501002, 7.362725450901803, 7.412825651302605, 7.462925851703407, 7.513026052104208, 7.56312625250501, 7.613226452905812, 7.663326653306613, 7.713426853707415, 7.763527054108216, 7.813627254509018, 7.86372745490982, 7.913827655310621, 7.963927855711423, 8.014028056112224, 8.064128256513026, 8.114228456913828, 8.16432865731463, 8.214428857715431, 8.264529058116231, 8.314629258517034, 8.364729458917836, 8.414829659318638, 8.464929859719438, 8.51503006012024, 8.565130260521041, 8.615230460921843, 8.665330661322646, 8.715430861723448, 8.765531062124248, 8.81563126252505, 8.86573146292585, 8.915831663326653, 8.965931863727455, 9.016032064128256, 9.066132264529058, 9.11623246492986, 9.16633266533066, 9.216432865731463, 9.266533066132265, 9.316633266533065, 9.366733466933868, 9.41683366733467, 9.46693386773547, 9.517034068136272, 9.567134268537075, 9.617234468937875, 9.667334669338677, 9.71743486973948, 9.76753507014028, 9.817635270541082, 9.867735470941884, 9.917835671342685, 9.967935871743487, 10.01803607214429, 10.06813627254509, 10.118236472945892, 10.168336673346694, 10.218436873747494, 10.268537074148297, 10.318637274549099, 10.3687374749499, 10.418837675350701, 10.468937875751504, 10.519038076152304, 10.569138276553106, 10.619238476953909, 10.669338677354709, 10.719438877755511, 10.769539078156313, 10.819639278557114, 10.869739478957916, 10.919839679358718, 10.969939879759519, 11.02004008016032, 11.070140280561123, 11.120240480961924, 11.170340681362726, 11.220440881763528, 11.270541082164328, 11.32064128256513, 11.370741482965931, 11.420841683366733, 11.470941883767535, 11.521042084168336, 11.571142284569138, 11.62124248496994, 11.67134268537074, 11.721442885771543, 11.771543086172345, 11.821643286573146, 11.871743486973948, 11.92184368737475, 11.97194388777555, 12.022044088176353, 12.072144288577155, 12.122244488977955, 12.172344689378757, 12.22244488977956, 12.27254509018036, 12.322645290581162, 12.372745490981965, 12.422845691382765, 12.472945891783567, 12.52304609218437, 12.57314629258517, 12.623246492985972, 12.673346693386774, 12.723446893787575, 12.773547094188377, 12.823647294589179, 12.87374749498998, 12.923847695390782, 12.973947895791584, 13.024048096192384, 13.074148296593187, 13.124248496993989, 13.17434869739479, 13.224448897795591, 13.274549098196394, 13.324649298597194, 13.374749498997996, 13.424849699398798, 13.474949899799599, 13.525050100200401, 13.575150300601202, 13.625250501002004, 13.675350701402806, 13.725450901803606, 13.775551102204409, 13.82565130260521, 13.875751503006011, 13.925851703406813, 13.975951903807616, 14.026052104208416, 14.076152304609218, 14.12625250501002, 14.176352705410821, 14.226452905811623, 14.276553106212425, 14.326653306613226, 14.376753507014028, 14.42685370741483, 14.47695390781563, 14.527054108216433, 14.577154308617235, 14.627254509018035, 14.677354709418838, 14.72745490981964, 14.77755511022044, 14.827655310621243, 14.877755511022045, 14.927855711422845, 14.977955911823647, 15.02805611222445, 15.07815631262525, 15.128256513026052, 15.178356713426854, 15.228456913827655, 15.278557114228457, 15.32865731462926, 15.37875751503006, 15.428857715430862, 15.478957915831664, 15.529058116232465, 15.579158316633267, 15.629258517034069, 15.67935871743487, 15.729458917835672, 15.779559118236472, 15.829659318637274, 15.879759519038076, 15.929859719438877, 15.97995991983968, 16.03006012024048, 16.080160320641284, 16.130260521042082, 16.180360721442888, 16.230460921843687, 16.28056112224449, 16.33066132264529, 16.38076152304609, 16.430861723446895, 16.480961923847694, 16.531062124248496, 16.5811623246493, 16.6312625250501, 16.681362725450903, 16.7314629258517, 16.781563126252507, 16.831663326653306, 16.881763527054108, 16.93186372745491, 16.98196392785571, 17.03206412825651, 17.082164328657313, 17.132264529058116, 17.182364729458918, 17.23246492985972, 17.282565130260522, 17.33266533066132, 17.382765531062123, 17.432865731462925, 17.482965931863728, 17.53306613226453, 17.583166332665332, 17.63326653306613, 17.683366733466933, 17.733466933867735, 17.783567134268537, 17.83366733466934, 17.88376753507014, 17.93386773547094, 17.983967935871743, 18.034068136272545, 18.084168336673347, 18.13426853707415, 18.18436873747495, 18.23446893787575, 18.284569138276552, 18.334669338677354, 18.384769539078157, 18.43486973947896, 18.48496993987976, 18.53507014028056, 18.585170340681362, 18.635270541082164, 18.685370741482966, 18.73547094188377, 18.78557114228457, 18.83567134268537, 18.88577154308617, 18.935871743486974, 18.985971943887776, 19.03607214428858, 19.08617234468938, 19.13627254509018, 19.18637274549098, 19.236472945891784, 19.286573146292586, 19.336673346693388, 19.386773547094187, 19.43687374749499, 19.48697394789579, 19.537074148296593, 19.587174348697395, 19.637274549098198, 19.687374749498996, 19.7374749498998, 19.7875751503006, 19.837675350701403, 19.887775551102205, 19.937875751503007, 19.987975951903806, 20.03807615230461, 20.08817635270541, 20.138276553106213, 20.188376753507015, 20.238476953907817, 20.288577154308616, 20.338677354709418, 20.38877755511022, 20.438877755511022, 20.488977955911825, 20.539078156312627, 20.589178356713425, 20.639278557114228, 20.68937875751503, 20.739478957915832, 20.789579158316634, 20.839679358717436, 20.889779559118235, 20.939879759519037, 20.98997995991984, 21.04008016032064, 21.090180360721444, 21.140280561122246, 21.190380761523045, 21.240480961923847, 21.29058116232465, 21.34068136272545, 21.390781563126254, 21.440881763527056, 21.490981963927855, 21.541082164328657, 21.59118236472946, 21.64128256513026, 21.691382765531063, 21.741482965931862, 21.791583166332664, 21.841683366733466, 21.89178356713427, 21.94188376753507, 21.991983967935873, 22.04208416833667, 22.092184368737474, 22.142284569138276, 22.19238476953908, 22.24248496993988, 22.292585170340683, 22.34268537074148, 22.392785571142284, 22.442885771543086, 22.492985971943888, 22.54308617234469, 22.593186372745492, 22.64328657314629, 22.693386773547093, 22.743486973947896, 22.793587174348698, 22.8436873747495, 22.893787575150302, 22.9438877755511, 22.993987975951903, 23.044088176352705, 23.094188376753507, 23.14428857715431, 23.194388777555112, 23.24448897795591, 23.294589178356713, 23.344689378757515, 23.394789579158317, 23.44488977955912, 23.49498997995992, 23.54509018036072, 23.595190380761522, 23.645290581162325, 23.695390781563127, 23.74549098196393, 23.795591182364728, 23.84569138276553, 23.895791583166332, 23.945891783567134, 23.995991983967937, 24.04609218436874, 24.096192384769537, 24.14629258517034, 24.196392785571142, 24.246492985971944, 24.296593186372746, 24.34669338677355, 24.396793587174347, 24.44689378757515, 24.49699398797595, 24.547094188376754, 24.597194388777556, 24.647294589178358, 24.697394789579157, 24.74749498997996, 24.79759519038076, 24.847695390781563, 24.897795591182366, 24.947895791583168, 24.997995991983966, 25.04809619238477, 25.09819639278557, 25.148296593186373, 25.198396793587175, 25.248496993987978, 25.298597194388776, 25.34869739478958, 25.39879759519038, 25.448897795591183, 25.498997995991985, 25.549098196392787, 25.599198396793586, 25.649298597194388, 25.69939879759519, 25.749498997995993, 25.799599198396795, 25.849699398797597, 25.899799599198396, 25.949899799599198, 26.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_b4272ecf1c4f4d97be78610e13970aaa.x = d3.scale.linear()
              .domain([1.0, 26.0])
              .range([0, 400]);

    color_map_b4272ecf1c4f4d97be78610e13970aaa.legend = L.control({position: 'topright'});
    color_map_b4272ecf1c4f4d97be78610e13970aaa.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_b4272ecf1c4f4d97be78610e13970aaa.legend.addTo(map_7007f9e607c34f628f60a09ef00368d2);

    color_map_b4272ecf1c4f4d97be78610e13970aaa.xAxis = d3.svg.axis()
        .scale(color_map_b4272ecf1c4f4d97be78610e13970aaa.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 5.166666666666667, 9.333333333333334, 13.5, 17.666666666666668, 21.833333333333336, 26.0]);

    color_map_b4272ecf1c4f4d97be78610e13970aaa.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_b4272ecf1c4f4d97be78610e13970aaa.g = color_map_b4272ecf1c4f4d97be78610e13970aaa.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_b4272ecf1c4f4d97be78610e13970aaa.g.selectAll("rect")
        .data(color_map_b4272ecf1c4f4d97be78610e13970aaa.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_b4272ecf1c4f4d97be78610e13970aaa.x(color_map_b4272ecf1c4f4d97be78610e13970aaa.color.domain()[i - 1]) : color_map_b4272ecf1c4f4d97be78610e13970aaa.x.range()[0],
            x1: i < color_map_b4272ecf1c4f4d97be78610e13970aaa.color.domain().length ? color_map_b4272ecf1c4f4d97be78610e13970aaa.x(color_map_b4272ecf1c4f4d97be78610e13970aaa.color.domain()[i]) : color_map_b4272ecf1c4f4d97be78610e13970aaa.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_b4272ecf1c4f4d97be78610e13970aaa.g.call(color_map_b4272ecf1c4f4d97be78610e13970aaa.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('31_50_YURI LUCAS CARIUS DE MOURA ALMEIDA');
