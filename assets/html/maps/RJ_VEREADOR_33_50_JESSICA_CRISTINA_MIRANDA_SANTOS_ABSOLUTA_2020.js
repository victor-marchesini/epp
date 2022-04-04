    
            var map_db77b39629b64791bdc8fed13fd018f4 = L.map(
                "map_db77b39629b64791bdc8fed13fd018f4",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_fe29951d591c4392872fc0d14596010e = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_db77b39629b64791bdc8fed13fd018f4);
        
    
            var choropleth_8bb3b57bd37c45929f8685b4ecbdccd5 = L.featureGroup(
                {}
            ).addTo(map_db77b39629b64791bdc8fed13fd018f4);
        
    
        function geo_json_26c89c5679c04afcbbfc2584a93cea8a_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 431: case 349: case 342: case 336: case 460: case 475: case 357: case 350: case 481: case 483: case 479: case 366: case 391: case 480: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 422: case 472: case 470: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 447: case 462: case 473: case 468: case 464: case 436: case 444: case 381: case 352: case 343: case 419: case 433: case 430: case 477: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 449: case 455: case 351: case 471: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_26c89c5679c04afcbbfc2584a93cea8a_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_26c89c5679c04afcbbfc2584a93cea8a = L.geoJson(null, {
                onEachFeature: geo_json_26c89c5679c04afcbbfc2584a93cea8a_onEachFeature,
            
                style: geo_json_26c89c5679c04afcbbfc2584a93cea8a_styler,
        });

        function geo_json_26c89c5679c04afcbbfc2584a93cea8a_add (data) {
            geo_json_26c89c5679c04afcbbfc2584a93cea8a
                .addData(data)
                .addTo(choropleth_8bb3b57bd37c45929f8685b4ecbdccd5);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_26c89c5679c04afcbbfc2584a93cea8a_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_71621d2a176d48c886be1b087b3a6e34 = {};

    
    color_map_71621d2a176d48c886be1b087b3a6e34.color = d3.scale.threshold()
              .domain([1.0, 1.5230460921843687, 2.0460921843687374, 2.5691382765531063, 3.092184368737475, 3.6152304609218437, 4.138276553106213, 4.661322645290581, 5.18436873747495, 5.707414829659319, 6.2304609218436875, 6.753507014028056, 7.2765531062124245, 7.799599198396794, 8.322645290581162, 8.84569138276553, 9.3687374749499, 9.891783567134269, 10.414829659318638, 10.937875751503006, 11.460921843687375, 11.983967935871744, 12.507014028056112, 13.030060120240481, 13.553106212424849, 14.076152304609218, 14.599198396793588, 15.122244488977955, 15.645290581162325, 16.168336673346694, 16.69138276553106, 17.21442885771543, 17.7374749498998, 18.260521042084168, 18.783567134268537, 19.306613226452907, 19.829659318637276, 20.352705410821642, 20.87575150300601, 21.39879759519038, 21.92184368737475, 22.44488977955912, 22.96793587174349, 23.490981963927855, 24.014028056112224, 24.537074148296593, 25.060120240480963, 25.583166332665332, 26.106212424849698, 26.629258517034067, 27.152304609218437, 27.675350701402806, 28.198396793587175, 28.721442885771545, 29.24448897795591, 29.76753507014028, 30.29058116232465, 30.81362725450902, 31.336673346693388, 31.859719438877754, 32.38276553106212, 32.90581162324649, 33.42885771543086, 33.95190380761523, 34.4749498997996, 34.99799599198397, 35.521042084168336, 36.04408817635271, 36.567134268537075, 37.09018036072144, 37.61322645290581, 38.13627254509018, 38.65931863727455, 39.18236472945892, 39.705410821643284, 40.22845691382766, 40.75150300601202, 41.274549098196395, 41.79759519038076, 42.32064128256513, 42.8436873747495, 43.366733466933866, 43.88977955911824, 44.412825651302605, 44.93587174348698, 45.45891783567134, 45.98196392785571, 46.50501002004008, 47.02805611222445, 47.55110220440882, 48.07414829659319, 48.59719438877755, 49.120240480961925, 49.64328657314629, 50.166332665330664, 50.68937875751503, 51.212424849699396, 51.73547094188377, 52.258517034068134, 52.78156312625251, 53.30460921843687, 53.82765531062124, 54.35070140280561, 54.87374749498998, 55.39679358717435, 55.91983967935872, 56.44288577154309, 56.965931863727455, 57.48897795591182, 58.012024048096194, 58.53507014028056, 59.05811623246493, 59.5811623246493, 60.104208416833664, 60.62725450901804, 61.1503006012024, 61.673346693386776, 62.19639278557114, 62.71943887775551, 63.24248496993988, 63.765531062124246, 64.28857715430863, 64.81162324649299, 65.33466933867736, 65.85771543086172, 66.38076152304609, 66.90380761523046, 67.42685370741484, 67.9498997995992, 68.47294589178357, 68.99599198396794, 69.5190380761523, 70.04208416833667, 70.56513026052104, 71.08817635270542, 71.61122244488978, 72.13426853707415, 72.65731462925852, 73.18036072144288, 73.70340681362725, 74.22645290581163, 74.74949899799599, 75.27254509018036, 75.79559118236473, 76.3186372745491, 76.84168336673346, 77.36472945891784, 77.88777555110221, 78.41082164328657, 78.93386773547094, 79.45691382765531, 79.97995991983969, 80.50300601202404, 81.02605210420842, 81.54909819639279, 82.07214428857715, 82.59519038076152, 83.1182364729459, 83.64128256513025, 84.16432865731463, 84.687374749499, 85.21042084168337, 85.73346693386773, 86.2565130260521, 86.77955911823648, 87.30260521042084, 87.82565130260521, 88.34869739478958, 88.87174348697395, 89.39478957915831, 89.91783567134269, 90.44088176352706, 90.96392785571142, 91.48697394789579, 92.01002004008016, 92.53306613226452, 93.0561122244489, 93.57915831663327, 94.10220440881764, 94.625250501002, 95.14829659318637, 95.67134268537075, 96.1943887775551, 96.71743486973948, 97.24048096192385, 97.76352705410822, 98.28657314629258, 98.80961923847696, 99.33266533066133, 99.85571142284569, 100.37875751503006, 100.90180360721443, 101.42484969939879, 101.94789579158316, 102.47094188376754, 102.99398797595191, 103.51703406813627, 104.04008016032064, 104.56312625250501, 105.08617234468937, 105.60921843687375, 106.13226452905812, 106.65531062124248, 107.17835671342685, 107.70140280561122, 108.2244488977956, 108.74749498997996, 109.27054108216433, 109.7935871743487, 110.31663326653306, 110.83967935871743, 111.3627254509018, 111.88577154308618, 112.40881763527054, 112.93186372745491, 113.45490981963928, 113.97795591182364, 114.50100200400801, 115.02404809619239, 115.54709418837675, 116.07014028056112, 116.59318637274549, 117.11623246492987, 117.63927855711422, 118.1623246492986, 118.68537074148297, 119.20841683366733, 119.7314629258517, 120.25450901803607, 120.77755511022045, 121.3006012024048, 121.82364729458918, 122.34669338677355, 122.86973947895791, 123.39278557114228, 123.91583166332666, 124.43887775551102, 124.96192384769539, 125.48496993987976, 126.00801603206413, 126.53106212424849, 127.05410821643287, 127.57715430861724, 128.1002004008016, 128.62324649298597, 129.14629258517033, 129.66933867735472, 130.19238476953907, 130.71543086172343, 131.23847695390782, 131.76152304609218, 132.28456913827657, 132.80761523046093, 133.33066132264528, 133.85370741482967, 134.37675350701403, 134.8997995991984, 135.42284569138278, 135.94589178356713, 136.4689378757515, 136.99198396793588, 137.51503006012024, 138.0380761523046, 138.56112224448898, 139.08416833667334, 139.6072144288577, 140.1302605210421, 140.65330661322645, 141.17635270541084, 141.6993987975952, 142.22244488977955, 142.74549098196394, 143.2685370741483, 143.79158316633266, 144.31462925851704, 144.8376753507014, 145.36072144288576, 145.88376753507015, 146.4068136272545, 146.92985971943887, 147.45290581162325, 147.9759519038076, 148.49899799599197, 149.02204408817636, 149.54509018036072, 150.0681362725451, 150.59118236472946, 151.11422845691382, 151.6372745490982, 152.16032064128257, 152.68336673346693, 153.2064128256513, 153.72945891783567, 154.25250501002003, 154.77555110220442, 155.29859719438878, 155.82164328657313, 156.34468937875752, 156.86773547094188, 157.39078156312624, 157.91382765531063, 158.43687374749499, 158.95991983967937, 159.48296593186373, 160.0060120240481, 160.52905811623248, 161.05210420841684, 161.5751503006012, 162.09819639278558, 162.62124248496994, 163.1442885771543, 163.6673346693387, 164.19038076152304, 164.7134268537074, 165.2364729458918, 165.75951903807615, 166.2825651302605, 166.8056112224449, 167.32865731462925, 167.85170340681364, 168.374749498998, 168.89779559118236, 169.42084168336675, 169.9438877755511, 170.46693386773546, 170.98997995991985, 171.5130260521042, 172.03607214428857, 172.55911823647295, 173.0821643286573, 173.60521042084167, 174.12825651302606, 174.65130260521042, 175.17434869739478, 175.69739478957916, 176.22044088176352, 176.7434869739479, 177.26653306613227, 177.78957915831663, 178.31262525050101, 178.83567134268537, 179.35871743486973, 179.88176352705412, 180.40480961923848, 180.92785571142284, 181.45090180360722, 181.97394789579158, 182.49699398797594, 183.02004008016033, 183.5430861723447, 184.06613226452905, 184.58917835671343, 185.1122244488978, 185.63527054108218, 186.15831663326654, 186.6813627254509, 187.20440881763528, 187.72745490981964, 188.250501002004, 188.7735470941884, 189.29659318637275, 189.8196392785571, 190.3426853707415, 190.86573146292585, 191.3887775551102, 191.9118236472946, 192.43486973947896, 192.9579158316633, 193.4809619238477, 194.00400801603206, 194.52705410821645, 195.0501002004008, 195.57314629258516, 196.09619238476955, 196.6192384769539, 197.14228456913827, 197.66533066132266, 198.18837675350701, 198.71142284569137, 199.23446893787576, 199.75751503006012, 200.28056112224448, 200.80360721442887, 201.32665330661322, 201.84969939879758, 202.37274549098197, 202.89579158316633, 203.4188376753507, 203.94188376753507, 204.46492985971943, 204.98797595190382, 205.51102204408818, 206.03406813627254, 206.55711422845692, 207.08016032064128, 207.60320641282564, 208.12625250501003, 208.6492985971944, 209.17234468937875, 209.69539078156313, 210.2184368737475, 210.74148296593185, 211.26452905811624, 211.7875751503006, 212.31062124248496, 212.83366733466934, 213.3567134268537, 213.8797595190381, 214.40280561122245, 214.9258517034068, 215.4488977955912, 215.97194388777555, 216.4949899799599, 217.0180360721443, 217.54108216432866, 218.06412825651302, 218.5871743486974, 219.11022044088176, 219.63326653306612, 220.1563126252505, 220.67935871743487, 221.20240480961922, 221.7254509018036, 222.24849699398797, 222.77154308617236, 223.29458917835672, 223.81763527054107, 224.34068136272546, 224.86372745490982, 225.38677354709418, 225.90981963927857, 226.43286573146293, 226.95591182364728, 227.47895791583167, 228.00200400801603, 228.5250501002004, 229.04809619238478, 229.57114228456913, 230.0941883767535, 230.61723446893788, 231.14028056112224, 231.66332665330663, 232.18637274549098, 232.70941883767534, 233.23246492985973, 233.7555110220441, 234.27855711422845, 234.80160320641284, 235.3246492985972, 235.84769539078155, 236.37074148296594, 236.8937875751503, 237.41683366733466, 237.93987975951904, 238.4629258517034, 238.98597194388776, 239.50901803607215, 240.0320641282565, 240.5551102204409, 241.07815631262525, 241.6012024048096, 242.124248496994, 242.64729458917836, 243.17034068136272, 243.6933867735471, 244.21643286573146, 244.73947895791582, 245.2625250501002, 245.78557114228457, 246.30861723446893, 246.8316633266533, 247.35470941883767, 247.87775551102203, 248.40080160320642, 248.92384769539078, 249.44689378757516, 249.96993987975952, 250.49298597194388, 251.01603206412827, 251.53907815631263, 252.06212424849699, 252.58517034068137, 253.10821643286573, 253.6312625250501, 254.15430861723448, 254.67735470941884, 255.2004008016032, 255.72344689378758, 256.24649298597194, 256.7695390781563, 257.29258517034066, 257.8156312625251, 258.33867735470943, 258.8617234468938, 259.38476953907815, 259.9078156312625, 260.43086172344687, 260.9539078156313, 261.47695390781564, 262.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_71621d2a176d48c886be1b087b3a6e34.x = d3.scale.linear()
              .domain([1.0, 262.0])
              .range([0, 400]);

    color_map_71621d2a176d48c886be1b087b3a6e34.legend = L.control({position: 'topright'});
    color_map_71621d2a176d48c886be1b087b3a6e34.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_71621d2a176d48c886be1b087b3a6e34.legend.addTo(map_db77b39629b64791bdc8fed13fd018f4);

    color_map_71621d2a176d48c886be1b087b3a6e34.xAxis = d3.svg.axis()
        .scale(color_map_71621d2a176d48c886be1b087b3a6e34.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 44.5, 88.0, 131.5, 175.0, 218.5, 262.0]);

    color_map_71621d2a176d48c886be1b087b3a6e34.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_71621d2a176d48c886be1b087b3a6e34.g = color_map_71621d2a176d48c886be1b087b3a6e34.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_71621d2a176d48c886be1b087b3a6e34.g.selectAll("rect")
        .data(color_map_71621d2a176d48c886be1b087b3a6e34.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_71621d2a176d48c886be1b087b3a6e34.x(color_map_71621d2a176d48c886be1b087b3a6e34.color.domain()[i - 1]) : color_map_71621d2a176d48c886be1b087b3a6e34.x.range()[0],
            x1: i < color_map_71621d2a176d48c886be1b087b3a6e34.color.domain().length ? color_map_71621d2a176d48c886be1b087b3a6e34.x(color_map_71621d2a176d48c886be1b087b3a6e34.color.domain()[i]) : color_map_71621d2a176d48c886be1b087b3a6e34.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_71621d2a176d48c886be1b087b3a6e34.g.call(color_map_71621d2a176d48c886be1b087b3a6e34.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('33_50_JESSICA CRISTINA MIRANDA SANTOS');

