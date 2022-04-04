    
            var map_566630c77feb4ab982818225afb67725 = L.map(
                "map_566630c77feb4ab982818225afb67725",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_57a27429d22f4793b3fe5f1498a8185e = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_566630c77feb4ab982818225afb67725);
        
    
            var choropleth_8e7ab09b259749e6af81c95e606913d8 = L.featureGroup(
                {}
            ).addTo(map_566630c77feb4ab982818225afb67725);
        
    
        function geo_json_920f8bbb0a7747409997b6d25e215b26_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 443: case 428: case 410: case 325: case 478: case 474: case 380: case 393: case 381: case 369: case 338: case 340: case 333: case 416: case 361: case 362: case 348: case 334: case 358: case 328: case 360: case 347: case 350: case 457: case 337: case 463: case 483: case 469: case 451: case 387: case 378: case 511: case 458: case 450: case 389: case 384: case 510: case 414: case 406: case 374: case 476: case 890: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 440: case 424: case 473: case 472: case 468: case 470: case 353: case 426: case 400: case 396: case 411: case 397: case 395: case 371: case 359: case 398: case 385: case 386: case 372: case 326: case 331: case 459: case 433: case 409: case 391: case 477: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 447: case 456: case 455: case 442: case 436: case 446: case 444: case 399: case 485: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 438: case 449: case 462: case 437: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 453: case 467: case 466: case 403: case 464: case 419: case 415: case 408: case 364: case 339: case 330: case 357: case 445: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_920f8bbb0a7747409997b6d25e215b26_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_920f8bbb0a7747409997b6d25e215b26 = L.geoJson(null, {
                onEachFeature: geo_json_920f8bbb0a7747409997b6d25e215b26_onEachFeature,
            
                style: geo_json_920f8bbb0a7747409997b6d25e215b26_styler,
        });

        function geo_json_920f8bbb0a7747409997b6d25e215b26_add (data) {
            geo_json_920f8bbb0a7747409997b6d25e215b26
                .addData(data)
                .addTo(choropleth_8e7ab09b259749e6af81c95e606913d8);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_920f8bbb0a7747409997b6d25e215b26_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_52cd4225e0a644308f3035725375e5b0 = {};

    
    color_map_52cd4225e0a644308f3035725375e5b0.color = d3.scale.threshold()
              .domain([0.0007568528085820527, 0.000786101710444198, 0.0008153506123063434, 0.0008445995141684887, 0.0008738484160306342, 0.0009030973178927794, 0.0009323462197549249, 0.0009615951216170702, 0.0009908440234792156, 0.001020092925341361, 0.0010493418272035063, 0.0010785907290656517, 0.001107839630927797, 0.0011370885327899424, 0.0011663374346520877, 0.0011955863365142331, 0.0012248352383763786, 0.0012540841402385238, 0.001283333042100669, 0.0013125819439628148, 0.00134183084582496, 0.0013710797476871052, 0.0014003286495492507, 0.0014295775514113962, 0.0014588264532735414, 0.0014880753551356866, 0.0015173242569978323, 0.0015465731588599776, 0.0015758220607221228, 0.0016050709625842683, 0.0016343198644464137, 0.001663568766308559, 0.0016928176681707042, 0.0017220665700328499, 0.0017513154718949951, 0.0017805643737571404, 0.0018098132756192856, 0.0018390621774814313, 0.0018683110793435765, 0.0018975599812057218, 0.001926808883067867, 0.0019560577849300127, 0.001985306686792158, 0.002014555588654303, 0.002043804490516449, 0.002073053392378594, 0.0021023022942407393, 0.002131551196102885, 0.0021608000979650302, 0.0021900489998271755, 0.0022192979016893207, 0.002248546803551466, 0.0022777957054136116, 0.002307044607275757, 0.002336293509137902, 0.002365542411000048, 0.002394791312862193, 0.0024240402147243383, 0.002453289116586484, 0.002482538018448629, 0.0025117869203107744, 0.00254103582217292, 0.0025702847240350653, 0.0025995336258972106, 0.002628782527759356, 0.002658031429621501, 0.0026872803314836467, 0.002716529233345792, 0.0027457781352079372, 0.002775027037070083, 0.002804275938932228, 0.0028335248407943734, 0.0028627737426565186, 0.0028920226445186643, 0.0029212715463808095, 0.002950520448242955, 0.0029797693501051005, 0.0030090182519672453, 0.003038267153829391, 0.0030675160556915366, 0.0030967649575536814, 0.003126013859415827, 0.0031552627612779723, 0.0031845116631401176, 0.0032137605650022633, 0.0032430094668644085, 0.0032722583687265537, 0.003301507270588699, 0.0033307561724508447, 0.00336000507431299, 0.003389253976175135, 0.003418502878037281, 0.003447751779899426, 0.0034770006817615713, 0.003506249583623717, 0.003535498485485862, 0.0035647473873480075, 0.0035939962892101527, 0.0036232451910722984, 0.0036524940929344436, 0.003681742994796589, 0.0037109918966587345, 0.0037402407985208793, 0.003769489700383025, 0.0037987386022451707, 0.0038279875041073155, 0.003857236405969461, 0.003886485307831607, 0.003915734209693752, 0.003944983111555897, 0.003974232013418043, 0.004003480915280188, 0.0040327298171423335, 0.004061978719004479, 0.004091227620866624, 0.00412047652272877, 0.004149725424590915, 0.004178974326453061, 0.004208223228315206, 0.0042374721301773515, 0.004266721032039496, 0.004295969933901642, 0.004325218835763788, 0.0043544677376259324, 0.004383716639488078, 0.004412965541350223, 0.004442214443212369, 0.004471463345074514, 0.004500712246936659, 0.004529961148798805, 0.0045592100506609496, 0.004588458952523095, 0.004617707854385241, 0.004646956756247386, 0.004676205658109531, 0.004705454559971677, 0.004734703461833822, 0.0047639523636959676, 0.004793201265558113, 0.004822450167420258, 0.004851699069282404, 0.0048809479711445485, 0.004910196873006694, 0.00493944577486884, 0.004968694676730985, 0.00499794357859313, 0.005027192480455276, 0.005056441382317421, 0.0050856902841795665, 0.005114939186041711, 0.005144188087903857, 0.005173436989766003, 0.005202685891628148, 0.005231934793490293, 0.005261183695352438, 0.005290432597214584, 0.005319681499076729, 0.005348930400938875, 0.005378179302801021, 0.0054074282046631655, 0.00543667710652531, 0.005465926008387456, 0.005495174910249602, 0.005524423812111747, 0.005553672713973892, 0.005582921615836038, 0.005612170517698183, 0.005641419419560328, 0.005670668321422474, 0.005699917223284619, 0.005729166125146764, 0.00575841502700891, 0.005787663928871055, 0.005816912830733201, 0.005846161732595345, 0.005875410634457491, 0.005904659536319637, 0.005933908438181782, 0.005963157340043927, 0.005992406241906072, 0.006021655143768218, 0.006050904045630363, 0.006080152947492509, 0.006109401849354655, 0.0061386507512167995, 0.006167899653078944, 0.00619714855494109, 0.006226397456803236, 0.006255646358665381, 0.006284895260527526, 0.006314144162389672, 0.006343393064251817, 0.006372641966113962, 0.006401890867976108, 0.006431139769838253, 0.0064603886717003985, 0.006489637573562544, 0.006518886475424689, 0.006548135377286835, 0.0065773842791489795, 0.006606633181011125, 0.006635882082873271, 0.0066651309847354165, 0.006694379886597561, 0.006723628788459706, 0.006752877690321852, 0.0067821265921839975, 0.006811375494046143, 0.006840624395908289, 0.0068698732977704345, 0.006899122199632578, 0.006928371101494724, 0.00695762000335687, 0.0069868689052190154, 0.007016117807081161, 0.007045366708943306, 0.007074615610805451, 0.007103864512667596, 0.007133113414529742, 0.007162362316391888, 0.0071916112182540326, 0.007220860120116178, 0.007250109021978323, 0.007279357923840469, 0.007308606825702614, 0.007337855727564759, 0.007367104629426905, 0.0073963535312890506, 0.007425602433151195, 0.007454851335013341, 0.007484100236875486, 0.0075133491387376315, 0.007542598040599777, 0.007571846942461923, 0.0076010958443240685, 0.0076303447461862125, 0.007659593648048358, 0.007688842549910504, 0.0077180914517726495, 0.007747340353634795, 0.00777658925549694, 0.007805838157359085, 0.007835087059221231, 0.007864335961083376, 0.007893584862945523, 0.007922833764807668, 0.007952082666669812, 0.007981331568531957, 0.008010580470394104, 0.008039829372256248, 0.008069078274118393, 0.00809832717598054, 0.008127576077842685, 0.00815682497970483, 0.008186073881566976, 0.00821532278342912, 0.008244571685291266, 0.008273820587153412, 0.008303069489015557, 0.008332318390877703, 0.008361567292739847, 0.008390816194601993, 0.008420065096464138, 0.008449313998326284, 0.00847856290018843, 0.008507811802050574, 0.008537060703912719, 0.008566309605774865, 0.00859555850763701, 0.008624807409499155, 0.008654056311361302, 0.008683305213223446, 0.008712554115085591, 0.008741803016947736, 0.008771051918809883, 0.008800300820672027, 0.008829549722534174, 0.008858798624396317, 0.008888047526258464, 0.008917296428120608, 0.008946545329982755, 0.0089757942318449, 0.009005043133707044, 0.009034292035569191, 0.009063540937431336, 0.009092789839293482, 0.009122038741155627, 0.009151287643017774, 0.009180536544879917, 0.009209785446742062, 0.009239034348604208, 0.009268283250466353, 0.0092975321523285, 0.009326781054190644, 0.009356029956052789, 0.009385278857914936, 0.00941452775977708, 0.009443776661639227, 0.00947302556350137, 0.009502274465363517, 0.009531523367225661, 0.009560772269087806, 0.009590021170949953, 0.009619270072812098, 0.009648518974674244, 0.009677767876536389, 0.009707016778398534, 0.00973626568026068, 0.009765514582122823, 0.00979476348398497, 0.009824012385847115, 0.009853261287709261, 0.009882510189571406, 0.00991175909143355, 0.009941007993295697, 0.009970256895157842, 0.009999505797019989, 0.010028754698882134, 0.010058003600744278, 0.010087252502606423, 0.010116501404468568, 0.010145750306330715, 0.01017499920819286, 0.010204248110055006, 0.01023349701191715, 0.010262745913779295, 0.010291994815641442, 0.010321243717503587, 0.010350492619365732, 0.010379741521227876, 0.010408990423090023, 0.010438239324952168, 0.010467488226814313, 0.01049673712867646, 0.010525986030538604, 0.01055523493240075, 0.010584483834262895, 0.010613732736125042, 0.010642981637987185, 0.01067223053984933, 0.010701479441711476, 0.010730728343573621, 0.010759977245435768, 0.010789226147297912, 0.010818475049160057, 0.010847723951022204, 0.010876972852884349, 0.010906221754746495, 0.010935470656608638, 0.010964719558470785, 0.01099396846033293, 0.011023217362195074, 0.011052466264057221, 0.011081715165919366, 0.011110964067781512, 0.011140212969643657, 0.011169461871505802, 0.011198710773367948, 0.011227959675230091, 0.011257208577092238, 0.011286457478954383, 0.01131570638081653, 0.011344955282678674, 0.011374204184540819, 0.011403453086402966, 0.01143270198826511, 0.011461950890127257, 0.011491199791989402, 0.011520448693851547, 0.011549697595713691, 0.011578946497575836, 0.011608195399437983, 0.011637444301300127, 0.011666693203162274, 0.011695942105024419, 0.011725191006886564, 0.01175443990874871, 0.011783688810610855, 0.011812937712473, 0.011842186614335145, 0.011871435516197291, 0.011900684418059436, 0.01192993331992158, 0.011959182221783727, 0.011988431123645872, 0.012017680025508019, 0.012046928927370163, 0.01207617782923231, 0.012105426731094453, 0.012134675632956598, 0.012163924534818744, 0.01219317343668089, 0.012222422338543036, 0.01225167124040518, 0.012280920142267325, 0.012310169044129472, 0.012339417945991617, 0.012368666847853763, 0.012397915749715906, 0.012427164651578053, 0.012456413553440198, 0.012485662455302343, 0.012514911357164489, 0.012544160259026634, 0.01257340916088878, 0.012602658062750925, 0.01263190696461307, 0.012661155866475217, 0.01269040476833736, 0.012719653670199506, 0.012748902572061651, 0.012778151473923798, 0.012807400375785942, 0.012836649277648087, 0.012865898179510234, 0.012895147081372378, 0.012924395983234525, 0.01295364488509667, 0.012982893786958816, 0.01301214268882096, 0.013041391590683104, 0.01307064049254525, 0.013099889394407396, 0.013129138296269542, 0.013158387198131687, 0.013187636099993832, 0.013216885001855978, 0.013246133903718123, 0.01327538280558027, 0.013304631707442413, 0.01333388060930456, 0.013363129511166704, 0.013392378413028849, 0.013421627314890995, 0.01345087621675314, 0.013480125118615287, 0.013509374020477432, 0.013538622922339578, 0.013567871824201723, 0.013597120726063866, 0.013626369627926013, 0.013655618529788157, 0.013684867431650304, 0.013714116333512449, 0.013743365235374594, 0.01377261413723674, 0.013801863039098885, 0.013831111940961031, 0.013860360842823176, 0.013889609744685321, 0.013918858646547466, 0.01394810754840961, 0.013977356450271757, 0.014006605352133902, 0.014035854253996049, 0.014065103155858193, 0.014094352057720338, 0.014123600959582485, 0.01415284986144463, 0.014182098763306774, 0.014211347665168919, 0.014240596567031066, 0.01426984546889321, 0.014299094370755355, 0.014328343272617502, 0.014357592174479647, 0.014386841076341793, 0.014416089978203938, 0.014445338880066085, 0.014474587781928228, 0.014503836683790372, 0.014533085585652519, 0.014562334487514664, 0.01459158338937681, 0.014620832291238955, 0.0146500811931011, 0.014679330094963246, 0.014708578996825391, 0.014737827898687538, 0.014767076800549681, 0.014796325702411827, 0.014825574604273972, 0.014854823506136117, 0.014884072407998264, 0.014913321309860408, 0.014942570211722555, 0.0149718191135847, 0.015001068015446846, 0.015030316917308991, 0.015059565819171134, 0.01508881472103328, 0.015118063622895426, 0.015147312524757572, 0.015176561426619717, 0.015205810328481862, 0.015235059230344008, 0.015264308132206153, 0.0152935570340683, 0.015322805935930444, 0.01535205483779259])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_52cd4225e0a644308f3035725375e5b0.x = d3.scale.linear()
              .domain([0.0007568528085820527, 0.01535205483779259])
              .range([0, 400]);

    color_map_52cd4225e0a644308f3035725375e5b0.legend = L.control({position: 'topright'});
    color_map_52cd4225e0a644308f3035725375e5b0.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_52cd4225e0a644308f3035725375e5b0.legend.addTo(map_566630c77feb4ab982818225afb67725);

    color_map_52cd4225e0a644308f3035725375e5b0.xAxis = d3.svg.axis()
        .scale(color_map_52cd4225e0a644308f3035725375e5b0.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0007568528085820527, 0.003189386480117142, 0.0056219201516522314, 0.008054453823187322, 0.01048698749472241, 0.012919521166257499, 0.01535205483779259]);

    color_map_52cd4225e0a644308f3035725375e5b0.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_52cd4225e0a644308f3035725375e5b0.g = color_map_52cd4225e0a644308f3035725375e5b0.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_52cd4225e0a644308f3035725375e5b0.g.selectAll("rect")
        .data(color_map_52cd4225e0a644308f3035725375e5b0.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_52cd4225e0a644308f3035725375e5b0.x(color_map_52cd4225e0a644308f3035725375e5b0.color.domain()[i - 1]) : color_map_52cd4225e0a644308f3035725375e5b0.x.range()[0],
            x1: i < color_map_52cd4225e0a644308f3035725375e5b0.color.domain().length ? color_map_52cd4225e0a644308f3035725375e5b0.x(color_map_52cd4225e0a644308f3035725375e5b0.color.domain()[i]) : color_map_52cd4225e0a644308f3035725375e5b0.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_52cd4225e0a644308f3035725375e5b0.g.call(color_map_52cd4225e0a644308f3035725375e5b0.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('14_13_ELIKA TAKIMOTO');
