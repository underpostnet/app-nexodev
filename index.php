<?php

include 'C:/xampp/htdocs/nexodev/modules/nexodev.php';
$str_data = file_get_contents('C:/dd/global_data/json/nexodev/nexodev.json');
$uri = $_SERVER['REQUEST_URI'];
renderPath($uri, $str_data, 1);

 ?>
