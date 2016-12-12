/**
* Struttura dati per la registrazione dei dati di un nuovo utente
*/
var userArr = new Array();

/**
*	Crea un oggetto employee inizializzato.
**/
function user(){
    var temp = {
        nome : "",
        cognome : "",
        data_n : "",
        indirizzo : "",
        cap : "",
        comune : "",
        prov : "",
        n_tel : "",
        email : "",
        cf : "",
        peseo : "",
        altezza : "",
        sesso : "",
        into : "",
	};
    
	return temp;
}

/**
*  Funzione che aggiunge un dipendente all'array
*/
function addUser(user){
    userArr.push(user);
}

/**
*   
*   @return l'ultimo user aggiunto per poterlo aggiornare nella seconda parte della registrazione
*/
function getLast(){
    return userArr.pop;
}

// EXPORTS
exports.User = user;
exports.addUser = addUser;