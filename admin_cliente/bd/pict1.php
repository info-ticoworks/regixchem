<?php 
$conexion=mysqli_connect('51.222.207.182','rchemuser','gseeHI02TI8DRzoWkOap','regixchem');
$pict1=$_POST['pict1'];
	$sql="SELECT DISTINCT idPictograma
		FROM vista_categoria_peligro
		WHERE idCategoriaPeligro = $pict1";
	$result=mysqli_query($conexion,$sql);

	$ver=mysqli_fetch_row($result);

	$idPict1 = intval($ver[0]);

	echo $idPict1;
?>