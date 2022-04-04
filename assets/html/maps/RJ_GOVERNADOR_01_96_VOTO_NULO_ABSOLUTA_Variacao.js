    
            var map_eea568172c48468a98d4b8808199bdce = L.map(
                "map_eea568172c48468a98d4b8808199bdce",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_efc9ad6fad2547cab88c11c67529d75e = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_eea568172c48468a98d4b8808199bdce);
        
    
            var choropleth_41853b92911e4d409304a75d2331dee7 = L.featureGroup(
                {}
            ).addTo(map_eea568172c48468a98d4b8808199bdce);
        
    
        function geo_json_ef59e9fe0de949b394dcaa4d88db1f2b_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_ef59e9fe0de949b394dcaa4d88db1f2b_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_ef59e9fe0de949b394dcaa4d88db1f2b = L.geoJson(null, {
                onEachFeature: geo_json_ef59e9fe0de949b394dcaa4d88db1f2b_onEachFeature,
            
                style: geo_json_ef59e9fe0de949b394dcaa4d88db1f2b_styler,
        });

        function geo_json_ef59e9fe0de949b394dcaa4d88db1f2b_add (data) {
            geo_json_ef59e9fe0de949b394dcaa4d88db1f2b
                .addData(data)
                .addTo(choropleth_41853b92911e4d409304a75d2331dee7);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_ef59e9fe0de949b394dcaa4d88db1f2b_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_08d56581346d404585cf8c8bc19ac2c6 = {};

    
    color_map_08d56581346d404585cf8c8bc19ac2c6.color = d3.scale.threshold()
              .domain([-182468.0, -182086.64729458917, -181705.29458917835, -181323.94188376755, -180942.58917835672, -180561.2364729459, -180179.88376753507, -179798.53106212424, -179417.17835671344, -179035.8256513026, -178654.4729458918, -178273.12024048096, -177891.76753507013, -177510.4148296593, -177129.0621242485, -176747.70941883768, -176366.35671342685, -175985.00400801603, -175603.6513026052, -175222.2985971944, -174840.94589178357, -174459.59318637275, -174078.24048096192, -173696.8877755511, -173315.5350701403, -172934.18236472947, -172552.82965931864, -172171.4769539078, -171790.12424849698, -171408.77154308616, -171027.41883767536, -170646.06613226453, -170264.7134268537, -169883.36072144288, -169502.00801603205, -169120.65531062125, -168739.30260521043, -168357.9498997996, -167976.59719438877, -167595.24448897794, -167213.89178356715, -166832.53907815632, -166451.1863727455, -166069.83366733466, -165688.48096192384, -165307.12825651304, -164925.7755511022, -164544.42284569138, -164163.07014028056, -163781.71743486973, -163400.36472945893, -163019.0120240481, -162637.65931863728, -162256.30661322645, -161874.95390781562, -161493.60120240483, -161112.248496994, -160730.89579158317, -160349.54308617234, -159968.19038076152, -159586.8376753507, -159205.4849699399, -158824.13226452906, -158442.77955911824, -158061.4268537074, -157680.07414829658, -157298.72144288578, -156917.36873747496, -156536.01603206413, -156154.6633266533, -155773.31062124248, -155391.95791583165, -155010.60521042085, -154629.25250501002, -154247.8997995992, -153866.54709418837, -153485.19438877754, -153103.84168336674, -152722.48897795592, -152341.1362725451, -151959.78356713426, -151578.43086172343, -151197.07815631264, -150815.7254509018, -150434.37274549098, -150053.02004008016, -149671.66733466933, -149290.31462925853, -148908.9619238477, -148527.60921843688, -148146.25651302605, -147764.90380761522, -147383.55110220442, -147002.1983967936, -146620.84569138277, -146239.49298597194, -145858.1402805611, -145476.78757515032, -145095.4348697395, -144714.08216432866, -144332.72945891783, -143951.376753507, -143570.0240480962, -143188.67134268535, -142807.31863727455, -142425.96593186373, -142044.6132264529, -141663.26052104207, -141281.90781563125, -140900.55511022045, -140519.20240480962, -140137.8496993988, -139756.49699398797, -139375.14428857714, -138993.79158316634, -138612.4388777555, -138231.0861723447, -137849.73346693386, -137468.38076152303, -137087.02805611223, -136705.6753507014, -136324.32264529058, -135942.96993987975, -135561.61723446893, -135180.26452905813, -134798.9118236473, -134417.55911823647, -134036.20641282565, -133654.85370741482, -133273.50100200402, -132892.1482965932, -132510.79559118237, -132129.44288577154, -131748.0901803607, -131366.7374749499, -130985.38476953909, -130604.03206412826, -130222.67935871743, -129841.3266533066, -129459.97394789579, -129078.62124248498, -128697.26853707415, -128315.91583166333, -127934.5631262525, -127553.21042084169, -127171.85771543086, -126790.50501002005, -126409.15230460922, -126027.79959919839, -125646.44689378756, -125265.09418837675, -124883.74148296594, -124502.38877755511, -124121.03607214428, -123739.68336673346, -123358.33066132265, -122976.97795591183, -122595.625250501, -122214.27254509018, -121832.91983967935, -121451.56713426854, -121070.21442885773, -120688.8617234469, -120307.50901803607, -119926.15631262524, -119544.80360721443, -119163.4509018036, -118782.09819639279, -118400.74549098196, -118019.39278557114, -117638.04008016031, -117256.6873747495, -116875.33466933867, -116493.98196392786, -116112.62925851703, -115731.27655310622, -115349.92384769539, -114968.57114228456, -114587.21843687375, -114205.86573146292, -113824.51302605211, -113443.16032064128, -113061.80761523046, -112680.45490981964, -112299.10220440882, -111917.74949899799, -111536.39679358718, -111155.04408817635, -110773.69138276554, -110392.33867735471, -110010.98597194388, -109629.63326653307, -109248.28056112224, -108866.92785571142, -108485.5751503006, -108104.22244488978, -107722.86973947896, -107341.51703406814, -106960.16432865731, -106578.8116232465, -106197.45891783567, -105816.10621242486, -105434.75350701403, -105053.4008016032, -104672.04809619239, -104290.69539078156, -103909.34268537074, -103527.98997995992, -103146.6372745491, -102765.28456913828, -102383.93186372746, -102002.57915831663, -101621.22645290582, -101239.87374749499, -100858.52104208416, -100477.16833667335, -100095.81563126252, -99714.46292585171, -99333.11022044088, -98951.75751503005, -98570.40480961924, -98189.05210420841, -97807.6993987976, -97426.34669338677, -97044.99398797595, -96663.64128256514, -96282.28857715431, -95900.93587174348, -95519.58316633267, -95138.23046092184, -94756.87775551103, -94375.5250501002, -93994.17234468937, -93612.81963927856, -93231.46693386773, -92850.1142284569, -92468.7615230461, -92087.40881763527, -91706.05611222445, -91324.70340681363, -90943.3507014028, -90561.99799599199, -90180.64529058116, -89799.29258517035, -89417.93987975952, -89036.5871743487, -88655.23446893788, -88273.88176352705, -87892.52905811623, -87511.17635270541, -87129.82364729459, -86748.47094188377, -86367.11823647295, -85985.76553106212, -85604.4128256513, -85223.06012024048, -84841.70741482965, -84460.35470941884, -84079.00200400801, -83697.6492985972, -83316.29659318637, -82934.94388777555, -82553.59118236473, -82172.2384769539, -81790.8857715431, -81409.53306613227, -81028.18036072144, -80646.82765531063, -80265.4749498998, -79884.12224448897, -79502.76953907816, -79121.41683366733, -78740.06412825652, -78358.71142284569, -77977.35871743486, -77596.00601202405, -77214.65330661323, -76833.3006012024, -76451.94789579159, -76070.59519038076, -75689.24248496995, -75307.88977955912, -74926.53707414829, -74545.18436873748, -74163.83166332665, -73782.47895791584, -73401.12625250501, -73019.77354709418, -72638.42084168337, -72257.06813627254, -71875.71543086172, -71494.3627254509, -71113.01002004008, -70731.65731462926, -70350.30460921844, -69968.95190380761, -69587.5991983968, -69206.24649298597, -68824.89378757514, -68443.54108216433, -68062.1883767535, -67680.83567134269, -67299.48296593186, -66918.13026052104, -66536.77755511022, -66155.4248496994, -65774.07214428858, -65392.71943887776, -65011.36673346693, -64630.01402805612, -64248.66132264529, -63867.30861723446, -63485.95591182365, -63104.60320641282, -62723.25050100201, -62341.89779559118, -61960.545090180356, -61579.19238476954, -61197.839679358716, -60816.48697394789, -60435.13426853708, -60053.78156312625, -59672.42885771544, -59291.07615230461, -58909.72344689378, -58528.37074148297, -58147.01803607214, -57765.66533066133, -57384.3126252505, -57002.959919839675, -56621.60721442886, -56240.254509018036, -55858.90180360721, -55477.549098196396, -55096.19639278557, -54714.843687374756, -54333.49098196393, -53952.1382765531, -53570.78557114229, -53189.43286573146, -52808.080160320635, -52426.72745490982, -52045.374749498995, -51664.02204408818, -51282.66933867734, -50901.31663326654, -50519.963927855715, -50138.61122244489, -49757.25851703406, -49375.90581162323, -48994.553106212436, -48613.20040080161, -48231.84769539078, -47850.494989979954, -47469.14228456913, -47087.78957915833, -46706.4368737475, -46325.084168336674, -45943.73146292585, -45562.37875751502, -45181.02605210422, -44799.673346693395, -44418.32064128257, -44036.96793587174, -43655.61523046091, -43274.262525050086, -42892.90981963929, -42511.55711422846, -42130.20440881763, -41748.851703406806, -41367.49899799598, -40986.14629258518, -40604.793587174354, -40223.44088176353, -39842.0881763527, -39460.73547094187, -39079.382765531074, -38698.03006012025, -38316.67735470942, -37935.32464929859, -37553.971943887766, -37172.61923847697, -36791.26653306614, -36409.91382765531, -36028.561122244486, -35647.20841683366, -35265.85571142283, -34884.50300601203, -34503.150300601206, -34121.79759519038, -33740.44488977955, -33359.092184368725, -32977.73947895793, -32596.3867735471, -32215.034068136272, -31833.681362725445, -31452.328657314618, -31070.97595190382, -30689.623246492993, -30308.270541082165, -29926.91783567134, -29545.56513026051, -29164.212424849713, -28782.859719438886, -28401.50701402806, -28020.15430861723, -27638.801603206404, -27257.448897795577, -26876.09619238478, -26494.74348697395, -26113.390781563125, -25732.038076152297, -25350.68537074147, -24969.332665330672, -24587.979959919845, -24206.627254509018, -23825.27454909819, -23443.921843687363, -23062.569138276565, -22681.216432865738, -22299.86372745491, -21918.511022044084, -21537.158316633257, -21155.80561122246, -20774.45290581163, -20393.100200400804, -20011.747494989977, -19630.39478957915, -19249.042084168323, -18867.689378757525, -18486.336673346697, -18104.98396793587, -17723.631262525043, -17342.278557114216, -16960.925851703418, -16579.57314629259, -16198.220440881763, -15816.867735470936, -15435.515030060109, -15054.16232464931, -14672.809619238484, -14291.456913827657, -13910.10420841683, -13528.751503006002, -13147.398797595204, -12766.046092184377, -12384.69338677355, -12003.340681362723, -11621.987975951895, -11240.635270541068, -10859.28256513027, -10477.929859719443, -10096.577154308616, -9715.224448897789, -9333.871743486961, -8952.519038076163, -8571.166332665336, -8189.813627254509, -7808.460921843682, -7427.1082164328545, -7045.755511022056, -6664.402805611229, -6283.050100200402, -5901.697394789575, -5520.344689378748, -5138.99198396795, -4757.639278557122, -4376.286573146295, -3994.933867735468, -3613.581162324641, -3232.2284569138137, -2850.8757515030156, -2469.5230460921885, -2088.1703406813613, -1706.817635270534, -1325.464929859707, -944.1122244489088, -562.7595190380816, -181.40681362725445, 199.94589178357273, 581.2985971943999, 962.651302605198, 1344.0040080160252, 1725.3567134268524, 2106.7094188376796, 2488.0621242485067, 2869.414829659305, 3250.767535070132, 3632.120240480959, 4013.4729458917864, 4394.825651302614, 4776.178356713441, 5157.531062124239, 5538.883767535066, 5920.236472945893, 6301.58917835672, 6682.941883767548, 7064.294589178346, 7445.647294589173, 7827.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_08d56581346d404585cf8c8bc19ac2c6.x = d3.scale.linear()
              .domain([-182468.0, 7827.0])
              .range([0, 400]);

    color_map_08d56581346d404585cf8c8bc19ac2c6.legend = L.control({position: 'topright'});
    color_map_08d56581346d404585cf8c8bc19ac2c6.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_08d56581346d404585cf8c8bc19ac2c6.legend.addTo(map_eea568172c48468a98d4b8808199bdce);

    color_map_08d56581346d404585cf8c8bc19ac2c6.xAxis = d3.svg.axis()
        .scale(color_map_08d56581346d404585cf8c8bc19ac2c6.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-182468.0, -150752.16666666666, -119036.33333333334, -87320.5, -55604.66666666667, -23888.833333333343, 7827.0]);

    color_map_08d56581346d404585cf8c8bc19ac2c6.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_08d56581346d404585cf8c8bc19ac2c6.g = color_map_08d56581346d404585cf8c8bc19ac2c6.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_08d56581346d404585cf8c8bc19ac2c6.g.selectAll("rect")
        .data(color_map_08d56581346d404585cf8c8bc19ac2c6.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_08d56581346d404585cf8c8bc19ac2c6.x(color_map_08d56581346d404585cf8c8bc19ac2c6.color.domain()[i - 1]) : color_map_08d56581346d404585cf8c8bc19ac2c6.x.range()[0],
            x1: i < color_map_08d56581346d404585cf8c8bc19ac2c6.color.domain().length ? color_map_08d56581346d404585cf8c8bc19ac2c6.x(color_map_08d56581346d404585cf8c8bc19ac2c6.color.domain()[i]) : color_map_08d56581346d404585cf8c8bc19ac2c6.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_08d56581346d404585cf8c8bc19ac2c6.g.call(color_map_08d56581346d404585cf8c8bc19ac2c6.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');

