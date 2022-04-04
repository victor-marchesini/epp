    
            var map_1153df6ac5f340a49f57dbad0931e06f = L.map(
                "map_1153df6ac5f340a49f57dbad0931e06f",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_6e4bc86747cb4a0e8865985349bdf517 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1153df6ac5f340a49f57dbad0931e06f);
        
    
            var choropleth_80e83d1fbaa647eca04c2e5c8491d196 = L.featureGroup(
                {}
            ).addTo(map_1153df6ac5f340a49f57dbad0931e06f);
        
    
        function geo_json_b3d3666af9d043bf8c5615ba3b4d57db_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 434: case 410: case 325: case 440: case 448: case 438: case 449: case 447: case 462: case 456: case 467: case 466: case 455: case 478: case 474: case 393: case 381: case 346: case 361: case 368: case 348: case 475: case 356: case 350: case 457: case 463: case 483: case 469: case 366: case 477: case 387: case 341: case 405: case 476: case 365: case 890: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 428: case 453: case 473: case 472: case 468: case 464: case 470: case 358: case 458: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 424: case 417: case 345: case 383: case 375: case 408: case 397: case 404: case 395: case 401: case 390: case 334: case 327: case 326: case 336: case 329: case 331: case 330: case 445: case 429: case 399: case 402: case 480: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 435: case 423: case 471: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_b3d3666af9d043bf8c5615ba3b4d57db_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_b3d3666af9d043bf8c5615ba3b4d57db = L.geoJson(null, {
                onEachFeature: geo_json_b3d3666af9d043bf8c5615ba3b4d57db_onEachFeature,
            
                style: geo_json_b3d3666af9d043bf8c5615ba3b4d57db_styler,
        });

        function geo_json_b3d3666af9d043bf8c5615ba3b4d57db_add (data) {
            geo_json_b3d3666af9d043bf8c5615ba3b4d57db
                .addData(data)
                .addTo(choropleth_80e83d1fbaa647eca04c2e5c8491d196);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_b3d3666af9d043bf8c5615ba3b4d57db_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_28fdf1933e1b413f97b3185e71674995 = {};

    
    color_map_28fdf1933e1b413f97b3185e71674995.color = d3.scale.threshold()
              .domain([0.0, 0.00035498018178245326, 0.0007099603635649065, 0.0010649405453473598, 0.001419920727129813, 0.0017749009089122665, 0.0021298810906947197, 0.002484861272477173, 0.002839841454259626, 0.0031948216360420793, 0.003549801817824533, 0.003904781999606986, 0.004259762181389439, 0.0046147423631718925, 0.004969722544954346, 0.005324702726736799, 0.005679682908519252, 0.006034663090301705, 0.0063896432720841586, 0.006744623453866613, 0.007099603635649066, 0.007454583817431519, 0.007809563999213972, 0.008164544180996425, 0.008519524362778879, 0.008874504544561332, 0.009229484726343785, 0.00958446490812624, 0.009939445089908691, 0.010294425271691145, 0.010649405453473598, 0.011004385635256051, 0.011359365817038504, 0.011714345998820958, 0.01206932618060341, 0.012424306362385864, 0.012779286544168317, 0.01313426672595077, 0.013489246907733225, 0.013844227089515678, 0.014199207271298132, 0.014554187453080585, 0.014909167634863038, 0.015264147816645491, 0.015619127998427944, 0.015974108180210396, 0.01632908836199285, 0.016684068543775306, 0.017039048725557757, 0.017394028907340212, 0.017749009089122664, 0.01810398927090512, 0.01845896945268757, 0.018813949634470025, 0.01916892981625248, 0.019523909998034928, 0.019878890179817383, 0.020233870361599834, 0.02058885054338229, 0.02094383072516474, 0.021298810906947196, 0.021653791088729647, 0.022008771270512102, 0.022363751452294554, 0.02271873163407701, 0.023073711815859464, 0.023428691997641915, 0.02378367217942437, 0.02413865236120682, 0.024493632542989276, 0.024848612724771728, 0.025203592906554183, 0.025558573088336634, 0.02591355327011909, 0.02626853345190154, 0.026623513633683996, 0.02697849381546645, 0.027333473997248902, 0.027688454179031357, 0.02804343436081381, 0.028398414542596263, 0.028753394724378715, 0.02910837490616117, 0.02946335508794362, 0.029818335269726076, 0.030173315451508528, 0.030528295633290983, 0.030883275815073438, 0.03123825599685589, 0.031593236178638344, 0.03194821636042079, 0.03230319654220325, 0.0326581767239857, 0.03301315690576815, 0.03336813708755061, 0.03372311726933306, 0.034078097451115515, 0.03443307763289797, 0.034788057814680425, 0.03514303799646287, 0.03549801817824533, 0.03585299836002778, 0.03620797854181024, 0.036562958723592685, 0.03691793890537514, 0.037272919087157595, 0.03762789926894005, 0.0379828794507225, 0.03833785963250496, 0.03869283981428741, 0.039047819996069856, 0.03940280017785231, 0.039757780359634766, 0.04011276054141722, 0.04046774072319967, 0.040822720904982124, 0.04117770108676458, 0.041532681268547034, 0.04188766145032948, 0.042242641632111944, 0.04259762181389439, 0.042952601995676847, 0.043307582177459295, 0.043662562359241756, 0.044017542541024204, 0.04437252272280666, 0.04472750290458911, 0.04508248308637157, 0.04543746326815402, 0.04579244344993647, 0.04614742363171893, 0.04650240381350138, 0.04685738399528383, 0.047212364177066285, 0.04756734435884874, 0.047922324540631195, 0.04827730472241364, 0.0486322849041961, 0.04898726508597855, 0.04934224526776101, 0.049697225449543456, 0.05005220563132592, 0.050407185813108366, 0.05076216599489082, 0.05111714617667327, 0.05147212635845572, 0.05182710654023818, 0.052182086722020626, 0.05253706690380308, 0.052892047085585536, 0.05324702726736799, 0.05360200744915044, 0.0539569876309329, 0.05431196781271535, 0.054666947994497804, 0.05502192817628025, 0.055376908358062714, 0.05573188853984516, 0.05608686872162762, 0.056441848903410065, 0.05679682908519253, 0.057151809266974975, 0.05750678944875743, 0.057861769630539885, 0.05821674981232234, 0.05857172999410479, 0.05892671017588724, 0.0592816903576697, 0.05963667053945215, 0.0599916507212346, 0.060346630903017055, 0.06070161108479951, 0.061056591266581965, 0.06141157144836441, 0.061766551630146875, 0.06212153181192932, 0.06247651199371178, 0.06283149217549423, 0.06318647235727669, 0.06354145253905914, 0.06389643272084158, 0.06425141290262404, 0.0646063930844065, 0.06496137326618895, 0.0653163534479714, 0.06567133362975384, 0.0660263138115363, 0.06638129399331877, 0.06673627417510122, 0.06709125435688366, 0.06744623453866612, 0.06780121472044857, 0.06815619490223103, 0.06851117508401347, 0.06886615526579594, 0.0692211354475784, 0.06957611562936085, 0.06993109581114329, 0.07028607599292575, 0.0706410561747082, 0.07099603635649065, 0.0713510165382731, 0.07170599672005556, 0.07206097690183802, 0.07241595708362047, 0.07277093726540292, 0.07312591744718537, 0.07348089762896783, 0.07383587781075028, 0.07419085799253274, 0.07454583817431519, 0.07490081835609765, 0.0752557985378801, 0.07561077871966254, 0.075965758901445, 0.07632073908322745, 0.07667571926500992, 0.07703069944679236, 0.07738567962857482, 0.07774065981035727, 0.07809563999213971, 0.07845062017392217, 0.07880560035570462, 0.07916058053748708, 0.07951556071926953, 0.07987054090105199, 0.08022552108283444, 0.0805805012646169, 0.08093548144639934, 0.08129046162818179, 0.08164544180996425, 0.08200042199174672, 0.08235540217352916, 0.08271038235531161, 0.08306536253709407, 0.08342034271887652, 0.08377532290065896, 0.08413030308244142, 0.08448528326422389, 0.08484026344600634, 0.08519524362778878, 0.08555022380957124, 0.08590520399135369, 0.08626018417313615, 0.08661516435491859, 0.08697014453670104, 0.08732512471848351, 0.08768010490026597, 0.08803508508204841, 0.08839006526383086, 0.08874504544561332, 0.08910002562739576, 0.08945500580917821, 0.08980998599096068, 0.09016496617274314, 0.09051994635452558, 0.09087492653630803, 0.09122990671809049, 0.09158488689987294, 0.09193986708165539, 0.09229484726343785, 0.09264982744522031, 0.09300480762700276, 0.0933597878087852, 0.09371476799056766, 0.09406974817235011, 0.09442472835413257, 0.09477970853591502, 0.09513468871769748, 0.09548966889947993, 0.09584464908126239, 0.09619962926304483, 0.09655460944482729, 0.09690958962660974, 0.0972645698083922, 0.09761954999017465, 0.0979745301719571, 0.09832951035373956, 0.09868449053552202, 0.09903947071730446, 0.09939445089908691, 0.09974943108086937, 0.10010441126265184, 0.10045939144443428, 0.10081437162621673, 0.10116935180799919, 0.10152433198978164, 0.10187931217156408, 0.10223429235334654, 0.102589272535129, 0.10294425271691145, 0.1032992328986939, 0.10365421308047636, 0.10400919326225881, 0.10436417344404125, 0.10471915362582371, 0.10507413380760616, 0.10542911398938863, 0.10578409417117107, 0.10613907435295353, 0.10649405453473598, 0.10684903471651844, 0.10720401489830088, 0.10755899508008333, 0.1079139752618658, 0.10826895544364826, 0.1086239356254307, 0.10897891580721315, 0.10933389598899561, 0.10968887617077806, 0.1100438563525605, 0.11039883653434297, 0.11075381671612543, 0.11110879689790788, 0.11146377707969032, 0.11181875726147278, 0.11217373744325523, 0.11252871762503769, 0.11288369780682013, 0.1132386779886026, 0.11359365817038505, 0.11394863835216751, 0.11430361853394995, 0.1146585987157324, 0.11501357889751486, 0.1153685590792973, 0.11572353926107977, 0.11607851944286222, 0.11643349962464468, 0.11678847980642712, 0.11714345998820958, 0.11749844016999203, 0.11785342035177448, 0.11820840053355694, 0.1185633807153394, 0.11891836089712185, 0.1192733410789043, 0.11962832126068675, 0.1199833014424692, 0.12033828162425166, 0.12069326180603411, 0.12104824198781657, 0.12140322216959902, 0.12175820235138148, 0.12211318253316393, 0.12246816271494637, 0.12282314289672883, 0.12317812307851128, 0.12353310326029375, 0.12388808344207619, 0.12424306362385865, 0.1245980438056411, 0.12495302398742356, 0.125308004169206, 0.12566298435098847, 0.12601796453277092, 0.12637294471455338, 0.12672792489633583, 0.12708290507811829, 0.1274378852599007, 0.12779286544168317, 0.12814784562346562, 0.12850282580524808, 0.12885780598703053, 0.129212786168813, 0.12956776635059544, 0.1299227465323779, 0.13027772671416035, 0.1306327068959428, 0.13098768707772526, 0.1313426672595077, 0.13169764744129014, 0.1320526276230726, 0.13240760780485505, 0.13276258798663754, 0.13311756816842, 0.13347254835020245, 0.1338275285319849, 0.13418250871376733, 0.13453748889554978, 0.13489246907733224, 0.1352474492591147, 0.13560242944089715, 0.1359574096226796, 0.13631238980446206, 0.1366673699862445, 0.13702235016802694, 0.1373773303498094, 0.13773231053159188, 0.13808729071337433, 0.1384422708951568, 0.13879725107693924, 0.1391522312587217, 0.13950721144050415, 0.13986219162228658, 0.14021717180406904, 0.1405721519858515, 0.14092713216763395, 0.1412821123494164, 0.14163709253119885, 0.1419920727129813, 0.14234705289476374, 0.1427020330765462, 0.14305701325832867, 0.14341199344011113, 0.14376697362189358, 0.14412195380367604, 0.1444769339854585, 0.14483191416724095, 0.14518689434902338, 0.14554187453080583, 0.1458968547125883, 0.14625183489437074, 0.1466068150761532, 0.14696179525793565, 0.1473167754397181, 0.14767175562150056, 0.14802673580328302, 0.14838171598506547, 0.14873669616684793, 0.14909167634863038, 0.14944665653041284, 0.1498016367121953, 0.15015661689397775, 0.1505115970757602, 0.15086657725754263, 0.15122155743932508, 0.15157653762110754, 0.15193151780289, 0.15228649798467245, 0.1526414781664549, 0.15299645834823736, 0.15335143853001984, 0.15370641871180227, 0.15406139889358472, 0.15441637907536718, 0.15477135925714963, 0.1551263394389321, 0.15548131962071454, 0.155836299802497, 0.15619127998427942, 0.15654626016606188, 0.15690124034784433, 0.1572562205296268, 0.15761120071140924, 0.1579661808931917, 0.15832116107497415, 0.15867614125675664, 0.15903112143853906, 0.15938610162032152, 0.15974108180210397, 0.16009606198388643, 0.16045104216566888, 0.16080602234745134, 0.1611610025292338, 0.16151598271101625, 0.16187096289279868, 0.16222594307458113, 0.16258092325636359, 0.16293590343814604, 0.1632908836199285, 0.16364586380171098, 0.16400084398349343, 0.1643558241652759, 0.16471080434705831, 0.16506578452884077, 0.16542076471062322, 0.16577574489240568, 0.16613072507418813, 0.1664857052559706, 0.16684068543775304, 0.16719566561953547, 0.16755064580131793, 0.16790562598310038, 0.16826060616488284, 0.1686155863466653, 0.16897056652844777, 0.16932554671023023, 0.16968052689201268, 0.1700355070737951, 0.17039048725557757, 0.17074546743736002, 0.17110044761914248, 0.17145542780092493, 0.17181040798270739, 0.17216538816448984, 0.1725203683462723, 0.17287534852805472, 0.17323032870983718, 0.17358530889161963, 0.1739402890734021, 0.17429526925518457, 0.17465024943696703, 0.17500522961874948, 0.17536020980053194, 0.17571518998231436, 0.17607017016409682, 0.17642515034587927, 0.17678013052766173, 0.17713511070944418])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_28fdf1933e1b413f97b3185e71674995.x = d3.scale.linear()
              .domain([0.0, 0.17713511070944418])
              .range([0, 400]);

    color_map_28fdf1933e1b413f97b3185e71674995.legend = L.control({position: 'topright'});
    color_map_28fdf1933e1b413f97b3185e71674995.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_28fdf1933e1b413f97b3185e71674995.legend.addTo(map_1153df6ac5f340a49f57dbad0931e06f);

    color_map_28fdf1933e1b413f97b3185e71674995.xAxis = d3.svg.axis()
        .scale(color_map_28fdf1933e1b413f97b3185e71674995.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.02952251845157403, 0.05904503690314806, 0.08856755535472209, 0.11809007380629612, 0.14761259225787016, 0.17713511070944418]);

    color_map_28fdf1933e1b413f97b3185e71674995.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_28fdf1933e1b413f97b3185e71674995.g = color_map_28fdf1933e1b413f97b3185e71674995.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_28fdf1933e1b413f97b3185e71674995.g.selectAll("rect")
        .data(color_map_28fdf1933e1b413f97b3185e71674995.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_28fdf1933e1b413f97b3185e71674995.x(color_map_28fdf1933e1b413f97b3185e71674995.color.domain()[i - 1]) : color_map_28fdf1933e1b413f97b3185e71674995.x.range()[0],
            x1: i < color_map_28fdf1933e1b413f97b3185e71674995.color.domain().length ? color_map_28fdf1933e1b413f97b3185e71674995.x(color_map_28fdf1933e1b413f97b3185e71674995.color.domain()[i]) : color_map_28fdf1933e1b413f97b3185e71674995.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_28fdf1933e1b413f97b3185e71674995.g.call(color_map_28fdf1933e1b413f97b3185e71674995.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');

