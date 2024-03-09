<?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$cat=$_POST['cat'];

	$sql="SELECT DISTINCT idUnidad,
			 nombreUnidad
			FROM vista_unidad
			WHERE idCategoriaPeligro = $cat";

$resultado = $conexion->prepare($sql);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);

print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;