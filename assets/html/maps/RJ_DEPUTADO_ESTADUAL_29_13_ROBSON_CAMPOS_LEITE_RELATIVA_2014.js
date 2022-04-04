    
            var map_66278bae14d0413f929001e4c253ece1 = L.map(
                "map_66278bae14d0413f929001e4c253ece1",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_0323fddf199e4b7291160dd5b147ef2c = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_66278bae14d0413f929001e4c253ece1);
        
    
            var choropleth_43e5a2f951514f1b942efe8749c8c848 = L.featureGroup(
                {}
            ).addTo(map_66278bae14d0413f929001e4c253ece1);
        
    
        function geo_json_20dcc9f6adb34138b186d1d631763eba_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 366: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 335: case 403: case 362: case 355: case 469: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 453: case 462: case 467: case 455: case 470: case 442: case 446: case 419: case 415: case 411: case 390: case 368: case 454: case 483: case 471: case 461: case 477: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 457: case 430: case 429: case 409: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 459: case 445: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 463: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_20dcc9f6adb34138b186d1d631763eba_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_20dcc9f6adb34138b186d1d631763eba = L.geoJson(null, {
                onEachFeature: geo_json_20dcc9f6adb34138b186d1d631763eba_onEachFeature,
            
                style: geo_json_20dcc9f6adb34138b186d1d631763eba_styler,
        });

        function geo_json_20dcc9f6adb34138b186d1d631763eba_add (data) {
            geo_json_20dcc9f6adb34138b186d1d631763eba
                .addData(data)
                .addTo(choropleth_43e5a2f951514f1b942efe8749c8c848);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_20dcc9f6adb34138b186d1d631763eba_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_ed42a069fdad49009c2ab64ebf6f0906 = {};

    
    color_map_ed42a069fdad49009c2ab64ebf6f0906.color = d3.scale.threshold()
              .domain([0.0, 4.938067430333438e-05, 9.876134860666876e-05, 0.00014814202291000314, 0.00019752269721333752, 0.0002469033715166719, 0.0002962840458200063, 0.00034566472012334065, 0.00039504539442667503, 0.0004444260687300094, 0.0004938067430333438, 0.0005431874173366782, 0.0005925680916400125, 0.0006419487659433469, 0.0006913294402466813, 0.0007407101145500156, 0.0007900907888533501, 0.0008394714631566845, 0.0008888521374600188, 0.0009382328117633533, 0.0009876134860666876, 0.001036994160370022, 0.0010863748346733564, 0.0011357555089766909, 0.001185136183280025, 0.0012345168575833593, 0.0012838975318866937, 0.0013332782061900282, 0.0013826588804933626, 0.001432039554796697, 0.0014814202291000313, 0.0015308009034033657, 0.0015801815777067001, 0.0016295622520100346, 0.001678942926313369, 0.0017283236006167032, 0.0017777042749200376, 0.001827084949223372, 0.0018764656235267065, 0.001925846297830041, 0.001975226972133375, 0.0020246076464367096, 0.002073988320740044, 0.002123368995043378, 0.002172749669346713, 0.002222130343650047, 0.0022715110179533818, 0.0023208916922567158, 0.00237027236656005, 0.0024196530408633846, 0.0024690337151667186, 0.0025184143894700535, 0.0025677950637733875, 0.0026171757380767224, 0.0026665564123800564, 0.002715937086683391, 0.0027653177609867252, 0.0028146984352900597, 0.002864079109593394, 0.0029134597838967285, 0.0029628404582000625, 0.0030122211325033974, 0.0030616018068067314, 0.0031109824811100663, 0.0031603631554134003, 0.0032097438297167343, 0.003259124504020069, 0.003308505178323403, 0.003357885852626738, 0.003407266526930072, 0.0034566472012334064, 0.003506027875536741, 0.0035554085498400753, 0.0036047892241434097, 0.003654169898446744, 0.0037035505727500786, 0.003752931247053413, 0.003802311921356747, 0.003851692595660082, 0.003901073269963416, 0.00395045394426675, 0.003999834618570085, 0.004049215292873419, 0.004098595967176753, 0.004147976641480088, 0.0041973573157834225, 0.004246737990086756, 0.0042961186643900905, 0.004345499338693426, 0.00439488001299676, 0.004444260687300094, 0.004493641361603428, 0.0045430220359067635, 0.004592402710210097, 0.0046417833845134315, 0.004691164058816766, 0.0047405447331201, 0.004789925407423435, 0.004839306081726769, 0.004888686756030104, 0.004938067430333437, 0.0049874481046367726, 0.005036828778940107, 0.0050862094532434406, 0.005135590127546775, 0.00518497080185011, 0.005234351476153445, 0.005283732150456778, 0.005333112824760113, 0.005382493499063448, 0.005431874173366782, 0.005481254847670116, 0.0055306355219734505, 0.005580016196276784, 0.005629396870580119, 0.005678777544883454, 0.005728158219186788, 0.005777538893490122, 0.005826919567793457, 0.0058763002420967915, 0.005925680916400125, 0.0059750615907034595, 0.006024442265006795, 0.006073822939310129, 0.006123203613613463, 0.006172584287916797, 0.0062219649622201325, 0.006271345636523466, 0.0063207263108268005, 0.006370106985130135, 0.0064194876594334685, 0.006468868333736804, 0.006518249008040138, 0.006567629682343473, 0.006617010356646806, 0.0066663910309501416, 0.006715771705253476, 0.0067651523795568096, 0.006814533053860144, 0.006863913728163479, 0.006913294402466813, 0.006962675076770147, 0.007012055751073482, 0.007061436425376817, 0.007110817099680151, 0.007160197773983485, 0.0072095784482868195, 0.007258959122590153, 0.007308339796893488, 0.007357720471196823, 0.007407101145500157, 0.007456481819803491, 0.007505862494106826, 0.0075552431684101605, 0.007604623842713494, 0.0076540045170168285, 0.007703385191320164, 0.007752765865623497, 0.007802146539926832, 0.007851527214230165, 0.0079009078885335, 0.007950288562836836, 0.00799966923714017, 0.008049049911443503, 0.008098430585746838, 0.008147811260050172, 0.008197191934353506, 0.008246572608656843, 0.008295953282960176, 0.00834533395726351, 0.008394714631566845, 0.008444095305870179, 0.008493475980173512, 0.008542856654476847, 0.008592237328780181, 0.008641618003083518, 0.008690998677386852, 0.008740379351690185, 0.00878976002599352, 0.008839140700296854, 0.008888521374600188, 0.008937902048903523, 0.008987282723206856, 0.00903666339751019, 0.009086044071813527, 0.00913542474611686, 0.009184805420420194, 0.00923418609472353, 0.009283566769026863, 0.009332947443330197, 0.009382328117633532, 0.009431708791936865, 0.0094810894662402, 0.009530470140543536, 0.00957985081484687, 0.009629231489150205, 0.009678612163453539, 0.009727992837756872, 0.009777373512060207, 0.009826754186363541, 0.009876134860666875, 0.009925515534970212, 0.009974896209273545, 0.010024276883576879, 0.010073657557880214, 0.010123038232183548, 0.010172418906486881, 0.010221799580790216, 0.01027118025509355, 0.010320560929396885, 0.01036994160370022, 0.010419322278003554, 0.01046870295230689, 0.010518083626610223, 0.010567464300913557, 0.010616844975216892, 0.010666225649520225, 0.010715606323823559, 0.010764986998126896, 0.01081436767243023, 0.010863748346733563, 0.010913129021036898, 0.010962509695340232, 0.011011890369643566, 0.011061271043946901, 0.011110651718250234, 0.011160032392553568, 0.011209413066856905, 0.011258793741160239, 0.011308174415463574, 0.011357555089766908, 0.011406935764070241, 0.011456316438373576, 0.01150569711267691, 0.011555077786980244, 0.01160445846128358, 0.011653839135586914, 0.011703219809890248, 0.011752600484193583, 0.011801981158496917, 0.01185136183280025, 0.011900742507103585, 0.011950123181406919, 0.011999503855710253, 0.01204888453001359, 0.012098265204316923, 0.012147645878620258, 0.012197026552923592, 0.012246407227226926, 0.012295787901530261, 0.012345168575833594, 0.012394549250136928, 0.012443929924440265, 0.012493310598743599, 0.012542691273046932, 0.012592071947350267, 0.012641452621653601, 0.012690833295956935, 0.01274021397026027, 0.012789594644563603, 0.012838975318866937, 0.012888355993170274, 0.012937736667473608, 0.012987117341776943, 0.013036498016080277, 0.01308587869038361, 0.013135259364686945, 0.013184640038990279, 0.013234020713293613, 0.01328340138759695, 0.013332782061900283, 0.013382162736203617, 0.013431543410506952, 0.013480924084810286, 0.013530304759113619, 0.013579685433416954, 0.013629066107720288, 0.013678446782023622, 0.013727827456326959, 0.013777208130630292, 0.013826588804933626, 0.013875969479236961, 0.013925350153540295, 0.01397473082784363, 0.014024111502146963, 0.014073492176450297, 0.014122872850753634, 0.014172253525056968, 0.014221634199360301, 0.014271014873663636, 0.01432039554796697, 0.014369776222270304, 0.014419156896573639, 0.014468537570876972, 0.014517918245180306, 0.014567298919483643, 0.014616679593786977, 0.01466606026809031, 0.014715440942393646, 0.014764821616696979, 0.014814202291000314, 0.014863582965303648, 0.014912963639606982, 0.014962344313910319, 0.015011724988213652, 0.015061105662516986, 0.015110486336820321, 0.015159867011123655, 0.015209247685426988, 0.015258628359730323, 0.015308009034033657, 0.01535738970833699, 0.015406770382640328, 0.015456151056943661, 0.015505531731246995, 0.01555491240555033, 0.015604293079853664, 0.015653673754156997, 0.01570305442846033, 0.015752435102763668, 0.015801815777067, 0.015851196451370335, 0.015900577125673672, 0.015949957799977005, 0.01599933847428034, 0.016048719148583676, 0.016098099822887006, 0.016147480497190343, 0.016196861171493677, 0.01624624184579701, 0.016295622520100344, 0.01634500319440368, 0.01639438386870701, 0.016443764543010348, 0.016493145217313685, 0.016542525891617015, 0.016591906565920352, 0.016641287240223686, 0.01669066791452702, 0.016740048588830353, 0.01678942926313369, 0.01683880993743702, 0.016888190611740357, 0.016937571286043694, 0.016986951960347024, 0.01703633263465036, 0.017085713308953695, 0.017135093983257032, 0.017184474657560362, 0.0172338553318637, 0.017283236006167036, 0.017332616680470366, 0.017381997354773703, 0.017431378029077037, 0.01748075870338037, 0.017530139377683704, 0.01757952005198704, 0.01762890072629037, 0.017678281400593708, 0.017727662074897045, 0.017777042749200375, 0.017826423423503712, 0.017875804097807046, 0.01792518477211038, 0.017974565446413713, 0.01802394612071705, 0.01807332679502038, 0.018122707469323717, 0.018172088143627054, 0.018221468817930384, 0.01827084949223372, 0.018320230166537055, 0.01836961084084039, 0.018418991515143722, 0.01846837218944706, 0.01851775286375039, 0.018567133538053726, 0.018616514212357063, 0.018665894886660393, 0.01871527556096373, 0.018764656235267064, 0.0188140369095704, 0.01886341758387373, 0.018912798258177068, 0.0189621789324804, 0.019011559606783735, 0.019060940281087072, 0.019110320955390406, 0.01915970162969374, 0.019209082303997073, 0.01925846297830041, 0.01930784365260374, 0.019357224326907077, 0.019406605001210414, 0.019455985675513744, 0.01950536634981708, 0.019554747024120415, 0.01960412769842375, 0.019653508372727082, 0.01970288904703042, 0.01975226972133375, 0.019801650395637086, 0.019851031069940423, 0.019900411744243753, 0.01994979241854709, 0.019999173092850424, 0.020048553767153757, 0.02009793444145709, 0.020147315115760428, 0.020196695790063758, 0.020246076464367095, 0.020295457138670432, 0.020344837812973762, 0.0203942184872771, 0.020443599161580433, 0.020492979835883766, 0.0205423605101871, 0.020591741184490437, 0.02064112185879377, 0.020690502533097104, 0.02073988320740044, 0.020789263881703775, 0.02083864455600711, 0.020888025230310442, 0.02093740590461378, 0.02098678657891711, 0.021036167253220446, 0.021085547927523783, 0.021134928601827113, 0.02118430927613045, 0.021233689950433784, 0.021283070624737117, 0.02133245129904045, 0.021381831973343788, 0.021431212647647118, 0.021480593321950455, 0.021529973996253792, 0.021579354670557122, 0.02162873534486046, 0.021678116019163793, 0.021727496693467126, 0.02177687736777046, 0.021826258042073797, 0.021875638716377127, 0.021925019390680464, 0.0219744000649838, 0.02202378073928713, 0.02207316141359047, 0.022122542087893802, 0.022171922762197135, 0.02222130343650047, 0.022270684110803806, 0.022320064785107136, 0.022369445459410473, 0.02241882613371381, 0.022468206808017144, 0.022517587482320477, 0.02256696815662381, 0.022616348830927148, 0.022665729505230478, 0.022715110179533815, 0.022764490853837152, 0.022813871528140482, 0.02286325220244382, 0.022912632876747153, 0.022962013551050486, 0.02301139422535382, 0.023060774899657157, 0.023110155573960487, 0.023159536248263824, 0.02320891692256716, 0.02325829759687049, 0.023307678271173828, 0.023357058945477162, 0.023406439619780495, 0.02345582029408383, 0.023505200968387166, 0.023554581642690496, 0.023603962316993833, 0.02365334299129717, 0.0237027236656005, 0.023752104339903837, 0.02380148501420717, 0.023850865688510504, 0.023900246362813838, 0.023949627037117175, 0.023999007711420505, 0.024048388385723842, 0.02409776906002718, 0.02414714973433051, 0.024196530408633846, 0.02424591108293718, 0.024295291757240517, 0.024344672431543847, 0.024394053105847184, 0.02444343378015052, 0.02449281445445385, 0.024542195128757188, 0.024591575803060522, 0.024640956477363855])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_ed42a069fdad49009c2ab64ebf6f0906.x = d3.scale.linear()
              .domain([0.0, 0.024640956477363855])
              .range([0, 400]);

    color_map_ed42a069fdad49009c2ab64ebf6f0906.legend = L.control({position: 'topright'});
    color_map_ed42a069fdad49009c2ab64ebf6f0906.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_ed42a069fdad49009c2ab64ebf6f0906.legend.addTo(map_66278bae14d0413f929001e4c253ece1);

    color_map_ed42a069fdad49009c2ab64ebf6f0906.xAxis = d3.svg.axis()
        .scale(color_map_ed42a069fdad49009c2ab64ebf6f0906.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.004106826079560643, 0.008213652159121286, 0.012320478238681928, 0.01642730431824257, 0.020534130397803215, 0.024640956477363855]);

    color_map_ed42a069fdad49009c2ab64ebf6f0906.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_ed42a069fdad49009c2ab64ebf6f0906.g = color_map_ed42a069fdad49009c2ab64ebf6f0906.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_ed42a069fdad49009c2ab64ebf6f0906.g.selectAll("rect")
        .data(color_map_ed42a069fdad49009c2ab64ebf6f0906.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_ed42a069fdad49009c2ab64ebf6f0906.x(color_map_ed42a069fdad49009c2ab64ebf6f0906.color.domain()[i - 1]) : color_map_ed42a069fdad49009c2ab64ebf6f0906.x.range()[0],
            x1: i < color_map_ed42a069fdad49009c2ab64ebf6f0906.color.domain().length ? color_map_ed42a069fdad49009c2ab64ebf6f0906.x(color_map_ed42a069fdad49009c2ab64ebf6f0906.color.domain()[i]) : color_map_ed42a069fdad49009c2ab64ebf6f0906.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_ed42a069fdad49009c2ab64ebf6f0906.g.call(color_map_ed42a069fdad49009c2ab64ebf6f0906.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('29_13_ROBSON CAMPOS LEITE');
