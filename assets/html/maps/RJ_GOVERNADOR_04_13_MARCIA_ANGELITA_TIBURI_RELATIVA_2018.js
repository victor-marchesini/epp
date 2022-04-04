    
            var map_045c5d1ce92c4423b29936b3ad8cd4ba = L.map(
                "map_045c5d1ce92c4423b29936b3ad8cd4ba",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_f0ca938fc8b142f1884d630d82057523 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_045c5d1ce92c4423b29936b3ad8cd4ba);
        
    
            var choropleth_588ec9289796406498f429ad754703b5 = L.featureGroup(
                {}
            ).addTo(map_045c5d1ce92c4423b29936b3ad8cd4ba);
        
    
        function geo_json_31f6bed57bc442ec802ed704f39d717f_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 410: case 440: case 457: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 482: case 422: case 443: case 434: case 441: case 418: case 453: case 435: case 381: case 369: case 392: case 400: case 348: case 350: case 463: case 406: case 485: case 890: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 439: case 412: case 325: case 424: case 438: case 449: case 447: case 467: case 455: case 470: case 352: case 338: case 340: case 333: case 382: case 375: case 427: case 432: case 394: case 358: case 328: case 367: case 387: case 458: case 389: case 414: case 374: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 428: case 478: case 474: case 393: case 416: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 403: case 415: case 408: case 371: case 364: case 359: case 372: case 339: case 331: case 445: case 399: case 471: case 366: case 391: case 477: case 402: case 480: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_31f6bed57bc442ec802ed704f39d717f_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_31f6bed57bc442ec802ed704f39d717f = L.geoJson(null, {
                onEachFeature: geo_json_31f6bed57bc442ec802ed704f39d717f_onEachFeature,
            
                style: geo_json_31f6bed57bc442ec802ed704f39d717f_styler,
        });

        function geo_json_31f6bed57bc442ec802ed704f39d717f_add (data) {
            geo_json_31f6bed57bc442ec802ed704f39d717f
                .addData(data)
                .addTo(choropleth_588ec9289796406498f429ad754703b5);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_31f6bed57bc442ec802ed704f39d717f_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_d68e93fe690e4229ac3407a7d946fde3 = {};

    
    color_map_d68e93fe690e4229ac3407a7d946fde3.color = d3.scale.threshold()
              .domain([0.007675438596491228, 0.007848043548671633, 0.008020648500852037, 0.008193253453032442, 0.008365858405212848, 0.008538463357393252, 0.008711068309573657, 0.008883673261754061, 0.009056278213934467, 0.009228883166114872, 0.009401488118295276, 0.009574093070475681, 0.009746698022656087, 0.00991930297483649, 0.010091907927016896, 0.010264512879197302, 0.010437117831377705, 0.010609722783558111, 0.010782327735738517, 0.01095493268791892, 0.011127537640099326, 0.011300142592279731, 0.011472747544460135, 0.01164535249664054, 0.011817957448820946, 0.01199056240100135, 0.012163167353181755, 0.012335772305362161, 0.012508377257542565, 0.01268098220972297, 0.012853587161903376, 0.01302619211408378, 0.013198797066264185, 0.013371402018444589, 0.013544006970624994, 0.013716611922805398, 0.013889216874985805, 0.01406182182716621, 0.014234426779346615, 0.014407031731527018, 0.014579636683707424, 0.014752241635887828, 0.014924846588068235, 0.015097451540248639, 0.015270056492429044, 0.015442661444609448, 0.015615266396789854, 0.015787871348970257, 0.01596047630115066, 0.016133081253331065, 0.016305686205511476, 0.01647829115769188, 0.016650896109872283, 0.016823501062052687, 0.01699610601423309, 0.017168710966413498, 0.017341315918593902, 0.01751392087077431, 0.017686525822954713, 0.017859130775135117, 0.01803173572731552, 0.018204340679495924, 0.018376945631676335, 0.01854955058385674, 0.018722155536037142, 0.018894760488217546, 0.01906736544039795, 0.019239970392578357, 0.01941257534475876, 0.01958518029693917, 0.019757785249119572, 0.019930390201299976, 0.02010299515348038, 0.020275600105660783, 0.02044820505784119, 0.020620810010021598, 0.020793414962202002, 0.020966019914382406, 0.02113862486656281, 0.021311229818743217, 0.02148383477092362, 0.021656439723104028, 0.02182904467528443, 0.022001649627464835, 0.02217425457964524, 0.022346859531825643, 0.02251946448400605, 0.022692069436186454, 0.02286467438836686, 0.023037279340547265, 0.02320988429272767, 0.023382489244908072, 0.02355509419708848, 0.023727699149268883, 0.02390030410144929, 0.024072909053629694, 0.024245514005810098, 0.024418118957990502, 0.024590723910170906, 0.024763328862351316, 0.02493593381453172, 0.025108538766712124, 0.025281143718892528, 0.02545374867107293, 0.02562635362325334, 0.025798958575433743, 0.025971563527614146, 0.026144168479794554, 0.026316773431974957, 0.026489378384155365, 0.02666198333633577, 0.026834588288516172, 0.027007193240696576, 0.02717979819287698, 0.027352403145057387, 0.02752500809723779, 0.027697613049418198, 0.027870218001598602, 0.028042822953779006, 0.028215427905959413, 0.028388032858139817, 0.02856063781032022, 0.028733242762500624, 0.02890584771468103, 0.02907845266686144, 0.029251057619041843, 0.029423662571222246, 0.02959626752340265, 0.029768872475583057, 0.02994147742776346, 0.030114082379943865, 0.03028668733212427, 0.030459292284304672, 0.030631897236485083, 0.030804502188665487, 0.03097710714084589, 0.031149712093026295, 0.0313223170452067, 0.031494921997387106, 0.03166752694956751, 0.03184013190174791, 0.03201273685392832, 0.03218534180610873, 0.03235794675828913, 0.032530551710469535, 0.03270315666264994, 0.03287576161483034, 0.03304836656701075, 0.03322097151919115, 0.03339357647137156, 0.033566181423551965, 0.03373878637573237, 0.03391139132791278, 0.034083996280093176, 0.03425660123227359, 0.034429206184453984, 0.034601811136634394, 0.0347744160888148, 0.0349470210409952, 0.03511962599317561, 0.03529223094535601, 0.03546483589753642, 0.035637440849716824, 0.03581004580189723, 0.03598265075407763, 0.036155255706258035, 0.03632786065843844, 0.03650046561061885, 0.036673070562799254, 0.03684567551497966, 0.03701828046716006, 0.037190885419340465, 0.03736349037152087, 0.03753609532370128, 0.037708700275881676, 0.03788130522806209, 0.0380539101802425, 0.038226515132422895, 0.038399120084603305, 0.0385717250367837, 0.03874432998896411, 0.03891693494114452, 0.03908953989332492, 0.03926214484550532, 0.03943474979768573, 0.03960735474986614, 0.039779959702046536, 0.039952564654226946, 0.04012516960640736, 0.040297774558587754, 0.040470379510768165, 0.04064298446294856, 0.04081558941512897, 0.04098819436730938, 0.04116079931948978, 0.04133340427167019, 0.04150600922385059, 0.041678614176031, 0.04185121912821141, 0.042023824080391806, 0.042196429032572216, 0.04236903398475261, 0.042541638936933024, 0.04271424388911342, 0.04288684884129383, 0.04305945379347424, 0.04323205874565464, 0.04340466369783505, 0.04357726865001545, 0.04374987360219586, 0.043922478554376254, 0.044095083506556665, 0.04426768845873706, 0.04444029341091747, 0.04461289836309788, 0.04478550331527828, 0.04495810826745869, 0.04513071321963909, 0.0453033181718195, 0.045475923123999895, 0.045648528076180306, 0.0458211330283607, 0.04599373798054111, 0.046166342932721524, 0.04633894788490192, 0.04651155283708233, 0.04668415778926273, 0.04685676274144314, 0.04702936769362355, 0.04720197264580395, 0.04737457759798436, 0.047547182550164754, 0.047719787502345165, 0.047892392454525576, 0.04806499740670597, 0.04823760235888638, 0.04841020731106678, 0.04858281226324719, 0.0487554172154276, 0.048928022167608, 0.04910062711978841, 0.04927323207196882, 0.04944583702414922, 0.04961844197632963, 0.049791046928510024, 0.049963651880690435, 0.05013625683287083, 0.05030886178505124, 0.05048146673723165, 0.05065407168941205, 0.05082667664159246, 0.05099928159377286, 0.05117188654595327, 0.051344491498133665, 0.051517096450314076, 0.05168970140249447, 0.051862306354674884, 0.052034911306855294, 0.05220751625903569, 0.0523801212112161, 0.0525527261633965, 0.05272533111557691, 0.052897936067757306, 0.05307054101993772, 0.053243145972118114, 0.053415750924298525, 0.053588355876478935, 0.05376096082865933, 0.05393356578083974, 0.05410617073302014, 0.05427877568520055, 0.05445138063738096, 0.05462398558956136, 0.05479659054174177, 0.054969195493922166, 0.055141800446102576, 0.05531440539828299, 0.055487010350463384, 0.055659615302643795, 0.05583222025482419, 0.0560048252070046, 0.05617743015918501, 0.05635003511136541, 0.05652264006354582, 0.05669524501572622, 0.05686784996790663, 0.05704045492008704, 0.057213059872267436, 0.057385664824447846, 0.05755826977662824, 0.057730874728808654, 0.057903479680989065, 0.05807608463316946, 0.05824868958534987, 0.05842129453753027, 0.05859389948971068, 0.058766504441891076, 0.05893910939407149, 0.059111714346251884, 0.059284319298432295, 0.059456924250612705, 0.0596295292027931, 0.05980213415497351, 0.05997473910715391, 0.06014734405933432, 0.06031994901151472, 0.06049255396369513, 0.060665158915875525, 0.060837763868055936, 0.061010368820236346, 0.06118297377241674, 0.061355578724597154, 0.06152818367677755, 0.06170078862895796, 0.06187339358113837, 0.06204599853331877, 0.06221860348549918, 0.06239120843767958, 0.06256381338985999, 0.0627364183420404, 0.0629090232942208, 0.0630816282464012, 0.0632542331985816, 0.06342683815076201, 0.06359944310294242, 0.06377204805512282, 0.06394465300730323, 0.06411725795948363, 0.06428986291166404, 0.06446246786384445, 0.06463507281602485, 0.06480767776820526, 0.06498028272038565, 0.06515288767256606, 0.06532549262474648, 0.06549809757692687, 0.06567070252910728, 0.06584330748128768, 0.06601591243346809, 0.06618851738564849, 0.0663611223378289, 0.0665337272900093, 0.0667063322421897, 0.06687893719437012, 0.06705154214655051, 0.06722414709873092, 0.06739675205091132, 0.06756935700309173, 0.06774196195527213, 0.06791456690745254, 0.06808717185963295, 0.06825977681181335, 0.06843238176399376, 0.06860498671617415, 0.06877759166835457, 0.06895019662053496, 0.06912280157271537, 0.06929540652489578, 0.06946801147707618, 0.06964061642925659, 0.06981322138143699, 0.0699858263336174, 0.07015843128579781, 0.0703310362379782, 0.0705036411901586, 0.07067624614233901, 0.07084885109451941, 0.07102145604669982, 0.07119406099888023, 0.07136666595106063, 0.07153927090324104, 0.07171187585542144, 0.07188448080760185, 0.07205708575978226, 0.07222969071196265, 0.07240229566414307, 0.07257490061632348, 0.07274750556850387, 0.07292011052068428, 0.07309271547286468, 0.07326532042504509, 0.07343792537722549, 0.0736105303294059, 0.07378313528158631, 0.0739557402337667, 0.07412834518594712, 0.07430095013812753, 0.07447355509030792, 0.07464616004248832, 0.07481876499466873, 0.07499136994684914, 0.07516397489902954, 0.07533657985120994, 0.07550918480339036, 0.07568178975557076, 0.07585439470775115, 0.07602699965993158, 0.07619960461211198, 0.07637220956429237, 0.07654481451647277, 0.0767174194686532, 0.07689002442083359, 0.07706262937301399, 0.07723523432519441, 0.07740783927737481, 0.0775804442295552, 0.07775304918173562, 0.07792565413391603, 0.07809825908609642, 0.07827086403827682, 0.07844346899045725, 0.07861607394263764, 0.07878867889481804, 0.07896128384699845, 0.07913388879917886, 0.07930649375135926, 0.07947909870353967, 0.07965170365572007, 0.07982430860790048, 0.07999691356008087, 0.08016951851226128, 0.0803421234644417, 0.08051472841662209, 0.0806873333688025, 0.0808599383209829, 0.08103254327316331, 0.08120514822534372, 0.08137775317752412, 0.08155035812970453, 0.08172296308188494, 0.08189556803406534, 0.08206817298624573, 0.08224077793842614, 0.08241338289060655, 0.08258598784278695, 0.08275859279496735, 0.08293119774714777, 0.08310380269932817, 0.08327640765150857, 0.08344901260368899, 0.08362161755586939, 0.08379422250804978, 0.08396682746023018, 0.0841394324124106, 0.084312037364591, 0.0844846423167714, 0.08465724726895182, 0.08482985222113222, 0.08500245717331262, 0.08517506212549303, 0.08534766707767344, 0.08552027202985384, 0.08569287698203423, 0.08586548193421466, 0.08603808688639505, 0.08621069183857545, 0.08638329679075586, 0.08655590174293627, 0.08672850669511667, 0.08690111164729708, 0.08707371659947748, 0.08724632155165789, 0.08741892650383828, 0.0875915314560187, 0.0877641364081991, 0.0879367413603795, 0.08810934631255991, 0.08828195126474031, 0.08845455621692072, 0.08862716116910113, 0.08879976612128153, 0.08897237107346194, 0.08914497602564234, 0.08931758097782275, 0.08949018593000314, 0.08966279088218355, 0.08983539583436397, 0.09000800078654436, 0.09018060573872477, 0.09035321069090518, 0.09052581564308558, 0.09069842059526598, 0.0908710255474464, 0.0910436304996268, 0.0912162354518072, 0.09138884040398759, 0.09156144535616802, 0.09173405030834841, 0.09190665526052881, 0.09207926021270924, 0.09225186516488963, 0.09242447011707003, 0.09259707506925044, 0.09276968002143085, 0.09294228497361125, 0.09311488992579164, 0.09328749487797207, 0.09346009983015247, 0.09363270478233286, 0.09380530973451327])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_d68e93fe690e4229ac3407a7d946fde3.x = d3.scale.linear()
              .domain([0.007675438596491228, 0.09380530973451327])
              .range([0, 400]);

    color_map_d68e93fe690e4229ac3407a7d946fde3.legend = L.control({position: 'topright'});
    color_map_d68e93fe690e4229ac3407a7d946fde3.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_d68e93fe690e4229ac3407a7d946fde3.legend.addTo(map_045c5d1ce92c4423b29936b3ad8cd4ba);

    color_map_d68e93fe690e4229ac3407a7d946fde3.xAxis = d3.svg.axis()
        .scale(color_map_d68e93fe690e4229ac3407a7d946fde3.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.007675438596491228, 0.022030417119494904, 0.036385395642498576, 0.050740374165502256, 0.06509535268850593, 0.0794503312115096, 0.09380530973451327]);

    color_map_d68e93fe690e4229ac3407a7d946fde3.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_d68e93fe690e4229ac3407a7d946fde3.g = color_map_d68e93fe690e4229ac3407a7d946fde3.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_d68e93fe690e4229ac3407a7d946fde3.g.selectAll("rect")
        .data(color_map_d68e93fe690e4229ac3407a7d946fde3.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_d68e93fe690e4229ac3407a7d946fde3.x(color_map_d68e93fe690e4229ac3407a7d946fde3.color.domain()[i - 1]) : color_map_d68e93fe690e4229ac3407a7d946fde3.x.range()[0],
            x1: i < color_map_d68e93fe690e4229ac3407a7d946fde3.color.domain().length ? color_map_d68e93fe690e4229ac3407a7d946fde3.x(color_map_d68e93fe690e4229ac3407a7d946fde3.color.domain()[i]) : color_map_d68e93fe690e4229ac3407a7d946fde3.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_d68e93fe690e4229ac3407a7d946fde3.g.call(color_map_d68e93fe690e4229ac3407a7d946fde3.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('04_13_MARCIA ANGELITA TIBURI');

