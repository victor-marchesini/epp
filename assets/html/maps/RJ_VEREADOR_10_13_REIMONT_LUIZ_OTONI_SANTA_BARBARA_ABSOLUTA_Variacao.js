    
            var map_2f1c8fe3dd4540a89dbad57e60050e76 = L.map(
                "map_2f1c8fe3dd4540a89dbad57e60050e76",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_0768f2d034004b98be1b543eb7c8f6fe = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_2f1c8fe3dd4540a89dbad57e60050e76);
        
    
            var choropleth_e1d734943361411c8f980c2b49546e7f = L.featureGroup(
                {}
            ).addTo(map_2f1c8fe3dd4540a89dbad57e60050e76);
        
    
        function geo_json_dbb1a7849be546cea136a2e510faec8f_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 431: case 349: case 342: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 439: case 466: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 377: case 325: case 468: case 478: case 474: case 435: case 363: case 396: case 375: case 411: case 390: case 386: case 350: case 454: case 469: case 471: case 378: case 458: case 389: case 485: case 890: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_dbb1a7849be546cea136a2e510faec8f_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_dbb1a7849be546cea136a2e510faec8f = L.geoJson(null, {
                onEachFeature: geo_json_dbb1a7849be546cea136a2e510faec8f_onEachFeature,
            
                style: geo_json_dbb1a7849be546cea136a2e510faec8f_styler,
        });

        function geo_json_dbb1a7849be546cea136a2e510faec8f_add (data) {
            geo_json_dbb1a7849be546cea136a2e510faec8f
                .addData(data)
                .addTo(choropleth_e1d734943361411c8f980c2b49546e7f);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_dbb1a7849be546cea136a2e510faec8f_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_37741bf377cf49b681bbc8b5fc9b238f = {};

    
    color_map_37741bf377cf49b681bbc8b5fc9b238f.color = d3.scale.threshold()
              .domain([-985.0, -982.5951903807616, -980.1903807615231, -977.7855711422845, -975.3807615230461, -972.9759519038076, -970.5711422845692, -968.1663326653306, -965.7615230460922, -963.3567134268537, -960.9519038076153, -958.5470941883767, -956.1422845691383, -953.7374749498998, -951.3326653306614, -948.9278557114228, -946.5230460921844, -944.1182364729459, -941.7134268537075, -939.3086172344689, -936.9038076152304, -934.498997995992, -932.0941883767536, -929.689378757515, -927.2845691382765, -924.8797595190381, -922.4749498997996, -920.0701402805611, -917.6653306613226, -915.2605210420842, -912.8557114228457, -910.4509018036072, -908.0460921843687, -905.6412825651303, -903.2364729458918, -900.8316633266534, -898.4268537074148, -896.0220440881764, -893.6172344689379, -891.2124248496993, -888.8076152304609, -886.4028056112224, -883.997995991984, -881.5931863727455, -879.188376753507, -876.7835671342685, -874.3787575150301, -871.9739478957915, -869.5691382765531, -867.1643286573146, -864.7595190380762, -862.3547094188377, -859.9498997995992, -857.5450901803607, -855.1402805611223, -852.7354709418837, -850.3306613226453, -847.9258517034068, -845.5210420841684, -843.1162324649299, -840.7114228456913, -838.3066132264529, -835.9018036072144, -833.4969939879759, -831.0921843687374, -828.687374749499, -826.2825651302605, -823.8777555110221, -821.4729458917835, -819.0681362725451, -816.6633266533066, -814.2585170340682, -811.8537074148296, -809.4488977955912, -807.0440881763527, -804.6392785571143, -802.2344689378758, -799.8296593186373, -797.4248496993988, -795.0200400801604, -792.6152304609218, -790.2104208416833, -787.8056112224449, -785.4008016032064, -782.995991983968, -780.5911823647294, -778.186372745491, -775.7815631262525, -773.376753507014, -770.9719438877755, -768.5671342685371, -766.1623246492986, -763.7575150300602, -761.3527054108216, -758.9478957915832, -756.5430861723447, -754.1382765531062, -751.7334669338677, -749.3286573146293, -746.9238476953908, -744.5190380761524, -742.1142284569138, -739.7094188376753, -737.3046092184369, -734.8997995991983, -732.4949899799599, -730.0901803607214, -727.685370741483, -725.2805611222445, -722.8757515030061, -720.4709418837675, -718.0661322645291, -715.6613226452905, -713.2565130260521, -710.8517034068136, -708.4468937875752, -706.0420841683367, -703.6372745490983, -701.2324649298597, -698.8276553106213, -696.4228456913827, -694.0180360721442, -691.6132264529058, -689.2084168336673, -686.8036072144289, -684.3987975951904, -681.9939879759519, -679.5891783567134, -677.1843687374749, -674.7795591182364, -672.374749498998, -669.9699398797595, -667.5651302605211, -665.1603206412826, -662.7555110220441, -660.3507014028056, -657.945891783567, -655.5410821643286, -653.1362725450902, -650.7314629258517, -648.3266533066133, -645.9218436873748, -643.5170340681364, -641.1122244488978, -638.7074148296593, -636.3026052104208, -633.8977955911823, -631.4929859719439, -629.0881763527054, -626.683366733467, -624.2785571142285, -621.87374749499, -619.4689378757515, -617.064128256513, -614.6593186372745, -612.2545090180361, -609.8496993987976, -607.4448897795592, -605.0400801603207, -602.6352705410821, -600.2304609218437, -597.8256513026051, -595.4208416833667, -593.0160320641282, -590.6112224448898, -588.2064128256513, -585.8016032064129, -583.3967935871743, -580.9919839679359, -578.5871743486973, -576.1823647294589, -573.7775551102204, -571.372745490982, -568.9679358717435, -566.5631262525051, -564.1583166332665, -561.7535070140281, -559.3486973947895, -556.943887775551, -554.5390781563126, -552.1342685370741, -549.7294589178357, -547.3246492985973, -544.9198396793588, -542.5150300601202, -540.1102204408818, -537.7054108216432, -535.3006012024048, -532.8957915831663, -530.4909819639279, -528.0861723446894, -525.681362725451, -523.2765531062124, -520.871743486974, -518.4669338677354, -516.062124248497, -513.6573146292585, -511.25250501002006, -508.84769539078155, -506.4428857715431, -504.0380761523046, -501.63326653306615, -499.22845691382764, -496.8236472945892, -494.4188376753507, -492.01402805611224, -489.60921843687373, -487.2044088176353, -484.7995991983968, -482.3947895791583, -479.9899799599198, -477.5851703406814, -475.18036072144287, -472.7755511022044, -470.37074148296597, -467.9659318637274, -465.56112224448896, -463.1563126252505, -460.75150300601206, -458.3466933867735, -455.94188376753505, -453.5370741482966, -451.13226452905815, -448.7274549098196, -446.32264529058114, -443.9178356713427, -441.51302605210424, -439.1082164328658, -436.7034068136272, -434.2985971943888, -431.8937875751503, -429.4889779559119, -427.0841683366733, -424.67935871743487, -422.2745490981964, -419.86973947895797, -417.4649298597194, -415.06012024048096, -412.6553106212425, -410.25050100200406, -407.8456913827655, -405.44088176352705, -403.0360721442886, -400.63126252505015, -398.2264529058116, -395.82164328657313, -393.4168336673347, -391.01202404809624, -388.6072144288577, -386.2024048096192, -383.7975951903808, -381.3927855711423, -378.98797595190376, -376.5831663326653, -374.17835671342687, -371.7735470941884, -369.36873747494985, -366.9639278557114, -364.55911823647295, -362.1543086172345, -359.74949899799594, -357.3446893787575, -354.93987975951904, -352.5350701402806, -350.13026052104203, -347.7254509018036, -345.32064128256513, -342.9158316633267, -340.5110220440881, -338.1062124248497, -335.7014028056112, -333.2965931863728, -330.8917835671342, -328.48697394789576, -326.0821643286573, -323.67735470941886, -321.2725450901804, -318.86773547094185, -316.4629258517034, -314.05811623246495, -311.6533066132265, -309.24849699398794, -306.8436873747495, -304.43887775551104, -302.0340681362726, -299.62925851703403, -297.2244488977956, -294.81963927855713, -292.4148296593187, -290.0100200400801, -287.6052104208417, -285.2004008016032, -282.7955911823648, -280.3907815631262, -277.98597194388776, -275.5811623246493, -273.17635270541086, -270.7715430861723, -268.36673346693385, -265.9619238476954, -263.55711422845695, -261.1523046092184, -258.74749498997994, -256.3426853707415, -253.93787575150304, -251.53306613226448, -249.12825651302603, -246.72344689378758, -244.31863727454913, -241.91382765531057, -239.50901803607212, -237.10420841683367, -234.69939879759522, -232.29458917835666, -229.8897795591182, -227.48496993987976, -225.0801603206413, -222.67535070140275, -220.2705410821643, -217.86573146292585, -215.4609218436874, -213.05611222444895, -210.6513026052104, -208.24649298597194, -205.8416833667335, -203.43687374749504, -201.03206412825648, -198.62725450901803, -196.22244488977958, -193.81763527054113, -191.41282565130257, -189.00801603206412, -186.60320641282567, -184.19839679358722, -181.79358717434866, -179.3887775551102, -176.98396793587176, -174.5791583166333, -172.17434869739475, -169.7695390781563, -167.36472945891785, -164.9599198396794, -162.55511022044084, -160.1503006012024, -157.74549098196394, -155.3406813627255, -152.93587174348693, -150.53106212424848, -148.12625250501003, -145.72144288577158, -143.31663326653302, -140.91182364729457, -138.50701402805612, -136.10220440881767, -133.6973947895791, -131.29258517034066, -128.8877755511022, -126.48296593186376, -124.0781563126252, -121.67334669338675, -119.2685370741483, -116.86372745490985, -114.45891783567129, -112.05410821643284, -109.64929859719439, -107.24448897795594, -104.83967935871749, -102.43486973947893, -100.03006012024048, -97.62525050100203, -95.22044088176358, -92.81563126252502, -90.41082164328657, -88.00601202404812, -85.60120240480967, -83.1963927855711, -80.79158316633266, -78.38677354709421, -75.98196392785576, -73.5771543086172, -71.17234468937875, -68.7675350701403, -66.36272545090185, -63.957915831663286, -61.55310621242484, -59.14829659318639, -56.74348697394794, -54.338677354709375, -51.933867735470926, -49.52905811623248, -47.12424849699403, -44.719438877755465, -42.314629258517016, -39.90981963927857, -37.50501002004012, -35.100200400801555, -32.695390781563106, -30.290581162324656, -27.885771543086207, -25.480961923847644, -23.076152304609195, -20.671342685370746, -18.266533066132297, -15.861723446893734, -13.456913827655285, -11.052104208416836, -8.647294589178387, -6.242484969939824, -3.8376753507013746, -1.4328657314629254, 0.9719438877755238, 3.376753507013973, 5.781563126252536, 8.186372745490985, 10.591182364729434, 12.995991983967883, 15.400801603206446, 17.805611222444895, 20.210420841683344, 22.615230460921794, 25.020040080160356, 27.424849699398806, 29.829659318637255, 32.234468937875704, 34.63927855711427, 37.044088176352716, 39.448897795591165, 41.853707414829614, 44.25851703406806, 46.66332665330651, 49.06813627254519, 51.47294589178364, 53.87775551102209, 56.28256513026054, 58.687374749498986, 61.092184368737435, 63.496993987975884, 65.90180360721433, 68.30661322645301, 70.71142284569146, 73.11623246492991, 75.52104208416836, 77.9258517034068, 80.33066132264526, 82.7354709418837, 85.14028056112215, 87.54509018036083, 89.94989979959928, 92.35470941883773, 94.75951903807618, 97.16432865731463, 99.56913827655308, 101.97394789579153, 104.37875751502997, 106.78356713426842, 109.1883767535071, 111.59318637274555, 113.997995991984, 116.40280561122245, 118.8076152304609, 121.21242484969935, 123.6172344689378, 126.02204408817624, 128.42685370741492, 130.83166332665337, 133.23647294589182, 135.64128256513027, 138.04609218436872, 140.45090180360717, 142.85571142284562, 145.26052104208406, 147.66533066132274, 150.0701402805612, 152.47494989979964, 154.8797595190381, 157.28456913827654, 159.689378757515, 162.09418837675344, 164.49899799599189, 166.90380761523056, 169.308617234469, 171.71342685370746, 174.1182364729459, 176.52304609218436, 178.9278557114228, 181.33266533066126, 183.7374749498997, 186.14228456913838, 188.54709418837683, 190.95190380761528, 193.35671342685373, 195.76152304609218, 198.16633266533063, 200.57114228456908, 202.97595190380753, 205.3807615230462, 207.78557114228465, 210.1903807615231, 212.59519038076155, 215.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_37741bf377cf49b681bbc8b5fc9b238f.x = d3.scale.linear()
              .domain([-985.0, 215.0])
              .range([0, 400]);

    color_map_37741bf377cf49b681bbc8b5fc9b238f.legend = L.control({position: 'topright'});
    color_map_37741bf377cf49b681bbc8b5fc9b238f.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_37741bf377cf49b681bbc8b5fc9b238f.legend.addTo(map_2f1c8fe3dd4540a89dbad57e60050e76);

    color_map_37741bf377cf49b681bbc8b5fc9b238f.xAxis = d3.svg.axis()
        .scale(color_map_37741bf377cf49b681bbc8b5fc9b238f.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-985.0, -785.0, -585.0, -385.0, -185.0, 15.0, 215.0]);

    color_map_37741bf377cf49b681bbc8b5fc9b238f.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_37741bf377cf49b681bbc8b5fc9b238f.g = color_map_37741bf377cf49b681bbc8b5fc9b238f.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_37741bf377cf49b681bbc8b5fc9b238f.g.selectAll("rect")
        .data(color_map_37741bf377cf49b681bbc8b5fc9b238f.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_37741bf377cf49b681bbc8b5fc9b238f.x(color_map_37741bf377cf49b681bbc8b5fc9b238f.color.domain()[i - 1]) : color_map_37741bf377cf49b681bbc8b5fc9b238f.x.range()[0],
            x1: i < color_map_37741bf377cf49b681bbc8b5fc9b238f.color.domain().length ? color_map_37741bf377cf49b681bbc8b5fc9b238f.x(color_map_37741bf377cf49b681bbc8b5fc9b238f.color.domain()[i]) : color_map_37741bf377cf49b681bbc8b5fc9b238f.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_37741bf377cf49b681bbc8b5fc9b238f.g.call(color_map_37741bf377cf49b681bbc8b5fc9b238f.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('10_13_REIMONT LUIZ OTONI SANTA BARBARA');
