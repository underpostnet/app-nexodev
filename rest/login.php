<?php

include 'C:/dd/deploy_area/nexodev/modules/util.php';

$data = json_decode(file_get_contents('c:/dd/global_data/json/nexodev/nexodev_db.json'), true);

$json_res = json_decode("{}", true);

$input = json_decode( file_get_contents( 'php://input' ), true );

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------



$json_res['state'] = false;

for($i=0;$i<l($data['clientes']);$i++){

  if(( $data['clientes'][$i]['email'] == $input['email'] )
    and
    ( $data['clientes'][$i]['pass'] == $input['pass'] )){

      $json_res['state'] = true;
      $json_res['content'] = $data['clientes'][$i];

      session_start();

      $_SESSION['nexodev-name'] = ''.$json_res['content']['nombre'];
      $_SESSION['nexodev-email'] = ''.$json_res['content']['email'];

  }

}


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

echo json_encode($json_res);

 ?>
