<?php 
$conexion=mysqli_connect('51.222.207.182','rchemuser','gseeHI02TI8DRzoWkOap','regixchem');
$ind=$_POST['ind'];
	$sql="SELECT DISTINCT idIndicacion,
			 nombreIndicacion
		FROM vista_categoria_peligro
		WHERE idPalabraAdvertencia = $ind
		ORDER BY nombreIndicacion asc";
	$result=mysqli_query($conexion,$sql);
	$cadena="<option selected disabled value=''>Elija una Indicación.</option>";
	while ($ver=mysqli_fetch_row($result)) {
		$cadena=$cadena.'<option value='.$ver[0].'>'.($ver[1]).'</option>';
	}
	echo $cadena;
