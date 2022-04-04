    
            var map_46e67cb661364f4fb7d5a3e1e5c94be4 = L.map(
                "map_46e67cb661364f4fb7d5a3e1e5c94be4",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_d0de11f64f574f73a89859044b9234b1 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_46e67cb661364f4fb7d5a3e1e5c94be4);
        
    
            var choropleth_449c7f1a189b4ad59e4af83e247e701f = L.featureGroup(
                {}
            ).addTo(map_46e67cb661364f4fb7d5a3e1e5c94be4);
        
    
        function geo_json_3785924469714d909a0a05af72146f79_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 443: case 439: case 377: case 434: case 325: case 440: case 447: case 417: case 467: case 466: case 473: case 472: case 468: case 442: case 436: case 446: case 427: case 415: case 411: case 404: case 371: case 364: case 386: case 459: case 399: case 461: case 366: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 418: case 410: case 335: case 435: case 452: case 345: case 369: case 392: case 340: case 333: case 416: case 400: case 361: case 390: case 394: case 362: case 348: case 354: case 327: case 329: case 331: case 358: case 328: case 367: case 360: case 347: case 357: case 355: case 463: case 454: case 409: case 469: case 391: case 465: case 451: case 388: case 370: case 378: case 511: case 389: case 384: case 405: case 476: case 890: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 428: case 353: case 393: case 381: case 350: case 387: case 458: case 450: case 510: case 414: case 406: case 374: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 438: case 449: case 453: case 462: case 456: case 470: case 437: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: case 464: case 478: case 444: case 426: case 419: case 408: case 445: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_3785924469714d909a0a05af72146f79_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_3785924469714d909a0a05af72146f79 = L.geoJson(null, {
                onEachFeature: geo_json_3785924469714d909a0a05af72146f79_onEachFeature,
            
                style: geo_json_3785924469714d909a0a05af72146f79_styler,
        });

        function geo_json_3785924469714d909a0a05af72146f79_add (data) {
            geo_json_3785924469714d909a0a05af72146f79
                .addData(data)
                .addTo(choropleth_449c7f1a189b4ad59e4af83e247e701f);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_3785924469714d909a0a05af72146f79_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_fa65c70490b644e48bbffc728ea0f76e = {};

    
    color_map_fa65c70490b644e48bbffc728ea0f76e.color = d3.scale.threshold()
              .domain([0.00042283298097251583, 0.00044519013979034394, 0.0004675472986081721, 0.0004899044574260003, 0.0005122616162438284, 0.0005346187750616565, 0.0005569759338794846, 0.0005793330926973127, 0.000601690251515141, 0.0006240474103329691, 0.0006464045691507972, 0.0006687617279686254, 0.0006911188867864534, 0.0007134760456042816, 0.0007358332044221097, 0.0007581903632399379, 0.0007805475220577661, 0.0008029046808755942, 0.0008252618396934223, 0.0008476189985112505, 0.0008699761573290785, 0.0008923333161469068, 0.0009146904749647349, 0.000937047633782563, 0.0009594047926003911, 0.0009817619514182192, 0.0010041191102360474, 0.0010264762690538757, 0.0010488334278717037, 0.0010711905866895319, 0.00109354774550736, 0.0011159049043251881, 0.0011382620631430161, 0.0011606192219608443, 0.0011829763807786726, 0.0012053335395965006, 0.0012276906984143288, 0.001250047857232157, 0.001272405016049985, 0.0012947621748678132, 0.0013171193336856415, 0.0013394764925034695, 0.0013618336513212977, 0.001384190810139126, 0.001406547968956954, 0.0014289051277747821, 0.0014512622865926101, 0.0014736194454104384, 0.0014959766042282664, 0.0015183337630460946, 0.0015406909218639228, 0.0015630480806817508, 0.001585405239499579, 0.0016077623983174073, 0.0016301195571352353, 0.0016524767159530633, 0.0016748338747708915, 0.0016971910335887197, 0.001719548192406548, 0.001741905351224376, 0.0017642625100422042, 0.0017866196688600324, 0.0018089768276778606, 0.0018313339864956884, 0.0018536911453135166, 0.0018760483041313448, 0.0018984054629491728, 0.001920762621767001, 0.0019431197805848293, 0.0019654769394026575, 0.0019878340982204855, 0.0020101912570383135, 0.0020325484158561415, 0.00205490557467397, 0.002077262733491798, 0.002099619892309626, 0.0021219770511274544, 0.002144334209945283, 0.0021666913687631104, 0.002189048527580939, 0.002211405686398767, 0.002233762845216595, 0.0022561200040344233, 0.0022784771628522513, 0.0023008343216700793, 0.0023231914804879078, 0.0023455486393057358, 0.0023679057981235638, 0.002390262956941392, 0.00241262011575922, 0.0024349772745770482, 0.0024573344333948767, 0.0024796915922127042, 0.0025020487510305327, 0.002524405909848361, 0.0025467630686661887, 0.002569120227484017, 0.0025914773863018456, 0.002613834545119673, 0.0026361917039375016, 0.00265854886275533, 0.0026809060215731576, 0.002703263180390986, 0.0027256203392088136, 0.002747977498026642, 0.0027703346568444705, 0.002792691815662299, 0.0028150489744801265, 0.002837406133297955, 0.0028597632921157834, 0.002882120450933611, 0.0029044776097514394, 0.002926834768569267, 0.0029491919273870954, 0.002971549086204924, 0.0029939062450227523, 0.00301626340384058, 0.0030386205626584074, 0.003060977721476236, 0.0030833348802940643, 0.0031056920391118927, 0.0031280491979297203, 0.0031504063567475487, 0.003172763515565377, 0.0031951206743832056, 0.003217477833201033, 0.0032398349920188608, 0.003262192150836689, 0.0032845493096545176, 0.003306906468472346, 0.0033292636272901736, 0.003351620786108002, 0.0033739779449258296, 0.003396335103743658, 0.0034186922625614865, 0.003441049421379314, 0.0034634065801971425, 0.003485763739014971, 0.0035081208978327994, 0.003530478056650627, 0.0035528352154684554, 0.003575192374286283, 0.0035975495331041114, 0.00361990669192194, 0.0036422638507397674, 0.003664621009557596, 0.0036869781683754243, 0.003709335327193252, 0.0037316924860110803, 0.003754049644828908, 0.0037764068036467363, 0.003798763962464565, 0.0038211211212823932, 0.003843478280100221, 0.0038658354389180492, 0.003888192597735877, 0.003910549756553705, 0.003932906915371534, 0.003955264074189361, 0.00397762123300719, 0.003999978391825018, 0.004022335550642847, 0.004044692709460674, 0.004067049868278503, 0.00408940702709633, 0.004111764185914159, 0.004134121344731987, 0.004156478503549815, 0.004178835662367643, 0.0042011928211854715, 0.004223549980003299, 0.0042459071388211275, 0.004268264297638956, 0.0042906214564567835, 0.004312978615274612, 0.0043353357740924395, 0.004357692932910268, 0.0043800500917280955, 0.004402407250545924, 0.004424764409363752, 0.004447121568181581, 0.004469478726999408, 0.004491835885817237, 0.004514193044635065, 0.004536550203452893, 0.004558907362270721, 0.00458126452108855, 0.004603621679906378, 0.004625978838724206, 0.004648335997542033, 0.004670693156359862, 0.004693050315177689, 0.004715407473995518, 0.004737764632813346, 0.004760121791631175, 0.004782478950449002, 0.004804836109266831, 0.004827193268084659, 0.0048495504269024875, 0.004871907585720315, 0.0048942647445381435, 0.004916621903355972, 0.0049389790621737996, 0.004961336220991628, 0.0049836933798094556, 0.005006050538627284, 0.005028407697445112, 0.00505076485626294, 0.0050731220150807685, 0.005095479173898596, 0.0051178363327164245, 0.005140193491534253, 0.005162550650352081, 0.005184907809169909, 0.005207264967987737, 0.005229622126805566, 0.005251979285623393, 0.005274336444441222, 0.00529669360325905, 0.005319050762076878, 0.005341407920894705, 0.005363765079712534, 0.005386122238530362, 0.00540847939734819, 0.005430836556166018, 0.005453193714983847, 0.005475550873801675, 0.005497908032619503, 0.005520265191437331, 0.00554262235025516, 0.005564979509072988, 0.005587336667890816, 0.005609693826708644, 0.0056320509855264725, 0.005654408144344299, 0.005676765303162128, 0.005699122461979956, 0.0057214796207977845, 0.005743836779615612, 0.0057661939384334405, 0.005788551097251269, 0.0058109082560690965, 0.005833265414886925, 0.005855622573704753, 0.005877979732522582, 0.005900336891340409, 0.005922694050158238, 0.005945051208976066, 0.005967408367793895, 0.0059897655266117214, 0.00601212268542955, 0.006034479844247378, 0.006056837003065206, 0.006079194161883034, 0.006101551320700863, 0.006123908479518691, 0.006146265638336519, 0.006168622797154347, 0.006190979955972176, 0.006213337114790003, 0.006235694273607832, 0.00625805143242566, 0.0062804085912434885, 0.006302765750061316, 0.006325122908879144, 0.006347480067696972, 0.0063698372265148, 0.006392194385332628, 0.006414551544150457, 0.006436908702968285, 0.006459265861786113, 0.006481623020603941, 0.0065039801794217695, 0.006526337338239597, 0.0065486944970574255, 0.006571051655875254, 0.006593408814693082, 0.00661576597351091, 0.006638123132328738, 0.006660480291146566, 0.006682837449964394, 0.006705194608782222, 0.00672755176760005, 0.006749908926417879, 0.006772266085235706, 0.006794623244053535, 0.006816980402871363, 0.006839337561689192, 0.006861694720507019, 0.006884051879324848, 0.006906409038142676, 0.006928766196960504, 0.006951123355778332, 0.006973480514596161, 0.006995837673413988, 0.007018194832231816, 0.007040551991049644, 0.007062909149867473, 0.0070852663086853, 0.007107623467503129, 0.007129980626320957, 0.0071523377851387855, 0.007174694943956613, 0.0071970521027744415, 0.00721940926159227, 0.007241766420410098, 0.007264123579227926, 0.007286480738045754, 0.007308837896863583, 0.0073311950556814096, 0.007353552214499238, 0.007375909373317066, 0.007398266532134895, 0.0074206236909527224, 0.007442980849770551, 0.007465338008588379, 0.007487695167406207, 0.007510052326224035, 0.007532409485041864, 0.007554766643859692, 0.00757712380267752, 0.007599480961495348, 0.007621838120313177, 0.007644195279131004, 0.007666552437948832, 0.00768890959676666, 0.007711266755584489, 0.007733623914402316, 0.007755981073220145, 0.007778338232037973, 0.007800695390855802, 0.00782305254967363, 0.007845409708491458, 0.007867766867309287, 0.007890124026127114, 0.007912481184944942, 0.007934838343762771, 0.007957195502580599, 0.007979552661398426, 0.008001909820216254, 0.008024266979034083, 0.008046624137851911, 0.008068981296669738, 0.008091338455487568, 0.008113695614305395, 0.008136052773123223, 0.008158409931941052, 0.00818076709075888, 0.008203124249576707, 0.008225481408394537, 0.008247838567212364, 0.008270195726030194, 0.008292552884848021, 0.00831491004366585, 0.008337267202483676, 0.008359624361301506, 0.008381981520119333, 0.00840433867893716, 0.00842669583775499, 0.008449052996572818, 0.008471410155390647, 0.008493767314208475, 0.008516124473026302, 0.008538481631844131, 0.008560838790661959, 0.008583195949479787, 0.008605553108297616, 0.008627910267115443, 0.008650267425933271, 0.0086726245847511, 0.008694981743568928, 0.008717338902386757, 0.008739696061204585, 0.008762053220022412, 0.008784410378840242, 0.00880676753765807, 0.008829124696475897, 0.008851481855293724, 0.008873839014111552, 0.00889619617292938, 0.008918553331747209, 0.008940910490565036, 0.008963267649382864, 0.008985624808200693, 0.00900798196701852, 0.00903033912583635, 0.009052696284654178, 0.009075053443472005, 0.009097410602289835, 0.009119767761107662, 0.00914212491992549, 0.009164482078743319, 0.009186839237561147, 0.009209196396378974, 0.009231553555196803, 0.009253910714014631, 0.00927626787283246, 0.009298625031650288, 0.009320982190468115, 0.009343339349285945, 0.009365696508103772, 0.0093880536669216, 0.00941041082573943, 0.009432767984557257, 0.009455125143375084, 0.009477482302192914, 0.009499839461010741, 0.009522196619828567, 0.009544553778646396, 0.009566910937464224, 0.009589268096282053, 0.00961162525509988, 0.009633982413917708, 0.009656339572735538, 0.009678696731553365, 0.009701053890371193, 0.009723411049189022, 0.00974576820800685, 0.009768125366824677, 0.009790482525642507, 0.009812839684460334, 0.009835196843278162, 0.009857554002095991, 0.009879911160913819, 0.009902268319731648, 0.009924625478549476, 0.009946982637367303, 0.009969339796185132, 0.00999169695500296, 0.010014054113820788, 0.010036411272638617, 0.010058768431456444, 0.010081125590274272, 0.010103482749092101, 0.010125839907909929, 0.010148197066727758, 0.010170554225545586, 0.010192911384363412, 0.010215268543181241, 0.010237625701999068, 0.010259982860816896, 0.010282340019634725, 0.010304697178452553, 0.01032705433727038, 0.01034941149608821, 0.010371768654906037, 0.010394125813723865, 0.010416482972541694, 0.010438840131359522, 0.010461197290177351, 0.010483554448995179, 0.010505911607813006, 0.010528268766630836, 0.010550625925448663, 0.01057298308426649, 0.01059534024308432, 0.010617697401902148, 0.010640054560719975, 0.010662411719537804, 0.010684768878355632, 0.010707126037173461, 0.010729483195991289, 0.010751840354809116, 0.010774197513626946, 0.010796554672444773, 0.010818911831262601, 0.01084126899008043, 0.010863626148898256, 0.010885983307716084, 0.010908340466533913, 0.01093069762535174, 0.010953054784169568, 0.010975411942987397, 0.010997769101805225, 0.011020126260623054, 0.011042483419440882, 0.01106484057825871, 0.011087197737076539, 0.011109554895894366, 0.011131912054712194, 0.011154269213530023, 0.01117662637234785, 0.011198983531165678, 0.011221340689983508, 0.011243697848801335, 0.011266055007619164, 0.011288412166436992, 0.01131076932525482, 0.011333126484072649, 0.011355483642890477, 0.011377840801708304, 0.011400197960526133, 0.011422555119343961, 0.011444912278161789, 0.011467269436979618, 0.011489626595797445, 0.011511983754615275, 0.0115343409134331, 0.011556698072250928, 0.011579055231068757])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_fa65c70490b644e48bbffc728ea0f76e.x = d3.scale.linear()
              .domain([0.00042283298097251583, 0.011579055231068757])
              .range([0, 400]);

    color_map_fa65c70490b644e48bbffc728ea0f76e.legend = L.control({position: 'topright'});
    color_map_fa65c70490b644e48bbffc728ea0f76e.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_fa65c70490b644e48bbffc728ea0f76e.legend.addTo(map_46e67cb661364f4fb7d5a3e1e5c94be4);

    color_map_fa65c70490b644e48bbffc728ea0f76e.xAxis = d3.svg.axis()
        .scale(color_map_fa65c70490b644e48bbffc728ea0f76e.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.00042283298097251583, 0.002282203355988556, 0.004141573731004596, 0.006000944106020636, 0.007860314481036676, 0.009719684856052718, 0.011579055231068757]);

    color_map_fa65c70490b644e48bbffc728ea0f76e.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_fa65c70490b644e48bbffc728ea0f76e.g = color_map_fa65c70490b644e48bbffc728ea0f76e.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_fa65c70490b644e48bbffc728ea0f76e.g.selectAll("rect")
        .data(color_map_fa65c70490b644e48bbffc728ea0f76e.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_fa65c70490b644e48bbffc728ea0f76e.x(color_map_fa65c70490b644e48bbffc728ea0f76e.color.domain()[i - 1]) : color_map_fa65c70490b644e48bbffc728ea0f76e.x.range()[0],
            x1: i < color_map_fa65c70490b644e48bbffc728ea0f76e.color.domain().length ? color_map_fa65c70490b644e48bbffc728ea0f76e.x(color_map_fa65c70490b644e48bbffc728ea0f76e.color.domain()[i]) : color_map_fa65c70490b644e48bbffc728ea0f76e.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_fa65c70490b644e48bbffc728ea0f76e.g.call(color_map_fa65c70490b644e48bbffc728ea0f76e.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('18_50_THAIS DE SOUZA FERREIRA');

