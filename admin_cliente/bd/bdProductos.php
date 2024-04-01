
<?php
//echo "Hola";
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

// Recepción de los datos enviados mediante POST desde el JS
$cas = (isset($_POST['cas'])) ? $_POST['cas'] : '';
$newcas = (isset($_POST['newcas'])) ? $_POST['newcas'] : '';
$nombreProducto = (isset($_POST['nombreProducto'])) ? $_POST['nombreProducto'] : '';
$idGrupo = (isset($_POST['idGrupo'])) ? $_POST['idGrupo'] : '';
$idUso = (isset($_POST['idUso'])) ? $_POST['idUso'] : '';
$nombreFabricante1 = (isset($_POST['nombreFabricante1'])) ? $_POST['nombreFabricante1'] : '';
$nombreFabricante2 = (isset($_POST['nombreFabricante2'])) ? $_POST['nombreFabricante2'] : '';
$nombreFabricante3 = (isset($_POST['nombreFabricante3'])) ? $_POST['nombreFabricante3'] : '';
$nombreFabricante4 = (isset($_POST['nombreFabricante4'])) ? $_POST['nombreFabricante4'] : '';
$nombreFabricante5 = (isset($_POST['nombreFabricante5'])) ? $_POST['nombreFabricante5'] : '';
$nombreFabricante6 = (isset($_POST['nombreFabricante6'])) ? $_POST['nombreFabricante6'] : '';
$nombreFabricante7 = (isset($_POST['nombreFabricante7'])) ? $_POST['nombreFabricante7'] : '';
$nombreFabricante8 = (isset($_POST['nombreFabricante8'])) ? $_POST['nombreFabricante8'] : '';
$nombreFabricante9 = (isset($_POST['nombreFabricante9'])) ? $_POST['nombreFabricante9'] : '';
$nombreFabricante10 = (isset($_POST['nombreFabricante10'])) ? $_POST['nombreFabricante10'] : '';

$idClase1 = (isset($_POST['idClase1'])) ? $_POST['idClase1'] : '';
$idCategoria1 = (isset($_POST['idCategoria1'])) ? $_POST['idCategoria1'] : '';
$idPalabraAdvertencia1 = (isset($_POST['idPalabraAdvertencia1'])) ? $_POST['idPalabraAdvertencia1'] : '';
$idIndicacion1 = (isset($_POST['idIndicacion1'])) ? $_POST['idIndicacion1'] : '';
$idPictograma1 = (isset($_POST['idPictograma1'])) ? $_POST['idPictograma1'] : '';
$nivel1 = (isset($_POST['nivel1'])) ? $_POST['nivel1'] : '';
$idUnidad1 = (isset($_POST['idUnidad1'])) ? $_POST['idUnidad1'] : '';

$idClase2 = (isset($_POST['idClase2'])) ? $_POST['idClase2'] : '';
$idCategoria2 = (isset($_POST['idCategoria2'])) ? $_POST['idCategoria2'] : '';
$idPalabraAdvertencia2 = (isset($_POST['idPalabraAdvertencia2'])) ? $_POST['idPalabraAdvertencia2'] : '';
$idIndicacion2 = (isset($_POST['idIndicacion2'])) ? $_POST['idIndicacion2'] : '';
$idPictograma2 = (isset($_POST['idPictograma2'])) ? $_POST['idPictograma2'] : '';
$nivel2 = (isset($_POST['nivel2'])) ? $_POST['nivel2'] : '';
$idUnidad2 = (isset($_POST['idUnidad2'])) ? $_POST['idUnidad2'] : '';

$idClase3 = (isset($_POST['idClase3'])) ? $_POST['idClase3'] : '';
$idCategoria3 = (isset($_POST['idCategoria3'])) ? $_POST['idCategoria3'] : '';
$idPalabraAdvertencia3 = (isset($_POST['idPalabraAdvertencia3'])) ? $_POST['idPalabraAdvertencia3'] : '';
$idIndicacion3 = (isset($_POST['idIndicacion3'])) ? $_POST['idIndicacion3'] : '';
$idPictograma3 = (isset($_POST['idPictograma3'])) ? $_POST['idPictograma3'] : '';
$nivel3 = (isset($_POST['nivel3'])) ? $_POST['nivel3'] : '';
$idUnidad3 = (isset($_POST['idUnidad3'])) ? $_POST['idUnidad3'] : '';

