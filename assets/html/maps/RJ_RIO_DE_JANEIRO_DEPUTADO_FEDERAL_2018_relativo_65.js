    
            var map_d1bbd0b005b548308eb89225260d95d9 = L.map(
                "map_d1bbd0b005b548308eb89225260d95d9",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_28c1a0a0e32a44958a7202334977802a = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_d1bbd0b005b548308eb89225260d95d9);
        
    
            var choropleth_4a521eaff93440cfaf123a09ffb91b21 = L.featureGroup(
                {}
            ).addTo(map_d1bbd0b005b548308eb89225260d95d9);
        
    
        function geo_json_75071a6f50ad48a79a9901e9c79db470_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 452: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 428: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 377: case 392: case 343: case 351: case 354: case 350: case 463: case 409: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 441: case 412: case 418: case 410: case 440: case 424: case 449: case 417: case 456: case 335: case 403: case 468: case 442: case 436: case 446: case 444: case 381: case 369: case 363: case 352: case 340: case 333: case 400: case 396: case 382: case 375: case 427: case 432: case 364: case 359: case 398: case 368: case 386: case 379: case 334: case 326: case 358: case 347: case 337: case 433: case 429: case 483: case 388: case 370: case 511: case 458: case 389: case 510: case 414: case 374: case 485: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 380: case 385: case 329: case 360: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 367: case 366: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_75071a6f50ad48a79a9901e9c79db470_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_75071a6f50ad48a79a9901e9c79db470 = L.geoJson(null, {
                onEachFeature: geo_json_75071a6f50ad48a79a9901e9c79db470_onEachFeature,
            
                style: geo_json_75071a6f50ad48a79a9901e9c79db470_styler,
        });

        function geo_json_75071a6f50ad48a79a9901e9c79db470_add (data) {
            geo_json_75071a6f50ad48a79a9901e9c79db470
                .addData(data)
                .addTo(choropleth_4a521eaff93440cfaf123a09ffb91b21);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_75071a6f50ad48a79a9901e9c79db470_add(obj);
            })
          }
            const file_path ='/covid/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_04050714647c4e4cae91efb2ce0cbbdf = {};

    
    color_map_04050714647c4e4cae91efb2ce0cbbdf.color = d3.scale.threshold()
              .domain([0.0, 2.8593673282153384e-06, 5.718734656430677e-06, 8.578101984646016e-06, 1.1437469312861354e-05, 1.4296836641076692e-05, 1.715620396929203e-05, 2.001557129750737e-05, 2.2874938625722707e-05, 2.5734305953938045e-05, 2.8593673282153383e-05, 3.145304061036872e-05, 3.431240793858406e-05, 3.7171775266799394e-05, 4.003114259501474e-05, 4.289050992323007e-05, 4.5749877251445414e-05, 4.860924457966075e-05, 5.146861190787609e-05, 5.432797923609143e-05, 5.7187346564306766e-05, 6.0046713892522104e-05, 6.290608122073744e-05, 6.576544854895279e-05, 6.862481587716812e-05, 7.148418320538346e-05, 7.434355053359879e-05, 7.720291786181414e-05, 8.006228519002948e-05, 8.292165251824481e-05, 8.578101984646014e-05, 8.864038717467549e-05, 9.149975450289083e-05, 9.435912183110617e-05, 9.72184891593215e-05, 0.00010007785648753683, 0.00010293722381575218, 0.00010579659114396752, 0.00010865595847218286, 0.00011151532580039818, 0.00011437469312861353, 0.00011723406045682887, 0.00012009342778504421, 0.00012295279511325956, 0.00012581216244147487, 0.0001286715297696902, 0.00013153089709790557, 0.0001343902644261209, 0.00013724963175433625, 0.0001401089990825516, 0.00014296836641076693, 0.00014582773373898224, 0.00014868710106719757, 0.0001515464683954129, 0.00015440583572362828, 0.00015726520305184362, 0.00016012457038005895, 0.0001629839377082743, 0.00016584330503648963, 0.00016870267236470497, 0.00017156203969292028, 0.00017442140702113562, 0.00017728077434935098, 0.00018014014167756632, 0.00018299950900578166, 0.000185858876333997, 0.00018871824366221233, 0.00019157761099042767, 0.000194436978318643, 0.00019729634564685832, 0.00020015571297507366, 0.00020301508030328902, 0.00020587444763150436, 0.0002087338149597197, 0.00021159318228793504, 0.00021445254961615037, 0.0002173119169443657, 0.00022017128427258105, 0.00022303065160079636, 0.00022589001892901173, 0.00022874938625722706, 0.0002316087535854424, 0.00023446812091365774, 0.00023732748824187308, 0.00024018685557008842, 0.00024304622289830375, 0.0002459055902265191, 0.0002487649575547344, 0.00025162432488294974, 0.0002544836922111651, 0.0002573430595393804, 0.0002602024268675958, 0.00026306179419581115, 0.0002659211615240265, 0.0002687805288522418, 0.00027163989618045716, 0.0002744992635086725, 0.00027735863083688784, 0.0002802179981651032, 0.0002830773654933185, 0.00028593673282153385, 0.00028879610014974913, 0.00029165546747796447, 0.0002945148348061798, 0.00029737420213439515, 0.0003002335694626105, 0.0003030929367908258, 0.00030595230411904116, 0.00030881167144725655, 0.0003116710387754719, 0.00031453040610368723, 0.00031738977343190257, 0.0003202491407601179, 0.00032310850808833324, 0.0003259678754165486, 0.0003288272427447639, 0.00033168661007297926, 0.0003345459774011946, 0.00033740534472940993, 0.0003402647120576252, 0.00034312407938584056, 0.0003459834467140559, 0.00034884281404227123, 0.00035170218137048657, 0.00035456154869870196, 0.0003574209160269173, 0.00036028028335513264, 0.000363139650683348, 0.0003659990180115633, 0.00036885838533977865, 0.000371717752667994, 0.00037457711999620933, 0.00037743648732442467, 0.00038029585465264, 0.00038315522198085534, 0.0003860145893090707, 0.000388873956637286, 0.00039173332396550136, 0.00039459269129371664, 0.000397452058621932, 0.0004003114259501473, 0.0004031707932783627, 0.00040603016060657805, 0.0004088895279347934, 0.0004117488952630087, 0.00041460826259122406, 0.0004174676299194394, 0.00042032699724765474, 0.0004231863645758701, 0.0004260457319040854, 0.00042890509923230075, 0.0004317644665605161, 0.0004346238338887314, 0.00043748320121694676, 0.0004403425685451621, 0.00044320193587337744, 0.0004460613032015927, 0.0004489206705298081, 0.00045178003785802345, 0.0004546394051862388, 0.00045749877251445413, 0.00046035813984266947, 0.0004632175071708848, 0.00046607687449910014, 0.0004689362418273155, 0.0004717956091555308, 0.00047465497648374616, 0.0004775143438119615, 0.00048037371114017683, 0.00048323307846839217, 0.0004860924457966075, 0.0004889518131248228, 0.0004918111804530382, 0.0004946705477812535, 0.0004975299151094688, 0.0005003892824376842, 0.0005032486497658995, 0.0005061080170941149, 0.0005089673844223302, 0.0005118267517505456, 0.0005146861190787608, 0.0005175454864069763, 0.0005204048537351916, 0.0005232642210634069, 0.0005261235883916223, 0.0005289829557198376, 0.000531842323048053, 0.0005347016903762683, 0.0005375610577044836, 0.0005404204250326989, 0.0005432797923609143, 0.0005461391596891296, 0.000548998527017345, 0.0005518578943455603, 0.0005547172616737757, 0.000557576629001991, 0.0005604359963302063, 0.0005632953636584216, 0.000566154730986637, 0.0005690140983148523, 0.0005718734656430677, 0.000574732832971283, 0.0005775922002994983, 0.0005804515676277137, 0.0005833109349559289, 0.0005861703022841443, 0.0005890296696123596, 0.000591889036940575, 0.0005947484042687903, 0.0005976077715970057, 0.000600467138925221, 0.0006033265062534364, 0.0006061858735816516, 0.000609045240909867, 0.0006119046082380823, 0.0006147639755662978, 0.0006176233428945131, 0.0006204827102227285, 0.0006233420775509438, 0.0006262014448791592, 0.0006290608122073745, 0.0006319201795355897, 0.0006347795468638051, 0.0006376389141920204, 0.0006404982815202358, 0.0006433576488484511, 0.0006462170161766665, 0.0006490763835048818, 0.0006519357508330972, 0.0006547951181613124, 0.0006576544854895278, 0.0006605138528177431, 0.0006633732201459585, 0.0006662325874741738, 0.0006690919548023892, 0.0006719513221306045, 0.0006748106894588199, 0.0006776700567870352, 0.0006805294241152504, 0.0006833887914434658, 0.0006862481587716811, 0.0006891075260998965, 0.0006919668934281118, 0.0006948262607563272, 0.0006976856280845425, 0.0007005449954127579, 0.0007034043627409731, 0.0007062637300691886, 0.0007091230973974039, 0.0007119824647256193, 0.0007148418320538346, 0.00071770119938205, 0.0007205605667102653, 0.0007234199340384807, 0.000726279301366696, 0.0007291386686949113, 0.0007319980360231266, 0.0007348574033513419, 0.0007377167706795573, 0.0007405761380077726, 0.000743435505335988, 0.0007462948726642033, 0.0007491542399924187, 0.0007520136073206339, 0.0007548729746488493, 0.0007577323419770646, 0.00076059170930528, 0.0007634510766334953, 0.0007663104439617107, 0.000769169811289926, 0.0007720291786181414, 0.0007748885459463566, 0.000777747913274572, 0.0007806072806027873, 0.0007834666479310027, 0.000786326015259218, 0.0007891853825874333, 0.0007920447499156487, 0.000794904117243864, 0.0007977634845720793, 0.0008006228519002946, 0.0008034822192285101, 0.0008063415865567254, 0.0008092009538849408, 0.0008120603212131561, 0.0008149196885413715, 0.0008177790558695868, 0.0008206384231978022, 0.0008234977905260174, 0.0008263571578542328, 0.0008292165251824481, 0.0008320758925106635, 0.0008349352598388788, 0.0008377946271670941, 0.0008406539944953095, 0.0008435133618235248, 0.0008463727291517401, 0.0008492320964799554, 0.0008520914638081708, 0.0008549508311363861, 0.0008578101984646015, 0.0008606695657928168, 0.0008635289331210322, 0.0008663883004492475, 0.0008692476677774629, 0.0008721070351056781, 0.0008749664024338935, 0.0008778257697621088, 0.0008806851370903242, 0.0008835445044185395, 0.0008864038717467549, 0.0008892632390749702, 0.0008921226064031854, 0.000894981973731401, 0.0008978413410596162, 0.0009007007083878316, 0.0009035600757160469, 0.0009064194430442623, 0.0009092788103724776, 0.000912138177700693, 0.0009149975450289083, 0.0009178569123571236, 0.0009207162796853389, 0.0009235756470135543, 0.0009264350143417696, 0.000929294381669985, 0.0009321537489982003, 0.0009350131163264157, 0.000937872483654631, 0.0009407318509828464, 0.0009435912183110616, 0.0009464505856392769, 0.0009493099529674923, 0.0009521693202957076, 0.000955028687623923, 0.0009578880549521383, 0.0009607474222803537, 0.000963606789608569, 0.0009664661569367843, 0.0009693255242649996, 0.000972184891593215, 0.0009750442589214303, 0.0009779036262496457, 0.000980762993577861, 0.0009836223609060765, 0.0009864817282342917, 0.000989341095562507, 0.0009922004628907224, 0.0009950598302189376, 0.000997919197547153, 0.0010007785648753684, 0.0010036379322035838, 0.001006497299531799, 0.0010093566668600144, 0.0010122160341882297, 0.0010150754015164451, 0.0010179347688446603, 0.0010207941361728757, 0.001023653503501091, 0.0010265128708293065, 0.0010293722381575217, 0.001032231605485737, 0.0010350909728139527, 0.0010379503401421678, 0.0010408097074703832, 0.0010436690747985984, 0.0010465284421268138, 0.0010493878094550292, 0.0010522471767832446, 0.0010551065441114598, 0.0010579659114396752, 0.0010608252787678905, 0.001063684646096106, 0.0010665440134243211, 0.0010694033807525365, 0.001072262748080752, 0.0010751221154089673, 0.0010779814827371825, 0.0010808408500653979, 0.0010837002173936133, 0.0010865595847218286, 0.0010894189520500438, 0.0010922783193782592, 0.0010951376867064746, 0.00109799705403469, 0.0011008564213629052, 0.0011037157886911206, 0.0011065751560193357, 0.0011094345233475513, 0.0011122938906757665, 0.001115153258003982, 0.001118012625332197, 0.0011208719926604127, 0.0011237313599886279, 0.0011265907273168433, 0.0011294500946450584, 0.001132309461973274, 0.0011351688293014894, 0.0011380281966297046, 0.00114088756395792, 0.0011437469312861354, 0.0011466062986143508, 0.001149465665942566, 0.0011523250332707814, 0.0011551844005989965, 0.0011580437679272121, 0.0011609031352554273, 0.0011637625025836427, 0.0011666218699118579, 0.0011694812372400735, 0.0011723406045682887, 0.001175199971896504, 0.0011780593392247192, 0.0011809187065529349, 0.00118377807388115, 0.0011866374412093654, 0.0011894968085375806, 0.0011923561758657962, 0.0011952155431940114, 0.0011980749105222268, 0.001200934277850442, 0.0012037936451786573, 0.0012066530125068727, 0.0012095123798350881, 0.0012123717471633033, 0.0012152311144915187, 0.001218090481819734, 0.0012209498491479495, 0.0012238092164761646, 0.00122666858380438, 0.0012295279511325957, 0.0012323873184608108, 0.0012352466857890262, 0.0012381060531172414, 0.001240965420445457, 0.0012438247877736722, 0.0012466841551018876, 0.0012495435224301027, 0.0012524028897583184, 0.0012552622570865335, 0.001258121624414749, 0.001260980991742964, 0.0012638403590711795, 0.0012666997263993949, 0.0012695590937276103, 0.0012724184610558254, 0.0012752778283840408, 0.0012781371957122562, 0.0012809965630404716, 0.0012838559303686868, 0.0012867152976969022, 0.0012895746650251176, 0.001292434032353333, 0.0012952933996815482, 0.0012981527670097635, 0.001301012134337979, 0.0013038715016661943, 0.0013067308689944095, 0.001309590236322625, 0.00131244960365084, 0.0013153089709790557, 0.0013181683383072709, 0.0013210277056354862, 0.0013238870729637016, 0.001326746440291917, 0.0013296058076201324, 0.0013324651749483476, 0.001335324542276563, 0.0013381839096047784, 0.0013410432769329938, 0.001343902644261209, 0.0013467620115894243, 0.0013496213789176397, 0.0013524807462458551, 0.0013553401135740703, 0.0013581994809022857, 0.0013610588482305009, 0.0013639182155587165, 0.0013667775828869317, 0.001369636950215147, 0.0013724963175433622, 0.0013753556848715778, 0.001378215052199793, 0.0013810744195280084, 0.0013839337868562236, 0.0013867931541844392, 0.0013896525215126544, 0.0013925118888408698, 0.001395371256169085, 0.0013982306234973005, 0.0014010899908255157, 0.001403949358153731, 0.0014068087254819463, 0.0014096680928101619, 0.0014125274601383773, 0.0014153868274665925, 0.0014182461947948078, 0.001421105562123023, 0.0014239649294512386, 0.0014268242967794538])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_04050714647c4e4cae91efb2ce0cbbdf.x = d3.scale.linear()
              .domain([0.0, 0.0014268242967794538])
              .range([0, 400]);

    color_map_04050714647c4e4cae91efb2ce0cbbdf.legend = L.control({position: 'topright'});
    color_map_04050714647c4e4cae91efb2ce0cbbdf.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_04050714647c4e4cae91efb2ce0cbbdf.legend.addTo(map_d1bbd0b005b548308eb89225260d95d9);

    color_map_04050714647c4e4cae91efb2ce0cbbdf.xAxis = d3.svg.axis()
        .scale(color_map_04050714647c4e4cae91efb2ce0cbbdf.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.0002378040494632423, 0.0004756080989264846, 0.0007134121483897269, 0.0009512161978529692, 0.0011890202473162116, 0.0014268242967794538]);

    color_map_04050714647c4e4cae91efb2ce0cbbdf.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_04050714647c4e4cae91efb2ce0cbbdf.g = color_map_04050714647c4e4cae91efb2ce0cbbdf.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_04050714647c4e4cae91efb2ce0cbbdf.g.selectAll("rect")
        .data(color_map_04050714647c4e4cae91efb2ce0cbbdf.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_04050714647c4e4cae91efb2ce0cbbdf.x(color_map_04050714647c4e4cae91efb2ce0cbbdf.color.domain()[i - 1]) : color_map_04050714647c4e4cae91efb2ce0cbbdf.x.range()[0],
            x1: i < color_map_04050714647c4e4cae91efb2ce0cbbdf.color.domain().length ? color_map_04050714647c4e4cae91efb2ce0cbbdf.x(color_map_04050714647c4e4cae91efb2ce0cbbdf.color.domain()[i]) : color_map_04050714647c4e4cae91efb2ce0cbbdf.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_04050714647c4e4cae91efb2ce0cbbdf.g.call(color_map_04050714647c4e4cae91efb2ce0cbbdf.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('65_PCdoB');

