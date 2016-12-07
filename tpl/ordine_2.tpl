<!-- changeTextInLabel(label, TestoDaCambiare); per cambiare il testo nella label di modo da creare un solo template per tutte le pagine di odine (primi, secondi, contorni, frutta e dolci e riepilogo) -->
<!-- in javascript bisogna creare la tabella dinabica deivata dal database, bisogna calbiare il valore delle label e il nome del bottone quando viene generata la pagina  -->

<!DOCTYPE html>
<html>
	<head>
		<title>Prenota</title>
		<meta charset="utf-8">
	</head>
    
    <body>
    <p>
        \\tabella di 2 colonne inizialmente vuota da generare dinamicamente don javascript lato server
        <main id="main"> 
            <br>
            <label id="id_titolo"><strong> TITOLO </strong></label>
            
            <br>
            <hr>
            <br>
            
            <table id=id_table width="200" border="1">
                <tbody>
                <tr>
                    <td value=>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                </tbody>
            </table>
        </main>
    </p>
    <input type="button" name="btn_salta" id="btn_salta" value=(:btn_nome:)>
    </body>
</html>
