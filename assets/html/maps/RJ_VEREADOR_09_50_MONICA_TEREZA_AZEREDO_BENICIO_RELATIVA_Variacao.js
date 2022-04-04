    
            var map_7047218fe10b4ad38cb2eda9606d4149 = L.map(
                "map_7047218fe10b4ad38cb2eda9606d4149",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_e566fe4028e2415abcd8d0e13e743983 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_7047218fe10b4ad38cb2eda9606d4149);
        
    
            var choropleth_4efbda34ed5944f69b876df0196f5767 = L.featureGroup(
                {}
            ).addTo(map_7047218fe10b4ad38cb2eda9606d4149);
        
    
        function geo_json_798ff3ce1d1d41f5bc212ef7f497b73b_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 439: case 441: case 412: case 417: case 403: case 478: case 474: case 435: case 380: case 353: case 345: case 381: case 363: case 392: case 343: case 400: case 396: case 423: case 427: case 432: case 411: case 397: case 404: case 395: case 371: case 364: case 398: case 386: case 372: case 354: case 334: case 326: case 329: case 331: case 330: case 328: case 367: case 357: case 459: case 463: case 454: case 430: case 429: case 409: case 399: case 469: case 461: case 465: case 451: case 402: case 480: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 443: case 431: case 349: case 342: case 336: case 460: case 481: case 479: case 391: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 434: case 424: case 436: case 426: case 419: case 415: case 408: case 339: case 433: case 445: case 471: case 477: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 472: case 470: case 442: case 446: case 444: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 438: case 449: case 453: case 462: case 456: case 485: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 447: case 467: case 466: case 473: case 455: case 468: case 464: case 437: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_798ff3ce1d1d41f5bc212ef7f497b73b_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_798ff3ce1d1d41f5bc212ef7f497b73b = L.geoJson(null, {
                onEachFeature: geo_json_798ff3ce1d1d41f5bc212ef7f497b73b_onEachFeature,
            
                style: geo_json_798ff3ce1d1d41f5bc212ef7f497b73b_styler,
        });

        function geo_json_798ff3ce1d1d41f5bc212ef7f497b73b_add (data) {
            geo_json_798ff3ce1d1d41f5bc212ef7f497b73b
                .addData(data)
                .addTo(choropleth_4efbda34ed5944f69b876df0196f5767);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_798ff3ce1d1d41f5bc212ef7f497b73b_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_0d1aca1bdf914166b6f6742de8bb6583 = {};

    
    color_map_0d1aca1bdf914166b6f6742de8bb6583.color = d3.scale.threshold()
              .domain([0.0008457851705666761, 0.0008965331485195007, 0.0009472811264723254, 0.00099802910442515, 0.0010487770823779745, 0.0010995250603307992, 0.001150273038283624, 0.0012010210162364484, 0.0012517689941892731, 0.0013025169721420978, 0.0013532649500949225, 0.001404012928047747, 0.0014547609060005717, 0.0015055088839533962, 0.0015562568619062209, 0.0016070048398590456, 0.00165775281781187, 0.001708500795764695, 0.0017592487737175195, 0.001809996751670344, 0.0018607447296231689, 0.0019114927075759933, 0.001962240685528818, 0.0020129886634816427, 0.002063736641434467, 0.002114484619387292, 0.0021652325973401166, 0.002215980575292941, 0.0022667285532457656, 0.0023174765311985905, 0.002368224509151415, 0.00241897248710424, 0.0024697204650570644, 0.002520468443009889, 0.0025712164209627138, 0.0026219643989155383, 0.002672712376868363, 0.0027234603548211877, 0.002774208332774012, 0.002824956310726837, 0.002875704288679662, 0.002926452266632486, 0.0029772002445853105, 0.0030279482225381354, 0.00307869620049096, 0.003129444178443785, 0.0031801921563966093, 0.003230940134349434, 0.0032816881123022587, 0.003332436090255083, 0.003383184068207908, 0.0034339320461607326, 0.003484680024113557, 0.0035354280020663815, 0.0035861759800192065, 0.003636923957972031, 0.0036876719359248554, 0.0037384199138776803, 0.003789167891830505, 0.0038399158697833297, 0.003890663847736154, 0.003941411825688979, 0.003992159803641804, 0.0040429077815946285, 0.004093655759547453, 0.004144403737500277, 0.0041951517154531015, 0.0042458996934059265, 0.004296647671358751, 0.004347395649311575, 0.0043981436272644, 0.004448891605217225, 0.00449963958317005, 0.004550387561122874, 0.004601135539075699, 0.004651883517028523, 0.004702631494981348, 0.004753379472934173, 0.004804127450886998, 0.004854875428839823, 0.004905623406792648, 0.004956371384745471, 0.005007119362698296, 0.005057867340651121, 0.005108615318603945, 0.00515936329655677, 0.005210111274509595, 0.00526085925246242, 0.005311607230415244, 0.0053623552083680685, 0.0054131031863208934, 0.0054638511642737175, 0.005514599142226542, 0.005565347120179367, 0.005616095098132192, 0.005666843076085016, 0.005717591054037841, 0.005768339031990666, 0.00581908700994349, 0.005869834987896315, 0.00592058296584914, 0.005971330943801965, 0.006022078921754789, 0.006072826899707614, 0.006123574877660438, 0.006174322855613262, 0.006225070833566087, 0.006275818811518912, 0.006326566789471737, 0.006377314767424561, 0.006428062745377386, 0.006478810723330211, 0.006529558701283035, 0.00658030667923586, 0.0066310546571886845, 0.006681802635141509, 0.0067325506130943335, 0.006783298591047158, 0.006834046568999983, 0.006884794546952808, 0.006935542524905632, 0.006986290502858457, 0.007037038480811282, 0.007087786458764106, 0.007138534436716931, 0.007189282414669756, 0.007240030392622581, 0.007290778370575404, 0.007341526348528229, 0.007392274326481054, 0.007443022304433878, 0.007493770282386703, 0.007544518260339528, 0.007595266238292353, 0.007646014216245177, 0.007696762194198002, 0.007747510172150827, 0.007798258150103651, 0.007849006128056476, 0.0078997541060093, 0.007950502083962125, 0.008001250061914949, 0.008051998039867773, 0.008102746017820598, 0.008153493995773423, 0.008204241973726248, 0.008254989951679073, 0.008305737929631898, 0.008356485907584721, 0.008407233885537546, 0.008457981863490371, 0.008508729841443196, 0.00855947781939602, 0.008610225797348844, 0.008660973775301669, 0.008711721753254494, 0.008762469731207319, 0.008813217709160144, 0.008863965687112969, 0.008914713665065794, 0.008965461643018618, 0.00901620962097144, 0.009066957598924265, 0.00911770557687709, 0.009168453554829915, 0.00921920153278274, 0.009269949510735565, 0.00932069748868839, 0.009371445466641213, 0.009422193444594038, 0.009472941422546862, 0.009523689400499687, 0.009574437378452512, 0.009625185356405337, 0.009675933334358162, 0.009726681312310985, 0.00977742929026381, 0.009828177268216635, 0.00987892524616946, 0.009929673224122285, 0.00998042120207511, 0.010031169180027935, 0.010081917157980758, 0.010132665135933583, 0.010183413113886408, 0.010234161091839233, 0.010284909069792058, 0.010335657047744883, 0.010386405025697707, 0.01043715300365053, 0.010487900981603356, 0.01053864895955618, 0.010589396937509005, 0.01064014491546183, 0.010690892893414655, 0.01074164087136748, 0.010792388849320303, 0.010843136827273128, 0.010893884805225953, 0.010944632783178778, 0.010995380761131603, 0.011046128739084428, 0.011096876717037253, 0.011147624694990076, 0.011198372672942901, 0.011249120650895726, 0.01129986862884855, 0.011350616606801376, 0.011401364584754199, 0.011452112562707024, 0.011502860540659847, 0.011553608518612672, 0.011604356496565497, 0.011655104474518322, 0.011705852452471147, 0.011756600430423972, 0.011807348408376796, 0.01185809638632962, 0.011908844364282445, 0.01195959234223527, 0.012010340320188094, 0.01206108829814092, 0.012111836276093744, 0.012162584254046569, 0.012213332231999392, 0.012264080209952217, 0.012314828187905042, 0.012365576165857867, 0.012416324143810692, 0.012467072121763517, 0.012517820099716342, 0.012568568077669167, 0.01261931605562199, 0.012670064033574815, 0.01272081201152764, 0.012771559989480465, 0.01282230796743329, 0.012873055945386114, 0.01292380392333894, 0.012974551901291763, 0.013025299879244587, 0.013076047857197412, 0.013126795835150237, 0.013177543813103062, 0.013228291791055887, 0.013279039769008712, 0.013329787746961535, 0.01338053572491436, 0.013431283702867185, 0.01348203168082001, 0.013532779658772835, 0.01358352763672566, 0.013634275614678485, 0.013685023592631306, 0.013735771570584131, 0.013786519548536956, 0.013837267526489781, 0.013888015504442606, 0.01393876348239543, 0.013989511460348256, 0.014040259438301079, 0.014091007416253904, 0.014141755394206729, 0.014192503372159554, 0.014243251350112379, 0.014293999328065203, 0.014344747306018028, 0.014395495283970852, 0.014446243261923676, 0.014496991239876501, 0.014547739217829326, 0.014598487195782151, 0.014649235173734976, 0.014699983151687801, 0.014750731129640624, 0.014801479107593449, 0.014852227085546274, 0.014902975063499099, 0.014953723041451924, 0.015004471019404749, 0.015055218997357574, 0.015105966975310397, 0.015156714953263222, 0.015207462931216047, 0.015258210909168872, 0.015308958887121697, 0.015359706865074521, 0.015410454843027346, 0.015461202820980171, 0.015511950798932994, 0.01556269877688582, 0.015613446754838644, 0.01566419473279147, 0.015714942710744296, 0.01576569068869712, 0.015816438666649946, 0.01586718664460277, 0.015917934622555592, 0.01596868260050842, 0.016019430578461242, 0.016070178556414065, 0.01612092653436689, 0.016171674512319715, 0.016222422490272538, 0.016273170468225365, 0.016323918446178188, 0.016374666424131015, 0.016425414402083838, 0.016476162380036664, 0.01652691035798949, 0.016577658335942314, 0.016628406313895137, 0.016679154291847964, 0.016729902269800787, 0.016780650247753614, 0.016831398225706437, 0.016882146203659264, 0.016932894181612087, 0.016983642159564914, 0.017034390137517737, 0.017085138115470563, 0.017135886093423387, 0.017186634071376206, 0.017237382049329036, 0.017288130027281856, 0.017338878005234683, 0.017389625983187506, 0.017440373961140333, 0.017491121939093156, 0.01754186991704598, 0.017592617894998806, 0.01764336587295163, 0.017694113850904455, 0.01774486182885728, 0.017795609806810105, 0.01784635778476293, 0.01789710576271575, 0.01794785374066858, 0.0179986017186214, 0.018049349696574228, 0.01810009767452705, 0.018150845652479878, 0.0182015936304327, 0.018252341608385524, 0.01830308958633835, 0.018353837564291174, 0.018404585542244, 0.018455333520196824, 0.01850608149814965, 0.018556829476102474, 0.018607577454055297, 0.018658325432008124, 0.018709073409960947, 0.018759821387913773, 0.018810569365866597, 0.018861317343819423, 0.018912065321772246, 0.01896281329972507, 0.019013561277677896, 0.01906430925563072, 0.019115057233583546, 0.01916580521153637, 0.019216553189489196, 0.01926730116744202, 0.019318049145394842, 0.01936879712334767, 0.019419545101300492, 0.01947029307925332, 0.019521041057206142, 0.01957178903515897, 0.019622537013111792, 0.019673284991064615, 0.01972403296901744, 0.019774780946970265, 0.01982552892492309, 0.019876276902875915, 0.01992702488082874, 0.019977772858781565, 0.020028520836734388, 0.020079268814687214, 0.020130016792640038, 0.020180764770592864, 0.020231512748545687, 0.020282260726498514, 0.020333008704451337, 0.02038375668240416, 0.020434504660356987, 0.02048525263830981, 0.020536000616262637, 0.02058674859421546, 0.020637496572168287, 0.02068824455012111, 0.020738992528073933, 0.02078974050602676, 0.020840488483979583, 0.02089123646193241, 0.020941984439885233, 0.02099273241783806, 0.021043480395790883, 0.021094228373743706, 0.021144976351696532, 0.021195724329649356, 0.021246472307602182, 0.021297220285555005, 0.021347968263507832, 0.021398716241460655, 0.02144946421941348, 0.021500212197366305, 0.021550960175319128, 0.021601708153271955, 0.021652456131224778, 0.021703204109177605, 0.021753952087130428, 0.02180470006508325, 0.021855448043036078, 0.021906196020988897, 0.021956943998941724, 0.022007691976894547, 0.022058439954847374, 0.022109187932800197, 0.02215993591075302, 0.022210683888705847, 0.02226143186665867, 0.022312179844611497, 0.02236292782256432, 0.022413675800517147, 0.02246442377846997, 0.022515171756422793, 0.02256591973437562, 0.022616667712328443, 0.02266741569028127, 0.022718163668234093, 0.02276891164618692, 0.022819659624139742, 0.022870407602092566, 0.022921155580045392, 0.022971903557998215, 0.023022651535951042, 0.023073399513903865, 0.023124147491856692, 0.023174895469809515, 0.02322564344776234, 0.023276391425715165, 0.023327139403667988, 0.023377887381620815, 0.023428635359573638, 0.023479383337526465, 0.023530131315479288, 0.02358087929343211, 0.023631627271384938, 0.02368237524933776, 0.023733123227290587, 0.02378387120524341, 0.023834619183196237, 0.02388536716114906, 0.023936115139101887, 0.02398686311705471, 0.024037611095007533, 0.02408835907296036, 0.024139107050913183, 0.02418985502886601, 0.024240603006818833, 0.02429135098477166, 0.024342098962724483, 0.024392846940677306, 0.024443594918630133, 0.024494342896582956, 0.024545090874535783, 0.024595838852488606, 0.024646586830441432, 0.024697334808394256, 0.02474808278634708, 0.024798830764299905, 0.02484957874225273, 0.024900326720205555, 0.02495107469815838, 0.025001822676111205, 0.02505257065406403, 0.02510331863201685, 0.025154066609969678, 0.0252048145879225, 0.025255562565875328, 0.02530631054382815, 0.025357058521780978, 0.0254078064997338, 0.025458554477686624, 0.02550930245563945, 0.025560050433592274, 0.0256107984115451, 0.025661546389497924, 0.02571229436745075, 0.025763042345403574, 0.025813790323356397, 0.025864538301309224, 0.025915286279262047, 0.025966034257214873, 0.026016782235167697, 0.026067530213120523, 0.026118278191073346, 0.02616902616902617])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_0d1aca1bdf914166b6f6742de8bb6583.x = d3.scale.linear()
              .domain([0.0008457851705666761, 0.02616902616902617])
              .range([0, 400]);

    color_map_0d1aca1bdf914166b6f6742de8bb6583.legend = L.control({position: 'topright'});
    color_map_0d1aca1bdf914166b6f6742de8bb6583.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_0d1aca1bdf914166b6f6742de8bb6583.legend.addTo(map_7047218fe10b4ad38cb2eda9606d4149);

    color_map_0d1aca1bdf914166b6f6742de8bb6583.xAxis = d3.svg.axis()
        .scale(color_map_0d1aca1bdf914166b6f6742de8bb6583.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0008457851705666761, 0.005066325336976592, 0.009286865503386506, 0.013507405669796422, 0.01772794583620634, 0.021948486002616254, 0.02616902616902617]);

    color_map_0d1aca1bdf914166b6f6742de8bb6583.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_0d1aca1bdf914166b6f6742de8bb6583.g = color_map_0d1aca1bdf914166b6f6742de8bb6583.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_0d1aca1bdf914166b6f6742de8bb6583.g.selectAll("rect")
        .data(color_map_0d1aca1bdf914166b6f6742de8bb6583.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_0d1aca1bdf914166b6f6742de8bb6583.x(color_map_0d1aca1bdf914166b6f6742de8bb6583.color.domain()[i - 1]) : color_map_0d1aca1bdf914166b6f6742de8bb6583.x.range()[0],
            x1: i < color_map_0d1aca1bdf914166b6f6742de8bb6583.color.domain().length ? color_map_0d1aca1bdf914166b6f6742de8bb6583.x(color_map_0d1aca1bdf914166b6f6742de8bb6583.color.domain()[i]) : color_map_0d1aca1bdf914166b6f6742de8bb6583.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_0d1aca1bdf914166b6f6742de8bb6583.g.call(color_map_0d1aca1bdf914166b6f6742de8bb6583.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('09_50_MONICA TEREZA AZEREDO BENICIO');

