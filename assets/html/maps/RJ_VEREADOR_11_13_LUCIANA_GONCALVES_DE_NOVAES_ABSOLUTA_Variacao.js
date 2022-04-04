    
            var map_d23cb977ec464d8ab8cd3b4fffa3e152 = L.map(
                "map_d23cb977ec464d8ab8cd3b4fffa3e152",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_211db203bc6d44cc99818a4229475aef = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_d23cb977ec464d8ab8cd3b4fffa3e152);
        
    
            var choropleth_eae1841c2f974061abce97869129bb93 = L.featureGroup(
                {}
            ).addTo(map_d23cb977ec464d8ab8cd3b4fffa3e152);
        
    
        function geo_json_7de03490f6304364a83a1a2a826dcf12_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 431: case 349: case 342: case 336: case 460: case 481: case 479: case 512: case 407: case 376: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 443: case 424: case 466: case 473: case 472: case 442: case 382: case 419: case 511: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 435: case 364: case 346: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 471: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_7de03490f6304364a83a1a2a826dcf12_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_7de03490f6304364a83a1a2a826dcf12 = L.geoJson(null, {
                onEachFeature: geo_json_7de03490f6304364a83a1a2a826dcf12_onEachFeature,
            
                style: geo_json_7de03490f6304364a83a1a2a826dcf12_styler,
        });

        function geo_json_7de03490f6304364a83a1a2a826dcf12_add (data) {
            geo_json_7de03490f6304364a83a1a2a826dcf12
                .addData(data)
                .addTo(choropleth_eae1841c2f974061abce97869129bb93);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_7de03490f6304364a83a1a2a826dcf12_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_d5f318f160b9494abf711b9a61d18732 = {};

    
    color_map_d5f318f160b9494abf711b9a61d18732.color = d3.scale.threshold()
              .domain([-340.0, -338.7975951903808, -337.59519038076155, -336.39278557114227, -335.19038076152304, -333.9879759519038, -332.7855711422846, -331.5831663326653, -330.3807615230461, -329.17835671342687, -327.97595190380764, -326.77354709418836, -325.57114228456913, -324.3687374749499, -323.1663326653307, -321.9639278557114, -320.7615230460922, -319.55911823647295, -318.35671342685373, -317.15430861723445, -315.9519038076152, -314.749498997996, -313.5470941883768, -312.3446893787575, -311.14228456913827, -309.93987975951904, -308.7374749498998, -307.53507014028054, -306.3326653306613, -305.1302605210421, -303.92785571142286, -302.7254509018036, -301.52304609218436, -300.32064128256513, -299.1182364729459, -297.9158316633267, -296.7134268537074, -295.5110220440882, -294.30861723446895, -293.1062124248497, -291.90380761523045, -290.7014028056112, -289.498997995992, -288.2965931863728, -287.0941883767535, -285.89178356713427, -284.68937875751504, -283.48697394789576, -282.28456913827654, -281.0821643286573, -279.8797595190381, -278.67735470941886, -277.4749498997996, -276.27254509018036, -275.07014028056113, -273.86773547094185, -272.6653306613226, -271.4629258517034, -270.2605210420842, -269.05811623246495, -267.8557114228457, -266.65330661322645, -265.4509018036072, -264.24849699398794, -263.0460921843687, -261.8436873747495, -260.64128256513027, -259.43887775551104, -258.23647294589176, -257.03406813627254, -255.8316633266533, -254.6292585170341, -253.42685370741484, -252.22444889779558, -251.02204408817636, -249.81963927855713, -248.61723446893788, -247.41482965931863, -246.2124248496994, -245.01002004008018, -243.80761523046093, -242.60521042084167, -241.40280561122245, -240.20040080160322, -238.99799599198397, -237.79559118236472, -236.5931863727455, -235.39078156312627, -234.18837675350701, -232.98597194388776, -231.78356713426854, -230.5811623246493, -229.37875751503006, -228.1763527054108, -226.97394789579158, -225.77154308617236, -224.5691382765531, -223.36673346693385, -222.16432865731463, -220.9619238476954, -219.75951903807615, -218.5571142284569, -217.35470941883767, -216.15230460921845, -214.9498997995992, -213.74749498997994, -212.54509018036072, -211.3426853707415, -210.14028056112224, -208.93787575150301, -207.73547094188376, -206.53306613226454, -205.33066132264528, -204.12825651302606, -202.9258517034068, -201.72344689378758, -200.52104208416833, -199.3186372745491, -198.11623246492985, -196.91382765531063, -195.71142284569137, -194.50901803607215, -193.3066132264529, -192.10420841683367, -190.90180360721442, -189.6993987975952, -188.49699398797594, -187.29458917835672, -186.09218436873746, -184.88977955911824, -183.68737474949899, -182.48496993987976, -181.2825651302605, -180.08016032064128, -178.87775551102203, -177.6753507014028, -176.47294589178355, -175.27054108216433, -174.0681362725451, -172.86573146292585, -171.66332665330663, -170.46092184368737, -169.25851703406815, -168.0561122244489, -166.85370741482967, -165.65130260521042, -164.4488977955912, -163.24649298597194, -162.04408817635272, -160.84168336673346, -159.63927855711424, -158.43687374749499, -157.23446893787576, -156.0320641282565, -154.82965931863728, -153.62725450901803, -152.4248496993988, -151.22244488977955, -150.02004008016033, -148.81763527054107, -147.61523046092185, -146.4128256513026, -145.21042084168337, -144.00801603206412, -142.8056112224449, -141.60320641282564, -140.40080160320642, -139.19839679358716, -137.99599198396794, -136.7935871743487, -135.59118236472946, -134.3887775551102, -133.18637274549098, -131.98396793587173, -130.7815631262525, -129.57915831663325, -128.37675350701403, -127.17434869739478, -125.97194388777555, -124.7695390781563, -123.56713426853707, -122.36472945891782, -121.1623246492986, -119.95991983967937, -118.75751503006012, -117.5551102204409, -116.35270541082164, -115.15030060120242, -113.94789579158316, -112.74549098196394, -111.54308617234469, -110.34068136272546, -109.13827655310621, -107.93587174348698, -106.73346693386773, -105.5310621242485, -104.32865731462925, -103.12625250501003, -101.92384769539078, -100.72144288577155, -99.5190380761523, -98.31663326653307, -97.11422845691382, -95.9118236472946, -94.70941883767534, -93.50701402805612, -92.30460921843687, -91.10220440881764, -89.89979959919839, -88.69739478957916, -87.49498997995991, -86.29258517034069, -85.09018036072143, -83.88777555110221, -82.68537074148298, -81.4829659318637, -80.28056112224448, -79.07815631262525, -77.87575150300603, -76.67334669338675, -75.47094188376752, -74.2685370741483, -73.06613226452907, -71.86372745490979, -70.66132264529057, -69.45891783567134, -68.25651302605212, -67.0541082164329, -65.85170340681361, -64.64929859719439, -63.44689378757516, -62.24448897795594, -61.04208416833666, -59.83967935871743, -58.63727454909821, -57.434869739478984, -56.2324649298597, -55.03006012024048, -53.82765531062125, -52.62525050100203, -51.42284569138275, -50.22044088176352, -49.0180360721443, -47.81563126252507, -46.61322645290579, -45.41082164328657, -44.20841683366734, -43.00601202404812, -41.80360721442884, -40.60120240480961, -39.39879759519039, -38.19639278557116, -36.99398797595188, -35.79158316633266, -34.58917835671343, -33.38677354709421, -32.18436873747493, -30.981963927855702, -29.779559118236477, -28.577154308617253, -27.37474949899797, -26.172344689378747, -24.969939879759522, -23.767535070140298, -22.565130260521016, -21.36272545090179, -20.160320641282567, -18.957915831663342, -17.75551102204406, -16.553106212424836, -15.350701402805612, -14.148296593186387, -12.945891783567106, -11.743486973947881, -10.541082164328657, -9.338677354709432, -8.136272545090208, -6.933867735470926, -5.731462925851702, -4.529058116232477, -3.3266533066132524, -2.124248496993971, -0.9218436873747464, 0.28056112224447816, 1.4829659318637027, 2.685370741482984, 3.8877755511022087, 5.090180360721433, 6.292585170340658, 7.494989979959939, 8.697394789579164, 9.899799599198388, 11.102204408817613, 12.304609218436894, 13.507014028056119, 14.709418837675344, 15.911823647294568, 17.11422845691385, 18.316633266533074, 19.5190380761523, 20.721442885771523, 21.923847695390805, 23.12625250501003, 24.328657314629254, 25.53106212424848, 26.73346693386776, 27.935871743486985, 29.13827655310621, 30.340681362725434, 31.543086172344715, 32.74549098196394, 33.947895791583164, 35.15030060120239, 36.35270541082167, 37.555110220440895, 38.75751503006012, 39.959919839679344, 41.162324649298625, 42.36472945891785, 43.567134268537075, 44.7695390781563, 45.971943887775524, 47.174348697394805, 48.37675350701403, 49.579158316633254, 50.78156312625248, 51.98396793587176, 53.186372745490985, 54.38877755511021, 55.591182364729434, 56.793587174348716, 57.99599198396794, 59.198396793587165, 60.40080160320639, 61.60320641282567, 62.805611222444895, 64.00801603206412, 65.21042084168334, 66.41282565130263, 67.61523046092185, 68.81763527054107, 70.0200400801603, 71.22244488977958, 72.4248496993988, 73.62725450901803, 74.82965931863725, 76.03206412825654, 77.23446893787576, 78.43687374749499, 79.63927855711421, 80.84168336673349, 82.04408817635272, 83.24649298597194, 84.44889779559117, 85.65130260521045, 86.85370741482967, 88.0561122244489, 89.25851703406812, 90.4609218436874, 91.66332665330663, 92.86573146292585, 94.06813627254508, 95.27054108216436, 96.47294589178358, 97.6753507014028, 98.87775551102203, 100.08016032064126, 101.28256513026054, 102.48496993987976, 103.68737474949899, 104.88977955911821, 106.09218436873749, 107.29458917835672, 108.49699398797594, 109.69939879759517, 110.90180360721445, 112.10420841683367, 113.3066132264529, 114.50901803607212, 115.7114228456914, 116.91382765531063, 118.11623246492985, 119.31863727454908, 120.52104208416836, 121.72344689378758, 122.9258517034068, 124.12825651302603, 125.33066132264531, 126.53306613226454, 127.73547094188376, 128.937875751503, 130.14028056112227, 131.3426853707415, 132.54509018036072, 133.74749498997994, 134.94989979959922, 136.15230460921845, 137.35470941883767, 138.5571142284569, 139.75951903807618, 140.9619238476954, 142.16432865731463, 143.36673346693385, 144.56913827655313, 145.77154308617236, 146.97394789579158, 148.1763527054108, 149.3787575150301, 150.5811623246493, 151.78356713426854, 152.98597194388776, 154.188376753507, 155.39078156312627, 156.5931863727455, 157.79559118236472, 158.99799599198394, 160.20040080160322, 161.40280561122245, 162.60521042084167, 163.8076152304609, 165.01002004008018, 166.2124248496994, 167.41482965931863, 168.61723446893785, 169.81963927855713, 171.02204408817636, 172.22444889779558, 173.4268537074148, 174.62925851703403, 175.83166332665326, 177.0340681362726, 178.23647294589182, 179.43887775551104, 180.64128256513027, 181.8436873747495, 183.04609218436872, 184.24849699398794, 185.45090180360717, 186.6533066132265, 187.85571142284573, 189.05811623246495, 190.26052104208418, 191.4629258517034, 192.66533066132263, 193.86773547094185, 195.07014028056108, 196.27254509018042, 197.47494989979964, 198.67735470941886, 199.8797595190381, 201.0821643286573, 202.28456913827654, 203.48697394789576, 204.689378757515, 205.8917835671342, 207.09418837675355, 208.29659318637277, 209.498997995992, 210.70140280561122, 211.90380761523045, 213.10621242484967, 214.3086172344689, 215.51102204408812, 216.71342685370746, 217.91583166332668, 219.1182364729459, 220.32064128256513, 221.52304609218436, 222.72545090180358, 223.9278557114228, 225.13026052104203, 226.33266533066137, 227.5350701402806, 228.73747494989982, 229.93987975951904, 231.14228456913827, 232.3446893787575, 233.54709418837672, 234.74949899799594, 235.95190380761528, 237.1543086172345, 238.35671342685373, 239.55911823647295, 240.76152304609218, 241.9639278557114, 243.16633266533063, 244.36873747494985, 245.5711422845692, 246.77354709418842, 247.97595190380764, 249.17835671342687, 250.3807615230461, 251.58316633266531, 252.78557114228454, 253.98797595190376, 255.1903807615231, 256.3927855711423, 257.59519038076155, 258.7975951903808, 260.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_d5f318f160b9494abf711b9a61d18732.x = d3.scale.linear()
              .domain([-340.0, 260.0])
              .range([0, 400]);

    color_map_d5f318f160b9494abf711b9a61d18732.legend = L.control({position: 'topright'});
    color_map_d5f318f160b9494abf711b9a61d18732.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_d5f318f160b9494abf711b9a61d18732.legend.addTo(map_d23cb977ec464d8ab8cd3b4fffa3e152);

    color_map_d5f318f160b9494abf711b9a61d18732.xAxis = d3.svg.axis()
        .scale(color_map_d5f318f160b9494abf711b9a61d18732.x)
        .orient("top")
        .tickSize(1)
        .tickValues([-340.0, -240.0, -140.0, -40.0, 60.0, 160.0, 260.0]);

    color_map_d5f318f160b9494abf711b9a61d18732.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_d5f318f160b9494abf711b9a61d18732.g = color_map_d5f318f160b9494abf711b9a61d18732.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_d5f318f160b9494abf711b9a61d18732.g.selectAll("rect")
        .data(color_map_d5f318f160b9494abf711b9a61d18732.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_d5f318f160b9494abf711b9a61d18732.x(color_map_d5f318f160b9494abf711b9a61d18732.color.domain()[i - 1]) : color_map_d5f318f160b9494abf711b9a61d18732.x.range()[0],
            x1: i < color_map_d5f318f160b9494abf711b9a61d18732.color.domain().length ? color_map_d5f318f160b9494abf711b9a61d18732.x(color_map_d5f318f160b9494abf711b9a61d18732.color.domain()[i]) : color_map_d5f318f160b9494abf711b9a61d18732.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_d5f318f160b9494abf711b9a61d18732.g.call(color_map_d5f318f160b9494abf711b9a61d18732.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('11_13_LUCIANA GONCALVES DE NOVAES');

