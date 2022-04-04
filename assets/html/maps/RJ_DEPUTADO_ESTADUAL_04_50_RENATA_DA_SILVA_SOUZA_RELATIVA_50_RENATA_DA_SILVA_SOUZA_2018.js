    
            var map_fef4539f3f0e4cb29b29729dfd65c09d = L.map(
                "map_fef4539f3f0e4cb29b29729dfd65c09d",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_ed38989737094e1baf480a7015200ab7 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_fef4539f3f0e4cb29b29729dfd65c09d);
        
    
            var choropleth_daa00ffe598e474090d228f04a874f41 = L.featureGroup(
                {}
            ).addTo(map_fef4539f3f0e4cb29b29729dfd65c09d);
        
    
        function geo_json_3e5ee5e2414549ea870751737a345b01_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 439: case 434: case 441: case 412: case 418: case 424: case 417: case 403: case 478: case 474: case 452: case 353: case 345: case 369: case 363: case 392: case 343: case 396: case 427: case 432: case 411: case 397: case 404: case 395: case 371: case 364: case 359: case 401: case 354: case 334: case 327: case 326: case 329: case 331: case 330: case 459: case 433: case 430: case 399: case 469: case 471: case 461: case 391: case 477: case 402: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 443: case 466: case 473: case 472: case 442: case 436: case 446: case 426: case 419: case 415: case 408: case 339: case 367: case 445: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 448: case 447: case 456: case 467: case 470: case 437: case 444: case 381: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 438: case 453: case 455: case 468: case 464: case 485: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 462: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_3e5ee5e2414549ea870751737a345b01_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_3e5ee5e2414549ea870751737a345b01 = L.geoJson(null, {
                onEachFeature: geo_json_3e5ee5e2414549ea870751737a345b01_onEachFeature,
            
                style: geo_json_3e5ee5e2414549ea870751737a345b01_styler,
        });

        function geo_json_3e5ee5e2414549ea870751737a345b01_add (data) {
            geo_json_3e5ee5e2414549ea870751737a345b01
                .addData(data)
                .addTo(choropleth_daa00ffe598e474090d228f04a874f41);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_3e5ee5e2414549ea870751737a345b01_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_3926256acba54b3ea709777af438587c = {};

    
    color_map_3926256acba54b3ea709777af438587c.color = d3.scale.threshold()
              .domain([0.0017401392111368909, 0.0018454873151610095, 0.001950835419185128, 0.0020561835232092464, 0.002161531627233365, 0.0022668797312574837, 0.0023722278352816023, 0.002477575939305721, 0.002582924043329839, 0.002688272147353958, 0.0027936202513780765, 0.0028989683554021947, 0.0030043164594263138, 0.003109664563450432, 0.0032150126674745506, 0.0033203607714986693, 0.0034257088755227875, 0.003531056979546906, 0.0036364050835710248, 0.0037417531875951434, 0.0038471012916192616, 0.00395244939564338, 0.0040577974996674985, 0.004163145603691618, 0.004268493707715737, 0.004373841811739855, 0.004479189915763973, 0.004584538019788092, 0.00468988612381221, 0.004795234227836329, 0.004900582331860448, 0.005005930435884566, 0.005111278539908684, 0.005216626643932803, 0.005321974747956921, 0.00542732285198104, 0.005532670956005159, 0.005638019060029277, 0.005743367164053396, 0.005848715268077514, 0.005954063372101632, 0.0060594114761257515, 0.00616475958014987, 0.006270107684173989, 0.006375455788198107, 0.006480803892222226, 0.006586151996246343, 0.0066915001002704625, 0.0067968482042945816, 0.0069021963083187, 0.007007544412342819, 0.007112892516366937, 0.007218240620391055, 0.0073235887244151735, 0.0074289368284392926, 0.007534284932463411, 0.00763963303648753, 0.007744981140511648, 0.007850329244535766, 0.007955677348559884, 0.008061025452584004, 0.008166373556608122, 0.00827172166063224, 0.00837706976465636, 0.008482417868680477, 0.008587765972704598, 0.008693114076728715, 0.008798462180752833, 0.008903810284776952, 0.009009158388801071, 0.009114506492825188, 0.009219854596849309, 0.009325202700873426, 0.009430550804897544, 0.009535898908921663, 0.009641247012945782, 0.009746595116969901, 0.009851943220994018, 0.009957291325018137, 0.010062639429042257, 0.010167987533066374, 0.010273335637090495, 0.010378683741114612, 0.010484031845138731, 0.010589379949162848, 0.010694728053186968, 0.010800076157211087, 0.010905424261235204, 0.011010772365259323, 0.011116120469283442, 0.011221468573307561, 0.011326816677331679, 0.011432164781355796, 0.011537512885379917, 0.011642860989404034, 0.011748209093428153, 0.011853557197452272, 0.01195890530147639, 0.012064253405500509, 0.012169601509524626, 0.012274949613548747, 0.012380297717572864, 0.012485645821596983, 0.0125909939256211, 0.01269634202964522, 0.012801690133669339, 0.012907038237693456, 0.013012386341717575, 0.013117734445741694, 0.013223082549765813, 0.01332843065378993, 0.013433778757814048, 0.013539126861838169, 0.013644474965862286, 0.013749823069886405, 0.013855171173910524, 0.013960519277934643, 0.01406586738195876, 0.014171215485982878, 0.014276563590006999, 0.014381911694031116, 0.014487259798055235, 0.014592607902079353, 0.014697956006103473, 0.01480330411012759, 0.014908652214151708, 0.015014000318175827, 0.015119348422199946, 0.015224696526224065, 0.015330044630248183, 0.015435392734272304, 0.015540740838296421, 0.015646088942320537, 0.015751437046344657, 0.015856785150368778, 0.015962133254392896, 0.016067481358417013, 0.016172829462441134, 0.01627817756646525, 0.01638352567048937, 0.01648887377451349, 0.016594221878537603, 0.016699569982561724, 0.016804918086585845, 0.016910266190609962, 0.01701561429463408, 0.0171209623986582, 0.017226310502682318, 0.017331658606706435, 0.017437006710730556, 0.017542354814754673, 0.01764770291877879, 0.01775305102280291, 0.01785839912682703, 0.017963747230851146, 0.018069095334875267, 0.018174443438899384, 0.018279791542923505, 0.018385139646947622, 0.01849048775097174, 0.018595835854995857, 0.018701183959019974, 0.0188065320630441, 0.018911880167068216, 0.019017228271092333, 0.01912257637511645, 0.01922792447914057, 0.01933327258316469, 0.019438620687188806, 0.019543968791212923, 0.019649316895237044, 0.019754664999261165, 0.019860013103285282, 0.0199653612073094, 0.020070709311333517, 0.020176057415357634, 0.020281405519381755, 0.020386753623405876, 0.020492101727429993, 0.02059744983145411, 0.02070279793547823, 0.02080814603950235, 0.020913494143526466, 0.021018842247550584, 0.0211241903515747, 0.021229538455598825, 0.021334886559622943, 0.02144023466364706, 0.021545582767671177, 0.021650930871695295, 0.021756278975719415, 0.021861627079743533, 0.021966975183767654, 0.02207232328779177, 0.022177671391815888, 0.02228301949584001, 0.022388367599864126, 0.022493715703888244, 0.02259906380791236, 0.022704411911936482, 0.022809760015960603, 0.02291510811998472, 0.023020456224008837, 0.023125804328032955, 0.023231152432057076, 0.023336500536081193, 0.02344184864010531, 0.023547196744129428, 0.02365254484815355, 0.02375789295217767, 0.023863241056201787, 0.023968589160225904, 0.02407393726425002, 0.024179285368274142, 0.02428463347229826, 0.02438998157632238, 0.024495329680346498, 0.024600677784370615, 0.024706025888394736, 0.024811373992418853, 0.02491672209644297, 0.025022070200467088, 0.025127418304491205, 0.02523276640851533, 0.025338114512539447, 0.025443462616563564, 0.02554881072058768, 0.025654158824611802, 0.02575950692863592, 0.025864855032660037, 0.025970203136684158, 0.026075551240708275, 0.026180899344732396, 0.026286247448756513, 0.02639159555278063, 0.026496943656804748, 0.026602291760828865, 0.026707639864852986, 0.026812987968877107, 0.026918336072901224, 0.02702368417692534, 0.027129032280949462, 0.02723438038497358, 0.027339728488997697, 0.027445076593021814, 0.027550424697045935, 0.027655772801070056, 0.027761120905094173, 0.02786646900911829, 0.027971817113142408, 0.028077165217166525, 0.028182513321190646, 0.028287861425214764, 0.028393209529238884, 0.028498557633263002, 0.028603905737287123, 0.02870925384131124, 0.028814601945335357, 0.028919950049359475, 0.029025298153383592, 0.029130646257407716, 0.029235994361431834, 0.02934134246545595, 0.02944669056948007, 0.029552038673504186, 0.029657386777528306, 0.029762734881552424, 0.02986808298557654, 0.029973431089600662, 0.030078779193624783, 0.0301841272976489, 0.030289475401673017, 0.030394823505697135, 0.030500171609721252, 0.030605519713745373, 0.030710867817769494, 0.03081621592179361, 0.03092156402581773, 0.031026912129841846, 0.031132260233865967, 0.031237608337890084, 0.031342956441914205, 0.03144830454593832, 0.031553652649962446, 0.03165900075398656, 0.031764348858010674, 0.031869696962034795, 0.031975045066058916, 0.03208039317008303, 0.03218574127410715, 0.03229108937813127, 0.032396437482155385, 0.032501785586179506, 0.03260713369020363, 0.03271248179422774, 0.03281782989825186, 0.03292317800227598, 0.033028526106300096, 0.033133874210324224, 0.03323922231434834, 0.03334457041837245, 0.03344991852239658, 0.03355526662642069, 0.03366061473044481, 0.033765962834468935, 0.03387131093849305, 0.03397665904251716, 0.03408200714654129, 0.034187355250565404, 0.03429270335458952, 0.034398051458613646, 0.03450339956263776, 0.034608747666661874, 0.03471409577068599, 0.034819443874710115, 0.03492479197873423, 0.03503014008275836, 0.03513548818678247, 0.035240836290806585, 0.03534618439483071, 0.035451532498854826, 0.03555688060287894, 0.035662228706903054, 0.03576757681092718, 0.03587292491495131, 0.035978273018975424, 0.03608362112299954, 0.03618896922702365, 0.03629431733104778, 0.03639966543507189, 0.03650501353909601, 0.03661036164312012, 0.03671570974714425, 0.036821057851168376, 0.03692640595519249, 0.037031754059216604, 0.03713710216324072, 0.037242450267264846, 0.03734779837128896, 0.03745314647531307, 0.0375584945793372, 0.037663842683361315, 0.03776919078738544, 0.03787453889140956, 0.03797988699543367, 0.038085235099457784, 0.03819058320348191, 0.038295931307506026, 0.03840127941153014, 0.03850662751555427, 0.03861197561957838, 0.03871732372360251, 0.03882267182762662, 0.03892801993165074, 0.039033368035674865, 0.03913871613969898, 0.03924406424372309, 0.039349412347747206, 0.039454760451771334, 0.03956010855579545, 0.039665456659819576, 0.03977080476384369, 0.0398761528678678, 0.03998150097189193, 0.040086849075916045, 0.04019219717994016, 0.04029754528396427, 0.0404028933879884, 0.040508241492012514, 0.04061358959603663, 0.040718937700060756, 0.04082428580408487, 0.040929633908109, 0.04103498201213311, 0.041140330116157225, 0.04124567822018134, 0.04135102632420547, 0.04145637442822958, 0.041561722532253695, 0.04166707063627782, 0.041772418740301936, 0.041877766844326064, 0.04198311494835018, 0.04208846305237429, 0.04219381115639842, 0.042299159260422534, 0.04240450736444665, 0.04250985546847076, 0.04261520357249489, 0.042720551676519, 0.04282589978054313, 0.042931247884567245, 0.04303659598859136, 0.043141944092615486, 0.0432472921966396, 0.043352640300663714, 0.04345798840468783, 0.043563336508711956, 0.04366868461273607, 0.0437740327167602, 0.04387938082078431, 0.043984728924808425, 0.04409007702883255, 0.04419542513285667, 0.04430077323688078, 0.044406121340904894, 0.04451146944492902, 0.04461681754895315, 0.044722165652977264, 0.04482751375700138, 0.04493286186102549, 0.04503820996504962, 0.04514355806907373, 0.04524890617309785, 0.04535425427712196, 0.04545960238114609, 0.0455649504851702, 0.04567029858919433, 0.045775646693218444, 0.04588099479724256, 0.045986342901266686, 0.0460916910052908, 0.046197039109314914, 0.04630238721333904, 0.046407735317363155, 0.04651308342138727, 0.0466184315254114, 0.04672377962943551, 0.046829127733459625, 0.04693447583748375, 0.047039823941507866, 0.04714517204553198, 0.04725052014955611, 0.04735586825358022, 0.047461216357604336, 0.04756656446162846, 0.04767191256565258, 0.047777260669676705, 0.04788260877370082, 0.04798795687772493, 0.04809330498174905, 0.048198653085773174, 0.04830400118979729, 0.0484093492938214, 0.048514697397845516, 0.048620045501869644, 0.04872539360589377, 0.048830741709917885, 0.048936089813942, 0.04904143791796611, 0.04914678602199024, 0.049252134126014355, 0.04935748223003847, 0.049462830334062596, 0.04956817843808671, 0.04967352654211084, 0.04977887464613495, 0.049884222750159066, 0.04998957085418318, 0.05009491895820731, 0.05020026706223142, 0.050305615166255535, 0.05041096327027966, 0.05051631137430378, 0.050621659478327904, 0.05072700758235202, 0.05083235568637613, 0.05093770379040026, 0.051043051894424374, 0.05114839999844849, 0.0512537481024726, 0.05135909620649673, 0.05146444431052084, 0.05156979241454497, 0.051675140518569085, 0.0517804886225932, 0.051885836726617326, 0.05199118483064144, 0.052096532934665554, 0.05220188103868967, 0.052307229142713796, 0.05241257724673791, 0.05251792535076204, 0.05262327345478615, 0.052728621558810265, 0.05283396966283439, 0.05293931776685851, 0.05304466587088262, 0.053150013974906735, 0.05325536207893086, 0.053360710182954976, 0.053466058286979104, 0.05357140639100322, 0.05367675449502733, 0.05378210259905146, 0.05388745070307557, 0.05399279880709969, 0.054098146911123815, 0.05420349501514793, 0.05430884311917204])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_3926256acba54b3ea709777af438587c.x = d3.scale.linear()
              .domain([0.0017401392111368909, 0.05430884311917204])
              .range([0, 400]);

    color_map_3926256acba54b3ea709777af438587c.legend = L.control({position: 'topright'});
    color_map_3926256acba54b3ea709777af438587c.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_3926256acba54b3ea709777af438587c.legend.addTo(map_fef4539f3f0e4cb29b29729dfd65c09d);

    color_map_3926256acba54b3ea709777af438587c.xAxis = d3.svg.axis()
        .scale(color_map_3926256acba54b3ea709777af438587c.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0017401392111368909, 0.010501589862476084, 0.019263040513815277, 0.02802449116515447, 0.03678594181649367, 0.04554739246783286, 0.05430884311917205]);

    color_map_3926256acba54b3ea709777af438587c.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_3926256acba54b3ea709777af438587c.g = color_map_3926256acba54b3ea709777af438587c.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_3926256acba54b3ea709777af438587c.g.selectAll("rect")
        .data(color_map_3926256acba54b3ea709777af438587c.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_3926256acba54b3ea709777af438587c.x(color_map_3926256acba54b3ea709777af438587c.color.domain()[i - 1]) : color_map_3926256acba54b3ea709777af438587c.x.range()[0],
            x1: i < color_map_3926256acba54b3ea709777af438587c.color.domain().length ? color_map_3926256acba54b3ea709777af438587c.x(color_map_3926256acba54b3ea709777af438587c.color.domain()[i]) : color_map_3926256acba54b3ea709777af438587c.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_3926256acba54b3ea709777af438587c.g.call(color_map_3926256acba54b3ea709777af438587c.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('04_50_RENATA DA SILVA SOUZA');

