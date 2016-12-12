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
function addUtente(form){
    var nome=document.getElementById("txt_nome").value;
	var cognome=document.getElementById("txt_cog").value;
	var data=document.getElementById("data").value;
	var indirizzo=document.getElementById("txt_ind").value;
    var cap=document.getElementById("txt_cap").value;
    var comune=document.getElementById("txt_com").value;
	var prov=document.getElementById("txt_prov").value;
	var tel=document.getElementById("num_tel").value;
    var email=document.getElementById("txt_email").value;
	var cf=document.getElementById("txt_cf").value;
    
	if(nome != "" && cognome != "" && data != "" && indirizzo != "" && cap != "" && comune != "" && prov != "" && tel != "" && email != "" && cf != ""){
        form.action="/registra1";
		form.submit();
	}else{
		alert("Completare tutti i campi!");
    }
}