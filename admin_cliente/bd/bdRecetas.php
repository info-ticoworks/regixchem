<?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

// Recepción de los datos enviados mediante POST desde el JS
$nombreReceta = (isset($_POST['nombreReceta'])) ? $_POST['nombreReceta'] : '';
$cas1 = (isset($_POST['cas1'])) ? $_POST['cas1'] : '';
$cantidad1 = (isset($_POST['cantidad1'])) ? $_POST['cantidad1'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

switch($opcion){
    case 1: //alta
        $consulta = "INSERT INTO receta (nombreReceta, cas1, cantidad1) VALUES('$nombreReceta', '$cas1', '$cantidad1') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT idReceta, nombreReceta, nombreEmpresa
                    FROM vista_receta
                    where nombreReceta = '$nombreReceta'
                    ORDER BY nombreReceta DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;

    case 2: //modificación
        if ($pass1=="") {
            $consulta = "UPDATE usuarios SET cedula='$newid', nombre='$nombre', idTipoCedula='$tipoCedula', apellido1='$apellido1', apellido2='$apellido2', telefono='$telefono', correo='$correo', idTipoUsuario='$idTipoUsuario', wsNotif='$wsNotif', idPais='$idPais', idEmpresa='$idEmpresa' WHERE cedula='$id'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $consulta = "SELECT cedula, tipoCedula, nombre, apellido1, apellido2, telefono, correo, nombretipoUsuario, wsNotif, pais, nombreEmpresa
                        FROM vista_usuarios
                        WHERE cedula='$newid'
                        ORDER BY cedula DESC LIMIT 1";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            break;   
        } else {
            $consulta = "UPDATE usuarios SET cedula='$newid', nombre='$nombre', idTipoCedula='$tipoCedula', apellido1='$apellido1', apellido2='$apellido2', pass='$pass', telefono='$telefono', correo='$correo', idTipoUsuario='$idTipoUsuario', wsNotif='$wsNotif', idPais='$idPais', idEmpresa='$idEmpresa' WHERE cedula='$id'";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            
            $consulta = "SELECT cedula, tipoCedula, nombre, apellido1, apellido2, telefono, correo, nombretipoUsuario, wsNotif, pais, nombreEmpresa
                        FROM vista_usuarios
                        WHERE cedula='$newid'
                        ORDER BY cedula DESC LIMIT 1";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            break;   
        }
    case 3://baja
        $consulta = "DELETE FROM usuarios WHERE cedula='$id'";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);                          
        break;        
}
print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;

