<!DOCTYPE html>
<html>
	<head>
		<title>Home</title>
		<meta charset="utf-8">
        <script type="text/javascript" src="public/js/home.js"></script>
        <link rel="stylesheet" href="public/css/style_home.css">
	</head>
    
    <body>
        <img src="public/immage/sfondo_2.jpg" width="880" height="240" alt=""/><br>
        <form id = "registra" method="POST">
            <table width="200" border="1">
              <tbody>
                <tr>
                  <td><input name="imageField" type="image" id="imageField" src="public/immage/btn_prenota.jpg" onclick="prenota(this.form)" width="250" height="250"></td>
                  <td><input name="imageField2" type="image" id="imageField2" src="public/immage/btn_cat.jpg" width="250" height="250"></td>
                </tr>
                <tr>
                  <td><input name="imageField3" type="image" id="imageField3" src="public/immage/btn_stat.jpg" width="250" height="250"></td>
                  <td><input name="imageField4" type="image" id="imageField4" src="public/immage/btn_info.jpg" width="250" height="250"></td>
                </tr>
              </tbody>
            </table>
            <div id="registra" (:if[open] ~ [:then ~ class="hidden":][:else ~ class="visible":]:)>
                <input type="button" id="btn_reg" onclick="registra(this.form)" width="250" value="Registrati">
            </div>
        </form>
    </body>
</html>