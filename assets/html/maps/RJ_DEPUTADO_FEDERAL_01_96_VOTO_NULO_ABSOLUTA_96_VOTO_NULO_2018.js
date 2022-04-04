    
            var map_cd17306fee0749ce95ec7f7c4adf761e = L.map(
                "map_cd17306fee0749ce95ec7f7c4adf761e",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_10db524f15b74c9898af87d20487ec9f = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_cd17306fee0749ce95ec7f7c4adf761e);
        
    
            var choropleth_3b6049afc6fa4bfc9c0ede7e510768bd = L.featureGroup(
                {}
            ).addTo(map_cd17306fee0749ce95ec7f7c4adf761e);
        
    
        function geo_json_3f69a6812422482f98163f4c60ccbccc_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 442: case 381: case 369: case 352: case 346: case 347: case 337: case 430: case 378: case 450: case 389: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 370: case 511: case 374: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 387: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 510: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_3f69a6812422482f98163f4c60ccbccc_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_3f69a6812422482f98163f4c60ccbccc = L.geoJson(null, {
                onEachFeature: geo_json_3f69a6812422482f98163f4c60ccbccc_onEachFeature,
            
                style: geo_json_3f69a6812422482f98163f4c60ccbccc_styler,
        });

        function geo_json_3f69a6812422482f98163f4c60ccbccc_add (data) {
            geo_json_3f69a6812422482f98163f4c60ccbccc
                .addData(data)
                .addTo(choropleth_3b6049afc6fa4bfc9c0ede7e510768bd);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_3f69a6812422482f98163f4c60ccbccc_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_9446728f29a5412f8e6ab8f8d0653fdd = {};

    
    color_map_9446728f29a5412f8e6ab8f8d0653fdd.color = d3.scale.threshold()
              .domain([0.0, 55.589178356713425, 111.17835671342685, 166.76753507014027, 222.3567134268537, 277.9458917835671, 333.53507014028054, 389.12424849699397, 444.7134268537074, 500.30260521042084, 555.8917835671342, 611.4809619238476, 667.0701402805611, 722.6593186372745, 778.2484969939879, 833.8376753507014, 889.4268537074148, 945.0160320641282, 1000.6052104208417, 1056.194388777555, 1111.7835671342684, 1167.372745490982, 1222.9619238476953, 1278.5511022044088, 1334.1402805611222, 1389.7294589178357, 1445.318637274549, 1500.9078156312626, 1556.4969939879759, 1612.0861723446894, 1667.6753507014027, 1723.2645290581163, 1778.8537074148296, 1834.4428857715432, 1890.0320641282565, 1945.62124248497, 2001.2104208416833, 2056.7995991983967, 2112.38877755511, 2167.9779559118238, 2223.567134268537, 2279.1563126252504, 2334.745490981964, 2390.3346693386775, 2445.9238476953906, 2501.513026052104, 2557.1022044088177, 2612.691382765531, 2668.2805611222443, 2723.869739478958, 2779.4589178356714, 2835.048096192385, 2890.637274549098, 2946.2264529058116, 3001.815631262525, 3057.4048096192387, 3112.9939879759518, 3168.5831663326653, 3224.172344689379, 3279.7615230460924, 3335.3507014028055, 3390.939879759519, 3446.5290581162326, 3502.1182364729457, 3557.7074148296592, 3613.296593186373, 3668.8857715430863, 3724.4749498997994, 3780.064128256513, 3835.6533066132265, 3891.24248496994, 3946.831663326653, 4002.4208416833667, 4058.0100200400802, 4113.599198396793, 4169.188376753507, 4224.77755511022, 4280.3667334669335, 4335.9559118236475, 4391.545090180361, 4447.134268537074, 4502.723446893788, 4558.312625250501, 4613.901803607215, 4669.490981963928, 4725.080160320641, 4780.669338677355, 4836.258517034068, 4891.847695390781, 4947.436873747495, 5003.026052104208, 5058.615230460922, 5114.204408817635, 5169.793587174348, 5225.382765531062, 5280.9719438877755, 5336.561122244489, 5392.150300601203, 5447.739478957916, 5503.32865731463, 5558.917835671343, 5614.507014028056, 5670.09619238477, 5725.685370741483, 5781.274549098196, 5836.86372745491, 5892.452905811623, 5948.042084168336, 6003.63126252505, 6059.220440881763, 6114.809619238477, 6170.39879759519, 6225.9879759519035, 6281.5771543086175, 6337.166332665331, 6392.755511022044, 6448.344689378758, 6503.933867735471, 6559.523046092185, 6615.112224448898, 6670.701402805611, 6726.290581162325, 6781.879759519038, 6837.468937875751, 6893.058116232465, 6948.647294589178, 7004.236472945891, 7059.825651302605, 7115.4148296593185, 7171.0040080160325, 7226.593186372746, 7282.182364729459, 7337.771543086173, 7393.360721442886, 7448.949899799599, 7504.539078156313, 7560.128256513026, 7615.71743486974, 7671.306613226453, 7726.895791583166, 7782.48496993988, 7838.074148296593, 7893.663326653306, 7949.25250501002, 8004.841683366733, 8060.4308617234465, 8116.0200400801605, 8171.609218436874, 8227.198396793587, 8282.7875751503, 8338.376753507015, 8393.965931863728, 8449.55511022044, 8505.144288577154, 8560.733466933867, 8616.322645290582, 8671.911823647295, 8727.501002004008, 8783.090180360721, 8838.679358717434, 8894.268537074147, 8949.857715430862, 9005.446893787575, 9061.036072144288, 9116.625250501002, 9172.214428857715, 9227.80360721443, 9283.392785571143, 9338.981963927856, 9394.571142284569, 9450.160320641282, 9505.749498997997, 9561.33867735471, 9616.927855711423, 9672.517034068136, 9728.10621242485, 9783.695390781562, 9839.284569138277, 9894.87374749499, 9950.462925851703, 10006.052104208416, 10061.64128256513, 10117.230460921844, 10172.819639278558, 10228.40881763527, 10283.997995991984, 10339.587174348697, 10395.17635270541, 10450.765531062125, 10506.354709418838, 10561.943887775551, 10617.533066132264, 10673.122244488977, 10728.711422845692, 10784.300601202405, 10839.889779559118, 10895.478957915831, 10951.068136272545, 11006.65731462926, 11062.246492985973, 11117.835671342686, 11173.424849699399, 11229.014028056112, 11284.603206412825, 11340.19238476954, 11395.781563126253, 11451.370741482966, 11506.959919839679, 11562.549098196392, 11618.138276553107, 11673.72745490982, 11729.316633266533, 11784.905811623246, 11840.49498997996, 11896.084168336673, 11951.673346693387, 12007.2625250501, 12062.851703406814, 12118.440881763527, 12174.03006012024, 12229.619238476955, 12285.208416833668, 12340.79759519038, 12396.386773547094, 12451.975951903807, 12507.56513026052, 12563.154308617235, 12618.743486973948, 12674.332665330661, 12729.921843687374, 12785.511022044087, 12841.100200400802, 12896.689378757515, 12952.278557114229, 13007.867735470942, 13063.456913827655, 13119.04609218437, 13174.635270541083, 13230.224448897796, 13285.813627254509, 13341.402805611222, 13396.991983967935, 13452.58116232465, 13508.170340681363, 13563.759519038076, 13619.34869739479, 13674.937875751502, 13730.527054108217, 13786.11623246493, 13841.705410821643, 13897.294589178357, 13952.88376753507, 14008.472945891783, 14064.062124248498, 14119.65130260521, 14175.240480961924, 14230.829659318637, 14286.41883767535, 14342.008016032065, 14397.597194388778, 14453.186372745491, 14508.775551102204, 14564.364729458917, 14619.95390781563, 14675.543086172345, 14731.132264529058, 14786.721442885771, 14842.310621242485, 14897.899799599198, 14953.488977955913, 15009.078156312626, 15064.667334669339, 15120.256513026052, 15175.845691382765, 15231.43486973948, 15287.024048096193, 15342.613226452906, 15398.20240480962, 15453.791583166332, 15509.380761523045, 15564.96993987976, 15620.559118236473, 15676.148296593186, 15731.7374749499, 15787.326653306613, 15842.915831663327, 15898.50501002004, 15954.094188376754, 16009.683366733467, 16065.27254509018, 16120.861723446893, 16176.450901803608, 16232.040080160321, 16287.629258517034, 16343.218436873747, 16398.80761523046, 16454.396793587173, 16509.985971943886, 16565.5751503006, 16621.164328657316, 16676.75350701403, 16732.342685370742, 16787.931863727455, 16843.52104208417, 16899.11022044088, 16954.699398797595, 17010.288577154308, 17065.87775551102, 17121.466933867734, 17177.056112224447, 17232.645290581164, 17288.234468937877, 17343.82364729459, 17399.412825651303, 17455.002004008016, 17510.59118236473, 17566.180360721442, 17621.769539078156, 17677.35871743487, 17732.94789579158, 17788.537074148295, 17844.12625250501, 17899.715430861725, 17955.304609218438, 18010.89378757515, 18066.482965931864, 18122.072144288577, 18177.66132264529, 18233.250501002003, 18288.839679358716, 18344.42885771543, 18400.018036072146, 18455.60721442886, 18511.196392785572, 18566.785571142285, 18622.374749499, 18677.96392785571, 18733.553106212425, 18789.142284569138, 18844.73146292585, 18900.320641282564, 18955.909819639277, 19011.498997995994, 19067.088176352707, 19122.67735470942, 19178.266533066133, 19233.855711422846, 19289.44488977956, 19345.034068136272, 19400.623246492985, 19456.2124248497, 19511.80160320641, 19567.390781563125, 19622.97995991984, 19678.569138276554, 19734.158316633268, 19789.74749498998, 19845.336673346694, 19900.925851703407, 19956.51503006012, 20012.104208416833, 20067.693386773546, 20123.28256513026, 20178.871743486972, 20234.46092184369, 20290.050100200402, 20345.639278557115, 20401.22845691383, 20456.81763527054, 20512.406813627254, 20567.995991983968, 20623.58517034068, 20679.174348697394, 20734.763527054107, 20790.35270541082, 20845.941883767537, 20901.53106212425, 20957.120240480963, 21012.709418837676, 21068.29859719439, 21123.887775551102, 21179.476953907815, 21235.06613226453, 21290.65531062124, 21346.244488977954, 21401.833667334668, 21457.422845691384, 21513.012024048097, 21568.60120240481, 21624.190380761524, 21679.779559118237, 21735.36873747495, 21790.957915831663, 21846.547094188376, 21902.13627254509, 21957.725450901802, 22013.31462925852, 22068.903807615232, 22124.492985971945, 22180.082164328658, 22235.67134268537, 22291.260521042084, 22346.849699398797, 22402.43887775551, 22458.028056112224, 22513.617234468937, 22569.20641282565, 22624.795591182366, 22680.38476953908, 22735.973947895793, 22791.563126252506, 22847.15230460922, 22902.741482965932, 22958.330661322645, 23013.919839679358, 23069.50901803607, 23125.098196392784, 23180.687374749497, 23236.276553106214, 23291.865731462927, 23347.45490981964, 23403.044088176353, 23458.633266533066, 23514.22244488978, 23569.811623246493, 23625.400801603206, 23680.98997995992, 23736.579158316632, 23792.168336673345, 23847.75751503006, 23903.346693386775, 23958.935871743488, 24014.5250501002, 24070.114228456914, 24125.703406813627, 24181.29258517034, 24236.881763527053, 24292.470941883766, 24348.06012024048, 24403.649298597193, 24459.23847695391, 24514.827655310623, 24570.416833667336, 24626.00601202405, 24681.59519038076, 24737.184368737475, 24792.773547094188, 24848.3627254509, 24903.951903807614, 24959.541082164327, 25015.13026052104, 25070.719438877757, 25126.30861723447, 25181.897795591183, 25237.486973947896, 25293.07615230461, 25348.665330661323, 25404.254509018036, 25459.84368737475, 25515.43286573146, 25571.022044088175, 25626.611222444888, 25682.200400801605, 25737.789579158318, 25793.37875751503, 25848.967935871744, 25904.557114228457, 25960.14629258517, 26015.735470941883, 26071.324649298596, 26126.91382765531, 26182.503006012023, 26238.09218436874, 26293.681362725452, 26349.270541082165, 26404.85971943888, 26460.44889779559, 26516.038076152305, 26571.627254509018, 26627.21643286573, 26682.805611222444, 26738.394789579157, 26793.98396793587, 26849.573146292587, 26905.1623246493, 26960.751503006013, 27016.340681362726, 27071.92985971944, 27127.519038076152, 27183.108216432865, 27238.69739478958, 27294.28657314629, 27349.875751503005, 27405.464929859718, 27461.054108216435, 27516.643286573148, 27572.23246492986, 27627.821643286574, 27683.410821643287, 27739.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_9446728f29a5412f8e6ab8f8d0653fdd.x = d3.scale.linear()
              .domain([0.0, 27739.0])
              .range([0, 400]);

    color_map_9446728f29a5412f8e6ab8f8d0653fdd.legend = L.control({position: 'topright'});
    color_map_9446728f29a5412f8e6ab8f8d0653fdd.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_9446728f29a5412f8e6ab8f8d0653fdd.legend.addTo(map_cd17306fee0749ce95ec7f7c4adf761e);

    color_map_9446728f29a5412f8e6ab8f8d0653fdd.xAxis = d3.svg.axis()
        .scale(color_map_9446728f29a5412f8e6ab8f8d0653fdd.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 4623.166666666667, 9246.333333333334, 13869.5, 18492.666666666668, 23115.833333333336, 27739.0]);

    color_map_9446728f29a5412f8e6ab8f8d0653fdd.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_9446728f29a5412f8e6ab8f8d0653fdd.g = color_map_9446728f29a5412f8e6ab8f8d0653fdd.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_9446728f29a5412f8e6ab8f8d0653fdd.g.selectAll("rect")
        .data(color_map_9446728f29a5412f8e6ab8f8d0653fdd.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_9446728f29a5412f8e6ab8f8d0653fdd.x(color_map_9446728f29a5412f8e6ab8f8d0653fdd.color.domain()[i - 1]) : color_map_9446728f29a5412f8e6ab8f8d0653fdd.x.range()[0],
            x1: i < color_map_9446728f29a5412f8e6ab8f8d0653fdd.color.domain().length ? color_map_9446728f29a5412f8e6ab8f8d0653fdd.x(color_map_9446728f29a5412f8e6ab8f8d0653fdd.color.domain()[i]) : color_map_9446728f29a5412f8e6ab8f8d0653fdd.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_9446728f29a5412f8e6ab8f8d0653fdd.g.call(color_map_9446728f29a5412f8e6ab8f8d0653fdd.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('01_96_VOTO NULO');

