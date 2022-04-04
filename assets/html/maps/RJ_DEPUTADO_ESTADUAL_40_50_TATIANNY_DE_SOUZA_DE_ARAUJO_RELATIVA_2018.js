    
            var map_5a20ad807e29428d9d010fcb126406ff = L.map(
                "map_5a20ad807e29428d9d010fcb126406ff",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_f69a9e70d0704920a8bb092e3a99e75e = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_5a20ad807e29428d9d010fcb126406ff);
        
    
            var choropleth_7726d2396b8a4b639496b23e952a3c56 = L.featureGroup(
                {}
            ).addTo(map_5a20ad807e29428d9d010fcb126406ff);
        
    
        function geo_json_d2f7c82196df4cb086d84396a72d29cf_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 366: case 480: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 443: case 439: case 441: case 418: case 417: case 467: case 466: case 473: case 403: case 468: case 464: case 435: case 452: case 393: case 392: case 383: case 426: case 427: case 419: case 415: case 408: case 411: case 397: case 395: case 359: case 398: case 326: case 339: case 357: case 433: case 445: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 325: case 440: case 462: case 455: case 442: case 446: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 434: case 448: case 449: case 447: case 453: case 456: case 437: case 436: case 444: case 485: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 438: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 367: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_d2f7c82196df4cb086d84396a72d29cf_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_d2f7c82196df4cb086d84396a72d29cf = L.geoJson(null, {
                onEachFeature: geo_json_d2f7c82196df4cb086d84396a72d29cf_onEachFeature,
            
                style: geo_json_d2f7c82196df4cb086d84396a72d29cf_styler,
        });

        function geo_json_d2f7c82196df4cb086d84396a72d29cf_add (data) {
            geo_json_d2f7c82196df4cb086d84396a72d29cf
                .addData(data)
                .addTo(choropleth_7726d2396b8a4b639496b23e952a3c56);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_d2f7c82196df4cb086d84396a72d29cf_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_265726e4d44b47688482fcea7fb3a3e1 = {};

    
    color_map_265726e4d44b47688482fcea7fb3a3e1.color = d3.scale.threshold()
              .domain([0.00015704997330150453, 0.00017505487202356982, 0.0001930597707456351, 0.0002110646694677004, 0.00022906956818976568, 0.00024707446691183093, 0.00026507936563389625, 0.00028308426435596156, 0.0003010891630780268, 0.0003190940618000921, 0.0003370989605221574, 0.0003551038592442227, 0.00037310875796628797, 0.0003911136566883532, 0.0004091185554104186, 0.0004271234541324838, 0.0004451283528545491, 0.0004631332515766144, 0.0004811381502986797, 0.000499143049020745, 0.0005171479477428103, 0.0005351528464648755, 0.0005531577451869409, 0.0005711626439090061, 0.0005891675426310714, 0.0006071724413531368, 0.0006251773400752019, 0.0006431822387972673, 0.0006611871375193327, 0.0006791920362413978, 0.0006971969349634631, 0.0007152018336855284, 0.0007332067324075937, 0.000751211631129659, 0.0007692165298517243, 0.0007872214285737896, 0.0008052263272958548, 0.0008232312260179202, 0.0008412361247399855, 0.0008592410234620507, 0.000877245922184116, 0.0008952508209061812, 0.0009132557196282465, 0.0009312606183503119, 0.0009492655170723771, 0.0009672704157944424, 0.0009852753145165078, 0.0010032802132385731, 0.0010212851119606383, 0.0010392900106827036, 0.0010572949094047688, 0.0010752998081268342, 0.0010933047068488995, 0.0011113096055709647, 0.00112931450429303, 0.0011473194030150954, 0.0011653243017371608, 0.0011833292004592257, 0.001201334099181291, 0.0012193389979033565, 0.0012373438966254216, 0.001255348795347487, 0.0012733536940695523, 0.0012913585927916175, 0.0013093634915136829, 0.0013273683902357482, 0.0013453732889578134, 0.0013633781876798787, 0.0013813830864019441, 0.0013993879851240093, 0.0014173928838460746, 0.00143539778256814, 0.0014534026812902051, 0.0014714075800122705, 0.0014894124787343359, 0.001507417377456401, 0.0015254222761784664, 0.0015434271749005318, 0.001561432073622597, 0.001579436972344662, 0.0015974418710667274, 0.0016154467697887926, 0.001633451668510858, 0.0016514565672329233, 0.0016694614659549885, 0.0016874663646770538, 0.0017054712633991192, 0.0017234761621211844, 0.0017414810608432497, 0.001759485959565315, 0.0017774908582873802, 0.0017954957570094456, 0.001813500655731511, 0.0018315055544535761, 0.0018495104531756415, 0.0018675153518977069, 0.001885520250619772, 0.0019035251493418374, 0.0019215300480639028, 0.0019395349467859681, 0.0019575398455080333, 0.0019755447442300986, 0.0019935496429521636, 0.002011554541674229, 0.0020295594403962943, 0.0020475643391183597, 0.002065569237840425, 0.00208357413656249, 0.0021015790352845558, 0.0021195839340066207, 0.0021375888327286865, 0.0021555937314507514, 0.0021735986301728173, 0.0021916035288948813, 0.002209608427616947, 0.002227613326339012, 0.002245618225061078, 0.002263623123783143, 0.0022816280225052086, 0.0022996329212272735, 0.0023176378199493385, 0.0023356427186714043, 0.002353647617393469, 0.002371652516115535, 0.0023896574148376, 0.002407662313559665, 0.0024256672122817307, 0.0024436721110037956, 0.0024616770097258614, 0.0024796819084479263, 0.002497686807169992, 0.002515691705892057, 0.002533696604614122, 0.002551701503336188, 0.0025697064020582527, 0.0025877113007803185, 0.0026057161995023835, 0.0026237210982244493, 0.002641725996946514, 0.002659730895668579, 0.002677735794390645, 0.00269574069311271, 0.0027137455918347757, 0.0027317504905568406, 0.0027497553892789055, 0.0027677602880009713, 0.0027857651867230363, 0.002803770085445102, 0.002821774984167167, 0.002839779882889233, 0.0028577847816112978, 0.0028757896803333627, 0.0028937945790554285, 0.0029117994777774934, 0.0029298043764995592, 0.002947809275221624, 0.002965814173943689, 0.002983819072665754, 0.00300182397138782, 0.0030198288701098848, 0.0030378337688319506, 0.0030558386675540155, 0.0030738435662760804, 0.0030918484649981462, 0.003109853363720211, 0.003127858262442277, 0.003145863161164342, 0.0031638680598864077, 0.0031818729586084726, 0.0031998778573305376, 0.0032178827560526034, 0.0032358876547746683, 0.003253892553496734, 0.003271897452218799, 0.003289902350940864, 0.0033079072496629298, 0.0033259121483849947, 0.0033439170471070605, 0.0033619219458291254, 0.0033799268445511912, 0.003397931743273256, 0.003415936641995321, 0.003433941540717387, 0.003451946439439452, 0.0034699513381615176, 0.0034879562368835826, 0.0035059611356056475, 0.0035239660343277133, 0.0035419709330497783, 0.003559975831771844, 0.003577980730493909, 0.003595985629215975, 0.0036139905279380397, 0.0036319954266601047, 0.0036500003253821705, 0.0036680052241042354, 0.003686010122826301, 0.003704015021548366, 0.003722019920270432, 0.003740024818992497, 0.003758029717714562, 0.0037760346164366276, 0.0037940395151586925, 0.0038120444138807575, 0.0038300493126028233, 0.003848054211324888, 0.003866059110046953, 0.003884064008769019, 0.003902068907491084, 0.00392007380621315, 0.003938078704935215, 0.0039560836036572795, 0.003974088502379345, 0.00399209340110141, 0.004010098299823476, 0.004028103198545541, 0.004046108097267607, 0.004064112995989672, 0.0040821178947117375, 0.0041001227934338025, 0.004118127692155868, 0.004136132590877933, 0.004154137489599999, 0.004172142388322064, 0.00419014728704413, 0.004208152185766194, 0.004226157084488259, 0.0042441619832103246, 0.0042621668819323895, 0.004280171780654455, 0.00429817667937652, 0.004316181578098586, 0.004334186476820651, 0.004352191375542716, 0.004370196274264782, 0.004388201172986847, 0.004406206071708912, 0.004424210970430977, 0.004442215869153042, 0.004460220767875108, 0.004478225666597173, 0.004496230565319239, 0.004514235464041304, 0.00453224036276337, 0.0045502452614854345, 0.0045682501602074994, 0.004586255058929565, 0.00460425995765163, 0.004622264856373696, 0.004640269755095761, 0.004658274653817826, 0.004676279552539892, 0.004694284451261957, 0.004712289349984022, 0.004730294248706087, 0.004748299147428153, 0.004766304046150218, 0.004784308944872283, 0.004802313843594349, 0.004820318742316414, 0.0048383236410384795, 0.0048563285397605445, 0.00487433343848261, 0.004892338337204675, 0.00491034323592674, 0.004928348134648806, 0.004946353033370871, 0.004964357932092937, 0.004982362830815002, 0.0050003677295370665, 0.005018372628259132, 0.005036377526981197, 0.005054382425703263, 0.005072387324425328, 0.005090392223147394, 0.005108397121869459, 0.005126402020591524, 0.0051444069193135895, 0.005162411818035654, 0.00518041671675772, 0.005198421615479785, 0.00521642651420185, 0.005234431412923916, 0.005252436311645981, 0.005270441210368047, 0.0052884461090901115, 0.005306451007812177, 0.005324455906534242, 0.005342460805256307, 0.005360465703978373, 0.005378470602700438, 0.005396475501422504, 0.005414480400144569, 0.005432485298866634, 0.005450490197588699, 0.005468495096310764, 0.00548649999503283, 0.005504504893754895, 0.005522509792476961, 0.005540514691199026, 0.005558519589921091, 0.0055765244886431566, 0.0055945293873652215, 0.005612534286087287, 0.005630539184809352, 0.005648544083531417, 0.005666548982253483, 0.005684553880975548, 0.005702558779697614, 0.005720563678419679, 0.005738568577141744, 0.005756573475863809, 0.005774578374585874, 0.00579258327330794, 0.005810588172030004, 0.00582859307075207, 0.005846597969474135, 0.0058646028681962, 0.005882607766918266, 0.005900612665640331, 0.005918617564362396, 0.005936622463084461, 0.005954627361806527, 0.005972632260528592, 0.005990637159250657, 0.006008642057972723, 0.006026646956694788, 0.0060446518554168535, 0.0060626567541389184, 0.006080661652860984, 0.006098666551583049, 0.006116671450305114, 0.00613467634902718, 0.006152681247749245, 0.006170686146471311, 0.006188691045193376, 0.0062066959439154405, 0.006224700842637506, 0.006242705741359571, 0.006260710640081637, 0.006278715538803702, 0.006296720437525768, 0.006314725336247833, 0.006332730234969898, 0.0063507351336919635, 0.006368740032414028, 0.006386744931136094, 0.006404749829858159, 0.006422754728580224, 0.00644075962730229, 0.006458764526024355, 0.006476769424746421, 0.0064947743234684855, 0.006512779222190551, 0.006530784120912616, 0.006548789019634681, 0.006566793918356747, 0.006584798817078812, 0.006602803715800878, 0.006620808614522943, 0.006638813513245008, 0.006656818411967073, 0.006674823310689138, 0.006692828209411204, 0.006710833108133269, 0.006728838006855335, 0.0067468429055774, 0.006764847804299465, 0.0067828527030215306, 0.0068008576017435955, 0.006818862500465661, 0.006836867399187726, 0.006854872297909791, 0.006872877196631857, 0.006890882095353922, 0.006908886994075988, 0.006926891892798053, 0.006944896791520118, 0.006962901690242183, 0.006980906588964248, 0.006998911487686314, 0.007016916386408379, 0.007034921285130445, 0.00705292618385251, 0.007070931082574575, 0.0070889359812966405, 0.0071069408800187054, 0.007124945778740771, 0.007142950677462836, 0.007160955576184902, 0.007178960474906967, 0.007196965373629032, 0.007214970272351098, 0.007232975171073163, 0.007250980069795228, 0.007268984968517293, 0.007286989867239359, 0.007304994765961424, 0.007322999664683489, 0.007341004563405555, 0.00735900946212762, 0.0073770143608496855, 0.0073950192595717505, 0.0074130241582938145, 0.00743102905701588, 0.007449033955737945, 0.007467038854460011, 0.007485043753182076, 0.007503048651904142, 0.007521053550626207, 0.007539058449348272, 0.0075570633480703375, 0.007575068246792402, 0.007593073145514468, 0.007611078044236533, 0.007629082942958598, 0.007647087841680664, 0.007665092740402729, 0.007683097639124795, 0.0077011025378468595, 0.007719107436568925, 0.00773711233529099, 0.007755117234013055, 0.007773122132735121, 0.007791127031457186, 0.007809131930179252, 0.007827136828901316, 0.007845141727623382, 0.007863146626345447, 0.007881151525067511, 0.007899156423789577, 0.007917161322511643, 0.007935166221233709, 0.007953171119955773, 0.007971176018677839, 0.007989180917399905, 0.00800718581612197, 0.008025190714844036, 0.0080431956135661, 0.008061200512288166, 0.008079205411010232, 0.008097210309732296, 0.008115215208454362, 0.008133220107176427, 0.008151225005898493, 0.008169229904620557, 0.008187234803342623, 0.008205239702064687, 0.008223244600786755, 0.008241249499508819, 0.008259254398230883, 0.008277259296952949, 0.008295264195675013, 0.00831326909439708, 0.008331273993119144, 0.00834927889184121, 0.008367283790563274, 0.008385288689285342, 0.008403293588007406, 0.008421298486729472, 0.008439303385451536, 0.008457308284173602, 0.008475313182895667, 0.008493318081617733, 0.008511322980339797, 0.008529327879061863, 0.008547332777783927, 0.008565337676505995, 0.008583342575228059, 0.008601347473950124, 0.008619352372672189, 0.008637357271394254, 0.00865536217011632, 0.008673367068838386, 0.00869137196756045, 0.008709376866282516, 0.00872738176500458, 0.008745386663726647, 0.008763391562448711, 0.008781396461170777, 0.008799401359892841, 0.008817406258614909, 0.008835411157336973, 0.008853416056059039, 0.008871420954781103, 0.008889425853503169, 0.008907430752225234, 0.0089254356509473, 0.008943440549669364, 0.00896144544839143, 0.008979450347113494, 0.008997455245835562, 0.009015460144557626, 0.009033465043279692, 0.009051469942001756, 0.009069474840723821, 0.009087479739445887, 0.009105484638167953, 0.009123489536890017, 0.009141494435612083])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_265726e4d44b47688482fcea7fb3a3e1.x = d3.scale.linear()
              .domain([0.00015704997330150453, 0.009141494435612083])
              .range([0, 400]);

    color_map_265726e4d44b47688482fcea7fb3a3e1.legend = L.control({position: 'topright'});
    color_map_265726e4d44b47688482fcea7fb3a3e1.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_265726e4d44b47688482fcea7fb3a3e1.legend.addTo(map_5a20ad807e29428d9d010fcb126406ff);

    color_map_265726e4d44b47688482fcea7fb3a3e1.xAxis = d3.svg.axis()
        .scale(color_map_265726e4d44b47688482fcea7fb3a3e1.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.00015704997330150453, 0.001654457383686601, 0.003151864794071697, 0.004649272204456794, 0.0061466796148418905, 0.007644087025226987, 0.009141494435612083]);

    color_map_265726e4d44b47688482fcea7fb3a3e1.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_265726e4d44b47688482fcea7fb3a3e1.g = color_map_265726e4d44b47688482fcea7fb3a3e1.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_265726e4d44b47688482fcea7fb3a3e1.g.selectAll("rect")
        .data(color_map_265726e4d44b47688482fcea7fb3a3e1.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_265726e4d44b47688482fcea7fb3a3e1.x(color_map_265726e4d44b47688482fcea7fb3a3e1.color.domain()[i - 1]) : color_map_265726e4d44b47688482fcea7fb3a3e1.x.range()[0],
            x1: i < color_map_265726e4d44b47688482fcea7fb3a3e1.color.domain().length ? color_map_265726e4d44b47688482fcea7fb3a3e1.x(color_map_265726e4d44b47688482fcea7fb3a3e1.color.domain()[i]) : color_map_265726e4d44b47688482fcea7fb3a3e1.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_265726e4d44b47688482fcea7fb3a3e1.g.call(color_map_265726e4d44b47688482fcea7fb3a3e1.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('40_50_TATIANNY DE SOUZA DE ARAUJO');
