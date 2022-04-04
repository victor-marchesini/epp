    
            var map_8ba0ed990de9473e9bd6df375216d1ef = L.map(
                "map_8ba0ed990de9473e9bd6df375216d1ef",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_fb42288e74564c46b58c8a9db7acffb1 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_8ba0ed990de9473e9bd6df375216d1ef);
        
    
            var choropleth_32e0a4e068d34f49860786f945125d28 = L.featureGroup(
                {}
            ).addTo(map_8ba0ed990de9473e9bd6df375216d1ef);
        
    
        function geo_json_65dcc7119ed54b82a0f4d5d7e43c3112_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 447: case 395: case 485: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 443: case 410: case 440: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 377: case 325: case 424: case 449: case 417: case 453: case 466: case 455: case 403: case 353: case 393: case 381: case 352: case 383: case 338: case 333: case 416: case 432: case 415: case 408: case 397: case 373: case 364: case 385: case 346: case 390: case 339: case 331: case 328: case 360: case 347: case 337: case 459: case 463: case 454: case 445: case 430: case 409: case 471: case 461: case 451: case 477: case 370: case 387: case 480: case 384: case 510: case 414: case 406: case 374: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 434: case 467: case 400: case 367: case 357: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 428: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_65dcc7119ed54b82a0f4d5d7e43c3112_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_65dcc7119ed54b82a0f4d5d7e43c3112 = L.geoJson(null, {
                onEachFeature: geo_json_65dcc7119ed54b82a0f4d5d7e43c3112_onEachFeature,
            
                style: geo_json_65dcc7119ed54b82a0f4d5d7e43c3112_styler,
        });

        function geo_json_65dcc7119ed54b82a0f4d5d7e43c3112_add (data) {
            geo_json_65dcc7119ed54b82a0f4d5d7e43c3112
                .addData(data)
                .addTo(choropleth_32e0a4e068d34f49860786f945125d28);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_65dcc7119ed54b82a0f4d5d7e43c3112_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_436694ab1adb40659af07ff5b2a411ca = {};

    
    color_map_436694ab1adb40659af07ff5b2a411ca.color = d3.scale.threshold()
              .domain([-0.009436639704838937, -0.009373645493897388, -0.00931065128295584, -0.009247657072014293, -0.009184662861072744, -0.009121668650131195, -0.009058674439189647, -0.0089956802282481, -0.00893268601730655, -0.008869691806365002, -0.008806697595423454, -0.008743703384481907, -0.008680709173540357, -0.008617714962598808, -0.00855472075165726, -0.008491726540715713, -0.008428732329774164, -0.008365738118832615, -0.008302743907891067, -0.00823974969694952, -0.00817675548600797, -0.008113761275066422, -0.008050767064124874, -0.007987772853183327, -0.007924778642241777, -0.007861784431300228, -0.007798790220358681, -0.0077357960094171325, -0.007672801798475584, -0.007609807587534036, -0.0075468133765924875, -0.007483819165650939, -0.007420824954709391, -0.0073578307437678426, -0.007294836532826294, -0.007231842321884746, -0.007168848110943198, -0.00710585390000165, -0.007042859689060101, -0.006979865478118553, -0.006916871267177004, -0.006853877056235456, -0.006790882845293908, -0.006727888634352359, -0.006664894423410811, -0.0066019002124692635, -0.006538906001527714, -0.006475911790586166, -0.006412917579644618, -0.006349923368703069, -0.006286929157761521, -0.006223934946819973, -0.006160940735878424, -0.006097946524936877, -0.006034952313995328, -0.005971958103053779, -0.005908963892112231, -0.005845969681170683, -0.005782975470229134, -0.005719981259287586, -0.005656987048346038, -0.00559399283740449, -0.005530998626462941, -0.005468004415521393, -0.005405010204579844, -0.005342015993638297, -0.005279021782696748, -0.005216027571755199, -0.005153033360813651, -0.005090039149872103, -0.0050270449389305544, -0.004964050727989006, -0.004901056517047458, -0.0048380623061059095, -0.004775068095164362, -0.004712073884222813, -0.0046490796732812645, -0.004586085462339716, -0.004523091251398168, -0.0044600970404566195, -0.004397102829515071, -0.004334108618573524, -0.0042711144076319745, -0.004208120196690426, -0.004145125985748878, -0.0040821317748073295, -0.004019137563865781, -0.003956143352924233, -0.0038931491419826854, -0.0038301549310411362, -0.0037671607200995888, -0.0037041665091580396, -0.0036411722982164912, -0.003578178087274943, -0.0035151838763333946, -0.0034521896653918463, -0.003389195454450298, -0.0033262012435087505, -0.0032632070325672013, -0.003200212821625654, -0.0031372186106841046, -0.0030742243997425563, -0.003011230188801008, -0.0029482359778594596, -0.0028852417669179113, -0.002822247555976363, -0.0027592533450348155, -0.0026962591340932663, -0.002633264923151718, -0.0025702707122101697, -0.0025072765012686214, -0.002444282290327073, -0.0023812880793855247, -0.0023182938684439772, -0.002255299657502428, -0.0021923054465608806, -0.0021293112356193314, -0.002066317024677783, -0.0020033228137362347, -0.0019403286027946864, -0.001877334391853139, -0.0018143401809115898, -0.0017513459699700423, -0.001688351759028493, -0.0016253575480869456, -0.0015623633371453956, -0.0014993691262038481, -0.001436374915262299, -0.0013733807043207515, -0.001310386493379204, -0.0012473922824376565, -0.0011843980714961056, -0.0011214038605545582, -0.0010584096496130107, -0.0009954154386714615, -0.0009324212277299123, -0.0008694270167883648, -0.0008064328058468174, -0.0007434385949052682, -0.0006804443839637207, -0.0006174501730221715, -0.0005544559620806223, -0.0004914617511390749, -0.0004284675401975274, -0.0003654733292559782, -0.00030247911831442903, -0.00023948490737288157, -0.0001764906964313341, -0.00011349648548978665, -5.050227454823572e-05, 1.249193639331174e-05, 7.54861473348592e-05, 0.0001384803582764084, 0.00020147456921795585, 0.00026446878015950505, 0.0003274629911010525, 0.0003904572020426017, 0.00045345141298414916, 0.0005164456239256984, 0.0005794398348672476, 0.000642434045808795, 0.0007054282567503425, 0.0007684224676918899, 0.0008314166786334409, 0.0008944108895749883, 0.0009574051005165358, 0.001020399311458085, 0.0010833935223996342, 0.0011463877333411816, 0.001209381944282729, 0.0012723761552242783, 0.0013353703661658257, 0.001398364577107375, 0.0014613587880489224, 0.0015243529989904716, 0.001587347209932019, 0.0016503414208735665, 0.0017133356318151174, 0.001776329842756665, 0.0018393240536982124, 0.0019023182646397598, 0.0019653124755813108, 0.002028306686522858, 0.0020913008974644057, 0.002154295108405955, 0.0022172893193475023, 0.0022802835302890515, 0.002343277741230599, 0.002406271952172148, 0.0024692661631136956, 0.002532260374055245, 0.002595254584996794, 0.0026582487959383415, 0.002721243006879889, 0.0027842372178214364, 0.0028472314287629873, 0.002910225639704535, 0.0029732198506460823, 0.0030362140615876297, 0.0030992082725291806, 0.003162202483470728, 0.0032251966944122756, 0.0032881909053538248, 0.0033511851162953722, 0.0034141793272369214, 0.003477173538178469, 0.003540167749120018, 0.0036031619600615655, 0.0036661561710031147, 0.003729150381944664, 0.0037921445928862114, 0.003855138803827759, 0.003918133014769306, 0.003981127225710857, 0.004044121436652405, 0.004107115647593952, 0.004170109858535501, 0.004233104069477049, 0.004296098280418598, 0.0043590924913601455, 0.004422086702301695, 0.004485080913243242, 0.004548075124184791, 0.0046110693351263405, 0.004674063546067888, 0.004737057757009435, 0.004800051967950983, 0.004863046178892534, 0.004926040389834081, 0.004989034600775629, 0.005052028811717176, 0.005115023022658727, 0.005178017233600275, 0.005241011444541822, 0.005304005655483371, 0.005366999866424919, 0.005429994077366468, 0.005492988288308015, 0.0055559824992495645, 0.005618976710191112, 0.0056819709211326595, 0.00574496513207421, 0.005807959343015758, 0.005870953553957305, 0.005933947764898853, 0.005996941975840404, 0.006059936186781951, 0.006122930397723499, 0.006185924608665046, 0.0062489188196065935, 0.006311913030548146, 0.006374907241489692, 0.006437901452431241, 0.006500895663372787, 0.0065638898743143395, 0.006626884085255885, 0.006689878296197434, 0.006752872507138984, 0.006815866718080529, 0.0068788609290220785, 0.006941855139963624, 0.007004849350905177, 0.007067843561846726, 0.007130837772788272, 0.007193831983729821, 0.00725682619467137, 0.007319820405612916, 0.007382814616554465, 0.007445808827496014, 0.00750880303843756, 0.007571797249379113, 0.0076347914603206585, 0.007697785671262208, 0.007760779882203757, 0.007823774093145303, 0.007886768304086852, 0.007949762515028401, 0.008012756725969947, 0.008075750936911496, 0.008138745147853049, 0.008201739358794594, 0.008264733569736143, 0.008327727780677693, 0.008390721991619238, 0.008453716202560788, 0.008516710413502333, 0.008579704624443883, 0.008642698835385432, 0.008705693046326981, 0.00876868725726853, 0.00883168146821008, 0.008894675679151625, 0.008957669890093174, 0.009020664101034723, 0.00908365831197627, 0.009146652522917818, 0.009209646733859364, 0.009272640944800913, 0.009335635155742466, 0.009398629366684012, 0.00946162357762556, 0.00952461778856711, 0.009587611999508656, 0.009650606210450205, 0.009713600421391754, 0.0097765946323333, 0.009839588843274849, 0.009902583054216402, 0.009965577265157947, 0.010028571476099497, 0.010091565687041042, 0.010154559897982592, 0.01021755410892414, 0.010280548319865686, 0.010343542530807236, 0.010406536741748785, 0.010469530952690334, 0.010532525163631883, 0.010595519374573432, 0.010658513585514978, 0.010721507796456527, 0.010784502007398073, 0.010847496218339622, 0.010910490429281171, 0.010973484640222717, 0.01103647885116427, 0.011099473062105819, 0.011162467273047365, 0.011225461483988914, 0.011288455694930463, 0.011351449905872009, 0.011414444116813558, 0.011477438327755107, 0.011540432538696653, 0.011603426749638206, 0.011666420960579751, 0.0117294151715213, 0.01179240938246285, 0.011855403593404396, 0.011918397804345945, 0.011981392015287494, 0.01204438622622904, 0.012107380437170589, 0.012170374648112142, 0.012233368859053687, 0.012296363069995236, 0.012359357280936782, 0.012422351491878331, 0.01248534570281988, 0.012548339913761426, 0.012611334124702975, 0.012674328335644525, 0.01273732254658607, 0.012800316757527623, 0.012863310968469172, 0.012926305179410718, 0.012989299390352267, 0.013052293601293816, 0.013115287812235362, 0.013178282023176911, 0.013241276234118457, 0.013304270445060006, 0.013367264656001559, 0.013430258866943105, 0.013493253077884654, 0.013556247288826203, 0.013619241499767749, 0.013682235710709298, 0.013745229921650847, 0.013808224132592393, 0.013871218343533942, 0.013934212554475491, 0.01399720676541704, 0.01406020097635859, 0.014123195187300135, 0.014186189398241685, 0.014249183609183234, 0.01431217782012478, 0.014375172031066329, 0.014438166242007878, 0.014501160452949427, 0.014564154663890976, 0.014627148874832525, 0.014690143085774071, 0.01475313729671562, 0.014816131507657166, 0.014879125718598715, 0.014942119929540264, 0.01500511414048181, 0.015068108351423363, 0.015131102562364912, 0.015194096773306458, 0.015257090984248007, 0.015320085195189556, 0.015383079406131102, 0.015446073617072651, 0.015509067828014197, 0.015572062038955746, 0.0156350562498973, 0.015698050460838844, 0.015761044671780394, 0.015824038882721943, 0.01588703309366349, 0.015950027304605038, 0.016013021515546587, 0.016076015726488133, 0.016139009937429682, 0.016202004148371234, 0.01626499835931278, 0.01632799257025433, 0.016390986781195875, 0.016453980992137424, 0.016516975203078973, 0.01657996941402052, 0.01664296362496207, 0.016705957835903618, 0.016768952046845167, 0.016831946257786716, 0.016894940468728265, 0.01695793467966981, 0.01702092889061136, 0.017083923101552906, 0.017146917312494455, 0.017209911523436004, 0.01727290573437755, 0.0173358999453191, 0.017398894156260652, 0.017461888367202198, 0.017524882578143747, 0.017587876789085296, 0.01765087100002684, 0.01771386521096839, 0.01777685942190994, 0.017839853632851486, 0.017902847843793035, 0.017965842054734584, 0.018028836265676133, 0.018091830476617683, 0.018154824687559228, 0.018217818898500777, 0.018280813109442327, 0.018343807320383872, 0.01840680153132542, 0.01846979574226697, 0.01853278995320852, 0.01859578416415007, 0.01865877837509162, 0.018721772586033164, 0.018784766796974713, 0.01884776100791626, 0.018910755218857808, 0.018973749429799357, 0.019036743640740903, 0.019099737851682456, 0.019162732062624005, 0.01922572627356555, 0.0192887204845071, 0.01935171469544865, 0.019414708906390195, 0.019477703117331744, 0.01954069732827329, 0.01960369153921484, 0.01966668575015639, 0.019729679961097937, 0.019792674172039487, 0.019855668382981036, 0.01991866259392258, 0.01998165680486413, 0.02004465101580568, 0.020107645226747226, 0.020170639437688775, 0.020233633648630327, 0.020296627859571873, 0.020359622070513422, 0.020422616281454968, 0.020485610492396517, 0.020548604703338066, 0.020611598914279612, 0.02067459312522116, 0.02073758733616271, 0.020800581547104256, 0.02086357575804581, 0.020926569968987358, 0.020989564179928904, 0.021052558390870453, 0.021115552601812, 0.021178546812753548, 0.021241541023695097, 0.021304535234636643, 0.021367529445578192, 0.021430523656519745, 0.02149351786746129, 0.02155651207840284, 0.02161950628934439, 0.021682500500285935, 0.021745494711227484, 0.02180848892216903, 0.02187148313311058, 0.021934477344052124, 0.021997471554993677])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_436694ab1adb40659af07ff5b2a411ca.x = d3.scale.linear()
              .domain([-0.009436639704838937, 0.021997471554993677])
              .range([0, 400]);

    color_map_436694ab1adb40659af07ff5b2a411ca.legend = L.control({position: 'topright'});
    color_map_436694ab1adb40659af07ff5b2a411ca.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_436694ab1adb40659af07ff5b2a411ca.legend.addTo(map_8ba0ed990de9473e9bd6df375216d1ef);

    color_map_436694ab1adb40659af07ff5b2a411ca.xAxis = d3.svg.axis()
        .scale(color_map_436694ab1adb40659af07ff5b2a411ca.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-0.009436639704838937, -0.004197621161533501, 0.0010413973817719347, 0.00628041592507737, 0.011519434468382807, 0.016758453011688244, 0.02199747155499368]);

    color_map_436694ab1adb40659af07ff5b2a411ca.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_436694ab1adb40659af07ff5b2a411ca.g = color_map_436694ab1adb40659af07ff5b2a411ca.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_436694ab1adb40659af07ff5b2a411ca.g.selectAll("rect")
        .data(color_map_436694ab1adb40659af07ff5b2a411ca.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_436694ab1adb40659af07ff5b2a411ca.x(color_map_436694ab1adb40659af07ff5b2a411ca.color.domain()[i - 1]) : color_map_436694ab1adb40659af07ff5b2a411ca.x.range()[0],
            x1: i < color_map_436694ab1adb40659af07ff5b2a411ca.color.domain().length ? color_map_436694ab1adb40659af07ff5b2a411ca.x(color_map_436694ab1adb40659af07ff5b2a411ca.color.domain()[i]) : color_map_436694ab1adb40659af07ff5b2a411ca.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_436694ab1adb40659af07ff5b2a411ca.g.call(color_map_436694ab1adb40659af07ff5b2a411ca.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('09_13_BENEDITA SOUZA DA SILVA SAMPAIO');
