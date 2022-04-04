    
            var map_c491e82fb24c412fad3f61a393d6dc06 = L.map(
                "map_c491e82fb24c412fad3f61a393d6dc06",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_331e64f84ff34f6c8b8bb1d4b7f97b9c = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_c491e82fb24c412fad3f61a393d6dc06);
        
    
            var choropleth_771f3d6f33cb4c7f80af2fcb08f728d8 = L.featureGroup(
                {}
            ).addTo(map_c491e82fb24c412fad3f61a393d6dc06);
        
    
        function geo_json_d3d9d71a30334ddeb13868d4f9356013_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 482: case 443: case 377: case 434: case 441: case 428: case 325: case 453: case 456: case 335: case 403: case 468: case 464: case 470: case 478: case 435: case 452: case 380: case 353: case 345: case 393: case 383: case 426: case 333: case 416: case 400: case 404: case 359: case 361: case 390: case 394: case 362: case 348: case 354: case 334: case 327: case 326: case 329: case 331: case 358: case 330: case 328: case 367: case 360: case 357: case 350: case 463: case 483: case 469: case 461: case 366: case 391: case 465: case 451: case 402: case 458: case 480: case 341: case 405: case 485: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 442: case 419: case 510: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_d3d9d71a30334ddeb13868d4f9356013_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_d3d9d71a30334ddeb13868d4f9356013 = L.geoJson(null, {
                onEachFeature: geo_json_d3d9d71a30334ddeb13868d4f9356013_onEachFeature,
            
                style: geo_json_d3d9d71a30334ddeb13868d4f9356013_styler,
        });

        function geo_json_d3d9d71a30334ddeb13868d4f9356013_add (data) {
            geo_json_d3d9d71a30334ddeb13868d4f9356013
                .addData(data)
                .addTo(choropleth_771f3d6f33cb4c7f80af2fcb08f728d8);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_d3d9d71a30334ddeb13868d4f9356013_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_8cb4f0a6366a458d910eb19b57517421 = {};

    
    color_map_8cb4f0a6366a458d910eb19b57517421.color = d3.scale.threshold()
              .domain([-944.0, -941.0420841683367, -938.0841683366733, -935.12625250501, -932.1683366733467, -929.2104208416833, -926.2525050100201, -923.2945891783567, -920.3366733466934, -917.3787575150301, -914.4208416833667, -911.4629258517034, -908.5050100200401, -905.5470941883767, -902.5891783567134, -899.6312625250501, -896.6733466933867, -893.7154308617235, -890.7575150300602, -887.7995991983968, -884.8416833667335, -881.8837675350701, -878.9258517034068, -875.9679358717435, -873.0100200400801, -870.0521042084168, -867.0941883767536, -864.1362725450902, -861.1783567134269, -858.2204408817636, -855.2625250501002, -852.3046092184369, -849.3466933867735, -846.3887775551102, -843.4308617234469, -840.4729458917835, -837.5150300601202, -834.557114228457, -831.5991983967936, -828.6412825651303, -825.683366733467, -822.7254509018036, -819.7675350701403, -816.8096192384769, -813.8517034068136, -810.8937875751503, -807.935871743487, -804.9779559118236, -802.0200400801604, -799.062124248497, -796.1042084168337, -793.1462925851704, -790.188376753507, -787.2304609218437, -784.2725450901803, -781.314629258517, -778.3567134268537, -775.3987975951904, -772.440881763527, -769.4829659318638, -766.5250501002004, -763.5671342685371, -760.6092184368738, -757.6513026052104, -754.6933867735471, -751.7354709418837, -748.7775551102204, -745.8196392785571, -742.8617234468938, -739.9038076152304, -736.9458917835672, -733.9879759519038, -731.0300601202405, -728.0721442885772, -725.1142284569138, -722.1563126252505, -719.1983967935871, -716.2404809619238, -713.2825651302605, -710.3246492985973, -707.3667334669339, -704.4088176352706, -701.4509018036072, -698.4929859719439, -695.5350701402806, -692.5771543086172, -689.6192384769539, -686.6613226452905, -683.7034068136272, -680.7454909819639, -677.7875751503007, -674.8296593186373, -671.871743486974, -668.9138276553106, -665.9559118236473, -662.997995991984, -660.0400801603207, -657.0821643286573, -654.1242484969939, -651.1663326653306, -648.2084168336673, -645.2505010020041, -642.2925851703407, -639.3346693386774, -636.376753507014, -633.4188376753507, -630.4609218436874, -627.5030060120241, -624.5450901803607, -621.5871743486973, -618.629258517034, -615.6713426853707, -612.7134268537075, -609.7555110220441, -606.7975951903808, -603.8396793587174, -600.8817635270541, -597.9238476953908, -594.9659318637275, -592.0080160320641, -589.0501002004007, -586.0921843687374, -583.1342685370741, -580.1763527054109, -577.2184368737476, -574.2605210420842, -571.3026052104208, -568.3446893787575, -565.3867735470942, -562.4288577154309, -559.4709418837675, -556.5130260521041, -553.5551102204408, -550.5971943887776, -547.6392785571143, -544.681362725451, -541.7234468937876, -538.7655310621242, -535.8076152304609, -532.8496993987976, -529.8917835671343, -526.9338677354709, -523.9759519038076, -521.0180360721442, -518.060120240481, -515.1022044088177, -512.1442885771544, -509.186372745491, -506.22845691382764, -503.27054108216436, -500.312625250501, -497.3547094188377, -494.39679358717433, -491.43887775551104, -488.4809619238477, -485.52304609218436, -482.565130260521, -479.60721442885773, -476.6492985971944, -473.69138276553105, -470.73346693386776, -467.7755511022044, -464.8176352705411, -461.85971943887773, -458.90180360721445, -455.9438877755511, -452.98597194388776, -450.0280561122245, -447.07014028056113, -444.1122244488978, -441.15430861723445, -438.19639278557116, -435.2384769539078, -432.2805611222445, -429.32264529058114, -426.36472945891785, -423.40681362725456, -420.44889779559117, -417.4909819639279, -414.5330661322645, -411.5751503006012, -408.6172344689379, -405.6593186372745, -402.7014028056112, -399.74348697394794, -396.78557114228454, -393.82765531062125, -390.86973947895797, -387.91182364729457, -384.9539078156313, -381.9959919839679, -379.0380761523046, -376.0801603206413, -373.1222444889779, -370.1643286573146, -367.20641282565134, -364.24849699398794, -361.29058116232466, -358.33266533066137, -355.37474949899797, -352.4168336673347, -349.4589178356713, -346.501002004008, -343.5430861723447, -340.5851703406813, -337.62725450901803, -334.66933867735474, -331.71142284569135, -328.75350701402806, -325.7955911823648, -322.8376753507014, -319.8797595190381, -316.9218436873748, -313.9639278557114, -311.0060120240481, -308.0480961923847, -305.09018036072143, -302.13226452905815, -299.17434869739475, -296.21643286573146, -293.2585170340682, -290.3006012024048, -287.3426853707415, -284.3847695390782, -281.4268537074148, -278.4689378757515, -275.5110220440881, -272.55310621242484, -269.59519038076155, -266.63727454909815, -263.67935871743487, -260.7214428857716, -257.7635270541082, -254.8056112224449, -251.8476953907816, -248.8897795591182, -245.93186372745492, -242.97394789579164, -240.01603206412824, -237.05811623246495, -234.10020040080155, -231.14228456913827, -228.18436873747498, -225.22645290581158, -222.2685370741483, -219.310621242485, -216.3527054108216, -213.39478957915833, -210.43687374749504, -207.47895791583164, -204.52104208416836, -201.56312625250496, -198.60521042084167, -195.6472945891784, -192.689378757515, -189.7314629258517, -186.77354709418842, -183.81563126252502, -180.85771543086173, -177.89979959919845, -174.94188376753505, -171.98396793587176, -169.02605210420836, -166.06813627254508, -163.1102204408818, -160.1523046092184, -157.1943887775551, -154.23647294589182, -151.27855711422842, -148.32064128256513, -145.36272545090185, -142.40480961923845, -139.44689378757516, -136.48897795591188, -133.53106212424848, -130.5731462925852, -127.6152304609218, -124.65731462925851, -121.69939879759522, -118.74148296593182, -115.78356713426854, -112.82565130260525, -109.86773547094185, -106.90981963927857, -103.95190380761528, -100.99398797595188, -98.0360721442886, -95.0781563126252, -92.12024048096191, -89.16232464929863, -86.20440881763523, -83.24649298597194, -80.28857715430865, -77.33066132264526, -74.37274549098197, -71.41482965931868, -68.45691382765528, -65.498997995992, -62.541082164328714, -59.583166332665314, -56.62525050100203, -53.66733466933863, -50.709418837675344, -47.75150300601206, -44.79358717434866, -41.83567134268537, -38.87775551102209, -35.91983967935869, -32.9619238476954, -30.004008016032117, -27.046092184368717, -24.088176352705432, -21.130260521042032, -18.172344689378747, -15.214428857715461, -12.256513026052062, -9.298597194388776, -6.3406813627254905, -3.382765531062091, -0.42484969939880557, 2.53306613226448, 5.490981963927879, 8.448897795591165, 11.406813627254564, 14.36472945891785, 17.322645290581136, 20.280561122244535, 23.23847695390782, 26.196392785571106, 29.154308617234506, 32.11222444889779, 35.07014028056108, 38.028056112224476, 40.98597194388776, 43.94388777555105, 46.90180360721445, 49.85971943887773, 52.81763527054113, 55.77555110220442, 58.7334669338677, 61.6913827655311, 64.64929859719439, 67.60721442885767, 70.56513026052107, 73.52304609218436, 76.48096192384764, 79.43887775551104, 82.39679358717444, 85.35470941883773, 88.31262525050101, 91.2705410821643, 94.22845691382759, 97.18637274549087, 100.14428857715438, 103.10220440881767, 106.06012024048096, 109.01803607214424, 111.97595190380753, 114.93386773547104, 117.89178356713433, 120.84969939879761, 123.8076152304609, 126.76553106212418, 129.72344689378747, 132.68136272545098, 135.63927855711427, 138.59719438877755, 141.55511022044084, 144.51302605210412, 147.47094188376764, 150.42885771543092, 153.3867735470942, 156.3446893787575, 159.30260521042078, 162.26052104208406, 165.21843687374758, 168.17635270541086, 171.13426853707415, 174.09218436873743, 177.05010020040072, 180.00801603206423, 182.96593186372752, 185.9238476953908, 188.8817635270541, 191.83967935871738, 194.79759519038066, 197.75551102204417, 200.71342685370746, 203.67134268537075, 206.62925851703403, 209.58717434869732, 212.54509018036083, 215.50300601202412, 218.4609218436874, 221.4188376753507, 224.37675350701397, 227.33466933867726, 230.29258517034077, 233.25050100200406, 236.20841683366734, 239.16633266533063, 242.1242484969939, 245.08216432865743, 248.0400801603207, 250.997995991984, 253.95591182364728, 256.91382765531057, 259.87174348697386, 262.82965931863737, 265.78757515030065, 268.74549098196394, 271.7034068136272, 274.6613226452905, 277.6192384769538, 280.5771543086173, 283.5350701402806, 286.4929859719439, 289.45090180360717, 292.40881763527045, 295.36673346693397, 298.32464929859725, 301.28256513026054, 304.2404809619238, 307.1983967935871, 310.1563126252504, 313.1142284569139, 316.0721442885772, 319.0300601202405, 321.98797595190376, 324.94589178356705, 327.90380761523056, 330.86172344689385, 333.81963927855713, 336.7775551102204, 339.7354709418837, 342.693386773547, 345.6513026052105, 348.6092184368738, 351.5671342685371, 354.52505010020036, 357.48296593186365, 360.44088176352716, 363.39879759519044, 366.35671342685373, 369.314629258517, 372.2725450901803, 375.2304609218436, 378.1883767535071, 381.1462925851704, 384.10420841683367, 387.06212424849696, 390.02004008016024, 392.97795591182376, 395.93587174348704, 398.8937875751503, 401.8517034068136, 404.8096192384769, 407.7675350701402, 410.7254509018037, 413.683366733467, 416.64128256513027, 419.59919839679355, 422.55711422845684, 425.51503006012035, 428.47294589178364, 431.4308617234469, 434.3887775551102, 437.3466933867735, 440.3046092184368, 443.2625250501003, 446.2204408817636, 449.17835671342687, 452.13627254509015, 455.09418837675344, 458.0521042084167, 461.01002004008024, 463.9679358717435, 466.9258517034068, 469.8837675350701, 472.8416833667334, 475.7995991983969, 478.7575150300602, 481.71543086172346, 484.67334669338675, 487.63126252505003, 490.5891783567133, 493.54709418837683, 496.5050100200401, 499.4629258517034, 502.4208416833667, 505.37875751503, 508.3366733466935, 511.2945891783568, 514.2525050100201, 517.2104208416833, 520.1683366733466, 523.1262525050099, 526.0841683366734, 529.0420841683367, 532.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_8cb4f0a6366a458d910eb19b57517421.x = d3.scale.linear()
              .domain([-944.0, 532.0])
              .range([0, 400]);

    color_map_8cb4f0a6366a458d910eb19b57517421.legend = L.control({position: 'topright'});
    color_map_8cb4f0a6366a458d910eb19b57517421.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_8cb4f0a6366a458d910eb19b57517421.legend.addTo(map_c491e82fb24c412fad3f61a393d6dc06);

    color_map_8cb4f0a6366a458d910eb19b57517421.xAxis = d3.svg.axis()
        .scale(color_map_8cb4f0a6366a458d910eb19b57517421.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-944.0, -698.0, -452.0, -206.0, 40.0, 286.0, 532.0]);

    color_map_8cb4f0a6366a458d910eb19b57517421.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_8cb4f0a6366a458d910eb19b57517421.g = color_map_8cb4f0a6366a458d910eb19b57517421.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_8cb4f0a6366a458d910eb19b57517421.g.selectAll("rect")
        .data(color_map_8cb4f0a6366a458d910eb19b57517421.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_8cb4f0a6366a458d910eb19b57517421.x(color_map_8cb4f0a6366a458d910eb19b57517421.color.domain()[i - 1]) : color_map_8cb4f0a6366a458d910eb19b57517421.x.range()[0],
            x1: i < color_map_8cb4f0a6366a458d910eb19b57517421.color.domain().length ? color_map_8cb4f0a6366a458d910eb19b57517421.x(color_map_8cb4f0a6366a458d910eb19b57517421.color.domain()[i]) : color_map_8cb4f0a6366a458d910eb19b57517421.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_8cb4f0a6366a458d910eb19b57517421.g.call(color_map_8cb4f0a6366a458d910eb19b57517421.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('25_50_MARCOS PAULO COSTA DA SILVA');

