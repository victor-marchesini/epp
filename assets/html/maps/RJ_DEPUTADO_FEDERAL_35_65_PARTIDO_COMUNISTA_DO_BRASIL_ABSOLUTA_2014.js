    
            var map_92da7aa6946347098baa1da93c93fe1c = L.map(
                "map_92da7aa6946347098baa1da93c93fe1c",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_3fad1745ec5941d3a2917af3f203ca47 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_92da7aa6946347098baa1da93c93fe1c);
        
    
            var choropleth_decd810cd4204b84ac6fe70f653e68f5 = L.featureGroup(
                {}
            ).addTo(map_92da7aa6946347098baa1da93c93fe1c);
        
    
        function geo_json_f6bb59a72a98477aaeccef7a6c17cef6_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 434: case 428: case 325: case 448: case 438: case 464: case 353: case 426: case 423: case 431: case 404: case 349: case 342: case 336: case 460: case 475: case 357: case 481: case 479: case 391: case 465: case 451: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_f6bb59a72a98477aaeccef7a6c17cef6_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_f6bb59a72a98477aaeccef7a6c17cef6 = L.geoJson(null, {
                onEachFeature: geo_json_f6bb59a72a98477aaeccef7a6c17cef6_onEachFeature,
            
                style: geo_json_f6bb59a72a98477aaeccef7a6c17cef6_styler,
        });

        function geo_json_f6bb59a72a98477aaeccef7a6c17cef6_add (data) {
            geo_json_f6bb59a72a98477aaeccef7a6c17cef6
                .addData(data)
                .addTo(choropleth_decd810cd4204b84ac6fe70f653e68f5);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_f6bb59a72a98477aaeccef7a6c17cef6_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_e1ff2d7047ea4843ba3438f284467c8a = {};

    
    color_map_e1ff2d7047ea4843ba3438f284467c8a.color = d3.scale.threshold()
              .domain([0.0, 1.0260521042084167, 2.0521042084168335, 3.0781563126252505, 4.104208416833667, 5.130260521042084, 6.156312625250501, 7.182364729458918, 8.208416833667334, 9.234468937875752, 10.260521042084168, 11.286573146292586, 12.312625250501002, 13.338677354709418, 14.364729458917836, 15.390781563126252, 16.416833667334668, 17.442885771543086, 18.468937875751504, 19.49498997995992, 20.521042084168336, 21.547094188376754, 22.57314629258517, 23.599198396793586, 24.625250501002004, 25.65130260521042, 26.677354709418836, 27.703406813627254, 28.72945891783567, 29.75551102204409, 30.781563126252504, 31.80761523046092, 32.833667334669336, 33.859719438877754, 34.88577154308617, 35.91182364729459, 36.93787575150301, 37.963927855711425, 38.98997995991984, 40.016032064128254, 41.04208416833667, 42.06813627254509, 43.09418837675351, 44.120240480961925, 45.14629258517034, 46.17234468937876, 47.19839679358717, 48.22444889779559, 49.25050100200401, 50.276553106212425, 51.30260521042084, 52.32865731462926, 53.35470941883767, 54.38076152304609, 55.40681362725451, 56.432865731462925, 57.45891783567134, 58.48496993987976, 59.51102204408818, 60.53707414829659, 61.56312625250501, 62.589178356713425, 63.61523046092184, 64.64128256513025, 65.66733466933867, 66.69338677354709, 67.71943887775551, 68.74549098196393, 69.77154308617234, 70.79759519038076, 71.82364729458918, 72.8496993987976, 73.87575150300601, 74.90180360721443, 75.92785571142285, 76.95390781563127, 77.97995991983969, 79.00601202404809, 80.03206412825651, 81.05811623246493, 82.08416833667334, 83.11022044088176, 84.13627254509018, 85.1623246492986, 86.18837675350701, 87.21442885771543, 88.24048096192385, 89.26653306613227, 90.29258517034069, 91.3186372745491, 92.34468937875752, 93.37074148296593, 94.39679358717434, 95.42284569138276, 96.44889779559118, 97.4749498997996, 98.50100200400801, 99.52705410821643, 100.55310621242485, 101.57915831663327, 102.60521042084169, 103.6312625250501, 104.65731462925852, 105.68336673346694, 106.70941883767534, 107.73547094188376, 108.76152304609218, 109.7875751503006, 110.81362725450902, 111.83967935871743, 112.86573146292585, 113.89178356713427, 114.91783567134269, 115.9438877755511, 116.96993987975952, 117.99599198396794, 119.02204408817636, 120.04809619238478, 121.07414829659318, 122.1002004008016, 123.12625250501002, 124.15230460921843, 125.17835671342685, 126.20440881763527, 127.23046092184369, 128.2565130260521, 129.2825651302605, 130.30861723446893, 131.33466933867734, 132.36072144288576, 133.38677354709418, 134.4128256513026, 135.43887775551102, 136.46492985971943, 137.49098196392785, 138.51703406813627, 139.5430861723447, 140.5691382765531, 141.59519038076152, 142.62124248496994, 143.64729458917836, 144.67334669338678, 145.6993987975952, 146.7254509018036, 147.75150300601203, 148.77755511022045, 149.80360721442887, 150.82965931863728, 151.8557114228457, 152.88176352705412, 153.90781563126254, 154.93386773547095, 155.95991983967937, 156.98597194388776, 158.01202404809618, 159.0380761523046, 160.06412825651302, 161.09018036072143, 162.11623246492985, 163.14228456913827, 164.1683366733467, 165.1943887775551, 166.22044088176352, 167.24649298597194, 168.27254509018036, 169.29859719438878, 170.3246492985972, 171.3507014028056, 172.37675350701403, 173.40280561122245, 174.42885771543087, 175.45490981963928, 176.4809619238477, 177.50701402805612, 178.53306613226454, 179.55911823647295, 180.58517034068137, 181.6112224448898, 182.6372745490982, 183.66332665330663, 184.68937875751504, 185.71543086172343, 186.74148296593185, 187.76753507014027, 188.7935871743487, 189.8196392785571, 190.84569138276552, 191.87174348697394, 192.89779559118236, 193.92384769539078, 194.9498997995992, 195.9759519038076, 197.00200400801603, 198.02805611222445, 199.05410821643287, 200.08016032064128, 201.1062124248497, 202.13226452905812, 203.15831663326654, 204.18436873747495, 205.21042084168337, 206.2364729458918, 207.2625250501002, 208.28857715430863, 209.31462925851704, 210.34068136272546, 211.36673346693388, 212.3927855711423, 213.4188376753507, 214.4448897795591, 215.47094188376752, 216.49699398797594, 217.52304609218436, 218.54909819639278, 219.5751503006012, 220.6012024048096, 221.62725450901803, 222.65330661322645, 223.67935871743487, 224.70541082164328, 225.7314629258517, 226.75751503006012, 227.78356713426854, 228.80961923847696, 229.83567134268537, 230.8617234468938, 231.8877755511022, 232.91382765531063, 233.93987975951904, 234.96593186372746, 235.99198396793588, 237.0180360721443, 238.04408817635272, 239.07014028056113, 240.09619238476955, 241.12224448897797, 242.14829659318636, 243.17434869739478, 244.2004008016032, 245.2264529058116, 246.25250501002003, 247.27855711422845, 248.30460921843687, 249.33066132264528, 250.3567134268537, 251.38276553106212, 252.40881763527054, 253.43486973947896, 254.46092184368737, 255.4869739478958, 256.5130260521042, 257.5390781563126, 258.565130260521, 259.59118236472943, 260.61723446893785, 261.64328657314627, 262.6693386773547, 263.6953907815631, 264.7214428857715, 265.74749498997994, 266.77354709418836, 267.7995991983968, 268.8256513026052, 269.8517034068136, 270.87775551102203, 271.90380761523045, 272.92985971943887, 273.9559118236473, 274.9819639278557, 276.0080160320641, 277.03406813627254, 278.06012024048096, 279.0861723446894, 280.1122244488978, 281.1382765531062, 282.1643286573146, 283.19038076152304, 284.21643286573146, 285.2424849699399, 286.2685370741483, 287.2945891783567, 288.32064128256513, 289.34669338677355, 290.37274549098197, 291.3987975951904, 292.4248496993988, 293.4509018036072, 294.47695390781564, 295.50300601202406, 296.5290581162325, 297.5551102204409, 298.5811623246493, 299.60721442885773, 300.63326653306615, 301.65931863727457, 302.685370741483, 303.7114228456914, 304.7374749498998, 305.76352705410824, 306.78957915831666, 307.8156312625251, 308.8416833667335, 309.8677354709419, 310.8937875751503, 311.91983967935874, 312.9458917835671, 313.9719438877755, 314.99799599198394, 316.02404809619236, 317.0501002004008, 318.0761523046092, 319.1022044088176, 320.12825651302603, 321.15430861723445, 322.18036072144287, 323.2064128256513, 324.2324649298597, 325.2585170340681, 326.28456913827654, 327.31062124248496, 328.3366733466934, 329.3627254509018, 330.3887775551102, 331.4148296593186, 332.44088176352705, 333.46693386773546, 334.4929859719439, 335.5190380761523, 336.5450901803607, 337.57114228456913, 338.59719438877755, 339.62324649298597, 340.6492985971944, 341.6753507014028, 342.7014028056112, 343.72745490981964, 344.75350701402806, 345.7795591182365, 346.8056112224449, 347.8316633266533, 348.85771543086173, 349.88376753507015, 350.90981963927857, 351.935871743487, 352.9619238476954, 353.9879759519038, 355.01402805611224, 356.04008016032066, 357.0661322645291, 358.0921843687375, 359.1182364729459, 360.1442885771543, 361.17034068136275, 362.19639278557116, 363.2224448897796, 364.248496993988, 365.2745490981964, 366.30060120240483, 367.32665330661325, 368.35270541082167, 369.3787575150301, 370.40480961923845, 371.43086172344687, 372.4569138276553, 373.4829659318637, 374.5090180360721, 375.53507014028054, 376.56112224448896, 377.5871743486974, 378.6132264529058, 379.6392785571142, 380.6653306613226, 381.69138276553105, 382.71743486973946, 383.7434869739479, 384.7695390781563, 385.7955911823647, 386.82164328657313, 387.84769539078155, 388.87374749498997, 389.8997995991984, 390.9258517034068, 391.9519038076152, 392.97795591182364, 394.00400801603206, 395.0300601202405, 396.0561122244489, 397.0821643286573, 398.10821643286573, 399.13426853707415, 400.16032064128257, 401.186372745491, 402.2124248496994, 403.2384769539078, 404.26452905811624, 405.29058116232466, 406.3166332665331, 407.3426853707415, 408.3687374749499, 409.3947895791583, 410.42084168336675, 411.44689378757516, 412.4729458917836, 413.498997995992, 414.5250501002004, 415.55110220440883, 416.57715430861725, 417.60320641282567, 418.6292585170341, 419.6553106212425, 420.6813627254509, 421.70741482965934, 422.73346693386776, 423.7595190380762, 424.7855711422846, 425.811623246493, 426.8376753507014, 427.8637274549098, 428.8897795591182, 429.9158316633266, 430.94188376753505, 431.96793587174346, 432.9939879759519, 434.0200400801603, 435.0460921843687, 436.07214428857714, 437.09819639278555, 438.12424849699397, 439.1503006012024, 440.1763527054108, 441.2024048096192, 442.22845691382764, 443.25450901803606, 444.2805611222445, 445.3066132264529, 446.3326653306613, 447.35871743486973, 448.38476953907815, 449.41082164328657, 450.436873747495, 451.4629258517034, 452.4889779559118, 453.51503006012024, 454.54108216432866, 455.5671342685371, 456.5931863727455, 457.6192384769539, 458.6452905811623, 459.67134268537075, 460.69739478957916, 461.7234468937876, 462.749498997996, 463.7755511022044, 464.80160320641284, 465.82765531062125, 466.85370741482967, 467.8797595190381, 468.9058116232465, 469.9318637274549, 470.95791583166334, 471.98396793587176, 473.0100200400802, 474.0360721442886, 475.062124248497, 476.08817635270543, 477.11422845691385, 478.14028056112227, 479.1663326653307, 480.1923847695391, 481.2184368737475, 482.24448897795594, 483.27054108216436, 484.2965931863727, 485.32264529058114, 486.34869739478955, 487.37474949899797, 488.4008016032064, 489.4268537074148, 490.4529058116232, 491.47895791583164, 492.50501002004006, 493.5310621242485, 494.5571142284569, 495.5831663326653, 496.60921843687373, 497.63527054108215, 498.66132264529057, 499.687374749499, 500.7134268537074, 501.7394789579158, 502.76553106212424, 503.79158316633266, 504.8176352705411, 505.8436873747495, 506.8697394789579, 507.89579158316633, 508.92184368737475, 509.94789579158316, 510.9739478957916, 512.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_e1ff2d7047ea4843ba3438f284467c8a.x = d3.scale.linear()
              .domain([0.0, 512.0])
              .range([0, 400]);

    color_map_e1ff2d7047ea4843ba3438f284467c8a.legend = L.control({position: 'topright'});
    color_map_e1ff2d7047ea4843ba3438f284467c8a.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_e1ff2d7047ea4843ba3438f284467c8a.legend.addTo(map_92da7aa6946347098baa1da93c93fe1c);

    color_map_e1ff2d7047ea4843ba3438f284467c8a.xAxis = d3.svg.axis()
        .scale(color_map_e1ff2d7047ea4843ba3438f284467c8a.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 85.33333333333333, 170.66666666666666, 256.0, 341.3333333333333, 426.66666666666663, 512.0]);

    color_map_e1ff2d7047ea4843ba3438f284467c8a.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_e1ff2d7047ea4843ba3438f284467c8a.g = color_map_e1ff2d7047ea4843ba3438f284467c8a.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_e1ff2d7047ea4843ba3438f284467c8a.g.selectAll("rect")
        .data(color_map_e1ff2d7047ea4843ba3438f284467c8a.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_e1ff2d7047ea4843ba3438f284467c8a.x(color_map_e1ff2d7047ea4843ba3438f284467c8a.color.domain()[i - 1]) : color_map_e1ff2d7047ea4843ba3438f284467c8a.x.range()[0],
            x1: i < color_map_e1ff2d7047ea4843ba3438f284467c8a.color.domain().length ? color_map_e1ff2d7047ea4843ba3438f284467c8a.x(color_map_e1ff2d7047ea4843ba3438f284467c8a.color.domain()[i]) : color_map_e1ff2d7047ea4843ba3438f284467c8a.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_e1ff2d7047ea4843ba3438f284467c8a.g.call(color_map_e1ff2d7047ea4843ba3438f284467c8a.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('35_65_Partido Comunista do Brasil');

