    
            var map_b2f55c2be82542fd94aee028f8f81b32 = L.map(
                "map_b2f55c2be82542fd94aee028f8f81b32",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_2521db43df6547d38fff41161b4af6e2 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_b2f55c2be82542fd94aee028f8f81b32);
        
    
            var choropleth_c195cfbe11ec4b779c84f90063cd44ac = L.featureGroup(
                {}
            ).addTo(map_b2f55c2be82542fd94aee028f8f81b32);
        
    
        function geo_json_ac199bcaa17f46a687c3dd5d16fec065_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 431: case 349: case 342: case 336: case 460: case 481: case 479: case 391: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 440: case 448: case 447: case 462: case 473: case 468: case 464: case 470: case 436: case 446: case 444: case 416: case 419: case 430: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 455: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 472: case 381: case 471: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_ac199bcaa17f46a687c3dd5d16fec065_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_ac199bcaa17f46a687c3dd5d16fec065 = L.geoJson(null, {
                onEachFeature: geo_json_ac199bcaa17f46a687c3dd5d16fec065_onEachFeature,
            
                style: geo_json_ac199bcaa17f46a687c3dd5d16fec065_styler,
        });

        function geo_json_ac199bcaa17f46a687c3dd5d16fec065_add (data) {
            geo_json_ac199bcaa17f46a687c3dd5d16fec065
                .addData(data)
                .addTo(choropleth_c195cfbe11ec4b779c84f90063cd44ac);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_ac199bcaa17f46a687c3dd5d16fec065_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_feaba17476f1412b925eaae44dee91cd = {};

    
    color_map_feaba17476f1412b925eaae44dee91cd.color = d3.scale.threshold()
              .domain([1.0, 2.032064128256513, 3.064128256513026, 4.096192384769539, 5.128256513026052, 6.160320641282565, 7.192384769539078, 8.224448897795591, 9.256513026052104, 10.288577154308618, 11.32064128256513, 12.352705410821644, 13.384769539078157, 14.41683366733467, 15.448897795591183, 16.480961923847694, 17.51302605210421, 18.54509018036072, 19.577154308617235, 20.609218436873746, 21.64128256513026, 22.673346693386772, 23.705410821643287, 24.7374749498998, 25.769539078156313, 26.801603206412825, 27.83366733466934, 28.86573146292585, 29.897795591182366, 30.929859719438877, 31.96192384769539, 32.9939879759519, 34.02605210420842, 35.05811623246493, 36.09018036072144, 37.122244488977955, 38.15430861723447, 39.186372745490985, 40.21843687374749, 41.25050100200401, 42.28256513026052, 43.31462925851704, 44.346693386773545, 45.37875751503006, 46.410821643286575, 47.44288577154309, 48.4749498997996, 49.50701402805611, 50.53907815631263, 51.57114228456914, 52.60320641282565, 53.635270541082164, 54.66733466933868, 55.699398797595194, 56.7314629258517, 57.763527054108216, 58.79559118236473, 59.82765531062124, 60.859719438877754, 61.89178356713427, 62.92384769539078, 63.95591182364729, 64.9879759519038, 66.02004008016031, 67.05210420841684, 68.08416833667334, 69.11623246492987, 70.14829659318637, 71.18036072144288, 72.2124248496994, 73.24448897795591, 74.27655310621242, 75.30861723446894, 76.34068136272545, 77.37274549098197, 78.40480961923848, 79.43687374749499, 80.46893787575151, 81.50100200400801, 82.53306613226452, 83.56513026052104, 84.59719438877755, 85.62925851703407, 86.66132264529058, 87.69338677354709, 88.72545090180361, 89.75751503006012, 90.78957915831663, 91.82164328657315, 92.85370741482966, 93.88577154308618, 94.91783567134269, 95.9498997995992, 96.98196392785572, 98.01402805611222, 99.04609218436873, 100.07815631262525, 101.11022044088176, 102.14228456913828, 103.17434869739479, 104.2064128256513, 105.23847695390782, 106.27054108216433, 107.30260521042084, 108.33466933867736, 109.36673346693387, 110.39879759519039, 111.4308617234469, 112.4629258517034, 113.49498997995993, 114.52705410821643, 115.55911823647294, 116.59118236472946, 117.62324649298597, 118.65531062124248, 119.687374749499, 120.71943887775551, 121.75150300601203, 122.78356713426854, 123.81563126252505, 124.84769539078157, 125.87975951903807, 126.91182364729458, 127.9438877755511, 128.9759519038076, 130.00801603206412, 131.04008016032063, 132.07214428857716, 133.10420841683367, 134.13627254509018, 135.1683366733467, 136.2004008016032, 137.23246492985973, 138.26452905811624, 139.29659318637275, 140.32865731462925, 141.36072144288576, 142.3927855711423, 143.4248496993988, 144.4569138276553, 145.48897795591182, 146.52104208416833, 147.55310621242484, 148.58517034068137, 149.61723446893788, 150.6492985971944, 151.6813627254509, 152.7134268537074, 153.74549098196394, 154.77755511022045, 155.80961923847696, 156.84168336673346, 157.87374749498997, 158.9058116232465, 159.93787575150301, 160.96993987975952, 162.00200400801603, 163.03406813627254, 164.06613226452905, 165.09819639278558, 166.1302605210421, 167.1623246492986, 168.1943887775551, 169.2264529058116, 170.25851703406815, 171.29058116232466, 172.32264529058116, 173.35470941883767, 174.38677354709418, 175.4188376753507, 176.45090180360722, 177.48296593186373, 178.51503006012024, 179.54709418837675, 180.57915831663325, 181.6112224448898, 182.6432865731463, 183.6753507014028, 184.7074148296593, 185.73947895791582, 186.77154308617236, 187.80360721442887, 188.83567134268537, 189.86773547094188, 190.8997995991984, 191.9318637274549, 192.96392785571143, 193.99599198396794, 195.02805611222445, 196.06012024048096, 197.09218436873746, 198.124248496994, 199.1563126252505, 200.18837675350701, 201.22044088176352, 202.25250501002003, 203.28456913827657, 204.31663326653307, 205.34869739478958, 206.3807615230461, 207.4128256513026, 208.4448897795591, 209.47695390781564, 210.50901803607215, 211.54108216432866, 212.57314629258516, 213.60521042084167, 214.6372745490982, 215.66933867735472, 216.70140280561122, 217.73346693386773, 218.76553106212424, 219.79759519038078, 220.82965931863728, 221.8617234468938, 222.8937875751503, 223.9258517034068, 224.9579158316633, 225.98997995991985, 227.02204408817636, 228.05410821643287, 229.08617234468937, 230.11823647294588, 231.15030060120242, 232.18236472945893, 233.21442885771543, 234.24649298597194, 235.27855711422845, 236.31062124248496, 237.3426853707415, 238.374749498998, 239.4068136272545, 240.43887775551102, 241.47094188376752, 242.50300601202406, 243.53507014028057, 244.56713426853707, 245.59919839679358, 246.6312625250501, 247.66332665330663, 248.69539078156313, 249.72745490981964, 250.75951903807615, 251.79158316633266, 252.82364729458916, 253.8557114228457, 254.8877755511022, 255.91983967935872, 256.9519038076152, 257.98396793587176, 259.01603206412824, 260.0480961923848, 261.08016032064126, 262.1122244488978, 263.1442885771543, 264.1763527054108, 265.20841683366734, 266.2404809619238, 267.27254509018036, 268.3046092184369, 269.3366733466934, 270.3687374749499, 271.4008016032064, 272.4328657314629, 273.46492985971946, 274.49699398797594, 275.5290581162325, 276.56112224448896, 277.5931863727455, 278.62525050100203, 279.6573146292585, 280.68937875751504, 281.7214428857715, 282.75350701402806, 283.7855711422846, 284.8176352705411, 285.8496993987976, 286.8817635270541, 287.9138276553106, 288.9458917835671, 289.97795591182364, 291.0100200400802, 292.04208416833666, 293.0741482965932, 294.1062124248497, 295.1382765531062, 296.17034068136275, 297.2024048096192, 298.23446893787576, 299.26653306613224, 300.2985971943888, 301.3306613226453, 302.3627254509018, 303.3947895791583, 304.4268537074148, 305.45891783567134, 306.4909819639279, 307.52304609218436, 308.5551102204409, 309.5871743486974, 310.6192384769539, 311.65130260521045, 312.6833667334669, 313.71543086172346, 314.74749498997994, 315.7795591182365, 316.811623246493, 317.8436873747495, 318.87575150300603, 319.9078156312625, 320.93987975951904, 321.9719438877755, 323.00400801603206, 324.0360721442886, 325.0681362725451, 326.1002004008016, 327.1322645290581, 328.1643286573146, 329.19639278557116, 330.22845691382764, 331.2605210420842, 332.29258517034066, 333.3246492985972, 334.35671342685373, 335.3887775551102, 336.42084168336675, 337.4529058116232, 338.48496993987976, 339.5170340681363, 340.5490981963928, 341.5811623246493, 342.6132264529058, 343.6452905811623, 344.67735470941886, 345.70941883767534, 346.7414829659319, 347.77354709418836, 348.8056112224449, 349.8376753507014, 350.8697394789579, 351.90180360721445, 352.9338677354709, 353.96593186372746, 354.99799599198394, 356.0300601202405, 357.062124248497, 358.0941883767535, 359.12625250501003, 360.1583166332665, 361.19038076152304, 362.2224448897796, 363.25450901803606, 364.2865731462926, 365.3186372745491, 366.3507014028056, 367.38276553106215, 368.4148296593186, 369.44689378757516, 370.47895791583164, 371.5110220440882, 372.5430861723447, 373.5751503006012, 374.60721442885773, 375.6392785571142, 376.67134268537075, 377.7034068136273, 378.73547094188376, 379.7675350701403, 380.7995991983968, 381.8316633266533, 382.8637274549098, 383.89579158316633, 384.92785571142286, 385.95991983967934, 386.9919839679359, 388.02404809619236, 389.0561122244489, 390.08817635270543, 391.1202404809619, 392.15230460921845, 393.1843687374749, 394.21643286573146, 395.248496993988, 396.2805611222445, 397.312625250501, 398.3446893787575, 399.37675350701403, 400.40881763527057, 401.44088176352705, 402.4729458917836, 403.50501002004006, 404.5370741482966, 405.56913827655313, 406.6012024048096, 407.63326653306615, 408.6653306613226, 409.69739478957916, 410.72945891783564, 411.7615230460922, 412.7935871743487, 413.8256513026052, 414.85771543086173, 415.8897795591182, 416.92184368737475, 417.9539078156313, 418.98597194388776, 420.0180360721443, 421.0501002004008, 422.0821643286573, 423.11422845691385, 424.14629258517033, 425.17835671342687, 426.21042084168334, 427.2424849699399, 428.2745490981964, 429.3066132264529, 430.33867735470943, 431.3707414829659, 432.40280561122245, 433.434869739479, 434.46693386773546, 435.498997995992, 436.5310621242485, 437.563126252505, 438.59519038076155, 439.62725450901803, 440.65931863727457, 441.69138276553105, 442.7234468937876, 443.75551102204406, 444.7875751503006, 445.81963927855713, 446.8517034068136, 447.88376753507015, 448.9158316633266, 449.94789579158316, 450.9799599198397, 452.0120240480962, 453.0440881763527, 454.0761523046092, 455.10821643286573, 456.14028056112227, 457.17234468937875, 458.2044088176353, 459.23647294589176, 460.2685370741483, 461.30060120240483, 462.3326653306613, 463.36472945891785, 464.39679358717433, 465.42885771543087, 466.4609218436874, 467.4929859719439, 468.5250501002004, 469.5571142284569, 470.58917835671343, 471.6212424849699, 472.65330661322645, 473.685370741483, 474.71743486973946, 475.749498997996, 476.7815631262525, 477.813627254509, 478.84569138276555, 479.87775551102203, 480.90981963927857, 481.94188376753505, 482.9739478957916, 484.0060120240481, 485.0380761523046, 486.07014028056113, 487.1022044088176, 488.13426853707415, 489.1663326653307, 490.19839679358716, 491.2304609218437, 492.2625250501002, 493.2945891783567, 494.32665330661325, 495.35871743486973, 496.39078156312627, 497.42284569138275, 498.4549098196393, 499.4869739478958, 500.5190380761523, 501.55110220440883, 502.5831663326653, 503.61523046092185, 504.64729458917833, 505.67935871743487, 506.7114228456914, 507.7434869739479, 508.7755511022044, 509.8076152304609, 510.83967935871743, 511.87174348697397, 512.9038076152304, 513.9358717434869, 514.9679358717435, 516.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_feaba17476f1412b925eaae44dee91cd.x = d3.scale.linear()
              .domain([1.0, 516.0])
              .range([0, 400]);

    color_map_feaba17476f1412b925eaae44dee91cd.legend = L.control({position: 'topright'});
    color_map_feaba17476f1412b925eaae44dee91cd.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_feaba17476f1412b925eaae44dee91cd.legend.addTo(map_b2f55c2be82542fd94aee028f8f81b32);

    color_map_feaba17476f1412b925eaae44dee91cd.xAxis = d3.svg.axis()
        .scale(color_map_feaba17476f1412b925eaae44dee91cd.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 86.83333333333333, 172.66666666666666, 258.5, 344.3333333333333, 430.16666666666663, 516.0]);

    color_map_feaba17476f1412b925eaae44dee91cd.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_feaba17476f1412b925eaae44dee91cd.g = color_map_feaba17476f1412b925eaae44dee91cd.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_feaba17476f1412b925eaae44dee91cd.g.selectAll("rect")
        .data(color_map_feaba17476f1412b925eaae44dee91cd.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_feaba17476f1412b925eaae44dee91cd.x(color_map_feaba17476f1412b925eaae44dee91cd.color.domain()[i - 1]) : color_map_feaba17476f1412b925eaae44dee91cd.x.range()[0],
            x1: i < color_map_feaba17476f1412b925eaae44dee91cd.color.domain().length ? color_map_feaba17476f1412b925eaae44dee91cd.x(color_map_feaba17476f1412b925eaae44dee91cd.color.domain()[i]) : color_map_feaba17476f1412b925eaae44dee91cd.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_feaba17476f1412b925eaae44dee91cd.g.call(color_map_feaba17476f1412b925eaae44dee91cd.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('19_50_MONICA SUZANA DA SILVA CUNHA');

