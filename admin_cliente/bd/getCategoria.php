<?php

try {

include '../bd/config.php';

$idClase = 0;

if(isset($_POST['clase'])){
$idClase = mysqli_real_escape_string($con,$_POST['clase']);
}

$cat_arr = array();

if($idClase > 0){
    
$sql = "SELECT DISTINCT idCategoriaPeligro, nombreCategoriaPeligro FROM vista_categoria_peligro WHERE idClasePeligro=".$idClase;

$result = mysqli_query($con,$sql);

while( $row = mysqli_fetch_array($resultado) ){
$idCategoriaPeligro = $row['idCategoriaPeligro'];
$nombreCategoriaPeligro = $row['nombreCategoriaPeligro'];

$cat_arr[] = array("idCategoriaPeligro" => $idCategoriaPeligro, "nombreCategoriaPeligro" => $nombreCategoriaPeligro);
}
}
// encoding array to json format
echo json_encode($cat_arr);

} catch (Exception $e) {
    echo 'Excepción capturada: ',  $e->getMessage(), "\n";
}