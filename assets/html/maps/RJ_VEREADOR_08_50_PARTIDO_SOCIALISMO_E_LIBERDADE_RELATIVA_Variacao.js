    
            var map_c20be99f0fd844ea98771b2af5ad0292 = L.map(
                "map_c20be99f0fd844ea98771b2af5ad0292",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_d77c9ec6da604819943c1b2d6b256f82 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_c20be99f0fd844ea98771b2af5ad0292);
        
    
            var choropleth_8953e2d571d9482ca0f861b8155df5a2 = L.featureGroup(
                {}
            ).addTo(map_c20be99f0fd844ea98771b2af5ad0292);
        
    
        function geo_json_d26f3d0a7d4c4dc7b3d63d846d5140d1_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 434: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 443: case 439: case 325: case 440: case 438: case 449: case 447: case 456: case 455: case 468: case 474: case 442: case 452: case 437: case 436: case 446: case 444: case 419: case 415: case 408: case 334: case 330: case 475: case 433: case 445: case 391: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 377: case 383: case 338: case 426: case 333: case 404: case 359: case 348: case 326: case 358: case 357: case 350: case 463: case 366: case 451: case 387: case 458: case 384: case 414: case 406: case 374: case 890: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 435: case 423: case 471: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 336: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_d26f3d0a7d4c4dc7b3d63d846d5140d1_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_d26f3d0a7d4c4dc7b3d63d846d5140d1 = L.geoJson(null, {
                onEachFeature: geo_json_d26f3d0a7d4c4dc7b3d63d846d5140d1_onEachFeature,
            
                style: geo_json_d26f3d0a7d4c4dc7b3d63d846d5140d1_styler,
        });

        function geo_json_d26f3d0a7d4c4dc7b3d63d846d5140d1_add (data) {
            geo_json_d26f3d0a7d4c4dc7b3d63d846d5140d1
                .addData(data)
                .addTo(choropleth_8953e2d571d9482ca0f861b8155df5a2);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_d26f3d0a7d4c4dc7b3d63d846d5140d1_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_49967dd8177b4711be845dd9eb6b31d5 = {};

    
    color_map_49967dd8177b4711be845dd9eb6b31d5.color = d3.scale.threshold()
              .domain([-0.0182648401826484, -0.018215904939489092, -0.018166969696329787, -0.01811803445317048, -0.01806909921001117, -0.01802016396685186, -0.017971228723692556, -0.017922293480533247, -0.01787335823737394, -0.01782442299421463, -0.017775487751055325, -0.017726552507896016, -0.017677617264736708, -0.0176286820215774, -0.017579746778418094, -0.017530811535258786, -0.017481876292099477, -0.01743294104894017, -0.017384005805780863, -0.017335070562621555, -0.017286135319462246, -0.017237200076302937, -0.017188264833143632, -0.017139329589984324, -0.017090394346825015, -0.017041459103665706, -0.0169925238605064, -0.016943588617347093, -0.016894653374187784, -0.016845718131028475, -0.01679678288786917, -0.01674784764470986, -0.016698912401550553, -0.016649977158391244, -0.01660104191523194, -0.01655210667207263, -0.016503171428913322, -0.016454236185754013, -0.01640530094259471, -0.0163563656994354, -0.01630743045627609, -0.016258495213116786, -0.016209559969957477, -0.01616062472679817, -0.01611168948363886, -0.01606275424047955, -0.016013818997320246, -0.015964883754160938, -0.01591594851100163, -0.015867013267842324, -0.015818078024683015, -0.015769142781523707, -0.015720207538364398, -0.01567127229520509, -0.015622337052045784, -0.015573401808886476, -0.015524466565727167, -0.01547553132256786, -0.015426596079408553, -0.015377660836249245, -0.015328725593089938, -0.01527979034993063, -0.015230855106771322, -0.015181919863612014, -0.015132984620452705, -0.015084049377293398, -0.015035114134134091, -0.014986178890974783, -0.014937243647815474, -0.014888308404656167, -0.01483937316149686, -0.014790437918337552, -0.014741502675178245, -0.014692567432018936, -0.01464363218885963, -0.014594696945700321, -0.014545761702541014, -0.014496826459381705, -0.014447891216222399, -0.01439895597306309, -0.014350020729903783, -0.014301085486744476, -0.014252150243585168, -0.014203215000425859, -0.014154279757266552, -0.014105344514107245, -0.014056409270947937, -0.014007474027788628, -0.01395853878462932, -0.013909603541470012, -0.013860668298310706, -0.013811733055151397, -0.013762797811992088, -0.013713862568832781, -0.013664927325673475, -0.013615992082514166, -0.013567056839354857, -0.013518121596195552, -0.013469186353036244, -0.013420251109876935, -0.013371315866717628, -0.013322380623558321, -0.013273445380399013, -0.013224510137239704, -0.013175574894080397, -0.01312663965092109, -0.013077704407761782, -0.013028769164602473, -0.012979833921443166, -0.01293089867828386, -0.01288196343512455, -0.012833028191965242, -0.012784092948805935, -0.012735157705646628, -0.01268622246248732, -0.012637287219328011, -0.012588351976168704, -0.012539416733009397, -0.012490481489850089, -0.012441546246690782, -0.012392611003531475, -0.012343675760372166, -0.012294740517212858, -0.01224580527405355, -0.012196870030894242, -0.012147934787734935, -0.012098999544575627, -0.012050064301416318, -0.012001129058257011, -0.011952193815097704, -0.011903258571938396, -0.011854323328779087, -0.01180538808561978, -0.011756452842460473, -0.011707517599301165, -0.011658582356141856, -0.01160964711298255, -0.011560711869823243, -0.011511776626663934, -0.011462841383504627, -0.01141390614034532, -0.011364970897186012, -0.011316035654026703, -0.011267100410867396, -0.01121816516770809, -0.01116922992454878, -0.011120294681389472, -0.011071359438230165, -0.011022424195070858, -0.01097348895191155, -0.010924553708752241, -0.010875618465592934, -0.010826683222433627, -0.010777747979274319, -0.01072881273611501, -0.010679877492955703, -0.010630942249796395, -0.010582007006637088, -0.010533071763477779, -0.01048413652031847, -0.010435201277159165, -0.010386266033999857, -0.01033733079084055, -0.010288395547681241, -0.010239460304521934, -0.010190525061362626, -0.010141589818203319, -0.01009265457504401, -0.010043719331884703, -0.009994784088725395, -0.009945848845566088, -0.009896913602406781, -0.009847978359247472, -0.009799043116088165, -0.009750107872928855, -0.009701172629769548, -0.00965223738661024, -0.009603302143450933, -0.009554366900291624, -0.009505431657132317, -0.009456496413973009, -0.009407561170813702, -0.009358625927654393, -0.009309690684495086, -0.009260755441335778, -0.00921182019817647, -0.009162884955017162, -0.009113949711857855, -0.009065014468698547, -0.00901607922553924, -0.008967143982379931, -0.008918208739220624, -0.008869273496061316, -0.008820338252902009, -0.008771403009742702, -0.008722467766583393, -0.008673532523424086, -0.008624597280264778, -0.008575662037105471, -0.008526726793946162, -0.008477791550786856, -0.008428856307627547, -0.00837992106446824, -0.008330985821308931, -0.008282050578149625, -0.008233115334990316, -0.008184180091831009, -0.0081352448486717, -0.008086309605512394, -0.008037374362353085, -0.007988439119193778, -0.00793950387603447, -0.007890568632875163, -0.007841633389715854, -0.007792698146556547, -0.00774376290339724, -0.007694827660237932, -0.007645892417078625, -0.007596957173919316, -0.007548021930760009, -0.007499086687600701, -0.007450151444441394, -0.007401216201282085, -0.007352280958122778, -0.00730334571496347, -0.007254410471804163, -0.007205475228644854, -0.007156539985485547, -0.007107604742326239, -0.007058669499166932, -0.007009734256007623, -0.006960799012848316, -0.006911863769689008, -0.006862928526529701, -0.006813993283370392, -0.006765058040211085, -0.0067161227970517785, -0.00666718755389247, -0.006618252310733163, -0.006569317067573854, -0.0065203818244145475, -0.006471446581255239, -0.006422511338095932, -0.006373576094936622, -0.006324640851777315, -0.006275705608618006, -0.006226770365458699, -0.006177835122299391, -0.006128899879140084, -0.006079964635980775, -0.006031029392821468, -0.00598209414966216, -0.005933158906502853, -0.005884223663343544, -0.005835288420184237, -0.005786353177024929, -0.005737417933865622, -0.005688482690706315, -0.005639547447547006, -0.0055906122043876995, -0.005541676961228391, -0.005492741718069084, -0.005443806474909775, -0.0053948712317504685, -0.00534593598859116, -0.005297000745431853, -0.005248065502272544, -0.0051991302591132375, -0.005150195015953929, -0.005101259772794622, -0.0050523245296353134, -0.0050033892864760066, -0.004954454043316698, -0.004905518800157391, -0.0048565835569980825, -0.004807648313838776, -0.004758713070679467, -0.00470977782752016, -0.004660842584360853, -0.004611907341201545, -0.004562972098042238, -0.004514036854882929, -0.004465101611723622, -0.004416166368564314, -0.004367231125405007, -0.004318295882245698, -0.004269360639086391, -0.004220425395927083, -0.004171490152767776, -0.004122554909608467, -0.00407361966644916, -0.004024684423289852, -0.003975749180130545, -0.003926813936971236, -0.0038778786938119293, -0.0038289434506526207, -0.003780008207493314, -0.0037310729643340052, -0.0036821377211746983, -0.0036332024780153915, -0.003584267234856083, -0.003535331991696776, -0.0034863967485374674, -0.0034374615053781605, -0.003388526262218852, -0.003339591019059545, -0.0032906557759002364, -0.0032417205327409295, -0.003192785289581621, -0.003143850046422314, -0.0030949148032630054, -0.0030459795601036985, -0.002997044316944388, -0.0029481090737850813, -0.0028991738306257727, -0.002850238587466466, -0.0028013033443071572, -0.0027523681011478503, -0.0027034328579885417, -0.002654497614829235, -0.0026055623716699297, -0.002556627128510621, -0.0025076918853513125, -0.002458756642192004, -0.0024098213990326987, -0.00236088615587339, -0.0023119509127140815, -0.002263015669554773, -0.0022140804263954678, -0.002165145183236159, -0.0021162099400768505, -0.002067274696917542, -0.002018339453758237, -0.001969404210598928, -0.0019204689674396196, -0.001871533724280311, -0.0018225984811210058, -0.0017736632379616972, -0.0017247279948023886, -0.00167579275164308, -0.0016268575084837748, -0.0015779222653244662, -0.001528987022165161, -0.001480051779005849, -0.0014311165358465439, -0.0013821812926872352, -0.00133324604952793, -0.001284310806368618, -0.0012353755632093094, -0.0011864403200500043, -0.0011375050768906957, -0.001088569833731387, -0.0010396345905720784, -0.0009906993474127733, -0.0009417641042534647, -0.0008928288610941561, -0.0008438936179348475, -0.0007949583747755423, -0.0007460231316162337, -0.0006970878884569251, -0.0006481526452976165, -0.0005992174021383113, -0.0005502821589790027, -0.0005013469158196976, -0.0004524116726603855, -0.00040347642950108037, -0.00035454118634177176, -0.0003056059431824666, -0.00025667070002315454, -0.0002077354568638494, -0.00015880021370454078, -0.00010986497054523564, -6.092972738592356e-05, -1.1994484226618418e-05, 3.694075893269019e-05, 8.587600209199533e-05, 0.00013481124525130742, 0.00018374648841061256, 0.00023268173156992117, 0.0002816169747292263, 0.0003305522178885384, 0.00037948746104784353, 0.00042842270420715214, 0.0004773579473664573, 0.0005262931905257694, 0.0005752284336850745, 0.0006241636768443831, 0.0006730989200036883, 0.0007220341631629969, 0.0007709694063223055, 0.0008199046494816141, 0.0008688398926409192, 0.0009177751358002278, 0.0009667103789595365, 0.001015645622118845, 0.0010645808652781502, 0.0011135161084374588, 0.0011624513515967674, 0.001211386594756076, 0.0012603218379153812, 0.0013092570810746898, 0.0013581923242339984, 0.001407127567393307, 0.0014560628105526122, 0.0015049980537119208, 0.0015539332968712294, 0.001602868540030538, 0.0016518037831898431, 0.0017007390263491518, 0.001749674269508457, 0.001798609512667769, 0.0018475447558270741, 0.0018964799989863827, 0.0019454152421456879, 0.001994350485305, 0.002043285728464305, 0.0020922209716236137, 0.002141156214782919, 0.002190091457942231, 0.0022390267011015395, 0.0022879619442608447, 0.0023368971874201533, 0.002385832430579462, 0.0024347676737387705, 0.0024837029168980757, 0.0025326381600573843, 0.002581573403216693, 0.0026305086463760015, 0.0026794438895353066, 0.0027283791326946152, 0.0027773143758539204, 0.0028262496190132325, 0.0028751848621725376, 0.002924120105331846, 0.0029730553484911514, 0.0030219905916504634, 0.0030709258348097686, 0.003119861077969077, 0.0031687963211283823, 0.0032177315642876944, 0.0032666668074469996, 0.003315602050606308, 0.0033645372937656133, 0.0034134725369249254, 0.0034624077800842305, 0.003511343023243539, 0.0035602782664028443, 0.0036092135095621564, 0.0036581487527214615, 0.00370708399588077, 0.0037560192390400753, 0.003804954482199384, 0.0038538897253586925, 0.003902824968518001, 0.003951760211677306, 0.004000695454836615, 0.0040496306979959235, 0.004098565941155232, 0.004147501184314537, 0.004196436427473846, 0.004245371670633154, 0.004294306913792463, 0.004343242156951768, 0.004392177400111077, 0.004441112643270385, 0.004490047886429694, 0.004538983129588999, 0.004587918372748308, 0.004636853615907616, 0.004685788859066925, 0.00473472410222623, 0.004783659345385539, 0.004832594588544844, 0.004881529831704156, 0.004930465074863461, 0.00497940031802277, 0.005028335561182075, 0.005077270804341387, 0.005126206047500692, 0.005175141290660001, 0.005224076533819306, 0.005273011776978618, 0.005321947020137923, 0.005370882263297232, 0.005419817506456537, 0.005468752749615849, 0.0055176879927751575, 0.005566623235934463, 0.005615558479093771, 0.00566449372225308, 0.0057134289654123885, 0.005762364208571694, 0.005811299451731002, 0.005860234694890307, 0.0059091699380496195, 0.005958105181208925, 0.006007040424368233, 0.006055975667527538, 0.0061049109106868504, 0.006153846153846156])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_49967dd8177b4711be845dd9eb6b31d5.x = d3.scale.linear()
              .domain([-0.0182648401826484, 0.006153846153846156])
              .range([0, 400]);

    color_map_49967dd8177b4711be845dd9eb6b31d5.legend = L.control({position: 'topright'});
    color_map_49967dd8177b4711be845dd9eb6b31d5.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_49967dd8177b4711be845dd9eb6b31d5.legend.addTo(map_c20be99f0fd844ea98771b2af5ad0292);

    color_map_49967dd8177b4711be845dd9eb6b31d5.xAxis = d3.svg.axis()
        .scale(color_map_49967dd8177b4711be845dd9eb6b31d5.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-0.0182648401826484, -0.014195059126565976, -0.01012527807048355, -0.006055497014401123, -0.0019857159583186977, 0.002084065097763727, 0.006153846153846154]);

    color_map_49967dd8177b4711be845dd9eb6b31d5.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_49967dd8177b4711be845dd9eb6b31d5.g = color_map_49967dd8177b4711be845dd9eb6b31d5.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_49967dd8177b4711be845dd9eb6b31d5.g.selectAll("rect")
        .data(color_map_49967dd8177b4711be845dd9eb6b31d5.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_49967dd8177b4711be845dd9eb6b31d5.x(color_map_49967dd8177b4711be845dd9eb6b31d5.color.domain()[i - 1]) : color_map_49967dd8177b4711be845dd9eb6b31d5.x.range()[0],
            x1: i < color_map_49967dd8177b4711be845dd9eb6b31d5.color.domain().length ? color_map_49967dd8177b4711be845dd9eb6b31d5.x(color_map_49967dd8177b4711be845dd9eb6b31d5.color.domain()[i]) : color_map_49967dd8177b4711be845dd9eb6b31d5.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_49967dd8177b4711be845dd9eb6b31d5.g.call(color_map_49967dd8177b4711be845dd9eb6b31d5.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('08_50_Partido Socialismo e Liberdade');

