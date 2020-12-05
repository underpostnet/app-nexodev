<?php


$json_res = json_decode("{}", true);

$params = json_decode( file_get_contents( 'php://input' ), true );

echo json_encode($params);


 ?>
