    
            var map_8e27f64620df460da8c4b1102573bd65 = L.map(
                "map_8e27f64620df460da8c4b1102573bd65",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_957e0261600d4054b3db6b188d0ca4ef = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_8e27f64620df460da8c4b1102573bd65);
        
    
            var choropleth_728010d342384c7c9ae74263f9a9d652 = L.featureGroup(
                {}
            ).addTo(map_8e27f64620df460da8c4b1102573bd65);
        
    
        function geo_json_99fcf5e2e0d54967b692b11716eca1f9_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 482: case 443: case 428: case 412: case 410: case 325: case 440: case 448: case 438: case 447: case 456: case 473: case 468: case 464: case 437: case 353: case 444: case 345: case 363: case 343: case 426: case 404: case 395: case 371: case 359: case 386: case 348: case 379: case 372: case 354: case 334: case 358: case 433: case 399: case 366: case 391: case 402: case 388: case 341: case 485: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 418: case 424: case 417: case 467: case 466: case 403: case 470: case 452: case 380: case 446: case 392: case 416: case 419: case 415: case 408: case 411: case 373: case 361: case 390: case 327: case 331: case 330: case 445: case 430: case 483: case 477: case 405: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 377: case 449: case 453: case 462: case 455: case 472: case 442: case 436: case 364: case 346: case 339: case 471: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 478: case 393: case 369: case 382: case 375: case 398: case 357: case 457: case 463: case 454: case 469: case 465: case 480: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_99fcf5e2e0d54967b692b11716eca1f9_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_99fcf5e2e0d54967b692b11716eca1f9 = L.geoJson(null, {
                onEachFeature: geo_json_99fcf5e2e0d54967b692b11716eca1f9_onEachFeature,
            
                style: geo_json_99fcf5e2e0d54967b692b11716eca1f9_styler,
        });

        function geo_json_99fcf5e2e0d54967b692b11716eca1f9_add (data) {
            geo_json_99fcf5e2e0d54967b692b11716eca1f9
                .addData(data)
                .addTo(choropleth_728010d342384c7c9ae74263f9a9d652);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_99fcf5e2e0d54967b692b11716eca1f9_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_8a53b4f4e71346dca0cfaaec0a6f47b0 = {};

    
    color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.color = d3.scale.threshold()
              .domain([0.0, 0.0002556918260269083, 0.0005113836520538166, 0.000767075478080725, 0.0010227673041076331, 0.0012784591301345416, 0.00153415095616145, 0.0017898427821883582, 0.0020455346082152662, 0.0023012264342421747, 0.0025569182602690832, 0.0028126100862959917, 0.0030683019123229, 0.003323993738349808, 0.0035796855643767164, 0.003835377390403625, 0.0040910692164305325, 0.0043467610424574405, 0.0046024528684843495, 0.004858144694511258, 0.0051138365205381665, 0.0053695283465650745, 0.0056252201725919835, 0.0058809119986188915, 0.0061366038246458, 0.006392295650672708, 0.006647987476699616, 0.006903679302726525, 0.007159371128753433, 0.007415062954780341, 0.00767075478080725, 0.007926446606834158, 0.008182138432861065, 0.008437830258887974, 0.008693522084914881, 0.00894921391094179, 0.009204905736968699, 0.009460597562995608, 0.009716289389022517, 0.009971981215049424, 0.010227673041076333, 0.01048336486710324, 0.010739056693130149, 0.010994748519157056, 0.011250440345183967, 0.011506132171210874, 0.011761823997237783, 0.01201751582326469, 0.0122732076492916, 0.012528899475318506, 0.012784591301345415, 0.013040283127372322, 0.013295974953399231, 0.01355166677942614, 0.01380735860545305, 0.014063050431479956, 0.014318742257506865, 0.014574434083533773, 0.014830125909560682, 0.015085817735587589, 0.0153415095616145, 0.015597201387641407, 0.015852893213668316, 0.016108585039695224, 0.01636427686572213, 0.01661996869174904, 0.016875660517775948, 0.017131352343802857, 0.017387044169829762, 0.01764273599585667, 0.01789842782188358, 0.01815411964791049, 0.018409811473937398, 0.018665503299964307, 0.018921195125991216, 0.019176886952018125, 0.019432578778045034, 0.01968827060407194, 0.019943962430098848, 0.020199654256125757, 0.020455346082152666, 0.02071103790817957, 0.02096672973420648, 0.02122242156023339, 0.021478113386260298, 0.021733805212287204, 0.021989497038314113, 0.02224518886434102, 0.022500880690367934, 0.02275657251639484, 0.023012264342421748, 0.023267956168448657, 0.023523647994475566, 0.02377933982050247, 0.02403503164652938, 0.02429072347255629, 0.0245464152985832, 0.024802107124610104, 0.025057798950637013, 0.02531349077666392, 0.02556918260269083, 0.025824874428717736, 0.026080566254744645, 0.026336258080771554, 0.026591949906798463, 0.026847641732825375, 0.02710333355885228, 0.02735902538487919, 0.0276147172109061, 0.027870409036933008, 0.028126100862959913, 0.028381792688986822, 0.02863748451501373, 0.02889317634104064, 0.029148868167067545, 0.029404559993094454, 0.029660251819121363, 0.029915943645148272, 0.030171635471175177, 0.030427327297202086, 0.030683019123229, 0.030938710949255908, 0.031194402775282813, 0.03145009460130972, 0.03170578642733663, 0.03196147825336354, 0.03221717007939045, 0.03247286190541735, 0.03272855373144426, 0.032984245557471176, 0.03323993738349808, 0.033495629209524994, 0.033751321035551896, 0.034007012861578804, 0.03426270468760571, 0.03451839651363262, 0.034774088339659524, 0.03502978016568644, 0.03528547199171334, 0.03554116381774026, 0.03579685564376716, 0.03605254746979407, 0.03630823929582098, 0.03656393112184789, 0.036819622947874796, 0.037075314773901705, 0.037331006599928614, 0.03758669842595552, 0.03784239025198243, 0.038098082078009333, 0.03835377390403625, 0.03860946573006315, 0.03886515755609007, 0.03912084938211697, 0.03937654120814388, 0.03963223303417079, 0.039887924860197696, 0.0401436166862246, 0.040399308512251514, 0.040655000338278416, 0.04091069216430533, 0.04116638399033224, 0.04142207581635914, 0.04167776764238606, 0.04193345946841296, 0.04218915129443987, 0.04244484312046678, 0.04270053494649369, 0.042956226772520596, 0.043211918598547505, 0.04346761042457441, 0.04372330225060132, 0.043978994076628225, 0.044234685902655134, 0.04449037772868204, 0.04474606955470895, 0.04500176138073587, 0.04525745320676277, 0.04551314503278968, 0.04576883685881659, 0.046024528684843496, 0.046280220510870405, 0.046535912336897314, 0.046791604162924216, 0.04704729598895113, 0.047302987814978034, 0.04755867964100494, 0.04781437146703185, 0.04807006329305876, 0.04832575511908567, 0.04858144694511258, 0.04883713877113948, 0.0490928305971664, 0.049348522423193306, 0.04960421424922021, 0.049859906075247123, 0.050115597901274025, 0.05037128972730094, 0.05062698155332784, 0.05088267337935475, 0.05113836520538166, 0.05139405703140857, 0.05164974885743547, 0.05190544068346239, 0.05216113250948929, 0.052416824335516206, 0.05267251616154311, 0.05292820798757002, 0.053183899813596926, 0.053439591639623835, 0.05369528346565075, 0.05395097529167765, 0.05420666711770456, 0.05446235894373147, 0.05471805076975838, 0.05497374259578528, 0.0552294344218122, 0.0554851262478391, 0.055740818073866015, 0.05599650989989292, 0.056252201725919826, 0.056507893551946735, 0.056763585377973644, 0.057019277204000546, 0.05727496903002746, 0.05753066085605437, 0.05778635268208128, 0.05804204450810819, 0.05829773633413509, 0.058553428160162006, 0.05880911998618891, 0.05906481181221582, 0.059320503638242726, 0.059576195464269635, 0.059831887290296544, 0.06008757911632345, 0.060343270942350355, 0.06059896276837727, 0.06085465459440417, 0.06111034642043108, 0.061366038246458, 0.0616217300724849, 0.061877421898511815, 0.06213311372453872, 0.062388805550565626, 0.06264449737659253, 0.06290018920261944, 0.06315588102864635, 0.06341157285467326, 0.06366726468070016, 0.06392295650672708, 0.064178648332754, 0.0644343401587809, 0.0646900319848078, 0.0649457238108347, 0.06520141563686162, 0.06545710746288852, 0.06571279928891544, 0.06596849111494235, 0.06622418294096925, 0.06647987476699616, 0.06673556659302306, 0.06699125841904999, 0.06724695024507689, 0.06750264207110379, 0.0677583338971307, 0.06801402572315761, 0.06826971754918452, 0.06852540937521143, 0.06878110120123833, 0.06903679302726524, 0.06929248485329215, 0.06954817667931905, 0.06980386850534598, 0.07005956033137288, 0.07031525215739978, 0.07057094398342668, 0.0708266358094536, 0.07108232763548052, 0.07133801946150742, 0.07159371128753432, 0.07184940311356124, 0.07210509493958814, 0.07236078676561505, 0.07261647859164196, 0.07287217041766887, 0.07312786224369577, 0.07338355406972268, 0.07363924589574959, 0.07389493772177651, 0.07415062954780341, 0.07440632137383031, 0.07466201319985723, 0.07491770502588413, 0.07517339685191105, 0.07542908867793795, 0.07568478050396486, 0.07594047232999176, 0.07619616415601867, 0.07645185598204558, 0.0767075478080725, 0.0769632396340994, 0.0772189314601263, 0.0774746232861532, 0.07773031511218013, 0.07798600693820704, 0.07824169876423394, 0.07849739059026085, 0.07875308241628776, 0.07900877424231466, 0.07926446606834157, 0.07952015789436849, 0.07977584972039539, 0.0800315415464223, 0.0802872333724492, 0.08054292519847613, 0.08079861702450303, 0.08105430885052993, 0.08131000067655683, 0.08156569250258375, 0.08182138432861066, 0.08207707615463757, 0.08233276798066448, 0.08258845980669138, 0.08284415163271829, 0.0830998434587452, 0.08335553528477212, 0.08361122711079902, 0.08386691893682592, 0.08412261076285282, 0.08437830258887974, 0.08463399441490665, 0.08488968624093356, 0.08514537806696046, 0.08540106989298737, 0.08565676171901428, 0.08591245354504119, 0.08616814537106811, 0.08642383719709501, 0.08667952902312191, 0.08693522084914881, 0.08719091267517574, 0.08744660450120265, 0.08770229632722955, 0.08795798815325645, 0.08821367997928337, 0.08846937180531027, 0.08872506363133718, 0.08898075545736409, 0.089236447283391, 0.0894921391094179, 0.0897478309354448, 0.09000352276147174, 0.09025921458749864, 0.09051490641352554, 0.09077059823955244, 0.09102629006557936, 0.09128198189160627, 0.09153767371763318, 0.09179336554366008, 0.09204905736968699, 0.0923047491957139, 0.09256044102174081, 0.09281613284776771, 0.09307182467379463, 0.09332751649982153, 0.09358320832584843, 0.09383890015187533, 0.09409459197790226, 0.09435028380392917, 0.09460597562995607, 0.09486166745598298, 0.09511735928200989, 0.0953730511080368, 0.0956287429340637, 0.09588443476009062, 0.09614012658611752, 0.09639581841214442, 0.09665151023817134, 0.09690720206419826, 0.09716289389022516, 0.09741858571625206, 0.09767427754227896, 0.09792996936830589, 0.0981856611943328, 0.0984413530203597, 0.09869704484638661, 0.09895273667241351, 0.09920842849844042, 0.09946412032446733, 0.09971981215049425, 0.09997550397652115, 0.10023119580254805, 0.10048688762857495, 0.10074257945460188, 0.10099827128062878, 0.10125396310665569, 0.10150965493268259, 0.1017653467587095, 0.10202103858473642, 0.10227673041076332, 0.10253242223679024, 0.10278811406281714, 0.10304380588884404, 0.10329949771487094, 0.10355518954089787, 0.10381088136692478, 0.10406657319295168, 0.10432226501897858, 0.1045779568450055, 0.10483364867103241, 0.10508934049705931, 0.10534503232308622, 0.10560072414911313, 0.10585641597514003, 0.10611210780116695, 0.10636779962719385, 0.10662349145322077, 0.10687918327924767, 0.10713487510527457, 0.1073905669313015, 0.1076462587573284, 0.1079019505833553, 0.10815764240938221, 0.10841333423540912, 0.10866902606143602, 0.10892471788746294, 0.10918040971348984, 0.10943610153951676, 0.10969179336554366, 0.10994748519157056, 0.11020317701759748, 0.1104588688436244, 0.1107145606696513, 0.1109702524956782, 0.11122594432170511, 0.11148163614773203, 0.11173732797375893, 0.11199301979978583, 0.11224871162581275, 0.11250440345183965, 0.11276009527786655, 0.11301578710389347, 0.11327147892992039, 0.11352717075594729, 0.11378286258197419, 0.11403855440800109, 0.11429424623402802, 0.11454993806005492, 0.11480562988608183, 0.11506132171210874, 0.11531701353813564, 0.11557270536416256, 0.11582839719018946, 0.11608408901621638, 0.11633978084224328, 0.11659547266827018, 0.11685116449429708, 0.11710685632032401, 0.11736254814635091, 0.11761823997237782, 0.11787393179840472, 0.11812962362443163, 0.11838531545045855, 0.11864100727648545, 0.11889669910251237, 0.11915239092853927, 0.11940808275456617, 0.11966377458059309, 0.11991946640662, 0.1201751582326469, 0.12043085005867381, 0.12068654188470071, 0.12094223371072764, 0.12119792553675454, 0.12145361736278144, 0.12170930918880835, 0.12196500101483526, 0.12222069284086216, 0.12247638466688908, 0.122732076492916, 0.1229877683189429, 0.1232434601449698, 0.1234991519709967, 0.12375484379702363, 0.12401053562305053, 0.12426622744907743, 0.12452191927510434, 0.12477761110113125, 0.12503330292715817, 0.12528899475318506, 0.12554468657921197, 0.1258003784052389, 0.1260560702312658, 0.1263117620572927, 0.1265674538833196, 0.12682314570934652, 0.12707883753537344, 0.12733452936140033, 0.12759022118742724])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.x = d3.scale.linear()
              .domain([0.0, 0.12759022118742724])
              .range([0, 400]);

    color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.legend = L.control({position: 'topright'});
    color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.legend.addTo(map_8e27f64620df460da8c4b1102573bd65);

    color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.xAxis = d3.svg.axis()
        .scale(color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.021265036864571207, 0.042530073729142415, 0.06379511059371362, 0.08506014745828483, 0.10632518432285604, 0.12759022118742724]);

    color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.g = color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.g.selectAll("rect")
        .data(color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.x(color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.color.domain()[i - 1]) : color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.x.range()[0],
            x1: i < color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.color.domain().length ? color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.x(color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.color.domain()[i]) : color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.g.call(color_map_8a53b4f4e71346dca0cfaaec0a6f47b0.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('02_95_VOTO BRANCO');

