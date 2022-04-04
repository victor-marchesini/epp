    
            var map_447679f216954c6dbde445a311b696d3 = L.map(
                "map_447679f216954c6dbde445a311b696d3",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_edf08a68ff614166b13f60703345868c = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_447679f216954c6dbde445a311b696d3);
        
    
            var choropleth_71402e2b72e74f0aabfc6755f7b1ed1d = L.featureGroup(
                {}
            ).addTo(map_447679f216954c6dbde445a311b696d3);
        
    
        function geo_json_c8b09556ca384f1da1977fd01b7e88cd_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 441: case 412: case 440: case 462: case 467: case 403: case 345: case 416: case 382: case 427: case 415: case 397: case 364: case 348: case 327: case 326: case 433: case 445: case 430: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 443: case 428: case 393: case 423: case 431: case 394: case 349: case 342: case 336: case 358: case 367: case 460: case 475: case 357: case 355: case 481: case 479: case 391: case 465: case 480: case 341: case 414: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 452: case 380: case 338: case 340: case 373: case 390: case 368: case 362: case 386: case 360: case 350: case 457: case 337: case 454: case 429: case 469: case 471: case 387: case 378: case 458: case 450: case 389: case 384: case 510: case 405: case 890: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 422: case 448: case 449: case 455: case 464: case 442: case 436: case 444: case 432: case 411: case 404: case 398: case 330: case 485: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 434: case 438: case 447: case 437: case 426: case 408: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 478: case 446: case 400: case 419: case 366: case 402: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_c8b09556ca384f1da1977fd01b7e88cd_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_c8b09556ca384f1da1977fd01b7e88cd = L.geoJson(null, {
                onEachFeature: geo_json_c8b09556ca384f1da1977fd01b7e88cd_onEachFeature,
            
                style: geo_json_c8b09556ca384f1da1977fd01b7e88cd_styler,
        });

        function geo_json_c8b09556ca384f1da1977fd01b7e88cd_add (data) {
            geo_json_c8b09556ca384f1da1977fd01b7e88cd
                .addData(data)
                .addTo(choropleth_71402e2b72e74f0aabfc6755f7b1ed1d);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_c8b09556ca384f1da1977fd01b7e88cd_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_91b49429b595431f86e7771d7fc6179c = {};

    
    color_map_91b49429b595431f86e7771d7fc6179c.color = d3.scale.threshold()
              .domain([4.556327599954437e-05, 4.8233576405730184e-05, 5.0903876811916e-05, 5.357417721810181e-05, 5.6244477624287626e-05, 5.891477803047344e-05, 6.158507843665925e-05, 6.425537884284506e-05, 6.692567924903088e-05, 6.959597965521669e-05, 7.226628006140251e-05, 7.493658046758832e-05, 7.760688087377413e-05, 8.027718127995995e-05, 8.294748168614577e-05, 8.561778209233157e-05, 8.828808249851738e-05, 9.09583829047032e-05, 9.362868331088902e-05, 9.629898371707483e-05, 9.896928412326065e-05, 0.00010163958452944646, 0.00010430988493563228, 0.00010698018534181809, 0.0001096504857480039, 0.0001123207861541897, 0.00011499108656037552, 0.00011766138696656134, 0.00012033168737274715, 0.00012300198777893297, 0.0001256722881851188, 0.0001283425885913046, 0.0001310128889974904, 0.00013368318940367623, 0.00013635348980986202, 0.00013902379021604787, 0.00014169409062223366, 0.00014436439102841949, 0.0001470346914346053, 0.0001497049918407911, 0.00015237529224697695, 0.00015504559265316274, 0.00015771589305934854, 0.00016038619346553436, 0.00016305649387172018, 0.00016572679427790597, 0.00016839709468409182, 0.0001710673950902776, 0.0001737376954964634, 0.00017640799590264925, 0.00017907829630883505, 0.0001817485967150209, 0.0001844188971212067, 0.00018708919752739248, 0.00018975949793357833, 0.00019242979833976413, 0.00019510009874594992, 0.00019777039915213577, 0.00020044069955832156, 0.0002031109999645074, 0.0002057813003706932, 0.000208451600776879, 0.00021112190118306484, 0.00021379220158925064, 0.00021646250199543643, 0.00021913280240162223, 0.00022180310280780807, 0.00022447340321399387, 0.00022714370362017972, 0.0002298140040263655, 0.00023248430443255136, 0.00023515460483873715, 0.00023782490524492295, 0.0002404952056511088, 0.0002431655060572946, 0.0002458358064634804, 0.00024850610686966623, 0.000251176407275852, 0.00025384670768203787, 0.00025651700808822366, 0.0002591873084944095, 0.0002618576089005953, 0.0002645279093067811, 0.0002671982097129669, 0.00026986851011915274, 0.00027253881052533854, 0.00027520911093152433, 0.0002778794113377102, 0.00028054971174389597, 0.0002832200121500818, 0.0002858903125562676, 0.0002885606129624534, 0.00029123091336863925, 0.0002939012137748251, 0.0002965715141810109, 0.0002992418145871967, 0.0003019121149933825, 0.00030458241539956833, 0.0003072527158057541, 0.00030992301621194, 0.0003125933166181257, 0.00031526361702431156, 0.0003179339174304974, 0.0003206042178366832, 0.000323274518242869, 0.00032594481864905484, 0.00032861511905524064, 0.0003312854194614265, 0.0003339557198676123, 0.0003366260202737981, 0.0003392963206799839, 0.0003419666210861697, 0.0003446369214923555, 0.00034730722189854136, 0.00034997752230472715, 0.00035264782271091295, 0.0003553181231170988, 0.0003579884235232846, 0.00036065872392947044, 0.0003633290243356562, 0.000365999324741842, 0.00036866962514802787, 0.00037133992555421366, 0.00037401022596039946, 0.0003766805263665853, 0.0003793508267727711, 0.00038202112717895695, 0.00038469142758514274, 0.00038736172799132854, 0.0003900320283975144, 0.0003927023288037001, 0.00039537262920988597, 0.0003980429296160718, 0.0004007132300222576, 0.0004033835304284434, 0.00040605383083462925, 0.00040872413124081505, 0.0004113944316470009, 0.0004140647320531867, 0.0004167350324593725, 0.00041940533286555833, 0.0004220756332717441, 0.0004247459336779299, 0.00042741623408411577, 0.00043008653449030156, 0.00043275683489648736, 0.0004354271353026732, 0.000438097435708859, 0.00044076773611504484, 0.00044343803652123064, 0.00044610833692741643, 0.0004487786373336023, 0.0004514489377397881, 0.00045411923814597387, 0.0004567895385521597, 0.0004594598389583455, 0.00046213013936453136, 0.00046480043977071715, 0.00046747074017690295, 0.0004701410405830888, 0.00047281134098927464, 0.0004754816413954604, 0.00047815194180164623, 0.000480822242207832, 0.0004834925426140178, 0.00048616284302020366, 0.0004888331434263894, 0.0004915034438325753, 0.0004941737442387611, 0.0004968440446449469, 0.0004995143450511327, 0.0005021846454573185, 0.0005048549458635043, 0.0005075252462696902, 0.000510195546675876, 0.0005128658470820618, 0.0005155361474882476, 0.0005182064478944334, 0.0005208767483006193, 0.000523547048706805, 0.0005262173491129908, 0.0005288876495191766, 0.0005315579499253624, 0.0005342282503315483, 0.0005368985507377341, 0.0005395688511439199, 0.0005422391515501058, 0.0005449094519562915, 0.0005475797523624774, 0.0005502500527686631, 0.000552920353174849, 0.0005555906535810348, 0.0005582609539872206, 0.0005609312543934065, 0.0005636015547995923, 0.0005662718552057781, 0.0005689421556119639, 0.0005716124560181497, 0.0005742827564243356, 0.0005769530568305214, 0.000579623357236707, 0.0005822936576428929, 0.0005849639580490787, 0.0005876342584552646, 0.0005903045588614504, 0.0005929748592676362, 0.000595645159673822, 0.0005983154600800078, 0.0006009857604861936, 0.0006036560608923795, 0.0006063263612985653, 0.000608996661704751, 0.0006116669621109369, 0.0006143372625171227, 0.0006170075629233086, 0.0006196778633294944, 0.0006223481637356802, 0.000625018464141866, 0.0006276887645480518, 0.0006303590649542376, 0.0006330293653604235, 0.0006356996657666093, 0.000638369966172795, 0.0006410402665789808, 0.0006437105669851666, 0.0006463808673913525, 0.0006490511677975383, 0.000651721468203724, 0.0006543917686099099, 0.0006570620690160957, 0.0006597323694222815, 0.0006624026698284674, 0.0006650729702346532, 0.000667743270640839, 0.0006704135710470248, 0.0006730838714532106, 0.0006757541718593965, 0.0006784244722655823, 0.000681094772671768, 0.0006837650730779539, 0.0006864353734841397, 0.0006891056738903255, 0.0006917759742965114, 0.0006944462747026972, 0.0006971165751088829, 0.0006997868755150687, 0.0007024571759212545, 0.0007051274763274404, 0.0007077977767336262, 0.0007104680771398119, 0.0007131383775459978, 0.0007158086779521836, 0.0007184789783583695, 0.0007211492787645553, 0.0007238195791707411, 0.0007264898795769269, 0.0007291601799831127, 0.0007318304803892985, 0.0007345007807954844, 0.0007371710812016702, 0.0007398413816078559, 0.0007425116820140418, 0.0007451819824202276, 0.0007478522828264135, 0.0007505225832325993, 0.000753192883638785, 0.0007558631840449708, 0.0007585334844511566, 0.0007612037848573424, 0.0007638740852635283, 0.0007665443856697141, 0.0007692146860758999, 0.0007718849864820857, 0.0007745552868882715, 0.0007772255872944574, 0.0007798958877006432, 0.000782566188106829, 0.0007852364885130148, 0.0007879067889192006, 0.0007905770893253864, 0.0007932473897315723, 0.0007959176901377581, 0.0007985879905439439, 0.0008012582909501297, 0.0008039285913563155, 0.0008065988917625014, 0.0008092691921686872, 0.0008119394925748729, 0.0008146097929810587, 0.0008172800933872445, 0.0008199503937934303, 0.0008226206941996162, 0.000825290994605802, 0.0008279612950119878, 0.0008306315954181736, 0.0008333018958243594, 0.0008359721962305453, 0.0008386424966367311, 0.0008413127970429169, 0.0008439830974491027, 0.0008466533978552885, 0.0008493236982614744, 0.0008519939986676602, 0.000854664299073846, 0.0008573345994800318, 0.0008600048998862176, 0.0008626752002924034, 0.0008653455006985893, 0.000868015801104775, 0.0008706861015109607, 0.0008733564019171466, 0.0008760267023233324, 0.0008786970027295183, 0.0008813673031357041, 0.0008840376035418899, 0.0008867079039480757, 0.0008893782043542615, 0.0008920485047604473, 0.0008947188051666332, 0.000897389105572819, 0.0009000594059790049, 0.0009027297063851906, 0.0009054000067913764, 0.0009080703071975623, 0.0009107406076037481, 0.0009134109080099339, 0.0009160812084161197, 0.0009187515088223055, 0.0009214218092284912, 0.0009240921096346772, 0.000926762410040863, 0.0009294327104470487, 0.0009321030108532345, 0.0009347733112594203, 0.0009374436116656062, 0.000940113912071792, 0.0009427842124779778, 0.0009454545128841636, 0.0009481248132903494, 0.0009507951136965352, 0.0009534654141027211, 0.0009561357145089069, 0.0009588060149150927, 0.0009614763153212785, 0.0009641466157274643, 0.0009668169161336502, 0.000969487216539836, 0.0009721575169460218, 0.0009748278173522076, 0.0009774981177583934, 0.0009801684181645791, 0.000982838718570765, 0.0009855090189769507, 0.0009881793193831365, 0.0009908496197893223, 0.0009935199201955081, 0.0009961902206016941, 0.00099886052100788, 0.0010015308214140657, 0.0010042011218202515, 0.0010068714222264373, 0.001009541722632623, 0.0010122120230388089, 0.0010148823234449947, 0.0010175526238511805, 0.0010202229242573663, 0.0010228932246635523, 0.001025563525069738, 0.0010282338254759239, 0.0010309041258821097, 0.0010335744262882955, 0.0010362447266944812, 0.0010389150271006673, 0.0010415853275068528, 0.0010442556279130386, 0.0010469259283192246, 0.0010495962287254104, 0.0010522665291315962, 0.0010549368295377818, 0.0010576071299439678, 0.0010602774303501536, 0.0010629477307563394, 0.0010656180311625252, 0.001068288331568711, 0.0010709586319748968, 0.0010736289323810828, 0.0010762992327872686, 0.0010789695331934544, 0.0010816398335996402, 0.0010843101340058258, 0.0010869804344120118, 0.0010896507348181976, 0.0010923210352243834, 0.0010949913356305691, 0.001097661636036755, 0.001100331936442941, 0.0011030022368491267, 0.0011056725372553125, 0.0011083428376614983, 0.0011110131380676841, 0.0011136834384738697, 0.0011163537388800557, 0.0011190240392862415, 0.0011216943396924273, 0.001124364640098613, 0.0011270349405047989, 0.001129705240910985, 0.0011323755413171707, 0.0011350458417233565, 0.0011377161421295423, 0.001140386442535728, 0.0011430567429419137, 0.0011457270433480997, 0.0011483973437542855, 0.0011510676441604713, 0.001153737944566657, 0.0011564082449728428, 0.0011590785453790288, 0.0011617488457852146, 0.0011644191461914004, 0.0011670894465975862, 0.001169759747003772, 0.0011724300474099576, 0.0011751003478161436, 0.0011777706482223294, 0.0011804409486285152, 0.001183111249034701, 0.0011857815494408868, 0.0011884518498470728, 0.0011911221502532586, 0.0011937924506594444, 0.0011964627510656302, 0.001199133051471816, 0.0012018033518780015, 0.0012044736522841876, 0.0012071439526903734, 0.0012098142530965591, 0.001212484553502745, 0.0012151548539089307, 0.0012178251543151167, 0.0012204954547213025, 0.0012231657551274883, 0.0012258360555336741, 0.0012285063559398597, 0.0012311766563460457, 0.0012338469567522315, 0.0012365172571584173, 0.001239187557564603, 0.0012418578579707889, 0.0012445281583769747, 0.0012471984587831607, 0.0012498687591893465, 0.0012525390595955323, 0.001255209360001718, 0.0012578796604079037, 0.0012605499608140897, 0.0012632202612202755, 0.0012658905616264613, 0.001268560862032647, 0.0012712311624388328, 0.0012739014628450186, 0.0012765717632512046, 0.0012792420636573904, 0.0012819123640635762, 0.001284582664469762, 0.0012872529648759476, 0.0012899232652821336, 0.0012925935656883194, 0.0012952638660945052, 0.001297934166500691, 0.0013006044669068768, 0.0013032747673130626, 0.0013059450677192486, 0.0013086153681254344, 0.0013112856685316202, 0.001313955968937806, 0.0013166262693439915, 0.0013192965697501776, 0.0013219668701563634, 0.0013246371705625491, 0.001327307470968735, 0.0013299777713749207, 0.0013326480717811065, 0.0013353183721872925, 0.0013379886725934783, 0.0013406589729996641, 0.00134332927340585, 0.0013459995738120355, 0.0013486698742182215, 0.0013513401746244073, 0.001354010475030593, 0.0013566807754367789, 0.0013593510758429647, 0.0013620213762491507, 0.0013646916766553365, 0.0013673619770615223, 0.001370032277467708, 0.0013727025778738939, 0.0013753728782800794, 0.0013780431786862655])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_91b49429b595431f86e7771d7fc6179c.x = d3.scale.linear()
              .domain([4.556327599954437e-05, 0.0013780431786862655])
              .range([0, 400]);

    color_map_91b49429b595431f86e7771d7fc6179c.legend = L.control({position: 'topright'});
    color_map_91b49429b595431f86e7771d7fc6179c.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_91b49429b595431f86e7771d7fc6179c.legend.addTo(map_447679f216954c6dbde445a311b696d3);

    color_map_91b49429b595431f86e7771d7fc6179c.xAxis = d3.svg.axis()
        .scale(color_map_91b49429b595431f86e7771d7fc6179c.x)
        .orient("top")
        .tickSize(1)
        .tickValues([4.556327599954437e-05, 0.00026764325978066456, 0.0004897232435617847, 0.0007118032273429049, 0.0009338832111240251, 0.0011559631949051453, 0.0013780431786862655]);

    color_map_91b49429b595431f86e7771d7fc6179c.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_91b49429b595431f86e7771d7fc6179c.g = color_map_91b49429b595431f86e7771d7fc6179c.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_91b49429b595431f86e7771d7fc6179c.g.selectAll("rect")
        .data(color_map_91b49429b595431f86e7771d7fc6179c.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_91b49429b595431f86e7771d7fc6179c.x(color_map_91b49429b595431f86e7771d7fc6179c.color.domain()[i - 1]) : color_map_91b49429b595431f86e7771d7fc6179c.x.range()[0],
            x1: i < color_map_91b49429b595431f86e7771d7fc6179c.color.domain().length ? color_map_91b49429b595431f86e7771d7fc6179c.x(color_map_91b49429b595431f86e7771d7fc6179c.color.domain()[i]) : color_map_91b49429b595431f86e7771d7fc6179c.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_91b49429b595431f86e7771d7fc6179c.g.call(color_map_91b49429b595431f86e7771d7fc6179c.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('40_50_CINTIA TEIXEIRA DE SOUZA SILVA');

