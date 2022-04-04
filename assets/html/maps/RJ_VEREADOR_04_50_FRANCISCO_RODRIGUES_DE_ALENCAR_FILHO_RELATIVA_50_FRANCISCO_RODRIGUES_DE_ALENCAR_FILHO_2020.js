    
            var map_e2cbff74cbef4f33a78fb8f61a371209 = L.map(
                "map_e2cbff74cbef4f33a78fb8f61a371209",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_caea533ad72c4ccfa98c79ab666660d3 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_e2cbff74cbef4f33a78fb8f61a371209);
        
    
            var choropleth_659536ea7c78441ba5078401286bf216 = L.featureGroup(
                {}
            ).addTo(map_e2cbff74cbef4f33a78fb8f61a371209);
        
    
        function geo_json_da3dde08447c47d6a2dd36916f1eea79_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 431: case 349: case 342: case 336: case 460: case 481: case 479: case 391: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 434: case 412: case 418: case 325: case 424: case 417: case 403: case 353: case 363: case 396: case 423: case 427: case 432: case 411: case 397: case 395: case 371: case 364: case 359: case 346: case 401: case 354: case 334: case 327: case 326: case 329: case 331: case 330: case 367: case 459: case 430: case 429: case 399: case 366: case 402: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 447: case 467: case 466: case 473: case 436: case 446: case 444: case 485: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 449: case 462: case 456: case 468: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 438: case 453: case 455: case 472: case 464: case 442: case 437: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 470: case 426: case 419: case 415: case 408: case 339: case 433: case 445: case 471: case 477: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_da3dde08447c47d6a2dd36916f1eea79_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_da3dde08447c47d6a2dd36916f1eea79 = L.geoJson(null, {
                onEachFeature: geo_json_da3dde08447c47d6a2dd36916f1eea79_onEachFeature,
            
                style: geo_json_da3dde08447c47d6a2dd36916f1eea79_styler,
        });

        function geo_json_da3dde08447c47d6a2dd36916f1eea79_add (data) {
            geo_json_da3dde08447c47d6a2dd36916f1eea79
                .addData(data)
                .addTo(choropleth_659536ea7c78441ba5078401286bf216);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_da3dde08447c47d6a2dd36916f1eea79_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_3eb3db8b343f4e5985df72f5981c89e3 = {};

    
    color_map_3eb3db8b343f4e5985df72f5981c89e3.color = d3.scale.threshold()
              .domain([0.000563856780377784, 0.0006934714296878716, 0.0008230860789979591, 0.0009527007283080466, 0.0010823153776181342, 0.0012119300269282218, 0.0013415446762383091, 0.0014711593255483967, 0.0016007739748584843, 0.0017303886241685717, 0.0018600032734786595, 0.001989617922788747, 0.002119232572098834, 0.002248847221408922, 0.002378461870719009, 0.0025080765200290967, 0.0026376911693391843, 0.002767305818649272, 0.0028969204679593595, 0.003026535117269447, 0.0031561497665795347, 0.0032857644158896223, 0.00341537906519971, 0.0035449937145097974, 0.003674608363819884, 0.0038042230131299726, 0.00393383766244006, 0.004063452311750147, 0.0041930669610602345, 0.004322681610370322, 0.00445229625968041, 0.004581910908990497, 0.004711525558300585, 0.004841140207610672, 0.00497075485692076, 0.005100369506230848, 0.005229984155540934, 0.005359598804851023, 0.00548921345416111, 0.005618828103471197, 0.0057484427527812855, 0.005878057402091372, 0.00600767205140146, 0.006137286700711548, 0.006266901350021635, 0.006396515999331723, 0.00652613064864181, 0.006655745297951898, 0.0067853599472619845, 0.006914974596572073, 0.0070445892458821605, 0.007174203895192247, 0.007303818544502336, 0.007433433193812422, 0.00756304784312251, 0.0076926624924325985, 0.007822277141742686, 0.007951891791052773, 0.008081506440362861, 0.008211121089672948, 0.008340735738983036, 0.008470350388293123, 0.008599965037603212, 0.008729579686913298, 0.008859194336223387, 0.008988808985533475, 0.009118423634843562, 0.009248038284153649, 0.009377652933463737, 0.009507267582773824, 0.009636882232083912, 0.009766496881394, 0.009896111530704086, 0.010025726180014174, 0.010155340829324263, 0.01028495547863435, 0.010414570127944438, 0.010544184777254524, 0.010673799426564611, 0.0108034140758747, 0.010933028725184788, 0.011062643374494875, 0.011192258023804962, 0.01132187267311505, 0.011451487322425137, 0.011581101971735225, 0.011710716621045314, 0.011840331270355399, 0.011969945919665487, 0.012099560568975576, 0.012229175218285662, 0.01235878986759575, 0.012488404516905837, 0.012618019166215924, 0.012747633815526013, 0.012877248464836101, 0.013006863114146186, 0.013136477763456274, 0.013266092412766363, 0.01339570706207645, 0.013525321711386538, 0.013654936360696625, 0.013784551010006712, 0.0139141656593168, 0.014043780308626888, 0.014173394957936975, 0.014303009607247062, 0.01443262425655715, 0.014562238905867237, 0.014691853555177325, 0.014821468204487414, 0.014951082853797499, 0.015080697503107587, 0.015210312152417676, 0.015339926801727763, 0.015469541451037851, 0.015599156100347938, 0.015728770749658023, 0.01585838539896811, 0.0159880000482782, 0.016117614697588288, 0.016247229346898377, 0.01637684399620846, 0.01650645864551855, 0.01663607329482864, 0.016765687944138723, 0.016895302593448812, 0.0170249172427589, 0.01715453189206899, 0.017284146541379077, 0.017413761190689166, 0.01754337583999925, 0.01767299048930934, 0.017802605138619424, 0.017932219787929513, 0.0180618344372396, 0.01819144908654969, 0.018321063735859774, 0.018450678385169863, 0.01858029303447995, 0.01870990768379004, 0.018839522333100128, 0.018969136982410217, 0.019098751631720298, 0.019228366281030387, 0.019357980930340475, 0.019487595579650564, 0.019617210228960652, 0.01974682487827074, 0.019876439527580825, 0.020006054176890914, 0.020135668826201002, 0.02026528347551109, 0.020394898124821176, 0.020524512774131264, 0.02065412742344135, 0.020783742072751438, 0.020913356722061526, 0.021042971371371615, 0.021172586020681703, 0.02130220066999179, 0.021431815319301876, 0.021561429968611965, 0.02169104461792205, 0.02182065926723214, 0.021950273916542227, 0.022079888565852315, 0.0222095032151624, 0.02233911786447249, 0.022468732513782577, 0.022598347163092666, 0.022727961812402754, 0.022857576461712843, 0.022987191111022924, 0.023116805760333013, 0.0232464204096431, 0.02337603505895319, 0.023505649708263278, 0.023635264357573366, 0.02376487900688345, 0.02389449365619354, 0.024024108305503628, 0.024153722954813717, 0.0242833376041238, 0.02441295225343389, 0.024542566902743975, 0.024672181552054064, 0.024801796201364152, 0.02493141085067424, 0.02506102549998433, 0.025190640149294417, 0.025320254798604506, 0.025449869447914587, 0.025579484097224676, 0.025709098746534764, 0.025838713395844853, 0.02596832804515494, 0.02609794269446503, 0.026227557343775115, 0.026357171993085203, 0.02648678664239529, 0.02661640129170538, 0.026746015941015465, 0.026875630590325553, 0.02700524523963564, 0.027134859888945727, 0.027264474538255815, 0.027394089187565904, 0.027523703836875992, 0.02765331848618608, 0.027782933135496166, 0.027912547784806254, 0.02804216243411634, 0.028171777083426428, 0.028301391732736516, 0.028431006382046604, 0.02856062103135669, 0.028690235680666778, 0.028819850329976866, 0.028949464979286955, 0.029079079628597043, 0.02920869427790713, 0.029338308927217213, 0.0294679235765273, 0.02959753822583739, 0.02972715287514748, 0.029856767524457567, 0.029986382173767655, 0.03011599682307774, 0.03024561147238783, 0.030375226121697917, 0.030504840771008006, 0.03063445542031809, 0.03076407006962818, 0.030893684718938264, 0.031023299368248353, 0.03115291401755844, 0.03128252866686853, 0.031412143316178615, 0.031541757965488706, 0.03167137261479879, 0.031800987264108876, 0.03193060191341897, 0.03206021656272905, 0.03218983121203914, 0.03231944586134923, 0.032449060510659315, 0.03257867515996941, 0.03270828980927949, 0.03283790445858958, 0.03296751910789966, 0.033097133757209754, 0.03322674840651984, 0.03335636305582993, 0.033485977705140016, 0.03361559235445011, 0.03374520700376019, 0.03387482165307028, 0.03400443630238037, 0.034134050951690455, 0.03426366560100055, 0.034393280250310625, 0.03452289489962072, 0.0346525095489308, 0.034782124198240894, 0.03491173884755098, 0.035041353496861063, 0.035170968146171155, 0.03530058279548124, 0.03543019744479133, 0.03555981209410142, 0.03568942674341151, 0.035819041392721594, 0.03594865604203168, 0.036078270691341764, 0.036207885340651856, 0.03633749998996194, 0.036467114639272026, 0.03659672928858212, 0.0367263439378922, 0.036855958587202295, 0.03698557323651238, 0.03711518788582247, 0.03724480253513256, 0.03737441718444265, 0.03750403183375273, 0.03763364648306281, 0.037763261132372904, 0.03789287578168299, 0.03802249043099308, 0.038152105080303166, 0.03828171972961326, 0.03841133437892334, 0.038540949028233434, 0.03867056367754352, 0.03880017832685361, 0.038929792976163696, 0.039059407625473774, 0.039189022274783866, 0.03931863692409395, 0.03944825157340404, 0.03957786622271413, 0.03970748087202422, 0.039837095521334305, 0.0399667101706444, 0.04009632481995448, 0.04022593946926457, 0.04035555411857466, 0.040485168767884744, 0.040614783417194836, 0.040744398066504914, 0.040874012715815006, 0.04100362736512509, 0.04113324201443518, 0.04126285666374527, 0.04139247131305536, 0.041522085962365445, 0.04165170061167553, 0.04178131526098562, 0.041910929910295706, 0.0420405445596058, 0.04217015920891588, 0.04229977385822597, 0.04242938850753605, 0.042559003156846145, 0.04268861780615623, 0.042818232455466315, 0.04294784710477641, 0.04307746175408649, 0.043207076403396584, 0.04333669105270667, 0.04346630570201676, 0.043595920351326846, 0.04372553500063694, 0.043855149649947016, 0.0439847642992571, 0.04411437894856719, 0.04424399359787728, 0.04437360824718737, 0.044503222896497455, 0.04463283754580755, 0.04476245219511763, 0.044892066844427723, 0.04502168149373781, 0.0451512961430479, 0.045280910792357985, 0.04541052544166806, 0.045540140090978155, 0.04566975474028824, 0.04579936938959833, 0.04592898403890842, 0.04605859868821851, 0.046188213337528594, 0.046317827986838686, 0.04644744263614877, 0.046577057285458856, 0.04670667193476895, 0.04683628658407903, 0.04696590123338912, 0.0470955158826992, 0.047225130532009295, 0.04735474518131938, 0.04748435983062947, 0.04761397447993956, 0.04774358912924965, 0.047873203778559734, 0.04800281842786982, 0.04813243307717991, 0.048262047726489996, 0.04839166237580009, 0.048521277025110165, 0.04865089167442026, 0.04878050632373034, 0.048910120973040434, 0.04903973562235052, 0.049169350271660604, 0.049298964920970696, 0.04942857957028078, 0.04955819421959087, 0.04968780886890096, 0.04981742351821105, 0.049947038167521135, 0.05007665281683123, 0.050206267466141305, 0.05033588211545139, 0.05046549676476148, 0.05059511141407157, 0.05072472606338166, 0.050854340712691744, 0.050983955362001836, 0.05111357001131192, 0.05124318466062201, 0.0513727993099321, 0.05150241395924219, 0.051632028608552274, 0.05176164325786235, 0.051891257907172444, 0.05202087255648253, 0.05215048720579262, 0.052280101855102706, 0.0524097165044128, 0.05253933115372288, 0.052668945803032975, 0.05279856045234306, 0.052928175101653145, 0.05305778975096324, 0.05318740440027332, 0.05331701904958341, 0.05344663369889349, 0.053576248348203584, 0.05370586299751367, 0.05383547764682376, 0.053965092296133846, 0.05409470694544394, 0.05422432159475402, 0.05435393624406411, 0.0544835508933742, 0.054613165542684285, 0.05474278019199438, 0.054872394841304455, 0.055002009490614547, 0.05513162413992463, 0.05526123878923472, 0.05539085343854481, 0.05552046808785489, 0.055650082737164985, 0.05577969738647507, 0.05590931203578516, 0.05603892668509525, 0.05616854133440534, 0.056298155983715424, 0.05642777063302551, 0.056557385282335594, 0.056686999931645686, 0.05681661458095577, 0.056946229230265856, 0.05707584387957595, 0.05720545852888603, 0.057335073178196125, 0.05746468782750621, 0.0575943024768163, 0.05772391712612639, 0.05785353177543648, 0.05798314642474656, 0.05811276107405664, 0.058242375723366734, 0.05837199037267682, 0.05850160502198691, 0.058631219671296995, 0.05876083432060709, 0.05889044896991717, 0.059020063619227264, 0.05914967826853735, 0.059279292917847434, 0.059408907567157526, 0.059538522216467604, 0.059668136865777696, 0.05979775151508778, 0.05992736616439787, 0.06005698081370796, 0.06018659546301805, 0.060316210112328135, 0.06044582476163823, 0.06057543941094831, 0.0607050540602584, 0.06083466870956849, 0.060964283358878574, 0.06109389800818866, 0.061223512657498744, 0.061353127306808836, 0.06148274195611892, 0.06161235660542901, 0.0617419712547391, 0.06187158590404918, 0.062001200553359274, 0.06213081520266936, 0.06226042985197945, 0.062390044501289536, 0.06251965915059962, 0.0626492737999097, 0.06277888844921979, 0.06290850309852988, 0.06303811774783998, 0.06316773239715005, 0.06329734704646015, 0.06342696169577022, 0.06355657634508032, 0.06368619099439041, 0.06381580564370049, 0.06394542029301058, 0.06407503494232067, 0.06420464959163076, 0.06433426424094084, 0.06446387889025093, 0.06459349353956102, 0.0647231081888711, 0.06485272283818119, 0.06498233748749128, 0.06511195213680136, 0.06524156678611145])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_3eb3db8b343f4e5985df72f5981c89e3.x = d3.scale.linear()
              .domain([0.000563856780377784, 0.06524156678611145])
              .range([0, 400]);

    color_map_3eb3db8b343f4e5985df72f5981c89e3.legend = L.control({position: 'topright'});
    color_map_3eb3db8b343f4e5985df72f5981c89e3.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_3eb3db8b343f4e5985df72f5981c89e3.legend.addTo(map_e2cbff74cbef4f33a78fb8f61a371209);

    color_map_3eb3db8b343f4e5985df72f5981c89e3.xAxis = d3.svg.axis()
        .scale(color_map_3eb3db8b343f4e5985df72f5981c89e3.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.000563856780377784, 0.011343475114666731, 0.022123093448955678, 0.03290271178324462, 0.04368233011753357, 0.05446194845182252, 0.06524156678611145]);

    color_map_3eb3db8b343f4e5985df72f5981c89e3.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_3eb3db8b343f4e5985df72f5981c89e3.g = color_map_3eb3db8b343f4e5985df72f5981c89e3.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_3eb3db8b343f4e5985df72f5981c89e3.g.selectAll("rect")
        .data(color_map_3eb3db8b343f4e5985df72f5981c89e3.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_3eb3db8b343f4e5985df72f5981c89e3.x(color_map_3eb3db8b343f4e5985df72f5981c89e3.color.domain()[i - 1]) : color_map_3eb3db8b343f4e5985df72f5981c89e3.x.range()[0],
            x1: i < color_map_3eb3db8b343f4e5985df72f5981c89e3.color.domain().length ? color_map_3eb3db8b343f4e5985df72f5981c89e3.x(color_map_3eb3db8b343f4e5985df72f5981c89e3.color.domain()[i]) : color_map_3eb3db8b343f4e5985df72f5981c89e3.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_3eb3db8b343f4e5985df72f5981c89e3.g.call(color_map_3eb3db8b343f4e5985df72f5981c89e3.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('04_50_FRANCISCO RODRIGUES DE ALENCAR FILHO');

