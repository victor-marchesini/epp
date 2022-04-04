    
            var map_d17a5434263145d5a8f67e33cc2368ff = L.map(
                "map_d17a5434263145d5a8f67e33cc2368ff",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_6c043eb554f6495e8bfa981f4a5987e8 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_d17a5434263145d5a8f67e33cc2368ff);
        
    
            var choropleth_6a3d1edf4a364727a4db2ab4c9fcdb14 = L.featureGroup(
                {}
            ).addTo(map_d17a5434263145d5a8f67e33cc2368ff);
        
    
        function geo_json_1cdb9fa45cb34b3fb921098eb1ccf503_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 348: case 349: case 342: case 336: case 358: case 367: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 412: case 325: case 424: case 438: case 417: case 335: case 472: case 403: case 363: case 392: case 343: case 383: case 396: case 427: case 432: case 411: case 397: case 395: case 371: case 373: case 359: case 398: case 346: case 394: case 386: case 379: case 372: case 334: case 326: case 360: case 454: case 430: case 409: case 461: case 391: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 434: case 449: case 447: case 462: case 456: case 455: case 444: case 426: case 419: case 415: case 408: case 404: case 339: case 433: case 445: case 399: case 471: case 477: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 437: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 453: case 473: case 436: case 446: case 364: case 354: case 330: case 459: case 429: case 402: case 485: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 467: case 466: case 442: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_1cdb9fa45cb34b3fb921098eb1ccf503_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_1cdb9fa45cb34b3fb921098eb1ccf503 = L.geoJson(null, {
                onEachFeature: geo_json_1cdb9fa45cb34b3fb921098eb1ccf503_onEachFeature,
            
                style: geo_json_1cdb9fa45cb34b3fb921098eb1ccf503_styler,
        });

        function geo_json_1cdb9fa45cb34b3fb921098eb1ccf503_add (data) {
            geo_json_1cdb9fa45cb34b3fb921098eb1ccf503
                .addData(data)
                .addTo(choropleth_6a3d1edf4a364727a4db2ab4c9fcdb14);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_1cdb9fa45cb34b3fb921098eb1ccf503_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_89e0fdef687742e5a8bf8d9357598b1d = {};

    
    color_map_89e0fdef687742e5a8bf8d9357598b1d.color = d3.scale.threshold()
              .domain([0.00016249593760155997, 0.00017454861871371428, 0.00018660129982586858, 0.0001986539809380229, 0.0002107066620501772, 0.0002227593431623315, 0.00023481202427448584, 0.0002468647053866401, 0.00025891738649879445, 0.00027097006761094873, 0.00028302274872310306, 0.00029507542983525734, 0.0003071281109474117, 0.000319180792059566, 0.0003312334731717203, 0.00034328615428387457, 0.0003553388353960289, 0.00036739151650818324, 0.0003794441976203375, 0.00039149687873249185, 0.00040354955984464613, 0.00041560224095680046, 0.0004276549220689548, 0.000439707603181109, 0.00045176028429326335, 0.0004638129654054177, 0.000475865646517572, 0.00048791832762972625, 0.0004999710087418806, 0.0005120236898540349, 0.0005240763709661892, 0.0005361290520783436, 0.0005481817331904978, 0.0005602344143026521, 0.0005722870954148065, 0.0005843397765269607, 0.000596392457639115, 0.0006084451387512694, 0.0006204978198634237, 0.000632550500975578, 0.0006446031820877323, 0.0006566558631998866, 0.000668708544312041, 0.0006807612254241953, 0.0006928139065363496, 0.0007048665876485039, 0.0007169192687606581, 0.0007289719498728125, 0.0007410246309849668, 0.0007530773120971212, 0.0007651299932092754, 0.0007771826743214297, 0.000789235355433584, 0.0008012880365457383, 0.0008133407176578926, 0.0008253933987700469, 0.0008374460798822013, 0.0008494987609943556, 0.0008615514421065099, 0.0008736041232186643, 0.0008856568043308185, 0.0008977094854429728, 0.0009097621665551272, 0.0009218148476672814, 0.0009338675287794357, 0.00094592020989159, 0.0009579728910037444, 0.0009700255721158986, 0.0009820782532280528, 0.0009941309343402072, 0.0010061836154523615, 0.0010182362965645158, 0.0010302889776766702, 0.0010423416587888245, 0.0010543943399009788, 0.0010664470210131332, 0.0010784997021252875, 0.0010905523832374416, 0.001102605064349596, 0.0011146577454617503, 0.0011267104265739046, 0.001138763107686059, 0.001150815788798213, 0.0011628684699103674, 0.001174921151022522, 0.001186973832134676, 0.0011990265132468304, 0.0012110791943589847, 0.001223131875471139, 0.0012351845565832932, 0.0012472372376954477, 0.0012592899188076019, 0.0012713425999197562, 0.0012833952810319105, 0.0012954479621440649, 0.001307500643256219, 0.0013195533243683735, 0.0013316060054805279, 0.0013436586865926822, 0.0013557113677048365, 0.0013677640488169906, 0.0013798167299291452, 0.0013918694110412993, 0.0014039220921534536, 0.001415974773265608, 0.0014280274543777623, 0.0014400801354899164, 0.001452132816602071, 0.001464185497714225, 0.0014762381788263794, 0.0014882908599385338, 0.001500343541050688, 0.0015123962221628424, 0.0015244489032749968, 0.001536501584387151, 0.0015485542654993054, 0.0015606069466114598, 0.0015726596277236139, 0.0015847123088357684, 0.0015967649899479225, 0.0016088176710600769, 0.0016208703521722312, 0.0016329230332843855, 0.0016449757143965397, 0.0016570283955086942, 0.0016690810766208483, 0.0016811337577330027, 0.001693186438845157, 0.0017052391199573113, 0.0017172918010694657, 0.00172934448218162, 0.0017413971632937743, 0.0017534498444059287, 0.001765502525518083, 0.0017775552066302371, 0.0017896078877423917, 0.0018016605688545458, 0.0018137132499667001, 0.0018257659310788545, 0.0018378186121910088, 0.001849871293303163, 0.0018619239744153175, 0.0018739766555274716, 0.001886029336639626, 0.0018980820177517802, 0.0019101346988639346, 0.001922187379976089, 0.0019342400610882432, 0.0019462927422003976, 0.001958345423312552, 0.0019703981044247062, 0.0019824507855368606, 0.001994503466649015, 0.0020065561477611692, 0.0020186088288733236, 0.002030661509985478, 0.0020427141910976322, 0.002054766872209786, 0.002066819553321941, 0.002078872234434095, 0.002090924915546249, 0.002102977596658404, 0.002115030277770558, 0.0021270829588827126, 0.0021391356399948665, 0.0021511883211070212, 0.002163241002219175, 0.0021752936833313295, 0.0021873463644434842, 0.002199399045555638, 0.0022114517266677925, 0.002223504407779947, 0.002235557088892101, 0.0022476097700042555, 0.00225966245111641, 0.0022717151322285637, 0.0022837678133407185, 0.002295820494452873, 0.0023078731755650267, 0.0023199258566771815, 0.002331978537789336, 0.0023440312189014897, 0.002356083900013644, 0.002368136581125799, 0.0023801892622379527, 0.002392241943350107, 0.0024042946244622614, 0.0024163473055744157, 0.00242839998668657, 0.0024404526677987244, 0.0024525053489108783, 0.002464558030023033, 0.0024766107111351874, 0.0024886633922473417, 0.002500716073359496, 0.0025127687544716504, 0.0025248214355838047, 0.0025368741166959586, 0.0025489267978081134, 0.0025609794789202677, 0.0025730321600324216, 0.002585084841144576, 0.0025971375222567307, 0.0026091902033688846, 0.002621242884481039, 0.0026332955655931933, 0.0026453482467053476, 0.002657400927817502, 0.0026694536089296563, 0.0026815062900418106, 0.002693558971153965, 0.0027056116522661193, 0.002717664333378273, 0.002729717014490428, 0.0027417696956025823, 0.002753822376714736, 0.0027658750578268905, 0.0027779277389390453, 0.002789980420051199, 0.0028020331011633535, 0.002814085782275508, 0.002826138463387662, 0.0028381911444998165, 0.002850243825611971, 0.002862296506724125, 0.0028743491878362795, 0.002886401868948434, 0.002898454550060588, 0.0029105072311727425, 0.002922559912284897, 0.002934612593397051, 0.002946665274509205, 0.00295871795562136, 0.002970770636733514, 0.002982823317845668, 0.0029948759989578224, 0.003006928680069977, 0.003018981361182131, 0.0030310340422942854, 0.0030430867234064398, 0.003055139404518594, 0.0030671920856307484, 0.0030792447667429028, 0.003091297447855057, 0.0031033501289672114, 0.0031154028100793658, 0.0031274554911915197, 0.0031395081723036744, 0.0031515608534158288, 0.0031636135345279827, 0.003175666215640137, 0.0031877188967522918, 0.0031997715778644457, 0.0032118242589766, 0.0032238769400887543, 0.0032359296212009087, 0.003247982302313063, 0.0032600349834252173, 0.0032720876645373717, 0.003284140345649526, 0.0032961930267616803, 0.0033082457078738342, 0.003320298388985989, 0.0033323510700981433, 0.0033444037512102977, 0.0033564564323224516, 0.0033685091134346063, 0.0033805617945467607, 0.0033926144756589146, 0.003404667156771069, 0.0034167198378832237, 0.0034287725189953776, 0.003440825200107532, 0.0034528778812196867, 0.0034649305623318406, 0.003476983243443995, 0.0034890359245561492, 0.0035010886056683036, 0.003513141286780458, 0.0035251939678926122, 0.003537246649004766, 0.003549299330116921, 0.0035613520112290752, 0.003573404692341229, 0.0035854573734533835, 0.0035975100545655382, 0.003609562735677692, 0.0036216154167898465, 0.003633668097902001, 0.003645720779014155, 0.0036577734601263095, 0.003669826141238464, 0.003681878822350618, 0.0036939315034627725, 0.003705984184574927, 0.0037180368656870807, 0.0037300895467992355, 0.00374214222791139, 0.003754194909023544, 0.003766247590135698, 0.003778300271247853, 0.003790352952360007, 0.003802405633472161, 0.0038144583145843154, 0.00382651099569647, 0.003838563676808624, 0.0038506163579207784, 0.003862669039032933, 0.003874721720145087, 0.0038867744012572414, 0.0038988270823693957, 0.00391087976348155, 0.003922932444593704, 0.003934985125705858, 0.003947037806818012, 0.003959090487930167, 0.003971143169042322, 0.003983195850154476, 0.0039952485312666295, 0.004007301212378784, 0.004019353893490938, 0.004031406574603093, 0.004043459255715248, 0.004055511936827402, 0.0040675646179395555, 0.00407961729905171, 0.004091669980163865, 0.004103722661276019, 0.004115775342388173, 0.004127828023500328, 0.004139880704612482, 0.004151933385724636, 0.00416398606683679, 0.004176038747948945, 0.004188091429061099, 0.004200144110173254, 0.004212196791285408, 0.004224249472397561, 0.004236302153509716, 0.004248354834621871, 0.004260407515734025, 0.00427246019684618, 0.0042845128779583335, 0.004296565559070487, 0.004308618240182642, 0.004320670921294796, 0.004332723602406951, 0.004344776283519106, 0.0043568289646312595, 0.004368881645743414, 0.004380934326855567, 0.004392987007967722, 0.004405039689079877, 0.004417092370192031, 0.0044291450513041855, 0.00444119773241634, 0.004453250413528493, 0.004465303094640648, 0.004477355775752803, 0.004489408456864957, 0.0045014611379771115, 0.004513513819089265, 0.004525566500201419, 0.004537619181313574, 0.004549671862425728, 0.004561724543537883, 0.0045737772246500375, 0.004585829905762191, 0.004597882586874345, 0.0046099352679865, 0.004621987949098654, 0.004634040630210809, 0.004646093311322963, 0.004658145992435117, 0.004670198673547271, 0.004682251354659425, 0.00469430403577158, 0.004706356716883735, 0.004718409397995889, 0.004730462079108043, 0.0047425147602201964, 0.004754567441332351, 0.004766620122444506, 0.00477867280355666, 0.004790725484668815, 0.004802778165780969, 0.004814830846893123, 0.004826883528005277, 0.004838936209117432, 0.004850988890229586, 0.004863041571341741, 0.0048750942524538945, 0.004887146933566049, 0.004899199614678203, 0.004911252295790357, 0.004923304976902512, 0.004935357658014667, 0.0049474103391268206, 0.004959463020238975, 0.004971515701351128, 0.004983568382463283, 0.004995621063575438, 0.005007673744687592, 0.0050197264257997466, 0.005031779106911901, 0.005043831788024054, 0.005055884469136209, 0.005067937150248364, 0.005079989831360518, 0.0050920425124726726, 0.0051040951935848265, 0.00511614787469698, 0.005128200555809135, 0.005140253236921289, 0.005152305918033444, 0.0051643585991455986, 0.0051764112802577525, 0.005188463961369907, 0.005200516642482061, 0.005212569323594215, 0.00522462200470637, 0.005236674685818524, 0.0052487273669306785, 0.005260780048042833, 0.005272832729154986, 0.005284885410267141, 0.005296938091379296, 0.00530899077249145, 0.0053210434536036045, 0.005333096134715758, 0.005345148815827912, 0.005357201496940067, 0.005369254178052221, 0.005381306859164376, 0.0053933595402765305, 0.005405412221388684, 0.005417464902500838, 0.005429517583612993, 0.005441570264725147, 0.005453622945837302, 0.005465675626949456, 0.00547772830806161, 0.005489780989173764, 0.005501833670285918, 0.005513886351398073, 0.005525939032510228, 0.005537991713622382, 0.005550044394734536, 0.00556209707584669, 0.005574149756958844, 0.005586202438070999, 0.005598255119183153, 0.005610307800295308, 0.005622360481407462, 0.005634413162519616, 0.00564646584363177, 0.005658518524743925, 0.005670571205856079, 0.005682623886968234, 0.0056946765680803875, 0.005706729249192542, 0.005718781930304696, 0.00573083461141685, 0.005742887292529005, 0.00575493997364116, 0.0057669926547533135, 0.005779045335865468, 0.005791098016977622, 0.005803150698089776, 0.005815203379201931, 0.005827256060314085, 0.0058393087414262395, 0.005851361422538394, 0.005863414103650547, 0.005875466784762702, 0.005887519465874857, 0.005899572146987011, 0.0059116248280991655, 0.005923677509211319, 0.005935730190323473, 0.005947782871435628, 0.005959835552547782, 0.005971888233659937, 0.0059839409147720915, 0.005995993595884245, 0.006008046276996399, 0.006020098958108554, 0.006032151639220708, 0.006044204320332863, 0.006056257001445017, 0.006068309682557171, 0.006080362363669326, 0.006092415044781479, 0.006104467725893634, 0.006116520407005789, 0.006128573088117943, 0.006140625769230097, 0.006152678450342252, 0.006164731131454405, 0.00617678381256656])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_89e0fdef687742e5a8bf8d9357598b1d.x = d3.scale.linear()
              .domain([0.00016249593760155997, 0.00617678381256656])
              .range([0, 400]);

    color_map_89e0fdef687742e5a8bf8d9357598b1d.legend = L.control({position: 'topright'});
    color_map_89e0fdef687742e5a8bf8d9357598b1d.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_89e0fdef687742e5a8bf8d9357598b1d.legend.addTo(map_d17a5434263145d5a8f67e33cc2368ff);

    color_map_89e0fdef687742e5a8bf8d9357598b1d.xAxis = d3.svg.axis()
        .scale(color_map_89e0fdef687742e5a8bf8d9357598b1d.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.00016249593760155997, 0.0011648772500957266, 0.0021672585625898935, 0.00316963987508406, 0.004172021187578227, 0.005174402500072394, 0.00617678381256656]);

    color_map_89e0fdef687742e5a8bf8d9357598b1d.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_89e0fdef687742e5a8bf8d9357598b1d.g = color_map_89e0fdef687742e5a8bf8d9357598b1d.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_89e0fdef687742e5a8bf8d9357598b1d.g.selectAll("rect")
        .data(color_map_89e0fdef687742e5a8bf8d9357598b1d.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_89e0fdef687742e5a8bf8d9357598b1d.x(color_map_89e0fdef687742e5a8bf8d9357598b1d.color.domain()[i - 1]) : color_map_89e0fdef687742e5a8bf8d9357598b1d.x.range()[0],
            x1: i < color_map_89e0fdef687742e5a8bf8d9357598b1d.color.domain().length ? color_map_89e0fdef687742e5a8bf8d9357598b1d.x(color_map_89e0fdef687742e5a8bf8d9357598b1d.color.domain()[i]) : color_map_89e0fdef687742e5a8bf8d9357598b1d.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_89e0fdef687742e5a8bf8d9357598b1d.g.call(color_map_89e0fdef687742e5a8bf8d9357598b1d.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('27_40_ALZIMAR ANDRADE SILVA');

