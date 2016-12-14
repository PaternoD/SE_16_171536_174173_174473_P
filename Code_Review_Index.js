//Libraries
var http = require('http');
//general lib
var express = require('express');
//session informations
var session = require('express-session');
//parse URL
var url = require('url');
//inspect variables
var util = require('util');
// templates
var bind = require('bind');
//POST data parser
var qs = require('qs');
var bp = require('body-parser');
// script per funzionamento server

/**
 * - Code_Review - Al posto di "s" sarebbe meglio l'utilizzo di una parola più consistente
 */
var s = require('./controller/s-script.js');

//instantiate express
var app = express();

//listen in a specific port
app.set('port', (process.env.PORT || 1337));

static_dir_path = __dirname + '/static/'
app.use(express.static(static_dir_path));

/**
 * - Code_Review - "app.use(j)" non viene utilizzato
 */
// app.use(j);
APP_URL = ""

// informazioni di sessione
app.use(
  session({
    cookieName: "session",
    secret:"Sherlock Holmes: Rogue 1",
    resave: false,
    saveUninitialized: true,
    cookie: {
      id: ""
    }
  })
);

app.get('/', function (req, res) {
  // fetch updated menu
  MENU = require('./model/menu.json');

  // get app url
  APP_URL = req.headers.host;

  var urlParsed = url.parse(req.url, true);
  var query = urlParsed.query;

  var data = query["orderDate"]
  if (data == undefined) {
    data = MENU["default"]["today"]
    /**
     * - Code_Review - Togliere console.log(data)
     */
    console.log(data)
  }

  var piatto = query["piatto"];
  if (piatto == undefined) {
    piatto = MENU["default"]["piatto"]
  }

  /**
   * - Code_Review - Togliere il console.log()
   */
  /**/console.log(piatto + " del giorno " + data); 

  var day_menu = MENU[data];
  var imgString = piatto + "_img";
  var altVect = day_menu[piatto + "_alt"]

  bind.toFile('./view/main.tpl',
  {
    tipo_piatto : piatto,
    data : data,
    piatto : day_menu[piatto + ""],
    piatto_img : day_menu[piatto + "_img_src"],
    alternatives: altVect,

    /**
     * - Code_Review - Togliere se non necessarie
     */
    /*
    alternativa1 : altVect[0]["name"],
    alt1_img : altVect[0]["img_src"],
    alternativa2 : altVect[1]["name"],
    alt2_img : altVect[1]["img_src"],
    alternativa3 : altVect[2]["name"],
    alt3_img : altVect[2]["img_src"],
    alternativa4 : altVect[3]["name"],
    alt4_img : altVect[3]["img_src"],
    */
  },
    function (data) {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    }
  );

});

app.get('/order-page', function(req,res){
  bind.toFile('./view/resultPage.tpl',
    {},
    function (data) {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    });
});

app.post('/order-confirmed', function (req, res) {

  // get app url
  APP_URL = req.headers.host;

  var dati = "";

  req.on('data', function(d){
    dati += d;
  });


  /**
   * - Code_Review - Togliere console.log()
   */
  /**/ console.log("body:" + "\n" + dati);

  var body = "";
  req.on('end', function() {
    body = qs.parse(dati);
  })

  /**
   * - Code_Review - Togliere se non necessarie
   */
  // var mess = s.saveOrder(dati);
  // mess = dati.id + dati.primo + dati.secondo + dati.contorno + dati.dolce;

  bind.toFile('./view/orderSend.tpl',
    {
      message: ""
    },
    function(data){
      res.writeHead(200, {"Content-type" : "text/html"});
      res.end(data);
    });

});

app.get('/login', function(req, res){
  bind.toFile('./view/login.tpl',
  {},
  function(data){
    res.writeHead(200, {"Content-type" : "text/html"});
    res.end(data);
  });
});

app.post('/login', function(req, res) {
  var dati = "";

  var body = "";
  req.on('data', function (data) {
    body += data;
  });

  req.on('end', function () {
    dati = qs.parse(body).dati;
  });

  var auth = s.authenticate(dati.user, dati.password);

  if (auth.successo = true) {
    // redirect a '/' e passa l'id utente
    req.session.id = auth.message;  // salva l'ID utente nel cookie
    res.redirect('/');
  } else {
    // mostra messaggio di errore
    bind.toFile('./view/login.tpl',
    {
      messaggio : auth.messaggio,
    },
    function(data){
      res.writeHead(200, {"Content-type" : "text/html"});
      res.end(data);
    })
  }

});

//listen in a specific port
app.listen(1337, '127.0.0.1');

/**
 * - Code_Review - Togliere console.log()
 */
//check status
console.log('Server running at http://127.0.0.1:1337/');