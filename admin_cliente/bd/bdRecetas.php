<?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

// Recepción de los datos enviados mediante POST desde el JS
$idReceta = (isset($_POST['idReceta'])) ? $_POST['idReceta'] : '';
$nombreReceta = (isset($_POST['nombreReceta'])) ? $_POST['nombreReceta'] : '';
$idEmpresa = (isset($_POST['idEmpresa'])) ? $_POST['idEmpresa'] : '';
$cas1 = (isset($_POST['cas1'])) ? $_POST['cas1'] : '';
$cas2 = (isset($_POST['cas2'])) ? $_POST['cas2'] : '';
$cas3 = (isset($_POST['cas3'])) ? $_POST['cas3'] : '';
$cas4 = (isset($_POST['cas4'])) ? $_POST['cas4'] : '';
$cas5 = (isset($_POST['cas5'])) ? $_POST['cas5'] : '';
$cas6 = (isset($_POST['cas6'])) ? $_POST['cas6'] : '';
$cas7 = (isset($_POST['cas7'])) ? $_POST['cas7'] : '';
$cas8 = (isset($_POST['cas8'])) ? $_POST['cas8'] : '';
$cas9 = (isset($_POST['cas9'])) ? $_POST['cas9'] : '';
$cas10 = (isset($_POST['cas10'])) ? $_POST['cas10'] : '';
$cas11 = (isset($_POST['cas11'])) ? $_POST['cas11'] : '';
$cas12 = (isset($_POST['cas12'])) ? $_POST['cas12'] : '';
$cas13 = (isset($_POST['cas13'])) ? $_POST['cas13'] : '';
$cas14 = (isset($_POST['cas14'])) ? $_POST['cas14'] : '';
$cas15 = (isset($_POST['cas15'])) ? $_POST['cas15'] : '';
$cantidad1 = (isset($_POST['cantidad1'])) ? $_POST['cantidad1'] : '';
$cantidad2 = (isset($_POST['cantidad2'])) ? $_POST['cantidad2'] : '';
$cantidad3 = (isset($_POST['cantidad3'])) ? $_POST['cantidad3'] : '';
$cantidad4 = (isset($_POST['cantidad4'])) ? $_POST['cantidad4'] : '';
$cantidad5 = (isset($_POST['cantidad5'])) ? $_POST['cantidad5'] : '';
$cantidad6 = (isset($_POST['cantidad6'])) ? $_POST['cantidad6'] : '';
$cantidad7 = (isset($_POST['cantidad7'])) ? $_POST['cantidad7'] : '';
$cantidad8 = (isset($_POST['cantidad8'])) ? $_POST['cantidad8'] : '';
$cantidad9 = (isset($_POST['cantidad9'])) ? $_POST['cantidad9'] : '';
$cantidad10 = (isset($_POST['cantidad10'])) ? $_POST['cantidad10'] : '';
$cantidad11 = (isset($_POST['cantidad11'])) ? $_POST['cantidad11'] : '';
$cantidad12 = (isset($_POST['cantidad12'])) ? $_POST['cantidad12'] : '';
$cantidad13 = (isset($_POST['cantidad13'])) ? $_POST['cantidad13'] : '';
$cantidad14 = (isset($_POST['cantidad14'])) ? $_POST['cantidad14'] : '';
$cantidad15 = (isset($_POST['cantidad15'])) ? $_POST['cantidad15'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

switch ($opcion) {
    case 1: //alta
        $consulta = "INSERT INTO receta (nombreReceta, 
                                        idEmpresa, 
                                        cas1,
                                        cas2,
                                        cas3,
                                        cas4,
                                        cas5,
                                        cas6,
                                        cas7,
                                        cas8,
                                        cas9,
                                        cas10,
                                        cas11,
                                        cas12,
                                        cas13,
                                        cas14,
                                        cas15,
                                        cantidad1,
                                        cantidad2,
                                        cantidad3,
                                        cantidad4,
                                        cantidad5,
                                        cantidad6,
                                        cantidad7,
                                        cantidad8,
                                        cantidad9,
                                        cantidad10,
                                        cantidad11,
                                        cantidad12,
                                        cantidad13,
                                        cantidad14,
                                        cantidad15)
                                        VALUES('$nombreReceta',
                                        '$idEmpresa',
                                        " . (($cas1 == '') ? "NULL" : ("'" . $cas1 . "'")) . ",
                                        " . (($cas2 == '') ? "NULL" : ("'" . $cas2 . "'")) . ",
                                        " . (($cas3 == '') ? "NULL" : ("'" . $cas3 . "'")) . ",
                                        " . (($cas4 == '') ? "NULL" : ("'" . $cas4 . "'")) . ",
                                        " . (($cas5 == '') ? "NULL" : ("'" . $cas5 . "'")) . ",
                                        " . (($cas6 == '') ? "NULL" : ("'" . $cas6 . "'")) . ",
                                        " . (($cas7 == '') ? "NULL" : ("'" . $cas7 . "'")) . ",
                                        " . (($cas8 == '') ? "NULL" : ("'" . $cas8 . "'")) . ",
                                        " . (($cas9 == '') ? "NULL" : ("'" . $cas9 . "'")) . ",
                                        " . (($cas10 == '') ? "NULL" : ("'" . $cas10 . "'")) . ",
                                        " . (($cas11 == '') ? "NULL" : ("'" . $cas11 . "'")) . ",
                                        " . (($cas12 == '') ? "NULL" : ("'" . $cas12 . "'")) . ",
                                        " . (($cas13 == '') ? "NULL" : ("'" . $cas13 . "'")) . ",
                                        " . (($cas14 == '') ? "NULL" : ("'" . $cas14 . "'")) . ",
                                        " . (($cas15 == '') ? "NULL" : ("'" . $cas15 . "'")) . ",
                                        " . (($cantidad1 == '') ? "NULL" : ("'" . $cantidad1 . "'")) . ",
                                        " . (($cantidad2 == '') ? "NULL" : ("'" . $cantidad2 . "'")) . ",
                                        " . (($cantidad3 == '') ? "NULL" : ("'" . $cantidad3 . "'")) . ",
                                        " . (($cantidad4 == '') ? "NULL" : ("'" . $cantidad4 . "'")) . ",
                                        " . (($cantidad5 == '') ? "NULL" : ("'" . $cantidad5 . "'")) . ",
                                        " . (($cantidad6 == '') ? "NULL" : ("'" . $cantidad6 . "'")) . ",
                                        " . (($cantidad7 == '') ? "NULL" : ("'" . $cantidad7 . "'")) . ",
                                        " . (($cantidad8 == '') ? "NULL" : ("'" . $cantidad8 . "'")) . ",
                                        " . (($cantidad9 == '') ? "NULL" : ("'" . $cantidad9 . "'")) . ",
                                        " . (($cantidad10 == '') ? "NULL" : ("'" . $cantidad10 . "'")) . ",
                                        " . (($cantidad11 == '') ? "NULL" : ("'" . $cantidad11 . "'")) . ",
                                        " . (($cantidad12 == '') ? "NULL" : ("'" . $cantidad12 . "'")) . ",
                                        " . (($cantidad13 == '') ? "NULL" : ("'" . $cantidad13 . "'")) . ",
                                        " . (($cantidad14 == '') ? "NULL" : ("'" . $cantidad14 . "'")) . ",
                                        " . (($cantidad15 == '') ? "NULL" : ("'" . $cantidad15 . "'")) . ")";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT idReceta, nombreReceta, nombreEmpresa
                    FROM vista_receta
                    where nombreReceta = '$nombreReceta'
                    ORDER BY nombreReceta DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;

    case 2: //modificación
        $consulta = "UPDATE receta SET nombreReceta='$nombreReceta',
                                        cas1=" . (($cas1 == '') ? "NULL" : ("'" . $cas1 . "'")) . ",
                                        cas2=" . (($cas2 == '') ? "NULL" : ("'" . $cas2 . "'")) . ",
                                        cas3=" . (($cas3 == '') ? "NULL" : ("'" . $cas3 . "'")) . ",
                                        cas4=" . (($cas4 == '') ? "NULL" : ("'" . $cas4 . "'")) . ",
                                        cas5=" . (($cas5 == '') ? "NULL" : ("'" . $cas5 . "'")) . ",
                                        cas6=" . (($cas6 == '') ? "NULL" : ("'" . $cas6 . "'")) . ",
                                        cas7=" . (($cas7 == '') ? "NULL" : ("'" . $cas7 . "'")) . ",
                                        cas8=" . (($cas8 == '') ? "NULL" : ("'" . $cas8 . "'")) . ",
                                        cas9=" . (($cas9 == '') ? "NULL" : ("'" . $cas9 . "'")) . ",
                                        cas10=" . (($cas10 == '') ? "NULL" : ("'" . $cas10 . "'")) . ",
                                        cas11=" . (($cas11 == '') ? "NULL" : ("'" . $cas11 . "'")) . ",
                                        cas12=" . (($cas12 == '') ? "NULL" : ("'" . $cas12 . "'")) . ",
                                        cas13=" . (($cas13 == '') ? "NULL" : ("'" . $cas13 . "'")) . ",
                                        cas14=" . (($cas14 == '') ? "NULL" : ("'" . $cas14 . "'")) . ",
                                        cas15=" . (($cas15 == '') ? "NULL" : ("'" . $cas15 . "'")) . ",
                                        cantidad1=" . (($cantidad1 == '') ? "NULL" : ("'" . $cantidad1 . "'")) . ",
                                        cantidad2=" . (($cantidad2 == '') ? "NULL" : ("'" . $cantidad2 . "'")) . ",
                                        cantidad3=" . (($cantidad3 == '') ? "NULL" : ("'" . $cantidad3 . "'")) . ",
                                        cantidad4=" . (($cantidad4 == '') ? "NULL" : ("'" . $cantidad4 . "'")) . ",
                                        cantidad5=" . (($cantidad5 == '') ? "NULL" : ("'" . $cantidad5 . "'")) . ",
                                        cantidad6=" . (($cantidad6 == '') ? "NULL" : ("'" . $cantidad6 . "'")) . ",
                                        cantidad7=" . (($cantidad7 == '') ? "NULL" : ("'" . $cantidad7 . "'")) . ",
                                        cantidad8=" . (($cantidad8 == '') ? "NULL" : ("'" . $cantidad8 . "'")) . ",
                                        cantidad9=" . (($cantidad9 == '') ? "NULL" : ("'" . $cantidad9 . "'")) . ",
                                        cantidad10=" . (($cantidad10 == '') ? "NULL" : ("'" . $cantidad10 . "'")) . ",
                                        cantidad11=" . (($cantidad11 == '') ? "NULL" : ("'" . $cantidad11 . "'")) . ",
                                        cantidad12=" . (($cantidad12 == '') ? "NULL" : ("'" . $cantidad12 . "'")) . ",
                                        cantidad13=" . (($cantidad13 == '') ? "NULL" : ("'" . $cantidad13 . "'")) . ",
                                        cantidad14=" . (($cantidad14 == '') ? "NULL" : ("'" . $cantidad14 . "'")) . ",
                                        cantidad15=" . (($cantidad15 == '') ? "NULL" : ("'" . $cantidad15 . "'")) . "
                                        WHERE idReceta='$idReceta'";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $consulta = "SELECT idReceta, nombreReceta, nombreEmpresa
                    FROM vista_receta
                    where idReceta = '$idReceta'
                    ORDER BY idReceta DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;



    case 3://baja
        $consulta = "DELETE FROM receta WHERE idReceta='$idReceta'";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}
print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;

