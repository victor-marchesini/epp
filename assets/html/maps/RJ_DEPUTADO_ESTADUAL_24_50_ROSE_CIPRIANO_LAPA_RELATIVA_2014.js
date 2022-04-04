    
            var map_8b856f509f3942408d018235e2fcff66 = L.map(
                "map_8b856f509f3942408d018235e2fcff66",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_6d99f07b34464b72acc4f34f4cdaa19c = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_8b856f509f3942408d018235e2fcff66);
        
    
            var choropleth_e9770e72ced343c6a7d4ed0b8ecf0625 = L.featureGroup(
                {}
            ).addTo(map_8b856f509f3942408d018235e2fcff66);
        
    
        function geo_json_072de87b4fdc4931a2a588aea28247f2_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 418: case 417: case 466: case 455: case 435: case 442: case 452: case 436: case 352: case 351: case 338: case 340: case 333: case 400: case 396: case 419: case 397: case 326: case 328: case 350: case 445: case 430: case 429: case 890: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 392: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 375: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_072de87b4fdc4931a2a588aea28247f2_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_072de87b4fdc4931a2a588aea28247f2 = L.geoJson(null, {
                onEachFeature: geo_json_072de87b4fdc4931a2a588aea28247f2_onEachFeature,
            
                style: geo_json_072de87b4fdc4931a2a588aea28247f2_styler,
        });

        function geo_json_072de87b4fdc4931a2a588aea28247f2_add (data) {
            geo_json_072de87b4fdc4931a2a588aea28247f2
                .addData(data)
                .addTo(choropleth_e9770e72ced343c6a7d4ed0b8ecf0625);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_072de87b4fdc4931a2a588aea28247f2_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_22d3975acfab438f853ae3a3f942c07c = {};

    
    color_map_22d3975acfab438f853ae3a3f942c07c.color = d3.scale.threshold()
              .domain([0.0, 1.866363693627068e-06, 3.732727387254136e-06, 5.599091080881204e-06, 7.465454774508272e-06, 9.331818468135339e-06, 1.1198182161762408e-05, 1.3064545855389474e-05, 1.4930909549016544e-05, 1.679727324264361e-05, 1.8663636936270677e-05, 2.0530000629897747e-05, 2.2396364323524816e-05, 2.4262728017151882e-05, 2.612909171077895e-05, 2.7995455404406018e-05, 2.9861819098033087e-05, 3.172818279166015e-05, 3.359454648528722e-05, 3.546091017891429e-05, 3.7327273872541355e-05, 3.919363756616843e-05, 4.1060001259795494e-05, 4.292636495342256e-05, 4.479272864704963e-05, 4.66590923406767e-05, 4.8525456034303765e-05, 5.039181972793083e-05, 5.22581834215579e-05, 5.412454711518496e-05, 5.5990910808812036e-05, 5.78572745024391e-05, 5.9723638196066175e-05, 6.159000188969323e-05, 6.34563655833203e-05, 6.532272927694737e-05, 6.718909297057445e-05, 6.905545666420151e-05, 7.092182035782858e-05, 7.278818405145564e-05, 7.465454774508271e-05, 7.652091143870978e-05, 7.838727513233686e-05, 8.025363882596392e-05, 8.212000251959099e-05, 8.398636621321805e-05, 8.585272990684512e-05, 8.77190936004722e-05, 8.958545729409927e-05, 9.145182098772633e-05, 9.33181846813534e-05, 9.518454837498046e-05, 9.705091206860753e-05, 9.891727576223461e-05, 0.00010078363945586166, 0.00010265000314948873, 0.0001045163668431158, 0.00010638273053674286, 0.00010824909423036993, 0.000110115457923997, 0.00011198182161762407, 0.00011384818531125114, 0.0001157145490048782, 0.00011758091269850527, 0.00011944727639213235, 0.00012131364008575942, 0.00012318000377938647, 0.00012504636747301355, 0.0001269127311666406, 0.00012877909486026768, 0.00013064545855389473, 0.0001325118222475218, 0.0001343781859411489, 0.00013624454963477594, 0.00013811091332840302, 0.00013997727702203008, 0.00014184364071565716, 0.0001437100044092842, 0.0001455763681029113, 0.00014744273179653837, 0.00014930909549016542, 0.0001511754591837925, 0.00015304182287741955, 0.00015490818657104663, 0.0001567745502646737, 0.00015864091395830076, 0.00016050727765192784, 0.0001623736413455549, 0.00016424000503918198, 0.00016610636873280906, 0.0001679727324264361, 0.0001698390961200632, 0.00017170545981369024, 0.00017357182350731732, 0.0001754381872009444, 0.00017730455089457145, 0.00017917091458819853, 0.00018103727828182558, 0.00018290364197545266, 0.00018477000566907972, 0.0001866363693627068, 0.00018850273305633387, 0.00019036909674996093, 0.000192235460443588, 0.00019410182413721506, 0.00019596818783084214, 0.00019783455152446922, 0.00019970091521809624, 0.00020156727891172332, 0.00020343364260535038, 0.00020530000629897746, 0.00020716636999260454, 0.0002090327336862316, 0.00021089909737985867, 0.00021276546107348572, 0.0002146318247671128, 0.00021649818846073985, 0.00021836455215436693, 0.000220230915847994, 0.00022209727954162106, 0.00022396364323524814, 0.0002258300069288752, 0.00022769637062250228, 0.00022956273431612936, 0.0002314290980097564, 0.0002332954617033835, 0.00023516182539701054, 0.00023702818909063762, 0.0002388945527842647, 0.00024076091647789175, 0.00024262728017151883, 0.0002444936438651459, 0.00024636000755877294, 0.0002482263712524, 0.0002500927349460271, 0.0002519590986396542, 0.0002538254623332812, 0.0002556918260269083, 0.00025755818972053536, 0.00025942455341416244, 0.00026129091710778946, 0.0002631572808014166, 0.0002650236444950436, 0.0002668900081886707, 0.0002687563718822978, 0.00027062273557592486, 0.0002724890992695519, 0.00027435546296317897, 0.00027622182665680605, 0.0002780881903504331, 0.00027995455404406015, 0.0002818209177376873, 0.0002836872814313143, 0.0002855536451249414, 0.0002874200088185684, 0.00028928637251219555, 0.0002911527362058226, 0.00029301909989944966, 0.00029488546359307673, 0.0002967518272867038, 0.00029861819098033084, 0.000300484554673958, 0.000302350918367585, 0.0003042172820612121, 0.0003060836457548391, 0.00030795000944846624, 0.00030981637314209326, 0.00031168273683572034, 0.0003135491005293474, 0.0003154154642229745, 0.00031728182791660153, 0.00031914819161022855, 0.0003210145553038557, 0.0003228809189974827, 0.0003247472826911098, 0.00032661364638473687, 0.00032848001007836395, 0.000330346373771991, 0.0003322127374656181, 0.00033407910115924514, 0.0003359454648528722, 0.00033781182854649924, 0.0003396781922401264, 0.0003415445559337534, 0.0003434109196273805, 0.00034527728332100756, 0.00034714364701463464, 0.00034901001070826166, 0.0003508763744018888, 0.0003527427380955158, 0.0003546091017891429, 0.00035647546548276993, 0.00035834182917639706, 0.0003602081928700241, 0.00036207455656365117, 0.00036394092025727825, 0.0003658072839509053, 0.00036767364764453235, 0.00036954001133815943, 0.0003714063750317865, 0.0003732727387254136, 0.0003751391024190406, 0.00037700546611266775, 0.0003788718298062948, 0.00038073819349992185, 0.00038260455719354893, 0.000384470920887176, 0.00038633728458080304, 0.0003882036482744301, 0.0003900700119680572, 0.0003919363756616843, 0.0003938027393553113, 0.00039566910304893844, 0.00039753546674256546, 0.0003994018304361925, 0.00040126819412981957, 0.00040313455782344665, 0.0004050009215170737, 0.00040686728521070075, 0.0004087336489043279, 0.0004106000125979549, 0.000412466376291582, 0.00041433273998520907, 0.00041619910367883615, 0.0004180654673724632, 0.00041993183106609026, 0.00042179819475971734, 0.0004236645584533444, 0.00042553092214697144, 0.0004273972858405986, 0.0004292636495342256, 0.0004311300132278527, 0.0004329963769214797, 0.00043486274061510684, 0.00043672910430873386, 0.00043859546800236094, 0.000440461831695988, 0.0004423281953896151, 0.00044419455908324213, 0.00044606092277686926, 0.0004479272864704963, 0.00044979365016412337, 0.0004516600138577504, 0.0004535263775513775, 0.00045539274124500455, 0.00045725910493863163, 0.0004591254686322587, 0.0004609918323258858, 0.0004628581960195128, 0.00046472455971313995, 0.000466590923406767, 0.00046845728710039405, 0.0004703236507940211, 0.0004721900144876482, 0.00047405637818127524, 0.0004759227418749023, 0.0004777891055685294, 0.0004796554692621564, 0.0004815218329557835, 0.00048338819664941053, 0.00048525456034303766, 0.0004871209240366647, 0.0004889872877302918, 0.0004908536514239188, 0.0004927200151175459, 0.000494586378811173, 0.0004964527425048, 0.0004983191061984271, 0.0005001854698920542, 0.0005020518335856813, 0.0005039181972793083, 0.0005057845609729354, 0.0005076509246665624, 0.0005095172883601895, 0.0005113836520538166, 0.0005132500157474437, 0.0005151163794410707, 0.0005169827431346978, 0.0005188491068283249, 0.000520715470521952, 0.0005225818342155789, 0.000524448197909206, 0.0005263145616028332, 0.0005281809252964603, 0.0005300472889900872, 0.0005319136526837143, 0.0005337800163773414, 0.0005356463800709685, 0.0005375127437645956, 0.0005393791074582226, 0.0005412454711518497, 0.0005431118348454768, 0.0005449781985391038, 0.0005468445622327309, 0.0005487109259263579, 0.0005505772896199851, 0.0005524436533136121, 0.0005543100170072392, 0.0005561763807008663, 0.0005580427443944932, 0.0005599091080881203, 0.0005617754717817474, 0.0005636418354753746, 0.0005655081991690015, 0.0005673745628626286, 0.0005692409265562557, 0.0005711072902498828, 0.0005729736539435098, 0.0005748400176371368, 0.000576706381330764, 0.0005785727450243911, 0.0005804391087180181, 0.0005823054724116452, 0.0005841718361052722, 0.0005860381997988993, 0.0005879045634925263, 0.0005897709271861535, 0.0005916372908797805, 0.0005935036545734076, 0.0005953700182670346, 0.0005972363819606617, 0.0005991027456542888, 0.000600969109347916, 0.0006028354730415429, 0.00060470183673517, 0.0006065682004287971, 0.0006084345641224242, 0.0006103009278160511, 0.0006121672915096782, 0.0006140336552033054, 0.0006159000188969325, 0.0006177663825905594, 0.0006196327462841865, 0.0006214991099778136, 0.0006233654736714407, 0.0006252318373650677, 0.0006270982010586948, 0.0006289645647523219, 0.000630830928445949, 0.000632697292139576, 0.0006345636558332031, 0.0006364300195268301, 0.0006382963832204571, 0.0006401627469140843, 0.0006420291106077114, 0.0006438954743013385, 0.0006457618379949654, 0.0006476282016885925, 0.0006494945653822196, 0.0006513609290758468, 0.0006532272927694737, 0.0006550936564631008, 0.0006569600201567279, 0.000658826383850355, 0.000660692747543982, 0.000662559111237609, 0.0006644254749312362, 0.0006662918386248633, 0.0006681582023184903, 0.0006700245660121174, 0.0006718909297057444, 0.0006737572933993715, 0.0006756236570929985, 0.0006774900207866257, 0.0006793563844802527, 0.0006812227481738798, 0.0006830891118675068, 0.0006849554755611339, 0.000686821839254761, 0.000688688202948388, 0.0006905545666420151, 0.0006924209303356422, 0.0006942872940292693, 0.0006961536577228964, 0.0006980200214165233, 0.0006998863851101504, 0.0007017527488037776, 0.0007036191124974047, 0.0007054854761910316, 0.0007073518398846587, 0.0007092182035782858, 0.0007110845672719129, 0.0007129509309655399, 0.000714817294659167, 0.0007166836583527941, 0.0007185500220464211, 0.0007204163857400482, 0.0007222827494336753, 0.0007241491131273023, 0.0007260154768209293, 0.0007278818405145565, 0.0007297482042081836, 0.0007316145679018107, 0.0007334809315954376, 0.0007353472952890647, 0.0007372136589826918, 0.0007390800226763189, 0.0007409463863699459, 0.000742812750063573, 0.0007446791137572001, 0.0007465454774508272, 0.0007484118411444542, 0.0007502782048380812, 0.0007521445685317084, 0.0007540109322253355, 0.0007558772959189625, 0.0007577436596125896, 0.0007596100233062166, 0.0007614763869998437, 0.0007633427506934707, 0.0007652091143870979, 0.000767075478080725, 0.000768941841774352, 0.000770808205467979, 0.0007726745691616061, 0.0007745409328552332, 0.0007764072965488602, 0.0007782736602424873, 0.0007801400239361144, 0.0007820063876297415, 0.0007838727513233686, 0.0007857391150169955, 0.0007876054787106226, 0.0007894718424042497, 0.0007913382060978769, 0.0007932045697915038, 0.0007950709334851309, 0.000796937297178758, 0.000798803660872385, 0.0008006700245660121, 0.0008025363882596391, 0.0008044027519532663, 0.0008062691156468933, 0.0008081354793405204, 0.0008100018430341475, 0.0008118682067277745, 0.0008137345704214015, 0.0008156009341150287, 0.0008174672978086558, 0.0008193336615022829, 0.0008212000251959098, 0.0008230663888895369, 0.000824932752583164, 0.0008267991162767911, 0.0008286654799704181, 0.0008305318436640452, 0.0008323982073576723, 0.0008342645710512994, 0.0008361309347449264, 0.0008379972984385534, 0.0008398636621321805, 0.0008417300258258077, 0.0008435963895194347, 0.0008454627532130617, 0.0008473291169066888, 0.0008491954806003159, 0.0008510618442939429, 0.00085292820798757, 0.0008547945716811971, 0.0008566609353748242, 0.0008585272990684512, 0.0008603936627620783, 0.0008622600264557054, 0.0008641263901493324, 0.0008659927538429594, 0.0008678591175365866, 0.0008697254812302137, 0.0008715918449238408, 0.0008734582086174677, 0.0008753245723110948, 0.0008771909360047219, 0.000879057299698349, 0.000880923663391976, 0.0008827900270856031, 0.0008846563907792302, 0.0008865227544728572, 0.0008883891181664843, 0.0008902554818601113, 0.0008921218455537385, 0.0008939882092473655, 0.0008958545729409926, 0.0008977209366346197, 0.0008995873003282467, 0.0009014536640218737, 0.0009033200277155008, 0.000905186391409128, 0.000907052755102755, 0.000908919118796382, 0.0009107854824900091, 0.0009126518461836362, 0.0009145182098772633, 0.0009163845735708902, 0.0009182509372645174, 0.0009201173009581445, 0.0009219836646517716, 0.0009238500283453986, 0.0009257163920390256, 0.0009275827557326527, 0.0009294491194262799, 0.0009313154831199069])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_22d3975acfab438f853ae3a3f942c07c.x = d3.scale.linear()
              .domain([0.0, 0.0009313154831199069])
              .range([0, 400]);

    color_map_22d3975acfab438f853ae3a3f942c07c.legend = L.control({position: 'topright'});
    color_map_22d3975acfab438f853ae3a3f942c07c.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_22d3975acfab438f853ae3a3f942c07c.legend.addTo(map_8b856f509f3942408d018235e2fcff66);

    color_map_22d3975acfab438f853ae3a3f942c07c.xAxis = d3.svg.axis()
        .scale(color_map_22d3975acfab438f853ae3a3f942c07c.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.00015521924718665114, 0.0003104384943733023, 0.00046565774155995343, 0.0006208769887466046, 0.0007760962359332558, 0.0009313154831199069]);

    color_map_22d3975acfab438f853ae3a3f942c07c.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_22d3975acfab438f853ae3a3f942c07c.g = color_map_22d3975acfab438f853ae3a3f942c07c.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_22d3975acfab438f853ae3a3f942c07c.g.selectAll("rect")
        .data(color_map_22d3975acfab438f853ae3a3f942c07c.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_22d3975acfab438f853ae3a3f942c07c.x(color_map_22d3975acfab438f853ae3a3f942c07c.color.domain()[i - 1]) : color_map_22d3975acfab438f853ae3a3f942c07c.x.range()[0],
            x1: i < color_map_22d3975acfab438f853ae3a3f942c07c.color.domain().length ? color_map_22d3975acfab438f853ae3a3f942c07c.x(color_map_22d3975acfab438f853ae3a3f942c07c.color.domain()[i]) : color_map_22d3975acfab438f853ae3a3f942c07c.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_22d3975acfab438f853ae3a3f942c07c.g.call(color_map_22d3975acfab438f853ae3a3f942c07c.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('24_50_ROSE CIPRIANO LAPA');
