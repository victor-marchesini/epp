    
            var map_bf0ed8fe0ce84567bf34025ca96fed82 = L.map(
                "map_bf0ed8fe0ce84567bf34025ca96fed82",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_c6248c0192fe4a50bacf4cbffc889bf1 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_bf0ed8fe0ce84567bf34025ca96fed82);
        
    
            var choropleth_7a6fc8d5caf743259717f85cb3369d8e = L.featureGroup(
                {}
            ).addTo(map_bf0ed8fe0ce84567bf34025ca96fed82);
        
    
        function geo_json_58d37f2ebf7a450b99217e6a9976ebd2_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 428: case 325: case 423: case 431: case 348: case 349: case 342: case 336: case 329: case 331: case 328: case 460: case 475: case 481: case 479: case 366: case 402: case 341: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 453: case 469: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: case 470: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 474: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_58d37f2ebf7a450b99217e6a9976ebd2_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_58d37f2ebf7a450b99217e6a9976ebd2 = L.geoJson(null, {
                onEachFeature: geo_json_58d37f2ebf7a450b99217e6a9976ebd2_onEachFeature,
            
                style: geo_json_58d37f2ebf7a450b99217e6a9976ebd2_styler,
        });

        function geo_json_58d37f2ebf7a450b99217e6a9976ebd2_add (data) {
            geo_json_58d37f2ebf7a450b99217e6a9976ebd2
                .addData(data)
                .addTo(choropleth_7a6fc8d5caf743259717f85cb3369d8e);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_58d37f2ebf7a450b99217e6a9976ebd2_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_c600e9447d3048fe9cceca63ab102744 = {};

    
    color_map_c600e9447d3048fe9cceca63ab102744.color = d3.scale.threshold()
              .domain([-0.013555573902865124, -0.013524207149435134, -0.013492840396005143, -0.013461473642575153, -0.013430106889145161, -0.013398740135715171, -0.013367373382285181, -0.01333600662885519, -0.0133046398754252, -0.013273273121995208, -0.013241906368565218, -0.013210539615135228, -0.013179172861705236, -0.013147806108275246, -0.013116439354845254, -0.013085072601415264, -0.013053705847985275, -0.013022339094555283, -0.012990972341125293, -0.012959605587695301, -0.012928238834265311, -0.012896872080835321, -0.01286550532740533, -0.01283413857397534, -0.012802771820545348, -0.012771405067115358, -0.012740038313685368, -0.012708671560255376, -0.012677304806825386, -0.012645938053395395, -0.012614571299965405, -0.012583204546535415, -0.012551837793105423, -0.012520471039675433, -0.012489104286245441, -0.012457737532815451, -0.012426370779385462, -0.01239500402595547, -0.01236363727252548, -0.012332270519095488, -0.012300903765665498, -0.012269537012235508, -0.012238170258805517, -0.012206803505375527, -0.012175436751945535, -0.012144069998515545, -0.012112703245085555, -0.012081336491655563, -0.012049969738225573, -0.012018602984795582, -0.011987236231365592, -0.011955869477935602, -0.01192450272450561, -0.01189313597107562, -0.011861769217645628, -0.011830402464215638, -0.011799035710785648, -0.011767668957355657, -0.011736302203925667, -0.011704935450495675, -0.011673568697065685, -0.011642201943635695, -0.011610835190205704, -0.011579468436775714, -0.011548101683345722, -0.011516734929915732, -0.011485368176485742, -0.01145400142305575, -0.01142263466962576, -0.011391267916195769, -0.011359901162765779, -0.011328534409335789, -0.011297167655905797, -0.011265800902475807, -0.011234434149045815, -0.011203067395615825, -0.011171700642185835, -0.011140333888755844, -0.011108967135325854, -0.011077600381895862, -0.011046233628465872, -0.011014866875035882, -0.01098350012160589, -0.0109521333681759, -0.010920766614745909, -0.010889399861315919, -0.010858033107885929, -0.010826666354455937, -0.010795299601025947, -0.010763932847595956, -0.010732566094165966, -0.010701199340735976, -0.010669832587305984, -0.010638465833875994, -0.010607099080446002, -0.010575732327016012, -0.010544365573586022, -0.01051299882015603, -0.01048163206672604, -0.010450265313296049, -0.010418898559866059, -0.01038753180643607, -0.010356165053006077, -0.010324798299576086, -0.010293431546146096, -0.010262064792716106, -0.010230698039286116, -0.010199331285856124, -0.010167964532426134, -0.010136597778996143, -0.010105231025566153, -0.010073864272136163, -0.010042497518706171, -0.010011130765276181, -0.00997976401184619, -0.0099483972584162, -0.00991703050498621, -0.009885663751556218, -0.009854296998126226, -0.009822930244696236, -0.009791563491266246, -0.009760196737836256, -0.009728829984406264, -0.009697463230976274, -0.009666096477546283, -0.009634729724116293, -0.009603362970686303, -0.009571996217256311, -0.00954062946382632, -0.00950926271039633, -0.00947789595696634, -0.00944652920353635, -0.009415162450106358, -0.009383795696676368, -0.009352428943246376, -0.009321062189816386, -0.009289695436386396, -0.009258328682956405, -0.009226961929526413, -0.009195595176096423, -0.009164228422666433, -0.009132861669236443, -0.009101494915806451, -0.00907012816237646, -0.00903876140894647, -0.00900739465551648, -0.00897602790208649, -0.008944661148656498, -0.008913294395226508, -0.008881927641796517, -0.008850560888366527, -0.008819194134936537, -0.008787827381506545, -0.008756460628076553, -0.008725093874646563, -0.008693727121216573, -0.008662360367786583, -0.008630993614356592, -0.0085996268609266, -0.00856826010749661, -0.00853689335406662, -0.00850552660063663, -0.008474159847206638, -0.008442793093776648, -0.008411426340346657, -0.008380059586916667, -0.008348692833486677, -0.008317326080056685, -0.008285959326626693, -0.008254592573196703, -0.008223225819766714, -0.008191859066336724, -0.008160492312906732, -0.00812912555947674, -0.00809775880604675, -0.00806639205261676, -0.00803502529918677, -0.008003658545756779, -0.007972291792326789, -0.007940925038896797, -0.007909558285466807, -0.007878191532036817, -0.007846824778606825, -0.007815458025176834, -0.007784091271746845, -0.007752724518316853, -0.007721357764886863, -0.007689991011456872, -0.007658624258026881, -0.0076272575045968904, -0.0075958907511669005, -0.007564523997736909, -0.007533157244306919, -0.007501790490876929, -0.007470423737446937, -0.007439056984016947, -0.007407690230586956, -0.007376323477156966, -0.007344956723726975, -0.007313589970296985, -0.007282223216866993, -0.007250856463437003, -0.007219489710007012, -0.0071881229565770215, -0.007156756203147031, -0.007125389449717041, -0.007094022696287049, -0.007062655942857059, -0.007031289189427068, -0.006999922435997077, -0.0069685556825670875, -0.006937188929137097, -0.006905822175707106, -0.006874455422277115, -0.006843088668847125, -0.006811721915417133, -0.006780355161987143, -0.0067489884085571526, -0.006717621655127162, -0.006686254901697171, -0.006654888148267181, -0.006623521394837189, -0.006592154641407199, -0.0065607878879772085, -0.006529421134547218, -0.006498054381117228, -0.006466687627687237, -0.006435320874257246, -0.006403954120827255, -0.006372587367397265, -0.0063412206139672736, -0.006309853860537284, -0.006278487107107293, -0.006247120353677302, -0.006215753600247311, -0.006184386846817321, -0.0061530200933873295, -0.0061216533399573395, -0.006090286586527349, -0.006058919833097358, -0.006027553079667368, -0.005996186326237377, -0.005964819572807386, -0.0059334528193773954, -0.0059020860659474055, -0.005870719312517414, -0.005839352559087424, -0.005807985805657433, -0.005776619052227442, -0.005745252298797451, -0.005713885545367461, -0.00568251879193747, -0.00565115203850748, -0.005619785285077488, -0.005588418531647498, -0.005557051778217508, -0.0055256850247875165, -0.0054943182713575265, -0.0054629515179275365, -0.005431584764497545, -0.005400218011067555, -0.005368851257637565, -0.005337484504207573, -0.0053061177507775815, -0.005274750997347592, -0.005243384243917602, -0.005212017490487612, -0.00518065073705762, -0.005149283983627628, -0.005117917230197638, -0.005086550476767648, -0.005055183723337657, -0.005023816969907667, -0.004992450216477677, -0.004961083463047685, -0.004929716709617695, -0.004898349956187703, -0.0048669832027577135, -0.0048356164493277235, -0.0048042496958977336, -0.00477288294246774, -0.00474151618903775, -0.00471014943560776, -0.00467878268217777, -0.0046474159287477786, -0.004616049175317789, -0.004584682421887797, -0.004553315668457807, -0.004521948915027815, -0.004490582161597825, -0.004459215408167835, -0.004427848654737845, -0.004396481901307854, -0.004365115147877862, -0.004333748394447872, -0.004302381641017882, -0.004271014887587892, -0.0042396481341579004, -0.004208281380727909, -0.004176914627297919, -0.004145547873867929, -0.004114181120437937, -0.004082814367007947, -0.004051447613577957, -0.0040200808601479655, -0.003988714106717976, -0.003957347353287984, -0.003925980599857994, -0.003894613846428004, -0.003863247092998014, -0.0038318803395680206, -0.0038005135861380306, -0.0037691468327080407, -0.0037377800792780507, -0.003706413325848059, -0.003675046572418069, -0.0036436798189880774, -0.0036123130655580874, -0.0035809463121280957, -0.0035495795586981058, -0.003518212805268116, -0.003486846051838126, -0.003455479298408134, -0.0034241125449781425, -0.0033927457915481525, -0.0033613790381181625, -0.0033300122846881726, -0.003298645531258181, -0.003267278777828189, -0.0032359120243981992, -0.0032045452709682093, -0.0031731785175382176, -0.0031418117641082276, -0.0031104450106782377, -0.003079078257248246, -0.0030477115038182543, -0.0030163447503882643, -0.0029849779969582744, -0.0029536112435282844, -0.0029222444900982945, -0.002890877736668301, -0.002859510983238311, -0.002828144229808321, -0.002796777476378331, -0.0027654107229483395, -0.0027340439695183495, -0.002702677216088358, -0.002671310462658368, -0.002639943709228376, -0.0026085769557983862, -0.0025772102023683963, -0.0025458434489384063, -0.0025144766955084146, -0.002483109942078423, -0.002451743188648433, -0.002420376435218443, -0.002389009681788453, -0.0023576429283584614, -0.0023262761749284697, -0.0022949094214984797, -0.0022635426680684897, -0.002232175914638498, -0.002200809161208508, -0.002169442407778518, -0.0021380756543485264, -0.0021067089009185348, -0.002075342147488545, -0.002043975394058555, -0.002012608640628565, -0.001981241887198575, -0.0019498751337685815, -0.0019185083803385915, -0.0018871416269086016, -0.0018557748734786116, -0.00182440812004862, -0.00179304136661863, -0.0017616746131886383, -0.0017303078597586483, -0.0016989411063286566, -0.0016675743528986667, -0.0016362075994686767, -0.0016048408460386868, -0.0015734740926086933, -0.0015421073391787034, -0.0015107405857487134, -0.0014793738323187235, -0.0014480070788887335, -0.0014166403254587418, -0.0013852735720287501, -0.0013539068185987602, -0.0013225400651687702, -0.0012911733117387785, -0.0012598065583087886, -0.0012284398048787986, -0.001197073051448807, -0.0011657062980188152, -0.0011343395445888253, -0.0011029727911588353, -0.0010716060377288453, -0.0010402392842988537, -0.001008872530868862, -0.000977505777438872, -0.000946139024008882, -0.0009147722705788921, -0.0008834055171489004, -0.0008520387637189104, -0.0008206720102889187, -0.0007893052568589288, -0.0007579385034289371, -0.0007265717499989471, -0.0006952049965689572, -0.0006638382431389672, -0.0006324714897089738, -0.0006011047362789838, -0.0005697379828489939, -0.0005383712294190039, -0.0005070044759890122, -0.00047563772255902227, -0.0004442709691290306, -0.0004129042156990406, -0.00038153746226905066, -0.00035017070883905897, -0.000318803955409069, -0.00028743720197907906, -0.00025607044854908736, -0.00022470369511909567, -0.00019333694168910572, -0.00016197018825911576, -0.0001306034348291258, -9.923668139913411e-05, -6.786992796914242e-05, -3.650317453915246e-05, -5.136421109162501e-06, 2.6230332320827457e-05, 5.759708575081915e-05, 8.89638391808091e-05, 0.0001203305926108008, 0.00015169734604079076, 0.00018306409947078245, 0.0002144308529007724, 0.00024579760633076236, 0.0002771643597607523, 0.00030853111319074575, 0.0003398978666207357, 0.00037126462005072566, 0.0004026313734807156, 0.0004339981269107073, 0.00046536488034069727, 0.000496731633770689, 0.0005280983872006789, 0.0005594651406306689, 0.0005908318940606606, 0.0006221986474906505, 0.0006535654009206405, 0.0006849321543506322, 0.0007162989077806239, 0.0007476656612106138, 0.0007790324146406038, 0.0008103991680705937, 0.0008417659215005854, 0.0008731326749305771, 0.0009044994283605671, 0.000935866181790557, 0.0009672329352205487, 0.0009985996886505387, 0.0010299664420805286, 0.0010613331955105203, 0.0010926999489405103, 0.001124066702370502, 0.001155433455800492, 0.001186800209230482, 0.0012181669626604719, 0.0012495337160904653, 0.0012809004695204552, 0.0013122672229504452, 0.0013436339763804352, 0.0013750007298104269, 0.0014063674832404168, 0.0014377342366704085, 0.0014691009901003985, 0.0015004677435303884, 0.0015318344969603801, 0.00156320125039037, 0.00159456800382036, 0.0016259347572503517, 0.0016573015106803434, 0.0016886682641103334, 0.0017200350175403233, 0.0017514017709703133, 0.001782768524400305, 0.0018141352778302967, 0.0018455020312602866, 0.0018768687846902766, 0.0019082355381202683, 0.0019396022915502582, 0.001970969044980248, 0.00200233579841024, 0.00203370255184023, 0.0020650693052702215, 0.0020964360587002115])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_c600e9447d3048fe9cceca63ab102744.x = d3.scale.linear()
              .domain([-0.013555573902865124, 0.0020964360587002115])
              .range([0, 400]);

    color_map_c600e9447d3048fe9cceca63ab102744.legend = L.control({position: 'topright'});
    color_map_c600e9447d3048fe9cceca63ab102744.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_c600e9447d3048fe9cceca63ab102744.legend.addTo(map_bf0ed8fe0ce84567bf34025ca96fed82);

    color_map_c600e9447d3048fe9cceca63ab102744.xAxis = d3.svg.axis()
        .scale(color_map_c600e9447d3048fe9cceca63ab102744.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-0.013555573902865124, -0.010946905575937568, -0.008338237249010012, -0.005729568922082456, -0.0031209005951549004, -0.0005122322682273445, 0.0020964360587002098]);

    color_map_c600e9447d3048fe9cceca63ab102744.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_c600e9447d3048fe9cceca63ab102744.g = color_map_c600e9447d3048fe9cceca63ab102744.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_c600e9447d3048fe9cceca63ab102744.g.selectAll("rect")
        .data(color_map_c600e9447d3048fe9cceca63ab102744.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_c600e9447d3048fe9cceca63ab102744.x(color_map_c600e9447d3048fe9cceca63ab102744.color.domain()[i - 1]) : color_map_c600e9447d3048fe9cceca63ab102744.x.range()[0],
            x1: i < color_map_c600e9447d3048fe9cceca63ab102744.color.domain().length ? color_map_c600e9447d3048fe9cceca63ab102744.x(color_map_c600e9447d3048fe9cceca63ab102744.color.domain()[i]) : color_map_c600e9447d3048fe9cceca63ab102744.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_c600e9447d3048fe9cceca63ab102744.g.call(color_map_c600e9447d3048fe9cceca63ab102744.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('45_13_ADELSON PEREIRA GUEDES');

