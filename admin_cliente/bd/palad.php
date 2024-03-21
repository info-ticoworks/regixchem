<?php 
$conexion=mysqli_connect('51.222.207.182','rchemuser','gseeHI02TI8DRzoWkOap','regixchem');
$palad=$_POST['palad'];
	$sql="SELECT DISTINCT idPalabraAdvertencia,
			 nombrePalabraAdvertencia
		FROM vista_categoria_peligro
		WHERE idCategoriaPeligro = $palad
		ORDER BY nombrePalabraAdvertencia asc";
	$result=mysqli_query($conexion,$sql);
	$cadena="<option selected disabled value=''>Elija una palabra de advertencia.</option>";
	while ($ver=mysqli_fetch_row($result)) {
		$cadena=$cadena.'<option value='.$ver[0].'>'.($ver[1]).'</option>';
	}
	echo $cadena;