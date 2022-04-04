    
            var map_9ff8d8da00764fc6b7600c7cbdb589b9 = L.map(
                "map_9ff8d8da00764fc6b7600c7cbdb589b9",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_6053c52aa46649728050c14cc11b56eb = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_9ff8d8da00764fc6b7600c7cbdb589b9);
        
    
            var choropleth_70559d1f386a4f479b4de261e0d67a5d = L.featureGroup(
                {}
            ).addTo(map_9ff8d8da00764fc6b7600c7cbdb589b9);
        
    
        function geo_json_8a06330e08fc41b19532a4ed82968e3d_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 428: case 438: case 353: case 393: case 423: case 431: case 404: case 359: case 348: case 354: case 349: case 342: case 336: case 460: case 475: case 357: case 481: case 479: case 366: case 451: case 402: case 341: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 434: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 381: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 367: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_8a06330e08fc41b19532a4ed82968e3d_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_8a06330e08fc41b19532a4ed82968e3d = L.geoJson(null, {
                onEachFeature: geo_json_8a06330e08fc41b19532a4ed82968e3d_onEachFeature,
            
                style: geo_json_8a06330e08fc41b19532a4ed82968e3d_styler,
        });

        function geo_json_8a06330e08fc41b19532a4ed82968e3d_add (data) {
            geo_json_8a06330e08fc41b19532a4ed82968e3d
                .addData(data)
                .addTo(choropleth_70559d1f386a4f479b4de261e0d67a5d);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_8a06330e08fc41b19532a4ed82968e3d_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_fbe0a1badd75491284e84e02adc9ff7e = {};

    
    color_map_fbe0a1badd75491284e84e02adc9ff7e.color = d3.scale.threshold()
              .domain([0.0, 1.6856142190923904e-05, 3.371228438184781e-05, 5.0568426572771715e-05, 6.742456876369562e-05, 8.428071095461953e-05, 0.00010113685314554343, 0.00011799299533646732, 0.00013484913752739123, 0.00015170527971831516, 0.00016856142190923906, 0.00018541756410016293, 0.00020227370629108686, 0.00021912984848201076, 0.00023598599067293463, 0.00025284213286385856, 0.00026969827505478246, 0.00028655441724570636, 0.0003034105594366303, 0.00032026670162755416, 0.0003371228438184781, 0.000353978986009402, 0.00037083512820032587, 0.0003876912703912498, 0.0004045474125821737, 0.00042140355477309757, 0.0004382596969640215, 0.0004551158391549454, 0.00047197198134586927, 0.0004888281235367933, 0.0005056842657277171, 0.0005225404079186411, 0.0005393965501095649, 0.0005562526923004888, 0.0005731088344914127, 0.0005899649766823367, 0.0006068211188732606, 0.0006236772610641845, 0.0006405334032551083, 0.0006573895454460323, 0.0006742456876369562, 0.0006911018298278801, 0.000707957972018804, 0.0007248141142097279, 0.0007416702564006517, 0.0007585263985915757, 0.0007753825407824996, 0.0007922386829734235, 0.0008090948251643474, 0.0008259509673552713, 0.0008428071095461951, 0.0008596632517371192, 0.000876519393928043, 0.0008933755361189669, 0.0009102316783098908, 0.0009270878205008147, 0.0009439439626917385, 0.0009608001048826626, 0.0009776562470735866, 0.0009945123892645103, 0.0010113685314554343, 0.0010282246736463582, 0.0010450808158372822, 0.001061936958028206, 0.0010787931002191299, 0.0010956492424100538, 0.0011125053846009775, 0.0011293615267919015, 0.0011462176689828255, 0.0011630738111737492, 0.0011799299533646734, 0.0011967860955555973, 0.0012136422377465213, 0.001230498379937445, 0.001247354522128369, 0.001264210664319293, 0.0012810668065102167, 0.0012979229487011406, 0.0013147790908920646, 0.0013316352330829883, 0.0013484913752739125, 0.0013653475174648364, 0.0013822036596557602, 0.0013990598018466841, 0.001415915944037608, 0.0014327720862285318, 0.0014496282284194558, 0.0014664843706103797, 0.0014833405128013035, 0.0015001966549922274, 0.0015170527971831514, 0.0015339089393740753, 0.0015507650815649993, 0.0015676212237559232, 0.001584477365946847, 0.001601333508137771, 0.0016181896503286949, 0.0016350457925196186, 0.0016519019347105426, 0.0016687580769014665, 0.0016856142190923903, 0.0017024703612833142, 0.0017193265034742384, 0.0017361826456651621, 0.001753038787856086, 0.00176989493004701, 0.0017867510722379338, 0.0018036072144288577, 0.0018204633566197817, 0.0018373194988107054, 0.0018541756410016294, 0.0018710317831925533, 0.001887887925383477, 0.0019047440675744013, 0.0019216002097653252, 0.001938456351956249, 0.001955312494147173, 0.0019721686363380966, 0.0019890247785290206, 0.0020058809207199445, 0.0020227370629108685, 0.0020395932051017925, 0.0020564493472927164, 0.00207330548948364, 0.0020901616316745643, 0.002107017773865488, 0.002123873916056412, 0.0021407300582473358, 0.0021575862004382597, 0.0021744423426291837, 0.0021912984848201076, 0.0022081546270110316, 0.002225010769201955, 0.0022418669113928795, 0.002258723053583803, 0.002275579195774727, 0.002292435337965651, 0.002309291480156575, 0.0023261476223474984, 0.0023430037645384228, 0.0023598599067293467, 0.0023767160489202703, 0.0023935721911111946, 0.002410428333302118, 0.0024272844754930425, 0.002444140617683966, 0.00246099675987489, 0.002477852902065814, 0.002494709044256738, 0.0025115651864476615, 0.002528421328638586, 0.00254527747082951, 0.0025621336130204333, 0.0025789897552113577, 0.0025958458974022812, 0.002612702039593205, 0.002629558181784129, 0.002646414323975053, 0.0026632704661659766, 0.002680126608356901, 0.002696982750547825, 0.0027138388927387485, 0.002730695034929673, 0.0027475511771205964, 0.0027644073193115203, 0.0027812634615024443, 0.0027981196036933683, 0.0028149757458842918, 0.002831831888075216, 0.0028486880302661397, 0.0028655441724570636, 0.002882400314647988, 0.0028992564568389115, 0.0029161125990298355, 0.0029329687412207595, 0.0029498248834116834, 0.002966681025602607, 0.0029835371677935313, 0.003000393309984455, 0.003017249452175379, 0.0030341055943663028, 0.0030509617365572267, 0.0030678178787481507, 0.0030846740209390746, 0.0031015301631299986, 0.003118386305320922, 0.0031352424475118465, 0.00315209858970277, 0.003168954731893694, 0.003185810874084618, 0.003202667016275542, 0.0032195231584664654, 0.0032363793006573898, 0.0032532354428483137, 0.0032700915850392373, 0.0032869477272301616, 0.003303803869421085, 0.003320660011612009, 0.003337516153802933, 0.003354372295993857, 0.0033712284381847805, 0.003388084580375705, 0.0034049407225666285, 0.0034217968647575524, 0.003438653006948477, 0.0034555091491394003, 0.0034723652913303243, 0.0034892214335212482, 0.003506077575712172, 0.0035229337179030957, 0.00353978986009402, 0.0035566460022849436, 0.0035735021444758676, 0.0035903582866667915, 0.0036072144288577155, 0.0036240705710486394, 0.0036409267132395634, 0.0036577828554304873, 0.003674638997621411, 0.0036914951398123353, 0.0037083512820032588, 0.0037252074241941827, 0.0037420635663851067, 0.0037589197085760306, 0.003775775850766954, 0.0037926319929578785, 0.0038094881351488025, 0.003826344277339726, 0.0038432004195306504, 0.003860056561721574, 0.003876912703912498, 0.003893768846103422, 0.003910624988294346, 0.003927481130485269, 0.003944337272676193, 0.003961193414867118, 0.003978049557058041, 0.003994905699248965, 0.004011761841439889, 0.004028617983630813, 0.004045474125821737, 0.004062330268012661, 0.004079186410203585, 0.004096042552394508, 0.004112898694585433, 0.004129754836776357, 0.00414661097896728, 0.004163467121158205, 0.004180323263349129, 0.004197179405540052, 0.004214035547730976, 0.0042308916899219005, 0.004247747832112824, 0.0042646039743037475, 0.0042814601164946715, 0.0042983162586855955, 0.004315172400876519, 0.004332028543067443, 0.004348884685258367, 0.004365740827449291, 0.004382596969640215, 0.004399453111831138, 0.004416309254022063, 0.004433165396212987, 0.00445002153840391, 0.004466877680594834, 0.004483733822785759, 0.004500589964976682, 0.004517446107167606, 0.004534302249358531, 0.004551158391549454, 0.004568014533740378, 0.004584870675931302, 0.004601726818122226, 0.00461858296031315, 0.004635439102504074, 0.004652295244694997, 0.004669151386885922, 0.0046860075290768455, 0.004702863671267769, 0.0047197198134586935, 0.004736575955649617, 0.0047534320978405405, 0.0047702882400314645, 0.004787144382222389, 0.004804000524413313, 0.004820856666604236, 0.00483771280879516, 0.004854568950986085, 0.004871425093177008, 0.004888281235367932, 0.004905137377558857, 0.00492199351974978, 0.004938849661940704, 0.004955705804131628, 0.004972561946322552, 0.004989418088513476, 0.0050062742307044, 0.005023130372895323, 0.005039986515086248, 0.005056842657277172, 0.005073698799468095, 0.00509055494165902, 0.0051074110838499436, 0.005124267226040867, 0.005141123368231791, 0.005157979510422715, 0.0051748356526136385, 0.0051916917948045625, 0.005208547936995486, 0.00522540407918641, 0.005242260221377334, 0.005259116363568258, 0.005275972505759182, 0.005292828647950106, 0.00530968479014103, 0.005326540932331953, 0.005343397074522878, 0.005360253216713802, 0.005377109358904725, 0.00539396550109565, 0.005410821643286574, 0.005427677785477497, 0.005444533927668421, 0.005461390069859346, 0.005478246212050269, 0.005495102354241193, 0.005511958496432117, 0.005528814638623041, 0.005545670780813965, 0.005562526923004889, 0.0055793830651958125, 0.0055962392073867365, 0.0056130953495776605, 0.0056299514917685835, 0.005646807633959508, 0.005663663776150432, 0.005680519918341355, 0.005697376060532279, 0.005714232202723204, 0.005731088344914127, 0.005747944487105051, 0.005764800629295976, 0.005781656771486899, 0.005798512913677823, 0.005815369055868747, 0.005832225198059671, 0.005849081340250595, 0.005865937482441519, 0.005882793624632442, 0.005899649766823367, 0.005916505909014291, 0.005933362051205214, 0.005950218193396139, 0.005967074335587063, 0.005983930477777986, 0.00600078661996891, 0.0060176427621598345, 0.006034498904350758, 0.0060513550465416815, 0.0060682111887326055, 0.0060850673309235295, 0.006101923473114453, 0.006118779615305377, 0.006135635757496301, 0.006152491899687225, 0.006169348041878149, 0.006186204184069072, 0.006203060326259997, 0.006219916468450921, 0.006236772610641844, 0.006253628752832768, 0.006270484895023693, 0.006287341037214616, 0.00630419717940554, 0.006321053321596465, 0.006337909463787388, 0.006354765605978312, 0.006371621748169236, 0.00638847789036016, 0.006405334032551084, 0.006422190174742008, 0.006439046316932931, 0.006455902459123856, 0.0064727586013147796, 0.006489614743505703, 0.0065064708856966275, 0.006523327027887551, 0.0065401831700784745, 0.0065570393122693985, 0.006573895454460323, 0.006590751596651246, 0.00660760773884217, 0.006624463881033094, 0.006641320023224018, 0.006658176165414942, 0.006675032307605866, 0.00669188844979679, 0.006708744591987714, 0.006725600734178638, 0.006742456876369561, 0.006759313018560486, 0.00677616916075141, 0.006793025302942333, 0.006809881445133257, 0.006826737587324182, 0.006843593729515105, 0.006860449871706029, 0.006877306013896954, 0.006894162156087877, 0.006911018298278801, 0.006927874440469725, 0.0069447305826606485, 0.0069615867248515725, 0.0069784428670424965, 0.0069952990092334195, 0.007012155151424344, 0.007029011293615268, 0.007045867435806191, 0.007062723577997116, 0.00707957972018804, 0.007096435862378963, 0.007113292004569887, 0.007130148146760812, 0.007147004288951735, 0.007163860431142659, 0.007180716573333583, 0.007197572715524507, 0.007214428857715431, 0.007231284999906355, 0.007248141142097279, 0.007264997284288203, 0.007281853426479127, 0.00729870956867005, 0.007315565710860975, 0.007332421853051899, 0.007349277995242822, 0.007366134137433746, 0.0073829902796246705, 0.007399846421815594, 0.0074167025640065175, 0.007433558706197442, 0.0074504148483883655, 0.007467270990579289, 0.007484127132770213, 0.007500983274961137, 0.007517839417152061, 0.007534695559342985, 0.007551551701533908, 0.007568407843724833, 0.007585263985915757, 0.00760212012810668, 0.007618976270297605, 0.007635832412488529, 0.007652688554679452, 0.007669544696870376, 0.007686400839061301, 0.007703256981252224, 0.007720113123443148, 0.007736969265634073, 0.007753825407824996, 0.00777068155001592, 0.007787537692206844, 0.0078043938343977685, 0.007821249976588692, 0.007838106118779616, 0.007854962260970539, 0.007871818403161463, 0.007888674545352387, 0.007905530687543311, 0.007922386829734236, 0.00793924297192516, 0.007956099114116082, 0.007972955256307007, 0.00798981139849793, 0.008006667540688855, 0.008023523682879778, 0.008040379825070701, 0.008057235967261626, 0.00807409210945255, 0.008090948251643474, 0.008107804393834399, 0.008124660536025322, 0.008141516678216245, 0.00815837282040717, 0.008175228962598093, 0.008192085104789016, 0.008208941246979943, 0.008225797389170866, 0.008242653531361789, 0.008259509673552714, 0.008276365815743637, 0.00829322195793456, 0.008310078100125485, 0.00832693424231641, 0.008343790384507332, 0.008360646526698257, 0.00837750266888918, 0.008394358811080103, 0.008411214953271028])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_fbe0a1badd75491284e84e02adc9ff7e.x = d3.scale.linear()
              .domain([0.0, 0.008411214953271028])
              .range([0, 400]);

    color_map_fbe0a1badd75491284e84e02adc9ff7e.legend = L.control({position: 'topright'});
    color_map_fbe0a1badd75491284e84e02adc9ff7e.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_fbe0a1badd75491284e84e02adc9ff7e.legend.addTo(map_9ff8d8da00764fc6b7600c7cbdb589b9);

    color_map_fbe0a1badd75491284e84e02adc9ff7e.xAxis = d3.svg.axis()
        .scale(color_map_fbe0a1badd75491284e84e02adc9ff7e.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.0014018691588785048, 0.0028037383177570096, 0.004205607476635514, 0.005607476635514019, 0.007009345794392524, 0.008411214953271028]);

    color_map_fbe0a1badd75491284e84e02adc9ff7e.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_fbe0a1badd75491284e84e02adc9ff7e.g = color_map_fbe0a1badd75491284e84e02adc9ff7e.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_fbe0a1badd75491284e84e02adc9ff7e.g.selectAll("rect")
        .data(color_map_fbe0a1badd75491284e84e02adc9ff7e.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_fbe0a1badd75491284e84e02adc9ff7e.x(color_map_fbe0a1badd75491284e84e02adc9ff7e.color.domain()[i - 1]) : color_map_fbe0a1badd75491284e84e02adc9ff7e.x.range()[0],
            x1: i < color_map_fbe0a1badd75491284e84e02adc9ff7e.color.domain().length ? color_map_fbe0a1badd75491284e84e02adc9ff7e.x(color_map_fbe0a1badd75491284e84e02adc9ff7e.color.domain()[i]) : color_map_fbe0a1badd75491284e84e02adc9ff7e.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_fbe0a1badd75491284e84e02adc9ff7e.g.call(color_map_fbe0a1badd75491284e84e02adc9ff7e.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('41_13_ALBERTO LUIZ VIEIRA COSTA');

