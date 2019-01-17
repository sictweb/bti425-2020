// Setup
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
// Or use some other port number that you like better

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Deliver the app's home page to browser clients
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

// Get all
app.get("/api/items", (req, res) => {

    // Make a copy of the array
    // And then do the sorts on the copied array
    var c = data.map(p => p);

    // One-value sort
    /*
    c.sort(function (a, b) {
        return (a.lastName < b.lastName) ?  -1 :  1;
    });
    */

    // Two-value sort
    c.sort(function (a, b) {
        return a.lastName.localeCompare(b.lastName) ||
            a.firstName.localeCompare(b.firstName) || 0
    });

    // Return the result
    res.json(c);
});

// Get some (those with good credit scores)
app.get("/api/items/goodcredit", (req, res) => {

    // Filter the collection, and return the results
    let c = data.filter(p => p.creditScore > 600);
    res.json(c);
});

// Get all, but full names only (without the other properties)
app.get("/api/items/namesonly", (req, res) => {

    // Get names (not sorted, but could easily be sorted)
    let c = data.map(p => `${p.firstName} ${p.lastName}`);
    res.json(c);
});

// Get one
app.get("/api/items/:itemId", (req, res) => {

    // Extract the identifier from the URL
    var itemId = req.params.itemId;

    // Loose equality
    var o = data.find(p => p.id == itemId);
    if (o == undefined) {
        res.status(404).send("Resource not found");
    } else {
        res.json(o);
    }
});

// Add new
app.post("/api/items", (req, res) => {

    // More to come - will be updated 

     res.json({message: "add a user item: " + req.body.firstName + " " + req.body.lastName});
});

// Edit existing
app.put("/api/items/:itemId", (req, res) => {

    // More to come - will be updated 
    
    res.json({message: "update user with Id: " + req.params.itemId + " to " + req.body.firstName + " " + req.body.lastName});
});

// Delete item
app.delete("/api/items/:itemId", (req, res) => {

    // More to come - will be updated 
    
    res.json({message: "delete user with Id: " + req.params.itemId});
});

// Resource not found (this should be at the end)
app.use((req, res) => {
  res.status(404).send("Resource not found");
});

// Tell the app to start listening for requests
app.listen(HTTP_PORT, () => {
    console.log("Ready to handle requests on port " + HTTP_PORT);
});

