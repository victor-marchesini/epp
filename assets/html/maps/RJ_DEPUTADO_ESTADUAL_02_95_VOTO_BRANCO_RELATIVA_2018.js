    
            var map_0727ae2380ec47aeb931314d2c816f62 = L.map(
                "map_0727ae2380ec47aeb931314d2c816f62",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_3e4d19719ab3440e93b5839e509beae0 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_0727ae2380ec47aeb931314d2c816f62);
        
    
            var choropleth_b57795e3a3ed4325a1aa546b16160384 = L.featureGroup(
                {}
            ).addTo(map_0727ae2380ec47aeb931314d2c816f62);
        
    
        function geo_json_242d2b5e798d4e23a65943da45183f70_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 410: case 478: case 474: case 393: case 329: case 328: case 350: case 465: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 457: case 463: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 377: case 325: case 438: case 447: case 417: case 467: case 466: case 470: case 452: case 436: case 446: case 363: case 419: case 415: case 408: case 411: case 397: case 404: case 371: case 364: case 359: case 346: case 361: case 401: case 386: case 379: case 372: case 354: case 334: case 331: case 330: case 360: case 433: case 445: case 399: case 477: case 378: case 510: case 485: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 449: case 453: case 462: case 456: case 473: case 455: case 472: case 468: case 464: case 442: case 437: case 444: case 339: case 471: case 366: case 391: case 402: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_242d2b5e798d4e23a65943da45183f70_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_242d2b5e798d4e23a65943da45183f70 = L.geoJson(null, {
                onEachFeature: geo_json_242d2b5e798d4e23a65943da45183f70_onEachFeature,
            
                style: geo_json_242d2b5e798d4e23a65943da45183f70_styler,
        });

        function geo_json_242d2b5e798d4e23a65943da45183f70_add (data) {
            geo_json_242d2b5e798d4e23a65943da45183f70
                .addData(data)
                .addTo(choropleth_b57795e3a3ed4325a1aa546b16160384);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_242d2b5e798d4e23a65943da45183f70_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_37dd4a7c5a6f4926bf89294f45628915 = {};

    
    color_map_37dd4a7c5a6f4926bf89294f45628915.color = d3.scale.threshold()
              .domain([0.0, 0.0002683846483021512, 0.0005367692966043024, 0.0008051539449064536, 0.0010735385932086048, 0.0013419232415107561, 0.0016103078898129072, 0.0018786925381150583, 0.0021470771864172096, 0.0024154618347193607, 0.0026838464830215123, 0.0029522311313236634, 0.0032206157796258145, 0.003489000427927966, 0.0037573850762301166, 0.004025769724532268, 0.004294154372834419, 0.004562539021136571, 0.0048309236694387215, 0.005099308317740873, 0.0053676929660430245, 0.005636077614345175, 0.005904462262647327, 0.006172846910949478, 0.006441231559251629, 0.00670961620755378, 0.006978000855855932, 0.007246385504158083, 0.007514770152460233, 0.007783154800762385, 0.008051539449064535, 0.008319924097366687, 0.008588308745668839, 0.00885669339397099, 0.009125078042273142, 0.009393462690575293, 0.009661847338877443, 0.009930231987179594, 0.010198616635481746, 0.010467001283783898, 0.010735385932086049, 0.0110037705803882, 0.01127215522869035, 0.011540539876992502, 0.011808924525294653, 0.012077309173596805, 0.012345693821898956, 0.012614078470201108, 0.012882463118503258, 0.01315084776680541, 0.01341923241510756, 0.013687617063409712, 0.013956001711711864, 0.014224386360014015, 0.014492771008316165, 0.014761155656618315, 0.015029540304920467, 0.015297924953222618, 0.01556630960152477, 0.015834694249826923, 0.01610307889812907, 0.016371463546431222, 0.016639848194733374, 0.016908232843035526, 0.017176617491337677, 0.01744500213963983, 0.01771338678794198, 0.01798177143624413, 0.018250156084546283, 0.018518540732848435, 0.018786925381150586, 0.019055310029452734, 0.019323694677754886, 0.019592079326057037, 0.01986046397435919, 0.02012884862266134, 0.020397233270963492, 0.020665617919265643, 0.020934002567567795, 0.021202387215869947, 0.021470771864172098, 0.02173915651247425, 0.0220075411607764, 0.022275925809078553, 0.0225443104573807, 0.022812695105682852, 0.023081079753985004, 0.023349464402287155, 0.023617849050589307, 0.02388623369889146, 0.02415461834719361, 0.02442300299549576, 0.024691387643797913, 0.024959772292100064, 0.025228156940402216, 0.025496541588704368, 0.025764926237006516, 0.026033310885308667, 0.02630169553361082, 0.02657008018191297, 0.02683846483021512, 0.027106849478517273, 0.027375234126819425, 0.027643618775121576, 0.027912003423423728, 0.02818038807172588, 0.02844877272002803, 0.028717157368330182, 0.02898554201663233, 0.02925392666493448, 0.02952231131323663, 0.02979069596153878, 0.030059080609840933, 0.030327465258143085, 0.030595849906445236, 0.030864234554747388, 0.03113261920304954, 0.031401003851351694, 0.031669388499653846, 0.031937773147956, 0.03220615779625814, 0.0324745424445603, 0.032742927092862445, 0.0330113117411646, 0.03327969638946675, 0.033548081037768906, 0.03381646568607105, 0.03408485033437321, 0.034353234982675354, 0.034621619630977506, 0.03489000427927966, 0.03515838892758181, 0.03542677357588396, 0.03569515822418611, 0.03596354287248826, 0.036231927520790415, 0.036500312169092566, 0.03676869681739472, 0.03703708146569687, 0.03730546611399902, 0.03757385076230117, 0.037842235410603324, 0.03811062005890547, 0.03837900470720762, 0.03864738935550977, 0.03891577400381192, 0.039184158652114075, 0.039452543300416226, 0.03972092794871838, 0.03998931259702053, 0.04025769724532268, 0.04052608189362483, 0.040794466541926984, 0.041062851190229135, 0.04133123583853129, 0.04159962048683343, 0.04186800513513559, 0.042136389783437735, 0.04240477443173989, 0.04267315908004204, 0.042941543728344196, 0.04320992837664634, 0.0434783130249485, 0.043746697673250644, 0.0440150823215528, 0.04428346696985495, 0.044551851618157105, 0.04482023626645925, 0.0450886209147614, 0.04535700556306355, 0.045625390211365704, 0.045893774859667856, 0.04616215950797001, 0.04643054415627216, 0.04669892880457431, 0.04696731345287646, 0.047235698101178614, 0.047504082749480765, 0.04777246739778292, 0.04804085204608507, 0.04830923669438722, 0.048577621342689364, 0.04884600599099152, 0.04911439063929367, 0.049382775287595826, 0.04965115993589797, 0.04991954458420013, 0.050187929232502274, 0.05045631388080443, 0.05072469852910658, 0.050993083177408735, 0.05126146782571088, 0.05152985247401303, 0.05179823712231518, 0.052066621770617334, 0.052335006418919486, 0.05260339106722164, 0.05287177571552379, 0.05314016036382594, 0.05340854501212809, 0.05367692966043024, 0.053945314308732395, 0.054213698957034546, 0.0544820836053367, 0.05475046825363885, 0.055018852901940994, 0.05528723755024315, 0.0555556221985453, 0.055824006846847456, 0.0560923914951496, 0.05636077614345176, 0.0566291607917539, 0.05689754544005606, 0.057165930088358206, 0.057434314736660365, 0.05770269938496251, 0.05797108403326466, 0.05823946868156681, 0.05850785332986896, 0.058776237978171116, 0.05904462262647326, 0.05931300727477542, 0.05958139192307756, 0.05984977657137972, 0.060118161219681866, 0.060386545867984025, 0.06065493051628617, 0.06092331516458833, 0.06119169981289047, 0.06146008446119263, 0.061728469109494775, 0.06199685375779693, 0.06226523840609908, 0.06253362305440123, 0.06280200770270339, 0.06307039235100553, 0.06333877699930769, 0.06360716164760984, 0.063875546295912, 0.06414393094421414, 0.06441231559251628, 0.06468070024081844, 0.0649490848891206, 0.06521746953742275, 0.06548585418572489, 0.06575423883402703, 0.0660226234823292, 0.06629100813063135, 0.0665593927789335, 0.06682777742723564, 0.06709616207553781, 0.06736454672383996, 0.0676329313721421, 0.06790131602044425, 0.06816970066874642, 0.06843808531704856, 0.06870646996535071, 0.06897485461365285, 0.06924323926195501, 0.06951162391025717, 0.06978000855855931, 0.07004839320686146, 0.07031677785516362, 0.07058516250346578, 0.07085354715176792, 0.07112193180007007, 0.07139031644837222, 0.07165870109667438, 0.07192708574497653, 0.07219547039327867, 0.07246385504158083, 0.07273223968988297, 0.07300062433818513, 0.07326900898648728, 0.07353739363478944, 0.07380577828309158, 0.07407416293139374, 0.07434254757969588, 0.07461093222799804, 0.07487931687630019, 0.07514770152460234, 0.07541608617290449, 0.07568447082120665, 0.07595285546950879, 0.07622124011781094, 0.0764896247661131, 0.07675800941441524, 0.0770263940627174, 0.07729477871101954, 0.0775631633593217, 0.07783154800762385, 0.078099932655926, 0.07836831730422815, 0.07863670195253031, 0.07890508660083245, 0.07917347124913461, 0.07944185589743676, 0.0797102405457389, 0.07997862519404106, 0.08024700984234322, 0.08051539449064536, 0.0807837791389475, 0.08105216378724966, 0.08132054843555182, 0.08158893308385397, 0.08185731773215611, 0.08212570238045827, 0.08239408702876043, 0.08266247167706257, 0.08293085632536472, 0.08319924097366686, 0.08346762562196904, 0.08373601027027118, 0.08400439491857332, 0.08427277956687547, 0.08454116421517764, 0.08480954886347979, 0.08507793351178193, 0.08534631816008408, 0.08561470280838625, 0.08588308745668839, 0.08615147210499054, 0.08641985675329268, 0.08668824140159484, 0.086956626049897, 0.08722501069819914, 0.08749339534650129, 0.08776177999480345, 0.0880301646431056, 0.08829854929140775, 0.0885669339397099, 0.08883531858801205, 0.08910370323631421, 0.08937208788461636, 0.0896404725329185, 0.08990885718122066, 0.0901772418295228, 0.09044562647782496, 0.0907140111261271, 0.09098239577442926, 0.09125078042273141, 0.09151916507103357, 0.09178754971933571, 0.09205593436763787, 0.09232431901594002, 0.09259270366424217, 0.09286108831254432, 0.09312947296084648, 0.09339785760914862, 0.09366624225745077, 0.09393462690575292, 0.09420301155405508, 0.09447139620235723, 0.09473978085065937, 0.09500816549896153, 0.09527655014726369, 0.09554493479556583, 0.09581331944386798, 0.09608170409217014, 0.09635008874047228, 0.09661847338877444, 0.09688685803707658, 0.09715524268537873, 0.09742362733368089, 0.09769201198198305, 0.09796039663028519, 0.09822878127858733, 0.0984971659268895, 0.09876555057519165, 0.0990339352234938, 0.09930231987179594, 0.0995707045200981, 0.09983908916840026, 0.1001074738167024, 0.10037585846500455, 0.10064424311330669, 0.10091262776160886, 0.10118101240991101, 0.10144939705821315, 0.1017177817065153, 0.10198616635481747, 0.10225455100311961, 0.10252293565142176, 0.1027913202997239, 0.10305970494802606, 0.10332808959632822, 0.10359647424463037, 0.10386485889293251, 0.10413324354123467, 0.10440162818953683, 0.10467001283783897, 0.10493839748614112, 0.10520678213444327, 0.10547516678274543, 0.10574355143104758, 0.10601193607934972, 0.10628032072765188, 0.10654870537595403, 0.10681709002425618, 0.10708547467255833, 0.10735385932086049, 0.10762224396916263, 0.10789062861746479, 0.10815901326576693, 0.10842739791406909, 0.10869578256237124, 0.1089641672106734, 0.10923255185897554, 0.1095009365072777, 0.10976932115557984, 0.11003770580388199, 0.11030609045218415, 0.1105744751004863, 0.11084285974878845, 0.1111112443970906, 0.11137962904539275, 0.11164801369369491, 0.11191639834199706, 0.1121847829902992, 0.11245316763860136, 0.11272155228690352, 0.11298993693520566, 0.1132583215835078, 0.11352670623180995, 0.11379509088011212, 0.11406347552841427, 0.11433186017671641, 0.11460024482501856, 0.11486862947332073, 0.11513701412162287, 0.11540539876992502, 0.11567378341822716, 0.11594216806652932, 0.11621055271483148, 0.11647893736313363, 0.11674732201143577, 0.11701570665973791, 0.11728409130804009, 0.11755247595634223, 0.11782086060464438, 0.11808924525294652, 0.11835762990124869, 0.11862601454955084, 0.11889439919785298, 0.11916278384615513, 0.1194311684944573, 0.11969955314275944, 0.11996793779106159, 0.12023632243936373, 0.12050470708766589, 0.12077309173596805, 0.1210414763842702, 0.12130986103257234, 0.1215782456808745, 0.12184663032917666, 0.1221150149774788, 0.12238339962578094, 0.1226517842740831, 0.12292016892238526, 0.1231885535706874, 0.12345693821898955, 0.12372532286729171, 0.12399370751559385, 0.12426209216389601, 0.12453047681219816, 0.12479886146050032, 0.12506724610880246, 0.12533563075710463, 0.12560401540540678, 0.12587240005370892, 0.12614078470201107, 0.12640916935031324, 0.12667755399861538, 0.12694593864691753, 0.12721432329521967, 0.12748270794352182, 0.127751092591824, 0.12801947724012613, 0.12828786188842828, 0.12855624653673045, 0.12882463118503257, 0.12909301583333474, 0.12936140048163688, 0.12962978512993903, 0.1298981697782412, 0.13016655442654332, 0.1304349390748455, 0.13070332372314766, 0.13097170837144978, 0.13124009301975195, 0.13150847766805407, 0.13177686231635624, 0.1320452469646584, 0.13231363161296053, 0.1325820162612627, 0.13285040090956488, 0.133118785557867, 0.13338717020616916, 0.13365555485447128, 0.13392393950277345])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_37dd4a7c5a6f4926bf89294f45628915.x = d3.scale.linear()
              .domain([0.0, 0.13392393950277345])
              .range([0, 400]);

    color_map_37dd4a7c5a6f4926bf89294f45628915.legend = L.control({position: 'topright'});
    color_map_37dd4a7c5a6f4926bf89294f45628915.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_37dd4a7c5a6f4926bf89294f45628915.legend.addTo(map_0727ae2380ec47aeb931314d2c816f62);

    color_map_37dd4a7c5a6f4926bf89294f45628915.xAxis = d3.svg.axis()
        .scale(color_map_37dd4a7c5a6f4926bf89294f45628915.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.022320656583795576, 0.04464131316759115, 0.06696196975138673, 0.0892826263351823, 0.11160328291897788, 0.13392393950277345]);

    color_map_37dd4a7c5a6f4926bf89294f45628915.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_37dd4a7c5a6f4926bf89294f45628915.g = color_map_37dd4a7c5a6f4926bf89294f45628915.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_37dd4a7c5a6f4926bf89294f45628915.g.selectAll("rect")
        .data(color_map_37dd4a7c5a6f4926bf89294f45628915.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_37dd4a7c5a6f4926bf89294f45628915.x(color_map_37dd4a7c5a6f4926bf89294f45628915.color.domain()[i - 1]) : color_map_37dd4a7c5a6f4926bf89294f45628915.x.range()[0],
            x1: i < color_map_37dd4a7c5a6f4926bf89294f45628915.color.domain().length ? color_map_37dd4a7c5a6f4926bf89294f45628915.x(color_map_37dd4a7c5a6f4926bf89294f45628915.color.domain()[i]) : color_map_37dd4a7c5a6f4926bf89294f45628915.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_37dd4a7c5a6f4926bf89294f45628915.g.call(color_map_37dd4a7c5a6f4926bf89294f45628915.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('02_95_VOTO BRANCO');
