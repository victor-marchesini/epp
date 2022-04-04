    
            var map_a399b361565b4d50bfd4fcdcd7871945 = L.map(
                "map_a399b361565b4d50bfd4fcdcd7871945",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_c25d00197a4945daa67ffebb15b94510 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_a399b361565b4d50bfd4fcdcd7871945);
        
    
            var choropleth_23b2d578d2e24342ab489adface63e1d = L.featureGroup(
                {}
            ).addTo(map_a399b361565b4d50bfd4fcdcd7871945);
        
    
        function geo_json_bdc7b7493d074aaca06d5ac095ae035a_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 418: case 335: case 403: case 470: case 478: case 380: case 369: case 392: case 351: case 382: case 397: case 346: case 390: case 368: case 329: case 328: case 445: case 429: case 451: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 439: case 441: case 455: case 472: case 396: case 432: case 415: case 408: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 377: case 434: case 453: case 446: case 419: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 436: case 483: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 467: case 466: case 442: case 361: case 356: case 465: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_bdc7b7493d074aaca06d5ac095ae035a_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_bdc7b7493d074aaca06d5ac095ae035a = L.geoJson(null, {
                onEachFeature: geo_json_bdc7b7493d074aaca06d5ac095ae035a_onEachFeature,
            
                style: geo_json_bdc7b7493d074aaca06d5ac095ae035a_styler,
        });

        function geo_json_bdc7b7493d074aaca06d5ac095ae035a_add (data) {
            geo_json_bdc7b7493d074aaca06d5ac095ae035a
                .addData(data)
                .addTo(choropleth_23b2d578d2e24342ab489adface63e1d);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_bdc7b7493d074aaca06d5ac095ae035a_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_1d48278bc41849f9a8cb60ba3cdfb403 = {};

    
    color_map_1d48278bc41849f9a8cb60ba3cdfb403.color = d3.scale.threshold()
              .domain([0.0, 4.126608409113735e-06, 8.25321681822747e-06, 1.2379825227341205e-05, 1.650643363645494e-05, 2.0633042045568674e-05, 2.475965045468241e-05, 2.8886258863796146e-05, 3.301286727290988e-05, 3.7139475682023615e-05, 4.126608409113735e-05, 4.539269250025109e-05, 4.951930090936482e-05, 5.364590931847855e-05, 5.777251772759229e-05, 6.189912613670602e-05, 6.602573454581976e-05, 7.015234295493348e-05, 7.427895136404723e-05, 7.840555977316096e-05, 8.25321681822747e-05, 8.665877659138844e-05, 9.078538500050217e-05, 9.49119934096159e-05, 9.903860181872964e-05, 0.00010316521022784337, 0.0001072918186369571, 0.00011141842704607084, 0.00011554503545518458, 0.00011967164386429832, 0.00012379825227341204, 0.00012792486068252578, 0.00013205146909163953, 0.00013617807750075325, 0.00014030468590986697, 0.0001444312943189807, 0.00014855790272809446, 0.0001526845111372082, 0.00015681111954632192, 0.00016093772795543564, 0.0001650643363645494, 0.0001691909447736631, 0.00017331755318277688, 0.0001774441615918906, 0.00018157077000100435, 0.00018569737841011807, 0.0001898239868192318, 0.00019395059522834553, 0.00019807720363745928, 0.00020220381204657303, 0.00020633042045568674, 0.0002104570288648005, 0.0002145836372739142, 0.00021871024568302793, 0.00022283685409214168, 0.00022696346250125542, 0.00023109007091036917, 0.0002352166793194829, 0.00023934328772859663, 0.00024346989613771035, 0.00024759650454682407, 0.0002517231129559378, 0.00025584972136505156, 0.00025997632977416526, 0.00026410293818327906, 0.0002682295465923928, 0.0002723561550015065, 0.00027648276341062024, 0.00028060937181973393, 0.00028473598022884773, 0.0002888625886379614, 0.00029298919704707517, 0.0002971158054561889, 0.0003012424138653026, 0.0003053690222744164, 0.0003094956306835301, 0.00031362223909264385, 0.0003177488475017576, 0.0003218754559108713, 0.0003260020643199851, 0.0003301286727290988, 0.0003342552811382125, 0.0003383818895473262, 0.00034250849795644, 0.00034663510636555377, 0.00035076171477466746, 0.0003548883231837812, 0.0003590149315928949, 0.0003631415400020087, 0.0003672681484111224, 0.00037139475682023614, 0.0003755213652293499, 0.0003796479736384636, 0.0003837745820475774, 0.00038790119045669107, 0.0003920277988658048, 0.00039615440727491856, 0.0004002810156840323, 0.00040440762409314605, 0.00040853423250225974, 0.0004126608409113735, 0.0004167874493204872, 0.000420914057729601, 0.00042504066613871473, 0.0004291672745478284, 0.00043329388295694217, 0.00043742049136605586, 0.00044154709977516966, 0.00044567370818428335, 0.0004498003165933971, 0.00045392692500251084, 0.00045805353341162454, 0.00046218014182073834, 0.00046630675022985203, 0.0004704333586389658, 0.00047455996704807947, 0.00047868657545719327, 0.000482813183866307, 0.0004869397922754207, 0.0004910664006845345, 0.0004951930090936481, 0.0004993196175027619, 0.0005034462259118756, 0.0005075728343209894, 0.0005116994427301031, 0.0005158260511392169, 0.0005199526595483305, 0.0005240792679574443, 0.0005282058763665581, 0.0005323324847756718, 0.0005364590931847856, 0.0005405857015938992, 0.000544712310003013, 0.0005488389184121268, 0.0005529655268212405, 0.0005570921352303543, 0.0005612187436394679, 0.0005653453520485817, 0.0005694719604576955, 0.0005735985688668092, 0.0005777251772759229, 0.0005818517856850365, 0.0005859783940941503, 0.0005901050025032641, 0.0005942316109123778, 0.0005983582193214915, 0.0006024848277306052, 0.000606611436139719, 0.0006107380445488328, 0.0006148646529579465, 0.0006189912613670602, 0.0006231178697761739, 0.0006272444781852877, 0.0006313710865944015, 0.0006354976950035152, 0.0006396243034126289, 0.0006437509118217426, 0.0006478775202308564, 0.0006520041286399702, 0.0006561307370490838, 0.0006602573454581976, 0.0006643839538673114, 0.000668510562276425, 0.0006726371706855389, 0.0006767637790946524, 0.0006808903875037662, 0.00068501699591288, 0.0006891436043219937, 0.0006932702127311075, 0.0006973968211402211, 0.0007015234295493349, 0.0007056500379584487, 0.0007097766463675624, 0.0007139032547766762, 0.0007180298631857898, 0.0007221564715949036, 0.0007262830800040174, 0.0007304096884131311, 0.0007345362968222448, 0.0007386629052313585, 0.0007427895136404723, 0.0007469161220495861, 0.0007510427304586998, 0.0007551693388678135, 0.0007592959472769271, 0.000763422555686041, 0.0007675491640951547, 0.0007716757725042684, 0.0007758023809133821, 0.0007799289893224958, 0.0007840555977316096, 0.0007881822061407234, 0.0007923088145498371, 0.0007964354229589508, 0.0008005620313680646, 0.0008046886397771783, 0.0008088152481862921, 0.0008129418565954057, 0.0008170684650045195, 0.0008211950734136333, 0.000825321681822747, 0.0008294482902318608, 0.0008335748986409744, 0.0008377015070500882, 0.000841828115459202, 0.0008459547238683157, 0.0008500813322774295, 0.000854207940686543, 0.0008583345490956568, 0.0008624611575047706, 0.0008665877659138843, 0.000870714374322998, 0.0008748409827321117, 0.0008789675911412255, 0.0008830941995503393, 0.000887220807959453, 0.0008913474163685667, 0.0008954740247776804, 0.0008996006331867942, 0.000903727241595908, 0.0009078538500050217, 0.0009119804584141354, 0.0009161070668232491, 0.0009202336752323629, 0.0009243602836414767, 0.0009284868920505904, 0.0009326135004597041, 0.0009367401088688177, 0.0009408667172779315, 0.0009449933256870453, 0.0009491199340961589, 0.0009532465425052727, 0.0009573731509143865, 0.0009614997593235002, 0.000965626367732614, 0.0009697529761417276, 0.0009738795845508414, 0.000978006192959955, 0.000982132801369069, 0.0009862594097781827, 0.0009903860181872963, 0.00099451262659641, 0.0009986392350055239, 0.0010027658434146377, 0.0010068924518237513, 0.001011019060232865, 0.0010151456686419789, 0.0010192722770510925, 0.0010233988854602063, 0.0010275254938693198, 0.0010316521022784339, 0.0010357787106875474, 0.001039905319096661, 0.001044031927505775, 0.0010481585359148886, 0.0010522851443240024, 0.0010564117527331162, 0.0010605383611422298, 0.0010646649695513436, 0.0010687915779604572, 0.0010729181863695712, 0.0010770447947786848, 0.0010811714031877984, 0.0010852980115969124, 0.001089424620006026, 0.0010935512284151398, 0.0010976778368242536, 0.0011018044452333672, 0.001105931053642481, 0.0011100576620515946, 0.0011141842704607086, 0.0011183108788698222, 0.0011224374872789357, 0.0011265640956880498, 0.0011306907040971633, 0.001134817312506277, 0.001138943920915391, 0.0011430705293245045, 0.0011471971377336183, 0.001151323746142732, 0.0011554503545518457, 0.0011595769629609595, 0.001163703571370073, 0.001167830179779187, 0.0011719567881883007, 0.0011760833965974143, 0.0011802100050065283, 0.0011843366134156419, 0.0011884632218247557, 0.0011925898302338695, 0.001196716438642983, 0.0012008430470520969, 0.0012049696554612104, 0.0012090962638703245, 0.001213222872279438, 0.0012173494806885516, 0.0012214760890976656, 0.0012256026975067792, 0.001229729305915893, 0.0012338559143250068, 0.0012379825227341204, 0.0012421091311432342, 0.0012462357395523478, 0.0012503623479614618, 0.0012544889563705754, 0.001258615564779689, 0.001262742173188803, 0.0012668687815979166, 0.0012709953900070304, 0.0012751219984161442, 0.0012792486068252578, 0.0012833752152343716, 0.0012875018236434852, 0.001291628432052599, 0.0012957550404617128, 0.0012998816488708263, 0.0013040082572799404, 0.001308134865689054, 0.0013122614740981675, 0.0013163880825072815, 0.0013205146909163951, 0.001324641299325509, 0.0013287679077346227, 0.0013328945161437363, 0.00133702112455285, 0.0013411477329619637, 0.0013452743413710777, 0.0013494009497801913, 0.0013535275581893049, 0.001357654166598419, 0.0013617807750075325, 0.0013659073834166463, 0.00137003399182576, 0.0013741606002348737, 0.0013782872086439875, 0.001382413817053101, 0.001386540425462215, 0.0013906670338713286, 0.0013947936422804422, 0.0013989202506895562, 0.0014030468590986698, 0.0014071734675077836, 0.0014113000759168974, 0.001415426684326011, 0.0014195532927351248, 0.0014236799011442384, 0.0014278065095533524, 0.001431933117962466, 0.0014360597263715796, 0.0014401863347806936, 0.0014443129431898072, 0.0014484395515989208, 0.0014525661600080348, 0.0014566927684171484, 0.0014608193768262622, 0.001464945985235376, 0.0014690725936444896, 0.0014731992020536034, 0.001477325810462717, 0.001481452418871831, 0.0014855790272809445, 0.0014897056356900581, 0.0014938322440991721, 0.0014979588525082857, 0.0015020854609173995, 0.0015062120693265133, 0.001510338677735627, 0.0015144652861447407, 0.0015185918945538543, 0.0015227185029629683, 0.001526845111372082, 0.0015309717197811955, 0.0015350983281903095, 0.001539224936599423, 0.0015433515450085369, 0.0015474781534176507, 0.0015516047618267643, 0.001555731370235878, 0.0015598579786449916, 0.0015639845870541057, 0.0015681111954632192, 0.0015722378038723328, 0.0015763644122814468, 0.0015804910206905604, 0.0015846176290996742, 0.001588744237508788, 0.0015928708459179016, 0.0015969974543270154, 0.0016011240627361292, 0.0016052506711452428, 0.0016093772795543566, 0.0016135038879634702, 0.0016176304963725842, 0.0016217571047816978, 0.0016258837131908114, 0.0016300103215999254, 0.001634136930009039, 0.0016382635384181528, 0.0016423901468272666, 0.0016465167552363802, 0.001650643363645494, 0.0016547699720546075, 0.0016588965804637216, 0.0016630231888728351, 0.0016671497972819487, 0.0016712764056910627, 0.0016754030141001763, 0.0016795296225092901, 0.001683656230918404, 0.0016877828393275175, 0.0016919094477366313, 0.001696036056145745, 0.001700162664554859, 0.0017042892729639725, 0.001708415881373086, 0.0017125424897822, 0.0017166690981913137, 0.0017207957066004275, 0.0017249223150095413, 0.0017290489234186549, 0.0017331755318277687, 0.0017373021402368825, 0.001741428748645996, 0.0017455553570551099, 0.0017496819654642234, 0.0017538085738733375, 0.001757935182282451, 0.0017620617906915646, 0.0017661883991006786, 0.0017703150075097922, 0.001774441615918906, 0.0017785682243280198, 0.0017826948327371334, 0.0017868214411462472, 0.0017909480495553608, 0.0017950746579644748, 0.0017992012663735884, 0.001803327874782702, 0.001807454483191816, 0.0018115810916009296, 0.0018157077000100434, 0.0018198343084191572, 0.0018239609168282708, 0.0018280875252373846, 0.0018322141336464981, 0.0018363407420556122, 0.0018404673504647257, 0.0018445939588738393, 0.0018487205672829533, 0.001852847175692067, 0.0018569737841011807, 0.0018611003925102945, 0.0018652270009194081, 0.001869353609328522, 0.0018734802177376355, 0.0018776068261467495, 0.001881733434555863, 0.0018858600429649767, 0.0018899866513740907, 0.0018941132597832043, 0.0018982398681923179, 0.0019023664766014319, 0.0019064930850105455, 0.0019106196934196593, 0.001914746301828773, 0.0019188729102378867, 0.0019229995186470005, 0.001927126127056114, 0.001931252735465228, 0.0019353793438743416, 0.0019395059522834552, 0.0019436325606925692, 0.0019477591691016828, 0.0019518857775107966, 0.00195601238591991, 0.001960138994329024, 0.001964265602738138, 0.0019683922111472514, 0.0019725188195563654, 0.001976645427965479, 0.0019807720363745926, 0.0019848986447837066, 0.00198902525319282, 0.001993151861601934, 0.0019972784700110478, 0.0020014050784201614, 0.0020055316868292754, 0.002009658295238389, 0.0020137849036475025, 0.0020179115120566166, 0.00202203812046573, 0.0020261647288748437, 0.0020302913372839577, 0.0020344179456930713, 0.002038544554102185, 0.0020426711625112985, 0.0020467977709204125, 0.0020509243793295265, 0.0020550509877386397, 0.0020591775961477537])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_1d48278bc41849f9a8cb60ba3cdfb403.x = d3.scale.linear()
              .domain([0.0, 0.0020591775961477537])
              .range([0, 400]);

    color_map_1d48278bc41849f9a8cb60ba3cdfb403.legend = L.control({position: 'topright'});
    color_map_1d48278bc41849f9a8cb60ba3cdfb403.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_1d48278bc41849f9a8cb60ba3cdfb403.legend.addTo(map_a399b361565b4d50bfd4fcdcd7871945);

    color_map_1d48278bc41849f9a8cb60ba3cdfb403.xAxis = d3.svg.axis()
        .scale(color_map_1d48278bc41849f9a8cb60ba3cdfb403.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.0003431962660246256, 0.0006863925320492512, 0.0010295887980738769, 0.0013727850640985024, 0.001715981330123128, 0.0020591775961477537]);

    color_map_1d48278bc41849f9a8cb60ba3cdfb403.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_1d48278bc41849f9a8cb60ba3cdfb403.g = color_map_1d48278bc41849f9a8cb60ba3cdfb403.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_1d48278bc41849f9a8cb60ba3cdfb403.g.selectAll("rect")
        .data(color_map_1d48278bc41849f9a8cb60ba3cdfb403.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_1d48278bc41849f9a8cb60ba3cdfb403.x(color_map_1d48278bc41849f9a8cb60ba3cdfb403.color.domain()[i - 1]) : color_map_1d48278bc41849f9a8cb60ba3cdfb403.x.range()[0],
            x1: i < color_map_1d48278bc41849f9a8cb60ba3cdfb403.color.domain().length ? color_map_1d48278bc41849f9a8cb60ba3cdfb403.x(color_map_1d48278bc41849f9a8cb60ba3cdfb403.color.domain()[i]) : color_map_1d48278bc41849f9a8cb60ba3cdfb403.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_1d48278bc41849f9a8cb60ba3cdfb403.g.call(color_map_1d48278bc41849f9a8cb60ba3cdfb403.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('25_50_MARCOS PAULO COSTA DA SILVA');

