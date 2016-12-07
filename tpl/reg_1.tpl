<!DOCTYPE html>
<html>
	<head>
		<title>Registrazione</title>
		<meta charset="utf-8">
	</head>
    
    <body>
        <img src="public/immage/sfondo_1.jpg" width="884" height="239" alt=""/>
        <br>
        <p>
            <label>Nome:</label>
            <input type="text" id="txt_nome" size="50" maxlength="50">
            <br>
            <label>Cognome:</label>
            <input type="text" id="txt_cog" size="46">
            <br>
            <label>Data di nascita:</label>
            <input type="date" name="date" id="date">
            <br>
            <label>Indirizzo:</label>
            <input type="text" name="indirizzo" id="txt_ind">	
            <br>
            <label>CAP:</label>
            <input type="number" name="number" id="txt_num">
            <br>
            <label>Comune:</label>
            <input type="text" name="comune" id="txt_com">
            <br>
            <label>Provincia:</label>
            <input type="text" name="provincia" id="txt_prov">
            <br>
            <label>Numero di telefono:</label>
            <input type="number" name="number2" id="num_tel">
            <br>
            <label>E-mail:</label>
            <input type="text" name="email" id="txt_email">
            <br>
            <label>Codice fiscale:</label>
            <input type="text" name="cf" id="txt_cf">
        </p>
        <p>
          <input type="button" name="btn_annulla" id="btn_annulla" value="Annulla">
          <input type="button" name="btn_pro" id="btn_pro" value="Prosegui">
        </p>
    </body>
</html>
