    
            var map_e647b6e92bdd4246b2cb0765a33b0448 = L.map(
                "map_e647b6e92bdd4246b2cb0765a33b0448",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_7065d7960c4e411e8d63fd2a39a52e1d = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_e647b6e92bdd4246b2cb0765a33b0448);
        
    
            var choropleth_072299731e584911804b843bec6c23c4 = L.featureGroup(
                {}
            ).addTo(map_e647b6e92bdd4246b2cb0765a33b0448);
        
    
        function geo_json_3ba36fc34661416e85e0b67ce0427d0f_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 434: case 431: case 404: case 349: case 342: case 336: case 460: case 357: case 481: case 479: case 366: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 440: case 448: case 424: case 447: case 417: case 456: case 466: case 473: case 455: case 472: case 468: case 435: case 442: case 436: case 446: case 369: case 400: case 415: case 408: case 395: case 339: case 358: case 347: case 355: case 399: case 469: case 461: case 451: case 341: case 384: case 485: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 428: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 462: case 437: case 367: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_3ba36fc34661416e85e0b67ce0427d0f_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_3ba36fc34661416e85e0b67ce0427d0f = L.geoJson(null, {
                onEachFeature: geo_json_3ba36fc34661416e85e0b67ce0427d0f_onEachFeature,
            
                style: geo_json_3ba36fc34661416e85e0b67ce0427d0f_styler,
        });

        function geo_json_3ba36fc34661416e85e0b67ce0427d0f_add (data) {
            geo_json_3ba36fc34661416e85e0b67ce0427d0f
                .addData(data)
                .addTo(choropleth_072299731e584911804b843bec6c23c4);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_3ba36fc34661416e85e0b67ce0427d0f_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_8bf6c637426e4e9d9a9e0052ad38f196 = {};

    
    color_map_8bf6c637426e4e9d9a9e0052ad38f196.color = d3.scale.threshold()
              .domain([0.0, 6.167759987787836e-06, 1.2335519975575672e-05, 1.8503279963363506e-05, 2.4671039951151343e-05, 3.083879993893918e-05, 3.700655992672701e-05, 4.3174319914514845e-05, 4.9342079902302686e-05, 5.550983989009052e-05, 6.167759987787835e-05, 6.78453598656662e-05, 7.401311985345402e-05, 8.018087984124186e-05, 8.634863982902969e-05, 9.251639981681755e-05, 9.868415980460537e-05, 0.0001048519197923932, 0.00011101967978018104, 0.00011718743976796887, 0.0001233551997557567, 0.00012952295974354456, 0.0001356907197313324, 0.00014185847971912022, 0.00014802623970690805, 0.00015419399969469587, 0.00016036175968248373, 0.00016652951967027155, 0.00017269727965805938, 0.0001788650396458472, 0.0001850327996336351, 0.00019120055962142292, 0.00019736831960921075, 0.00020353607959699857, 0.0002097038395847864, 0.00021587159957257425, 0.00022203935956036208, 0.0002282071195481499, 0.00023437487953593774, 0.0002405426395237256, 0.0002467103995115134, 0.00025287815949930125, 0.0002590459194870891, 0.00026521367947487695, 0.0002713814394626648, 0.0002775491994504526, 0.00028371695943824044, 0.00028988471942602826, 0.0002960524794138161, 0.0003022202394016039, 0.00030838799938939175, 0.0003145557593771796, 0.00032072351936496745, 0.0003268912793527553, 0.0003330590393405431, 0.00033922679932833094, 0.00034539455931611876, 0.0003515623193039066, 0.0003577300792916944, 0.0003638978392794823, 0.0003700655992672702, 0.000376233359255058, 0.00038240111924284584, 0.00038856887923063366, 0.0003947366392184215, 0.0004009043992062093, 0.00040707215919399714, 0.00041323991918178497, 0.0004194076791695728, 0.0004255754391573607, 0.0004317431991451485, 0.00043791095913293634, 0.00044407871912072416, 0.000450246479108512, 0.0004564142390962998, 0.00046258199908408765, 0.00046874975907187547, 0.0004749175190596633, 0.0004810852790474512, 0.000487253039035239, 0.0004934207990230268, 0.0004995885590108147, 0.0005057563189986025, 0.0005119240789863904, 0.0005180918389741783, 0.0005242595989619661, 0.0005304273589497539, 0.0005365951189375417, 0.0005427628789253296, 0.0005489306389131174, 0.0005550983989009052, 0.000561266158888693, 0.0005674339188764809, 0.0005736016788642687, 0.0005797694388520565, 0.0005859371988398444, 0.0005921049588276322, 0.00059827271881542, 0.0006044404788032078, 0.0006106082387909957, 0.0006167759987787835, 0.0006229437587665714, 0.0006291115187543593, 0.0006352792787421471, 0.0006414470387299349, 0.0006476147987177227, 0.0006537825587055106, 0.0006599503186932984, 0.0006661180786810862, 0.000672285838668874, 0.0006784535986566619, 0.0006846213586444497, 0.0006907891186322375, 0.0006969568786200254, 0.0007031246386078132, 0.000709292398595601, 0.0007154601585833888, 0.0007216279185711768, 0.0007277956785589646, 0.0007339634385467525, 0.0007401311985345404, 0.0007462989585223282, 0.000752466718510116, 0.0007586344784979038, 0.0007648022384856917, 0.0007709699984734795, 0.0007771377584612673, 0.0007833055184490552, 0.000789473278436843, 0.0007956410384246308, 0.0008018087984124186, 0.0008079765584002065, 0.0008141443183879943, 0.0008203120783757821, 0.0008264798383635699, 0.0008326475983513578, 0.0008388153583391456, 0.0008449831183269334, 0.0008511508783147214, 0.0008573186383025092, 0.000863486398290297, 0.0008696541582780848, 0.0008758219182658727, 0.0008819896782536605, 0.0008881574382414483, 0.0008943251982292362, 0.000900492958217024, 0.0009066607182048118, 0.0009128284781925996, 0.0009189962381803875, 0.0009251639981681753, 0.0009313317581559631, 0.0009374995181437509, 0.0009436672781315388, 0.0009498350381193266, 0.0009560027981071144, 0.0009621705580949024, 0.0009683383180826902, 0.000974506078070478, 0.0009806738380582658, 0.0009868415980460537, 0.0009930093580338415, 0.0009991771180216293, 0.0010053448780094172, 0.001011512637997205, 0.0010176803979849928, 0.0010238481579727809, 0.0010300159179605685, 0.0010361836779483565, 0.0010423514379361441, 0.0010485191979239322, 0.0010546869579117198, 0.0010608547178995078, 0.0010670224778872954, 0.0010731902378750835, 0.001079357997862871, 0.0010855257578506591, 0.0010916935178384467, 0.0010978612778262348, 0.0011040290378140224, 0.0011101967978018104, 0.001116364557789598, 0.001122532317777386, 0.001128700077765174, 0.0011348678377529617, 0.0011410355977407496, 0.0011472033577285374, 0.0011533711177163254, 0.001159538877704113, 0.001165706637691901, 0.0011718743976796887, 0.0011780421576674768, 0.0011842099176552644, 0.0011903776776430524, 0.00119654543763084, 0.001202713197618628, 0.0012088809576064157, 0.0012150487175942037, 0.0012212164775819913, 0.0012273842375697794, 0.001233551997557567, 0.001239719757545355, 0.0012458875175331429, 0.0012520552775209307, 0.0012582230375087185, 0.0012643907974965063, 0.0012705585574842942, 0.001276726317472082, 0.0012828940774598698, 0.0012890618374476576, 0.0012952295974354455, 0.0013013973574232333, 0.0013075651174110211, 0.001313732877398809, 0.0013199006373865968, 0.0013260683973743846, 0.0013322361573621724, 0.0013384039173499603, 0.001344571677337748, 0.001350739437325536, 0.0013569071973133237, 0.0013630749573011118, 0.0013692427172888994, 0.0013754104772766874, 0.001381578237264475, 0.001387745997252263, 0.0013939137572400507, 0.0014000815172278388, 0.0014062492772156264, 0.0014124170372034144, 0.001418584797191202, 0.00142475255717899, 0.0014309203171667777, 0.0014370880771545657, 0.0014432558371423535, 0.0014494235971301414, 0.0014555913571179292, 0.001461759117105717, 0.001467926877093505, 0.0014740946370812927, 0.0014802623970690807, 0.0014864301570568683, 0.0014925979170446564, 0.001498765677032444, 0.001504933437020232, 0.0015111011970080196, 0.0015172689569958077, 0.0015234367169835953, 0.0015296044769713833, 0.001535772236959171, 0.001541939996946959, 0.0015481077569347466, 0.0015542755169225347, 0.0015604432769103223, 0.0015666110368981103, 0.001572778796885898, 0.001578946556873686, 0.0015851143168614738, 0.0015912820768492616, 0.0015974498368370494, 0.0016036175968248373, 0.001609785356812625, 0.001615953116800413, 0.0016221208767882008, 0.0016282886367759886, 0.0016344563967637764, 0.0016406241567515642, 0.001646791916739352, 0.0016529596767271399, 0.0016591274367149277, 0.0016652951967027155, 0.0016714629566905034, 0.0016776307166782912, 0.001683798476666079, 0.0016899662366538669, 0.0016961339966416547, 0.0017023017566294427, 0.0017084695166172303, 0.0017146372766050184, 0.001720805036592806, 0.001726972796580594, 0.0017331405565683819, 0.0017393083165561697, 0.0017454760765439575, 0.0017516438365317453, 0.0017578115965195332, 0.001763979356507321, 0.0017701471164951088, 0.0017763148764828967, 0.0017824826364706845, 0.0017886503964584723, 0.0017948181564462601, 0.001800985916434048, 0.001807153676421836, 0.0018133214364096236, 0.0018194891963974117, 0.0018256569563851993, 0.0018318247163729873, 0.001837992476360775, 0.001844160236348563, 0.0018503279963363506, 0.0018564957563241386, 0.0018626635163119262, 0.0018688312762997143, 0.0018749990362875019, 0.00188116679627529, 0.0018873345562630775, 0.0018935023162508656, 0.0018996700762386532, 0.0019058378362264412, 0.0019120055962142289, 0.001918173356202017, 0.0019243411161898047, 0.0019305088761775926, 0.0019366766361653804, 0.0019428443961531682, 0.001949012156140956, 0.0019551799161287436, 0.0019613476761165317, 0.0019675154361043193, 0.0019736831960921073, 0.001979850956079895, 0.001986018716067683, 0.0019921864760554706, 0.0019983542360432587, 0.0020045219960310467, 0.0020106897560188343, 0.002016857516006622, 0.00202302527599441, 0.002029193035982198, 0.0020353607959699856, 0.0020415285559577737, 0.0020476963159455617, 0.0020538640759333493, 0.002060031835921137, 0.002066199595908925, 0.002072367355896713, 0.0020785351158845006, 0.0020847028758722882, 0.0020908706358600763, 0.0020970383958478643, 0.002103206155835652, 0.0021093739158234395, 0.0021155416758112276, 0.0021217094357990156, 0.0021278771957868032, 0.002134044955774591, 0.002140212715762379, 0.002146380475750167, 0.0021525482357379546, 0.002158715995725742, 0.0021648837557135306, 0.0021710515157013183, 0.002177219275689106, 0.0021833870356768935, 0.002189554795664682, 0.0021957225556524696, 0.002201890315640257, 0.0022080580756280448, 0.0022142258356158333, 0.002220393595603621, 0.0022265613555914085, 0.002232729115579196, 0.0022388968755669846, 0.002245064635554772, 0.00225123239554256, 0.002257400155530348, 0.002263567915518136, 0.0022697356755059235, 0.002275903435493711, 0.002282071195481499, 0.002288238955469287, 0.002294406715457075, 0.0023005744754448624, 0.002306742235432651, 0.0023129099954204385, 0.002319077755408226, 0.0023252455153960137, 0.002331413275383802, 0.00233758103537159, 0.0023437487953593774, 0.002349916555347165, 0.0023560843153349535, 0.002362252075322741, 0.0023684198353105287, 0.0023745875952983168, 0.002380755355286105, 0.0023869231152738924, 0.00239309087526168, 0.002399258635249468, 0.002405426395237256, 0.0024115941552250437, 0.0024177619152128313, 0.0024239296752006194, 0.0024300974351884074, 0.002436265195176195, 0.0024424329551639827, 0.0024486007151517707, 0.0024547684751395587, 0.0024609362351273464, 0.002467103995115134, 0.002473271755102922, 0.00247943951509071, 0.0024856072750784977, 0.0024917750350662857, 0.0024979427950540733, 0.0025041105550418614, 0.002510278315029649, 0.002516446075017437, 0.0025226138350052246, 0.0025287815949930127, 0.0025349493549808003, 0.0025411171149685883, 0.002547284874956376, 0.002553452634944164, 0.0025596203949319516, 0.0025657881549197396, 0.0025719559149075272, 0.0025781236748953153, 0.002584291434883103, 0.002590459194870891, 0.002596626954858679, 0.0026027947148464666, 0.0026089624748342546, 0.0026151302348220423, 0.0026212979948098303, 0.002627465754797618, 0.002633633514785406, 0.0026398012747731936, 0.0026459690347609816, 0.002652136794748769, 0.0026583045547365573, 0.002664472314724345, 0.002670640074712133, 0.0026768078346999205, 0.0026829755946877086, 0.002689143354675496, 0.0026953111146632842, 0.002701478874651072, 0.00270764663463886, 0.0027138143946266475, 0.0027199821546144355, 0.0027261499146022236, 0.002732317674590011, 0.002738485434577799, 0.002744653194565587, 0.002750820954553375, 0.0027569887145411625, 0.00276315647452895, 0.002769324234516738, 0.002775491994504526, 0.002781659754492314, 0.0027878275144801014, 0.0027939952744678895, 0.0028001630344556775, 0.002806330794443465, 0.0028124985544312527, 0.0028186663144190408, 0.002824834074406829, 0.0028310018343946164, 0.002837169594382404, 0.0028433373543701925, 0.00284950511435798, 0.0028556728743457677, 0.0028618406343335553, 0.002868008394321344, 0.0028741761543091314, 0.002880343914296919, 0.002886511674284707, 0.002892679434272495, 0.0028988471942602827, 0.0029050149542480704, 0.0029111827142358584, 0.0029173504742236464, 0.002923518234211434, 0.0029296859941992217, 0.00293585375418701, 0.0029420215141747977, 0.0029481892741625854, 0.002954357034150373, 0.0029605247941381614, 0.002966692554125949, 0.0029728603141137367, 0.0029790280741015243, 0.0029851958340893128, 0.0029913635940771004, 0.002997531354064888, 0.0030036991140526756, 0.003009866874040464, 0.0030160346340282517, 0.0030222023940160393, 0.003028370154003827, 0.0030345379139916154, 0.003040705673979403, 0.0030468734339671906, 0.0030530411939549786, 0.0030592089539427667, 0.0030653767139305543, 0.003071544473918342, 0.00307771223390613])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_8bf6c637426e4e9d9a9e0052ad38f196.x = d3.scale.linear()
              .domain([0.0, 0.00307771223390613])
              .range([0, 400]);

    color_map_8bf6c637426e4e9d9a9e0052ad38f196.legend = L.control({position: 'topright'});
    color_map_8bf6c637426e4e9d9a9e0052ad38f196.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_8bf6c637426e4e9d9a9e0052ad38f196.legend.addTo(map_e647b6e92bdd4246b2cb0765a33b0448);

    color_map_8bf6c637426e4e9d9a9e0052ad38f196.xAxis = d3.svg.axis()
        .scale(color_map_8bf6c637426e4e9d9a9e0052ad38f196.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.000512952038984355, 0.00102590407796871, 0.0015388561169530652, 0.00205180815593742, 0.002564760194921775, 0.00307771223390613]);

    color_map_8bf6c637426e4e9d9a9e0052ad38f196.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_8bf6c637426e4e9d9a9e0052ad38f196.g = color_map_8bf6c637426e4e9d9a9e0052ad38f196.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_8bf6c637426e4e9d9a9e0052ad38f196.g.selectAll("rect")
        .data(color_map_8bf6c637426e4e9d9a9e0052ad38f196.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_8bf6c637426e4e9d9a9e0052ad38f196.x(color_map_8bf6c637426e4e9d9a9e0052ad38f196.color.domain()[i - 1]) : color_map_8bf6c637426e4e9d9a9e0052ad38f196.x.range()[0],
            x1: i < color_map_8bf6c637426e4e9d9a9e0052ad38f196.color.domain().length ? color_map_8bf6c637426e4e9d9a9e0052ad38f196.x(color_map_8bf6c637426e4e9d9a9e0052ad38f196.color.domain()[i]) : color_map_8bf6c637426e4e9d9a9e0052ad38f196.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_8bf6c637426e4e9d9a9e0052ad38f196.g.call(color_map_8bf6c637426e4e9d9a9e0052ad38f196.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('23_40_Partido Socialista Brasileiro');

