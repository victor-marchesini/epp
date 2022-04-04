    
            var map_c47790747b7f40d1a1320bc5408ab9c4 = L.map(
                "map_c47790747b7f40d1a1320bc5408ab9c4",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_18961a82f2a3421ba1bc72d108f45052 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_c47790747b7f40d1a1320bc5408ab9c4);
        
    
            var choropleth_fb428578af0344cbac3378ff63814850 = L.featureGroup(
                {}
            ).addTo(map_c47790747b7f40d1a1320bc5408ab9c4);
        
    
        function geo_json_d60e21f8b24348dc8140601e8d7a184d_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 422: case 439: case 434: case 412: case 472: case 470: case 452: case 446: case 426: case 427: case 419: case 415: case 408: case 364: case 354: case 326: case 329: case 357: case 459: case 433: case 445: case 399: case 471: case 477: case 485: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 447: case 467: case 466: case 473: case 442: case 437: case 436: case 444: case 339: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 449: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 438: case 453: case 456: case 455: case 468: case 464: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 462: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_d60e21f8b24348dc8140601e8d7a184d_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_d60e21f8b24348dc8140601e8d7a184d = L.geoJson(null, {
                onEachFeature: geo_json_d60e21f8b24348dc8140601e8d7a184d_onEachFeature,
            
                style: geo_json_d60e21f8b24348dc8140601e8d7a184d_styler,
        });

        function geo_json_d60e21f8b24348dc8140601e8d7a184d_add (data) {
            geo_json_d60e21f8b24348dc8140601e8d7a184d
                .addData(data)
                .addTo(choropleth_fb428578af0344cbac3378ff63814850);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_d60e21f8b24348dc8140601e8d7a184d_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_4e9448d9e6ee49978fb6af1c0d6056f2 = {};

    
    color_map_4e9448d9e6ee49978fb6af1c0d6056f2.color = d3.scale.threshold()
              .domain([0.00023342670401493932, 0.0002721807134777666, 0.00031093472294059396, 0.00034968873240342135, 0.00038844274186624863, 0.00042719675132907596, 0.00046595076079190335, 0.0005047047702547307, 0.0005434587797175579, 0.0005822127891803852, 0.0006209667986432126, 0.0006597208081060399, 0.0006984748175688674, 0.0007372288270316947, 0.000775982836494522, 0.0008147368459573492, 0.0008534908554201766, 0.0008922448648830039, 0.0009309988743458312, 0.0009697528838086586, 0.0010085068932714858, 0.0010472609027343132, 0.0010860149121971405, 0.001124768921659968, 0.0011635229311227954, 0.0012022769405856226, 0.00124103095004845, 0.0012797849595112772, 0.0013185389689741047, 0.001357292978436932, 0.0013960469878997591, 0.0014348009973625866, 0.0014735550068254138, 0.0015123090162882412, 0.0015510630257510685, 0.001589817035213896, 0.0016285710446767231, 0.0016673250541395506, 0.0017060790636023778, 0.001744833073065205, 0.0017835870825280325, 0.0018223410919908597, 0.0018610951014536871, 0.0018998491109165144, 0.0019386031203793418, 0.001977357129842169, 0.0020161111393049965, 0.0020548651487678235, 0.0020936191582306514, 0.0021323731676934784, 0.002171127177156306, 0.0022098811866191333, 0.0022486351960819607, 0.0022873892055447877, 0.002326143215007615, 0.0023648972244704426, 0.00240365123393327, 0.002442405243396097, 0.0024811592528589245, 0.002519913262321752, 0.002558667271784579, 0.0025974212812474064, 0.002636175290710234, 0.0026749293001730613, 0.0027136833096358883, 0.0027524373190987157, 0.002791191328561543, 0.00282994533802437, 0.0028686993474871976, 0.002907453356950025, 0.0029462073664128525, 0.0029849613758756795, 0.003023715385338507, 0.0030624693948013344, 0.003101223404264162, 0.003139977413726989, 0.0031787314231898163, 0.0032174854326526437, 0.0032562394421154707, 0.003294993451578298, 0.0033337474610411256, 0.003372501470503953, 0.00341125547996678, 0.0034500094894296075, 0.003488763498892435, 0.0035275175083552624, 0.0035662715178180894, 0.003605025527280917, 0.0036437795367437443, 0.0036825335462065713, 0.0037212875556693987, 0.003760041565132226, 0.0037987955745950536, 0.0038375495840578806, 0.003876303593520708, 0.003915057602983535, 0.003953811612446363, 0.00399256562190919, 0.004031319631372017, 0.004070073640834845, 0.004108827650297672, 0.0041475816597605, 0.004186335669223327, 0.004225089678686155, 0.004263843688148982, 0.004302597697611809, 0.004341351707074636, 0.0043801057165374635, 0.004418859726000291, 0.0044576137354631175, 0.004496367744925946, 0.004535121754388772, 0.004573875763851601, 0.004612629773314427, 0.004651383782777255, 0.004690137792240082, 0.00472889180170291, 0.004767645811165736, 0.0048063998206285645, 0.004845153830091391, 0.0048839078395542185, 0.004922661849017046, 0.004961415858479873, 0.005000169867942701, 0.005038923877405528, 0.005077677886868355, 0.005116431896331183, 0.00515518590579401, 0.005193939915256837, 0.0052326939247196655, 0.005271447934182492, 0.0053102019436453195, 0.005348955953108147, 0.005387709962570974, 0.005426463972033801, 0.005465217981496629, 0.005503971990959456, 0.005542726000422284, 0.005581480009885111, 0.005620234019347938, 0.005658988028810766, 0.005697742038273593, 0.00573649604773642, 0.005775250057199248, 0.0058140040666620745, 0.005852758076124902, 0.005891512085587729, 0.005930266095050557, 0.005969020104513384, 0.006007774113976212, 0.006046528123439038, 0.006085282132901867, 0.006124036142364693, 0.006162790151827521, 0.006201544161290348, 0.0062402981707531755, 0.006279052180216002, 0.00631780618967883, 0.006356560199141657, 0.006395314208604485, 0.006434068218067312, 0.006472822227530139, 0.006511576236992967, 0.006550330246455794, 0.006589084255918621, 0.006627838265381449, 0.006666592274844276, 0.006705346284307103, 0.0067441002937699305, 0.006782854303232758, 0.006821608312695585, 0.006860362322158413, 0.006899116331621239, 0.006937870341084068, 0.006976624350546894, 0.007015378360009722, 0.007054132369472549, 0.007092886378935377, 0.007131640388398203, 0.0071703943978610315, 0.007209148407323858, 0.007247902416786686, 0.007286656426249513, 0.00732541043571234, 0.007364164445175168, 0.007402918454637995, 0.007441672464100822, 0.00748042647356365, 0.007519180483026477, 0.007557934492489304, 0.007596688501952132, 0.007635442511414959, 0.007674196520877787, 0.007712950530340614, 0.007751704539803441, 0.007790458549266269, 0.007829212558729096, 0.007867966568191923, 0.007906720577654751, 0.007945474587117578, 0.007984228596580404, 0.008022982606043233, 0.00806173661550606, 0.008100490624968886, 0.008139244634431714, 0.00817799864389454, 0.008216752653357369, 0.008255506662820196, 0.008294260672283024, 0.00833301468174585, 0.008371768691208677, 0.008410522700671505, 0.008449276710134332, 0.00848803071959716, 0.008526784729059987, 0.008565538738522813, 0.008604292747985642, 0.00864304675744847, 0.008681800766911295, 0.008720554776374123, 0.008759308785836951, 0.00879806279529978, 0.008836816804762605, 0.008875570814225433, 0.008914324823688261, 0.008953078833151088, 0.008991832842613914, 0.009030586852076743, 0.00906934086153957, 0.009108094871002398, 0.009146848880465224, 0.00918560288992805, 0.009224356899390879, 0.009263110908853707, 0.009301864918316532, 0.00934061892777936, 0.009379372937242189, 0.009418126946705015, 0.009456880956167842, 0.00949563496563067, 0.009534388975093497, 0.009573142984556325, 0.009611896994019152, 0.009650651003481978, 0.009689405012944807, 0.009728159022407635, 0.009766913031870461, 0.009805667041333288, 0.009844421050796116, 0.009883175060258945, 0.00992192906972177, 0.009960683079184598, 0.009999437088647426, 0.010038191098110253, 0.01007694510757308, 0.010115699117035908, 0.010154453126498734, 0.010193207135961562, 0.01023196114542439, 0.010270715154887216, 0.010309469164350044, 0.010348223173812872, 0.010386977183275699, 0.010425731192738525, 0.010464485202201354, 0.01050323921166418, 0.010541993221127009, 0.010580747230589835, 0.010619501240052662, 0.01065825524951549, 0.010697009258978318, 0.010735763268441145, 0.010774517277903971, 0.0108132712873668, 0.010852025296829628, 0.010890779306292453, 0.010929533315755281, 0.01096828732521811, 0.011007041334680936, 0.011045795344143763, 0.011084549353606591, 0.011123303363069418, 0.011162057372532246, 0.011200811381995072, 0.011239565391457899, 0.011278319400920727, 0.011317073410383556, 0.01135582741984638, 0.011394581429309209, 0.011433335438772037, 0.011472089448234864, 0.01151084345769769, 0.011549597467160519, 0.011588351476623347, 0.011627105486086173, 0.011665859495549, 0.011704613505011828, 0.011743367514474655, 0.011782121523937483, 0.01182087553340031, 0.011859629542863136, 0.011898383552325965, 0.011937137561788793, 0.011975891571251618, 0.012014645580714446, 0.012053399590177274, 0.012092153599640101, 0.012130907609102928, 0.012169661618565756, 0.012208415628028583, 0.01224716963749141, 0.012285923646954237, 0.012324677656417064, 0.012363431665879892, 0.01240218567534272, 0.012440939684805545, 0.012479693694268374, 0.012518447703731202, 0.01255720171319403, 0.012595955722656855, 0.012634709732119683, 0.012673463741582512, 0.012712217751045338, 0.012750971760508167, 0.012789725769970993, 0.01282847977943382, 0.012867233788896648, 0.012905987798359476, 0.012944741807822301, 0.01298349581728513, 0.013022249826747958, 0.013061003836210784, 0.013099757845673611, 0.01313851185513644, 0.013177265864599266, 0.013216019874062094, 0.01325477388352492, 0.013293527892987747, 0.013332281902450576, 0.013371035911913404, 0.01340978992137623, 0.013448543930839057, 0.013487297940301885, 0.013526051949764714, 0.013564805959227539, 0.013603559968690367, 0.013642313978153195, 0.013681067987616022, 0.013719821997078848, 0.013758576006541677, 0.013797330016004503, 0.013836084025467332, 0.013874838034930158, 0.013913592044392985, 0.013952346053855813, 0.013991100063318641, 0.014029854072781466, 0.014068608082244295, 0.014107362091707123, 0.01414611610116995, 0.014184870110632776, 0.014223624120095604, 0.014262378129558433, 0.01430113213902126, 0.014339886148484086, 0.014378640157946914, 0.01441739416740974, 0.014456148176872569, 0.014494902186335396, 0.014533656195798222, 0.01457241020526105, 0.014611164214723879, 0.014649918224186704, 0.014688672233649532, 0.01472742624311236, 0.014766180252575187, 0.014804934262038013, 0.014843688271500842, 0.014882442280963668, 0.014921196290426497, 0.014959950299889323, 0.01499870430935215, 0.015037458318814978, 0.015076212328277806, 0.015114966337740635, 0.01515372034720346, 0.015192474356666288, 0.015231228366129116, 0.015269982375591943, 0.01530873638505477, 0.015347490394517598, 0.015386244403980424, 0.015424998413443252, 0.015463752422906079, 0.015502506432368906, 0.015541260441831734, 0.015580014451294562, 0.015618768460757387, 0.015657522470220217, 0.015696276479683045, 0.01573503048914587, 0.0157737844986087, 0.015812538508071527, 0.01585129251753435, 0.01589004652699718, 0.015928800536460005, 0.015967554545922833, 0.01600630855538566, 0.01604506256484849, 0.016083816574311315, 0.016122570583774143, 0.01616132459323697, 0.0162000786026998, 0.016238832612162624, 0.016277586621625453, 0.01631634063108828, 0.01635509464055111, 0.016393848650013934, 0.016432602659476762, 0.016471356668939587, 0.016510110678402416, 0.016548864687865244, 0.016587618697328072, 0.0166263727067909, 0.016665126716253725, 0.016703880725716554, 0.016742634735179382, 0.016781388744642207, 0.016820142754105035, 0.016858896763567863, 0.016897650773030688, 0.016936404782493517, 0.016975158791956345, 0.017013912801419173, 0.017052666810882, 0.017091420820344826, 0.01713017482980765, 0.01716892883927048, 0.017207682848733308, 0.017246436858196136, 0.017285190867658964, 0.017323944877121793, 0.01736269888658462, 0.017401452896047442, 0.01744020690551027, 0.0174789609149731, 0.017517714924435927, 0.017556468933898756, 0.017595222943361584, 0.01763397695282441, 0.017672730962287237, 0.017711484971750065, 0.01775023898121289, 0.01778899299067572, 0.017827747000138547, 0.01786650100960137, 0.0179052550190642, 0.01794400902852703, 0.017982763037989857, 0.018021517047452685, 0.01806027105691551, 0.018099025066378335, 0.018137779075841163, 0.01817653308530399, 0.01821528709476682, 0.018254041104229648, 0.018292795113692476, 0.018331549123155304, 0.018370303132618126, 0.018409057142080954, 0.018447811151543782, 0.01848656516100661, 0.01852531917046944, 0.018564073179932267, 0.018602827189395092, 0.01864158119885792, 0.018680335208320745, 0.018719089217783574, 0.018757843227246402, 0.01879659723670923, 0.018835351246172055, 0.018874105255634883, 0.018912859265097712, 0.01895161327456054, 0.018990367284023365, 0.019029121293486193, 0.019067875302949018, 0.019106629312411846, 0.019145383321874675, 0.019184137331337503, 0.01922289134080033, 0.01926164535026316, 0.019300399359725984, 0.01933915336918881, 0.019377907378651638, 0.019416661388114466, 0.019455415397577294, 0.019494169407040123, 0.01953292341650295, 0.019571677425965776])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_4e9448d9e6ee49978fb6af1c0d6056f2.x = d3.scale.linear()
              .domain([0.00023342670401493932, 0.019571677425965776])
              .range([0, 400]);

    color_map_4e9448d9e6ee49978fb6af1c0d6056f2.legend = L.control({position: 'topright'});
    color_map_4e9448d9e6ee49978fb6af1c0d6056f2.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_4e9448d9e6ee49978fb6af1c0d6056f2.legend.addTo(map_c47790747b7f40d1a1320bc5408ab9c4);

    color_map_4e9448d9e6ee49978fb6af1c0d6056f2.xAxis = d3.svg.axis()
        .scale(color_map_4e9448d9e6ee49978fb6af1c0d6056f2.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.00023342670401493932, 0.0034564684910067455, 0.006679510277998552, 0.009902552064990357, 0.013125593851982163, 0.01634863563897397, 0.019571677425965776]);

    color_map_4e9448d9e6ee49978fb6af1c0d6056f2.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_4e9448d9e6ee49978fb6af1c0d6056f2.g = color_map_4e9448d9e6ee49978fb6af1c0d6056f2.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_4e9448d9e6ee49978fb6af1c0d6056f2.g.selectAll("rect")
        .data(color_map_4e9448d9e6ee49978fb6af1c0d6056f2.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_4e9448d9e6ee49978fb6af1c0d6056f2.x(color_map_4e9448d9e6ee49978fb6af1c0d6056f2.color.domain()[i - 1]) : color_map_4e9448d9e6ee49978fb6af1c0d6056f2.x.range()[0],
            x1: i < color_map_4e9448d9e6ee49978fb6af1c0d6056f2.color.domain().length ? color_map_4e9448d9e6ee49978fb6af1c0d6056f2.x(color_map_4e9448d9e6ee49978fb6af1c0d6056f2.color.domain()[i]) : color_map_4e9448d9e6ee49978fb6af1c0d6056f2.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_4e9448d9e6ee49978fb6af1c0d6056f2.g.call(color_map_4e9448d9e6ee49978fb6af1c0d6056f2.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('20_50_LUCIANA BOITEUX DE FIGUEIREDO RODRIGUES');

