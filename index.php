<?php

include 'C:/xampp/htdocs/nexodev/modules/path.php';
$str_data = file_get_contents('C:/xampp/htdocs/nexodev/http/nexodev/data.json');
$uri = $_SERVER['REQUEST_URI'];
renderPath($uri, $str_data, 1);

 ?>
