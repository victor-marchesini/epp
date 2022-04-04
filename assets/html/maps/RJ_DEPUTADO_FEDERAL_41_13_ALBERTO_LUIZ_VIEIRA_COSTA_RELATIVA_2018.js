    
            var map_a6aea173dab6416f855c5dc2075ae0cd = L.map(
                "map_a6aea173dab6416f855c5dc2075ae0cd",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_1496de2f90f444148307eeb0ce878272 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_a6aea173dab6416f855c5dc2075ae0cd);
        
    
            var choropleth_c6268268037b4c77b0028b19db584dfb = L.featureGroup(
                {}
            ).addTo(map_a6aea173dab6416f855c5dc2075ae0cd);
        
    
        function geo_json_f281cc9e10334d089aa4cc7efe055776_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 422: case 441: case 325: case 447: case 478: case 435: case 426: case 416: case 358: case 328: case 367: case 485: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 443: case 428: case 438: case 353: case 393: case 423: case 431: case 404: case 359: case 348: case 354: case 349: case 342: case 336: case 460: case 475: case 357: case 481: case 479: case 366: case 451: case 402: case 341: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 381: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_f281cc9e10334d089aa4cc7efe055776_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_f281cc9e10334d089aa4cc7efe055776 = L.geoJson(null, {
                onEachFeature: geo_json_f281cc9e10334d089aa4cc7efe055776_onEachFeature,
            
                style: geo_json_f281cc9e10334d089aa4cc7efe055776_styler,
        });

        function geo_json_f281cc9e10334d089aa4cc7efe055776_add (data) {
            geo_json_f281cc9e10334d089aa4cc7efe055776
                .addData(data)
                .addTo(choropleth_c6268268037b4c77b0028b19db584dfb);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_f281cc9e10334d089aa4cc7efe055776_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_7fcf2b308315427985b6eb630455492b = {};

    
    color_map_7fcf2b308315427985b6eb630455492b.color = d3.scale.threshold()
              .domain([0.0, 9.016690055463347e-06, 1.8033380110926694e-05, 2.7050070166390043e-05, 3.606676022185339e-05, 4.5083450277316736e-05, 5.4100140332780085e-05, 6.311683038824343e-05, 7.213352044370678e-05, 8.115021049917013e-05, 9.016690055463347e-05, 9.918359061009681e-05, 0.00010820028066556017, 0.00011721697072102351, 0.00012623366077648687, 0.0001352503508319502, 0.00014426704088741355, 0.0001532837309428769, 0.00016230042099834026, 0.0001713171110538036, 0.00018033380110926695, 0.0001893504911647303, 0.00019836718122019363, 0.00020738387127565699, 0.00021640056133112034, 0.0002254172513865837, 0.00023443394144204702, 0.00024345063149751035, 0.00025246732155297374, 0.00026148401160843706, 0.0002705007016639004, 0.0002795173917193638, 0.0002885340817748271, 0.0002975507718302905, 0.0003065674618857538, 0.00031558415194121714, 0.0003246008419966805, 0.00033361753205214385, 0.0003426342221076072, 0.0003516509121630705, 0.0003606676022185339, 0.0003696842922739973, 0.0003787009823294606, 0.00038771767238492393, 0.00039673436244038726, 0.00040575105249585064, 0.00041476774255131397, 0.0004237844326067773, 0.0004328011226622407, 0.000441817812717704, 0.0004508345027731674, 0.0004598511928286307, 0.00046886788288409405, 0.00047788457293955743, 0.0004869012629950207, 0.000495917953050484, 0.0005049346431059475, 0.0005139513331614108, 0.0005229680232168741, 0.0005319847132723375, 0.0005410014033278008, 0.0005500180933832642, 0.0005590347834387275, 0.0005680514734941909, 0.0005770681635496542, 0.0005860848536051175, 0.000595101543660581, 0.0006041182337160443, 0.0006131349237715076, 0.000622151613826971, 0.0006311683038824343, 0.0006401849939378977, 0.000649201683993361, 0.0006582183740488243, 0.0006672350641042877, 0.000676251754159751, 0.0006852684442152144, 0.0006942851342706778, 0.000703301824326141, 0.0007123185143816045, 0.0007213352044370678, 0.0007303518944925311, 0.0007393685845479945, 0.0007483852746034578, 0.0007574019646589212, 0.0007664186547143845, 0.0007754353447698479, 0.0007844520348253113, 0.0007934687248807745, 0.0008024854149362378, 0.0008115021049917013, 0.0008205187950471646, 0.0008295354851026279, 0.0008385521751580913, 0.0008475688652135546, 0.000856585555269018, 0.0008656022453244814, 0.0008746189353799447, 0.000883635625435408, 0.0008926523154908713, 0.0009016690055463348, 0.0009106856956017981, 0.0009197023856572614, 0.0009287190757127248, 0.0009377357657681881, 0.0009467524558236514, 0.0009557691458791149, 0.0009647858359345782, 0.0009738025259900414, 0.0009828192160455048, 0.000991835906100968, 0.0010008525961564315, 0.001009869286211895, 0.0010188859762673582, 0.0010279026663228216, 0.001036919356378285, 0.0010459360464337483, 0.0010549527364892117, 0.001063969426544675, 0.0010729861166001383, 0.0010820028066556016, 0.001091019496711065, 0.0011000361867665284, 0.0011090528768219917, 0.001118069566877455, 0.0011270862569329183, 0.0011361029469883818, 0.0011451196370438452, 0.0011541363270993084, 0.0011631530171547718, 0.001172169707210235, 0.0011811863972656985, 0.001190203087321162, 0.0011992197773766252, 0.0012082364674320886, 0.0012172531574875518, 0.0012262698475430153, 0.0012352865375984787, 0.001244303227653942, 0.0012533199177094053, 0.0012623366077648686, 0.0012713532978203318, 0.0012803699878757954, 0.0012893866779312587, 0.001298403367986722, 0.0013074200580421853, 0.0013164367480976485, 0.0013254534381531122, 0.0013344701282085754, 0.0013434868182640388, 0.001352503508319502, 0.0013615201983749653, 0.0013705368884304287, 0.0013795535784858922, 0.0013885702685413556, 0.0013975869585968188, 0.001406603648652282, 0.0014156203387077455, 0.001424637028763209, 0.0014336537188186723, 0.0014426704088741356, 0.0014516870989295988, 0.0014607037889850622, 0.0014697204790405257, 0.001478737169095989, 0.0014877538591514523, 0.0014967705492069155, 0.001505787239262379, 0.0015148039293178424, 0.0015238206193733058, 0.001532837309428769, 0.0015418539994842323, 0.0015508706895396957, 0.001559887379595159, 0.0015689040696506226, 0.0015779207597060858, 0.001586937449761549, 0.0015959541398170125, 0.0016049708298724757, 0.0016139875199279393, 0.0016230042099834026, 0.0016320209000388658, 0.0016410375900943292, 0.0016500542801497924, 0.0016590709702052559, 0.0016680876602607193, 0.0016771043503161825, 0.001686121040371646, 0.0016951377304271092, 0.0017041544204825726, 0.001713171110538036, 0.0017221878005934993, 0.0017312044906489627, 0.001740221180704426, 0.0017492378707598894, 0.0017582545608153528, 0.001767271250870816, 0.0017762879409262795, 0.0017853046309817427, 0.0017943213210372061, 0.0018033380110926696, 0.0018123547011481328, 0.0018213713912035962, 0.0018303880812590594, 0.0018394047713145229, 0.001848421461369986, 0.0018574381514254495, 0.001866454841480913, 0.0018754715315363762, 0.0018844882215918396, 0.0018935049116473029, 0.0019025216017027663, 0.0019115382917582297, 0.001920554981813693, 0.0019295716718691564, 0.0019385883619246196, 0.0019476050519800828, 0.0019566217420355463, 0.0019656384320910097, 0.001974655122146473, 0.001983671812201936, 0.0019926885022573996, 0.002001705192312863, 0.0020107218823683264, 0.00201973857242379, 0.002028755262479253, 0.0020377719525347163, 0.0020467886425901798, 0.002055805332645643, 0.002064822022701106, 0.00207383871275657, 0.0020828554028120335, 0.0020918720928674965, 0.00210088878292296, 0.0021099054729784234, 0.0021189221630338864, 0.00212793885308935, 0.0021369555431448133, 0.0021459722332002767, 0.0021549889232557397, 0.002164005613311203, 0.002173022303366667, 0.00218203899342213, 0.0021910556834775934, 0.002200072373533057, 0.00220908906358852, 0.0022181057536439833, 0.0022271224436994468, 0.00223613913375491, 0.002245155823810373, 0.0022541725138658366, 0.0022631892039213005, 0.0022722058939767635, 0.002281222584032227, 0.0022902392740876904, 0.0022992559641431534, 0.002308272654198617, 0.0023172893442540803, 0.0023263060343095437, 0.0023353227243650067, 0.00234433941442047, 0.0023533561044759336, 0.002362372794531397, 0.0023713894845868604, 0.002380406174642324, 0.002389422864697787, 0.0023984395547532503, 0.0024074562448087138, 0.002416472934864177, 0.00242548962491964, 0.0024345063149751036, 0.002443523005030567, 0.0024525396950860305, 0.002461556385141494, 0.0024705730751969574, 0.0024795897652524204, 0.002488606455307884, 0.0024976231453633473, 0.0025066398354188107, 0.0025156565254742737, 0.002524673215529737, 0.0025336899055852006, 0.0025427065956406636, 0.0025517232856961274, 0.002560739975751591, 0.002569756665807054, 0.0025787733558625173, 0.0025877900459179808, 0.002596806735973444, 0.002605823426028907, 0.0026148401160843706, 0.002623856806139834, 0.002632873496195297, 0.0026418901862507605, 0.0026509068763062244, 0.0026599235663616874, 0.002668940256417151, 0.0026779569464726143, 0.0026869736365280777, 0.0026959903265835407, 0.002705007016639004, 0.0027140237066944676, 0.0027230403967499306, 0.002732057086805394, 0.0027410737768608574, 0.002750090466916321, 0.0027591071569717843, 0.0027681238470272478, 0.002777140537082711, 0.002786157227138174, 0.0027951739171936376, 0.002804190607249101, 0.002813207297304564, 0.0028222239873600275, 0.002831240677415491, 0.0028402573674709544, 0.002849274057526418, 0.0028582907475818813, 0.0028673074376373447, 0.0028763241276928077, 0.002885340817748271, 0.0028943575078037346, 0.0029033741978591976, 0.002912390887914661, 0.0029214075779701244, 0.0029304242680255875, 0.0029394409580810513, 0.0029484576481365148, 0.002957474338191978, 0.002966491028247441, 0.0029755077183029046, 0.002984524408358368, 0.002993541098413831, 0.0030025577884692945, 0.003011574478524758, 0.003020591168580221, 0.003029607858635685, 0.0030386245486911483, 0.0030476412387466117, 0.0030566579288020747, 0.003065674618857538, 0.0030746913089130016, 0.0030837079989684646, 0.003092724689023928, 0.0031017413790793914, 0.0031107580691348545, 0.003119774759190318, 0.0031287914492457818, 0.003137808139301245, 0.003146824829356708, 0.0031558415194121716, 0.003164858209467635, 0.003173874899523098, 0.0031828915895785615, 0.003191908279634025, 0.003200924969689488, 0.0032099416597449514, 0.003218958349800415, 0.0032279750398558787, 0.0032369917299113417, 0.003246008419966805, 0.0032550251100222686, 0.0032640418000777316, 0.003273058490133195, 0.0032820751801886584, 0.0032910918702441215, 0.003300108560299585, 0.0033091252503550483, 0.0033181419404105118, 0.003327158630465975, 0.0033361753205214386, 0.003345192010576902, 0.003354208700632365, 0.0033632253906878285, 0.003372242080743292, 0.003381258770798755, 0.0033902754608542184, 0.003399292150909682, 0.0034083088409651453, 0.0034173255310206087, 0.003426342221076072, 0.0034353589111315356, 0.0034443756011869986, 0.003453392291242462, 0.0034624089812979254, 0.0034714256713533885, 0.003480442361408852, 0.0034894590514643153, 0.0034984757415197788, 0.0035074924315752418, 0.0035165091216307056, 0.003525525811686169, 0.003534542501741632, 0.0035435591917970955, 0.003552575881852559, 0.003561592571908022, 0.0035706092619634854, 0.003579625952018949, 0.0035886426420744123, 0.0035976593321298753, 0.003606676022185339, 0.0036156927122408026, 0.0036247094022962656, 0.003633726092351729, 0.0036427427824071924, 0.0036517594724626555, 0.003660776162518119, 0.0036697928525735823, 0.0036788095426290458, 0.0036878262326845088, 0.003696842922739972, 0.003705859612795436, 0.003714876302850899, 0.0037238929929063625, 0.003732909682961826, 0.003741926373017289, 0.0037509430630727524, 0.003759959753128216, 0.0037689764431836793, 0.0037779931332391423, 0.0037870098232946057, 0.003796026513350069, 0.0038050432034055326, 0.003814059893460996, 0.0038230765835164594, 0.0038320932735719225, 0.003841109963627386, 0.0038501266536828493, 0.0038591433437383128, 0.0038681600337937758, 0.003877176723849239, 0.0038861934139047026, 0.0038952101039601656, 0.0039042267940156295, 0.0039132434840710925, 0.003922260174126556, 0.003931276864182019, 0.003940293554237482, 0.003949310244292946, 0.003958326934348409, 0.003967343624403872, 0.003976360314459336, 0.003985377004514799, 0.003994393694570263, 0.004003410384625726, 0.00401242707468119, 0.004021443764736653, 0.004030460454792116, 0.00403947714484758, 0.004048493834903043, 0.004057510524958506, 0.00406652721501397, 0.004075543905069433, 0.0040845605951248965, 0.0040935772851803595, 0.0041025939752358225, 0.004111610665291286, 0.004120627355346749, 0.004129644045402212, 0.004138660735457677, 0.00414767742551314, 0.004156694115568603, 0.004165710805624067, 0.00417472749567953, 0.004183744185734993, 0.004192760875790457, 0.00420177756584592, 0.004210794255901383, 0.004219810945956847, 0.00422882763601231, 0.004237844326067773, 0.004246861016123237, 0.0042558777061787, 0.0042648943962341635, 0.0042739110862896265, 0.0042829277763450895, 0.004291944466400553, 0.004300961156456016, 0.004309977846511479, 0.004318994536566943, 0.004328011226622406, 0.00433702791667787, 0.004346044606733334, 0.004355061296788797, 0.00436407798684426, 0.004373094676899724, 0.004382111366955187, 0.00439112805701065, 0.004400144747066114, 0.004409161437121577, 0.00441817812717704, 0.004427194817232504, 0.004436211507287967, 0.0044452281973434305, 0.0044542448873988935, 0.0044632615774543565, 0.00447227826750982, 0.004481294957565283, 0.004490311647620746, 0.00449932833767621])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_7fcf2b308315427985b6eb630455492b.x = d3.scale.linear()
              .domain([0.0, 0.00449932833767621])
              .range([0, 400]);

    color_map_7fcf2b308315427985b6eb630455492b.legend = L.control({position: 'topright'});
    color_map_7fcf2b308315427985b6eb630455492b.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_7fcf2b308315427985b6eb630455492b.legend.addTo(map_a6aea173dab6416f855c5dc2075ae0cd);

    color_map_7fcf2b308315427985b6eb630455492b.xAxis = d3.svg.axis()
        .scale(color_map_7fcf2b308315427985b6eb630455492b.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.0007498880562793684, 0.0014997761125587368, 0.002249664168838105, 0.0029995522251174737, 0.003749440281396842, 0.00449932833767621]);

    color_map_7fcf2b308315427985b6eb630455492b.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_7fcf2b308315427985b6eb630455492b.g = color_map_7fcf2b308315427985b6eb630455492b.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_7fcf2b308315427985b6eb630455492b.g.selectAll("rect")
        .data(color_map_7fcf2b308315427985b6eb630455492b.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_7fcf2b308315427985b6eb630455492b.x(color_map_7fcf2b308315427985b6eb630455492b.color.domain()[i - 1]) : color_map_7fcf2b308315427985b6eb630455492b.x.range()[0],
            x1: i < color_map_7fcf2b308315427985b6eb630455492b.color.domain().length ? color_map_7fcf2b308315427985b6eb630455492b.x(color_map_7fcf2b308315427985b6eb630455492b.color.domain()[i]) : color_map_7fcf2b308315427985b6eb630455492b.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_7fcf2b308315427985b6eb630455492b.g.call(color_map_7fcf2b308315427985b6eb630455492b.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('41_13_ALBERTO LUIZ VIEIRA COSTA');
