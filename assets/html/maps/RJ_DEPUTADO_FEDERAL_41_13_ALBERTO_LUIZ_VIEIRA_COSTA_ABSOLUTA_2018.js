    
            var map_d79ae8a60bea45eda8ad20346b482d62 = L.map(
                "map_d79ae8a60bea45eda8ad20346b482d62",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_2b13eaf4ed4941c392842307de411eb3 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_d79ae8a60bea45eda8ad20346b482d62);
        
    
            var choropleth_1ec616eba3ea4d4a85bef4b88161e285 = L.featureGroup(
                {}
            ).addTo(map_d79ae8a60bea45eda8ad20346b482d62);
        
    
        function geo_json_d3df52d122d6433ea3e26443d2fcf2f6_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 428: case 438: case 353: case 393: case 423: case 431: case 404: case 359: case 348: case 354: case 349: case 342: case 336: case 460: case 475: case 357: case 481: case 479: case 366: case 451: case 402: case 341: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 381: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_d3df52d122d6433ea3e26443d2fcf2f6_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_d3df52d122d6433ea3e26443d2fcf2f6 = L.geoJson(null, {
                onEachFeature: geo_json_d3df52d122d6433ea3e26443d2fcf2f6_onEachFeature,
            
                style: geo_json_d3df52d122d6433ea3e26443d2fcf2f6_styler,
        });

        function geo_json_d3df52d122d6433ea3e26443d2fcf2f6_add (data) {
            geo_json_d3df52d122d6433ea3e26443d2fcf2f6
                .addData(data)
                .addTo(choropleth_1ec616eba3ea4d4a85bef4b88161e285);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_d3df52d122d6433ea3e26443d2fcf2f6_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_a0c052ec555248809f018d562e20c940 = {};

    
    color_map_a0c052ec555248809f018d562e20c940.color = d3.scale.threshold()
              .domain([0.0, 0.5571142284569138, 1.1142284569138277, 1.6713426853707414, 2.2284569138276553, 2.785571142284569, 3.3426853707414828, 3.899799599198397, 4.456913827655311, 5.014028056112225, 5.571142284569138, 6.128256513026052, 6.6853707414829655, 7.24248496993988, 7.799599198396794, 8.356713426853707, 8.913827655310621, 9.470941883767535, 10.02805611222445, 10.585170340681362, 11.142284569138276, 11.69939879759519, 12.256513026052104, 12.813627254509019, 13.370741482965931, 13.927855711422845, 14.48496993987976, 15.042084168336673, 15.599198396793588, 16.1563126252505, 16.713426853707414, 17.27054108216433, 17.827655310621243, 18.384769539078157, 18.94188376753507, 19.498997995991985, 20.0561122244489, 20.613226452905813, 21.170340681362724, 21.727454909819638, 22.284569138276552, 22.841683366733466, 23.39879759519038, 23.955911823647295, 24.51302605210421, 25.070140280561123, 25.627254509018037, 26.18436873747495, 26.741482965931862, 27.298597194388776, 27.85571142284569, 28.412825651302605, 28.96993987975952, 29.527054108216433, 30.084168336673347, 30.64128256513026, 31.198396793587175, 31.75551102204409, 32.312625250501, 32.86973947895792, 33.42685370741483, 33.983967935871746, 34.54108216432866, 35.098196392785574, 35.655310621242485, 36.212424849699396, 36.76953907815631, 37.326653306613224, 37.88376753507014, 38.44088176352705, 38.99799599198397, 39.55511022044088, 40.1122244488978, 40.66933867735471, 41.22645290581163, 41.78356713426854, 42.34068136272545, 42.897795591182366, 43.454909819639276, 44.012024048096194, 44.569138276553105, 45.12625250501002, 45.68336673346693, 46.24048096192385, 46.79759519038076, 47.35470941883767, 47.91182364729459, 48.4689378757515, 49.02605210420842, 49.58316633266533, 50.140280561122246, 50.69739478957916, 51.254509018036075, 51.811623246492985, 52.3687374749499, 52.92585170340681, 53.482965931863724, 54.04008016032064, 54.59719438877755, 55.15430861723447, 55.71142284569138, 56.2685370741483, 56.82565130260521, 57.38276553106213, 57.93987975951904, 58.496993987975955, 59.054108216432866, 59.611222444889776, 60.168336673346694, 60.725450901803605, 61.28256513026052, 61.83967935871743, 62.39679358717435, 62.95390781563126, 63.51102204408818, 64.06813627254509, 64.625250501002, 65.18236472945891, 65.73947895791584, 66.29659318637275, 66.85370741482966, 67.41082164328657, 67.96793587174349, 68.5250501002004, 69.08216432865731, 69.63927855711422, 70.19639278557115, 70.75350701402806, 71.31062124248497, 71.86773547094188, 72.42484969939879, 72.98196392785572, 73.53907815631263, 74.09619238476954, 74.65330661322645, 75.21042084168337, 75.76753507014028, 76.3246492985972, 76.8817635270541, 77.43887775551102, 77.99599198396794, 78.55310621242485, 79.11022044088176, 79.66733466933867, 80.2244488977956, 80.78156312625251, 81.33867735470942, 81.89579158316633, 82.45290581162325, 83.01002004008016, 83.56713426853707, 84.12424849699399, 84.6813627254509, 85.23847695390782, 85.79559118236473, 86.35270541082164, 86.90981963927855, 87.46693386773548, 88.02404809619239, 88.5811623246493, 89.13827655310621, 89.69539078156312, 90.25250501002004, 90.80961923847696, 91.36673346693387, 91.92384769539078, 92.4809619238477, 93.03807615230461, 93.59519038076152, 94.15230460921843, 94.70941883767534, 95.26653306613227, 95.82364729458918, 96.38076152304609, 96.937875751503, 97.49498997995993, 98.05210420841684, 98.60921843687375, 99.16633266533066, 99.72344689378758, 100.28056112224449, 100.8376753507014, 101.39478957915831, 101.95190380761522, 102.50901803607215, 103.06613226452906, 103.62324649298597, 104.18036072144288, 104.7374749498998, 105.29458917835672, 105.85170340681363, 106.40881763527054, 106.96593186372745, 107.52304609218437, 108.08016032064128, 108.6372745490982, 109.1943887775551, 109.75150300601203, 110.30861723446894, 110.86573146292585, 111.42284569138276, 111.97995991983969, 112.5370741482966, 113.09418837675351, 113.65130260521042, 114.20841683366733, 114.76553106212425, 115.32264529058116, 115.87975951903807, 116.43687374749499, 116.99398797595191, 117.55110220440882, 118.10821643286573, 118.66533066132264, 119.22244488977955, 119.77955911823648, 120.33667334669339, 120.8937875751503, 121.45090180360721, 122.00801603206413, 122.56513026052104, 123.12224448897796, 123.67935871743487, 124.23647294589178, 124.7935871743487, 125.35070140280561, 125.90781563126252, 126.46492985971943, 127.02204408817636, 127.57915831663327, 128.13627254509018, 128.6933867735471, 129.250501002004, 129.80761523046093, 130.36472945891782, 130.92184368737475, 131.47895791583167, 132.03607214428857, 132.5931863727455, 133.15030060120242, 133.7074148296593, 134.26452905811624, 134.82164328657313, 135.37875751503006, 135.93587174348698, 136.49298597194388, 137.0501002004008, 137.6072144288577, 138.16432865731463, 138.72144288577155, 139.27855711422845, 139.83567134268537, 140.3927855711423, 140.9498997995992, 141.50701402805612, 142.06412825651302, 142.62124248496994, 143.17835671342687, 143.73547094188376, 144.2925851703407, 144.84969939879758, 145.4068136272545, 145.96392785571143, 146.52104208416833, 147.07815631262525, 147.63527054108218, 148.19238476953907, 148.749498997996, 149.3066132264529, 149.86372745490982, 150.42084168336675, 150.97795591182364, 151.53507014028057, 152.09218436873746, 152.6492985971944, 153.2064128256513, 153.7635270541082, 154.32064128256513, 154.87775551102203, 155.43486973947896, 155.99198396793588, 156.54909819639278, 157.1062124248497, 157.66332665330663, 158.22044088176352, 158.77755511022045, 159.33466933867734, 159.89178356713427, 160.4488977955912, 161.0060120240481, 161.56312625250501, 162.1202404809619, 162.67735470941884, 163.23446893787576, 163.79158316633266, 164.34869739478958, 164.9058116232465, 165.4629258517034, 166.02004008016033, 166.57715430861722, 167.13426853707415, 167.69138276553107, 168.24849699398797, 168.8056112224449, 169.3627254509018, 169.91983967935872, 170.47695390781564, 171.03406813627254, 171.59118236472946, 172.14829659318636, 172.70541082164328, 173.2625250501002, 173.8196392785571, 174.37675350701403, 174.93386773547095, 175.49098196392785, 176.04809619238478, 176.60521042084167, 177.1623246492986, 177.71943887775552, 178.27655310621242, 178.83366733466934, 179.39078156312624, 179.94789579158316, 180.5050100200401, 181.06212424849699, 181.6192384769539, 182.17635270541084, 182.73346693386773, 183.29058116232466, 183.84769539078155, 184.40480961923848, 184.9619238476954, 185.5190380761523, 186.07615230460922, 186.63326653306612, 187.19038076152304, 187.74749498997997, 188.30460921843687, 188.8617234468938, 189.4188376753507, 189.9759519038076, 190.53306613226454, 191.09018036072143, 191.64729458917836, 192.20440881763528, 192.76152304609218, 193.3186372745491, 193.875751503006, 194.43286573146293, 194.98997995991985, 195.54709418837675, 196.10420841683367, 196.66132264529057, 197.2184368737475, 197.77555110220442, 198.3326653306613, 198.88977955911824, 199.44689378757516, 200.00400801603206, 200.56112224448898, 201.11823647294588, 201.6753507014028, 202.23246492985973, 202.78957915831663, 203.34669338677355, 203.90380761523045, 204.46092184368737, 205.0180360721443, 205.5751503006012, 206.13226452905812, 206.68937875751504, 207.24649298597194, 207.80360721442887, 208.36072144288576, 208.9178356713427, 209.4749498997996, 210.0320641282565, 210.58917835671343, 211.14629258517033, 211.70340681362725, 212.26052104208418, 212.81763527054107, 213.374749498998, 213.9318637274549, 214.48897795591182, 215.04609218436875, 215.60320641282564, 216.16032064128257, 216.7174348697395, 217.2745490981964, 217.8316633266533, 218.3887775551102, 218.94589178356713, 219.50300601202406, 220.06012024048096, 220.61723446893788, 221.17434869739478, 221.7314629258517, 222.28857715430863, 222.84569138276552, 223.40280561122245, 223.95991983967937, 224.51703406813627, 225.0741482965932, 225.6312625250501, 226.18837675350701, 226.74549098196394, 227.30260521042084, 227.85971943887776, 228.41683366733466, 228.97394789579158, 229.5310621242485, 230.0881763527054, 230.64529058116233, 231.20240480961922, 231.75951903807615, 232.31663326653307, 232.87374749498997, 233.4308617234469, 233.98797595190382, 234.54509018036072, 235.10220440881764, 235.65931863727454, 236.21643286573146, 236.7735470941884, 237.33066132264528, 237.8877755511022, 238.4448897795591, 239.00200400801603, 239.55911823647295, 240.11623246492985, 240.67334669338678, 241.2304609218437, 241.7875751503006, 242.34468937875752, 242.90180360721442, 243.45891783567134, 244.01603206412827, 244.57314629258516, 245.1302605210421, 245.68737474949899, 246.2444889779559, 246.80160320641284, 247.35871743486973, 247.91583166332666, 248.47294589178355, 249.03006012024048, 249.5871743486974, 250.1442885771543, 250.70140280561122, 251.25851703406815, 251.81563126252505, 252.37274549098197, 252.92985971943887, 253.4869739478958, 254.04408817635272, 254.6012024048096, 255.15831663326654, 255.71543086172343, 256.27254509018036, 256.82965931863725, 257.3867735470942, 257.9438877755511, 258.501002004008, 259.05811623246495, 259.61523046092185, 260.17234468937875, 260.72945891783564, 261.2865731462926, 261.8436873747495, 262.4008016032064, 262.95791583166334, 263.51503006012024, 264.07214428857714, 264.6292585170341, 265.186372745491, 265.7434869739479, 266.30060120240483, 266.85771543086173, 267.4148296593186, 267.9719438877755, 268.5290581162325, 269.0861723446894, 269.64328657314627, 270.2004008016032, 270.7575150300601, 271.314629258517, 271.87174348697397, 272.42885771543087, 272.98597194388776, 273.5430861723447, 274.1002004008016, 274.6573146292585, 275.2144288577154, 275.77154308617236, 276.32865731462925, 276.88577154308615, 277.4428857715431, 278.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_a0c052ec555248809f018d562e20c940.x = d3.scale.linear()
              .domain([0.0, 278.0])
              .range([0, 400]);

    color_map_a0c052ec555248809f018d562e20c940.legend = L.control({position: 'topright'});
    color_map_a0c052ec555248809f018d562e20c940.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_a0c052ec555248809f018d562e20c940.legend.addTo(map_d79ae8a60bea45eda8ad20346b482d62);

    color_map_a0c052ec555248809f018d562e20c940.xAxis = d3.svg.axis()
        .scale(color_map_a0c052ec555248809f018d562e20c940.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0.0, 46.333333333333336, 92.66666666666667, 139.0, 185.33333333333334, 231.66666666666669, 278.0]);

    color_map_a0c052ec555248809f018d562e20c940.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_a0c052ec555248809f018d562e20c940.g = color_map_a0c052ec555248809f018d562e20c940.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_a0c052ec555248809f018d562e20c940.g.selectAll("rect")
        .data(color_map_a0c052ec555248809f018d562e20c940.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_a0c052ec555248809f018d562e20c940.x(color_map_a0c052ec555248809f018d562e20c940.color.domain()[i - 1]) : color_map_a0c052ec555248809f018d562e20c940.x.range()[0],
            x1: i < color_map_a0c052ec555248809f018d562e20c940.color.domain().length ? color_map_a0c052ec555248809f018d562e20c940.x(color_map_a0c052ec555248809f018d562e20c940.color.domain()[i]) : color_map_a0c052ec555248809f018d562e20c940.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_a0c052ec555248809f018d562e20c940.g.call(color_map_a0c052ec555248809f018d562e20c940.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('41_13_ALBERTO LUIZ VIEIRA COSTA');

