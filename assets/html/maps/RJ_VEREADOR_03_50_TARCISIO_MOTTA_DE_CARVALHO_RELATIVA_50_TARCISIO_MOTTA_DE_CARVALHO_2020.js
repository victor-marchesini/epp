    
            var map_7a4ee4d488a74c28aebf09682d603cef = L.map(
                "map_7a4ee4d488a74c28aebf09682d603cef",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_1a0b60eebe764e588d10ad9736f357e2 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_7a4ee4d488a74c28aebf09682d603cef);
        
    
            var choropleth_4757c906ab17444690c47066591c8d4a = L.featureGroup(
                {}
            ).addTo(map_7a4ee4d488a74c28aebf09682d603cef);
        
    
        function geo_json_0dd8578a1a344b4abccbd3ff2b1acda0_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 434: case 441: case 412: case 325: case 417: case 473: case 472: case 403: case 468: case 470: case 478: case 435: case 353: case 345: case 363: case 392: case 343: case 396: case 423: case 427: case 432: case 411: case 397: case 395: case 371: case 359: case 398: case 401: case 386: case 334: case 326: case 329: case 331: case 357: case 459: case 430: case 429: case 399: case 471: case 461: case 477: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 440: case 456: case 467: case 466: case 464: case 404: case 364: case 354: case 330: case 433: case 445: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 443: case 428: case 383: case 361: case 348: case 336: case 358: case 360: case 350: case 457: case 391: case 387: case 458: case 450: case 389: case 405: case 414: case 406: case 374: case 476: case 365: case 890: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 438: case 449: case 437: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 424: case 447: case 453: case 462: case 455: case 442: case 436: case 446: case 444: case 426: case 419: case 415: case 408: case 339: case 485: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_0dd8578a1a344b4abccbd3ff2b1acda0_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_0dd8578a1a344b4abccbd3ff2b1acda0 = L.geoJson(null, {
                onEachFeature: geo_json_0dd8578a1a344b4abccbd3ff2b1acda0_onEachFeature,
            
                style: geo_json_0dd8578a1a344b4abccbd3ff2b1acda0_styler,
        });

        function geo_json_0dd8578a1a344b4abccbd3ff2b1acda0_add (data) {
            geo_json_0dd8578a1a344b4abccbd3ff2b1acda0
                .addData(data)
                .addTo(choropleth_4757c906ab17444690c47066591c8d4a);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_0dd8578a1a344b4abccbd3ff2b1acda0_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_9e3539495722469e8724b955405bd4c3 = {};

    
    color_map_9e3539495722469e8724b955405bd4c3.color = d3.scale.threshold()
              .domain([0.0, 0.00015270155710653624, 0.0003054031142130725, 0.0004581046713196087, 0.000610806228426145, 0.0007635077855326813, 0.0009162093426392174, 0.0010689108997457538, 0.00122161245685229, 0.0013743140139588262, 0.0015270155710653626, 0.0016797171281718987, 0.0018324186852784348, 0.0019851202423849714, 0.0021378217994915075, 0.0022905233565980437, 0.00244322491370458, 0.0025959264708111164, 0.0027486280279176525, 0.0029013295850241886, 0.003054031142130725, 0.003206732699237261, 0.0033594342563437974, 0.0035121358134503336, 0.0036648373705568697, 0.0038175389276634063, 0.003970240484769943, 0.004122942041876479, 0.004275643598983015, 0.00442834515608955, 0.004581046713196087, 0.0047337482703026235, 0.00488644982740916, 0.005039151384515697, 0.005191852941622233, 0.005344554498728769, 0.005497256055835305, 0.005649957612941841, 0.005802659170048377, 0.005955360727154913, 0.00610806228426145, 0.0062607638413679865, 0.006413465398474522, 0.006566166955581059, 0.006718868512687595, 0.006871570069794131, 0.007024271626900667, 0.007176973184007204, 0.007329674741113739, 0.0074823762982202755, 0.0076350778553268125, 0.007787779412433349, 0.007940480969539886, 0.00809318252664642, 0.008245884083752958, 0.008398585640859494, 0.00855128719796603, 0.008703988755072566, 0.0088566903121791, 0.009009391869285639, 0.009162093426392175, 0.00931479498349871, 0.009467496540605247, 0.009620198097711785, 0.00977289965481832, 0.009925601211924855, 0.010078302769031393, 0.010231004326137928, 0.010383705883244465, 0.010536407440351002, 0.010689108997457538, 0.010841810554564074, 0.01099451211167061, 0.011147213668777146, 0.011299915225883682, 0.011452616782990218, 0.011605318340096754, 0.01175801989720329, 0.011910721454309827, 0.012063423011416363, 0.0122161245685229, 0.012368826125629435, 0.012521527682735973, 0.012674229239842509, 0.012826930796949043, 0.012979632354055581, 0.013132333911162117, 0.013285035468268654, 0.01343773702537519, 0.013590438582481728, 0.013743140139588262, 0.013895841696694798, 0.014048543253801334, 0.01420124481090787, 0.014353946368014408, 0.014506647925120943, 0.014659349482227479, 0.014812051039334017, 0.014964752596440551, 0.015117454153547089, 0.015270155710653625, 0.015422857267760161, 0.015575558824866697, 0.01572826038197323, 0.01588096193907977, 0.016033663496186307, 0.01618636505329284, 0.01633906661039938, 0.016491768167505916, 0.01664446972461245, 0.016797171281718988, 0.016949872838825524, 0.01710257439593206, 0.017255275953038596, 0.017407977510145133, 0.01756067906725167, 0.0177133806243582, 0.01786608218146474, 0.018018783738571277, 0.018171485295677813, 0.01832418685278435, 0.018476888409890885, 0.01862958996699742, 0.018782291524103958, 0.018934993081210494, 0.01908769463831703, 0.01924039619542357, 0.019393097752530102, 0.01954579930963664, 0.019698500866743178, 0.01985120242384971, 0.020003903980956247, 0.020156605538062786, 0.020309307095169322, 0.020462008652275855, 0.020614710209382395, 0.02076741176648893, 0.020920113323595464, 0.021072814880702003, 0.02122551643780854, 0.021378217994915075, 0.02153091955202161, 0.021683621109128148, 0.021836322666234684, 0.02198902422334122, 0.022141725780447756, 0.022294427337554292, 0.022447128894660832, 0.022599830451767364, 0.0227525320088739, 0.022905233565980437, 0.023057935123086973, 0.02321063668019351, 0.023363338237300045, 0.02351603979440658, 0.023668741351513117, 0.023821442908619653, 0.023974144465726193, 0.024126846022832726, 0.024279547579939262, 0.0244322491370458, 0.024584950694152334, 0.02473765225125887, 0.02489035380836541, 0.025043055365471946, 0.02519575692257848, 0.025348458479685018, 0.025501160036791554, 0.025653861593898087, 0.025806563151004627, 0.025959264708111163, 0.0261119662652177, 0.026264667822324235, 0.02641736937943077, 0.026570070936537307, 0.026722772493643843, 0.02687547405075038, 0.027028175607856916, 0.027180877164963455, 0.027333578722069988, 0.027486280279176524, 0.02763898183628306, 0.027791683393389596, 0.027944384950496132, 0.02809708650760267, 0.028249788064709208, 0.02840248962181574, 0.028555191178922277, 0.028707892736028816, 0.02886059429313535, 0.029013295850241885, 0.029165997407348425, 0.029318698964454958, 0.029471400521561494, 0.029624102078668033, 0.02977680363577457, 0.029929505192881102, 0.03008220674998764, 0.030234908307094178, 0.03038760986420071, 0.03054031142130725, 0.030693012978413786, 0.030845714535520322, 0.03099841609262686, 0.031151117649733395, 0.03130381920683993, 0.03145652076394646, 0.031609222321053, 0.03176192387815954, 0.031914625435266075, 0.032067326992372615, 0.03222002854947915, 0.03237273010658568, 0.03252543166369222, 0.03267813322079876, 0.03283083477790529, 0.03298353633501183, 0.033136237892118364, 0.0332889394492249, 0.033441641006331436, 0.033594342563437976, 0.033747044120544516, 0.03389974567765105, 0.03405244723475758, 0.03420514879186412, 0.03435785034897065, 0.03451055190607719, 0.03466325346318373, 0.034815955020290265, 0.0349686565773968, 0.03512135813450334, 0.03527405969160987, 0.0354267612487164, 0.03557946280582295, 0.03573216436292948, 0.03588486592003602, 0.036037567477142554, 0.03619026903424909, 0.036342970591355626, 0.036495672148462166, 0.0366483737055687, 0.03680107526267524, 0.03695377681978177, 0.037106478376888304, 0.03725917993399484, 0.03741188149110138, 0.037564583048207915, 0.037717284605314455, 0.03786998616242099, 0.03802268771952753, 0.03817538927663406, 0.0383280908337406, 0.03848079239084714, 0.03863349394795367, 0.038786195505060204, 0.038938897062166744, 0.03909159861927328, 0.039244300176379816, 0.039397001733486356, 0.03954970329059289, 0.03970240484769942, 0.03985510640480596, 0.040007807961912493, 0.040160509519019026, 0.04031321107612557, 0.040465912633232105, 0.040618614190338645, 0.04077131574744518, 0.04092401730455171, 0.04107671886165825, 0.04122942041876479, 0.04138212197587132, 0.04153482353297786, 0.041687525090084394, 0.04184022664719093, 0.04199292820429747, 0.042145629761404006, 0.04229833131851054, 0.04245103287561708, 0.04260373443272361, 0.04275643598983015, 0.04290913754693668, 0.04306183910404322, 0.04321454066114976, 0.043367242218256295, 0.04351994377536283, 0.04367264533246937, 0.0438253468895759, 0.04397804844668244, 0.04413075000378898, 0.04428345156089551, 0.044436153118002045, 0.044588854675108584, 0.04474155623221512, 0.044894257789321663, 0.045046959346428196, 0.04519966090353473, 0.04535236246064127, 0.0455050640177478, 0.045657765574854334, 0.04581046713196087, 0.04596316868906741, 0.046115870246173946, 0.046268571803280485, 0.04642127336038702, 0.04657397491749355, 0.04672667647460009, 0.04687937803170663, 0.04703207958881316, 0.0471847811459197, 0.047337482703026235, 0.047490184260132774, 0.04764288581723931, 0.047795587374345846, 0.047948288931452386, 0.04810099048855892, 0.04825369204566545, 0.04840639360277199, 0.048559095159878524, 0.04871179671698506, 0.0488644982740916, 0.049017199831198136, 0.04916990138830467, 0.04932260294541121, 0.04947530450251774, 0.04962800605962429, 0.04978070761673082, 0.04993340917383735, 0.05008611073094389, 0.050238812288050425, 0.05039151384515696, 0.0505442154022635, 0.050696916959370036, 0.05084961851647657, 0.05100232007358311, 0.05115502163068964, 0.051307723187796174, 0.051460424744902714, 0.05161312630200925, 0.05176582785911579, 0.051918529416222325, 0.05207123097332886, 0.0522239325304354, 0.05237663408754193, 0.05252933564464847, 0.05268203720175501, 0.05283473875886154, 0.052987440315968075, 0.053140141873074614, 0.05329284343018115, 0.05344554498728769, 0.053598246544394226, 0.05375094810150076, 0.05390364965860729, 0.05405635121571383, 0.054209052772820364, 0.05436175432992691, 0.05451445588703344, 0.054667157444139976, 0.054819859001246515, 0.05497256055835305, 0.05512526211545958, 0.05527796367256612, 0.05543066522967266, 0.05558336678677919, 0.05573606834388573, 0.055888769900992265, 0.0560414714580988, 0.05619417301520534, 0.05634687457231188, 0.056499576129418416, 0.05665227768652495, 0.05680497924363148, 0.05695768080073802, 0.057110382357844554, 0.05726308391495109, 0.05741578547205763, 0.057568487029164166, 0.0577211885862707, 0.05787389014337724, 0.05802659170048377, 0.05817929325759031, 0.05833199481469685, 0.05848469637180338, 0.058637397928909915, 0.058790099486016455, 0.05894280104312299, 0.059095502600229534, 0.05924820415733607, 0.0594009057144426, 0.05955360727154914, 0.05970630882865567, 0.059859010385762204, 0.06001171194286875, 0.06016441349997528, 0.060317115057081816, 0.060469816614188356, 0.06062251817129489, 0.06077521972840142, 0.06092792128550796, 0.0610806228426145, 0.06123332439972104, 0.06138602595682757, 0.061538727513934105, 0.061691429071040645, 0.06184413062814718, 0.06199683218525372, 0.062149533742360256, 0.06230223529946679, 0.06245493685657332, 0.06260763841367986, 0.0627603399707864, 0.06291304152789293, 0.06306574308499947, 0.063218444642106, 0.06337114619921255, 0.06352384775631909, 0.06367654931342562, 0.06382925087053215, 0.06398195242763868, 0.06413465398474523, 0.06428735554185176, 0.0644400570989583, 0.06459275865606484, 0.06474546021317136, 0.0648981617702779, 0.06505086332738444, 0.06520356488449097, 0.06535626644159752, 0.06550896799870405, 0.06566166955581058, 0.06581437111291712, 0.06596707267002366, 0.06611977422713018, 0.06627247578423673, 0.06642517734134328, 0.0665778788984498, 0.06673058045555634, 0.06688328201266287, 0.06703598356976942, 0.06718868512687595, 0.06734138668398248, 0.06749408824108903, 0.06764678979819555, 0.0677994913553021, 0.06795219291240863, 0.06810489446951516, 0.06825759602662171, 0.06841029758372824, 0.06856299914083477, 0.0687157006979413, 0.06886840225504785, 0.06902110381215439, 0.06917380536926092, 0.06932650692636746, 0.06947920848347398, 0.06963191004058053, 0.06978461159768706, 0.0699373131547936, 0.07009001471190014, 0.07024271626900667, 0.07039541782611321, 0.07054811938321974, 0.07070082094032629, 0.0708535224974328, 0.07100622405453935, 0.0711589256116459, 0.07131162716875243, 0.07146432872585896, 0.0716170302829655, 0.07176973184007204, 0.07192243339717858, 0.07207513495428511, 0.07222783651139165, 0.07238053806849817, 0.07253323962560472, 0.07268594118271125, 0.07283864273981779, 0.07299134429692433, 0.07314404585403086, 0.0732967474111374, 0.07344944896824393, 0.07360215052535048, 0.07375485208245701, 0.07390755363956354, 0.07406025519667009, 0.07421295675377661, 0.07436565831088315, 0.07451835986798969, 0.07467106142509622, 0.07482376298220277, 0.0749764645393093, 0.07512916609641583, 0.07528186765352236, 0.07543456921062891, 0.07558727076773543, 0.07573997232484198, 0.07589267388194852, 0.07604537543905505, 0.07619807699616159])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_9e3539495722469e8724b955405bd4c3.x = d3.scale.linear()
              .domain([0.0, 0.07619807699616159])
              .range([0, 400]);

    color_map_9e3539495722469e8724b955405bd4c3.legend = L.control({position: 'topright'});
    color_map_9e3539495722469e8724b955405bd4c3.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_9e3539495722469e8724b955405bd4c3.legend.addTo(map_7a4ee4d488a74c28aebf09682d603cef);

    color_map_9e3539495722469e8724b955405bd4c3.xAxis = d3.svg.axis()
        .scale(color_map_9e3539495722469e8724b955405bd4c3.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.012699679499360265, 0.02539935899872053, 0.038099038498080794, 0.05079871799744106, 0.06349839749680132, 0.07619807699616159]);

    color_map_9e3539495722469e8724b955405bd4c3.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_9e3539495722469e8724b955405bd4c3.g = color_map_9e3539495722469e8724b955405bd4c3.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_9e3539495722469e8724b955405bd4c3.g.selectAll("rect")
        .data(color_map_9e3539495722469e8724b955405bd4c3.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_9e3539495722469e8724b955405bd4c3.x(color_map_9e3539495722469e8724b955405bd4c3.color.domain()[i - 1]) : color_map_9e3539495722469e8724b955405bd4c3.x.range()[0],
            x1: i < color_map_9e3539495722469e8724b955405bd4c3.color.domain().length ? color_map_9e3539495722469e8724b955405bd4c3.x(color_map_9e3539495722469e8724b955405bd4c3.color.domain()[i]) : color_map_9e3539495722469e8724b955405bd4c3.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_9e3539495722469e8724b955405bd4c3.g.call(color_map_9e3539495722469e8724b955405bd4c3.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('03_50_TARCISIO MOTTA DE CARVALHO');

