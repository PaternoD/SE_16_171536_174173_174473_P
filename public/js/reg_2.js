/**
*   Funzione di reset dei campi della form
**/

function resetForm(){
    document.getElementById("nome").value="";
	document.getElementById("cognome").value="";
	document.getElementById("data").value="";
	document.getElementById("indirizzo").value="";
	document.getElementById("provincia").value="";
	document.getElementById("tel").value="";
    document.getElementById("email").value="";
	document.getElementById("cf").value="";
}

/**
*   Procedo all'aggiunta dei valori nel vettore, solo se tutti i campi sono stati compilati,
*   altrimenti lancio un messaggio di errore.
*   Settto action per segnalare al server che sto effettuando una insert
*
*   @param form
*/
function addDati(form){
    var peso=document.getElementById("num_peso").value;
	var altezza=document.getElementById("num_alt").value;
	var sesso=document.getElementById("sel_sesso").value;
	var intolleranze=document.getElementById("text_into").value;
    
    if(peso == "" && altezza == "" && intolleranze == ""){
        form.action="/home";
        form.submit();
    }
    else{
        form.action="/registra2";
        form.submit();
    }
}