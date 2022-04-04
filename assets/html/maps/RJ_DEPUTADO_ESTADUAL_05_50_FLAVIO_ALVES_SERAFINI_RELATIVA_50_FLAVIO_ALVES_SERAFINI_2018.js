    
            var map_1a5a2f9e993d458887d107b45a273fa8 = L.map(
                "map_1a5a2f9e993d458887d107b45a273fa8",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_3566f0445a3b485a8834697890ff77b9 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1a5a2f9e993d458887d107b45a273fa8);
        
    
            var choropleth_f7c1b7684a2242cf88dc4431bf87fdf1 = L.featureGroup(
                {}
            ).addTo(map_1a5a2f9e993d458887d107b45a273fa8);
        
    
        function geo_json_6a669810df4b48a1837cf2724ab0b316_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 423: case 431: case 349: case 342: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_6a669810df4b48a1837cf2724ab0b316_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_6a669810df4b48a1837cf2724ab0b316 = L.geoJson(null, {
                onEachFeature: geo_json_6a669810df4b48a1837cf2724ab0b316_onEachFeature,
            
                style: geo_json_6a669810df4b48a1837cf2724ab0b316_styler,
        });

        function geo_json_6a669810df4b48a1837cf2724ab0b316_add (data) {
            geo_json_6a669810df4b48a1837cf2724ab0b316
                .addData(data)
                .addTo(choropleth_f7c1b7684a2242cf88dc4431bf87fdf1);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_6a669810df4b48a1837cf2724ab0b316_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_02969c6fcd4949af8e35ffa014985c8c = {};

    
    color_map_02969c6fcd4949af8e35ffa014985c8c.color = d3.scale.threshold()
              .domain([0.0, 0.00024982640325534375, 0.0004996528065106875, 0.0007494792097660312, 0.000999305613021375, 0.0012491320162767187, 0.0014989584195320624, 0.001748784822787406, 0.00199861122604275, 0.0022484376292980935, 0.0024982640325534374, 0.002748090435808781, 0.002997916839064125, 0.0032477432423194683, 0.003497569645574812, 0.0037473960488301557, 0.0039972224520855, 0.004247048855340844, 0.004496875258596187, 0.004746701661851531, 0.004996528065106875, 0.005246354468362219, 0.005496180871617562, 0.005746007274872906, 0.00599583367812825, 0.0062456600813835935, 0.006495486484638937, 0.006745312887894281, 0.006995139291149624, 0.007244965694404968, 0.007494792097660311, 0.007744618500915656, 0.007994444904171, 0.008244271307426342, 0.008494097710681688, 0.00874392411393703, 0.008993750517192374, 0.009243576920447718, 0.009493403323703062, 0.009743229726958406, 0.00999305613021375, 0.010242882533469092, 0.010492708936724437, 0.010742535339979781, 0.010992361743235124, 0.011242188146490468, 0.011492014549745811, 0.011741840953001155, 0.0119916673562565, 0.012241493759511841, 0.012491320162767187, 0.012741146566022531, 0.012990972969277873, 0.013240799372533217, 0.013490625775788563, 0.013740452179043905, 0.013990278582299249, 0.014240104985554593, 0.014489931388809937, 0.01473975779206528, 0.014989584195320623, 0.015239410598575967, 0.015489237001831312, 0.015739063405086653, 0.015988889808342, 0.01623871621159734, 0.016488542614852685, 0.01673836901810803, 0.016988195421363376, 0.01723802182461872, 0.01748784822787406, 0.017737674631129404, 0.017987501034384748, 0.018237327437640092, 0.018487153840895436, 0.01873698024415078, 0.018986806647406124, 0.019236633050661468, 0.01948645945391681, 0.019736285857172155, 0.0199861122604275, 0.02023593866368284, 0.020485765066938184, 0.020735591470193528, 0.020985417873448875, 0.02123524427670422, 0.021485070679959563, 0.021734897083214903, 0.021984723486470247, 0.02223454988972559, 0.022484376292980935, 0.02273420269623628, 0.022984029099491623, 0.023233855502746967, 0.02348368190600231, 0.023733508309257655, 0.023983334712513, 0.024233161115768342, 0.024482987519023683, 0.024732813922279027, 0.024982640325534374, 0.025232466728789718, 0.025482293132045062, 0.025732119535300402, 0.025981945938555746, 0.02623177234181109, 0.026481598745066434, 0.026731425148321778, 0.026981251551577125, 0.027231077954832466, 0.02748090435808781, 0.027730730761343154, 0.027980557164598498, 0.02823038356785384, 0.028480209971109186, 0.028730036374364526, 0.028979862777619873, 0.029229689180875217, 0.02947951558413056, 0.029729341987385905, 0.029979168390641246, 0.03022899479389659, 0.030478821197151933, 0.030728647600407277, 0.030978474003662625, 0.03122830040691797, 0.031478126810173306, 0.03172795321342865, 0.031977779616684, 0.03222760601993934, 0.03247743242319468, 0.03272725882645003, 0.03297708522970537, 0.033226911632960716, 0.03347673803621606, 0.0337265644394714, 0.03397639084272675, 0.03422621724598209, 0.03447604364923744, 0.03472587005249278, 0.03497569645574812, 0.03522552285900347, 0.03547534926225881, 0.035725175665514156, 0.035975002068769496, 0.036224828472024836, 0.036474654875280184, 0.036724481278535524, 0.03697430768179087, 0.03722413408504621, 0.03747396048830156, 0.0377237868915569, 0.03797361329481225, 0.038223439698067595, 0.038473266101322935, 0.03872309250457828, 0.03897291890783362, 0.03922274531108896, 0.03947257171434431, 0.03972239811759965, 0.039972224520855, 0.04022205092411034, 0.04047187732736568, 0.04072170373062103, 0.04097153013387637, 0.041221356537131715, 0.041471182940387055, 0.041721009343642396, 0.04197083574689775, 0.04222066215015309, 0.04247048855340844, 0.04272031495666378, 0.042970141359919126, 0.043219967763174466, 0.04346979416642981, 0.043719620569685154, 0.043969446972940494, 0.04421927337619584, 0.04446909977945118, 0.04471892618270652, 0.04496875258596187, 0.04521857898921721, 0.04546840539247256, 0.0457182317957279, 0.045968058198983246, 0.04621788460223859, 0.046467711005493934, 0.04671753740874928, 0.04696736381200462, 0.04721719021525997, 0.04746701661851531, 0.04771684302177065, 0.047966669425026, 0.04821649582828134, 0.048466322231536685, 0.048716148634792025, 0.048965975038047366, 0.04921580144130271, 0.049465627844558054, 0.04971545424781341, 0.04996528065106875, 0.05021510705432409, 0.050464933457579436, 0.05071475986083478, 0.050964586264090124, 0.051214412667345464, 0.051464239070600805, 0.05171406547385615, 0.05196389187711149, 0.05221371828036684, 0.05246354468362218, 0.05271337108687753, 0.05296319749013287, 0.05321302389338821, 0.053462850296643556, 0.0537126766998989, 0.05396250310315425, 0.05421232950640959, 0.05446215590966493, 0.05471198231292028, 0.05496180871617562, 0.05521163511943097, 0.05546146152268631, 0.05571128792594165, 0.055961114329196995, 0.056210940732452336, 0.05646076713570768, 0.056710593538963024, 0.05696041994221837, 0.05721024634547371, 0.05746007274872905, 0.057709899151984406, 0.05795972555523975, 0.058209551958495094, 0.058459378361750435, 0.058709204765005775, 0.05895903116826112, 0.05920885757151646, 0.05945868397477181, 0.05970851037802715, 0.05995833678128249, 0.06020816318453784, 0.06045798958779318, 0.060707815991048526, 0.06095764239430387, 0.06120746879755921, 0.061457295200814555, 0.0617071216040699, 0.06195694800732525, 0.06220677441058059, 0.06245660081383594, 0.06270642721709127, 0.06295625362034661, 0.06320608002360197, 0.0634559064268573, 0.06370573283011266, 0.063955559233368, 0.06420538563662334, 0.06445521203987868, 0.06470503844313402, 0.06495486484638936, 0.06520469124964472, 0.06545451765290006, 0.0657043440561554, 0.06595417045941074, 0.06620399686266608, 0.06645382326592143, 0.06670364966917677, 0.06695347607243211, 0.06720330247568745, 0.0674531288789428, 0.06770295528219816, 0.0679527816854535, 0.06820260808870884, 0.06845243449196418, 0.06870226089521952, 0.06895208729847488, 0.06920191370173022, 0.06945174010498556, 0.0697015665082409, 0.06995139291149624, 0.0702012193147516, 0.07045104571800694, 0.07070087212126228, 0.07095069852451762, 0.07120052492777296, 0.07145035133102831, 0.07170017773428365, 0.07195000413753899, 0.07219983054079433, 0.07244965694404967, 0.07269948334730503, 0.07294930975056037, 0.07319913615381571, 0.07344896255707105, 0.07369878896032639, 0.07394861536358174, 0.07419844176683708, 0.07444826817009242, 0.07469809457334776, 0.07494792097660312, 0.07519774737985846, 0.0754475737831138, 0.07569740018636915, 0.0759472265896245, 0.07619705299287985, 0.07644687939613519, 0.07669670579939053, 0.07694653220264587, 0.07719635860590121, 0.07744618500915657, 0.0776960114124119, 0.07794583781566725, 0.07819566421892259, 0.07844549062217793, 0.07869531702543328, 0.07894514342868862, 0.07919496983194396, 0.0794447962351993, 0.07969462263845464, 0.07994444904171, 0.08019427544496534, 0.08044410184822068, 0.08069392825147602, 0.08094375465473136, 0.08119358105798671, 0.08144340746124205, 0.0816932338644974, 0.08194306026775273, 0.08219288667100808, 0.08244271307426343, 0.08269253947751877, 0.08294236588077411, 0.08319219228402945, 0.08344201868728479, 0.08369184509054016, 0.0839416714937955, 0.08419149789705084, 0.08444132430030618, 0.08469115070356154, 0.08494097710681688, 0.08519080351007222, 0.08544062991332756, 0.0856904563165829, 0.08594028271983825, 0.08619010912309359, 0.08643993552634893, 0.08668976192960427, 0.08693958833285961, 0.08718941473611497, 0.08743924113937031, 0.08768906754262565, 0.08793889394588099, 0.08818872034913633, 0.08843854675239168, 0.08868837315564702, 0.08893819955890236, 0.0891880259621577, 0.08943785236541305, 0.0896876787686684, 0.08993750517192374, 0.09018733157517908, 0.09043715797843442, 0.09068698438168976, 0.09093681078494512, 0.09118663718820046, 0.0914364635914558, 0.09168628999471115, 0.09193611639796649, 0.09218594280122185, 0.09243576920447719, 0.09268559560773253, 0.09293542201098787, 0.09318524841424321, 0.09343507481749856, 0.0936849012207539, 0.09393472762400924, 0.09418455402726458, 0.09443438043051994, 0.09468420683377528, 0.09493403323703062, 0.09518385964028596, 0.0954336860435413, 0.09568351244679665, 0.095933338850052, 0.09618316525330733, 0.09643299165656267, 0.09668281805981802, 0.09693264446307337, 0.09718247086632871, 0.09743229726958405, 0.09768212367283939, 0.09793195007609473, 0.09818177647935009, 0.09843160288260543, 0.09868142928586077, 0.09893125568911611, 0.09918108209237145, 0.09943090849562682, 0.09968073489888216, 0.0999305613021375, 0.10018038770539284, 0.10043021410864818, 0.10068004051190353, 0.10092986691515887, 0.10117969331841421, 0.10142951972166955, 0.1016793461249249, 0.10192917252818025, 0.10217899893143559, 0.10242882533469093, 0.10267865173794627, 0.10292847814120161, 0.10317830454445696, 0.1034281309477123, 0.10367795735096764, 0.10392778375422299, 0.10417761015747834, 0.10442743656073368, 0.10467726296398902, 0.10492708936724436, 0.1051769157704997, 0.10542674217375506, 0.1056765685770104, 0.10592639498026574, 0.10617622138352108, 0.10642604778677642, 0.10667587419003177, 0.10692570059328711, 0.10717552699654245, 0.1074253533997978, 0.10767517980305315, 0.1079250062063085, 0.10817483260956384, 0.10842465901281918, 0.10867448541607452, 0.10892431181932986, 0.10917413822258522, 0.10942396462584056, 0.1096737910290959, 0.10992361743235124, 0.11017344383560658, 0.11042327023886193, 0.11067309664211727, 0.11092292304537262, 0.11117274944862796, 0.1114225758518833, 0.11167240225513865, 0.11192222865839399, 0.11217205506164933, 0.11242188146490467, 0.11267170786816001, 0.11292153427141537, 0.1131713606746707, 0.11342118707792605, 0.11367101348118139, 0.11392083988443674, 0.11417066628769208, 0.11442049269094742, 0.11467031909420276, 0.1149201454974581, 0.11516997190071346, 0.11541979830396881, 0.11566962470722415, 0.1159194511104795, 0.11616927751373483, 0.11641910391699019, 0.11666893032024553, 0.11691875672350087, 0.11716858312675621, 0.11741840953001155, 0.1176682359332669, 0.11791806233652224, 0.11816788873977759, 0.11841771514303293, 0.11866754154628827, 0.11891736794954362, 0.11916719435279896, 0.1194170207560543, 0.11966684715930964, 0.11991667356256498, 0.12016649996582034, 0.12041632636907568, 0.12066615277233102, 0.12091597917558636, 0.1211658055788417, 0.12141563198209705, 0.12166545838535239, 0.12191528478860773, 0.12216511119186307, 0.12241493759511841, 0.12266476399837377, 0.12291459040162911, 0.12316441680488445, 0.1234142432081398, 0.12366406961139516, 0.1239138960146505, 0.12416372241790584, 0.12441354882116118, 0.12466337522441652])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_02969c6fcd4949af8e35ffa014985c8c.x = d3.scale.linear()
              .domain([0.0, 0.12466337522441652])
              .range([0, 400]);

    color_map_02969c6fcd4949af8e35ffa014985c8c.legend = L.control({position: 'topright'});
    color_map_02969c6fcd4949af8e35ffa014985c8c.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_02969c6fcd4949af8e35ffa014985c8c.legend.addTo(map_1a5a2f9e993d458887d107b45a273fa8);

    color_map_02969c6fcd4949af8e35ffa014985c8c.xAxis = d3.svg.axis()
        .scale(color_map_02969c6fcd4949af8e35ffa014985c8c.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.02077722920406942, 0.04155445840813884, 0.06233168761220825, 0.08310891681627768, 0.1038861460203471, 0.12466337522441652]);

    color_map_02969c6fcd4949af8e35ffa014985c8c.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_02969c6fcd4949af8e35ffa014985c8c.g = color_map_02969c6fcd4949af8e35ffa014985c8c.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_02969c6fcd4949af8e35ffa014985c8c.g.selectAll("rect")
        .data(color_map_02969c6fcd4949af8e35ffa014985c8c.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_02969c6fcd4949af8e35ffa014985c8c.x(color_map_02969c6fcd4949af8e35ffa014985c8c.color.domain()[i - 1]) : color_map_02969c6fcd4949af8e35ffa014985c8c.x.range()[0],
            x1: i < color_map_02969c6fcd4949af8e35ffa014985c8c.color.domain().length ? color_map_02969c6fcd4949af8e35ffa014985c8c.x(color_map_02969c6fcd4949af8e35ffa014985c8c.color.domain()[i]) : color_map_02969c6fcd4949af8e35ffa014985c8c.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_02969c6fcd4949af8e35ffa014985c8c.g.call(color_map_02969c6fcd4949af8e35ffa014985c8c.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('05_50_FLAVIO ALVES SERAFINI');

