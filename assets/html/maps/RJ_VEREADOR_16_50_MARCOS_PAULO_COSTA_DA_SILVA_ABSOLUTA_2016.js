    
            var map_fef6e17b68664d4c99f424e1aecca25e = L.map(
                "map_fef6e17b68664d4c99f424e1aecca25e",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_948f60af2d234ceeba5bed147f2bb8ca = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_fef6e17b68664d4c99f424e1aecca25e);
        
    
            var choropleth_e83f4f2e89a84d13b7a35c661ff7d3ca = L.featureGroup(
                {}
            ).addTo(map_fef6e17b68664d4c99f424e1aecca25e);
        
    
        function geo_json_b0b3ca9a83394b6a8b550a5ac47123ce_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 431: case 349: case 342: case 336: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 448: case 449: case 447: case 446: case 444: case 363: case 352: case 392: case 382: case 427: case 419: case 398: case 401: case 433: case 430: case 370: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: case 436: case 369: case 510: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_b0b3ca9a83394b6a8b550a5ac47123ce_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_b0b3ca9a83394b6a8b550a5ac47123ce = L.geoJson(null, {
                onEachFeature: geo_json_b0b3ca9a83394b6a8b550a5ac47123ce_onEachFeature,
            
                style: geo_json_b0b3ca9a83394b6a8b550a5ac47123ce_styler,
        });

        function geo_json_b0b3ca9a83394b6a8b550a5ac47123ce_add (data) {
            geo_json_b0b3ca9a83394b6a8b550a5ac47123ce
                .addData(data)
                .addTo(choropleth_e83f4f2e89a84d13b7a35c661ff7d3ca);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_b0b3ca9a83394b6a8b550a5ac47123ce_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_354e5d49281f4bb484dce5c522e68144 = {};

    
    color_map_354e5d49281f4bb484dce5c522e68144.color = d3.scale.threshold()
              .domain([0.0, 0.9719438877755511, 1.9438877755511021, 2.9158316633266534, 3.8877755511022043, 4.859719438877756, 5.831663326653307, 6.803607214428857, 7.775551102204409, 8.74749498997996, 9.719438877755511, 10.691382765531062, 11.663326653306614, 12.635270541082164, 13.607214428857715, 14.579158316633267, 15.551102204408817, 16.52304609218437, 17.49498997995992, 18.46693386773547, 19.438877755511022, 20.410821643286575, 21.382765531062123, 22.354709418837675, 23.326653306613228, 24.298597194388776, 25.27054108216433, 26.24248496993988, 27.21442885771543, 28.18637274549098, 29.158316633266534, 30.130260521042086, 31.102204408817634, 32.07414829659319, 33.04609218436874, 34.01803607214429, 34.98997995991984, 35.96192384769539, 36.93386773547094, 37.90581162324649, 38.877755511022045, 39.8496993987976, 40.82164328657315, 41.793587174348694, 42.765531062124246, 43.7374749498998, 44.70941883767535, 45.6813627254509, 46.653306613226455, 47.62525050100201, 48.59719438877755, 49.569138276553105, 50.54108216432866, 51.51302605210421, 52.48496993987976, 53.45691382765531, 54.42885771543086, 55.40080160320641, 56.37274549098196, 57.344689378757515, 58.31663326653307, 59.28857715430862, 60.26052104208417, 61.23246492985972, 62.20440881763527, 63.17635270541082, 64.14829659318637, 65.12024048096193, 66.09218436873748, 67.06412825651303, 68.03607214428858, 69.00801603206413, 69.97995991983969, 70.95190380761522, 71.92384769539078, 72.89579158316633, 73.86773547094188, 74.83967935871743, 75.81162324649299, 76.78356713426854, 77.75551102204409, 78.72745490981964, 79.6993987975952, 80.67134268537075, 81.6432865731463, 82.61523046092185, 83.58717434869739, 84.55911823647294, 85.53106212424849, 86.50300601202404, 87.4749498997996, 88.44689378757515, 89.4188376753507, 90.39078156312625, 91.3627254509018, 92.33466933867736, 93.30661322645291, 94.27855711422846, 95.25050100200401, 96.22244488977955, 97.1943887775551, 98.16633266533066, 99.13827655310621, 100.11022044088176, 101.08216432865731, 102.05410821643287, 103.02605210420842, 103.99799599198397, 104.96993987975952, 105.94188376753507, 106.91382765531063, 107.88577154308618, 108.85771543086172, 109.82965931863727, 110.80160320641282, 111.77354709418837, 112.74549098196393, 113.71743486973948, 114.68937875751503, 115.66132264529058, 116.63326653306613, 117.60521042084169, 118.57715430861724, 119.54909819639279, 120.52104208416834, 121.49298597194388, 122.46492985971943, 123.43687374749499, 124.40881763527054, 125.38076152304609, 126.35270541082164, 127.3246492985972, 128.29659318637275, 129.2685370741483, 130.24048096192385, 131.2124248496994, 132.18436873747495, 133.1563126252505, 134.12825651302606, 135.1002004008016, 136.07214428857716, 137.04408817635272, 138.01603206412827, 138.98797595190382, 139.95991983967937, 140.9318637274549, 141.90380761523045, 142.875751503006, 143.84769539078155, 144.8196392785571, 145.79158316633266, 146.7635270541082, 147.73547094188376, 148.7074148296593, 149.67935871743487, 150.65130260521042, 151.62324649298597, 152.59519038076152, 153.56713426853707, 154.53907815631263, 155.51102204408818, 156.48296593186373, 157.45490981963928, 158.42685370741484, 159.3987975951904, 160.37074148296594, 161.3426853707415, 162.31462925851704, 163.2865731462926, 164.25851703406815, 165.2304609218437, 166.20240480961922, 167.17434869739478, 168.14629258517033, 169.11823647294588, 170.09018036072143, 171.06212424849699, 172.03406813627254, 173.0060120240481, 173.97795591182364, 174.9498997995992, 175.92184368737475, 176.8937875751503, 177.86573146292585, 178.8376753507014, 179.80961923847696, 180.7815631262525, 181.75350701402806, 182.7254509018036, 183.69739478957916, 184.66933867735472, 185.64128256513027, 186.61322645290582, 187.58517034068137, 188.55711422845692, 189.52905811623248, 190.50100200400803, 191.47294589178355, 192.4448897795591, 193.41683366733466, 194.3887775551102, 195.36072144288576, 196.3326653306613, 197.30460921843687, 198.27655310621242, 199.24849699398797, 200.22044088176352, 201.19238476953907, 202.16432865731463, 203.13627254509018, 204.10821643286573, 205.08016032064128, 206.05210420841684, 207.0240480961924, 207.99599198396794, 208.9679358717435, 209.93987975951904, 210.9118236472946, 211.88376753507015, 212.8557114228457, 213.82765531062125, 214.7995991983968, 215.77154308617236, 216.7434869739479, 217.71543086172343, 218.68737474949899, 219.65931863727454, 220.6312625250501, 221.60320641282564, 222.5751503006012, 223.54709418837675, 224.5190380761523, 225.49098196392785, 226.4629258517034, 227.43486973947896, 228.4068136272545, 229.37875751503006, 230.3507014028056, 231.32264529058116, 232.29458917835672, 233.26653306613227, 234.23847695390782, 235.21042084168337, 236.18236472945893, 237.15430861723448, 238.12625250501003, 239.09819639278558, 240.07014028056113, 241.0420841683367, 242.01402805611224, 242.98597194388776, 243.9579158316633, 244.92985971943887, 245.90180360721442, 246.87374749498997, 247.84569138276552, 248.81763527054107, 249.78957915831663, 250.76152304609218, 251.73346693386773, 252.70541082164328, 253.67735470941884, 254.6492985971944, 255.62124248496994, 256.5931863727455, 257.565130260521, 258.5370741482966, 259.5090180360721, 260.4809619238477, 261.4529058116232, 262.4248496993988, 263.39679358717433, 264.3687374749499, 265.34068136272543, 266.312625250501, 267.28456913827654, 268.2565130260521, 269.22845691382764, 270.2004008016032, 271.17234468937875, 272.1442885771543, 273.11623246492985, 274.08817635270543, 275.06012024048096, 276.03206412825654, 277.00400801603206, 277.97595190380764, 278.94789579158316, 279.91983967935874, 280.89178356713427, 281.8637274549098, 282.8356713426854, 283.8076152304609, 284.7795591182365, 285.751503006012, 286.7234468937876, 287.6953907815631, 288.6673346693387, 289.6392785571142, 290.6112224448898, 291.5831663326653, 292.5551102204409, 293.5270541082164, 294.498997995992, 295.4709418837675, 296.4428857715431, 297.4148296593186, 298.3867735470942, 299.35871743486973, 300.3306613226453, 301.30260521042084, 302.2745490981964, 303.24649298597194, 304.2184368737475, 305.19038076152304, 306.1623246492986, 307.13426853707415, 308.1062124248497, 309.07815631262525, 310.0501002004008, 311.02204408817636, 311.9939879759519, 312.96593186372746, 313.937875751503, 314.90981963927857, 315.8817635270541, 316.85370741482967, 317.8256513026052, 318.7975951903808, 319.7695390781563, 320.7414829659319, 321.7134268537074, 322.685370741483, 323.6573146292585, 324.6292585170341, 325.6012024048096, 326.5731462925852, 327.5450901803607, 328.5170340681363, 329.4889779559118, 330.4609218436874, 331.4328657314629, 332.40480961923845, 333.37675350701403, 334.34869739478955, 335.32064128256513, 336.29258517034066, 337.26452905811624, 338.23647294589176, 339.20841683366734, 340.18036072144287, 341.15230460921845, 342.12424849699397, 343.09619238476955, 344.0681362725451, 345.04008016032066, 346.0120240480962, 346.98396793587176, 347.9559118236473, 348.92785571142286, 349.8997995991984, 350.87174348697397, 351.8436873747495, 352.8156312625251, 353.7875751503006, 354.7595190380762, 355.7314629258517, 356.7034068136273, 357.6753507014028, 358.64729458917833, 359.6192384769539, 360.59118236472943, 361.563126252505, 362.53507014028054, 363.5070140280561, 364.47895791583164, 365.4509018036072, 366.42284569138275, 367.3947895791583, 368.36673346693385, 369.33867735470943, 370.31062124248496, 371.28256513026054, 372.25450901803606, 373.22645290581164, 374.19839679358716, 375.17034068136275, 376.14228456913827, 377.11422845691385, 378.0861723446894, 379.05811623246495, 380.0300601202405, 381.00200400801606, 381.9739478957916, 382.9458917835671, 383.9178356713427, 384.8897795591182, 385.8617234468938, 386.8336673346693, 387.8056112224449, 388.7775551102204, 389.749498997996, 390.7214428857715, 391.6933867735471, 392.6653306613226, 393.6372745490982, 394.60921843687373, 395.5811623246493, 396.55310621242484, 397.5250501002004, 398.49699398797594, 399.4689378757515, 400.44088176352705, 401.4128256513026, 402.38476953907815, 403.35671342685373, 404.32865731462925, 405.30060120240483, 406.27254509018036, 407.24448897795594, 408.21643286573146, 409.188376753507, 410.16032064128257, 411.1322645290581, 412.10420841683367, 413.0761523046092, 414.0480961923848, 415.0200400801603, 415.9919839679359, 416.9639278557114, 417.935871743487, 418.9078156312625, 419.8797595190381, 420.8517034068136, 421.8236472945892, 422.7955911823647, 423.7675350701403, 424.7394789579158, 425.7114228456914, 426.6833667334669, 427.6553106212425, 428.62725450901803, 429.5991983967936, 430.57114228456913, 431.5430861723447, 432.51503006012024, 433.4869739478958, 434.45891783567134, 435.43086172344687, 436.40280561122245, 437.37474949899797, 438.34669338677355, 439.3186372745491, 440.29058116232466, 441.2625250501002, 442.23446893787576, 443.2064128256513, 444.17835671342687, 445.1503006012024, 446.12224448897797, 447.0941883767535, 448.0661322645291, 449.0380761523046, 450.0100200400802, 450.9819639278557, 451.9539078156313, 452.9258517034068, 453.8977955911824, 454.8697394789579, 455.8416833667335, 456.813627254509, 457.7855711422846, 458.7575150300601, 459.72945891783564, 460.7014028056112, 461.67334669338675, 462.6452905811623, 463.61723446893785, 464.58917835671343, 465.56112224448896, 466.53306613226454, 467.50501002004006, 468.47695390781564, 469.44889779559117, 470.42084168336675, 471.39278557114227, 472.36472945891785, 473.3366733466934, 474.30861723446895, 475.2805611222445, 476.25250501002006, 477.2244488977956, 478.19639278557116, 479.1683366733467, 480.14028056112227, 481.1122244488978, 482.0841683366734, 483.0561122244489, 484.0280561122245, 485.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_354e5d49281f4bb484dce5c522e68144.x = d3.scale.linear()
              .domain([0.0, 485.0])
              .range([0, 400]);

    color_map_354e5d49281f4bb484dce5c522e68144.legend = L.control({position: 'topright'});
    color_map_354e5d49281f4bb484dce5c522e68144.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_354e5d49281f4bb484dce5c522e68144.legend.addTo(map_fef6e17b68664d4c99f424e1aecca25e);

    color_map_354e5d49281f4bb484dce5c522e68144.xAxis = d3.svg.axis()
        .scale(color_map_354e5d49281f4bb484dce5c522e68144.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 80.83333333333333, 161.66666666666666, 242.5, 323.3333333333333, 404.16666666666663, 485.0]);

    color_map_354e5d49281f4bb484dce5c522e68144.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_354e5d49281f4bb484dce5c522e68144.g = color_map_354e5d49281f4bb484dce5c522e68144.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_354e5d49281f4bb484dce5c522e68144.g.selectAll("rect")
        .data(color_map_354e5d49281f4bb484dce5c522e68144.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_354e5d49281f4bb484dce5c522e68144.x(color_map_354e5d49281f4bb484dce5c522e68144.color.domain()[i - 1]) : color_map_354e5d49281f4bb484dce5c522e68144.x.range()[0],
            x1: i < color_map_354e5d49281f4bb484dce5c522e68144.color.domain().length ? color_map_354e5d49281f4bb484dce5c522e68144.x(color_map_354e5d49281f4bb484dce5c522e68144.color.domain()[i]) : color_map_354e5d49281f4bb484dce5c522e68144.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_354e5d49281f4bb484dce5c522e68144.g.call(color_map_354e5d49281f4bb484dce5c522e68144.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('16_50_MARCOS PAULO COSTA DA SILVA');

