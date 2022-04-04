    
            var map_eae8353e512c404c9bf071f5c90b8cb2 = L.map(
                "map_eae8353e512c404c9bf071f5c90b8cb2",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_65b0c35a49964d3dbb8c7dc38c0ca84b = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_eae8353e512c404c9bf071f5c90b8cb2);
        
    
            var choropleth_1b1e85bdce0a4c9f855a5e9e40d149d3 = L.featureGroup(
                {}
            ).addTo(map_eae8353e512c404c9bf071f5c90b8cb2);
        
    
        function geo_json_5589be1a93ba498e8d3005589e33b2f1_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_5589be1a93ba498e8d3005589e33b2f1_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_5589be1a93ba498e8d3005589e33b2f1 = L.geoJson(null, {
                onEachFeature: geo_json_5589be1a93ba498e8d3005589e33b2f1_onEachFeature,
            
                style: geo_json_5589be1a93ba498e8d3005589e33b2f1_styler,
        });

        function geo_json_5589be1a93ba498e8d3005589e33b2f1_add (data) {
            geo_json_5589be1a93ba498e8d3005589e33b2f1
                .addData(data)
                .addTo(choropleth_1b1e85bdce0a4c9f855a5e9e40d149d3);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_5589be1a93ba498e8d3005589e33b2f1_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_f3b58bdc7891472e9f63094dc6290f0c = {};

    
    color_map_f3b58bdc7891472e9f63094dc6290f0c.color = d3.scale.threshold()
              .domain([-190920.0, -190509.10821643285, -190098.21643286574, -189687.3246492986, -189276.43286573148, -188865.54108216433, -188454.64929859719, -188043.75751503007, -187632.86573146292, -187221.97394789578, -186811.08216432866, -186400.19038076152, -185989.2985971944, -185578.40681362725, -185167.5150300601, -184756.623246493, -184345.73146292585, -183934.83967935873, -183523.94789579159, -183113.05611222444, -182702.16432865732, -182291.27254509018, -181880.38076152303, -181469.48897795592, -181058.59719438877, -180647.70541082165, -180236.8136272545, -179825.92184368736, -179415.03006012025, -179004.1382765531, -178593.24649298599, -178182.35470941884, -177771.4629258517, -177360.57114228458, -176949.67935871743, -176538.7875751503, -176127.89579158317, -175717.00400801603, -175306.1122244489, -174895.22044088176, -174484.32865731462, -174073.4368737475, -173662.54509018036, -173251.6533066132, -172840.7615230461, -172429.86973947895, -172018.97795591183, -171608.0861723447, -171197.19438877754, -170786.30260521043, -170375.41082164328, -169964.51903807616, -169553.62725450902, -169142.73547094187, -168731.84368737476, -168320.9519038076, -167910.0601202405, -167499.16833667335, -167088.2765531062, -166677.3847695391, -166266.49298597194, -165855.60120240483, -165444.70941883768, -165033.81763527053, -164622.92585170342, -164212.03406813627, -163801.14228456913, -163390.250501002, -162979.35871743486, -162568.46693386772, -162157.5751503006, -161746.68336673346, -161335.79158316634, -160924.8997995992, -160514.00801603205, -160103.11623246493, -159692.2244488978, -159281.33266533067, -158870.44088176353, -158459.54909819638, -158048.65731462926, -157637.76553106212, -157226.873747495, -156815.98196392786, -156405.0901803607, -155994.1983967936, -155583.30661322645, -155172.41482965933, -154761.5230460922, -154350.63126252504, -153939.73947895793, -153528.84769539078, -153117.95591182366, -152707.06412825652, -152296.17234468937, -151885.28056112223, -151474.3887775551, -151063.49699398797, -150652.60521042085, -150241.7134268537, -149830.82164328656, -149419.92985971944, -149009.0380761523, -148598.14629258518, -148187.25450901804, -147776.3627254509, -147365.47094188377, -146954.57915831663, -146543.6873747495, -146132.79559118237, -145721.90380761522, -145311.0120240481, -144900.12024048096, -144489.22845691384, -144078.3366733467, -143667.44488977955, -143256.55310621244, -142845.6613226453, -142434.76953907817, -142023.87775551103, -141612.98597194388, -141202.09418837674, -140791.20240480962, -140380.31062124248, -139969.41883767536, -139558.5270541082, -139147.63527054107, -138736.74348697395, -138325.8517034068, -137914.9599198397, -137504.06813627254, -137093.1763527054, -136682.28456913828, -136271.39278557114, -135860.50100200402, -135449.60921843688, -135038.71743486973, -134627.8256513026, -134216.93386773547, -133806.04208416835, -133395.1503006012, -132984.25851703406, -132573.36673346694, -132162.4749498998, -131751.58316633268, -131340.69138276554, -130929.79959919839, -130518.90781563126, -130108.01603206413, -129697.12424849698, -129286.23246492987, -128875.34068136272, -128464.44889779559, -128053.55711422846, -127642.66533066132, -127231.7735470942, -126820.88176352705, -126409.98997995992, -125999.09819639279, -125588.20641282565, -125177.31462925852, -124766.42284569138, -124355.53106212425, -123944.63927855711, -123533.74749498998, -123122.85571142285, -122711.96392785572, -122301.07214428858, -121890.18036072144, -121479.28857715431, -121068.39679358718, -120657.50501002005, -120246.6132264529, -119835.72144288577, -119424.82965931864, -119013.93787575151, -118603.04609218436, -118192.15430861723, -117781.2625250501, -117370.37074148297, -116959.47895791584, -116548.5871743487, -116137.69539078156, -115726.80360721443, -115315.9118236473, -114905.02004008016, -114494.12825651302, -114083.2364729459, -113672.34468937876, -113261.45290581162, -112850.56112224449, -112439.66933867735, -112028.77755511022, -111617.8857715431, -111206.99398797595, -110796.10220440882, -110385.21042084169, -109974.31863727455, -109563.42685370741, -109152.53507014028, -108741.64328657315, -108330.75150300602, -107919.85971943887, -107508.96793587174, -107098.07615230461, -106687.18436873748, -106276.29258517035, -105865.4008016032, -105454.50901803607, -105043.61723446894, -104632.72545090181, -104221.83366733466, -103810.94188376753, -103400.0501002004, -102989.15831663327, -102578.26653306613, -102167.374749499, -101756.48296593186, -101345.59118236473, -100934.6993987976, -100523.80761523046, -100112.91583166333, -99702.0240480962, -99291.13226452906, -98880.24048096192, -98469.34869739479, -98058.45691382766, -97647.56513026053, -97236.67334669338, -96825.78156312625, -96414.88977955912, -96003.99799599199, -95593.10621242486, -95182.21442885771, -94771.32264529058, -94360.43086172345, -93949.53907815632, -93538.64729458917, -93127.75551102204, -92716.86372745491, -92305.97194388778, -91895.08016032063, -91484.1883767535, -91073.29659318637, -90662.40480961924, -90251.51302605211, -89840.62124248497, -89429.72945891783, -89018.8376753507, -88607.94589178357, -88197.05410821643, -87786.1623246493, -87375.27054108217, -86964.37875751503, -86553.48697394789, -86142.59519038076, -85731.70340681363, -85320.8116232465, -84909.91983967937, -84499.02805611222, -84088.13627254509, -83677.24448897796, -83266.35270541083, -82855.46092184368, -82444.56913827655, -82033.67735470942, -81622.78557114229, -81211.89378757514, -80801.00200400801, -80390.11022044088, -79979.21843687375, -79568.32665330662, -79157.43486973947, -78746.54308617234, -78335.65130260521, -77924.75951903808, -77513.86773547094, -77102.9759519038, -76692.08416833667, -76281.19238476954, -75870.3006012024, -75459.40881763527, -75048.51703406814, -74637.625250501, -74226.73346693387, -73815.84168336673, -73404.9498997996, -72994.05811623247, -72583.16633266534, -72172.27454909819, -71761.38276553106, -71350.49098196393, -70939.5991983968, -70528.70741482965, -70117.81563126252, -69706.92384769539, -69296.03206412826, -68885.14028056113, -68474.24849699398, -68063.35671342685, -67652.46492985972, -67241.57314629259, -66830.68136272545, -66419.78957915831, -66008.89779559118, -65598.00601202405, -65187.11422845691, -64776.222444889776, -64365.330661322645, -63954.438877755514, -63543.54709418838, -63132.65531062124, -62721.76352705411, -62310.871743486976, -61899.979959919845, -61489.0881763527, -61078.19639278557, -60667.30460921844, -60256.41282565131, -59845.521042084176, -59434.62925851703, -59023.737474949914, -58612.84569138277, -58201.95390781562, -57791.06212424851, -57380.17034068136, -56969.278557114216, -56558.3867735471, -56147.494989979954, -55736.60320641284, -55325.71142284569, -54914.81963927855, -54503.92785571143, -54093.036072144285, -53682.14428857717, -53271.25250501002, -52860.36072144288, -52449.46893787576, -52038.577154308616, -51627.68537074147, -51216.793587174354, -50805.90180360721, -50395.01002004009, -49984.11823647295, -49573.2264529058, -49162.334669338685, -48751.44288577154, -48340.55110220442, -47929.65931863728, -47518.76753507013, -47107.875751503016, -46696.98396793587, -46286.092184368725, -45875.20040080161, -45464.30861723446, -45053.41683366735, -44642.5250501002, -44231.633266533056, -43820.74148296594, -43409.849699398794, -42998.95791583168, -42588.06613226453, -42177.17434869739, -41766.28256513027, -41355.390781563125, -40944.49899799598, -40533.60721442886, -40122.71543086172, -39711.8236472946, -39300.931863727455, -38890.04008016031, -38479.148296593194, -38068.25651302605, -37657.36472945893, -37246.47294589179, -36835.58116232464, -36424.689378757525, -36013.79759519038, -35602.90581162323, -35192.01402805612, -34781.12224448897, -34370.230460921855, -33959.33867735471, -33548.446893787564, -33137.55511022045, -32726.663326653303, -32315.771543086186, -31904.87975951904, -31493.987975951895, -31083.09619238478, -30672.204408817634, -30261.312625250488, -29850.42084168337, -29439.529058116226, -29028.63727454911, -28617.745490981964, -28206.85370741482, -27795.961923847703, -27385.070140280557, -26974.17835671344, -26563.286573146295, -26152.39478957915, -25741.503006012033, -25330.611222444888, -24919.719438877743, -24508.827655310626, -24097.93587174348, -23687.044088176364, -23276.15230460922, -22865.260521042073, -22454.368737474957, -22043.47695390781, -21632.585170340695, -21221.69338677355, -20810.801603206404, -20399.909819639288, -19989.018036072142, -19578.126252504997, -19167.23446893788, -18756.342685370735, -18345.45090180362, -17934.559118236473, -17523.667334669328, -17112.77555110221, -16701.883767535066, -16290.99198396795, -15880.100200400804, -15469.208416833659, -15058.316633266542, -14647.424849699397, -14236.533066132251, -13825.641282565135, -13414.74949899799, -13003.857715430873, -12592.965931863728, -12182.074148296582, -11771.182364729466, -11360.29058116232, -10949.398797595204, -10538.507014028059, -10127.615230460913, -9716.723446893797, -9305.831663326651, -8894.939879759506, -8484.04809619239, -8073.156312625244, -7662.264529058128, -7251.372745490982, -6840.480961923837, -6429.58917835672, -6018.697394789575, -5607.8056112224585, -5196.913827655313, -4786.022044088168, -4375.130260521051, -3964.238476953906, -3553.3466933867603, -3142.454909819644, -2731.5631262524985, -2320.671342685382, -1909.7795591182366, -1498.8877755510912, -1087.9959919839748, -677.1042084168294, -266.212424849713, 144.67935871743248, 555.571142284578, 966.4629258516943, 1377.3547094188398, 1788.2464929859852, 2199.1382765531016, 2610.030060120247, 3020.9218436873634, 3431.813627254509, 3842.7054108216544, 4253.597194388771, 4664.488977955916, 5075.380761523033, 5486.272545090178, 5897.1643286573235, 6308.05611222444, 6718.947895791585, 7129.839679358731, 7540.731462925847, 7951.623246492993, 8362.515030060109, 8773.406813627254, 9184.2985971944, 9595.190380761516, 10006.082164328662, 10416.973947895778, 10827.865731462924, 11238.757515030069, 11649.649298597185, 12060.54108216433, 12471.432865731476, 12882.324649298593, 13293.216432865738, 13704.108216432855, 14115.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_f3b58bdc7891472e9f63094dc6290f0c.x = d3.scale.linear()
              .domain([-190920.0, 14115.0])
              .range([0, 400]);

    color_map_f3b58bdc7891472e9f63094dc6290f0c.legend = L.control({position: 'topright'});
    color_map_f3b58bdc7891472e9f63094dc6290f0c.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_f3b58bdc7891472e9f63094dc6290f0c.legend.addTo(map_eae8353e512c404c9bf071f5c90b8cb2);

    color_map_f3b58bdc7891472e9f63094dc6290f0c.xAxis = d3.svg.axis()
        .scale(color_map_f3b58bdc7891472e9f63094dc6290f0c.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-190920.0, -156747.5, -122575.0, -88402.5, -54230.0, -20057.5, 14115.0]);

    color_map_f3b58bdc7891472e9f63094dc6290f0c.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_f3b58bdc7891472e9f63094dc6290f0c.g = color_map_f3b58bdc7891472e9f63094dc6290f0c.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_f3b58bdc7891472e9f63094dc6290f0c.g.selectAll("rect")
        .data(color_map_f3b58bdc7891472e9f63094dc6290f0c.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_f3b58bdc7891472e9f63094dc6290f0c.x(color_map_f3b58bdc7891472e9f63094dc6290f0c.color.domain()[i - 1]) : color_map_f3b58bdc7891472e9f63094dc6290f0c.x.range()[0],
            x1: i < color_map_f3b58bdc7891472e9f63094dc6290f0c.color.domain().length ? color_map_f3b58bdc7891472e9f63094dc6290f0c.x(color_map_f3b58bdc7891472e9f63094dc6290f0c.color.domain()[i]) : color_map_f3b58bdc7891472e9f63094dc6290f0c.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_f3b58bdc7891472e9f63094dc6290f0c.g.call(color_map_f3b58bdc7891472e9f63094dc6290f0c.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('02_50_TARCISIO MOTTA DE CARVALHO');

