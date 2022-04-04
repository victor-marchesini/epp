    
            var map_2303341c08d442a697defbb8248bdbba = L.map(
                "map_2303341c08d442a697defbb8248bdbba",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_b3fd4e964a2945599ad00ac642e2f19c = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_2303341c08d442a697defbb8248bdbba);
        
    
            var choropleth_b83770444ef74aa4a5a3ae7406bb3993 = L.featureGroup(
                {}
            ).addTo(map_2303341c08d442a697defbb8248bdbba);
        
    
        function geo_json_20c5cbec372644e9b17dacbba48ef4f4_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 431: case 349: case 342: case 460: case 357: case 481: case 479: case 366: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 422: case 439: case 440: case 448: case 449: case 453: case 474: case 436: case 381: case 369: case 363: case 416: case 427: case 419: case 408: case 430: case 471: case 370: case 387: case 511: case 374: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 412: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 447: case 510: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 442: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_20c5cbec372644e9b17dacbba48ef4f4_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_20c5cbec372644e9b17dacbba48ef4f4 = L.geoJson(null, {
                onEachFeature: geo_json_20c5cbec372644e9b17dacbba48ef4f4_onEachFeature,
            
                style: geo_json_20c5cbec372644e9b17dacbba48ef4f4_styler,
        });

        function geo_json_20c5cbec372644e9b17dacbba48ef4f4_add (data) {
            geo_json_20c5cbec372644e9b17dacbba48ef4f4
                .addData(data)
                .addTo(choropleth_b83770444ef74aa4a5a3ae7406bb3993);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_20c5cbec372644e9b17dacbba48ef4f4_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_087d22dce7664b509b1b909152658277 = {};

    
    color_map_087d22dce7664b509b1b909152658277.color = d3.scale.threshold()
              .domain([0.0, 0.7154308617234469, 1.4308617234468939, 2.1462925851703405, 2.8617234468937878, 3.5771543086172346, 4.292585170340681, 5.008016032064128, 5.7234468937875755, 6.438877755511022, 7.154308617234469, 7.869739478957916, 8.585170340681362, 9.30060120240481, 10.016032064128256, 10.731462925851703, 11.446893787575151, 12.162324649298597, 12.877755511022045, 13.59318637274549, 14.308617234468938, 15.024048096192384, 15.739478957915832, 16.45490981963928, 17.170340681362724, 17.88577154308617, 18.60120240480962, 19.316633266533067, 20.03206412825651, 20.74749498997996, 21.462925851703407, 22.178356713426854, 22.893787575150302, 23.609218436873746, 24.324649298597194, 25.04008016032064, 25.75551102204409, 26.470941883767534, 27.18637274549098, 27.90180360721443, 28.617234468937877, 29.33266533066132, 30.04809619238477, 30.763527054108216, 31.478957915831664, 32.19438877755511, 32.90981963927856, 33.62525050100201, 34.34068136272545, 35.056112224448896, 35.77154308617234, 36.48697394789579, 37.20240480961924, 37.91783567134269, 38.633266533066134, 39.34869739478958, 40.06412825651302, 40.77955911823647, 41.49498997995992, 42.210420841683366, 42.92585170340681, 43.64128256513026, 44.35671342685371, 45.07214428857716, 45.787575150300604, 46.503006012024045, 47.21843687374749, 47.93386773547094, 48.64929859719439, 49.364729458917836, 50.08016032064128, 50.79559118236473, 51.51102204408818, 52.22645290581163, 52.94188376753507, 53.657314629258515, 54.37274549098196, 55.08817635270541, 55.80360721442886, 56.519038076152306, 57.234468937875754, 57.9498997995992, 58.66533066132264, 59.38076152304609, 60.09619238476954, 60.811623246492985, 61.52705410821643, 62.24248496993988, 62.95791583166333, 63.673346693386776, 64.38877755511022, 65.10420841683367, 65.81963927855712, 66.53507014028057, 67.25050100200401, 67.96593186372745, 68.6813627254509, 69.39679358717434, 70.11222444889779, 70.82765531062124, 71.54308617234469, 72.25851703406813, 72.97394789579158, 73.68937875751503, 74.40480961923848, 75.12024048096193, 75.83567134268537, 76.55110220440882, 77.26653306613227, 77.98196392785572, 78.69739478957916, 79.41282565130261, 80.12825651302605, 80.84368737474949, 81.55911823647294, 82.27454909819639, 82.98997995991984, 83.70541082164328, 84.42084168336673, 85.13627254509018, 85.85170340681363, 86.56713426853707, 87.28256513026052, 87.99799599198397, 88.71342685370742, 89.42885771543087, 90.14428857715431, 90.85971943887776, 91.57515030060121, 92.29058116232466, 93.00601202404809, 93.72144288577154, 94.43687374749499, 95.15230460921843, 95.86773547094188, 96.58316633266533, 97.29859719438878, 98.01402805611222, 98.72945891783567, 99.44488977955912, 100.16032064128257, 100.87575150300601, 101.59118236472946, 102.30661322645291, 103.02204408817636, 103.7374749498998, 104.45290581162325, 105.16833667334669, 105.88376753507013, 106.59919839679358, 107.31462925851703, 108.03006012024048, 108.74549098196393, 109.46092184368737, 110.17635270541082, 110.89178356713427, 111.60721442885772, 112.32264529058116, 113.03807615230461, 113.75350701402806, 114.46893787575151, 115.18436873747495, 115.8997995991984, 116.61523046092185, 117.33066132264528, 118.04609218436873, 118.76152304609218, 119.47695390781563, 120.19238476953907, 120.90781563126252, 121.62324649298597, 122.33867735470942, 123.05410821643287, 123.76953907815631, 124.48496993987976, 125.20040080160321, 125.91583166332666, 126.6312625250501, 127.34669338677355, 128.06212424849699, 128.77755511022045, 129.49298597194388, 130.20841683366734, 130.92384769539078, 131.63927855711424, 132.35470941883767, 133.07014028056113, 133.78557114228457, 134.50100200400803, 135.21643286573146, 135.9318637274549, 136.64729458917836, 137.3627254509018, 138.07815631262525, 138.7935871743487, 139.50901803607215, 140.22444889779558, 140.93987975951904, 141.65531062124248, 142.37074148296594, 143.08617234468937, 143.80160320641284, 144.51703406813627, 145.23246492985973, 145.94789579158316, 146.66332665330663, 147.37875751503006, 148.0941883767535, 148.80961923847696, 149.5250501002004, 150.24048096192385, 150.95591182364728, 151.67134268537075, 152.38677354709418, 153.10220440881764, 153.81763527054107, 154.53306613226454, 155.24849699398797, 155.96392785571143, 156.67935871743487, 157.39478957915833, 158.11022044088176, 158.82565130260522, 159.54108216432866, 160.2565130260521, 160.97194388777555, 161.68737474949899, 162.40280561122245, 163.11823647294588, 163.83366733466934, 164.54909819639278, 165.26452905811624, 165.97995991983967, 166.69539078156313, 167.41082164328657, 168.12625250501003, 168.84168336673346, 169.55711422845692, 170.27254509018036, 170.98797595190382, 171.70340681362725, 172.4188376753507, 173.13426853707415, 173.84969939879758, 174.56513026052104, 175.28056112224448, 175.99599198396794, 176.71142284569137, 177.42685370741484, 178.14228456913827, 178.85771543086173, 179.57314629258516, 180.28857715430863, 181.00400801603206, 181.71943887775552, 182.43486973947896, 183.15030060120242, 183.86573146292585, 184.5811623246493, 185.29659318637275, 186.01202404809618, 186.72745490981964, 187.44288577154308, 188.15831663326654, 188.87374749498997, 189.58917835671343, 190.30460921843687, 191.02004008016033, 191.73547094188376, 192.45090180360722, 193.16633266533066, 193.88176352705412, 194.59719438877755, 195.31262525050101, 196.02805611222445, 196.7434869739479, 197.45891783567134, 198.17434869739478, 198.88977955911824, 199.60521042084167, 200.32064128256513, 201.03607214428857, 201.75150300601203, 202.46693386773546, 203.18236472945893, 203.89779559118236, 204.61322645290582, 205.32865731462925, 206.04408817635272, 206.75951903807615, 207.4749498997996, 208.19038076152304, 208.9058116232465, 209.62124248496994, 210.33667334669337, 211.05210420841684, 211.76753507014027, 212.48296593186373, 213.19839679358716, 213.91382765531063, 214.62925851703406, 215.34468937875752, 216.06012024048096, 216.77555110220442, 217.49098196392785, 218.2064128256513, 218.92184368737475, 219.6372745490982, 220.35270541082164, 221.0681362725451, 221.78356713426854, 222.49899799599197, 223.21442885771543, 223.92985971943887, 224.64529058116233, 225.36072144288576, 226.07615230460922, 226.79158316633266, 227.50701402805612, 228.22244488977955, 228.93787575150301, 229.65330661322645, 230.3687374749499, 231.08416833667334, 231.7995991983968, 232.51503006012024, 233.2304609218437, 233.94589178356713, 234.66132264529057, 235.37675350701403, 236.09218436873746, 236.80761523046093, 237.52304609218436, 238.23847695390782, 238.95390781563125, 239.66933867735472, 240.38476953907815, 241.1002004008016, 241.81563126252505, 242.5310621242485, 243.24649298597194, 243.9619238476954, 244.67735470941884, 245.3927855711423, 246.10821643286573, 246.82364729458916, 247.53907815631263, 248.25450901803606, 248.96993987975952, 249.68537074148296, 250.40080160320642, 251.11623246492985, 251.8316633266533, 252.54709418837675, 253.2625250501002, 253.97795591182364, 254.6933867735471, 255.40881763527054, 256.12424849699397, 256.83967935871743, 257.5551102204409, 258.27054108216436, 258.98597194388776, 259.7014028056112, 260.4168336673347, 261.1322645290581, 261.84769539078155, 262.563126252505, 263.2785571142285, 263.9939879759519, 264.70941883767534, 265.4248496993988, 266.14028056112227, 266.8557114228457, 267.57114228456913, 268.2865731462926, 269.00200400801606, 269.71743486973946, 270.4328657314629, 271.1482965931864, 271.8637274549098, 272.57915831663325, 273.2945891783567, 274.0100200400802, 274.7254509018036, 275.44088176352705, 276.1563126252505, 276.87174348697397, 277.5871743486974, 278.30260521042084, 279.0180360721443, 279.73346693386776, 280.44889779559117, 281.1643286573146, 281.8797595190381, 282.59519038076155, 283.31062124248496, 284.0260521042084, 284.7414829659319, 285.4569138276553, 286.17234468937875, 286.8877755511022, 287.60320641282567, 288.3186372745491, 289.03406813627254, 289.749498997996, 290.46492985971946, 291.18036072144287, 291.89579158316633, 292.6112224448898, 293.32665330661325, 294.04208416833666, 294.7575150300601, 295.4729458917836, 296.188376753507, 296.90380761523045, 297.6192384769539, 298.3346693386774, 299.0501002004008, 299.76553106212424, 300.4809619238477, 301.19639278557116, 301.91182364729457, 302.62725450901803, 303.3426853707415, 304.05811623246495, 304.77354709418836, 305.4889779559118, 306.2044088176353, 306.91983967935874, 307.63527054108215, 308.3507014028056, 309.0661322645291, 309.7815631262525, 310.49699398797594, 311.2124248496994, 311.92785571142286, 312.64328657314627, 313.35871743486973, 314.0741482965932, 314.78957915831666, 315.50501002004006, 316.2204408817635, 316.935871743487, 317.65130260521045, 318.36673346693385, 319.0821643286573, 319.7975951903808, 320.5130260521042, 321.22845691382764, 321.9438877755511, 322.65931863727457, 323.37474949899797, 324.09018036072143, 324.8056112224449, 325.52104208416836, 326.23647294589176, 326.9519038076152, 327.6673346693387, 328.38276553106215, 329.09819639278555, 329.813627254509, 330.5290581162325, 331.24448897795594, 331.95991983967934, 332.6753507014028, 333.39078156312627, 334.1062124248497, 334.82164328657313, 335.5370741482966, 336.25250501002006, 336.96793587174346, 337.6833667334669, 338.3987975951904, 339.11422845691385, 339.82965931863725, 340.5450901803607, 341.2605210420842, 341.97595190380764, 342.69138276553105, 343.4068136272545, 344.12224448897797, 344.8376753507014, 345.55310621242484, 346.2685370741483, 346.98396793587176, 347.69939879759517, 348.4148296593186, 349.1302605210421, 349.84569138276555, 350.56112224448896, 351.2765531062124, 351.9919839679359, 352.70741482965934, 353.42284569138275, 354.1382765531062, 354.85370741482967, 355.56913827655313, 356.28456913827654, 357.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_087d22dce7664b509b1b909152658277.x = d3.scale.linear()
              .domain([0.0, 357.0])
              .range([0, 400]);

    color_map_087d22dce7664b509b1b909152658277.legend = L.control({position: 'topright'});
    color_map_087d22dce7664b509b1b909152658277.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_087d22dce7664b509b1b909152658277.legend.addTo(map_2303341c08d442a697defbb8248bdbba);

    color_map_087d22dce7664b509b1b909152658277.xAxis = d3.svg.axis()
        .scale(color_map_087d22dce7664b509b1b909152658277.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 59.5, 119.0, 178.5, 238.0, 297.5, 357.0]);

    color_map_087d22dce7664b509b1b909152658277.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_087d22dce7664b509b1b909152658277.g = color_map_087d22dce7664b509b1b909152658277.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_087d22dce7664b509b1b909152658277.g.selectAll("rect")
        .data(color_map_087d22dce7664b509b1b909152658277.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_087d22dce7664b509b1b909152658277.x(color_map_087d22dce7664b509b1b909152658277.color.domain()[i - 1]) : color_map_087d22dce7664b509b1b909152658277.x.range()[0],
            x1: i < color_map_087d22dce7664b509b1b909152658277.color.domain().length ? color_map_087d22dce7664b509b1b909152658277.x(color_map_087d22dce7664b509b1b909152658277.color.domain()[i]) : color_map_087d22dce7664b509b1b909152658277.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_087d22dce7664b509b1b909152658277.g.call(color_map_087d22dce7664b509b1b909152658277.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('20_50_LEONEL BRIZOLA');
