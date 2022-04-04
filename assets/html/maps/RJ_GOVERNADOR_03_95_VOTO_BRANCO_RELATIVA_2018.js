    
            var map_72a1e6b1c7ec4fd1ae87912d057b775a = L.map(
                "map_72a1e6b1c7ec4fd1ae87912d057b775a",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_cbe3276f43cd41fd819e6fed2b5c80ae = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_72a1e6b1c7ec4fd1ae87912d057b775a);
        
    
            var choropleth_0d564335366c44b69cd6627d32eebcb4 = L.featureGroup(
                {}
            ).addTo(map_72a1e6b1c7ec4fd1ae87912d057b775a);
        
    
        function geo_json_9650342faa79400a9fea507572ac46d6_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 410: case 478: case 381: case 416: case 387: case 458: case 450: case 480: case 414: case 374: case 890: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 428: case 393: case 348: case 350: case 457: case 463: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 443: case 377: case 424: case 417: case 403: case 470: case 353: case 363: case 392: case 343: case 351: case 396: case 411: case 397: case 404: case 395: case 373: case 398: case 385: case 346: case 401: case 362: case 386: case 379: case 372: case 354: case 334: case 327: case 326: case 331: case 330: case 356: case 459: case 430: case 409: case 461: case 510: case 485: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 438: case 449: case 447: case 453: case 467: case 466: case 473: case 455: case 472: case 464: case 442: case 437: case 436: case 446: case 444: case 426: case 419: case 415: case 408: case 371: case 364: case 359: case 339: case 433: case 445: case 399: case 391: case 477: case 402: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 462: case 456: case 468: case 471: case 366: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_9650342faa79400a9fea507572ac46d6_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_9650342faa79400a9fea507572ac46d6 = L.geoJson(null, {
                onEachFeature: geo_json_9650342faa79400a9fea507572ac46d6_onEachFeature,
            
                style: geo_json_9650342faa79400a9fea507572ac46d6_styler,
        });

        function geo_json_9650342faa79400a9fea507572ac46d6_add (data) {
            geo_json_9650342faa79400a9fea507572ac46d6
                .addData(data)
                .addTo(choropleth_0d564335366c44b69cd6627d32eebcb4);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_9650342faa79400a9fea507572ac46d6_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_5d48e2d193c847c896a2e0a503cb0353 = {};

    
    color_map_5d48e2d193c847c896a2e0a503cb0353.color = d3.scale.threshold()
              .domain([0.0, 0.00020400429629560747, 0.00040800859259121494, 0.0006120128888868224, 0.0008160171851824299, 0.0010200214814780372, 0.0012240257777736449, 0.0014280300740692523, 0.0016320343703648597, 0.001836038666660467, 0.0020400429629560744, 0.002244047259251682, 0.0024480515555472897, 0.002652055851842897, 0.0028560601481385046, 0.003060064444434112, 0.0032640687407297195, 0.0034680730370253267, 0.003672077333320934, 0.0038760816296165416, 0.004080085925912149, 0.0042840902222077565, 0.004488094518503364, 0.004692098814798971, 0.0048961031110945795, 0.005100107407390187, 0.005304111703685794, 0.0055081159999814016, 0.005712120296277009, 0.005916124592572617, 0.006120128888868224, 0.006324133185163831, 0.006528137481459439, 0.006732141777755046, 0.0069361460740506534, 0.007140150370346261, 0.007344154666641868, 0.0075481589629374755, 0.007752163259233083, 0.00795616755552869, 0.008160171851824298, 0.008364176148119904, 0.008568180444415513, 0.00877218474071112, 0.008976189037006728, 0.009180193333302335, 0.009384197629597942, 0.00958820192589355, 0.009792206222189159, 0.009996210518484766, 0.010200214814780374, 0.010404219111075981, 0.010608223407371588, 0.010812227703667196, 0.011016231999962803, 0.01122023629625841, 0.011424240592554018, 0.011628244888849625, 0.011832249185145234, 0.01203625348144084, 0.012240257777736447, 0.012444262074032056, 0.012648266370327663, 0.01285227066662327, 0.013056274962918878, 0.013260279259214485, 0.013464283555510092, 0.0136682878518057, 0.013872292148101307, 0.014076296444396914, 0.014280300740692522, 0.014484305036988129, 0.014688309333283736, 0.014892313629579344, 0.015096317925874951, 0.01530032222217056, 0.015504326518466166, 0.015708330814761775, 0.01591233511105738, 0.01611633940735299, 0.016320343703648595, 0.016524347999944206, 0.01672835229623981, 0.01693235659253542, 0.017136360888831026, 0.017340365185126636, 0.01754436948142224, 0.01774837377771785, 0.017952378074013457, 0.018156382370309063, 0.01836038666660467, 0.01856439096290028, 0.018768395259195884, 0.018972399555491494, 0.0191764038517871, 0.019380408148082708, 0.019584412444378318, 0.019788416740673925, 0.01999242103696953, 0.020196425333265138, 0.02040042962956075, 0.020604433925856352, 0.020808438222151962, 0.02101244251844757, 0.021216446814743176, 0.021420451111038782, 0.021624455407334393, 0.021828459703629996, 0.022032463999925606, 0.022236468296221213, 0.02244047259251682, 0.022644476888812427, 0.022848481185108037, 0.02305248548140364, 0.02325648977769925, 0.023460494073994857, 0.023664498370290468, 0.02386850266658607, 0.02407250696288168, 0.024276511259177288, 0.024480515555472895, 0.0246845198517685, 0.02488852414806411, 0.025092528444359715, 0.025296532740655325, 0.025500537036950932, 0.02570454133324654, 0.025908545629542146, 0.026112549925837756, 0.026316554222133363, 0.02652055851842897, 0.02672456281472458, 0.026928567111020183, 0.027132571407315793, 0.0273365757036114, 0.027540579999907007, 0.027744584296202614, 0.027948588592498224, 0.028152592888793827, 0.028356597185089438, 0.028560601481385044, 0.02876460577768065, 0.028968610073976258, 0.029172614370271868, 0.02937661866656747, 0.029580622962863082, 0.02978462725915869, 0.029988631555454295, 0.030192635851749902, 0.030396640148045512, 0.03060064444434112, 0.030804648740636726, 0.031008653036932333, 0.031212657333227943, 0.03141666162952355, 0.03162066592581916, 0.03182467022211476, 0.03202867451841037, 0.03223267881470598, 0.032436683111001584, 0.03264068740729719, 0.032844691703592804, 0.03304869599988841, 0.03325270029618402, 0.03345670459247962, 0.03366070888877523, 0.03386471318507084, 0.034068717481366445, 0.03427272177766205, 0.034476726073957666, 0.03468073037025327, 0.03488473466654887, 0.03508873896284448, 0.03529274325914009, 0.0354967475554357, 0.035700751851731306, 0.03590475614802691, 0.03610876044432252, 0.03631276474061813, 0.036516769036913733, 0.03672077333320934, 0.036924777629504954, 0.03712878192580056, 0.03733278622209616, 0.03753679051839177, 0.03774079481468738, 0.03794479911098299, 0.038148803407278595, 0.0383528077035742, 0.03855681199986981, 0.038760816296165415, 0.03896482059246102, 0.039168824888756636, 0.03937282918505224, 0.03957683348134785, 0.03978083777764345, 0.03998484207393906, 0.04018884637023467, 0.040392850666530276, 0.04059685496282588, 0.0408008592591215, 0.041004863555417104, 0.041208867851712704, 0.04141287214800831, 0.041616876444303924, 0.04182088074059953, 0.04202488503689514, 0.042228889333190744, 0.04243289362948635, 0.04263689792578196, 0.042840902222077565, 0.04304490651837317, 0.043248910814668785, 0.04345291511096439, 0.04365691940725999, 0.0438609237035556, 0.04406492799985121, 0.04426893229614682, 0.044472936592442426, 0.04467694088873803, 0.04488094518503364, 0.045084949481329246, 0.04528895377762485, 0.04549295807392046, 0.045696962370216074, 0.04590096666651168, 0.04610497096280728, 0.046308975259102894, 0.0465129795553985, 0.04671698385169411, 0.046920988147989715, 0.04712499244428533, 0.047328996740580935, 0.047533001036876535, 0.04773700533317214, 0.047941009629467755, 0.04814501392576336, 0.04834901822205897, 0.048553022518354576, 0.04875702681465018, 0.04896103111094579, 0.049165035407241396, 0.049369039703537, 0.04957304399983262, 0.04977704829612822, 0.04998105259242382, 0.05018505688871943, 0.050389061185015044, 0.05059306548131065, 0.05079706977760626, 0.051001074073901864, 0.05120507837019747, 0.05140908266649308, 0.051613086962788685, 0.05181709125908429, 0.052021095555379905, 0.05222509985167551, 0.05242910414797111, 0.052633108444266725, 0.05283711274056233, 0.05304111703685794, 0.053245121333153546, 0.05344912562944916, 0.05365312992574476, 0.053857134222040366, 0.05406113851833597, 0.05426514281463159, 0.054469147110927194, 0.0546731514072228, 0.05487715570351841, 0.055081159999814014, 0.05528516429610962, 0.05548916859240523, 0.055693172888700834, 0.05589717718499645, 0.056101181481292055, 0.056305185777587655, 0.05650919007388326, 0.056713194370178875, 0.05691719866647448, 0.05712120296277009, 0.057325207259065696, 0.0575292115553613, 0.05773321585165691, 0.057937220147952516, 0.05814122444424812, 0.058345228740543736, 0.05854923303683934, 0.05875323733313494, 0.05895724162943056, 0.059161245925726164, 0.05936525022202177, 0.05956925451831738, 0.05977325881461299, 0.05997726311090859, 0.0601812674072042, 0.060385271703499804, 0.06058927599979542, 0.060793280296091025, 0.06099728459238663, 0.06120128888868224, 0.061405293184977845, 0.06160929748127345, 0.06181330177756906, 0.062017306073864666, 0.06222131037016028, 0.062425314666455886, 0.06262931896275149, 0.0628333232590471, 0.0630373275553427, 0.06324133185163831, 0.06344533614793392, 0.06364934044422953, 0.06385334474052513, 0.06405734903682074, 0.06426135333311635, 0.06446535762941195, 0.06466936192570756, 0.06487336622200317, 0.06507737051829879, 0.06528137481459438, 0.06548537911089, 0.06568938340718561, 0.0658933877034812, 0.06609739199977682, 0.06630139629607242, 0.06650540059236804, 0.06670940488866364, 0.06691340918495924, 0.06711741348125486, 0.06732141777755046, 0.06752542207384607, 0.06772942637014168, 0.06793343066643728, 0.06813743496273289, 0.0683414392590285, 0.0685454435553241, 0.06874944785161971, 0.06895345214791533, 0.06915745644421092, 0.06936146074050654, 0.06956546503680214, 0.06976946933309774, 0.06997347362939337, 0.07017747792568896, 0.07038148222198458, 0.07058548651828019, 0.07078949081457578, 0.0709934951108714, 0.07119749940716699, 0.07140150370346261, 0.07160550799975822, 0.07180951229605383, 0.07201351659234943, 0.07221752088864504, 0.07242152518494065, 0.07262552948123625, 0.07282953377753187, 0.07303353807382747, 0.07323754237012307, 0.07344154666641868, 0.07364555096271429, 0.07384955525900991, 0.0740535595553055, 0.07425756385160112, 0.07446156814789673, 0.07466557244419232, 0.07486957674048794, 0.07507358103678353, 0.07527758533307916, 0.07548158962937476, 0.07568559392567037, 0.07588959822196598, 0.07609360251826158, 0.07629760681455719, 0.0765016111108528, 0.0767056154071484, 0.07690961970344401, 0.07711362399973962, 0.07731762829603522, 0.07752163259233083, 0.07772563688862645, 0.07792964118492204, 0.07813364548121766, 0.07833764977751327, 0.07854165407380886, 0.07874565837010448, 0.07894966266640008, 0.0791536669626957, 0.0793576712589913, 0.0795616755552869, 0.07976567985158252, 0.07996968414787813, 0.08017368844417373, 0.08037769274046934, 0.08058169703676495, 0.08078570133306055, 0.08098970562935616, 0.08119370992565177, 0.08139771422194737, 0.081601718518243, 0.08180572281453859, 0.08200972711083421, 0.0822137314071298, 0.08241773570342541, 0.08262173999972103, 0.08282574429601662, 0.08302974859231224, 0.08323375288860785, 0.08343775718490344, 0.08364176148119906, 0.08384576577749465, 0.08404977007379028, 0.08425377437008588, 0.08445777866638149, 0.0846617829626771, 0.0848657872589727, 0.08506979155526831, 0.08527379585156392, 0.08547780014785954, 0.08568180444415513, 0.08588580874045074, 0.08608981303674634, 0.08629381733304195, 0.08649782162933757, 0.08670182592563316, 0.08690583022192878, 0.08710983451822439, 0.08731383881451998, 0.0875178431108156, 0.0877218474071112, 0.08792585170340682, 0.08812985599970243, 0.08833386029599803, 0.08853786459229364, 0.08874186888858925, 0.08894587318488485, 0.08914987748118046, 0.08935388177747607, 0.08955788607377167, 0.08976189037006728, 0.08996589466636289, 0.09016989896265849, 0.09037390325895411, 0.0905779075552497, 0.09078191185154533, 0.09098591614784092, 0.09118992044413653, 0.09139392474043215, 0.09159792903672774, 0.09180193333302336, 0.09200593762931897, 0.09220994192561456, 0.09241394622191018, 0.09261795051820579, 0.0928219548145014, 0.093025959110797, 0.09322996340709261, 0.09343396770338822, 0.09363797199968382, 0.09384197629597943, 0.09404598059227504, 0.09424998488857066, 0.09445398918486625, 0.09465799348116187, 0.09486199777745746, 0.09506600207375307, 0.09527000637004869, 0.09547401066634428, 0.0956780149626399, 0.09588201925893551, 0.0960860235552311, 0.09629002785152672, 0.09649403214782232, 0.09669803644411794, 0.09690204074041354, 0.09710604503670915, 0.09731004933300476, 0.09751405362930037, 0.09771805792559597, 0.09792206222189158, 0.0981260665181872, 0.09833007081448279, 0.0985340751107784, 0.098738079407074, 0.09894208370336961, 0.09914608799966523, 0.09935009229596083, 0.09955409659225645, 0.09975810088855205, 0.09996210518484765, 0.10016610948114327, 0.10037011377743886, 0.10057411807373448, 0.10077812237003009, 0.10098212666632568, 0.1011861309626213, 0.10139013525891691, 0.10159413955521251, 0.10179814385150812])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_5d48e2d193c847c896a2e0a503cb0353.x = d3.scale.linear()
              .domain([0.0, 0.10179814385150812])
              .range([0, 400]);

    color_map_5d48e2d193c847c896a2e0a503cb0353.legend = L.control({position: 'topright'});
    color_map_5d48e2d193c847c896a2e0a503cb0353.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_5d48e2d193c847c896a2e0a503cb0353.legend.addTo(map_72a1e6b1c7ec4fd1ae87912d057b775a);

    color_map_5d48e2d193c847c896a2e0a503cb0353.xAxis = d3.svg.axis()
        .scale(color_map_5d48e2d193c847c896a2e0a503cb0353.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.016966357308584687, 0.033932714617169374, 0.05089907192575406, 0.06786542923433875, 0.08483178654292343, 0.10179814385150812]);

    color_map_5d48e2d193c847c896a2e0a503cb0353.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_5d48e2d193c847c896a2e0a503cb0353.g = color_map_5d48e2d193c847c896a2e0a503cb0353.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_5d48e2d193c847c896a2e0a503cb0353.g.selectAll("rect")
        .data(color_map_5d48e2d193c847c896a2e0a503cb0353.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_5d48e2d193c847c896a2e0a503cb0353.x(color_map_5d48e2d193c847c896a2e0a503cb0353.color.domain()[i - 1]) : color_map_5d48e2d193c847c896a2e0a503cb0353.x.range()[0],
            x1: i < color_map_5d48e2d193c847c896a2e0a503cb0353.color.domain().length ? color_map_5d48e2d193c847c896a2e0a503cb0353.x(color_map_5d48e2d193c847c896a2e0a503cb0353.color.domain()[i]) : color_map_5d48e2d193c847c896a2e0a503cb0353.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_5d48e2d193c847c896a2e0a503cb0353.g.call(color_map_5d48e2d193c847c896a2e0a503cb0353.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('03_95_VOTO BRANCO');
