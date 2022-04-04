    
            var map_5f2cafd13dea4d00bc2e5a1ab128f41e = L.map(
                "map_5f2cafd13dea4d00bc2e5a1ab128f41e",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_5e45abe9426d4d91b58a7c466df45e22 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_5f2cafd13dea4d00bc2e5a1ab128f41e);
        
    
            var choropleth_ad173d795f6e459aa3fc33d8e1dbfd8e = L.featureGroup(
                {}
            ).addTo(map_5f2cafd13dea4d00bc2e5a1ab128f41e);
        
    
        function geo_json_34836e74426f40048b6bd5402007cc1c_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 443: case 428: case 325: case 440: case 448: case 438: case 447: case 456: case 473: case 468: case 464: case 437: case 353: case 444: case 345: case 363: case 343: case 383: case 426: case 404: case 395: case 371: case 359: case 386: case 348: case 379: case 372: case 354: case 334: case 358: case 433: case 399: case 366: case 391: case 402: case 388: case 341: case 485: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 422: case 434: case 412: case 418: case 424: case 449: case 453: case 467: case 466: case 455: case 470: case 478: case 474: case 442: case 436: case 446: case 393: case 381: case 352: case 392: case 416: case 400: case 382: case 427: case 419: case 339: case 336: case 357: case 459: case 463: case 469: case 451: case 477: case 890: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 410: case 462: case 472: case 338: case 471: case 387: case 450: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 423: case 431: case 349: case 342: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 480: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_34836e74426f40048b6bd5402007cc1c_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_34836e74426f40048b6bd5402007cc1c = L.geoJson(null, {
                onEachFeature: geo_json_34836e74426f40048b6bd5402007cc1c_onEachFeature,
            
                style: geo_json_34836e74426f40048b6bd5402007cc1c_styler,
        });

        function geo_json_34836e74426f40048b6bd5402007cc1c_add (data) {
            geo_json_34836e74426f40048b6bd5402007cc1c
                .addData(data)
                .addTo(choropleth_ad173d795f6e459aa3fc33d8e1dbfd8e);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_34836e74426f40048b6bd5402007cc1c_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_6f04c429c5e34aefba1be98974fce759 = {};

    
    color_map_6f04c429c5e34aefba1be98974fce759.color = d3.scale.threshold()
              .domain([0.0, 0.0004882862171042593, 0.0009765724342085185, 0.0014648586513127779, 0.001953144868417037, 0.0024414310855212966, 0.0029297173026255558, 0.003418003519729815, 0.003906289736834074, 0.004394575953938333, 0.004882862171042593, 0.005371148388146852, 0.0058594346052511116, 0.006347720822355371, 0.00683600703945963, 0.00732429325656389, 0.007812579473668148, 0.008300865690772407, 0.008789151907876666, 0.009277438124980927, 0.009765724342085186, 0.010254010559189446, 0.010742296776293705, 0.011230582993397964, 0.011718869210502223, 0.012207155427606482, 0.012695441644710741, 0.013183727861815, 0.01367201407891926, 0.014160300296023519, 0.01464858651312778, 0.015136872730232039, 0.015625158947336296, 0.01611344516444056, 0.016601731381544815, 0.017090017598649077, 0.017578303815753333, 0.018066590032857596, 0.018554876249961855, 0.01904316246706611, 0.019531448684170373, 0.02001973490127463, 0.02050802111837889, 0.02099630733548315, 0.02148459355258741, 0.02197287976969167, 0.022461165986795928, 0.022949452203900187, 0.023437738421004446, 0.023926024638108705, 0.024414310855212965, 0.024902597072317224, 0.025390883289421483, 0.025879169506525742, 0.02636745572363, 0.026855741940734264, 0.02734402815783852, 0.027832314374942782, 0.028320600592047038, 0.028808886809151297, 0.02929717302625556, 0.029785459243359815, 0.030273745460464078, 0.030762031677568333, 0.03125031789467259, 0.031738604111776855, 0.03222689032888112, 0.032715176545985374, 0.03320346276308963, 0.033691748980193885, 0.034180035197298154, 0.03466832141440241, 0.035156607631506666, 0.03564489384861093, 0.03613318006571519, 0.03662146628281945, 0.03710975249992371, 0.037598038717027965, 0.03808632493413222, 0.03857461115123648, 0.039062897368340746, 0.039551183585445, 0.04003946980254926, 0.04052775601965353, 0.04101604223675778, 0.04150432845386204, 0.0419926146709663, 0.042480900888070564, 0.04296918710517482, 0.043457473322279075, 0.04394575953938334, 0.04443404575648759, 0.044922331973591856, 0.04541061819069612, 0.045898904407800374, 0.04638719062490463, 0.04687547684200889, 0.047363763059113155, 0.04785204927621741, 0.048340335493321666, 0.04882862171042593, 0.04931690792753019, 0.04980519414463445, 0.05029348036173871, 0.050781766578842966, 0.05127005279594723, 0.051758339013051484, 0.05224662523015575, 0.05273491144726, 0.05322319766436426, 0.05371148388146853, 0.05419977009857278, 0.05468805631567704, 0.0551763425327813, 0.055664628749885564, 0.05615291496698982, 0.056641201184094075, 0.05712948740119834, 0.057617773618302594, 0.058106059835406856, 0.05859434605251112, 0.059082632269615375, 0.05957091848671963, 0.0600592047038239, 0.060547490920928156, 0.06103577713803241, 0.06152406335513667, 0.06201234957224093, 0.06250063578934519, 0.06298892200644944, 0.06347720822355371, 0.06396549444065797, 0.06445378065776224, 0.06494206687486649, 0.06543035309197075, 0.065918639309075, 0.06640692552617926, 0.06689521174328351, 0.06738349796038777, 0.06787178417749205, 0.06836007039459631, 0.06884835661170056, 0.06933664282880482, 0.06982492904590908, 0.07031321526301333, 0.0708015014801176, 0.07128978769722186, 0.07177807391432611, 0.07226636013143038, 0.07275464634853464, 0.0732429325656389, 0.07373121878274315, 0.07421950499984742, 0.07470779121695167, 0.07519607743405593, 0.07568436365116019, 0.07617264986826444, 0.07666093608536871, 0.07714922230247297, 0.07763750851957724, 0.07812579473668149, 0.07861408095378575, 0.07910236717089, 0.07959065338799426, 0.08007893960509851, 0.08056722582220277, 0.08105551203930705, 0.08154379825641131, 0.08203208447351557, 0.08252037069061982, 0.08300865690772408, 0.08349694312482833, 0.0839852293419326, 0.08447351555903686, 0.08496180177614113, 0.08545008799324538, 0.08593837421034964, 0.0864266604274539, 0.08691494664455815, 0.08740323286166242, 0.08789151907876668, 0.08837980529587093, 0.08886809151297519, 0.08935637773007946, 0.08984466394718371, 0.09033295016428797, 0.09082123638139224, 0.09130952259849649, 0.09179780881560075, 0.092286095032705, 0.09277438124980926, 0.09326266746691352, 0.09375095368401778, 0.09423923990112205, 0.09472752611822631, 0.09521581233533057, 0.09570409855243482, 0.09619238476953908, 0.09668067098664333, 0.0971689572037476, 0.09765724342085186, 0.09814552963795613, 0.09863381585506038, 0.09912210207216464, 0.0996103882892689, 0.10009867450637315, 0.10058696072347742, 0.10107524694058168, 0.10156353315768593, 0.10205181937479019, 0.10254010559189446, 0.10302839180899871, 0.10351667802610297, 0.10400496424320724, 0.1044932504603115, 0.10498153667741575, 0.10546982289452, 0.10595810911162426, 0.10644639532872852, 0.1069346815458328, 0.10742296776293705, 0.10791125398004131, 0.10839954019714557, 0.10888782641424982, 0.10937611263135408, 0.10986439884845833, 0.1103526850655626, 0.11084097128266686, 0.11132925749977113, 0.11181754371687538, 0.11230582993397964, 0.1127941161510839, 0.11328240236818815, 0.11377068858529242, 0.11425897480239668, 0.11474726101950093, 0.11523554723660519, 0.11572383345370946, 0.11621211967081371, 0.11670040588791797, 0.11718869210502224, 0.1176769783221265, 0.11816526453923075, 0.118653550756335, 0.11914183697343926, 0.11963012319054352, 0.1201184094076478, 0.12060669562475206, 0.12109498184185631, 0.12158326805896057, 0.12207155427606482, 0.12255984049316908, 0.12304812671027333, 0.1235364129273776, 0.12402469914448186, 0.12451298536158613, 0.12500127157869037, 0.12548955779579463, 0.12597784401289888, 0.12646613023000317, 0.12695441644710742, 0.12744270266421168, 0.12793098888131593, 0.1284192750984202, 0.12890756131552447, 0.1293958475326287, 0.12988413374973298, 0.1303724199668372, 0.1308607061839415, 0.13134899240104575, 0.13183727861815, 0.1323255648352543, 0.13281385105235852, 0.1333021372694628, 0.13379042348656703, 0.1342787097036713, 0.13476699592077554, 0.13525528213787982, 0.1357435683549841, 0.13623185457208833, 0.13672014078919262, 0.13720842700629685, 0.13769671322340113, 0.13818499944050538, 0.13867328565760964, 0.1391615718747139, 0.13964985809181815, 0.14013814430892244, 0.14062643052602666, 0.14111471674313095, 0.1416030029602352, 0.14209128917733946, 0.1425795753944437, 0.14306786161154797, 0.14355614782865223, 0.14404443404575648, 0.14453272026286076, 0.14502100647996502, 0.14550929269706928, 0.14599757891417353, 0.1464858651312778, 0.14697415134838204, 0.1474624375654863, 0.14795072378259055, 0.14843900999969484, 0.1489272962167991, 0.14941558243390335, 0.1499038686510076, 0.15039215486811186, 0.15088044108521612, 0.15136872730232037, 0.15185701351942466, 0.15234529973652888, 0.15283358595363317, 0.15332187217073742, 0.15381015838784168, 0.15429844460494593, 0.1547867308220502, 0.15527501703915447, 0.1557633032562587, 0.15625158947336298, 0.1567398756904672, 0.1572281619075715, 0.15771644812467575, 0.15820473434178, 0.1586930205588843, 0.15918130677598852, 0.1596695929930928, 0.16015787921019703, 0.1606461654273013, 0.16113445164440554, 0.16162273786150982, 0.1621110240786141, 0.16259931029571834, 0.16308759651282262, 0.16357588272992685, 0.16406416894703113, 0.16455245516413539, 0.16504074138123964, 0.16552902759834393, 0.16601731381544815, 0.16650560003255244, 0.16699388624965666, 0.16748217246676095, 0.1679704586838652, 0.16845874490096946, 0.16894703111807371, 0.16943531733517797, 0.16992360355228225, 0.17041188976938648, 0.17090017598649077, 0.17138846220359502, 0.17187674842069928, 0.17236503463780353, 0.1728533208549078, 0.17334160707201204, 0.1738298932891163, 0.17431817950622058, 0.17480646572332484, 0.1752947519404291, 0.17578303815753335, 0.1762713243746376, 0.17675961059174186, 0.17724789680884612, 0.17773618302595037, 0.17822446924305466, 0.1787127554601589, 0.17920104167726317, 0.17968932789436742, 0.18017761411147168, 0.18066590032857593, 0.1811541865456802, 0.18164247276278447, 0.1821307589798887, 0.18261904519699299, 0.18310733141409724, 0.1835956176312015, 0.18408390384830575, 0.18457219006541, 0.1850604762825143, 0.18554876249961852, 0.1860370487167228, 0.18652533493382703, 0.18701362115093131, 0.18750190736803557, 0.18799019358513983, 0.1884784798022441, 0.18896676601934834, 0.18945505223645262, 0.18994333845355685, 0.19043162467066113, 0.1909199108877654, 0.19140819710486964, 0.19189648332197393, 0.19238476953907815, 0.19287305575618244, 0.19336134197328667, 0.19384962819039095, 0.1943379144074952, 0.19482620062459946, 0.19531448684170372, 0.19580277305880797, 0.19629105927591226, 0.19677934549301648, 0.19726763171012077, 0.19775591792722502, 0.19824420414432928, 0.19873249036143353, 0.1992207765785378, 0.19970906279564204, 0.2001973490127463, 0.20068563522985058, 0.20117392144695484, 0.2016622076640591, 0.20215049388116335, 0.2026387800982676, 0.20312706631537186, 0.20361535253247612, 0.20410363874958037, 0.20459192496668466, 0.2050802111837889, 0.20556849740089317, 0.20605678361799742, 0.20654506983510168, 0.20703335605220594, 0.2075216422693102, 0.20800992848641447, 0.2084982147035187, 0.208986500920623, 0.20947478713772724, 0.2099630733548315, 0.21045135957193575, 0.21093964578904, 0.2114279320061443, 0.21191621822324852, 0.2124045044403528, 0.21289279065745703, 0.21338107687456132, 0.2138693630916656, 0.21435764930876983, 0.2148459355258741, 0.21533422174297834, 0.21582250796008262, 0.21631079417718685, 0.21679908039429113, 0.2172873666113954, 0.21777565282849964, 0.21826393904560393, 0.21875222526270816, 0.21924051147981244, 0.21972879769691667, 0.22021708391402095, 0.2207053701311252, 0.22119365634822946, 0.22168194256533372, 0.22217022878243797, 0.22265851499954226, 0.22314680121664648, 0.22363508743375077, 0.22412337365085502, 0.22461165986795928, 0.22509994608506353, 0.2255882323021678, 0.22607651851927205, 0.2265648047363763, 0.22705309095348059, 0.22754137717058484, 0.2280296633876891, 0.22851794960479335, 0.2290062358218976, 0.22949452203900186, 0.22998280825610612, 0.23047109447321038, 0.23095938069031466, 0.23144766690741891, 0.23193595312452317, 0.23242423934162743, 0.23291252555873168, 0.23340081177583594, 0.2338890979929402, 0.23437738421004448, 0.2348656704271487, 0.235353956644253, 0.23584224286135724, 0.2363305290784615, 0.23681881529556575, 0.23730710151267, 0.2377953877297743, 0.23828367394687852, 0.2387719601639828, 0.23926024638108703, 0.23974853259819132, 0.2402368188152956, 0.24072510503239983, 0.2412133912495041, 0.24170167746660834, 0.24218996368371262, 0.24267824990081685, 0.24316653611792113, 0.2436548223350254])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_6f04c429c5e34aefba1be98974fce759.x = d3.scale.linear()
              .domain([0.0, 0.2436548223350254])
              .range([0, 400]);

    color_map_6f04c429c5e34aefba1be98974fce759.legend = L.control({position: 'topright'});
    color_map_6f04c429c5e34aefba1be98974fce759.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_6f04c429c5e34aefba1be98974fce759.legend.addTo(map_5f2cafd13dea4d00bc2e5a1ab128f41e);

    color_map_6f04c429c5e34aefba1be98974fce759.xAxis = d3.svg.axis()
        .scale(color_map_6f04c429c5e34aefba1be98974fce759.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.04060913705583757, 0.08121827411167513, 0.1218274111675127, 0.16243654822335027, 0.20304568527918784, 0.2436548223350254]);

    color_map_6f04c429c5e34aefba1be98974fce759.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_6f04c429c5e34aefba1be98974fce759.g = color_map_6f04c429c5e34aefba1be98974fce759.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_6f04c429c5e34aefba1be98974fce759.g.selectAll("rect")
        .data(color_map_6f04c429c5e34aefba1be98974fce759.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_6f04c429c5e34aefba1be98974fce759.x(color_map_6f04c429c5e34aefba1be98974fce759.color.domain()[i - 1]) : color_map_6f04c429c5e34aefba1be98974fce759.x.range()[0],
            x1: i < color_map_6f04c429c5e34aefba1be98974fce759.color.domain().length ? color_map_6f04c429c5e34aefba1be98974fce759.x(color_map_6f04c429c5e34aefba1be98974fce759.color.domain()[i]) : color_map_6f04c429c5e34aefba1be98974fce759.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_6f04c429c5e34aefba1be98974fce759.g.call(color_map_6f04c429c5e34aefba1be98974fce759.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('');

