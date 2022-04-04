    
            var map_b2b1e8413c0d45b5b191d2a23e36e8cb = L.map(
                "map_b2b1e8413c0d45b5b191d2a23e36e8cb",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_b1c31760adf84dd09834c4a485f68da2 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_b2b1e8413c0d45b5b191d2a23e36e8cb);
        
    
            var choropleth_b6ef4cef19fd45b7a3909ae0e0d67b40 = L.featureGroup(
                {}
            ).addTo(map_b2b1e8413c0d45b5b191d2a23e36e8cb);
        
    
        function geo_json_2a4487951d6d44c59f0b70b2523b48e0_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 439: case 412: case 418: case 424: case 417: case 473: case 472: case 403: case 468: case 470: case 363: case 343: case 427: case 432: case 398: case 401: case 331: case 328: case 367: case 459: case 433: case 445: case 429: case 409: case 399: case 471: case 391: case 477: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 467: case 466: case 464: case 436: case 353: case 426: case 419: case 415: case 408: case 364: case 359: case 354: case 339: case 330: case 485: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 428: case 383: case 361: case 390: case 394: case 347: case 350: case 457: case 463: case 387: case 458: case 450: case 414: case 406: case 374: case 476: case 890: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 447: case 453: case 462: case 456: case 455: case 442: case 446: case 444: case 480: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 438: case 449: case 437: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_2a4487951d6d44c59f0b70b2523b48e0_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_2a4487951d6d44c59f0b70b2523b48e0 = L.geoJson(null, {
                onEachFeature: geo_json_2a4487951d6d44c59f0b70b2523b48e0_onEachFeature,
            
                style: geo_json_2a4487951d6d44c59f0b70b2523b48e0_styler,
        });

        function geo_json_2a4487951d6d44c59f0b70b2523b48e0_add (data) {
            geo_json_2a4487951d6d44c59f0b70b2523b48e0
                .addData(data)
                .addTo(choropleth_b6ef4cef19fd45b7a3909ae0e0d67b40);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_2a4487951d6d44c59f0b70b2523b48e0_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_f58f119a69f14e5a9c9f396ff4e8bdf4 = {};

    
    color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.color = d3.scale.threshold()
              .domain([0.0, 2.1824869487280464e-05, 4.364973897456093e-05, 6.54746084618414e-05, 8.729947794912185e-05, 0.00010912434743640233, 0.0001309492169236828, 0.00015277408641096326, 0.0001745989558982437, 0.00019642382538552418, 0.00021824869487280466, 0.00024007356436008513, 0.0002618984338473656, 0.0002837233033346461, 0.0003055481728219265, 0.000327373042309207, 0.0003491979117964874, 0.00037102278128376786, 0.00039284765077104837, 0.0004146725202583288, 0.0004364973897456093, 0.00045832225923288976, 0.00048014712872017026, 0.0005019719982074508, 0.0005237968676947312, 0.0005456217371820117, 0.0005674466066692922, 0.0005892714761565725, 0.000611096345643853, 0.0006329212151311335, 0.000654746084618414, 0.0006765709541056944, 0.0006983958235929748, 0.0007202206930802553, 0.0007420455625675357, 0.0007638704320548162, 0.0007856953015420967, 0.0008075201710293772, 0.0008293450405166576, 0.0008511699100039381, 0.0008729947794912186, 0.000894819648978499, 0.0009166445184657795, 0.00093846938795306, 0.0009602942574403405, 0.0009821191269276208, 0.0010039439964149015, 0.0010257688659021818, 0.0010475937353894623, 0.0010694186048767428, 0.0010912434743640233, 0.0011130683438513036, 0.0011348932133385843, 0.0011567180828258646, 0.001178542952313145, 0.0012003678218004256, 0.001222192691287706, 0.0012440175607749864, 0.001265842430262267, 0.0012876672997495474, 0.001309492169236828, 0.0013313170387241084, 0.0013531419082113889, 0.0013749667776986694, 0.0013967916471859497, 0.0014186165166732302, 0.0014404413861605107, 0.0014622662556477912, 0.0014840911251350715, 0.0015059159946223522, 0.0015277408641096325, 0.0015495657335969132, 0.0015713906030841935, 0.001593215472571474, 0.0016150403420587545, 0.001636865211546035, 0.0016586900810333152, 0.001680514950520596, 0.0017023398200078763, 0.0017241646894951568, 0.0017459895589824373, 0.0017678144284697178, 0.001789639297956998, 0.0018114641674442788, 0.001833289036931559, 0.0018551139064188395, 0.00187693877590612, 0.0018987636453934003, 0.001920588514880681, 0.0019424133843679613, 0.0019642382538552416, 0.0019860631233425225, 0.002007887992829803, 0.002029712862317083, 0.0020515377318043636, 0.0020733626012916445, 0.0020951874707789246, 0.002117012340266205, 0.0021388372097534856, 0.002160662079240766, 0.0021824869487280466, 0.002204311818215327, 0.002226136687702607, 0.002247961557189888, 0.0022697864266771686, 0.0022916112961644487, 0.002313436165651729, 0.0023352610351390097, 0.00235708590462629, 0.0023789107741135707, 0.002400735643600851, 0.0024225605130881313, 0.002444385382575412, 0.0024662102520626927, 0.0024880351215499728, 0.0025098599910372533, 0.002531684860524534, 0.0025535097300118147, 0.0025753345994990948, 0.0025971594689863753, 0.002618984338473656, 0.0026408092079609363, 0.0026626340774482168, 0.0026844589469354973, 0.0027062838164227778, 0.0027281086859100583, 0.0027499335553973388, 0.002771758424884619, 0.0027935832943718993, 0.0028154081638591803, 0.0028372330333464603, 0.002859057902833741, 0.0028808827723210213, 0.002902707641808302, 0.0029245325112955823, 0.002946357380782863, 0.002968182250270143, 0.002990007119757424, 0.0030118319892447044, 0.0030336568587319844, 0.003055481728219265, 0.003077306597706546, 0.0030991314671938264, 0.0031209563366811064, 0.003142781206168387, 0.003164606075655668, 0.003186430945142948, 0.0032082558146302284, 0.003230080684117509, 0.003251905553604789, 0.00327373042309207, 0.0032955552925793504, 0.0033173801620666305, 0.003339205031553911, 0.003361029901041192, 0.003382854770528472, 0.0034046796400157525, 0.003426504509503033, 0.0034483293789903135, 0.003470154248477594, 0.0034919791179648745, 0.0035138039874521546, 0.0035356288569394355, 0.003557453726426716, 0.003579278595913996, 0.0036011034654012766, 0.0036229283348885575, 0.003644753204375838, 0.003666578073863118, 0.0036884029433503986, 0.003710227812837679, 0.0037320526823249596, 0.00375387755181224, 0.0037757024212995206, 0.0037975272907868006, 0.0038193521602740816, 0.003841177029761362, 0.003863001899248642, 0.0038848267687359227, 0.003906651638223203, 0.003928476507710483, 0.003950301377197764, 0.003972126246685045, 0.003993951116172325, 0.004015775985659606, 0.004037600855146886, 0.004059425724634166, 0.004081250594121447, 0.004103075463608727, 0.004124900333096007, 0.004146725202583289, 0.004168550072070569, 0.004190374941557849, 0.00421219981104513, 0.00423402468053241, 0.00425584955001969, 0.004277674419506971, 0.004299499288994251, 0.004321324158481532, 0.004343149027968813, 0.004364973897456093, 0.004386798766943373, 0.004408623636430654, 0.004430448505917934, 0.004452273375405214, 0.004474098244892495, 0.004495923114379776, 0.004517747983867056, 0.004539572853354337, 0.004561397722841617, 0.004583222592328897, 0.004605047461816178, 0.004626872331303458, 0.0046486972007907384, 0.004670522070278019, 0.0046923469397653, 0.00471417180925258, 0.004735996678739861, 0.004757821548227141, 0.0047796464177144215, 0.004801471287201702, 0.0048232961566889825, 0.0048451210261762625, 0.004866945895663544, 0.004888770765150824, 0.0049105956346381045, 0.004932420504125385, 0.0049542453736126655, 0.0049760702430999455, 0.0049978951125872265, 0.0050197199820745065, 0.005041544851561788, 0.005063369721049068, 0.0050851945905363485, 0.005107019460023629, 0.0051288443295109095, 0.0051506691989981895, 0.0051724940684854705, 0.0051943189379727505, 0.005216143807460031, 0.005237968676947312, 0.0052597935464345925, 0.0052816184159218725, 0.0053034432854091535, 0.0053252681548964335, 0.005347093024383714, 0.0053689178938709945, 0.005390742763358275, 0.0054125676328455555, 0.0054343925023328365, 0.0054562173718201165, 0.005478042241307397, 0.0054998671107946775, 0.005521691980281958, 0.005543516849769238, 0.005565341719256519, 0.005587166588743799, 0.00560899145823108, 0.0056308163277183606, 0.005652641197205641, 0.005674466066692921, 0.005696290936180202, 0.005718115805667482, 0.005739940675154762, 0.005761765544642043, 0.005783590414129324, 0.005805415283616604, 0.005827240153103885, 0.005849065022591165, 0.005870889892078445, 0.005892714761565726, 0.005914539631053006, 0.005936364500540286, 0.005958189370027568, 0.005980014239514848, 0.006001839109002128, 0.006023663978489409, 0.006045488847976689, 0.006067313717463969, 0.00608913858695125, 0.00611096345643853, 0.00613278832592581, 0.006154613195413092, 0.006176438064900372, 0.006198262934387653, 0.006220087803874933, 0.006241912673362213, 0.006263737542849494, 0.006285562412336774, 0.006307387281824054, 0.006329212151311336, 0.006351037020798616, 0.006372861890285896, 0.006394686759773177, 0.006416511629260457, 0.006438336498747737, 0.006460161368235018, 0.006481986237722298, 0.006503811107209578, 0.00652563597669686, 0.00654746084618414, 0.00656928571567142, 0.006591110585158701, 0.006612935454645981, 0.006634760324133261, 0.006656585193620542, 0.006678410063107822, 0.006700234932595103, 0.006722059802082384, 0.006743884671569664, 0.006765709541056944, 0.006787534410544225, 0.006809359280031505, 0.006831184149518785, 0.006853009019006066, 0.006874833888493347, 0.006896658757980627, 0.006918483627467908, 0.006940308496955188, 0.006962133366442468, 0.006983958235929749, 0.007005783105417029, 0.007027607974904309, 0.00704943284439159, 0.007071257713878871, 0.007093082583366151, 0.007114907452853432, 0.007136732322340712, 0.007158557191827992, 0.007180382061315273, 0.007202206930802553, 0.007224031800289833, 0.007245856669777115, 0.007267681539264395, 0.007289506408751676, 0.007311331278238956, 0.007333156147726236, 0.007354981017213517, 0.007376805886700797, 0.007398630756188077, 0.007420455625675358, 0.007442280495162639, 0.007464105364649919, 0.0074859302341372, 0.00750775510362448, 0.00752957997311176, 0.007551404842599041, 0.007573229712086321, 0.007595054581573601, 0.007616879451060883, 0.007638704320548163, 0.007660529190035443, 0.007682354059522724, 0.007704178929010004, 0.007726003798497284, 0.007747828667984565, 0.007769653537471845, 0.007791478406959126, 0.007813303276446406, 0.007835128145933687, 0.007856953015420966, 0.007878777884908247, 0.007900602754395528, 0.00792242762388281, 0.00794425249337009, 0.00796607736285737, 0.00798790223234465, 0.008009727101831931, 0.008031551971319212, 0.008053376840806491, 0.008075201710293772, 0.008097026579781053, 0.008118851449268332, 0.008140676318755613, 0.008162501188242894, 0.008184326057730175, 0.008206150927217454, 0.008227975796704735, 0.008249800666192015, 0.008271625535679296, 0.008293450405166578, 0.008315275274653857, 0.008337100144141138, 0.008358925013628418, 0.008380749883115698, 0.008402574752602978, 0.00842439962209026, 0.008446224491577541, 0.00846804936106482, 0.008489874230552101, 0.00851169910003938, 0.008533523969526662, 0.008555348839013942, 0.008577173708501223, 0.008598998577988503, 0.008620823447475784, 0.008642648316963064, 0.008664473186450344, 0.008686298055937626, 0.008708122925424906, 0.008729947794912186, 0.008751772664399466, 0.008773597533886747, 0.008795422403374026, 0.008817247272861308, 0.00883907214234859, 0.008860897011835869, 0.00888272188132315, 0.008904546750810429, 0.00892637162029771, 0.00894819648978499, 0.008970021359272272, 0.008991846228759552, 0.009013671098246832, 0.009035495967734113, 0.009057320837221394, 0.009079145706708674, 0.009100970576195954, 0.009122795445683235, 0.009144620315170514, 0.009166445184657795, 0.009188270054145077, 0.009210094923632357, 0.009231919793119638, 0.009253744662606917, 0.009275569532094198, 0.009297394401581477, 0.00931921927106876, 0.009341044140556039, 0.00936286901004332, 0.0093846938795306, 0.00940651874901788, 0.00942834361850516, 0.009450168487992442, 0.009471993357479723, 0.009493818226967002, 0.009515643096454283, 0.009537467965941564, 0.009559292835428843, 0.009581117704916126, 0.009602942574403405, 0.009624767443890686, 0.009646592313377965, 0.009668417182865246, 0.009690242052352525, 0.009712066921839808, 0.009733891791327089, 0.009755716660814368, 0.009777541530301649, 0.009799366399788928, 0.009821191269276209, 0.00984301613876349, 0.00986484100825077, 0.00988666587773805, 0.009908490747225331, 0.009930315616712612, 0.009952140486199891, 0.009973965355687174, 0.009995790225174453, 0.010017615094661734, 0.010039439964149013, 0.010061264833636294, 0.010083089703123577, 0.010104914572610856, 0.010126739442098137, 0.010148564311585416, 0.010170389181072697, 0.010192214050559976, 0.010214038920047259, 0.010235863789534538, 0.010257688659021819, 0.0102795135285091, 0.010301338397996379, 0.01032316326748366, 0.010344988136970941, 0.010366813006458222, 0.010388637875945501, 0.010410462745432782, 0.010432287614920061, 0.010454112484407342, 0.010475937353894625, 0.010497762223381904, 0.010519587092869185, 0.010541411962356464, 0.010563236831843745, 0.010585061701331024, 0.010606886570818307, 0.010628711440305588, 0.010650536309792867, 0.010672361179280148, 0.010694186048767427, 0.010716010918254708, 0.010737835787741989, 0.01075966065722927, 0.01078148552671655, 0.01080331039620383, 0.010825135265691111, 0.01084696013517839, 0.010868785004665673, 0.010890609874152952])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.x = d3.scale.linear()
              .domain([0.0, 0.010890609874152952])
              .range([0, 400]);

    color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.legend = L.control({position: 'topright'});
    color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.legend.addTo(map_b2b1e8413c0d45b5b191d2a23e36e8cb);

    color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.xAxis = d3.svg.axis()
        .scale(color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.0018151016456921588, 0.0036302032913843175, 0.005445304937076476, 0.007260406582768635, 0.009075508228460793, 0.010890609874152952]);

    color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.g = color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.g.selectAll("rect")
        .data(color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.x(color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.color.domain()[i - 1]) : color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.x.range()[0],
            x1: i < color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.color.domain().length ? color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.x(color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.color.domain()[i]) : color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.g.call(color_map_f58f119a69f14e5a9c9f396ff4e8bdf4.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('10_50_GLAUBER DE MEDEIROS BRAGA');

