    
            var map_b727df3f861c4366a0466240e6abe744 = L.map(
                "map_b727df3f861c4366a0466240e6abe744",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_f67462cf7f4b4b1796c9a4091a842dd5 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_b727df3f861c4366a0466240e6abe744);
        
    
            var choropleth_1657d88b977042829f2fbbb4ef87ea22 = L.featureGroup(
                {}
            ).addTo(map_b727df3f861c4366a0466240e6abe744);
        
    
        function geo_json_6cf3dd6a530f49dd9c0cf7955cc6b7a9_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 431: case 349: case 342: case 460: case 357: case 481: case 479: case 366: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 412: case 447: case 453: case 351: case 334: case 471: case 374: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 449: case 455: case 436: case 352: case 382: case 362: case 379: case 372: case 433: case 430: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 510: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 511: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_6cf3dd6a530f49dd9c0cf7955cc6b7a9_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_6cf3dd6a530f49dd9c0cf7955cc6b7a9 = L.geoJson(null, {
                onEachFeature: geo_json_6cf3dd6a530f49dd9c0cf7955cc6b7a9_onEachFeature,
            
                style: geo_json_6cf3dd6a530f49dd9c0cf7955cc6b7a9_styler,
        });

        function geo_json_6cf3dd6a530f49dd9c0cf7955cc6b7a9_add (data) {
            geo_json_6cf3dd6a530f49dd9c0cf7955cc6b7a9
                .addData(data)
                .addTo(choropleth_1657d88b977042829f2fbbb4ef87ea22);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_6cf3dd6a530f49dd9c0cf7955cc6b7a9_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_1fcc0f4ed79c40538996077fd664bbc8 = {};

    
    color_map_1fcc0f4ed79c40538996077fd664bbc8.color = d3.scale.threshold()
              .domain([-553.0, -551.6112224448898, -550.2224448897796, -548.8336673346694, -547.4448897795592, -546.056112224449, -544.6673346693386, -543.2785571142284, -541.8897795591182, -540.501002004008, -539.1122244488978, -537.7234468937876, -536.3346693386774, -534.9458917835672, -533.557114228457, -532.1683366733467, -530.7795591182364, -529.3907815631262, -528.002004008016, -526.6132264529058, -525.2244488977956, -523.8356713426854, -522.4468937875752, -521.058116232465, -519.6693386773547, -518.2805611222445, -516.8917835671343, -515.503006012024, -514.1142284569138, -512.7254509018036, -511.3366733466934, -509.94789579158316, -508.55911823647295, -507.17034068136275, -505.78156312625254, -504.39278557114227, -503.00400801603206, -501.61523046092185, -500.22645290581164, -498.8376753507014, -497.44889779559117, -496.06012024048096, -494.67134268537075, -493.28256513026054, -491.8937875751503, -490.50501002004006, -489.11623246492985, -487.72745490981964, -486.33867735470943, -484.94989979959917, -483.56112224448896, -482.17234468937875, -480.78356713426854, -479.3947895791583, -478.0060120240481, -476.6172344689379, -475.22845691382764, -473.83967935871743, -472.4509018036072, -471.062124248497, -469.67334669338675, -468.28456913827654, -466.89579158316633, -465.5070140280561, -464.1182364729459, -462.7294589178357, -461.34068136272543, -459.9519038076152, -458.563126252505, -457.1743486973948, -455.78557114228454, -454.39679358717433, -453.0080160320641, -451.6192384769539, -450.2304609218437, -448.8416833667335, -447.4529058116233, -446.064128256513, -444.6753507014028, -443.2865731462926, -441.89779559118233, -440.5090180360721, -439.1202404809619, -437.7314629258517, -436.3426853707415, -434.9539078156313, -433.5651302605211, -432.1763527054108, -430.7875751503006, -429.3987975951904, -428.0100200400802, -426.6212424849699, -425.2324649298597, -423.8436873747495, -422.4549098196393, -421.0661322645291, -419.67735470941886, -418.28857715430865, -416.8997995991984, -415.5110220440882, -414.12224448897797, -412.7334669338677, -411.3446893787575, -409.9559118236473, -408.5671342685371, -407.17835671342687, -405.78957915831666, -404.40080160320645, -403.0120240480962, -401.62324649298597, -400.23446893787576, -398.8456913827655, -397.4569138276553, -396.0681362725451, -394.67935871743487, -393.29058116232466, -391.90180360721445, -390.51302605210424, -389.124248496994, -387.73547094188376, -386.34669338677355, -384.9579158316633, -383.5691382765531, -382.18036072144287, -380.79158316633266, -379.40280561122245, -378.01402805611224, -376.62525050100203, -375.2364729458918, -373.84769539078155, -372.45891783567134, -371.07014028056113, -369.68136272545087, -368.29258517034066, -366.90380761523045, -365.51503006012024, -364.12625250501003, -362.7374749498998, -361.3486973947896, -359.9599198396794, -358.57114228456913, -357.1823647294589, -355.79358717434866, -354.40480961923845, -353.01603206412824, -351.62725450901803, -350.2384769539078, -348.8496993987976, -347.4609218436874, -346.0721442885772, -344.6833667334669, -343.2945891783567, -341.9058116232465, -340.51703406813624, -339.12825651302603, -337.7394789579158, -336.3507014028056, -334.9619238476954, -333.5731462925852, -332.184368737475, -330.7955911823647, -329.4068136272545, -328.0180360721443, -326.62925851703403, -325.2404809619238, -323.8517034068136, -322.4629258517034, -321.0741482965932, -319.685370741483, -318.2965931863728, -316.90781563126257, -315.5190380761523, -314.1302605210421, -312.7414829659318, -311.3527054108216, -309.9639278557114, -308.5751503006012, -307.186372745491, -305.7975951903808, -304.40881763527057, -303.02004008016036, -301.6312625250501, -300.2424849699399, -298.85370741482967, -297.4649298597194, -296.0761523046092, -294.687374749499, -293.2985971943888, -291.90981963927857, -290.52104208416836, -289.1322645290581, -287.7434869739479, -286.3547094188377, -284.96593186372746, -283.57715430861725, -282.188376753507, -280.7995991983968, -279.41082164328657, -278.02204408817636, -276.63326653306615, -275.24448897795594, -273.8557114228457, -272.46693386773546, -271.07815631262525, -269.68937875751504, -268.30060120240483, -266.91182364729457, -265.52304609218436, -264.13426853707415, -262.74549098196394, -261.35671342685373, -259.96793587174346, -258.57915831663325, -257.19038076152304, -255.80160320641284, -254.41282565130263, -253.02404809619236, -251.63527054108215, -250.24649298597194, -248.85771543086173, -247.46893787575152, -246.08016032064126, -244.69138276553105, -243.30260521042084, -241.91382765531063, -240.52505010020042, -239.1362725450902, -237.74749498997994, -236.35871743486973, -234.96993987975952, -233.5811623246493, -232.1923847695391, -230.80360721442884, -229.41482965931863, -228.02605210420842, -226.6372745490982, -225.248496993988, -223.85971943887773, -222.47094188376752, -221.0821643286573, -219.6933867735471, -218.3046092184369, -216.91583166332663, -215.52705410821642, -214.1382765531062, -212.749498997996, -211.3607214428858, -209.97194388777552, -208.58316633266531, -207.1943887775551, -205.8056112224449, -204.41683366733469, -203.02805611222448, -201.6392785571142, -200.250501002004, -198.8617234468938, -197.47294589178358, -196.08416833667337, -194.6953907815631, -193.3066132264529, -191.9178356713427, -190.52905811623248, -189.14028056112227, -187.751503006012, -186.3627254509018, -184.97394789579158, -183.58517034068137, -182.19639278557116, -180.8076152304609, -179.4188376753507, -178.03006012024048, -176.64128256513027, -175.25250501002006, -173.8637274549098, -172.47494989979958, -171.08617234468937, -169.69739478957916, -168.30861723446895, -166.91983967935874, -165.53106212424848, -164.14228456913827, -162.75350701402806, -161.36472945891785, -159.97595190380764, -158.58717434869737, -157.19839679358716, -155.80961923847696, -154.42084168336675, -153.03206412825654, -151.64328657314627, -150.25450901803606, -148.86573146292585, -147.47695390781564, -146.08817635270543, -144.69939879759517, -143.31062124248496, -141.92184368737475, -140.53306613226454, -139.14428857715433, -137.75551102204406, -136.36673346693385, -134.97795591182364, -133.58917835671343, -132.20040080160322, -130.811623246493, -129.42284569138275, -128.03406813627254, -126.64529058116233, -125.25651302605212, -123.86773547094191, -122.47895791583164, -121.09018036072143, -119.70140280561122, -118.31262525050101, -116.9238476953908, -115.53507014028054, -114.14629258517033, -112.75751503006012, -111.36873747494991, -109.9799599198397, -108.59118236472943, -107.20240480961922, -105.81362725450902, -104.4248496993988, -103.0360721442886, -101.64729458917833, -100.25851703406812, -98.86973947895791, -97.4809619238477, -96.09218436873749, -94.70340681362728, -93.31462925851702, -91.9258517034068, -90.5370741482966, -89.14829659318639, -87.75951903807618, -86.37074148296591, -84.9819639278557, -83.59318637274549, -82.20440881763528, -80.81563126252507, -79.4268537074148, -78.0380761523046, -76.64929859719439, -75.26052104208418, -73.87174348697397, -72.4829659318637, -71.0941883767535, -69.70541082164328, -68.31663326653307, -66.92785571142286, -65.5390781563126, -64.15030060120239, -62.76152304609218, -61.37274549098197, -59.98396793587176, -58.59519038076155, -57.206412825651284, -55.817635270541075, -54.428857715430865, -53.040080160320656, -51.65130260521045, -50.26252505010018, -48.87374749498997, -47.48496993987976, -46.09619238476955, -44.70741482965934, -43.318637274549076, -41.929859719438866, -40.541082164328714, -39.15230460921839, -37.76352705410818, -36.37474949899797, -34.98597194388776, -33.59719438877755, -32.20841683366734, -30.819639278557133, -29.430861723446924, -28.042084168336714, -26.653306613226505, -25.26452905811618, -23.875751503005972, -22.486973947895763, -21.098196392785553, -19.709418837675344, -18.320641282565134, -16.931863727454925, -15.543086172344715, -14.154308617234506, -12.765531062124296, -11.376753507013973, -9.987975951903763, -8.599198396793554, -7.210420841683344, -5.821643286573135, -4.432865731462925, -3.044088176352716, -1.6553106212425064, -0.2665330661322969, 1.1222444889779126, 2.511022044088122, 3.8997995991984453, 5.288577154308655, 6.677354709418864, 8.066132264529074, 9.454909819639283, 10.843687374749493, 12.232464929859702, 13.621242484969912, 15.010020040080121, 16.39879759519033, 17.787575150300654, 19.176352705410864, 20.565130260521073, 21.953907815631283, 23.342685370741492, 24.7314629258517, 26.12024048096191, 27.50901803607212, 28.89779559118233, 30.28657314629254, 31.67535070140275, 33.06412825651307, 34.45290581162328, 35.84168336673349, 37.2304609218437, 38.61923847695391, 40.00801603206412, 41.39679358717433, 42.78557114228454, 44.17434869739475, 45.56312625250496, 46.95190380761528, 48.34068136272549, 49.7294589178357, 51.11823647294591, 52.50701402805612, 53.89579158316633, 55.28456913827654, 56.67334669338675, 58.06212424849696, 59.45090180360717, 60.83967935871749, 62.2284569138277, 63.61723446893791, 65.00601202404812, 66.39478957915833, 67.78356713426854, 69.17234468937875, 70.56112224448896, 71.94989979959917, 73.33867735470938, 74.72745490981958, 76.11623246492991, 77.50501002004012, 78.89378757515033, 80.28256513026054, 81.67134268537075, 83.06012024048096, 84.44889779559117, 85.83767535070137, 87.22645290581158, 88.6152304609218, 90.00400801603212, 91.39278557114233, 92.78156312625254, 94.17034068136275, 95.55911823647295, 96.94789579158316, 98.33667334669337, 99.72545090180358, 101.11422845691379, 102.503006012024, 103.89178356713421, 105.28056112224453, 106.66933867735474, 108.05811623246495, 109.44689378757516, 110.83567134268537, 112.22444889779558, 113.61322645290579, 115.002004008016, 116.39078156312621, 117.77955911823642, 119.16833667334674, 120.55711422845695, 121.94589178356716, 123.33466933867737, 124.72344689378758, 126.11222444889779, 127.501002004008, 128.8897795591182, 130.27855711422842, 131.66733466933863, 133.05611222444895, 134.44488977955916, 135.83366733466937, 137.22244488977958, 138.6112224448898, 140.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_1fcc0f4ed79c40538996077fd664bbc8.x = d3.scale.linear()
              .domain([-553.0, 140.0])
              .range([0, 400]);

    color_map_1fcc0f4ed79c40538996077fd664bbc8.legend = L.control({position: 'topright'});
    color_map_1fcc0f4ed79c40538996077fd664bbc8.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_1fcc0f4ed79c40538996077fd664bbc8.legend.addTo(map_b727df3f861c4366a0466240e6abe744);

    color_map_1fcc0f4ed79c40538996077fd664bbc8.xAxis = d3.svg.axis()
        .scale(color_map_1fcc0f4ed79c40538996077fd664bbc8.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-553.0, -437.5, -322.0, -206.5, -91.0, 24.5, 140.0]);

    color_map_1fcc0f4ed79c40538996077fd664bbc8.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_1fcc0f4ed79c40538996077fd664bbc8.g = color_map_1fcc0f4ed79c40538996077fd664bbc8.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_1fcc0f4ed79c40538996077fd664bbc8.g.selectAll("rect")
        .data(color_map_1fcc0f4ed79c40538996077fd664bbc8.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_1fcc0f4ed79c40538996077fd664bbc8.x(color_map_1fcc0f4ed79c40538996077fd664bbc8.color.domain()[i - 1]) : color_map_1fcc0f4ed79c40538996077fd664bbc8.x.range()[0],
            x1: i < color_map_1fcc0f4ed79c40538996077fd664bbc8.color.domain().length ? color_map_1fcc0f4ed79c40538996077fd664bbc8.x(color_map_1fcc0f4ed79c40538996077fd664bbc8.color.domain()[i]) : color_map_1fcc0f4ed79c40538996077fd664bbc8.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_1fcc0f4ed79c40538996077fd664bbc8.g.call(color_map_1fcc0f4ed79c40538996077fd664bbc8.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('20_50_LEONEL BRIZOLA');
