<!DOCTYPE html>
<html>
	<head>
		<title>Prenota</title>
		<meta charset="utf-8">
        <link rel="stylesheet" href="public/css/paginaOrdini.css">
	</head>
    
    <body>
        <img src="public/immage/sfondo_3.jpg" width="880" height="240" alt=""/>

            <h3> PRENOTA IL TUO MENU' PER IL GIORNO : LUNEDI'</h3>
            <form action="/prenotaGiorno2" method="post">
                <h4>PRIMI</h4>
                <input type="radio" id="primi" name="primi" value="Agnolotti">Agnolotti
                <input type="radio" id="primi" name="primi" value="Anellini al forno">Anellini al forno
                <input type="radio" id="primi" name="primi" value="Bavette al pesto">Bavette al pesto

                <h4>SECONDI</h4>
                <input type="radio" id="secondi" name="secondi" value="Alette di pollo">Alette di pollo
                <input type="radio" id="secondi" name="secondi" value="Anatra all'arancia">Anatra all'arancia
                <input type="radio" id="secondi" name="secondi" value="Anelli di calamari al forno">Anelli di calamari al forno

                <h4>DESSERT</h4>
                <input type="radio" id="dessert" name="dessert" value="American Muffin">American Muffin
                <input type="radio" id="dessert" name="dessert" value="Angel Cake">Angel Cake
                <input type="radio" id="dessert" name="dessert" value="Banana Split">Banana Split

                </br>
        
                <input type="submit" id="button" name="btn_prosegui" id="btn_prosegui" value="Prosegui">
            </form>

    </body>
</html>