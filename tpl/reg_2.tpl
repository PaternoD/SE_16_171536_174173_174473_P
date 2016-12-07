<!DOCTYPE html>
<html>
	<head>
		<title>Registrazione</title>
		<meta charset="utf-8">
	</head>
    
    <body>
        <img src="public/immage/sfondo_3.jpg" width="880" height="240" alt=""/>
        <p>
            <label>Dati facoltativi</label>
        </p>
        <p>
            <br>
            <label>Peso:</label>
            <input type="number" name="peso" id="num_peso">
            <br>
            <label>Altezza:</label>
            <input type="number" name="altezza" id="num_altezza">
            <label>Sesso:</label>
            <select name="sesso" id="sel_sesso">
                <option value="M">M</option>
                <option value="F">F</option>
            </select>
        </p>
        <p>
          <label>Intolleranze:</label>
          <textarea name="textarea" id="text_into"></textarea>
        </p>
        <p>
          <input type="button" name="btn_annulla" id="btn_annulla" value="Annulla">
          <input type="button" name="btn_pro" id="btn_pro" value="Prosegui">
        </p>
    </body>
</html>