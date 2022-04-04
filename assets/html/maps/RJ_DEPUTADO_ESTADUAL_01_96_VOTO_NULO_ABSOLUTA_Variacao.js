    
            var map_4fa2938be58c4970b99424f21b7e2d87 = L.map(
                "map_4fa2938be58c4970b99424f21b7e2d87",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_79d85e73fc4d4d99b85bd65a40fe47ca = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_4fa2938be58c4970b99424f21b7e2d87);
        
    
            var choropleth_702572eab2624bdfa084ba7aac3db62c = L.featureGroup(
                {}
            ).addTo(map_4fa2938be58c4970b99424f21b7e2d87);
        
    
        function geo_json_61124caeee4643f2bf4ae64b75156fd3_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_61124caeee4643f2bf4ae64b75156fd3_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_61124caeee4643f2bf4ae64b75156fd3 = L.geoJson(null, {
                onEachFeature: geo_json_61124caeee4643f2bf4ae64b75156fd3_onEachFeature,
            
                style: geo_json_61124caeee4643f2bf4ae64b75156fd3_styler,
        });

        function geo_json_61124caeee4643f2bf4ae64b75156fd3_add (data) {
            geo_json_61124caeee4643f2bf4ae64b75156fd3
                .addData(data)
                .addTo(choropleth_702572eab2624bdfa084ba7aac3db62c);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_61124caeee4643f2bf4ae64b75156fd3_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_d0c0a033bca24a93b878db3e24e1ecb3 = {};

    
    color_map_d0c0a033bca24a93b878db3e24e1ecb3.color = d3.scale.threshold()
              .domain([-155711.0, -155386.59118236473, -155062.18236472947, -154737.7735470942, -154413.36472945893, -154088.95591182364, -153764.54709418837, -153440.1382765531, -153115.72945891783, -152791.32064128257, -152466.9118236473, -152142.50300601203, -151818.09418837677, -151493.68537074147, -151169.2765531062, -150844.86773547094, -150520.45891783567, -150196.0501002004, -149871.64128256514, -149547.23246492987, -149222.8236472946, -148898.4148296593, -148574.00601202404, -148249.59719438877, -147925.1883767535, -147600.77955911824, -147276.37074148297, -146951.9619238477, -146627.55310621244, -146303.14428857714, -145978.73547094187, -145654.3266533066, -145329.91783567134, -145005.50901803607, -144681.1002004008, -144356.69138276554, -144032.28256513027, -143707.873747495, -143383.4649298597, -143059.05611222444, -142734.64729458917, -142410.2384769539, -142085.82965931864, -141761.42084168337, -141437.0120240481, -141112.60320641284, -140788.19438877754, -140463.78557114227, -140139.376753507, -139814.96793587174, -139490.55911823647, -139166.1503006012, -138841.74148296594, -138517.33266533067, -138192.9238476954, -137868.5150300601, -137544.10621242484, -137219.69739478957, -136895.2885771543, -136570.87975951904, -136246.47094188377, -135922.0621242485, -135597.6533066132, -135273.24448897794, -134948.83567134268, -134624.4268537074, -134300.01803607214, -133975.60921843688, -133651.2004008016, -133326.79158316634, -133002.38276553107, -132677.9739478958, -132353.5651302605, -132029.15631262524, -131704.74749498998, -131380.3386773547, -131055.92985971944, -130731.52104208418, -130407.1122244489, -130082.70340681363, -129758.29458917836, -129433.88577154308, -129109.47695390781, -128785.06813627254, -128460.65931863728, -128136.25050100201, -127811.84168336673, -127487.43286573146, -127163.0240480962, -126838.61523046091, -126514.20641282565, -126189.79759519038, -125865.38877755511, -125540.97995991984, -125216.57114228458, -124892.1623246493, -124567.75350701403, -124243.34468937876, -123918.93587174348, -123594.52705410821, -123270.11823647295, -122945.70941883768, -122621.30060120241, -122296.89178356713, -121972.48296593186, -121648.07414829658, -121323.66533066132, -120999.25651302605, -120674.84769539078, -120350.43887775551, -120026.03006012025, -119701.62124248498, -119377.2124248497, -119052.80360721443, -118728.39478957915, -118403.98597194388, -118079.57715430862, -117755.16833667335, -117430.75951903808, -117106.35070140281, -116781.94188376753, -116457.53306613227, -116133.12424849698, -115808.71543086172, -115484.30661322645, -115159.89779559118, -114835.48897795592, -114511.08016032065, -114186.67134268537, -113862.2625250501, -113537.85370741482, -113213.44488977955, -112889.03607214428, -112564.62725450902, -112240.21843687375, -111915.80961923848, -111591.40080160322, -111266.99198396794, -110942.58316633267, -110618.17434869739, -110293.76553106212, -109969.35671342685, -109644.94789579159, -109320.53907815632, -108996.13026052105, -108671.72144288577, -108347.3126252505, -108022.90380761522, -107698.49498997995, -107374.08617234469, -107049.67735470942, -106725.26853707415, -106400.85971943889, -106076.4509018036, -105752.04208416834, -105427.63326653306, -105103.22444889779, -104778.81563126252, -104454.40681362725, -104129.99799599199, -103805.58917835672, -103481.18036072145, -103156.77154308617, -102832.3627254509, -102507.95390781562, -102183.54509018036, -101859.13627254509, -101534.72745490982, -101210.31863727455, -100885.90981963929, -100561.501002004, -100237.09218436874, -99912.68336673346, -99588.27454909819, -99263.86573146292, -98939.45691382766, -98615.04809619239, -98290.63927855712, -97966.23046092184, -97641.82164328657, -97317.41282565129, -96993.00400801603, -96668.59519038076, -96344.18637274549, -96019.77755511022, -95695.36873747496, -95370.95991983969, -95046.55110220441, -94722.14228456914, -94397.73346693386, -94073.32464929859, -93748.91583166333, -93424.50701402806, -93100.09819639279, -92775.68937875752, -92451.28056112224, -92126.87174348698, -91802.4629258517, -91478.05410821643, -91153.64529058116, -90829.2364729459, -90504.82765531063, -90180.41883767536, -89856.01002004008, -89531.60120240481, -89207.19238476954, -88882.78356713426, -88558.374749499, -88233.96593186373, -87909.55711422846, -87585.14829659318, -87260.73947895791, -86936.33066132265, -86611.92184368738, -86287.51302605211, -85963.10420841683, -85638.69539078156, -85314.2865731463, -84989.87775551103, -84665.46893787575, -84341.06012024048, -84016.65130260521, -83692.24248496995, -83367.83366733466, -83043.4248496994, -82719.01603206413, -82394.60721442886, -82070.19839679358, -81745.78957915831, -81421.38076152305, -81096.97194388778, -80772.5631262525, -80448.15430861723, -80123.74549098196, -79799.3366733467, -79474.92785571142, -79150.51903807615, -78826.11022044088, -78501.70140280561, -78177.29258517035, -77852.88376753507, -77528.4749498998, -77204.06613226453, -76879.65731462926, -76555.24849699398, -76230.83967935872, -75906.43086172345, -75582.02204408818, -75257.6132264529, -74933.20440881763, -74608.79559118237, -74284.3867735471, -73959.97795591182, -73635.56913827655, -73311.16032064128, -72986.75150300602, -72662.34268537074, -72337.93386773547, -72013.5250501002, -71689.11623246493, -71364.70741482965, -71040.29859719439, -70715.88977955912, -70391.48096192385, -70067.07214428858, -69742.6633266533, -69418.25450901804, -69093.84569138277, -68769.4368737475, -68445.02805611222, -68120.61923847695, -67796.21042084169, -67471.80160320642, -67147.39278557114, -66822.98396793587, -66498.5751503006, -66174.16633266534, -65849.75751503005, -65525.34869739479, -65200.93987975952, -64876.53106212425, -64552.12224448897, -64227.713426853705, -63903.30460921844, -63578.89579158317, -63254.48697394789, -62930.07815631262, -62605.669338677355, -62281.26052104209, -61956.85170340682, -61632.44288577154, -61308.03406813627, -60983.625250501005, -60659.21643286574, -60334.80761523046, -60010.39879759519, -59685.98997995992, -59361.581162324655, -59037.172344689374, -58712.76352705411, -58388.35470941884, -58063.94589178357, -57739.53707414829, -57415.128256513024, -57090.71943887776, -56766.31062124249, -56441.90180360721, -56117.49298597194, -55793.084168336674, -55468.67535070141, -55144.266533066126, -54819.85771543086, -54495.44889779559, -54171.040080160325, -53846.63126252504, -53522.222444889776, -53197.81362725451, -52873.40480961924, -52548.995991983975, -52224.58717434869, -51900.178356713426, -51575.76953907816, -51251.36072144289, -50926.95190380761, -50602.54308617234, -50278.13426853708, -49953.72545090181, -49629.31663326653, -49304.90781563126, -48980.498997995994, -48656.09018036073, -48331.681362725445, -48007.27254509018, -47682.86372745491, -47358.454909819644, -47034.04609218436, -46709.637274549095, -46385.22845691383, -46060.81963927856, -45736.41082164328, -45412.00200400801, -45087.593186372746, -44763.18436873748, -44438.77555110221, -44114.36673346693, -43789.95791583166, -43465.549098196396, -43141.14028056113, -42816.73146292585, -42492.32264529058, -42167.91382765531, -41843.505010020046, -41519.096192384764, -41194.6873747495, -40870.27855711423, -40545.86973947896, -40221.46092184368, -39897.052104208415, -39572.64328657315, -39248.23446893788, -38923.8256513026, -38599.41683366733, -38275.008016032065, -37950.5991983968, -37626.190380761516, -37301.78156312625, -36977.37274549098, -36652.963927855715, -36328.55511022045, -36004.14629258517, -35679.7374749499, -35355.32865731463, -35030.919839679365, -34706.511022044084, -34382.10220440882, -34057.69338677355, -33733.28456913828, -33408.875751503, -33084.466933867734, -32760.058116232467, -32435.6492985972, -32111.24048096192, -31786.83166332665, -31462.422845691384, -31138.014028056117, -30813.605210420836, -30489.19639278557, -30164.7875751503, -29840.378757515035, -29515.969939879753, -29191.561122244486, -28867.15230460922, -28542.74348697395, -28218.33466933867, -27893.925851703403, -27569.517034068136, -27245.10821643287, -26920.699398797602, -26596.29058116232, -26271.881763527053, -25947.472945891786, -25623.06412825652, -25298.655310621238, -24974.24649298597, -24649.837675350704, -24325.428857715422, -24001.020040080155, -23676.611222444888, -23352.20240480962, -23027.793587174354, -22703.384769539087, -22378.97595190382, -22054.567134268524, -21730.158316633257, -21405.74949899799, -21081.340681362723, -20756.931863727455, -20432.52304609219, -20108.11422845692, -19783.705410821654, -19459.29659318636, -19134.88777555109, -18810.478957915824, -18486.070140280557, -18161.66132264529, -17837.252505010023, -17512.843687374756, -17188.43486973949, -16864.026052104222, -16539.617234468926, -16215.208416833659, -15890.799599198392, -15566.390781563125, -15241.981963927858, -14917.57314629259, -14593.164328657323, -14268.755511022056, -13944.34669338676, -13619.937875751493, -13295.529058116226, -12971.12024048096, -12646.711422845692, -12322.302605210425, -11997.893787575158, -11673.484969939891, -11349.076152304595, -11024.667334669328, -10700.25851703406, -10375.849699398794, -10051.440881763527, -9727.03206412826, -9402.623246492993, -9078.214428857726, -8753.805611222459, -8429.396793587162, -8104.987975951895, -7780.579158316628, -7456.170340681361, -7131.761523046094, -6807.352705410827, -6482.94388777556, -6158.535070140293, -5834.126252504997, -5509.71743486973, -5185.308617234463, -4860.899799599196, -4536.490981963929, -4212.082164328662, -3887.6733466933947, -3563.2645290581277, -3238.8557114228315, -2914.4468937875645, -2590.0380761522974, -2265.6292585170304, -1941.2204408817634, -1616.8116232464963, -1292.4028056112293, -967.9939879759622, -643.5851703406952, -319.17635270539904, 5.2324649298680015, 329.64128256513504, 654.0501002004021, 978.4589178356691, 1302.8677354709362, 1627.2765531062032, 1951.6853707414703, 2276.0941883767664, 2600.5030060120334, 2924.9118236473005, 3249.3206412825675, 3573.7294589178346, 3898.1382765531016, 4222.547094188369, 4546.955911823636, 4871.364729458932, 5195.773547094199, 5520.182364729466, 5844.591182364733, 6169.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_d0c0a033bca24a93b878db3e24e1ecb3.x = d3.scale.linear()
              .domain([-155711.0, 6169.0])
              .range([0, 400]);

    color_map_d0c0a033bca24a93b878db3e24e1ecb3.legend = L.control({position: 'topright'});
    color_map_d0c0a033bca24a93b878db3e24e1ecb3.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_d0c0a033bca24a93b878db3e24e1ecb3.legend.addTo(map_4fa2938be58c4970b99424f21b7e2d87);

    color_map_d0c0a033bca24a93b878db3e24e1ecb3.xAxis = d3.svg.axis()
        .scale(color_map_d0c0a033bca24a93b878db3e24e1ecb3.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-155711.0, -128731.0, -101751.0, -74771.0, -47791.0, -20811.0, 6169.0]);

    color_map_d0c0a033bca24a93b878db3e24e1ecb3.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_d0c0a033bca24a93b878db3e24e1ecb3.g = color_map_d0c0a033bca24a93b878db3e24e1ecb3.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_d0c0a033bca24a93b878db3e24e1ecb3.g.selectAll("rect")
        .data(color_map_d0c0a033bca24a93b878db3e24e1ecb3.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_d0c0a033bca24a93b878db3e24e1ecb3.x(color_map_d0c0a033bca24a93b878db3e24e1ecb3.color.domain()[i - 1]) : color_map_d0c0a033bca24a93b878db3e24e1ecb3.x.range()[0],
            x1: i < color_map_d0c0a033bca24a93b878db3e24e1ecb3.color.domain().length ? color_map_d0c0a033bca24a93b878db3e24e1ecb3.x(color_map_d0c0a033bca24a93b878db3e24e1ecb3.color.domain()[i]) : color_map_d0c0a033bca24a93b878db3e24e1ecb3.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_d0c0a033bca24a93b878db3e24e1ecb3.g.call(color_map_d0c0a033bca24a93b878db3e24e1ecb3.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');

