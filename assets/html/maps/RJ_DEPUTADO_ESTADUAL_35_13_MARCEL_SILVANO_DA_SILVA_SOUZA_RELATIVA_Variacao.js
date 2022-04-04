    
            var map_de44d28370d44e07b22cfc4d4f37c84b = L.map(
                "map_de44d28370d44e07b22cfc4d4f37c84b",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_d685d8b8ae004fb89e40986792eecb4a = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_de44d28370d44e07b22cfc4d4f37c84b);
        
    
            var choropleth_9f8869f06e1f42a39842893120bfa427 = L.featureGroup(
                {}
            ).addTo(map_de44d28370d44e07b22cfc4d4f37c84b);
        
    
        function geo_json_2563ff07b99f475c9512929bdb9e9b10_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 434: case 428: case 325: case 452: case 380: case 345: case 393: case 426: case 400: case 423: case 432: case 431: case 404: case 354: case 349: case 342: case 336: case 331: case 358: case 330: case 367: case 460: case 475: case 357: case 481: case 479: case 366: case 391: case 402: case 341: case 512: case 485: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 441: case 467: case 437: case 384: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 439: case 377: case 412: case 438: case 449: case 466: case 335: case 403: case 478: case 444: case 363: case 383: case 427: case 415: case 408: case 371: case 373: case 401: case 394: case 334: case 327: case 326: case 360: case 459: case 463: case 409: case 477: case 511: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 440: case 448: case 447: case 435: case 442: case 436: case 392: case 480: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_2563ff07b99f475c9512929bdb9e9b10_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_2563ff07b99f475c9512929bdb9e9b10 = L.geoJson(null, {
                onEachFeature: geo_json_2563ff07b99f475c9512929bdb9e9b10_onEachFeature,
            
                style: geo_json_2563ff07b99f475c9512929bdb9e9b10_styler,
        });

        function geo_json_2563ff07b99f475c9512929bdb9e9b10_add (data) {
            geo_json_2563ff07b99f475c9512929bdb9e9b10
                .addData(data)
                .addTo(choropleth_9f8869f06e1f42a39842893120bfa427);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_2563ff07b99f475c9512929bdb9e9b10_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_f0396f605b0f4c76bacae8d71b7ed13f = {};

    
    color_map_f0396f605b0f4c76bacae8d71b7ed13f.color = d3.scale.threshold()
              .domain([3.1409994660300905e-05, 3.4026203880865284e-05, 3.664241310142966e-05, 3.9258622321994036e-05, 4.1874831542558415e-05, 4.449104076312279e-05, 4.710724998368717e-05, 4.972345920425154e-05, 5.233966842481592e-05, 5.49558776453803e-05, 5.757208686594467e-05, 6.018829608650905e-05, 6.280450530707344e-05, 6.54207145276378e-05, 6.803692374820218e-05, 7.065313296876656e-05, 7.326934218933093e-05, 7.588555140989532e-05, 7.850176063045969e-05, 8.111796985102406e-05, 8.373417907158844e-05, 8.635038829215281e-05, 8.89665975127172e-05, 9.158280673328157e-05, 9.419901595384596e-05, 9.681522517441033e-05, 9.94314343949747e-05, 0.00010204764361553909, 0.00010466385283610345, 0.00010728006205666784, 0.00010989627127723221, 0.0001125124804977966, 0.00011512868971836097, 0.00011774489893892534, 0.00012036110815948973, 0.0001229773173800541, 0.00012559352660061846, 0.00012820973582118285, 0.00013082594504174722, 0.0001334421542623116, 0.00013605836348287598, 0.00013867457270344037, 0.00014129078192400474, 0.0001439069911445691, 0.0001465232003651335, 0.00014913940958569786, 0.00015175561880626223, 0.00015437182802682662, 0.000156988037247391, 0.00015960424646795538, 0.00016222045568851977, 0.00016483666490908414, 0.0001674528741296485, 0.00017006908335021287, 0.00017268529257077726, 0.00017530150179134165, 0.00017791771101190602, 0.00018053392023247039, 0.00018315012945303478, 0.00018576633867359914, 0.0001883825478941635, 0.0001909987571147279, 0.0001936149663352923, 0.00019623117555585666, 0.00019884738477642103, 0.0002014635939969854, 0.00020407980321754979, 0.00020669601243811415, 0.00020931222165867854, 0.0002119284308792429, 0.0002145446400998073, 0.00021716084932037167, 0.00021977705854093604, 0.0002223932677615004, 0.00022500947698206482, 0.0002276256862026292, 0.00023024189542319355, 0.00023285810464375792, 0.0002354743138643223, 0.00023809052308488668, 0.00024070673230545104, 0.00024332294152601544, 0.0002459391507465798, 0.00024855535996714417, 0.00025117156918770853, 0.0002537877784082729, 0.0002564039876288373, 0.0002590201968494017, 0.00026163640606996605, 0.0002642526152905304, 0.00026686882451109484, 0.0002694850337316592, 0.00027210124295222357, 0.000274717452172788, 0.0002773336613933523, 0.00027994987061391667, 0.0002825660798344811, 0.00028518228905504545, 0.0002877984982756098, 0.00029041470749617424, 0.0002930309167167386, 0.00029564712593730297, 0.00029826333515786733, 0.0003008795443784317, 0.00030349575359899607, 0.00030611196281956043, 0.0003087281720401248, 0.0003113443812606892, 0.0003139605904812536, 0.000316576799701818, 0.00031919300892238237, 0.00032180921814294673, 0.0003244254273635111, 0.00032704163658407547, 0.00032965784580463983, 0.00033227405502520425, 0.0003348902642457686, 0.000337506473466333, 0.00034012268268689735, 0.0003427388919074617, 0.0003453551011280261, 0.00034797131034859045, 0.00035058751956915487, 0.0003532037287897193, 0.00035581993801028365, 0.000358436147230848, 0.0003610523564514124, 0.00036366856567197675, 0.0003662847748925411, 0.0003689009841131055, 0.00037151719333366985, 0.00037413340255423427, 0.00037674961177479863, 0.000379365820995363, 0.00038198203021592737, 0.0003845982394364918, 0.00038721444865705615, 0.0003898306578776205, 0.0003924468670981849, 0.0003950630763187493, 0.00039767928553931367, 0.00040029549475987803, 0.0004029117039804424, 0.00040552791320100677, 0.00040814412242157113, 0.0004107603316421355, 0.00041337654086269986, 0.0004159927500832643, 0.0004186089593038287, 0.00042122516852439307, 0.00042384137774495743, 0.0004264575869655218, 0.00042907379618608617, 0.00043169000540665053, 0.0004343062146272149, 0.0004369224238477793, 0.0004395386330683437, 0.00044215484228890805, 0.0004447710515094724, 0.0004473872607300368, 0.00045000346995060115, 0.00045261967917116557, 0.00045523588839172993, 0.00045785209761229435, 0.0004604683068328587, 0.0004630845160534231, 0.00046570072527398745, 0.0004683169344945518, 0.0004709331437151162, 0.00047354935293568055, 0.0004761655621562449, 0.00047878177137680933, 0.0004813979805973737, 0.0004840141898179381, 0.0004866303990385025, 0.0004892466082590669, 0.0004918628174796312, 0.0004944790267001956, 0.00049709523592076, 0.0004997114451413244, 0.0005023276543618888, 0.0005049438635824532, 0.0005075600728030175, 0.0005101762820235819, 0.0005127924912441463, 0.0005154087004647106, 0.0005180249096852751, 0.0005206411189058393, 0.0005232573281264037, 0.0005258735373469681, 0.0005284897465675324, 0.0005311059557880969, 0.0005337221650086613, 0.0005363383742292257, 0.00053895458344979, 0.0005415707926703544, 0.0005441870018909187, 0.0005468032111114831, 0.0005494194203320476, 0.0005520356295526118, 0.0005546518387731763, 0.0005572680479937406, 0.000559884257214305, 0.0005625004664348693, 0.0005651166756554338, 0.0005677328848759982, 0.0005703490940965625, 0.000572965303317127, 0.0005755815125376912, 0.0005781977217582557, 0.00058081393097882, 0.0005834301401993845, 0.0005860463494199487, 0.0005886625586405132, 0.0005912787678610776, 0.0005938949770816419, 0.0005965111863022063, 0.0005991273955227706, 0.0006017436047433351, 0.0006043598139638994, 0.0006069760231844639, 0.0006095922324050281, 0.0006122084416255926, 0.000614824650846157, 0.0006174408600667213, 0.0006200570692872857, 0.00062267327850785, 0.0006252894877284144, 0.0006279056969489788, 0.0006305219061695431, 0.0006331381153901076, 0.000635754324610672, 0.0006383705338312364, 0.0006409867430518007, 0.0006436029522723651, 0.0006462191614929294, 0.0006488353707134938, 0.0006514515799340582, 0.0006540677891546225, 0.000656683998375187, 0.0006593002075957513, 0.0006619164168163158, 0.00066453262603688, 0.0006671488352574445, 0.0006697650444780088, 0.0006723812536985732, 0.0006749974629191377, 0.000677613672139702, 0.0006802298813602664, 0.0006828460905808307, 0.0006854622998013952, 0.0006880785090219594, 0.0006906947182425239, 0.0006933109274630881, 0.0006959271366836526, 0.000698543345904217, 0.0007011595551247813, 0.0007037757643453458, 0.0007063919735659101, 0.0007090081827864746, 0.0007116243920070388, 0.0007142406012276033, 0.0007168568104481677, 0.000719473019668732, 0.0007220892288892964, 0.0007247054381098607, 0.0007273216473304251, 0.0007299378565509895, 0.0007325540657715538, 0.0007351702749921182, 0.0007377864842126827, 0.000740402693433247, 0.0007430189026538114, 0.0007456351118743758, 0.0007482513210949401, 0.0007508675303155045, 0.0007534837395360689, 0.0007560999487566332, 0.0007587161579771977, 0.000761332367197762, 0.0007639485764183265, 0.0007665647856388907, 0.0007691809948594552, 0.0007717972040800195, 0.0007744134133005839, 0.0007770296225211484, 0.0007796458317417126, 0.0007822620409622771, 0.0007848782501828414, 0.0007874944594034059, 0.0007901106686239701, 0.0007927268778445346, 0.0007953430870650988, 0.0007979592962856633, 0.0008005755055062277, 0.000803191714726792, 0.0008058079239473565, 0.0008084241331679208, 0.0008110403423884853, 0.0008136565516090495, 0.000816272760829614, 0.0008188889700501782, 0.0008215051792707427, 0.0008241213884913071, 0.0008267375977118714, 0.0008293538069324358, 0.0008319700161530002, 0.0008345862253735645, 0.0008372024345941289, 0.0008398186438146934, 0.0008424348530352578, 0.0008450510622558221, 0.0008476672714763865, 0.0008502834806969508, 0.0008528996899175152, 0.0008555158991380796, 0.000858132108358644, 0.0008607483175792084, 0.0008633645267997727, 0.0008659807360203372, 0.0008685969452409014, 0.0008712131544614659, 0.0008738293636820302, 0.0008764455729025946, 0.000879061782123159, 0.0008816779913437233, 0.0008842942005642878, 0.0008869104097848521, 0.0008895266190054166, 0.0008921428282259808, 0.0008947590374465453, 0.0008973752466671095, 0.000899991455887674, 0.0009026076651082385, 0.0009052238743288027, 0.0009078400835493672, 0.0009104562927699315, 0.000913072501990496, 0.0009156887112110602, 0.0009183049204316247, 0.0009209211296521889, 0.0009235373388727534, 0.0009261535480933178, 0.0009287697573138821, 0.0009313859665344465, 0.0009340021757550109, 0.0009366183849755754, 0.0009392345941961396, 0.0009418508034167041, 0.0009444670126372685, 0.0009470832218578328, 0.0009496994310783972, 0.0009523156402989615, 0.0009549318495195259, 0.0009575480587400903, 0.0009601642679606546, 0.000962780477181219, 0.0009653966864017834, 0.0009680128956223479, 0.0009706291048429122, 0.0009732453140634766, 0.000975861523284041, 0.0009784777325046053, 0.0009810939417251698, 0.000983710150945734, 0.0009863263601662985, 0.0009889425693868628, 0.0009915587786074273, 0.0009941749878279915, 0.000996791197048556, 0.0009994074062691202, 0.0010020236154896847, 0.0010046398247102492, 0.0010072560339308134, 0.001009872243151378, 0.0010124884523719424, 0.0010151046615925067, 0.0010177208708130711, 0.0010203370800336354, 0.0010229532892541999, 0.0010255694984747641, 0.0010281857076953286, 0.001030801916915893, 0.0010334181261364573, 0.0010360343353570218, 0.001038650544577586, 0.0010412667537981505, 0.0010438829630187148, 0.0010464991722392793, 0.0010491153814598437, 0.001051731590680408, 0.0010543477999009722, 0.0010569640091215367, 0.0010595802183421012, 0.0010621964275626655, 0.0010648126367832297, 0.0010674288460037944, 0.0010700450552243587, 0.001072661264444923, 0.0010752774736654874, 0.0010778936828860519, 0.0010805098921066161, 0.0010831261013271804, 0.0010857423105477449, 0.0010883585197683093, 0.0010909747289888736, 0.0010935909382094378, 0.0010962071474300025, 0.0010988233566505668, 0.001101439565871131, 0.0011040557750916955, 0.00110667198431226, 0.0011092881935328243, 0.0011119044027533885, 0.0011145206119739532, 0.0011171368211945175, 0.0011197530304150817, 0.001122369239635646, 0.0011249854488562107, 0.001127601658076775, 0.0011302178672973392, 0.0011328340765179037, 0.0011354502857384681, 0.0011380664949590324, 0.0011406827041795966, 0.0011432989134001613, 0.0011459151226207256, 0.0011485313318412899, 0.0011511475410618543, 0.0011537637502824188, 0.001156379959502983, 0.0011589961687235473, 0.0011616123779441118, 0.0011642285871646763, 0.0011668447963852405, 0.0011694610056058048, 0.0011720772148263695, 0.0011746934240469337, 0.001177309633267498, 0.0011799258424880625, 0.001182542051708627, 0.0011851582609291912, 0.0011877744701497554, 0.00119039067937032, 0.0011930068885908844, 0.0011956230978114487, 0.0011982393070320131, 0.0012008555162525774, 0.0012034717254731419, 0.0012060879346937061, 0.0012087041439142706, 0.001211320353134835, 0.0012139365623553993, 0.0012165527715759638, 0.001219168980796528, 0.0012217851900170925, 0.0012244013992376568, 0.0012270176084582213, 0.0012296338176787855, 0.00123225002689935, 0.0012348662361199145, 0.0012374824453404787, 0.0012400986545610432, 0.0012427148637816075, 0.001245331073002172, 0.0012479472822227362, 0.0012505634914433007, 0.001253179700663865, 0.0012557959098844294, 0.0012584121191049936, 0.0012610283283255581, 0.0012636445375461226, 0.0012662607467666869, 0.0012688769559872511, 0.0012714931652078156, 0.00127410937442838, 0.0012767255836489443, 0.0012793417928695088, 0.0012819580020900733, 0.0012845742113106375, 0.0012871904205312018, 0.0012898066297517663, 0.0012924228389723307, 0.001295039048192895, 0.0012976552574134592, 0.001300271466634024, 0.0013028876758545882, 0.0013055038850751524, 0.001308120094295717, 0.0013107363035162814, 0.0013133525127368457, 0.00131596872195741, 0.0013185849311779746, 0.0013212011403985389, 0.0013238173496191031, 0.0013264335588396674, 0.001329049768060232, 0.0013316659772807963, 0.0013342821865013606, 0.0013368983957219248])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_f0396f605b0f4c76bacae8d71b7ed13f.x = d3.scale.linear()
              .domain([3.1409994660300905e-05, 0.0013368983957219248])
              .range([0, 400]);

    color_map_f0396f605b0f4c76bacae8d71b7ed13f.legend = L.control({position: 'topright'});
    color_map_f0396f605b0f4c76bacae8d71b7ed13f.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_f0396f605b0f4c76bacae8d71b7ed13f.legend.addTo(map_de44d28370d44e07b22cfc4d4f37c84b);

    color_map_f0396f605b0f4c76bacae8d71b7ed13f.xAxis = d3.svg.axis()
        .scale(color_map_f0396f605b0f4c76bacae8d71b7ed13f.x)
        .orient("top")
        .tickSize(1)
        .tickValues([3.1409994660300905e-05, 0.00024899139483723826, 0.0004665727950141756, 0.0006841541951911129, 0.0009017355953680503, 0.0011193169955449878, 0.001336898395721925]);

    color_map_f0396f605b0f4c76bacae8d71b7ed13f.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_f0396f605b0f4c76bacae8d71b7ed13f.g = color_map_f0396f605b0f4c76bacae8d71b7ed13f.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_f0396f605b0f4c76bacae8d71b7ed13f.g.selectAll("rect")
        .data(color_map_f0396f605b0f4c76bacae8d71b7ed13f.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_f0396f605b0f4c76bacae8d71b7ed13f.x(color_map_f0396f605b0f4c76bacae8d71b7ed13f.color.domain()[i - 1]) : color_map_f0396f605b0f4c76bacae8d71b7ed13f.x.range()[0],
            x1: i < color_map_f0396f605b0f4c76bacae8d71b7ed13f.color.domain().length ? color_map_f0396f605b0f4c76bacae8d71b7ed13f.x(color_map_f0396f605b0f4c76bacae8d71b7ed13f.color.domain()[i]) : color_map_f0396f605b0f4c76bacae8d71b7ed13f.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_f0396f605b0f4c76bacae8d71b7ed13f.g.call(color_map_f0396f605b0f4c76bacae8d71b7ed13f.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('35_13_MARCEL SILVANO DA SILVA SOUZA');

