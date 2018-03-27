<?php
	$destino = $_POST['bporcel17@jaumebalmes.net'];
	$texto = $_POST['link'];
    $cuerpo = $_POST['mensaje'];
	if(mail($destino,$texto,$cuerpo)){
		echo "Mail Enviado con exito!";
	}else{
		echo "Ha habido un error :/";
	}
?>