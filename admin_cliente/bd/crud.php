
<?php
//echo "Hola";
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

// Recepción de los datos enviados mediante POST desde el JS
$cas = (isset($_POST['cas'])) ? $_POST['cas'] : '';
$nombreProducto = (isset($_POST['nombreProducto'])) ? $_POST['nombreProducto'] : '';
$idGrupo = (isset($_POST['idGrupo'])) ? $_POST['idGrupo'] : '';
$idUso = (isset($_POST['idUso'])) ? $_POST['idUso'] : '';
$nombreFabricante = (isset($_POST['nombreFabricante'])) ? $_POST['nombreFabricante'] : '';
$idClase1 = (isset($_POST['idClase1'])) ? $_POST['idClase1'] : '';

//$idClase1Post = NULL;

//echo $idClase1Post;

$idCategoria1 = (isset($_POST['idCategoria1'])) ? $_POST['idCategoria1'] : '';
$idPalabraAdvertencia1 = (isset($_POST['idPalabraAdvertencia1'])) ? $_POST['idPalabraAdvertencia1'] : '';
$idIndicacion1 = (isset($_POST['idIndicacion1'])) ? $_POST['idIndicacion1'] : '';
$idPictograma1 = (isset($_POST['idPictograma1'])) ? $_POST['idPictograma1'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
switch($opcion){
    case 1: //alta
        $consulta = "INSERT INTO producto (cas,
                                            nombreProducto,
                                            idGrupo,
                                            idUso,
                                            nombreFabricante,
                                            idClasePeligro1,
                                            idCategoriaPeligro1,
                                            idPalabraAdvertencia1,
                                            idIndicacion1,
                                            idPictograma1) VALUES (
                                            '$cas',
                                            '$nombreProducto',
                                            $idGrupo,
                                            $idUso,
                                            '$nombreFabricante',
                                            $idClase1,
                                            $idCategoria1,
                                            $idPalabraAdvertencia1,
                                            $idIndicacion1,
                                            $idPictograma1)";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT cas, nombreProducto, nombreGrupo, nombreUso, nombreFabricante FROM vista_productos_reducida ORDER BY cas DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 2: //modificación
        if ($pass1=="") {
            $consulta = "UPDATE usuarios SET cedula='$newid', nombre='$nombre', apellido1='$apellido1', apellido2='$apellido2', telefono='$telefono', correo='$correo', idTipoUsuario='$idTipoUsuario', wsNotif='$wsNotif', idLugarTrabajo='$idLugarTrabajo' WHERE cedula='$id'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $consulta = "SELECT cedula, nombre, apellido1, apellido2, telefono, correo, nombretipoUsuario, wsNotif, nombreLugarTrabajo FROM usuarios
                        inner join tipoUsuario on usuarios.idTipoUsuario=tipoUsuario.idTipoUsuario
                        inner join empresa on usuarios.idEmpresa=empresa.idEmpresa
                        inner join lugarTrabajo on usuarios.idLugarTrabajo=lugarTrabajo.idLugarTrabajo
                        WHERE cedula='$newid'";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            break;   
        } else {
            $consulta = "UPDATE usuarios SET cedula='$newid', nombre='$nombre', apellido1='$apellido1', apellido2='$apellido2', pass='$pass', telefono='$telefono', correo='$correo', idTipoUsuario='$idTipoUsuario', wsNotif='$wsNotif', idLugarTrabajo='$idLugarTrabajo' WHERE cedula='$id'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            
            $consulta = "SELECT cedula, nombre, apellido1, apellido2, telefono, correo, nombretipoUsuario, wsNotif, nombreLugarTrabajo FROM usuarios
                        inner join tipoUsuario on usuarios.idTipoUsuario=tipoUsuario.idTipoUsuario
                        inner join empresa on usuarios.idEmpresa=empresa.idEmpresa
                        inner join lugarTrabajo on usuarios.idLugarTrabajo=lugarTrabajo.idLugarTrabajo
                        WHERE cedula='$newid'";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            break;   
        }
    case 3://baja
        $consulta = "DELETE FROM producto WHERE cas='$cas'";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);                          
        break;
}
print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;
