    
            var map_86ea4f838d9c4cb8b9bed7acac686f48 = L.map(
                "map_86ea4f838d9c4cb8b9bed7acac686f48",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_f585f767a4fc494eaa2eeb5976071341 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_86ea4f838d9c4cb8b9bed7acac686f48);
        
    
            var choropleth_f74846eee6bc49ffa5b1beec9ca577c4 = L.featureGroup(
                {}
            ).addTo(map_86ea4f838d9c4cb8b9bed7acac686f48);
        
    
        function geo_json_dddd2e41e9ac40778423457ca3db62b5_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 434: case 428: case 325: case 440: case 424: case 417: case 403: case 474: case 352: case 383: case 396: case 427: case 408: case 411: case 371: case 364: case 359: case 346: case 354: case 331: case 330: case 367: case 360: case 347: case 357: case 459: case 454: case 430: case 399: case 469: case 461: case 465: case 451: case 341: case 485: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 449: case 462: case 456: case 467: case 466: case 473: case 455: case 472: case 464: case 437: case 471: case 391: case 477: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 438: case 447: case 453: case 470: case 442: case 436: case 446: case 444: case 426: case 419: case 415: case 339: case 433: case 445: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 468: case 366: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 340: case 333: case 390: case 350: case 387: case 458: case 450: case 480: case 389: case 414: case 374: case 890: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_dddd2e41e9ac40778423457ca3db62b5_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_dddd2e41e9ac40778423457ca3db62b5 = L.geoJson(null, {
                onEachFeature: geo_json_dddd2e41e9ac40778423457ca3db62b5_onEachFeature,
            
                style: geo_json_dddd2e41e9ac40778423457ca3db62b5_styler,
        });

        function geo_json_dddd2e41e9ac40778423457ca3db62b5_add (data) {
            geo_json_dddd2e41e9ac40778423457ca3db62b5
                .addData(data)
                .addTo(choropleth_f74846eee6bc49ffa5b1beec9ca577c4);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_dddd2e41e9ac40778423457ca3db62b5_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_0a4dd4b96e1b4c16bf98db15734a8dd3 = {};

    
    color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.color = d3.scale.threshold()
              .domain([0.0, 0.00033332896290820194, 0.0006666579258164039, 0.0009999868887246056, 0.0013333158516328077, 0.0016666448145410096, 0.0019999737774492113, 0.0023333027403574136, 0.0026666317032656155, 0.0029999606661738174, 0.0033332896290820192, 0.0036666185919902216, 0.003999947554898423, 0.004333276517806625, 0.004666605480714827, 0.004999934443623029, 0.005333263406531231, 0.005666592369439433, 0.005999921332347635, 0.006333250295255837, 0.0066665792581640385, 0.00699990822107224, 0.007333237183980443, 0.007666566146888644, 0.007999895109796845, 0.008333224072705047, 0.00866655303561325, 0.008999881998521453, 0.009333210961429654, 0.009666539924337855, 0.009999868887246058, 0.01033319785015426, 0.010666526813062462, 0.010999855775970664, 0.011333184738878866, 0.011666513701787068, 0.01199984266469527, 0.012333171627603471, 0.012666500590511673, 0.012999829553419877, 0.013333158516328077, 0.013666487479236279, 0.01399981644214448, 0.014333145405052683, 0.014666474367960886, 0.014999803330869086, 0.015333132293777288, 0.015666461256685492, 0.01599979021959369, 0.016333119182501892, 0.016666448145410094, 0.0169997771083183, 0.0173331060712265, 0.017666435034134703, 0.017999763997042905, 0.018333092959951107, 0.01866642192285931, 0.01899975088576751, 0.01933307984867571, 0.01966640881158391, 0.019999737774492116, 0.020333066737400318, 0.02066639570030852, 0.020999724663216722, 0.021333053626124924, 0.021666382589033126, 0.021999711551941328, 0.02233304051484953, 0.02266636947775773, 0.022999698440665933, 0.023333027403574135, 0.023666356366482337, 0.02399968532939054, 0.02433301429229874, 0.024666343255206943, 0.024999672218115145, 0.025333001181023346, 0.02566633014393155, 0.025999659106839754, 0.026332988069747952, 0.026666317032656154, 0.026999645995564356, 0.027332974958472558, 0.02766630392138076, 0.02799963288428896, 0.028332961847197163, 0.028666290810105365, 0.02899961977301357, 0.029332948735921772, 0.029666277698829974, 0.029999606661738173, 0.030332935624646375, 0.030666264587554577, 0.03099959355046278, 0.031332922513370984, 0.03166625147627918, 0.03199958043918738, 0.032332909402095586, 0.032666238365003784, 0.03299956732791199, 0.03333289629082019, 0.0336662252537284, 0.0339995542166366, 0.034332883179544804, 0.034666212142453, 0.03499954110536121, 0.035332870068269406, 0.035666199031177605, 0.03599952799408581, 0.03633285695699401, 0.036666185919902214, 0.03699951488281041, 0.03733284384571862, 0.037666172808626816, 0.03799950177153502, 0.03833283073444322, 0.03866615969735142, 0.038999488660259624, 0.03933281762316782, 0.039666146586076034, 0.03999947554898423, 0.04033280451189244, 0.040666133474800636, 0.04099946243770884, 0.04133279140061704, 0.041666120363525246, 0.041999449326433444, 0.04233277828934164, 0.04266610725224985, 0.042999436215158046, 0.04333276517806625, 0.04366609414097445, 0.043999423103882655, 0.044332752066790854, 0.04466608102969906, 0.04499940999260726, 0.04533273895551546, 0.04566606791842366, 0.04599939688133187, 0.04633272584424007, 0.04666605480714827, 0.046999383770056476, 0.047332712732964674, 0.04766604169587288, 0.04799937065878108, 0.04833269962168928, 0.04866602858459748, 0.04899935754750568, 0.049332686510413885, 0.049666015473322084, 0.04999934443623029, 0.05033267339913849, 0.05066600236204669, 0.05099933132495489, 0.0513326602878631, 0.051665989250771295, 0.05199931821367951, 0.052332647176587706, 0.052665976139495904, 0.05299930510240411, 0.05333263406531231, 0.05366596302822051, 0.05399929199112871, 0.05433262095403692, 0.054665949916945115, 0.05499927887985332, 0.05533260784276152, 0.055665936805669725, 0.05599926576857792, 0.05633259473148612, 0.05666592369439433, 0.056999252657302525, 0.05733258162021073, 0.05766591058311893, 0.05799923954602714, 0.05833256850893534, 0.058665897471843545, 0.05899922643475174, 0.05933255539765995, 0.05966588436056815, 0.059999213323476346, 0.06033254228638455, 0.06066587124929275, 0.060999200212200955, 0.06133252917510915, 0.06166585813801736, 0.06199918710092556, 0.06233251606383376, 0.06266584502674197, 0.06299917398965016, 0.06333250295255836, 0.06366583191546657, 0.06399916087837476, 0.06433248984128298, 0.06466581880419117, 0.06499914776709938, 0.06533247673000757, 0.06566580569291579, 0.06599913465582398, 0.06633246361873218, 0.06666579258164038, 0.06699912154454858, 0.0673324505074568, 0.06766577947036499, 0.0679991084332732, 0.06833243739618139, 0.06866576635908961, 0.0689990953219978, 0.069332424284906, 0.0696657532478142, 0.06999908221072242, 0.07033241117363061, 0.07066574013653881, 0.070999069099447, 0.07133239806235521, 0.07166572702526341, 0.07199905598817162, 0.07233238495107981, 0.07266571391398802, 0.07299904287689622, 0.07333237183980443, 0.07366570080271263, 0.07399902976562082, 0.07433235872852903, 0.07466568769143724, 0.07499901665434544, 0.07533234561725363, 0.07566567458016184, 0.07599900354307004, 0.07633233250597825, 0.07666566146888644, 0.07699899043179464, 0.07733231939470284, 0.07766564835761106, 0.07799897732051925, 0.07833230628342745, 0.07866563524633564, 0.07899896420924386, 0.07933229317215207, 0.07966562213506026, 0.07999895109796847, 0.08033228006087667, 0.08066560902378488, 0.08099893798669307, 0.08133226694960127, 0.08166559591250946, 0.08199892487541768, 0.08233225383832588, 0.08266558280123408, 0.08299891176414227, 0.08333224072705049, 0.08366556968995868, 0.08399889865286689, 0.08433222761577508, 0.08466555657868328, 0.08499888554159149, 0.0853322145044997, 0.0856655434674079, 0.08599887243031609, 0.08633220139322431, 0.0866655303561325, 0.08699885931904071, 0.0873321882819489, 0.0876655172448571, 0.08799884620776531, 0.08833217517067352, 0.08866550413358171, 0.08899883309648991, 0.08933216205939812, 0.08966549102230632, 0.08999881998521451, 0.09033214894812272, 0.09066547791103093, 0.09099880687393913, 0.09133213583684732, 0.09166546479975553, 0.09199879376266373, 0.09233212272557194, 0.09266545168848014, 0.09299878065138834, 0.09333210961429654, 0.09366543857720475, 0.09399876754011295, 0.09433209650302114, 0.09466542546592935, 0.09499875442883754, 0.09533208339174576, 0.09566541235465395, 0.09599874131756216, 0.09633207028047035, 0.09666539924337857, 0.09699872820628676, 0.09733205716919496, 0.09766538613210317, 0.09799871509501136, 0.09833204405791958, 0.09866537302082777, 0.09899870198373598, 0.09933203094664417, 0.09966535990955239, 0.09999868887246058, 0.10033201783536878, 0.10066534679827698, 0.1009986757611852, 0.10133200472409339, 0.10166533368700159, 0.10199866264990978, 0.10233199161281799, 0.1026653205757262, 0.1029986495386344, 0.10333197850154259, 0.1036653074644508, 0.10399863642735901, 0.1043319653902672, 0.10466529435317541, 0.1049986233160836, 0.10533195227899181, 0.10566528124190001, 0.10599861020480822, 0.10633193916771641, 0.10666526813062462, 0.10699859709353282, 0.10733192605644103, 0.10766525501934922, 0.10799858398225742, 0.10833191294516561, 0.10866524190807383, 0.10899857087098203, 0.10933189983389023, 0.10966522879679842, 0.10999855775970664, 0.11033188672261485, 0.11066521568552304, 0.11099854464843124, 0.11133187361133945, 0.11166520257424765, 0.11199853153715585, 0.11233186050006405, 0.11266518946297224, 0.11299851842588046, 0.11333184738878865, 0.11366517635169686, 0.11399850531460505, 0.11433183427751327, 0.11466516324042146, 0.11499849220332967, 0.11533182116623786, 0.11566515012914606, 0.11599847909205428, 0.11633180805496247, 0.11666513701787068, 0.11699846598077887, 0.11733179494368709, 0.11766512390659528, 0.11799845286950349, 0.11833178183241168, 0.1186651107953199, 0.11899843975822809, 0.1193317687211363, 0.11966509768404449, 0.11999842664695269, 0.1203317556098609, 0.1206650845727691, 0.1209984135356773, 0.1213317424985855, 0.1216650714614937, 0.12199840042440191, 0.12233172938731011, 0.1226650583502183, 0.12299838731312651, 0.12333171627603472, 0.12366504523894292, 0.12399837420185111, 0.12433170316475932, 0.12466503212766752, 0.12499836109057573, 0.12533169005348394, 0.12566501901639213, 0.12599834797930032, 0.12633167694220854, 0.12666500590511673, 0.12699833486802495, 0.12733166383093314, 0.12766499279384133, 0.12799832175674952, 0.12833165071965774, 0.12866497968256596, 0.12899830864547415, 0.12933163760838234, 0.12966496657129054, 0.12999829553419875, 0.13033162449710697, 0.13066495346001514, 0.13099828242292336, 0.13133161138583158, 0.13166494034873977, 0.13199826931164796, 0.13233159827455615, 0.13266492723746437, 0.1329982562003726, 0.13333158516328075, 0.13366491412618897, 0.13399824308909716, 0.13433157205200538, 0.1346649010149136, 0.13499822997782177, 0.13533155894072998, 0.1356648879036382, 0.1359982168665464, 0.1363315458294546, 0.13666487479236278, 0.136998203755271, 0.13733153271817922, 0.13766486168108738, 0.1379981906439956, 0.1383315196069038, 0.138664848569812, 0.1389981775327202, 0.1393315064956284, 0.1396648354585366, 0.13999816442144483, 0.14033149338435302, 0.14066482234726121, 0.1409981513101694, 0.14133148027307763, 0.14166480923598584, 0.141998138198894, 0.14233146716180223, 0.14266479612471042, 0.14299812508761864, 0.14333145405052683, 0.14366478301343502, 0.14399811197634324, 0.14433144093925143, 0.14466476990215962, 0.14499809886506784, 0.14533142782797603, 0.14566475679088425, 0.14599808575379244, 0.14633141471670064, 0.14666474367960886, 0.14699807264251705, 0.14733140160542527, 0.14766473056833346, 0.14799805953124165, 0.14833138849414987, 0.14866471745705806, 0.14899804641996625, 0.14933137538287447, 0.14966470434578266, 0.14999803330869088, 0.15033136227159904, 0.15066469123450726, 0.15099802019741548, 0.15133134916032367, 0.15166467812323187, 0.15199800708614009, 0.15233133604904828, 0.1526646650119565, 0.1529979939748647, 0.15333132293777288, 0.1536646519006811, 0.1539979808635893, 0.1543313098264975, 0.15466463878940567, 0.1549979677523139, 0.1553312967152221, 0.1556646256781303, 0.1559979546410385, 0.1563312836039467, 0.1566646125668549, 0.15699794152976312, 0.1573312704926713, 0.1576645994555795, 0.15799792841848773, 0.15833125738139592, 0.15866458634430414, 0.1589979153072123, 0.15933124427012052, 0.15966457323302874, 0.15999790219593693, 0.16033123115884512, 0.16066456012175334, 0.16099788908466153, 0.16133121804756975, 0.16166454701047792, 0.16199787597338614, 0.16233120493629435, 0.16266453389920255, 0.16299786286211074, 0.16333119182501893, 0.16366452078792715, 0.16399784975083537, 0.16433117871374353, 0.16466450767665175, 0.16499783663955994, 0.16533116560246816, 0.16566449456537638, 0.16599782352828454, 0.16633115249119276])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.x = d3.scale.linear()
              .domain([0.0, 0.16633115249119276])
              .range([0, 400]);

    color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.legend = L.control({position: 'topright'});
    color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.legend.addTo(map_86ea4f838d9c4cb8b9bed7acac686f48);

    color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.xAxis = d3.svg.axis()
        .scale(color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.027721858748532127, 0.055443717497064254, 0.08316557624559638, 0.11088743499412851, 0.13860929374266062, 0.16633115249119276]);

    color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.g = color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.g.selectAll("rect")
        .data(color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.x(color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.color.domain()[i - 1]) : color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.x.range()[0],
            x1: i < color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.color.domain().length ? color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.x(color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.color.domain()[i]) : color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.g.call(color_map_0a4dd4b96e1b4c16bf98db15734a8dd3.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');

