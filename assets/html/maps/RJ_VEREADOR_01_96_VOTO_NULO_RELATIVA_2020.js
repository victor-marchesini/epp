    
            var map_920d1743cca84687a199552a9fd2874d = L.map(
                "map_920d1743cca84687a199552a9fd2874d",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_740ef3699c9b4f429f1b9ffdf7216652 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_920d1743cca84687a199552a9fd2874d);
        
    
            var choropleth_18e7136da2f9408e919e486538fa9e35 = L.featureGroup(
                {}
            ).addTo(map_920d1743cca84687a199552a9fd2874d);
        
    
        function geo_json_39c156f8df4e4f5fa1455dfd518276f4_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 482: case 422: case 434: case 428: case 410: case 325: case 440: case 447: case 478: case 435: case 442: case 452: case 380: case 437: case 436: case 446: case 444: case 381: case 369: case 352: case 432: case 419: case 359: case 368: case 367: case 475: case 356: case 350: case 457: case 459: case 463: case 433: case 366: case 451: case 477: case 405: case 485: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 443: case 336: case 391: case 365: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 438: case 449: case 453: case 462: case 456: case 467: case 466: case 473: case 455: case 472: case 464: case 470: case 474: case 358: case 469: case 471: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 335: case 395: case 327: case 329: case 450: case 480: case 389: case 384: case 510: case 414: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 468: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_39c156f8df4e4f5fa1455dfd518276f4_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_39c156f8df4e4f5fa1455dfd518276f4 = L.geoJson(null, {
                onEachFeature: geo_json_39c156f8df4e4f5fa1455dfd518276f4_onEachFeature,
            
                style: geo_json_39c156f8df4e4f5fa1455dfd518276f4_styler,
        });

        function geo_json_39c156f8df4e4f5fa1455dfd518276f4_add (data) {
            geo_json_39c156f8df4e4f5fa1455dfd518276f4
                .addData(data)
                .addTo(choropleth_18e7136da2f9408e919e486538fa9e35);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_39c156f8df4e4f5fa1455dfd518276f4_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_e62a66d35baa4dbcba429de33e353c34 = {};

    
    color_map_e62a66d35baa4dbcba429de33e353c34.color = d3.scale.threshold()
              .domain([0.0, 0.0003334546889742387, 0.0006669093779484775, 0.0010003640669227162, 0.001333818755896955, 0.0016672734448711936, 0.0020007281338454324, 0.002334182822819671, 0.00266763751179391, 0.0030010922007681485, 0.0033345468897423873, 0.003668001578716626, 0.004001456267690865, 0.004334910956665103, 0.004668365645639342, 0.0050018203346135805, 0.00533527502358782, 0.005668729712562059, 0.006002184401536297, 0.006335639090510536, 0.0066690937794847745, 0.007002548468459013, 0.007336003157433252, 0.00766945784640749, 0.00800291253538173, 0.008336367224355969, 0.008669821913330206, 0.009003276602304445, 0.009336731291278684, 0.009670185980252924, 0.010003640669227161, 0.010337095358201402, 0.01067055004717564, 0.011004004736149877, 0.011337459425124118, 0.011670914114098355, 0.012004368803072594, 0.012337823492046832, 0.012671278181021072, 0.01300473286999531, 0.013338187558969549, 0.013671642247943788, 0.014005096936918026, 0.014338551625892265, 0.014672006314866504, 0.015005461003840743, 0.01533891569281498, 0.01567237038178922, 0.01600582507076346, 0.016339279759737698, 0.016672734448711937, 0.017006189137686176, 0.017339643826660412, 0.01767309851563465, 0.01800655320460889, 0.018340007893583133, 0.01867346258255737, 0.019006917271531608, 0.019340371960505847, 0.019673826649480083, 0.020007281338454322, 0.02034073602742856, 0.020674190716402804, 0.02100764540537704, 0.02134110009435128, 0.021674554783325518, 0.022008009472299753, 0.022341464161273993, 0.022674918850248235, 0.023008373539222474, 0.02334182822819671, 0.02367528291717095, 0.02400873760614519, 0.024342192295119424, 0.024675646984093663, 0.025009101673067906, 0.025342556362042145, 0.02567601105101638, 0.02600946573999062, 0.02634292042896486, 0.026676375117939098, 0.027009829806913337, 0.027343284495887576, 0.027676739184861816, 0.02801019387383605, 0.02834364856281029, 0.02867710325178453, 0.02901055794075877, 0.029344012629733008, 0.029677467318707247, 0.030010922007681486, 0.030344376696655722, 0.03067783138562996, 0.0310112860746042, 0.03134474076357844, 0.031678195452552675, 0.03201165014152692, 0.03234510483050116, 0.032678559519475396, 0.03301201420844964, 0.033345468897423874, 0.03367892358639811, 0.03401237827537235, 0.03434583296434659, 0.034679287653320824, 0.03501274234229507, 0.0353461970312693, 0.03567965172024354, 0.03601310640921778, 0.036346561098192016, 0.036680015787166266, 0.0370134704761405, 0.03734692516511474, 0.03768037985408898, 0.038013834543063216, 0.03834728923203745, 0.038680743921011694, 0.03901419860998593, 0.039347653298960165, 0.03968110798793441, 0.040014562676908644, 0.04034801736588288, 0.04068147205485712, 0.041014926743831365, 0.04134838143280561, 0.04168183612177984, 0.04201529081075408, 0.04234874549972832, 0.04268220018870256, 0.04301565487767679, 0.043349109566651035, 0.04368256425562527, 0.04401601894459951, 0.04434947363357375, 0.044682928322547985, 0.04501638301152223, 0.04534983770049647, 0.045683292389470706, 0.04601674707844495, 0.046350201767419184, 0.04668365645639342, 0.04701711114536766, 0.0473505658343419, 0.047684020523316134, 0.04801747521229038, 0.04835092990126461, 0.04868438459023885, 0.04901783927921309, 0.049351293968187326, 0.049684748657161576, 0.05001820334613581, 0.05035165803511005, 0.05068511272408429, 0.051018567413058526, 0.05135202210203276, 0.051685476791007004, 0.05201893147998124, 0.052352386168955475, 0.05268584085792972, 0.053019295546903954, 0.053352750235878196, 0.05368620492485243, 0.054019659613826675, 0.05435311430280092, 0.05468656899177515, 0.05502002368074939, 0.05535347836972363, 0.05568693305869787, 0.0560203877476721, 0.056353842436646345, 0.05668729712562058, 0.05702075181459482, 0.05735420650356906, 0.057687661192543295, 0.05802111588151754, 0.05835457057049178, 0.058688025259466016, 0.05902147994844026, 0.059354934637414494, 0.05968838932638873, 0.06002184401536297, 0.06035529870433721, 0.060688753393311444, 0.06102220808228569, 0.06135566277125992, 0.06168911746023416, 0.0620225721492084, 0.062356026838182636, 0.06268948152715688, 0.06302293621613111, 0.06335639090510535, 0.0636898455940796, 0.06402330028305384, 0.06435675497202807, 0.06469020966100232, 0.06502366434997656, 0.06535711903895079, 0.06569057372792503, 0.06602402841689928, 0.06635748310587351, 0.06669093779484775, 0.06702439248382198, 0.06735784717279622, 0.06769130186177046, 0.0680247565507447, 0.06835821123971894, 0.06869166592869318, 0.06902512061766741, 0.06935857530664165, 0.0696920299956159, 0.07002548468459013, 0.07035893937356437, 0.0706923940625386, 0.07102584875151284, 0.07135930344048708, 0.07169275812946133, 0.07202621281843556, 0.0723596675074098, 0.07269312219638403, 0.07302657688535827, 0.07336003157433253, 0.07369348626330677, 0.074026940952281, 0.07436039564125524, 0.07469385033022947, 0.07502730501920371, 0.07536075970817796, 0.0756942143971522, 0.07602766908612643, 0.07636112377510067, 0.0766945784640749, 0.07702803315304915, 0.07736148784202339, 0.07769494253099762, 0.07802839721997186, 0.0783618519089461, 0.07869530659792033, 0.07902876128689458, 0.07936221597586882, 0.07969567066484305, 0.08002912535381729, 0.08036258004279152, 0.08069603473176576, 0.08102948942074001, 0.08136294410971424, 0.08169639879868848, 0.08202985348766273, 0.08236330817663697, 0.08269676286561121, 0.08303021755458545, 0.08336367224355969, 0.08369712693253392, 0.08403058162150816, 0.0843640363104824, 0.08469749099945664, 0.08503094568843088, 0.08536440037740511, 0.08569785506637935, 0.08603130975535359, 0.08636476444432784, 0.08669821913330207, 0.0870316738222763, 0.08736512851125054, 0.08769858320022478, 0.08803203788919901, 0.08836549257817326, 0.0886989472671475, 0.08903240195612173, 0.08936585664509597, 0.0896993113340702, 0.09003276602304446, 0.0903662207120187, 0.09069967540099294, 0.09103313008996718, 0.09136658477894141, 0.09170003946791565, 0.0920334941568899, 0.09236694884586413, 0.09270040353483837, 0.0930338582238126, 0.09336731291278684, 0.09370076760176108, 0.09403422229073533, 0.09436767697970956, 0.0947011316686838, 0.09503458635765803, 0.09536804104663227, 0.09570149573560652, 0.09603495042458075, 0.09636840511355499, 0.09670185980252922, 0.09703531449150346, 0.0973687691804777, 0.09770222386945195, 0.09803567855842618, 0.09836913324740042, 0.09870258793637465, 0.09903604262534889, 0.09936949731432315, 0.09970295200329739, 0.10003640669227162, 0.10036986138124586, 0.1007033160702201, 0.10103677075919433, 0.10137022544816858, 0.10170368013714282, 0.10203713482611705, 0.10237058951509129, 0.10270404420406552, 0.10303749889303977, 0.10337095358201401, 0.10370440827098824, 0.10403786295996248, 0.10437131764893672, 0.10470477233791095, 0.1050382270268852, 0.10537168171585944, 0.10570513640483367, 0.10603859109380791, 0.10637204578278214, 0.10670550047175639, 0.10703895516073063, 0.10737240984970486, 0.10770586453867911, 0.10803931922765335, 0.10837277391662758, 0.10870622860560183, 0.10903968329457607, 0.1093731379835503, 0.10970659267252454, 0.11004004736149878, 0.11037350205047301, 0.11070695673944726, 0.1110404114284215, 0.11137386611739573, 0.11170732080636997, 0.1120407754953442, 0.11237423018431845, 0.11270768487329269, 0.11304113956226693, 0.11337459425124116, 0.1137080489402154, 0.11404150362918963, 0.11437495831816388, 0.11470841300713812, 0.11504186769611235, 0.11537532238508659, 0.11570877707406083, 0.11604223176303508, 0.11637568645200932, 0.11670914114098356, 0.1170425958299578, 0.11737605051893203, 0.11770950520790627, 0.11804295989688052, 0.11837641458585475, 0.11870986927482899, 0.11904332396380322, 0.11937677865277746, 0.11971023334175171, 0.12004368803072595, 0.12037714271970018, 0.12071059740867442, 0.12104405209764865, 0.12137750678662289, 0.12171096147559714, 0.12204441616457137, 0.12237787085354561, 0.12271132554251984, 0.12304478023149408, 0.12337823492046832, 0.12371168960944257, 0.1240451442984168, 0.12437859898739104, 0.12471205367636527, 0.1250455083653395, 0.12537896305431376, 0.125712417743288, 0.12604587243226223, 0.12637932712123648, 0.1267127818102107, 0.12704623649918495, 0.1273796911881592, 0.12771314587713342, 0.12804660056610767, 0.12838005525508192, 0.12871350994405614, 0.1290469646330304, 0.12938041932200464, 0.12971387401097886, 0.1300473286999531, 0.13038078338892733, 0.13071423807790158, 0.1310476927668758, 0.13138114745585006, 0.13171460214482428, 0.13204805683379855, 0.13238151152277278, 0.13271496621174703, 0.13304842090072125, 0.1333818755896955, 0.13371533027866972, 0.13404878496764397, 0.1343822396566182, 0.13471569434559244, 0.13504914903456666, 0.1353826037235409, 0.13571605841251516, 0.1360495131014894, 0.13638296779046363, 0.13671642247943788, 0.1370498771684121, 0.13738333185738635, 0.13771678654636058, 0.13805024123533483, 0.13838369592430907, 0.1387171506132833, 0.13905060530225755, 0.1393840599912318, 0.13971751468020605, 0.14005096936918027, 0.14038442405815452, 0.14071787874712874, 0.141051333436103, 0.1413847881250772, 0.14171824281405146, 0.14205169750302568, 0.14238515219199993, 0.14271860688097415, 0.14305206156994843, 0.14338551625892265, 0.1437189709478969, 0.14405242563687112, 0.14438588032584537, 0.1447193350148196, 0.14505278970379384, 0.14538624439276807, 0.14571969908174232, 0.14605315377071654, 0.1463866084596908, 0.14672006314866506, 0.14705351783763929, 0.14738697252661354, 0.14772042721558776, 0.148053881904562, 0.14838733659353623, 0.14872079128251048, 0.1490542459714847, 0.14938770066045895, 0.14972115534943317, 0.15005461003840742, 0.15038806472738167, 0.15072151941635592, 0.15105497410533014, 0.1513884287943044, 0.1517218834832786, 0.15205533817225286, 0.15238879286122708, 0.15272224755020133, 0.15305570223917556, 0.1533891569281498, 0.15372261161712403, 0.1540560663060983, 0.15438952099507253, 0.15472297568404678, 0.15505643037302103, 0.15538988506199525, 0.1557233397509695, 0.15605679443994372, 0.15639024912891797, 0.1567237038178922, 0.15705715850686644, 0.15739061319584066, 0.1577240678848149, 0.15805752257378916, 0.1583909772627634, 0.15872443195173763, 0.15905788664071188, 0.1593913413296861, 0.15972479601866035, 0.16005825070763458, 0.16039170539660882, 0.16072516008558305, 0.1610586147745573, 0.16139206946353152, 0.1617255241525058, 0.16205897884148002, 0.16239243353045427, 0.1627258882194285, 0.16305934290840274, 0.16339279759737696, 0.1637262522863512, 0.16405970697532546, 0.16439316166429968, 0.16472661635327393, 0.16506007104224815, 0.16539352573122243, 0.16572698042019665, 0.1660604351091709, 0.16639388979814512])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_e62a66d35baa4dbcba429de33e353c34.x = d3.scale.linear()
              .domain([0.0, 0.16639388979814512])
              .range([0, 400]);

    color_map_e62a66d35baa4dbcba429de33e353c34.legend = L.control({position: 'topright'});
    color_map_e62a66d35baa4dbcba429de33e353c34.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_e62a66d35baa4dbcba429de33e353c34.legend.addTo(map_920d1743cca84687a199552a9fd2874d);

    color_map_e62a66d35baa4dbcba429de33e353c34.xAxis = d3.svg.axis()
        .scale(color_map_e62a66d35baa4dbcba429de33e353c34.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.02773231496635752, 0.05546462993271504, 0.08319694489907256, 0.11092925986543008, 0.1386615748317876, 0.16639388979814512]);

    color_map_e62a66d35baa4dbcba429de33e353c34.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_e62a66d35baa4dbcba429de33e353c34.g = color_map_e62a66d35baa4dbcba429de33e353c34.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_e62a66d35baa4dbcba429de33e353c34.g.selectAll("rect")
        .data(color_map_e62a66d35baa4dbcba429de33e353c34.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_e62a66d35baa4dbcba429de33e353c34.x(color_map_e62a66d35baa4dbcba429de33e353c34.color.domain()[i - 1]) : color_map_e62a66d35baa4dbcba429de33e353c34.x.range()[0],
            x1: i < color_map_e62a66d35baa4dbcba429de33e353c34.color.domain().length ? color_map_e62a66d35baa4dbcba429de33e353c34.x(color_map_e62a66d35baa4dbcba429de33e353c34.color.domain()[i]) : color_map_e62a66d35baa4dbcba429de33e353c34.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_e62a66d35baa4dbcba429de33e353c34.g.call(color_map_e62a66d35baa4dbcba429de33e353c34.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');