// Data
var data = [{"id":1,"firstName":"Reagen","lastName":"Lincke","gender":"Male","birthDate":"2018-01-17T10:09:55Z","email":"rlincke0@virginia.edu","web":"https://virginia.edu","creditScore":629,"rating":15.03},
{"id":2,"firstName":"Samuele","lastName":"Branchflower","gender":"Male","birthDate":"2018-01-25T11:38:22Z","email":"sbranchflower1@prweb.com","web":"http://digg.com","creditScore":658,"rating":15.68},
{"id":3,"firstName":"Guilbert","lastName":"Edser","gender":"Male","birthDate":"2018-05-17T06:15:37Z","email":"gedser2@bbb.org","web":"http://msn.com","creditScore":565,"rating":8.26},
{"id":4,"firstName":"Waldon","lastName":"Morgen","gender":"Male","birthDate":"2018-03-02T09:53:29Z","email":"wmorgen3@dailymail.co.uk","web":"http://usnews.com","creditScore":742,"rating":15.59},
{"id":5,"firstName":"Megen","lastName":"Gabbett","gender":"Female","birthDate":"2018-11-21T09:29:49Z","email":"mgabbett4@toplist.cz","web":"https://mysql.com","creditScore":319,"rating":2.67},
{"id":6,"firstName":"Amalie","lastName":"Nisco","gender":"Female","birthDate":"2018-12-15T22:34:13Z","email":"anisco5@jalbum.net","web":"http://ibm.com","creditScore":384,"rating":1.44},
{"id":7,"firstName":"Meredeth","lastName":"Blackley","gender":"Male","birthDate":"2018-08-17T15:58:57Z","email":"mblackley6@uiuc.edu","web":"http://tuttocitta.it","creditScore":373,"rating":5.83},
{"id":8,"firstName":"Issiah","lastName":"Beves","gender":"Male","birthDate":"2018-12-21T07:15:41Z","email":"ibeves7@tmall.com","web":"https://msu.edu","creditScore":774,"rating":14.21},
{"id":9,"firstName":"Aldric","lastName":"Bodker","gender":"Male","birthDate":"2018-04-01T13:54:06Z","email":"abodker8@simplemachines.org","web":"http://ehow.com","creditScore":491,"rating":5.55},
{"id":10,"firstName":"Morey","lastName":"Lipscombe","gender":"Male","birthDate":"2018-11-29T03:58:06Z","email":"mlipscombe9@xing.com","web":"https://sina.com.cn","creditScore":746,"rating":7.23},
{"id":11,"firstName":"Kala","lastName":"Caird","gender":"Female","birthDate":"2018-09-10T16:31:28Z","email":"kcairda@samsung.com","web":"http://guardian.co.uk","creditScore":556,"rating":2.8},
{"id":12,"firstName":"Lief","lastName":"Peaseman","gender":"Male","birthDate":"2018-12-19T19:59:56Z","email":"lpeasemanb@privacy.gov.au","web":"https://marriott.com","creditScore":443,"rating":9.66},
{"id":13,"firstName":"Laney","lastName":"Povey","gender":"Male","birthDate":"2018-01-20T07:10:08Z","email":"lpoveyc@nba.com","web":"https://wikimedia.org","creditScore":506,"rating":8.93},
{"id":14,"firstName":"Sullivan","lastName":"Clamp","gender":"Male","birthDate":"2018-05-14T12:56:02Z","email":"sclampd@homestead.com","web":"https://github.io","creditScore":352,"rating":18.74},
{"id":15,"firstName":"Dara","lastName":"Tillerton","gender":"Female","birthDate":"2018-05-13T21:11:05Z","email":"dtillertone@yolasite.com","web":"http://mail.ru","creditScore":568,"rating":1.86},
{"id":16,"firstName":"Christoffer","lastName":"Sauter","gender":"Male","birthDate":"2018-04-26T23:21:36Z","email":"csauterf@usatoday.com","web":"http://ning.com","creditScore":382,"rating":12.04},
{"id":17,"firstName":"Jaquenetta","lastName":"Worham","gender":"Female","birthDate":"2018-11-22T01:34:44Z","email":"jworhamg@edublogs.org","web":"http://cdc.gov","creditScore":750,"rating":17.43},
{"id":18,"firstName":"Abby","lastName":"Salzen","gender":"Female","birthDate":"2018-02-23T12:07:52Z","email":"asalzenh@fotki.com","web":"https://businessinsider.com","creditScore":595,"rating":19.37},
{"id":19,"firstName":"Bail","lastName":"Shimoni","gender":"Male","birthDate":"2018-06-19T18:17:22Z","email":"bshimonii@java.com","web":"http://simplemachines.org","creditScore":722,"rating":16.61},
{"id":20,"firstName":"Alena","lastName":"Stalman","gender":"Female","birthDate":"2018-05-14T00:52:44Z","email":"astalmanj@pen.io","web":"https://g.co","creditScore":796,"rating":15.43},
{"id":21,"firstName":"Nicholle","lastName":"McVittie","gender":"Female","birthDate":"2018-07-15T01:52:15Z","email":"nmcvittiek@instagram.com","web":"https://dion.ne.jp","creditScore":668,"rating":6.86},
{"id":22,"firstName":"Barny","lastName":"Sesons","gender":"Male","birthDate":"2018-07-09T23:09:04Z","email":"bsesonsl@posterous.com","web":"http://arstechnica.com","creditScore":628,"rating":1.31},
{"id":23,"firstName":"Nadiya","lastName":"Brownfield","gender":"Female","birthDate":"2018-07-12T20:46:11Z","email":"nbrownfieldm@live.com","web":"https://bravesites.com","creditScore":312,"rating":3.71},
{"id":24,"firstName":"Clarie","lastName":"McConaghy","gender":"Female","birthDate":"2018-12-27T16:11:13Z","email":"cmcconaghyn@who.int","web":"http://blogtalkradio.com","creditScore":480,"rating":12.22},
{"id":25,"firstName":"Erek","lastName":"Arminger","gender":"Male","birthDate":"2018-03-04T23:42:33Z","email":"earmingero@weebly.com","web":"https://census.gov","creditScore":554,"rating":1.17},
{"id":26,"firstName":"Rodrigo","lastName":"Hulmes","gender":"Male","birthDate":"2018-08-11T23:22:47Z","email":"rhulmesp@github.com","web":"http://furl.net","creditScore":664,"rating":8.23},
{"id":27,"firstName":"Branden","lastName":"Lumsdaine","gender":"Male","birthDate":"2018-02-01T07:36:21Z","email":"blumsdaineq@paginegialle.it","web":"https://cbc.ca","creditScore":658,"rating":15.54},
{"id":28,"firstName":"Allie","lastName":"Wile","gender":"Male","birthDate":"2018-06-17T00:54:28Z","email":"awiler@bizjournals.com","web":"https://hud.gov","creditScore":390,"rating":4.21},
{"id":29,"firstName":"Jana","lastName":"Steeples","gender":"Female","birthDate":"2018-11-26T21:30:55Z","email":"jsteepless@wikimedia.org","web":"http://chron.com","creditScore":603,"rating":4.23},
{"id":30,"firstName":"Fan","lastName":"Kleinschmidt","gender":"Female","birthDate":"2018-08-21T05:13:34Z","email":"fkleinschmidtt@cdc.gov","web":"https://msu.edu","creditScore":600,"rating":1.23},
{"id":31,"firstName":"Rodolphe","lastName":"Attlee","gender":"Male","birthDate":"2018-05-17T05:35:44Z","email":"rattleeu@home.pl","web":"https://booking.com","creditScore":458,"rating":2.57},
{"id":32,"firstName":"Ilaire","lastName":"Mixter","gender":"Male","birthDate":"2018-07-07T02:28:23Z","email":"imixterv@acquirethisname.com","web":"http://scientificamerican.com","creditScore":496,"rating":15.03},
{"id":33,"firstName":"Selena","lastName":"Dodamead","gender":"Female","birthDate":"2018-05-09T21:31:07Z","email":"sdodameadw@cdbaby.com","web":"https://squidoo.com","creditScore":338,"rating":8.01},
{"id":34,"firstName":"Alva","lastName":"Syms","gender":"Male","birthDate":"2018-12-14T13:26:42Z","email":"asymsx@taobao.com","web":"https://sogou.com","creditScore":401,"rating":3.77},
{"id":35,"firstName":"Reinwald","lastName":"Demonge","gender":"Male","birthDate":"2018-06-27T19:53:28Z","email":"rdemongey@istockphoto.com","web":"https://parallels.com","creditScore":755,"rating":15.26},
{"id":36,"firstName":"Vinson","lastName":"Mettrick","gender":"Male","birthDate":"2018-08-15T17:53:46Z","email":"vmettrickz@disqus.com","web":"https://hubpages.com","creditScore":698,"rating":16.26},
{"id":37,"firstName":"Callida","lastName":"Skippon","gender":"Female","birthDate":"2018-05-28T04:41:57Z","email":"cskippon10@webeden.co.uk","web":"http://xrea.com","creditScore":591,"rating":16.42},
{"id":38,"firstName":"Englebert","lastName":"Haacker","gender":"Male","birthDate":"2018-03-31T10:20:06Z","email":"ehaacker11@unesco.org","web":"https://discovery.com","creditScore":697,"rating":8.85},
{"id":39,"firstName":"Inessa","lastName":"Bech","gender":"Female","birthDate":"2018-02-22T18:11:34Z","email":"ibech12@arstechnica.com","web":"https://businessinsider.com","creditScore":788,"rating":2.79},
{"id":40,"firstName":"Willey","lastName":"Befroy","gender":"Male","birthDate":"2018-03-23T20:29:43Z","email":"wbefroy13@geocities.com","web":"http://dyndns.org","creditScore":795,"rating":15.83},
{"id":41,"firstName":"Carolyne","lastName":"Bonifant","gender":"Female","birthDate":"2018-06-15T20:49:03Z","email":"cbonifant14@cnn.com","web":"https://google.pl","creditScore":288,"rating":14.6},
{"id":42,"firstName":"Celene","lastName":"Monteith","gender":"Female","birthDate":"2018-05-21T17:39:32Z","email":"cmonteith15@scribd.com","web":"http://indiatimes.com","creditScore":352,"rating":19.7},
{"id":43,"firstName":"Clark","lastName":"Ciciura","gender":"Male","birthDate":"2018-04-07T22:57:05Z","email":"cciciura16@yolasite.com","web":"https://toplist.cz","creditScore":384,"rating":6.71},
{"id":44,"firstName":"Dierdre","lastName":"McAuliffe","gender":"Female","birthDate":"2018-12-28T20:39:09Z","email":"dmcauliffe17@freewebs.com","web":"http://msu.edu","creditScore":488,"rating":12.0},
{"id":45,"firstName":"Smitty","lastName":"Garz","gender":"Male","birthDate":"2018-06-27T03:22:30Z","email":"sgarz18@so-net.ne.jp","web":"http://google.pl","creditScore":335,"rating":13.21},
{"id":46,"firstName":"Alexis","lastName":"Wisker","gender":"Female","birthDate":"2018-01-26T04:46:54Z","email":"awisker19@indiatimes.com","web":"http://1688.com","creditScore":543,"rating":9.55},
{"id":47,"firstName":"Vassily","lastName":"Aslen","gender":"Male","birthDate":"2018-04-21T22:16:58Z","email":"vaslen1a@dot.gov","web":"https://epa.gov","creditScore":770,"rating":1.56},
{"id":48,"firstName":"Cort","lastName":"Beart","gender":"Male","birthDate":"2018-07-11T04:00:06Z","email":"cbeart1b@51.la","web":"https://noaa.gov","creditScore":226,"rating":9.9},
{"id":49,"firstName":"Sofia","lastName":"Swidenbank","gender":"Female","birthDate":"2018-06-26T16:34:04Z","email":"sswidenbank1c@paypal.com","web":"http://yelp.com","creditScore":298,"rating":13.42},
{"id":50,"firstName":"Frankie","lastName":"Connor","gender":"Female","birthDate":"2018-07-08T15:06:06Z","email":"fconnor1d@goodreads.com","web":"https://acquirethisname.com","creditScore":253,"rating":16.21},
{"id":51,"firstName":"Jeffrey","lastName":"Portal","gender":"Male","birthDate":"2018-12-06T14:27:50Z","email":"jportal1e@example.com","web":"http://accuweather.com","creditScore":790,"rating":5.7},
{"id":52,"firstName":"Osgood","lastName":"Reichert","gender":"Male","birthDate":"2018-12-19T20:56:43Z","email":"oreichert1f@hhs.gov","web":"http://so-net.ne.jp","creditScore":752,"rating":1.22},
{"id":53,"firstName":"Colby","lastName":"Rowth","gender":"Male","birthDate":"2018-04-26T16:55:28Z","email":"crowth1g@springer.com","web":"http://china.com.cn","creditScore":663,"rating":1.43},
{"id":54,"firstName":"Wyatt","lastName":"Ruberti","gender":"Male","birthDate":"2018-06-27T10:13:15Z","email":"wruberti1h@tumblr.com","web":"https://dyndns.org","creditScore":315,"rating":13.56},
{"id":55,"firstName":"Laird","lastName":"Brewett","gender":"Male","birthDate":"2018-05-15T13:37:03Z","email":"lbrewett1i@facebook.com","web":"http://cbslocal.com","creditScore":618,"rating":10.68},
{"id":56,"firstName":"Staford","lastName":"Sijmons","gender":"Male","birthDate":"2018-03-13T09:55:02Z","email":"ssijmons1j@rediff.com","web":"https://nydailynews.com","creditScore":504,"rating":18.5},
{"id":57,"firstName":"Matti","lastName":"Harrison","gender":"Female","birthDate":"2018-07-29T11:46:26Z","email":"mharrison1k@about.com","web":"https://ameblo.jp","creditScore":744,"rating":6.09},
{"id":58,"firstName":"Nico","lastName":"Vayro","gender":"Male","birthDate":"2018-09-25T03:29:42Z","email":"nvayro1l@dyndns.org","web":"https://wufoo.com","creditScore":545,"rating":17.17},
{"id":59,"firstName":"Katharina","lastName":"Claw","gender":"Female","birthDate":"2018-06-09T04:48:52Z","email":"kclaw1m@bloglovin.com","web":"http://cam.ac.uk","creditScore":520,"rating":5.11},
{"id":60,"firstName":"Vite","lastName":"Ungerechts","gender":"Male","birthDate":"2018-03-23T13:00:19Z","email":"vungerechts1n@reuters.com","web":"http://cyberchimps.com","creditScore":229,"rating":5.26},
{"id":61,"firstName":"Jose","lastName":"Paulisch","gender":"Male","birthDate":"2018-10-03T06:04:14Z","email":"jpaulisch1o@meetup.com","web":"http://bloglovin.com","creditScore":415,"rating":3.55},
{"id":62,"firstName":"Madelle","lastName":"Tunnacliffe","gender":"Female","birthDate":"2018-06-05T22:40:54Z","email":"mtunnacliffe1p@tiny.cc","web":"https://google.com","creditScore":787,"rating":9.27},
{"id":63,"firstName":"Valentine","lastName":"Whittall","gender":"Female","birthDate":"2018-01-20T19:42:41Z","email":"vwhittall1q@cbsnews.com","web":"https://spotify.com","creditScore":477,"rating":1.61},
{"id":64,"firstName":"Britte","lastName":"Cawker","gender":"Female","birthDate":"2018-07-30T21:11:25Z","email":"bcawker1r@drupal.org","web":"https://wisc.edu","creditScore":259,"rating":5.11},
{"id":65,"firstName":"Madlin","lastName":"Westoll","gender":"Female","birthDate":"2018-11-29T21:49:30Z","email":"mwestoll1s@behance.net","web":"https://cdbaby.com","creditScore":513,"rating":9.21},
{"id":66,"firstName":"Jedediah","lastName":"Dellenbrook","gender":"Male","birthDate":"2018-10-13T03:55:38Z","email":"jdellenbrook1t@dailymail.co.uk","web":"https://uiuc.edu","creditScore":409,"rating":14.6},
{"id":67,"firstName":"Evvy","lastName":"Warsop","gender":"Female","birthDate":"2018-08-31T06:28:57Z","email":"ewarsop1u@yelp.com","web":"http://spotify.com","creditScore":244,"rating":14.39},
{"id":68,"firstName":"Clarey","lastName":"Tatershall","gender":"Female","birthDate":"2018-04-03T17:40:05Z","email":"ctatershall1v@goo.ne.jp","web":"http://wiley.com","creditScore":287,"rating":2.1},
{"id":69,"firstName":"Rhiamon","lastName":"Rosendall","gender":"Female","birthDate":"2018-09-04T08:06:23Z","email":"rrosendall1w@ftc.gov","web":"http://disqus.com","creditScore":714,"rating":16.61},
{"id":70,"firstName":"Idette","lastName":"Stephens","gender":"Female","birthDate":"2018-03-07T12:33:56Z","email":"istephens1x@xinhuanet.com","web":"http://de.vu","creditScore":638,"rating":4.97},
{"id":71,"firstName":"Tyne","lastName":"Sidwell","gender":"Female","birthDate":"2018-06-02T12:06:25Z","email":"tsidwell1y@a8.net","web":"http://umich.edu","creditScore":569,"rating":14.26},
{"id":72,"firstName":"Cristobal","lastName":"Caesmans","gender":"Male","birthDate":"2018-07-07T01:35:39Z","email":"ccaesmans1z@indiegogo.com","web":"https://msn.com","creditScore":249,"rating":5.98},
{"id":73,"firstName":"Elsbeth","lastName":"Wankling","gender":"Female","birthDate":"2018-08-29T14:21:52Z","email":"ewankling20@miibeian.gov.cn","web":"https://zimbio.com","creditScore":432,"rating":5.0},
{"id":74,"firstName":"Lindsey","lastName":"Lightollers","gender":"Female","birthDate":"2018-10-25T00:07:18Z","email":"llightollers21@ihg.com","web":"https://facebook.com","creditScore":701,"rating":19.03},
{"id":75,"firstName":"Aridatha","lastName":"Sydry","gender":"Female","birthDate":"2018-05-11T20:43:03Z","email":"asydry22@opensource.org","web":"https://xing.com","creditScore":506,"rating":18.37},
{"id":76,"firstName":"Tadeas","lastName":"Liveley","gender":"Male","birthDate":"2018-07-17T04:41:22Z","email":"tliveley23@vk.com","web":"http://bandcamp.com","creditScore":507,"rating":15.83},
{"id":77,"firstName":"Kristien","lastName":"Oldmeadow","gender":"Female","birthDate":"2018-05-17T06:33:10Z","email":"koldmeadow24@weebly.com","web":"https://statcounter.com","creditScore":621,"rating":4.8},
{"id":78,"firstName":"Brigida","lastName":"Devanny","gender":"Female","birthDate":"2018-12-07T01:15:45Z","email":"bdevanny25@usatoday.com","web":"http://godaddy.com","creditScore":255,"rating":14.2},
{"id":79,"firstName":"Westbrook","lastName":"Pattington","gender":"Male","birthDate":"2018-12-03T22:11:18Z","email":"wpattington26@wordpress.com","web":"https://ihg.com","creditScore":280,"rating":12.14},
{"id":80,"firstName":"Honor","lastName":"Carless","gender":"Female","birthDate":"2018-10-05T13:51:35Z","email":"hcarless27@loc.gov","web":"https://bigcartel.com","creditScore":442,"rating":14.03},
{"id":81,"firstName":"Welby","lastName":"Eicke","gender":"Male","birthDate":"2018-01-16T09:09:42Z","email":"weicke28@cafepress.com","web":"https://patch.com","creditScore":296,"rating":16.25},
{"id":82,"firstName":"Demetri","lastName":"Benning","gender":"Male","birthDate":"2018-02-24T17:11:59Z","email":"dbenning29@cnbc.com","web":"http://amazon.com","creditScore":722,"rating":7.87},
{"id":83,"firstName":"Giorgi","lastName":"Sunter","gender":"Male","birthDate":"2018-05-03T02:57:37Z","email":"gsunter2a@wsj.com","web":"https://devhub.com","creditScore":549,"rating":7.77},
{"id":84,"firstName":"Vincenz","lastName":"Wolfenden","gender":"Male","birthDate":"2018-10-20T23:34:58Z","email":"vwolfenden2b@comcast.net","web":"https://google.ru","creditScore":250,"rating":7.43},
{"id":85,"firstName":"Thom","lastName":"Mc Trusty","gender":"Male","birthDate":"2018-11-25T14:04:56Z","email":"tmctrusty2c@github.io","web":"http://godaddy.com","creditScore":236,"rating":19.58},
{"id":86,"firstName":"Tam","lastName":"Carlozzi","gender":"Male","birthDate":"2018-06-02T22:28:02Z","email":"tcarlozzi2d@usda.gov","web":"http://123-reg.co.uk","creditScore":676,"rating":8.59},
{"id":87,"firstName":"Jacquie","lastName":"Cast","gender":"Female","birthDate":"2018-06-06T00:26:48Z","email":"jcast2e@salon.com","web":"https://meetup.com","creditScore":391,"rating":5.01},
{"id":88,"firstName":"Lilia","lastName":"Keam","gender":"Female","birthDate":"2018-02-05T19:56:54Z","email":"lkeam2f@paginegialle.it","web":"https://ehow.com","creditScore":601,"rating":4.77},
{"id":89,"firstName":"Austine","lastName":"Kalkofen","gender":"Female","birthDate":"2018-06-20T16:05:22Z","email":"akalkofen2g@flavors.me","web":"http://gizmodo.com","creditScore":374,"rating":6.02},
{"id":90,"firstName":"Otis","lastName":"Raspel","gender":"Male","birthDate":"2018-07-12T15:41:19Z","email":"oraspel2h@pbs.org","web":"http://themeforest.net","creditScore":286,"rating":18.04},
{"id":91,"firstName":"Jereme","lastName":"Stellin","gender":"Male","birthDate":"2018-06-08T19:30:50Z","email":"jstellin2i@wp.com","web":"https://ning.com","creditScore":534,"rating":8.19},
{"id":92,"firstName":"Alexandros","lastName":"Frizell","gender":"Male","birthDate":"2018-11-18T19:56:16Z","email":"afrizell2j@virginia.edu","web":"https://cdc.gov","creditScore":203,"rating":6.51},
{"id":93,"firstName":"Hendrik","lastName":"Carwithan","gender":"Male","birthDate":"2018-09-27T17:26:52Z","email":"hcarwithan2k@sakura.ne.jp","web":"http://geocities.jp","creditScore":442,"rating":7.57},
{"id":94,"firstName":"Amalie","lastName":"Lassetter","gender":"Female","birthDate":"2018-09-18T06:49:32Z","email":"alassetter2l@tinyurl.com","web":"https://hao123.com","creditScore":612,"rating":10.26},
{"id":95,"firstName":"Colleen","lastName":"Luckes","gender":"Female","birthDate":"2018-12-01T16:41:12Z","email":"cluckes2m@cnbc.com","web":"http://upenn.edu","creditScore":558,"rating":17.16},
{"id":96,"firstName":"Brittany","lastName":"Tipling","gender":"Female","birthDate":"2018-09-12T22:24:54Z","email":"btipling2n@redcross.org","web":"https://themeforest.net","creditScore":459,"rating":13.27},
{"id":97,"firstName":"Adriano","lastName":"Limer","gender":"Male","birthDate":"2018-02-24T01:49:33Z","email":"alimer2o@360.cn","web":"http://illinois.edu","creditScore":785,"rating":8.58},
{"id":98,"firstName":"Merrick","lastName":"Skitteral","gender":"Male","birthDate":"2018-02-05T20:58:51Z","email":"mskitteral2p@independent.co.uk","web":"http://bigcartel.com","creditScore":559,"rating":7.74},
{"id":99,"firstName":"Locke","lastName":"Eatttok","gender":"Male","birthDate":"2018-08-23T09:51:56Z","email":"leatttok2q@wsj.com","web":"https://so-net.ne.jp","creditScore":363,"rating":6.03},
{"id":100,"firstName":"Roselle","lastName":"Friedank","gender":"Female","birthDate":"2019-01-07T06:02:46Z","email":"rfriedank2r@cbc.ca","web":"http://google.es","creditScore":342,"rating":1.89},
{"id":101,"firstName":"Thorn","lastName":"Verbeke","gender":"Male","birthDate":"2018-11-26T07:39:25Z","email":"tverbeke2s@gizmodo.com","web":"https://a8.net","creditScore":714,"rating":9.24},
{"id":102,"firstName":"Rollie","lastName":"Gedge","gender":"Male","birthDate":"2018-06-08T13:00:23Z","email":"rgedge2t@angelfire.com","web":"http://smugmug.com","creditScore":218,"rating":11.05},
{"id":103,"firstName":"Reina","lastName":"Antonignetti","gender":"Female","birthDate":"2018-11-02T21:31:18Z","email":"rantonignetti2u@sfgate.com","web":"http://elegantthemes.com","creditScore":776,"rating":6.06},
{"id":104,"firstName":"Olivier","lastName":"McDougle","gender":"Male","birthDate":"2018-07-02T18:51:53Z","email":"omcdougle2v@acquirethisname.com","web":"https://sbwire.com","creditScore":530,"rating":12.68},
{"id":105,"firstName":"Chas","lastName":"Doxsey","gender":"Male","birthDate":"2018-08-10T12:34:45Z","email":"cdoxsey2w@1und1.de","web":"https://storify.com","creditScore":328,"rating":2.61},
{"id":106,"firstName":"Corinna","lastName":"Rousell","gender":"Female","birthDate":"2018-09-18T11:46:45Z","email":"crousell2x@mtv.com","web":"http://prlog.org","creditScore":316,"rating":17.75},
{"id":107,"firstName":"Chanda","lastName":"Netti","gender":"Female","birthDate":"2018-03-11T06:42:52Z","email":"cnetti2y@sakura.ne.jp","web":"https://amazon.co.jp","creditScore":413,"rating":11.89},
{"id":108,"firstName":"Ashely","lastName":"Woodrooffe","gender":"Female","birthDate":"2018-06-08T00:05:50Z","email":"awoodrooffe2z@cisco.com","web":"https://sourceforge.net","creditScore":726,"rating":16.9},
{"id":109,"firstName":"Rebbecca","lastName":"Addenbrooke","gender":"Female","birthDate":"2018-09-10T07:53:54Z","email":"raddenbrooke30@example.com","web":"http://rediff.com","creditScore":534,"rating":8.27},
{"id":110,"firstName":"Lynette","lastName":"Yegorshin","gender":"Female","birthDate":"2018-04-24T08:29:32Z","email":"lyegorshin31@tumblr.com","web":"https://blogspot.com","creditScore":318,"rating":9.26},
{"id":111,"firstName":"Murial","lastName":"Cutten","gender":"Female","birthDate":"2018-10-06T03:29:18Z","email":"mcutten32@51.la","web":"http://youku.com","creditScore":527,"rating":3.57},
{"id":112,"firstName":"Henry","lastName":"Davidof","gender":"Male","birthDate":"2018-02-04T23:22:48Z","email":"hdavidof33@xrea.com","web":"https://printfriendly.com","creditScore":246,"rating":5.74},
{"id":113,"firstName":"Perrine","lastName":"Hegarty","gender":"Female","birthDate":"2018-10-23T12:14:44Z","email":"phegarty34@fastcompany.com","web":"https://mtv.com","creditScore":219,"rating":15.57},
{"id":114,"firstName":"Nicolette","lastName":"Blincoe","gender":"Female","birthDate":"2018-10-20T02:10:53Z","email":"nblincoe35@harvard.edu","web":"http://facebook.com","creditScore":674,"rating":17.31},
{"id":115,"firstName":"Jimmy","lastName":"Domingues","gender":"Male","birthDate":"2018-04-28T21:58:41Z","email":"jdomingues36@ftc.gov","web":"http://studiopress.com","creditScore":640,"rating":11.72},
{"id":116,"firstName":"Noble","lastName":"Gianasi","gender":"Male","birthDate":"2018-04-19T22:50:48Z","email":"ngianasi37@ca.gov","web":"http://xing.com","creditScore":624,"rating":14.31},
{"id":117,"firstName":"Benedick","lastName":"Cheeney","gender":"Male","birthDate":"2018-03-26T11:41:33Z","email":"bcheeney38@cdbaby.com","web":"https://sciencedirect.com","creditScore":623,"rating":7.62},
{"id":118,"firstName":"Nils","lastName":"Messum","gender":"Male","birthDate":"2018-01-18T14:47:00Z","email":"nmessum39@paypal.com","web":"http://google.pl","creditScore":260,"rating":16.96},
{"id":119,"firstName":"Carlyn","lastName":"Sinnie","gender":"Female","birthDate":"2018-03-07T10:35:11Z","email":"csinnie3a@chron.com","web":"http://eventbrite.com","creditScore":764,"rating":13.7},
{"id":120,"firstName":"Clive","lastName":"Bains","gender":"Male","birthDate":"2018-01-17T03:00:30Z","email":"cbains3b@google.ca","web":"https://xrea.com","creditScore":293,"rating":10.53},
{"id":121,"firstName":"Nathalia","lastName":"L'Episcopi","gender":"Female","birthDate":"2018-04-01T22:09:41Z","email":"nlepiscopi3c@lycos.com","web":"https://simplemachines.org","creditScore":617,"rating":5.81},
{"id":122,"firstName":"Jarrid","lastName":"Somerled","gender":"Male","birthDate":"2018-03-14T09:34:14Z","email":"jsomerled3d@quantcast.com","web":"https://shinystat.com","creditScore":765,"rating":7.4},
{"id":123,"firstName":"Bebe","lastName":"Axelby","gender":"Female","birthDate":"2018-09-22T07:38:28Z","email":"baxelby3e@businesswire.com","web":"http://blogspot.com","creditScore":214,"rating":15.96},
{"id":124,"firstName":"Dollie","lastName":"Babcock","gender":"Female","birthDate":"2018-11-08T03:47:10Z","email":"dbabcock3f@furl.net","web":"http://answers.com","creditScore":611,"rating":12.34},
{"id":125,"firstName":"Alf","lastName":"Bernaldez","gender":"Male","birthDate":"2018-12-16T10:30:11Z","email":"abernaldez3g@netscape.com","web":"https://vkontakte.ru","creditScore":310,"rating":11.84},
{"id":126,"firstName":"Leroi","lastName":"Deller","gender":"Male","birthDate":"2018-09-04T03:58:19Z","email":"ldeller3h@quantcast.com","web":"https://mtv.com","creditScore":536,"rating":12.74},
{"id":127,"firstName":"Margareta","lastName":"Pembery","gender":"Female","birthDate":"2018-12-03T19:16:56Z","email":"mpembery3i@g.co","web":"http://webnode.com","creditScore":551,"rating":4.73},
{"id":128,"firstName":"Wilbur","lastName":"Heatlie","gender":"Male","birthDate":"2018-03-25T14:45:41Z","email":"wheatlie3j@dagondesign.com","web":"http://toplist.cz","creditScore":450,"rating":10.83},
{"id":129,"firstName":"Catharine","lastName":"Gwatkin","gender":"Female","birthDate":"2018-06-01T11:20:36Z","email":"cgwatkin3k@yale.edu","web":"http://linkedin.com","creditScore":262,"rating":17.43},
{"id":130,"firstName":"Barnie","lastName":"Damrell","gender":"Male","birthDate":"2018-07-05T02:38:19Z","email":"bdamrell3l@yellowbook.com","web":"https://foxnews.com","creditScore":516,"rating":18.96},
{"id":131,"firstName":"Ronnie","lastName":"Foskett","gender":"Male","birthDate":"2018-07-23T16:57:29Z","email":"rfoskett3m@live.com","web":"https://boston.com","creditScore":216,"rating":8.01},
{"id":132,"firstName":"Shurlocke","lastName":"McEwen","gender":"Male","birthDate":"2018-03-07T23:46:18Z","email":"smcewen3n@aboutads.info","web":"https://usda.gov","creditScore":372,"rating":4.04},
{"id":133,"firstName":"Gayle","lastName":"Berrick","gender":"Male","birthDate":"2018-11-29T16:13:10Z","email":"gberrick3o@pcworld.com","web":"https://census.gov","creditScore":348,"rating":3.15},
{"id":134,"firstName":"Thoma","lastName":"Birkmyr","gender":"Male","birthDate":"2018-04-24T08:56:15Z","email":"tbirkmyr3p@issuu.com","web":"http://blinklist.com","creditScore":465,"rating":13.57},
{"id":135,"firstName":"Candida","lastName":"Erbain","gender":"Female","birthDate":"2018-02-11T23:29:24Z","email":"cerbain3q@thetimes.co.uk","web":"http://blinklist.com","creditScore":232,"rating":16.82},
{"id":136,"firstName":"Adelina","lastName":"Dobson","gender":"Female","birthDate":"2018-06-27T19:08:55Z","email":"adobson3r@xrea.com","web":"http://buzzfeed.com","creditScore":581,"rating":16.22},
{"id":137,"firstName":"Garek","lastName":"Brewitt","gender":"Male","birthDate":"2018-04-28T10:05:44Z","email":"gbrewitt3s@nydailynews.com","web":"https://canalblog.com","creditScore":756,"rating":13.33},
{"id":138,"firstName":"Rolfe","lastName":"Chantree","gender":"Male","birthDate":"2018-08-08T17:47:36Z","email":"rchantree3t@house.gov","web":"http://ifeng.com","creditScore":586,"rating":14.07},
{"id":139,"firstName":"Jolynn","lastName":"Larraway","gender":"Female","birthDate":"2018-01-10T14:52:07Z","email":"jlarraway3u@shop-pro.jp","web":"http://bing.com","creditScore":478,"rating":11.83},
{"id":140,"firstName":"Yoshiko","lastName":"Emptage","gender":"Female","birthDate":"2018-10-12T04:05:22Z","email":"yemptage3v@opera.com","web":"http://flavors.me","creditScore":426,"rating":12.27},
{"id":141,"firstName":"Arnuad","lastName":"Houdhury","gender":"Male","birthDate":"2018-07-08T22:35:49Z","email":"ahoudhury3w@dell.com","web":"http://nsw.gov.au","creditScore":640,"rating":16.46},
{"id":142,"firstName":"Constanta","lastName":"Dilger","gender":"Female","birthDate":"2018-10-17T18:59:22Z","email":"cdilger3x@shop-pro.jp","web":"http://nih.gov","creditScore":472,"rating":5.2},
{"id":143,"firstName":"Tymon","lastName":"Chander","gender":"Male","birthDate":"2018-12-01T13:13:59Z","email":"tchander3y@multiply.com","web":"http://umich.edu","creditScore":456,"rating":4.0},
{"id":144,"firstName":"Arlinda","lastName":"Sjollema","gender":"Female","birthDate":"2018-09-29T09:12:00Z","email":"asjollema3z@artisteer.com","web":"http://linkedin.com","creditScore":654,"rating":10.79},
{"id":145,"firstName":"Roxanne","lastName":"Siverns","gender":"Female","birthDate":"2018-12-03T03:39:39Z","email":"rsiverns40@dailymail.co.uk","web":"https://prlog.org","creditScore":696,"rating":7.88},
{"id":146,"firstName":"Trever","lastName":"Ings","gender":"Male","birthDate":"2018-03-30T18:41:22Z","email":"tings41@webeden.co.uk","web":"http://dmoz.org","creditScore":317,"rating":4.69},
{"id":147,"firstName":"Kessia","lastName":"Peet","gender":"Female","birthDate":"2018-02-08T06:36:20Z","email":"kpeet42@dyndns.org","web":"http://wufoo.com","creditScore":269,"rating":4.15},
{"id":148,"firstName":"Malina","lastName":"Houseley","gender":"Female","birthDate":"2018-07-16T16:11:38Z","email":"mhouseley43@elpais.com","web":"http://ca.gov","creditScore":228,"rating":12.1},
{"id":149,"firstName":"Callean","lastName":"Pigott","gender":"Male","birthDate":"2018-11-20T06:58:40Z","email":"cpigott44@cornell.edu","web":"http://typepad.com","creditScore":679,"rating":19.09},
{"id":150,"firstName":"Waylen","lastName":"Grahame","gender":"Male","birthDate":"2018-08-15T00:17:42Z","email":"wgrahame45@buzzfeed.com","web":"https://blogger.com","creditScore":326,"rating":9.42}];
