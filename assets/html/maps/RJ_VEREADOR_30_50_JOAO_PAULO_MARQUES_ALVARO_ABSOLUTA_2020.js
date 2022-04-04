    
            var map_db56e9d256d3417593c1cb8bf36d1d93 = L.map(
                "map_db56e9d256d3417593c1cb8bf36d1d93",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_dcb912af87984f07a4816b975cdc9f7f = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_db56e9d256d3417593c1cb8bf36d1d93);
        
    
            var choropleth_5ead0cfe797f4119a92b43d833cb4cd4 = L.featureGroup(
                {}
            ).addTo(map_db56e9d256d3417593c1cb8bf36d1d93);
        
    
        function geo_json_e55e1a3e8cd643ec980759cab3931eff_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 391: case 480: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: case 381: case 459: case 454: case 445: case 429: case 409: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 457: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 433: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 430: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_e55e1a3e8cd643ec980759cab3931eff_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_e55e1a3e8cd643ec980759cab3931eff = L.geoJson(null, {
                onEachFeature: geo_json_e55e1a3e8cd643ec980759cab3931eff_onEachFeature,
            
                style: geo_json_e55e1a3e8cd643ec980759cab3931eff_styler,
        });

        function geo_json_e55e1a3e8cd643ec980759cab3931eff_add (data) {
            geo_json_e55e1a3e8cd643ec980759cab3931eff
                .addData(data)
                .addTo(choropleth_5ead0cfe797f4119a92b43d833cb4cd4);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_e55e1a3e8cd643ec980759cab3931eff_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_71f0420c1fc94474805a3a9009af5b8e = {};

    
    color_map_71f0420c1fc94474805a3a9009af5b8e.color = d3.scale.threshold()
              .domain([1.0, 2.012024048096192, 3.024048096192385, 4.0360721442885765, 5.04809619238477, 6.060120240480962, 7.072144288577154, 8.084168336673347, 9.09619238476954, 10.108216432865731, 11.120240480961924, 12.132264529058116, 13.144288577154308, 14.156312625250502, 15.168336673346694, 16.180360721442888, 17.19238476953908, 18.204408817635272, 19.216432865731463, 20.228456913827657, 21.240480961923847, 22.25250501002004, 23.26452905811623, 24.276553106212425, 25.288577154308616, 26.30060120240481, 27.312625250501004, 28.324649298597194, 29.336673346693388, 30.34869739478958, 31.360721442885772, 32.37274549098196, 33.38476953907816, 34.39679358717435, 35.408817635270545, 36.42084168336673, 37.432865731462925, 38.44488977955912, 39.45691382765531, 40.4689378757515, 41.480961923847694, 42.49298597194389, 43.50501002004008, 44.517034068136276, 45.52905811623246, 46.54108216432866, 47.55310621242485, 48.565130260521045, 49.57715430861723, 50.589178356713425, 51.60120240480962, 52.61322645290581, 53.62525050100201, 54.637274549098194, 55.64929859719439, 56.66132264529058, 57.673346693386776, 58.68537074148296, 59.69739478957916, 60.70941883767535, 61.721442885771545, 62.73346693386774, 63.745490981963925, 64.75751503006012, 65.76953907815631, 66.78156312625251, 67.7935871743487, 68.8056112224449, 69.81763527054109, 70.82965931863727, 71.84168336673346, 72.85370741482966, 73.86573146292585, 74.87775551102204, 75.88977955911824, 76.90180360721443, 77.91382765531063, 78.92585170340682, 79.937875751503, 80.9498997995992, 81.96192384769539, 82.97394789579158, 83.98597194388778, 84.99799599198397, 86.01002004008016, 87.02204408817636, 88.03406813627255, 89.04609218436873, 90.05811623246493, 91.07014028056112, 92.08216432865731, 93.09418837675351, 94.1062124248497, 95.1182364729459, 96.13026052104209, 97.14228456913828, 98.15430861723446, 99.16633266533066, 100.17835671342685, 101.19038076152304, 102.20240480961924, 103.21442885771543, 104.22645290581163, 105.23847695390782, 106.25050100200401, 107.2625250501002, 108.27454909819639, 109.28657314629258, 110.29859719438878, 111.31062124248497, 112.32264529058116, 113.33466933867736, 114.34669338677355, 115.35871743486975, 116.37074148296593, 117.38276553106212, 118.39478957915831, 119.40681362725451, 120.4188376753507, 121.4308617234469, 122.44288577154309, 123.45490981963928, 124.46693386773548, 125.47895791583166, 126.49098196392785, 127.50300601202404, 128.51503006012024, 129.52705410821645, 130.53907815631263, 131.5511022044088, 132.56312625250501, 133.5751503006012, 134.5871743486974, 135.59919839679358, 136.6112224448898, 137.62324649298597, 138.63527054108218, 139.64729458917836, 140.65931863727454, 141.67134268537075, 142.68336673346693, 143.69539078156313, 144.7074148296593, 145.71943887775552, 146.7314629258517, 147.7434869739479, 148.7555110220441, 149.76753507014027, 150.77955911823648, 151.79158316633266, 152.80360721442887, 153.81563126252505, 154.82765531062125, 155.83967935871743, 156.85170340681364, 157.86372745490982, 158.875751503006, 159.8877755511022, 160.8997995991984, 161.9118236472946, 162.92384769539078, 163.93587174348698, 164.94789579158316, 165.95991983967937, 166.97194388777555, 167.98396793587173, 168.99599198396794, 170.00801603206412, 171.02004008016033, 172.0320641282565, 173.04408817635272, 174.0561122244489, 175.0681362725451, 176.08016032064128, 177.09218436873746, 178.10420841683367, 179.11623246492985, 180.12825651302606, 181.14028056112224, 182.15230460921845, 183.16432865731463, 184.17635270541084, 185.18837675350701, 186.2004008016032, 187.2124248496994, 188.22444889779558, 189.2364729458918, 190.24849699398797, 191.26052104208418, 192.27254509018036, 193.28456913827657, 194.29659318637275, 195.30861723446893, 196.32064128256513, 197.3326653306613, 198.34468937875752, 199.3567134268537, 200.3687374749499, 201.3807615230461, 202.3927855711423, 203.40480961923848, 204.41683366733466, 205.42885771543087, 206.44088176352705, 207.45290581162325, 208.46492985971943, 209.47695390781564, 210.48897795591182, 211.50100200400803, 212.5130260521042, 213.5250501002004, 214.5370741482966, 215.54909819639278, 216.56112224448898, 217.57314629258516, 218.58517034068137, 219.59719438877755, 220.60921843687376, 221.62124248496994, 222.63326653306612, 223.64529058116233, 224.6573146292585, 225.66933867735472, 226.6813627254509, 227.6933867735471, 228.70541082164328, 229.7174348697395, 230.72945891783567, 231.74148296593185, 232.75350701402806, 233.76553106212424, 234.77755511022045, 235.78957915831663, 236.80160320641284, 237.81362725450902, 238.82565130260522, 239.8376753507014, 240.84969939879758, 241.8617234468938, 242.87374749498997, 243.88577154308618, 244.89779559118236, 245.90981963927857, 246.92184368737475, 247.93386773547095, 248.94589178356713, 249.9579158316633, 250.96993987975952, 251.9819639278557, 252.9939879759519, 254.0060120240481, 255.0180360721443, 256.0300601202405, 257.04208416833666, 258.0541082164329, 259.0661322645291, 260.07815631262525, 261.09018036072143, 262.1022044088176, 263.11422845691385, 264.12625250501003, 265.1382765531062, 266.1503006012024, 267.1623246492986, 268.1743486973948, 269.186372745491, 270.19839679358716, 271.21042084168334, 272.2224448897796, 273.23446893787576, 274.24649298597194, 275.2585170340681, 276.27054108216436, 277.28256513026054, 278.2945891783567, 279.3066132264529, 280.3186372745491, 281.3306613226453, 282.3426853707415, 283.3547094188377, 284.36673346693385, 285.3787575150301, 286.39078156312627, 287.40280561122245, 288.4148296593186, 289.4268537074148, 290.43887775551104, 291.4509018036072, 292.4629258517034, 293.4749498997996, 294.4869739478958, 295.498997995992, 296.5110220440882, 297.52304609218436, 298.53507014028054, 299.5470941883768, 300.55911823647295, 301.57114228456913, 302.5831663326653, 303.59519038076155, 304.60721442885773, 305.6192384769539, 306.6312625250501, 307.64328657314627, 308.6553106212425, 309.6673346693387, 310.67935871743487, 311.69138276553105, 312.7034068136273, 313.71543086172346, 314.72745490981964, 315.7394789579158, 316.751503006012, 317.76352705410824, 318.7755511022044, 319.7875751503006, 320.7995991983968, 321.811623246493, 322.8236472945892, 323.8356713426854, 324.84769539078155, 325.85971943887773, 326.87174348697397, 327.88376753507015, 328.89579158316633, 329.9078156312625, 330.91983967935874, 331.9318637274549, 332.9438877755511, 333.9559118236473, 334.96793587174346, 335.9799599198397, 336.9919839679359, 338.00400801603206, 339.01603206412824, 340.0280561122245, 341.04008016032066, 342.05210420841684, 343.064128256513, 344.0761523046092, 345.08817635270543, 346.1002004008016, 347.1122244488978, 348.12424849699397, 349.1362725450902, 350.1482965931864, 351.16032064128257, 352.17234468937875, 353.1843687374749, 354.19639278557116, 355.20841683366734, 356.2204408817635, 357.2324649298597, 358.24448897795594, 359.2565130260521, 360.2685370741483, 361.2805611222445, 362.29258517034066, 363.3046092184369, 364.3166332665331, 365.32865731462925, 366.34068136272543, 367.35270541082167, 368.36472945891785, 369.37675350701403, 370.3887775551102, 371.4008016032064, 372.4128256513026, 373.4248496993988, 374.436873747495, 375.44889779559117, 376.4609218436874, 377.4729458917836, 378.48496993987976, 379.49699398797594, 380.5090180360721, 381.52104208416836, 382.53306613226454, 383.5450901803607, 384.5571142284569, 385.56913827655313, 386.5811623246493, 387.5931863727455, 388.6052104208417, 389.61723446893785, 390.6292585170341, 391.64128256513027, 392.65330661322645, 393.6653306613226, 394.67735470941886, 395.68937875751504, 396.7014028056112, 397.7134268537074, 398.7254509018036, 399.7374749498998, 400.749498997996, 401.7615230460922, 402.77354709418836, 403.7855711422846, 404.7975951903808, 405.80961923847696, 406.82164328657313, 407.8336673346693, 408.84569138276555, 409.85771543086173, 410.8697394789579, 411.8817635270541, 412.8937875751503, 413.9058116232465, 414.9178356713427, 415.92985971943887, 416.94188376753505, 417.9539078156313, 418.96593186372746, 419.97795591182364, 420.9899799599198, 422.00200400801606, 423.01402805611224, 424.0260521042084, 425.0380761523046, 426.0501002004008, 427.062124248497, 428.0741482965932, 429.0861723446894, 430.09819639278555, 431.1102204408818, 432.12224448897797, 433.13426853707415, 434.14629258517033, 435.1583166332665, 436.17034068136275, 437.1823647294589, 438.1943887775551, 439.2064128256513, 440.2184368737475, 441.2304609218437, 442.2424849699399, 443.25450901803606, 444.26653306613224, 445.2785571142285, 446.29058116232466, 447.30260521042084, 448.314629258517, 449.32665330661325, 450.33867735470943, 451.3507014028056, 452.3627254509018, 453.37474949899797, 454.3867735470942, 455.3987975951904, 456.41082164328657, 457.42284569138275, 458.434869739479, 459.44689378757516, 460.45891783567134, 461.4709418837675, 462.4829659318637, 463.49498997995994, 464.5070140280561, 465.5190380761523, 466.5310621242485, 467.5430861723447, 468.5551102204409, 469.5671342685371, 470.57915831663325, 471.59118236472943, 472.60320641282567, 473.61523046092185, 474.62725450901803, 475.6392785571142, 476.65130260521045, 477.6633266533066, 478.6753507014028, 479.687374749499, 480.69939879759517, 481.7114228456914, 482.7234468937876, 483.73547094188376, 484.74749498997994, 485.7595190380762, 486.77154308617236, 487.78356713426854, 488.7955911823647, 489.8076152304609, 490.81963927855713, 491.8316633266533, 492.8436873747495, 493.8557114228457, 494.8677354709419, 495.8797595190381, 496.89178356713427, 497.90380761523045, 498.9158316633266, 499.92785571142286, 500.93987975951904, 501.9519038076152, 502.9639278557114, 503.97595190380764, 504.9879759519038, 506.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_71f0420c1fc94474805a3a9009af5b8e.x = d3.scale.linear()
              .domain([1.0, 506.0])
              .range([0, 400]);

    color_map_71f0420c1fc94474805a3a9009af5b8e.legend = L.control({position: 'topright'});
    color_map_71f0420c1fc94474805a3a9009af5b8e.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_71f0420c1fc94474805a3a9009af5b8e.legend.addTo(map_db56e9d256d3417593c1cb8bf36d1d93);

    color_map_71f0420c1fc94474805a3a9009af5b8e.xAxis = d3.svg.axis()
        .scale(color_map_71f0420c1fc94474805a3a9009af5b8e.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 85.16666666666667, 169.33333333333334, 253.5, 337.6666666666667, 421.83333333333337, 506.0]);

    color_map_71f0420c1fc94474805a3a9009af5b8e.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_71f0420c1fc94474805a3a9009af5b8e.g = color_map_71f0420c1fc94474805a3a9009af5b8e.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_71f0420c1fc94474805a3a9009af5b8e.g.selectAll("rect")
        .data(color_map_71f0420c1fc94474805a3a9009af5b8e.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_71f0420c1fc94474805a3a9009af5b8e.x(color_map_71f0420c1fc94474805a3a9009af5b8e.color.domain()[i - 1]) : color_map_71f0420c1fc94474805a3a9009af5b8e.x.range()[0],
            x1: i < color_map_71f0420c1fc94474805a3a9009af5b8e.color.domain().length ? color_map_71f0420c1fc94474805a3a9009af5b8e.x(color_map_71f0420c1fc94474805a3a9009af5b8e.color.domain()[i]) : color_map_71f0420c1fc94474805a3a9009af5b8e.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_71f0420c1fc94474805a3a9009af5b8e.g.call(color_map_71f0420c1fc94474805a3a9009af5b8e.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('30_50_JOAO PAULO MARQUES ALVARO');
