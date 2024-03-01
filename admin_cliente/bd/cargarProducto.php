<?php 

include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$cas = (isset($_POST['cas'])) ? $_POST['cas'] : '';

// $js_code = 'CAS en PHP: ' . json_encode($cas, JSON_HEX_TAG) . ';';

// echo $js_code;

$consulta = "SELECT cas, nombreProducto, nombreGrupo, nombreUso, nombreFabricante FROM vista_productos_completa
			WHERE cas='$cas'
			ORDER BY cas DESC LIMIT 1";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);


print json_encode($data); //enviar el array final en formato json a JS

$conexion = NULL;