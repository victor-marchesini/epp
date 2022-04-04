    
            var map_66ec0210ef51454782e5fb2d03588236 = L.map(
                "map_66ec0210ef51454782e5fb2d03588236",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_55fd304899a34a24b972b34e9701bdf3 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_66ec0210ef51454782e5fb2d03588236);
        
    
            var choropleth_f75376a19b334bf18d5efd3d4be457e8 = L.featureGroup(
                {}
            ).addTo(map_66ec0210ef51454782e5fb2d03588236);
        
    
        function geo_json_96fb75d0c9b34dcc83a8d9cfd1f4ced7_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 420: case 482: case 443: case 434: case 325: case 452: case 353: case 393: case 423: case 431: case 404: case 349: case 342: case 336: case 331: case 330: case 367: case 460: case 475: case 357: case 481: case 479: case 366: case 402: case 341: case 405: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 457: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_96fb75d0c9b34dcc83a8d9cfd1f4ced7_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_96fb75d0c9b34dcc83a8d9cfd1f4ced7 = L.geoJson(null, {
                onEachFeature: geo_json_96fb75d0c9b34dcc83a8d9cfd1f4ced7_onEachFeature,
            
                style: geo_json_96fb75d0c9b34dcc83a8d9cfd1f4ced7_styler,
        });

        function geo_json_96fb75d0c9b34dcc83a8d9cfd1f4ced7_add (data) {
            geo_json_96fb75d0c9b34dcc83a8d9cfd1f4ced7
                .addData(data)
                .addTo(choropleth_f75376a19b334bf18d5efd3d4be457e8);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_96fb75d0c9b34dcc83a8d9cfd1f4ced7_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_a6dbeb6166954e0a9ab4dcacbb1070fa = {};

    
    color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.color = d3.scale.threshold()
              .domain([5.531279384921732e-05, 0.00010776634138369307, 0.0001602198889181688, 0.00021267343645264456, 0.00026512698398712027, 0.00031758053152159603, 0.0003700340790560718, 0.00042248762659054755, 0.00047494117412502326, 0.000527394721659499, 0.0005798482691939747, 0.0006323018167284505, 0.0006847553642629262, 0.000737208911797402, 0.0007896624593318778, 0.0008421160068663535, 0.0008945695544008292, 0.000947023101935305, 0.0009994766494697807, 0.0010519301970042564, 0.0011043837445387321, 0.0011568372920732078, 0.0012092908396076837, 0.0012617443871421594, 0.0013141979346766352, 0.0013666514822111109, 0.0014191050297455866, 0.0014715585772800625, 0.0015240121248145382, 0.0015764656723490137, 0.0016289192198834896, 0.0016813727674179655, 0.001733826314952441, 0.0017862798624869167, 0.0018387334100213927, 0.0018911869575558684, 0.001943640505090344, 0.0019960940526248198, 0.0020485476001592955, 0.002101001147693771, 0.002153454695228247, 0.0022059082427627226, 0.0022583617902971983, 0.0023108153378316744, 0.00236326888536615, 0.0024157224329006254, 0.0024681759804351016, 0.0025206295279695773, 0.002573083075504053, 0.0026255366230385287, 0.0026779901705730044, 0.00273044371810748, 0.002782897265641956, 0.0028353508131764315, 0.0028878043607109076, 0.0029402579082453834, 0.002992711455779859, 0.0030451650033143343, 0.00309761855084881, 0.003150072098383286, 0.003202525645917762, 0.0032549791934522376, 0.0033074327409867137, 0.003359886288521189, 0.0034123398360556647, 0.0034647933835901404, 0.003517246931124616, 0.0035697004786590923, 0.003622154026193568, 0.0036746075737280432, 0.0037270611212625194, 0.003779514668796995, 0.003831968216331471, 0.0038844217638659465, 0.003936875311400422, 0.003989328858934898, 0.004041782406469374, 0.00409423595400385, 0.004146689501538325, 0.004199143049072801, 0.0042515965966072765, 0.004304050144141753, 0.004356503691676228, 0.004408957239210704, 0.004461410786745179, 0.004513864334279655, 0.0045663178818141316, 0.004618771429348607, 0.004671224976883083, 0.004723678524417558, 0.0047761320719520335, 0.00482858561948651, 0.004881039167020986, 0.004933492714555462, 0.004985946262089937, 0.005038399809624413, 0.005090853357158889, 0.005143306904693364, 0.00519576045222784, 0.005248213999762315, 0.0053006675472967914, 0.005353121094831268, 0.005405574642365743, 0.005458028189900219, 0.005510481737434694, 0.00556293528496917, 0.005615388832503646, 0.005667842380038122, 0.005720295927572598, 0.005772749475107073, 0.005825203022641549, 0.005877656570176025, 0.005930110117710501, 0.005982563665244976, 0.006035017212779451, 0.0060874707603139275, 0.006139924307848403, 0.00619237785538288, 0.006244831402917355, 0.006297284950451831, 0.0063497384979863064, 0.006402192045520782, 0.006454645593055258, 0.006507099140589733, 0.00655955268812421, 0.006612006235658685, 0.006664459783193161, 0.006716913330727637, 0.006769366878262112, 0.006821820425796588, 0.0068742739733310635, 0.006926727520865539, 0.006979181068400015, 0.007031634615934491, 0.007084088163468967, 0.0071365417110034425, 0.007188995258537919, 0.007241448806072394, 0.007293902353606869, 0.007346355901141345, 0.0073988094486758214, 0.007451262996210298, 0.007503716543744773, 0.007556170091279249, 0.007608623638813724, 0.0076610771863481995, 0.007713530733882676, 0.007765984281417151, 0.007818437828951627, 0.007870891376486104, 0.00792334492402058, 0.007975798471555055, 0.00802825201908953, 0.008080705566624007, 0.008133159114158482, 0.008185612661692957, 0.008238066209227433, 0.00829051975676191, 0.008342973304296385, 0.00839542685183086, 0.008447880399365336, 0.00850033394689981, 0.008552787494434288, 0.008605241041968763, 0.008657694589503238, 0.008710148137037714, 0.00876260168457219, 0.008815055232106666, 0.008867508779641141, 0.008919962327175618, 0.008972415874710093, 0.00902486942224457, 0.009077322969779046, 0.009129776517313521, 0.009182230064847996, 0.009234683612382472, 0.009287137159916949, 0.009339590707451424, 0.0093920442549859, 0.009444497802520374, 0.00949695135005485, 0.009549404897589327, 0.009601858445123802, 0.009654311992658277, 0.009706765540192754, 0.00975921908772723, 0.009811672635261707, 0.009864126182796182, 0.009916579730330657, 0.009969033277865132, 0.01002148682539961, 0.010073940372934085, 0.01012639392046856, 0.010178847468003035, 0.01023130101553751, 0.010283754563071987, 0.010336208110606463, 0.010388661658140938, 0.010441115205675413, 0.010493568753209889, 0.010546022300744366, 0.010598475848278843, 0.010650929395813318, 0.010703382943347793, 0.010755836490882268, 0.010808290038416745, 0.01086074358595122, 0.010913197133485696, 0.010965650681020171, 0.011018104228554646, 0.011070557776089123, 0.011123011323623599, 0.011175464871158074, 0.01122791841869255, 0.011280371966227026, 0.011332825513761502, 0.011385279061295979, 0.011437732608830454, 0.01149018615636493, 0.011542639703899406, 0.011595093251433881, 0.011647546798968357, 0.011700000346502832, 0.011752453894037307, 0.011804907441571784, 0.01185736098910626, 0.011909814536640735, 0.01196226808417521, 0.012014721631709685, 0.012067175179244162, 0.012119628726778638, 0.012172082274313113, 0.012224535821847588, 0.012276989369382065, 0.012329442916916542, 0.012381896464451017, 0.012434350011985493, 0.012486803559519968, 0.012539257107054445, 0.01259171065458892, 0.012644164202123396, 0.01269661774965787, 0.012749071297192346, 0.012801524844726823, 0.012853978392261298, 0.012906431939795774, 0.012958885487330249, 0.013011339034864724, 0.013063792582399203, 0.013116246129933678, 0.013168699677468153, 0.013221153225002629, 0.013273606772537104, 0.013326060320071581, 0.013378513867606056, 0.013430967415140532, 0.013483420962675007, 0.013535874510209482, 0.013588328057743959, 0.013640781605278434, 0.01369323515281291, 0.013745688700347385, 0.01379814224788186, 0.013850595795416337, 0.013903049342950813, 0.01395550289048529, 0.014007956438019765, 0.014060409985554242, 0.014112863533088717, 0.014165317080623192, 0.014217770628157668, 0.014270224175692143, 0.01432267772322662, 0.014375131270761095, 0.01442758481829557, 0.014480038365830046, 0.014532491913364521, 0.014584945460898998, 0.014637399008433473, 0.014689852555967949, 0.014742306103502426, 0.0147947596510369, 0.014847213198571378, 0.014899666746105853, 0.014952120293640328, 0.015004573841174804, 0.01505702738870928, 0.015109480936243756, 0.015161934483778231, 0.015214388031312706, 0.015266841578847182, 0.015319295126381659, 0.015371748673916134, 0.01542420222145061, 0.015476655768985085, 0.01552910931651956, 0.015581562864054037, 0.015634016411588514, 0.01568646995912299, 0.015738923506657464, 0.01579137705419194, 0.015843830601726415, 0.015896284149260892, 0.01594873769679537, 0.016001191244329842, 0.01605364479186432, 0.016106098339398797, 0.01615855188693327, 0.016211005434467747, 0.01626345898200222, 0.016315912529536698, 0.01636836607707117, 0.016420819624605648, 0.016473273172140125, 0.016525726719674602, 0.016578180267209076, 0.016630633814743553, 0.016683087362278026, 0.016735540909812503, 0.016787994457346977, 0.016840448004881454, 0.01689290155241593, 0.016945355099950404, 0.016997808647484885, 0.01705026219501936, 0.017102715742553835, 0.01715516929008831, 0.017207622837622786, 0.01726007638515726, 0.017312529932691736, 0.01736498348022621, 0.017417437027760687, 0.017469890575295164, 0.01752234412282964, 0.017574797670364115, 0.01762725121789859, 0.017679704765433065, 0.017732158312967542, 0.01778461186050202, 0.017837065408036493, 0.01788951895557097, 0.017941972503105443, 0.017994426050639924, 0.018046879598174397, 0.018099333145708874, 0.018151786693243348, 0.018204240240777825, 0.0182566937883123, 0.018309147335846775, 0.01836160088338125, 0.018414054430915726, 0.0184665079784502, 0.01851896152598468, 0.018571415073519157, 0.01862386862105363, 0.018676322168588107, 0.01872877571612258, 0.018781229263657058, 0.01883368281119153, 0.01888613635872601, 0.018938589906260482, 0.018991043453794963, 0.019043497001329436, 0.019095950548863913, 0.019148404096398387, 0.019200857643932864, 0.019253311191467337, 0.019305764739001814, 0.01935821828653629, 0.019410671834070765, 0.01946312538160524, 0.01951557892913972, 0.019568032476674196, 0.01962048602420867, 0.019672939571743146, 0.01972539311927762, 0.019777846666812097, 0.01983030021434657, 0.019882753761881047, 0.01993520730941552, 0.01998766085695, 0.020040114404484475, 0.020092567952018952, 0.020145021499553425, 0.020197475047087902, 0.02024992859462238, 0.020302382142156853, 0.02035483568969133, 0.020407289237225804, 0.02045974278476028, 0.020512196332294758, 0.020564649879829235, 0.020617103427363708, 0.020669556974898185, 0.02072201052243266, 0.020774464069967136, 0.02082691761750161, 0.020879371165036086, 0.02093182471257056, 0.02098427826010504, 0.021036731807639514, 0.02108918535517399, 0.021141638902708468, 0.02119409245024294, 0.02124654599777742, 0.021298999545311892, 0.02135145309284637, 0.021403906640380842, 0.02145636018791532, 0.021508813735449796, 0.021561267282984273, 0.021613720830518747, 0.021666174378053224, 0.021718627925587698, 0.021771081473122175, 0.021823535020656648, 0.021875988568191125, 0.021928442115725602, 0.021980895663260076, 0.022033349210794556, 0.02208580275832903, 0.022138256305863507, 0.02219070985339798, 0.022243163400932457, 0.02229561694846693, 0.022348070496001408, 0.02240052404353588, 0.02245297759107036, 0.022505431138604835, 0.022557884686139312, 0.022610338233673786, 0.022662791781208263, 0.02271524532874274, 0.022767698876277213, 0.02282015242381169, 0.022872605971346164, 0.02292505951888064, 0.022977513066415114, 0.023029966613949595, 0.02308242016148407, 0.023134873709018546, 0.02318732725655302, 0.023239780804087496, 0.02329223435162197, 0.023344687899156447, 0.02339714144669092, 0.023449594994225397, 0.02350204854175987, 0.02355450208929435, 0.023606955636828828, 0.0236594091843633, 0.02371186273189778, 0.023764316279432252, 0.02381676982696673, 0.023869223374501203, 0.02392167692203568, 0.023974130469570153, 0.024026584017104634, 0.024079037564639107, 0.024131491112173584, 0.024183944659708058, 0.024236398207242535, 0.02428885175477701, 0.024341305302311485, 0.02439375884984596, 0.024446212397380436, 0.024498665944914913, 0.02455111949244939, 0.024603573039983867, 0.02465602658751834, 0.024708480135052818, 0.02476093368258729, 0.024813387230121768, 0.02486584077765624, 0.02491829432519072, 0.024970747872725192, 0.025023201420259673, 0.025075654967794146, 0.025128108515328623, 0.025180562062863097, 0.025233015610397574, 0.02528546915793205, 0.025337922705466524, 0.025390376253001, 0.025442829800535475, 0.025495283348069952, 0.02554773689560443, 0.025600190443138906, 0.02565264399067338, 0.025705097538207856, 0.02575755108574233, 0.025810004633276807, 0.02586245818081128, 0.025914911728345758, 0.02596736527588023, 0.026019818823414708, 0.02607227237094919, 0.026124725918483662, 0.02617717946601814, 0.026229633013552613])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.x = d3.scale.linear()
              .domain([5.531279384921732e-05, 0.026229633013552613])
              .range([0, 400]);

    color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.legend = L.control({position: 'topright'});
    color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.legend.addTo(map_66ec0210ef51454782e5fb2d03588236);

    color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.xAxis = d3.svg.axis()
        .scale(color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.x)
        .orient("top")
        .tickSize(1)
        .tickValues([5.531279384921732e-05, 0.0044176994971331165, 0.008780086200417016, 0.013142472903700915, 0.017504859606984814, 0.021867246310268713, 0.026229633013552613]);

    color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.g = color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.g.selectAll("rect")
        .data(color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.x(color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.color.domain()[i - 1]) : color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.x.range()[0],
            x1: i < color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.color.domain().length ? color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.x(color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.color.domain()[i]) : color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.g.call(color_map_a6dbeb6166954e0a9ab4dcacbb1070fa.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('39_50_ANDERSON LUIZ ALVES DE OLIVEIRA');

