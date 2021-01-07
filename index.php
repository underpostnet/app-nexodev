<?php

include 'C:/dd/deploy_area/nexodev/modules/nexodev.php';
$str_data = file_get_contents('C:/dd/global_data/json/nexodev/nexodev.json');
$uri = $_SERVER['REQUEST_URI'];
renderPath($uri, $str_data, 1);

 ?>
