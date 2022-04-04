    
            var map_2cd125d7411f43dabaecb7a4e5d09331 = L.map(
                "map_2cd125d7411f43dabaecb7a4e5d09331",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_899af9bed4244eaf8af76e5ec93bbf08 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_2cd125d7411f43dabaecb7a4e5d09331);
        
    
            var choropleth_f88b0eb8ecc141859af9602fce097008 = L.featureGroup(
                {}
            ).addTo(map_2cd125d7411f43dabaecb7a4e5d09331);
        
    
        function geo_json_5e5658d21a5d46bcba12c1164d803546_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 422: case 439: case 377: case 441: case 418: case 424: case 417: case 462: case 455: case 335: case 403: case 380: case 436: case 393: case 381: case 369: case 352: case 392: case 338: case 333: case 400: case 396: case 382: case 427: case 419: case 397: case 373: case 364: case 398: case 346: case 390: case 368: case 327: case 339: case 329: case 331: case 330: case 328: case 367: case 356: case 347: case 355: case 350: case 337: case 463: case 429: case 409: case 483: case 471: case 461: case 378: case 480: case 510: case 405: case 414: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 453: case 467: case 466: case 472: case 470: case 478: case 442: case 446: case 432: case 415: case 326: case 457: case 459: case 454: case 445: case 430: case 465: case 477: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 411: case 370: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_5e5658d21a5d46bcba12c1164d803546_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_5e5658d21a5d46bcba12c1164d803546 = L.geoJson(null, {
                onEachFeature: geo_json_5e5658d21a5d46bcba12c1164d803546_onEachFeature,
            
                style: geo_json_5e5658d21a5d46bcba12c1164d803546_styler,
        });

        function geo_json_5e5658d21a5d46bcba12c1164d803546_add (data) {
            geo_json_5e5658d21a5d46bcba12c1164d803546
                .addData(data)
                .addTo(choropleth_f88b0eb8ecc141859af9602fce097008);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_5e5658d21a5d46bcba12c1164d803546_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_f300d38859ef41a8a0274e429b5c8a16 = {};

    
    color_map_f300d38859ef41a8a0274e429b5c8a16.color = d3.scale.threshold()
              .domain([0.0, 1.0565947360450251e-05, 2.1131894720900502e-05, 3.1697842081350753e-05, 4.2263789441801005e-05, 5.282973680225125e-05, 6.339568416270151e-05, 7.396163152315174e-05, 8.452757888360201e-05, 9.509352624405226e-05, 0.0001056594736045025, 0.00011622542096495275, 0.00012679136832540301, 0.00013735731568585325, 0.0001479232630463035, 0.00015848921040675375, 0.00016905515776720402, 0.00017962110512765426, 0.00019018705248810452, 0.00020075299984855476, 0.000211318947209005, 0.00022188489456945526, 0.0002324508419299055, 0.00024301678929035576, 0.00025358273665080603, 0.00026414868401125624, 0.0002747146313717065, 0.00028528057873215677, 0.000295846526092607, 0.0003064124734530573, 0.0003169784208135075, 0.00032754436817395777, 0.00033811031553440804, 0.00034867626289485825, 0.0003592422102553085, 0.0003698081576157588, 0.00038037410497620904, 0.00039094005233665925, 0.0004015059996971095, 0.0004120719470575598, 0.00042263789441801, 0.00043320384177846026, 0.0004437697891389105, 0.0004543357364993608, 0.000464901683859811, 0.00047546763122026126, 0.0004860335785807115, 0.0004965995259411618, 0.0005071654733016121, 0.0005177314206620623, 0.0005282973680225125, 0.0005388633153829628, 0.000549429262743413, 0.0005599952101038632, 0.0005705611574643135, 0.0005811271048247637, 0.000591693052185214, 0.0006022589995456643, 0.0006128249469061146, 0.0006233908942665648, 0.000633956841627015, 0.0006445227889874653, 0.0006550887363479155, 0.0006656546837083658, 0.0006762206310688161, 0.0006867865784292663, 0.0006973525257897165, 0.0007079184731501668, 0.000718484420510617, 0.0007290503678710672, 0.0007396163152315176, 0.0007501822625919678, 0.0007607482099524181, 0.0007713141573128683, 0.0007818801046733185, 0.0007924460520337688, 0.000803011999394219, 0.0008135779467546692, 0.0008241438941151196, 0.0008347098414755698, 0.00084527578883602, 0.0008558417361964703, 0.0008664076835569205, 0.0008769736309173708, 0.000887539578277821, 0.0008981055256382713, 0.0009086714729987216, 0.0009192374203591718, 0.000929803367719622, 0.0009403693150800723, 0.0009509352624405225, 0.0009615012098009728, 0.000972067157161423, 0.0009826331045218733, 0.0009931990518823237, 0.001003764999242774, 0.0010143309466032241, 0.0010248968939636743, 0.0010354628413241245, 0.0010460287886845747, 0.001056594736045025, 0.0010671606834054754, 0.0010777266307659256, 0.0010882925781263758, 0.001098858525486826, 0.0011094244728472762, 0.0011199904202077264, 0.0011305563675681769, 0.001141122314928627, 0.0011516882622890773, 0.0011622542096495275, 0.0011728201570099777, 0.001183386104370428, 0.0011939520517308783, 0.0012045179990913285, 0.001215083946451779, 0.0012256498938122292, 0.0012362158411726792, 0.0012467817885331296, 0.0012573477358935798, 0.00126791368325403, 0.0012784796306144805, 0.0012890455779749307, 0.0012996115253353807, 0.001310177472695831, 0.0013207434200562813, 0.0013313093674167315, 0.001341875314777182, 0.0013524412621376321, 0.0013630072094980821, 0.0013735731568585326, 0.0013841391042189828, 0.001394705051579433, 0.0014052709989398834, 0.0014158369463003336, 0.0014264028936607836, 0.001436968841021234, 0.0014475347883816843, 0.0014581007357421345, 0.001468666683102585, 0.001479232630463035, 0.0014897985778234853, 0.0015003645251839355, 0.0015109304725443857, 0.0015214964199048362, 0.0015320623672652864, 0.0015426283146257366, 0.001553194261986187, 0.001563760209346637, 0.0015743261567070872, 0.0015848921040675376, 0.0015954580514279879, 0.001606023998788438, 0.0016165899461488885, 0.0016271558935093385, 0.0016377218408697887, 0.0016482877882302391, 0.0016588537355906893, 0.0016694196829511395, 0.00167998563031159, 0.00169055157767204, 0.0017011175250324902, 0.0017116834723929406, 0.0017222494197533908, 0.001732815367113841, 0.0017433813144742915, 0.0017539472618347417, 0.0017645132091951917, 0.001775079156555642, 0.0017856451039160923, 0.0017962110512765425, 0.001806776998636993, 0.0018173429459974431, 0.0018279088933578931, 0.0018384748407183436, 0.0018490407880787938, 0.001859606735439244, 0.0018701726827996944, 0.0018807386301601446, 0.0018913045775205948, 0.001901870524881045, 0.0019124364722414953, 0.0019230024196019457, 0.001933568366962396, 0.001944134314322846, 0.0019547002616832963, 0.0019652662090437465, 0.0019758321564041967, 0.0019863981037646474, 0.001996964051125097, 0.002007529998485548, 0.0020180959458459976, 0.0020286618932064482, 0.0020392278405668984, 0.0020497937879273486, 0.002060359735287799, 0.002070925682648249, 0.0020814916300086993, 0.0020920575773691495, 0.0021026235247296, 0.00211318947209005, 0.0021237554194505, 0.0021343213668109508, 0.0021448873141714005, 0.002155453261531851, 0.0021660192088923014, 0.0021765851562527516, 0.002187151103613202, 0.002197717050973652, 0.0022082829983341022, 0.0022188489456945524, 0.002229414893055003, 0.002239980840415453, 0.0022505467877759035, 0.0022611127351363537, 0.0022716786824968035, 0.002282244629857254, 0.0022928105772177044, 0.0023033765245781546, 0.0023139424719386048, 0.002324508419299055, 0.002335074366659505, 0.0023456403140199554, 0.002356206261380406, 0.002366772208740856, 0.0023773381561013065, 0.0023879041034617567, 0.002398470050822207, 0.002409035998182657, 0.0024196019455431073, 0.002430167892903558, 0.0024407338402640077, 0.0024512997876244584, 0.0024618657349849086, 0.0024724316823453584, 0.002482997629705809, 0.002493563577066259, 0.0025041295244267094, 0.0025146954717871596, 0.00252526141914761, 0.00253582736650806, 0.0025463933138685103, 0.002556959261228961, 0.0025675252085894107, 0.0025780911559498613, 0.0025886571033103115, 0.0025992230506707613, 0.002609788998031212, 0.002620354945391662, 0.0026309208927521124, 0.0026414868401125626, 0.0026520527874730132, 0.002662618734833463, 0.0026731846821939132, 0.002683750629554364, 0.0026943165769148136, 0.0027048825242752643, 0.0027154484716357145, 0.0027260144189961643, 0.002736580366356615, 0.002747146313717065, 0.0027577122610775153, 0.0027682782084379656, 0.002778844155798416, 0.002789410103158866, 0.002799976050519316, 0.002810541997879767, 0.0028211079452402166, 0.0028316738926006673, 0.0028422398399611175, 0.0028528057873215672, 0.002863371734682018, 0.002873937682042468, 0.0028845036294029183, 0.0028950695767633685, 0.002905635524123819, 0.002916201471484269, 0.002926767418844719, 0.00293733336620517, 0.0029478993135656196, 0.00295846526092607, 0.0029690312082865204, 0.0029795971556469706, 0.002990163103007421, 0.003000729050367871, 0.0030112949977283213, 0.0030218609450887715, 0.003032426892449222, 0.0030429928398096723, 0.003053558787170122, 0.0030641247345305728, 0.003074690681891023, 0.003085256629251473, 0.0030958225766119234, 0.003106388523972374, 0.003116954471332824, 0.003127520418693274, 0.0031380863660537247, 0.0031486523134141744, 0.003159218260774625, 0.0031697842081350753, 0.0031803501554955255, 0.0031909161028559757, 0.003201482050216426, 0.003212047997576876, 0.0032226139449373263, 0.003233179892297777, 0.0032437458396582268, 0.003254311787018677, 0.0032648777343791276, 0.0032754436817395774, 0.003286009629100028, 0.0032965755764604782, 0.0033071415238209285, 0.0033177074711813787, 0.003328273418541829, 0.003338839365902279, 0.0033494053132627293, 0.00335997126062318, 0.0033705372079836297, 0.00338110315534408, 0.0033916691027045306, 0.0034022350500649804, 0.003412800997425431, 0.003423366944785881, 0.0034339328921463314, 0.0034444988395067816, 0.003455064786867232, 0.003465630734227682, 0.0034761966815881323, 0.003486762628948583, 0.0034973285763090327, 0.0035078945236694833, 0.0035184604710299335, 0.0035290264183903833, 0.003539592365750834, 0.003550158313111284, 0.0035607242604717344, 0.0035712902078321846, 0.003581856155192635, 0.003592422102553085, 0.0036029880499135352, 0.003613553997273986, 0.0036241199446344356, 0.0036346858919948863, 0.0036452518393553365, 0.0036558177867157863, 0.003666383734076237, 0.003676949681436687, 0.0036875156287971373, 0.0036980815761575875, 0.003708647523518038, 0.003719213470878488, 0.003729779418238938, 0.003740345365599389, 0.003750911312959839, 0.0037614772603202892, 0.0037720432076807395, 0.0037826091550411897, 0.00379317510240164, 0.00380374104976209, 0.0038143069971225407, 0.0038248729444829905, 0.003835438891843441, 0.0038460048392038914, 0.003856570786564341, 0.003867136733924792, 0.003877702681285242, 0.003888268628645692, 0.0038988345760061424, 0.003909400523366593, 0.003919966470727043, 0.003930532418087493, 0.003941098365447943, 0.0039516643128083935, 0.003962230260168844, 0.003972796207529295, 0.003983362154889744, 0.003993928102250194, 0.004004494049610645, 0.004015059996971096, 0.004025625944331546, 0.004036191891691995, 0.004046757839052446, 0.0040573237864128964, 0.004067889733773346, 0.004078455681133797, 0.004089021628494247, 0.004099587575854697, 0.0041101535232151475, 0.004120719470575598, 0.004131285417936048, 0.004141851365296498, 0.004152417312656948, 0.0041629832600173985, 0.00417354920737785, 0.004184115154738299, 0.004194681102098749, 0.0042052470494592, 0.00421581299681965, 0.0042263789441801, 0.004236944891540551, 0.004247510838901, 0.0042580767862614504, 0.0042686427336219015, 0.004279208680982352, 0.004289774628342801, 0.004300340575703252, 0.004310906523063702, 0.004321472470424152, 0.004332038417784603, 0.004342604365145053, 0.004353170312505503, 0.004363736259865953, 0.004374302207226404, 0.004384868154586854, 0.004395434101947304, 0.004406000049307754, 0.0044165659966682045, 0.0044271319440286555, 0.004437697891389105, 0.004448263838749555, 0.004458829786110006, 0.0044693957334704555, 0.004479961680830906, 0.004490527628191357, 0.004501093575551807, 0.004511659522912256, 0.0045222254702727074, 0.004532791417633158, 0.004543357364993607, 0.004553923312354058, 0.004564489259714508, 0.004575055207074958, 0.004585621154435409, 0.004596187101795859, 0.004606753049156309, 0.004617318996516759, 0.0046278849438772095, 0.00463845089123766, 0.00464901683859811, 0.00465958278595856, 0.00467014873331901, 0.0046807146806794615, 0.004691280628039911, 0.004701846575400361, 0.004712412522760812, 0.0047229784701212614, 0.004733544417481712, 0.004744110364842163, 0.004754676312202613, 0.004765242259563063, 0.004775808206923513, 0.004786374154283964, 0.004796940101644414, 0.004807506049004864, 0.004818071996365314, 0.004828637943725765, 0.004839203891086215, 0.004849769838446665, 0.004860335785807116, 0.004870901733167565, 0.0048814676805280155, 0.0048920336278884665, 0.004902599575248917, 0.004913165522609366, 0.004923731469969817, 0.004934297417330267, 0.004944863364690717, 0.004955429312051168, 0.004965995259411618, 0.004976561206772067, 0.004987127154132518, 0.004997693101492969, 0.005008259048853419, 0.005018824996213869, 0.005029390943574319, 0.0050399568909347695, 0.00505052283829522, 0.00506108878565567, 0.00507165473301612, 0.005082220680376571, 0.0050927866277370205, 0.005103352575097471, 0.005113918522457922, 0.005124484469818371, 0.005135050417178821, 0.0051456163645392725, 0.005156182311899723, 0.005166748259260172, 0.005177314206620623, 0.005187880153981073, 0.005198446101341523, 0.005209012048701974, 0.005219577996062424, 0.005230143943422874, 0.005240709890783324, 0.0052512758381437746, 0.005261841785504225, 0.005272407732864675])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_f300d38859ef41a8a0274e429b5c8a16.x = d3.scale.linear()
              .domain([0.0, 0.005272407732864675])
              .range([0, 400]);

    color_map_f300d38859ef41a8a0274e429b5c8a16.legend = L.control({position: 'topright'});
    color_map_f300d38859ef41a8a0274e429b5c8a16.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_f300d38859ef41a8a0274e429b5c8a16.legend.addTo(map_2cd125d7411f43dabaecb7a4e5d09331);

    color_map_f300d38859ef41a8a0274e429b5c8a16.xAxis = d3.svg.axis()
        .scale(color_map_f300d38859ef41a8a0274e429b5c8a16.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.0008787346221441125, 0.001757469244288225, 0.0026362038664323375, 0.00351493848857645, 0.004393673110720563, 0.005272407732864675]);

    color_map_f300d38859ef41a8a0274e429b5c8a16.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_f300d38859ef41a8a0274e429b5c8a16.g = color_map_f300d38859ef41a8a0274e429b5c8a16.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_f300d38859ef41a8a0274e429b5c8a16.g.selectAll("rect")
        .data(color_map_f300d38859ef41a8a0274e429b5c8a16.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_f300d38859ef41a8a0274e429b5c8a16.x(color_map_f300d38859ef41a8a0274e429b5c8a16.color.domain()[i - 1]) : color_map_f300d38859ef41a8a0274e429b5c8a16.x.range()[0],
            x1: i < color_map_f300d38859ef41a8a0274e429b5c8a16.color.domain().length ? color_map_f300d38859ef41a8a0274e429b5c8a16.x(color_map_f300d38859ef41a8a0274e429b5c8a16.color.domain()[i]) : color_map_f300d38859ef41a8a0274e429b5c8a16.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_f300d38859ef41a8a0274e429b5c8a16.g.call(color_map_f300d38859ef41a8a0274e429b5c8a16.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('10_50_GLAUBER DE MEDEIROS BRAGA');
