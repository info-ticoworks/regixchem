<?php 

$cas = (isset($_POST['cas'])) ? $_POST['cas'] : '';

$conn = mysqli_connect("51.222.207.182", "rchemuser", "gseeHI02TI8DRzoWkOap", "regixchem"); 

$result = mysqli_query($conn, "SELECT imagenPictograma1 FROM vista_productos_completa_2 WHERE cas='$cas'"); 
$row = mysqli_fetch_array($result); 
$image = $row['imagenPictograma1']; 
header('Content-Type: image/png'); 
echo $image;

$conexion = NULL;