
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
$idCategoria1 = (isset($_POST['idCategoria1'])) ? $_POST['idCategoria1'] : '';
$idPalabraAdvertencia1 = (isset($_POST['idPalabraAdvertencia1'])) ? $_POST['idPalabraAdvertencia1'] : '';
$idIndicacion1 = (isset($_POST['idIndicacion1'])) ? $_POST['idIndicacion1'] : '';
$idPictograma1 = (isset($_POST['idPictograma1'])) ? $_POST['idPictograma1'] : '';

$idClase2 = (isset($_POST['idClase2'])) ? $_POST['idClase2'] : '';
$idCategoria2 = (isset($_POST['idCategoria2'])) ? $_POST['idCategoria2'] : '';
$idPalabraAdvertencia2 = (isset($_POST['idPalabraAdvertencia2'])) ? $_POST['idPalabraAdvertencia2'] : '';
$idIndicacion2 = (isset($_POST['idIndicacion2'])) ? $_POST['idIndicacion2'] : '';
$idPictograma2 = (isset($_POST['idPictograma2'])) ? $_POST['idPictograma2'] : '';

$idClase3 = (isset($_POST['idClase3'])) ? $_POST['idClase3'] : '';
$idCategoria3 = (isset($_POST['idCategoria3'])) ? $_POST['idCategoria3'] : '';
$idPalabraAdvertencia3 = (isset($_POST['idPalabraAdvertencia3'])) ? $_POST['idPalabraAdvertencia3'] : '';
$idIndicacion3 = (isset($_POST['idIndicacion3'])) ? $_POST['idIndicacion3'] : '';
$idPictograma3 = (isset($_POST['idPictograma3'])) ? $_POST['idPictograma3'] : '';

$idClase4 = (isset($_POST['idClase4'])) ? $_POST['idClase4'] : '';
$idCategoria4 = (isset($_POST['idCategoria4'])) ? $_POST['idCategoria4'] : '';
$idPalabraAdvertencia4 = (isset($_POST['idPalabraAdvertencia4'])) ? $_POST['idPalabraAdvertencia4'] : '';
$idIndicacion4 = (isset($_POST['idIndicacion4'])) ? $_POST['idIndicacion4'] : '';
$idPictograma4 = (isset($_POST['idPictograma4'])) ? $_POST['idPictograma4'] : '';

$idClase5 = (isset($_POST['idClase5'])) ? $_POST['idClase5'] : '';
$idCategoria5 = (isset($_POST['idCategoria5'])) ? $_POST['idCategoria5'] : '';
$idPalabraAdvertencia5 = (isset($_POST['idPalabraAdvertencia5'])) ? $_POST['idPalabraAdvertencia5'] : '';
$idIndicacion5 = (isset($_POST['idIndicacion5'])) ? $_POST['idIndicacion5'] : '';
$idPictograma5 = (isset($_POST['idPictograma5'])) ? $_POST['idPictograma5'] : '';

$idClase6 = (isset($_POST['idClase6'])) ? $_POST['idClase6'] : '';
$idCategoria6 = (isset($_POST['idCategoria6'])) ? $_POST['idCategoria6'] : '';
$idPalabraAdvertencia6 = (isset($_POST['idPalabraAdvertencia6'])) ? $_POST['idPalabraAdvertencia6'] : '';
$idIndicacion6 = (isset($_POST['idIndicacion6'])) ? $_POST['idIndicacion6'] : '';
$idPictograma6 = (isset($_POST['idPictograma6'])) ? $_POST['idPictograma6'] : '';

$idClase7 = (isset($_POST['idClase7'])) ? $_POST['idClase7'] : '';
$idCategoria7 = (isset($_POST['idCategoria7'])) ? $_POST['idCategoria7'] : '';
$idPalabraAdvertencia7 = (isset($_POST['idPalabraAdvertencia7'])) ? $_POST['idPalabraAdvertencia7'] : '';
$idIndicacion7 = (isset($_POST['idIndicacion7'])) ? $_POST['idIndicacion7'] : '';
$idPictograma7 = (isset($_POST['idPictograma7'])) ? $_POST['idPictograma7'] : '';

$idClase8 = (isset($_POST['idClase8'])) ? $_POST['idClase8'] : '';
$idCategoria8 = (isset($_POST['idCategoria8'])) ? $_POST['idCategoria8'] : '';
$idPalabraAdvertencia8 = (isset($_POST['idPalabraAdvertencia8'])) ? $_POST['idPalabraAdvertencia8'] : '';
$idIndicacion8 = (isset($_POST['idIndicacion8'])) ? $_POST['idIndicacion8'] : '';
$idPictograma8 = (isset($_POST['idPictograma8'])) ? $_POST['idPictograma8'] : '';

