    
            var map_763b3325d1594fd89e0250926db00c4b = L.map(
                "map_763b3325d1594fd89e0250926db00c4b",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_27c71c358cfb4339aef3974188725862 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_763b3325d1594fd89e0250926db00c4b);
        
    
            var choropleth_ab742c2e46ac491eb4799f79afa1049f = L.featureGroup(
                {}
            ).addTo(map_763b3325d1594fd89e0250926db00c4b);
        
    
        function geo_json_73e54c324c90444197871b7df07e738b_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 424: case 466: case 478: case 436: case 446: case 426: case 419: case 415: case 408: case 411: case 339: case 367: case 459: case 433: case 445: case 471: case 477: case 402: case 485: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 448: case 438: case 447: case 456: case 467: case 473: case 455: case 472: case 470: case 442: case 437: case 444: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 468: case 464: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 453: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 462: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_73e54c324c90444197871b7df07e738b_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_73e54c324c90444197871b7df07e738b = L.geoJson(null, {
                onEachFeature: geo_json_73e54c324c90444197871b7df07e738b_onEachFeature,
            
                style: geo_json_73e54c324c90444197871b7df07e738b_styler,
        });

        function geo_json_73e54c324c90444197871b7df07e738b_add (data) {
            geo_json_73e54c324c90444197871b7df07e738b
                .addData(data)
                .addTo(choropleth_ab742c2e46ac491eb4799f79afa1049f);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_73e54c324c90444197871b7df07e738b_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_662adb659da0499fbbdca68fc4368fd5 = {};

    
    color_map_662adb659da0499fbbdca68fc4368fd5.color = d3.scale.threshold()
              .domain([0.000754906894816306, 0.0008605468444739142, 0.0009661867941315224, 0.0010718267437891307, 0.001177466693446739, 0.0012831066431043471, 0.0013887465927619551, 0.0014943865424195636, 0.0016000264920771716, 0.00170566644173478, 0.001811306391392388, 0.0019169463410499965, 0.0020225862907076045, 0.002128226240365213, 0.002233866190022821, 0.0023395061396804294, 0.0024451460893380374, 0.0025507860389956455, 0.002656425988653254, 0.0027620659383108623, 0.0028677058879684704, 0.0029733458376260784, 0.0030789857872836873, 0.0031846257369412953, 0.0032902656865989033, 0.0033959056362565113, 0.00350154558591412, 0.0036071855355717273, 0.003712825485229336, 0.0038184654348869442, 0.003924105384544553, 0.00402974533420216, 0.004135385283859769, 0.004241025233517377, 0.004346665183174985, 0.004452305132832593, 0.004557945082490202, 0.00466358503214781, 0.004769224981805418, 0.004874864931463027, 0.004980504881120634, 0.005086144830778242, 0.005191784780435851, 0.005297424730093459, 0.005403064679751068, 0.005508704629408676, 0.005614344579066284, 0.005719984528723892, 0.0058256244783815, 0.005931264428039108, 0.006036904377696717, 0.006142544327354325, 0.006248184277011934, 0.006353824226669542, 0.006459464176327149, 0.006565104125984758, 0.006670744075642366, 0.006776384025299974, 0.006882023974957583, 0.006987663924615191, 0.0070933038742728, 0.007198943823930407, 0.007304583773588015, 0.007410223723245624, 0.007515863672903232, 0.00762150362256084, 0.0077271435722184485, 0.007832783521876057, 0.007938423471533665, 0.008044063421191273, 0.00814970337084888, 0.00825534332050649, 0.008360983270164098, 0.008466623219821705, 0.008572263169479314, 0.008677903119136922, 0.00878354306879453, 0.00888918301845214, 0.008994822968109748, 0.009100462917767354, 0.009206102867424962, 0.009311742817082571, 0.009417382766740178, 0.009523022716397787, 0.009628662666055396, 0.009734302615713003, 0.009839942565370612, 0.009945582515028221, 0.01005122246468583, 0.010156862414343437, 0.010262502364001046, 0.010368142313658655, 0.010473782263316262, 0.01057942221297387, 0.010685062162631478, 0.010790702112289085, 0.010896342061946694, 0.011001982011604303, 0.01110762196126191, 0.011213261910919519, 0.011318901860577128, 0.011424541810234735, 0.011530181759892344, 0.011635821709549953, 0.011741461659207562, 0.011847101608865169, 0.011952741558522778, 0.012058381508180385, 0.012164021457837992, 0.012269661407495601, 0.01237530135715321, 0.012480941306810817, 0.012586581256468426, 0.012692221206126035, 0.012797861155783642, 0.01290350110544125, 0.01300914105509886, 0.013114781004756467, 0.013220420954414076, 0.013326060904071685, 0.013431700853729293, 0.013537340803386899, 0.013642980753044508, 0.013748620702702117, 0.013854260652359724, 0.013959900602017333, 0.014065540551674941, 0.014171180501332549, 0.014276820450990158, 0.014382460400647766, 0.014488100350305374, 0.014593740299962982, 0.014699380249620591, 0.014805020199278198, 0.014910660148935807, 0.015016300098593416, 0.015121940048251022, 0.01522757999790863, 0.01533321994756624, 0.015438859897223848, 0.015544499846881455, 0.015650139796539064, 0.015755779746196675, 0.015861419695854282, 0.01596705964551189, 0.0160726995951695, 0.016178339544827107, 0.016283979494484714, 0.016389619444142325, 0.016495259393799932, 0.01660089934345754, 0.016706539293115146, 0.016812179242772757, 0.016917819192430367, 0.017023459142087975, 0.01712909909174558, 0.017234739041403192, 0.017340378991060796, 0.017446018940718403, 0.017551658890376014, 0.01765729884003362, 0.017762938789691228, 0.01786857873934884, 0.017974218689006446, 0.018079858638664053, 0.018185498588321664, 0.01829113853797927, 0.018396778487636878, 0.01850241843729449, 0.018608058386952096, 0.018713698336609703, 0.018819338286267313, 0.01892497823592492, 0.019030618185582528, 0.01913625813524014, 0.019241898084897745, 0.019347538034555356, 0.019453177984212963, 0.01955881793387057, 0.01966445788352818, 0.019770097833185788, 0.019875737782843395, 0.019981377732501006, 0.020087017682158613, 0.02019265763181622, 0.020298297581473827, 0.020403937531131434, 0.02050957748078904, 0.020615217430446652, 0.02072085738010426, 0.020826497329761866, 0.020932137279419477, 0.021037777229077084, 0.02114341717873469, 0.021249057128392302, 0.02135469707804991, 0.021460337027707516, 0.021565976977365127, 0.021671616927022734, 0.02177725687668034, 0.021882896826337952, 0.02198853677599556, 0.022094176725653166, 0.022199816675310777, 0.022305456624968384, 0.02241109657462599, 0.0225167365242836, 0.02262237647394121, 0.02272801642359882, 0.022833656373256427, 0.022939296322914034, 0.023044936272571644, 0.02315057622222925, 0.02325621617188686, 0.023361856121544466, 0.023467496071202073, 0.02357313602085968, 0.02367877597051729, 0.023784415920174898, 0.023890055869832505, 0.023995695819490116, 0.024101335769147723, 0.02420697571880533, 0.02431261566846294, 0.024418255618120548, 0.024523895567778155, 0.024629535517435765, 0.024735175467093373, 0.02484081541675098, 0.02494645536640859, 0.025052095316066197, 0.025157735265723805, 0.025263375215381415, 0.025369015165039022, 0.02547465511469663, 0.02558029506435424, 0.025685935014011847, 0.025791574963669454, 0.025897214913327065, 0.026002854862984672, 0.026108494812642283, 0.02621413476229989, 0.026319774711957494, 0.026425414661615104, 0.02653105461127271, 0.02663669456093032, 0.02674233451058793, 0.026847974460245536, 0.026953614409903143, 0.027059254359560754, 0.02716489430921836, 0.02727053425887597, 0.02737617420853358, 0.027481814158191186, 0.027587454107848793, 0.027693094057506404, 0.02779873400716401, 0.027904373956821618, 0.02801001390647923, 0.028115653856136836, 0.028221293805794443, 0.028326933755452054, 0.02843257370510966, 0.028538213654767268, 0.02864385360442488, 0.028749493554082486, 0.028855133503740093, 0.028960773453397703, 0.02906641340305531, 0.029172053352712918, 0.02927769330237053, 0.029383333252028132, 0.02948897320168574, 0.02959461315134335, 0.029700253101000957, 0.029805893050658568, 0.029911533000316175, 0.030017172949973782, 0.030122812899631392, 0.030228452849289, 0.030334092798946607, 0.030439732748604217, 0.030545372698261825, 0.03065101264791943, 0.030756652597577042, 0.03086229254723465, 0.030967932496892257, 0.031073572446549867, 0.031179212396207474, 0.03128485234586508, 0.03139049229552269, 0.031496132245180296, 0.0316017721948379, 0.03170741214449552, 0.031813052094153124, 0.03191869204381073, 0.03202433199346834, 0.032129971943125946, 0.03223561189278355, 0.03234125184244116, 0.03244689179209877, 0.032552531741756374, 0.03265817169141398, 0.032763811641071595, 0.0328694515907292, 0.03297509154038681, 0.033080731490044424, 0.033186371439702024, 0.03329201138935964, 0.033397651339017245, 0.03350329128867485, 0.03360893123833246, 0.033714571187990074, 0.033820211137647674, 0.03392585108730528, 0.034031491036962895, 0.034137130986620495, 0.03424277093627811, 0.034348410885935717, 0.034454050835593324, 0.03455969078525093, 0.034665330734908545, 0.034770970684566145, 0.03487661063422376, 0.034982250583881366, 0.035087890533538973, 0.03519353048319658, 0.035299170432854195, 0.035404810382511795, 0.03551045033216941, 0.035616090281827016, 0.03572173023148462, 0.03582737018114223, 0.035933010130799845, 0.036038650080457445, 0.03614429003011506, 0.036249929979772666, 0.03635556992943027, 0.03646120987908788, 0.036566849828745494, 0.036672489778403095, 0.03677812972806071, 0.036883769677718316, 0.036989409627375916, 0.03709504957703353, 0.03720068952669114, 0.037306329476348744, 0.03741196942600635, 0.037517609375663966, 0.037623249325321566, 0.03772888927497918, 0.03783452922463679, 0.0379401691742944, 0.038045809123952, 0.038151449073609615, 0.03825708902326722, 0.03836272897292483, 0.03846836892258244, 0.03857400887224005, 0.03867964882189765, 0.038785288771555265, 0.03889092872121287, 0.03899656867087048, 0.03910220862052809, 0.0392078485701857, 0.0393134885198433, 0.039419128469500915, 0.03952476841915852, 0.03963040836881613, 0.039736048318473736, 0.039841688268131344, 0.03994732821778895, 0.04005296816744656, 0.04015860811710417, 0.04026424806676177, 0.040369888016419386, 0.04047552796607699, 0.0405811679157346, 0.04068680786539221, 0.04079244781504982, 0.04089808776470742, 0.041003727714365036, 0.04110936766402264, 0.04121500761368025, 0.04132064756333786, 0.04142628751299547, 0.04153192746265307, 0.041637567412310686, 0.04174320736196829, 0.0418488473116259, 0.04195448726128351, 0.04206012721094112, 0.04216576716059872, 0.042271407110256336, 0.04237704705991394, 0.04248268700957155, 0.04258832695922916, 0.04269396690888677, 0.04279960685854437, 0.04290524680820198, 0.04301088675785959, 0.04311652670751719, 0.04322216665717481, 0.043327806606832414, 0.04343344655649002, 0.04353908650614763, 0.04364472645580524, 0.04375036640546284, 0.04385600635512046, 0.043961646304778064, 0.04406728625443567, 0.04417292620409328, 0.04427856615375089, 0.04438420610340849, 0.04448984605306611, 0.044595486002723714, 0.04470112595238133, 0.04480676590203893, 0.04491240585169654, 0.04501804580135415, 0.045123685751011756, 0.045229325700669364, 0.04533496565032698, 0.04544060559998458, 0.04554624554964219, 0.0456518854992998, 0.045757525448957406, 0.04586316539861501, 0.04596880534827262, 0.04607444529793023, 0.046180085247587835, 0.04628572519724545, 0.04639136514690305, 0.04649700509656066, 0.04660264504621827, 0.04670828499587588, 0.046813924945533485, 0.0469195648951911, 0.0470252048448487, 0.04713084479450631, 0.04723648474416392, 0.04734212469382153, 0.047447764643479134, 0.04755340459313675, 0.04765904454279435, 0.04776468449245196, 0.04787032444210957, 0.04797596439176718, 0.048081604341424784, 0.0481872442910824, 0.04829288424074, 0.04839852419039761, 0.04850416414005522, 0.04860980408971283, 0.048715444039370434, 0.04882108398902805, 0.04892672393868565, 0.049032363888343256, 0.04913800383800087, 0.04924364378765847, 0.049349283737316084, 0.04945492368697369, 0.0495605636366313, 0.049666203586288905, 0.04977184353594652, 0.04987748348560412, 0.049983123435261734, 0.05008876338491934, 0.05019440333457695, 0.050300043284234555, 0.05040568323389217, 0.05051132318354977, 0.050616963133207384, 0.05072260308286499, 0.0508282430325226, 0.050933882982180205, 0.05103952293183782, 0.05114516288149542, 0.05125080283115303, 0.05135644278081064, 0.051462082730468255, 0.051567722680125855, 0.05167336262978347, 0.051779002579441076, 0.051884642529098676, 0.05199028247875629, 0.0520959224284139, 0.052201562378071505, 0.05230720232772911, 0.052412842277386726, 0.052518482227044326, 0.05262412217670194, 0.05272976212635955, 0.052835402076017154, 0.05294104202567476, 0.053046681975332376, 0.053152321924989976, 0.05325796187464759, 0.0533636018243052, 0.053469241773962804])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_662adb659da0499fbbdca68fc4368fd5.x = d3.scale.linear()
              .domain([0.000754906894816306, 0.053469241773962804])
              .range([0, 400]);

    color_map_662adb659da0499fbbdca68fc4368fd5.legend = L.control({position: 'topright'});
    color_map_662adb659da0499fbbdca68fc4368fd5.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_662adb659da0499fbbdca68fc4368fd5.legend.addTo(map_763b3325d1594fd89e0250926db00c4b);

    color_map_662adb659da0499fbbdca68fc4368fd5.xAxis = d3.svg.axis()
        .scale(color_map_662adb659da0499fbbdca68fc4368fd5.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.000754906894816306, 0.009540629374674056, 0.018326351854531808, 0.027112074334389558, 0.035897796814247304, 0.04468351929410505, 0.053469241773962804]);

    color_map_662adb659da0499fbbdca68fc4368fd5.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_662adb659da0499fbbdca68fc4368fd5.g = color_map_662adb659da0499fbbdca68fc4368fd5.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_662adb659da0499fbbdca68fc4368fd5.g.selectAll("rect")
        .data(color_map_662adb659da0499fbbdca68fc4368fd5.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_662adb659da0499fbbdca68fc4368fd5.x(color_map_662adb659da0499fbbdca68fc4368fd5.color.domain()[i - 1]) : color_map_662adb659da0499fbbdca68fc4368fd5.x.range()[0],
            x1: i < color_map_662adb659da0499fbbdca68fc4368fd5.color.domain().length ? color_map_662adb659da0499fbbdca68fc4368fd5.x(color_map_662adb659da0499fbbdca68fc4368fd5.color.domain()[i]) : color_map_662adb659da0499fbbdca68fc4368fd5.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_662adb659da0499fbbdca68fc4368fd5.g.call(color_map_662adb659da0499fbbdca68fc4368fd5.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('09_50_MONICA SANTOS FRANCISCO');

