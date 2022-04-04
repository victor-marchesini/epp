    
            var map_f9dca99908654bb9b79191c7d177838a = L.map(
                "map_f9dca99908654bb9b79191c7d177838a",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_e8e4ddb32d8f48368e68d064986cebf2 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_f9dca99908654bb9b79191c7d177838a);
        
    
            var choropleth_843dad0b11f543ad8adcda8d236512b3 = L.featureGroup(
                {}
            ).addTo(map_f9dca99908654bb9b79191c7d177838a);
        
    
        function geo_json_51e07801dd1a48f58b0e1021d45e90a8_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 431: case 349: case 342: case 336: case 460: case 481: case 479: case 366: case 391: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 422: case 441: case 440: case 448: case 449: case 447: case 417: case 453: case 462: case 456: case 467: case 466: case 455: case 435: case 363: case 423: case 411: case 397: case 404: case 395: case 364: case 398: case 394: case 334: case 367: case 357: case 459: case 454: case 430: case 429: case 409: case 399: case 469: case 471: case 461: case 465: case 402: case 485: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 439: case 438: case 427: case 432: case 415: case 408: case 445: case 477: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 424: case 436: case 446: case 444: case 426: case 419: case 433: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 437: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_51e07801dd1a48f58b0e1021d45e90a8_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_51e07801dd1a48f58b0e1021d45e90a8 = L.geoJson(null, {
                onEachFeature: geo_json_51e07801dd1a48f58b0e1021d45e90a8_onEachFeature,
            
                style: geo_json_51e07801dd1a48f58b0e1021d45e90a8_styler,
        });

        function geo_json_51e07801dd1a48f58b0e1021d45e90a8_add (data) {
            geo_json_51e07801dd1a48f58b0e1021d45e90a8
                .addData(data)
                .addTo(choropleth_843dad0b11f543ad8adcda8d236512b3);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_51e07801dd1a48f58b0e1021d45e90a8_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_f143e6dcfe3b4dbba1675f00c7c7f57b = {};

    
    color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.color = d3.scale.threshold()
              .domain([0.00020834780193068963, 0.00023261745251617483, 0.00025688710310166, 0.0002811567536871452, 0.00030542640427263037, 0.00032969605485811554, 0.0003539657054436007, 0.00037823535602908586, 0.00040250500661457103, 0.0004267746572000562, 0.0004510443077855414, 0.0004753139583710265, 0.0004995836089565118, 0.000523853259541997, 0.0005481229101274821, 0.0005723925607129673, 0.0005966622112984524, 0.0006209318618839376, 0.0006452015124694228, 0.0006694711630549079, 0.0006937408136403932, 0.0007180104642258784, 0.0007422801148113634, 0.0007665497653968487, 0.000790819415982334, 0.000815089066567819, 0.0008393587171533043, 0.0008636283677387894, 0.0008878980183242746, 0.0009121676689097597, 0.000936437319495245, 0.0009607069700807301, 0.0009849766206662153, 0.0010092462712517007, 0.0010335159218371856, 0.001057785572422671, 0.001082055223008156, 0.0011063248735936413, 0.0011305945241791263, 0.0011548641747646117, 0.0011791338253500968, 0.001203403475935582, 0.0012276731265210671, 0.0012519427771065523, 0.0012762124276920373, 0.0013004820782775226, 0.0013247517288630078, 0.001349021379448493, 0.0013732910300339784, 0.0013975606806194633, 0.0014218303312049485, 0.0014460999817904336, 0.001470369632375919, 0.001494639282961404, 0.0015189089335468891, 0.0015431785841323745, 0.0015674482347178597, 0.0015917178853033448, 0.0016159875358888298, 0.0016402571864743152, 0.0016645268370598003, 0.0016887964876452855, 0.0017130661382307706, 0.0017373357888162558, 0.001761605439401741, 0.0017858750899872261, 0.0018101447405727115, 0.0018344143911581965, 0.0018586840417436816, 0.001882953692329167, 0.0019072233429146522, 0.0019314929935001371, 0.0019557626440856223, 0.001980032294671108, 0.002004301945256593, 0.002028571595842078, 0.002052841246427563, 0.0020771108970130485, 0.0021013805475985337, 0.002125650198184019, 0.002149919848769504, 0.0021741894993549888, 0.0021984591499404744, 0.002222728800525959, 0.0022469984511114447, 0.00227126810169693, 0.002295537752282415, 0.0023198074028679, 0.002344077053453385, 0.0023683467040388705, 0.0023926163546243557, 0.002416886005209841, 0.002441155655795326, 0.002465425306380811, 0.0024896949569662963, 0.0025139646075517815, 0.002538234258137267, 0.002562503908722752, 0.002586773559308237, 0.0026110432098937226, 0.0026353128604792073, 0.0026595825110646925, 0.0026838521616501776, 0.002708121812235663, 0.0027323914628211484, 0.002756661113406633, 0.0027809307639921183, 0.002805200414577604, 0.0028294700651630886, 0.0028537397157485742, 0.0028780093663340594, 0.002902279016919544, 0.0029265486675050297, 0.0029508183180905144, 0.002975087968676, 0.002999357619261485, 0.00302362726984697, 0.0030478969204324555, 0.0030721665710179407, 0.0030964362216034254, 0.003120705872188911, 0.003144975522774396, 0.0031692451733598814, 0.0031935148239453665, 0.0032177844745308517, 0.003242054125116337, 0.003266323775701822, 0.003290593426287307, 0.0033148630768727923, 0.0033391327274582775, 0.0033634023780437627, 0.003387672028629248, 0.0034119416792147334, 0.003436211329800218, 0.0034604809803857033, 0.003484750630971189, 0.0035090202815566737, 0.0035332899321421593, 0.0035575595827276444, 0.003581829233313129, 0.0036060988838986147, 0.0036303685344840995, 0.0036546381850695846, 0.0036789078356550702, 0.003703177486240555, 0.0037274471368260406, 0.0037517167874115257, 0.0037759864379970105, 0.003800256088582496, 0.0038245257391679812, 0.0038487953897534664, 0.0038730650403389516, 0.0038973346909244363, 0.003921604341509922, 0.0039458739920954075, 0.003970143642680893, 0.003994413293266378, 0.004018682943851863, 0.004042952594437348, 0.004067222245022833, 0.0040914918956083185, 0.004115761546193804, 0.004140031196779288, 0.004164300847364774, 0.004188570497950259, 0.004212840148535743, 0.004237109799121229, 0.004261379449706715, 0.0042856491002922, 0.004309918750877685, 0.00433418840146317, 0.004358458052048654, 0.00438272770263414, 0.004406997353219626, 0.004431267003805111, 0.004455536654390596, 0.00447980630497608, 0.004504075955561566, 0.004528345606147051, 0.004552615256732537, 0.004576884907318022, 0.004601154557903507, 0.004625424208488992, 0.004649693859074477, 0.004673963509659962, 0.0046982331602454476, 0.004722502810830933, 0.004746772461416418, 0.004771042112001903, 0.004795311762587388, 0.004819581413172873, 0.0048438510637583585, 0.004868120714343845, 0.004892390364929329, 0.004916660015514814, 0.004940929666100299, 0.004965199316685784, 0.0049894689672712695, 0.0050137386178567556, 0.00503800826844224, 0.005062277919027725, 0.00508654756961321, 0.005110817220198695, 0.005135086870784181, 0.005159356521369666, 0.005183626171955151, 0.005207895822540636, 0.005232165473126121, 0.005256435123711607, 0.005280704774297092, 0.005304974424882577, 0.005329244075468062, 0.005353513726053547, 0.005377783376639033, 0.005402053027224518, 0.0054263226778100025, 0.005450592328395488, 0.005474861978980973, 0.005499131629566459, 0.005523401280151944, 0.005547670930737429, 0.0055719405813229135, 0.005596210231908399, 0.005620479882493885, 0.00564474953307937, 0.005669019183664855, 0.005693288834250339, 0.0057175584848358245, 0.0057418281354213105, 0.005766097786006796, 0.005790367436592281, 0.005814637087177766, 0.00583890673776325, 0.005863176388348736, 0.0058874460389342215, 0.005911715689519707, 0.005935985340105192, 0.005960254990690677, 0.005984524641276161, 0.006008794291861647, 0.0060330639424471325, 0.006057333593032618, 0.006081603243618103, 0.006105872894203587, 0.006130142544789073, 0.006154412195374558, 0.0061786818459600434, 0.006202951496545529, 0.006227221147131014, 0.006251490797716499, 0.006275760448301984, 0.006300030098887469, 0.006324299749472954, 0.00634856940005844, 0.006372839050643925, 0.00639710870122941, 0.006421378351814895, 0.00644564800240038, 0.006469917652985865, 0.0064941873035713514, 0.006518456954156836, 0.006542726604742321, 0.006566996255327806, 0.006591265905913291, 0.006615535556498777, 0.0066398052070842616, 0.006664074857669747, 0.006688344508255232, 0.006712614158840717, 0.006736883809426203, 0.006761153460011688, 0.0067854231105971725, 0.006809692761182658, 0.006833962411768143, 0.006858232062353629, 0.006882501712939114, 0.006906771363524599, 0.0069310410141100835, 0.006955310664695569, 0.006979580315281054, 0.00700384996586654, 0.007028119616452025, 0.007052389267037509, 0.0070766589176229945, 0.00710092856820848, 0.007125198218793966, 0.007149467869379451, 0.007173737519964936, 0.00719800717055042, 0.0072222768211359055, 0.0072465464717213915, 0.007270816122306877, 0.007295085772892362, 0.007319355423477846, 0.007343625074063331, 0.007367894724648817, 0.0073921643752343025, 0.007416434025819788, 0.007440703676405273, 0.007464973326990757, 0.007489242977576243, 0.007513512628161728, 0.0075377822787472135, 0.007562051929332699, 0.007586321579918183, 0.007610591230503669, 0.007634860881089154, 0.007659130531674639, 0.0076834001822601245, 0.00770766983284561, 0.007731939483431095, 0.00775620913401658, 0.007780478784602065, 0.00780474843518755, 0.007829018085773036, 0.007853287736358521, 0.007877557386944007, 0.007901827037529492, 0.007926096688114977, 0.007950366338700462, 0.007974635989285947, 0.007998905639871432, 0.008023175290456918, 0.008047444941042403, 0.008071714591627886, 0.008095984242213371, 0.008120253892798858, 0.008144523543384343, 0.008168793193969829, 0.008193062844555314, 0.008217332495140797, 0.008241602145726282, 0.008265871796311768, 0.008290141446897254, 0.00831441109748274, 0.008338680748068225, 0.00836295039865371, 0.008387220049239195, 0.00841148969982468, 0.008435759350410165, 0.00846002900099565, 0.008484298651581134, 0.00850856830216662, 0.008532837952752104, 0.008557107603337591, 0.008581377253923076, 0.008605646904508562, 0.008629916555094047, 0.008654186205679532, 0.008678455856265017, 0.008702725506850502, 0.008726995157435987, 0.00875126480802147, 0.008775534458606956, 0.008799804109192443, 0.008824073759777928, 0.008848343410363413, 0.008872613060948898, 0.008896882711534384, 0.008921152362119869, 0.008945422012705354, 0.008969691663290839, 0.008993961313876324, 0.009018230964461808, 0.009042500615047295, 0.00906677026563278, 0.009091039916218265, 0.00911530956680375, 0.009139579217389235, 0.00916384886797472, 0.009188118518560206, 0.00921238816914569, 0.009236657819731176, 0.009260927470316661, 0.009285197120902146, 0.009309466771487631, 0.009333736422073117, 0.009358006072658602, 0.009382275723244087, 0.009406545373829572, 0.009430815024415057, 0.009455084675000542, 0.009479354325586027, 0.009503623976171513, 0.009527893626757, 0.009552163277342483, 0.009576432927927968, 0.009600702578513453, 0.009624972229098938, 0.009649241879684424, 0.009673511530269909, 0.009697781180855394, 0.009722050831440879, 0.009746320482026364, 0.00977059013261185, 0.009794859783197336, 0.009819129433782822, 0.009843399084368305, 0.00986766873495379, 0.009891938385539275, 0.00991620803612476, 0.009940477686710246, 0.00996474733729573, 0.009989016987881216, 0.010013286638466701, 0.010037556289052188, 0.010061825939637673, 0.010086095590223158, 0.010110365240808642, 0.010134634891394127, 0.010158904541979612, 0.010183174192565097, 0.010207443843150582, 0.010231713493736068, 0.010255983144321553, 0.01028025279490704, 0.010304522445492525, 0.01032879209607801, 0.010353061746663495, 0.010377331397248979, 0.010401601047834464, 0.010425870698419949, 0.010450140349005434, 0.01047440999959092, 0.010498679650176404, 0.010522949300761891, 0.010547218951347376, 0.010571488601932862, 0.010595758252518347, 0.010620027903103832, 0.010644297553689315, 0.0106685672042748, 0.010692836854860286, 0.01071710650544577, 0.010741376156031256, 0.010765645806616741, 0.010789915457202228, 0.010814185107787713, 0.010838454758373198, 0.010862724408958684, 0.010886994059544169, 0.010911263710129652, 0.010935533360715137, 0.010959803011300622, 0.010984072661886108, 0.011008342312471593, 0.01103261196305708, 0.011056881613642565, 0.01108115126422805, 0.011105420914813535, 0.01112969056539902, 0.011153960215984506, 0.011178229866569989, 0.011202499517155474, 0.01122676916774096, 0.011251038818326444, 0.011275308468911931, 0.011299578119497417, 0.011323847770082902, 0.011348117420668387, 0.011372387071253872, 0.011396656721839357, 0.011420926372424842, 0.011445196023010326, 0.011469465673595811, 0.011493735324181296, 0.011518004974766783, 0.011542274625352268, 0.011566544275937753, 0.011590813926523238, 0.011615083577108724, 0.011639353227694209, 0.011663622878279694, 0.01168789252886518, 0.011712162179450664, 0.011736431830036148, 0.011760701480621633, 0.01178497113120712, 0.011809240781792605, 0.01183351043237809, 0.011857780082963575, 0.01188204973354906, 0.011906319384134546, 0.01193058903472003, 0.011954858685305516, 0.011979128335891001, 0.012003397986476485, 0.012027667637061971, 0.012051937287647457, 0.012076206938232942, 0.012100476588818427, 0.012124746239403912, 0.012149015889989397, 0.012173285540574882, 0.012197555191160368, 0.012221824841745853, 0.012246094492331338, 0.012270364142916823, 0.012294633793502308, 0.012318903444087793])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.x = d3.scale.linear()
              .domain([0.00020834780193068963, 0.012318903444087793])
              .range([0, 400]);

    color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.legend = L.control({position: 'topright'});
    color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.legend.addTo(map_f9dca99908654bb9b79191c7d177838a);

    color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.xAxis = d3.svg.axis()
        .scale(color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.00020834780193068963, 0.0022267737422902068, 0.004245199682649724, 0.0062636256230092415, 0.008282051563368758, 0.010300477503728275, 0.012318903444087793]);

    color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.g = color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.g.selectAll("rect")
        .data(color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.x(color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.color.domain()[i - 1]) : color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.x.range()[0],
            x1: i < color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.color.domain().length ? color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.x(color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.color.domain()[i]) : color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.g.call(color_map_f143e6dcfe3b4dbba1675f00c7c7f57b.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('18_40_RENATO DA COSTA PELLIZZARI');

