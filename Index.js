var express = require('express');
var bind = require('bind');
var bodyParser = require('body-parser');
//Aggiungo una libreria di supporto per la gestione degli users e dei pasti
var lib = require('./lib/lib.js');
var libPasti = require('./lib/lib_pasti.js');

//instantiate express
var app = express();

//listen in a specific port
app.set('port', (process.env.PORT || 1337));

//set the server to respond to a file request
app.use('/public',express.static(__dirname+'/public'));

//<<<<<<< HEAD
//set Body-parser on the requests
app.use(bodyParser.urlencoded({ extended: false }));
//=======
app.set('port', (process.env.PORT || 5000));

/**
 * Finire la query
 */
app.get('/select/', function(request, response) 
{
	var text = 'responce:';
	response.writeHead(200, {'Content-Type': 'text/html'});

	//connect to database
	pg.connect(
		//enviromental variable, set by heroku when first databse is created
		process.env.DATABASE_URL, 
		function(err, client, done) {
		//query
		client.query('SELECT * FROM pietanze', function(err, result) {
			//release the client back to the pool
			done();
			
			//manages err
			if (err){ 
				console.error(err); 
				response.end("Error select" + err); 
		  	}
		  	else {
				text = "<p>Dump db: <br> " + util.inspect(result.rows) + ".</p>";
				text = text + "<br> <br>";
		  	}
			
			//response here, otherwise the page will be sent before the execution of the query
			console.log("text final: "+text);
			response.end(text);
		});
  	});

});
//>>>>>>> origin/dev

