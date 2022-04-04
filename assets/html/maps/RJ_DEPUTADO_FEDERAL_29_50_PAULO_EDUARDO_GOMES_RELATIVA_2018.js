    
            var map_148988a689bd405ea09c354dd6839341 = L.map(
                "map_148988a689bd405ea09c354dd6839341",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_e53b49f6edb94284b276b110185a5cd9 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_148988a689bd405ea09c354dd6839341);
        
    
            var choropleth_c0a2c807b37f4157a7a980ab13dae5ed = L.featureGroup(
                {}
            ).addTo(map_148988a689bd405ea09c354dd6839341);
        
    
        function geo_json_bc4c9ad301ec4c4b95cf60fedae05cec_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 448: case 467: case 464: case 442: case 436: case 446: case 432: case 339: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 443: case 434: case 428: case 325: case 426: case 400: case 423: case 431: case 404: case 359: case 349: case 342: case 336: case 358: case 460: case 475: case 357: case 481: case 479: case 391: case 402: case 341: case 405: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 438: case 449: case 447: case 453: case 455: case 437: case 371: case 366: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 439: case 412: case 418: case 424: case 417: case 462: case 466: case 472: case 403: case 468: case 470: case 478: case 474: case 444: case 392: case 383: case 427: case 419: case 415: case 408: case 411: case 364: case 398: case 401: case 372: case 354: case 334: case 327: case 329: case 331: case 330: case 355: case 445: case 471: case 461: case 477: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 485: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 367: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_bc4c9ad301ec4c4b95cf60fedae05cec_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_bc4c9ad301ec4c4b95cf60fedae05cec = L.geoJson(null, {
                onEachFeature: geo_json_bc4c9ad301ec4c4b95cf60fedae05cec_onEachFeature,
            
                style: geo_json_bc4c9ad301ec4c4b95cf60fedae05cec_styler,
        });

        function geo_json_bc4c9ad301ec4c4b95cf60fedae05cec_add (data) {
            geo_json_bc4c9ad301ec4c4b95cf60fedae05cec
                .addData(data)
                .addTo(choropleth_c0a2c807b37f4157a7a980ab13dae5ed);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_bc4c9ad301ec4c4b95cf60fedae05cec_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_bb29166526484f76bfca4606fc199cde = {};

    
    color_map_bb29166526484f76bfca4606fc199cde.color = d3.scale.threshold()
              .domain([0.0, 3.883736465178418e-06, 7.767472930356837e-06, 1.1651209395535256e-05, 1.5534945860713674e-05, 1.9418682325892093e-05, 2.3302418791070512e-05, 2.718615525624893e-05, 3.106989172142735e-05, 3.495362818660577e-05, 3.8837364651784186e-05, 4.272110111696261e-05, 4.6604837582141024e-05, 5.048857404731945e-05, 5.437231051249786e-05, 5.8256046977676285e-05, 6.21397834428547e-05, 6.602351990803313e-05, 6.990725637321154e-05, 7.379099283838995e-05, 7.767472930356837e-05, 8.155846576874681e-05, 8.544220223392522e-05, 8.932593869910363e-05, 9.320967516428205e-05, 9.709341162946047e-05, 0.0001009771480946389, 0.0001048608845598173, 0.00010874462102499573, 0.00011262835749017415, 0.00011651209395535257, 0.00012039583042053098, 0.0001242795668857094, 0.00012816330335088782, 0.00013204703981606626, 0.00013593077628124464, 0.00013981451274642308, 0.00014369824921160152, 0.0001475819856767799, 0.00015146572214195833, 0.00015534945860713674, 0.00015923319507231518, 0.00016311693153749361, 0.000167000668002672, 0.00017088440446785043, 0.00017476814093302884, 0.00017865187739820725, 0.0001825356138633857, 0.0001864193503285641, 0.00019030308679374253, 0.00019418682325892094, 0.00019807055972409935, 0.0002019542961892778, 0.0002058380326544562, 0.0002097217691196346, 0.00021360550558481301, 0.00021748924204999145, 0.0002213729785151699, 0.0002252567149803483, 0.0002291404514455267, 0.00023302418791070514, 0.00023690792437588355, 0.00024079166084106196, 0.0002446753973062404, 0.0002485591337714188, 0.0002524428702365972, 0.00025632660670177565, 0.0002602103431669541, 0.0002640940796321325, 0.00026797781609731085, 0.0002718615525624893, 0.0002757452890276677, 0.00027962902549284616, 0.0002835127619580246, 0.00028739649842320303, 0.0002912802348883814, 0.0002951639713535598, 0.00029904770781873823, 0.00030293144428391667, 0.0003068151807490951, 0.0003106989172142735, 0.0003145826536794519, 0.00031846639014463036, 0.0003223501266098088, 0.00032623386307498723, 0.00033011759954016556, 0.000334001336005344, 0.00033788507247052243, 0.00034176880893570087, 0.0003456525454008793, 0.0003495362818660577, 0.0003534200183312361, 0.0003573037547964145, 0.00036118749126159294, 0.0003650712277267714, 0.00036895496419194976, 0.0003728387006571282, 0.00037672243712230663, 0.00038060617358748507, 0.0003844899100526635, 0.0003883736465178419, 0.00039225738298302027, 0.0003961411194481987, 0.00040002485591337714, 0.0004039085923785556, 0.00040779232884373396, 0.0004116760653089124, 0.00041555980177409083, 0.0004194435382392692, 0.00042332727470444765, 0.00042721101116962603, 0.00043109474763480446, 0.0004349784840999829, 0.00043886222056516134, 0.0004427459570303398, 0.0004466296934955182, 0.0004505134299606966, 0.000454397166425875, 0.0004582809028910534, 0.00046216463935623185, 0.0004660483758214103, 0.00046993211228658866, 0.0004738158487517671, 0.00047769958521694554, 0.0004815833216821239, 0.00048546705814730235, 0.0004893507946124808, 0.0004932345310776592, 0.0004971182675428376, 0.000501002004008016, 0.0005048857404731944, 0.0005087694769383729, 0.0005126532134035513, 0.0005165369498687297, 0.0005204206863339082, 0.0005243044227990866, 0.000528188159264265, 0.0005320718957294434, 0.0005359556321946217, 0.0005398393686598001, 0.0005437231051249786, 0.000547606841590157, 0.0005514905780553354, 0.0005553743145205139, 0.0005592580509856923, 0.0005631417874508708, 0.0005670255239160492, 0.0005709092603812276, 0.0005747929968464061, 0.0005786767333115844, 0.0005825604697767628, 0.0005864442062419413, 0.0005903279427071196, 0.000594211679172298, 0.0005980954156374765, 0.0006019791521026549, 0.0006058628885678333, 0.0006097466250330118, 0.0006136303614981902, 0.0006175140979633685, 0.000621397834428547, 0.0006252815708937254, 0.0006291653073589038, 0.0006330490438240823, 0.0006369327802892607, 0.0006408165167544392, 0.0006447002532196176, 0.000648583989684796, 0.0006524677261499745, 0.0006563514626151527, 0.0006602351990803311, 0.0006641189355455096, 0.000668002672010688, 0.0006718864084758664, 0.0006757701449410449, 0.0006796538814062233, 0.0006835376178714017, 0.0006874213543365802, 0.0006913050908017586, 0.0006951888272669369, 0.0006990725637321154, 0.0007029563001972938, 0.0007068400366624722, 0.0007107237731276507, 0.000714607509592829, 0.0007184912460580074, 0.0007223749825231859, 0.0007262587189883643, 0.0007301424554535427, 0.0007340261919187212, 0.0007379099283838995, 0.000741793664849078, 0.0007456774013142564, 0.0007495611377794348, 0.0007534448742446133, 0.0007573286107097917, 0.0007612123471749701, 0.0007650960836401486, 0.000768979820105327, 0.0007728635565705054, 0.0007767472930356838, 0.0007806310295008621, 0.0007845147659660405, 0.000788398502431219, 0.0007922822388963974, 0.0007961659753615758, 0.0008000497118267543, 0.0008039334482919327, 0.0008078171847571111, 0.0008117009212222896, 0.0008155846576874679, 0.0008194683941526463, 0.0008233521306178248, 0.0008272358670830032, 0.0008311196035481817, 0.0008350033400133601, 0.0008388870764785384, 0.0008427708129437169, 0.0008466545494088953, 0.0008505382858740737, 0.0008544220223392521, 0.0008583057588044305, 0.0008621894952696089, 0.0008660732317347874, 0.0008699569681999658, 0.0008738407046651442, 0.0008777244411303227, 0.0008816081775955011, 0.0008854919140606795, 0.000889375650525858, 0.0008932593869910364, 0.0008971431234562147, 0.0009010268599213932, 0.0009049105963865715, 0.00090879433285175, 0.0009126780693169284, 0.0009165618057821068, 0.0009204455422472853, 0.0009243292787124637, 0.0009282130151776421, 0.0009320967516428206, 0.0009359804881079989, 0.0009398642245731773, 0.0009437479610383558, 0.0009476316975035342, 0.0009515154339687126, 0.0009553991704338911, 0.0009592829068990695, 0.0009631666433642478, 0.0009670503798294263, 0.0009709341162946047, 0.000974817852759783, 0.0009787015892249616, 0.00098258532569014, 0.0009864690621553185, 0.0009903527986204969, 0.0009942365350856751, 0.0009981202715508535, 0.001002004008016032, 0.0010058877444812104, 0.0010097714809463889, 0.0010136552174115673, 0.0010175389538767457, 0.0010214226903419242, 0.0010253064268071026, 0.001029190163272281, 0.0010330738997374595, 0.001036957636202638, 0.0010408413726678163, 0.0010447251091329948, 0.0010486088455981732, 0.0010524925820633517, 0.00105637631852853, 0.0010602600549937083, 0.0010641437914588867, 0.0010680275279240652, 0.0010719112643892434, 0.0010757950008544218, 0.0010796787373196003, 0.0010835624737847787, 0.0010874462102499571, 0.0010913299467151356, 0.001095213683180314, 0.0010990974196454925, 0.0011029811561106709, 0.0011068648925758493, 0.0011107486290410278, 0.0011146323655062062, 0.0011185161019713846, 0.001122399838436563, 0.0011262835749017415, 0.00113016731136692, 0.0011340510478320984, 0.0011379347842972768, 0.0011418185207624552, 0.0011457022572276337, 0.0011495859936928121, 0.0011534697301579903, 0.0011573534666231688, 0.0011612372030883472, 0.0011651209395535257, 0.001169004676018704, 0.0011728884124838825, 0.001176772148949061, 0.0011806558854142392, 0.0011845396218794176, 0.001188423358344596, 0.0011923070948097745, 0.001196190831274953, 0.0012000745677401314, 0.0012039583042053098, 0.0012078420406704882, 0.0012117257771356667, 0.001215609513600845, 0.0012194932500660235, 0.001223376986531202, 0.0012272607229963804, 0.0012311444594615586, 0.001235028195926737, 0.0012389119323919155, 0.001242795668857094, 0.0012466794053222724, 0.0012505631417874508, 0.0012544468782526292, 0.0012583306147178077, 0.0012622143511829861, 0.0012660980876481646, 0.001269981824113343, 0.0012738655605785214, 0.0012777492970436999, 0.0012816330335088783, 0.0012855167699740567, 0.0012894005064392352, 0.0012932842429044136, 0.001297167979369592, 0.0013010517158347705, 0.001304935452299949, 0.0013088191887651271, 0.0013127029252303054, 0.0013165866616954838, 0.0013204703981606622, 0.0013243541346258407, 0.001328237871091019, 0.0013321216075561975, 0.001336005344021376, 0.0013398890804865544, 0.0013437728169517328, 0.0013476565534169113, 0.0013515402898820897, 0.0013554240263472682, 0.0013593077628124466, 0.001363191499277625, 0.0013670752357428035, 0.001370958972207982, 0.0013748427086731603, 0.0013787264451383388, 0.0013826101816035172, 0.0013864939180686956, 0.0013903776545338739, 0.0013942613909990523, 0.0013981451274642307, 0.0014020288639294092, 0.0014059126003945876, 0.001409796336859766, 0.0014136800733249445, 0.001417563809790123, 0.0014214475462553014, 0.0014253312827204798, 0.001429215019185658, 0.0014330987556508364, 0.0014369824921160149, 0.0014408662285811933, 0.0014447499650463718, 0.0014486337015115502, 0.0014525174379767286, 0.001456401174441907, 0.0014602849109070855, 0.001464168647372264, 0.0014680523838374424, 0.0014719361203026206, 0.001475819856767799, 0.0014797035932329775, 0.001483587329698156, 0.0014874710661633343, 0.0014913548026285128, 0.0014952385390936912, 0.0014991222755588696, 0.001503006012024048, 0.0015068897484892265, 0.001510773484954405, 0.0015146572214195834, 0.0015185409578847618, 0.0015224246943499403, 0.0015263084308151187, 0.0015301921672802971, 0.0015340759037454756, 0.001537959640210654, 0.0015418433766758324, 0.0015457271131410109, 0.001549610849606189, 0.0015534945860713675, 0.0015573783225365458, 0.0015612620590017242, 0.0015651457954669026, 0.001569029531932081, 0.0015729132683972595, 0.001576797004862438, 0.0015806807413276164, 0.0015845644777927948, 0.0015884482142579732, 0.0015923319507231517, 0.0015962156871883301, 0.0016000994236535086, 0.001603983160118687, 0.0016078668965838654, 0.0016117506330490439, 0.0016156343695142223, 0.0016195181059794007, 0.0016234018424445792, 0.0016272855789097576, 0.0016311693153749358, 0.0016350530518401143, 0.0016389367883052927, 0.0016428205247704711, 0.0016467042612356496, 0.001650587997700828, 0.0016544717341660064, 0.0016583554706311849, 0.0016622392070963633, 0.0016661229435615417, 0.0016700066800267202, 0.0016738904164918986, 0.0016777741529570768, 0.0016816578894222553, 0.0016855416258874337, 0.0016894253623526121, 0.0016933090988177906, 0.001697192835282969, 0.0017010765717481475, 0.001704960308213326, 0.0017088440446785041, 0.0017127277811436825, 0.001716611517608861, 0.0017204952540740394, 0.0017243789905392179, 0.0017282627270043963, 0.0017321464634695747, 0.0017360301999347532, 0.0017399139363999316, 0.00174379767286511, 0.0017476814093302885, 0.001751565145795467, 0.0017554488822606453, 0.0017593326187258238, 0.0017632163551910022, 0.0017671000916561807, 0.001770983828121359, 0.0017748675645865375, 0.001778751301051716, 0.0017826350375168944, 0.0017865187739820728, 0.001790402510447251, 0.0017942862469124295, 0.001798169983377608, 0.0018020537198427864, 0.0018059374563079646, 0.001809821192773143, 0.0018137049292383215, 0.0018175886657035, 0.0018214724021686783, 0.0018253561386338568, 0.0018292398750990352, 0.0018331236115642136, 0.001837007348029392, 0.0018408910844945705, 0.001844774820959749, 0.0018486585574249274, 0.0018525422938901058, 0.0018564260303552843, 0.0018603097668204627, 0.0018641935032856411, 0.0018680772397508193, 0.0018719609762159978, 0.0018758447126811762, 0.0018797284491463547, 0.001883612185611533, 0.0018874959220767115, 0.00189137965854189, 0.0018952633950070684, 0.0018991471314722468, 0.0019030308679374253, 0.0019069146044026037, 0.0019107983408677821, 0.0019146820773329606, 0.001918565813798139, 0.0019224495502633175, 0.0019263332867284957, 0.0019302170231936741, 0.0019341007596588525, 0.001937984496124031])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_bb29166526484f76bfca4606fc199cde.x = d3.scale.linear()
              .domain([0.0, 0.001937984496124031])
              .range([0, 400]);

    color_map_bb29166526484f76bfca4606fc199cde.legend = L.control({position: 'topright'});
    color_map_bb29166526484f76bfca4606fc199cde.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_bb29166526484f76bfca4606fc199cde.legend.addTo(map_148988a689bd405ea09c354dd6839341);

    color_map_bb29166526484f76bfca4606fc199cde.xAxis = d3.svg.axis()
        .scale(color_map_bb29166526484f76bfca4606fc199cde.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.00032299741602067185, 0.0006459948320413437, 0.0009689922480620155, 0.0012919896640826874, 0.0016149870801033593, 0.001937984496124031]);

    color_map_bb29166526484f76bfca4606fc199cde.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_bb29166526484f76bfca4606fc199cde.g = color_map_bb29166526484f76bfca4606fc199cde.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_bb29166526484f76bfca4606fc199cde.g.selectAll("rect")
        .data(color_map_bb29166526484f76bfca4606fc199cde.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_bb29166526484f76bfca4606fc199cde.x(color_map_bb29166526484f76bfca4606fc199cde.color.domain()[i - 1]) : color_map_bb29166526484f76bfca4606fc199cde.x.range()[0],
            x1: i < color_map_bb29166526484f76bfca4606fc199cde.color.domain().length ? color_map_bb29166526484f76bfca4606fc199cde.x(color_map_bb29166526484f76bfca4606fc199cde.color.domain()[i]) : color_map_bb29166526484f76bfca4606fc199cde.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_bb29166526484f76bfca4606fc199cde.g.call(color_map_bb29166526484f76bfca4606fc199cde.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('29_50_PAULO EDUARDO GOMES');

