    
            var map_10e75debc2d24467829c80a715813a81 = L.map(
                "map_10e75debc2d24467829c80a715813a81",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_7d2b2ca9bd1446bcb767a6324862bfaa = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_10e75debc2d24467829c80a715813a81);
        
    
            var choropleth_b688fa2a578b4229b2d01775550b1871 = L.featureGroup(
                {}
            ).addTo(map_10e75debc2d24467829c80a715813a81);
        
    
        function geo_json_0045b1ee49ee4bebb68117cdd74c6b31_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 366: case 391: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 466: case 442: case 378: case 374: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 447: case 455: case 381: case 369: case 352: case 351: case 346: case 386: case 457: case 454: case 433: case 387: case 511: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 347: case 370: case 510: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 430: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_0045b1ee49ee4bebb68117cdd74c6b31_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_0045b1ee49ee4bebb68117cdd74c6b31 = L.geoJson(null, {
                onEachFeature: geo_json_0045b1ee49ee4bebb68117cdd74c6b31_onEachFeature,
            
                style: geo_json_0045b1ee49ee4bebb68117cdd74c6b31_styler,
        });

        function geo_json_0045b1ee49ee4bebb68117cdd74c6b31_add (data) {
            geo_json_0045b1ee49ee4bebb68117cdd74c6b31
                .addData(data)
                .addTo(choropleth_b688fa2a578b4229b2d01775550b1871);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_0045b1ee49ee4bebb68117cdd74c6b31_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_d7e20ff6c0e44ed5b6a99e24d29d978e = {};

    
    color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.color = d3.scale.threshold()
              .domain([1.0, 1.7615230460921842, 2.5230460921843685, 3.284569138276553, 4.046092184368737, 4.807615230460922, 5.569138276553106, 6.330661322645291, 7.092184368737475, 7.8537074148296595, 8.615230460921843, 9.376753507014028, 10.138276553106213, 10.899799599198397, 11.661322645290582, 12.422845691382765, 13.18436873747495, 13.945891783567134, 14.707414829659319, 15.468937875751504, 16.230460921843687, 16.991983967935873, 17.753507014028056, 18.51503006012024, 19.276553106212425, 20.03807615230461, 20.799599198396795, 21.561122244488978, 22.322645290581164, 23.084168336673347, 23.84569138276553, 24.607214428857716, 25.3687374749499, 26.130260521042086, 26.89178356713427, 27.65330661322645, 28.414829659318638, 29.17635270541082, 29.937875751503007, 30.69939879759519, 31.460921843687373, 32.22244488977956, 32.983967935871746, 33.745490981963925, 34.50701402805611, 35.2685370741483, 36.03006012024048, 36.791583166332664, 37.55310621242485, 38.31462925851704, 39.07615230460922, 39.8376753507014, 40.59919839679359, 41.36072144288577, 42.122244488977955, 42.88376753507014, 43.64529058116233, 44.40681362725451, 45.168336673346694, 45.92985971943888, 46.69138276553106, 47.452905811623246, 48.21442885771543, 48.97595190380761, 49.7374749498998, 50.498997995991985, 51.26052104208417, 52.02204408817635, 52.78356713426854, 53.545090180360724, 54.3066132264529, 55.06813627254509, 55.829659318637276, 56.591182364729455, 57.35270541082164, 58.11422845691383, 58.875751503006015, 59.637274549098194, 60.39879759519038, 61.16032064128257, 61.921843687374746, 62.68336673346693, 63.44488977955912, 64.20641282565131, 64.96793587174349, 65.72945891783567, 66.49098196392785, 67.25250501002004, 68.01402805611222, 68.7755511022044, 69.5370741482966, 70.29859719438878, 71.06012024048096, 71.82164328657315, 72.58316633266533, 73.34468937875752, 74.1062124248497, 74.86773547094188, 75.62925851703407, 76.39078156312625, 77.15230460921843, 77.91382765531063, 78.6753507014028, 79.43687374749499, 80.19839679358718, 80.95991983967936, 81.72144288577154, 82.48296593186373, 83.24448897795591, 84.00601202404809, 84.76753507014028, 85.52905811623246, 86.29058116232466, 87.05210420841684, 87.81362725450902, 88.57515030060121, 89.33667334669339, 90.09819639278557, 90.85971943887776, 91.62124248496994, 92.38276553106212, 93.14428857715431, 93.90581162324649, 94.66733466933867, 95.42885771543087, 96.19038076152304, 96.95190380761522, 97.71342685370742, 98.4749498997996, 99.23647294589178, 99.99799599198397, 100.75951903807615, 101.52104208416834, 102.28256513026052, 103.0440881763527, 103.8056112224449, 104.56713426853707, 105.32865731462925, 106.09018036072145, 106.85170340681363, 107.6132264529058, 108.374749498998, 109.13627254509018, 109.89779559118236, 110.65931863727455, 111.42084168336673, 112.18236472945891, 112.9438877755511, 113.70541082164328, 114.46693386773548, 115.22845691382766, 115.98997995991984, 116.75150300601203, 117.51302605210421, 118.27454909819639, 119.03607214428858, 119.79759519038076, 120.55911823647294, 121.32064128256513, 122.08216432865731, 122.84368737474949, 123.60521042084169, 124.36673346693387, 125.12825651302605, 125.88977955911824, 126.65130260521042, 127.41282565130261, 128.1743486973948, 128.93587174348698, 129.69739478957916, 130.45891783567134, 131.22044088176352, 131.9819639278557, 132.7434869739479, 133.5050100200401, 134.26653306613227, 135.02805611222445, 135.78957915831663, 136.5511022044088, 137.31262525050101, 138.0741482965932, 138.83567134268537, 139.59719438877755, 140.35871743486973, 141.1202404809619, 141.88176352705412, 142.6432865731463, 143.40480961923848, 144.16633266533066, 144.92785571142284, 145.68937875751504, 146.45090180360722, 147.2124248496994, 147.97394789579158, 148.73547094188376, 149.49699398797594, 150.25851703406815, 151.02004008016033, 151.7815631262525, 152.5430861723447, 153.30460921843687, 154.06613226452905, 154.82765531062125, 155.58917835671343, 156.3507014028056, 157.1122244488978, 157.87374749498997, 158.63527054108218, 159.39679358717436, 160.15831663326654, 160.91983967935872, 161.6813627254509, 162.44288577154308, 163.20440881763528, 163.96593186372746, 164.72745490981964, 165.48897795591182, 166.250501002004, 167.01202404809618, 167.7735470941884, 168.53507014028057, 169.29659318637275, 170.05811623246493, 170.8196392785571, 171.5811623246493, 172.3426853707415, 173.10420841683367, 173.86573146292585, 174.62725450901803, 175.3887775551102, 176.15030060120242, 176.9118236472946, 177.67334669338678, 178.43486973947896, 179.19639278557113, 179.9579158316633, 180.71943887775552, 181.4809619238477, 182.24248496993988, 183.00400801603206, 183.76553106212424, 184.52705410821645, 185.28857715430863, 186.0501002004008, 186.81162324649299, 187.57314629258516, 188.33466933867734, 189.09619238476955, 189.85771543086173, 190.6192384769539, 191.3807615230461, 192.14228456913827, 192.90380761523045, 193.66533066132266, 194.42685370741484, 195.18837675350701, 195.9498997995992, 196.71142284569137, 197.47294589178355, 198.23446893787576, 198.99599198396794, 199.75751503006012, 200.5190380761523, 201.28056112224448, 202.0420841683367, 202.80360721442887, 203.56513026052104, 204.32665330661322, 205.0881763527054, 205.84969939879758, 206.6112224448898, 207.37274549098197, 208.13426853707415, 208.89579158316633, 209.6573146292585, 210.4188376753507, 211.1803607214429, 211.94188376753507, 212.70340681362725, 213.46492985971943, 214.2264529058116, 214.98797595190382, 215.749498997996, 216.51102204408818, 217.27254509018036, 218.03406813627254, 218.79559118236472, 219.55711422845692, 220.3186372745491, 221.08016032064128, 221.84168336673346, 222.60320641282564, 223.36472945891782, 224.12625250501003, 224.8877755511022, 225.6492985971944, 226.41082164328657, 227.17234468937875, 227.93386773547095, 228.69539078156313, 229.4569138276553, 230.2184368737475, 230.97995991983967, 231.74148296593185, 232.50300601202406, 233.26452905811624, 234.02605210420842, 234.7875751503006, 235.54909819639278, 236.31062124248496, 237.07214428857716, 237.83366733466934, 238.59519038076152, 239.3567134268537, 240.11823647294588, 240.8797595190381, 241.64128256513027, 242.40280561122245, 243.16432865731463, 243.9258517034068, 244.68737474949899, 245.4488977955912, 246.21042084168337, 246.97194388777555, 247.73346693386773, 248.4949899799599, 249.2565130260521, 250.0180360721443, 250.77955911823648, 251.54108216432866, 252.30260521042084, 253.06412825651302, 253.82565130260522, 254.5871743486974, 255.34869739478958, 256.1102204408818, 256.87174348697397, 257.63326653306615, 258.3947895791583, 259.1563126252505, 259.9178356713427, 260.67935871743487, 261.44088176352705, 262.2024048096192, 262.9639278557114, 263.7254509018036, 264.4869739478958, 265.248496993988, 266.0100200400802, 266.77154308617236, 267.53306613226454, 268.2945891783567, 269.0561122244489, 269.8176352705411, 270.57915831663325, 271.34068136272543, 272.1022044088176, 272.8637274549098, 273.62525050100203, 274.3867735470942, 275.1482965931864, 275.90981963927857, 276.67134268537075, 277.4328657314629, 278.1943887775551, 278.9559118236473, 279.71743486973946, 280.47895791583164, 281.2404809619238, 282.00200400801606, 282.76352705410824, 283.5250501002004, 284.2865731462926, 285.0480961923848, 285.80961923847696, 286.57114228456913, 287.3326653306613, 288.0941883767535, 288.8557114228457, 289.61723446893785, 290.3787575150301, 291.14028056112227, 291.90180360721445, 292.6633266533066, 293.4248496993988, 294.186372745491, 294.94789579158316, 295.70941883767534, 296.4709418837675, 297.2324649298597, 297.9939879759519, 298.75551102204406, 299.5170340681363, 300.2785571142285, 301.04008016032066, 301.80160320641284, 302.563126252505, 303.3246492985972, 304.0861723446894, 304.84769539078155, 305.60921843687373, 306.3707414829659, 307.1322645290581, 307.8937875751503, 308.6553106212425, 309.4168336673347, 310.17835671342687, 310.93987975951904, 311.7014028056112, 312.4629258517034, 313.2244488977956, 313.98597194388776, 314.74749498997994, 315.5090180360721, 316.27054108216436, 317.03206412825654, 317.7935871743487, 318.5551102204409, 319.3166332665331, 320.07815631262525, 320.83967935871743, 321.6012024048096, 322.3627254509018, 323.12424849699397, 323.88577154308615, 324.64729458917833, 325.40881763527057, 326.17034068136275, 326.9318637274549, 327.6933867735471, 328.4549098196393, 329.21643286573146, 329.97795591182364, 330.7394789579158, 331.501002004008, 332.2625250501002, 333.02404809619236, 333.7855711422846, 334.5470941883768, 335.30861723446895, 336.07014028056113, 336.8316633266533, 337.5931863727455, 338.3547094188377, 339.11623246492985, 339.87775551102203, 340.6392785571142, 341.4008016032064, 342.1623246492986, 342.9238476953908, 343.685370741483, 344.44689378757516, 345.20841683366734, 345.9699398797595, 346.7314629258517, 347.4929859719439, 348.25450901803606, 349.01603206412824, 349.7775551102204, 350.5390781563126, 351.30060120240483, 352.062124248497, 352.8236472945892, 353.5851703406814, 354.34669338677355, 355.10821643286573, 355.8697394789579, 356.6312625250501, 357.39278557114227, 358.15430861723445, 358.9158316633266, 359.67735470941886, 360.43887775551104, 361.2004008016032, 361.9619238476954, 362.7234468937876, 363.48496993987976, 364.24649298597194, 365.0080160320641, 365.7695390781563, 366.5310621242485, 367.29258517034066, 368.0541082164329, 368.8156312625251, 369.57715430861725, 370.33867735470943, 371.1002004008016, 371.8617234468938, 372.62324649298597, 373.38476953907815, 374.14629258517033, 374.9078156312625, 375.6693386773547, 376.43086172344687, 377.1923847695391, 377.9539078156313, 378.71543086172346, 379.47695390781564, 380.2384769539078, 381.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.x = d3.scale.linear()
              .domain([1.0, 381.0])
              .range([0, 400]);

    color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.legend = L.control({position: 'topright'});
    color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.legend.addTo(map_10e75debc2d24467829c80a715813a81);

    color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.xAxis = d3.svg.axis()
        .scale(color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 64.33333333333334, 127.66666666666667, 191.0, 254.33333333333334, 317.6666666666667, 381.0]);

    color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.g = color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.g.selectAll("rect")
        .data(color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.x(color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.color.domain()[i - 1]) : color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.x.range()[0],
            x1: i < color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.color.domain().length ? color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.x(color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.color.domain()[i]) : color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.g.call(color_map_d7e20ff6c0e44ed5b6a99e24d29d978e.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('12_13_VERONICA DOS SANTOS LIMA');
