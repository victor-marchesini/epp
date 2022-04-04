    
            var map_5ed6064d097244de8d21691a07e3db76 = L.map(
                "map_5ed6064d097244de8d21691a07e3db76",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_66d2614111544256aa8144d8fe248f0d = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_5ed6064d097244de8d21691a07e3db76);
        
    
            var choropleth_e5759906feb64649872bd125d7554ed0 = L.featureGroup(
                {}
            ).addTo(map_5ed6064d097244de8d21691a07e3db76);
        
    
        function geo_json_1bae2e72bbdf4c8ebc6ad2ee1b2b41e6_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 482: case 443: case 428: case 412: case 410: case 325: case 440: case 448: case 438: case 447: case 456: case 473: case 468: case 464: case 437: case 353: case 444: case 345: case 363: case 343: case 426: case 404: case 395: case 371: case 359: case 386: case 348: case 379: case 372: case 354: case 334: case 358: case 350: case 433: case 399: case 366: case 391: case 402: case 388: case 341: case 485: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 377: case 441: case 418: case 424: case 335: case 478: case 474: case 435: case 452: case 392: case 383: case 396: case 375: case 427: case 397: case 346: case 401: case 327: case 329: case 367: case 454: case 430: case 429: case 409: case 469: case 465: case 451: case 370: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 434: case 417: case 472: case 403: case 470: case 432: case 411: case 364: case 326: case 331: case 330: case 357: case 459: case 471: case 461: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 462: case 442: case 436: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 453: case 467: case 466: case 455: case 446: case 419: case 415: case 408: case 339: case 445: case 477: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_1bae2e72bbdf4c8ebc6ad2ee1b2b41e6_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_1bae2e72bbdf4c8ebc6ad2ee1b2b41e6 = L.geoJson(null, {
                onEachFeature: geo_json_1bae2e72bbdf4c8ebc6ad2ee1b2b41e6_onEachFeature,
            
                style: geo_json_1bae2e72bbdf4c8ebc6ad2ee1b2b41e6_styler,
        });

        function geo_json_1bae2e72bbdf4c8ebc6ad2ee1b2b41e6_add (data) {
            geo_json_1bae2e72bbdf4c8ebc6ad2ee1b2b41e6
                .addData(data)
                .addTo(choropleth_e5759906feb64649872bd125d7554ed0);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_1bae2e72bbdf4c8ebc6ad2ee1b2b41e6_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_c0313aba0bd844c2a16d380f67424661 = {};

    
    color_map_c0313aba0bd844c2a16d380f67424661.color = d3.scale.threshold()
              .domain([0.0, 0.0005376994448804438, 0.0010753988897608876, 0.0016130983346413312, 0.002150797779521775, 0.0026884972244022192, 0.0032261966692826625, 0.0037638961141631066, 0.00430159555904355, 0.004839295003923994, 0.0053769944488044384, 0.0059146938936848826, 0.006452393338565325, 0.006990092783445769, 0.007527792228326213, 0.008065491673206656, 0.0086031911180871, 0.009140890562967545, 0.009678590007847989, 0.010216289452728433, 0.010753988897608877, 0.011291688342489321, 0.011829387787369765, 0.012367087232250207, 0.01290478667713065, 0.013442486122011094, 0.013980185566891538, 0.014517885011771982, 0.015055584456652426, 0.01559328390153287, 0.016130983346413313, 0.01666868279129376, 0.0172063822361742, 0.017744081681054645, 0.01828178112593509, 0.018819480570815533, 0.019357180015695977, 0.019894879460576418, 0.020432578905456866, 0.020970278350337306, 0.021507977795217754, 0.022045677240098194, 0.022583376684978642, 0.023121076129859083, 0.02365877557473953, 0.02419647501961997, 0.024734174464500415, 0.02527187390938086, 0.0258095733542613, 0.026347272799141747, 0.026884972244022188, 0.027422671688902635, 0.027960371133783076, 0.028498070578663524, 0.029035770023543964, 0.02957346946842441, 0.030111168913304853, 0.030648868358185297, 0.03118656780306574, 0.031724267247946185, 0.032261966692826625, 0.03279966613770707, 0.03333736558258752, 0.03387506502746796, 0.0344127644723484, 0.03495046391722885, 0.03548816336210929, 0.03602586280698973, 0.03656356225187018, 0.037101261696750626, 0.03763896114163107, 0.03817666058651151, 0.038714360031391955, 0.0392520594762724, 0.039789758921152836, 0.040327458366033284, 0.04086515781091373, 0.04140285725579418, 0.04194055670067461, 0.04247825614555506, 0.04301595559043551, 0.04355365503531595, 0.04409135448019639, 0.044629053925076836, 0.045166753369957284, 0.04570445281483772, 0.046242152259718165, 0.04677985170459861, 0.04731755114947906, 0.047855250594359494, 0.04839295003923994, 0.04893064948412039, 0.04946834892900083, 0.05000604837388127, 0.05054374781876172, 0.051081447263642166, 0.0516191467085226, 0.05215684615340305, 0.052694545598283495, 0.05323224504316394, 0.053769944488044376, 0.05430764393292482, 0.05484534337780527, 0.05538304282268571, 0.05592074226756615, 0.0564584417124466, 0.05699614115732705, 0.05753384060220749, 0.05807154004708793, 0.058609239491968376, 0.05914693893684882, 0.059684638381729264, 0.060222337826609705, 0.06076003727149015, 0.06129773671637059, 0.061835436161251034, 0.06237313560613148, 0.06291083505101193, 0.06344853449589237, 0.06398623394077281, 0.06452393338565325, 0.06506163283053369, 0.06559933227541415, 0.06613703172029459, 0.06667473116517504, 0.06721243061005548, 0.06775013005493592, 0.06828782949981636, 0.0688255289446968, 0.06936322838957724, 0.0699009278344577, 0.07043862727933814, 0.07097632672421858, 0.07151402616909903, 0.07205172561397946, 0.07258942505885992, 0.07312712450374036, 0.0736648239486208, 0.07420252339350125, 0.07474022283838169, 0.07527792228326213, 0.07581562172814257, 0.07635332117302301, 0.07689102061790347, 0.07742872006278391, 0.07796641950766435, 0.0785041189525448, 0.07904181839742525, 0.07957951784230567, 0.08011721728718613, 0.08065491673206657, 0.08119261617694701, 0.08173031562182746, 0.0822680150667079, 0.08280571451158836, 0.08334341395646878, 0.08388111340134922, 0.08441881284622968, 0.08495651229111012, 0.08549421173599056, 0.08603191118087102, 0.08656961062575146, 0.0871073100706319, 0.08764500951551234, 0.08818270896039278, 0.08872040840527323, 0.08925810785015367, 0.08979580729503411, 0.09033350673991457, 0.09087120618479501, 0.09140890562967544, 0.09194660507455589, 0.09248430451943633, 0.09302200396431679, 0.09355970340919723, 0.09409740285407767, 0.09463510229895812, 0.09517280174383855, 0.09571050118871899, 0.09624820063359944, 0.09678590007847988, 0.09732359952336032, 0.09786129896824078, 0.09839899841312122, 0.09893669785800166, 0.0994743973028821, 0.10001209674776254, 0.100549796192643, 0.10108749563752344, 0.10162519508240388, 0.10216289452728433, 0.10270059397216476, 0.1032382934170452, 0.10377599286192565, 0.1043136923068061, 0.10485139175168655, 0.10538909119656699, 0.10592679064144743, 0.10646449008632788, 0.10700218953120831, 0.10753988897608875, 0.1080775884209692, 0.10861528786584965, 0.1091529873107301, 0.10969068675561054, 0.11022838620049098, 0.11076608564537142, 0.11130378509025186, 0.1118414845351323, 0.11237918398001276, 0.1129168834248932, 0.11345458286977364, 0.1139922823146541, 0.11452998175953452, 0.11506768120441498, 0.11560538064929542, 0.11614308009417586, 0.11668077953905631, 0.11721847898393675, 0.1177561784288172, 0.11829387787369763, 0.11883157731857807, 0.11936927676345853, 0.11990697620833897, 0.12044467565321941, 0.12098237509809986, 0.1215200745429803, 0.12205777398786073, 0.12259547343274119, 0.12313317287762163, 0.12367087232250207, 0.12420857176738252, 0.12474627121226296, 0.12528397065714342, 0.12582167010202386, 0.1263593695469043, 0.12689706899178474, 0.12743476843666518, 0.12797246788154562, 0.12851016732642606, 0.1290478667713065, 0.12958556621618697, 0.13012326566106738, 0.13066096510594785, 0.1311986645508283, 0.1317363639957087, 0.13227406344058917, 0.13281176288546961, 0.13334946233035008, 0.1338871617752305, 0.13442486122011096, 0.1349625606649914, 0.13550026010987185, 0.13603795955475229, 0.13657565899963273, 0.13711335844451317, 0.1376510578893936, 0.13818875733427408, 0.1387264567791545, 0.13926415622403496, 0.1398018556689154, 0.1403395551137958, 0.14087725455867628, 0.14141495400355672, 0.14195265344843716, 0.1424903528933176, 0.14302805233819807, 0.1435657517830785, 0.14410345122795892, 0.1446411506728394, 0.14517885011771983, 0.14571654956260027, 0.1462542490074807, 0.14679194845236118, 0.1473296478972416, 0.14786734734212204, 0.1484050467870025, 0.14894274623188292, 0.14948044567676338, 0.15001814512164383, 0.15055584456652427, 0.1510935440114047, 0.15163124345628515, 0.1521689429011656, 0.15270664234604603, 0.1532443417909265, 0.15378204123580694, 0.15431974068068738, 0.15485744012556782, 0.15539513957044826, 0.1559328390153287, 0.15647053846020914, 0.1570082379050896, 0.15754593734997002, 0.1580836367948505, 0.15862133623973093, 0.15915903568461134, 0.1596967351294918, 0.16023443457437225, 0.1607721340192527, 0.16130983346413313, 0.1618475329090136, 0.16238523235389402, 0.16292293179877446, 0.16346063124365492, 0.16399833068853534, 0.1645360301334158, 0.16507372957829625, 0.16561142902317671, 0.16614912846805713, 0.16668682791293757, 0.16722452735781804, 0.16776222680269845, 0.16829992624757892, 0.16883762569245936, 0.1693753251373398, 0.16991302458222024, 0.1704507240271007, 0.17098842347198112, 0.17152612291686156, 0.17206382236174203, 0.17260152180662244, 0.1731392212515029, 0.17367692069638335, 0.1742146201412638, 0.17475231958614423, 0.17529001903102467, 0.17582771847590514, 0.17636541792078556, 0.17690311736566602, 0.17744081681054646, 0.1779785162554269, 0.17851621570030735, 0.1790539151451878, 0.17959161459006823, 0.18012931403494867, 0.18066701347982914, 0.18120471292470955, 0.18174241236959002, 0.18228011181447046, 0.18281781125935087, 0.18335551070423134, 0.18389321014911178, 0.18443090959399222, 0.18496860903887266, 0.18550630848375313, 0.18604400792863357, 0.18658170737351398, 0.18711940681839445, 0.1876571062632749, 0.18819480570815533, 0.18873250515303577, 0.18927020459791624, 0.18980790404279665, 0.1903456034876771, 0.19088330293255756, 0.19142100237743798, 0.19195870182231844, 0.19249640126719889, 0.19303410071207933, 0.19357180015695977, 0.1941094996018402, 0.19464719904672065, 0.1951848984916011, 0.19572259793648156, 0.196260297381362, 0.19679799682624244, 0.19733569627112288, 0.19787339571600332, 0.19841109516088376, 0.1989487946057642, 0.19948649405064467, 0.20002419349552508, 0.20056189294040555, 0.201099592385286, 0.2016372918301664, 0.20217499127504687, 0.2027126907199273, 0.20325039016480775, 0.2037880896096882, 0.20432578905456866, 0.20486348849944908, 0.20540118794432952, 0.20593888738920998, 0.2064765868340904, 0.20701428627897087, 0.2075519857238513, 0.20808968516873178, 0.2086273846136122, 0.20916508405849266, 0.2097027835033731, 0.2102404829482535, 0.21077818239313398, 0.21131588183801442, 0.21185358128289486, 0.2123912807277753, 0.21292898017265577, 0.21346667961753618, 0.21400437906241662, 0.2145420785072971, 0.2150797779521775, 0.21561747739705797, 0.2161551768419384, 0.21669287628681885, 0.2172305757316993, 0.21776827517657973, 0.2183059746214602, 0.21884367406634062, 0.21938137351122108, 0.21991907295610152, 0.22045677240098197, 0.2209944718458624, 0.22153217129074285, 0.2220698707356233, 0.22260757018050373, 0.2231452696253842, 0.2236829690702646, 0.22422066851514508, 0.22475836796002552, 0.22529606740490593, 0.2258337668497864, 0.22637146629466684, 0.22690916573954728, 0.22744686518442772, 0.2279845646293082, 0.22852226407418863, 0.22905996351906904, 0.2295976629639495, 0.23013536240882995, 0.2306730618537104, 0.23121076129859083, 0.2317484607434713, 0.23228616018835171, 0.23282385963323216, 0.23336155907811262, 0.23389925852299304, 0.2344369579678735, 0.23497465741275395, 0.2355123568576344, 0.23605005630251483, 0.23658775574739527, 0.2371254551922757, 0.23766315463715615, 0.23820085408203662, 0.23873855352691706, 0.2392762529717975, 0.23981395241667794, 0.2403516518615584, 0.24088935130643882, 0.24142705075131926, 0.24196475019619973, 0.24250244964108014, 0.2430401490859606, 0.24357784853084105, 0.24411554797572146, 0.24465324742060193, 0.24519094686548237, 0.2457286463103628, 0.24626634575524325, 0.24680404520012372, 0.24734174464500414, 0.2478794440898846, 0.24841714353476504, 0.24895484297964549, 0.24949254242452593, 0.25003024186940637, 0.25056794131428684, 0.25110564075916725, 0.2516433402040477, 0.25218103964892813, 0.2527187390938086, 0.253256438538689, 0.2537941379835695, 0.2543318374284499, 0.25486953687333036, 0.25540723631821083, 0.25594493576309124, 0.2564826352079717, 0.2570203346528521, 0.2575580340977326, 0.258095733542613, 0.2586334329874935, 0.25917113243237394, 0.25970883187725435, 0.26024653132213477, 0.26078423076701523, 0.2613219302118957, 0.2618596296567761, 0.2623973291016566, 0.262935028546537, 0.2634727279914174, 0.26401042743629793, 0.26454812688117835, 0.2650858263260588, 0.26562352577093923, 0.2661612252158197, 0.26669892466070017, 0.2672366241055806, 0.267774323550461, 0.26831202299534146])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_c0313aba0bd844c2a16d380f67424661.x = d3.scale.linear()
              .domain([0.0, 0.26831202299534146])
              .range([0, 400]);

    color_map_c0313aba0bd844c2a16d380f67424661.legend = L.control({position: 'topright'});
    color_map_c0313aba0bd844c2a16d380f67424661.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_c0313aba0bd844c2a16d380f67424661.legend.addTo(map_5ed6064d097244de8d21691a07e3db76);

    color_map_c0313aba0bd844c2a16d380f67424661.xAxis = d3.svg.axis()
        .scale(color_map_c0313aba0bd844c2a16d380f67424661.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.044718670499223574, 0.08943734099844715, 0.13415601149767073, 0.1788746819968943, 0.22359335249611786, 0.26831202299534146]);

    color_map_c0313aba0bd844c2a16d380f67424661.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_c0313aba0bd844c2a16d380f67424661.g = color_map_c0313aba0bd844c2a16d380f67424661.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_c0313aba0bd844c2a16d380f67424661.g.selectAll("rect")
        .data(color_map_c0313aba0bd844c2a16d380f67424661.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_c0313aba0bd844c2a16d380f67424661.x(color_map_c0313aba0bd844c2a16d380f67424661.color.domain()[i - 1]) : color_map_c0313aba0bd844c2a16d380f67424661.x.range()[0],
            x1: i < color_map_c0313aba0bd844c2a16d380f67424661.color.domain().length ? color_map_c0313aba0bd844c2a16d380f67424661.x(color_map_c0313aba0bd844c2a16d380f67424661.color.domain()[i]) : color_map_c0313aba0bd844c2a16d380f67424661.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_c0313aba0bd844c2a16d380f67424661.g.call(color_map_c0313aba0bd844c2a16d380f67424661.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('02_50_TARCISIO MOTTA DE CARVALHO');
