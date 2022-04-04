    
            var map_9dd5770541224f33906cdc1461d5478c = L.map(
                "map_9dd5770541224f33906cdc1461d5478c",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_dead42d556c44253b3c5b304cb47e0a0 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_9dd5770541224f33906cdc1461d5478c);
        
    
            var choropleth_55b30724b5be464a82c539be47356e0c = L.featureGroup(
                {}
            ).addTo(map_9dd5770541224f33906cdc1461d5478c);
        
    
        function geo_json_2bb7d5810ef1420e9349b91b772c0bf9_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 482: case 434: case 441: case 325: case 462: case 468: case 478: case 383: case 423: case 431: case 404: case 394: case 354: case 349: case 342: case 336: case 329: case 331: case 358: case 367: case 460: case 475: case 481: case 479: case 366: case 480: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 393: case 356: case 463: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 382: case 347: case 483: case 511: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 360: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 357: case 350: case 378: case 890: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 370: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_2bb7d5810ef1420e9349b91b772c0bf9_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_2bb7d5810ef1420e9349b91b772c0bf9 = L.geoJson(null, {
                onEachFeature: geo_json_2bb7d5810ef1420e9349b91b772c0bf9_onEachFeature,
            
                style: geo_json_2bb7d5810ef1420e9349b91b772c0bf9_styler,
        });

        function geo_json_2bb7d5810ef1420e9349b91b772c0bf9_add (data) {
            geo_json_2bb7d5810ef1420e9349b91b772c0bf9
                .addData(data)
                .addTo(choropleth_55b30724b5be464a82c539be47356e0c);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_2bb7d5810ef1420e9349b91b772c0bf9_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_019f753c2e2d483d84570c19cfce4c94 = {};

    
    color_map_019f753c2e2d483d84570c19cfce4c94.color = d3.scale.threshold()
              .domain([0.0, 8.39337949140376e-06, 1.678675898280752e-05, 2.518013847421128e-05, 3.357351796561504e-05, 4.19668974570188e-05, 5.036027694842256e-05, 5.875365643982632e-05, 6.714703593123008e-05, 7.554041542263383e-05, 8.39337949140376e-05, 9.232717440544137e-05, 0.00010072055389684512, 0.00010911393338824888, 0.00011750731287965265, 0.0001259006923710564, 0.00013429407186246015, 0.0001426874513538639, 0.00015108083084526766, 0.00015947421033667145, 0.0001678675898280752, 0.00017626096931947895, 0.00018465434881088274, 0.0001930477283022865, 0.00020144110779369025, 0.000209834487285094, 0.00021822786677649775, 0.00022662124626790154, 0.0002350146257593053, 0.00024340800525070902, 0.0002518013847421128, 0.00026019476423351653, 0.0002685881437249203, 0.0002769815232163241, 0.0002853749027077278, 0.0002937682821991316, 0.0003021616616905353, 0.0003105550411819391, 0.0003189484206733429, 0.0003273418001647466, 0.0003357351796561504, 0.0003441285591475542, 0.0003525219386389579, 0.0003609153181303617, 0.00036930869762176547, 0.0003777020771131692, 0.000386095456604573, 0.0003944888360959767, 0.0004028822155873805, 0.00041127559507878427, 0.000419668974570188, 0.0004280623540615918, 0.0004364557335529955, 0.0004448491130443993, 0.00045324249253580307, 0.0004616358720272068, 0.0004700292515186106, 0.00047842263101001436, 0.00048681601050141804, 0.0004952093899928218, 0.0005036027694842256, 0.0005119961489756294, 0.0005203895284670331, 0.0005287829079584368, 0.0005371762874498406, 0.0005455696669412444, 0.0005539630464326482, 0.0005623564259240519, 0.0005707498054154556, 0.0005791431849068594, 0.0005875365643982632, 0.000595929943889667, 0.0006043233233810707, 0.0006127167028724744, 0.0006211100823638782, 0.000629503461855282, 0.0006378968413466858, 0.0006462902208380896, 0.0006546836003294932, 0.000663076979820897, 0.0006714703593123008, 0.0006798637388037046, 0.0006882571182951084, 0.000696650497786512, 0.0007050438772779158, 0.0007134372567693196, 0.0007218306362607234, 0.0007302240157521272, 0.0007386173952435309, 0.0007470107747349346, 0.0007554041542263384, 0.0007637975337177422, 0.000772190913209146, 0.0007805842927005497, 0.0007889776721919534, 0.0007973710516833572, 0.000805764431174761, 0.0008141578106661648, 0.0008225511901575685, 0.0008309445696489722, 0.000839337949140376, 0.0008477313286317798, 0.0008561247081231836, 0.0008645180876145873, 0.000872911467105991, 0.0008813048465973948, 0.0008896982260887986, 0.0008980916055802024, 0.0009064849850716061, 0.0009148783645630099, 0.0009232717440544136, 0.0009316651235458174, 0.0009400585030372212, 0.0009484518825286249, 0.0009568452620200287, 0.0009652386415114324, 0.0009736320210028361, 0.0009820254004942399, 0.0009904187799856436, 0.0009988121594770474, 0.0010072055389684512, 0.001015598918459855, 0.0010239922979512588, 0.0010323856774426625, 0.0010407790569340661, 0.00104917243642547, 0.0010575658159168737, 0.0010659591954082777, 0.0010743525748996812, 0.001082745954391085, 0.0010911393338824888, 0.0010995327133738926, 0.0011079260928652964, 0.0011163194723567001, 0.0011247128518481037, 0.0011331062313395077, 0.0011414996108309113, 0.0011498929903223153, 0.0011582863698137188, 0.0011666797493051226, 0.0011750731287965264, 0.0011834665082879302, 0.001191859887779334, 0.0012002532672707377, 0.0012086466467621413, 0.0012170400262535453, 0.0012254334057449489, 0.0012338267852363529, 0.0012422201647277564, 0.0012506135442191604, 0.001259006923710564, 0.0012674003032019678, 0.0012757936826933716, 0.0012841870621847753, 0.0012925804416761791, 0.001300973821167583, 0.0013093672006589865, 0.0013177605801503903, 0.001326153959641794, 0.0013345473391331978, 0.0013429407186246016, 0.0013513340981160052, 0.0013597274776074092, 0.0013681208570988127, 0.0013765142365902167, 0.0013849076160816203, 0.001393300995573024, 0.0014016943750644279, 0.0014100877545558316, 0.0014184811340472354, 0.0014268745135386392, 0.0014352678930300428, 0.0014436612725214468, 0.0014520546520128503, 0.0014604480315042543, 0.0014688414109956579, 0.0014772347904870619, 0.0014856281699784655, 0.0014940215494698692, 0.001502414928961273, 0.0015108083084526768, 0.0015192016879440806, 0.0015275950674354844, 0.001535988446926888, 0.001544381826418292, 0.0015527752059096955, 0.0015611685854010995, 0.001569561964892503, 0.0015779553443839068, 0.0015863487238753106, 0.0015947421033667144, 0.0016031354828581182, 0.001611528862349522, 0.0016199222418409255, 0.0016283156213323295, 0.001636709000823733, 0.001645102380315137, 0.0016534957598065407, 0.0016618891392979444, 0.0016702825187893482, 0.001678675898280752, 0.0016870692777721558, 0.0016954626572635596, 0.0017038560367549631, 0.0017122494162463671, 0.0017206427957377707, 0.0017290361752291747, 0.0017374295547205783, 0.001745822934211982, 0.0017542163137033858, 0.0017626096931947896, 0.0017710030726861934, 0.0017793964521775972, 0.001787789831669001, 0.0017961832111604047, 0.0018045765906518083, 0.0018129699701432123, 0.0018213633496346159, 0.0018297567291260199, 0.0018381501086174234, 0.0018465434881088272, 0.001854936867600231, 0.0018633302470916348, 0.0018717236265830385, 0.0018801170060744423, 0.0018885103855658459, 0.0018969037650572499, 0.0019052971445486535, 0.0019136905240400575, 0.001922083903531461, 0.0019304772830228648, 0.0019388706625142686, 0.0019472640420056721, 0.0019556574214970764, 0.0019640508009884797, 0.0019724441804798835, 0.0019808375599712873, 0.001989230939462691, 0.001997624318954095, 0.0020060176984454986, 0.0020144110779369024, 0.0020228044574283057, 0.00203119783691971, 0.0020395912164111137, 0.0020479845959025175, 0.002056377975393921, 0.002064771354885325, 0.002073164734376729, 0.0020815581138681322, 0.002089951493359536, 0.00209834487285094, 0.0021067382523423436, 0.0021151316318337473, 0.002123525011325151, 0.0021319183908165553, 0.0021403117703079587, 0.0021487051497993625, 0.0021570985292907663, 0.00216549190878217, 0.002173885288273574, 0.0021822786677649776, 0.0021906720472563814, 0.002199065426747785, 0.002207458806239189, 0.0022158521857305927, 0.002224245565221996, 0.0022326389447134003, 0.002241032324204804, 0.0022494257036962074, 0.002257819083187611, 0.0022662124626790154, 0.002274605842170419, 0.0022829992216618225, 0.0022913926011532263, 0.0022997859806446305, 0.002308179360136034, 0.0023165727396274377, 0.0023249661191188415, 0.0023333594986102452, 0.002341752878101649, 0.002350146257593053, 0.0023585396370844566, 0.0023669330165758604, 0.002375326396067264, 0.002383719775558668, 0.0023921131550500713, 0.0024005065345414755, 0.0024088999140328793, 0.0024172932935242826, 0.0024256866730156864, 0.0024340800525070906, 0.0024424734319984944, 0.0024508668114898977, 0.0024592601909813015, 0.0024676535704727057, 0.002476046949964109, 0.002484440329455513, 0.0024928337089469167, 0.002501227088438321, 0.002509620467929724, 0.002518013847421128, 0.0025264072269125318, 0.0025348006064039356, 0.0025431939858953393, 0.002551587365386743, 0.0025599807448781465, 0.0025683741243695507, 0.0025767675038609545, 0.0025851608833523582, 0.0025935542628437616, 0.002601947642335166, 0.0026103410218265696, 0.002618734401317973, 0.0026271277808093767, 0.0026355211603007805, 0.0026439145397921843, 0.002652307919283588, 0.002660701298774992, 0.0026690946782663956, 0.0026774880577577994, 0.002685881437249203, 0.002694274816740607, 0.0027026681962320103, 0.0027110615757234145, 0.0027194549552148183, 0.002727848334706222, 0.0027362417141976255, 0.0027446350936890297, 0.0027530284731804334, 0.002761421852671837, 0.0027698152321632406, 0.002778208611654645, 0.002786601991146048, 0.002794995370637452, 0.0028033887501288557, 0.00281178212962026, 0.0028201755091116633, 0.002828568888603067, 0.002836962268094471, 0.0028453556475858746, 0.0028537490270772784, 0.002862142406568682, 0.0028705357860600855, 0.0028789291655514897, 0.0028873225450428935, 0.0028957159245342973, 0.0029041093040257007, 0.002912502683517105, 0.0029208960630085086, 0.002929289442499912, 0.0029376828219913158, 0.00294607620148272, 0.0029544695809741238, 0.002962862960465527, 0.002971256339956931, 0.002979649719448335, 0.0029880430989397385, 0.0029964364784311423, 0.003004829857922546, 0.00301322323741395, 0.0030216166169053536, 0.0030300099963967574, 0.003038403375888161, 0.003046796755379565, 0.0030551901348709687, 0.0030635835143623725, 0.003071976893853776, 0.00308037027334518, 0.003088763652836584, 0.003097157032327987, 0.003105550411819391, 0.003113943791310795, 0.003122337170802199, 0.0031307305502936023, 0.003139123929785006, 0.0031475173092764103, 0.0031559106887678137, 0.0031643040682592175, 0.0031726974477506212, 0.003181090827242025, 0.003189484206733429, 0.0031978775862248326, 0.0032062709657162364, 0.00321466434520764, 0.003223057724699044, 0.0032314511041904477, 0.003239844483681851, 0.003248237863173255, 0.003256631242664659, 0.003265024622156063, 0.003273418001647466, 0.00328181138113887, 0.003290204760630274, 0.0032985981401216775, 0.0033069915196130813, 0.003315384899104485, 0.003323778278595889, 0.0033321716580872927, 0.0033405650375786964, 0.0033489584170701, 0.003357351796561504, 0.0033657451760529078, 0.0033741385555443116, 0.003382531935035715, 0.003390925314527119, 0.003399318694018523, 0.0034077120735099263, 0.00341610545300133, 0.0034244988324927342, 0.003432892211984138, 0.0034412855914755414, 0.003449678970966945, 0.0034580723504583494, 0.0034664657299497527, 0.0034748591094411565, 0.0034832524889325603, 0.003491645868423964, 0.003500039247915368, 0.0035084326274067716, 0.0035168260068981754, 0.003525219386389579, 0.003533612765880983, 0.0035420061453723868, 0.00355039952486379, 0.0035587929043551943, 0.003567186283846598, 0.003575579663338002, 0.0035839730428294052, 0.0035923664223208094, 0.0036007598018122132, 0.0036091531813036166, 0.0036175465607950204, 0.0036259399402864246, 0.003634333319777828, 0.0036427266992692317, 0.0036511200787606355, 0.0036595134582520397, 0.003667906837743443, 0.003676300217234847, 0.0036846935967262506, 0.0036930869762176544, 0.003701480355709058, 0.003709873735200462, 0.0037182671146918653, 0.0037266604941832695, 0.0037350538736746733, 0.003743447253166077, 0.0037518406326574804, 0.0037602340121488846, 0.0037686273916402884, 0.0037770207711316918, 0.0037854141506230956, 0.0037938075301144998, 0.0038022009096059036, 0.003810594289097307, 0.0038189876685887107, 0.003827381048080115, 0.0038357744275715182, 0.003844167807062922, 0.003852561186554326, 0.0038609545660457296, 0.0038693479455371334, 0.003877741325028537, 0.003886134704519941, 0.0038945280840113443, 0.0039029214635027485, 0.003911314842994153, 0.003919708222485556, 0.003928101601976959, 0.003936494981468364, 0.003944888360959767, 0.003953281740451171, 0.0039616751199425745, 0.003970068499433979, 0.003978461878925382, 0.003986855258416786, 0.00399524863790819, 0.004003642017399593, 0.004012035396890997, 0.004020428776382401, 0.004028822155873805, 0.004037215535365208, 0.0040456089148566115, 0.004054002294348017, 0.00406239567383942, 0.004070789053330824, 0.0040791824328222275, 0.004087575812313631, 0.004095969191805035, 0.004104362571296438, 0.004112755950787842, 0.004121149330279247, 0.00412954270977065, 0.0041379360892620535, 0.004146329468753458, 0.004154722848244861, 0.0041631162277362644, 0.004171509607227669, 0.004179902986719072, 0.004188296366210476])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_019f753c2e2d483d84570c19cfce4c94.x = d3.scale.linear()
              .domain([0.0, 0.004188296366210476])
              .range([0, 400]);

    color_map_019f753c2e2d483d84570c19cfce4c94.legend = L.control({position: 'topright'});
    color_map_019f753c2e2d483d84570c19cfce4c94.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_019f753c2e2d483d84570c19cfce4c94.legend.addTo(map_9dd5770541224f33906cdc1461d5478c);

    color_map_019f753c2e2d483d84570c19cfce4c94.xAxis = d3.svg.axis()
        .scale(color_map_019f753c2e2d483d84570c19cfce4c94.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.0006980493943684127, 0.0013960987887368253, 0.002094148183105238, 0.0027921975774736507, 0.0034902469718420632, 0.004188296366210476]);

    color_map_019f753c2e2d483d84570c19cfce4c94.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_019f753c2e2d483d84570c19cfce4c94.g = color_map_019f753c2e2d483d84570c19cfce4c94.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_019f753c2e2d483d84570c19cfce4c94.g.selectAll("rect")
        .data(color_map_019f753c2e2d483d84570c19cfce4c94.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_019f753c2e2d483d84570c19cfce4c94.x(color_map_019f753c2e2d483d84570c19cfce4c94.color.domain()[i - 1]) : color_map_019f753c2e2d483d84570c19cfce4c94.x.range()[0],
            x1: i < color_map_019f753c2e2d483d84570c19cfce4c94.color.domain().length ? color_map_019f753c2e2d483d84570c19cfce4c94.x(color_map_019f753c2e2d483d84570c19cfce4c94.color.domain()[i]) : color_map_019f753c2e2d483d84570c19cfce4c94.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_019f753c2e2d483d84570c19cfce4c94.g.call(color_map_019f753c2e2d483d84570c19cfce4c94.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('31_50_JEFERSON BARROS DA SILVA');

