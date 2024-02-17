<?php
$host = "51.222.207.182"; /* Host name */
$user = "rchemuser"; /* User */
$password = "gseeHI02TI8DRzoWkOap"; /* Password */
$dbname = "regixchem"; /* Database name */
$conxion = mysqli_connect($host, $user, $password,$dbname);
// Revisamos la conexión
if (!$conexion) {
die("Connection failed: " . mysqli_connect_error());
}