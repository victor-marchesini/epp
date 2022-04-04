    
            var map_36ab71fea7c04fd68b8485a78293dedb = L.map(
                "map_36ab71fea7c04fd68b8485a78293dedb",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_4bb427f0529a4f0097dba01978dd908a = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_36ab71fea7c04fd68b8485a78293dedb);
        
    
            var choropleth_dcabd6c239454b98bc6c7f3bc7b1eb49 = L.featureGroup(
                {}
            ).addTo(map_36ab71fea7c04fd68b8485a78293dedb);
        
    
        function geo_json_ea3b3469ddb447a79c1eb38b863af331_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 425: case 421: case 482: case 422: case 439: case 434: case 441: case 412: case 418: case 448: case 447: case 335: case 470: case 478: case 446: case 345: case 381: case 369: case 363: case 340: case 333: case 416: case 382: case 375: case 432: case 348: case 354: case 457: case 463: case 429: case 465: case 480: case 341: case 485: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 443: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 428: case 410: case 440: case 474: case 435: case 393: case 400: case 423: case 427: case 475: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 353: case 367: case 357: case 391: case 365: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 336: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_ea3b3469ddb447a79c1eb38b863af331_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_ea3b3469ddb447a79c1eb38b863af331 = L.geoJson(null, {
                onEachFeature: geo_json_ea3b3469ddb447a79c1eb38b863af331_onEachFeature,
            
                style: geo_json_ea3b3469ddb447a79c1eb38b863af331_styler,
        });

        function geo_json_ea3b3469ddb447a79c1eb38b863af331_add (data) {
            geo_json_ea3b3469ddb447a79c1eb38b863af331
                .addData(data)
                .addTo(choropleth_dcabd6c239454b98bc6c7f3bc7b1eb49);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_ea3b3469ddb447a79c1eb38b863af331_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_826c20b1fcc34b17b3702a251708234e = {};

    
    color_map_826c20b1fcc34b17b3702a251708234e.color = d3.scale.threshold()
              .domain([-0.0091324200913242, -0.009090088593986485, -0.00904775709664877, -0.009005425599311055, -0.00896309410197334, -0.008920762604635625, -0.00887843110729791, -0.008836099609960195, -0.00879376811262248, -0.008751436615284765, -0.00870910511794705, -0.008666773620609334, -0.00862444212327162, -0.008582110625933904, -0.00853977912859619, -0.008497447631258474, -0.008455116133920759, -0.008412784636583044, -0.008370453139245329, -0.008328121641907615, -0.008285790144569899, -0.008243458647232183, -0.008201127149894469, -0.008158795652556753, -0.00811646415521904, -0.008074132657881324, -0.008031801160543608, -0.007989469663205894, -0.007947138165868178, -0.007904806668530464, -0.007862475171192748, -0.007820143673855032, -0.007777812176517318, -0.007735480679179603, -0.007693149181841888, -0.007650817684504173, -0.007608486187166457, -0.007566154689828743, -0.007523823192491027, -0.007481491695153312, -0.0074391601978155975, -0.007396828700477882, -0.007354497203140168, -0.007312165705802452, -0.007269834208464737, -0.007227502711127022, -0.007185171213789306, -0.007142839716451591, -0.0071005082191138765, -0.007058176721776161, -0.007015845224438447, -0.006973513727100731, -0.006931182229763017, -0.006888850732425301, -0.006846519235087586, -0.006804187737749871, -0.006761856240412156, -0.0067195247430744415, -0.006677193245736726, -0.006634861748399011, -0.006592530251061296, -0.00655019875372358, -0.006507867256385865, -0.00646553575904815, -0.0064232042617104355, -0.006380872764372721, -0.006338541267035005, -0.00629620976969729, -0.006253878272359575, -0.00621154677502186, -0.006169215277684145, -0.0061268837803464295, -0.006084552283008715, -0.006042220785671, -0.005999889288333285, -0.00595755779099557, -0.005915226293657854, -0.005872894796320139, -0.005830563298982424, -0.005788231801644709, -0.005745900304306994, -0.005703568806969279, -0.005661237309631564, -0.005618905812293849, -0.005576574314956134, -0.005534242817618418, -0.005491911320280703, -0.0054495798229429885, -0.0054072483256052736, -0.005364916828267559, -0.005322585330929844, -0.005280253833592128, -0.005237922336254413, -0.005195590838916698, -0.005153259341578982, -0.005110927844241268, -0.0050685963469035535, -0.005026264849565838, -0.004983933352228122, -0.004941601854890407, -0.004899270357552692, -0.004856938860214977, -0.004814607362877262, -0.0047722758655395475, -0.0047299443682018326, -0.004687612870864118, -0.004645281373526402, -0.004602949876188687, -0.004560618378850972, -0.004518286881513256, -0.004475955384175541, -0.0044336238868378265, -0.004391292389500112, -0.004348960892162397, -0.004306629394824682, -0.004264297897486966, -0.004221966400149251, -0.004179634902811536, -0.004137303405473821, -0.004094971908136106, -0.004052640410798391, -0.004010308913460676, -0.003967977416122961, -0.003925645918785246, -0.00388331442144753, -0.0038409829241098153, -0.0037986514267721004, -0.0037563199294343855, -0.0037139884320966706, -0.003671656934758955, -0.00362932543742124, -0.003586993940083525, -0.00354466244274581, -0.0035023309454080944, -0.0034599994480703795, -0.0034176679507326646, -0.0033753364533949497, -0.0033330049560572348, -0.00329067345871952, -0.003248341961381805, -0.003206010464044089, -0.0031636789667063743, -0.0031213474693686585, -0.0030790159720309436, -0.0030366844746932287, -0.002994352977355514, -0.002952021480017799, -0.002909689982680084, -0.002867358485342369, -0.0028250269880046542, -0.0027826954906669385, -0.0027403639933292227, -0.002698032495991508, -0.002655700998653793, -0.002613369501316078, -0.002571038003978363, -0.002528706506640648, -0.0024863750093029333, -0.0024440435119652184, -0.0024017120146275035, -0.002359380517289787, -0.002317049019952072, -0.002274717522614357, -0.002232386025276642, -0.0021900545279389273, -0.0021477230306012124, -0.0021053915332634975, -0.0020630600359257826, -0.0020207285385880677, -0.0019783970412503528, -0.0019360655439126361, -0.0018937340465749212, -0.0018514025492372063, -0.0018090710518994914, -0.0017667395545617765, -0.0017244080572240616, -0.0016820765598863467, -0.0016397450625486318, -0.001597413565210917, -0.0015550820678732011, -0.0015127505705354862, -0.0014704190731977705, -0.0014280875758600556, -0.0013857560785223407, -0.0013434245811846258, -0.0013010930838469117, -0.001258761586509196, -0.0012164300891714802, -0.0011740985918337644, -0.0011317670944960504, -0.0010894355971583364, -0.0010471040998206206, -0.0010047726024829066, -0.0009624411051451891, -0.000920109607807475, -0.0008777781104697593, -0.0008354466131320435, -0.0007931151157943295, -0.0007507836184566137, -0.0007084521211188997, -0.0006661206237811839, -0.0006237891264434699, -0.0005814576291057541, -0.0005391261317680401, -0.0004967946344303243, -0.00045446313709261027, -0.0004121316397548945, -0.00036980014241717873, -0.0003274686450794647, -0.00028513714774174893, -0.0002428056504040349, -0.0002004741530663174, -0.00015814265572860337, -0.0001158111583908876, -7.347966105317356e-05, -3.11481637154578e-05, 1.1183333622256236e-05, 5.3514830959972004e-05, 9.584632829768777e-05, 0.0001381778256354018, 0.00018050932297311757, 0.0002228408203108316, 0.0002651723176485474, 0.0003075038149862614, 0.0003498353123239772, 0.0003921668096616912, 0.000434498306999407, 0.00047682980433712274, 0.0005191613016748368, 0.0005614927990125543, 0.0006038242963502683, 0.0006461557936879841, 0.0006884872910256981, 0.0007308187883634139, 0.0007731502857011279, 0.0008154817830388437, 0.0008578132803765577, 0.0009001447777142735, 0.0009424762750519892, 0.0009848077723897033, 0.001027139269727419, 0.001069470767065133, 0.0011118022644028488, 0.0011541337617405629, 0.0011964652590782787, 0.0012387967564159927, 0.0012811282537537085, 0.0013234597510914242, 0.00136579124842914, 0.0014081227457668558, 0.0014504542431045698, 0.0014927857404422856, 0.0015351172377799996, 0.0015774487351177154, 0.0016197802324554294, 0.0016621117297931452, 0.0017044432271308592, 0.001746774724468575, 0.0017891062218062907, 0.0018314377191440048, 0.0018737692164817205, 0.0019161007138194346, 0.0019584322111571503, 0.0020007637084948644, 0.00204309520583258, 0.002085426703170294, 0.0021277582005080117, 0.0021700896978457257, 0.0022124211951834415, 0.0022547526925211572, 0.0022970841898588713, 0.002339415687196587, 0.002381747184534301, 0.002424078681872017, 0.002466410179209731, 0.0025087416765474466, 0.0025510731738851607, 0.0025934046712228764, 0.0026357361685605905, 0.0026780676658983062, 0.002720399163236022, 0.002762730660573736, 0.002805062157911452, 0.002847393655249166, 0.0028897251525868833, 0.0029320566499245974, 0.002974388147262313, 0.003016719644600027, 0.003059051141937743, 0.0031013826392754587, 0.0031437141366131727, 0.0031860456339508885, 0.0032283771312886025, 0.0032707086286263183, 0.0033130401259640323, 0.003355371623301748, 0.003397703120639462, 0.003440034617977178, 0.003482366115314892, 0.0035246976126526077, 0.0035670291099903235, 0.0036093606073280375, 0.003651692104665755, 0.003694023602003469, 0.003736355099341185, 0.003778686596678899, 0.0038210180940166146, 0.0038633495913543286, 0.0039056810886920444, 0.0039480125860297585, 0.003990344083367474, 0.00403267558070519, 0.004075007078042904, 0.00411733857538062, 0.004159670072718334, 0.00420200157005605, 0.004244333067393764, 0.004286664564731479, 0.004328996062069193, 0.004371327559406909, 0.004413659056744627, 0.004455990554082341, 0.0044983220514200565, 0.0045406535487577705, 0.004582985046095486, 0.0046253165434332, 0.004667648040770916, 0.00470997953810863, 0.004752311035446346, 0.00479464253278406, 0.004836974030121776, 0.0048793055274594915, 0.0049216370247972055, 0.004963968522134921, 0.005006300019472635, 0.005048631516810351, 0.005090963014148065, 0.005133294511485781, 0.005175626008823495, 0.005217957506161212, 0.005260289003498928, 0.005302620500836642, 0.005344951998174358, 0.005387283495512072, 0.005429614992849788, 0.005471946490187502, 0.005514277987525218, 0.005556609484862932, 0.005598940982200647, 0.005641272479538361, 0.005683603976876077, 0.005725935474213793, 0.005768266971551507, 0.005810598468889223, 0.005852929966226937, 0.0058952614635646525, 0.005937592960902367, 0.005979924458240084, 0.006022255955577798, 0.006064587452915514, 0.006106918950253228, 0.006149250447590944, 0.0061915819449286594, 0.0062339134422663735, 0.006276244939604089, 0.006318576436941803, 0.006360907934279519, 0.006403239431617233, 0.006445570928954949, 0.006487902426292663, 0.006530233923630377, 0.006572565420968093, 0.0066148969183058084, 0.006657228415643524, 0.00669955991298124, 0.006741891410318956, 0.0067842229076566715, 0.006826554404994384, 0.0068688859023321, 0.006911217399669812, 0.006953548897007528, 0.006995880394345243, 0.007038211891682959, 0.007080543389020675, 0.007122874886358387, 0.0071652063836961065, 0.007207537881033822, 0.007249869378371538, 0.00729220087570925, 0.007334532373046966, 0.007376863870384682, 0.007419195367722398, 0.007461526865060113, 0.007503858362397826, 0.0075461898597355415, 0.007588521357073257, 0.007630852854410973, 0.007673184351748685, 0.007715515849086401, 0.007757847346424117, 0.007800178843761833, 0.007842510341099545, 0.00788484183843726, 0.007927173335774976, 0.007969504833112692, 0.008011836330450408, 0.00805416782778812, 0.008096499325125836, 0.008138830822463552, 0.008181162319801268, 0.00822349381713898, 0.008265825314476696, 0.008308156811814411, 0.008350488309152127, 0.008392819806489843, 0.008435151303827555, 0.008477482801165271, 0.008519814298502987, 0.008562145795840703, 0.008604477293178415, 0.00864680879051613, 0.00868914028785385, 0.008731471785191566, 0.008773803282529281, 0.008816134779866994, 0.00885846627720471, 0.008900797774542425, 0.008943129271880141, 0.008985460769217853, 0.009027792266555569, 0.009070123763893285, 0.009112455261231, 0.009154786758568713, 0.009197118255906429, 0.009239449753244144, 0.00928178125058186, 0.009324112747919576, 0.009366444245257288, 0.009408775742595004, 0.00945110723993272, 0.009493438737270436, 0.009535770234608148, 0.009578101731945864, 0.00962043322928358, 0.009662764726621295, 0.009705096223959011, 0.009747427721296723, 0.009789759218634439, 0.009832090715972155, 0.00987442221330987, 0.009916753710647583, 0.009959085207985299, 0.010001416705323014, 0.01004374820266073, 0.010086079699998446, 0.010128411197336158, 0.010170742694673874, 0.01021307419201159, 0.010255405689349309, 0.010297737186687021, 0.010340068684024737, 0.010382400181362453, 0.010424731678700169, 0.01046706317603788, 0.010509394673375597, 0.010551726170713312, 0.010594057668051028, 0.010636389165388744, 0.010678720662726456, 0.010721052160064172, 0.010763383657401888, 0.010805715154739604, 0.010848046652077316, 0.010890378149415032, 0.010932709646752747, 0.010975041144090463, 0.011017372641428179, 0.011059704138765891, 0.011102035636103607, 0.011144367133441323, 0.011186698630779039, 0.01122903012811675, 0.011271361625454467, 0.011313693122792182, 0.011356024620129898, 0.011398356117467614, 0.011440687614805326, 0.011483019112143042, 0.011525350609480758, 0.011567682106818473, 0.011610013604156186, 0.011652345101493902, 0.011694676598831617, 0.011737008096169333, 0.011779339593507049, 0.011821671090844765, 0.01186400258818248, 0.011906334085520196, 0.011948665582857912, 0.011990997080195624])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_826c20b1fcc34b17b3702a251708234e.x = d3.scale.linear()
              .domain([-0.0091324200913242, 0.011990997080195624])
              .range([0, 400]);

    color_map_826c20b1fcc34b17b3702a251708234e.legend = L.control({position: 'topright'});
    color_map_826c20b1fcc34b17b3702a251708234e.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_826c20b1fcc34b17b3702a251708234e.legend.addTo(map_36ab71fea7c04fd68b8485a78293dedb);

    color_map_826c20b1fcc34b17b3702a251708234e.xAxis = d3.svg.axis()
        .scale(color_map_826c20b1fcc34b17b3702a251708234e.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-0.0091324200913242, -0.005611850562737563, -0.0020912810341509255, 0.001429288494435712, 0.004949858023022349, 0.008470427551608987, 0.011990997080195624]);

    color_map_826c20b1fcc34b17b3702a251708234e.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_826c20b1fcc34b17b3702a251708234e.g = color_map_826c20b1fcc34b17b3702a251708234e.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_826c20b1fcc34b17b3702a251708234e.g.selectAll("rect")
        .data(color_map_826c20b1fcc34b17b3702a251708234e.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_826c20b1fcc34b17b3702a251708234e.x(color_map_826c20b1fcc34b17b3702a251708234e.color.domain()[i - 1]) : color_map_826c20b1fcc34b17b3702a251708234e.x.range()[0],
            x1: i < color_map_826c20b1fcc34b17b3702a251708234e.color.domain().length ? color_map_826c20b1fcc34b17b3702a251708234e.x(color_map_826c20b1fcc34b17b3702a251708234e.color.domain()[i]) : color_map_826c20b1fcc34b17b3702a251708234e.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_826c20b1fcc34b17b3702a251708234e.g.call(color_map_826c20b1fcc34b17b3702a251708234e.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('05_13_Partido dos Trabalhadores');

