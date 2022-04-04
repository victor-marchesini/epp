    
            var map_bbad7cd6e4cb4be0ae76695dec21dee1 = L.map(
                "map_bbad7cd6e4cb4be0ae76695dec21dee1",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_21b4ce00d7204bec89c3ed03a87d664d = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_bbad7cd6e4cb4be0ae76695dec21dee1);
        
    
            var choropleth_f0269b598f5741a7a53241ed75299f7f = L.featureGroup(
                {}
            ).addTo(map_bbad7cd6e4cb4be0ae76695dec21dee1);
        
    
        function geo_json_860cdcf0248c4cfc9ae3a0d2752be1dc_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 482: case 428: case 410: case 348: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 442: case 380: case 436: case 351: case 333: case 432: case 346: case 390: case 356: case 355: case 350: case 458: case 890: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 443: case 412: case 325: case 440: case 353: case 345: case 363: case 343: case 426: case 404: case 395: case 371: case 359: case 386: case 379: case 372: case 354: case 334: case 358: case 433: case 399: case 388: case 341: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 438: case 447: case 456: case 473: case 468: case 464: case 437: case 444: case 366: case 391: case 402: case 485: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 352: case 398: case 357: case 459: case 463: case 451: case 480: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_860cdcf0248c4cfc9ae3a0d2752be1dc_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_860cdcf0248c4cfc9ae3a0d2752be1dc = L.geoJson(null, {
                onEachFeature: geo_json_860cdcf0248c4cfc9ae3a0d2752be1dc_onEachFeature,
            
                style: geo_json_860cdcf0248c4cfc9ae3a0d2752be1dc_styler,
        });

        function geo_json_860cdcf0248c4cfc9ae3a0d2752be1dc_add (data) {
            geo_json_860cdcf0248c4cfc9ae3a0d2752be1dc
                .addData(data)
                .addTo(choropleth_f0269b598f5741a7a53241ed75299f7f);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_860cdcf0248c4cfc9ae3a0d2752be1dc_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_2a2cdbe35c4b43e28cad47011f4af506 = {};

    
    color_map_2a2cdbe35c4b43e28cad47011f4af506.color = d3.scale.threshold()
              .domain([-0.09029918038770464, -0.08988702485534442, -0.0894748693229842, -0.08906271379062397, -0.08865055825826375, -0.08823840272590351, -0.08782624719354329, -0.08741409166118307, -0.08700193612882284, -0.08658978059646262, -0.0861776250641024, -0.08576546953174218, -0.08535331399938195, -0.08494115846702173, -0.08452900293466149, -0.08411684740230127, -0.08370469186994105, -0.08329253633758082, -0.0828803808052206, -0.08246822527286038, -0.08205606974050016, -0.08164391420813993, -0.0812317586757797, -0.08081960314341947, -0.08040744761105925, -0.07999529207869903, -0.0795831365463388, -0.07917098101397858, -0.07875882548161836, -0.07834666994925814, -0.07793451441689792, -0.07752235888453768, -0.07711020335217747, -0.07669804781981723, -0.07628589228745701, -0.07587373675509679, -0.07546158122273657, -0.07504942569037634, -0.07463727015801612, -0.0742251146256559, -0.07381295909329566, -0.07340080356093545, -0.07298864802857521, -0.07257649249621499, -0.07216433696385477, -0.07175218143149455, -0.07134002589913432, -0.0709278703667741, -0.07051571483441388, -0.07010355930205364, -0.06969140376969343, -0.0692792482373332, -0.06886709270497299, -0.06845493717261275, -0.06804278164025253, -0.0676306261078923, -0.06721847057553208, -0.06680631504317186, -0.06639415951081164, -0.06598200397845141, -0.06556984844609118, -0.06515769291373096, -0.06474553738137073, -0.06433338184901051, -0.06392122631665029, -0.06350907078429006, -0.06309691525192984, -0.0626847597195696, -0.062272604187209396, -0.061860448654849166, -0.06144829312248894, -0.061036137590128714, -0.06062398205776849, -0.06021182652540827, -0.059799670993048046, -0.05938751546068782, -0.05897535992832759, -0.05856320439596737, -0.05815104886360715, -0.057738893331246925, -0.057326737798886696, -0.05691458226652647, -0.05650242673416625, -0.05609027120180603, -0.055678115669445805, -0.055265960137085575, -0.05485380460472535, -0.05444164907236513, -0.0540294935400049, -0.053617338007644684, -0.053205182475284454, -0.05279302694292423, -0.052380871410564, -0.05196871587820378, -0.05155656034584356, -0.051144404813483334, -0.05073224928112311, -0.05032009374876288, -0.04990793821640266, -0.04949578268404244, -0.04908362715168221, -0.04867147161932199, -0.04825931608696176, -0.04784716055460154, -0.04743500502224132, -0.04702284948988109, -0.04661069395752087, -0.04619853842516064, -0.04578638289280042, -0.045374227360440195, -0.04496207182807997, -0.04454991629571975, -0.04413776076335952, -0.0437256052309993, -0.04331344969863907, -0.04290129416627885, -0.04248913863391863, -0.0420769831015584, -0.041664827569198176, -0.04125267203683795, -0.040840516504477724, -0.04042836097211751, -0.04001620543975728, -0.039604049907397056, -0.039191894375036826, -0.0387797388426766, -0.03836758331031639, -0.03795542777795616, -0.037543272245595935, -0.037131116713235705, -0.03671896118087548, -0.03630680564851527, -0.03589465011615504, -0.035482494583794814, -0.035070339051434585, -0.03465818351907436, -0.034246027986714146, -0.03383387245435392, -0.033421716921993694, -0.033009561389633464, -0.03259740585727324, -0.03218525032491301, -0.031773094792552796, -0.03136093926019257, -0.030948783727832344, -0.03053662819547212, -0.03012447266311189, -0.029712317130751675, -0.029300161598391453, -0.028888006066031223, -0.028475850533671, -0.02806369500131077, -0.027651539468950548, -0.027239383936590325, -0.026827228404230102, -0.02641507287186988, -0.026002917339509657, -0.02559076180714942, -0.02517860627478921, -0.024766450742428975, -0.024354295210068752, -0.023942139677708543, -0.023529984145348307, -0.023117828612988084, -0.02270567308062786, -0.02229351754826764, -0.021881362015907416, -0.02146920648354718, -0.02105705095118697, -0.020644895418826734, -0.02023273988646651, -0.019820584354106302, -0.019408428821746065, -0.018996273289385843, -0.01858411775702562, -0.018171962224665397, -0.01775980669230516, -0.017347651159944938, -0.01693549562758473, -0.016523340095224492, -0.01611118456286427, -0.015699029030504047, -0.015286873498143824, -0.014874717965783602, -0.014462562433423365, -0.014050406901063156, -0.01363825136870292, -0.013226095836342697, -0.012813940303982488, -0.012401784771622251, -0.011989629239262029, -0.011577473706901806, -0.011165318174541583, -0.01075316264218136, -0.010341007109821124, -0.009928851577460915, -0.009516696045100678, -0.009104540512740456, -0.008692384980380247, -0.00828022944802001, -0.007868073915659787, -0.007455918383299551, -0.007043762850939342, -0.006631607318579119, -0.0062194517862188825, -0.005807296253858674, -0.005395140721498437, -0.004982985189138214, -0.0045708296567780055, -0.004158674124417769, -0.003746518592057546, -0.0033343630596973095, -0.0029222075273371007, -0.002510051994976864, -0.0020978964626166413, -0.0016857409302564325, -0.0012735853978961958, -0.0008614298655359731, -0.0004492743331757504, -3.711880081552765e-05, 0.0003750367315446951, 0.0007871922639049317, 0.0011993477962651405, 0.0016115033286253772, 0.0020236588609856, 0.0024358143933458087, 0.0028479699257060453, 0.003260125458066268, 0.0036722809904265047, 0.0040844365227867135, 0.004496592055146936, 0.004908747587507173, 0.005320903119867382, 0.005733058652227618, 0.006145214184587841, 0.00655736971694805, 0.0069695252493082865, 0.007381680781668509, 0.007793836314028746, 0.008205991846388955, 0.008618147378749191, 0.009030302911109414, 0.009442458443469623, 0.00985461397582986, 0.010266769508190082, 0.010678925040550305, 0.011091080572910528, 0.01150323610527075, 0.011915391637630987, 0.012327547169991196, 0.012739702702351433, 0.013151858234711655, 0.013564013767071864, 0.0139761692994321, 0.014388324831792323, 0.01480048036415256, 0.015212635896512769, 0.015624791428872992, 0.01603694696123323, 0.016449102493593437, 0.016861258025953674, 0.017273413558313896, 0.017685569090674105, 0.018097724623034342, 0.018509880155394565, 0.0189220356877548, 0.01933419122011501, 0.019746346752475233, 0.02015850228483547, 0.02057065781719568, 0.020982813349555915, 0.021394968881916138, 0.021807124414276347, 0.022219279946636583, 0.022631435478996806, 0.023043591011357042, 0.02345574654371725, 0.023867902076077488, 0.02428005760843771, 0.02469221314079792, 0.025104368673158156, 0.02551652420551838, 0.025928679737878615, 0.026340835270238824, 0.026752990802599047, 0.027165146334959284, 0.027577301867319493, 0.02798945739967973, 0.028401612932039952, 0.02881376846440016, 0.029225923996760397, 0.02963807952912062, 0.030050235061480857, 0.030462390593841066, 0.030874546126201288, 0.031286701658561525, 0.031698857190921734, 0.03211101272328197, 0.03252316825564219, 0.0329353237880024, 0.03334747932036264, 0.03375963485272286, 0.0341717903850831, 0.03458394591744331, 0.03499610144980354, 0.03540825698216375, 0.03582041251452399, 0.036232568046884225, 0.036644723579244434, 0.03705687911160467, 0.03746903464396488, 0.03788119017632509, 0.038293345708685325, 0.03870550124104556, 0.0391176567734058, 0.03952981230576598, 0.039941967838126216, 0.04035412337048645, 0.04076627890284669, 0.0411784344352069, 0.041590589967567135, 0.042002745499927344, 0.04241490103228755, 0.04282705656464779, 0.043239212097008026, 0.04365136762936826, 0.04406352316172847, 0.04447567869408871, 0.04488783422644892, 0.045299989758809125, 0.04571214529116936, 0.0461243008235296, 0.04653645635588981, 0.046948611888250044, 0.04736076742061028, 0.04777292295297049, 0.0481850784853307, 0.048597234017690935, 0.04900938955005117, 0.04942154508241138, 0.04983370061477162, 0.050245856147131854, 0.050658011679492035, 0.05107016721185227, 0.05148232274421251, 0.051894478276572745, 0.052306633808932954, 0.05271878934129319, 0.0531309448736534, 0.05354310040601361, 0.053955255938373844, 0.05436741147073408, 0.05477956700309432, 0.05519172253545453, 0.05560387806781476, 0.05601603360017497, 0.05642818913253518, 0.05684034466489542, 0.057252500197255654, 0.05766465572961586, 0.0580768112619761, 0.058488966794336336, 0.058901122326696545, 0.059313277859056754, 0.05972543339141699, 0.06013758892377723, 0.060549744456137436, 0.06096189998849767, 0.06137405552085791, 0.06178621105321809, 0.06219836658557833, 0.06261052211793856, 0.0630226776502988, 0.06343483318265901, 0.06384698871501925, 0.06425914424737948, 0.06467129977973966, 0.0650834553120999, 0.06549561084446014, 0.06590776637682035, 0.06631992190918058, 0.06673207744154082, 0.06714423297390103, 0.06755638850626124, 0.06796854403862147, 0.06838069957098171, 0.06879285510334192, 0.06920501063570215, 0.06961716616806239, 0.0700293217004226, 0.07044147723278281, 0.07085363276514305, 0.07126578829750328, 0.07167794382986349, 0.07209009936222373, 0.07250225489458396, 0.07291441042694415, 0.07332656595930438, 0.07373872149166462, 0.07415087702402486, 0.07456303255638506, 0.0749751880887453, 0.07538734362110554, 0.07579949915346572, 0.07621165468582596, 0.07662381021818619, 0.0770359657505464, 0.07744812128290664, 0.07786027681526687, 0.07827243234762708, 0.07868458787998729, 0.07909674341234753, 0.07950889894470776, 0.07992105447706797, 0.08033321000942821, 0.08074536554178845, 0.08115752107414863, 0.08156967660650886, 0.0819818321388691, 0.08239398767122934, 0.08280614320358955, 0.08321829873594978, 0.08363045426831002, 0.0840426098006702, 0.08445476533303044, 0.08486692086539067, 0.08527907639775091, 0.08569123193011112, 0.08610338746247136, 0.08651554299483159, 0.08692769852719177, 0.08733985405955201, 0.08775200959191225, 0.08816416512427246, 0.08857632065663269, 0.08898847618899293, 0.08940063172135314, 0.08981278725371335, 0.09022494278607358, 0.09063709831843382, 0.09104925385079403, 0.09146140938315427, 0.0918735649155145, 0.09228572044787468, 0.09269787598023492, 0.09311003151259516, 0.0935221870449554, 0.0939343425773156, 0.09434649810967584, 0.09475865364203608, 0.09517080917439626, 0.09558296470675649, 0.09599512023911673, 0.09640727577147697, 0.09681943130383718, 0.09723158683619741, 0.09764374236855765, 0.09805589790091783, 0.09846805343327807, 0.0988802089656383, 0.09929236449799851, 0.09970452003035875, 0.10011667556271898, 0.1005288310950792, 0.1009409866274394, 0.10135314215979964, 0.10176529769215988, 0.10217745322452008, 0.10258960875688032, 0.10300176428924056, 0.10341391982160074, 0.10382607535396098, 0.10423823088632121, 0.10465038641868145, 0.10506254195104166, 0.1054746974834019, 0.10588685301576213, 0.10629900854812231, 0.10671116408048255, 0.10712331961284279, 0.10753547514520302, 0.10794763067756323, 0.10835978620992347, 0.1087719417422837, 0.10918409727464388, 0.10959625280700412, 0.11000840833936436, 0.11042056387172457, 0.1108327194040848, 0.11124487493644504, 0.11165703046880525, 0.11206918600116546, 0.1124813415335257, 0.11289349706588593, 0.11330565259824614, 0.11371780813060638, 0.11412996366296661, 0.1145421191953268, 0.11495427472768703, 0.11536643026004727])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_2a2cdbe35c4b43e28cad47011f4af506.x = d3.scale.linear()
              .domain([-0.09029918038770464, 0.11536643026004727])
              .range([0, 400]);

    color_map_2a2cdbe35c4b43e28cad47011f4af506.legend = L.control({position: 'topright'});
    color_map_2a2cdbe35c4b43e28cad47011f4af506.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_2a2cdbe35c4b43e28cad47011f4af506.legend.addTo(map_bbad7cd6e4cb4be0ae76695dec21dee1);

    color_map_2a2cdbe35c4b43e28cad47011f4af506.xAxis = d3.svg.axis()
        .scale(color_map_2a2cdbe35c4b43e28cad47011f4af506.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-0.09029918038770464, -0.05602157861307932, -0.021743976838454, 0.012533624936171314, 0.04681122671079664, 0.08108882848542197, 0.11536643026004728]);

    color_map_2a2cdbe35c4b43e28cad47011f4af506.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_2a2cdbe35c4b43e28cad47011f4af506.g = color_map_2a2cdbe35c4b43e28cad47011f4af506.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_2a2cdbe35c4b43e28cad47011f4af506.g.selectAll("rect")
        .data(color_map_2a2cdbe35c4b43e28cad47011f4af506.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_2a2cdbe35c4b43e28cad47011f4af506.x(color_map_2a2cdbe35c4b43e28cad47011f4af506.color.domain()[i - 1]) : color_map_2a2cdbe35c4b43e28cad47011f4af506.x.range()[0],
            x1: i < color_map_2a2cdbe35c4b43e28cad47011f4af506.color.domain().length ? color_map_2a2cdbe35c4b43e28cad47011f4af506.x(color_map_2a2cdbe35c4b43e28cad47011f4af506.color.domain()[i]) : color_map_2a2cdbe35c4b43e28cad47011f4af506.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_2a2cdbe35c4b43e28cad47011f4af506.g.call(color_map_2a2cdbe35c4b43e28cad47011f4af506.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('02_95_VOTO BRANCO');

