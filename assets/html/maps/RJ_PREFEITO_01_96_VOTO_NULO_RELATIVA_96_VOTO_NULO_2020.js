    
            var map_9ee37d75cedb4cb8a7034378e898a055 = L.map(
                "map_9ee37d75cedb4cb8a7034378e898a055",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_bf07fc6bd4174005bd3177f44205fef4 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_9ee37d75cedb4cb8a7034378e898a055);
        
    
            var choropleth_26c578b027324753ad64fc589aca9837 = L.featureGroup(
                {}
            ).addTo(map_9ee37d75cedb4cb8a7034378e898a055);
        
    
        function geo_json_062ca47ac1b8443490b26fde97086f87_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 439: case 441: case 428: case 412: case 418: case 410: case 325: case 440: case 424: case 417: case 403: case 478: case 435: case 452: case 446: case 396: case 423: case 427: case 432: case 419: case 415: case 408: case 411: case 386: case 339: case 330: case 367: case 475: case 459: case 463: case 454: case 433: case 445: case 430: case 461: case 402: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 434: case 448: case 438: case 447: case 453: case 466: case 455: case 470: case 474: case 442: case 437: case 436: case 444: case 426: case 469: case 366: case 477: case 485: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 443: case 336: case 391: case 365: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 462: case 456: case 467: case 473: case 472: case 468: case 464: case 471: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 340: case 333: case 370: case 378: case 511: case 450: case 480: case 389: case 384: case 510: case 414: case 406: case 374: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_062ca47ac1b8443490b26fde97086f87_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_062ca47ac1b8443490b26fde97086f87 = L.geoJson(null, {
                onEachFeature: geo_json_062ca47ac1b8443490b26fde97086f87_onEachFeature,
            
                style: geo_json_062ca47ac1b8443490b26fde97086f87_styler,
        });

        function geo_json_062ca47ac1b8443490b26fde97086f87_add (data) {
            geo_json_062ca47ac1b8443490b26fde97086f87
                .addData(data)
                .addTo(choropleth_26c578b027324753ad64fc589aca9837);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_062ca47ac1b8443490b26fde97086f87_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_1e24f612d04a49cd86878fa86ceadeff = {};

    
    color_map_1e24f612d04a49cd86878fa86ceadeff.color = d3.scale.threshold()
              .domain([0.0, 0.0003771864514626635, 0.000754372902925327, 0.0011315593543879904, 0.001508745805850654, 0.0018859322573133175, 0.0022631187087759808, 0.0026403051602386443, 0.003017491611701308, 0.0033946780631639714, 0.003771864514626635, 0.0041490509660892985, 0.0045262374175519616, 0.004903423869014625, 0.005280610320477289, 0.005657796771939953, 0.006034983223402616, 0.006412169674865279, 0.006789356126327943, 0.007166542577790607, 0.00754372902925327, 0.007920915480715933, 0.008298101932178597, 0.008675288383641261, 0.009052474835103923, 0.009429661286566587, 0.00980684773802925, 0.010184034189491915, 0.010561220640954577, 0.01093840709241724, 0.011315593543879905, 0.011692779995342567, 0.012069966446805231, 0.012447152898267894, 0.012824339349730558, 0.013201525801193222, 0.013578712252655886, 0.013955898704118548, 0.014333085155581213, 0.014710271607043876, 0.01508745805850654, 0.015464644509969202, 0.015841830961431866, 0.016219017412894526, 0.016596203864357194, 0.016973390315819858, 0.017350576767282522, 0.017727763218745182, 0.018104949670207846, 0.01848213612167051, 0.018859322573133174, 0.019236509024595835, 0.0196136954760585, 0.019990881927521166, 0.02036806837898383, 0.02074525483044649, 0.021122441281909154, 0.02149962773337182, 0.02187681418483448, 0.022254000636297143, 0.02263118708775981, 0.023008373539222474, 0.023385559990685135, 0.0237627464421478, 0.024139932893610463, 0.024517119345073127, 0.024894305796535787, 0.02527149224799845, 0.025648678699461115, 0.026025865150923783, 0.026403051602386443, 0.026780238053849107, 0.02715742450531177, 0.02753461095677443, 0.027911797408237096, 0.02828898385969976, 0.028666170311162427, 0.029043356762625087, 0.02942054321408775, 0.029797729665550415, 0.03017491611701308, 0.03055210256847574, 0.030929289019938404, 0.031306475471401064, 0.03168366192286373, 0.0320608483743264, 0.03243803482578905, 0.03281522127725172, 0.03319240772871439, 0.033569594180177055, 0.033946780631639716, 0.034323967083102376, 0.034701153534565043, 0.035078339986027704, 0.035455526437490364, 0.03583271288895303, 0.03620989934041569, 0.03658708579187836, 0.03696427224334102, 0.03734145869480368, 0.03771864514626635, 0.03809583159772901, 0.03847301804919167, 0.03885020450065434, 0.039227390952117, 0.039604577403579665, 0.03998176385504233, 0.04035895030650499, 0.04073613675796766, 0.04111332320943032, 0.04149050966089298, 0.04186769611235565, 0.04224488256381831, 0.04262206901528097, 0.04299925546674364, 0.0433764419182063, 0.04375362836966896, 0.044130814821131625, 0.044508001272594286, 0.04488518772405695, 0.04526237417551962, 0.04563956062698228, 0.04601674707844495, 0.04639393352990761, 0.04677111998137027, 0.04714830643283294, 0.0475254928842956, 0.047902679335758265, 0.048279865787220926, 0.048657052238683586, 0.049034238690146253, 0.049411425141608914, 0.049788611593071574, 0.05016579804453424, 0.0505429844959969, 0.05092017094745956, 0.05129735739892223, 0.0516745438503849, 0.052051730301847565, 0.052428916753310226, 0.052806103204772886, 0.053183289656235554, 0.053560476107698214, 0.053937662559160875, 0.05431484901062354, 0.0546920354620862, 0.05506922191354886, 0.05544640836501153, 0.05582359481647419, 0.05620078126793686, 0.05657796771939952, 0.05695515417086218, 0.057332340622324854, 0.057709527073787514, 0.058086713525250175, 0.05846389997671284, 0.0588410864281755, 0.05921827287963817, 0.05959545933110083, 0.05997264578256349, 0.06034983223402616, 0.06072701868548882, 0.06110420513695148, 0.06148139158841415, 0.06185857803987681, 0.06223576449133947, 0.06261295094280213, 0.0629901373942648, 0.06336732384572746, 0.06374451029719012, 0.0641216967486528, 0.06449888320011546, 0.0648760696515781, 0.06525325610304078, 0.06563044255450344, 0.06600762900596611, 0.06638481545742878, 0.06676200190889144, 0.06713918836035411, 0.06751637481181676, 0.06789356126327943, 0.06827074771474209, 0.06864793416620475, 0.06902512061766741, 0.06940230706913009, 0.06977949352059273, 0.07015667997205541, 0.07053386642351807, 0.07091105287498073, 0.07128823932644339, 0.07166542577790606, 0.07204261222936871, 0.07241979868083138, 0.07279698513229406, 0.07317417158375672, 0.07355135803521938, 0.07392854448668204, 0.07430573093814472, 0.07468291738960736, 0.07506010384107004, 0.0754372902925327, 0.07581447674399536, 0.07619166319545802, 0.07656884964692069, 0.07694603609838334, 0.07732322254984601, 0.07770040900130867, 0.07807759545277133, 0.078454781904234, 0.07883196835569667, 0.07920915480715933, 0.07958634125862199, 0.07996352771008466, 0.08034071416154732, 0.08071790061300999, 0.08109508706447265, 0.08147227351593532, 0.08184945996739797, 0.08222664641886064, 0.0826038328703233, 0.08298101932178596, 0.08335820577324862, 0.0837353922247113, 0.08411257867617394, 0.08448976512763662, 0.08486695157909929, 0.08524413803056194, 0.08562132448202461, 0.08599851093348727, 0.08637569738494993, 0.0867528838364126, 0.08713007028787527, 0.08750725673933792, 0.08788444319080059, 0.08826162964226325, 0.08863881609372593, 0.08901600254518857, 0.08939318899665125, 0.0897703754481139, 0.09014756189957657, 0.09052474835103924, 0.0909019348025019, 0.09127912125396456, 0.09165630770542722, 0.0920334941568899, 0.09241068060835254, 0.09278786705981522, 0.09316505351127788, 0.09354223996274054, 0.0939194264142032, 0.09429661286566587, 0.09467379931712852, 0.0950509857685912, 0.09542817222005386, 0.09580535867151653, 0.09618254512297918, 0.09655973157444185, 0.09693691802590453, 0.09731410447736717, 0.09769129092882985, 0.09806847738029251, 0.09844566383175517, 0.09882285028321783, 0.0992000367346805, 0.09957722318614315, 0.09995440963760582, 0.10033159608906848, 0.10070878254053114, 0.1010859689919938, 0.10146315544345648, 0.10184034189491913, 0.1022175283463818, 0.10259471479784446, 0.10297190124930714, 0.1033490877007698, 0.10372627415223246, 0.10410346060369513, 0.10448064705515778, 0.10485783350662045, 0.10523501995808311, 0.10561220640954577, 0.10598939286100843, 0.10636657931247111, 0.10674376576393375, 0.10712095221539643, 0.10749813866685909, 0.10787532511832175, 0.10825251156978441, 0.10862969802124708, 0.10900688447270974, 0.1093840709241724, 0.10976125737563508, 0.11013844382709773, 0.1105156302785604, 0.11089281673002306, 0.11127000318148574, 0.11164718963294838, 0.11202437608441106, 0.11240156253587372, 0.11277874898733638, 0.11315593543879904, 0.11353312189026171, 0.11391030834172436, 0.11428749479318703, 0.11466468124464971, 0.11504186769611235, 0.11541905414757503, 0.11579624059903769, 0.11617342705050035, 0.11655061350196301, 0.11692779995342568, 0.11730498640488833, 0.117682172856351, 0.11805935930781367, 0.11843654575927634, 0.11881373221073899, 0.11919091866220166, 0.11956810511366432, 0.11994529156512698, 0.12032247801658964, 0.12069966446805232, 0.12107685091951498, 0.12145403737097764, 0.12183122382244031, 0.12220841027390296, 0.12258559672536563, 0.1229627831768283, 0.12333996962829095, 0.12371715607975362, 0.12409434253121629, 0.12447152898267894, 0.12484871543414161, 0.12522590188560426, 0.12560308833706693, 0.1259802747885296, 0.12635746123999225, 0.12673464769145493, 0.1271118341429176, 0.12748902059438025, 0.12786620704584292, 0.1282433934973056, 0.12862057994876824, 0.12899776640023092, 0.12937495285169356, 0.1297521393031562, 0.1301293257546189, 0.13050651220608156, 0.13088369865754423, 0.13126088510900688, 0.13163807156046956, 0.13201525801193223, 0.13239244446339488, 0.13276963091485755, 0.13314681736632022, 0.13352400381778287, 0.13390119026924552, 0.13427837672070822, 0.13465556317217087, 0.1350327496236335, 0.1354099360750962, 0.13578712252655886, 0.1361643089780215, 0.13654149542948418, 0.13691868188094683, 0.1372958683324095, 0.13767305478387218, 0.13805024123533483, 0.13842742768679747, 0.13880461413826017, 0.13918180058972282, 0.13955898704118547, 0.13993617349264817, 0.14031335994411082, 0.14069054639557346, 0.14106773284703614, 0.1414449192984988, 0.14182210574996146, 0.14219929220142413, 0.14257647865288678, 0.14295366510434945, 0.14333085155581213, 0.14370803800727477, 0.14408522445873742, 0.14446241091020012, 0.14483959736166277, 0.14521678381312544, 0.14559397026458812, 0.14597115671605077, 0.14634834316751344, 0.14672552961897609, 0.14710271607043876, 0.14747990252190143, 0.14785708897336408, 0.14823427542482673, 0.14861146187628943, 0.14898864832775208, 0.14936583477921472, 0.1497430212306774, 0.15012020768214007, 0.15049739413360272, 0.1508745805850654, 0.15125176703652807, 0.15162895348799071, 0.1520061399394534, 0.15238332639091604, 0.1527605128423787, 0.15313769929384138, 0.15351488574530403, 0.15389207219676668, 0.15426925864822938, 0.15464644509969203, 0.15502363155115467, 0.15540081800261735, 0.15577800445408002, 0.15615519090554267, 0.15653237735700534, 0.156909563808468, 0.15728675025993066, 0.15766393671139334, 0.15804112316285598, 0.15841830961431866, 0.15879549606578133, 0.15917268251724398, 0.15954986896870663, 0.15992705542016933, 0.16030424187163198, 0.16068142832309465, 0.1610586147745573, 0.16143580122601997, 0.16181298767748264, 0.1621901741289453, 0.16256736058040794, 0.16294454703187064, 0.1633217334833333, 0.16369891993479593, 0.16407610638625864, 0.16445329283772128, 0.16483047928918393, 0.1652076657406466, 0.16558485219210928, 0.16596203864357192, 0.1663392250950346, 0.16671641154649725, 0.16709359799795992, 0.1674707844494226, 0.16784797090088524, 0.1682251573523479, 0.1686023438038106, 0.16897953025527324, 0.16935671670673588, 0.16973390315819858, 0.17011108960966123, 0.17048827606112388, 0.17086546251258655, 0.17124264896404923, 0.17161983541551187, 0.17199702186697455, 0.1723742083184372, 0.17275139476989987, 0.17312858122136254, 0.1735057676728252, 0.17388295412428784, 0.17426014057575054, 0.17463732702721319, 0.17501451347867583, 0.17539169993013853, 0.17576888638160118, 0.17614607283306385, 0.1765232592845265, 0.17690044573598918, 0.17727763218745185, 0.1776548186389145, 0.17803200509037714, 0.17840919154183985, 0.1787863779933025, 0.17916356444476514, 0.1795407508962278, 0.1799179373476905, 0.18029512379915313, 0.1806723102506158, 0.18104949670207848, 0.18142668315354113, 0.1818038696050038, 0.18218105605646645, 0.18255824250792912, 0.1829354289593918, 0.18331261541085445, 0.1836898018623171, 0.1840669883137798, 0.18444417476524244, 0.1848213612167051, 0.18519854766816776, 0.18557573411963044, 0.18595292057109308, 0.18633010702255576, 0.1867072934740184, 0.18708447992548108, 0.18746166637694375, 0.1878388528284064, 0.18821603927986907])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_1e24f612d04a49cd86878fa86ceadeff.x = d3.scale.linear()
              .domain([0.0, 0.18821603927986907])
              .range([0, 400]);

    color_map_1e24f612d04a49cd86878fa86ceadeff.legend = L.control({position: 'topright'});
    color_map_1e24f612d04a49cd86878fa86ceadeff.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_1e24f612d04a49cd86878fa86ceadeff.legend.addTo(map_9ee37d75cedb4cb8a7034378e898a055);

    color_map_1e24f612d04a49cd86878fa86ceadeff.xAxis = d3.svg.axis()
        .scale(color_map_1e24f612d04a49cd86878fa86ceadeff.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.03136933987997818, 0.06273867975995635, 0.09410801963993454, 0.1254773595199127, 0.15684669939989088, 0.18821603927986907]);

    color_map_1e24f612d04a49cd86878fa86ceadeff.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_1e24f612d04a49cd86878fa86ceadeff.g = color_map_1e24f612d04a49cd86878fa86ceadeff.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_1e24f612d04a49cd86878fa86ceadeff.g.selectAll("rect")
        .data(color_map_1e24f612d04a49cd86878fa86ceadeff.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_1e24f612d04a49cd86878fa86ceadeff.x(color_map_1e24f612d04a49cd86878fa86ceadeff.color.domain()[i - 1]) : color_map_1e24f612d04a49cd86878fa86ceadeff.x.range()[0],
            x1: i < color_map_1e24f612d04a49cd86878fa86ceadeff.color.domain().length ? color_map_1e24f612d04a49cd86878fa86ceadeff.x(color_map_1e24f612d04a49cd86878fa86ceadeff.color.domain()[i]) : color_map_1e24f612d04a49cd86878fa86ceadeff.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_1e24f612d04a49cd86878fa86ceadeff.g.call(color_map_1e24f612d04a49cd86878fa86ceadeff.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');

