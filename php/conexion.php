<?php
    $mysqli = new mysqli('localhost','id5148839_root2','toor2','id5148839_fortnite');
    if($mysqli->connect_errno):
        echo "Error al conectarse con MySQL debido al error ".$mysqli->connect_error;
    endif;
?>