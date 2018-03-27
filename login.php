<?php
session_start();
require 'php/conexion.php';

if(!empty($_POST['userlg']) && !empty($_POST['contralg'])){
    $stmt = $mysqli->prepare('SELECT id FROM usuarios WHERE  username = ?');
    $stmt->bind_param('s',$_POST['userlg']);
    $stmt->execute();
    $stmt = $stmt->fetch(PDO::FETCH_ASSOC);
    
    $message ='';
    
    if(count($stmt)>0 && password_verify($_POST['contralg'],$stmt['contraseña'])){
        $_SESSION['user_id'] = $stmt['id'];
        header('Location: /php-login');
    }else{
        $message = 'Los datos no parecen correctos, intentelo de nuevo.';
    }
}
?>
<!DOCTYPE html>
<html lang="es" ng-app="Moviles">
<head>
	<link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="javascript.js"></script>
	<link href="css/clips.css" rel="stylesheet" type="text/css">
	<title>Index</title>
</head>
    <body>
	    <div class="header">
	       <img id="logo" src="img/logo.png">
	       <p><a href="log.php">Entrar</a> | <a href="registro.php">Registrarse</a></p>
	       <ul>
	           <li><a href="contacto.html">Envia tus clips</a></li>
               <li><a href="clips.html">Clips de la semana</a></li>
	           <li><a href="Objetos.html">Objetos</a></li>
	           <li><a href="index.html">Inicio</a></li>
	       </ul>
	    </div>
	    <div class="contenido">
	        <?php if (!empty($message)) : ?>
	        <p><?= $message ?></p>
	        <?php endif;?>
	    </div>
	    <div class="footer">
	    <ul>
	        <li><a href="#">Instagram</a></li>
	        <li><a href="#">Youtube</a></li>
	    </ul>
	</div>
    </body>
</html>?