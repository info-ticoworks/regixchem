<?php 

include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$cas = (isset($_POST['cas'])) ? $_POST['cas'] : '';

// $js_code = 'CAS en PHP: ' . json_encode($cas, JSON_HEX_TAG) . ';';

// echo $js_code;

$consulta = "SELECT cas	FROM producto WHERE cas='$cas'";
$resultado = $conexion->prepare($consulta);
$resultado = $conexion->query($consulta);
while($row = $resultado->fetch()) {
    echo $row['cas'];
}

$conexion = NULL;