    
            var map_780859c7c9874b4daa659546f263ff83 = L.map(
                "map_780859c7c9874b4daa659546f263ff83",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_64e7236e7e704e819c6e187613a1d737 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_780859c7c9874b4daa659546f263ff83);
        
    
            var choropleth_ad65f149d9e341c6adea55fcc7e5c646 = L.featureGroup(
                {}
            ).addTo(map_780859c7c9874b4daa659546f263ff83);
        
    
        function geo_json_d5b57df5d7cb46e9a05d6932d9f3e4d1_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 482: case 443: case 428: case 412: case 410: case 325: case 440: case 448: case 438: case 447: case 456: case 473: case 468: case 464: case 437: case 353: case 444: case 345: case 363: case 343: case 426: case 404: case 395: case 371: case 359: case 386: case 348: case 379: case 372: case 354: case 334: case 358: case 433: case 399: case 366: case 391: case 402: case 388: case 341: case 485: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 417: case 453: case 467: case 466: case 403: case 470: case 446: case 392: case 419: case 408: case 411: case 364: case 346: case 331: case 330: case 445: case 477: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 462: case 455: case 472: case 442: case 436: case 415: case 339: case 471: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 478: case 427: case 398: case 394: case 367: case 357: case 457: case 454: case 387: case 458: case 389: case 414: case 406: case 374: case 476: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 463: case 465: case 451: case 450: case 480: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_d5b57df5d7cb46e9a05d6932d9f3e4d1_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_d5b57df5d7cb46e9a05d6932d9f3e4d1 = L.geoJson(null, {
                onEachFeature: geo_json_d5b57df5d7cb46e9a05d6932d9f3e4d1_onEachFeature,
            
                style: geo_json_d5b57df5d7cb46e9a05d6932d9f3e4d1_styler,
        });

        function geo_json_d5b57df5d7cb46e9a05d6932d9f3e4d1_add (data) {
            geo_json_d5b57df5d7cb46e9a05d6932d9f3e4d1
                .addData(data)
                .addTo(choropleth_ad65f149d9e341c6adea55fcc7e5c646);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_d5b57df5d7cb46e9a05d6932d9f3e4d1_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_7b1b3cbe41e047c293f5e8839d4c5c59 = {};

    
    color_map_7b1b3cbe41e047c293f5e8839d4c5c59.color = d3.scale.threshold()
              .domain([0.0, 0.00022601594165775157, 0.00045203188331550314, 0.0006780478249732547, 0.0009040637666310063, 0.0011300797082887577, 0.0013560956499465095, 0.0015821115916042612, 0.0018081275332620125, 0.002034143474919764, 0.0022601594165775154, 0.0024861753582352676, 0.002712191299893019, 0.0029382072415507702, 0.0031642231832085224, 0.0033902391248662738, 0.003616255066524025, 0.003842271008181777, 0.004068286949839528, 0.00429430289149728, 0.004520318833155031, 0.004746334774812783, 0.004972350716470535, 0.005198366658128286, 0.005424382599786038, 0.00565039854144379, 0.0058764144831015405, 0.006102430424759293, 0.006328446366417045, 0.006554462308074795, 0.0067804782497325475, 0.007006494191390299, 0.00723251013304805, 0.007458526074705802, 0.007684542016363554, 0.007910557958021305, 0.008136573899679056, 0.008362589841336808, 0.00858860578299456, 0.008814621724652312, 0.009040637666310062, 0.009266653607967815, 0.009492669549625566, 0.009718685491283317, 0.00994470143294107, 0.010170717374598822, 0.010396733316256571, 0.010622749257914324, 0.010848765199572076, 0.011074781141229827, 0.01130079708288758, 0.01152681302454533, 0.011752828966203081, 0.011978844907860834, 0.012204860849518585, 0.012430876791176337, 0.01265689273283409, 0.01288290867449184, 0.01310892461614959, 0.013334940557807344, 0.013560956499465095, 0.013786972441122846, 0.014012988382780598, 0.014239004324438349, 0.0144650202660961, 0.014691036207753853, 0.014917052149411605, 0.015143068091069354, 0.015369084032727107, 0.015595099974384859, 0.01582111591604261, 0.01604713185770036, 0.016273147799358113, 0.016499163741015864, 0.016725179682673615, 0.01695119562433137, 0.01717721156598912, 0.017403227507646873, 0.017629243449304624, 0.017855259390962375, 0.018081275332620123, 0.018307291274277878, 0.01853330721593563, 0.01875932315759338, 0.018985339099251132, 0.019211355040908883, 0.019437370982566635, 0.01966338692422439, 0.01988940286588214, 0.020115418807539892, 0.020341434749197643, 0.02056745069085539, 0.020793466632513143, 0.021019482574170897, 0.02124549851582865, 0.0214715144574864, 0.02169753039914415, 0.021923546340801903, 0.022149562282459654, 0.02237557822411741, 0.02260159416577516, 0.02282761010743291, 0.02305362604909066, 0.02327964199074841, 0.023505657932406162, 0.023731673874063917, 0.023957689815721668, 0.02418370575737942, 0.02440972169903717, 0.024635737640694922, 0.024861753582352673, 0.025087769524010428, 0.02531378546566818, 0.025539801407325927, 0.02576581734898368, 0.02599183329064143, 0.02621784923229918, 0.026443865173956936, 0.026669881115614687, 0.02689589705727244, 0.02712191299893019, 0.02734792894058794, 0.027573944882245693, 0.027799960823903444, 0.028025976765561195, 0.028251992707218947, 0.028478008648876698, 0.02870402459053445, 0.0289300405321922, 0.029156056473849955, 0.029382072415507707, 0.029608088357165458, 0.02983410429882321, 0.03006012024048096, 0.03028613618213871, 0.030512152123796463, 0.030738168065454215, 0.030964184007111966, 0.031190199948769717, 0.03141621589042747, 0.03164223183208522, 0.031868247773742975, 0.03209426371540072, 0.03232027965705847, 0.032546295598716225, 0.03277231154037398, 0.03299832748203173, 0.03322434342368948, 0.03345035936534723, 0.033676375307004985, 0.03390239124866274, 0.03412840719032049, 0.03435442313197824, 0.03458043907363599, 0.034806455015293745, 0.0350324709569515, 0.03525848689860925, 0.035484502840267, 0.03571051878192475, 0.035936534723582506, 0.036162550665240246, 0.036388566606898, 0.036614582548555756, 0.036840598490213504, 0.03706661443187126, 0.03729263037352901, 0.03751864631518676, 0.037744662256844516, 0.037970678198502264, 0.03819669414016002, 0.03842271008181777, 0.03864872602347552, 0.03887474196513327, 0.039100757906791024, 0.03932677384844878, 0.03955278979010653, 0.03977880573176428, 0.04000482167342203, 0.040230837615079784, 0.04045685355673754, 0.04068286949839529, 0.04090888544005304, 0.04113490138171078, 0.04136091732336854, 0.041586933265026285, 0.04181294920668404, 0.042038965148341795, 0.04226498108999954, 0.0424909970316573, 0.042717012973315045, 0.0429430289149728, 0.043169044856630555, 0.0433950607982883, 0.04362107673994606, 0.043847092681603805, 0.04407310862326156, 0.04429912456491931, 0.04452514050657706, 0.04475115644823482, 0.044977172389892565, 0.04520318833155032, 0.04542920427320807, 0.04565522021486582, 0.04588123615652357, 0.04610725209818132, 0.04633326803983907, 0.04655928398149682, 0.046785299923154576, 0.047011315864812324, 0.04723733180647008, 0.047463347748127833, 0.04768936368978558, 0.047915379631443336, 0.048141395573101084, 0.04836741151475884, 0.048593427456416594, 0.04881944339807434, 0.049045459339732096, 0.049271475281389844, 0.0494974912230476, 0.04972350716470535, 0.0499495231063631, 0.050175539048020856, 0.050401554989678604, 0.05062757093133636, 0.0508535868729941, 0.051079602814651855, 0.05130561875630961, 0.05153163469796736, 0.05175765063962511, 0.05198366658128286, 0.052209682522940615, 0.05243569846459836, 0.05266171440625612, 0.05288773034791387, 0.05311374628957162, 0.053339762231229375, 0.05356577817288712, 0.05379179411454488, 0.05401781005620263, 0.05424382599786038, 0.054469841939518135, 0.05469585788117588, 0.05492187382283364, 0.055147889764491385, 0.05537390570614914, 0.05559992164780689, 0.055825937589464636, 0.05605195353112239, 0.05627796947278014, 0.05650398541443789, 0.05673000135609565, 0.056956017297753396, 0.05718203323941115, 0.0574080491810689, 0.05763406512272665, 0.0578600810643844, 0.058086097006042156, 0.05831211294769991, 0.05853812888935766, 0.058764144831015414, 0.05899016077267316, 0.059216176714330916, 0.05944219265598867, 0.05966820859764642, 0.059894224539304174, 0.06012024048096192, 0.06034625642261967, 0.06057227236427742, 0.06079828830593517, 0.06102430424759293, 0.061250320189250675, 0.06147633613090843, 0.06170235207256618, 0.06192836801422393, 0.06215438395588169, 0.062380399897539435, 0.06260641583919718, 0.06283243178085494, 0.06305844772251269, 0.06328446366417044, 0.0635104796058282, 0.06373649554748595, 0.0639625114891437, 0.06418852743080145, 0.0644145433724592, 0.06464055931411694, 0.0648665752557747, 0.06509259119743245, 0.0653186071390902, 0.06554462308074796, 0.06577063902240571, 0.06599665496406346, 0.06622267090572122, 0.06644868684737897, 0.06667470278903671, 0.06690071873069446, 0.06712673467235222, 0.06735275061400997, 0.06757876655566772, 0.06780478249732548, 0.06803079843898323, 0.06825681438064098, 0.06848283032229872, 0.06870884626395649, 0.06893486220561423, 0.06916087814727198, 0.06938689408892974, 0.06961291003058749, 0.06983892597224524, 0.070064941913903, 0.07029095785556075, 0.0705169737972185, 0.07074298973887624, 0.070969005680534, 0.07119502162219175, 0.0714210375638495, 0.07164705350550726, 0.07187306944716501, 0.07209908538882276, 0.07232510133048049, 0.07255111727213825, 0.072777133213796, 0.07300314915545375, 0.07322916509711151, 0.07345518103876926, 0.07368119698042701, 0.07390721292208476, 0.07413322886374252, 0.07435924480540027, 0.07458526074705801, 0.07481127668871577, 0.07503729263037352, 0.07526330857203127, 0.07548932451368903, 0.07571534045534678, 0.07594135639700453, 0.07616737233866228, 0.07639338828032004, 0.07661940422197779, 0.07684542016363553, 0.0770714361052933, 0.07729745204695104, 0.07752346798860879, 0.07774948393026654, 0.0779754998719243, 0.07820151581358205, 0.0784275317552398, 0.07865354769689756, 0.0788795636385553, 0.07910557958021305, 0.0793315955218708, 0.07955761146352856, 0.07978362740518631, 0.08000964334684406, 0.08023565928850182, 0.08046167523015957, 0.08068769117181732, 0.08091370711347508, 0.08113972305513283, 0.08136573899679057, 0.08159175493844832, 0.08181777088010608, 0.08204378682176382, 0.08226980276342157, 0.08249581870507933, 0.08272183464673707, 0.08294785058839482, 0.08317386653005257, 0.08339988247171033, 0.08362589841336808, 0.08385191435502583, 0.08407793029668359, 0.08430394623834134, 0.08452996217999909, 0.08475597812165683, 0.0849819940633146, 0.08520801000497234, 0.08543402594663009, 0.08566004188828785, 0.0858860578299456, 0.08611207377160335, 0.08633808971326111, 0.08656410565491886, 0.0867901215965766, 0.08701613753823435, 0.08724215347989211, 0.08746816942154986, 0.08769418536320761, 0.08792020130486537, 0.08814621724652312, 0.08837223318818087, 0.08859824912983862, 0.08882426507149638, 0.08905028101315413, 0.08927629695481187, 0.08950231289646964, 0.08972832883812738, 0.08995434477978513, 0.09018036072144289, 0.09040637666310064, 0.09063239260475839, 0.09085840854641614, 0.0910844244880739, 0.09131044042973165, 0.0915364563713894, 0.09176247231304714, 0.09198848825470489, 0.09221450419636264, 0.09244052013802039, 0.09266653607967815, 0.0928925520213359, 0.09311856796299364, 0.0933445839046514, 0.09357059984630915, 0.0937966157879669, 0.09402263172962465, 0.09424864767128241, 0.09447466361294016, 0.0947006795545979, 0.09492669549625567, 0.09515271143791341, 0.09537872737957116, 0.09560474332122892, 0.09583075926288667, 0.09605677520454442, 0.09628279114620217, 0.09650880708785993, 0.09673482302951768, 0.09696083897117543, 0.09718685491283319, 0.09741287085449093, 0.09763888679614868, 0.09786490273780643, 0.09809091867946419, 0.09831693462112194, 0.09854295056277969, 0.09876896650443745, 0.0989949824460952, 0.09922099838775295, 0.0994470143294107, 0.09967303027106846, 0.0998990462127262, 0.10012506215438395, 0.10035107809604171, 0.10057709403769946, 0.10080310997935721, 0.10102912592101497, 0.10125514186267272, 0.10148115780433045, 0.1017071737459882, 0.10193318968764596, 0.10215920562930371, 0.10238522157096146, 0.10261123751261922, 0.10283725345427697, 0.10306326939593471, 0.10328928533759246, 0.10351530127925022, 0.10374131722090797, 0.10396733316256572, 0.10419334910422348, 0.10441936504588123, 0.10464538098753898, 0.10487139692919673, 0.10509741287085449, 0.10532342881251223, 0.10554944475416998, 0.10577546069582774, 0.10600147663748549, 0.10622749257914324, 0.106453508520801, 0.10667952446245875, 0.1069055404041165, 0.10713155634577425, 0.10735757228743201, 0.10758358822908975, 0.1078096041707475, 0.10803562011240526, 0.10826163605406301, 0.10848765199572076, 0.10871366793737851, 0.10893968387903627, 0.10916569982069402, 0.10939171576235177, 0.10961773170400953, 0.10984374764566728, 0.11006976358732502, 0.11029577952898277, 0.11052179547064053, 0.11074781141229828, 0.11097382735395601, 0.11119984329561378, 0.11142585923727152, 0.11165187517892927, 0.11187789112058703, 0.11210390706224478, 0.11232992300390253, 0.11255593894556028, 0.11278195488721804])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_7b1b3cbe41e047c293f5e8839d4c5c59.x = d3.scale.linear()
              .domain([0.0, 0.11278195488721804])
              .range([0, 400]);

    color_map_7b1b3cbe41e047c293f5e8839d4c5c59.legend = L.control({position: 'topright'});
    color_map_7b1b3cbe41e047c293f5e8839d4c5c59.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_7b1b3cbe41e047c293f5e8839d4c5c59.legend.addTo(map_780859c7c9874b4daa659546f263ff83);

    color_map_7b1b3cbe41e047c293f5e8839d4c5c59.xAxis = d3.svg.axis()
        .scale(color_map_7b1b3cbe41e047c293f5e8839d4c5c59.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.018796992481203006, 0.03759398496240601, 0.05639097744360902, 0.07518796992481203, 0.09398496240601503, 0.11278195488721804]);

    color_map_7b1b3cbe41e047c293f5e8839d4c5c59.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_7b1b3cbe41e047c293f5e8839d4c5c59.g = color_map_7b1b3cbe41e047c293f5e8839d4c5c59.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_7b1b3cbe41e047c293f5e8839d4c5c59.g.selectAll("rect")
        .data(color_map_7b1b3cbe41e047c293f5e8839d4c5c59.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_7b1b3cbe41e047c293f5e8839d4c5c59.x(color_map_7b1b3cbe41e047c293f5e8839d4c5c59.color.domain()[i - 1]) : color_map_7b1b3cbe41e047c293f5e8839d4c5c59.x.range()[0],
            x1: i < color_map_7b1b3cbe41e047c293f5e8839d4c5c59.color.domain().length ? color_map_7b1b3cbe41e047c293f5e8839d4c5c59.x(color_map_7b1b3cbe41e047c293f5e8839d4c5c59.color.domain()[i]) : color_map_7b1b3cbe41e047c293f5e8839d4c5c59.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_7b1b3cbe41e047c293f5e8839d4c5c59.g.call(color_map_7b1b3cbe41e047c293f5e8839d4c5c59.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('03_95_VOTO BRANCO');

