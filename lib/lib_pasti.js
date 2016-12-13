/**
* Struttura dati per salvare i pasti selezionati
*/
var menuArray = new Array();

function menu(){
	var temp = {
		giorno:"",
		primo:"",
		secondo:"",
		dessert:"",
	};
	return temp;
}

/**
*  Funzione che aggiunge un menu scelto all'array
*/
function addMenu(menu){
    menuArray.push(menu);
}

/**
*   
*   @return l'ultimo menu scelto aggiunto
*/
function getLast(){
    return menuArray.pop;
}

// EXPORTS
exports.Menu = menu;
exports.addMenu = addMenu;
exports.arrayMenu = menuArray;