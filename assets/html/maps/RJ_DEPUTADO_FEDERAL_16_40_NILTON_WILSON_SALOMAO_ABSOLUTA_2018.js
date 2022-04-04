    
            var map_0183eaabd8044095970bfebb176ddbc9 = L.map(
                "map_0183eaabd8044095970bfebb176ddbc9",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_bd1c22a189c54847a5545eab67c66af4 = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_0183eaabd8044095970bfebb176ddbc9);
        
    
            var choropleth_2139eaf8064348238ecc3779b49c652c = L.featureGroup(
                {}
            ).addTo(map_0183eaabd8044095970bfebb176ddbc9);
        
    
        function geo_json_d75f5ec4a7e1472ab899d60cf8e78935_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 421: case 443: case 434: case 428: case 452: case 423: case 431: case 404: case 394: case 348: case 349: case 342: case 336: case 358: case 367: case 460: case 475: case 357: case 481: case 479: case 391: case 465: case 512: case 406: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 448: case 449: case 447: case 473: case 455: case 472: case 436: case 446: case 444: case 408: case 346: case 433: case 477: case 510: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 466: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 442: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 419: case 430: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 471: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_d75f5ec4a7e1472ab899d60cf8e78935_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_d75f5ec4a7e1472ab899d60cf8e78935 = L.geoJson(null, {
                onEachFeature: geo_json_d75f5ec4a7e1472ab899d60cf8e78935_onEachFeature,
            
                style: geo_json_d75f5ec4a7e1472ab899d60cf8e78935_styler,
        });

        function geo_json_d75f5ec4a7e1472ab899d60cf8e78935_add (data) {
            geo_json_d75f5ec4a7e1472ab899d60cf8e78935
                .addData(data)
                .addTo(choropleth_2139eaf8064348238ecc3779b49c652c);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_d75f5ec4a7e1472ab899d60cf8e78935_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a = {};

    
    color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.color = d3.scale.threshold()
              .domain([1.0, 1.370741482965932, 1.7414829659318638, 2.1122244488977957, 2.4829659318637276, 2.8537074148296595, 3.224448897795591, 3.595190380761523, 3.9659318637274548, 4.336673346693386, 4.707414829659319, 5.078156312625251, 5.448897795591182, 5.819639278557114, 6.190380761523046, 6.561122244488978, 6.9318637274549095, 7.302605210420841, 7.673346693386773, 8.044088176352705, 8.414829659318638, 8.785571142284569, 9.156312625250502, 9.527054108216433, 9.897795591182364, 10.268537074148297, 10.639278557114228, 11.01002004008016, 11.380761523046091, 11.751503006012024, 12.122244488977955, 12.492985971943888, 12.863727454909819, 13.234468937875752, 13.605210420841683, 13.975951903807616, 14.346693386773547, 14.71743486973948, 15.08817635270541, 15.458917835671343, 15.829659318637274, 16.20040080160321, 16.571142284569138, 16.94188376753507, 17.312625250501004, 17.683366733466933, 18.054108216432866, 18.4248496993988, 18.795591182364728, 19.16633266533066, 19.537074148296593, 19.907815631262526, 20.278557114228455, 20.649298597194388, 21.02004008016032, 21.390781563126254, 21.761523046092183, 22.132264529058116, 22.50300601202405, 22.87374749498998, 23.24448897795591, 23.615230460921843, 23.985971943887776, 24.35671342685371, 24.727454909819638, 25.09819639278557, 25.468937875751504, 25.839679358717436, 26.210420841683366, 26.5811623246493, 26.95190380761523, 27.322645290581164, 27.693386773547093, 28.064128256513026, 28.43486973947896, 28.805611222444888, 29.17635270541082, 29.547094188376754, 29.917835671342687, 30.288577154308616, 30.65931863727455, 31.03006012024048, 31.400801603206414, 31.771543086172343, 32.142284569138276, 32.51302605210421, 32.88376753507014, 33.254509018036075, 33.62525050100201, 33.99599198396793, 34.366733466933866, 34.7374749498998, 35.10821643286573, 35.478957915831664, 35.8496993987976, 36.22044088176353, 36.591182364729455, 36.96192384769539, 37.33266533066132, 37.703406813627254, 38.07414829659319, 38.44488977955912, 38.81563126252505, 39.186372745490985, 39.55711422845691, 39.92785571142284, 40.298597194388776, 40.66933867735471, 41.04008016032064, 41.410821643286575, 41.78156312625251, 42.15230460921844, 42.523046092184366, 42.8937875751503, 43.26452905811623, 43.635270541082164, 44.0060120240481, 44.37675350701403, 44.74749498997996, 45.11823647294589, 45.48897795591182, 45.859719438877754, 46.23046092184369, 46.60120240480962, 46.97194388777555, 47.342685370741485, 47.71342685370742, 48.08416833667334, 48.454909819639276, 48.82565130260521, 49.19639278557114, 49.567134268537075, 49.93787575150301, 50.30861723446894, 50.67935871743487, 51.0501002004008, 51.42084168336673, 51.791583166332664, 52.1623246492986, 52.53306613226453, 52.90380761523046, 53.274549098196395, 53.64529058116233, 54.016032064128254, 54.38677354709419, 54.75751503006012, 55.12825651302605, 55.498997995991985, 55.86973947895792, 56.24048096192385, 56.611222444889776, 56.98196392785571, 57.35270541082164, 57.723446893787575, 58.09418837675351, 58.46492985971944, 58.83567134268537, 59.206412825651306, 59.57715430861723, 59.947895791583164, 60.3186372745491, 60.68937875751503, 61.06012024048096, 61.430861723446895, 61.80160320641283, 62.17234468937876, 62.54308617234469, 62.91382765531062, 63.28456913827655, 63.655310621242485, 64.02605210420842, 64.39679358717436, 64.76753507014028, 65.13827655310621, 65.50901803607215, 65.87975951903807, 66.25050100200401, 66.62124248496994, 66.99198396793587, 67.3627254509018, 67.73346693386773, 68.10420841683367, 68.4749498997996, 68.84569138276554, 69.21643286573146, 69.58717434869739, 69.95791583166333, 70.32865731462925, 70.6993987975952, 71.07014028056112, 71.44088176352706, 71.81162324649299, 72.18236472945891, 72.55310621242485, 72.92384769539078, 73.29458917835672, 73.66533066132264, 74.03607214428858, 74.40681362725451, 74.77755511022045, 75.14829659318637, 75.5190380761523, 75.88977955911824, 76.26052104208416, 76.6312625250501, 77.00200400801603, 77.37274549098197, 77.7434869739479, 78.11422845691382, 78.48496993987976, 78.85571142284569, 79.22645290581163, 79.59719438877755, 79.96793587174349, 80.33867735470942, 80.70941883767534, 81.08016032064128, 81.45090180360721, 81.82164328657315, 82.19238476953907, 82.56312625250501, 82.93386773547094, 83.30460921843688, 83.6753507014028, 84.04609218436873, 84.41683366733467, 84.7875751503006, 85.15831663326654, 85.52905811623246, 85.8997995991984, 86.27054108216433, 86.64128256513025, 87.0120240480962, 87.38276553106212, 87.75350701402806, 88.12424849699399, 88.49498997995993, 88.86573146292585, 89.23647294589178, 89.60721442885772, 89.97795591182364, 90.34869739478958, 90.71943887775551, 91.09018036072145, 91.46092184368737, 91.83166332665331, 92.20240480961924, 92.57314629258516, 92.9438877755511, 93.31462925851703, 93.68537074148297, 94.0561122244489, 94.42685370741484, 94.79759519038076, 95.16833667334669, 95.53907815631263, 95.90981963927855, 96.28056112224449, 96.65130260521042, 97.02204408817636, 97.39278557114228, 97.76352705410822, 98.13426853707415, 98.50501002004007, 98.87575150300601, 99.24649298597194, 99.61723446893788, 99.9879759519038, 100.35871743486975, 100.72945891783567, 101.1002004008016, 101.47094188376754, 101.84168336673346, 102.2124248496994, 102.58316633266533, 102.95390781563127, 103.3246492985972, 103.69539078156312, 104.06613226452906, 104.43687374749499, 104.80761523046093, 105.17835671342685, 105.54909819639279, 105.91983967935872, 106.29058116232466, 106.66132264529058, 107.03206412825651, 107.40280561122245, 107.77354709418837, 108.14428857715431, 108.51503006012024, 108.88577154308618, 109.2565130260521, 109.62725450901803, 109.99799599198397, 110.3687374749499, 110.73947895791584, 111.11022044088176, 111.4809619238477, 111.85170340681363, 112.22244488977955, 112.59318637274549, 112.96392785571142, 113.33466933867736, 113.70541082164328, 114.07615230460922, 114.44689378757515, 114.81763527054109, 115.18837675350701, 115.55911823647294, 115.92985971943888, 116.3006012024048, 116.67134268537075, 117.04208416833667, 117.41282565130261, 117.78356713426854, 118.15430861723446, 118.5250501002004, 118.89579158316633, 119.26653306613227, 119.6372745490982, 120.00801603206413, 120.37875751503006, 120.74949899799599, 121.12024048096193, 121.49098196392785, 121.86172344689379, 122.23246492985972, 122.60320641282566, 122.97394789579158, 123.34468937875752, 123.71543086172345, 124.08617234468937, 124.45691382765531, 124.82765531062124, 125.19839679358718, 125.5691382765531, 125.93987975951904, 126.31062124248497, 126.6813627254509, 127.05210420841684, 127.42284569138276, 127.7935871743487, 128.16432865731463, 128.53507014028057, 128.9058116232465, 129.27655310621242, 129.64729458917836, 130.0180360721443, 130.3887775551102, 130.75951903807615, 131.1302605210421, 131.50100200400803, 131.87174348697394, 132.24248496993988, 132.61322645290582, 132.98396793587173, 133.35470941883767, 133.7254509018036, 134.09619238476955, 134.46693386773546, 134.8376753507014, 135.20841683366734, 135.57915831663325, 135.9498997995992, 136.32064128256513, 136.69138276553107, 137.06212424849699, 137.43286573146293, 137.80360721442887, 138.17434869739478, 138.54509018036072, 138.91583166332666, 139.2865731462926, 139.6573146292585, 140.02805611222445, 140.3987975951904, 140.7695390781563, 141.14028056112224, 141.51102204408818, 141.88176352705412, 142.25250501002003, 142.62324649298597, 142.9939879759519, 143.36472945891782, 143.73547094188376, 144.1062124248497, 144.47695390781564, 144.84769539078155, 145.2184368737475, 145.58917835671343, 145.95991983967937, 146.33066132264528, 146.70140280561122, 147.07214428857716, 147.44288577154308, 147.81362725450902, 148.18436873747495, 148.5551102204409, 148.9258517034068, 149.29659318637275, 149.6673346693387, 150.0380761523046, 150.40881763527054, 150.77955911823648, 151.15030060120242, 151.52104208416833, 151.89178356713427, 152.2625250501002, 152.63326653306612, 153.00400801603206, 153.374749498998, 153.74549098196394, 154.11623246492985, 154.4869739478958, 154.85771543086173, 155.22845691382764, 155.59919839679358, 155.96993987975952, 156.34068136272546, 156.71142284569137, 157.0821643286573, 157.45290581162325, 157.82364729458916, 158.1943887775551, 158.56513026052104, 158.93587174348698, 159.3066132264529, 159.67735470941884, 160.04809619238478, 160.4188376753507, 160.78957915831663, 161.16032064128257, 161.5310621242485, 161.90180360721442, 162.27254509018036, 162.6432865731463, 163.01402805611224, 163.38476953907815, 163.7555110220441, 164.12625250501003, 164.49699398797594, 164.86773547094188, 165.23847695390782, 165.60921843687376, 165.97995991983967, 166.3507014028056, 166.72144288577155, 167.09218436873746, 167.4629258517034, 167.83366733466934, 168.20440881763528, 168.5751503006012, 168.94589178356713, 169.31663326653307, 169.68737474949899, 170.05811623246493, 170.42885771543087, 170.7995991983968, 171.17034068136272, 171.54108216432866, 171.9118236472946, 172.2825651302605, 172.65330661322645, 173.0240480961924, 173.39478957915833, 173.76553106212424, 174.13627254509018, 174.50701402805612, 174.87775551102203, 175.24849699398797, 175.6192384769539, 175.98997995991985, 176.36072144288576, 176.7314629258517, 177.10220440881764, 177.47294589178355, 177.8436873747495, 178.21442885771543, 178.58517034068137, 178.95591182364728, 179.32665330661322, 179.69739478957916, 180.0681362725451, 180.43887775551102, 180.80961923847696, 181.1803607214429, 181.5511022044088, 181.92184368737475, 182.2925851703407, 182.66332665330663, 183.03406813627254, 183.40480961923848, 183.77555110220442, 184.14629258517033, 184.51703406813627, 184.8877755511022, 185.25851703406815, 185.62925851703406, 186.0])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.x = d3.scale.linear()
              .domain([1.0, 186.0])
              .range([0, 400]);

    color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.legend = L.control({position: 'topright'});
    color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.legend.addTo(map_0183eaabd8044095970bfebb176ddbc9);

    color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.xAxis = d3.svg.axis()
        .scale(color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.x)
        .orient("top")
        .tickSize(1)
        .tickValues([1.0, 31.833333333333332, 62.666666666666664, 93.5, 124.33333333333333, 155.16666666666666, 186.0]);

    color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.g = color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.g.selectAll("rect")
        .data(color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.x(color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.color.domain()[i - 1]) : color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.x.range()[0],
            x1: i < color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.color.domain().length ? color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.x(color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.color.domain()[i]) : color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.g.call(color_map_ee0b3875c7d24f6a9fe7ec62eb63f80a.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('16_40_NILTON WILSON SALOMAO');
