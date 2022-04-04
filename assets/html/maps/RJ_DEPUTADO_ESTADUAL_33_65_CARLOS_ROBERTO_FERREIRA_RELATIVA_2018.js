    
            var map_07b85a9713e142f8a94a3c5b9cd333a9 = L.map(
                "map_07b85a9713e142f8a94a3c5b9cd333a9",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_07ba8aef7e694aa0b0c29d14a2b2b081 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_07b85a9713e142f8a94a3c5b9cd333a9);
        
    
            var choropleth_7e2d4e8a61cf41f3ab64bc155370a777 = L.featureGroup(
                {}
            ).addTo(map_07b85a9713e142f8a94a3c5b9cd333a9);
        
    
        function geo_json_0335c3bc12524f3ba85659cb4b763333_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 420: case 482: case 443: case 434: case 428: case 325: case 417: case 453: case 403: case 464: case 452: case 353: case 345: case 393: case 383: case 416: case 423: case 431: case 404: case 354: case 349: case 342: case 336: case 358: case 328: case 460: case 475: case 357: case 459: case 463: case 481: case 399: case 479: case 469: case 461: case 366: case 391: case 465: case 402: case 480: case 341: case 384: case 414: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 377: case 418: case 410: case 440: case 462: case 456: case 466: case 473: case 472: case 478: case 435: case 436: case 369: case 363: case 392: case 395: case 371: case 373: case 364: case 359: case 385: case 401: case 368: case 379: case 326: case 339: case 330: case 360: case 430: case 483: case 388: case 510: case 405: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 438: case 447: case 348: case 329: case 331: case 347: case 458: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 467: case 426: case 382: case 346: case 394: case 337: case 445: case 485: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 367: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_0335c3bc12524f3ba85659cb4b763333_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_0335c3bc12524f3ba85659cb4b763333 = L.geoJson(null, {
                onEachFeature: geo_json_0335c3bc12524f3ba85659cb4b763333_onEachFeature,
            
                style: geo_json_0335c3bc12524f3ba85659cb4b763333_styler,
        });

        function geo_json_0335c3bc12524f3ba85659cb4b763333_add (data) {
            geo_json_0335c3bc12524f3ba85659cb4b763333
                .addData(data)
                .addTo(choropleth_7e2d4e8a61cf41f3ab64bc155370a777);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_0335c3bc12524f3ba85659cb4b763333_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_723083cf2e824a03be4a58954d0521b9 = {};

    
    color_map_723083cf2e824a03be4a58954d0521b9.color = d3.scale.threshold()
              .domain([3.140604880499984e-05, 3.328497906403194e-05, 3.516390932306403e-05, 3.704283958209613e-05, 3.8921769841128225e-05, 4.0800700100160315e-05, 4.267963035919241e-05, 4.455856061822451e-05, 4.6437490877256604e-05, 4.83164211362887e-05, 5.0195351395320796e-05, 5.207428165435289e-05, 5.395321191338498e-05, 5.5832142172417085e-05, 5.7711072431449175e-05, 5.959000269048127e-05, 6.146893294951337e-05, 6.334786320854547e-05, 6.522679346757756e-05, 6.710572372660965e-05, 6.898465398564175e-05, 7.086358424467386e-05, 7.274251450370593e-05, 7.462144476273803e-05, 7.650037502177014e-05, 7.837930528080223e-05, 8.025823553983432e-05, 8.213716579886642e-05, 8.401609605789851e-05, 8.589502631693061e-05, 8.77739565759627e-05, 8.96528868349948e-05, 9.15318170940269e-05, 9.341074735305898e-05, 9.528967761209109e-05, 9.716860787112318e-05, 9.904753813015528e-05, 0.00010092646838918737, 0.00010280539864821947, 0.00010468432890725156, 0.00010656325916628366, 0.00010844218942531575, 0.00011032111968434786, 0.00011220004994337995, 0.00011407898020241204, 0.00011595791046144414, 0.00011783684072047624, 0.00011971577097950832, 0.00012159470123854042, 0.00012347363149757252, 0.00012535256175660463, 0.0001272314920156367, 0.0001291104222746688, 0.00013098935253370088, 0.00013286828279273299, 0.0001347472130517651, 0.0001366261433107972, 0.0001385050735698293, 0.0001403840038288614, 0.00014226293408789347, 0.00014414186434692555, 0.00014602079460595765, 0.00014789972486498976, 0.00014977865512402186, 0.00015165758538305396, 0.00015353651564208607, 0.00015541544590111811, 0.00015729437616015027, 0.00015917330641918232, 0.00016105223667821442, 0.00016293116693724653, 0.00016481009719627863, 0.00016668902745531073, 0.00016856795771434284, 0.00017044688797337488, 0.000172325818232407, 0.0001742047484914391, 0.0001760836787504712, 0.0001779626090095033, 0.0001798415392685354, 0.0001817204695275675, 0.00018359939978659955, 0.00018547833004563165, 0.00018735726030466376, 0.00018923619056369586, 0.00019111512082272796, 0.00019299405108176007, 0.00019487298134079212, 0.00019675191159982422, 0.00019863084185885632, 0.00020050977211788843, 0.00020238870237692053, 0.00020426763263595263, 0.00020614656289498468, 0.00020802549315401678, 0.0002099044234130489, 0.000211783353672081, 0.0002136622839311131, 0.0002155412141901452, 0.0002174201444491773, 0.0002192990747082094, 0.00022117800496724145, 0.00022305693522627355, 0.00022493586548530566, 0.00022681479574433776, 0.00022869372600336986, 0.00023057265626240197, 0.00023245158652143407, 0.00023433051678046617, 0.00023620944703949822, 0.00023808837729853032, 0.00023996730755756243, 0.00024184623781659453, 0.00024372516807562663, 0.00024560409833465874, 0.00024748302859369084, 0.00024936195885272294, 0.000251240889111755, 0.0002531198193707871, 0.0002549987496298192, 0.0002568776798888513, 0.0002587566101478834, 0.0002606355404069155, 0.0002625144706659476, 0.0002643934009249797, 0.00026627233118401176, 0.00026815126144304386, 0.00027003019170207597, 0.00027190912196110807, 0.0002737880522201402, 0.0002756669824791723, 0.0002775459127382044, 0.00027942484299723643, 0.00028130377325626853, 0.0002831827035153007, 0.00028506163377433274, 0.00028694056403336484, 0.0002888194942923969, 0.000290698424551429, 0.0002925773548104611, 0.0002944562850694932, 0.0002963352153285253, 0.0002982141455875574, 0.0003000930758465895, 0.0003019720061056216, 0.0003038509363646537, 0.0003057298666236858, 0.0003076087968827179, 0.00030948772714174997, 0.00031136665740078207, 0.0003132455876598142, 0.0003151245179188463, 0.0003170034481778784, 0.00031888237843691043, 0.00032076130869594253, 0.00032264023895497464, 0.00032451916921400674, 0.00032639809947303884, 0.00032827702973207095, 0.00033015595999110305, 0.00033203489025013515, 0.0003339138205091672, 0.0003357927507681993, 0.0003376716810272314, 0.0003395506112862635, 0.0003414295415452956, 0.0003433084718043277, 0.0003451874020633598, 0.0003470663323223919, 0.000348945262581424, 0.0003508241928404561, 0.0003527031230994882, 0.0003545820533585203, 0.00035646098361755233, 0.00035833991387658443, 0.00036021884413561654, 0.00036209777439464864, 0.00036397670465368074, 0.00036585563491271284, 0.00036773456517174495, 0.00036961349543077705, 0.00037149242568980915, 0.00037337135594884126, 0.00037525028620787336, 0.00037712921646690546, 0.00037900814672593757, 0.00038088707698496956, 0.00038276600724400166, 0.00038464493750303377, 0.00038652386776206587, 0.000388402798021098, 0.0003902817282801301, 0.0003921606585391622, 0.0003940395887981943, 0.0003959185190572264, 0.0003977974493162585, 0.0003996763795752906, 0.0004015553098343227, 0.0004034342400933548, 0.00040531317035238685, 0.00040719210061141895, 0.000409071030870451, 0.0004109499611294831, 0.0004128288913885152, 0.0004147078216475473, 0.0004165867519065794, 0.0004184656821656115, 0.0004203446124246436, 0.0004222235426836757, 0.0004241024729427078, 0.0004259814032017399, 0.00042786033346077203, 0.0004297392637198041, 0.0004316181939788362, 0.0004334971242378683, 0.0004353760544969004, 0.0004372549847559325, 0.0004391339150149646, 0.00044101284527399664, 0.00044289177553302875, 0.00044477070579206085, 0.00044664963605109295, 0.00044852856631012505, 0.00045040749656915716, 0.0004522864268281892, 0.0004541653570872213, 0.0004560442873462534, 0.0004579232176052855, 0.0004598021478643176, 0.0004616810781233497, 0.0004635600083823818, 0.00046543893864141393, 0.00046731786890044603, 0.00046919679915947813, 0.0004710757294185102, 0.0004729546596775423, 0.0004748335899365744, 0.00047671252019560644, 0.00047859145045463854, 0.00048047038071367064, 0.00048234931097270275, 0.00048422824123173485, 0.00048610717149076695, 0.00048798610174979906, 0.0004898650320088312, 0.0004917439622678633, 0.0004936228925268954, 0.0004955018227859275, 0.0004973807530449596, 0.0004992596833039917, 0.0005011386135630237, 0.0005030175438220558, 0.0005048964740810879, 0.00050677540434012, 0.0005086543345991521, 0.0005105332648581842, 0.0005124121951172163, 0.0005142911253762484, 0.0005161700556352805, 0.0005180489858943126, 0.0005199279161533447, 0.0005218068464123768, 0.0005236857766714089, 0.0005255647069304409, 0.000527443637189473, 0.0005293225674485051, 0.0005312014977075372, 0.0005330804279665693, 0.0005349593582256015, 0.0005368382884846335, 0.0005387172187436656, 0.0005405961490026977, 0.0005424750792617298, 0.0005443540095207619, 0.0005462329397797939, 0.0005481118700388261, 0.0005499908002978581, 0.0005518697305568903, 0.0005537486608159223, 0.0005556275910749546, 0.0005575065213339865, 0.0005593854515930188, 0.0005612643818520508, 0.0005631433121110829, 0.000565022242370115, 0.0005669011726291471, 0.0005687801028881792, 0.0005706590331472113, 0.0005725379634062434, 0.0005744168936652755, 0.0005762958239243076, 0.0005781747541833396, 0.0005800536844423718, 0.0005819326147014038, 0.000583811544960436, 0.000585690475219468, 0.0005875694054785001, 0.0005894483357375322, 0.0005913272659965643, 0.0005932061962555964, 0.0005950851265146285, 0.0005969640567736606, 0.0005988429870326927, 0.0006007219172917248, 0.0006026008475507569, 0.000604479777809789, 0.000606358708068821, 0.0006082376383278532, 0.0006101165685868852, 0.0006119954988459173, 0.0006138744291049494, 0.0006157533593639815, 0.0006176322896230136, 0.0006195112198820457, 0.0006213901501410778, 0.0006232690804001099, 0.000625148010659142, 0.0006270269409181741, 0.0006289058711772062, 0.0006307848014362383, 0.0006326637316952705, 0.0006345426619543026, 0.0006364215922133345, 0.0006383005224723667, 0.0006401794527313988, 0.0006420583829904309, 0.000643937313249463, 0.0006458162435084951, 0.0006476951737675272, 0.0006495741040265593, 0.0006514530342855914, 0.0006533319645446235, 0.0006552108948036556, 0.0006570898250626876, 0.0006589687553217198, 0.0006608476855807518, 0.000662726615839784, 0.000664605546098816, 0.0006664844763578482, 0.0006683634066168802, 0.0006702423368759123, 0.0006721212671349444, 0.0006740001973939765, 0.0006758791276530086, 0.0006777580579120407, 0.0006796369881710728, 0.0006815159184301048, 0.000683394848689137, 0.000685273778948169, 0.0006871527092072012, 0.0006890316394662332, 0.0006909105697252654, 0.0006927894999842974, 0.0006946684302433296, 0.0006965473605023616, 0.0006984262907613937, 0.0007003052210204258, 0.0007021841512794579, 0.00070406308153849, 0.000705942011797522, 0.0007078209420565542, 0.0007096998723155862, 0.0007115788025746185, 0.0007134577328336504, 0.0007153366630926827, 0.0007172155933517147, 0.0007190945236107469, 0.0007209734538697789, 0.0007228523841288111, 0.0007247313143878431, 0.0007266102446468753, 0.0007284891749059073, 0.0007303681051649393, 0.0007322470354239715, 0.0007341259656830035, 0.0007360048959420357, 0.0007378838262010677, 0.0007397627564600999, 0.0007416416867191319, 0.0007435206169781641, 0.0007453995472371961, 0.0007472784774962283, 0.0007491574077552603, 0.0007510363380142925, 0.0007529152682733245, 0.0007547941985323566, 0.0007566731287913887, 0.0007585520590504207, 0.0007604309893094529, 0.0007623099195684849, 0.0007641888498275171, 0.0007660677800865491, 0.0007679467103455813, 0.0007698256406046133, 0.0007717045708636455, 0.0007735835011226775, 0.0007754624313817097, 0.0007773413616407417, 0.0007792202918997738, 0.0007810992221588059, 0.000782978152417838, 0.0007848570826768701, 0.0007867360129359021, 0.0007886149431949344, 0.0007904938734539663, 0.0007923728037129986, 0.0007942517339720306, 0.0007961306642310628, 0.0007980095944900948, 0.000799888524749127, 0.000801767455008159, 0.0008036463852671911, 0.0008055253155262232, 0.0008074042457852553, 0.0008092831760442874, 0.0008111621063033195, 0.0008130410365623516, 0.0008149199668213837, 0.0008167988970804158, 0.0008186778273394478, 0.00082055675759848, 0.000822435687857512, 0.0008243146181165442, 0.0008261935483755762, 0.0008280724786346083, 0.0008299514088936404, 0.0008318303391526725, 0.0008337092694117046, 0.0008355881996707367, 0.0008374671299297688, 0.0008393460601888009, 0.000841224990447833, 0.0008431039207068651, 0.0008449828509658972, 0.0008468617812249293, 0.0008487407114839614, 0.0008506196417429934, 0.0008524985720020255, 0.0008543775022610576, 0.0008562564325200897, 0.0008581353627791218, 0.000860014293038154, 0.000861893223297186, 0.0008637721535562182, 0.0008656510838152503, 0.0008675300140742824, 0.0008694089443333145, 0.0008712878745923466, 0.0008731668048513786, 0.0008750457351104108, 0.0008769246653694428, 0.0008788035956284749, 0.000880682525887507, 0.0008825614561465391, 0.0008844403864055712, 0.0008863193166646033, 0.0008881982469236354, 0.0008900771771826675, 0.0008919561074416996, 0.0008938350377007317, 0.0008957139679597638, 0.0008975928982187958, 0.000899471828477828, 0.00090135075873686, 0.0009032296889958922, 0.0009051086192549242, 0.0009069875495139564, 0.0009088664797729884, 0.0009107454100320205, 0.0009126243402910526, 0.0009145032705500847, 0.0009163822008091168, 0.0009182611310681489, 0.000920140061327181, 0.000922018991586213, 0.0009238979218452452, 0.0009257768521042772, 0.0009276557823633094, 0.0009295347126223414, 0.0009314136428813736, 0.0009332925731404056, 0.0009351715033994379, 0.0009370504336584698, 0.000938929363917502, 0.000940808294176534, 0.0009426872244355662, 0.0009445661546945983, 0.0009464450849536303, 0.0009483240152126625, 0.0009502029454716945, 0.0009520818757307267, 0.0009539608059897587, 0.0009558397362487909, 0.0009577186665078229, 0.0009595975967668551, 0.0009614765270258871, 0.0009633554572849193, 0.0009652343875439513, 0.0009671133178029835, 0.0009689922480620155])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_723083cf2e824a03be4a58954d0521b9.x = d3.scale.linear()
              .domain([3.140604880499984e-05, 0.0009689922480620155])
              .range([0, 400]);

    color_map_723083cf2e824a03be4a58954d0521b9.legend = L.control({position: 'topright'});
    color_map_723083cf2e824a03be4a58954d0521b9.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_723083cf2e824a03be4a58954d0521b9.legend.addTo(map_07b85a9713e142f8a94a3c5b9cd333a9);

    color_map_723083cf2e824a03be4a58954d0521b9.xAxis = d3.svg.axis()
        .scale(color_map_723083cf2e824a03be4a58954d0521b9.x)
        .orient("top")
        .tickSize(1)
        .tickValues([3.140604880499984e-05, 0.0001876704153478358, 0.00034393478189067173, 0.0005001991484335077, 0.0006564635149763436, 0.0008127278815191796, 0.0009689922480620155]);

    color_map_723083cf2e824a03be4a58954d0521b9.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_723083cf2e824a03be4a58954d0521b9.g = color_map_723083cf2e824a03be4a58954d0521b9.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_723083cf2e824a03be4a58954d0521b9.g.selectAll("rect")
        .data(color_map_723083cf2e824a03be4a58954d0521b9.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_723083cf2e824a03be4a58954d0521b9.x(color_map_723083cf2e824a03be4a58954d0521b9.color.domain()[i - 1]) : color_map_723083cf2e824a03be4a58954d0521b9.x.range()[0],
            x1: i < color_map_723083cf2e824a03be4a58954d0521b9.color.domain().length ? color_map_723083cf2e824a03be4a58954d0521b9.x(color_map_723083cf2e824a03be4a58954d0521b9.color.domain()[i]) : color_map_723083cf2e824a03be4a58954d0521b9.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_723083cf2e824a03be4a58954d0521b9.g.call(color_map_723083cf2e824a03be4a58954d0521b9.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('33_65_CARLOS ROBERTO FERREIRA');

