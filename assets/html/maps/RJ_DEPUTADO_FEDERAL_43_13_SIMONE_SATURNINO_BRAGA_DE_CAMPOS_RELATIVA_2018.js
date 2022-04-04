    
            var map_5dda3754a653494bb429779f386fa9eb = L.map(
                "map_5dda3754a653494bb429779f386fa9eb",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_74c6e9df013740a7be53094eed7dd019 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_5dda3754a653494bb429779f386fa9eb);
        
    
            var choropleth_cf387c64f5d24e18b12a9099bcc3d388 = L.featureGroup(
                {}
            ).addTo(map_5dda3754a653494bb429779f386fa9eb);
        
    
        function geo_json_d3354afa69f84b3b827b2308e9f78f6a_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 421: case 441: case 428: case 325: case 467: case 468: case 452: case 345: case 393: case 426: case 423: case 431: case 373: case 361: case 348: case 349: case 342: case 336: case 358: case 367: case 460: case 475: case 357: case 350: case 481: case 479: case 366: case 465: case 451: case 480: case 405: case 512: case 485: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 443: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 434: case 446: case 444: case 427: case 419: case 401: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 435: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_d3354afa69f84b3b827b2308e9f78f6a_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_d3354afa69f84b3b827b2308e9f78f6a = L.geoJson(null, {
                onEachFeature: geo_json_d3354afa69f84b3b827b2308e9f78f6a_onEachFeature,
            
                style: geo_json_d3354afa69f84b3b827b2308e9f78f6a_styler,
        });

        function geo_json_d3354afa69f84b3b827b2308e9f78f6a_add (data) {
            geo_json_d3354afa69f84b3b827b2308e9f78f6a
                .addData(data)
                .addTo(choropleth_cf387c64f5d24e18b12a9099bcc3d388);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_d3354afa69f84b3b827b2308e9f78f6a_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_5414602d6f5a4c30b03750afda02bc56 = {};

    
    color_map_5414602d6f5a4c30b03750afda02bc56.color = d3.scale.threshold()
              .domain([3.140604880499984e-05, 3.97456601649105e-05, 4.8085271524821166e-05, 5.642488288473182e-05, 6.476449424464248e-05, 7.310410560455315e-05, 8.144371696446382e-05, 8.978332832437447e-05, 9.812293968428513e-05, 0.0001064625510441958, 0.00011480216240410646, 0.0001231417737640171, 0.00013148138512392778, 0.00013982099648383845, 0.00014816060784374912, 0.00015650021920365974, 0.0001648398305635704, 0.00017317944192348108, 0.00018151905328339175, 0.00018985866464330241, 0.00019819827600321308, 0.00020653788736312375, 0.00021487749872303437, 0.00022321711008294504, 0.0002315567214428557, 0.00023989633280276638, 0.00024823594416267705, 0.0002565755555225877, 0.0002649151668824984, 0.00027325477824240906, 0.00028159438960231967, 0.0002899340009622304, 0.000298273612322141, 0.0003066132236820517, 0.00031495283504196235, 0.000323292446401873, 0.0003316320577617837, 0.00033997166912169436, 0.000348311280481605, 0.0003566508918415157, 0.0003649905032014263, 0.00037333011456133693, 0.00038166972592124765, 0.00039000933728115827, 0.00039834894864106894, 0.0004066885600009796, 0.0004150281713608903, 0.00042336778272080095, 0.0004317073940807116, 0.00044004700544062223, 0.00044838661680053296, 0.00045672622816044357, 0.0004650658395203543, 0.0004734054508802649, 0.0004817450622401756, 0.0004900846736000862, 0.0004984242849599969, 0.0005067638963199075, 0.0005151035076798183, 0.0005234431190397289, 0.0005317827303996395, 0.0005401223417595501, 0.0005484619531194609, 0.0005568015644793716, 0.0005651411758392822, 0.0005734807871991928, 0.0005818203985591035, 0.0005901600099190142, 0.0005984996212789248, 0.0006068392326388355, 0.0006151788439987462, 0.0006235184553586568, 0.0006318580667185675, 0.0006401976780784781, 0.0006485372894383889, 0.0006568769007982995, 0.0006652165121582101, 0.0006735561235181207, 0.0006818957348780315, 0.0006902353462379422, 0.0006985749575978528, 0.0007069145689577634, 0.000715254180317674, 0.0007235937916775848, 0.0007319334030374955, 0.0007402730143974061, 0.0007486126257573167, 0.0007569522371172274, 0.000765291848477138, 0.0007736314598370487, 0.0007819710711969594, 0.0007903106825568701, 0.0007986502939167807, 0.0008069899052766913, 0.000815329516636602, 0.0008236691279965128, 0.0008320087393564234, 0.000840348350716334, 0.0008486879620762446, 0.0008570275734361554, 0.0008653671847960661, 0.0008737067961559767, 0.0008820464075158873, 0.0008903860188757979, 0.0008987256302357087, 0.0009070652415956194, 0.00091540485295553, 0.0009237444643154406, 0.0009320840756753513, 0.0009404236870352619, 0.0009487632983951726, 0.0009571029097550833, 0.000965442521114994, 0.0009737821324749046, 0.0009821217438348152, 0.0009904613551947258, 0.0009988009665546367, 0.0010071405779145473, 0.001015480189274458, 0.0010238198006343685, 0.0010321594119942791, 0.00104049902335419, 0.0010488386347141004, 0.0010571782460740112, 0.001065517857433922, 0.0010738574687938324, 0.0010821970801537433, 0.0010905366915136539, 0.0010988763028735645, 0.0011072159142334753, 0.0011155555255933857, 0.0011238951369532965, 0.0011322347483132072, 0.0011405743596731178, 0.0011489139710330286, 0.0011572535823929392, 0.0011655931937528498, 0.0011739328051127605, 0.001182272416472671, 0.001190612027832582, 0.0011989516391924925, 0.0012072912505524031, 0.0012156308619123138, 0.0012239704732722244, 0.0012323100846321352, 0.0012406496959920458, 0.0012489893073519564, 0.001257328918711867, 0.0012656685300717779, 0.0012740081414316883, 0.0012823477527915991, 0.0012906873641515097, 0.0012990269755114203, 0.0013073665868713312, 0.0013157061982312416, 0.0013240458095911524, 0.0013323854209510632, 0.0013407250323109736, 0.0013490646436708845, 0.0013574042550307949, 0.0013657438663907057, 0.0013740834777506165, 0.001382423089110527, 0.0013907627004704378, 0.0013991023118303482, 0.001407441923190259, 0.0014157815345501698, 0.0014241211459100802, 0.001432460757269991, 0.0014408003686299017, 0.0014491399799898123, 0.0014574795913497231, 0.0014658192027096335, 0.0014741588140695443, 0.001482498425429455, 0.0014908380367893656, 0.0014991776481492762, 0.001507517259509187, 0.0015158568708690976, 0.0015241964822290083, 0.0015325360935889189, 0.0015408757049488295, 0.0015492153163087403, 0.001557554927668651, 0.0015658945390285616, 0.0015742341503884722, 0.0015825737617483828, 0.0015909133731082936, 0.0015992529844682042, 0.0016075925958281148, 0.0016159322071880257, 0.001624271818547936, 0.001632611429907847, 0.0016409510412677575, 0.0016492906526276681, 0.001657630263987579, 0.0016659698753474894, 0.0016743094867074002, 0.001682649098067311, 0.0016909887094272214, 0.0016993283207871323, 0.0017076679321470427, 0.0017160075435069535, 0.0017243471548668643, 0.0017326867662267747, 0.0017410263775866856, 0.001749365988946596, 0.0017577056003065068, 0.0017660452116664176, 0.001774384823026328, 0.0017827244343862389, 0.0017910640457461495, 0.00179940365710606, 0.0018077432684659707, 0.0018160828798258813, 0.0018244224911857921, 0.0018327621025457028, 0.0018411017139056134, 0.001849441325265524, 0.0018577809366254346, 0.0018661205479853454, 0.001874460159345256, 0.0018827997707051667, 0.0018911393820650773, 0.0018994789934249881, 0.0019078186047848987, 0.0019161582161448094, 0.00192449782750472, 0.0019328374388646306, 0.0019411770502245414, 0.001949516661584452, 0.0019578562729443624, 0.0019661958843042735, 0.0019745354956641837, 0.0019828751070240947, 0.0019912147183840053, 0.001999554329743916, 0.0020078939411038266, 0.002016233552463737, 0.002024573163823648, 0.0020329127751835584, 0.0020412523865434695, 0.00204959199790338, 0.0020579316092632907, 0.002066271220623201, 0.002074610831983112, 0.0020829504433430225, 0.002091290054702933, 0.002099629666062844, 0.002107969277422755, 0.002116308888782665, 0.002124648500142576, 0.0021329881115024867, 0.0021413277228623973, 0.002149667334222308, 0.0021580069455822185, 0.002166346556942129, 0.0021746861683020397, 0.0021830257796619508, 0.0021913653910218614, 0.0021997050023817716, 0.002208044613741682, 0.0022163842251015932, 0.002224723836461504, 0.0022330634478214145, 0.002241403059181325, 0.0022497426705412357, 0.0022580822819011463, 0.0022664218932610574, 0.002274761504620968, 0.0022831011159808786, 0.0022914407273407888, 0.0022997803387007, 0.0023081199500606104, 0.002316459561420521, 0.002324799172780432, 0.0023331387841403423, 0.002341478395500253, 0.002349818006860164, 0.0023581576182200746, 0.002366497229579985, 0.0023748368409398954, 0.0023831764522998064, 0.002391516063659717, 0.0023998556750196277, 0.0024081952863795387, 0.002416534897739449, 0.0024248745090993595, 0.0024332141204592705, 0.002441553731819181, 0.0024498933431790918, 0.0024582329545390024, 0.002466572565898913, 0.0024749121772588236, 0.0024832517886187342, 0.0024915913999786453, 0.002499931011338556, 0.002508270622698466, 0.0025166102340583767, 0.0025249498454182877, 0.0025332894567781984, 0.002541629068138109, 0.0025499686794980196, 0.00255830829085793, 0.002566647902217841, 0.002574987513577752, 0.0025833271249376625, 0.0025916667362975727, 0.0026000063476574833, 0.0026083459590173943, 0.002616685570377305, 0.0026250251817372156, 0.0026333647930971266, 0.002641704404457037, 0.0026500440158169474, 0.0026583836271768585, 0.002666723238536769, 0.0026750628498966797, 0.00268340246125659, 0.002691742072616501, 0.0027000816839764115, 0.002708421295336322, 0.002716760906696233, 0.0027251005180561434, 0.002733440129416054, 0.0027417797407759646, 0.0027501193521358757, 0.0027584589634957863, 0.0027667985748556965, 0.0027751381862156075, 0.002783477797575518, 0.0027918174089354287, 0.00280015702029534, 0.0028084966316552504, 0.0028168362430151606, 0.002825175854375071, 0.0028335154657349823, 0.002841855077094893, 0.0028501946884548035, 0.002858534299814714, 0.0028668739111746247, 0.0028752135225345353, 0.0028835531338944464, 0.002891892745254357, 0.002900232356614267, 0.002908571967974178, 0.002916911579334089, 0.0029252511906939995, 0.00293359080205391, 0.0029419304134138207, 0.0029502700247737313, 0.002958609636133642, 0.0029669492474935525, 0.0029752888588534636, 0.002983628470213374, 0.0029919680815732844, 0.0030003076929331954, 0.003008647304293106, 0.0030169869156530167, 0.0030253265270129277, 0.003033666138372838, 0.0030420057497327485, 0.003050345361092659, 0.00305868497245257, 0.003067024583812481, 0.003075364195172391, 0.003083703806532302, 0.0030920434178922126, 0.0031003830292521233, 0.0031087226406120343, 0.0031170622519719445, 0.003125401863331855, 0.0031337414746917657, 0.0031420810860516768, 0.0031504206974115874, 0.0031587603087714976, 0.0031670999201314086, 0.0031754395314913192, 0.00318377914285123, 0.003192118754211141, 0.0032004583655710515, 0.0032087979769309617, 0.0032171375882908723, 0.0032254771996507834, 0.003233816811010694, 0.0032421564223706046, 0.003250496033730515, 0.003258835645090426, 0.0032671752564503364, 0.003275514867810247, 0.003283854479170158, 0.0032921940905300683, 0.003300533701889979, 0.00330887331324989, 0.0033172129246098006, 0.003325552535969711, 0.0033338921473296222, 0.0033422317586895324, 0.003350571370049443, 0.0033589109814093536, 0.0033672505927692647, 0.0033755902041291753, 0.0033839298154890855, 0.0033922694268489965, 0.003400609038208907, 0.0034089486495688178, 0.003417288260928729, 0.003425627872288639, 0.0034339674836485496, 0.0034423070950084602, 0.0034506467063683713, 0.003458986317728282, 0.003467325929088192, 0.003475665540448103, 0.0034840051518080137, 0.0034923447631679243, 0.0035006843745278354, 0.0035090239858877456, 0.003517363597247656, 0.003525703208607567, 0.003534042819967478, 0.0035423824313273885, 0.003550722042687299, 0.0035590616540472097, 0.0035674012654071203, 0.003575740876767031, 0.0035840804881269415, 0.0035924200994868526, 0.0036007597108467628, 0.0036090993222066734, 0.0036174389335665844, 0.003625778544926495, 0.0036341181562864057, 0.0036424577676463163, 0.003650797379006227, 0.0036591369903661375, 0.003667476601726048, 0.003675816213085959, 0.0036841558244458694, 0.00369249543580578, 0.003700835047165691, 0.0037091746585256016, 0.0037175142698855123, 0.0037258538812454233, 0.0037341934926053335, 0.003742533103965244, 0.0037508727153251547, 0.0037592123266850658, 0.0037675519380449764, 0.0037758915494048866, 0.0037842311607647976, 0.0037925707721247082, 0.003800910383484619, 0.0038092499948445295, 0.00381758960620444, 0.0038259292175643507, 0.0038342688289242613, 0.0038426084402841724, 0.003850948051644083, 0.003859287663003993, 0.003867627274363904, 0.003875966885723815, 0.0038843064970837254, 0.003892646108443636, 0.003900985719803547, 0.003909325331163457, 0.003917664942523368, 0.003926004553883279, 0.003934344165243189, 0.003942683776603099, 0.00395102338796301, 0.003959362999322921, 0.003967702610682832, 0.003976042222042742, 0.003984381833402653, 0.003992721444762564, 0.004001061056122474, 0.004009400667482385, 0.004017740278842295, 0.004026079890202206, 0.0040344195015621165, 0.004042759112922028, 0.004051098724281939, 0.004059438335641849, 0.00406777794700176, 0.00407611755836167, 0.004084457169721581, 0.004092796781081492, 0.0041011363924414014, 0.0041094760038013125, 0.0041178156151612235, 0.004126155226521134, 0.004134494837881045, 0.004142834449240956, 0.004151174060600866, 0.004159513671960777, 0.004167853283320688, 0.004176192894680598, 0.004184532506040509, 0.0041928721174004195])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_5414602d6f5a4c30b03750afda02bc56.x = d3.scale.linear()
              .domain([3.140604880499984e-05, 0.0041928721174004195])
              .range([0, 400]);

    color_map_5414602d6f5a4c30b03750afda02bc56.legend = L.control({position: 'topright'});
    color_map_5414602d6f5a4c30b03750afda02bc56.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_5414602d6f5a4c30b03750afda02bc56.legend.addTo(map_5dda3754a653494bb429779f386fa9eb);

    color_map_5414602d6f5a4c30b03750afda02bc56.xAxis = d3.svg.axis()
        .scale(color_map_5414602d6f5a4c30b03750afda02bc56.x)
        .orient("top")
        .tickSize(1)
        .tickValues([3.140604880499984e-05, 0.0007249837269042366, 0.0014185614050034733, 0.00211213908310271, 0.0028057167612019467, 0.0034992944393011836, 0.0041928721174004195]);

    color_map_5414602d6f5a4c30b03750afda02bc56.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_5414602d6f5a4c30b03750afda02bc56.g = color_map_5414602d6f5a4c30b03750afda02bc56.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_5414602d6f5a4c30b03750afda02bc56.g.selectAll("rect")
        .data(color_map_5414602d6f5a4c30b03750afda02bc56.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_5414602d6f5a4c30b03750afda02bc56.x(color_map_5414602d6f5a4c30b03750afda02bc56.color.domain()[i - 1]) : color_map_5414602d6f5a4c30b03750afda02bc56.x.range()[0],
            x1: i < color_map_5414602d6f5a4c30b03750afda02bc56.color.domain().length ? color_map_5414602d6f5a4c30b03750afda02bc56.x(color_map_5414602d6f5a4c30b03750afda02bc56.color.domain()[i]) : color_map_5414602d6f5a4c30b03750afda02bc56.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_5414602d6f5a4c30b03750afda02bc56.g.call(color_map_5414602d6f5a4c30b03750afda02bc56.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('43_13_SIMONE SATURNINO BRAGA DE CAMPOS');