$idClase4 = (isset($_POST['idClase4'])) ? $_POST['idClase4'] : '';
$idCategoria4 = (isset($_POST['idCategoria4'])) ? $_POST['idCategoria4'] : '';
$idPalabraAdvertencia4 = (isset($_POST['idPalabraAdvertencia4'])) ? $_POST['idPalabraAdvertencia4'] : '';
$idIndicacion4 = (isset($_POST['idIndicacion4'])) ? $_POST['idIndicacion4'] : '';
$idPictograma4 = (isset($_POST['idPictograma4'])) ? $_POST['idPictograma4'] : '';
$nivel4 = (isset($_POST['nivel4'])) ? $_POST['nivel4'] : '';
$idUnidad4 = (isset($_POST['idUnidad4'])) ? $_POST['idUnidad4'] : '';

$idClase5 = (isset($_POST['idClase5'])) ? $_POST['idClase5'] : '';
$idCategoria5 = (isset($_POST['idCategoria5'])) ? $_POST['idCategoria5'] : '';
$idPalabraAdvertencia5 = (isset($_POST['idPalabraAdvertencia5'])) ? $_POST['idPalabraAdvertencia5'] : '';
$idIndicacion5 = (isset($_POST['idIndicacion5'])) ? $_POST['idIndicacion5'] : '';
$idPictograma5 = (isset($_POST['idPictograma5'])) ? $_POST['idPictograma5'] : '';
$nivel5 = (isset($_POST['nivel5'])) ? $_POST['nivel5'] : '';
$idUnidad5 = (isset($_POST['idUnidad5'])) ? $_POST['idUnidad5'] : '';

$idClase6 = (isset($_POST['idClase6'])) ? $_POST['idClase6'] : '';
$idCategoria6 = (isset($_POST['idCategoria6'])) ? $_POST['idCategoria6'] : '';
$idPalabraAdvertencia6 = (isset($_POST['idPalabraAdvertencia6'])) ? $_POST['idPalabraAdvertencia6'] : '';
$idIndicacion6 = (isset($_POST['idIndicacion6'])) ? $_POST['idIndicacion6'] : '';
$idPictograma6 = (isset($_POST['idPictograma6'])) ? $_POST['idPictograma6'] : '';
$nivel6 = (isset($_POST['nivel6'])) ? $_POST['nivel6'] : '';
$idUnidad6 = (isset($_POST['idUnidad6'])) ? $_POST['idUnidad6'] : '';

$idClase7 = (isset($_POST['idClase7'])) ? $_POST['idClase7'] : '';
$idCategoria7 = (isset($_POST['idCategoria7'])) ? $_POST['idCategoria7'] : '';
$idPalabraAdvertencia7 = (isset($_POST['idPalabraAdvertencia7'])) ? $_POST['idPalabraAdvertencia7'] : '';
$idIndicacion7 = (isset($_POST['idIndicacion7'])) ? $_POST['idIndicacion7'] : '';
$idPictograma7 = (isset($_POST['idPictograma7'])) ? $_POST['idPictograma7'] : '';
$nivel7 = (isset($_POST['nivel7'])) ? $_POST['nivel7'] : '';
$idUnidad7 = (isset($_POST['idUnidad7'])) ? $_POST['idUnidad7'] : '';

$idClase8 = (isset($_POST['idClase8'])) ? $_POST['idClase8'] : '';
$idCategoria8 = (isset($_POST['idCategoria8'])) ? $_POST['idCategoria8'] : '';
$idPalabraAdvertencia8 = (isset($_POST['idPalabraAdvertencia8'])) ? $_POST['idPalabraAdvertencia8'] : '';
$idIndicacion8 = (isset($_POST['idIndicacion8'])) ? $_POST['idIndicacion8'] : '';
$idPictograma8 = (isset($_POST['idPictograma8'])) ? $_POST['idPictograma8'] : '';
$nivel8 = (isset($_POST['nivel8'])) ? $_POST['nivel8'] : '';
$idUnidad8 = (isset($_POST['idUnidad8'])) ? $_POST['idUnidad8'] : '';

