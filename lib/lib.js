/**
* Struttura dati temporane per la registrazione dei dati di un nuovo utente
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
	};
    
	return temp;
}


function addUser(user){
    userArr.push(user);
}


/**
*	RemoveEmp chiama la funzine getI per ottenere la posizione dell'elemento con
*   tale id, se esite elimina l'elemento.
*   
*	@param id rappresenta l'id dell'employee da eliminare.
**/

function removeEmp(id){
    var i = getI(id);
	if(i!=-1){
		empArr.splice(i,1);
	}
}

/**
*   Fornisce l'id immediatamente successivo al più
*   grande id inserito.
*   
*   @return id da inserire nel nuovo dipendente
*/
function getNextId(){
    var id = 0;
    for(var i=0; i<empArr.length; i++){
        if(empArr[i].id > id){
            id=empArr[i].id;
        }
    }
    id=id+1;
	return id;
}

// EXPORTS
exports.User = user;
exports.addUser = addUser;