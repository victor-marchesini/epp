    
            var map_385012d9973c458eb719d0c816113593 = L.map(
                "map_385012d9973c458eb719d0c816113593",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_a270ba0da3bf451d9a03815a62c28648 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_385012d9973c458eb719d0c816113593);
        
    
            var choropleth_06de435ab3e24989b8f2f14865368d4d = L.featureGroup(
                {}
            ).addTo(map_385012d9973c458eb719d0c816113593);
        
    
        function geo_json_3158944c1b9e4bbdb87ace2ee6d4a907_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 418: case 440: case 449: case 447: case 467: case 464: case 436: case 416: case 432: case 397: case 404: case 370: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 443: case 325: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 357: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 478: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 395: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_3158944c1b9e4bbdb87ace2ee6d4a907_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_3158944c1b9e4bbdb87ace2ee6d4a907 = L.geoJson(null, {
                onEachFeature: geo_json_3158944c1b9e4bbdb87ace2ee6d4a907_onEachFeature,
            
                style: geo_json_3158944c1b9e4bbdb87ace2ee6d4a907_styler,
        });

        function geo_json_3158944c1b9e4bbdb87ace2ee6d4a907_add (data) {
            geo_json_3158944c1b9e4bbdb87ace2ee6d4a907
                .addData(data)
                .addTo(choropleth_06de435ab3e24989b8f2f14865368d4d);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_3158944c1b9e4bbdb87ace2ee6d4a907_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_7fec6684529a4d1fb77ea56a712dc1dd = {};

    
    color_map_7fec6684529a4d1fb77ea56a712dc1dd.color = d3.scale.threshold()
              .domain([0.0, 3.007413784710461e-05, 6.014827569420922e-05, 9.022241354131383e-05, 0.00012029655138841845, 0.00015037068923552308, 0.00018044482708262766, 0.0002105189649297323, 0.0002405931027768369, 0.0002706672406239415, 0.00030074137847104616, 0.0003308155163181507, 0.0003608896541652553, 0.00039096379201235997, 0.0004210379298594646, 0.0004511120677065692, 0.0004811862055536738, 0.0005112603434007784, 0.000541334481247883, 0.0005714086190949877, 0.0006014827569420923, 0.0006315568947891969, 0.0006616310326363014, 0.0006917051704834061, 0.0007217793083305106, 0.0007518534461776153, 0.0007819275840247199, 0.0008120017218718246, 0.0008420758597189291, 0.0008721499975660338, 0.0009022241354131384, 0.0009322982732602429, 0.0009623724111073476, 0.0009924465489544523, 0.0010225206868015569, 0.0010525948246486614, 0.001082668962495766, 0.0011127431003428705, 0.0011428172381899753, 0.0011728913760370799, 0.0012029655138841846, 0.0012330396517312892, 0.0012631137895783937, 0.0012931879274254983, 0.0013232620652726028, 0.0013533362031197076, 0.0013834103409668121, 0.001413484478813917, 0.0014435586166610212, 0.001473632754508126, 0.0015037068923552306, 0.0015337810302023351, 0.0015638551680494399, 0.0015939293058965444, 0.0016240034437436492, 0.0016540775815907535, 0.0016841517194378583, 0.0017142258572849628, 0.0017442999951320676, 0.0017743741329791722, 0.0018044482708262767, 0.0018345224086733813, 0.0018645965465204858, 0.0018946706843675906, 0.0019247448222146951, 0.0019548189600617997, 0.0019848930979089047, 0.0020149672357560092, 0.0020450413736031138, 0.0020751155114502183, 0.002105189649297323, 0.0021352637871444274, 0.002165337924991532, 0.0021954120628386365, 0.002225486200685741, 0.002255560338532846, 0.0022856344763799506, 0.002315708614227055, 0.0023457827520741597, 0.0023758568899212643, 0.0024059310277683692, 0.002436005165615474, 0.0024660793034625783, 0.002496153441309683, 0.0025262275791567874, 0.002556301717003892, 0.0025863758548509965, 0.002616449992698101, 0.0026465241305452056, 0.0026765982683923106, 0.002706672406239415, 0.0027367465440865197, 0.0027668206819336243, 0.0027968948197807293, 0.002826968957627834, 0.0028570430954749384, 0.0028871172333220425, 0.002917191371169147, 0.002947265509016252, 0.0029773396468633566, 0.003007413784710461, 0.0030374879225575657, 0.0030675620604046702, 0.003097636198251775, 0.0031277103360988798, 0.0031577844739459843, 0.003187858611793089, 0.003217932749640194, 0.0032480068874872984, 0.0032780810253344025, 0.003308155163181507, 0.0033382293010286116, 0.0033683034388757166, 0.003398377576722821, 0.0034284517145699257, 0.0034585258524170302, 0.0034885999902641352, 0.0035186741281112398, 0.0035487482659583443, 0.003578822403805449, 0.0036088965416525534, 0.0036389706794996584, 0.0036690448173467625, 0.003699118955193867, 0.0037291930930409716, 0.0037592672308880766, 0.003789341368735181, 0.0038194155065822857, 0.0038494896444293903, 0.003879563782276495, 0.003909637920123599, 0.003939712057970704, 0.003969786195817809, 0.0039998603336649135, 0.0040299344715120184, 0.0040600086093591226, 0.0040900827472062275, 0.004120156885053332, 0.004150231022900437, 0.004180305160747541, 0.004210379298594646, 0.004240453436441751, 0.004270527574288855, 0.00430060171213596, 0.004330675849983064, 0.004360749987830169, 0.004390824125677273, 0.004420898263524378, 0.004450972401371482, 0.004481046539218587, 0.004511120677065692, 0.004541194814912797, 0.004571268952759901, 0.004601343090607006, 0.00463141722845411, 0.004661491366301214, 0.004691565504148319, 0.0047216396419954235, 0.0047517137798425285, 0.0047817879176896335, 0.0048118620555367385, 0.004841936193383843, 0.004872010331230948, 0.004902084469078052, 0.004932158606925157, 0.004962232744772261, 0.004992306882619366, 0.00502238102046647, 0.005052455158313575, 0.00508252929616068, 0.005112603434007784, 0.005142677571854889, 0.005172751709701993, 0.005202825847549098, 0.005232899985396202, 0.005262974123243307, 0.005293048261090411, 0.005323122398937517, 0.005353196536784621, 0.005383270674631726, 0.00541334481247883, 0.0054434189503259345, 0.0054734930881730395, 0.005503567226020144, 0.0055336413638672486, 0.005563715501714353, 0.0055937896395614585, 0.005623863777408563, 0.005653937915255668, 0.005684012053102772, 0.005714086190949877, 0.005744160328796981, 0.005774234466644085, 0.00580430860449119, 0.005834382742338294, 0.005864456880185399, 0.005894531018032504, 0.005924605155879609, 0.005954679293726713, 0.005984753431573818, 0.006014827569420922, 0.006044901707268027, 0.006074975845115131, 0.006105049982962236, 0.0061351241208093404, 0.006165198258656445, 0.00619527239650355, 0.0062253465343506545, 0.0062554206721977595, 0.006285494810044864, 0.006315568947891969, 0.006345643085739073, 0.006375717223586178, 0.006405791361433282, 0.006435865499280388, 0.006465939637127492, 0.006496013774974597, 0.006526087912821701, 0.006556162050668805, 0.00658623618851591, 0.006616310326363014, 0.006646384464210119, 0.006676458602057223, 0.006706532739904329, 0.006736606877751433, 0.006766681015598538, 0.006796755153445642, 0.006826829291292747, 0.006856903429139851, 0.006886977566986956, 0.0069170517048340605, 0.006947125842681165, 0.0069771999805282705, 0.007007274118375375, 0.0070373482562224796, 0.007067422394069584, 0.007097496531916689, 0.007127570669763793, 0.007157644807610898, 0.007187718945458002, 0.007217793083305107, 0.007247867221152212, 0.007277941358999317, 0.007308015496846421, 0.007338089634693525, 0.00736816377254063, 0.007398237910387734, 0.007428312048234839, 0.007458386186081943, 0.007488460323929048, 0.007518534461776153, 0.007548608599623258, 0.007578682737470362, 0.007608756875317467, 0.0076388310131645714, 0.007668905151011676, 0.0076989792888587805, 0.007729053426705885, 0.00775912756455299, 0.007789201702400095, 0.007819275840247199, 0.007849349978094304, 0.007879424115941409, 0.007909498253788512, 0.007939572391635619, 0.007969646529482722, 0.007999720667329827, 0.008029794805176932, 0.008059868943024037, 0.00808994308087114, 0.008120017218718245, 0.008150091356565348, 0.008180165494412455, 0.00821023963225956, 0.008240313770106663, 0.008270387907953768, 0.008300462045800873, 0.008330536183647978, 0.008360610321495082, 0.008390684459342186, 0.008420758597189291, 0.008450832735036396, 0.008480906872883501, 0.008510981010730605, 0.00854105514857771, 0.008571129286424815, 0.00860120342427192, 0.008631277562119023, 0.008661351699966128, 0.008691425837813233, 0.008721499975660338, 0.008751574113507443, 0.008781648251354546, 0.008811722389201653, 0.008841796527048756, 0.008871870664895861, 0.008901944802742964, 0.00893201894059007, 0.008962093078437174, 0.00899216721628428, 0.009022241354131384, 0.009052315491978487, 0.009082389629825594, 0.009112463767672697, 0.009142537905519802, 0.009172612043366906, 0.009202686181214012, 0.009232760319061116, 0.00926283445690822, 0.009292908594755326, 0.009322982732602429, 0.009353056870449536, 0.009383131008296639, 0.009413205146143744, 0.009443279283990847, 0.009473353421837954, 0.009503427559685057, 0.009533501697532162, 0.009563575835379267, 0.009593649973226372, 0.009623724111073477, 0.00965379824892058, 0.009683872386767685, 0.009713946524614788, 0.009744020662461895, 0.009774094800308998, 0.009804168938156103, 0.009834243076003208, 0.009864317213850313, 0.009894391351697418, 0.009924465489544522, 0.009954539627391627, 0.009984613765238732, 0.010014687903085837, 0.01004476204093294, 0.010074836178780045, 0.01010491031662715, 0.010134984454474255, 0.01016505859232136, 0.010195132730168463, 0.010225206868015568, 0.010255281005862673, 0.010285355143709778, 0.010315429281556881, 0.010345503419403986, 0.010375577557251093, 0.010405651695098196, 0.010435725832945301, 0.010465799970792404, 0.01049587410863951, 0.010525948246486614, 0.01055602238433372, 0.010586096522180823, 0.010616170660027928, 0.010646244797875034, 0.010676318935722138, 0.010706393073569243, 0.010736467211416346, 0.010766541349263452, 0.010796615487110556, 0.01082668962495766, 0.010856763762804764, 0.010886837900651869, 0.010916912038498976, 0.010946986176346079, 0.010977060314193184, 0.011007134452040287, 0.011037208589887394, 0.011067282727734497, 0.011097356865581602, 0.011127431003428705, 0.011157505141275812, 0.011187579279122917, 0.01121765341697002, 0.011247727554817125, 0.011277801692664229, 0.011307875830511335, 0.011337949968358439, 0.011368024106205544, 0.011398098244052647, 0.011428172381899753, 0.011458246519746857, 0.011488320657593962, 0.011518394795441067, 0.01154846893328817, 0.011578543071135277, 0.01160861720898238, 0.011638691346829485, 0.011668765484676588, 0.011698839622523695, 0.011728913760370798, 0.011758987898217903, 0.011789062036065008, 0.011819136173912113, 0.011849210311759218, 0.011879284449606321, 0.011909358587453426, 0.01193943272530053, 0.011969506863147636, 0.01199958100099474, 0.012029655138841844, 0.01205972927668895, 0.012089803414536054, 0.01211987755238316, 0.012149951690230263, 0.012180025828077368, 0.012210099965924473, 0.012240174103771578, 0.012270248241618681, 0.012300322379465786, 0.01233039651731289, 0.012360470655159996, 0.0123905447930071, 0.012420618930854204, 0.012450693068701309, 0.012480767206548414, 0.012510841344395519, 0.012540915482242622, 0.012570989620089727, 0.012601063757936834, 0.012631137895783937, 0.012661212033631042, 0.012691286171478145, 0.01272136030932525, 0.012751434447172355, 0.01278150858501946, 0.012811582722866564, 0.012841656860713669, 0.012871730998560775, 0.012901805136407879, 0.012931879274254984, 0.012961953412102087, 0.012992027549949194, 0.013022101687796297, 0.013052175825643402, 0.013082249963490505, 0.01311232410133761, 0.013142398239184717, 0.01317247237703182, 0.013202546514878925, 0.013232620652726028, 0.013262694790573135, 0.013292768928420238, 0.013322843066267343, 0.013352917204114446, 0.013382991341961553, 0.013413065479808658, 0.013443139617655761, 0.013473213755502866, 0.01350328789334997, 0.013533362031197076, 0.01356343616904418, 0.013593510306891285, 0.013623584444738388, 0.013653658582585495, 0.0136837327204326, 0.013713806858279703, 0.013743880996126808, 0.013773955133973913, 0.013804029271821018, 0.013834103409668121, 0.013864177547515226, 0.01389425168536233, 0.013924325823209436, 0.013954399961056541, 0.013984474098903644, 0.01401454823675075, 0.014044622374597854, 0.014074696512444959, 0.014104770650292062, 0.014134844788139167, 0.014164918925986272, 0.014194993063833377, 0.014225067201680482, 0.014255141339527586, 0.01428521547737469, 0.014315289615221796, 0.0143453637530689, 0.014375437890916004, 0.014405512028763109, 0.014435586166610214, 0.014465660304457319, 0.014495734442304424, 0.014525808580151527, 0.014555882717998634, 0.014585956855845737, 0.014616030993692842, 0.014646105131539945, 0.01467617926938705, 0.014706253407234155, 0.01473632754508126, 0.014766401682928365, 0.014796475820775468, 0.014826549958622575, 0.014856624096469678, 0.014886698234316783, 0.014916772372163887, 0.014946846510010993, 0.014976920647858096, 0.015006994785705201])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_7fec6684529a4d1fb77ea56a712dc1dd.x = d3.scale.linear()
              .domain([0.0, 0.015006994785705201])
              .range([0, 400]);

    color_map_7fec6684529a4d1fb77ea56a712dc1dd.legend = L.control({position: 'topright'});
    color_map_7fec6684529a4d1fb77ea56a712dc1dd.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_7fec6684529a4d1fb77ea56a712dc1dd.legend.addTo(map_385012d9973c458eb719d0c816113593);

    color_map_7fec6684529a4d1fb77ea56a712dc1dd.xAxis = d3.svg.axis()
        .scale(color_map_7fec6684529a4d1fb77ea56a712dc1dd.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.0025011657976175337, 0.0050023315952350675, 0.007503497392852601, 0.010004663190470135, 0.012505828988087669, 0.015006994785705201]);

    color_map_7fec6684529a4d1fb77ea56a712dc1dd.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_7fec6684529a4d1fb77ea56a712dc1dd.g = color_map_7fec6684529a4d1fb77ea56a712dc1dd.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_7fec6684529a4d1fb77ea56a712dc1dd.g.selectAll("rect")
        .data(color_map_7fec6684529a4d1fb77ea56a712dc1dd.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_7fec6684529a4d1fb77ea56a712dc1dd.x(color_map_7fec6684529a4d1fb77ea56a712dc1dd.color.domain()[i - 1]) : color_map_7fec6684529a4d1fb77ea56a712dc1dd.x.range()[0],
            x1: i < color_map_7fec6684529a4d1fb77ea56a712dc1dd.color.domain().length ? color_map_7fec6684529a4d1fb77ea56a712dc1dd.x(color_map_7fec6684529a4d1fb77ea56a712dc1dd.color.domain()[i]) : color_map_7fec6684529a4d1fb77ea56a712dc1dd.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_7fec6684529a4d1fb77ea56a712dc1dd.g.call(color_map_7fec6684529a4d1fb77ea56a712dc1dd.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('13_13_WALDECK CARNEIRO DA SILVA');

