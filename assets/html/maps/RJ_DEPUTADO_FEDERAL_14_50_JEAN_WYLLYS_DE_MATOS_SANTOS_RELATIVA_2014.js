    
            var map_e5b65f7adbbd4532a2c3bc584305c409 = L.map(
                "map_e5b65f7adbbd4532a2c3bc584305c409",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_8ca509d68d82485abcdeb843a1338813 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_e5b65f7adbbd4532a2c3bc584305c409);
        
    
            var choropleth_7af368a1d62a4d8eb8305f7d0e3ad8cd = L.featureGroup(
                {}
            ).addTo(map_e5b65f7adbbd4532a2c3bc584305c409);
        
    
        function geo_json_a356c0cd65fe4758970053b3123b9998_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 391: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 421: case 439: case 377: case 434: case 441: case 418: case 424: case 417: case 403: case 478: case 474: case 435: case 452: case 392: case 396: case 427: case 432: case 411: case 397: case 364: case 346: case 401: case 327: case 326: case 329: case 331: case 330: case 367: case 357: case 454: case 430: case 429: case 409: case 469: case 461: case 465: case 451: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 467: case 472: case 470: case 442: case 436: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 462: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 453: case 466: case 455: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 446: case 419: case 415: case 408: case 339: case 459: case 445: case 471: case 477: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_a356c0cd65fe4758970053b3123b9998_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_a356c0cd65fe4758970053b3123b9998 = L.geoJson(null, {
                onEachFeature: geo_json_a356c0cd65fe4758970053b3123b9998_onEachFeature,
            
                style: geo_json_a356c0cd65fe4758970053b3123b9998_styler,
        });

        function geo_json_a356c0cd65fe4758970053b3123b9998_add (data) {
            geo_json_a356c0cd65fe4758970053b3123b9998
                .addData(data)
                .addTo(choropleth_7af368a1d62a4d8eb8305f7d0e3ad8cd);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_a356c0cd65fe4758970053b3123b9998_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_f8bbc5c90898467fa759408b7fd42c9c = {};

    
    color_map_f8bbc5c90898467fa759408b7fd42c9c.color = d3.scale.threshold()
              .domain([0.0, 0.00019545484069536637, 0.00039090968139073273, 0.000586364522086099, 0.0007818193627814655, 0.000977274203476832, 0.001172729044172198, 0.0013681838848675645, 0.001563638725562931, 0.0017590935662582972, 0.001954548406953664, 0.00215000324764903, 0.002345458088344396, 0.002540912929039763, 0.002736367769735129, 0.0029318226104304954, 0.003127277451125862, 0.003322732291821228, 0.0035181871325165944, 0.003713641973211961, 0.003909096813907328, 0.004104551654602694, 0.00430000649529806, 0.004495461335993426, 0.004690916176688792, 0.004886371017384159, 0.005081825858079526, 0.005277280698774892, 0.005472735539470258, 0.005668190380165624, 0.005863645220860991, 0.006059100061556357, 0.006254554902251724, 0.00645000974294709, 0.006645464583642456, 0.006840919424337823, 0.007036374265033189, 0.007231829105728555, 0.007427283946423922, 0.007622738787119288, 0.007818193627814655, 0.00801364846851002, 0.008209103309205388, 0.008404558149900754, 0.00860001299059612, 0.008795467831291487, 0.008990922671986852, 0.009186377512682219, 0.009381832353377584, 0.00957728719407295, 0.009772742034768318, 0.009968196875463683, 0.010163651716159051, 0.010359106556854417, 0.010554561397549784, 0.01075001623824515, 0.010945471078940516, 0.011140925919635883, 0.011336380760331248, 0.011531835601026615, 0.011727290441721981, 0.011922745282417347, 0.012118200123112714, 0.01231365496380808, 0.012509109804503447, 0.012704564645198814, 0.01290001948589418, 0.013095474326589546, 0.013290929167284912, 0.013486384007980278, 0.013681838848675645, 0.01387729368937101, 0.014072748530066377, 0.014268203370761743, 0.01446365821145711, 0.014659113052152478, 0.014854567892847843, 0.01505002273354321, 0.015245477574238575, 0.015440932414933942, 0.01563638725562931, 0.015831842096324676, 0.01602729693702004, 0.016222751777715406, 0.016418206618410775, 0.01661366145910614, 0.01680911629980151, 0.01700457114049687, 0.01720002598119224, 0.017395480821887604, 0.017590935662582973, 0.01778639050327834, 0.017981845343973703, 0.018177300184669072, 0.018372755025364437, 0.018568209866059806, 0.018763664706755168, 0.018959119547450536, 0.0191545743881459, 0.01935002922884127, 0.019545484069536635, 0.019740938910232, 0.019936393750927366, 0.020131848591622734, 0.020327303432318103, 0.020522758273013468, 0.020718213113708833, 0.0209136679544042, 0.021109122795099567, 0.021304577635794932, 0.0215000324764903, 0.021695487317185663, 0.02189094215788103, 0.022086396998576396, 0.022281851839271765, 0.022477306679967134, 0.022672761520662495, 0.022868216361357864, 0.02306367120205323, 0.023259126042748598, 0.023454580883443963, 0.023650035724139328, 0.023845490564834693, 0.024040945405530062, 0.024236400246225427, 0.024431855086920796, 0.02462730992761616, 0.024822764768311526, 0.025018219609006895, 0.02521367444970226, 0.02540912929039763, 0.02560458413109299, 0.02580003897178836, 0.025995493812483724, 0.026190948653179093, 0.026386403493874458, 0.026581858334569823, 0.02677731317526519, 0.026972768015960557, 0.027168222856655926, 0.02736367769735129, 0.027559132538046656, 0.02775458737874202, 0.02795004221943739, 0.028145497060132755, 0.028340951900828124, 0.028536406741523485, 0.028731861582218854, 0.02892731642291422, 0.029122771263609588, 0.029318226104304956, 0.029513680945000318, 0.029709135785695687, 0.029904590626391052, 0.03010004546708642, 0.030295500307781786, 0.03049095514847715, 0.030686409989172516, 0.030881864829867885, 0.03107731967056325, 0.03127277451125862, 0.03146822935195398, 0.03166368419264935, 0.03185913903334472, 0.03205459387404008, 0.03225004871473545, 0.03244550355543081, 0.03264095839612618, 0.03283641323682155, 0.033031868077516915, 0.03322732291821228, 0.03342277775890765, 0.03361823259960302, 0.033813687440298376, 0.03400914228099374, 0.03420459712168911, 0.03440005196238448, 0.034595506803079844, 0.03479096164377521, 0.03498641648447058, 0.035181871325165946, 0.03537732616586131, 0.03557278100655668, 0.03576823584725204, 0.03596369068794741, 0.03615914552864277, 0.036354600369338144, 0.03655005521003351, 0.036745510050728875, 0.03694096489142424, 0.03713641973211961, 0.03733187457281498, 0.037527329413510335, 0.0377227842542057, 0.03791823909490107, 0.03811369393559644, 0.0383091487762918, 0.038504603616987175, 0.03870005845768254, 0.038895513298377905, 0.03909096813907327, 0.03928642297976864, 0.039481877820464, 0.039677332661159366, 0.03987278750185473, 0.0400682423425501, 0.04026369718324547, 0.040459152023940834, 0.040654606864636206, 0.04085006170533157, 0.041045516546026936, 0.0412409713867223, 0.041436426227417666, 0.04163188106811303, 0.0418273359088084, 0.04202279074950376, 0.042218245590199134, 0.0424137004308945, 0.042609155271589864, 0.04280461011228524, 0.0430000649529806, 0.04319551979367597, 0.043390974634371325, 0.0435864294750667, 0.04378188431576206, 0.04397733915645743, 0.04417279399715279, 0.044368248837848165, 0.04456370367854353, 0.044759158519238895, 0.04495461335993427, 0.04515006820062963, 0.04534552304132499, 0.045540977882020356, 0.04573643272271573, 0.04593188756341109, 0.04612734240410646, 0.046322797244801824, 0.046518252085497196, 0.04671370692619256, 0.046909161766887926, 0.0471046166075833, 0.047300071448278656, 0.04749552628897402, 0.04769098112966939, 0.04788643597036476, 0.048081890811060124, 0.04827734565175549, 0.048472800492450854, 0.048668255333146226, 0.04886371017384159, 0.04905916501453696, 0.04925461985523232, 0.04945007469592769, 0.04964552953662305, 0.04984098437731842, 0.05003643921801379, 0.050231894058709155, 0.05042734889940452, 0.050622803740099885, 0.05081825858079526, 0.051013713421490615, 0.05120916826218598, 0.05140462310288135, 0.05160007794357672, 0.05179553278427208, 0.05199098762496745, 0.05218644246566282, 0.052381897306358186, 0.05257735214705355, 0.052772806987748916, 0.05296826182844428, 0.053163716669139646, 0.05335917150983501, 0.05355462635053038, 0.05375008119122575, 0.053945536031921114, 0.05414099087261648, 0.05433644571331185, 0.054531900554007216, 0.05472735539470258, 0.05492281023539794, 0.05511826507609331, 0.05531371991678868, 0.05550917475748404, 0.05570462959817941, 0.05590008443887478, 0.056095539279570145, 0.05629099412026551, 0.05648644896096088, 0.05668190380165625, 0.056877358642351605, 0.05707281348304697, 0.05726826832374234, 0.05746372316443771, 0.05765917800513307, 0.05785463284582844, 0.05805008768652381, 0.058245542527219175, 0.05844099736791454, 0.05863645220860991, 0.05883190704930527, 0.059027361890000636, 0.059222816730696, 0.05941827157139137, 0.05961372641208674, 0.059809181252782104, 0.06000463609347747, 0.06020009093417284, 0.060395545774868206, 0.06059100061556357, 0.06078645545625894, 0.0609819102969543, 0.06117736513764967, 0.06137281997834503, 0.061568274819040404, 0.06176372965973577, 0.061959184500431135, 0.0621546393411265, 0.06235009418182187, 0.06254554902251724, 0.0627410038632126, 0.06293645870390796, 0.06313191354460333, 0.0633273683852987, 0.06352282322599406, 0.06371827806668943, 0.0639137329073848, 0.06410918774808017, 0.06430464258877552, 0.0645000974294709, 0.06469555227016625, 0.06489100711086163, 0.065086461951557, 0.06528191679225236, 0.06547737163294773, 0.0656728264736431, 0.06586828131433846, 0.06606373615503383, 0.0662591909957292, 0.06645464583642456, 0.06665010067711993, 0.0668455555178153, 0.06704101035851066, 0.06723646519920604, 0.06743192003990138, 0.06762737488059675, 0.06782282972129212, 0.06801828456198748, 0.06821373940268285, 0.06840919424337823, 0.06860464908407359, 0.06880010392476896, 0.06899555876546432, 0.06919101360615969, 0.06938646844685506, 0.06958192328755042, 0.06977737812824579, 0.06997283296894116, 0.07016828780963652, 0.07036374265033189, 0.07055919749102726, 0.07075465233172262, 0.070950107172418, 0.07114556201311335, 0.07134101685380871, 0.07153647169450408, 0.07173192653519944, 0.07192738137589481, 0.07212283621659019, 0.07231829105728554, 0.07251374589798092, 0.07270920073867629, 0.07290465557937165, 0.07310011042006702, 0.07329556526076238, 0.07349102010145775, 0.07368647494215312, 0.07388192978284848, 0.07407738462354385, 0.07427283946423922, 0.07446829430493458, 0.07466374914562995, 0.07485920398632533, 0.07505465882702067, 0.07525011366771604, 0.0754455685084114, 0.07564102334910677, 0.07583647818980215, 0.0760319330304975, 0.07622738787119288, 0.07642284271188825, 0.0766182975525836, 0.07681375239327898, 0.07700920723397435, 0.07720466207466971, 0.07740011691536508, 0.07759557175606044, 0.07779102659675581, 0.07798648143745118, 0.07818193627814654, 0.07837739111884191, 0.07857284595953729, 0.07876830080023264, 0.078963755640928, 0.07915921048162337, 0.07935466532231873, 0.0795501201630141, 0.07974557500370946, 0.07994102984440483, 0.0801364846851002, 0.08033193952579556, 0.08052739436649094, 0.08072284920718631, 0.08091830404788167, 0.08111375888857704, 0.08130921372927241, 0.08150466856996777, 0.08170012341066314, 0.0818955782513585, 0.08209103309205387, 0.08228648793274924, 0.0824819427734446, 0.08267739761413997, 0.08287285245483533, 0.08306830729553069, 0.08326376213622606, 0.08345921697692144, 0.0836546718176168, 0.08385012665831217, 0.08404558149900752, 0.0842410363397029, 0.08443649118039827, 0.08463194602109363, 0.084827400861789, 0.08502285570248437, 0.08521831054317973, 0.0854137653838751, 0.08560922022457047, 0.08580467506526583, 0.0860001299059612, 0.08619558474665656, 0.08639103958735193, 0.0865864944280473, 0.08678194926874265, 0.08697740410943802, 0.0871728589501334, 0.08736831379082875, 0.08756376863152412, 0.0877592234722195, 0.08795467831291486, 0.08815013315361023, 0.08834558799430559, 0.08854104283500096, 0.08873649767569633, 0.08893195251639169, 0.08912740735708706, 0.08932286219778243, 0.08951831703847779, 0.08971377187917316, 0.08990922671986853, 0.09010468156056389, 0.09030013640125926, 0.09049559124195461, 0.09069104608264998, 0.09088650092334535, 0.09108195576404071, 0.09127741060473608, 0.09147286544543146, 0.09166832028612681, 0.09186377512682219, 0.09205922996751756, 0.09225468480821292, 0.09245013964890829, 0.09264559448960365, 0.09284104933029902, 0.09303650417099439, 0.09323195901168975, 0.09342741385238512, 0.0936228686930805, 0.09381832353377585, 0.09401377837447122, 0.0942092332151666, 0.09440468805586194, 0.09460014289655731, 0.09479559773725267, 0.09499105257794804, 0.09518650741864342, 0.09538196225933877, 0.09557741710003415, 0.09577287194072952, 0.09596832678142488, 0.09616378162212025, 0.09635923646281562, 0.09655469130351098, 0.09675014614420635, 0.09694560098490171, 0.09714105582559708, 0.09733651066629245, 0.09753196550698781])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_f8bbc5c90898467fa759408b7fd42c9c.x = d3.scale.linear()
              .domain([0.0, 0.09753196550698781])
              .range([0, 400]);

    color_map_f8bbc5c90898467fa759408b7fd42c9c.legend = L.control({position: 'topright'});
    color_map_f8bbc5c90898467fa759408b7fd42c9c.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_f8bbc5c90898467fa759408b7fd42c9c.legend.addTo(map_e5b65f7adbbd4532a2c3bc584305c409);

    color_map_f8bbc5c90898467fa759408b7fd42c9c.xAxis = d3.svg.axis()
        .scale(color_map_f8bbc5c90898467fa759408b7fd42c9c.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 0.016255327584497967, 0.032510655168995935, 0.048765982753493906, 0.06502131033799187, 0.08127663792248983, 0.09753196550698781]);

    color_map_f8bbc5c90898467fa759408b7fd42c9c.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_f8bbc5c90898467fa759408b7fd42c9c.g = color_map_f8bbc5c90898467fa759408b7fd42c9c.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_f8bbc5c90898467fa759408b7fd42c9c.g.selectAll("rect")
        .data(color_map_f8bbc5c90898467fa759408b7fd42c9c.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_f8bbc5c90898467fa759408b7fd42c9c.x(color_map_f8bbc5c90898467fa759408b7fd42c9c.color.domain()[i - 1]) : color_map_f8bbc5c90898467fa759408b7fd42c9c.x.range()[0],
            x1: i < color_map_f8bbc5c90898467fa759408b7fd42c9c.color.domain().length ? color_map_f8bbc5c90898467fa759408b7fd42c9c.x(color_map_f8bbc5c90898467fa759408b7fd42c9c.color.domain()[i]) : color_map_f8bbc5c90898467fa759408b7fd42c9c.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_f8bbc5c90898467fa759408b7fd42c9c.g.call(color_map_f8bbc5c90898467fa759408b7fd42c9c.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('14_50_JEAN WYLLYS DE MATOS SANTOS');
