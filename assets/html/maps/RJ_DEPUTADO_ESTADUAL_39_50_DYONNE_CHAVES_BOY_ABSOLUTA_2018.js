    
            var map_60a17eed162347d2bd456a5ae7672321 = L.map(
                "map_60a17eed162347d2bd456a5ae7672321",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_0078d8e5682343e9a65dd2a41f2c900b = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_60a17eed162347d2bd456a5ae7672321);
        
    
            var choropleth_6ea1f8741f344c78b79557201efa8bad = L.featureGroup(
                {}
            ).addTo(map_60a17eed162347d2bd456a5ae7672321);
        
    
        function geo_json_32bbad41b0b54b1f8cebb0340b5b6463_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 482: case 434: case 428: case 393: case 423: case 431: case 348: case 349: case 342: case 336: case 328: case 460: case 475: case 481: case 479: case 366: case 341: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 448: case 447: case 462: case 468: case 436: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 473: case 455: case 472: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 464: case 470: case 471: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_32bbad41b0b54b1f8cebb0340b5b6463_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_32bbad41b0b54b1f8cebb0340b5b6463 = L.geoJson(null, {
                onEachFeature: geo_json_32bbad41b0b54b1f8cebb0340b5b6463_onEachFeature,
            
                style: geo_json_32bbad41b0b54b1f8cebb0340b5b6463_styler,
        });

        function geo_json_32bbad41b0b54b1f8cebb0340b5b6463_add (data) {
            geo_json_32bbad41b0b54b1f8cebb0340b5b6463
                .addData(data)
                .addTo(choropleth_6ea1f8741f344c78b79557201efa8bad);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_32bbad41b0b54b1f8cebb0340b5b6463_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_0872f5f695c8489bbb4013aeb9a8d8b6 = {};

    
    color_map_0872f5f695c8489bbb4013aeb9a8d8b6.color = d3.scale.threshold()
              .domain([1.0, 2.1803607214428857, 3.3607214428857715, 4.541082164328657, 5.721442885771543, 6.901803607214429, 8.082164328657313, 9.2625250501002, 10.442885771543086, 11.623246492985972, 12.803607214428858, 13.983967935871744, 15.164328657314629, 16.344689378757515, 17.5250501002004, 18.705410821643287, 19.88577154308617, 21.06613226452906, 22.246492985971944, 23.42685370741483, 24.607214428857716, 25.7875751503006, 26.96793587174349, 28.148296593186373, 29.328657314629258, 30.509018036072145, 31.68937875751503, 32.86973947895791, 34.0501002004008, 35.23046092184369, 36.410821643286575, 37.591182364729455, 38.77154308617234, 39.95190380761523, 41.13226452905812, 42.312625250501, 43.49298597194389, 44.673346693386776, 45.85370741482966, 47.034068136272545, 48.21442885771543, 49.394789579158314, 50.5751503006012, 51.75551102204409, 52.93587174348698, 54.11623246492986, 55.296593186372746, 56.476953907815634, 57.657314629258515, 58.8376753507014, 60.01803607214429, 61.19839679358717, 62.37875751503006, 63.55911823647295, 64.73947895791582, 65.91983967935872, 67.1002004008016, 68.28056112224449, 69.46092184368737, 70.64128256513025, 71.82164328657315, 73.00200400801603, 74.18236472945891, 75.3627254509018, 76.54308617234469, 77.72344689378758, 78.90380761523046, 80.08416833667334, 81.26452905811624, 82.44488977955912, 83.625250501002, 84.8056112224449, 85.98597194388778, 87.16633266533066, 88.34669338677355, 89.52705410821643, 90.70741482965931, 91.88777555110221, 93.06813627254509, 94.24849699398797, 95.42885771543087, 96.60921843687375, 97.78957915831663, 98.96993987975952, 100.1503006012024, 101.33066132264528, 102.51102204408818, 103.69138276553106, 104.87174348697395, 106.05210420841684, 107.23246492985972, 108.41282565130261, 109.59318637274549, 110.77354709418837, 111.95390781563127, 113.13426853707415, 114.31462925851703, 115.49498997995993, 116.6753507014028, 117.85571142284569, 119.03607214428858, 120.21643286573146, 121.39679358717434, 122.57715430861724, 123.75751503006012, 124.937875751503, 126.1182364729459, 127.29859719438878, 128.47895791583164, 129.65931863727454, 130.83967935871743, 132.02004008016033, 133.2004008016032, 134.3807615230461, 135.56112224448898, 136.74148296593185, 137.92184368737475, 139.10220440881764, 140.2825651302605, 141.4629258517034, 142.6432865731463, 143.82364729458916, 145.00400801603206, 146.18436873747495, 147.36472945891782, 148.54509018036072, 149.7254509018036, 150.9058116232465, 152.08617234468937, 153.26653306613227, 154.44689378757516, 155.62725450901803, 156.80761523046093, 157.98797595190382, 159.1683366733467, 160.34869739478958, 161.52905811623248, 162.70941883767534, 163.88977955911824, 165.07014028056113, 166.250501002004, 167.4308617234469, 168.6112224448898, 169.79158316633266, 170.97194388777555, 172.15230460921845, 173.3326653306613, 174.5130260521042, 175.6933867735471, 176.87374749498997, 178.05410821643287, 179.23446893787576, 180.41482965931863, 181.59519038076152, 182.77555110220442, 183.95591182364728, 185.13627254509018, 186.31663326653307, 187.49699398797594, 188.67735470941884, 189.85771543086173, 191.0380761523046, 192.2184368737475, 193.3987975951904, 194.57915831663325, 195.75951903807615, 196.93987975951904, 198.1202404809619, 199.3006012024048, 200.4809619238477, 201.66132264529057, 202.84168336673346, 204.02204408817636, 205.20240480961922, 206.38276553106212, 207.56312625250501, 208.7434869739479, 209.92384769539078, 211.10420841683367, 212.28456913827657, 213.46492985971943, 214.64529058116233, 215.82565130260522, 217.0060120240481, 218.18637274549098, 219.36673346693388, 220.54709418837675, 221.72745490981964, 222.90781563126254, 224.0881763527054, 225.2685370741483, 226.4488977955912, 227.62925851703406, 228.80961923847696, 229.98997995991985, 231.17034068136272, 232.3507014028056, 233.5310621242485, 234.71142284569137, 235.89178356713427, 237.07214428857716, 238.25250501002003, 239.43286573146293, 240.61322645290582, 241.7935871743487, 242.97394789579158, 244.15430861723448, 245.33466933867734, 246.51503006012024, 247.69539078156313, 248.875751503006, 250.0561122244489, 251.2364729458918, 252.41683366733466, 253.59719438877755, 254.77755511022045, 255.9579158316633, 257.1382765531062, 258.3186372745491, 259.498997995992, 260.67935871743487, 261.85971943887773, 263.04008016032066, 264.2204408817635, 265.4008016032064, 266.5811623246493, 267.7615230460922, 268.94188376753505, 270.12224448897797, 271.30260521042084, 272.4829659318637, 273.6633266533066, 274.8436873747495, 276.02404809619236, 277.2044088176353, 278.38476953907815, 279.565130260521, 280.74549098196394, 281.9258517034068, 283.1062124248497, 284.2865731462926, 285.46693386773546, 286.64729458917833, 287.82765531062125, 289.0080160320641, 290.188376753507, 291.3687374749499, 292.5490981963928, 293.72945891783564, 294.90981963927857, 296.09018036072143, 297.27054108216436, 298.4509018036072, 299.6312625250501, 300.811623246493, 301.9919839679359, 303.17234468937875, 304.35270541082167, 305.53306613226454, 306.7134268537074, 307.8937875751503, 309.0741482965932, 310.25450901803606, 311.434869739479, 312.61523046092185, 313.7955911823647, 314.97595190380764, 316.1563126252505, 317.3366733466934, 318.5170340681363, 319.69739478957916, 320.87775551102203, 322.05811623246495, 323.2384769539078, 324.4188376753507, 325.5991983967936, 326.7795591182365, 327.95991983967934, 329.14028056112227, 330.32064128256513, 331.501002004008, 332.6813627254509, 333.8617234468938, 335.04208416833666, 336.2224448897796, 337.40280561122245, 338.5831663326653, 339.76352705410824, 340.9438877755511, 342.12424849699397, 343.3046092184369, 344.48496993987976, 345.6653306613226, 346.84569138276555, 348.0260521042084, 349.2064128256513, 350.3867735470942, 351.5671342685371, 352.74749498997994, 353.92785571142286, 355.10821643286573, 356.2885771543086, 357.4689378757515, 358.6492985971944, 359.82965931863725, 361.0100200400802, 362.19038076152304, 363.3707414829659, 364.55110220440883, 365.7314629258517, 366.91182364729457, 368.0921843687375, 369.27254509018036, 370.4529058116232, 371.63326653306615, 372.813627254509, 373.9939879759519, 375.1743486973948, 376.3547094188377, 377.53507014028054, 378.71543086172346, 379.89579158316633, 381.0761523046092, 382.2565130260521, 383.436873747495, 384.61723446893785, 385.7975951903808, 386.97795591182364, 388.1583166332665, 389.33867735470943, 390.5190380761523, 391.69939879759517, 392.8797595190381, 394.06012024048096, 395.2404809619238, 396.42084168336675, 397.6012024048096, 398.7815631262525, 399.9619238476954, 401.14228456913827, 402.32264529058114, 403.50300601202406, 404.6833667334669, 405.8637274549098, 407.0440881763527, 408.2244488977956, 409.40480961923845, 410.5851703406814, 411.76553106212424, 412.9458917835671, 414.12625250501003, 415.3066132264529, 416.4869739478958, 417.6673346693387, 418.84769539078155, 420.0280561122245, 421.20841683366734, 422.3887775551102, 423.56913827655313, 424.749498997996, 425.92985971943887, 427.1102204408818, 428.29058116232466, 429.4709418837675, 430.65130260521045, 431.8316633266533, 433.0120240480962, 434.1923847695391, 435.37274549098197, 436.55310621242484, 437.73346693386776, 438.9138276553106, 440.0941883767535, 441.2745490981964, 442.4549098196393, 443.63527054108215, 444.8156312625251, 445.99599198396794, 447.1763527054108, 448.35671342685373, 449.5370741482966, 450.71743486973946, 451.8977955911824, 453.07815631262525, 454.2585170340681, 455.43887775551104, 456.6192384769539, 457.7995991983968, 458.9799599198397, 460.16032064128257, 461.34068136272543, 462.52104208416836, 463.7014028056112, 464.8817635270541, 466.062124248497, 467.2424849699399, 468.42284569138275, 469.60320641282567, 470.78356713426854, 471.9639278557114, 473.1442885771543, 474.3246492985972, 475.50501002004006, 476.685370741483, 477.86573146292585, 479.0460921843687, 480.22645290581164, 481.4068136272545, 482.5871743486974, 483.7675350701403, 484.94789579158316, 486.12825651302603, 487.30861723446895, 488.4889779559118, 489.6693386773547, 490.8496993987976, 492.0300601202405, 493.21042084168334, 494.39078156312627, 495.57114228456913, 496.751503006012, 497.9318637274549, 499.1122244488978, 500.29258517034066, 501.4729458917836, 502.65330661322645, 503.8336673346693, 505.01402805611224, 506.1943887775551, 507.37474949899797, 508.5551102204409, 509.73547094188376, 510.9158316633266, 512.0961923847696, 513.2765531062124, 514.4569138276553, 515.6372745490982, 516.8176352705411, 517.997995991984, 519.1783567134269, 520.3587174348697, 521.5390781563126, 522.7194388777555, 523.8997995991984, 525.0801603206413, 526.2605210420842, 527.440881763527, 528.6212424849699, 529.8016032064128, 530.9819639278558, 532.1623246492986, 533.3426853707415, 534.5230460921844, 535.7034068136272, 536.8837675350701, 538.0641282565131, 539.2444889779559, 540.4248496993988, 541.6052104208417, 542.7855711422845, 543.9659318637274, 545.1462925851704, 546.3266533066133, 547.5070140280561, 548.687374749499, 549.8677354709419, 551.0480961923847, 552.2284569138277, 553.4088176352706, 554.5891783567134, 555.7695390781563, 556.9498997995992, 558.130260521042, 559.310621242485, 560.4909819639279, 561.6713426853707, 562.8517034068136, 564.0320641282565, 565.2124248496993, 566.3927855711423, 567.5731462925852, 568.7535070140281, 569.9338677354709, 571.1142284569138, 572.2945891783567, 573.4749498997996, 574.6553106212425, 575.8356713426854, 577.0160320641282, 578.1963927855711, 579.376753507014, 580.557114228457, 581.7374749498998, 582.9178356713427, 584.0981963927856, 585.2785571142284, 586.4589178356713, 587.6392785571143, 588.8196392785571, 590.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_0872f5f695c8489bbb4013aeb9a8d8b6.x = d3.scale.linear()
              .domain([1.0, 590.0])
              .range([0, 400]);

    color_map_0872f5f695c8489bbb4013aeb9a8d8b6.legend = L.control({position: 'topright'});
    color_map_0872f5f695c8489bbb4013aeb9a8d8b6.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_0872f5f695c8489bbb4013aeb9a8d8b6.legend.addTo(map_60a17eed162347d2bd456a5ae7672321);

    color_map_0872f5f695c8489bbb4013aeb9a8d8b6.xAxis = d3.svg.axis()
        .scale(color_map_0872f5f695c8489bbb4013aeb9a8d8b6.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 99.16666666666667, 197.33333333333334, 295.5, 393.6666666666667, 491.83333333333337, 590.0]);

    color_map_0872f5f695c8489bbb4013aeb9a8d8b6.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_0872f5f695c8489bbb4013aeb9a8d8b6.g = color_map_0872f5f695c8489bbb4013aeb9a8d8b6.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_0872f5f695c8489bbb4013aeb9a8d8b6.g.selectAll("rect")
        .data(color_map_0872f5f695c8489bbb4013aeb9a8d8b6.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_0872f5f695c8489bbb4013aeb9a8d8b6.x(color_map_0872f5f695c8489bbb4013aeb9a8d8b6.color.domain()[i - 1]) : color_map_0872f5f695c8489bbb4013aeb9a8d8b6.x.range()[0],
            x1: i < color_map_0872f5f695c8489bbb4013aeb9a8d8b6.color.domain().length ? color_map_0872f5f695c8489bbb4013aeb9a8d8b6.x(color_map_0872f5f695c8489bbb4013aeb9a8d8b6.color.domain()[i]) : color_map_0872f5f695c8489bbb4013aeb9a8d8b6.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_0872f5f695c8489bbb4013aeb9a8d8b6.g.call(color_map_0872f5f695c8489bbb4013aeb9a8d8b6.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('39_50_DYONNE CHAVES BOY');

