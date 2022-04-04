    
            var map_24e372e5a7204457bcd015f28582452a = L.map(
                "map_24e372e5a7204457bcd015f28582452a",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_0ea0df43d21f4cc79961aca3d144dc72 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_24e372e5a7204457bcd015f28582452a);
        
    
            var choropleth_42358407442a441d8b5c6eea89f5ca5a = L.featureGroup(
                {}
            ).addTo(map_24e372e5a7204457bcd015f28582452a);
        
    
        function geo_json_d40306c6d11a4a94a3c84553b736e214_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 482: case 443: case 428: case 412: case 410: case 325: case 440: case 448: case 438: case 447: case 456: case 473: case 468: case 464: case 437: case 353: case 444: case 345: case 363: case 343: case 383: case 426: case 404: case 395: case 371: case 359: case 386: case 348: case 379: case 372: case 354: case 334: case 358: case 433: case 399: case 366: case 391: case 402: case 388: case 341: case 485: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 418: case 424: case 453: case 466: case 478: case 474: case 435: case 442: case 436: case 446: case 393: case 381: case 369: case 352: case 392: case 340: case 416: case 400: case 382: case 375: case 419: case 408: case 339: case 357: case 350: case 459: case 463: case 469: case 890: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 462: case 467: case 455: case 472: case 470: case 471: case 477: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 327: case 370: case 480: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_d40306c6d11a4a94a3c84553b736e214_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_d40306c6d11a4a94a3c84553b736e214 = L.geoJson(null, {
                onEachFeature: geo_json_d40306c6d11a4a94a3c84553b736e214_onEachFeature,
            
                style: geo_json_d40306c6d11a4a94a3c84553b736e214_styler,
        });

        function geo_json_d40306c6d11a4a94a3c84553b736e214_add (data) {
            geo_json_d40306c6d11a4a94a3c84553b736e214
                .addData(data)
                .addTo(choropleth_42358407442a441d8b5c6eea89f5ca5a);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_d40306c6d11a4a94a3c84553b736e214_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_1c0ae8328a3941bb9fd3843f427b0348 = {};

    
    color_map_1c0ae8328a3941bb9fd3843f427b0348.color = d3.scale.threshold()
              .domain([0.0, 0.0003765509062546845, 0.000753101812509369, 0.0011296527187640536, 0.001506203625018738, 0.0018827545312734225, 0.002259305437528107, 0.0026358563437827915, 0.003012407250037476, 0.0033889581562921607, 0.003765509062546845, 0.0041420599688015295, 0.004518610875056214, 0.004895161781310898, 0.005271712687565583, 0.005648263593820267, 0.006024814500074952, 0.006401365406329637, 0.006777916312584321, 0.007154467218839006, 0.00753101812509369, 0.007907569031348375, 0.008284119937603059, 0.008660670843857745, 0.009037221750112429, 0.009413772656367113, 0.009790323562621796, 0.010166874468876482, 0.010543425375131166, 0.010919976281385852, 0.011296527187640534, 0.01167307809389522, 0.012049629000149904, 0.01242617990640459, 0.012802730812659273, 0.013179281718913957, 0.013555832625168643, 0.013932383531423327, 0.014308934437678012, 0.014685485343932696, 0.01506203625018738, 0.015438587156442064, 0.01581513806269675, 0.016191688968951436, 0.016568239875206118, 0.016944790781460804, 0.01732134168771549, 0.017697892593970175, 0.018074443500224857, 0.01845099440647954, 0.018827545312734225, 0.01920409621898891, 0.019580647125243593, 0.01995719803149828, 0.020333748937752964, 0.02071029984400765, 0.021086850750262332, 0.021463401656517018, 0.021839952562771704, 0.022216503469026386, 0.022593054375281068, 0.022969605281535754, 0.02334615618779044, 0.023722707094045125, 0.024099258000299807, 0.024475808906554493, 0.02485235981280918, 0.025228910719063864, 0.025605461625318546, 0.025982012531573232, 0.026358563437827914, 0.0267351143440826, 0.027111665250337286, 0.027488216156591968, 0.027864767062846654, 0.02824131796910134, 0.028617868875356025, 0.028994419781610707, 0.029370970687865393, 0.02974752159412008, 0.03012407250037476, 0.030500623406629443, 0.03087717431288413, 0.031253725219138814, 0.0316302761253935, 0.032006827031648186, 0.03238337793790287, 0.03275992884415755, 0.033136479750412236, 0.03351303065666692, 0.03388958156292161, 0.034266132469176286, 0.03464268337543098, 0.03501923428168566, 0.03539578518794035, 0.03577233609419503, 0.036148887000449714, 0.0365254379067044, 0.03690198881295908, 0.037278539719213764, 0.03765509062546845, 0.038031641531723136, 0.03840819243797782, 0.03878474334423251, 0.039161294250487186, 0.03953784515674188, 0.03991439606299656, 0.040290946969251236, 0.04066749787550593, 0.04104404878176061, 0.0414205996880153, 0.04179715059426998, 0.042173701500524664, 0.04255025240677935, 0.042926803313034036, 0.04330335421928872, 0.04367990512554341, 0.044056456031798086, 0.04443300693805277, 0.04480955784430746, 0.045186108750562136, 0.04556265965681683, 0.04593921056307151, 0.0463157614693262, 0.04669231237558088, 0.047068863281835564, 0.04744541418809025, 0.047821965094344936, 0.048198516000599614, 0.0485750669068543, 0.048951617813108986, 0.04932816871936367, 0.04970471962561836, 0.050081270531873036, 0.05045782143812773, 0.05083437234438241, 0.05121092325063709, 0.05158747415689178, 0.051964025063146464, 0.05234057596940115, 0.05271712687565583, 0.053093677781910514, 0.0534702286881652, 0.053846779594419886, 0.05422333050067457, 0.05459988140692926, 0.054976432313183936, 0.05535298321943863, 0.05572953412569331, 0.05610608503194799, 0.05648263593820268, 0.05685918684445736, 0.05723573775071205, 0.05761228865696673, 0.057988839563221414, 0.0583653904694761, 0.058741941375730786, 0.059118492281985464, 0.05949504318824016, 0.059871594094494836, 0.06024814500074952, 0.06062469590700421, 0.061001246813258886, 0.06137779771951358, 0.06175434862576826, 0.06213089953202294, 0.06250745043827763, 0.06288400134453231, 0.063260552250787, 0.06363710315704169, 0.06401365406329637, 0.06439020496955106, 0.06476675587580574, 0.06514330678206041, 0.0655198576883151, 0.0658964085945698, 0.06627295950082447, 0.06664951040707916, 0.06702606131333384, 0.06740261221958853, 0.06777916312584321, 0.0681557140320979, 0.06853226493835257, 0.06890881584460726, 0.06928536675086196, 0.06966191765711664, 0.07003846856337131, 0.070415019469626, 0.0707915703758807, 0.07116812128213537, 0.07154467218839006, 0.07192122309464474, 0.07229777400089943, 0.07267432490715411, 0.0730508758134088, 0.07342742671966347, 0.07380397762591816, 0.07418052853217286, 0.07455707943842753, 0.07493363034468221, 0.0753101812509369, 0.0756867321571916, 0.07606328306344627, 0.07643983396970096, 0.07681638487595564, 0.07719293578221031, 0.07756948668846501, 0.0779460375947197, 0.07832258850097437, 0.07869913940722906, 0.07907569031348376, 0.07945224121973843, 0.07982879212599311, 0.0802053430322478, 0.08058189393850247, 0.08095844484475717, 0.08133499575101186, 0.08171154665726654, 0.08208809756352121, 0.08246464846977591, 0.0828411993760306, 0.08321775028228527, 0.08359430118853996, 0.08397085209479466, 0.08434740300104933, 0.08472395390730401, 0.0851005048135587, 0.08547705571981337, 0.08585360662606807, 0.08623015753232276, 0.08660670843857744, 0.08698325934483211, 0.08735981025108681, 0.0877363611573415, 0.08811291206359617, 0.08848946296985086, 0.08886601387610554, 0.08924256478236023, 0.08961911568861491, 0.0899956665948696, 0.09037221750112427, 0.09074876840737897, 0.09112531931363366, 0.09150187021988833, 0.09187842112614301, 0.09225497203239771, 0.0926315229386524, 0.09300807384490707, 0.09338462475116176, 0.09376117565741644, 0.09413772656367113, 0.09451427746992581, 0.0948908283761805, 0.09526737928243517, 0.09564393018868987, 0.09602048109494456, 0.09639703200119923, 0.09677358290745391, 0.0971501338137086, 0.0975266847199633, 0.09790323562621797, 0.09827978653247266, 0.09865633743872734, 0.09903288834498203, 0.09940943925123671, 0.0997859901574914, 0.10016254106374607, 0.10053909197000076, 0.10091564287625546, 0.10129219378251013, 0.10166874468876481, 0.1020452955950195, 0.10242184650127419, 0.10279839740752887, 0.10317494831378356, 0.10355149922003824, 0.10392805012629293, 0.10430460103254761, 0.1046811519388023, 0.10505770284505697, 0.10543425375131166, 0.10581080465756636, 0.10618735556382103, 0.10656390647007571, 0.1069404573763304, 0.10731700828258509, 0.10769355918883977, 0.10807011009509446, 0.10844666100134914, 0.10882321190760381, 0.10919976281385851, 0.1095763137201132, 0.10995286462636787, 0.11032941553262256, 0.11070596643887726, 0.11108251734513193, 0.11145906825138661, 0.1118356191576413, 0.11221217006389599, 0.11258872097015067, 0.11296527187640536, 0.11334182278266003, 0.11371837368891471, 0.11409492459516941, 0.1144714755014241, 0.11484802640767877, 0.11522457731393346, 0.11560112822018816, 0.11597767912644283, 0.11635423003269751, 0.1167307809389522, 0.11710733184520687, 0.11748388275146157, 0.11786043365771626, 0.11823698456397093, 0.11861353547022561, 0.11899008637648031, 0.119366637282735, 0.11974318818898967, 0.12011973909524436, 0.12049629000149904, 0.12087284090775373, 0.12124939181400841, 0.1216259427202631, 0.12200249362651777, 0.12237904453277247, 0.12275559543902716, 0.12313214634528183, 0.12350869725153651, 0.12388524815779121, 0.12426179906404589, 0.12463834997030057, 0.12501490087655526, 0.12539145178280994, 0.12576800268906463, 0.12614455359531931, 0.126521104501574, 0.12689765540782869, 0.12727420631408337, 0.12765075722033806, 0.12802730812659274, 0.12840385903284743, 0.12878040993910211, 0.12915696084535677, 0.12953351175161149, 0.12991006265786617, 0.13028661356412083, 0.13066316447037554, 0.1310397153766302, 0.13141626628288489, 0.1317928171891396, 0.13216936809539426, 0.13254591900164894, 0.13292246990790363, 0.13329902081415831, 0.133675571720413, 0.13405212262666769, 0.13442867353292237, 0.13480522443917706, 0.13518177534543174, 0.13555832625168643, 0.1359348771579411, 0.1363114280641958, 0.13668797897045049, 0.13706452987670514, 0.13744108078295986, 0.13781763168921451, 0.1381941825954692, 0.13857073350172391, 0.13894728440797857, 0.13932383531423329, 0.13970038622048797, 0.14007693712674263, 0.14045348803299734, 0.140830038939252, 0.14120658984550669, 0.1415831407517614, 0.14195969165801606, 0.14233624256427074, 0.14271279347052543, 0.14308934437678011, 0.1434658952830348, 0.14384244618928949, 0.14421899709554417, 0.14459554800179886, 0.14497209890805354, 0.14534864981430823, 0.1457252007205629, 0.1461017516268176, 0.14647830253307229, 0.14685485343932694, 0.14723140434558166, 0.14760795525183631, 0.147984506158091, 0.1483610570643457, 0.14873760797060037, 0.14911415887685506, 0.14949070978310974, 0.14986726068936443, 0.15024381159561914, 0.1506203625018738, 0.15099691340812849, 0.1513734643143832, 0.15175001522063786, 0.15212656612689254, 0.15250311703314723, 0.15287966793940191, 0.1532562188456566, 0.15363276975191129, 0.15400932065816597, 0.15438587156442063, 0.15476242247067534, 0.15513897337693003, 0.1555155242831847, 0.1558920751894394, 0.15626862609569409, 0.15664517700194874, 0.15702172790820346, 0.15739827881445811, 0.1577748297207128, 0.1581513806269675, 0.15852793153322217, 0.15890448243947686, 0.15928103334573154, 0.15965758425198623, 0.16003413515824091, 0.1604106860644956, 0.16078723697075029, 0.16116378787700494, 0.16154033878325966, 0.16191688968951434, 0.16229344059576903, 0.16266999150202371, 0.1630465424082784, 0.16342309331453309, 0.16379964422078777, 0.16417619512704243, 0.16455274603329714, 0.16492929693955183, 0.1653058478458065, 0.1656823987520612, 0.16605894965831586, 0.16643550056457054, 0.16681205147082526, 0.16718860237707991, 0.1675651532833346, 0.1679417041895893, 0.16831825509584397, 0.16869480600209866, 0.16907135690835334, 0.16944790781460803, 0.16982445872086271, 0.1702010096271174, 0.17057756053337209, 0.17095411143962674, 0.17133066234588146, 0.17170721325213614, 0.1720837641583908, 0.17246031506464551, 0.17283686597090017, 0.17321341687715489, 0.17358996778340957, 0.17396651868966423, 0.17434306959591894, 0.17471962050217363, 0.17509617140842829, 0.175472722314683, 0.17584927322093766, 0.17622582412719234, 0.17660237503344706, 0.17697892593970171, 0.1773554768459564, 0.17773202775221109, 0.17810857865846577, 0.17848512956472046, 0.17886168047097514, 0.17923823137722983, 0.17961478228348451, 0.1799913331897392, 0.18036788409599389, 0.18074443500224854, 0.18112098590850326, 0.18149753681475794, 0.1818740877210126, 0.18225063862726731, 0.18262718953352197, 0.18300374043977666, 0.18338029134603137, 0.18375684225228603, 0.18413339315854074, 0.18450994406479543, 0.18488649497105009, 0.1852630458773048, 0.18563959678355946, 0.18601614768981414, 0.18639269859606886, 0.18676924950232351, 0.1871458004085782, 0.18752235131483289, 0.18789890222108757])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_1c0ae8328a3941bb9fd3843f427b0348.x = d3.scale.linear()
              .domain([0.0, 0.18789890222108757])
              .range([0, 400]);

    color_map_1c0ae8328a3941bb9fd3843f427b0348.legend = L.control({position: 'topright'});
    color_map_1c0ae8328a3941bb9fd3843f427b0348.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_1c0ae8328a3941bb9fd3843f427b0348.legend.addTo(map_24e372e5a7204457bcd015f28582452a);

    color_map_1c0ae8328a3941bb9fd3843f427b0348.xAxis = d3.svg.axis()
        .scale(color_map_1c0ae8328a3941bb9fd3843f427b0348.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.03131648370351459, 0.06263296740702919, 0.09394945111054379, 0.12526593481405837, 0.15658241851757296, 0.18789890222108757]);

    color_map_1c0ae8328a3941bb9fd3843f427b0348.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_1c0ae8328a3941bb9fd3843f427b0348.g = color_map_1c0ae8328a3941bb9fd3843f427b0348.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_1c0ae8328a3941bb9fd3843f427b0348.g.selectAll("rect")
        .data(color_map_1c0ae8328a3941bb9fd3843f427b0348.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_1c0ae8328a3941bb9fd3843f427b0348.x(color_map_1c0ae8328a3941bb9fd3843f427b0348.color.domain()[i - 1]) : color_map_1c0ae8328a3941bb9fd3843f427b0348.x.range()[0],
            x1: i < color_map_1c0ae8328a3941bb9fd3843f427b0348.color.domain().length ? color_map_1c0ae8328a3941bb9fd3843f427b0348.x(color_map_1c0ae8328a3941bb9fd3843f427b0348.color.domain()[i]) : color_map_1c0ae8328a3941bb9fd3843f427b0348.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_1c0ae8328a3941bb9fd3843f427b0348.g.call(color_map_1c0ae8328a3941bb9fd3843f427b0348.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');
