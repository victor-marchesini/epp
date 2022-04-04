    
            var map_f45e60b943f14105a05c2c18f5d4fdf0 = L.map(
                "map_f45e60b943f14105a05c2c18f5d4fdf0",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_7d85b7bc21794bd194e69f890f5f5ae4 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_f45e60b943f14105a05c2c18f5d4fdf0);
        
    
            var choropleth_253a3b7735274cbb950a1ef4eb9048b7 = L.featureGroup(
                {}
            ).addTo(map_f45e60b943f14105a05c2c18f5d4fdf0);
        
    
        function geo_json_c0a662ed2b4f498ba1f241d87ec7cf93_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 441: case 412: case 418: case 325: case 417: case 403: case 474: case 435: case 452: case 353: case 345: case 381: case 363: case 352: case 392: case 343: case 400: case 396: case 432: case 411: case 397: case 404: case 395: case 371: case 359: case 398: case 401: case 386: case 334: case 327: case 326: case 329: case 331: case 330: case 357: case 459: case 433: case 430: case 429: case 409: case 399: case 469: case 471: case 461: case 391: case 477: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 443: case 439: case 434: case 424: case 467: case 466: case 473: case 472: case 470: case 478: case 427: case 419: case 415: case 408: case 364: case 354: case 339: case 367: case 445: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 448: case 447: case 456: case 455: case 468: case 464: case 442: case 436: case 446: case 444: case 426: case 485: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 438: case 449: case 453: case 462: case 437: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 350: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_c0a662ed2b4f498ba1f241d87ec7cf93_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_c0a662ed2b4f498ba1f241d87ec7cf93 = L.geoJson(null, {
                onEachFeature: geo_json_c0a662ed2b4f498ba1f241d87ec7cf93_onEachFeature,
            
                style: geo_json_c0a662ed2b4f498ba1f241d87ec7cf93_styler,
        });

        function geo_json_c0a662ed2b4f498ba1f241d87ec7cf93_add (data) {
            geo_json_c0a662ed2b4f498ba1f241d87ec7cf93
                .addData(data)
                .addTo(choropleth_253a3b7735274cbb950a1ef4eb9048b7);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_c0a662ed2b4f498ba1f241d87ec7cf93_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_62634567068347988796b45e73d787b7 = {};

    
    color_map_62634567068347988796b45e73d787b7.color = d3.scale.threshold()
              .domain([0.0, 0.0006091723517160992, 0.0012183447034321985, 0.0018275170551482977, 0.002436689406864397, 0.003045861758580496, 0.0036550341102965954, 0.004264206462012694, 0.004873378813728794, 0.005482551165444893, 0.006091723517160992, 0.006700895868877091, 0.007310068220593191, 0.00791924057230929, 0.008528412924025388, 0.009137585275741487, 0.009746757627457588, 0.010355929979173686, 0.010965102330889785, 0.011574274682605886, 0.012183447034321985, 0.012792619386038082, 0.013401791737754182, 0.014010964089470281, 0.014620136441186381, 0.01522930879290248, 0.01583848114461858, 0.016447653496334678, 0.017056825848050777, 0.01766599819976688, 0.018275170551482974, 0.018884342903199076, 0.019493515254915175, 0.02010268760663127, 0.020711859958347373, 0.02132103231006347, 0.02193020466177957, 0.02253937701349567, 0.02314854936521177, 0.023757721716927867, 0.02436689406864397, 0.024976066420360068, 0.025585238772076163, 0.026194411123792265, 0.026803583475508364, 0.027412755827224466, 0.028021928178940562, 0.028631100530656664, 0.029240272882372763, 0.029849445234088858, 0.03045861758580496, 0.03106778993752106, 0.03167696228923716, 0.03228613464095326, 0.032895306992669356, 0.033504479344385454, 0.03411365169610155, 0.03472282404781765, 0.03533199639953376, 0.035941168751249856, 0.03655034110296595, 0.03715951345468205, 0.03776868580639815, 0.03837785815811425, 0.03898703050983035, 0.03959620286154645, 0.04020537521326254, 0.04081454756497865, 0.041423719916694746, 0.042032892268410844, 0.04264206462012694, 0.04325123697184305, 0.04386040932355914, 0.04446958167527524, 0.04507875402699134, 0.04568792637870744, 0.04629709873042354, 0.04690627108213964, 0.047515443433855734, 0.04812461578557183, 0.04873378813728794, 0.04934296048900404, 0.049952132840720136, 0.050561305192436234, 0.051170477544152326, 0.05177964989586843, 0.05238882224758453, 0.05299799459930063, 0.05360716695101673, 0.05421633930273283, 0.05482551165444893, 0.055434684006165025, 0.056043856357881124, 0.05665302870959722, 0.05726220106131333, 0.05787137341302943, 0.058480545764745526, 0.05908971811646162, 0.059698890468177716, 0.06030806281989382, 0.06091723517160992, 0.06152640752332602, 0.06213557987504212, 0.06274475222675822, 0.06335392457847432, 0.06396309693019042, 0.06457226928190651, 0.06518144163362262, 0.06579061398533871, 0.06639978633705482, 0.06700895868877091, 0.06761813104048701, 0.0682273033922031, 0.0688364757439192, 0.0694456480956353, 0.07005482044735141, 0.07066399279906752, 0.07127316515078361, 0.07188233750249971, 0.0724915098542158, 0.0731006822059319, 0.073709854557648, 0.0743190269093641, 0.0749281992610802, 0.0755373716127963, 0.0761465439645124, 0.0767557163162285, 0.0773648886679446, 0.0779740610196607, 0.07858323337137679, 0.0791924057230929, 0.07980157807480899, 0.08041075042652508, 0.0810199227782412, 0.0816290951299573, 0.0822382674816734, 0.08284743983338949, 0.08345661218510558, 0.08406578453682169, 0.08467495688853778, 0.08528412924025389, 0.08589330159196998, 0.0865024739436861, 0.08711164629540219, 0.08772081864711828, 0.08832999099883439, 0.08893916335055048, 0.08954833570226658, 0.09015750805398268, 0.09076668040569878, 0.09137585275741487, 0.09198502510913098, 0.09259419746084709, 0.09320336981256318, 0.09381254216427928, 0.09442171451599538, 0.09503088686771147, 0.09564005921942757, 0.09624923157114366, 0.09685840392285977, 0.09746757627457588, 0.09807674862629198, 0.09868592097800807, 0.09929509332972417, 0.09990426568144027, 0.10051343803315636, 0.10112261038487247, 0.10173178273658856, 0.10234095508830465, 0.10295012744002076, 0.10355929979173686, 0.10416847214345297, 0.10477764449516906, 0.10538681684688517, 0.10599598919860126, 0.10660516155031735, 0.10721433390203346, 0.10782350625374955, 0.10843267860546565, 0.10904185095718176, 0.10965102330889787, 0.11026019566061396, 0.11086936801233005, 0.11147854036404616, 0.11208771271576225, 0.11269688506747835, 0.11330605741919444, 0.11391522977091054, 0.11452440212262666, 0.11513357447434275, 0.11574274682605885, 0.11635191917777495, 0.11696109152949105, 0.11757026388120714, 0.11817943623292324, 0.11878860858463934, 0.11939778093635543, 0.12000695328807155, 0.12061612563978764, 0.12122529799150375, 0.12183447034321984, 0.12244364269493593, 0.12305281504665204, 0.12366198739836813, 0.12427115975008424, 0.12488033210180033, 0.12548950445351645, 0.12609867680523254, 0.12670784915694863, 0.12731702150866472, 0.12792619386038084, 0.12853536621209694, 0.12914453856381303, 0.12975371091552915, 0.13036288326724524, 0.13097205561896133, 0.13158122797067742, 0.13219040032239354, 0.13279957267410963, 0.13340874502582573, 0.13401791737754182, 0.1346270897292579, 0.13523626208097403, 0.13584543443269012, 0.1364546067844062, 0.1370637791361223, 0.1376729514878384, 0.13828212383955452, 0.1388912961912706, 0.13950046854298673, 0.14010964089470282, 0.1407188132464189, 0.14132798559813503, 0.14193715794985112, 0.14254633030156721, 0.1431555026532833, 0.14376467500499943, 0.14437384735671552, 0.1449830197084316, 0.1455921920601477, 0.1462013644118638, 0.1468105367635799, 0.147419709115296, 0.1480288814670121, 0.1486380538187282, 0.14924722617044428, 0.1498563985221604, 0.15046557087387652, 0.1510747432255926, 0.1516839155773087, 0.1522930879290248, 0.15290226028074091, 0.153511432632457, 0.1541206049841731, 0.1547297773358892, 0.1553389496876053, 0.1559481220393214, 0.1565572943910375, 0.15716646674275359, 0.15777563909446968, 0.1583848114461858, 0.1589939837979019, 0.15960315614961798, 0.16021232850133407, 0.16082150085305016, 0.16143067320476628, 0.1620398455564824, 0.1626490179081985, 0.1632581902599146, 0.16386736261163068, 0.1644765349633468, 0.1650857073150629, 0.16569487966677898, 0.16630405201849507, 0.16691322437021117, 0.16752239672192729, 0.16813156907364338, 0.16874074142535947, 0.16934991377707556, 0.16995908612879168, 0.17056825848050777, 0.17117743083222386, 0.17178660318393996, 0.17239577553565605, 0.1730049478873722, 0.1736141202390883, 0.17422329259080438, 0.17483246494252047, 0.17544163729423656, 0.17605080964595268, 0.17665998199766877, 0.17726915434938487, 0.17787832670110096, 0.17848749905281705, 0.17909667140453317, 0.17970584375624926, 0.18031501610796535, 0.18092418845968145, 0.18153336081139756, 0.18214253316311366, 0.18275170551482975, 0.18336087786654584, 0.18397005021826196, 0.18457922256997808, 0.18518839492169417, 0.18579756727341026, 0.18640673962512636, 0.18701591197684245, 0.18762508432855857, 0.18823425668027466, 0.18884342903199075, 0.18945260138370684, 0.19006177373542293, 0.19067094608713905, 0.19128011843885515, 0.19188929079057124, 0.19249846314228733, 0.19310763549400345, 0.19371680784571954, 0.19432598019743563, 0.19493515254915175, 0.19554432490086784, 0.19615349725258396, 0.19676266960430006, 0.19737184195601615, 0.19798101430773224, 0.19859018665944833, 0.19919935901116445, 0.19980853136288054, 0.20041770371459663, 0.20102687606631273, 0.20163604841802882, 0.20224522076974494, 0.20285439312146103, 0.20346356547317712, 0.2040727378248932, 0.2046819101766093, 0.20529108252832542, 0.20590025488004152, 0.20650942723175764, 0.20711859958347373, 0.20772777193518985, 0.20833694428690594, 0.20894611663862203, 0.20955528899033812, 0.21016446134205422, 0.21077363369377033, 0.21138280604548643, 0.21199197839720252, 0.2126011507489186, 0.2132103231006347, 0.21381949545235082, 0.2144286678040669, 0.215037840155783, 0.2156470125074991, 0.2162561848592152, 0.2168653572109313, 0.21747452956264743, 0.21808370191436352, 0.2186928742660796, 0.21930204661779573, 0.21991121896951182, 0.22052039132122792, 0.221129563672944, 0.2217387360246601, 0.22234790837637622, 0.2229570807280923, 0.2235662530798084, 0.2241754254315245, 0.2247845977832406, 0.2253937701349567, 0.2260029424866728, 0.2266121148383889, 0.22722128719010498, 0.22783045954182107, 0.22843963189353722, 0.2290488042452533, 0.2296579765969694, 0.2302671489486855, 0.23087632130040162, 0.2314854936521177, 0.2320946660038338, 0.2327038383555499, 0.23331301070726598, 0.2339221830589821, 0.2345313554106982, 0.2351405277624143, 0.23574970011413038, 0.23635887246584647, 0.2369680448175626, 0.23757721716927868, 0.23818638952099477, 0.23879556187271087, 0.23940473422442696, 0.2400139065761431, 0.2406230789278592, 0.2412322512795753, 0.24184142363129138, 0.2424505959830075, 0.2430597683347236, 0.24366894068643968, 0.24427811303815578, 0.24488728538987187, 0.245496457741588, 0.24610563009330408, 0.24671480244502017, 0.24732397479673626, 0.24793314714845235, 0.24854231950016847, 0.24915149185188457, 0.24976066420360066, 0.25036983655531675, 0.2509790089070329, 0.251588181258749, 0.2521973536104651, 0.25280652596218117, 0.25341569831389726, 0.25402487066561336, 0.25463404301732945, 0.25524321536904554, 0.2558523877207617, 0.2564615600724778, 0.25707073242419387, 0.25767990477590996, 0.25828907712762605, 0.2588982494793422, 0.2595074218310583, 0.2601165941827744, 0.2607257665344905, 0.26133493888620657, 0.26194411123792266, 0.26255328358963875, 0.26316245594135484, 0.26377162829307094, 0.2643808006447871, 0.2649899729965032, 0.26559914534821927, 0.26620831769993536, 0.26681749005165145, 0.26742666240336754, 0.26803583475508364, 0.2686450071067997, 0.2692541794585158, 0.2698633518102319, 0.27047252416194806, 0.27108169651366415, 0.27169086886538024, 0.27230004121709633, 0.2729092135688124, 0.2735183859205285, 0.2741275582722446, 0.2747367306239607, 0.2753459029756768, 0.27595507532739294, 0.27656424767910903, 0.2771734200308251, 0.2777825923825412, 0.2783917647342573, 0.27900093708597345, 0.27961010943768955, 0.28021928178940564, 0.28082845414112173, 0.2814376264928378, 0.28204679884455397, 0.28265597119627006, 0.28326514354798615, 0.28387431589970225, 0.28448348825141834, 0.28509266060313443, 0.2857018329548505, 0.2863110053065666, 0.2869201776582827, 0.28752935000999885, 0.28813852236171494, 0.28874769471343104, 0.2893568670651471, 0.2899660394168632, 0.2905752117685793, 0.2911843841202954, 0.2917935564720115, 0.2924027288237276, 0.2930119011754437, 0.2936210735271598, 0.2942302458788759, 0.294839418230592, 0.2954485905823081, 0.2960577629340242, 0.2966669352857403, 0.2972761076374564, 0.29788527998917247, 0.29849445234088856, 0.2991036246926047, 0.2997127970443208, 0.3003219693960369, 0.30093114174775304, 0.30154031409946913, 0.3021494864511852, 0.3027586588029013, 0.3033678311546174, 0.3039770035063335])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_62634567068347988796b45e73d787b7.x = d3.scale.linear()
              .domain([0.0, 0.3039770035063335])
              .range([0, 400]);

    color_map_62634567068347988796b45e73d787b7.legend = L.control({position: 'topright'});
    color_map_62634567068347988796b45e73d787b7.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_62634567068347988796b45e73d787b7.legend.addTo(map_f45e60b943f14105a05c2c18f5d4fdf0);

    color_map_62634567068347988796b45e73d787b7.xAxis = d3.svg.axis()
        .scale(color_map_62634567068347988796b45e73d787b7.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.05066283391772225, 0.1013256678354445, 0.15198850175316675, 0.202651335670889, 0.25331416958861125, 0.3039770035063335]);

    color_map_62634567068347988796b45e73d787b7.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_62634567068347988796b45e73d787b7.g = color_map_62634567068347988796b45e73d787b7.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_62634567068347988796b45e73d787b7.g.selectAll("rect")
        .data(color_map_62634567068347988796b45e73d787b7.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_62634567068347988796b45e73d787b7.x(color_map_62634567068347988796b45e73d787b7.color.domain()[i - 1]) : color_map_62634567068347988796b45e73d787b7.x.range()[0],
            x1: i < color_map_62634567068347988796b45e73d787b7.color.domain().length ? color_map_62634567068347988796b45e73d787b7.x(color_map_62634567068347988796b45e73d787b7.color.domain()[i]) : color_map_62634567068347988796b45e73d787b7.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_62634567068347988796b45e73d787b7.g.call(color_map_62634567068347988796b45e73d787b7.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('02_50_TARCISIO MOTTA DE CARVALHO');

