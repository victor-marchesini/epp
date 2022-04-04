    
            var map_0f68d4053ee94a01ab90d7d8c429f96c = L.map(
                "map_0f68d4053ee94a01ab90d7d8c429f96c",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_ebecdf8d999543b7981a741534953684 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_0f68d4053ee94a01ab90d7d8c429f96c);
        
    
            var choropleth_b7d1283ba91b4452a0084a73a6f3d002 = L.featureGroup(
                {}
            ).addTo(map_0f68d4053ee94a01ab90d7d8c429f96c);
        
    
        function geo_json_ed8dee51cc2c4985ae16708942f84399_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 428: case 393: case 340: case 416: case 348: case 358: case 350: case 457: case 387: case 458: case 450: case 480: case 389: case 384: case 414: case 406: case 374: case 890: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 377: case 434: case 325: case 440: case 424: case 417: case 403: case 474: case 353: case 363: case 392: case 383: case 396: case 427: case 411: case 397: case 404: case 371: case 398: case 385: case 346: case 386: case 379: case 372: case 354: case 331: case 330: case 357: case 459: case 430: case 469: case 461: case 485: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 438: case 449: case 462: case 456: case 467: case 466: case 473: case 455: case 472: case 468: case 464: case 437: case 471: case 366: case 391: case 477: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 447: case 453: case 470: case 442: case 436: case 446: case 444: case 426: case 419: case 415: case 408: case 364: case 359: case 339: case 433: case 445: case 399: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_ed8dee51cc2c4985ae16708942f84399_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_ed8dee51cc2c4985ae16708942f84399 = L.geoJson(null, {
                onEachFeature: geo_json_ed8dee51cc2c4985ae16708942f84399_onEachFeature,
            
                style: geo_json_ed8dee51cc2c4985ae16708942f84399_styler,
        });

        function geo_json_ed8dee51cc2c4985ae16708942f84399_add (data) {
            geo_json_ed8dee51cc2c4985ae16708942f84399
                .addData(data)
                .addTo(choropleth_b7d1283ba91b4452a0084a73a6f3d002);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_ed8dee51cc2c4985ae16708942f84399_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_62bf352cb2ba40518a7e944f6bd77213 = {};

    
    color_map_62bf352cb2ba40518a7e944f6bd77213.color = d3.scale.threshold()
              .domain([0.0, 0.00035992801439712057, 0.0007198560287942411, 0.0010797840431913618, 0.0014397120575884823, 0.0017996400719856027, 0.0021595680863827236, 0.002519496100779844, 0.0028794241151769645, 0.003239352129574085, 0.0035992801439712055, 0.003959208158368326, 0.004319136172765447, 0.004679064187162568, 0.005038992201559688, 0.005398920215956809, 0.005758848230353929, 0.0061187762447510495, 0.00647870425914817, 0.0068386322735452905, 0.007198560287942411, 0.007558488302339532, 0.007918416316736652, 0.008278344331133773, 0.008638272345530894, 0.008998200359928014, 0.009358128374325135, 0.009718056388722255, 0.010077984403119376, 0.010437912417516496, 0.010797840431913617, 0.011157768446310737, 0.011517696460707858, 0.01187762447510498, 0.012237552489502099, 0.01259748050389922, 0.01295740851829634, 0.013317336532693461, 0.013677264547090581, 0.014037192561487702, 0.014397120575884822, 0.014757048590281943, 0.015116976604679064, 0.015476904619076184, 0.015836832633473304, 0.016196760647870425, 0.016556688662267546, 0.016916616676664664, 0.01727654469106179, 0.017636472705458907, 0.017996400719856028, 0.018356328734253146, 0.01871625674865027, 0.01907618476304739, 0.01943611277744451, 0.019796040791841628, 0.020155968806238753, 0.02051589682063587, 0.020875824835032992, 0.021235752849430113, 0.021595680863827234, 0.021955608878224352, 0.022315536892621474, 0.022675464907018595, 0.023035392921415716, 0.023395320935812834, 0.02375524895020996, 0.024115176964607077, 0.024475104979004198, 0.024835032993401316, 0.02519496100779844, 0.02555488902219556, 0.02591481703659268, 0.0262747450509898, 0.026634673065386923, 0.02699460107978404, 0.027354529094181162, 0.027714457108578283, 0.028074385122975404, 0.028434313137372522, 0.028794241151769644, 0.029154169166166765, 0.029514097180563886, 0.029874025194961004, 0.03023395320935813, 0.030593881223755247, 0.030953809238152368, 0.03131373725254949, 0.03167366526694661, 0.03203359328134373, 0.03239352129574085, 0.032753449310137975, 0.03311337732453509, 0.03347330533893221, 0.03383323335332933, 0.03419316136772645, 0.03455308938212358, 0.034913017396520696, 0.035272945410917814, 0.03563287342531494, 0.035992801439712056, 0.036352729454109174, 0.03671265746850629, 0.03707258548290342, 0.03743251349730054, 0.03779244151169766, 0.03815236952609478, 0.0385122975404919, 0.03887222555488902, 0.03923215356928614, 0.039592081583683256, 0.03995200959808039, 0.040311937612477505, 0.04067186562687462, 0.04103179364127174, 0.041391721655668866, 0.041751649670065984, 0.0421115776844631, 0.042471505698860226, 0.04283143371325735, 0.04319136172765447, 0.04355128974205159, 0.043911217756448705, 0.04427114577084583, 0.04463107378524295, 0.04499100179964007, 0.04535092981403719, 0.045710857828434315, 0.04607078584283143, 0.04643071385722855, 0.04679064187162567, 0.047150569886022786, 0.04751049790041992, 0.047870425914817036, 0.048230353929214154, 0.04859028194361128, 0.048950209958008396, 0.049310137972405514, 0.04967006598680263, 0.050029994001199764, 0.05038992201559688, 0.050749850029994, 0.05110977804439112, 0.051469706058788235, 0.05182963407318536, 0.05218956208758248, 0.0525494901019796, 0.05290941811637672, 0.053269346130773845, 0.05362927414517096, 0.05398920215956808, 0.0543491301739652, 0.054709058188362324, 0.05506898620275945, 0.055428914217156566, 0.055788842231553684, 0.05614877024595081, 0.05650869826034793, 0.056868626274745045, 0.05722855428914216, 0.05758848230353929, 0.05794841031793641, 0.05830833833233353, 0.05866826634673065, 0.05902819436112777, 0.05938812237552489, 0.05974805038992201, 0.060107978404319126, 0.06046790641871626, 0.060827834433113376, 0.061187762447510494, 0.06154769046190761, 0.061907618476304736, 0.062267546490701854, 0.06262747450509898, 0.0629874025194961, 0.06334733053389321, 0.06370725854829033, 0.06406718656268746, 0.06442711457708458, 0.0647870425914817, 0.06514697060587882, 0.06550689862027595, 0.06586682663467305, 0.06622675464907019, 0.0665866826634673, 0.06694661067786442, 0.06730653869226155, 0.06766646670665866, 0.06802639472105579, 0.0683863227354529, 0.06874625074985002, 0.06910617876424716, 0.06946610677864426, 0.06982603479304139, 0.07018596280743851, 0.07054589082183563, 0.07090581883623275, 0.07126574685062988, 0.07162567486502698, 0.07198560287942411, 0.07234553089382123, 0.07270545890821835, 0.07306538692261548, 0.07342531493701258, 0.07378524295140972, 0.07414517096580683, 0.07450509898020395, 0.07486502699460108, 0.07522495500899819, 0.07558488302339532, 0.07594481103779244, 0.07630473905218955, 0.07666466706658667, 0.0770245950809838, 0.07738452309538092, 0.07774445110977804, 0.07810437912417516, 0.07846430713857228, 0.07882423515296941, 0.07918416316736651, 0.07954409118176364, 0.07990401919616077, 0.08026394721055788, 0.08062387522495501, 0.08098380323935211, 0.08134373125374925, 0.08170365926814636, 0.08206358728254348, 0.08242351529694061, 0.08278344331133773, 0.08314337132573485, 0.08350329934013197, 0.08386322735452909, 0.0842231553689262, 0.08458308338332333, 0.08494301139772045, 0.08530293941211757, 0.0856628674265147, 0.0860227954409118, 0.08638272345530894, 0.08674265146970604, 0.08710257948410317, 0.0874625074985003, 0.08782243551289741, 0.08818236352729454, 0.08854229154169166, 0.08890221955608878, 0.0892621475704859, 0.08962207558488301, 0.08998200359928014, 0.09034193161367726, 0.09070185962807438, 0.0910617876424715, 0.09142171565686863, 0.09178164367126573, 0.09214157168566287, 0.09250149970005998, 0.0928614277144571, 0.09322135572885423, 0.09358128374325134, 0.09394121175764847, 0.09430113977204557, 0.0946610677864427, 0.09502099580083984, 0.09538092381523694, 0.09574085182963407, 0.09610077984403119, 0.09646070785842831, 0.09682063587282543, 0.09718056388722256, 0.09754049190161967, 0.09790041991601679, 0.09826034793041391, 0.09862027594481103, 0.09898020395920816, 0.09934013197360526, 0.0997000599880024, 0.10005998800239953, 0.10041991601679663, 0.10077984403119376, 0.10113977204559087, 0.101499700059988, 0.10185962807438512, 0.10221955608878223, 0.10257948410317937, 0.10293941211757647, 0.1032993401319736, 0.10365926814637072, 0.10401919616076784, 0.10437912417516496, 0.10473905218956209, 0.1050989802039592, 0.10545890821835632, 0.10581883623275344, 0.10617876424715056, 0.10653869226154769, 0.1068986202759448, 0.10725854829034193, 0.10761847630473906, 0.10797840431913616, 0.1083383323335333, 0.1086982603479304, 0.10905818836232753, 0.10941811637672465, 0.10977804439112177, 0.1101379724055189, 0.11049790041991601, 0.11085782843431313, 0.11121775644871025, 0.11157768446310737, 0.11193761247750449, 0.11229754049190162, 0.11265746850629874, 0.11301739652069585, 0.11337732453509299, 0.11373725254949009, 0.11409718056388722, 0.11445710857828433, 0.11481703659268146, 0.11517696460707857, 0.11553689262147569, 0.11589682063587282, 0.11625674865026994, 0.11661667666466706, 0.11697660467906418, 0.1173365326934613, 0.11769646070785841, 0.11805638872225555, 0.11841631673665266, 0.11877624475104978, 0.11913617276544691, 0.11949610077984402, 0.11985602879424115, 0.12021595680863825, 0.12057588482303538, 0.12093581283743252, 0.12129574085182962, 0.12165566886622675, 0.12201559688062387, 0.12237552489502099, 0.1227354529094181, 0.12309538092381522, 0.12345530893821235, 0.12381523695260947, 0.12417516496700659, 0.12453509298140371, 0.12489502099580084, 0.12525494901019796, 0.12561487702459506, 0.1259748050389922, 0.12633473305338933, 0.12669466106778643, 0.12705458908218356, 0.12741451709658067, 0.1277744451109778, 0.12813437312537493, 0.12849430113977203, 0.12885422915416916, 0.12921415716856627, 0.1295740851829634, 0.12993401319736053, 0.13029394121175764, 0.13065386922615477, 0.1310137972405519, 0.131373725254949, 0.1317336532693461, 0.13209358128374327, 0.13245350929814037, 0.13281343731253747, 0.1331733653269346, 0.13353329334133174, 0.13389322135572884, 0.13425314937012595, 0.1346130773845231, 0.1349730053989202, 0.1353329334133173, 0.13569286142771447, 0.13605278944211158, 0.13641271745650868, 0.1367726454709058, 0.13713257348530294, 0.13749250149970005, 0.13785242951409718, 0.1382123575284943, 0.13857228554289142, 0.13893221355728852, 0.13929214157168565, 0.13965206958608278, 0.1400119976004799, 0.14037192561487702, 0.14073185362927412, 0.14109178164367125, 0.1414517096580684, 0.1418116376724655, 0.14217156568686262, 0.14253149370125975, 0.14289142171565686, 0.14325134973005396, 0.14361127774445112, 0.14397120575884823, 0.14433113377324533, 0.14469106178764246, 0.1450509898020396, 0.1454109178164367, 0.1457708458308338, 0.14613077384523096, 0.14649070185962806, 0.14685062987402517, 0.14721055788842233, 0.14757048590281943, 0.14793041391721654, 0.14829034193161367, 0.1486502699460108, 0.1490101979604079, 0.149370125974805, 0.14973005398920217, 0.15008998200359927, 0.15044991001799637, 0.1508098380323935, 0.15116976604679064, 0.15152969406118774, 0.15188962207558487, 0.152249550089982, 0.1526094781043791, 0.15296940611877624, 0.15332933413317335, 0.15368926214757048, 0.1540491901619676, 0.1544091181763647, 0.15476904619076184, 0.15512897420515895, 0.15548890221955608, 0.15584883023395318, 0.15620875824835032, 0.15656868626274745, 0.15692861427714455, 0.15728854229154168, 0.15764847030593881, 0.15800839832033592, 0.15836832633473302, 0.15872825434913018, 0.1590881823635273, 0.1594481103779244, 0.15980803839232155, 0.16016796640671865, 0.16052789442111576, 0.16088782243551286, 0.16124775044991002, 0.16160767846430713, 0.16196760647870423, 0.1623275344931014, 0.1626874625074985, 0.1630473905218956, 0.16340731853629273, 0.16376724655068986, 0.16412717456508696, 0.1644871025794841, 0.16484703059388123, 0.16520695860827833, 0.16556688662267546, 0.16592681463707257, 0.1662867426514697, 0.1666466706658668, 0.16700659868026393, 0.16736652669466107, 0.16772645470905817, 0.1680863827234553, 0.1684463107378524, 0.16880623875224954, 0.16916616676664667, 0.16952609478104377, 0.1698860227954409, 0.17024595080983804, 0.17060587882423514, 0.17096580683863224, 0.1713257348530294, 0.1716856628674265, 0.1720455908818236, 0.17240551889622074, 0.17276544691061788, 0.17312537492501498, 0.17348530293941208, 0.17384523095380924, 0.17420515896820635, 0.17456508698260345, 0.1749250149970006, 0.17528494301139771, 0.17564487102579482, 0.17600479904019195, 0.17636472705458908, 0.1767246550689862, 0.17708458308338332, 0.17744451109778045, 0.17780443911217755, 0.17816436712657466, 0.1785242951409718, 0.17888422315536892, 0.17924415116976603, 0.17960407918416316])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_62bf352cb2ba40518a7e944f6bd77213.x = d3.scale.linear()
              .domain([0.0, 0.17960407918416316])
              .range([0, 400]);

    color_map_62bf352cb2ba40518a7e944f6bd77213.legend = L.control({position: 'topright'});
    color_map_62bf352cb2ba40518a7e944f6bd77213.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_62bf352cb2ba40518a7e944f6bd77213.legend.addTo(map_0f68d4053ee94a01ab90d7d8c429f96c);

    color_map_62bf352cb2ba40518a7e944f6bd77213.xAxis = d3.svg.axis()
        .scale(color_map_62bf352cb2ba40518a7e944f6bd77213.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.029934013197360526, 0.05986802639472105, 0.08980203959208158, 0.1197360527894421, 0.14967006598680263, 0.17960407918416316]);

    color_map_62bf352cb2ba40518a7e944f6bd77213.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_62bf352cb2ba40518a7e944f6bd77213.g = color_map_62bf352cb2ba40518a7e944f6bd77213.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_62bf352cb2ba40518a7e944f6bd77213.g.selectAll("rect")
        .data(color_map_62bf352cb2ba40518a7e944f6bd77213.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_62bf352cb2ba40518a7e944f6bd77213.x(color_map_62bf352cb2ba40518a7e944f6bd77213.color.domain()[i - 1]) : color_map_62bf352cb2ba40518a7e944f6bd77213.x.range()[0],
            x1: i < color_map_62bf352cb2ba40518a7e944f6bd77213.color.domain().length ? color_map_62bf352cb2ba40518a7e944f6bd77213.x(color_map_62bf352cb2ba40518a7e944f6bd77213.color.domain()[i]) : color_map_62bf352cb2ba40518a7e944f6bd77213.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_62bf352cb2ba40518a7e944f6bd77213.g.call(color_map_62bf352cb2ba40518a7e944f6bd77213.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');

