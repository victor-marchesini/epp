    
            var map_e79b0177d85a4a11856d22450b390274 = L.map(
                "map_e79b0177d85a4a11856d22450b390274",
                {
                    center: [-22.9, -43.4],
                    crs: L.CRS.EPSG3857,
                    zoom: 11,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_825c5c643cf246c78565114f3b51a1ef = L.tileLayer(
                "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
                {"attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_e79b0177d85a4a11856d22450b390274);
        
    
            var choropleth_a0777bdaf89c4e03a742aa10000885aa = L.featureGroup(
                {}
            ).addTo(map_e79b0177d85a4a11856d22450b390274);
        
    
        function geo_json_562d206d57a543e48a259d7e443616a3_styler(feature) {
            switch(feature.properties.OBJECTID) {
                case 420: case 443: case 431: case 349: case 342: case 336: case 460: case 475: case 481: case 479: case 391: case 480: case 512: case 407: case 376: case 365: case 413: 
                    return {"color": "black", "fillColor": "gray", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 403: case 459: case 463: case 454: case 433: case 445: case 430: case 429: case 409: 
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                case 457: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.8, "opacity": 0.2, "weight": 1};
            }
        }

        function geo_json_562d206d57a543e48a259d7e443616a3_onEachFeature(feature, layer) {
            layer.on({
            });
        };
        var geo_json_562d206d57a543e48a259d7e443616a3 = L.geoJson(null, {
                onEachFeature: geo_json_562d206d57a543e48a259d7e443616a3_onEachFeature,
            
                style: geo_json_562d206d57a543e48a259d7e443616a3_styler,
        });

        function geo_json_562d206d57a543e48a259d7e443616a3_add (data) {
            geo_json_562d206d57a543e48a259d7e443616a3
                .addData(data)
                .addTo(choropleth_a0777bdaf89c4e03a742aa10000885aa);
        }

        function load_geo_json(file_path) {
            fetch(file_path)
            .then(response => response.text())
            .then(data => {
              const obj = JSON.parse(data);
              geo_json_562d206d57a543e48a259d7e443616a3_add(obj);
            })
          }
            const file_path ='/epp/assets/html/geo_json_coords.json';
            load_geo_json(file_path);
            

        
    
    var color_map_fba417478ea944809b099a9b10a83c9c = {};

    
    color_map_fba417478ea944809b099a9b10a83c9c.color = d3.scale.threshold()
              .domain([9.330969487729775e-05, 0.0001340406280649183, 0.00017477156125253885, 0.00021550249444015945, 0.00025623342762778, 0.00029696436081540055, 0.00033769529400302115, 0.00037842622719064175, 0.00041915716037826224, 0.0004598880935658828, 0.0005006190267535034, 0.0005413499599411239, 0.0005820808931287445, 0.000622811826316365, 0.0006635427595039857, 0.0007042736926916062, 0.0007450046258792267, 0.0007857355590668473, 0.0008264664922544677, 0.0008671974254420885, 0.000907928358629709, 0.0009486592918173295, 0.0009893902250049501, 0.0010301211581925707, 0.0010708520913801913, 0.0011115830245678117, 0.0011523139577554323, 0.0011930448909430531, 0.0012337758241306737, 0.0012745067573182941, 0.0013152376905059147, 0.0013559686236935353, 0.0013966995568811557, 0.0014374304900687763, 0.001478161423256397, 0.0015188923564440175, 0.001559623289631638, 0.0016003542228192585, 0.0016410851560068793, 0.0016818160891945, 0.0017225470223821203, 0.001763277955569741, 0.0018040088887573615, 0.001844739821944982, 0.0018854707551326025, 0.001926201688320223, 0.0019669326215078437, 0.002007663554695464, 0.002048394487883085, 0.0020891254210707055, 0.0021298563542583256, 0.0021705872874459462, 0.002211318220633567, 0.0022520491538211874, 0.0022927800870088085, 0.002333511020196429, 0.0023742419533840497, 0.00241497288657167, 0.0024557038197592904, 0.002496434752946911, 0.0025371656861345316, 0.0025778966193221522, 0.002618627552509773, 0.0026593584856973934, 0.0027000894188850136, 0.002740820352072634, 0.002781551285260255, 0.0028222822184478754, 0.002863013151635496, 0.0029037440848231166, 0.002944475018010737, 0.002985205951198358, 0.003025936884385978, 0.0030666678175735986, 0.003107398750761219, 0.00314812968394884, 0.003188860617136461, 0.0032295915503240814, 0.003270322483511702, 0.003311053416699322, 0.0033517843498869428, 0.0033925152830745634, 0.003433246216262184, 0.0034739771494498046, 0.003514708082637425, 0.0035554390158250458, 0.0035961699490126664, 0.0036369008822002865, 0.003677631815387907, 0.0037183627485755277, 0.0037590936817631483, 0.003799824614950769, 0.0038405555481383895, 0.00388128648132601, 0.00392201741451363, 0.003962748347701251, 0.004003479280888872, 0.004044210214076493, 0.004084941147264113, 0.004125672080451733, 0.0041664030136393535, 0.0042071339468269745, 0.004247864880014595, 0.004288595813202216, 0.004329326746389836, 0.004370057679577457, 0.004410788612765077, 0.004451519545952698, 0.004492250479140319, 0.004532981412327939, 0.00457371234551556, 0.0046144432787031805, 0.0046551742118908015, 0.004695905145078422, 0.004736636078266042, 0.004777367011453663, 0.004818097944641283, 0.004858828877828904, 0.004899559811016524, 0.004940290744204145, 0.0049810216773917655, 0.005021752610579386, 0.005062483543767007, 0.005103214476954627, 0.005143945410142248, 0.005184676343329868, 0.005225407276517489, 0.005266138209705109, 0.005306869142892729, 0.0053476000760803504, 0.005388331009267971, 0.005429061942455592, 0.005469792875643212, 0.005510523808830833, 0.005551254742018453, 0.005591985675206074, 0.005632716608393694, 0.005673447541581314, 0.005714178474768935, 0.005754909407956556, 0.005795640341144177, 0.005836371274331797, 0.005877102207519418, 0.005917833140707038, 0.005958564073894658, 0.005999295007082279, 0.006040025940269899, 0.00608075687345752, 0.0061214878066451405, 0.006162218739832762, 0.006202949673020383, 0.006243680606208003, 0.006284411539395624, 0.006325142472583244, 0.006365873405770865, 0.006406604338958485, 0.006447335272146106, 0.006488066205333726, 0.0065287971385213465, 0.006569528071708968, 0.006610259004896588, 0.006650989938084209, 0.006691720871271829, 0.00673245180445945, 0.00677318273764707, 0.006813913670834691, 0.006854644604022311, 0.0068953755372099315, 0.0069361064703975525, 0.006976837403585173, 0.007017568336772794, 0.007058299269960414, 0.007099030203148035, 0.007139761136335655, 0.007180492069523275, 0.007221223002710896, 0.0072619539358985165, 0.0073026848690861375, 0.007343415802273758, 0.007384146735461379, 0.007424877668648999, 0.007465608601836619, 0.00750633953502424, 0.00754707046821186, 0.007587801401399481, 0.0076285323345871014, 0.0076692632677747225, 0.007709994200962343, 0.007750725134149963, 0.007791456067337584, 0.007832187000525204, 0.007872917933712824, 0.007913648866900446, 0.007954379800088066, 0.007995110733275688, 0.008035841666463308, 0.008076572599650928, 0.008117303532838549, 0.008158034466026169, 0.008198765399213789, 0.00823949633240141, 0.008280227265589031, 0.008320958198776651, 0.008361689131964271, 0.008402420065151892, 0.008443150998339512, 0.008483881931527134, 0.008524612864714754, 0.008565343797902374, 0.008606074731089994, 0.008646805664277616, 0.008687536597465236, 0.008728267530652856, 0.008768998463840477, 0.008809729397028098, 0.00885046033021572, 0.00889119126340334, 0.00893192219659096, 0.00897265312977858, 0.009013384062966201, 0.009054114996153823, 0.009094845929341443, 0.009135576862529063, 0.009176307795716683, 0.009217038728904305, 0.009257769662091925, 0.009298500595279546, 0.009339231528467166, 0.009379962461654786, 0.009420693394842408, 0.009461424328030028, 0.009502155261217648, 0.009542886194405268, 0.00958361712759289, 0.00962434806078051, 0.00966507899396813, 0.00970580992715575, 0.009746540860343371, 0.009787271793530993, 0.009828002726718613, 0.009868733659906233, 0.009909464593093853, 0.009950195526281473, 0.009990926459469095, 0.010031657392656716, 0.010072388325844336, 0.010113119259031956, 0.010153850192219578, 0.010194581125407198, 0.010235312058594818, 0.010276042991782438, 0.010316773924970058, 0.01035750485815768, 0.0103982357913453, 0.01043896672453292, 0.01047969765772054, 0.010520428590908161, 0.010561159524095783, 0.010601890457283403, 0.010642621390471023, 0.010683352323658643, 0.010724083256846265, 0.010764814190033885, 0.010805545123221506, 0.010846276056409126, 0.010887006989596746, 0.010927737922784368, 0.010968468855971988, 0.011009199789159608, 0.011049930722347228, 0.01109066165553485, 0.01113139258872247, 0.01117212352191009, 0.01121285445509771, 0.011253585388285331, 0.011294316321472953, 0.011335047254660573, 0.011375778187848193, 0.011416509121035813, 0.011457240054223434, 0.011497970987411055, 0.011538701920598676, 0.011579432853786296, 0.011620163786973916, 0.011660894720161538, 0.011701625653349158, 0.011742356586536778, 0.011783087519724398, 0.011823818452912018, 0.01186454938609964, 0.01190528031928726, 0.01194601125247488, 0.011986742185662501, 0.012027473118850121, 0.012068204052037743, 0.012108934985225363, 0.012149665918412983, 0.012190396851600603, 0.012231127784788225, 0.012271858717975847, 0.012312589651163467, 0.012353320584351088, 0.012394051517538708, 0.01243478245072633, 0.01247551338391395, 0.01251624431710157, 0.01255697525028919, 0.012597706183476812, 0.012638437116664432, 0.012679168049852052, 0.012719898983039673, 0.012760629916227293, 0.012801360849414915, 0.012842091782602535, 0.012882822715790155, 0.012923553648977775, 0.012964284582165395, 0.013005015515353017, 0.013045746448540637, 0.013086477381728258, 0.013127208314915878, 0.0131679392481035, 0.01320867018129112, 0.01324940111447874, 0.01329013204766636, 0.01333086298085398, 0.013371593914041602, 0.013412324847229222, 0.013453055780416842, 0.013493786713604463, 0.013534517646792085, 0.013575248579979705, 0.013615979513167325, 0.013656710446354945, 0.013697441379542565, 0.013738172312730187, 0.013778903245917807, 0.013819634179105427, 0.013860365112293048, 0.013901096045480668, 0.01394182697866829, 0.01398255791185591, 0.01402328884504353, 0.01406401977823115, 0.014104750711418772, 0.014145481644606392, 0.014186212577794012, 0.014226943510981633, 0.014267674444169253, 0.014308405377356875, 0.014349136310544495, 0.014389867243732115, 0.014430598176919735, 0.014471329110107357, 0.014512060043294977, 0.014552790976482597, 0.014593521909670218, 0.014634252842857838, 0.01467498377604546, 0.01471571470923308, 0.0147564456424207, 0.01479717657560832, 0.01483790750879594, 0.014878638441983562, 0.014919369375171182, 0.014960100308358803, 0.015000831241546423, 0.015041562174734045, 0.015082293107921665, 0.015123024041109285, 0.015163754974296905, 0.015204485907484525, 0.015245216840672147, 0.015285947773859767, 0.015326678707047387, 0.015367409640235008, 0.015408140573422628, 0.01544887150661025, 0.01548960243979787, 0.01553033337298549, 0.01557106430617311, 0.015611795239360732, 0.01565252617254835, 0.01569325710573597, 0.015733988038923594, 0.015774718972111215, 0.015815449905298835, 0.015856180838486455, 0.01589691177167408, 0.0159376427048617, 0.01597837363804932, 0.01601910457123694, 0.01605983550442456, 0.01610056643761218, 0.0161412973707998, 0.01618202830398742, 0.01622275923717504, 0.01626349017036266, 0.01630422110355028, 0.0163449520367379, 0.01638568296992552, 0.01642641390311314, 0.016467144836300764, 0.016507875769488384, 0.016548606702676005, 0.016589337635863625, 0.016630068569051245, 0.016670799502238865, 0.016711530435426485, 0.016752261368614105, 0.016792992301801726, 0.01683372323498935, 0.01687445416817697, 0.01691518510136459, 0.01695591603455221, 0.01699664696773983, 0.01703737790092745, 0.01707810883411507, 0.01711883976730269, 0.01715957070049031, 0.017200301633677934, 0.017241032566865554, 0.017281763500053175, 0.017322494433240795, 0.017363225366428415, 0.017403956299616035, 0.017444687232803655, 0.01748541816599128, 0.0175261490991789, 0.017566880032366523, 0.017607610965554143, 0.017648341898741763, 0.017689072831929383, 0.017729803765117003, 0.017770534698304623, 0.017811265631492244, 0.017851996564679864, 0.017892727497867484, 0.017933458431055104, 0.017974189364242728, 0.018014920297430348, 0.018055651230617968, 0.01809638216380559, 0.01813711309699321, 0.01817784403018083, 0.01821857496336845, 0.01825930589655607, 0.01830003682974369, 0.018340767762931313, 0.018381498696118933, 0.018422229629306553, 0.018462960562494173, 0.018503691495681793, 0.018544422428869414, 0.018585153362057034, 0.018625884295244654, 0.018666615228432274, 0.018707346161619898, 0.018748077094807518, 0.018788808027995138, 0.018829538961182758, 0.01887026989437038, 0.018911000827558, 0.01895173176074562, 0.01899246269393324, 0.01903319362712086, 0.019073924560308483, 0.019114655493496103, 0.019155386426683723, 0.019196117359871343, 0.019236848293058963, 0.019277579226246584, 0.019318310159434204, 0.019359041092621824, 0.019399772025809444, 0.019440502958997064, 0.019481233892184688, 0.019521964825372308, 0.019562695758559928, 0.01960342669174755, 0.01964415762493517, 0.01968488855812279, 0.01972561949131041, 0.01976635042449803, 0.01980708135768565, 0.019847812290873273, 0.019888543224060893, 0.019929274157248513, 0.019970005090436133, 0.020010736023623753, 0.020051466956811374, 0.020092197889998994, 0.020132928823186614, 0.020173659756374234, 0.020214390689561858, 0.020255121622749478, 0.020295852555937098, 0.020336583489124718, 0.02037731442231234, 0.02041804535549996])
              .range(['#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#ffffb2ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#fed976ff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#feb24cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#fd8d3cff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#f03b20ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff', '#bd0026ff']);
    

    color_map_fba417478ea944809b099a9b10a83c9c.x = d3.scale.linear()
              .domain([9.330969487729775e-05, 0.02041804535549996])
              .range([0, 400]);

    color_map_fba417478ea944809b099a9b10a83c9c.legend = L.control({position: 'topright'});
    color_map_fba417478ea944809b099a9b10a83c9c.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_fba417478ea944809b099a9b10a83c9c.legend.addTo(map_e79b0177d85a4a11856d22450b390274);

    color_map_fba417478ea944809b099a9b10a83c9c.xAxis = d3.svg.axis()
        .scale(color_map_fba417478ea944809b099a9b10a83c9c.x)
        .orient("top")
        .tickSize(1)
        .tickValues([9.330969487729775e-05, 0.003480765638314408, 0.006868221581751518, 0.010255677525188628, 0.013643133468625739, 0.017030589412062848, 0.02041804535549996]);

    color_map_fba417478ea944809b099a9b10a83c9c.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_fba417478ea944809b099a9b10a83c9c.g = color_map_fba417478ea944809b099a9b10a83c9c.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_fba417478ea944809b099a9b10a83c9c.g.selectAll("rect")
        .data(color_map_fba417478ea944809b099a9b10a83c9c.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_fba417478ea944809b099a9b10a83c9c.x(color_map_fba417478ea944809b099a9b10a83c9c.color.domain()[i - 1]) : color_map_fba417478ea944809b099a9b10a83c9c.x.range()[0],
            x1: i < color_map_fba417478ea944809b099a9b10a83c9c.color.domain().length ? color_map_fba417478ea944809b099a9b10a83c9c.x(color_map_fba417478ea944809b099a9b10a83c9c.color.domain()[i]) : color_map_fba417478ea944809b099a9b10a83c9c.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_fba417478ea944809b099a9b10a83c9c.g.call(color_map_fba417478ea944809b099a9b10a83c9c.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('30_50_JOAO PAULO MARQUES ALVARO');
