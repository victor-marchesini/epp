    
            var map_91ee6fb97e73411d874e11c5d6489ff5 = L.map(
                "map_91ee6fb97e73411d874e11c5d6489ff5",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_51319a52083849509d54a349eda8db12 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_91ee6fb97e73411d874e11c5d6489ff5);
        
    
            var choropleth_66adc84bb08c4bf6b6f657c3fd26e8eb = L.featureGroup(
                {}
            ).addTo(map_91ee6fb97e73411d874e11c5d6489ff5);
        
    
        function geo_json_7ef70c9c57bc4304a73b19a157ec9528_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 423: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 440: case 448: case 447: case 473: case 472: case 470: case 436: case 446: case 444: case 369: case 419: case 346: case 433: case 430: case 477: case 370: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 471: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 455: case 381: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_7ef70c9c57bc4304a73b19a157ec9528_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_7ef70c9c57bc4304a73b19a157ec9528 = L.geoJson(null, {
                onEachFeature: geo_json_7ef70c9c57bc4304a73b19a157ec9528_onEachFeature,
            
                style: geo_json_7ef70c9c57bc4304a73b19a157ec9528_styler,
        });

        function geo_json_7ef70c9c57bc4304a73b19a157ec9528_add (data) {
            geo_json_7ef70c9c57bc4304a73b19a157ec9528
                .addData(data)
                .addTo(choropleth_66adc84bb08c4bf6b6f657c3fd26e8eb);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_7ef70c9c57bc4304a73b19a157ec9528_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_d94ed88d066a4630a88f86960142c857 = {};

    
    color_map_d94ed88d066a4630a88f86960142c857.color = d3.scale.threshold()
              .domain([3.0, 9.492985971943888, 15.985971943887776, 22.478957915831664, 28.971943887775552, 35.46492985971944, 41.95791583166333, 48.450901803607216, 54.943887775551104, 61.43687374749499, 67.92985971943888, 74.42284569138276, 80.91583166332666, 87.40881763527054, 93.90180360721443, 100.39478957915831, 106.88777555110221, 113.38076152304609, 119.87374749498998, 126.36673346693387, 132.85971943887776, 139.35270541082164, 145.84569138276552, 152.33867735470943, 158.8316633266533, 165.3246492985972, 171.81763527054107, 178.31062124248496, 184.80360721442887, 191.29659318637275, 197.78957915831663, 204.2825651302605, 210.77555110220442, 217.2685370741483, 223.76152304609218, 230.25450901803606, 236.74749498997997, 243.24048096192385, 249.73346693386773, 256.2264529058116, 262.7194388777555, 269.2124248496994, 275.7054108216433, 282.19839679358716, 288.69138276553105, 295.1843687374749, 301.67735470941886, 308.17034068136275, 314.6633266533066, 321.1563126252505, 327.6492985971944, 334.14228456913827, 340.63527054108215, 347.12825651302603, 353.6212424849699, 360.11422845691385, 366.60721442885773, 373.1002004008016, 379.5931863727455, 386.0861723446894, 392.57915831663325, 399.07214428857714, 405.565130260521, 412.05811623246495, 418.55110220440883, 425.0440881763527, 431.5370741482966, 438.0300601202405, 444.52304609218436, 451.01603206412824, 457.5090180360721, 464.00200400801606, 470.49498997995994, 476.9879759519038, 483.4809619238477, 489.9739478957916, 496.46693386773546, 502.95991983967934, 509.4529058116232, 515.9458917835672, 522.438877755511, 528.9318637274549, 535.4248496993988, 541.9178356713427, 548.4108216432866, 554.9038076152304, 561.3967935871743, 567.8897795591182, 574.3827655310621, 580.875751503006, 587.3687374749499, 593.8617234468937, 600.3547094188377, 606.8476953907816, 613.3406813627255, 619.8336673346694, 626.3266533066133, 632.8196392785571, 639.312625250501, 645.8056112224449, 652.2985971943888, 658.7915831663327, 665.2845691382765, 671.7775551102204, 678.2705410821643, 684.7635270541082, 691.2565130260521, 697.7494989979959, 704.2424849699398, 710.7354709418838, 717.2284569138277, 723.7214428857716, 730.2144288577155, 736.7074148296593, 743.2004008016032, 749.6933867735471, 756.186372745491, 762.6793587174349, 769.1723446893787, 775.6653306613226, 782.1583166332665, 788.6513026052104, 795.1442885771543, 801.6372745490982, 808.130260521042, 814.623246492986, 821.1162324649299, 827.6092184368738, 834.1022044088177, 840.5951903807616, 847.0881763527054, 853.5811623246493, 860.0741482965932, 866.5671342685371, 873.060120240481, 879.5531062124248, 886.0460921843687, 892.5390781563126, 899.0320641282565, 905.5250501002004, 912.0180360721442, 918.5110220440881, 925.0040080160321, 931.496993987976, 937.9899799599199, 944.4829659318638, 950.9759519038076, 957.4689378757515, 963.9619238476954, 970.4549098196393, 976.9478957915832, 983.440881763527, 989.9338677354709, 996.4268537074148, 1002.9198396793587, 1009.4128256513026, 1015.9058116232464, 1022.3987975951903, 1028.8917835671343, 1035.3847695390782, 1041.877755511022, 1048.370741482966, 1054.8637274549098, 1061.3567134268537, 1067.8496993987976, 1074.3426853707415, 1080.8356713426854, 1087.3286573146293, 1093.8216432865731, 1100.314629258517, 1106.807615230461, 1113.3006012024048, 1119.7935871743487, 1126.2865731462925, 1132.7795591182364, 1139.2725450901803, 1145.7655310621242, 1152.258517034068, 1158.751503006012, 1165.2444889779558, 1171.7374749498997, 1178.2304609218436, 1184.7234468937875, 1191.2164328657316, 1197.7094188376755, 1204.2024048096193, 1210.6953907815632, 1217.188376753507, 1223.681362725451, 1230.1743486973949, 1236.6673346693387, 1243.1603206412826, 1249.6533066132265, 1256.1462925851704, 1262.6392785571143, 1269.1322645290581, 1275.625250501002, 1282.118236472946, 1288.6112224448898, 1295.1042084168337, 1301.5971943887776, 1308.0901803607214, 1314.5831663326653, 1321.0761523046092, 1327.569138276553, 1334.062124248497, 1340.5551102204408, 1347.0480961923847, 1353.5410821643286, 1360.0340681362725, 1366.5270541082164, 1373.0200400801602, 1379.5130260521041, 1386.006012024048, 1392.4989979959919, 1398.9919839679358, 1405.4849699398796, 1411.9779559118238, 1418.4709418837676, 1424.9639278557115, 1431.4569138276554, 1437.9498997995993, 1444.4428857715432, 1450.935871743487, 1457.428857715431, 1463.9218436873748, 1470.4148296593187, 1476.9078156312626, 1483.4008016032064, 1489.8937875751503, 1496.3867735470942, 1502.879759519038, 1509.372745490982, 1515.8657314629259, 1522.3587174348697, 1528.8517034068136, 1535.3446893787575, 1541.8376753507014, 1548.3306613226453, 1554.8236472945891, 1561.316633266533, 1567.809619238477, 1574.3026052104208, 1580.7955911823647, 1587.2885771543085, 1593.7815631262524, 1600.2745490981963, 1606.7675350701402, 1613.260521042084, 1619.753507014028, 1626.246492985972, 1632.739478957916, 1639.2324649298598, 1645.7254509018037, 1652.2184368737476, 1658.7114228456915, 1665.2044088176353, 1671.6973947895792, 1678.190380761523, 1684.683366733467, 1691.1763527054109, 1697.6693386773547, 1704.1623246492986, 1710.6553106212425, 1717.1482965931864, 1723.6412825651303, 1730.1342685370741, 1736.627254509018, 1743.120240480962, 1749.6132264529058, 1756.1062124248497, 1762.5991983967936, 1769.0921843687374, 1775.5851703406813, 1782.0781563126252, 1788.571142284569, 1795.064128256513, 1801.5571142284568, 1808.0501002004007, 1814.5430861723446, 1821.0360721442885, 1827.5290581162324, 1834.0220440881762, 1840.5150300601204, 1847.0080160320642, 1853.5010020040081, 1859.993987975952, 1866.4869739478959, 1872.9799599198398, 1879.4729458917836, 1885.9659318637275, 1892.4589178356714, 1898.9519038076153, 1905.4448897795592, 1911.937875751503, 1918.430861723447, 1924.9238476953908, 1931.4168336673347, 1937.9098196392786, 1944.4028056112224, 1950.8957915831663, 1957.3887775551102, 1963.881763527054, 1970.374749498998, 1976.8677354709419, 1983.3607214428857, 1989.8537074148296, 1996.3466933867735, 2002.8396793587174, 2009.3326653306613, 2015.8256513026051, 2022.318637274549, 2028.811623246493, 2035.3046092184368, 2041.7975951903807, 2048.2905811623245, 2054.7835671342687, 2061.2765531062123, 2067.7695390781564, 2074.2625250501, 2080.755511022044, 2087.248496993988, 2093.741482965932, 2100.2344689378756, 2106.7274549098197, 2113.2204408817634, 2119.7134268537075, 2126.206412825651, 2132.699398797595, 2139.192384769539, 2145.685370741483, 2152.1783567134266, 2158.6713426853707, 2165.164328657315, 2171.6573146292585, 2178.1503006012026, 2184.6432865731463, 2191.1362725450904, 2197.629258517034, 2204.122244488978, 2210.615230460922, 2217.108216432866, 2223.6012024048096, 2230.0941883767537, 2236.5871743486973, 2243.0801603206414, 2249.573146292585, 2256.066132264529, 2262.559118236473, 2269.052104208417, 2275.5450901803606, 2282.0380761523047, 2288.5310621242484, 2295.0240480961925, 2301.517034068136, 2308.0100200400802, 2314.503006012024, 2320.995991983968, 2327.4889779559117, 2333.9819639278558, 2340.4749498997994, 2346.9679358717435, 2353.460921843687, 2359.9539078156313, 2366.446893787575, 2372.939879759519, 2379.432865731463, 2385.925851703407, 2392.418837675351, 2398.9118236472946, 2405.4048096192387, 2411.8977955911823, 2418.3907815631264, 2424.88376753507, 2431.376753507014, 2437.869739478958, 2444.362725450902, 2450.8557114228456, 2457.3486973947897, 2463.8416833667334, 2470.3346693386775, 2476.827655310621, 2483.3206412825652, 2489.813627254509, 2496.306613226453, 2502.7995991983967, 2509.2925851703408, 2515.7855711422844, 2522.2785571142285, 2528.771543086172, 2535.2645290581163, 2541.75751503006, 2548.250501002004, 2554.7434869739477, 2561.236472945892, 2567.7294589178355, 2574.2224448897796, 2580.7154308617232, 2587.2084168336673, 2593.701402805611, 2600.194388777555, 2606.687374749499, 2613.180360721443, 2619.673346693387, 2626.1663326653306, 2632.6593186372747, 2639.1523046092184, 2645.6452905811625, 2652.138276553106, 2658.6312625250503, 2665.124248496994, 2671.617234468938, 2678.1102204408817, 2684.603206412826, 2691.0961923847694, 2697.5891783567135, 2704.082164328657, 2710.5751503006013, 2717.068136272545, 2723.561122244489, 2730.0541082164327, 2736.547094188377, 2743.0400801603205, 2749.5330661322646, 2756.0260521042082, 2762.5190380761524, 2769.012024048096, 2775.50501002004, 2781.9979959919838, 2788.490981963928, 2794.9839679358715, 2801.4769539078156, 2807.9699398797593, 2814.4629258517034, 2820.9559118236475, 2827.448897795591, 2833.9418837675353, 2840.434869739479, 2846.927855711423, 2853.4208416833667, 2859.913827655311, 2866.4068136272545, 2872.8997995991986, 2879.392785571142, 2885.8857715430863, 2892.37875751503, 2898.871743486974, 2905.3647294589177, 2911.857715430862, 2918.3507014028055, 2924.8436873747496, 2931.3366733466933, 2937.8296593186374, 2944.322645290581, 2950.815631262525, 2957.308617234469, 2963.801603206413, 2970.2945891783565, 2976.7875751503007, 2983.2805611222443, 2989.7735470941884, 2996.266533066132, 3002.759519038076, 3009.25250501002, 3015.745490981964, 3022.2384769539076, 3028.7314629258517, 3035.224448897796, 3041.7174348697395, 3048.2104208416836, 3054.703406813627, 3061.1963927855713, 3067.689378757515, 3074.182364729459, 3080.6753507014027, 3087.168336673347, 3093.6613226452905, 3100.1543086172346, 3106.6472945891783, 3113.1402805611224, 3119.633266533066, 3126.12625250501, 3132.619238476954, 3139.112224448898, 3145.6052104208416, 3152.0981963927857, 3158.5911823647293, 3165.0841683366734, 3171.577154308617, 3178.070140280561, 3184.563126252505, 3191.056112224449, 3197.5490981963926, 3204.0420841683367, 3210.5350701402804, 3217.0280561122245, 3223.521042084168, 3230.0140280561122, 3236.507014028056, 3243.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_d94ed88d066a4630a88f86960142c857.x = d3.scale.linear()
              .domain([3.0, 3243.0])
              .range([0, 400]);

    color_map_d94ed88d066a4630a88f86960142c857.legend = L.control({position: 'topright'});
    color_map_d94ed88d066a4630a88f86960142c857.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_d94ed88d066a4630a88f86960142c857.legend.addTo(map_91ee6fb97e73411d874e11c5d6489ff5);

    color_map_d94ed88d066a4630a88f86960142c857.xAxis = d3.svg.axis()
        .scale(color_map_d94ed88d066a4630a88f86960142c857.x)
        .orient("top")
        .tickSize(1)
        .tickValues([3.0, 543.0, 1083.0, 1623.0, 2163.0, 2703.0, 3243.0]);

    color_map_d94ed88d066a4630a88f86960142c857.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_d94ed88d066a4630a88f86960142c857.g = color_map_d94ed88d066a4630a88f86960142c857.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_d94ed88d066a4630a88f86960142c857.g.selectAll("rect")
        .data(color_map_d94ed88d066a4630a88f86960142c857.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_d94ed88d066a4630a88f86960142c857.x(color_map_d94ed88d066a4630a88f86960142c857.color.domain()[i - 1]) : color_map_d94ed88d066a4630a88f86960142c857.x.range()[0],
            x1: i < color_map_d94ed88d066a4630a88f86960142c857.color.domain().length ? color_map_d94ed88d066a4630a88f86960142c857.x(color_map_d94ed88d066a4630a88f86960142c857.color.domain()[i]) : color_map_d94ed88d066a4630a88f86960142c857.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_d94ed88d066a4630a88f86960142c857.g.call(color_map_d94ed88d066a4630a88f86960142c857.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('04_50_RENATA DA SILVA SOUZA');

