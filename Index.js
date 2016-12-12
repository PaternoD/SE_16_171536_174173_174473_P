var express = require('express');
var bind = require('bind');
var bodyParser = require('body-parser');
//Aggiungo una libreria di supporto per la gestione degli users
var lib = require('./lib/lib.js');

//instantiate express
var app = express();

//listen in a specific port
app.set('port', (process.env.PORT || 1337));

//set the server to respond to a file request
app.use('/public',express.static(__dirname+'/public'));

//set Body-parser on the requests
app.use(bodyParser.urlencoded({ extended: false }));

//create a server
/**
*   CREATE A VOID TEMPLATE
**/
app.get('/', function(req, res) {
	//bind to template
	bind.toFile('tpl/reg_1.tpl', {}, 
    function(data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

/**
*   GET HOME
**/
app.post('/home',function(request,response){
    bind.toFile('tpl/home.tpl', {},
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
        
        //Nuovo user per acquisire i dati dalla form
		var user = new lib.User();
        //Flag per il controllo dell'errore
		var error = false;
        
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

//Set the server to listen on a specific port
app.listen('1337','127.0.0.1');

console.log("Server is running at http://127.0.0.1:1337");