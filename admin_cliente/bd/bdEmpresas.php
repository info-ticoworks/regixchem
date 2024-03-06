<?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

// Recepción de los datos enviados mediante POST desde el JS   
$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
$tipoCedula = (isset($_POST['tipoCedula'])) ? $_POST['tipoCedula'] : '';
$apellido1 = (isset($_POST['apellido1'])) ? $_POST['apellido1'] : '';
$apellido2 = (isset($_POST['apellido2'])) ? $_POST['apellido2'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$newid = (isset($_POST['newid'])) ? $_POST['newid'] : '';
$pass1 = (isset($_POST['pass1'])) ? $_POST['pass1'] : '';
$pass2 = (isset($_POST['pass2'])) ? $_POST['pass2'] : '';
$telefono = (isset($_POST['telefono'])) ? $_POST['telefono'] : '';
$correo = (isset($_POST['correo'])) ? $_POST['correo'] : '';
$pass = password_hash($pass2,PASSWORD_DEFAULT);
$idTipoUsuario = (isset($_POST['idTipoUsuario'])) ? $_POST['idTipoUsuario'] : '';
$wsNotif = (isset($_POST['wsNotif'])) ? $_POST['wsNotif'] : '';
$idPais = (isset($_POST['idPais'])) ? $_POST['idPais'] : '';
$idEmpresa = (isset($_POST['idEmpresa'])) ? $_POST['idEmpresa'] : '';
switch($opcion){
    case 1: //alta
        $consulta = "INSERT INTO usuarios (cedula, idTipoCedula, nombre, apellido1, apellido2, pass, telefono, correo, idTipoUsuario, wsNotif, pais, idEmpresa) VALUES('$newid', '$nombre', '$tipoCedula' '$apellido1', '$apellido2', '$pass', $telefono, '$correo', '$idTipoUsuario', '$wsNotif', '$idPais', '$idEmpresa') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT cedula, tipoCedula, nombre, apellido1, apellido2, telefono, correo, nombretipoUsuario, wsNotif, pais, nombreEmpresa
                    FROM vista_usuarios
                    where cedula = '$newid'
                    ORDER BY cedula DESC LIMIT 1";
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

