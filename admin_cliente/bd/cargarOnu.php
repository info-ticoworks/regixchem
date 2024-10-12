<?php 

include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$onu = (isset($_POST['onu'])) ? $_POST['onu'] : '';

// $js_code = 'CAS en PHP: ' . json_encode($cas, JSON_HEX_TAG) . ';';

// echo $js_code;

$consulta = "SELECT * FROM numUN
				WHERE onu='$onu'
				ORDER BY onu DESC LIMIT 1";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);

print json_encode($data); //enviar el array final en formato json a JS

$conexion = NULL;