<!DOCTYPE html>
<html>
	<head>
		<title>BENVENUTO</title>
        <script type="text/javascript">
            function entra(form){
                form.action="/home";
                form.submit();
            }
        </script>
		<meta charset="utf-8">
	</head>
    
    <body>
        <img src="public/immage/sfondo_3.jpg" width="880" height="240" alt=""/>
        <h3>BENVENUTO</h3>
        <form id = "benvenuto" method="POST">
            <input type="button" id="btn_home" onclick="entra(this.form)" value="Entra">
        </form>
    </body>
</html>