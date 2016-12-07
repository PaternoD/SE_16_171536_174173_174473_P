var express = require('express');

var app = express();

var pg = require('pg');

var util = require('util');

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

app.get('/create/', function(request, response){
    
    var text = 'responce:';
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    console.log("called databse");
    
    pg.connect(process.env.DATABASE_URL, function(err, client, done){
        
        console.log("connect to database");
        
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

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});