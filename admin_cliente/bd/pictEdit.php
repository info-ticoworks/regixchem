<?php 
$conexion=mysqli_connect('51.222.207.182','rchemuser','gseeHI02TI8DRzoWkOap','regixchem');
$pict=$_POST['pict'];
	$sql="SELECT DISTINCT idPictograma
		FROM vista_categoria_peligro
		WHERE idCategoriaPeligro = $pict
		ORDER BY idPictograma asc";
	$result=mysqli_query($conexion,$sql);

	$ver=mysqli_fetch_row($result);

	$idPict = intval($ver[0]);

	echo $idPict;
