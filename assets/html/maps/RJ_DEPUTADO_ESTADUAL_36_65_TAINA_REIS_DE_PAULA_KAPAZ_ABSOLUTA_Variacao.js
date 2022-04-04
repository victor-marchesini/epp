    
            var map_d8cd47f860224acaa557426244ac8ff7 = L.map(
                "map_d8cd47f860224acaa557426244ac8ff7",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_59e590dacc6a4ed7bfbba3b39c24658a = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_d8cd47f860224acaa557426244ac8ff7);
        
    
            var choropleth_a7227e3306014cf69632902e5fa167d6 = L.featureGroup(
                {}
            ).addTo(map_d8cd47f860224acaa557426244ac8ff7);
        
    
        function geo_json_e5252eea4f994cb29008a6958a018341_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 394: case 349: case 342: case 336: case 367: case 460: case 475: case 481: case 479: case 366: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 440: case 447: case 462: case 473: case 472: case 464: case 474: case 446: case 444: case 352: case 427: case 419: case 408: case 411: case 433: case 430: case 409: case 477: case 370: case 511: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 436: case 510: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 471: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_e5252eea4f994cb29008a6958a018341_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_e5252eea4f994cb29008a6958a018341 = L.geoJson(null, {
                onEachFeature: geo_json_e5252eea4f994cb29008a6958a018341_onEachFeature,
            
                style: geo_json_e5252eea4f994cb29008a6958a018341_styler,
        });

        function geo_json_e5252eea4f994cb29008a6958a018341_add (data) {
            geo_json_e5252eea4f994cb29008a6958a018341
                .addData(data)
                .addTo(choropleth_a7227e3306014cf69632902e5fa167d6);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_e5252eea4f994cb29008a6958a018341_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_a632fc49a5b14495bad806e1423fd70c = {};

    
    color_map_a632fc49a5b14495bad806e1423fd70c.color = d3.scale.threshold()
              .domain([1.0, 1.7695390781563125, 2.539078156312625, 3.308617234468938, 4.07815631262525, 4.847695390781563, 5.617234468937876, 6.386773547094188, 7.156312625250501, 7.925851703406813, 8.695390781563127, 9.464929859719438, 10.234468937875752, 11.004008016032063, 11.773547094188377, 12.54308617234469, 13.312625250501002, 14.082164328657315, 14.851703406813627, 15.62124248496994, 16.390781563126254, 17.160320641282564, 17.929859719438877, 18.69939879759519, 19.468937875751504, 20.238476953907817, 21.008016032064127, 21.77755511022044, 22.547094188376754, 23.316633266533067, 24.08617234468938, 24.85571142284569, 25.625250501002004, 26.394789579158317, 27.16432865731463, 27.93386773547094, 28.703406813627254, 29.472945891783567, 30.24248496993988, 31.012024048096194, 31.781563126252504, 32.55110220440882, 33.32064128256513, 34.09018036072144, 34.859719438877754, 35.62925851703407, 36.39879759519038, 37.168336673346694, 37.93787575150301, 38.70741482965932, 39.476953907815634, 40.24649298597194, 41.016032064128254, 41.78557114228457, 42.55511022044088, 43.324649298597194, 44.09418837675351, 44.86372745490982, 45.633266533066134, 46.40280561122245, 47.17234468937876, 47.94188376753507, 48.71142284569138, 49.480961923847694, 50.25050100200401, 51.02004008016032, 51.789579158316634, 52.55911823647295, 53.32865731462926, 54.098196392785574, 54.86773547094188, 55.637274549098194, 56.40681362725451, 57.17635270541082, 57.945891783567134, 58.71543086172345, 59.48496993987976, 60.254509018036075, 61.02404809619239, 61.793587174348694, 62.56312625250501, 63.33266533066132, 64.10220440881764, 64.87174348697394, 65.64128256513025, 66.41082164328657, 67.18036072144288, 67.9498997995992, 68.71943887775551, 69.48897795591182, 70.25851703406813, 71.02805611222445, 71.79759519038076, 72.56713426853707, 73.33667334669339, 74.1062124248497, 74.87575150300601, 75.64529058116233, 76.41482965931864, 77.18436873747495, 77.95390781563127, 78.72344689378758, 79.49298597194388, 80.2625250501002, 81.03206412825651, 81.80160320641282, 82.57114228456913, 83.34068136272545, 84.11022044088176, 84.87975951903807, 85.64929859719439, 86.4188376753507, 87.18837675350701, 87.95791583166333, 88.72745490981964, 89.49699398797596, 90.26653306613227, 91.03607214428858, 91.8056112224449, 92.57515030060121, 93.34468937875752, 94.11422845691382, 94.88376753507013, 95.65330661322645, 96.42284569138276, 97.19238476953907, 97.96192384769539, 98.7314629258517, 99.50100200400801, 100.27054108216433, 101.04008016032064, 101.80961923847696, 102.57915831663327, 103.34869739478958, 104.1182364729459, 104.88777555110221, 105.65731462925852, 106.42685370741484, 107.19639278557115, 107.96593186372745, 108.73547094188376, 109.50501002004007, 110.27454909819639, 111.0440881763527, 111.81362725450902, 112.58316633266533, 113.35270541082164, 114.12224448897796, 114.89178356713427, 115.66132264529058, 116.4308617234469, 117.20040080160321, 117.96993987975952, 118.73947895791584, 119.50901803607215, 120.27855711422846, 121.04809619238478, 121.81763527054109, 122.58717434869739, 123.3567134268537, 124.12625250501002, 124.89579158316633, 125.66533066132264, 126.43486973947896, 127.20440881763527, 127.97394789579158, 128.74348697394788, 129.5130260521042, 130.2825651302605, 131.05210420841684, 131.82164328657313, 132.59118236472946, 133.36072144288576, 134.1302605210421, 134.8997995991984, 135.66933867735472, 136.43887775551102, 137.20841683366734, 137.97795591182364, 138.74749498997997, 139.51703406813627, 140.2865731462926, 141.0561122244489, 141.82565130260522, 142.59519038076152, 143.36472945891782, 144.13426853707415, 144.90380761523045, 145.67334669338678, 146.44288577154308, 147.2124248496994, 147.9819639278557, 148.75150300601203, 149.52104208416833, 150.29058116232466, 151.06012024048096, 151.82965931863728, 152.59919839679358, 153.3687374749499, 154.1382765531062, 154.90781563126254, 155.67735470941884, 156.44689378757516, 157.21643286573146, 157.98597194388776, 158.7555110220441, 159.5250501002004, 160.29458917835672, 161.06412825651302, 161.83366733466934, 162.60320641282564, 163.37274549098197, 164.14228456913827, 164.9118236472946, 165.6813627254509, 166.45090180360722, 167.22044088176352, 167.98997995991985, 168.75951903807615, 169.52905811623248, 170.29859719438878, 171.0681362725451, 171.8376753507014, 172.6072144288577, 173.37675350701403, 174.14629258517033, 174.91583166332666, 175.68537074148296, 176.45490981963928, 177.22444889779558, 177.9939879759519, 178.7635270541082, 179.53306613226454, 180.30260521042084, 181.07214428857716, 181.84168336673346, 182.6112224448898, 183.3807615230461, 184.15030060120242, 184.91983967935872, 185.68937875751504, 186.45891783567134, 187.22845691382764, 187.99799599198397, 188.76753507014027, 189.5370741482966, 190.3066132264529, 191.07615230460922, 191.84569138276552, 192.61523046092185, 193.38476953907815, 194.15430861723448, 194.92384769539078, 195.6933867735471, 196.4629258517034, 197.23246492985973, 198.00200400801603, 198.77154308617236, 199.54108216432866, 200.31062124248496, 201.08016032064128, 201.84969939879758, 202.6192384769539, 203.3887775551102, 204.15831663326654, 204.92785571142284, 205.69739478957916, 206.46693386773546, 207.2364729458918, 208.0060120240481, 208.77555110220442, 209.54509018036072, 210.31462925851704, 211.08416833667334, 211.85370741482967, 212.62324649298597, 213.3927855711423, 214.1623246492986, 214.9318637274549, 215.70140280561122, 216.47094188376752, 217.24048096192385, 218.01002004008015, 218.77955911823648, 219.54909819639278, 220.3186372745491, 221.0881763527054, 221.85771543086173, 222.62725450901803, 223.39679358717436, 224.16633266533066, 224.93587174348698, 225.70541082164328, 226.4749498997996, 227.2444889779559, 228.01402805611224, 228.78356713426854, 229.55310621242484, 230.32264529058116, 231.09218436873746, 231.8617234468938, 232.6312625250501, 233.40080160320642, 234.17034068136272, 234.93987975951904, 235.70941883767534, 236.47895791583167, 237.24849699398797, 238.0180360721443, 238.7875751503006, 239.55711422845692, 240.32665330661322, 241.09619238476955, 241.86573146292585, 242.63527054108218, 243.40480961923848, 244.17434869739478, 244.9438877755511, 245.7134268537074, 246.48296593186373, 247.25250501002003, 248.02204408817636, 248.79158316633266, 249.56112224448898, 250.33066132264528, 251.1002004008016, 251.8697394789579, 252.63927855711424, 253.40881763527054, 254.17835671342687, 254.94789579158316, 255.7174348697395, 256.48697394789576, 257.2565130260521, 258.0260521042084, 258.7955911823647, 259.565130260521, 260.3346693386774, 261.10420841683367, 261.87374749498997, 262.64328657314627, 263.4128256513026, 264.1823647294589, 264.9519038076152, 265.7214428857715, 266.4909819639279, 267.2605210420842, 268.0300601202405, 268.7995991983968, 269.56913827655313, 270.33867735470943, 271.10821643286573, 271.87775551102203, 272.64729458917833, 273.4168336673347, 274.186372745491, 274.9559118236473, 275.7254509018036, 276.49498997995994, 277.26452905811624, 278.03406813627254, 278.80360721442884, 279.5731462925852, 280.3426853707415, 281.1122244488978, 281.8817635270541, 282.65130260521045, 283.42084168336675, 284.19038076152304, 284.95991983967934, 285.72945891783564, 286.498997995992, 287.2685370741483, 288.0380761523046, 288.8076152304609, 289.57715430861725, 290.34669338677355, 291.11623246492985, 291.88577154308615, 292.6553106212425, 293.4248496993988, 294.1943887775551, 294.9639278557114, 295.73346693386776, 296.50300601202406, 297.27254509018036, 298.04208416833666, 298.811623246493, 299.5811623246493, 300.3507014028056, 301.1202404809619, 301.8897795591182, 302.65931863727457, 303.42885771543087, 304.19839679358716, 304.96793587174346, 305.7374749498998, 306.5070140280561, 307.2765531062124, 308.0460921843687, 308.8156312625251, 309.5851703406814, 310.3547094188377, 311.12424849699397, 311.8937875751503, 312.6633266533066, 313.4328657314629, 314.2024048096192, 314.9719438877755, 315.7414829659319, 316.5110220440882, 317.2805611222445, 318.0501002004008, 318.81963927855713, 319.58917835671343, 320.35871743486973, 321.12825651302603, 321.8977955911824, 322.6673346693387, 323.436873747495, 324.2064128256513, 324.97595190380764, 325.74549098196394, 326.51503006012024, 327.28456913827654, 328.0541082164329, 328.8236472945892, 329.5931863727455, 330.3627254509018, 331.1322645290581, 331.90180360721445, 332.67134268537075, 333.44088176352705, 334.21042084168334, 334.9799599198397, 335.749498997996, 336.5190380761523, 337.2885771543086, 338.05811623246495, 338.82765531062125, 339.59719438877755, 340.36673346693385, 341.1362725450902, 341.9058116232465, 342.6753507014028, 343.4448897795591, 344.2144288577154, 344.98396793587176, 345.75350701402806, 346.52304609218436, 347.29258517034066, 348.062124248497, 348.8316633266533, 349.6012024048096, 350.3707414829659, 351.14028056112227, 351.90981963927857, 352.67935871743487, 353.44889779559117, 354.2184368737475, 354.9879759519038, 355.7575150300601, 356.5270541082164, 357.2965931863727, 358.0661322645291, 358.8356713426854, 359.6052104208417, 360.37474949899797, 361.1442885771543, 361.9138276553106, 362.6833667334669, 363.4529058116232, 364.2224448897796, 364.9919839679359, 365.7615230460922, 366.5310621242485, 367.30060120240483, 368.07014028056113, 368.83967935871743, 369.60921843687373, 370.3787575150301, 371.1482965931864, 371.9178356713427, 372.687374749499, 373.4569138276553, 374.22645290581164, 374.99599198396794, 375.76553106212424, 376.53507014028054, 377.3046092184369, 378.0741482965932, 378.8436873747495, 379.6132264529058, 380.38276553106215, 381.15230460921845, 381.92184368737475, 382.69138276553105, 383.4609218436874, 384.2304609218437, 385.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_a632fc49a5b14495bad806e1423fd70c.x = d3.scale.linear()
              .domain([1.0, 385.0])
              .range([0, 400]);

    color_map_a632fc49a5b14495bad806e1423fd70c.legend = L.control({position: 'topright'});
    color_map_a632fc49a5b14495bad806e1423fd70c.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_a632fc49a5b14495bad806e1423fd70c.legend.addTo(map_d8cd47f860224acaa557426244ac8ff7);

    color_map_a632fc49a5b14495bad806e1423fd70c.xAxis = d3.svg.axis()
        .scale(color_map_a632fc49a5b14495bad806e1423fd70c.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 65.0, 129.0, 193.0, 257.0, 321.0, 385.0]);

    color_map_a632fc49a5b14495bad806e1423fd70c.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_a632fc49a5b14495bad806e1423fd70c.g = color_map_a632fc49a5b14495bad806e1423fd70c.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_a632fc49a5b14495bad806e1423fd70c.g.selectAll("rect")
        .data(color_map_a632fc49a5b14495bad806e1423fd70c.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_a632fc49a5b14495bad806e1423fd70c.x(color_map_a632fc49a5b14495bad806e1423fd70c.color.domain()[i - 1]) : color_map_a632fc49a5b14495bad806e1423fd70c.x.range()[0],
            x1: i < color_map_a632fc49a5b14495bad806e1423fd70c.color.domain().length ? color_map_a632fc49a5b14495bad806e1423fd70c.x(color_map_a632fc49a5b14495bad806e1423fd70c.color.domain()[i]) : color_map_a632fc49a5b14495bad806e1423fd70c.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_a632fc49a5b14495bad806e1423fd70c.g.call(color_map_a632fc49a5b14495bad806e1423fd70c.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('36_65_TAINA REIS DE PAULA KAPAZ');