$idClase9 = (isset($_POST['idClase9'])) ? $_POST['idClase9'] : '';
$idCategoria9 = (isset($_POST['idCategoria9'])) ? $_POST['idCategoria9'] : '';
$idPalabraAdvertencia9 = (isset($_POST['idPalabraAdvertencia9'])) ? $_POST['idPalabraAdvertencia9'] : '';
$idIndicacion9 = (isset($_POST['idIndicacion9'])) ? $_POST['idIndicacion9'] : '';
$idPictograma9 = (isset($_POST['idPictograma9'])) ? $_POST['idPictograma9'] : '';

$idClase10 = (isset($_POST['idClase10'])) ? $_POST['idClase10'] : '';
$idCategoria10 = (isset($_POST['idCategoria10'])) ? $_POST['idCategoria10'] : '';
$idPalabraAdvertencia10 = (isset($_POST['idPalabraAdvertencia10'])) ? $_POST['idPalabraAdvertencia10'] : '';
$idIndicacion10 = (isset($_POST['idIndicacion10'])) ? $_POST['idIndicacion10'] : '';
$idPictograma10 = (isset($_POST['idPictograma10'])) ? $_POST['idPictograma10'] : '';

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
                                            idPictograma1,
                                            idClasePeligro2,
                                            idCategoriaPeligro2,
                                            idPalabraAdvertencia2,
                                            idIndicacion2,
                                            idPictograma2,
                                            idClasePeligro3,
                                            idCategoriaPeligro3,
                                            idPalabraAdvertencia3,
                                            idIndicacion3,
                                            idPictograma3,
                                            idClasePeligro4,
                                            idCategoriaPeligro4,
                                            idPalabraAdvertencia4,
                                            idIndicacion4,
                                            idPictograma4,
                                            idClasePeligro5,
                                            idCategoriaPeligro5,
                                            idPalabraAdvertencia5,
                                            idIndicacion5,
                                            idPictograma5,
                                            idClasePeligro6,
                                            idCategoriaPeligro6,
                                            idPalabraAdvertencia6,
                                            idIndicacion6,
                                            idPictograma6,
                                            idClasePeligro7,
                                            idCategoriaPeligro7,
                                            idPalabraAdvertencia7,
                                            idIndicacion7,
                                            idPictograma7,
                                            idClasePeligro8,
                                            idCategoriaPeligro8,
                                            idPalabraAdvertencia8,
                                            idIndicacion8,
                                            idPictograma8,
                                            idClasePeligro9,
                                            idCategoriaPeligro9,
                                            idPalabraAdvertencia9,
                                            idIndicacion9,
                                            idPictograma9,
                                            idClasePeligro10,
                                            idCategoriaPeligro10,
                                            idPalabraAdvertencia10,
                                            idIndicacion10,
                                            idPictograma10) VALUES (
                                            '$cas',
                                            '$nombreProducto',
                                            $idGrupo,
                                            $idUso,
                                            '$nombreFabricante',
                                            $idClase1,
                                            $idCategoria1,
                                            $idPalabraAdvertencia1,
                                            $idIndicacion1,
                                            $idPictograma1,
                                            $idClase2,
                                            $idCategoria2,
                                            $idPalabraAdvertencia2,
                                            $idIndicacion2,
                                            $idPictograma2,
                                            $idClase3,
                                            $idCategoria3,
                                            $idPalabraAdvertencia3,
                                            $idIndicacion3,
                                            $idPictograma3,
                                            $idClase4,
                                            $idCategoria4,
                                            $idPalabraAdvertencia4,
                                            $idIndicacion4,
                                            $idPictograma4,
                                            $idClase5,
                                            $idCategoria5,
                                            $idPalabraAdvertencia5,
                                            $idIndicacion5,
                                            $idPictograma5,
                                            $idClase6,
                                            $idCategoria6,
                                            $idPalabraAdvertencia6,
                                            $idIndicacion6,
                                            $idPictograma6,
                                            $idClase7,
                                            $idCategoria7,
                                            $idPalabraAdvertencia7,
                                            $idIndicacion7,
                                            $idPictograma7,
                                            $idClase8,
                                            $idCategoria8,
                                            $idPalabraAdvertencia8,
                                            $idIndicacion8,
                                            $idPictograma8,
                                            $idClase9,
                                            $idCategoria9,
                                            $idPalabraAdvertencia9,
                                            $idIndicacion9,
                                            $idPictograma9,
                                            $idClase10,
                                            $idCategoria10,
                                            $idPalabraAdvertencia10,
                                            $idIndicacion10,
                                            $idPictograma10)";			
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
