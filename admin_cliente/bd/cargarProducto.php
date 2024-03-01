<?php 

include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$cas = (isset($_POST['cas'])) ? $_POST['cas'] : '';

// $js_code = 'CAS en PHP: ' . json_encode($cas, JSON_HEX_TAG) . ';';

// echo $js_code;

$consulta = "SELECT cas,
					nombreProducto,
					nombreGrupo,
					nombreUso,
					nombreFabricante,
					nombreClasePeligro1,
					nombreClasePeligro2,
					nombreClasePeligro3,
					nombreClasePeligro4,
					nombreClasePeligro5,
					nombreClasePeligro6,
					nombreClasePeligro7,
					nombreClasePeligro8,
					nombreClasePeligro9,
					nombreClasePeligro10,
					nombreCategoriaPeligro1,
					nombreCategoriaPeligro2,
					nombreCategoriaPeligro3,
					nombreCategoriaPeligro4,
					nombreCategoriaPeligro5,
					nombreCategoriaPeligro6,
					nombreCategoriaPeligro7,
					nombreCategoriaPeligro8,
					nombreCategoriaPeligro9,
					nombreCategoriaPeligro10,
					palabraAdvertencia1,
					palabraAdvertencia2,
					palabraAdvertencia3,
					palabraAdvertencia4,
					palabraAdvertencia5,
					palabraAdvertencia6,
					palabraAdvertencia7,
					palabraAdvertencia8,
					palabraAdvertencia9,
					palabraAdvertencia10,
					nombreIndicacion1,
					nombreIndicacion2,
					nombreIndicacion3,
					nombreIndicacion4,
					nombreIndicacion5,
					nombreIndicacion6,
					nombreIndicacion7,
					nombreIndicacion8,
					nombreIndicacion9,
					nombreIndicacion10,
					idPictograma1,
					idPictograma2,
					idPictograma3,
					idPictograma4,
					idPictograma5,
					idPictograma6,
					idPictograma7,
					idPictograma8,
					idPictograma9,
					idPictograma10,
					nivel,
					unidad
					FROM vista_productos_completa
					WHERE cas='$cas'
					ORDER BY cas DESC LIMIT 1";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);

print json_encode($data); //enviar el array final en formato json a JS

$conexion = NULL;