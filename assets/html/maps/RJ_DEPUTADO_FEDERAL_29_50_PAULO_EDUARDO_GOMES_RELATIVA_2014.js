    
            var map_ac8fbbe76908451f822272e7638883c5 = L.map(
                "map_ac8fbbe76908451f822272e7638883c5",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_bae71c3248514eabb81f27990033966e = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_ac8fbbe76908451f822272e7638883c5);
        
    
            var choropleth_590194279e6c47eb9eff24eeb32af6c9 = L.featureGroup(
                {}
            ).addTo(map_ac8fbbe76908451f822272e7638883c5);
        
    
        function geo_json_a8bde985c58e442da7b6d8f8930a4db1_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 434: case 428: case 325: case 426: case 400: case 423: case 431: case 404: case 359: case 349: case 342: case 336: case 358: case 460: case 475: case 357: case 481: case 479: case 391: case 402: case 341: case 405: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 453: case 467: case 466: case 380: case 446: case 419: case 408: case 327: case 329: case 459: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 441: case 418: case 417: case 472: case 470: case 478: case 435: case 452: case 381: case 432: case 415: case 411: case 346: case 394: case 368: case 331: case 328: case 445: case 430: case 429: case 409: case 483: case 469: case 471: case 461: case 465: case 477: case 480: case 389: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 455: case 442: case 364: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 462: case 436: case 326: case 339: case 330: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 367: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_a8bde985c58e442da7b6d8f8930a4db1_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_a8bde985c58e442da7b6d8f8930a4db1 = L.geoJson(null, {
                onEachFeature: geo_json_a8bde985c58e442da7b6d8f8930a4db1_onEachFeature,
            
                style: geo_json_a8bde985c58e442da7b6d8f8930a4db1_styler,
        });

        function geo_json_a8bde985c58e442da7b6d8f8930a4db1_add (data) {
            geo_json_a8bde985c58e442da7b6d8f8930a4db1
                .addData(data)
                .addTo(choropleth_590194279e6c47eb9eff24eeb32af6c9);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_a8bde985c58e442da7b6d8f8930a4db1_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_021a51de2d9440cdaa341aec775f0b10 = {};

    
    color_map_021a51de2d9440cdaa341aec775f0b10.color = d3.scale.threshold()
              .domain([0.0, 7.491618751521735e-06, 1.498323750304347e-05, 2.247485625456521e-05, 2.996647500608694e-05, 3.745809375760868e-05, 4.494971250913042e-05, 5.244133126065215e-05, 5.993295001217388e-05, 6.742456876369562e-05, 7.491618751521736e-05, 8.240780626673908e-05, 8.989942501826083e-05, 9.739104376978256e-05, 0.0001048826625213043, 0.00011237428127282603, 0.00011986590002434777, 0.0001273575187758695, 0.00013484913752739123, 0.00014234075627891297, 0.0001498323750304347, 0.00015732399378195642, 0.00016481561253347816, 0.0001723072312849999, 0.00017979885003652167, 0.0001872904687880434, 0.00019478208753956512, 0.00020227370629108686, 0.0002097653250426086, 0.00021725694379413034, 0.00022474856254565205, 0.0002322401812971738, 0.00023973180004869553, 0.0002472234188002173, 0.000254715037551739, 0.0002622066563032608, 0.00026969827505478246, 0.0002771898938063042, 0.00028468151255782594, 0.0002921731313093477, 0.0002996647500608694, 0.00030715636881239116, 0.00031464798756391285, 0.00032213960631543464, 0.0003296312250669563, 0.0003371228438184781, 0.0003446144625699998, 0.00035210608132152154, 0.00035959770007304334, 0.000367089318824565, 0.0003745809375760868, 0.0003820725563276085, 0.00038956417507913024, 0.000397055793830652, 0.0004045474125821737, 0.0004120390313336954, 0.0004195306500852172, 0.0004270222688367389, 0.0004345138875882607, 0.00044200550633978237, 0.0004494971250913041, 0.00045698874384282584, 0.0004644803625943476, 0.0004719719813458693, 0.00047946360009739106, 0.0004869552188489128, 0.0004944468376004346, 0.0005019384563519563, 0.000509430075103478, 0.0005169216938549997, 0.0005244133126065216, 0.0005319049313580432, 0.0005393965501095649, 0.0005468881688610866, 0.0005543797876126084, 0.0005618714063641302, 0.0005693630251156519, 0.0005768546438671736, 0.0005843462626186954, 0.000591837881370217, 0.0005993295001217388, 0.0006068211188732606, 0.0006143127376247823, 0.000621804356376304, 0.0006292959751278257, 0.0006367875938793476, 0.0006442792126308693, 0.000651770831382391, 0.0006592624501339127, 0.0006667540688854344, 0.0006742456876369562, 0.0006817373063884779, 0.0006892289251399996, 0.0006967205438915214, 0.0007042121626430431, 0.0007117037813945649, 0.0007191954001460867, 0.0007266870188976084, 0.00073417863764913, 0.0007416702564006517, 0.0007491618751521736, 0.0007566534939036953, 0.000764145112655217, 0.0007716367314067387, 0.0007791283501582605, 0.0007866199689097823, 0.000794111587661304, 0.0008016032064128256, 0.0008090948251643474, 0.0008165864439158691, 0.0008240780626673908, 0.0008315696814189126, 0.0008390613001704344, 0.0008465529189219561, 0.0008540445376734778, 0.0008615361564249996, 0.0008690277751765214, 0.000876519393928043, 0.0008840110126795647, 0.0008915026314310865, 0.0008989942501826082, 0.00090648586893413, 0.0009139774876856517, 0.0009214691064371735, 0.0009289607251886952, 0.0009364523439402169, 0.0009439439626917386, 0.0009514355814432604, 0.0009589272001947821, 0.0009664188189463038, 0.0009739104376978256, 0.0009814020564493473, 0.0009888936752008692, 0.0009963852939523909, 0.0010038769127039126, 0.0010113685314554343, 0.001018860150206956, 0.0010263517689584778, 0.0010338433877099993, 0.0010413350064615212, 0.0010488266252130431, 0.0010563182439645646, 0.0010638098627160865, 0.001071301481467608, 0.0010787931002191299, 0.0010862847189706518, 0.0010937763377221732, 0.0011012679564736951, 0.0011087595752252168, 0.0011162511939767385, 0.0011237428127282604, 0.001131234431479782, 0.0011387260502313038, 0.0011462176689828255, 0.0011537092877343471, 0.001161200906485869, 0.0011686925252373907, 0.0011761841439889124, 0.001183675762740434, 0.001191167381491956, 0.0011986590002434777, 0.0012061506189949994, 0.0012136422377465213, 0.0012211338564980427, 0.0012286254752495646, 0.0012361170940010863, 0.001243608712752608, 0.00125110033150413, 0.0012585919502556514, 0.0012660835690071733, 0.0012735751877586952, 0.0012810668065102167, 0.0012885584252617386, 0.00129605004401326, 0.001303541662764782, 0.0013110332815163038, 0.0013185249002678253, 0.0013260165190193472, 0.0013335081377708689, 0.0013409997565223906, 0.0013484913752739125, 0.0013559829940254342, 0.0013634746127769558, 0.0013709662315284775, 0.0013784578502799992, 0.0013859494690315211, 0.0013934410877830428, 0.0014009327065345645, 0.0014084243252860862, 0.001415915944037608, 0.0014234075627891298, 0.0014308991815406515, 0.0014383908002921734, 0.0014458824190436948, 0.0014533740377952167, 0.0014608656565467384, 0.00146835727529826, 0.001475848894049782, 0.0014833405128013035, 0.0014908321315528254, 0.0014983237503043473, 0.0015058153690558687, 0.0015133069878073906, 0.0015207986065589121, 0.001528290225310434, 0.001535781844061956, 0.0015432734628134774, 0.0015507650815649993, 0.001558256700316521, 0.0015657483190680427, 0.0015732399378195646, 0.0015807315565710862, 0.001588223175322608, 0.0015957147940741296, 0.0016032064128256513, 0.001610698031577173, 0.0016181896503286949, 0.0016256812690802166, 0.0016331728878317383, 0.0016406645065832602, 0.0016481561253347816, 0.0016556477440863035, 0.0016631393628378252, 0.001670630981589347, 0.0016781226003408688, 0.0016856142190923903, 0.0016931058378439122, 0.001700597456595434, 0.0017080890753469555, 0.0017155806940984774, 0.0017230723128499991, 0.0017305639316015208, 0.0017380555503530427, 0.0017455471691045642, 0.001753038787856086, 0.0017605304066076078, 0.0017680220253591295, 0.0017755136441106514, 0.001783005262862173, 0.0017904968816136947, 0.0017979885003652164, 0.0018054801191167383, 0.00181297173786826, 0.0018204633566197817, 0.0018279549753713034, 0.001835446594122825, 0.001842938212874347, 0.0018504298316258687, 0.0018579214503773903, 0.0018654130691289122, 0.0018729046878804337, 0.0018803963066319556, 0.0018878879253834773, 0.001895379544134999, 0.0019028711628865209, 0.0019103627816380424, 0.0019178544003895643, 0.0019253460191410862, 0.0019328376378926076, 0.0019403292566441295, 0.0019478208753956512, 0.001955312494147173, 0.0019628041128986946, 0.0019702957316502165, 0.0019777873504017384, 0.00198527896915326, 0.0019927705879047818, 0.0020002622066563032, 0.002007753825407825, 0.002015245444159347, 0.0020227370629108685, 0.00203022868166239, 0.002037720300413912, 0.0020452119191654338, 0.0020527035379169557, 0.0020601951566684776, 0.0020676867754199986, 0.0020751783941715205, 0.0020826700129230424, 0.0020901616316745643, 0.0020976532504260862, 0.0021051448691776073, 0.002112636487929129, 0.002120128106680651, 0.002127619725432173, 0.002135111344183695, 0.002142602962935216, 0.002150094581686738, 0.0021575862004382597, 0.0021650778191897816, 0.0021725694379413035, 0.002180061056692825, 0.0021875526754443464, 0.0021950442941958683, 0.0022025359129473903, 0.002210027531698912, 0.0022175191504504336, 0.002225010769201955, 0.002232502387953477, 0.002239994006704999, 0.002247485625456521, 0.0022549772442080423, 0.002262468862959564, 0.0022699604817110856, 0.0022774521004626075, 0.0022849437192141294, 0.002292435337965651, 0.002299926956717173, 0.0023074185754686943, 0.002314910194220216, 0.002322401812971738, 0.0023298934317232596, 0.0023373850504747815, 0.0023448766692263034, 0.002352368287977825, 0.0023598599067293467, 0.002367351525480868, 0.00237484314423239, 0.002382334762983912, 0.0023898263817354335, 0.0023973180004869554, 0.002404809619238477, 0.0024123012379899987, 0.0024197928567415206, 0.0024272844754930425, 0.002434776094244564, 0.0024422677129960855, 0.0024497593317476074, 0.0024572509504991293, 0.002464742569250651, 0.0024722341880021727, 0.002479725806753694, 0.002487217425505216, 0.002494709044256738, 0.00250220066300826, 0.0025096922817597817, 0.0025171839005113028, 0.0025246755192628247, 0.0025321671380143466, 0.0025396587567658685, 0.0025471503755173904, 0.0025546419942689114, 0.0025621336130204333, 0.0025696252317719552, 0.002577116850523477, 0.002584608469274999, 0.00259210008802652, 0.002599591706778042, 0.002607083325529564, 0.0026145749442810858, 0.0026220665630326077, 0.002629558181784129, 0.0026370498005356506, 0.0026445414192871725, 0.0026520330380386944, 0.0026595246567902163, 0.0026670162755417378, 0.0026745078942932593, 0.002681999513044781, 0.002689491131796303, 0.002696982750547825, 0.0027044743692993464, 0.0027119659880508683, 0.00271945760680239, 0.0027269492255539117, 0.0027344408443054336, 0.002741932463056955, 0.002749424081808477, 0.0027569157005599984, 0.0027644073193115203, 0.0027718989380630422, 0.0027793905568145637, 0.0027868821755660856, 0.0027943737943176075, 0.002801865413069129, 0.002809357031820651, 0.0028168486505721724, 0.0028243402693236943, 0.002831831888075216, 0.0028393235068267376, 0.0028468151255782595, 0.002854306744329781, 0.002861798363081303, 0.002869289981832825, 0.0028767816005843467, 0.002884273219335868, 0.0028917648380873896, 0.0028992564568389115, 0.0029067480755904334, 0.0029142396943419554, 0.002921731313093477, 0.0029292229318449983, 0.00293671455059652, 0.002944206169348042, 0.002951697788099564, 0.0029591894068510855, 0.002966681025602607, 0.002974172644354129, 0.0029816642631056507, 0.0029891558818571726, 0.0029966475006086945, 0.0030041391193602156, 0.0030116307381117375, 0.0030191223568632594, 0.0030266139756147813, 0.003034105594366303, 0.0030415972131178242, 0.003049088831869346, 0.003056580450620868, 0.00306407206937239, 0.003071563688123912, 0.0030790553068754333, 0.0030865469256269548, 0.0030940385443784767, 0.0031015301631299986, 0.0031090217818815205, 0.003116513400633042, 0.0031240050193845634, 0.0031314966381360853, 0.003138988256887607, 0.003146479875639129, 0.0031539714943906506, 0.0031614631131421725, 0.003168954731893694, 0.003176446350645216, 0.0031839379693967378, 0.0031914295881482592, 0.003198921206899781, 0.0032064128256513026, 0.0032139044444028245, 0.003221396063154346, 0.003228887681905868, 0.0032363793006573898, 0.0032438709194089117, 0.003251362538160433, 0.0032588541569119546, 0.0032663457756634765, 0.0032738373944149984, 0.0032813290131665203, 0.003288820631918042, 0.0032963122506695633, 0.003303803869421085, 0.003311295488172607, 0.003318787106924129, 0.0033262787256756504, 0.003333770344427172, 0.003341261963178694, 0.0033487535819302157, 0.0033562452006817376, 0.0033637368194332595, 0.0033712284381847805, 0.0033787200569363024, 0.0033862116756878244, 0.0033937032944393463, 0.003401194913190868, 0.003408686531942389, 0.003416178150693911, 0.003423669769445433, 0.003431161388196955, 0.003438653006948477, 0.0034461446256999983, 0.0034536362444515197, 0.0034611278632030416, 0.0034686194819545635, 0.0034761111007060854, 0.003483602719457607, 0.0034910943382091284, 0.0034985859569606503, 0.003506077575712172, 0.003513569194463694, 0.0035210608132152156, 0.0035285524319667375, 0.003536044050718259, 0.003543535669469781, 0.0035510272882213027, 0.003558518906972824, 0.003566010525724346, 0.0035735021444758676, 0.0035809937632273895, 0.0035884853819789114, 0.003595977000730433, 0.0036034686194819547, 0.0036109602382334766, 0.003618451856984998, 0.00362594347573652, 0.0036334350944880415, 0.0036409267132395634, 0.0036484183319910853, 0.0036559099507426068, 0.0036634015694941287, 0.00367089318824565, 0.003678384806997172, 0.003685876425748694, 0.0036933680445002154, 0.0037008596632517373, 0.0037083512820032588, 0.0037158429007547807, 0.0037233345195063026, 0.0037308261382578245, 0.003738317757009346])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_021a51de2d9440cdaa341aec775f0b10.x = d3.scale.linear()
              .domain([0.0, 0.003738317757009346])
              .range([0, 400]);

    color_map_021a51de2d9440cdaa341aec775f0b10.legend = L.control({position: 'topright'});
    color_map_021a51de2d9440cdaa341aec775f0b10.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_021a51de2d9440cdaa341aec775f0b10.legend.addTo(map_ac8fbbe76908451f822272e7638883c5);

    color_map_021a51de2d9440cdaa341aec775f0b10.xAxis = d3.svg.axis()
        .scale(color_map_021a51de2d9440cdaa341aec775f0b10.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.0006230529595015577, 0.0012461059190031153, 0.001869158878504673, 0.0024922118380062306, 0.0031152647975077885, 0.003738317757009346]);

    color_map_021a51de2d9440cdaa341aec775f0b10.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_021a51de2d9440cdaa341aec775f0b10.g = color_map_021a51de2d9440cdaa341aec775f0b10.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_021a51de2d9440cdaa341aec775f0b10.g.selectAll("rect")
        .data(color_map_021a51de2d9440cdaa341aec775f0b10.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_021a51de2d9440cdaa341aec775f0b10.x(color_map_021a51de2d9440cdaa341aec775f0b10.color.domain()[i - 1]) : color_map_021a51de2d9440cdaa341aec775f0b10.x.range()[0],
            x1: i < color_map_021a51de2d9440cdaa341aec775f0b10.color.domain().length ? color_map_021a51de2d9440cdaa341aec775f0b10.x(color_map_021a51de2d9440cdaa341aec775f0b10.color.domain()[i]) : color_map_021a51de2d9440cdaa341aec775f0b10.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_021a51de2d9440cdaa341aec775f0b10.g.call(color_map_021a51de2d9440cdaa341aec775f0b10.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('29_50_PAULO EDUARDO GOMES');

