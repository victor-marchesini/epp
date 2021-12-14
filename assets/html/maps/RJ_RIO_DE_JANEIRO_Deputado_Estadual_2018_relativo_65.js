    
            var map_2d9d849da41b43cba92f85c70988e995 = L.map(
                "map_2d9d849da41b43cba92f85c70988e995",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_78d753432ca74cc8b00139ce95291e10 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_2d9d849da41b43cba92f85c70988e995);
        
    
            var choropleth_84bd60ccfecc45a5892d6cbdff30476f = L.featureGroup(
                {}
            ).addTo(map_2d9d849da41b43cba92f85c70988e995);
        
    
        function geo_json_bef6fdb6c301450788f96f9f17d8a0a5_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 439: case 377: case 412: case 418: case 410: case 440: case 449: case 447: case 417: case 453: case 467: case 466: case 403: case 474: case 435: case 436: case 446: case 381: case 369: case 351: case 340: case 400: case 375: case 427: case 432: case 361: case 401: case 394: case 327: case 367: case 356: case 360: case 350: case 463: case 433: case 409: case 461: case 402: case 387: case 389: case 414: case 374: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 478: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 393: case 392: case 426: case 358: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 443: case 434: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_bef6fdb6c301450788f96f9f17d8a0a5_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_bef6fdb6c301450788f96f9f17d8a0a5 = L.geoJson(null, {
                onEachFeature: geo_json_bef6fdb6c301450788f96f9f17d8a0a5_onEachFeature,
            
                style: geo_json_bef6fdb6c301450788f96f9f17d8a0a5_styler,
        });

        function geo_json_bef6fdb6c301450788f96f9f17d8a0a5_add (data) {
            geo_json_bef6fdb6c301450788f96f9f17d8a0a5
                .addData(data)
                .addTo(choropleth_84bd60ccfecc45a5892d6cbdff30476f);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_bef6fdb6c301450788f96f9f17d8a0a5_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_08c832c9fd1445789bee7c2e32231341 = {};

    
    color_map_08c832c9fd1445789bee7c2e32231341.color = d3.scale.threshold()
              .domain([0.0, 6.301912000100831e-06, 1.2603824000201662e-05, 1.8905736000302495e-05, 2.5207648000403324e-05, 3.150956000050415e-05, 3.781147200060499e-05, 4.4113384000705815e-05, 5.041529600080665e-05, 5.671720800090748e-05, 6.30191200010083e-05, 6.932103200110913e-05, 7.562294400120998e-05, 8.19248560013108e-05, 8.822676800141163e-05, 9.452868000151247e-05, 0.0001008305920016133, 0.00010713250400171412, 0.00011343441600181496, 0.00011973632800191578, 0.0001260382400020166, 0.00013234015200211743, 0.00013864206400221826, 0.0001449439760023191, 0.00015124588800241996, 0.0001575478000025208, 0.0001638497120026216, 0.00017015162400272244, 0.00017645353600282326, 0.0001827554480029241, 0.00018905736000302494, 0.00019535927200312576, 0.0002016611840032266, 0.0002079630960033274, 0.00021426500800342824, 0.0002205669200035291, 0.00022686883200362992, 0.00023317074400373074, 0.00023947265600383157, 0.0002457745680039324, 0.0002520764800040332, 0.00025837839200413404, 0.00026468030400423486, 0.0002709822160043357, 0.0002772841280044365, 0.0002835860400045374, 0.0002898879520046382, 0.00029618986400473904, 0.0003024917760048399, 0.00030879368800494075, 0.0003150956000050416, 0.0003213975120051424, 0.0003276994240052432, 0.00033400133600534405, 0.00034030324800544487, 0.0003466051600055457, 0.0003529070720056465, 0.0003592089840057474, 0.0003655108960058482, 0.00037181280800594905, 0.0003781147200060499, 0.0003844166320061507, 0.0003907185440062515, 0.00039702045600635235, 0.0004033223680064532, 0.000409624280006554, 0.0004159261920066548, 0.00042222810400675565, 0.0004285300160068565, 0.0004348319280069573, 0.0004411338400070582, 0.000447435752007159, 0.00045373766400725983, 0.00046003957600736066, 0.0004663414880074615, 0.0004726434000075623, 0.00047894531200766313, 0.00048524722400776396, 0.0004915491360078648, 0.0004978510480079657, 0.0005041529600080664, 0.0005104548720081673, 0.0005167567840082681, 0.000523058696008369, 0.0005293606080084697, 0.0005356625200085706, 0.0005419644320086714, 0.0005482663440087723, 0.000554568256008873, 0.0005608701680089739, 0.0005671720800090748, 0.0005734739920091756, 0.0005797759040092764, 0.0005860778160093772, 0.0005923797280094781, 0.0005986816400095789, 0.0006049835520096798, 0.0006112854640097806, 0.0006175873760098815, 0.0006238892880099823, 0.0006301912000100831, 0.0006364931120101839, 0.0006427950240102848, 0.0006490969360103857, 0.0006553988480104864, 0.0006617007600105873, 0.0006680026720106881, 0.000674304584010789, 0.0006806064960108897, 0.0006869084080109906, 0.0006932103200110914, 0.0006995122320111923, 0.000705814144011293, 0.0007121160560113939, 0.0007184179680114948, 0.0007247198800115956, 0.0007310217920116965, 0.0007373237040117972, 0.0007436256160118981, 0.0007499275280119989, 0.0007562294400120998, 0.0007625313520122005, 0.0007688332640123014, 0.0007751351760124022, 0.000781437088012503, 0.0007877390000126038, 0.0007940409120127047, 0.0008003428240128056, 0.0008066447360129064, 0.0008129466480130072, 0.000819248560013108, 0.0008255504720132089, 0.0008318523840133097, 0.0008381542960134105, 0.0008444562080135113, 0.0008507581200136122, 0.000857060032013713, 0.0008633619440138138, 0.0008696638560139146, 0.0008759657680140155, 0.0008822676800141164, 0.0008885695920142171, 0.000894871504014318, 0.0009011734160144188, 0.0009074753280145197, 0.0009137772400146204, 0.0009200791520147213, 0.0009263810640148221, 0.000932682976014923, 0.0009389848880150237, 0.0009452868000151246, 0.0009515887120152254, 0.0009578906240153263, 0.0009641925360154271, 0.0009704944480155279, 0.0009767963600156287, 0.0009830982720157296, 0.0009894001840158304, 0.0009957020960159313, 0.001002004008016032, 0.0010083059200161329, 0.0010146078320162337, 0.0010209097440163346, 0.0010272116560164353, 0.0010335135680165362, 0.001039815480016637, 0.001046117392016738, 0.0010524193040168388, 0.0010587212160169395, 0.0010650231280170403, 0.0010713250400171412, 0.001077626952017242, 0.0010839288640173428, 0.0010902307760174436, 0.0010965326880175445, 0.0011028346000176454, 0.001109136512017746, 0.001115438424017847, 0.0011217403360179478, 0.0011280422480180487, 0.0011343441600181496, 0.0011406460720182502, 0.0011469479840183511, 0.001153249896018452, 0.0011595518080185529, 0.0011658537200186535, 0.0011721556320187544, 0.0011784575440188553, 0.0011847594560189562, 0.0011910613680190568, 0.0011973632800191577, 0.0012036651920192586, 0.0012099671040193597, 0.0012162690160194606, 0.0012225709280195612, 0.0012288728400196621, 0.001235174752019763, 0.0012414766640198639, 0.0012477785760199645, 0.0012540804880200654, 0.0012603824000201663, 0.0012666843120202672, 0.0012729862240203678, 0.0012792881360204687, 0.0012855900480205696, 0.0012918919600206705, 0.0012981938720207714, 0.001304495784020872, 0.001310797696020973, 0.0013170996080210738, 0.0013234015200211747, 0.0013297034320212753, 0.0013360053440213762, 0.001342307256021477, 0.001348609168021578, 0.0013549110800216788, 0.0013612129920217795, 0.0013675149040218804, 0.0013738168160219812, 0.0013801187280220821, 0.0013864206400221828, 0.0013927225520222837, 0.0013990244640223845, 0.0014053263760224854, 0.001411628288022586, 0.001417930200022687, 0.0014242321120227878, 0.0014305340240228887, 0.0014368359360229896, 0.0014431378480230903, 0.0014494397600231911, 0.001455741672023292, 0.001462043584023393, 0.0014683454960234936, 0.0014746474080235944, 0.0014809493200236953, 0.0014872512320237962, 0.0014935531440238969, 0.0014998550560239977, 0.0015061569680240986, 0.0015124588800241995, 0.0015187607920243004, 0.001525062704024401, 0.001531364616024502, 0.0015376665280246028, 0.0015439684400247037, 0.0015502703520248043, 0.0015565722640249052, 0.001562874176025006, 0.001569176088025107, 0.0015754780000252076, 0.0015817799120253085, 0.0015880818240254094, 0.0015943837360255103, 0.0016006856480256112, 0.0016069875600257118, 0.0016132894720258127, 0.0016195913840259136, 0.0016258932960260145, 0.0016321952080261151, 0.001638497120026216, 0.0016447990320263169, 0.0016511009440264178, 0.0016574028560265184, 0.0016637047680266193, 0.0016700066800267202, 0.001676308592026821, 0.001682610504026922, 0.0016889124160270226, 0.0016952143280271235, 0.0017015162400272244, 0.0017078181520273252, 0.001714120064027426, 0.0017204219760275268, 0.0017267238880276277, 0.0017330258000277285, 0.0017393277120278292, 0.00174562962402793, 0.001751931536028031, 0.0017582334480281318, 0.0017645353600282327, 0.0017708372720283334, 0.0017771391840284343, 0.0017834410960285351, 0.001789743008028636, 0.0017960449200287367, 0.0018023468320288376, 0.0018086487440289384, 0.0018149506560290393, 0.00182125256802914, 0.0018275544800292409, 0.0018338563920293417, 0.0018401583040294426, 0.0018464602160295435, 0.0018527621280296442, 0.001859064040029745, 0.001865365952029846, 0.0018716678640299468, 0.0018779697760300475, 0.0018842716880301483, 0.0018905736000302492, 0.00189687551203035, 0.0019031774240304508, 0.0019094793360305516, 0.0019157812480306525, 0.0019220831600307534, 0.0019283850720308543, 0.001934686984030955, 0.0019409888960310558, 0.0019472908080311567, 0.0019535927200312574, 0.0019598946320313585, 0.001966196544031459, 0.00197249845603156, 0.001978800368031661, 0.0019851022800317615, 0.0019914041920318626, 0.0019977061040319633, 0.002004008016032064, 0.002010309928032165, 0.0020166118400322657, 0.002022913752032367, 0.0020292156640324675, 0.0020355175760325686, 0.0020418194880326692, 0.0020481214000327703, 0.0020544233120328706, 0.0020607252240329717, 0.0020670271360330723, 0.0020733290480331734, 0.002079630960033274, 0.002085932872033375, 0.002092234784033476, 0.002098536696033577, 0.0021048386080336776, 0.0021111405200337783, 0.002117442432033879, 0.00212374434403398, 0.0021300462560340807, 0.0021363481680341818, 0.0021426500800342824, 0.0021489519920343835, 0.002155253904034484, 0.0021615558160345853, 0.0021678577280346855, 0.0021741596400347866, 0.0021804615520348873, 0.0021867634640349884, 0.002193065376035089, 0.00219936728803519, 0.002205669200035291, 0.002211971112035392, 0.002218273024035492, 0.002224574936035593, 0.002230876848035694, 0.002237178760035795, 0.0022434806720358956, 0.0022497825840359967, 0.0022560844960360974, 0.0022623864080361985, 0.002268688320036299, 0.0022749902320364, 0.0022812921440365005, 0.0022875940560366016, 0.0022938959680367022, 0.0023001978800368033, 0.002306499792036904, 0.002312801704037005, 0.0023191036160371058, 0.002325405528037207, 0.002331707440037307, 0.002338009352037408, 0.002344311264037509, 0.00235061317603761, 0.0023569150880377106, 0.0023632170000378117, 0.0023695189120379124, 0.0023758208240380134, 0.0023821227360381137, 0.0023884246480382148, 0.0023947265600383154, 0.0024010284720384165, 0.002407330384038517, 0.0024136322960386183, 0.0024199342080387194, 0.00242623612003882, 0.002432538032038921, 0.0024388399440390214, 0.0024451418560391225, 0.002451443768039223, 0.0024577456800393242, 0.002464047592039425, 0.002470349504039526, 0.0024766514160396266, 0.0024829533280397277, 0.0024892552400398284, 0.002495557152039929, 0.0025018590640400297, 0.002508160976040131, 0.0025144628880402315, 0.0025207648000403326, 0.0025270667120404332, 0.0025333686240405343, 0.002539670536040635, 0.0025459724480407357, 0.0025522743600408363, 0.0025585762720409374, 0.002564878184041038, 0.002571180096041139, 0.00257748200804124, 0.002583783920041341, 0.0025900858320414416, 0.0025963877440415427, 0.002602689656041643, 0.002608991568041744, 0.0026152934800418447, 0.002621595392041946, 0.0026278973040420464, 0.0026341992160421475, 0.002640501128042248, 0.0026468030400423493, 0.00265310495204245, 0.0026594068640425506, 0.0026657087760426513, 0.0026720106880427524, 0.002678312600042853, 0.002684614512042954, 0.002690916424043055, 0.002697218336043156, 0.0027035202480432566, 0.0027098221600433577, 0.002716124072043458, 0.002722425984043559, 0.0027287278960436596, 0.0027350298080437607, 0.0027413317200438614, 0.0027476336320439625, 0.002753935544044063, 0.0027602374560441643, 0.0027665393680442645, 0.0027728412800443656, 0.0027791431920444662, 0.0027854451040445673, 0.002791747016044668, 0.002798048928044769, 0.0028043508400448698, 0.002810652752044971, 0.0028169546640450715, 0.002823256576045172, 0.002829558488045273, 0.002835860400045374, 0.0028421623120454746, 0.0028484642240455757, 0.0028547661360456764, 0.0028610680480457775, 0.002867369960045878, 0.002873671872045979, 0.0028799737840460794, 0.0028862756960461805, 0.002892577608046281, 0.0028988795200463823, 0.002905181432046483, 0.002911483344046584, 0.0029177852560466847, 0.002924087168046786, 0.002930389080046886, 0.002936690992046987, 0.002942992904047088, 0.002949294816047189, 0.0029555967280472896, 0.0029618986400473907, 0.0029682005520474913, 0.0029745024640475924, 0.002980804376047693, 0.0029871062880477937, 0.0029934082000478944, 0.0029997101120479955, 0.003006012024048096, 0.0030123139360481973, 0.003018615848048298, 0.003024917760048399, 0.0030312196720484997, 0.0030375215840486008, 0.003043823496048701, 0.003050125408048802, 0.0030564273200489028, 0.003062729232049004, 0.0030690311440491045, 0.0030753330560492056, 0.0030816349680493063, 0.0030879368800494074, 0.0030942387920495076, 0.0031005407040496087, 0.0031068426160497094, 0.0031131445280498105, 0.003119446440049911, 0.003125748352050012, 0.003132050264050113, 0.003138352176050214, 0.0031446540880503146])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_08c832c9fd1445789bee7c2e32231341.x = d3.scale.linear()
              .domain([0.0, 0.0031446540880503146])
              .range([0, 400]);

    color_map_08c832c9fd1445789bee7c2e32231341.legend = L.control({position: 'topright'});
    color_map_08c832c9fd1445789bee7c2e32231341.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_08c832c9fd1445789bee7c2e32231341.legend.addTo(map_2d9d849da41b43cba92f85c70988e995);

    color_map_08c832c9fd1445789bee7c2e32231341.xAxis = d3.svg.axis()
        .scale(color_map_08c832c9fd1445789bee7c2e32231341.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.0005241090146750524, 0.0010482180293501049, 0.0015723270440251573, 0.0020964360587002098, 0.002620545073375262, 0.0031446540880503146]);

    color_map_08c832c9fd1445789bee7c2e32231341.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_08c832c9fd1445789bee7c2e32231341.g = color_map_08c832c9fd1445789bee7c2e32231341.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_08c832c9fd1445789bee7c2e32231341.g.selectAll("rect")
        .data(color_map_08c832c9fd1445789bee7c2e32231341.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_08c832c9fd1445789bee7c2e32231341.x(color_map_08c832c9fd1445789bee7c2e32231341.color.domain()[i - 1]) : color_map_08c832c9fd1445789bee7c2e32231341.x.range()[0],
            x1: i < color_map_08c832c9fd1445789bee7c2e32231341.color.domain().length ? color_map_08c832c9fd1445789bee7c2e32231341.x(color_map_08c832c9fd1445789bee7c2e32231341.color.domain()[i]) : color_map_08c832c9fd1445789bee7c2e32231341.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_08c832c9fd1445789bee7c2e32231341.g.call(color_map_08c832c9fd1445789bee7c2e32231341.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('65_PCdoB');
