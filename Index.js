var express = require('express');

var app = express();

var pg = require('pg');

var util = require('util');

app.set('port', (process.env.PORT || 5000))

app.get('/create/', function(request, response){
    
    var text = 'responce:';
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    console.log("called databse");
    
    pg.connect(process.env.DATABASE_URL, function(err, client, done){
        
        console.log("connect to database");
        
        //create table
        client.query('create table utenti(id integer not null, id_nome varchar(20), id_cognome varchar(20), id_giorno integer, id_mese integer, id_anno integer, id_indirizzo varchar(20), id_cap integer, id_comune varchar(20), id_prov varchar(3), id_tel integer, id_email varchar(20), id_peso integer, id_altezza integer, id_sesso varchar(2))', function(err, result){
            done();
            
            if (err){
                console.error(err);
                response.send("Errore!!!!!!!!!!______!!! " + err);
            }else{
                response.end("Table created");
            }
        });
        
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});