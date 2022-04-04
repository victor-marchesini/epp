    
            var map_15b36279a434487c89b73a53a32e5b7a = L.map(
                "map_15b36279a434487c89b73a53a32e5b7a",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_95340087a6a24b48a8f433d267bec717 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_15b36279a434487c89b73a53a32e5b7a);
        
    
            var choropleth_1b1e4d00eb7d4694bb7d105730c65261 = L.featureGroup(
                {}
            ).addTo(map_15b36279a434487c89b73a53a32e5b7a);
        
    
        function geo_json_df22a360f7e347f88793c6fea89146ff_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 446: case 345: case 358: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 377: case 410: case 424: case 335: case 403: case 380: case 369: case 383: case 346: case 401: case 368: case 348: case 354: case 334: case 327: case 347: case 337: case 409: case 483: case 388: case 384: case 414: case 406: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 439: case 412: case 418: case 448: case 449: case 462: case 466: case 473: case 455: case 470: case 442: case 444: case 352: case 392: case 343: case 416: case 396: case 375: case 427: case 432: case 419: case 415: case 408: case 411: case 397: case 371: case 373: case 364: case 398: case 361: case 390: case 362: case 372: case 339: case 356: case 360: case 457: case 454: case 445: case 430: case 399: case 471: case 461: case 451: case 477: case 370: case 387: case 378: case 511: case 458: case 450: case 341: case 389: case 510: case 890: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 353: case 394: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 381: case 363: case 351: case 338: case 340: case 359: case 385: case 326: case 330: case 355: case 350: case 374: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 333: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_df22a360f7e347f88793c6fea89146ff_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_df22a360f7e347f88793c6fea89146ff = L.geoJson(null, {
                onEachFeature: geo_json_df22a360f7e347f88793c6fea89146ff_onEachFeature,
            
                style: geo_json_df22a360f7e347f88793c6fea89146ff_styler,
        });

        function geo_json_df22a360f7e347f88793c6fea89146ff_add (data) {
            geo_json_df22a360f7e347f88793c6fea89146ff
                .addData(data)
                .addTo(choropleth_1b1e4d00eb7d4694bb7d105730c65261);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_df22a360f7e347f88793c6fea89146ff_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_4f64de9f9cce4883aac49cd5d77cca48 = {};

    
    color_map_4f64de9f9cce4883aac49cd5d77cca48.color = d3.scale.threshold()
              .domain([1.3067454198573035e-05, 1.497969156435934e-05, 1.6891928930145646e-05, 1.880416629593195e-05, 2.0716403661718254e-05, 2.2628641027504557e-05, 2.4540878393290862e-05, 2.6453115759077168e-05, 2.8365353124863474e-05, 3.0277590490649776e-05, 3.2189827856436086e-05, 3.4102065222222385e-05, 3.60143025880087e-05, 3.7926539953794996e-05, 3.98387773195813e-05, 4.175101468536761e-05, 4.366325205115391e-05, 4.557548941694022e-05, 4.748772678272652e-05, 4.9399964148512824e-05, 5.131220151429913e-05, 5.3224438880085435e-05, 5.5136676245871734e-05, 5.704891361165805e-05, 5.896115097744435e-05, 6.087338834323065e-05, 6.278562570901695e-05, 6.469786307480326e-05, 6.661010044058956e-05, 6.852233780637587e-05, 7.043457517216217e-05, 7.234681253794848e-05, 7.425904990373479e-05, 7.617128726952109e-05, 7.80835246353074e-05, 7.99957620010937e-05, 8.190799936688001e-05, 8.382023673266631e-05, 8.573247409845262e-05, 8.764471146423893e-05, 8.955694883002523e-05, 9.146918619581154e-05, 9.338142356159784e-05, 9.529366092738415e-05, 9.720589829317043e-05, 9.911813565895676e-05, 0.00010103037302474307, 0.00010294261039052934, 0.00010485484775631568, 0.00010676708512210196, 0.00010867932248788826, 0.00011059155985367457, 0.00011250379721946087, 0.00011441603458524718, 0.00011632827195103349, 0.00011824050931681979, 0.0001201527466826061, 0.0001220649840483924, 0.0001239772214141787, 0.00012588945877996501, 0.00012780169614575132, 0.00012971393351153763, 0.00013162617087732393, 0.00013353840824311024, 0.00013545064560889654, 0.00013736288297468282, 0.00013927512034046913, 0.00014118735770625543, 0.00014309959507204177, 0.00014501183243782807, 0.00014692406980361435, 0.00014883630716940066, 0.00015074854453518696, 0.00015266078190097327, 0.00015457301926675957, 0.0001564852566325459, 0.00015839749399833218, 0.0001603097313641185, 0.0001622219687299048, 0.0001641342060956911, 0.0001660464434614774, 0.00016795868082726371, 0.00016987091819305002, 0.00017178315555883633, 0.00017369539292462263, 0.00017560763029040894, 0.00017751986765619524, 0.00017943210502198152, 0.00018134434238776783, 0.00018325657975355416, 0.00018516881711934047, 0.00018708105448512677, 0.00018899329185091308, 0.00019090552921669936, 0.00019281776658248566, 0.00019473000394827197, 0.0001966422413140583, 0.0001985544786798446, 0.00020046671604563088, 0.0002023789534114172, 0.0002042911907772035, 0.0002062034281429898, 0.0002081156655087761, 0.0002100279028745624, 0.00021194014024034872, 0.00021385237760613502, 0.00021576461497192133, 0.00021767685233770764, 0.00021958908970349394, 0.00022150132706928025, 0.00022341356443506653, 0.00022532580180085286, 0.00022723803916663917, 0.00022915027653242547, 0.00023106251389821178, 0.00023297475126399806, 0.00023488698862978436, 0.00023679922599557067, 0.000238711463361357, 0.0002406237007271433, 0.0002425359380929296, 0.0002444481754587159, 0.0002463604128245022, 0.0002482726501902885, 0.00025018488755607483, 0.00025209712492186117, 0.00025400936228764745, 0.0002559215996534337, 0.00025783383701922006, 0.00025974607438500634, 0.0002616583117507926, 0.00026357054911657895, 0.0002654827864823652, 0.00026739502384815156, 0.00026930726121393784, 0.00027121949857972417, 0.0002731317359455105, 0.0002750439733112968, 0.0002769562106770831, 0.0002788684480428694, 0.00028078068540865567, 0.00028269292277444195, 0.0002846051601402283, 0.0002865173975060146, 0.0002884296348718009, 0.00029034187223758723, 0.0002922541096033735, 0.00029416634696915984, 0.0002960785843349461, 0.00029799082170073245, 0.0002999030590665188, 0.00030181529643230506, 0.00030372753379809134, 0.0003056397711638776, 0.00030755200852966395, 0.00030946424589545023, 0.00031137648326123656, 0.0003132887206270229, 0.0003152009579928092, 0.0003171131953585955, 0.0003190254327243818, 0.0003209376700901681, 0.0003228499074559544, 0.0003247621448217407, 0.000326674382187527, 0.0003285866195533133, 0.0003304988569190996, 0.0003324110942848859, 0.00033432333165067223, 0.0003362355690164585, 0.00033814780638224485, 0.0003400600437480312, 0.00034197228111381746, 0.0003438845184796038, 0.00034579675584539, 0.00034770899321117635, 0.0003496212305769626, 0.00035153346794274896, 0.0003534457053085353, 0.00035535794267432157, 0.0003572701800401079, 0.0003591824174058942, 0.0003610946547716805, 0.0003630068921374668, 0.0003649191295032531, 0.0003668313668690394, 0.0003687436042348257, 0.000370655841600612, 0.0003725680789663983, 0.00037448031633218463, 0.0003763925536979709, 0.00037830479106375724, 0.00038021702842954357, 0.00038212926579532985, 0.0003840415031611162, 0.00038595374052690246, 0.00038786597789268874, 0.000389778215258475, 0.00039169045262426135, 0.00039360268999004763, 0.00039551492735583396, 0.0003974271647216203, 0.0003993394020874066, 0.0004012516394531929, 0.0004031638768189792, 0.0004050761141847655, 0.0004069883515505518, 0.00040890058891633813, 0.0004108128262821244, 0.0004127250636479107, 0.000414637301013697, 0.0004165495383794833, 0.00041846177574526963, 0.0004203740131110559, 0.00042228625047684225, 0.0004241984878426286, 0.00042611072520841486, 0.0004280229625742012, 0.00042993519993998747, 0.00043184743730577375, 0.00043375967467156, 0.00043567191203734636, 0.0004375841494031327, 0.00043949638676891897, 0.0004414086241347053, 0.0004433208615004916, 0.0004452330988662779, 0.0004471453362320642, 0.0004490575735978505, 0.00045096981096363686, 0.0004528820483294231, 0.0004547942856952094, 0.0004567065230609957, 0.00045861876042678203, 0.0004605309977925683, 0.00046244323515835464, 0.00046435547252414097, 0.00046626770988992725, 0.0004681799472557136, 0.00047009218462149986, 0.0004720044219872862, 0.0004739166593530724, 0.00047582889671885875, 0.0004777411340846451, 0.00047965337145043136, 0.0004815656088162177, 0.000483477846182004, 0.0004853900835477903, 0.0004873023209135766, 0.0004892145582793629, 0.0004911267956451493, 0.0004930390330109356, 0.0004949512703767219, 0.0004968635077425081, 0.0004987757451082944, 0.0005006879824740807, 0.0005026002198398671, 0.0005045124572056534, 0.0005064246945714396, 0.0005083369319372259, 0.0005102491693030122, 0.0005121614066687986, 0.0005140736440345849, 0.0005159858814003711, 0.0005178981187661574, 0.0005198103561319438, 0.0005217225934977301, 0.0005236348308635164, 0.0005255470682293026, 0.000527459305595089, 0.0005293715429608753, 0.0005312837803266616, 0.000533196017692448, 0.0005351082550582343, 0.0005370204924240205, 0.0005389327297898068, 0.0005408449671555932, 0.0005427572045213795, 0.0005446694418871658, 0.0005465816792529521, 0.0005484939166187383, 0.0005504061539845246, 0.0005523183913503109, 0.0005542306287160973, 0.0005561428660818835, 0.0005580551034476698, 0.0005599673408134562, 0.0005618795781792425, 0.0005637918155450288, 0.000565704052910815, 0.0005676162902766014, 0.0005695285276423877, 0.000571440765008174, 0.0005733530023739604, 0.0005752652397397467, 0.0005771774771055329, 0.0005790897144713192, 0.0005810019518371056, 0.0005829141892028919, 0.0005848264265686782, 0.0005867386639344645, 0.0005886509013002508, 0.0005905631386660371, 0.0005924753760318233, 0.0005943876133976097, 0.0005962998507633959, 0.0005982120881291822, 0.0006001243254949686, 0.0006020365628607549, 0.0006039488002265412, 0.0006058610375923274, 0.0006077732749581138, 0.0006096855123239001, 0.0006115977496896864, 0.0006135099870554728, 0.000615422224421259, 0.0006173344617870453, 0.0006192466991528316, 0.000621158936518618, 0.0006230711738844043, 0.0006249834112501905, 0.0006268956486159769, 0.0006288078859817632, 0.0006307201233475495, 0.0006326323607133358, 0.000634544598079122, 0.0006364568354449083, 0.0006383690728106946, 0.000640281310176481, 0.0006421935475422673, 0.0006441057849080536, 0.0006460180222738398, 0.0006479302596396262, 0.0006498424970054125, 0.0006517547343711988, 0.0006536669717369852, 0.0006555792091027714, 0.0006574914464685577, 0.000659403683834344, 0.0006613159212001304, 0.0006632281585659167, 0.0006651403959317029, 0.0006670526332974893, 0.0006689648706632756, 0.0006708771080290619, 0.0006727893453948482, 0.0006747015827606346, 0.0006766138201264207, 0.000678526057492207, 0.0006804382948579934, 0.0006823505322237797, 0.0006842627695895659, 0.0006861750069553522, 0.0006880872443211386, 0.0006899994816869249, 0.0006919117190527112, 0.0006938239564184976, 0.0006957361937842838, 0.0006976484311500701, 0.0006995606685158564, 0.0007014729058816428, 0.0007033851432474291, 0.0007052973806132153, 0.0007072096179790017, 0.000709121855344788, 0.0007110340927105743, 0.0007129463300763606, 0.000714858567442147, 0.0007167708048079332, 0.0007186830421737195, 0.0007205952795395058, 0.0007225075169052921, 0.0007244197542710783, 0.0007263319916368646, 0.000728244229002651, 0.0007301564663684373, 0.0007320687037342236, 0.00073398094110001, 0.0007358931784657962, 0.0007378054158315825, 0.0007397176531973688, 0.0007416298905631552, 0.0007435421279289415, 0.0007454543652947277, 0.0007473666026605141, 0.0007492788400263004, 0.0007511910773920867, 0.000753103314757873, 0.0007550155521236593, 0.0007569277894894456, 0.0007588400268552319, 0.0007607522642210182, 0.0007626645015868045, 0.0007645767389525907, 0.000766488976318377, 0.0007684012136841634, 0.0007703134510499497, 0.000772225688415736, 0.0007741379257815222, 0.0007760501631473086, 0.0007779624005130949, 0.0007798746378788812, 0.0007817868752446676, 0.0007836991126104538, 0.0007856113499762401, 0.0007875235873420264, 0.0007894358247078128, 0.0007913480620735991, 0.0007932602994393853, 0.0007951725368051717, 0.000797084774170958, 0.0007989970115367443, 0.0008009092489025306, 0.000802821486268317, 0.0008047337236341032, 0.0008066459609998894, 0.0008085581983656758, 0.0008104704357314621, 0.0008123826730972484, 0.0008142949104630346, 0.000816207147828821, 0.0008181193851946073, 0.0008200316225603936, 0.00082194385992618, 0.0008238560972919662, 0.0008257683346577525, 0.0008276805720235388, 0.0008295928093893252, 0.0008315050467551115, 0.0008334172841208977, 0.0008353295214866841, 0.0008372417588524704, 0.0008391539962182567, 0.000841066233584043, 0.0008429784709498294, 0.0008448907083156156, 0.0008468029456814019, 0.0008487151830471882, 0.0008506274204129745, 0.0008525396577787607, 0.000854451895144547, 0.0008563641325103334, 0.0008582763698761197, 0.000860188607241906, 0.0008621008446076924, 0.0008640130819734786, 0.0008659253193392649, 0.0008678375567050512, 0.0008697497940708376, 0.0008716620314366239, 0.0008735742688024101, 0.0008754865061681965, 0.0008773987435339828, 0.0008793109808997691, 0.0008812232182655554, 0.0008831354556313417, 0.000885047692997128, 0.0008869599303629143, 0.0008888721677287007, 0.0008907844050944869, 0.0008926966424602731, 0.0008946088798260594, 0.0008965211171918458, 0.0008984333545576321, 0.0009003455919234184, 0.0009022578292892047, 0.000904170066654991, 0.0009060823040207773, 0.0009079945413865636, 0.00090990677875235, 0.0009118190161181363, 0.0009137312534839225, 0.0009156434908497089, 0.0009175557282154952, 0.0009194679655812815, 0.0009213802029470678, 0.0009232924403128541, 0.0009252046776786404, 0.0009271169150444267, 0.0009290291524102131, 0.0009309413897759994, 0.0009328536271417856, 0.0009347658645075718, 0.0009366781018733582, 0.0009385903392391445, 0.0009405025766049308, 0.0009424148139707171, 0.0009443270513365034, 0.0009462392887022897, 0.000948151526068076, 0.0009500637634338624, 0.0009519760007996486, 0.0009538882381654349, 0.0009558004755312213, 0.0009577127128970076, 0.0009596249502627939, 0.0009615371876285801, 0.0009634494249943665, 0.0009653616623601528, 0.0009672738997259391])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_4f64de9f9cce4883aac49cd5d77cca48.x = d3.scale.linear()
              .domain([1.3067454198573035e-05, 0.0009672738997259391])
              .range([0, 400]);

    color_map_4f64de9f9cce4883aac49cd5d77cca48.legend = L.control({position: 'topright'});
    color_map_4f64de9f9cce4883aac49cd5d77cca48.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_4f64de9f9cce4883aac49cd5d77cca48.legend.addTo(map_15b36279a434487c89b73a53a32e5b7a);

    color_map_4f64de9f9cce4883aac49cd5d77cca48.xAxis = d3.svg.axis()
        .scale(color_map_4f64de9f9cce4883aac49cd5d77cca48.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.3067454198573035e-05, 0.00017210186178646738, 0.00033113626937436173, 0.0004901706769622561, 0.0006492050845501504, 0.0008082394921380448, 0.0009672738997259391]);

    color_map_4f64de9f9cce4883aac49cd5d77cca48.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_4f64de9f9cce4883aac49cd5d77cca48.g = color_map_4f64de9f9cce4883aac49cd5d77cca48.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_4f64de9f9cce4883aac49cd5d77cca48.g.selectAll("rect")
        .data(color_map_4f64de9f9cce4883aac49cd5d77cca48.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_4f64de9f9cce4883aac49cd5d77cca48.x(color_map_4f64de9f9cce4883aac49cd5d77cca48.color.domain()[i - 1]) : color_map_4f64de9f9cce4883aac49cd5d77cca48.x.range()[0],
            x1: i < color_map_4f64de9f9cce4883aac49cd5d77cca48.color.domain().length ? color_map_4f64de9f9cce4883aac49cd5d77cca48.x(color_map_4f64de9f9cce4883aac49cd5d77cca48.color.domain()[i]) : color_map_4f64de9f9cce4883aac49cd5d77cca48.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_4f64de9f9cce4883aac49cd5d77cca48.g.call(color_map_4f64de9f9cce4883aac49cd5d77cca48.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('28_65_JOSIMAR CAMPOS DE SOUZA');
