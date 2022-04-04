    
            var map_7ca452a158c745baac62232780215dd9 = L.map(
                "map_7ca452a158c745baac62232780215dd9",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_0f2bd42d66ba416c92b8c2401e68831e = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_7ca452a158c745baac62232780215dd9);
        
    
            var choropleth_ebdabc6552d94abdb42a9d07002ea9a2 = L.featureGroup(
                {}
            ).addTo(map_7ca452a158c745baac62232780215dd9);
        
    
        function geo_json_0b728d7aa99b407e9282a16f1871bd0f_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 422: case 377: case 412: case 418: case 410: case 448: case 449: case 447: case 466: case 473: case 455: case 335: case 464: case 442: case 436: case 446: case 444: case 381: case 369: case 363: case 352: case 343: case 351: case 383: case 338: case 396: case 382: case 427: case 419: case 415: case 397: case 364: case 385: case 346: case 361: case 390: case 368: case 362: case 386: case 379: case 372: case 334: case 329: case 330: case 356: case 355: case 459: case 433: case 429: case 409: case 399: case 471: case 461: case 451: case 402: case 388: case 370: case 387: case 378: case 511: case 450: case 389: case 384: case 510: case 414: case 406: case 890: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 435: case 354: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 340: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 366: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 374: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_0b728d7aa99b407e9282a16f1871bd0f_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_0b728d7aa99b407e9282a16f1871bd0f = L.geoJson(null, {
                onEachFeature: geo_json_0b728d7aa99b407e9282a16f1871bd0f_onEachFeature,
            
                style: geo_json_0b728d7aa99b407e9282a16f1871bd0f_styler,
        });

        function geo_json_0b728d7aa99b407e9282a16f1871bd0f_add (data) {
            geo_json_0b728d7aa99b407e9282a16f1871bd0f
                .addData(data)
                .addTo(choropleth_ebdabc6552d94abdb42a9d07002ea9a2);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_0b728d7aa99b407e9282a16f1871bd0f_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_c286dcd9c0c348ebaabde929fc90cd55 = {};

    
    color_map_c286dcd9c0c348ebaabde929fc90cd55.color = d3.scale.threshold()
              .domain([8.814611099358297e-06, 1.0994323758618451e-05, 1.3174036417878605e-05, 1.5353749077138758e-05, 1.7533461736398915e-05, 1.971317439565907e-05, 2.1892887054919224e-05, 2.4072599714179375e-05, 2.6252312373439532e-05, 2.8432025032699683e-05, 3.061173769195984e-05, 3.279145035121999e-05, 3.497116301048015e-05, 3.71508756697403e-05, 3.933058832900046e-05, 4.151030098826061e-05, 4.3690013647520766e-05, 4.5869726306780924e-05, 4.8049438966041075e-05, 5.022915162530123e-05, 5.240886428456139e-05, 5.4588576943821534e-05, 5.676828960308169e-05, 5.894800226234184e-05, 6.1127714921602e-05, 6.330742758086215e-05, 6.548714024012231e-05, 6.766685289938247e-05, 6.984656555864261e-05, 7.202627821790277e-05, 7.420599087716291e-05, 7.638570353642307e-05, 7.856541619568323e-05, 8.074512885494338e-05, 8.292484151420354e-05, 8.510455417346369e-05, 8.728426683272384e-05, 8.9463979491984e-05, 9.164369215124416e-05, 9.382340481050432e-05, 9.600311746976447e-05, 9.81828301290246e-05, 0.00010036254278828476, 0.00010254225544754492, 0.00010472196810680508, 0.00010690168076606524, 0.00010908139342532538, 0.00011126110608458554, 0.0001134408187438457, 0.00011562053140310585, 0.00011780024406236601, 0.00011997995672162617, 0.00012215966938088633, 0.00012433938204014648, 0.00012651909469940664, 0.0001286988073586668, 0.00013087852001792693, 0.0001330582326771871, 0.00013523794533644724, 0.0001374176579957074, 0.00013959737065496753, 0.0001417770833142277, 0.00014395679597348785, 0.000146136508632748, 0.00014831622129200816, 0.00015049593395126832, 0.00015267564661052848, 0.00015485535926978864, 0.0001570350719290488, 0.00015921478458830895, 0.00016139449724756908, 0.00016357420990682924, 0.0001657539225660894, 0.00016793363522534955, 0.0001701133478846097, 0.00017229306054386987, 0.00017447277320313003, 0.00017665248586239019, 0.00017883219852165034, 0.0001810119111809105, 0.00018319162384017066, 0.00018537133649943076, 0.00018755104915869092, 0.00018973076181795108, 0.00019191047447721123, 0.0001940901871364714, 0.00019626989979573155, 0.0001984496124549917, 0.00020062932511425186, 0.00020280903777351202, 0.00020498875043277218, 0.00020716846309203234, 0.00020934817575129247, 0.00021152788841055263, 0.00021370760106981278, 0.00021588731372907294, 0.0002180670263883331, 0.00022024673904759326, 0.00022242645170685341, 0.00022460616436611357, 0.00022678587702537373, 0.0002289655896846339, 0.00023114530234389404, 0.00023332501500315418, 0.00023550472766241433, 0.0002376844403216745, 0.00023986415298093465, 0.0002420438656401948, 0.000244223578299455, 0.00024640329095871515, 0.0002485830036179753, 0.00025076271627723546, 0.00025294242893649557, 0.0002551221415957557, 0.0002573018542550159, 0.00025948156691427604, 0.0002616612795735362, 0.00026384099223279635, 0.0002660207048920565, 0.0002682004175513166, 0.0002703801302105768, 0.00027255984286983693, 0.0002747395555290971, 0.00027691926818835725, 0.0002790989808476174, 0.00028127869350687756, 0.0002834584061661377, 0.0002856381188253979, 0.00028781783148465803, 0.0002899975441439182, 0.00029217725680317835, 0.0002943569694624385, 0.00029653668212169867, 0.0002987163947809588, 0.000300896107440219, 0.00030307582009947914, 0.0003052555327587393, 0.00030743524541799945, 0.0003096149580772596, 0.00031179467073651977, 0.00031397438339577987, 0.00031615409605504003, 0.0003183338087143002, 0.00032051352137356034, 0.0003226932340328205, 0.00032487294669208066, 0.0003270526593513408, 0.000329232372010601, 0.00033141208466986113, 0.0003335917973291213, 0.00033577150998838145, 0.0003379512226476416, 0.00034013093530690176, 0.0003423106479661619, 0.0003444903606254221, 0.00034667007328468224, 0.0003488497859439424, 0.00035102949860320255, 0.0003532092112624627, 0.00035538892392172287, 0.000357568636580983, 0.00035974834924024313, 0.00036192806189950323, 0.0003641077745587634, 0.00036628748721802355, 0.0003684671998772837, 0.00037064691253654386, 0.000372826625195804, 0.0003750063378550642, 0.00037718605051432434, 0.0003793657631735845, 0.00038154547583284465, 0.0003837251884921048, 0.00038590490115136497, 0.0003880846138106251, 0.0003902643264698853, 0.00039244403912914544, 0.0003946237517884056, 0.00039680346444766575, 0.0003989831771069259, 0.00040116288976618607, 0.0004033426024254462, 0.0004055223150847064, 0.0004077020277439665, 0.00040988174040322665, 0.0004120614530624868, 0.00041424116572174696, 0.0004164208783810071, 0.0004186005910402673, 0.00042078030369952743, 0.0004229600163587876, 0.00042513972901804775, 0.0004273194416773079, 0.00042949915433656806, 0.0004316788669958282, 0.0004338585796550884, 0.00043603829231434854, 0.0004382180049736087, 0.00044039771763286885, 0.000442577430292129, 0.00044475714295138917, 0.0004469368556106493, 0.0004491165682699095, 0.00045129628092916964, 0.0004534759935884298, 0.0004556557062476899, 0.00045783541890695006, 0.0004600151315662102, 0.0004621948442254704, 0.00046437455688473053, 0.0004665542695439907, 0.00046873398220325085, 0.000470913694862511, 0.00047309340752177116, 0.0004752731201810313, 0.0004774528328402915, 0.00047963254549955164, 0.0004818122581588118, 0.00048399197081807195, 0.0004861716834773321, 0.0004883513961365923, 0.0004905311087958524, 0.0004927108214551126, 0.0004948905341143727, 0.0004970702467736328, 0.0004992499594328929, 0.0005014296720921532, 0.0005036093847514133, 0.0005057890974106735, 0.0005079688100699336, 0.0005101485227291938, 0.000512328235388454, 0.0005145079480477141, 0.0005166876607069743, 0.0005188673733662344, 0.0005210470860254946, 0.0005232267986847547, 0.0005254065113440148, 0.0005275862240032749, 0.0005297659366625352, 0.0005319456493217953, 0.0005341253619810555, 0.0005363050746403156, 0.0005384847872995758, 0.0005406644999588359, 0.0005428442126180961, 0.0005450239252773562, 0.0005472036379366164, 0.0005493833505958765, 0.0005515630632551367, 0.0005537427759143968, 0.000555922488573657, 0.0005581022012329171, 0.0005602819138921774, 0.0005624616265514375, 0.0005646413392106977, 0.0005668210518699578, 0.0005690007645292179, 0.0005711804771884781, 0.0005733601898477382, 0.0005755399025069984, 0.0005777196151662585, 0.0005798993278255187, 0.0005820790404847788, 0.000584258753144039, 0.0005864384658032991, 0.0005886181784625594, 0.0005907978911218195, 0.0005929776037810797, 0.0005951573164403398, 0.0005973370290996, 0.0005995167417588601, 0.0006016964544181203, 0.0006038761670773804, 0.0006060558797366406, 0.0006082355923959007, 0.0006104153050551609, 0.000612595017714421, 0.0006147747303736812, 0.0006169544430329413, 0.0006191341556922015, 0.0006213138683514616, 0.0006234935810107218, 0.0006256732936699819, 0.0006278530063292421, 0.0006300327189885022, 0.0006322124316477624, 0.0006343921443070225, 0.0006365718569662827, 0.0006387515696255428, 0.000640931282284803, 0.0006431109949440631, 0.0006452907076033233, 0.0006474704202625834, 0.0006496501329218437, 0.0006518298455811038, 0.000654009558240364, 0.0006561892708996241, 0.0006583689835588843, 0.0006605486962181444, 0.0006627284088774046, 0.0006649081215366647, 0.0006670878341959249, 0.000669267546855185, 0.0006714472595144452, 0.0006736269721737053, 0.0006758066848329656, 0.0006779863974922257, 0.0006801661101514859, 0.000682345822810746, 0.0006845255354700062, 0.0006867052481292663, 0.0006888849607885265, 0.0006910646734477866, 0.0006932443861070468, 0.0006954240987663069, 0.0006976038114255671, 0.0006997835240848272, 0.0007019632367440874, 0.0007041429494033475, 0.0007063226620626078, 0.0007085023747218679, 0.000710682087381128, 0.0007128618000403881, 0.0007150415126996482, 0.0007172212253589084, 0.0007194009380181685, 0.0007215806506774287, 0.0007237603633366888, 0.000725940075995949, 0.0007281197886552091, 0.0007302995013144693, 0.0007324792139737294, 0.0007346589266329896, 0.0007368386392922497, 0.00073901835195151, 0.0007411980646107701, 0.0007433777772700303, 0.0007455574899292904, 0.0007477372025885506, 0.0007499169152478107, 0.0007520966279070709, 0.000754276340566331, 0.0007564560532255912, 0.0007586357658848513, 0.0007608154785441115, 0.0007629951912033716, 0.0007651749038626319, 0.000767354616521892, 0.0007695343291811522, 0.0007717140418404123, 0.0007738937544996725, 0.0007760734671589326, 0.0007782531798181928, 0.0007804328924774529, 0.0007826126051367131, 0.0007847923177959732, 0.0007869720304552334, 0.0007891517431144935, 0.0007913314557737537, 0.0007935111684330138, 0.0007956908810922741, 0.0007978705937515342, 0.0008000503064107944, 0.0008022300190700545, 0.0008044097317293147, 0.0008065894443885747, 0.0008087691570478349, 0.000810948869707095, 0.0008131285823663552, 0.0008153082950256153, 0.0008174880076848755, 0.0008196677203441356, 0.0008218474330033958, 0.0008240271456626559, 0.0008262068583219162, 0.0008283865709811763, 0.0008305662836404365, 0.0008327459962996966, 0.0008349257089589568, 0.0008371054216182169, 0.0008392851342774771, 0.0008414648469367372, 0.0008436445595959974, 0.0008458242722552575, 0.0008480039849145176, 0.0008501836975737778, 0.0008523634102330379, 0.0008545431228922982, 0.0008567228355515583, 0.0008589025482108185, 0.0008610822608700786, 0.0008632619735293388, 0.0008654416861885989, 0.0008676213988478591, 0.0008698011115071192, 0.0008719808241663794, 0.0008741605368256395, 0.0008763402494848997, 0.0008785199621441598, 0.00088069967480342, 0.0008828793874626801, 0.0008850591001219404, 0.0008872388127812005, 0.0008894185254404607, 0.0008915982380997208, 0.000893777950758981, 0.0008959576634182411, 0.0008981373760775013, 0.0009003170887367613, 0.0009024968013960215, 0.0009046765140552816, 0.0009068562267145418, 0.0009090359393738019, 0.0009112156520330621, 0.0009133953646923222, 0.0009155750773515825, 0.0009177547900108426, 0.0009199345026701028, 0.0009221142153293629, 0.0009242939279886231, 0.0009264736406478832, 0.0009286533533071434, 0.0009308330659664035, 0.0009330127786256637, 0.0009351924912849238, 0.000937372203944184, 0.0009395519166034441, 0.0009417316292627043, 0.0009439113419219645, 0.0009460910545812247, 0.0009482707672404848, 0.000950450479899745, 0.0009526301925590051, 0.0009548099052182653, 0.0009569896178775254, 0.0009591693305367856, 0.0009613490431960457, 0.0009635287558553059, 0.000965708468514566, 0.0009678881811738262, 0.0009700678938330863, 0.0009722476064923466, 0.0009744273191516067, 0.0009766070318108669, 0.000978786744470127, 0.0009809664571293873, 0.0009831461697886474, 0.0009853258824479075, 0.0009875055951071676, 0.0009896853077664277, 0.000991865020425688, 0.0009940447330849481, 0.0009962244457442082, 0.0009984041584034683, 0.0010005838710627287, 0.0010027635837219888, 0.0010049432963812489, 0.001007123009040509, 0.0010093027216997693, 0.0010114824343590294, 0.0010136621470182895, 0.0010158418596775498, 0.0010180215723368097, 0.00102020128499607, 0.0010223809976553301, 0.0010245607103145904, 0.0010267404229738503, 0.0010289201356331107, 0.0010310998482923708, 0.001033279560951631, 0.001035459273610891, 0.0010376389862701513, 0.0010398186989294114, 0.0010419984115886715, 0.0010441781242479316, 0.0010463578369071917, 0.001048537549566452, 0.0010507172622257121, 0.0010528969748849722, 0.0010550766875442323, 0.0010572564002034926, 0.0010594361128627528, 0.0010616158255220129, 0.001063795538181273, 0.0010659752508405333, 0.0010681549634997934, 0.0010703346761590535, 0.0010725143888183136, 0.001074694101477574, 0.001076873814136834, 0.0010790535267960941, 0.0010812332394553542, 0.0010834129521146145, 0.0010855926647738746, 0.0010877723774331347, 0.0010899520900923949, 0.0010921318027516552, 0.0010943115154109153, 0.0010964912280701754])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_c286dcd9c0c348ebaabde929fc90cd55.x = d3.scale.linear()
              .domain([8.814611099358297e-06, 0.0010964912280701754])
              .range([0, 400]);

    color_map_c286dcd9c0c348ebaabde929fc90cd55.legend = L.control({position: 'topright'});
    color_map_c286dcd9c0c348ebaabde929fc90cd55.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_c286dcd9c0c348ebaabde929fc90cd55.legend.addTo(map_7ca452a158c745baac62232780215dd9);

    color_map_c286dcd9c0c348ebaabde929fc90cd55.xAxis = d3.svg.axis()
        .scale(color_map_c286dcd9c0c348ebaabde929fc90cd55.x)
        .orient("top")
        .tickSize(1)
        .tickValues([8.814611099358297e-06, 0.00019009404726116113, 0.00037137348342296397, 0.0005526529195847668, 0.0007339323557465696, 0.0009152117919083725, 0.0010964912280701754]);

    color_map_c286dcd9c0c348ebaabde929fc90cd55.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_c286dcd9c0c348ebaabde929fc90cd55.g = color_map_c286dcd9c0c348ebaabde929fc90cd55.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_c286dcd9c0c348ebaabde929fc90cd55.g.selectAll("rect")
        .data(color_map_c286dcd9c0c348ebaabde929fc90cd55.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_c286dcd9c0c348ebaabde929fc90cd55.x(color_map_c286dcd9c0c348ebaabde929fc90cd55.color.domain()[i - 1]) : color_map_c286dcd9c0c348ebaabde929fc90cd55.x.range()[0],
            x1: i < color_map_c286dcd9c0c348ebaabde929fc90cd55.color.domain().length ? color_map_c286dcd9c0c348ebaabde929fc90cd55.x(color_map_c286dcd9c0c348ebaabde929fc90cd55.color.domain()[i]) : color_map_c286dcd9c0c348ebaabde929fc90cd55.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_c286dcd9c0c348ebaabde929fc90cd55.g.call(color_map_c286dcd9c0c348ebaabde929fc90cd55.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('44_40_FATIMA MARIA DOS SANTOS');

