<?php 
$conexion=mysqli_connect('51.222.207.182','rchemuser','gseeHI02TI8DRzoWkOap','regixchem');
$cat1=$_POST['cat1'];
	$sql="SELECT DISTINCT idCategoriaPeligro,
			 nombreCategoriaPeligro
		FROM vista_categoria_peligro
		WHERE idClasePeligro = $cat1";
	$result=mysqli_query($conexion,$sql);
	$cadena="<option selected disabled value=''>Elija una categoría de peligro.</option>";
	while ($ver=mysqli_fetch_row($result)) {
		$cadena=$cadena.'<option value='.$ver[0].'>'.($ver[1]).'</option>';
	}
	echo  $cadena."";
?>