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
					nombreFabricante1,
					idClasePeligro1,
					idClasePeligro2,
					idClasePeligro3,
					idClasePeligro4,
					idClasePeligro5,
					idClasePeligro6,
					idClasePeligro7,
					idClasePeligro8,
					idClasePeligro9,
					idClasePeligro10,
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
					idCategoriaPeligro1,
					idCategoriaPeligro2,
					idCategoriaPeligro3,
					idCategoriaPeligro4,
					idCategoriaPeligro5,
					idCategoriaPeligro6,
					idCategoriaPeligro7,
					idCategoriaPeligro8,
					idCategoriaPeligro9,
					idCategoriaPeligro10,
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
					idPalabraAdvertencia1,
					idPalabraAdvertencia2,
					idPalabraAdvertencia3,
					idPalabraAdvertencia4,
					idPalabraAdvertencia5,
					idPalabraAdvertencia6,
					idPalabraAdvertencia7,
					idPalabraAdvertencia8,
					idPalabraAdvertencia9,
					idPalabraAdvertencia10,
					nombrePalabraAdvertencia1,
					nombrePalabraAdvertencia2,
					nombrePalabraAdvertencia3,
					nombrePalabraAdvertencia4,
					nombrePalabraAdvertencia5,
					nombrePalabraAdvertencia6,
					nombrePalabraAdvertencia7,
					nombrePalabraAdvertencia8,
					nombrePalabraAdvertencia9,
					nombrePalabraAdvertencia10,
					idIndicacion1,
					idIndicacion2,
					idIndicacion3,
					idIndicacion4,
					idIndicacion5,
					idIndicacion6,
					idIndicacion7,
					idIndicacion8,
					idIndicacion9,
					idIndicacion10,
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
					nivel1,
					nivel2,
					nivel3,
					nivel4,
					nivel5,
					nivel6,
					nivel7,
					nivel8,
					nivel9,
					nivel10,
					idUnidad1,
					idUnidad2,
					idUnidad3,
					idUnidad4,
					idUnidad5,
					idUnidad6,
					idUnidad7,
					idUnidad8,
					idUnidad9,
					idUnidad10,
					nombreUnidad1,
					nombreUnidad2,
					nombreUnidad3,
					nombreUnidad4,
					nombreUnidad5,
					nombreUnidad6,
					nombreUnidad7,
					nombreUnidad8,
					nombreUnidad9,
					nombreUnidad10
					FROM vista_productos_completa_2
					WHERE cas='$cas'
					ORDER BY cas DESC LIMIT 1";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);

print json_encode($data); //enviar el array final en formato json a JS

$conexion = NULL;