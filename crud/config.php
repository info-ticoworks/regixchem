<?php
try {
  $host = "51.222.207.182";
  $usuario = "rchemuser";
  $clave = "gseeHI02TI8DRzoWkOap";
  $bd="regixchem";
  $conexion = mysqli_connect($host, $usuario, $clave, $bd);

  // Check connection
  if ($conexion->connect_error) {
    die("Connection failed: " . $conexion->connect_error);
  } else {
    echo '<script>console.log("TicoWorks says: Conexión Establecida 07-08-2022")</script>';
  }
  //echo "Connected successfully";
  } catch (Exception $e) {
  log_exception($e);
  echo '<script>console.log("Errorcito")</script>';
}
?>