$idClase9 = (isset($_POST['idClase9'])) ? $_POST['idClase9'] : '';
$idCategoria9 = (isset($_POST['idCategoria9'])) ? $_POST['idCategoria9'] : '';
$idPalabraAdvertencia9 = (isset($_POST['idPalabraAdvertencia9'])) ? $_POST['idPalabraAdvertencia9'] : '';
$idIndicacion9 = (isset($_POST['idIndicacion9'])) ? $_POST['idIndicacion9'] : '';
$idPictograma9 = (isset($_POST['idPictograma9'])) ? $_POST['idPictograma9'] : '';
$nivel9 = (isset($_POST['nivel9'])) ? $_POST['nivel9'] : '';
$idUnidad9 = (isset($_POST['idUnidad9'])) ? $_POST['idUnidad9'] : '';

$idClase10 = (isset($_POST['idClase10'])) ? $_POST['idClase10'] : '';
$idCategoria10 = (isset($_POST['idCategoria10'])) ? $_POST['idCategoria10'] : '';
$idPalabraAdvertencia10 = (isset($_POST['idPalabraAdvertencia10'])) ? $_POST['idPalabraAdvertencia10'] : '';
$idIndicacion10 = (isset($_POST['idIndicacion10'])) ? $_POST['idIndicacion10'] : '';
$idPictograma10 = (isset($_POST['idPictograma10'])) ? $_POST['idPictograma10'] : '';
$nivel10 = (isset($_POST['nivel10'])) ? $_POST['nivel10'] : '';
$idUnidad10 = (isset($_POST['idUnidad10'])) ? $_POST['idUnidad10'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

switch($opcion){
    case 1: //alta
        $consulta = "INSERT INTO producto (cas,
                                            nombreProducto,
                                            idGrupo,
                                            idUso,
                                            nombreFabricante1,
                                            nombreFabricante2,
                                            nombreFabricante3,
                                            nombreFabricante4,
                                            nombreFabricante5,
                                            nombreFabricante6,
                                            nombreFabricante7,
                                            nombreFabricante8,
                                            nombreFabricante9,
                                            nombreFabricante10,
                                            idClasePeligro1,
                                            idCategoriaPeligro1,
                                            idPalabraAdvertencia1,
                                            idIndicacion1,
                                            idPictograma1,
                                            nivel1,
                                            idUnidad1,
                                            idClasePeligro2,
                                            idCategoriaPeligro2,
                                            idPalabraAdvertencia2,
                                            idIndicacion2,
                                            idPictograma2,
                                            nivel2,
                                            idUnidad2,
                                            idClasePeligro3,
                                            idCategoriaPeligro3,
                                            idPalabraAdvertencia3,
                                            idIndicacion3,
                                            idPictograma3,
                                            nivel3,
                                            idUnidad3,
                                            idClasePeligro4,
                                            idCategoriaPeligro4,
                                            idPalabraAdvertencia4,
                                            idIndicacion4,
                                            idPictograma4,
                                            nivel4,
                                            idUnidad4,
                                            idClasePeligro5,
                                            idCategoriaPeligro5,
                                            idPalabraAdvertencia5,
                                            idIndicacion5,
                                            idPictograma5,
                                            nivel5,
                                            idUnidad5,
                                            idClasePeligro6,
                                            idCategoriaPeligro6,
                                            idPalabraAdvertencia6,
                                            idIndicacion6,
                                            idPictograma6,
                                            nivel6,
                                            idUnidad6,
                                            idClasePeligro7,
                                            idCategoriaPeligro7,
                                            idPalabraAdvertencia7,
                                            idIndicacion7,
                                            idPictograma7,
                                            nivel7,
                                            idUnidad7,
                                            idClasePeligro8,
                                            idCategoriaPeligro8,
                                            idPalabraAdvertencia8,
                                            idIndicacion8,
                                            idPictograma8,
                                            nivel8,
                                            idUnidad8,
                                            idClasePeligro9,
                                            idCategoriaPeligro9,
                                            idPalabraAdvertencia9,
                                            idIndicacion9,
                                            idPictograma9,
                                            nivel9,
                                            idUnidad9,
                                            idClasePeligro10,
                                            idCategoriaPeligro10,
                                            idPalabraAdvertencia10,
                                            idIndicacion10,
                                            idPictograma10,
                                            nivel10,
                                            idUnidad10) VALUES (
                                            '$newcas',
                                            '$nombreProducto',
                                            $idGrupo,
                                            $idUso,
                                            ".(($nombreFabricante1=='')?"NULL":("'".$nombreFabricante1."'")).",
                                            ".(($nombreFabricante2=='')?"NULL":("'".$nombreFabricante2."'")).",
                                            ".(($nombreFabricante3=='')?"NULL":("'".$nombreFabricante3."'")).",
                                            ".(($nombreFabricante4=='')?"NULL":("'".$nombreFabricante4."'")).",
                                            ".(($nombreFabricante5=='')?"NULL":("'".$nombreFabricante5."'")).",
                                            ".(($nombreFabricante6=='')?"NULL":("'".$nombreFabricante6."'")).",
                                            ".(($nombreFabricante7=='')?"NULL":("'".$nombreFabricante7."'")).",
                                            ".(($nombreFabricante8=='')?"NULL":("'".$nombreFabricante8."'")).",
                                            ".(($nombreFabricante9=='')?"NULL":("'".$nombreFabricante9."'")).",
                                            ".(($nombreFabricante10=='')?"NULL":("'".$nombreFabricante10."'")).",
                                            $idClase1,
                                            $idCategoria1,
                                            $idPalabraAdvertencia1,
                                            $idIndicacion1,
                                            $idPictograma1,
                                            $nivel1,
                                            $idUnidad1,
                                            $idClase2,
                                            $idCategoria2,
                                            $idPalabraAdvertencia2,
                                            $idIndicacion2,
                                            $idPictograma2,
                                            $nivel2,
                                            $idUnidad2,
                                            $idClase3,
                                            $idCategoria3,
                                            $idPalabraAdvertencia3,
                                            $idIndicacion3,
                                            $idPictograma3,
                                            $nivel3,
                                            $idUnidad3,
                                            $idClase4,
                                            $idCategoria4,
                                            $idPalabraAdvertencia4,
                                            $idIndicacion4,
                                            $idPictograma4,
                                            $nivel4,
                                            $idUnidad4,
                                            $idClase5,
                                            $idCategoria5,
                                            $idPalabraAdvertencia5,
                                            $idIndicacion5,
                                            $idPictograma5,
                                            $nivel5,
                                            $idUnidad5,
                                            $idClase6,
                                            $idCategoria6,
                                            $idPalabraAdvertencia6,
                                            $idIndicacion6,
                                            $idPictograma6,
                                            $nivel6,
                                            $idUnidad6,
                                            $idClase7,
                                            $idCategoria7,
                                            $idPalabraAdvertencia7,
                                            $idIndicacion7,
                                            $idPictograma7,
                                            $nivel7,
                                            $idUnidad7,
                                            $idClase8,
                                            $idCategoria8,
                                            $idPalabraAdvertencia8,
                                            $idIndicacion8,
                                            $idPictograma8,
                                            $nivel8,
                                            $idUnidad8,
                                            $idClase9,
                                            $idCategoria9,
                                            $idPalabraAdvertencia9,
                                            $idIndicacion9,
                                            $idPictograma9,
                                            $nivel9,
                                            $idUnidad9,
                                            $idClase10,
                                            $idCategoria10,
                                            $idPalabraAdvertencia10,
                                            $idIndicacion10,
                                            $idPictograma10,
                                            $nivel10,
                                            $idUnidad10)";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $consulta = "SELECT cas, nombreProducto, nombreGrupo, nombreUso, nombreFabricante1
                    FROM vista_productos_reducida
                    WHERE cas='$newcas'
                    ORDER BY cas DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 2: //modificación
            $consulta = "UPDATE producto SET cas='$newcas',
                                            nombreProducto='$nombreProducto',
                                            idGrupo=$idGrupo,
                                            idUso=$idUso,
                                            nombreFabricante1=".(($nombreFabricante1=='')?"NULL":("'".$nombreFabricante1."'")).",
                                            nombreFabricante2=".(($nombreFabricante2=='')?"NULL":("'".$nombreFabricante2."'")).",
                                            nombreFabricante3=".(($nombreFabricante3=='')?"NULL":("'".$nombreFabricante3."'")).",
                                            nombreFabricante4=".(($nombreFabricante4=='')?"NULL":("'".$nombreFabricante4."'")).",
                                            nombreFabricante5=".(($nombreFabricante5=='')?"NULL":("'".$nombreFabricante5."'")).",
                                            nombreFabricante6=".(($nombreFabricante6=='')?"NULL":("'".$nombreFabricante6."'")).",
                                            nombreFabricante7=".(($nombreFabricante7=='')?"NULL":("'".$nombreFabricante7."'")).",
                                            nombreFabricante8=".(($nombreFabricante8=='')?"NULL":("'".$nombreFabricante8."'")).",
                                            nombreFabricante9=".(($nombreFabricante9=='')?"NULL":("'".$nombreFabricante9."'")).",
                                            nombreFabricante10=".(($nombreFabricante10=='')?"NULL":("'".$nombreFabricante10."'")).",
                                            idClasePeligro1=$idClase1,
                                            idCategoriaPeligro1=$idCategoria1,
                                            idPalabraAdvertencia1=$idPalabraAdvertencia1,
                                            idIndicacion1=$idIndicacion1,
                                            idPictograma1=$idPictograma1,
                                            nivel1=$nivel1,
                                            idUnidad1=$idUnidad1,
                                            idClasePeligro2=$idClase2,
                                            idCategoriaPeligro2=$idCategoria2,
                                            idPalabraAdvertencia2=$idPalabraAdvertencia2,
                                            idIndicacion2=$idIndicacion2,
                                            idPictograma2=$idPictograma2,
                                            nivel2=$nivel2,
                                            idUnidad2=$idUnidad2,
                                            idClasePeligro3=$idClase3,
                                            idCategoriaPeligro3=$idCategoria3,
                                            idPalabraAdvertencia3=$idPalabraAdvertencia3,
                                            idIndicacion3=$idIndicacion3,
                                            idPictograma3=$idPictograma3,
                                            nivel3=$nivel3,
                                            idUnidad3=$idUnidad3,
                                            idClasePeligro4=$idClase4,
                                            idCategoriaPeligro4=$idCategoria4,
                                            idPalabraAdvertencia4=$idPalabraAdvertencia4,
                                            idIndicacion4=$idIndicacion4,
                                            idPictograma4=$idPictograma4,
                                            nivel4=$nivel4,
                                            idUnidad4=$idUnidad4,
                                            idClasePeligro5=$idClase5,
                                            idCategoriaPeligro5=$idCategoria5,
                                            idPalabraAdvertencia5=$idPalabraAdvertencia5,
                                            idIndicacion5=$idIndicacion5,
                                            idPictograma5=$idPictograma5,
                                            nivel5=$nivel5,
                                            idUnidad5=$idUnidad5,
                                            idClasePeligro6=$idClase6,
                                            idCategoriaPeligro6=$idCategoria6,
                                            idPalabraAdvertencia6=$idPalabraAdvertencia6,
                                            idIndicacion6=$idIndicacion6,
                                            idPictograma6=$idPictograma6,
                                            nivel6=$nivel6,
                                            idUnidad6=$idUnidad6,
                                            idClasePeligro7=$idClase7,
                                            idCategoriaPeligro7=$idCategoria7,
                                            idPalabraAdvertencia7=$idPalabraAdvertencia7,
                                            idIndicacion7=$idIndicacion7,
                                            idPictograma7=$idPictograma7,
                                            nivel7=$nivel7,
                                            idUnidad7=$idUnidad7,
                                            idClasePeligro8=$idClase8,
                                            idCategoriaPeligro8=$idCategoria8,
                                            idPalabraAdvertencia8=$idPalabraAdvertencia8,
                                            idIndicacion8=$idIndicacion8,
                                            idPictograma8=$idPictograma8,
                                            nivel8=$nivel8,
                                            idUnidad8=$idUnidad8,
                                            idClasePeligro9=$idClase9,
                                            idCategoriaPeligro9=$idCategoria9,
                                            idPalabraAdvertencia9=$idPalabraAdvertencia9,
                                            idIndicacion9=$idIndicacion9,
                                            idPictograma9=$idPictograma9,
                                            nivel9=$nivel9,
                                            idUnidad9=$idUnidad9,
                                            idClasePeligro10=$idClase10,
                                            idCategoriaPeligro10=$idCategoria10,
                                            idPalabraAdvertencia10=$idPalabraAdvertencia10,
                                            idIndicacion10=$idIndicacion10,
                                            idPictograma10=$idPictograma10,
                                            nivel10=$nivel10,
                                            idUnidad10=$idUnidad10
                                            WHERE cas='$cas'";	
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $consulta = "SELECT cas, nombreProducto, nombreGrupo, nombreUso, nombreFabricante1
                        FROM vista_productos_reducida
                        WHERE cas='$newcas'
                        ORDER BY cas DESC LIMIT 1";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            break;   
    case 3://baja
        $consulta = "DELETE FROM producto WHERE cas='$cas'";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);                          
        break;
}
print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;
