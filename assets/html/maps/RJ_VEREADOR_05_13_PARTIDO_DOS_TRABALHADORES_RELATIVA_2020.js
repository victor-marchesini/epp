    
            var map_9203b05dc71c4ae290d4de56127d1ec1 = L.map(
                "map_9203b05dc71c4ae290d4de56127d1ec1",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_71d102e59e234de1a6998f2e42411e50 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_9203b05dc71c4ae290d4de56127d1ec1);
        
    
            var choropleth_fbb7c8ab5d684852bb27e5415cf1ae17 = L.featureGroup(
                {}
            ).addTo(map_9203b05dc71c4ae290d4de56127d1ec1);
        
    
        function geo_json_7e70af2bf18148a8ad3f3389dae8c6f1_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 422: case 428: case 418: case 410: case 478: case 474: case 435: case 416: case 427: case 354: case 457: case 485: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 482: case 439: case 434: case 441: case 412: case 448: case 424: case 449: case 447: case 453: case 456: case 467: case 466: case 455: case 335: case 470: case 442: case 436: case 446: case 444: case 345: case 381: case 369: case 363: case 343: case 383: case 426: case 340: case 333: case 396: case 382: case 375: case 423: case 432: case 404: case 395: case 348: case 334: case 429: case 461: case 465: case 480: case 389: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 443: case 336: case 357: case 366: case 391: case 365: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 393: case 400: case 475: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 380: case 353: case 359: case 362: case 386: case 399: case 471: case 477: case 450: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_7e70af2bf18148a8ad3f3389dae8c6f1_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_7e70af2bf18148a8ad3f3389dae8c6f1 = L.geoJson(null, {
                onEachFeature: geo_json_7e70af2bf18148a8ad3f3389dae8c6f1_onEachFeature,
            
                style: geo_json_7e70af2bf18148a8ad3f3389dae8c6f1_styler,
        });

        function geo_json_7e70af2bf18148a8ad3f3389dae8c6f1_add (data) {
            geo_json_7e70af2bf18148a8ad3f3389dae8c6f1
                .addData(data)
                .addTo(choropleth_fbb7c8ab5d684852bb27e5415cf1ae17);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_7e70af2bf18148a8ad3f3389dae8c6f1_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_25bd6f0a22cd4037a45d5aa5fde698bc = {};

    
    color_map_25bd6f0a22cd4037a45d5aa5fde698bc.color = d3.scale.threshold()
              .domain([0.0, 2.853749470085008e-05, 5.707498940170016e-05, 8.561248410255024e-05, 0.00011414997880340032, 0.0001426874735042504, 0.00017122496820510047, 0.00019976246290595055, 0.00022829995760680064, 0.0002568374523076507, 0.0002853749470085008, 0.00031391244170935086, 0.00034244993641020094, 0.000370987431111051, 0.0003995249258119011, 0.0004280624205127512, 0.00045659991521360127, 0.00048513740991445135, 0.0005136749046153014, 0.0005422123993161516, 0.0005707498940170015, 0.0005992873887178516, 0.0006278248834187017, 0.0006563623781195519, 0.0006848998728204019, 0.000713437367521252, 0.000741974862222102, 0.0007705123569229522, 0.0007990498516238022, 0.0008275873463246523, 0.0008561248410255024, 0.0008846623357263526, 0.0009131998304272025, 0.0009417373251280525, 0.0009702748198289027, 0.000998812314529753, 0.0010273498092306028, 0.0010558873039314528, 0.0010844247986323031, 0.0011129622933331532, 0.001141499788034003, 0.0011700372827348532, 0.0011985747774357033, 0.0012271122721365536, 0.0012556497668374034, 0.0012841872615382535, 0.0013127247562391038, 0.001341262250939954, 0.0013697997456408038, 0.0013983372403416538, 0.001426874735042504, 0.001455412229743354, 0.001483949724444204, 0.0015124872191450542, 0.0015410247138459045, 0.0015695622085467543, 0.0015980997032476044, 0.0016266371979484545, 0.0016551746926493046, 0.0016837121873501547, 0.0017122496820510048, 0.0017407871767518548, 0.0017693246714527051, 0.001797862166153555, 0.001826399660854405, 0.0018549371555552552, 0.001883474650256105, 0.0019120121449569553, 0.0019405496396578054, 0.0019690871343586553, 0.001997624629059506, 0.002026162123760356, 0.0020546996184612055, 0.0020832371131620556, 0.0021117746078629057, 0.0021403121025637558, 0.0021688495972646063, 0.0021973870919654564, 0.0022259245866663065, 0.002254462081367156, 0.002282999576068006, 0.0023115370707688563, 0.0023400745654697064, 0.0023686120601705564, 0.0023971495548714065, 0.002425687049572257, 0.002454224544273107, 0.0024827620389739568, 0.002511299533674807, 0.002539837028375657, 0.002568374523076507, 0.002596912017777357, 0.0026254495124782076, 0.0026539870071790577, 0.002682524501879908, 0.0027110619965807574, 0.0027395994912816075, 0.0027681369859824576, 0.0027966744806833077, 0.0028252119753841578, 0.002853749470085008, 0.0028822869647858584, 0.002910824459486708, 0.002939361954187558, 0.002967899448888408, 0.0029964369435892583, 0.0030249744382901084, 0.0030535119329909584, 0.003082049427691809, 0.003110586922392659, 0.0031391244170935087, 0.0031676619117943588, 0.003196199406495209, 0.003224736901196059, 0.003253274395896909, 0.003281811890597759, 0.003310349385298609, 0.0033388868799994593, 0.0033674243747003093, 0.0033959618694011594, 0.0034244993641020095, 0.0034530368588028596, 0.0034815743535037097, 0.0035101118482045598, 0.0035386493429054103, 0.00356718683760626, 0.00359572433230711, 0.00362426182700796, 0.00365279932170881, 0.0036813368164096603, 0.0037098743111105103, 0.0037384118058113604, 0.00376694930051221, 0.0037954867952130606, 0.0038240242899139107, 0.0038525617846147608, 0.003881099279315611, 0.0039096367740164605, 0.003938174268717311, 0.003966711763418161, 0.003995249258119012, 0.004023786752819861, 0.004052324247520712, 0.004080861742221561, 0.004109399236922411, 0.004137936731623262, 0.004166474226324111, 0.004195011721024962, 0.004223549215725811, 0.004252086710426662, 0.0042806242051275116, 0.004309161699828362, 0.004337699194529213, 0.004366236689230062, 0.004394774183930913, 0.004423311678631762, 0.004451849173332613, 0.004480386668033462, 0.004508924162734312, 0.004537461657435162, 0.004565999152136012, 0.004594536646836863, 0.0046230741415377126, 0.0046516116362385635, 0.004680149130939413, 0.004708686625640264, 0.004737224120341113, 0.004765761615041963, 0.004794299109742813, 0.004822836604443663, 0.004851374099144514, 0.004879911593845363, 0.004908449088546214, 0.0049369865832470635, 0.0049655240779479136, 0.004994061572648764, 0.005022599067349614, 0.005051136562050465, 0.005079674056751314, 0.005108211551452165, 0.005136749046153014, 0.005165286540853864, 0.005193824035554714, 0.005222361530255564, 0.005250899024956415, 0.0052794365196572645, 0.005307974014358115, 0.005336511509058965, 0.005365049003759816, 0.005393586498460665, 0.005422123993161515, 0.005450661487862365, 0.005479198982563215, 0.005507736477264066, 0.005536273971964915, 0.005564811466665766, 0.005593348961366615, 0.0056218864560674655, 0.0056504239507683155, 0.005678961445469166, 0.005707498940170016, 0.005736036434870866, 0.005764573929571717, 0.005793111424272566, 0.005821648918973416, 0.005850186413674266, 0.005878723908375116, 0.005907261403075966, 0.005935798897776816, 0.005964336392477667, 0.0059928738871785165, 0.006021411381879367, 0.006049948876580217, 0.006078486371281067, 0.006107023865981917, 0.006135561360682767, 0.006164098855383618, 0.006192636350084467, 0.006221173844785318, 0.006249711339486167, 0.006278248834187017, 0.0063067863288878675, 0.0063353238235887175, 0.006363861318289568, 0.006392398812990418, 0.006420936307691269, 0.006449473802392118, 0.006478011297092968, 0.006506548791793818, 0.006535086286494668, 0.006563623781195518, 0.006592161275896368, 0.006620698770597218, 0.0066492362652980684, 0.0066777737599989185, 0.006706311254699769, 0.006734848749400619, 0.006763386244101469, 0.006791923738802319, 0.006820461233503169, 0.006848998728204019, 0.006877536222904869, 0.006906073717605719, 0.006934611212306569, 0.006963148707007419, 0.0069916862017082694, 0.0070202236964091195, 0.00704876119110997, 0.0070772986858108206, 0.00710583618051167, 0.00713437367521252, 0.00716291116991337, 0.00719144866461422, 0.00721998615931507, 0.00724852365401592, 0.00727706114871677, 0.00730559864341762, 0.0073341361381184704, 0.0073626736328193205, 0.007391211127520171, 0.007419748622221021, 0.007448286116921871, 0.007476823611622721, 0.007505361106323571, 0.00753389860102442, 0.007562436095725271, 0.007590973590426121, 0.007619511085126971, 0.007648048579827821, 0.007676586074528671, 0.0077051235692295215, 0.007733661063930371, 0.007762198558631222, 0.007790736053332072, 0.007819273548032921, 0.007847811042733773, 0.007876348537434621, 0.007904886032135473, 0.007933423526836321, 0.007961961021537171, 0.007990498516238023, 0.008019036010938872, 0.008047573505639722, 0.008076111000340573, 0.008104648495041424, 0.008133185989742272, 0.008161723484443122, 0.008190260979143974, 0.008218798473844822, 0.008247335968545672, 0.008275873463246524, 0.008304410957947374, 0.008332948452648222, 0.008361485947349073, 0.008390023442049924, 0.008418560936750773, 0.008447098431451623, 0.008475635926152475, 0.008504173420853325, 0.008532710915554173, 0.008561248410255023, 0.008589785904955875, 0.008618323399656723, 0.008646860894357573, 0.008675398389058425, 0.008703935883759275, 0.008732473378460124, 0.008761010873160974, 0.008789548367861826, 0.008818085862562674, 0.008846623357263524, 0.008875160851964374, 0.008903698346665226, 0.008932235841366074, 0.008960773336066924, 0.008989310830767776, 0.009017848325468624, 0.009046385820169475, 0.009074923314870325, 0.009103460809571176, 0.009131998304272025, 0.009160535798972875, 0.009189073293673727, 0.009217610788374577, 0.009246148283075425, 0.009274685777776275, 0.009303223272477127, 0.009331760767177975, 0.009360298261878825, 0.009388835756579677, 0.009417373251280527, 0.009445910745981376, 0.009474448240682226, 0.009502985735383078, 0.009531523230083926, 0.009560060724784776, 0.009588598219485626, 0.009617135714186478, 0.009645673208887326, 0.009674210703588176, 0.009702748198289028, 0.009731285692989877, 0.009759823187690727, 0.009788360682391577, 0.009816898177092429, 0.009845435671793277, 0.009873973166494127, 0.009902510661194979, 0.009931048155895827, 0.009959585650596677, 0.009988123145297527, 0.010016660639998379, 0.010045198134699227, 0.010073735629400078, 0.01010227312410093, 0.010130810618801778, 0.010159348113502628, 0.010187885608203478, 0.01021642310290433, 0.010244960597605178, 0.010273498092306028, 0.01030203558700688, 0.010330573081707728, 0.010359110576408578, 0.010387648071109428, 0.01041618556581028, 0.010444723060511129, 0.010473260555211979, 0.01050179804991283, 0.010530335544613679, 0.010558873039314529, 0.010587410534015379, 0.01061594802871623, 0.01064448552341708, 0.01067302301811793, 0.01070156051281878, 0.010730098007519631, 0.01075863550222048, 0.01078717299692133, 0.010815710491622181, 0.01084424798632303, 0.01087278548102388, 0.01090132297572473, 0.010929860470425582, 0.01095839796512643, 0.01098693545982728, 0.011015472954528132, 0.01104401044922898, 0.01107254794392983, 0.01110108543863068, 0.011129622933331532, 0.01115816042803238, 0.01118669792273323, 0.011215235417434083, 0.011243772912134931, 0.011272310406835781, 0.011300847901536631, 0.011329385396237483, 0.011357922890938331, 0.011386460385639181, 0.011414997880340031, 0.011443535375040882, 0.011472072869741732, 0.011500610364442582, 0.011529147859143433, 0.011557685353844282, 0.011586222848545132, 0.011614760343245982, 0.011643297837946832, 0.011671835332647682, 0.011700372827348532, 0.011728910322049384, 0.011757447816750232, 0.011785985311451082, 0.011814522806151933, 0.011843060300852783, 0.011871597795553633, 0.011900135290254483, 0.011928672784955335, 0.011957210279656183, 0.011985747774357033, 0.012014285269057883, 0.012042822763758733, 0.012071360258459583, 0.012099897753160433, 0.012128435247861285, 0.012156972742562134, 0.012185510237262984, 0.012214047731963834, 0.012242585226664684, 0.012271122721365534, 0.012299660216066384, 0.012328197710767236, 0.012356735205468084, 0.012385272700168934, 0.012413810194869784, 0.012442347689570636, 0.012470885184271484, 0.012499422678972335, 0.012527960173673185, 0.012556497668374035, 0.012585035163074885, 0.012613572657775735, 0.012642110152476587, 0.012670647647177435, 0.012699185141878285, 0.012727722636579135, 0.012756260131279985, 0.012784797625980835, 0.012813335120681685, 0.012841872615382537, 0.012870410110083386, 0.012898947604784236, 0.012927485099485086, 0.012956022594185936, 0.012984560088886786, 0.013013097583587636, 0.013041635078288488, 0.013070172572989336, 0.013098710067690186, 0.013127247562391036, 0.013155785057091886, 0.013184322551792737, 0.013212860046493587, 0.013241397541194437, 0.013269935035895287, 0.013298472530596137, 0.013327010025296987, 0.013355547519997837, 0.013384085014698687, 0.013412622509399537, 0.013441160004100387, 0.013469697498801237, 0.013498234993502087, 0.013526772488202938, 0.013555309982903788, 0.013583847477604638, 0.013612384972305488, 0.013640922467006338, 0.013669459961707188, 0.013697997456408038, 0.013726534951108888, 0.013755072445809738, 0.013783609940510588, 0.013812147435211438, 0.013840684929912288, 0.013869222424613139, 0.013897759919313989, 0.013926297414014839, 0.01395483490871569, 0.013983372403416539, 0.014011909898117389, 0.014040447392818239, 0.014068984887519089, 0.01409752238221994, 0.01412605987692079, 0.014154597371621641, 0.01418313486632249, 0.01421167236102334, 0.01424020985572419])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_25bd6f0a22cd4037a45d5aa5fde698bc.x = d3.scale.linear()
              .domain([0.0, 0.01424020985572419])
              .range([0, 400]);

    color_map_25bd6f0a22cd4037a45d5aa5fde698bc.legend = L.control({position: 'topright'});
    color_map_25bd6f0a22cd4037a45d5aa5fde698bc.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_25bd6f0a22cd4037a45d5aa5fde698bc.legend.addTo(map_9203b05dc71c4ae290d4de56127d1ec1);

    color_map_25bd6f0a22cd4037a45d5aa5fde698bc.xAxis = d3.svg.axis()
        .scale(color_map_25bd6f0a22cd4037a45d5aa5fde698bc.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.002373368309287365, 0.00474673661857473, 0.007120104927862095, 0.00949347323714946, 0.011866841546436826, 0.01424020985572419]);

    color_map_25bd6f0a22cd4037a45d5aa5fde698bc.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_25bd6f0a22cd4037a45d5aa5fde698bc.g = color_map_25bd6f0a22cd4037a45d5aa5fde698bc.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_25bd6f0a22cd4037a45d5aa5fde698bc.g.selectAll("rect")
        .data(color_map_25bd6f0a22cd4037a45d5aa5fde698bc.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_25bd6f0a22cd4037a45d5aa5fde698bc.x(color_map_25bd6f0a22cd4037a45d5aa5fde698bc.color.domain()[i - 1]) : color_map_25bd6f0a22cd4037a45d5aa5fde698bc.x.range()[0],
            x1: i < color_map_25bd6f0a22cd4037a45d5aa5fde698bc.color.domain().length ? color_map_25bd6f0a22cd4037a45d5aa5fde698bc.x(color_map_25bd6f0a22cd4037a45d5aa5fde698bc.color.domain()[i]) : color_map_25bd6f0a22cd4037a45d5aa5fde698bc.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_25bd6f0a22cd4037a45d5aa5fde698bc.g.call(color_map_25bd6f0a22cd4037a45d5aa5fde698bc.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('05_13_Partido dos Trabalhadores');

