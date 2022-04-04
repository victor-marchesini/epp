    
            var map_2100ab50972c43bdbfd9594458a01e2b = L.map(
                "map_2100ab50972c43bdbfd9594458a01e2b",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_5f29eefb4f0348a7bc70b31b25dc9695 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_2100ab50972c43bdbfd9594458a01e2b);
        
    
            var choropleth_bf300578329842fabc4b89ab0fad3e8b = L.featureGroup(
                {}
            ).addTo(map_2100ab50972c43bdbfd9594458a01e2b);
        
    
        function geo_json_587d918403c14adea82bd4e5095475d5_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 428: case 335: case 478: case 393: case 381: case 369: case 338: case 340: case 333: case 416: case 382: case 373: case 346: case 361: case 348: case 329: case 358: case 328: case 475: case 356: case 360: case 347: case 357: case 355: case 350: case 463: case 483: case 465: case 451: case 388: case 370: case 387: case 378: case 511: case 458: case 450: case 480: case 341: case 389: case 384: case 510: case 405: case 414: case 406: case 374: case 476: case 890: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 443: case 336: case 391: case 365: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 435: case 423: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 471: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_587d918403c14adea82bd4e5095475d5_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_587d918403c14adea82bd4e5095475d5 = L.geoJson(null, {
                onEachFeature: geo_json_587d918403c14adea82bd4e5095475d5_onEachFeature,
            
                style: geo_json_587d918403c14adea82bd4e5095475d5_styler,
        });

        function geo_json_587d918403c14adea82bd4e5095475d5_add (data) {
            geo_json_587d918403c14adea82bd4e5095475d5
                .addData(data)
                .addTo(choropleth_bf300578329842fabc4b89ab0fad3e8b);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_587d918403c14adea82bd4e5095475d5_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_28b58cbbd62044a4b9abbc662f3a713f = {};

    
    color_map_28b58cbbd62044a4b9abbc662f3a713f.color = d3.scale.threshold()
              .domain([-0.131298589116038, -0.13076881441858937, -0.1302390397211407, -0.12970926502369207, -0.12917949032624343, -0.12864971562879476, -0.12811994093134613, -0.1275901662338975, -0.12706039153644882, -0.1265306168390002, -0.12600084214155155, -0.12547106744410289, -0.12494129274665425, -0.1244115180492056, -0.12388174335175695, -0.12335196865430831, -0.12282219395685966, -0.122292419259411, -0.12176264456196237, -0.12123286986451372, -0.12070309516706507, -0.12017332046961643, -0.11964354577216778, -0.11911377107471913, -0.11858399637727049, -0.11805422167982184, -0.11752444698237319, -0.11699467228492454, -0.1164648975874759, -0.11593512289002725, -0.1154053481925786, -0.11487557349512995, -0.11434579879768131, -0.11381602410023266, -0.11328624940278402, -0.11275647470533537, -0.11222670000788672, -0.11169692531043807, -0.11116715061298943, -0.11063737591554078, -0.11010760121809213, -0.10957782652064349, -0.10904805182319484, -0.10851827712574619, -0.10798850242829755, -0.1074587277308489, -0.10692895303340025, -0.10639917833595161, -0.10586940363850296, -0.10533962894105431, -0.10480985424360567, -0.10428007954615702, -0.10375030484870837, -0.10322053015125973, -0.10269075545381108, -0.10216098075636243, -0.10163120605891379, -0.10110143136146514, -0.10057165666401649, -0.10004188196656785, -0.09951210726911919, -0.09898233257167055, -0.0984525578742219, -0.09792278317677325, -0.09739300847932461, -0.09686323378187596, -0.09633345908442731, -0.09580368438697867, -0.09527390968953003, -0.09474413499208137, -0.09421436029463273, -0.09368458559718408, -0.09315481089973543, -0.09262503620228679, -0.09209526150483814, -0.09156548680738949, -0.09103571210994085, -0.0905059374124922, -0.08997616271504355, -0.08944638801759491, -0.08891661332014625, -0.08838683862269761, -0.08785706392524897, -0.08732728922780031, -0.08679751453035167, -0.08626773983290303, -0.08573796513545437, -0.08520819043800573, -0.0846784157405571, -0.08414864104310844, -0.08361886634565979, -0.08308909164821114, -0.08255931695076249, -0.08202954225331385, -0.0814997675558652, -0.08096999285841655, -0.08044021816096791, -0.07991044346351926, -0.07938066876607061, -0.07885089406862197, -0.07832111937117334, -0.07779134467372467, -0.07726156997627603, -0.07673179527882738, -0.07620202058137873, -0.0756722458839301, -0.07514247118648144, -0.07461269648903279, -0.07408292179158416, -0.0735531470941355, -0.07302337239668685, -0.07249359769923822, -0.07196382300178956, -0.07143404830434091, -0.07090427360689228, -0.07037449890944361, -0.06984472421199497, -0.06931494951454634, -0.06878517481709769, -0.06825540011964903, -0.06772562542220038, -0.06719585072475175, -0.0666660760273031, -0.06613630132985444, -0.06560652663240579, -0.06507675193495716, -0.0645469772375085, -0.06401720254005985, -0.06348742784261122, -0.06295765314516256, -0.062427878447713914, -0.061898103750265276, -0.061368329052816625, -0.06083855435536799, -0.06030877965791934, -0.059779004960470686, -0.05924923026302205, -0.0587194555655734, -0.058189680868124746, -0.057659906170676095, -0.057130131473227444, -0.05660035677577879, -0.056070582078330156, -0.055540807380881504, -0.05501103268343285, -0.054481257985984216, -0.053951483288535565, -0.05342170859108693, -0.05289193389363828, -0.052362159196189625, -0.05183238449874099, -0.05130260980129234, -0.050772835103843686, -0.05024306040639505, -0.0497132857089464, -0.049183511011497746, -0.04865373631404911, -0.04812396161660046, -0.04759418691915181, -0.04706441222170317, -0.046534637524254505, -0.04600486282680587, -0.045475088129357216, -0.044945313431908565, -0.04441553873445993, -0.04388576403701128, -0.043355989339562626, -0.04282621464211399, -0.04229643994466534, -0.041766665247216686, -0.04123689054976805, -0.0407071158523194, -0.04017734115487075, -0.03964756645742211, -0.03911779175997346, -0.03858801706252482, -0.03805824236507617, -0.03752846766762752, -0.03699869297017888, -0.03646891827273023, -0.03593914357528158, -0.03540936887783294, -0.03487959418038428, -0.034349819482935626, -0.03382004478548699, -0.03329027008803834, -0.032760495390589686, -0.03223072069314105, -0.0317009459956924, -0.03117117129824376, -0.03064139660079511, -0.03011162190334646, -0.02958184720589782, -0.02905207250844917, -0.02852229781100052, -0.02799252311355188, -0.02746274841610323, -0.02693297371865458, -0.026403199021205942, -0.02587342432375729, -0.025343649626308654, -0.024813874928860002, -0.02428410023141135, -0.0237543255339627, -0.02322455083651405, -0.022694776139065398, -0.02216500144161676, -0.02163522674416811, -0.02110545204671946, -0.02057567734927082, -0.02004590265182217, -0.01951612795437352, -0.01898635325692488, -0.01845657855947623, -0.017926803862027593, -0.017397029164578942, -0.01686725446713029, -0.016337479769681654, -0.015807705072233003, -0.015277930374784351, -0.014748155677335714, -0.014218380979887063, -0.013688606282438412, -0.013158831584989775, -0.012629056887541124, -0.012099282190092459, -0.011569507492643821, -0.01103973279519517, -0.010509958097746533, -0.009980183400297882, -0.00945040870284923, -0.008920634005400593, -0.008390859307951942, -0.007861084610503291, -0.007331309913054654, -0.006801535215606003, -0.0062717605181573655, -0.0057419858207087004, -0.005212211123260063, -0.004682436425811426, -0.004152661728362761, -0.0036228870309141237, -0.0030931123334654864, -0.0025633376360168214, -0.002033562938568184, -0.0015037882411195191, -0.0009740135436708819, -0.00044423884622224463, 8.553585122642038e-05, 0.0006153105486750576, 0.0011450852461236949, 0.00167485994357236, 0.002204634641020997, 0.0027344093384696344, 0.0032641840359182994, 0.0037939587333669367, 0.004323733430815574, 0.004853508128264239, 0.005383282825712876, 0.0059130575231615135, 0.0064428322206101785, 0.006972606918058816, 0.007502381615507453, 0.00803215631295609, 0.008561931010404755, 0.009091705707853392, 0.00962148040530203, 0.010151255102750695, 0.010681029800199332, 0.01121080449764797, 0.011740579195096634, 0.012270353892545272, 0.012800128589993909, 0.013329903287442574, 0.013859677984891211, 0.014389452682339848, 0.014919227379788513, 0.01544900207723715, 0.015978776774685816, 0.01650855147213448, 0.017038326169583118, 0.017568100867031755, 0.01809787556448042, 0.018627650261929057, 0.019157424959377695, 0.01968719965682636, 0.020216974354274997, 0.020746749051723634, 0.0212765237491723, 0.021806298446620936, 0.022336073144069574, 0.02286584784151821, 0.023395622538966876, 0.023925397236415513, 0.02445517193386415, 0.024984946631312815, 0.025514721328761453, 0.02604449602621009, 0.026574270723658755, 0.027104045421107392, 0.02763382011855603, 0.028163594816004694, 0.028693369513453332, 0.02922314421090197, 0.029752918908350634, 0.03028269360579927, 0.03081246830324791, 0.031342243000696574, 0.03187201769814521, 0.03240179239559385, 0.03293156709304251, 0.03346134179049115, 0.03399111648793979, 0.03452089118538845, 0.03505066588283709, 0.03558044058028573, 0.03611021527773439, 0.03663998997518303, 0.03716976467263167, 0.037699539370080304, 0.038229314067529, 0.038759088764977634, 0.03928886346242627, 0.039818638159874936, 0.04034841285732357, 0.04087818755477221, 0.041407962252220876, 0.04193773694966951, 0.04246751164711815, 0.042997286344566815, 0.04352706104201545, 0.04405683573946409, 0.044586610436912755, 0.04511638513436139, 0.04564615983181003, 0.046175934529258694, 0.04670570922670733, 0.04723548392415597, 0.047765258621604634, 0.04829503331905327, 0.04882480801650191, 0.04935458271395057, 0.04988435741139921, 0.05041413210884785, 0.05094390680629651, 0.05147368150374515, 0.05200345620119379, 0.052533230898642425, 0.05306300559609109, 0.05359278029353973, 0.054122554990988364, 0.05465232968843703, 0.055182104385885666, 0.055711879083334304, 0.05624165378078297, 0.056771428478231606, 0.05730120317568024, 0.05783097787312891, 0.058360752570577545, 0.05889052726802618, 0.05942030196547485, 0.059950076662923485, 0.06047985136037212, 0.061009626057820815, 0.06153940075526945, 0.06206917545271809, 0.06259895015016675, 0.06312872484761539, 0.06365849954506403, 0.0641882742425127, 0.06471804893996133, 0.06524782363740997, 0.06577759833485863, 0.06630737303230727, 0.06683714772975591, 0.06736692242720455, 0.06789669712465321, 0.06842647182210185, 0.06895624651955048, 0.06948602121699915, 0.07001579591444779, 0.07054557061189642, 0.07107534530934509, 0.07160512000679373, 0.07213489470424236, 0.07266466940169103, 0.07319444409913967, 0.0737242187965883, 0.07425399349403697, 0.0747837681914856, 0.07531354288893424, 0.07584331758638291, 0.07637309228383155, 0.07690286698128018, 0.07743264167872885, 0.07796241637617748, 0.07849219107362612, 0.07902196577107479, 0.07955174046852342, 0.08008151516597206, 0.0806112898634207, 0.08114106456086936, 0.081670839258318, 0.08220061395576664, 0.0827303886532153, 0.08326016335066394, 0.0837899380481126, 0.08431971274556127, 0.08484948744300991, 0.08537926214045855, 0.08590903683790721, 0.08643881153535585, 0.08696858623280448, 0.08749836093025315, 0.08802813562770179, 0.08855791032515042, 0.08908768502259909, 0.08961745972004773, 0.09014723441749636, 0.09067700911494503, 0.09120678381239367, 0.0917365585098423, 0.09226633320729097, 0.0927961079047396, 0.09332588260218824, 0.09385565729963691, 0.09438543199708554, 0.09491520669453418, 0.09544498139198282, 0.09597475608943148, 0.09650453078688012, 0.09703430548432876, 0.09756408018177742, 0.09809385487922606, 0.0986236295766747, 0.09915340427412336, 0.099683178971572, 0.10021295366902064, 0.1007427283664693, 0.10127250306391794, 0.10180227776136658, 0.10233205245881524, 0.10286182715626388, 0.10339160185371252, 0.10392137655116118, 0.10445115124860982, 0.10498092594605846, 0.10551070064350712, 0.10604047534095576, 0.10657025003840442, 0.10710002473585309, 0.10762979943330173, 0.10815957413075036, 0.10868934882819903, 0.10921912352564767, 0.1097488982230963, 0.11027867292054494, 0.1108084476179936, 0.11133822231544224, 0.11186799701289088, 0.11239777171033954, 0.11292754640778818, 0.11345732110523682, 0.11398709580268548, 0.11451687050013412, 0.11504664519758276, 0.11557641989503142, 0.11610619459248006, 0.1166359692899287, 0.11716574398737736, 0.117695518684826, 0.11822529338227464, 0.11875506807972327, 0.11928484277717191, 0.1198146174746206, 0.12034439217206924, 0.12087416686951788, 0.12140394156696652, 0.12193371626441515, 0.12246349096186379, 0.12299326565931248, 0.12352304035676112, 0.12405281505420976, 0.1245825897516584, 0.12511236444910703, 0.12564213914655567, 0.12617191384400436, 0.126701688541453, 0.12723146323890164, 0.12776123793635027, 0.12829101263379897, 0.12882078733124755, 0.12935056202869624, 0.12988033672614488, 0.13041011142359352, 0.13093988612104215, 0.13146966081849085, 0.13199943551593943, 0.13252921021338812, 0.13305898491083676])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_28b58cbbd62044a4b9abbc662f3a713f.x = d3.scale.linear()
              .domain([-0.131298589116038, 0.13305898491083676])
              .range([0, 400]);

    color_map_28b58cbbd62044a4b9abbc662f3a713f.legend = L.control({position: 'topright'});
    color_map_28b58cbbd62044a4b9abbc662f3a713f.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_28b58cbbd62044a4b9abbc662f3a713f.legend.addTo(map_2100ab50972c43bdbfd9594458a01e2b);

    color_map_28b58cbbd62044a4b9abbc662f3a713f.xAxis = d3.svg.axis()
        .scale(color_map_28b58cbbd62044a4b9abbc662f3a713f.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-0.131298589116038, -0.08723899344489222, -0.04317939777374642, 0.0008801978973993763, 0.04493979356854516, 0.08899938923969095, 0.13305898491083676]);

    color_map_28b58cbbd62044a4b9abbc662f3a713f.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_28b58cbbd62044a4b9abbc662f3a713f.g = color_map_28b58cbbd62044a4b9abbc662f3a713f.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_28b58cbbd62044a4b9abbc662f3a713f.g.selectAll("rect")
        .data(color_map_28b58cbbd62044a4b9abbc662f3a713f.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_28b58cbbd62044a4b9abbc662f3a713f.x(color_map_28b58cbbd62044a4b9abbc662f3a713f.color.domain()[i - 1]) : color_map_28b58cbbd62044a4b9abbc662f3a713f.x.range()[0],
            x1: i < color_map_28b58cbbd62044a4b9abbc662f3a713f.color.domain().length ? color_map_28b58cbbd62044a4b9abbc662f3a713f.x(color_map_28b58cbbd62044a4b9abbc662f3a713f.color.domain()[i]) : color_map_28b58cbbd62044a4b9abbc662f3a713f.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_28b58cbbd62044a4b9abbc662f3a713f.g.call(color_map_28b58cbbd62044a4b9abbc662f3a713f.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');