//create a server
/**
*   CREATE A VOID TEMPLATE
**/
app.get('/', function(req, res) {
	//bind to template
	bind.toFile('tpl/home.tpl', {}, 
    function(data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

/**
*   GET HOME
**/
app.post('/home',function(request,response){
    bind.toFile('tpl/home.tpl', {
                    open : true
                },
                function(data){
                response.writeHead(200,{'Content-Type':'text/html'});
                response.end(data);
            });
});

/**
*   GET pagina di registrazione
**/
app.post('/registra',function(request,response){
    visible = false;
    bind.toFile('tpl/reg_1.tpl', {},
                function(data){
                response.writeHead(200,{'Content-Type':'text/html'});
                response.end(data);
            });
});

/**
*   INSERT user
**/
app.post('/registra1',function(request,response){
	if(typeof request.body !== 'undefined' && request.body){
        
        //Nuovo user per acquisire i dati dalla form
		var user = new lib.User();
        //Flag per il controllo dell'errore
		var error = false;
        
//<<<<<<< HEAD
		if(typeof request.body.nome !== 'undefined' && request.body.nome){
			user.nome=request.body.nome;
		}else{
			error = true;
		}
		if(typeof request.body.cognome !== 'undefined' && request.body.cognome){
			user.cognome=request.body.cognome;
		}else{
			error = true;
		}
		if(typeof request.body.data !== 'undefined' && request.body.data){
			user.data=request.body.data;
		}else{
			error = true;
		}
		if(typeof request.body.indirizzo !== 'undefined' && request.body.indirizzo){
			user.indirizzo=request.body.indirizzo;
		}else{
			error = true;
		}
        if(typeof request.body.cap !== 'undefined' && request.body.cap){
			user.cap=parseInt(request.body.cap);
		}else{
			error = true;
		}
		if(typeof request.body.comune !== 'undefined' && request.body.comune){
			user.comune=request.body.comune;
		}else{
			error = true;
		}
		if(typeof request.body.provincia !== 'undefined' && request.body.provincia){
			user.provincia=request.body.provincia;
		}else{
			error = true;
		}
		if(typeof request.body.tel !== 'undefined' && request.body.tel){
			user.n_tel=parseInt(request.body.tel);
		}else{
			error = true;
		}
        if(typeof request.body.email !== 'undefined' && request.body.email){
			user.email=request.body.email;
		}else{
			error = true;
		}
        if(typeof request.body.cf !== 'undefined' && request.body.cf){
			user.cf=parseInt(request.body.cf);
		}else{
			error = true;
		}
        
        //Se uno dei capi della form non è stato completato genero un'errore.
		if(error){
			response.writeHead(409,{});
			response.end("Incorrect data sent with the request");
		}else{
			lib.addUser(user);		//Aggiunta dell'user alla lista
			bind.toFile('tpl/reg_2.tpl', {
            },
            function(data){
                response.writeHead(200,{'Content-Type':'text/html'});
                response.end(data);
            });
		}	
	}else{
		console.log("Request body not defined");
	}
});

/**
*   INSERT datiUser
**/
app.post('/registra2',function(request,response){
	if(typeof request.body !== 'undefined' && request.body){
        
        //prelevo l'ultimo user dall'array
		var user = lib.getLast();
        
        user.peso=parseInt(request.body.peso);
        user.altezza=parseInt(request.body.altezza);
        user.sesso=request.body.sesso;
        user.into=request.body.into;
        
        lib.addUser(user);		//Aggiunta dell'user alla lista
        bind.toFile('tpl/benvenuto.tpl', {},
            function(data){
                response.writeHead(200,{'Content-Type':'text/html'});
                response.end(data);
            });
	}else{
		console.log("Request body not defined");
	}
//=======
        //Cancellazione tabella utenti se esistente
        client.query('drop table if exists utenti cascade', function(err, result){
            done();
            
            if (err){
                console.error(err);
                response.send("Errore " + err);
            }else{
                response.end("Drop Table utenti");
            }
        });

        //Cancellazione tabella pietanze se esistente
        client.query('drop table if exists pietanze cascade', function(err, result){
            done();
            
            if (err){
                console.error(err);
                response.send("Errore " + err);
            }else{
                response.end("Drop Table pietanze");
            }
        });

        //Creazione tabella utenti
        client.query('create table utenti(id_utente serial primary key, id_nome varchar(20), id_cognome varchar(20), id_giorno integer, id_mese integer, id_anno integer, id_indirizzo varchar(20), id_cap integer, id_comune varchar(20), id_prov varchar(3), id_tel integer, id_email varchar(20), id_peso integer, id_altezza integer, id_sesso varchar(2))', function(err, result){
            done();
            
            if (err){
                console.error(err);
                response.send("Errore " + err);
            }else{
                response.end("Table utenti created");
            }
        });

        //Creazione tabella pietanze
        client.query('create table pietanze(id_pietanza serial primary key, path_image varchar(50), nome_pietanza varchar(20), tipo_pietanza varchar(20))', function(err, result){
            done();
            
            if (err){
                console.error(err);
                response.send("Errore " + err);
            }else{
                response.end("Table pietanze created");
            }
        });

        /**
         * Aggiunta del menu' attraverso la copia di essi da un file csv
         */
        client.query("copy pietanze(path_image, nome_pietanza, tipo_pietanza) from '/Users/simonerigon/Documents/1.Università/ingegneria_Software_2/Progetto_Mockup/SE_16_171536_174173_174473_P/pietanze.csv' delimiter ';' csv", function(err, result) {
          done();
          if (err) { 
              console.error(err); 
              response.send("Error insert " + err); }
          else {
              response.end("row added");
           }
        });
        
});


/**
 * Finire la query con i paramentri delle form.
 */
app.get('/add_utente/', function(request, response) 
{
	var text = 'responce:';
	response.writeHead(200, {'Content-Type': 'text/html'});
	
	console.log("called");

    var nome = request.body.id_nome;
    var cognome = request.body.id_cognome;
    var giorno = request.body.id_giorno;
    var mese = request.body.id_mese;
    var anno = request.body.id_anno;
    var indirizzo = request.body.id_indirizzo;
    var cap = request.body.id_cap;
    var comune = request.body.id_comune;
    var provincia = request.body.id_prov;
    var telefono = request.body.id_tel;
    var email = request.body.id_email;
    var peso = request.body.id_peso;
    var altezza = request.body.id_altezza;
    var sesso = request.body.id_sesso;

	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		
		console.log("connected to db");

		//add element
		client.query("insert into utenti(id_nome, id_cognome, id_giorno, id_mese, id_anno, id_indirizzo, id_cap, id_comune, id_prov, id_tel, id_email, id_peso, id_altezza, id_sesso) values('"+nome+"','"+cognome+"','"+giorno+"','"+mese+"','"+anno+"','"+indirizzo+"','"+cap+"','"+comune+"','"+provincia+"','"+telefono+"','"+email+"','"+peso+"','"+altezza+"','"+sesso+"')", function(err, result) {
		  done();
		  if (err) { 
			  console.error(err); 
			  response.send("Error insert " + err); }
		  else {
			  response.end("row added");
		   }
		});
  	});

//>>>>>>> origin/dev
});

/**
*   POST pagina di benvenuto
**/
app.post('/benvenuto',function(request,response){
    bind.toFile('tpl/benvenuto.tpl', {},
                function(data){
                response.writeHead(200,{'Content-Type':'text/html'});
                response.end(data);
            });
});

/**
*   POST pagina di prenotazione del giorno : Lunedì
**/
app.post('/prenotaGiorni',function(request,response){
    response.sendFile(__dirname + '/html/ordinelunedi.html');
    
});

/**
*   POST pagina di prenotazione del giorno : Martedì
**/
app.post('/prenotaGiorno2',function(request,response){
    response.sendFile(__dirname + '/html/ordineMartedi.html');
    var menu = new libPasti.Menu();
    // Salvo i piatti scelti il giorno precendente
    menu.giorno = "Lunedì";
    menu.primo = request.body.primi;
    menu.secondo = request.body.secondi;
    menu.dessert = request.body.dessert;
    libPasti.addMenu(menu);
});

/**
*   POST pagina di prenotazione del giorno : Mercoledì
**/
app.post('/prenotaGiorno3',function(request,response){
    response.sendFile(__dirname + '/html/ordineMercoledi.html');
    var menu = new libPasti.Menu();
    // Salvo i piatti scelti il giorno precendente
    menu.giorno = "Martedì";
    menu.primo = request.body.primi;
    menu.secondo = request.body.secondi;
    menu.dessert = request.body.dessert;
    libPasti.addMenu(menu);
});

/**
*   POST pagina di prenotazione del giorno : Giovedì
**/
app.post('/prenotaGiorno4',function(request,response){
    response.sendFile(__dirname + '/html/ordineGiovedi.html');
    var menu = new libPasti.Menu();
    // Salvo i piatti scelti il giorno precendente
    menu.giorno = "Mercoledì";
    menu.primo = request.body.primi;
    menu.secondo = request.body.secondi;
    menu.dessert = request.body.dessert;
    libPasti.addMenu(menu);
});

/**
*   POST pagina di prenotazione del giorno : Venerdì
**/
app.post('/prenotaGiorno5',function(request,response){
    response.sendFile(__dirname + '/html/ordineVenerdi.html');
    var menu = new libPasti.Menu();
    // Salvo i piatti scelti il giorno precendente
    menu.giorno = "Giovedì";
    menu.primo = request.body.primi;
    menu.secondo = request.body.secondi;
    menu.dessert = request.body.dessert;
    libPasti.addMenu(menu);
});

/**
*   POST pagina di prenotazione del giorno : Sabato
**/
app.post('/prenotaGiorno6',function(request,response){
    response.sendFile(__dirname + '/html/ordineSabato.html');
    var menu = new libPasti.Menu();
    // Salvo i piatti scelti il giorno precendente
    menu.giorno = "Venerdì";
    menu.primo = request.body.primi;
    menu.secondo = request.body.secondi;
    menu.dessert = request.body.dessert;
    libPasti.addMenu(menu);
});

/**
*   POST pagina di prenotazione del giorno : Domenica
**/
app.post('/prenotaGiorno7',function(request,response){
    response.sendFile(__dirname + '/html/ordineDomenica.html');
    var menu = new libPasti.Menu();
    // Salvo i piatti scelti il giorno precendente
    menu.giorno = "Sabato";
    menu.primo = request.body.primi;
    menu.secondo = request.body.secondi;
    menu.dessert = request.body.dessert;
    libPasti.addMenu(menu);

    console.log("Sei nella pagina di salvataggio sabato.")
});

/**
*   POST pagina di prenotazione del giorno : Resoconto del Menù
**/
app.post('/resocontoMenu',function(request,response){
    var menu = new libPasti.Menu();
    // Salvo i piatti scelti il giorno precendente
    menu.giorno = "Domenica";
    menu.primo = request.body.primi;
    menu.secondo = request.body.secondi;
    menu.dessert = request.body.dessert;
    libPasti.addMenu(menu);

    bind.toFile('tpl/resocontoMenu.tpl', {

        lunedi_primo: libPasti.arrayMenu[0].primo,
        lunedi_secondo: libPasti.arrayMenu[0].secondo,
        lunedi_dessert: libPasti.arrayMenu[0].dessert,

        martedi_primo: libPasti.arrayMenu[1].primo,
        martedi_secondo: libPasti.arrayMenu[1].secondo,
        martedi_dessert: libPasti.arrayMenu[1].dessert,

        mercoledi_primo: libPasti.arrayMenu[2].primo,
        mercoledi_secondo: libPasti.arrayMenu[2].secondo,
        mercoledi_dessert: libPasti.arrayMenu[2].dessert,

        giovedi_primo: libPasti.arrayMenu[3].primo,
        giovedi_secondo: libPasti.arrayMenu[3].secondo,
        giovedi_dessert: libPasti.arrayMenu[3].dessert,

        venerdi_primo: libPasti.arrayMenu[4].primo,
        venerdi_secondo: libPasti.arrayMenu[4].secondo,
        venerdi_dessert: libPasti.arrayMenu[4].dessert,

        sabato_primo: libPasti.arrayMenu[5].primo,
        sabato_secondo: libPasti.arrayMenu[5].secondo,
        sabato_dessert: libPasti.arrayMenu[5].dessert,

        domenica_primo: libPasti.arrayMenu[6].primo,
        domenica_secondo: libPasti.arrayMenu[6].secondo,
        domenica_dessert: libPasti.arrayMenu[6].dessert

        },
        function(data){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end(data);
        });

    console.log("Sei nella pagina di salvataggio domenica.");
    console.log(libPasti.arrayMenu);

});

app.get('/confermaMenu', function(request, response){
    response.sendFile(__dirname + '/html/confermaOrdine.html');
});





//Set the server to listen on a specific port
app.listen('1337','127.0.0.1');

console.log("Server is running at http://127.0.0.1:1337");
