/**
*   Procedo all'aggiunta dei valori all'ultimo user inserito nel vettore, solo almeno un campo è stato completato,
*   altrimenti passo direttamente al benvenuto.
*
*   @param form
*/
function addDati(form){
    var peso=document.getElementById("num_peso").value;
	var altezza=document.getElementById("num_alt").value;
	var sesso=document.getElementById("sel_sesso").value;
	var intolleranze=document.getElementById("text_into").value;
    
    if(peso == "" && altezza == "" && intolleranze == ""){
        form.action="/benvenuto";
        form.submit();
    }
    else{
        form.action="/registra2";
        form.submit();
    }
}