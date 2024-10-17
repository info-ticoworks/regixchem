<?php 

include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$idReceta = (isset($_POST['idReceta'])) ? $_POST['idReceta'] : '';

// $js_code = 'CAS en PHP: ' . json_encode($cas, JSON_HEX_TAG) . ';';

// echo $js_code;

$consulta = "SELECT idReceta,
					nombreReceta,
					nombreFabricanteReceta,
					direccionFabricanteReceta,
					telefonoFabricanteReceta,
					idEmpresa,
					cas1,
					cas2,
					cas3,
					cas4,
					cas5,
					cas6,
					cas7,
					cas8,
					cas9,
					cas10,
					cas11,
					cas12,
					cas13,
					cas14,
					cas15,
					onu1,
					onu2,
					onu3,
					onu4,
					onu5,
					onu6,
					onu7,
					onu8,
					onu9,
					onu10,
					onu11,
					onu12,
					onu13,
					onu14,
					onu15,
					cantidad1,
					cantidad2,
					cantidad3,
					cantidad4,
					cantidad5,
					cantidad6,
					cantidad7,
					cantidad8,
					cantidad9,
					cantidad10,
					cantidad11,
					cantidad12,
					cantidad13,
					cantidad14,
					cantidad15
					FROM receta
					WHERE idReceta='$idReceta'
					ORDER BY idReceta DESC LIMIT 1";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);

print json_encode($data); //enviar el array final en formato json a JS

$conexion = NULL;