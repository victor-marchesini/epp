    
            var map_d849402633c34caba0e37d5403b720ed = L.map(
                "map_d849402633c34caba0e37d5403b720ed",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_bbadad1f12ab4bfb836a689db114c411 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_d849402633c34caba0e37d5403b720ed);
        
    
            var choropleth_192604e9271a4c6f913492183a213365 = L.featureGroup(
                {}
            ).addTo(map_d849402633c34caba0e37d5403b720ed);
        
    
        function geo_json_da7f7b941c3e4124b35426937c33e297_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 449: case 436: case 381: case 419: case 430: case 471: case 378: case 511: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 439: case 412: case 440: case 448: case 447: case 473: case 472: case 470: case 474: case 446: case 444: case 369: case 363: case 352: case 392: case 396: case 382: case 427: case 408: case 411: case 397: case 364: case 398: case 346: case 368: case 339: case 347: case 337: case 433: case 409: case 477: case 387: case 389: case 374: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: case 370: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 510: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_da7f7b941c3e4124b35426937c33e297_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_da7f7b941c3e4124b35426937c33e297 = L.geoJson(null, {
                onEachFeature: geo_json_da7f7b941c3e4124b35426937c33e297_onEachFeature,
            
                style: geo_json_da7f7b941c3e4124b35426937c33e297_styler,
        });

        function geo_json_da7f7b941c3e4124b35426937c33e297_add (data) {
            geo_json_da7f7b941c3e4124b35426937c33e297
                .addData(data)
                .addTo(choropleth_192604e9271a4c6f913492183a213365);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_da7f7b941c3e4124b35426937c33e297_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_e3db7af034a34495bf3b5379cf6bbec6 = {};

    
    color_map_e3db7af034a34495bf3b5379cf6bbec6.color = d3.scale.threshold()
              .domain([1.0, 1.9559118236472945, 2.911823647294589, 3.867735470941884, 4.823647294589178, 5.779559118236473, 6.735470941883768, 7.6913827655310625, 8.647294589178356, 9.603206412825651, 10.559118236472946, 11.51503006012024, 12.470941883767535, 13.42685370741483, 14.382765531062125, 15.338677354709418, 16.294589178356713, 17.250501002004007, 18.206412825651302, 19.162324649298597, 20.118236472945892, 21.074148296593187, 22.03006012024048, 22.985971943887776, 23.94188376753507, 24.897795591182366, 25.85370741482966, 26.809619238476955, 27.76553106212425, 28.721442885771545, 29.677354709418836, 30.63326653306613, 31.589178356713425, 32.54509018036072, 33.501002004008015, 34.45691382765531, 35.412825651302605, 36.3687374749499, 37.324649298597194, 38.28056112224449, 39.236472945891784, 40.192384769539075, 41.14829659318637, 42.104208416833664, 43.06012024048096, 44.016032064128254, 44.97194388777555, 45.92785571142284, 46.88376753507014, 47.83967935871743, 48.79559118236473, 49.75150300601202, 50.70741482965932, 51.66332665330661, 52.61923847695391, 53.5751503006012, 54.5310621242485, 55.48697394789579, 56.44288577154309, 57.39879759519038, 58.35470941883767, 59.31062124248497, 60.26653306613226, 61.22244488977956, 62.17835671342685, 63.13426853707415, 64.09018036072143, 65.04609218436873, 66.00200400801603, 66.95791583166333, 67.91382765531063, 68.86973947895791, 69.82565130260521, 70.78156312625251, 71.7374749498998, 72.69338677354709, 73.64929859719439, 74.60521042084169, 75.56112224448898, 76.51703406813627, 77.47294589178357, 78.42885771543087, 79.38476953907815, 80.34068136272545, 81.29659318637275, 82.25250501002004, 83.20841683366733, 84.16432865731463, 85.12024048096193, 86.07615230460922, 87.03206412825651, 87.9879759519038, 88.9438877755511, 89.8997995991984, 90.85571142284569, 91.81162324649299, 92.76753507014028, 93.72344689378758, 94.67935871743487, 95.63527054108216, 96.59118236472946, 97.54709418837675, 98.50300601202404, 99.45891783567134, 100.41482965931864, 101.37074148296593, 102.32665330661322, 103.28256513026052, 104.23847695390782, 105.1943887775551, 106.1503006012024, 107.1062124248497, 108.062124248497, 109.01803607214428, 109.97394789579158, 110.92985971943888, 111.88577154308618, 112.84168336673346, 113.79759519038076, 114.75350701402806, 115.70941883767534, 116.66533066132264, 117.62124248496994, 118.57715430861724, 119.53306613226452, 120.48897795591182, 121.44488977955912, 122.40080160320642, 123.3567134268537, 124.312625250501, 125.2685370741483, 126.2244488977956, 127.18036072144288, 128.13627254509018, 129.09218436873746, 130.04809619238478, 131.00400801603206, 131.95991983967937, 132.91583166332666, 133.87174348697394, 134.82765531062125, 135.78356713426854, 136.73947895791582, 137.69539078156313, 138.65130260521042, 139.6072144288577, 140.56312625250501, 141.5190380761523, 142.4749498997996, 143.4308617234469, 144.38677354709418, 145.3426853707415, 146.29859719438878, 147.25450901803606, 148.21042084168337, 149.16633266533066, 150.12224448897797, 151.07815631262525, 152.03406813627254, 152.98997995991985, 153.94589178356713, 154.90180360721442, 155.85771543086173, 156.81362725450902, 157.7695390781563, 158.7254509018036, 159.6813627254509, 160.6372745490982, 161.5931863727455, 162.54909819639278, 163.5050100200401, 164.46092184368737, 165.41683366733466, 166.37274549098197, 167.32865731462925, 168.28456913827657, 169.24048096192385, 170.19639278557113, 171.15230460921845, 172.10821643286573, 173.06412825651302, 174.02004008016033, 174.9759519038076, 175.9318637274549, 176.8877755511022, 177.8436873747495, 178.7995991983968, 179.7555110220441, 180.71142284569137, 181.6673346693387, 182.62324649298597, 183.57915831663325, 184.53507014028057, 185.49098196392785, 186.44689378757516, 187.40280561122245, 188.35871743486973, 189.31462925851704, 190.27054108216433, 191.2264529058116, 192.18236472945893, 193.1382765531062, 194.0941883767535, 195.0501002004008, 196.0060120240481, 196.9619238476954, 197.9178356713427, 198.87374749498997, 199.82965931863728, 200.78557114228457, 201.74148296593185, 202.69739478957916, 203.65330661322645, 204.60921843687376, 205.56513026052104, 206.52104208416833, 207.47695390781564, 208.43286573146293, 209.3887775551102, 210.34468937875752, 211.3006012024048, 212.2565130260521, 213.2124248496994, 214.1683366733467, 215.124248496994, 216.08016032064128, 217.03607214428857, 217.99198396793588, 218.94789579158316, 219.90380761523045, 220.85971943887776, 221.81563126252505, 222.77154308617236, 223.72745490981964, 224.68336673346693, 225.63927855711424, 226.59519038076152, 227.5511022044088, 228.50701402805612, 229.4629258517034, 230.4188376753507, 231.374749498998, 232.33066132264528, 233.2865731462926, 234.24248496993988, 235.19839679358716, 236.15430861723448, 237.11022044088176, 238.06613226452905, 239.02204408817636, 239.97795591182364, 240.93386773547095, 241.88977955911824, 242.84569138276552, 243.80160320641284, 244.75751503006012, 245.7134268537074, 246.66933867735472, 247.625250501002, 248.5811623246493, 249.5370741482966, 250.49298597194388, 251.4488977955912, 252.40480961923848, 253.36072144288576, 254.31663326653307, 255.27254509018036, 256.22845691382764, 257.1843687374749, 258.14028056112227, 259.09619238476955, 260.05210420841684, 261.0080160320641, 261.9639278557114, 262.91983967935874, 263.87575150300603, 264.8316633266533, 265.7875751503006, 266.7434869739479, 267.69939879759517, 268.6553106212425, 269.6112224448898, 270.5671342685371, 271.52304609218436, 272.47895791583164, 273.434869739479, 274.39078156312627, 275.34669338677355, 276.30260521042084, 277.2585170340681, 278.2144288577154, 279.17034068136275, 280.12625250501003, 281.0821643286573, 282.0380761523046, 282.9939879759519, 283.9498997995992, 284.9058116232465, 285.8617234468938, 286.8176352705411, 287.77354709418836, 288.72945891783564, 289.685370741483, 290.64128256513027, 291.59719438877755, 292.55310621242484, 293.5090180360721, 294.46492985971946, 295.42084168336675, 296.37675350701403, 297.3326653306613, 298.2885771543086, 299.24448897795594, 300.2004008016032, 301.1563126252505, 302.1122244488978, 303.0681362725451, 304.02404809619236, 304.9799599198397, 305.935871743487, 306.89178356713427, 307.84769539078155, 308.80360721442884, 309.7595190380762, 310.71543086172346, 311.67134268537075, 312.62725450901803, 313.5831663326653, 314.5390781563126, 315.49498997995994, 316.4509018036072, 317.4068136272545, 318.3627254509018, 319.3186372745491, 320.2745490981964, 321.2304609218437, 322.186372745491, 323.14228456913827, 324.09819639278555, 325.0541082164329, 326.0100200400802, 326.96593186372746, 327.92184368737475, 328.87775551102203, 329.8336673346693, 330.78957915831666, 331.74549098196394, 332.7014028056112, 333.6573146292585, 334.6132264529058, 335.56913827655313, 336.5250501002004, 337.4809619238477, 338.436873747495, 339.39278557114227, 340.34869739478955, 341.3046092184369, 342.2605210420842, 343.21643286573146, 344.17234468937875, 345.12825651302603, 346.0841683366734, 347.04008016032066, 347.99599198396794, 348.9519038076152, 349.9078156312625, 350.8637274549098, 351.81963927855713, 352.7755511022044, 353.7314629258517, 354.687374749499, 355.64328657314627, 356.5991983967936, 357.5551102204409, 358.5110220440882, 359.46693386773546, 360.42284569138275, 361.3787575150301, 362.3346693386774, 363.29058116232466, 364.24649298597194, 365.2024048096192, 366.1583166332665, 367.11422845691385, 368.07014028056113, 369.0260521042084, 369.9819639278557, 370.937875751503, 371.8937875751503, 372.8496993987976, 373.8056112224449, 374.7615230460922, 375.71743486973946, 376.67334669338675, 377.6292585170341, 378.5851703406814, 379.54108216432866, 380.49699398797594, 381.4529058116232, 382.40881763527057, 383.36472945891785, 384.32064128256513, 385.2765531062124, 386.2324649298597, 387.188376753507, 388.1442885771543, 389.1002004008016, 390.0561122244489, 391.0120240480962, 391.96793587174346, 392.9238476953908, 393.8797595190381, 394.8356713426854, 395.79158316633266, 396.74749498997994, 397.7034068136273, 398.65931863727457, 399.61523046092185, 400.57114228456913, 401.5270541082164, 402.4829659318637, 403.43887775551104, 404.3947895791583, 405.3507014028056, 406.3066132264529, 407.2625250501002, 408.2184368737475, 409.1743486973948, 410.1302605210421, 411.0861723446894, 412.04208416833666, 412.99799599198394, 413.9539078156313, 414.90981963927857, 415.86573146292585, 416.82164328657313, 417.7775551102204, 418.73346693386776, 419.68937875751504, 420.6452905811623, 421.6012024048096, 422.5571142284569, 423.5130260521042, 424.4689378757515, 425.4248496993988, 426.3807615230461, 427.3366733466934, 428.29258517034066, 429.248496993988, 430.2044088176353, 431.16032064128257, 432.11623246492985, 433.07214428857714, 434.0280561122245, 434.98396793587176, 435.93987975951904, 436.89579158316633, 437.8517034068136, 438.8076152304609, 439.76352705410824, 440.7194388777555, 441.6753507014028, 442.6312625250501, 443.5871743486974, 444.5430861723447, 445.498997995992, 446.4549098196393, 447.41082164328657, 448.36673346693385, 449.32264529058114, 450.2785571142285, 451.23446893787576, 452.19038076152304, 453.14629258517033, 454.1022044088176, 455.05811623246495, 456.01402805611224, 456.9699398797595, 457.9258517034068, 458.8817635270541, 459.8376753507014, 460.7935871743487, 461.749498997996, 462.7054108216433, 463.66132264529057, 464.61723446893785, 465.5731462925852, 466.5290581162325, 467.48496993987976, 468.44088176352705, 469.39679358717433, 470.35270541082167, 471.30861723446895, 472.26452905811624, 473.2204408817635, 474.1763527054108, 475.1322645290581, 476.08817635270543, 477.0440881763527, 478.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_e3db7af034a34495bf3b5379cf6bbec6.x = d3.scale.linear()
              .domain([1.0, 478.0])
              .range([0, 400]);

    color_map_e3db7af034a34495bf3b5379cf6bbec6.legend = L.control({position: 'topright'});
    color_map_e3db7af034a34495bf3b5379cf6bbec6.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_e3db7af034a34495bf3b5379cf6bbec6.legend.addTo(map_d849402633c34caba0e37d5403b720ed);

    color_map_e3db7af034a34495bf3b5379cf6bbec6.xAxis = d3.svg.axis()
        .scale(color_map_e3db7af034a34495bf3b5379cf6bbec6.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 80.5, 160.0, 239.5, 319.0, 398.5, 478.0]);

    color_map_e3db7af034a34495bf3b5379cf6bbec6.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_e3db7af034a34495bf3b5379cf6bbec6.g = color_map_e3db7af034a34495bf3b5379cf6bbec6.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_e3db7af034a34495bf3b5379cf6bbec6.g.selectAll("rect")
        .data(color_map_e3db7af034a34495bf3b5379cf6bbec6.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_e3db7af034a34495bf3b5379cf6bbec6.x(color_map_e3db7af034a34495bf3b5379cf6bbec6.color.domain()[i - 1]) : color_map_e3db7af034a34495bf3b5379cf6bbec6.x.range()[0],
            x1: i < color_map_e3db7af034a34495bf3b5379cf6bbec6.color.domain().length ? color_map_e3db7af034a34495bf3b5379cf6bbec6.x(color_map_e3db7af034a34495bf3b5379cf6bbec6.color.domain()[i]) : color_map_e3db7af034a34495bf3b5379cf6bbec6.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_e3db7af034a34495bf3b5379cf6bbec6.g.call(color_map_e3db7af034a34495bf3b5379cf6bbec6.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('18_50_DAVID MICHAEL DOS SANTOS MIRANDA');

