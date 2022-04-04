    
            var map_56ce31f4b33c43f59b494672923b4e88 = L.map(
                "map_56ce31f4b33c43f59b494672923b4e88",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_1da362912a1640d3aabfff4d57cf2e7b = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_56ce31f4b33c43f59b494672923b4e88);
        
    
            var choropleth_ec65059025c84f35a12e2f011e685fc2 = L.featureGroup(
                {}
            ).addTo(map_56ce31f4b33c43f59b494672923b4e88);
        
    
        function geo_json_2d46f02793794677b56a2c6519227a8a_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 422: case 439: case 441: case 403: case 470: case 380: case 393: case 369: case 363: case 392: case 343: case 351: case 333: case 382: case 411: case 397: case 395: case 373: case 364: case 385: case 346: case 401: case 362: case 379: case 334: case 327: case 326: case 330: case 328: case 459: case 454: case 409: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 421: case 443: case 434: case 428: case 452: case 423: case 431: case 404: case 394: case 348: case 349: case 342: case 336: case 358: case 367: case 460: case 475: case 357: case 481: case 479: case 391: case 465: case 512: case 406: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 412: case 325: case 467: case 426: case 400: case 396: case 427: case 432: case 415: case 371: case 359: case 339: case 433: case 445: case 430: case 399: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 418: case 462: case 466: case 473: case 472: case 468: case 442: case 446: case 444: case 408: case 471: case 485: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 438: case 449: case 447: case 437: case 419: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 424: case 417: case 456: case 455: case 464: case 436: case 331: case 366: case 477: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_2d46f02793794677b56a2c6519227a8a_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_2d46f02793794677b56a2c6519227a8a = L.geoJson(null, {
                onEachFeature: geo_json_2d46f02793794677b56a2c6519227a8a_onEachFeature,
            
                style: geo_json_2d46f02793794677b56a2c6519227a8a_styler,
        });

        function geo_json_2d46f02793794677b56a2c6519227a8a_add (data) {
            geo_json_2d46f02793794677b56a2c6519227a8a
                .addData(data)
                .addTo(choropleth_ec65059025c84f35a12e2f011e685fc2);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_2d46f02793794677b56a2c6519227a8a_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_a613d19c8052450f825a9f2075751441 = {};

    
    color_map_a613d19c8052450f825a9f2075751441.color = d3.scale.threshold()
              .domain([3.0976055509091474e-05, 3.495562174319073e-05, 3.893518797728999e-05, 4.291475421138924e-05, 4.6894320445488506e-05, 5.087388667958776e-05, 5.4853452913687015e-05, 5.883301914778627e-05, 6.281258538188552e-05, 6.679215161598479e-05, 7.077171785008405e-05, 7.47512840841833e-05, 7.873085031828256e-05, 8.271041655238181e-05, 8.668998278648109e-05, 9.066954902058034e-05, 9.464911525467959e-05, 9.862868148877884e-05, 0.0001026082477228781, 0.00010658781395697735, 0.00011056738019107662, 0.00011454694642517587, 0.00011852651265927514, 0.0001225060788933744, 0.00012648564512747365, 0.0001304652113615729, 0.00013444477759567215, 0.00013842434382977143, 0.00014240391006387068, 0.00014638347629796996, 0.0001503630425320692, 0.00015434260876616846, 0.00015832217500026771, 0.00016230174123436697, 0.00016628130746846622, 0.00017026087370256547, 0.00017424043993666472, 0.00017822000617076397, 0.00018219957240486322, 0.00018617913863896253, 0.00019015870487306178, 0.00019413827110716103, 0.00019811783734126028, 0.00020209740357535953, 0.00020607696980945878, 0.00021005653604355803, 0.00021403610227765729, 0.00021801566851175654, 0.0002219952347458558, 0.0002259748009799551, 0.00022995436721405434, 0.0002339339334481536, 0.00023791349968225285, 0.00024189306591635215, 0.0002458726321504514, 0.00024985219838455065, 0.0002538317646186499, 0.00025781133085274916, 0.0002617908970868484, 0.00026577046332094766, 0.0002697500295550469, 0.00027372959578914616, 0.0002777091620232454, 0.00028168872825734466, 0.0002856682944914439, 0.0002896478607255432, 0.0002936274269596424, 0.0002976069931937417, 0.0003015865594278409, 0.0003055661256619402, 0.0003095456918960395, 0.00031352525813013873, 0.000317504824364238, 0.00032148439059833723, 0.0003254639568324365, 0.0003294435230665358, 0.000333423089300635, 0.0003374026555347343, 0.00034138222176883354, 0.0003453617880029328, 0.00034934135423703204, 0.0003533209204711313, 0.00035730048670523055, 0.00036128005293932985, 0.00036525961917342905, 0.00036923918540752835, 0.00037321875164162755, 0.00037719831787572686, 0.0003811778841098261, 0.00038515745034392536, 0.0003891370165780246, 0.00039311658281212386, 0.0003970961490462231, 0.0004010757152803224, 0.0004050552815144216, 0.0004090348477485209, 0.0004130144139826201, 0.0004169939802167194, 0.00042097354645081867, 0.0004249531126849179, 0.0004289326789190172, 0.0004329122451531165, 0.0004368918113872157, 0.000440871377621315, 0.0004448509438554142, 0.0004488305100895135, 0.0004528100763236128, 0.000456789642557712, 0.0004607692087918113, 0.0004647487750259105, 0.0004687283412600098, 0.00047270790749410905, 0.0004766874737282083, 0.00048066703996230755, 0.0004846466061964068, 0.0004886261724305061, 0.0004926057386646054, 0.0004965853048987046, 0.0005005648711328039, 0.0005045444373669031, 0.0005085240036010024, 0.0005125035698351016, 0.0005164831360692009, 0.0005204627023033002, 0.0005244422685373994, 0.0005284218347714987, 0.0005324014010055979, 0.0005363809672396972, 0.0005403605334737964, 0.0005443400997078957, 0.000548319665941995, 0.0005522992321760942, 0.0005562787984101934, 0.0005602583646442928, 0.000564237930878392, 0.0005682174971124912, 0.0005721970633465904, 0.0005761766295806898, 0.000580156195814789, 0.0005841357620488882, 0.0005881153282829875, 0.0005920948945170869, 0.000596074460751186, 0.0006000540269852854, 0.0006040335932193846, 0.0006080131594534839, 0.0006119927256875831, 0.0006159722919216824, 0.0006199518581557816, 0.0006239314243898809, 0.0006279109906239802, 0.0006318905568580794, 0.0006358701230921786, 0.000639849689326278, 0.0006438292555603772, 0.0006478088217944764, 0.0006517883880285757, 0.000655767954262675, 0.0006597475204967742, 0.0006637270867308734, 0.0006677066529649727, 0.000671686219199072, 0.0006756657854331712, 0.0006796453516672705, 0.0006836249179013697, 0.000687604484135469, 0.0006915840503695683, 0.0006955636166036675, 0.0006995431828377667, 0.000703522749071866, 0.0007075023153059653, 0.0007114818815400645, 0.0007154614477741637, 0.0007194410140082631, 0.0007234205802423623, 0.0007274001464764615, 0.0007313797127105608, 0.0007353592789446601, 0.0007393388451787593, 0.0007433184114128586, 0.0007472979776469578, 0.0007512775438810571, 0.0007552571101151563, 0.0007592366763492556, 0.0007632162425833548, 0.0007671958088174541, 0.0007711753750515534, 0.0007751549412856526, 0.0007791345075197518, 0.0007831140737538512, 0.0007870936399879504, 0.0007910732062220496, 0.0007950527724561488, 0.0007990323386902482, 0.0008030119049243474, 0.0008069914711584466, 0.0008109710373925459, 0.0008149506036266452, 0.0008189301698607444, 0.0008229097360948437, 0.0008268893023289429, 0.0008308688685630422, 0.0008348484347971416, 0.0008388280010312408, 0.00084280756726534, 0.0008467871334994393, 0.0008507666997335386, 0.0008547462659676378, 0.000858725832201737, 0.0008627053984358364, 0.0008666849646699356, 0.0008706645309040348, 0.0008746440971381342, 0.0008786236633722334, 0.0008826032296063326, 0.0008865827958404319, 0.0008905623620745312, 0.0008945419283086304, 0.0008985214945427296, 0.0009025010607768289, 0.0009064806270109282, 0.0009104601932450274, 0.0009144397594791267, 0.0009184193257132259, 0.0009223988919473252, 0.0009263784581814245, 0.0009303580244155237, 0.0009343375906496229, 0.0009383171568837222, 0.0009422967231178215, 0.0009462762893519207, 0.0009502558555860199, 0.0009542354218201193, 0.0009582149880542185, 0.0009621945542883177, 0.000966174120522417, 0.0009701536867565163, 0.0009741332529906155, 0.0009781128192247147, 0.000982092385458814, 0.0009860719516929133, 0.0009900515179270125, 0.0009940310841611117, 0.000998010650395211, 0.0010019902166293103, 0.0010059697828634095, 0.001009949349097509, 0.0010139289153316081, 0.0010179084815657073, 0.0010218880477998065, 0.001025867614033906, 0.0010298471802680051, 0.0010338267465021043, 0.0010378063127362035, 0.001041785878970303, 0.0010457654452044021, 0.0010497450114385013, 0.0010537245776726008, 0.0010577041439067, 0.0010616837101407991, 0.0010656632763748986, 0.0010696428426089975, 0.001073622408843097, 0.0010776019750771964, 0.0010815815413112953, 0.0010855611075453948, 0.0010895406737794942, 0.0010935202400135932, 0.0010974998062476926, 0.0011014793724817915, 0.001105458938715891, 0.0011094385049499904, 0.0011134180711840894, 0.0011173976374181888, 0.0011213772036522882, 0.0011253567698863872, 0.0011293363361204866, 0.0011333159023545858, 0.001137295468588685, 0.0011412750348227844, 0.0011452546010568836, 0.0011492341672909828, 0.0011532137335250822, 0.0011571932997591814, 0.0011611728659932806, 0.0011651524322273798, 0.0011691319984614792, 0.0011731115646955784, 0.0011770911309296776, 0.001181070697163777, 0.0011850502633978762, 0.0011890298296319754, 0.0011930093958660746, 0.0011969889621001738, 0.0012009685283342732, 0.0012049480945683724, 0.0012089276608024716, 0.001212907227036571, 0.0012168867932706702, 0.0012208663595047694, 0.0012248459257388688, 0.0012288254919729678, 0.0012328050582070672, 0.0012367846244411666, 0.0012407641906752656, 0.001244743756909365, 0.0012487233231434644, 0.0012527028893775634, 0.0012566824556116628, 0.0012606620218457622, 0.0012646415880798612, 0.0012686211543139606, 0.0012726007205480598, 0.001276580286782159, 0.0012805598530162584, 0.0012845394192503574, 0.0012885189854844568, 0.0012924985517185563, 0.0012964781179526552, 0.0013004576841867546, 0.0013044372504208538, 0.001308416816654953, 0.0013123963828890525, 0.0013163759491231517, 0.0013203555153572509, 0.0013243350815913503, 0.0013283146478254495, 0.0013322942140595487, 0.0013362737802936479, 0.0013402533465277473, 0.0013442329127618465, 0.0013482124789959457, 0.001352192045230045, 0.0013561716114641443, 0.0013601511776982435, 0.0013641307439323429, 0.0013681103101664419, 0.0013720898764005413, 0.0013760694426346405, 0.0013800490088687397, 0.001384028575102839, 0.0013880081413369383, 0.0013919877075710375, 0.001395967273805137, 0.0013999468400392359, 0.0014039264062733353, 0.0014079059725074347, 0.0014118855387415337, 0.001415865104975633, 0.0014198446712097325, 0.0014238242374438315, 0.001427803803677931, 0.00143178336991203, 0.0014357629361461293, 0.0014397425023802287, 0.001443722068614328, 0.001447701634848427, 0.0014516812010825265, 0.0014556607673166257, 0.001459640333550725, 0.0014636198997848241, 0.0014675994660189233, 0.0014715790322530227, 0.001475558598487122, 0.0014795381647212211, 0.0014835177309553205, 0.0014874972971894197, 0.001491476863423519, 0.0014954564296576181, 0.0014994359958917175, 0.0015034155621258167, 0.001507395128359916, 0.0015113746945940153, 0.0015153542608281145, 0.0015193338270622137, 0.0015233133932963131, 0.0015272929595304121, 0.0015312725257645115, 0.001535252091998611, 0.00153923165823271, 0.0015432112244668094, 0.0015471907907009088, 0.0015511703569350077, 0.0015551499231691072, 0.0015591294894032061, 0.0015631090556373056, 0.001567088621871405, 0.001571068188105504, 0.0015750477543396034, 0.0015790273205737028, 0.0015830068868078018, 0.0015869864530419012, 0.0015909660192760004, 0.0015949455855100996, 0.001598925151744199, 0.0016029047179782982, 0.0016068842842123974, 0.0016108638504464968, 0.001614843416680596, 0.0016188229829146952, 0.0016228025491487944, 0.0016267821153828938, 0.001630761681616993, 0.0016347412478510922, 0.0016387208140851916, 0.0016427003803192908, 0.00164667994655339, 0.0016506595127874894, 0.0016546390790215884, 0.0016586186452556878, 0.001662598211489787, 0.0016665777777238862, 0.0016705573439579856, 0.0016745369101920848, 0.001678516476426184, 0.0016824960426602834, 0.0016864756088943824, 0.0016904551751284818, 0.0016944347413625812, 0.0016984143075966802, 0.0017023938738307796, 0.001706373440064879, 0.001710353006298978, 0.0017143325725330774, 0.0017183121387671768, 0.0017222917050012758, 0.0017262712712353752, 0.0017302508374694744, 0.0017342304037035736, 0.001738209969937673, 0.0017421895361717722, 0.0017461691024058714, 0.0017501486686399708, 0.0017541282348740698, 0.0017581078011081692, 0.0017620873673422684, 0.0017660669335763676, 0.001770046499810467, 0.0017740260660445662, 0.0017780056322786654, 0.0017819851985127649, 0.001785964764746864, 0.0017899443309809632, 0.0017939238972150624, 0.0017979034634491619, 0.001801883029683261, 0.0018058625959173603, 0.0018098421621514597, 0.0018138217283855589, 0.001817801294619658, 0.0018217808608537575, 0.0018257604270878565, 0.0018297399933219559, 0.0018337195595560553, 0.0018376991257901543, 0.0018416786920242537, 0.0018456582582583529, 0.001849637824492452, 0.0018536173907265515, 0.0018575969569606505, 0.0018615765231947499, 0.0018655560894288493, 0.0018695356556629483, 0.0018735152218970477, 0.001877494788131147, 0.001881474354365246, 0.0018854539205993455, 0.0018894334868334447, 0.0018934130530675439, 0.0018973926193016433, 0.0019013721855357425, 0.0019053517517698417, 0.0019093313180039411, 0.0019133108842380403, 0.0019172904504721395, 0.0019212700167062387, 0.0019252495829403381, 0.0019292291491744373, 0.0019332087154085365, 0.0019371882816426357, 0.0019411678478767351, 0.0019451474141108343, 0.0019491269803449335, 0.0019531065465790327, 0.001957086112813132, 0.0019610656790472313, 0.0019650452452813303, 0.0019690248115154297, 0.001973004377749529, 0.001976983943983628, 0.0019809635102177275, 0.001984943076451827, 0.0019889226426859264, 0.0019929022089200253, 0.0019968817751541247, 0.0020008613413882237, 0.002004840907622323, 0.0020088204738564226, 0.0020128000400905215, 0.002016779606324621])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_a613d19c8052450f825a9f2075751441.x = d3.scale.linear()
              .domain([3.0976055509091474e-05, 0.002016779606324621])
              .range([0, 400]);

    color_map_a613d19c8052450f825a9f2075751441.legend = L.control({position: 'topright'});
    color_map_a613d19c8052450f825a9f2075751441.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_a613d19c8052450f825a9f2075751441.legend.addTo(map_56ce31f4b33c43f59b494672923b4e88);

    color_map_a613d19c8052450f825a9f2075751441.xAxis = d3.svg.axis()
        .scale(color_map_a613d19c8052450f825a9f2075751441.x)
        .orient("top")
        .tickSize(1)
        .tickValues([3.0976055509091474e-05, 0.00036194331397834635, 0.0006929105724476013, 0.0010238778309168562, 0.001354845089386111, 0.001685812347855366, 0.002016779606324621]);

    color_map_a613d19c8052450f825a9f2075751441.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_a613d19c8052450f825a9f2075751441.g = color_map_a613d19c8052450f825a9f2075751441.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_a613d19c8052450f825a9f2075751441.g.selectAll("rect")
        .data(color_map_a613d19c8052450f825a9f2075751441.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_a613d19c8052450f825a9f2075751441.x(color_map_a613d19c8052450f825a9f2075751441.color.domain()[i - 1]) : color_map_a613d19c8052450f825a9f2075751441.x.range()[0],
            x1: i < color_map_a613d19c8052450f825a9f2075751441.color.domain().length ? color_map_a613d19c8052450f825a9f2075751441.x(color_map_a613d19c8052450f825a9f2075751441.color.domain()[i]) : color_map_a613d19c8052450f825a9f2075751441.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_a613d19c8052450f825a9f2075751441.g.call(color_map_a613d19c8052450f825a9f2075751441.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('16_40_NILTON WILSON SALOMAO');
