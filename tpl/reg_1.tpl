<!DOCTYPE html>
<html>
	<head>
		<title>Registrazione</title>
		<meta charset="utf-8">
        <script type="text/javascript" src="public/js/reg_1.js"></script>
        <link rel="stylesheet" href="public/css/style.css">
	</head>
    
    <body>
        <img src="public/immage/sfondo_1.jpg" width="884" height="239" alt=""/>
        <br>
        <form id = "registra" method="POST">
            <p>
                <label>Nome:</label>
                <input type="text" name="nome" id="txt_nome" value="(:nome:)" size="50" maxlength="50">
                <br>
                <label>Cognome:</label>
                <input type="text" name="cognome" id="txt_cog" value="(:cognome:)" size="46">
                <br>
                <label>Data di nascita:</label>
                <input type="data" name="data" id="data" value="(:data:)">
                <br>
                <label>Indirizzo:</label>
                <input type="text" name="indirizzo" id="txt_ind" value="(:indirizzo:)">	
                <br>
                <label>CAP:</label>
                <input type="number" name="cap" id="txt_cap" value="(:cap:)">
                <br>
                <label>Comune:</label>
                <input type="text" name="comune" id="txt_com" value="(:comune:)">
                <br>
                <label>Provincia:</label>
                <input type="text" name="provincia" id="txt_prov" value="(:provincia:)">
                <br>
                <label>Numero di telefono:</label>
                <input type="number" name="tel" id="num_tel" value="(:tel:)">
                <br>
                <label>E-mail:</label>
                <input type="text" name="email" id="txt_email" value="(:email:)">
                <br>
                <label>Codice fiscale:</label>
                <input type="text" name="cf" id="txt_cf" value="(:cf:)">
            </p>
            <p>
              <input type="button" id="btn_annulla" onclick="resetForm()" value="Annulla">
              <input type="button" id="btn_pro" onclick="addUtente(this.form)" value="Prosegui">
            </p>
        </form>
    </body>
</html>
