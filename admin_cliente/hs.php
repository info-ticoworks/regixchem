<!-- INICIO DE SESION -->
<?php

$SESSION_cedula = $_SESSION['cedula'];
$SESSION_nombre = $_SESSION['nombre'];
$SESSION_apellido1 = $_SESSION['apellido1'];
$SESSION_telefono = $_SESSION['telefono'];
$SESSION_correo = $_SESSION['correo'];
$SESSION_idTipoUsuario = $_SESSION['idTipoUsuario'];
$SESSION_mailNotif = $_SESSION['mailNotif'];
$SESSION_wsNotif = $_SESSION['wsNotif'];
$SESSION_idEmpresa = $_SESSION['idEmpresa'];
$SESSION_nombreEmpresa = $_SESSION['nombreEmpresa'];
date_default_timezone_set('America/Costa_Rica');
$bMeses = array("void","Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
$bDias = array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
$fecha = getdate();
$dias = $bDias[$fecha["wday"]];
$meses = $bMeses[$fecha["mon"]];
$fechaActual = "$dias ".$fecha["mday"]." de ".$meses." de ".$fecha["year"]."";
$horaActual = "".$fecha["hours"].":".$fecha["minutes"].":".$fecha["seconds"]."";
if($SESSION_idTipoUsuario<>2 && $SESSION_idTipoUsuario<>3 && $SESSION_idTipoUsuario<>4){
    // header ("Location: rediriges a la pagina de logueo".)
    header("Location: ../index.php");
}
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <!-- CSS propio-->
    <link href="./css/hs.css" rel="stylesheet">
    <title></title>
</head>

<body>
    <div class="content">
        <div class="page-container">

            <!-- Seccion 1 -->

            <h2>SECCIÓN 1: Identificación de la sustancia/mezcla y de la empresa/empresa</h2>


            <h3>1.1 Identificador del producto</h3>

            <h3>1.2 Usos pertinentes identificados de la sustancia o mezcla y usos desaconsejados</h3>

            <h3>1.3 Datos del proveedor de la ficha de datos de seguridad</h3>

            <h3>1.4 Número de teléfono de emergencia</h3>



            <!-- Seccion 2 -->

            <h2>SECCIÓN 2: Identificación de peligros</h2>


            <h3>2.1 Clasificación de la sustancia o mezcla</h3>

            <h3>2.2 Elementos de la etiqueta</h3>

            <h3>2.3 Otros peligros</h3>



            <!-- Seccion 3 -->

            <h2>SECCIÓN 3: Composición/información sobre los ingredientes</h2>


            <h3>3.1 Sustancias</h3>



            <!-- Seccion 4 -->

            <h2>Sección 4: Medidas de Primeros Auxilios</h2>


            <h3>4.1 Descripción de los primeros auxilios</h3>

            <h3>4.2 Principales síntomas y efectos, agudos y del Fatiga, diversos grados de lesión pulmonar</h3>



            <!-- Seccion 5 -->

            <h2>SECCIÓN 5: Medidas de lucha contra incendios</h2>


            <h3>5.1 Medios de extinción</h3>

            <h3>5.2 Peligros específicos derivados de la sustancia o la mezcla</h3>

            <h3>5.3 Consejos para los bomberos</h3>



            <h2>Sección 6: Medidas de Liberación accidental</h2>


            <h3>6.1 Precauciones personales, equipo de protección y emergencia</h3>

            <h3>6.2 Precauciones ambientales</h3>

            <h3>6.3 Métodos y material de contención y de limpieza</h3>

            <h3>6.4 Referencia a otras secciones</h3>



            <h2>Sección 7: Manejo y Almacenamiento</h2>


            <h3>7.1 Precauciones para una manipulación segura</h3>

            <h3>7.2 Condiciones de almacenamiento seguro, incluidas posibles incompatibilidades</h3>

            <h3>7.3 Usos finales específicos</h3>



            <h2>SECCIÓN 8: Controles de exposición/protección personal</h2>


            <h3>8.1 Parámetros de control</h3>

            <h3>8.2 Controles de exposición</h>



            <h2>SECCIÓN 9: Propiedades físicas y químicas</h2>


            <h3>9.1 Información sobre propiedades físicas y químicas básicas</h3>

            <h3>9.2 Otra información</h3>



            <h2>SECCIÓN 10: Estabilidad y reactividad</h2>


            <h3>10.1 Reactividad</h3>

            <h3>10.2 Estabilidad química</h3>

            <h3>10.3 Posibilidad de reacciones peligrosas</h>

            <h3>10.4 Condiciones para evitar</h3>

            <h3>10.5 materiales incompatibles</h3>

            <h3>10.6 productos de descomposición peligrosos</h>



            <h2>SECCIÓN 11: Información toxicológica</h2>


            <h3>11.1 Información sobre las clases de peligro definidas en el Reglamento (CE) nº 1272/2008</h3>

            <h3>11.2 Propiedades de alteración endocrina</h>


            <h2>SECCIÓN 12: Información ecológica</h2>


            <h3>12.1 Toxicidad</h3>

            <h3>12.2 Proceso de degradabilidad</h3>

            <h3>12.3 Potencial de bioacumulación</h3>

            <h3>12.4 Movilidad en el suelo</h3>

            <h3>12.5 Resultados de la evaluación PBT y mPmB</h3>

            <h3>12.6 Propiedades de alteración endocrina</h3>

            <h3>12.7 Otros efectos adversos</h3>


            <h2>SECCIÓN 13: Consideraciones sobre la eliminación</h2>


            <h3>13.1 Métodos de tratamiento de residuos</h3>

            <h3>13.2 Disposiciones pertinentes relativas a los residuos</h3>

            <h3>13.2 Disposiciones pertinentes relativas a los residuos</h3>

            <h3>13.3 Observaciones</h3>



            <h2>SECCIÓN 14: Información sobre el transporte</h2>


            <h3>14.1 Número ONU o número de identificación</h3>

            <h3>14.2 Designación oficial de transporte de las Naciones Unidas</h3>

            <h3>14.3 Clase(s) de peligro para el transporte</h3>

            <h3>14.4 Grupo de embalaje</h3>

            <h3>14.5 Riesgos ambientales</h3>

            <h3>14.6 Precauciones particulares para los</h3>

            <h3>14.7 Transporte marítimo a granel según los instrumentos de la OMI</h3>

            <h3>14.8 Información para cada una de las Reglamentaciones Modelo de la ONU</h3>



            <h2>SECCIÓN 15: Información reglamentaria</h2>


            <h3>15.1 Reglamentación y legislación en materia de seguridad, salud y medio ambiente específicas para la sustancia o la mezcla</h3>

            <h3>15.2 Evaluación de la seguridad química</h3>



            <h2>SECCIÓN 16: Otra información</h2>

        </div>
    </div>
</body>

</html>