    
            var map_53c1854ba1f1470fba299c4f656c716a = L.map(
                "map_53c1854ba1f1470fba299c4f656c716a",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_c08a07624d0246d7b7230de956859eca = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_53c1854ba1f1470fba299c4f656c716a);
        
    
            var choropleth_dfc8a709b7e04247af65eff52a0dfae1 = L.featureGroup(
                {}
            ).addTo(map_53c1854ba1f1470fba299c4f656c716a);
        
    
        function geo_json_19fd4b6eed0d48a1a441876246e189ef_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 420: case 482: case 443: case 434: case 441: case 325: case 467: case 393: case 416: case 382: case 423: case 431: case 404: case 394: case 349: case 342: case 334: case 326: case 336: case 329: case 358: case 367: case 460: case 475: case 357: case 481: case 479: case 469: case 366: case 465: case 451: case 450: case 480: case 341: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 439: case 377: case 418: case 448: case 438: case 449: case 447: case 417: case 456: case 466: case 455: case 335: case 468: case 436: case 446: case 392: case 383: case 333: case 398: case 362: case 372: case 327: case 331: case 459: case 463: case 445: case 430: case 429: case 409: case 483: case 399: case 461: case 391: case 388: case 384: case 485: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 462: case 472: case 352: case 432: case 415: case 395: case 390: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 478: case 426: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 437: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_19fd4b6eed0d48a1a441876246e189ef_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_19fd4b6eed0d48a1a441876246e189ef = L.geoJson(null, {
                onEachFeature: geo_json_19fd4b6eed0d48a1a441876246e189ef_onEachFeature,
            
                style: geo_json_19fd4b6eed0d48a1a441876246e189ef_styler,
        });

        function geo_json_19fd4b6eed0d48a1a441876246e189ef_add (data) {
            geo_json_19fd4b6eed0d48a1a441876246e189ef
                .addData(data)
                .addTo(choropleth_dfc8a709b7e04247af65eff52a0dfae1);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_19fd4b6eed0d48a1a441876246e189ef_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_ea11bb3cc60b4ddf8dd663d57805a767 = {};

    
    color_map_ea11bb3cc60b4ddf8dd663d57805a767.color = d3.scale.threshold()
              .domain([4.1072822113607424e-05, 4.3794033173580786e-05, 4.651524423355415e-05, 4.923645529352751e-05, 5.195766635350088e-05, 5.467887741347424e-05, 5.74000884734476e-05, 6.0121299533420964e-05, 6.284251059339433e-05, 6.556372165336769e-05, 6.828493271334105e-05, 7.100614377331441e-05, 7.372735483328777e-05, 7.644856589326114e-05, 7.91697769532345e-05, 8.189098801320786e-05, 8.461219907318122e-05, 8.733341013315458e-05, 9.005462119312794e-05, 9.27758322531013e-05, 9.549704331307467e-05, 9.821825437304804e-05, 0.0001009394654330214, 0.00010366067649299475, 0.00010638188755296812, 0.00010910309861294148, 0.00011182430967291484, 0.0001145455207328882, 0.00011726673179286156, 0.00011998794285283492, 0.0001227091539128083, 0.00012543036497278168, 0.00012815157603275504, 0.0001308727870927284, 0.00013359399815270176, 0.00013631520921267512, 0.00013903642027264848, 0.00014175763133262185, 0.0001444788423925952, 0.00014720005345256857, 0.00014992126451254193, 0.0001526424755725153, 0.00015536368663248866, 0.00015808489769246202, 0.00016080610875243538, 0.00016352731981240874, 0.0001662485308723821, 0.00016896974193235547, 0.00017169095299232883, 0.0001744121640523022, 0.00017713337511227555, 0.0001798545861722489, 0.00018257579723222227, 0.00018529700829219564, 0.000188018219352169, 0.00019073943041214236, 0.00019346064147211572, 0.00019618185253208908, 0.00019890306359206245, 0.0002016242746520358, 0.00020434548571200917, 0.00020706669677198256, 0.00020978790783195592, 0.00021250911889192928, 0.00021523032995190264, 0.000217951541011876, 0.00022067275207184937, 0.00022339396313182273, 0.0002261151741917961, 0.00022883638525176945, 0.00023155759631174282, 0.00023427880737171618, 0.00023700001843168954, 0.0002397212294916629, 0.00024244244055163626, 0.0002451636516116096, 0.00024788486267158296, 0.00025060607373155635, 0.0002533272847915297, 0.00025604849585150307, 0.0002587697069114764, 0.0002614909179714498, 0.00026421212903142313, 0.0002669333400913965, 0.0002696545511513699, 0.00027237576221134324, 0.00027509697327131663, 0.00027781818433128997, 0.00028053939539126336, 0.0002832606064512367, 0.00028598181751121, 0.0002887030285711834, 0.00029142423963115675, 0.00029414545069113014, 0.00029686666175110347, 0.00029958787281107686, 0.0003023090838710502, 0.0003050302949310236, 0.0003077515059909969, 0.0003104727170509703, 0.00031319392811094364, 0.00031591513917091703, 0.00031863635023089037, 0.00032135756129086376, 0.0003240787723508371, 0.0003267999834108105, 0.0003295211944707838, 0.0003322424055307572, 0.00033496361659073054, 0.00033768482765070393, 0.00034040603871067726, 0.00034312724977065065, 0.000345848460830624, 0.0003485696718905974, 0.0003512908829505707, 0.0003540120940105441, 0.00035673330507051743, 0.0003594545161304908, 0.00036217572719046416, 0.00036489693825043755, 0.0003676181493104109, 0.0003703393603703843, 0.00037306057143035766, 0.00037578178249033105, 0.0003785029935503044, 0.00038122420461027777, 0.0003839454156702511, 0.0003866666267302245, 0.00038938783779019783, 0.00039210904885017116, 0.00039483025991014455, 0.0003975514709701179, 0.0004002726820300913, 0.0004029938930900646, 0.000405715104150038, 0.00040843631521001134, 0.0004111575262699847, 0.00041387873732995806, 0.00041659994838993145, 0.0004193211594499048, 0.00042204237050987817, 0.0004247635815698515, 0.0004274847926298249, 0.00043020600368979823, 0.0004329272147497716, 0.00043564842580974495, 0.00043836963686971834, 0.0004410908479296917, 0.00044381205898966507, 0.0004465332700496384, 0.0004492544811096118, 0.0004519756921695851, 0.0004546969032295585, 0.00045741811428953185, 0.00046013932534950524, 0.00046286053640947857, 0.00046558174746945196, 0.0004683029585294253, 0.0004710241695893987, 0.000473745380649372, 0.0004764665917093454, 0.00047918780276931874, 0.00048190901382929213, 0.00048463022488926547, 0.00048735143594923886, 0.0004900726470092122, 0.0004927938580691856, 0.000495515069129159, 0.0004982362801891324, 0.0005009574912491057, 0.0005036787023090791, 0.0005063999133690524, 0.0005091211244290259, 0.0005118423354889992, 0.0005145635465489725, 0.0005172847576089459, 0.0005200059686689193, 0.0005227271797288926, 0.000525448390788866, 0.0005281696018488393, 0.0005308908129088126, 0.000533612023968786, 0.0005363332350287594, 0.0005390544460887328, 0.0005417756571487061, 0.0005444968682086795, 0.0005472180792686529, 0.0005499392903286262, 0.0005526605013885995, 0.000555381712448573, 0.0005581029235085463, 0.0005608241345685197, 0.000563545345628493, 0.0005662665566884663, 0.0005689877677484398, 0.0005717089788084131, 0.0005744301898683864, 0.0005771514009283598, 0.0005798726119883332, 0.0005825938230483065, 0.0005853150341082799, 0.0005880362451682532, 0.0005907574562282267, 0.0005934786672882, 0.0005961998783481733, 0.0005989210894081467, 0.0006016423004681201, 0.0006043635115280934, 0.0006070847225880668, 0.0006098059336480401, 0.0006125271447080136, 0.0006152483557679869, 0.0006179695668279602, 0.0006206907778879336, 0.000623411988947907, 0.0006261332000078803, 0.0006288544110678537, 0.000631575622127827, 0.0006342968331878005, 0.0006370180442477738, 0.0006397392553077471, 0.0006424604663677205, 0.0006451816774276939, 0.0006479028884876672, 0.0006506240995476406, 0.0006533453106076139, 0.0006560665216675873, 0.0006587877327275607, 0.000661508943787534, 0.0006642301548475073, 0.0006669513659074808, 0.0006696725769674541, 0.0006723937880274275, 0.0006751149990874008, 0.0006778362101473742, 0.0006805574212073476, 0.0006832786322673209, 0.0006859998433272942, 0.0006887210543872677, 0.000691442265447241, 0.0006941634765072144, 0.0006968846875671878, 0.0006996058986271612, 0.0007023271096871346, 0.0007050483207471079, 0.0007077695318070812, 0.0007104907428670547, 0.000713211953927028, 0.0007159331649870014, 0.0007186543760469747, 0.0007213755871069481, 0.0007240967981669215, 0.0007268180092268948, 0.0007295392202868681, 0.0007322604313468416, 0.0007349816424068149, 0.0007377028534667883, 0.0007404240645267616, 0.0007431452755867349, 0.0007458664866467084, 0.0007485876977066817, 0.000751308908766655, 0.0007540301198266284, 0.0007567513308866018, 0.0007594725419465751, 0.0007621937530065485, 0.0007649149640665218, 0.0007676361751264953, 0.0007703573861864686, 0.0007730785972464419, 0.0007757998083064153, 0.0007785210193663887, 0.000781242230426362, 0.0007839634414863354, 0.0007866846525463087, 0.0007894058636062822, 0.0007921270746662555, 0.0007948482857262288, 0.0007975694967862022, 0.0008002907078461756, 0.0008030119189061489, 0.0008057331299661223, 0.0008084543410260956, 0.000811175552086069, 0.0008138967631460424, 0.0008166179742060157, 0.0008193391852659891, 0.0008220603963259625, 0.0008247816073859358, 0.0008275028184459092, 0.0008302240295058825, 0.000832945240565856, 0.0008356664516258293, 0.0008383876626858026, 0.000841108873745776, 0.0008438300848057494, 0.0008465512958657227, 0.0008492725069256961, 0.0008519937179856694, 0.0008547149290456428, 0.0008574361401056162, 0.0008601573511655895, 0.0008628785622255628, 0.0008655997732855363, 0.0008683209843455096, 0.000871042195405483, 0.0008737634064654563, 0.0008764846175254297, 0.0008792058285854031, 0.0008819270396453764, 0.0008846482507053497, 0.0008873694617653232, 0.0008900906728252965, 0.0008928118838852699, 0.0008955330949452432, 0.0008982543060052166, 0.00090097551706519, 0.0009036967281251633, 0.0009064179391851366, 0.0009091391502451101, 0.0009118603613050834, 0.0009145815723650567, 0.0009173027834250301, 0.0009200239944850034, 0.0009227452055449769, 0.0009254664166049502, 0.0009281876276649235, 0.0009309088387248969, 0.0009336300497848703, 0.0009363512608448436, 0.000939072471904817, 0.0009417936829647903, 0.0009445148940247638, 0.0009472361050847371, 0.0009499573161447104, 0.0009526785272046838, 0.0009553997382646573, 0.0009581209493246306, 0.000960842160384604, 0.0009635633714445773, 0.0009662845825045508, 0.0009690057935645241, 0.0009717270046244974, 0.0009744482156844708, 0.0009771694267444442, 0.0009798906378044175, 0.0009826118488643909, 0.0009853330599243642, 0.0009880542709843378, 0.000990775482044311, 0.0009934966931042844, 0.0009962179041642578, 0.000998939115224231, 0.0010016603262842044, 0.0010043815373441778, 0.001007102748404151, 0.0010098239594641247, 0.001012545170524098, 0.0010152663815840713, 0.0010179875926440447, 0.001020708803704018, 0.0010234300147639913, 0.0010261512258239647, 0.001028872436883938, 0.0010315936479439116, 0.0010343148590038849, 0.0010370360700638582, 0.0010397572811238316, 0.0010424784921838049, 0.0010451997032437782, 0.0010479209143037518, 0.0010506421253637251, 0.0010533633364236984, 0.0010560845474836718, 0.0010588057585436451, 0.0010615269696036185, 0.0010642481806635918, 0.0010669693917235651, 0.0010696906027835387, 0.001072411813843512, 0.0010751330249034853, 0.0010778542359634587, 0.001080575447023432, 0.0010832966580834053, 0.0010860178691433787, 0.001088739080203352, 0.0010914602912633254, 0.001094181502323299, 0.0010969027133832722, 0.0010996239244432456, 0.001102345135503219, 0.0011050663465631922, 0.0011077875576231656, 0.001110508768683139, 0.0011132299797431122, 0.0011159511908030858, 0.0011186724018630591, 0.0011213936129230325, 0.0011241148239830058, 0.0011268360350429791, 0.0011295572461029525, 0.0011322784571629258, 0.0011349996682228991, 0.0011377208792828727, 0.001140442090342846, 0.0011431633014028194, 0.0011458845124627927, 0.001148605723522766, 0.0011513269345827394, 0.0011540481456427127, 0.001156769356702686, 0.0011594905677626596, 0.001162211778822633, 0.0011649329898826063, 0.0011676542009425796, 0.001170375412002553, 0.0011730966230625263, 0.0011758178341224996, 0.001178539045182473, 0.0011812602562424465, 0.0011839814673024198, 0.0011867026783623932, 0.0011894238894223665, 0.0011921451004823398, 0.0011948663115423132, 0.0011975875226022865, 0.0012003087336622598, 0.0012030299447222334, 0.0012057511557822067, 0.00120847236684218, 0.0012111935779021534, 0.0012139147889621267, 0.0012166360000221, 0.0012193572110820734, 0.0012220784221420467, 0.0012247996332020203, 0.0012275208442619936, 0.001230242055321967, 0.0012329632663819403, 0.0012356844774419136, 0.001238405688501887, 0.0012411268995618603, 0.0012438481106218336, 0.0012465693216818072, 0.0012492905327417805, 0.0012520117438017538, 0.0012547329548617272, 0.0012574541659217005, 0.0012601753769816738, 0.0012628965880416472, 0.0012656177991016205, 0.0012683390101615938, 0.0012710602212215674, 0.0012737814322815407, 0.001276502643341514, 0.0012792238544014874, 0.0012819450654614607, 0.001284666276521434, 0.0012873874875814074, 0.0012901086986413807, 0.0012928299097013543, 0.0012955511207613276, 0.001298272331821301, 0.0013009935428812743, 0.0013037147539412476, 0.001306435965001221, 0.0013091571760611943, 0.0013118783871211676, 0.0013145995981811412, 0.0013173208092411145, 0.0013200420203010879, 0.0013227632313610612, 0.0013254844424210345, 0.0013282056534810079, 0.0013309268645409812, 0.0013336480756009545, 0.001336369286660928, 0.0013390904977209014, 0.0013418117087808747, 0.001344532919840848, 0.0013472541309008214, 0.001349975341960795, 0.0013526965530207683, 0.0013554177640807416, 0.0013581389751407152, 0.0013608601862006885, 0.0013635813972606619, 0.0013663026083206352, 0.0013690238193806085, 0.0013717450304405819, 0.0013744662415005552, 0.0013771874525605285, 0.001379908663620502, 0.0013826298746804754, 0.0013853510857404488, 0.001388072296800422, 0.0013907935078603954, 0.0013935147189203688, 0.001396235929980342, 0.0013989571410403154])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_ea11bb3cc60b4ddf8dd663d57805a767.x = d3.scale.linear()
              .domain([4.1072822113607424e-05, 0.0013989571410403154])
              .range([0, 400]);

    color_map_ea11bb3cc60b4ddf8dd663d57805a767.legend = L.control({position: 'topright'});
    color_map_ea11bb3cc60b4ddf8dd663d57805a767.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_ea11bb3cc60b4ddf8dd663d57805a767.legend.addTo(map_53c1854ba1f1470fba299c4f656c716a);

    color_map_ea11bb3cc60b4ddf8dd663d57805a767.xAxis = d3.svg.axis()
        .scale(color_map_ea11bb3cc60b4ddf8dd663d57805a767.x)
        .orient("top")
        .tickSize(1)
        .tickValues([4.1072822113607424e-05, 0.00026738687526805876, 0.0004937009284225101, 0.0007200149815769614, 0.0009463290347314127, 0.001172643087885864, 0.0013989571410403154]);

    color_map_ea11bb3cc60b4ddf8dd663d57805a767.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_ea11bb3cc60b4ddf8dd663d57805a767.g = color_map_ea11bb3cc60b4ddf8dd663d57805a767.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_ea11bb3cc60b4ddf8dd663d57805a767.g.selectAll("rect")
        .data(color_map_ea11bb3cc60b4ddf8dd663d57805a767.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_ea11bb3cc60b4ddf8dd663d57805a767.x(color_map_ea11bb3cc60b4ddf8dd663d57805a767.color.domain()[i - 1]) : color_map_ea11bb3cc60b4ddf8dd663d57805a767.x.range()[0],
            x1: i < color_map_ea11bb3cc60b4ddf8dd663d57805a767.color.domain().length ? color_map_ea11bb3cc60b4ddf8dd663d57805a767.x(color_map_ea11bb3cc60b4ddf8dd663d57805a767.color.domain()[i]) : color_map_ea11bb3cc60b4ddf8dd663d57805a767.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_ea11bb3cc60b4ddf8dd663d57805a767.g.call(color_map_ea11bb3cc60b4ddf8dd663d57805a767.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('41_13_CLARICE DE FREITAS SILVA AVILA');

