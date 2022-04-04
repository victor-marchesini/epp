    
            var map_4d37ebdd3da24604ad3cda0c36b90291 = L.map(
                "map_4d37ebdd3da24604ad3cda0c36b90291",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_3f8ba43a9f484ba0ad35ea8850161cac = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_4d37ebdd3da24604ad3cda0c36b90291);
        
    
            var choropleth_efd1003dc35b41dba78aec4e0e985b7e = L.featureGroup(
                {}
            ).addTo(map_4d37ebdd3da24604ad3cda0c36b90291);
        
    
        function geo_json_d7da776384604d79816a8c8fe1734683_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 421: case 482: case 443: case 434: case 428: case 325: case 438: case 453: case 456: case 467: case 464: case 474: case 435: case 452: case 393: case 426: case 423: case 431: case 404: case 394: case 354: case 349: case 342: case 327: case 339: case 336: case 331: case 358: case 460: case 475: case 459: case 463: case 481: case 445: case 479: case 469: case 461: case 366: case 465: case 451: case 458: case 480: case 512: case 406: case 476: case 485: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 441: case 367: case 357: case 355: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 418: case 417: case 383: case 340: case 396: case 371: case 359: case 385: case 401: case 372: case 356: case 360: case 337: case 483: case 399: case 388: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 368: case 379: case 341: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 362: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 347: case 391: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_d7da776384604d79816a8c8fe1734683_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_d7da776384604d79816a8c8fe1734683 = L.geoJson(null, {
                onEachFeature: geo_json_d7da776384604d79816a8c8fe1734683_onEachFeature,
            
                style: geo_json_d7da776384604d79816a8c8fe1734683_styler,
        });

        function geo_json_d7da776384604d79816a8c8fe1734683_add (data) {
            geo_json_d7da776384604d79816a8c8fe1734683
                .addData(data)
                .addTo(choropleth_efd1003dc35b41dba78aec4e0e985b7e);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_d7da776384604d79816a8c8fe1734683_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_87dddee9efad4a8d8ef85c77a840a0f1 = {};

    
    color_map_87dddee9efad4a8d8ef85c77a840a0f1.color = d3.scale.threshold()
              .domain([3.140604880499984e-05, 3.531025327469756e-05, 3.9214457744395286e-05, 4.3118662214093006e-05, 4.702286668379073e-05, 5.092707115348845e-05, 5.483127562318617e-05, 5.873548009288389e-05, 6.263968456258161e-05, 6.654388903227934e-05, 7.044809350197705e-05, 7.435229797167478e-05, 7.82565024413725e-05, 8.216070691107022e-05, 8.606491138076795e-05, 8.996911585046566e-05, 9.387332032016339e-05, 9.777752478986111e-05, 0.00010168172925955883, 0.00010558593372925655, 0.00010949013819895427, 0.00011339434266865199, 0.00011729854713834971, 0.00012120275160804743, 0.00012510695607774518, 0.00012901116054744288, 0.00013291536501714062, 0.00013681956948683832, 0.00014072377395653605, 0.0001446279784262338, 0.0001485321828959315, 0.0001524363873656292, 0.00015634059183532693, 0.00016024479630502467, 0.0001641490007747224, 0.00016805320524442013, 0.0001719574097141178, 0.00017586161418381554, 0.00017976581865351328, 0.000183670023123211, 0.0001875742275929087, 0.00019147843206260642, 0.00019538263653230415, 0.0001992868410020019, 0.00020319104547169957, 0.0002070952499413973, 0.00021099945441109503, 0.00021490365888079277, 0.0002188078633504905, 0.00022271206782018818, 0.0002266162722898859, 0.00023052047675958364, 0.00023442468122928138, 0.0002383288856989791, 0.00024223309016867684, 0.0002461372946383745, 0.00025004149910807225, 0.00025394570357777, 0.0002578499080474677, 0.0002617541125171654, 0.00026565831698686313, 0.00026956252145656087, 0.0002734667259262586, 0.00027737093039595633, 0.00028127513486565406, 0.00028517933933535174, 0.00028908354380504953, 0.0002929877482747472, 0.00029689195274444494, 0.0003007961572141426, 0.0003047003616838404, 0.0003086045661535381, 0.0003125087706232358, 0.0003164129750929335, 0.0003203171795626313, 0.00032422138403232897, 0.0003281255885020267, 0.0003320297929717244, 0.00033593399744142217, 0.00033983820191111984, 0.0003437424063808176, 0.0003476466108505153, 0.00035155081532021304, 0.0003554550197899107, 0.00035935922425960846, 0.00036326342872930624, 0.0003671676331990039, 0.00037107183766870165, 0.00037497604213839933, 0.0003788802466080971, 0.0003827844510777948, 0.00038668865554749253, 0.0003905928600171902, 0.000394497064486888, 0.0003984012689565857, 0.0004023054734262834, 0.00040620967789598114, 0.0004101138823656789, 0.00041401808683537656, 0.0004179222913050743, 0.000421826495774772, 0.00042573070024446975, 0.00042963490471416743, 0.00043353910918386517, 0.00043744331365356295, 0.00044134751812326063, 0.00044525172259295837, 0.00044915592706265604, 0.00045306013153235383, 0.0004569643360020515, 0.00046086854047174924, 0.0004647727449414469, 0.0004686769494111447, 0.0004725811538808424, 0.0004764853583505401, 0.00048038956282023785, 0.0004842937672899356, 0.00048819797175963327, 0.0004921021762293309, 0.0004960063806990287, 0.0004999105851687264, 0.0005038147896384241, 0.0005077189941081219, 0.0005116231985778196, 0.0005155274030475173, 0.000519431607517215, 0.0005233358119869128, 0.0005272400164566105, 0.0005311442209263083, 0.000535048425396006, 0.0005389526298657036, 0.0005428568343354013, 0.0005467610388050992, 0.0005506652432747969, 0.0005545694477444946, 0.0005584736522141922, 0.00056237785668389, 0.0005662820611535877, 0.0005701862656232854, 0.0005740904700929831, 0.000577994674562681, 0.0005818988790323786, 0.0005858030835020763, 0.000589707287971774, 0.0005936114924414718, 0.0005975156969111695, 0.0006014199013808671, 0.000605324105850565, 0.0006092283103202627, 0.0006131325147899604, 0.0006170367192596581, 0.0006209409237293559, 0.0006248451281990535, 0.0006287493326687512, 0.0006326535371384489, 0.0006365577416081468, 0.0006404619460778445, 0.0006443661505475422, 0.0006482703550172398, 0.0006521745594869376, 0.0006560787639566353, 0.000659982968426333, 0.0006638871728960308, 0.0006677913773657286, 0.0006716955818354262, 0.0006755997863051239, 0.0006795039907748216, 0.0006834081952445194, 0.0006873123997142171, 0.0006912166041839147, 0.0006951208086536126, 0.0006990250131233103, 0.000702929217593008, 0.0007068334220627057, 0.0007107376265324035, 0.0007146418310021011, 0.0007185460354717988, 0.0007224502399414966, 0.0007263544444111944, 0.0007302586488808921, 0.0007341628533505897, 0.0007380670578202874, 0.0007419712622899852, 0.0007458754667596829, 0.0007497796712293806, 0.0007536838756990784, 0.0007575880801687761, 0.0007614922846384738, 0.0007653964891081715, 0.0007693006935778693, 0.000773204898047567, 0.0007771091025172646, 0.0007810133069869624, 0.0007849175114566602, 0.0007888217159263579, 0.0007927259203960556, 0.0007966301248657533, 0.000800534329335451, 0.0008044385338051487, 0.0008083427382748464, 0.0008122469427445442, 0.000816151147214242, 0.0008200553516839397, 0.0008239595561536373, 0.000827863760623335, 0.0008317679650930328, 0.0008356721695627305, 0.0008395763740324282, 0.000843480578502126, 0.0008473847829718237, 0.0008512889874415214, 0.0008551931919112191, 0.0008590973963809169, 0.0008630016008506146, 0.0008669058053203122, 0.00087081000979001, 0.0008747142142597078, 0.0008786184187294055, 0.0008825226231991032, 0.0008864268276688008, 0.0008903310321384986, 0.0008942352366081963, 0.000898139441077894, 0.0009020436455475918, 0.0009059478500172896, 0.0009098520544869872, 0.0009137562589566849, 0.0009176604634263826, 0.0009215646678960804, 0.0009254688723657781, 0.0009293730768354759, 0.0009332772813051736, 0.0009371814857748713, 0.000941085690244569, 0.0009449898947142667, 0.0009488940991839645, 0.0009527983036536621, 0.0009567025081233598, 0.0009606067125930576, 0.0009645109170627554, 0.0009684151215324531, 0.0009723193260021508, 0.0009762235304718484, 0.0009801277349415461, 0.000984031939411244, 0.0009879361438809417, 0.0009918403483506393, 0.000995744552820337, 0.0009996487572900348, 0.0010035529617597324, 0.0010074571662294302, 0.001011361370699128, 0.0010152655751688258, 0.0010191697796385236, 0.0010230739841082211, 0.001026978188577919, 0.0010308823930476167, 0.0010347865975173143, 0.001038690801987012, 0.0010425950064567096, 0.0010464992109264074, 0.0010504034153961052, 0.0010543076198658028, 0.0010582118243355006, 0.0010621160288051986, 0.0010660202332748961, 0.001069924437744594, 0.0010738286422142915, 0.0010777328466839893, 0.001081637051153687, 0.0010855412556233846, 0.0010894454600930824, 0.0010933496645627802, 0.0010972538690324778, 0.0011011580735021756, 0.0011050622779718734, 0.001108966482441571, 0.0011128706869112687, 0.0011167748913809663, 0.0011206790958506643, 0.001124583300320362, 0.0011284875047900596, 0.0011323917092597574, 0.0011362959137294552, 0.0011402001181991528, 0.0011441043226688506, 0.0011480085271385481, 0.001151912731608246, 0.0011558169360779437, 0.0011597211405476413, 0.001163625345017339, 0.0011675295494870369, 0.0011714337539567344, 0.0011753379584264322, 0.0011792421628961302, 0.0011831463673658278, 0.0011870505718355256, 0.0011909547763052232, 0.001194858980774921, 0.0011987631852446187, 0.0012026673897143163, 0.001206571594184014, 0.0012104757986537119, 0.0012143800031234094, 0.0012182842075931072, 0.0012221884120628048, 0.0012260926165325026, 0.0012299968210022004, 0.001233901025471898, 0.001237805229941596, 0.0012417094344112937, 0.0012456136388809913, 0.001249517843350689, 0.0012534220478203869, 0.0012573262522900845, 0.0012612304567597822, 0.0012651346612294798, 0.0012690388656991776, 0.0012729430701688754, 0.001276847274638573, 0.0012807514791082707, 0.0012846556835779685, 0.001288559888047666, 0.0012924640925173639, 0.0012963682969870617, 0.0013002725014567595, 0.0013041767059264573, 0.0013080809103961548, 0.0013119851148658526, 0.0013158893193355504, 0.001319793523805248, 0.0013236977282749458, 0.0013276019327446433, 0.0013315061372143411, 0.001335410341684039, 0.0013393145461537365, 0.0013432187506234343, 0.001347122955093132, 0.0013510271595628296, 0.0013549313640325276, 0.0013588355685022254, 0.001362739772971923, 0.0013666439774416208, 0.0013705481819113183, 0.0013744523863810161, 0.001378356590850714, 0.0013822607953204115, 0.0013861649997901093, 0.001390069204259807, 0.0013939734087295046, 0.0013978776131992024, 0.0014017818176689, 0.0014056860221385978, 0.0014095902266082956, 0.0014134944310779933, 0.0014173986355476911, 0.001421302840017389, 0.0014252070444870865, 0.0014291112489567843, 0.001433015453426482, 0.0014369196578961796, 0.0014408238623658774, 0.001444728066835575, 0.0014486322713052728, 0.0014525364757749706, 0.0014564406802446681, 0.001460344884714366, 0.0014642490891840637, 0.0014681532936537613, 0.0014720574981234593, 0.0014759617025931569, 0.0014798659070628546, 0.0014837701115325524, 0.00148767431600225, 0.0014915785204719478, 0.0014954827249416456, 0.0014993869294113431, 0.001503291133881041, 0.0015071953383507387, 0.0015110995428204363, 0.001515003747290134, 0.0015189079517598316, 0.0015228121562295294, 0.0015267163606992272, 0.001530620565168925, 0.0015345247696386228, 0.0015384289741083206, 0.0015423331785780182, 0.001546237383047716, 0.0015501415875174135, 0.0015540457919871113, 0.001557949996456809, 0.0015618542009265067, 0.0015657584053962044, 0.0015696626098659022, 0.0015735668143355998, 0.0015774710188052976, 0.0015813752232749952, 0.001585279427744693, 0.0015891836322143907, 0.0015930878366840885, 0.0015969920411537863, 0.001600896245623484, 0.0016048004500931817, 0.0016087046545628795, 0.0016126088590325772, 0.0016165130635022748, 0.0016204172679719726, 0.0016243214724416702, 0.001628225676911368, 0.0016321298813810657, 0.0016360340858507633, 0.001639938290320461, 0.0016438424947901589, 0.0016477466992598565, 0.0016516509037295545, 0.0016555551081992523, 0.0016594593126689498, 0.0016633635171386476, 0.0016672677216083452, 0.001671171926078043, 0.0016750761305477408, 0.0016789803350174383, 0.0016828845394871361, 0.001686788743956834, 0.0016906929484265315, 0.0016945971528962293, 0.0016985013573659268, 0.0017024055618356246, 0.0017063097663053224, 0.0017102139707750202, 0.001714118175244718, 0.0017180223797144158, 0.0017219265841841133, 0.0017258307886538111, 0.0017297349931235087, 0.0017336391975932065, 0.0017375434020629043, 0.0017414476065326018, 0.0017453518110022996, 0.0017492560154719974, 0.001753160219941695, 0.0017570644244113928, 0.0017609686288810906, 0.0017648728333507881, 0.0017687770378204861, 0.0017726812422901837, 0.0017765854467598815, 0.0017804896512295793, 0.0017843938556992768, 0.0017882980601689746, 0.0017922022646386724, 0.00179610646910837, 0.0018000106735780678, 0.0018039148780477654, 0.0018078190825174631, 0.001811723286987161, 0.0018156274914568585, 0.0018195316959265563, 0.001823435900396254, 0.0018273401048659519, 0.0018312443093356496, 0.0018351485138053474, 0.001839052718275045, 0.0018429569227447428, 0.0018468611272144404, 0.0018507653316841381, 0.001854669536153836, 0.0018585737406235335, 0.0018624779450932313, 0.001866382149562929, 0.0018702863540326266, 0.0018741905585023244, 0.001878094762972022, 0.0018819989674417198, 0.0018859031719114178, 0.0018898073763811154, 0.0018937115808508132, 0.001897615785320511, 0.0019015199897902085, 0.0019054241942599063, 0.001909328398729604, 0.0019132326031993017, 0.0019171368076689994, 0.001921041012138697, 0.0019249452166083948, 0.0019288494210780926, 0.0019327536255477902, 0.001936657830017488, 0.0019405620344871857, 0.0019444662389568835, 0.0019483704434265813, 0.0019522746478962789, 0.0019561788523659767, 0.0019600830568356742, 0.001963987261305372, 0.00196789146577507, 0.0019717956702447674, 0.001975699874714465, 0.001979604079184163])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_87dddee9efad4a8d8ef85c77a840a0f1.x = d3.scale.linear()
              .domain([3.140604880499984e-05, 0.001979604079184163])
              .range([0, 400]);

    color_map_87dddee9efad4a8d8ef85c77a840a0f1.legend = L.control({position: 'topright'});
    color_map_87dddee9efad4a8d8ef85c77a840a0f1.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_87dddee9efad4a8d8ef85c77a840a0f1.legend.addTo(map_4d37ebdd3da24604ad3cda0c36b90291);

    color_map_87dddee9efad4a8d8ef85c77a840a0f1.xAxis = d3.svg.axis()
        .scale(color_map_87dddee9efad4a8d8ef85c77a840a0f1.x)
        .orient("top")
        .tickSize(1)
        .tickValues([3.140604880499984e-05, 0.00035610572053486035, 0.0006808053922647209, 0.0010055050639945814, 0.0013302047357244419, 0.0016549044074543023, 0.001979604079184163]);

    color_map_87dddee9efad4a8d8ef85c77a840a0f1.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_87dddee9efad4a8d8ef85c77a840a0f1.g = color_map_87dddee9efad4a8d8ef85c77a840a0f1.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_87dddee9efad4a8d8ef85c77a840a0f1.g.selectAll("rect")
        .data(color_map_87dddee9efad4a8d8ef85c77a840a0f1.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_87dddee9efad4a8d8ef85c77a840a0f1.x(color_map_87dddee9efad4a8d8ef85c77a840a0f1.color.domain()[i - 1]) : color_map_87dddee9efad4a8d8ef85c77a840a0f1.x.range()[0],
            x1: i < color_map_87dddee9efad4a8d8ef85c77a840a0f1.color.domain().length ? color_map_87dddee9efad4a8d8ef85c77a840a0f1.x(color_map_87dddee9efad4a8d8ef85c77a840a0f1.color.domain()[i]) : color_map_87dddee9efad4a8d8ef85c77a840a0f1.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_87dddee9efad4a8d8ef85c77a840a0f1.g.call(color_map_87dddee9efad4a8d8ef85c77a840a0f1.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('32_65_CRISTIANE PELINCA DO AMARAL');

