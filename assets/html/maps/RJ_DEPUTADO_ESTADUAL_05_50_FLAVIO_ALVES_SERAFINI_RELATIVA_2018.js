    
            var map_bbf7a536d4d5480d98e81b11cdf8a867 = L.map(
                "map_bbf7a536d4d5480d98e81b11cdf8a867",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_602c4ac8d2694d3ca0e62d0f241d48ac = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_bbf7a536d4d5480d98e81b11cdf8a867);
        
    
            var choropleth_fb4deb0117d34639b951037a89b06aa2 = L.featureGroup(
                {}
            ).addTo(map_bbf7a536d4d5480d98e81b11cdf8a867);
        
    
        function geo_json_cc76015149f74332b06e60ea668923b2_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 443: case 439: case 412: case 418: case 325: case 417: case 473: case 472: case 403: case 468: case 464: case 470: case 353: case 363: case 396: case 427: case 432: case 411: case 404: case 371: case 359: case 334: case 327: case 329: case 433: case 445: case 399: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 434: case 440: case 424: case 467: case 466: case 446: case 426: case 415: case 408: case 364: case 354: case 326: case 331: case 330: case 391: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 428: case 410: case 393: case 338: case 340: case 416: case 361: case 394: case 348: case 358: case 360: case 347: case 357: case 350: case 457: case 463: case 366: case 451: case 387: case 458: case 450: case 480: case 389: case 384: case 510: case 405: case 414: case 406: case 374: case 476: case 890: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 438: case 447: case 462: case 456: case 455: case 442: case 436: case 444: case 419: case 339: case 485: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 453: case 437: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_cc76015149f74332b06e60ea668923b2_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_cc76015149f74332b06e60ea668923b2 = L.geoJson(null, {
                onEachFeature: geo_json_cc76015149f74332b06e60ea668923b2_onEachFeature,
            
                style: geo_json_cc76015149f74332b06e60ea668923b2_styler,
        });

        function geo_json_cc76015149f74332b06e60ea668923b2_add (data) {
            geo_json_cc76015149f74332b06e60ea668923b2
                .addData(data)
                .addTo(choropleth_fb4deb0117d34639b951037a89b06aa2);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_cc76015149f74332b06e60ea668923b2_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_ee8da253d15544f3b8ec751392b4409e = {};

    
    color_map_ee8da253d15544f3b8ec751392b4409e.color = d3.scale.threshold()
              .domain([0.0, 3.372026267657786e-05, 6.744052535315572e-05, 0.00010116078802973359, 0.00013488105070631144, 0.0001686013133828893, 0.00020232157605946718, 0.00023604183873604504, 0.00026976210141262287, 0.0003034823640892008, 0.0003372026267657786, 0.0003709228894423565, 0.00040464315211893436, 0.00043836341479551216, 0.0004720836774720901, 0.000505803940148668, 0.0005395242028252457, 0.0005732444655018236, 0.0006069647281784016, 0.0006406849908549793, 0.0006744052535315572, 0.0007081255162081351, 0.000741845778884713, 0.0007755660415612908, 0.0008092863042378687, 0.0008430065669144466, 0.0008767268295910243, 0.0009104470922676022, 0.0009441673549441802, 0.000977887617620758, 0.001011607880297336, 0.0010453281429739136, 0.0010790484056504915, 0.0011127686683270693, 0.0011464889310036472, 0.001180209193680225, 0.0012139294563568031, 0.001247649719033381, 0.0012813699817099586, 0.0013150902443865365, 0.0013488105070631144, 0.0013825307697396922, 0.0014162510324162703, 0.0014499712950928481, 0.001483691557769426, 0.0015174118204460036, 0.0015511320831225815, 0.0015848523457991594, 0.0016185726084757374, 0.0016522928711523153, 0.0016860131338288932, 0.001719733396505471, 0.0017534536591820487, 0.0017871739218586265, 0.0018208941845352044, 0.0018546144472117825, 0.0018883347098883603, 0.0019220549725649382, 0.001955775235241516, 0.001989495497918094, 0.002023215760594672, 0.0020569360232712496, 0.0020906562859478272, 0.002124376548624405, 0.002158096811300983, 0.002191817073977561, 0.0022255373366541387, 0.0022592575993307168, 0.0022929778620072944, 0.0023266981246838725, 0.00236041838736045, 0.002394138650037028, 0.0024278589127136063, 0.002461579175390184, 0.002495299438066762, 0.0025290197007433396, 0.0025627399634199173, 0.0025964602260964953, 0.002630180488773073, 0.002663900751449651, 0.0026976210141262287, 0.0027313412768028068, 0.0027650615394793844, 0.0027987818021559625, 0.0028325020648325406, 0.002866222327509118, 0.0028999425901856963, 0.002933662852862274, 0.002967383115538852, 0.0030011033782154292, 0.0030348236408920073, 0.0030685439035685854, 0.003102264166245163, 0.003135984428921741, 0.0031697046915983187, 0.003203424954274897, 0.003237145216951475, 0.0032708654796280525, 0.0033045857423046306, 0.0033383060049812082, 0.0033720262676577863, 0.003405746530334364, 0.003439466793010942, 0.0034731870556875197, 0.0035069073183640973, 0.0035406275810406754, 0.003574347843717253, 0.003608068106393831, 0.0036417883690704088, 0.003675508631746987, 0.003709228894423565, 0.0037429491571001425, 0.0037766694197767206, 0.0038103896824532983, 0.0038441099451298763, 0.003877830207806454, 0.003911550470483032, 0.00394527073315961, 0.003978990995836188, 0.004012711258512765, 0.004046431521189344, 0.004080151783865922, 0.004113872046542499, 0.004147592309219078, 0.0041813125718956545, 0.004215032834572232, 0.00424875309724881, 0.004282473359925388, 0.004316193622601966, 0.004349913885278544, 0.004383634147955122, 0.0044173544106317, 0.004451074673308277, 0.004484794935984855, 0.0045185151986614335, 0.004552235461338011, 0.004585955724014589, 0.004619675986691167, 0.004653396249367745, 0.004687116512044323, 0.0047208367747209, 0.004754557037397479, 0.004788277300074056, 0.004821997562750634, 0.0048557178254272125, 0.00488943808810379, 0.004923158350780368, 0.0049568786134569455, 0.004990598876133524, 0.005024319138810102, 0.005058039401486679, 0.005091759664163257, 0.0051254799268398345, 0.005159200189516412, 0.005192920452192991, 0.005226640714869568, 0.005260360977546146, 0.005294081240222724, 0.005327801502899302, 0.00536152176557588, 0.005395242028252457, 0.005428962290929036, 0.0054626825536056136, 0.005496402816282191, 0.005530123078958769, 0.005563843341635347, 0.005597563604311925, 0.005631283866988503, 0.005665004129665081, 0.005698724392341659, 0.005732444655018236, 0.005766164917694814, 0.005799885180371393, 0.00583360544304797, 0.005867325705724548, 0.005901045968401126, 0.005934766231077704, 0.005968486493754282, 0.0060022067564308584, 0.006035927019107437, 0.006069647281784015, 0.006103367544460592, 0.006137087807137171, 0.006170808069813748, 0.006204528332490326, 0.006238248595166904, 0.006271968857843482, 0.00630568912052006, 0.0063394093831966375, 0.006373129645873216, 0.006406849908549794, 0.006440570171226371, 0.00647429043390295, 0.006508010696579527, 0.006541730959256105, 0.006575451221932683, 0.006609171484609261, 0.006642891747285839, 0.0066766120099624165, 0.006710332272638995, 0.006744052535315573, 0.00677777279799215, 0.006811493060668728, 0.006845213323345306, 0.006878933586021884, 0.006912653848698461, 0.006946374111375039, 0.006980094374051617, 0.007013814636728195, 0.007047534899404772, 0.007081255162081351, 0.007114975424757928, 0.007148695687434506, 0.007182415950111085, 0.007216136212787662, 0.00724985647546424, 0.0072835767381408175, 0.007317297000817396, 0.007351017263493974, 0.007384737526170551, 0.00741845778884713, 0.0074521780515237074, 0.007485898314200285, 0.007519618576876863, 0.007553338839553441, 0.007587059102230019, 0.0076207793649065965, 0.007654499627583175, 0.007688219890259753, 0.00772194015293633, 0.007755660415612908, 0.0077893806782894865, 0.007823100940966063, 0.007856821203642641, 0.00789054146631922, 0.007924261728995798, 0.007957981991672376, 0.007991702254348953, 0.00802542251702553, 0.008059142779702108, 0.008092863042378688, 0.008126583305055264, 0.008160303567731843, 0.00819402383040842, 0.008227744093084998, 0.008261464355761576, 0.008295184618438155, 0.008328904881114731, 0.008362625143791309, 0.008396345406467887, 0.008430065669144464, 0.008463785931821044, 0.00849750619449762, 0.008531226457174199, 0.008564946719850777, 0.008598666982527354, 0.008632387245203932, 0.008666107507880511, 0.008699827770557087, 0.008733548033233667, 0.008767268295910244, 0.008800988558586822, 0.0088347088212634, 0.008868429083939979, 0.008902149346616555, 0.008935869609293134, 0.00896958987196971, 0.00900331013464629, 0.009037030397322867, 0.009070750659999445, 0.009104470922676022, 0.009138191185352602, 0.009171911448029178, 0.009205631710705757, 0.009239351973382335, 0.00927307223605891, 0.00930679249873549, 0.009340512761412068, 0.009374233024088645, 0.009407953286765223, 0.0094416735494418, 0.009475393812118378, 0.009509114074794957, 0.009542834337471533, 0.009576554600148113, 0.00961027486282469, 0.009643995125501268, 0.009677715388177846, 0.009711435650854425, 0.009745155913531001, 0.00977887617620758, 0.009812596438884158, 0.009846316701560736, 0.009880036964237313, 0.009913757226913891, 0.009947477489590469, 0.009981197752267048, 0.010014918014943624, 0.010048638277620203, 0.010082358540296781, 0.010116078802973359, 0.010149799065649936, 0.010183519328326514, 0.010217239591003091, 0.010250959853679669, 0.010284680116356248, 0.010318400379032824, 0.010352120641709404, 0.010385840904385981, 0.010419561167062559, 0.010453281429739137, 0.010487001692415714, 0.010520721955092292, 0.010554442217768871, 0.010588162480445447, 0.010621882743122027, 0.010655603005798604, 0.010689323268475182, 0.01072304353115176, 0.010756763793828339, 0.010790484056504915, 0.010824204319181494, 0.010857924581858072, 0.01089164484453465, 0.010925365107211227, 0.010959085369887805, 0.010992805632564382, 0.011026525895240962, 0.011060246157917538, 0.011093966420594115, 0.011127686683270695, 0.01116140694594727, 0.01119512720862385, 0.011228847471300428, 0.011262567733977005, 0.011296287996653583, 0.011330008259330162, 0.011363728522006738, 0.011397448784683318, 0.011431169047359893, 0.011464889310036473, 0.01149860957271305, 0.011532329835389628, 0.011566050098066206, 0.011599770360742785, 0.011633490623419361, 0.01166721088609594, 0.011700931148772518, 0.011734651411449096, 0.011768371674125673, 0.011802091936802253, 0.011835812199478829, 0.011869532462155408, 0.011903252724831986, 0.011936972987508563, 0.011970693250185141, 0.012004413512861717, 0.012038133775538296, 0.012071854038214874, 0.012105574300891452, 0.01213929456356803, 0.012173014826244609, 0.012206735088921184, 0.012240455351597764, 0.012274175614274341, 0.012307895876950919, 0.012341616139627497, 0.012375336402304076, 0.012409056664980652, 0.012442776927657231, 0.012476497190333807, 0.012510217453010387, 0.012543937715686964, 0.012577657978363542, 0.01261137824104012, 0.012645098503716699, 0.012678818766393275, 0.012712539029069854, 0.012746259291746432, 0.01277997955442301, 0.012813699817099587, 0.012847420079776167, 0.012881140342452743, 0.012914860605129322, 0.0129485808678059, 0.012982301130482475, 0.013016021393159055, 0.01304974165583563, 0.01308346191851221, 0.013117182181188788, 0.013150902443865365, 0.013184622706541943, 0.013218342969218522, 0.013252063231895098, 0.013285783494571678, 0.013319503757248255, 0.013353224019924833, 0.01338694428260141, 0.01342066454527799, 0.013454384807954566, 0.013488105070631145, 0.013521825333307721, 0.0135555455959843, 0.013589265858660878, 0.013622986121337456, 0.013656706384014033, 0.013690426646690613, 0.013724146909367189, 0.013757867172043768, 0.013791587434720346, 0.013825307697396922, 0.013859027960073501, 0.013892748222750079, 0.013926468485426656, 0.013960188748103234, 0.013993909010779812, 0.01402762927345639, 0.014061349536132969, 0.014095069798809545, 0.014128790061486124, 0.014162510324162702, 0.01419623058683928, 0.014229950849515857, 0.014263671112192436, 0.014297391374869012, 0.014331111637545592, 0.01436483190022217, 0.014398552162898747, 0.014432272425575324, 0.014465992688251904, 0.01449971295092848, 0.014533433213605059, 0.014567153476281635, 0.014600873738958214, 0.014634594001634792, 0.01466831426431137, 0.014702034526987947, 0.014735754789664527, 0.014769475052341103, 0.01480319531501768, 0.01483691557769426, 0.014870635840370836, 0.014904356103047415, 0.014938076365723993, 0.01497179662840057, 0.015005516891077148, 0.015039237153753725, 0.015072957416430303, 0.015106677679106882, 0.015140397941783458, 0.015174118204460038, 0.015207838467136615, 0.015241558729813193, 0.01527527899248977, 0.01530899925516635, 0.015342719517842926, 0.015376439780519505, 0.015410160043196083, 0.01544388030587266, 0.015477600568549238, 0.015511320831225816, 0.015545041093902394, 0.015578761356578973, 0.015612481619255549, 0.015646201881932126, 0.015679922144608706, 0.015713642407285282, 0.01574736266996186, 0.01578108293263844, 0.015814803195315016, 0.015848523457991596, 0.01588224372066817, 0.01591596398334475, 0.015949684246021327, 0.015983404508697906, 0.016017124771374482, 0.01605084503405106, 0.016084565296727638, 0.016118285559404217, 0.016152005822080796, 0.016185726084757376, 0.01621944634743395, 0.016253166610110528, 0.016286886872787107, 0.016320607135463686, 0.016354327398140262, 0.01638804766081684, 0.016421767923493417, 0.016455488186169997, 0.016489208448846573, 0.016522928711523152, 0.01655664897419973, 0.01659036923687631, 0.016624089499552883, 0.016657809762229463, 0.016691530024906042, 0.016725250287582618, 0.016758970550259197, 0.016792690812935773, 0.016826411075612353])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_ee8da253d15544f3b8ec751392b4409e.x = d3.scale.linear()
              .domain([0.0, 0.016826411075612353])
              .range([0, 400]);

    color_map_ee8da253d15544f3b8ec751392b4409e.legend = L.control({position: 'topright'});
    color_map_ee8da253d15544f3b8ec751392b4409e.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_ee8da253d15544f3b8ec751392b4409e.legend.addTo(map_bbf7a536d4d5480d98e81b11cdf8a867);

    color_map_ee8da253d15544f3b8ec751392b4409e.xAxis = d3.svg.axis()
        .scale(color_map_ee8da253d15544f3b8ec751392b4409e.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.0028044018459353923, 0.0056088036918707845, 0.008413205537806176, 0.011217607383741569, 0.014022009229676962, 0.016826411075612353]);

    color_map_ee8da253d15544f3b8ec751392b4409e.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_ee8da253d15544f3b8ec751392b4409e.g = color_map_ee8da253d15544f3b8ec751392b4409e.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_ee8da253d15544f3b8ec751392b4409e.g.selectAll("rect")
        .data(color_map_ee8da253d15544f3b8ec751392b4409e.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_ee8da253d15544f3b8ec751392b4409e.x(color_map_ee8da253d15544f3b8ec751392b4409e.color.domain()[i - 1]) : color_map_ee8da253d15544f3b8ec751392b4409e.x.range()[0],
            x1: i < color_map_ee8da253d15544f3b8ec751392b4409e.color.domain().length ? color_map_ee8da253d15544f3b8ec751392b4409e.x(color_map_ee8da253d15544f3b8ec751392b4409e.color.domain()[i]) : color_map_ee8da253d15544f3b8ec751392b4409e.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_ee8da253d15544f3b8ec751392b4409e.g.call(color_map_ee8da253d15544f3b8ec751392b4409e.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('05_50_FLAVIO ALVES SERAFINI');

