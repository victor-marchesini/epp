    
            var map_a0bf1aac217241ca943fad2c0541d410 = L.map(
                "map_a0bf1aac217241ca943fad2c0541d410",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_f95d0d120f87444e8ba188757344d16a = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_a0bf1aac217241ca943fad2c0541d410);
        
    
            var choropleth_eea675ee70b54e86b1217b6d9893b787 = L.featureGroup(
                {}
            ).addTo(map_a0bf1aac217241ca943fad2c0541d410);
        
    
        function geo_json_4cbf6ae4ec084c5fb4f101ade72bb4ae_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 467: case 353: case 334: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 439: case 448: case 449: case 466: case 473: case 335: case 474: case 442: case 436: case 446: case 444: case 369: case 352: case 392: case 343: case 351: case 396: case 415: case 408: case 397: case 395: case 398: case 385: case 361: case 401: case 362: case 379: case 372: case 339: case 347: case 459: case 454: case 433: case 445: case 409: case 483: case 471: case 477: case 370: case 387: case 511: case 450: case 384: case 510: case 406: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 441: case 455: case 437: case 340: case 427: case 419: case 371: case 364: case 390: case 356: case 337: case 463: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 426: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_4cbf6ae4ec084c5fb4f101ade72bb4ae_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_4cbf6ae4ec084c5fb4f101ade72bb4ae = L.geoJson(null, {
                onEachFeature: geo_json_4cbf6ae4ec084c5fb4f101ade72bb4ae_onEachFeature,
            
                style: geo_json_4cbf6ae4ec084c5fb4f101ade72bb4ae_styler,
        });

        function geo_json_4cbf6ae4ec084c5fb4f101ade72bb4ae_add (data) {
            geo_json_4cbf6ae4ec084c5fb4f101ade72bb4ae
                .addData(data)
                .addTo(choropleth_eea675ee70b54e86b1217b6d9893b787);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_4cbf6ae4ec084c5fb4f101ade72bb4ae_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_596cc61cb3374398889bea534ed8bb95 = {};

    
    color_map_596cc61cb3374398889bea534ed8bb95.color = d3.scale.threshold()
              .domain([9.265350369224212e-06, 1.0167319058321468e-05, 1.1069287747418725e-05, 1.1971256436515981e-05, 1.2873225125613239e-05, 1.3775193814710496e-05, 1.4677162503807752e-05, 1.5579131192905007e-05, 1.6481099882002263e-05, 1.7383068571099522e-05, 1.8285037260196778e-05, 1.9187005949294034e-05, 2.008897463839129e-05, 2.0990943327488545e-05, 2.18929120165858e-05, 2.2794880705683057e-05, 2.3696849394780316e-05, 2.4598818083877575e-05, 2.550078677297483e-05, 2.6402755462072086e-05, 2.7304724151169342e-05, 2.8206692840266598e-05, 2.9108661529363853e-05, 3.001063021846111e-05, 3.0912598907558365e-05, 3.181456759665563e-05, 3.2716536285752876e-05, 3.361850497485014e-05, 3.4520473663947394e-05, 3.542244235304465e-05, 3.6324411042141906e-05, 3.722637973123916e-05, 3.812834842033642e-05, 3.903031710943367e-05, 3.9932285798530936e-05, 4.083425448762819e-05, 4.173622317672545e-05, 4.26381918658227e-05, 4.354016055491996e-05, 4.4442129244017214e-05, 4.534409793311448e-05, 4.6246066622211726e-05, 4.714803531130898e-05, 4.8050004000406244e-05, 4.89519726895035e-05, 4.9853941378600755e-05, 5.075591006769801e-05, 5.165787875679527e-05, 5.255984744589252e-05, 5.346181613498978e-05, 5.436378482408704e-05, 5.5265753513184296e-05, 5.6167722202281545e-05, 5.706969089137881e-05, 5.7971659580476063e-05, 5.8873628269573326e-05, 5.9775596958670575e-05, 6.067756564776783e-05, 6.157953433686509e-05, 6.248150302596234e-05, 6.338347171505959e-05, 6.428544040415685e-05, 6.518740909325412e-05, 6.608937778235136e-05, 6.699134647144863e-05, 6.789331516054588e-05, 6.879528384964314e-05, 6.969725253874039e-05, 7.059922122783765e-05, 7.150118991693491e-05, 7.240315860603216e-05, 7.330512729512942e-05, 7.420709598422667e-05, 7.510906467332392e-05, 7.601103336242118e-05, 7.691300205151845e-05, 7.78149707406157e-05, 7.871693942971296e-05, 7.961890811881021e-05, 8.052087680790746e-05, 8.142284549700473e-05, 8.232481418610198e-05, 8.322678287519923e-05, 8.412875156429649e-05, 8.503072025339374e-05, 8.593268894249102e-05, 8.683465763158827e-05, 8.773662632068552e-05, 8.863859500978278e-05, 8.954056369888003e-05, 9.044253238797729e-05, 9.134450107707455e-05, 9.22464697661718e-05, 9.314843845526905e-05, 9.405040714436631e-05, 9.495237583346358e-05, 9.585434452256082e-05, 9.675631321165809e-05, 9.765828190075534e-05, 9.85602505898526e-05, 9.946221927894986e-05, 0.00010036418796804711, 0.00010126615665714437, 0.00010216812534624162, 0.00010307009403533887, 0.00010397206272443615, 0.0001048740314135334, 0.00010577600010263064, 0.0001066779687917279, 0.00010757993748082516, 0.00010848190616992243, 0.00010938387485901968, 0.00011028584354811693, 0.00011118781223721419, 0.00011208978092631144, 0.0001129917496154087, 0.00011389371830450597, 0.00011479568699360321, 0.00011569765568270046, 0.00011659962437179773, 0.00011750159306089497, 0.00011840356174999224, 0.0001193055304390895, 0.00012020749912818675, 0.00012110946781728401, 0.00012201143650638126, 0.00012291340519547854, 0.0001238153738845758, 0.00012471734257367303, 0.0001256193112627703, 0.00012652127995186756, 0.00012742324864096482, 0.00012832521733006206, 0.00012922718601915932, 0.00013012915470825658, 0.00013103112339735384, 0.0001319330920864511, 0.00013283506077554834, 0.00013373702946464563, 0.00013463899815374287, 0.00013554096684284013, 0.00013644293553193737, 0.00013734490422103465, 0.00013824687291013192, 0.00013914884159922915, 0.00014005081028832642, 0.00014095277897742365, 0.0001418547476665209, 0.00014275671635561818, 0.00014365868504471544, 0.0001445606537338127, 0.00014546262242290994, 0.0001463645911120072, 0.00014726655980110443, 0.00014816852849020172, 0.00014907049717929899, 0.00014997246586839622, 0.00015087443455749348, 0.00015177640324659072, 0.000152678371935688, 0.00015358034062478527, 0.0001544823093138825, 0.00015538427800297977, 0.000156286246692077, 0.00015718821538117427, 0.00015809018407027156, 0.0001589921527593688, 0.00015989412144846605, 0.0001607960901375633, 0.00016169805882666055, 0.00016260002751575784, 0.00016350199620485508, 0.00016440396489395234, 0.00016530593358304958, 0.00016620790227214684, 0.0001671098709612441, 0.00016801183965034136, 0.00016891380833943863, 0.00016981577702853586, 0.00017071774571763312, 0.00017161971440673039, 0.00017252168309582765, 0.0001734236517849249, 0.00017432562047402215, 0.0001752275891631194, 0.00017612955785221667, 0.0001770315265413139, 0.0001779334952304112, 0.00017883546391950843, 0.0001797374326086057, 0.00018063940129770296, 0.0001815413699868002, 0.00018244333867589745, 0.00018334530736499472, 0.00018424727605409198, 0.00018514924474318924, 0.00018605121343228648, 0.00018695318212138374, 0.000187855150810481, 0.00018875711949957826, 0.00018965908818867553, 0.00019056105687777276, 0.00019146302556687003, 0.00019236499425596726, 0.00019326696294506455, 0.0001941689316341618, 0.00019507090032325905, 0.0001959728690123563, 0.00019687483770145355, 0.00019777680639055084, 0.0001986787750796481, 0.00019958074376874533, 0.0002004827124578426, 0.00020138468114693983, 0.0002022866498360371, 0.00020318861852513438, 0.00020409058721423162, 0.00020499255590332888, 0.00020589452459242612, 0.00020679649328152338, 0.00020769846197062067, 0.0002086004306597179, 0.00020950239934881517, 0.0002104043680379124, 0.00021130633672700966, 0.00021220830541610693, 0.0002131102741052042, 0.00021401224279430145, 0.0002149142114833987, 0.00021581618017249595, 0.0002167181488615932, 0.00021762011755069047, 0.00021852208623978774, 0.00021942405492888497, 0.00022032602361798224, 0.00022122799230707947, 0.00022212996099617673, 0.00022303192968527402, 0.00022393389837437126, 0.00022483586706346852, 0.00022573783575256576, 0.00022663980444166302, 0.00022754177313076028, 0.00022844374181985754, 0.0002293457105089548, 0.00023024767919805204, 0.0002311496478871493, 0.00023205161657624657, 0.00023295358526534383, 0.0002338555539544411, 0.00023475752264353833, 0.0002356594913326356, 0.00023656146002173285, 0.0002374634287108301, 0.00023836539739992738, 0.0002392673660890246, 0.00024016933477812187, 0.00024107130346721914, 0.00024197327215631637, 0.00024287524084541366, 0.0002437772095345109, 0.00024467917822360816, 0.0002455811469127054, 0.00024648311560180263, 0.0002473850842908999, 0.00024828705297999716, 0.00024918902166909445, 0.0002500909903581917, 0.0002509929590472889, 0.0002518949277363862, 0.00025279689642548344, 0.00025369886511458073, 0.00025460083380367797, 0.0002555028024927752, 0.00025640477118187244, 0.0002573067398709697, 0.000258208708560067, 0.00025911067724916425, 0.0002600126459382615, 0.0002609146146273587, 0.000261816583316456, 0.00026271855200555325, 0.0002636205206946505, 0.00026452248938374777, 0.00026542445807284506, 0.0002663264267619423, 0.0002672283954510396, 0.0002681303641401368, 0.00026903233282923406, 0.0002699343015183313, 0.0002708362702074286, 0.0002717382388965258, 0.00027264020758562305, 0.00027354217627472034, 0.0002744441449638176, 0.00027534611365291487, 0.0002762480823420121, 0.0002771500510311094, 0.00027805201972020663, 0.00027895398840930386, 0.00027985595709840115, 0.0002807579257874984, 0.0002816598944765956, 0.0002825618631656929, 0.00028346383185479015, 0.0002843658005438874, 0.0002852677692329846, 0.00028616973792208196, 0.0002870717066111792, 0.00028797367530027643, 0.0002888756439893737, 0.00028977761267847096, 0.0002906795813675682, 0.0002915815500566655, 0.0002924835187457627, 0.00029338548743485996, 0.0002942874561239572, 0.0002951894248130545, 0.00029609139350215177, 0.000296993362191249, 0.0002978953308803463, 0.00029879729956944353, 0.00029969926825854077, 0.00030060123694763806, 0.0003015032056367353, 0.0003024051743258325, 0.00030330714301492976, 0.00030420911170402705, 0.0003051110803931243, 0.0003060130490822216, 0.00030691501777131887, 0.0003078169864604161, 0.00030871895514951334, 0.0003096209238386106, 0.00031052289252770786, 0.0003114248612168051, 0.00031232682990590233, 0.0003132287985949996, 0.00031413076728409686, 0.0003150327359731941, 0.00031593470466229144, 0.00031683667335138867, 0.0003177386420404859, 0.0003186406107295832, 0.00031954257941868043, 0.00032044454810777767, 0.0003213465167968749, 0.0003222484854859722, 0.00032315045417506943, 0.00032405242286416666, 0.00032495439155326395, 0.00032585636024236124, 0.0003267583289314585, 0.00032766029762055577, 0.000328562266309653, 0.00032946423499875024, 0.0003303662036878475, 0.00033126817237694476, 0.000332170141066042, 0.00033307210975513923, 0.0003339740784442365, 0.00033487604713333376, 0.00033577801582243105, 0.00033667998451152834, 0.0003375819532006256, 0.0003384839218897228, 0.00033938589057882004, 0.00034028785926791733, 0.00034118982795701457, 0.0003420917966461118, 0.0003429937653352091, 0.00034389573402430633, 0.00034479770271340357, 0.0003456996714025009, 0.00034660164009159814, 0.0003475036087806954, 0.0003484055774697926, 0.0003493075461588899, 0.00035020951484798714, 0.0003511114835370844, 0.00035201345222618167, 0.0003529154209152789, 0.00035381738960437614, 0.00035471935829347337, 0.00035562132698257066, 0.00035652329567166795, 0.0003574252643607652, 0.0003583272330498625, 0.0003592292017389597, 0.00036013117042805695, 0.00036103313911715424, 0.00036193510780625147, 0.0003628370764953487, 0.00036373904518444594, 0.00036464101387354323, 0.00036554298256264047, 0.00036644495125173776, 0.00036734691994083505, 0.0003682488886299323, 0.0003691508573190295, 0.0003700528260081268, 0.00037095479469722404, 0.0003718567633863213, 0.0003727587320754185, 0.0003736607007645158, 0.00037456266945361304, 0.0003754646381427103, 0.0003763666068318076, 0.00037726857552090485, 0.0003781705442100021, 0.0003790725128990994, 0.0003799744815881966, 0.00038087645027729385, 0.0003817784189663911, 0.0003826803876554884, 0.0003835823563445856, 0.00038448432503368284, 0.00038538629372278013, 0.0003862882624118774, 0.00038719023110097466, 0.00038809219979007195, 0.0003889941684791692, 0.0003898961371682664, 0.00039079810585736365, 0.00039170007454646094, 0.0003926020432355582, 0.0003935040119246554, 0.0003944059806137527, 0.00039530794930284994, 0.00039620991799194723, 0.0003971118866810445, 0.00039801385537014175, 0.000398915824059239, 0.0003998177927483362, 0.0004007197614374335, 0.00040162173012653075, 0.000402523698815628, 0.0004034256675047253, 0.0004043276361938225, 0.00040522960488291975, 0.0004061315735720171, 0.0004070335422611143, 0.00040793551095021156, 0.0004088374796393088, 0.0004097394483284061, 0.0004106414170175033, 0.00041154338570660056, 0.00041244535439569785, 0.0004133473230847951, 0.0004142492917738923, 0.0004151512604629896, 0.0004160532291520869, 0.00041695519784118413, 0.00041785716653028137, 0.00041875913521937866, 0.0004196611039084759, 0.0004205630725975731, 0.0004214650412866704, 0.00042236700997576765, 0.0004232689786648649, 0.0004241709473539622, 0.0004250729160430594, 0.0004259748847321567, 0.00042687685342125394, 0.0004277788221103512, 0.00042868079079944846, 0.0004295827594885457, 0.000430484728177643, 0.0004313866968667402, 0.00043228866555583746, 0.0004331906342449347, 0.000434092602934032, 0.0004349945716231292, 0.00043589654031222645, 0.0004367985090013238, 0.00043770047769042103, 0.00043860244637951827, 0.00043950441506861556, 0.0004404063837577128, 0.00044130835244681003, 0.00044221032113590726, 0.00044311228982500455, 0.0004440142585141018, 0.000444916227203199, 0.0004458181958922963, 0.0004467201645813936, 0.00044762213327049084, 0.00044852410195958813, 0.00044942607064868536, 0.0004503280393377826, 0.00045123000802687983, 0.0004521319767159771, 0.00045303394540507436, 0.0004539359140941716, 0.0004548378827832689, 0.0004557398514723661, 0.0004566418201614634, 0.0004575437888505607, 0.00045844575753965793, 0.00045934772622875517])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_596cc61cb3374398889bea534ed8bb95.x = d3.scale.linear()
              .domain([9.265350369224212e-06, 0.00045934772622875517])
              .range([0, 400]);

    color_map_596cc61cb3374398889bea534ed8bb95.legend = L.control({position: 'topright'});
    color_map_596cc61cb3374398889bea534ed8bb95.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_596cc61cb3374398889bea534ed8bb95.legend.addTo(map_a0bf1aac217241ca943fad2c0541d410);

    color_map_596cc61cb3374398889bea534ed8bb95.xAxis = d3.svg.axis()
        .scale(color_map_596cc61cb3374398889bea534ed8bb95.x)
        .orient("top")
        .tickSize(1)
        .tickValues([9.265350369224212e-06, 8.427907967914604e-05, 0.00015929280898906788, 0.0002343065382989897, 0.0003093202676089115, 0.00038433399691883334, 0.00045934772622875517]);

    color_map_596cc61cb3374398889bea534ed8bb95.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_596cc61cb3374398889bea534ed8bb95.g = color_map_596cc61cb3374398889bea534ed8bb95.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_596cc61cb3374398889bea534ed8bb95.g.selectAll("rect")
        .data(color_map_596cc61cb3374398889bea534ed8bb95.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_596cc61cb3374398889bea534ed8bb95.x(color_map_596cc61cb3374398889bea534ed8bb95.color.domain()[i - 1]) : color_map_596cc61cb3374398889bea534ed8bb95.x.range()[0],
            x1: i < color_map_596cc61cb3374398889bea534ed8bb95.color.domain().length ? color_map_596cc61cb3374398889bea534ed8bb95.x(color_map_596cc61cb3374398889bea534ed8bb95.color.domain()[i]) : color_map_596cc61cb3374398889bea534ed8bb95.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_596cc61cb3374398889bea534ed8bb95.g.call(color_map_596cc61cb3374398889bea534ed8bb95.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('33_40_FABIO APARECIDO VASCONCELOS');
