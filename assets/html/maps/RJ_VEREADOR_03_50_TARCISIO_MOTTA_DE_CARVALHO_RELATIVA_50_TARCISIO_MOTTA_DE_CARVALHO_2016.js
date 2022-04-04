    
            var map_992969198c874e09aa9005e42b4bbd04 = L.map(
                "map_992969198c874e09aa9005e42b4bbd04",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_44b82d8ac24d4663bcef75dfeefeb7ac = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_992969198c874e09aa9005e42b4bbd04);
        
    
            var choropleth_8285a9dcfe9f4a18854f5adc30bc4955 = L.featureGroup(
                {}
            ).addTo(map_992969198c874e09aa9005e42b4bbd04);
        
    
        function geo_json_bae4c2b43cba45a4aefac43d61c39628_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 482: case 428: case 410: case 435: case 380: case 393: case 381: case 338: case 340: case 333: case 416: case 423: case 361: case 390: case 394: case 368: case 362: case 348: case 358: case 356: case 360: case 347: case 355: case 350: case 457: case 337: case 483: case 471: case 388: case 370: case 387: case 378: case 511: case 458: case 450: case 480: case 341: case 389: case 384: case 510: case 405: case 414: case 406: case 374: case 476: case 365: case 890: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 439: case 434: case 412: case 440: case 424: case 417: case 473: case 472: case 403: case 470: case 427: case 411: case 404: case 364: case 326: case 331: case 330: case 433: case 399: case 366: case 477: case 402: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 438: case 447: case 453: case 456: case 455: case 442: case 444: case 426: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 462: case 437: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 467: case 466: case 468: case 464: case 436: case 446: case 419: case 415: case 408: case 339: case 336: case 445: case 485: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_bae4c2b43cba45a4aefac43d61c39628_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_bae4c2b43cba45a4aefac43d61c39628 = L.geoJson(null, {
                onEachFeature: geo_json_bae4c2b43cba45a4aefac43d61c39628_onEachFeature,
            
                style: geo_json_bae4c2b43cba45a4aefac43d61c39628_styler,
        });

        function geo_json_bae4c2b43cba45a4aefac43d61c39628_add (data) {
            geo_json_bae4c2b43cba45a4aefac43d61c39628
                .addData(data)
                .addTo(choropleth_8285a9dcfe9f4a18854f5adc30bc4955);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_bae4c2b43cba45a4aefac43d61c39628_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_afbaa9a898b64834856bc9fe3e2c13e0 = {};

    
    color_map_afbaa9a898b64834856bc9fe3e2c13e0.color = d3.scale.threshold()
              .domain([0.0, 0.00017406601633240018, 0.00034813203266480036, 0.0005221980489972005, 0.0006962640653296007, 0.0008703300816620008, 0.001044396097994401, 0.001218462114326801, 0.0013925281306592014, 0.0015665941469916015, 0.0017406601633240017, 0.0019147261796564018, 0.002088792195988802, 0.002262858212321202, 0.002436924228653602, 0.002610990244986002, 0.002785056261318403, 0.002959122277650803, 0.003133188293983203, 0.0033072543103156034, 0.0034813203266480033, 0.0036553863429804037, 0.0038294523593128036, 0.0040035183756452035, 0.004177584391977604, 0.004351650408310004, 0.004525716424642404, 0.004699782440974804, 0.004873848457307204, 0.005047914473639605, 0.005221980489972004, 0.005396046506304405, 0.005570112522636806, 0.005744178538969206, 0.005918244555301606, 0.006092310571634006, 0.006266376587966406, 0.0064404426042988065, 0.006614508620631207, 0.006788574636963606, 0.006962640653296007, 0.007136706669628407, 0.007310772685960807, 0.007484838702293208, 0.007658904718625607, 0.007832970734958008, 0.008007036751290407, 0.008181102767622808, 0.008355168783955208, 0.008529234800287609, 0.008703300816620008, 0.008877366832952408, 0.009051432849284807, 0.009225498865617208, 0.009399564881949608, 0.00957363089828201, 0.009747696914614409, 0.00992176293094681, 0.01009582894727921, 0.01026989496361161, 0.010443960979944008, 0.01061802699627641, 0.01079209301260881, 0.01096615902894121, 0.011140225045273611, 0.01131429106160601, 0.011488357077938412, 0.011662423094270812, 0.011836489110603213, 0.01201055512693561, 0.012184621143268012, 0.012358687159600411, 0.012532753175932812, 0.012706819192265212, 0.012880885208597613, 0.013054951224930013, 0.013229017241262414, 0.013403083257594813, 0.013577149273927213, 0.013751215290259612, 0.013925281306592013, 0.014099347322924413, 0.014273413339256814, 0.014447479355589214, 0.014621545371921615, 0.014795611388254014, 0.014969677404586415, 0.015143743420918813, 0.015317809437251214, 0.015491875453583614, 0.015665941469916015, 0.015840007486248416, 0.016014073502580814, 0.016188139518913215, 0.016362205535245616, 0.016536271551578014, 0.016710337567910415, 0.016884403584242817, 0.017058469600575218, 0.017232535616907615, 0.017406601633240017, 0.017580667649572418, 0.017754733665904816, 0.017928799682237217, 0.018102865698569615, 0.01827693171490202, 0.018450997731234417, 0.018625063747566818, 0.018799129763899216, 0.01897319578023162, 0.01914726179656402, 0.019321327812896416, 0.019495393829228817, 0.01966945984556122, 0.01984352586189362, 0.020017591878226017, 0.02019165789455842, 0.02036572391089082, 0.02053978992722322, 0.02071385594355562, 0.020887921959888017, 0.02106198797622042, 0.02123605399255282, 0.02141012000888522, 0.02158418602521762, 0.021758252041550023, 0.02193231805788242, 0.02210638407421482, 0.022280450090547223, 0.02245451610687962, 0.02262858212321202, 0.02280264813954442, 0.022976714155876824, 0.023150780172209222, 0.023324846188541623, 0.02349891220487402, 0.023672978221206425, 0.023847044237538823, 0.02402111025387122, 0.024195176270203622, 0.024369242286536023, 0.024543308302868425, 0.024717374319200822, 0.024891440335533224, 0.025065506351865625, 0.025239572368198026, 0.025413638384530424, 0.02558770440086282, 0.025761770417195226, 0.025935836433527624, 0.026109902449860025, 0.026283968466192423, 0.026458034482524827, 0.026632100498857225, 0.026806166515189626, 0.026980232531522024, 0.027154298547854425, 0.027328364564186827, 0.027502430580519224, 0.027676496596851625, 0.027850562613184027, 0.028024628629516428, 0.028198694645848826, 0.028372760662181227, 0.028546826678513628, 0.028720892694846026, 0.028894958711178427, 0.029069024727510825, 0.02924309074384323, 0.029417156760175627, 0.02959122277650803, 0.029765288792840426, 0.02993935480917283, 0.03011342082550523, 0.030287486841837626, 0.030461552858170027, 0.03063561887450243, 0.03080968489083483, 0.030983750907167228, 0.03115781692349963, 0.03133188293983203, 0.03150594895616443, 0.03168001497249683, 0.03185408098882923, 0.03202814700516163, 0.03220221302149403, 0.03237627903782643, 0.03255034505415883, 0.03272441107049123, 0.032898477086823634, 0.03307254310315603, 0.033246609119488436, 0.03342067513582083, 0.03359474115215323, 0.03376880716848563, 0.03394287318481803, 0.034116939201150435, 0.03429100521748284, 0.03446507123381523, 0.03463913725014763, 0.03481320326648003, 0.034987269282812435, 0.035161335299144836, 0.03533540131547723, 0.03550946733180963, 0.03568353334814204, 0.035857599364474434, 0.036031665380806835, 0.03620573139713923, 0.03637979741347164, 0.03655386342980404, 0.03672792944613643, 0.036901995462468834, 0.037076061478801235, 0.037250127495133636, 0.03742419351146604, 0.03759825952779843, 0.03777232554413083, 0.03794639156046324, 0.038120457576795636, 0.03829452359312804, 0.03846858960946044, 0.03864265562579283, 0.03881672164212524, 0.038990787658457635, 0.039164853674790036, 0.03933891969112244, 0.03951298570745484, 0.03968705172378724, 0.03986111774011964, 0.040035183756452035, 0.040209249772784436, 0.04038331578911684, 0.04055738180544924, 0.04073144782178164, 0.040905513838114034, 0.04107957985444644, 0.04125364587077884, 0.04142771188711124, 0.04160177790344364, 0.04177584391977603, 0.04194990993610844, 0.04212397595244084, 0.04229804196877324, 0.04247210798510564, 0.042646174001438046, 0.04282024001777044, 0.04299430603410284, 0.04316837205043524, 0.04334243806676764, 0.043516504083100045, 0.04369057009943244, 0.04386463611576484, 0.04403870213209724, 0.04421276814842964, 0.044386834164762044, 0.044560900181094446, 0.04473496619742684, 0.04490903221375924, 0.04508309823009164, 0.04525716424642404, 0.045431230262756445, 0.04560529627908884, 0.04577936229542125, 0.04595342831175365, 0.04612749432808604, 0.046301560344418444, 0.04647562636075084, 0.046649692377083246, 0.04682375839341565, 0.04699782440974804, 0.04717189042608044, 0.04734595644241285, 0.047520022458745245, 0.047694088475077646, 0.04786815449141004, 0.04804222050774244, 0.04821628652407485, 0.048390352540407244, 0.048564418556739646, 0.04873848457307205, 0.04891255058940445, 0.04908661660573685, 0.04926068262206924, 0.049434748638401645, 0.049608814654734046, 0.04978288067106645, 0.04995694668739885, 0.05013101270373125, 0.050305078720063644, 0.05047914473639605, 0.050653210752728446, 0.05082727676906085, 0.05100134278539325, 0.05117540880172564, 0.05134947481805805, 0.05152354083439045, 0.051697606850722846, 0.05187167286705525, 0.05204573888338765, 0.05221980489972005, 0.05239387091605245, 0.052567936932384846, 0.05274200294871725, 0.052916068965049655, 0.05309013498138205, 0.05326420099771445, 0.053438267014046845, 0.05361233303037925, 0.053786399046711654, 0.05396046506304405, 0.05413453107937645, 0.05430859709570885, 0.05448266311204125, 0.05465672912837365, 0.054830795144706054, 0.05500486116103845, 0.05517892717737086, 0.05535299319370325, 0.05552705921003565, 0.05570112522636805, 0.05587519124270045, 0.056049257259032856, 0.05622332327536526, 0.05639738929169765, 0.05657145530803005, 0.056745521324362454, 0.056919587340694855, 0.057093653357027256, 0.05726771937335965, 0.05744178538969205, 0.05761585140602446, 0.057789917422356854, 0.057963983438689255, 0.05813804945502165, 0.05831211547135406, 0.05848618148768646, 0.05866024750401885, 0.058834313520351254, 0.059008379536683656, 0.05918244555301606, 0.05935651156934846, 0.05953057758568085, 0.05970464360201325, 0.05987870961834566, 0.060052775634678056, 0.06022684165101046, 0.06040090766734286, 0.06057497368367525, 0.06074903970000766, 0.060923105716340055, 0.061097171732672456, 0.06127123774900486, 0.06144530376533726, 0.06161936978166966, 0.06179343579800206, 0.061967501814334455, 0.062141567830666856, 0.06231563384699926, 0.06248969986333166, 0.06266376587966406, 0.06283783189599645, 0.06301189791232886, 0.06318596392866126, 0.06336002994499366, 0.06353409596132606, 0.06370816197765845, 0.06388222799399086, 0.06405629401032326, 0.06423036002665566, 0.06440442604298806, 0.06457849205932045, 0.06475255807565286, 0.06492662409198527, 0.06510069010831766, 0.06527475612465007, 0.06544882214098247, 0.06562288815731486, 0.06579695417364727, 0.06597102018997966, 0.06614508620631206, 0.06631915222264445, 0.06649321823897687, 0.06666728425530927, 0.06684135027164166, 0.06701541628797407, 0.06718948230430646, 0.06736354832063886, 0.06753761433697127, 0.06771168035330366, 0.06788574636963605, 0.06805981238596848, 0.06823387840230087, 0.06840794441863327, 0.06858201043496567, 0.06875607645129807, 0.06893014246763046, 0.06910420848396286, 0.06927827450029526, 0.06945234051662766, 0.06962640653296007, 0.06980047254929247, 0.06997453856562487, 0.07014860458195726, 0.07032267059828967, 0.07049673661462207, 0.07067080263095446, 0.07084486864728687, 0.07101893466361926, 0.07119300067995167, 0.07136706669628408, 0.07154113271261647, 0.07171519872894887, 0.07188926474528126, 0.07206333076161367, 0.07223739677794606, 0.07241146279427846, 0.07258552881061087, 0.07275959482694327, 0.07293366084327567, 0.07310772685960808, 0.07328179287594047, 0.07345585889227287, 0.07362992490860527, 0.07380399092493767, 0.07397805694127006, 0.07415212295760247, 0.07432618897393488, 0.07450025499026727, 0.07467432100659968, 0.07484838702293208, 0.07502245303926447, 0.07519651905559686, 0.07537058507192927, 0.07554465108826167, 0.07571871710459406, 0.07589278312092648, 0.07606684913725888, 0.07624091515359127, 0.07641498116992368, 0.07658904718625607, 0.07676311320258847, 0.07693717921892088, 0.07711124523525327, 0.07728531125158566, 0.07745937726791809, 0.07763344328425048, 0.07780750930058287, 0.07798157531691527, 0.07815564133324768, 0.07832970734958007, 0.07850377336591247, 0.07867783938224487, 0.07885190539857727, 0.07902597141490968, 0.07920003743124208, 0.07937410344757448, 0.07954816946390687, 0.07972223548023928, 0.07989630149657168, 0.08007036751290407, 0.08024443352923648, 0.08041849954556887, 0.08059256556190128, 0.08076663157823367, 0.08094069759456608, 0.08111476361089848, 0.08128882962723087, 0.08146289564356328, 0.08163696165989567, 0.08181102767622807, 0.08198509369256048, 0.08215915970889288, 0.08233322572522528, 0.08250729174155769, 0.08268135775789008, 0.08285542377422248, 0.08302948979055488, 0.08320355580688728, 0.08337762182321967, 0.08355168783955207, 0.08372575385588449, 0.08389981987221688, 0.08407388588854928, 0.08424795190488168, 0.08442201792121408, 0.08459608393754647, 0.08477014995387888, 0.08494421597021128, 0.08511828198654367, 0.08529234800287609, 0.08546641401920849, 0.08564048003554088, 0.08581454605187329, 0.08598861206820568, 0.08616267808453808, 0.08633674410087049, 0.08651081011720288, 0.08668487613353527, 0.08685894214986768])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_afbaa9a898b64834856bc9fe3e2c13e0.x = d3.scale.linear()
              .domain([0.0, 0.08685894214986768])
              .range([0, 400]);

    color_map_afbaa9a898b64834856bc9fe3e2c13e0.legend = L.control({position: 'topright'});
    color_map_afbaa9a898b64834856bc9fe3e2c13e0.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_afbaa9a898b64834856bc9fe3e2c13e0.legend.addTo(map_992969198c874e09aa9005e42b4bbd04);

    color_map_afbaa9a898b64834856bc9fe3e2c13e0.xAxis = d3.svg.axis()
        .scale(color_map_afbaa9a898b64834856bc9fe3e2c13e0.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.01447649035831128, 0.02895298071662256, 0.04342947107493384, 0.05790596143324512, 0.0723824517915564, 0.08685894214986768]);

    color_map_afbaa9a898b64834856bc9fe3e2c13e0.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_afbaa9a898b64834856bc9fe3e2c13e0.g = color_map_afbaa9a898b64834856bc9fe3e2c13e0.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_afbaa9a898b64834856bc9fe3e2c13e0.g.selectAll("rect")
        .data(color_map_afbaa9a898b64834856bc9fe3e2c13e0.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_afbaa9a898b64834856bc9fe3e2c13e0.x(color_map_afbaa9a898b64834856bc9fe3e2c13e0.color.domain()[i - 1]) : color_map_afbaa9a898b64834856bc9fe3e2c13e0.x.range()[0],
            x1: i < color_map_afbaa9a898b64834856bc9fe3e2c13e0.color.domain().length ? color_map_afbaa9a898b64834856bc9fe3e2c13e0.x(color_map_afbaa9a898b64834856bc9fe3e2c13e0.color.domain()[i]) : color_map_afbaa9a898b64834856bc9fe3e2c13e0.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_afbaa9a898b64834856bc9fe3e2c13e0.g.call(color_map_afbaa9a898b64834856bc9fe3e2c13e0.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('03_50_TARCISIO MOTTA DE CARVALHO');

