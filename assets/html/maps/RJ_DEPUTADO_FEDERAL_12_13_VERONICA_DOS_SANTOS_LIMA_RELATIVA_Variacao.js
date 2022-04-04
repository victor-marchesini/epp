    
            var map_025a5eb6a0dc47a99f8cc9744c1cd3cd = L.map(
                "map_025a5eb6a0dc47a99f8cc9744c1cd3cd",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_9193736f84064b9a8a7a1a5a55beb32d = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_025a5eb6a0dc47a99f8cc9744c1cd3cd);
        
    
            var choropleth_895dc315eee2433381f433dbae3d9a88 = L.featureGroup(
                {}
            ).addTo(map_025a5eb6a0dc47a99f8cc9744c1cd3cd);
        
    
        function geo_json_bce1a4e0865f45889b43b67e8e0c6fea_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 366: case 391: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 443: case 347: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 434: case 441: case 438: case 447: case 467: case 435: case 351: case 333: case 432: case 386: case 454: case 430: case 378: case 374: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 357: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_bce1a4e0865f45889b43b67e8e0c6fea_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_bce1a4e0865f45889b43b67e8e0c6fea = L.geoJson(null, {
                onEachFeature: geo_json_bce1a4e0865f45889b43b67e8e0c6fea_onEachFeature,
            
                style: geo_json_bce1a4e0865f45889b43b67e8e0c6fea_styler,
        });

        function geo_json_bce1a4e0865f45889b43b67e8e0c6fea_add (data) {
            geo_json_bce1a4e0865f45889b43b67e8e0c6fea
                .addData(data)
                .addTo(choropleth_895dc315eee2433381f433dbae3d9a88);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_bce1a4e0865f45889b43b67e8e0c6fea_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_7d484e1ce4664177abe16242241699e7 = {};

    
    color_map_7d484e1ce4664177abe16242241699e7.color = d3.scale.threshold()
              .domain([0.00016665277893508876, 0.00019604667303277872, 0.00022544056713046866, 0.00025483446122815865, 0.0002842283553258486, 0.0003136222494235385, 0.00034301614352122845, 0.0003724100376189184, 0.0004018039317166084, 0.00043119782581429837, 0.0004605917199119883, 0.0004899856140096782, 0.0005193795081073682, 0.0005487734022050581, 0.000578167296302748, 0.000607561190400438, 0.000636955084498128, 0.000666348978595818, 0.0006957428726935079, 0.0007251367667911977, 0.0007545306608888878, 0.0007839245549865777, 0.0008133184490842677, 0.0008427123431819576, 0.0008721062372796476, 0.0009015001313773376, 0.0009308940254750274, 0.0009602879195727174, 0.0009896818136704074, 0.0010190757077680973, 0.0010484696018657873, 0.0010778634959634774, 0.0011072573900611673, 0.001136651284158857, 0.0011660451782565472, 0.001195439072354237, 0.001224832966451927, 0.001254226860549617, 0.0012836207546473067, 0.001313014648744997, 0.0013424085428426868, 0.0013718024369403768, 0.0014011963310380667, 0.0014305902251357569, 0.0014599841192334466, 0.0014893780133311365, 0.0015187719074288264, 0.0015481658015265164, 0.0015775596956242065, 0.0016069535897218963, 0.0016363474838195864, 0.0016657413779172763, 0.001695135272014966, 0.0017245291661126562, 0.0017539230602103462, 0.001783316954308036, 0.001812710848405726, 0.0018421047425034162, 0.001871498636601106, 0.0019008925306987958, 0.0019302864247964858, 0.001959680318894176, 0.001989074212991866, 0.002018468107089556, 0.0020478620011872457, 0.0020772558952849357, 0.0021066497893826256, 0.0021360436834803155, 0.002165437577578006, 0.002194831471675696, 0.0022242253657733854, 0.0022536192598710753, 0.0022830131539687657, 0.0023124070480664556, 0.0023418009421641455, 0.0023711948362618355, 0.002400588730359525, 0.0024299826244572153, 0.0024593765185549053, 0.002488770412652595, 0.002518164306750285, 0.0025475582008479747, 0.002576952094945665, 0.002606345989043355, 0.002635739883141045, 0.002665133777238735, 0.002694527671336425, 0.0027239215654341147, 0.0027533154595318046, 0.0027827093536294946, 0.0028121032477271845, 0.002841497141824875, 0.0028708910359225644, 0.0029002849300202543, 0.0029296788241179443, 0.002959072718215634, 0.0029884666123133246, 0.0030178605064110145, 0.003047254400508704, 0.003076648294606394, 0.0031060421887040843, 0.0031354360828017742, 0.003164829976899464, 0.0031942238709971537, 0.0032236177650948436, 0.003253011659192534, 0.003282405553290224, 0.003311799447387914, 0.003341193341485604, 0.0033705872355832937, 0.0033999811296809837, 0.0034293750237786736, 0.0034587689178763635, 0.0034881628119740535, 0.003517556706071744, 0.0035469506001694334, 0.0035763444942671233, 0.0036057383883648132, 0.003635132282462503, 0.0036645261765601935, 0.003693920070657883, 0.003723313964755573, 0.003752707858853263, 0.0037821017529509533, 0.003811495647048643, 0.003840889541146333, 0.0038702834352440227, 0.0038996773293417126, 0.0039290712234394025, 0.0039584651175370925, 0.003987859011634782, 0.004017252905732472, 0.004046646799830162, 0.004076040693927852, 0.004105434588025542, 0.004134828482123233, 0.004164222376220923, 0.004193616270318612, 0.004223010164416303, 0.004252404058513992, 0.004281797952611682, 0.0043111918467093726, 0.004340585740807062, 0.0043699796349047524, 0.004399373529002442, 0.0044287674231001314, 0.004458161317197822, 0.004487555211295511, 0.004516949105393202, 0.004546342999490892, 0.004575736893588582, 0.004605130787686272, 0.004634524681783961, 0.004663918575881652, 0.004693312469979342, 0.004722706364077032, 0.004752100258174722, 0.004781494152272411, 0.0048108880463701015, 0.004840281940467791, 0.004869675834565481, 0.004899069728663171, 0.00492846362276086, 0.004957857516858551, 0.004987251410956241, 0.005016645305053931, 0.005046039199151621, 0.005075433093249311, 0.005104826987347001, 0.005134220881444691, 0.005163614775542381, 0.005193008669640071, 0.0052224025637377615, 0.0052517964578354505, 0.0052811903519331405, 0.00531058424603083, 0.00533997814012852, 0.005369372034226211, 0.0053987659283239, 0.00542815982242159, 0.00545755371651928, 0.00548694761061697, 0.005516341504714661, 0.00554573539881235, 0.00557512929291004, 0.00560452318700773, 0.00563391708110542, 0.0056633109752031105, 0.0056927048693008, 0.00572209876339849, 0.0057514926574961794, 0.005780886551593869, 0.00581028044569156, 0.005839674339789249, 0.00586906823388694, 0.00589846212798463, 0.005927856022082319, 0.00595724991618001, 0.005986643810277699, 0.00601603770437539, 0.00604543159847308, 0.006074825492570769, 0.0061042193866684595, 0.006133613280766149, 0.006163007174863839, 0.006192401068961529, 0.006221794963059218, 0.006251188857156909, 0.006280582751254598, 0.006309976645352289, 0.006339370539449979, 0.006368764433547669, 0.006398158327645359, 0.006427552221743048, 0.006456946115840739, 0.006486340009938429, 0.006515733904036119, 0.006545127798133809, 0.0065745216922314985, 0.0066039155863291885, 0.006633309480426878, 0.006662703374524568, 0.006692097268622258, 0.006721491162719948, 0.006750885056817638, 0.006780278950915328, 0.006809672845013018, 0.006839066739110708, 0.006868460633208399, 0.006897854527306088, 0.006927248421403778, 0.006956642315501468, 0.006986036209599158, 0.0070154301036968484, 0.0070448239977945375, 0.0070742178918922274, 0.007103611785989917, 0.007133005680087607, 0.007162399574185298, 0.007191793468282987, 0.007221187362380677, 0.007250581256478368, 0.007279975150576057, 0.007309369044673748, 0.007338762938771437, 0.007368156832869127, 0.007397550726966818, 0.007426944621064507, 0.0074563385151621975, 0.0074857324092598865, 0.007515126303357577, 0.007544520197455267, 0.007573914091552956, 0.007603307985650647, 0.007632701879748336, 0.007662095773846027, 0.007691489667943717, 0.007720883562041406, 0.007750277456139097, 0.007779671350236786, 0.007809065244334477, 0.007838459138432166, 0.007867853032529855, 0.007897246926627546, 0.007926640820725235, 0.007956034714822926, 0.007985428608920615, 0.008014822503018305, 0.008044216397115994, 0.008073610291213685, 0.008103004185311376, 0.008132398079409065, 0.008161791973506756, 0.008191185867604445, 0.008220579761702134, 0.008249973655799825, 0.008279367549897516, 0.008308761443995205, 0.008338155338092894, 0.008367549232190585, 0.008396943126288274, 0.008426337020385965, 0.008455730914483655, 0.008485124808581344, 0.008514518702679033, 0.008543912596776724, 0.008573306490874415, 0.008602700384972104, 0.008632094279069795, 0.008661488173167484, 0.008690882067265173, 0.008720275961362864, 0.008749669855460555, 0.008779063749558244, 0.008808457643655933, 0.008837851537753624, 0.008867245431851314, 0.008896639325949003, 0.008926033220046694, 0.008955427114144383, 0.008984821008242074, 0.009014214902339763, 0.009043608796437454, 0.009073002690535143, 0.009102396584632832, 0.009131790478730525, 0.009161184372828214, 0.009190578266925903, 0.009219972161023594, 0.009249366055121283, 0.009278759949218974, 0.009308153843316664, 0.009337547737414353, 0.009366941631512042, 0.009396335525609732, 0.009425729419707424, 0.009455123313805113, 0.009484517207902802, 0.009513911102000493, 0.009543304996098182, 0.009572698890195873, 0.009602092784293564, 0.009631486678391253, 0.009660880572488942, 0.009690274466586631, 0.009719668360684323, 0.009749062254782013, 0.009778456148879702, 0.009807850042977392, 0.009837243937075081, 0.009866637831172772, 0.009896031725270463, 0.009925425619368152, 0.009954819513465841, 0.009984213407563532, 0.010013607301661223, 0.010043001195758912, 0.010072395089856601, 0.010101788983954292, 0.010131182878051983, 0.010160576772149672, 0.010189970666247362, 0.010219364560345051, 0.01024875845444274, 0.010278152348540433, 0.010307546242638122, 0.010336940136735811, 0.0103663340308335, 0.010395727924931191, 0.010425121819028882, 0.010454515713126571, 0.010483909607224262, 0.01051330350132195, 0.01054269739541964, 0.010572091289517332, 0.010601485183615022, 0.01063087907771271, 0.010660272971810401, 0.01068966686590809, 0.010719060760005781, 0.01074845465410347, 0.010777848548201161, 0.01080724244229885, 0.01083663633639654, 0.010866030230494232, 0.010895424124591921, 0.01092481801868961, 0.0109542119127873, 0.01098360580688499, 0.01101299970098268, 0.01104239359508037, 0.01107178748917806, 0.01110118138327575, 0.011130575277373439, 0.011159969171471131, 0.01118936306556882, 0.01121875695966651, 0.0112481508537642, 0.011277544747861891, 0.01130693864195958, 0.011336332536057269, 0.01136572643015496, 0.011395120324252649, 0.01142451421835034, 0.01145390811244803, 0.01148330200654572, 0.011512695900643409, 0.0115420897947411, 0.01157148368883879, 0.01160087758293648, 0.01163027147703417, 0.01165966537113186, 0.011689059265229548, 0.011718453159327239, 0.01174784705342493, 0.011777240947522619, 0.011806634841620308, 0.011836028735717999, 0.01186542262981569, 0.011894816523913379, 0.01192421041801107, 0.011953604312108759, 0.011982998206206448, 0.012012392100304138, 0.01204178599440183, 0.012071179888499518, 0.012100573782597207, 0.012129967676694898, 0.012159361570792589, 0.012188755464890278, 0.012218149358987969, 0.012247543253085658, 0.012276937147183347, 0.01230633104128104, 0.012335724935378729, 0.012365118829476418, 0.012394512723574107, 0.0124239066176718, 0.012453300511769488, 0.012482694405867177, 0.012512088299964868, 0.012541482194062557, 0.012570876088160248, 0.012600269982257939, 0.012629663876355628, 0.012659057770453317, 0.012688451664551006, 0.012717845558648699, 0.012747239452746388, 0.012776633346844077, 0.012806027240941768, 0.012835421135039457, 0.012864815029137147, 0.012894208923234838, 0.012923602817332527, 0.012952996711430216, 0.012982390605527907, 0.013011784499625598, 0.013041178393723287, 0.013070572287820976, 0.013099966181918667, 0.013129360076016356, 0.013158753970114047, 0.013188147864211738, 0.013217541758309427, 0.013246935652407116, 0.013276329546504807, 0.013305723440602497, 0.013335117334700186, 0.013364511228797876, 0.013393905122895566, 0.013423299016993255, 0.013452692911090946, 0.013482086805188637, 0.013511480699286326, 0.013540874593384015, 0.013570268487481708, 0.013599662381579397, 0.013629056275677086, 0.013658450169774777, 0.013687844063872466, 0.013717237957970157, 0.013746631852067846, 0.013776025746165536, 0.013805419640263225, 0.013834813534360915, 0.013864207428458607, 0.013893601322556296, 0.013922995216653985, 0.013952389110751676, 0.013981783004849365, 0.014011176898947056, 0.014040570793044745, 0.014069964687142436, 0.014099358581240125, 0.014128752475337814, 0.014158146369435506, 0.014187540263533195, 0.014216934157630885, 0.014246328051728575, 0.014275721945826264, 0.014305115839923955, 0.014334509734021646, 0.014363903628119335, 0.014393297522217024, 0.014422691416314713, 0.014452085310412406, 0.014481479204510095, 0.014510873098607784, 0.014540266992705475, 0.014569660886803164, 0.014599054780900855, 0.014628448674998545, 0.014657842569096234, 0.014687236463193924, 0.014716630357291614, 0.014746024251389305, 0.014775418145486994, 0.014804812039584683, 0.014834205933682374])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_7d484e1ce4664177abe16242241699e7.x = d3.scale.linear()
              .domain([0.00016665277893508876, 0.014834205933682374])
              .range([0, 400]);

    color_map_7d484e1ce4664177abe16242241699e7.legend = L.control({position: 'topright'});
    color_map_7d484e1ce4664177abe16242241699e7.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_7d484e1ce4664177abe16242241699e7.legend.addTo(map_025a5eb6a0dc47a99f8cc9744c1cd3cd);

    color_map_7d484e1ce4664177abe16242241699e7.xAxis = d3.svg.axis()
        .scale(color_map_7d484e1ce4664177abe16242241699e7.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.00016665277893508876, 0.00261124497139297, 0.005055837163850851, 0.007500429356308732, 0.009945021548766612, 0.012389613741224494, 0.014834205933682374]);

    color_map_7d484e1ce4664177abe16242241699e7.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_7d484e1ce4664177abe16242241699e7.g = color_map_7d484e1ce4664177abe16242241699e7.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_7d484e1ce4664177abe16242241699e7.g.selectAll("rect")
        .data(color_map_7d484e1ce4664177abe16242241699e7.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_7d484e1ce4664177abe16242241699e7.x(color_map_7d484e1ce4664177abe16242241699e7.color.domain()[i - 1]) : color_map_7d484e1ce4664177abe16242241699e7.x.range()[0],
            x1: i < color_map_7d484e1ce4664177abe16242241699e7.color.domain().length ? color_map_7d484e1ce4664177abe16242241699e7.x(color_map_7d484e1ce4664177abe16242241699e7.color.domain()[i]) : color_map_7d484e1ce4664177abe16242241699e7.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_7d484e1ce4664177abe16242241699e7.g.call(color_map_7d484e1ce4664177abe16242241699e7.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('12_13_VERONICA DOS SANTOS LIMA');

