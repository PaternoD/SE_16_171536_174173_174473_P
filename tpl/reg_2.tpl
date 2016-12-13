<!DOCTYPE html>
<html>
	<head>
		<title>Registrazione</title>
        <script type="text/javascript" src="public/js/reg_2.js"></script>
		<meta charset="utf-8">
	</head>
    
    <body>
        <img src="public/immage/sfondo_3.jpg" width="880" height="240" alt=""/>
        <p>
            <label>Dati facoltativi</label>
        </p>
        <form id = "registra" method="POST">
            <p>
                <br>
                <label>Peso:</label>
                <input type="number" name="peso" id="num_peso" value="(:peso:)">
                <br>
                <label>Altezza:</label>
                <input type="number" name="altezza" id="num_alt" value="(:altezza:)">
                <label>Sesso:</label>
                <select name="sesso" id="sel_sesso" value="(:sesso:)">
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>
            </p>
            <p>
              <label>Intolleranze:</label>
              <textarea name="into" id="text_into" value="(:into:)"></textarea>
            </p>
            <p>
              <input type="button" id="btn_annulla" onclick="" value="Annulla">
              <input type="button" id="btn_pro"  onclick="addDati(this.form)"value="Prosegui">
            </p>
        </form>
    </body>
</html>