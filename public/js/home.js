/** 
* Funzione che fa la request per la pagina di registrazione
*/

function registra(form){
    form.action="/registra";
    form.submit();
}

/** 
* Funzione che fa la request per la pagina di prenotazione pasti
*/

function prenota(form){
    form.action="/prenotaGiorni";
    form.submit();
}