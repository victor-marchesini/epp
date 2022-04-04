    
            var map_ff8e4d513298443bb39eef5321a1d5b1 = L.map(
                "map_ff8e4d513298443bb39eef5321a1d5b1",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_f8960991171448a9928d491c0f79d3a1 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_ff8e4d513298443bb39eef5321a1d5b1);
        
    
            var choropleth_cde2079a9742423fb38e7a0161be55c0 = L.featureGroup(
                {}
            ).addTo(map_ff8e4d513298443bb39eef5321a1d5b1);
        
    
        function geo_json_57d50c7dd4ed48e680cbe5017c8301aa_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 440: case 456: case 464: case 437: case 353: case 381: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 434: case 428: case 453: case 380: case 393: case 338: case 340: case 400: case 423: case 431: case 404: case 395: case 354: case 349: case 342: case 336: case 329: case 331: case 358: case 328: case 367: case 460: case 475: case 357: case 481: case 483: case 479: case 366: case 391: case 465: case 458: case 480: case 405: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 422: case 377: case 441: case 412: case 325: case 448: case 449: case 447: case 466: case 455: case 470: case 442: case 452: case 436: case 446: case 444: case 345: case 392: case 383: case 427: case 432: case 419: case 415: case 408: case 411: case 361: case 401: case 394: case 326: case 457: case 459: case 433: case 445: case 409: case 469: case 461: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 443: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 438: case 462: case 468: case 426: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 348: case 485: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_57d50c7dd4ed48e680cbe5017c8301aa_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_57d50c7dd4ed48e680cbe5017c8301aa = L.geoJson(null, {
                onEachFeature: geo_json_57d50c7dd4ed48e680cbe5017c8301aa_onEachFeature,
            
                style: geo_json_57d50c7dd4ed48e680cbe5017c8301aa_styler,
        });

        function geo_json_57d50c7dd4ed48e680cbe5017c8301aa_add (data) {
            geo_json_57d50c7dd4ed48e680cbe5017c8301aa
                .addData(data)
                .addTo(choropleth_cde2079a9742423fb38e7a0161be55c0);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_57d50c7dd4ed48e680cbe5017c8301aa_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_82b614508746496885824bee44b16a60 = {};

    
    color_map_82b614508746496885824bee44b16a60.color = d3.scale.threshold()
              .domain([3.0976055509091474e-05, 3.36973237122574e-05, 3.641859191542333e-05, 3.913986011858925e-05, 4.1861128321755184e-05, 4.458239652492111e-05, 4.730366472808703e-05, 5.002493293125296e-05, 5.2746201134418887e-05, 5.546746933758482e-05, 5.818873754075074e-05, 6.0910005743916666e-05, 6.363127394708259e-05, 6.635254215024851e-05, 6.907381035341445e-05, 7.179507855658038e-05, 7.45163467597463e-05, 7.723761496291224e-05, 7.995888316607815e-05, 8.268015136924409e-05, 8.540141957241001e-05, 8.812268777557593e-05, 9.084395597874186e-05, 9.35652241819078e-05, 9.62864923850737e-05, 9.900776058823964e-05, 0.00010172902879140557, 0.00010445029699457149, 0.00010717156519773743, 0.00010989283340090334, 0.00011261410160406928, 0.0001153353698072352, 0.00011805663801040113, 0.00012077790621356706, 0.000123499174416733, 0.00012622044261989892, 0.00012894171082306484, 0.00013166297902623075, 0.00013438424722939668, 0.00013710551543256262, 0.00013982678363572853, 0.00014254805183889447, 0.0001452693200420604, 0.00014799058824522632, 0.00015071185644839223, 0.0001534331246515582, 0.0001561543928547241, 0.00015887566105789001, 0.00016159692926105592, 0.0001643181974642219, 0.0001670394656673878, 0.0001697607338705537, 0.00017248200207371967, 0.00017520327027688559, 0.0001779245384800515, 0.00018064580668321746, 0.00018336707488638337, 0.00018608834308954934, 0.0001888096112927152, 0.00019153087949588116, 0.00019425214769904707, 0.00019697341590221298, 0.00019969468410537894, 0.00020241595230854485, 0.00020513722051171076, 0.00020785848871487673, 0.00021057975691804264, 0.00021330102512120855, 0.00021602229332437451, 0.00021874356152754042, 0.00022146482973070634, 0.00022418609793387225, 0.0002269073661370382, 0.00022962863434020412, 0.00023234990254337003, 0.000235071170746536, 0.0002377924389497019, 0.00024051370715286782, 0.00024323497535603378, 0.0002459562435591997, 0.0002486775117623656, 0.00025139877996553157, 0.0002541200481686975, 0.0002568413163718634, 0.0002595625845750293, 0.0002622838527781952, 0.0002650051209813612, 0.0002677263891845271, 0.000270447657387693, 0.00027316892559085896, 0.00027589019379402487, 0.0002786114619971908, 0.00028133273020035675, 0.0002840539984035226, 0.00028677526660668857, 0.0002894965348098545, 0.0002922178030130204, 0.00029493907121618635, 0.00029766033941935226, 0.0003003816076225182, 0.00030310287582568414, 0.00030582414402885005, 0.00030854541223201596, 0.0003112666804351819, 0.00031398794863834783, 0.00031670921684151375, 0.0003194304850446797, 0.0003221517532478456, 0.00032487302145101153, 0.0003275942896541775, 0.0003303155578573434, 0.0003330368260605093, 0.0003357580942636753, 0.0003384793624668412, 0.00034120063067000716, 0.00034392189887317307, 0.0003466431670763389, 0.00034936443527950483, 0.0003520857034826708, 0.0003548069716858367, 0.0003575282398890027, 0.0003602495080921686, 0.0003629707762953345, 0.00036569204449850046, 0.00036841331270166637, 0.0003711345809048323, 0.00037385584910799825, 0.00037657711731116416, 0.00037929838551433007, 0.00038201965371749603, 0.00038474092192066194, 0.00038746219012382785, 0.0003901834583269938, 0.00039290472653015973, 0.00039562599473332564, 0.0003983472629364916, 0.0004010685311396575, 0.0004037897993428234, 0.0004065110675459894, 0.0004092323357491553, 0.0004119536039523212, 0.0004146748721554871, 0.00041739614035865303, 0.00042011740856181894, 0.0004228386767649849, 0.0004255599449681508, 0.00042828121317131673, 0.0004310024813744827, 0.0004337237495776486, 0.0004364450177808145, 0.0004391662859839805, 0.0004418875541871464, 0.0004446088223903123, 0.00044733009059347826, 0.0004500513587966442, 0.0004527726269998101, 0.00045549389520297605, 0.00045821516340614196, 0.00046093643160930787, 0.00046365769981247384, 0.00046637896801563975, 0.00046910023621880566, 0.0004718215044219716, 0.00047454277262513753, 0.00047726404082830344, 0.0004799853090314694, 0.0004827065772346353, 0.0004854278454378012, 0.00048814911364096714, 0.000490870381844133, 0.000493591650047299, 0.000496312918250465, 0.0004990341864536308, 0.0005017554546567968, 0.0005044767228599628, 0.0005071979910631286, 0.0005099192592662946, 0.0005126405274694605, 0.0005153617956726264, 0.0005180830638757924, 0.0005208043320789583, 0.0005235256002821243, 0.0005262468684852902, 0.0005289681366884561, 0.0005316894048916221, 0.0005344106730947879, 0.0005371319412979538, 0.0005398532095011199, 0.0005425744777042857, 0.0005452957459074517, 0.0005480170141106175, 0.0005507382823137835, 0.0005534595505169494, 0.0005561808187201154, 0.0005589020869232813, 0.0005616233551264473, 0.0005643446233296131, 0.0005670658915327791, 0.0005697871597359449, 0.000572508427939111, 0.0005752296961422769, 0.0005779509643454428, 0.0005806722325486087, 0.0005833935007517747, 0.0005861147689549405, 0.0005888360371581065, 0.0005915573053612724, 0.0005942785735644383, 0.0005969998417676043, 0.0005997211099707701, 0.0006024423781739361, 0.000605163646377102, 0.000607884914580268, 0.0006106061827834339, 0.0006133274509865998, 0.0006160487191897657, 0.0006187699873929317, 0.0006214912555960976, 0.0006242125237992636, 0.0006269337920024294, 0.0006296550602055954, 0.0006323763284087613, 0.0006350975966119272, 0.0006378188648150932, 0.0006405401330182592, 0.000643261401221425, 0.000645982669424591, 0.0006487039376277568, 0.0006514252058309229, 0.0006541464740340888, 0.0006568677422372547, 0.0006595890104404206, 0.0006623102786435864, 0.0006650315468467524, 0.0006677528150499183, 0.0006704740832530843, 0.0006731953514562502, 0.0006759166196594162, 0.000678637887862582, 0.000681359156065748, 0.0006840804242689139, 0.0006868016924720799, 0.0006895229606752458, 0.0006922442288784117, 0.0006949654970815776, 0.0006976867652847435, 0.0007004080334879095, 0.0007031293016910755, 0.0007058505698942413, 0.0007085718380974073, 0.0007112931063005732, 0.0007140143745037391, 0.0007167356427069051, 0.000719456910910071, 0.0007221781791132369, 0.0007248994473164029, 0.0007276207155195687, 0.0007303419837227346, 0.0007330632519259007, 0.0007357845201290665, 0.0007385057883322325, 0.0007412270565353983, 0.0007439483247385643, 0.0007466695929417302, 0.0007493908611448962, 0.0007521121293480621, 0.000754833397551228, 0.0007575546657543939, 0.0007602759339575599, 0.0007629972021607257, 0.0007657184703638918, 0.0007684397385670577, 0.0007711610067702236, 0.0007738822749733895, 0.0007766035431765554, 0.0007793248113797213, 0.0007820460795828874, 0.0007847673477860532, 0.0007874886159892192, 0.000790209884192385, 0.000792931152395551, 0.0007956524205987169, 0.0007983736888018828, 0.0008010949570050488, 0.0008038162252082147, 0.0008065374934113806, 0.0008092587616145465, 0.0008119800298177124, 0.0008147012980208784, 0.0008174225662240444, 0.0008201438344272102, 0.0008228651026303762, 0.000825586370833542, 0.000828307639036708, 0.000831028907239874, 0.0008337501754430399, 0.0008364714436462058, 0.0008391927118493718, 0.0008419139800525376, 0.0008446352482557036, 0.0008473565164588695, 0.0008500777846620355, 0.0008527990528652014, 0.0008555203210683673, 0.0008582415892715332, 0.0008609628574746993, 0.0008636841256778651, 0.0008664053938810311, 0.0008691266620841969, 0.0008718479302873628, 0.0008745691984905288, 0.0008772904666936946, 0.0008800117348968607, 0.0008827330031000265, 0.0008854542713031925, 0.0008881755395063584, 0.0008908968077095243, 0.0008936180759126903, 0.0008963393441158563, 0.0008990606123190221, 0.0009017818805221881, 0.0009045031487253539, 0.0009072244169285199, 0.0009099456851316859, 0.0009126669533348518, 0.0009153882215380177, 0.0009181094897411837, 0.0009208307579443495, 0.0009235520261475155, 0.0009262732943506814, 0.0009289945625538474, 0.0009317158307570133, 0.0009344370989601792, 0.0009371583671633451, 0.0009398796353665109, 0.000942600903569677, 0.0009453221717728429, 0.0009480434399760088, 0.0009507647081791747, 0.0009534859763823407, 0.0009562072445855065, 0.0009589285127886726, 0.0009616497809918384, 0.0009643710491950044, 0.0009670923173981703, 0.0009698135856013362, 0.0009725348538045021, 0.0009752561220076682, 0.000977977390210834, 0.0009806986584139999, 0.0009834199266171657, 0.0009861411948203318, 0.0009888624630234977, 0.0009915837312266637, 0.0009943049994298296, 0.0009970262676329954, 0.0009997475358361613, 0.0010024688040393274, 0.0010051900722424932, 0.001007911340445659, 0.0010106326086488252, 0.001013353876851991, 0.001016075145055157, 0.001018796413258323, 0.0010215176814614888, 0.0010242389496646547, 0.0010269602178678207, 0.0010296814860709866, 0.0010324027542741527, 0.0010351240224773185, 0.0010378452906804844, 0.0010405665588836504, 0.001043287827086816, 0.0010460090952899822, 0.0010487303634931482, 0.001051451631696314, 0.00105417289989948, 0.0010568941681026458, 0.0010596154363058119, 0.001062336704508978, 0.0010650579727121436, 0.0010677792409153097, 0.0010705005091184755, 0.0010732217773216416, 0.0010759430455248072, 0.0010786643137279733, 0.0010813855819311394, 0.001084106850134305, 0.001086828118337471, 0.001089549386540637, 0.001092270654743803, 0.0010949919229469687, 0.0010977131911501347, 0.0011004344593533008, 0.0011031557275564667, 0.0011058769957596325, 0.0011085982639627984, 0.0011113195321659644, 0.0011140408003691305, 0.0011167620685722962, 0.0011194833367754622, 0.001122204604978628, 0.0011249258731817942, 0.00112764714138496, 0.0011303684095881259, 0.001133089677791292, 0.0011358109459944578, 0.0011385322141976237, 0.0011412534824007895, 0.0011439747506039556, 0.0011466960188071214, 0.0011494172870102873, 0.0011521385552134534, 0.0011548598234166192, 0.001157581091619785, 0.0011603023598229512, 0.001163023628026117, 0.001165744896229283, 0.0011684661644324487, 0.0011711874326356148, 0.0011739087008387807, 0.0011766299690419467, 0.0011793512372451126, 0.0011820725054482784, 0.0011847937736514445, 0.0011875150418546104, 0.0011902363100577762, 0.0011929575782609423, 0.0011956788464641082, 0.0011984001146672742, 0.0012011213828704399, 0.001203842651073606, 0.0012065639192767718, 0.0012092851874799379, 0.0012120064556831037, 0.0012147277238862696, 0.0012174489920894357, 0.0012201702602926013, 0.0012228915284957674, 0.0012256127966989334, 0.0012283340649020993, 0.0012310553331052652, 0.001233776601308431, 0.001236497869511597, 0.001239219137714763, 0.0012419404059179288, 0.0012446616741210949, 0.0012473829423242607, 0.0012501042105274268, 0.0012528254787305924, 0.0012555467469337585, 0.0012582680151369246, 0.0012609892833400904, 0.0012637105515432563, 0.0012664318197464222, 0.0012691530879495882, 0.0012718743561527543, 0.00127459562435592, 0.001277316892559086, 0.0012800381607622519, 0.001282759428965418, 0.0012854806971685836, 0.0012882019653717497, 0.0012909232335749157, 0.0012936445017780814, 0.0012963657699812474, 0.0012990870381844133, 0.0013018083063875794, 0.001304529574590745, 0.001307250842793911, 0.0013099721109970772, 0.001312693379200243, 0.0013154146474034089, 0.0013181359156065747, 0.0013208571838097408, 0.0013235784520129069, 0.0013262997202160725, 0.0013290209884192386, 0.0013317422566224044, 0.0013344635248255705, 0.0013371847930287364, 0.0013399060612319022, 0.0013426273294350683, 0.0013453485976382342, 0.0013480698658414, 0.0013507911340445659, 0.001353512402247732, 0.0013562336704508978, 0.0013589549386540637, 0.0013616762068572297, 0.0013643974750603956, 0.0013671187432635614, 0.0013698400114667275, 0.0013725612796698934, 0.0013752825478730594, 0.001378003816076225, 0.0013807250842793912, 0.001383446352482557, 0.001386167620685723, 0.001388888888888889])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_82b614508746496885824bee44b16a60.x = d3.scale.linear()
              .domain([3.0976055509091474e-05, 0.001388888888888889])
              .range([0, 400]);

    color_map_82b614508746496885824bee44b16a60.legend = L.control({position: 'topright'});
    color_map_82b614508746496885824bee44b16a60.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_82b614508746496885824bee44b16a60.legend.addTo(map_ff8e4d513298443bb39eef5321a1d5b1);

    color_map_82b614508746496885824bee44b16a60.xAxis = d3.svg.axis()
        .scale(color_map_82b614508746496885824bee44b16a60.x)
        .orient("top")
        .tickSize(1)
        .tickValues([3.0976055509091474e-05, 0.00025729486107239105, 0.0004836136666356906, 0.0007099324721989902, 0.0009362512777622898, 0.0011625700833255894, 0.001388888888888889]);

    color_map_82b614508746496885824bee44b16a60.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_82b614508746496885824bee44b16a60.g = color_map_82b614508746496885824bee44b16a60.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_82b614508746496885824bee44b16a60.g.selectAll("rect")
        .data(color_map_82b614508746496885824bee44b16a60.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_82b614508746496885824bee44b16a60.x(color_map_82b614508746496885824bee44b16a60.color.domain()[i - 1]) : color_map_82b614508746496885824bee44b16a60.x.range()[0],
            x1: i < color_map_82b614508746496885824bee44b16a60.color.domain().length ? color_map_82b614508746496885824bee44b16a60.x(color_map_82b614508746496885824bee44b16a60.color.domain()[i]) : color_map_82b614508746496885824bee44b16a60.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_82b614508746496885824bee44b16a60.g.call(color_map_82b614508746496885824bee44b16a60.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('34_50_NILTON JOSE DOS ANJOS DE OLIVEIRA');

