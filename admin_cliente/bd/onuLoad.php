<!-- INICIO DE SESION -->
<?php
session_start();
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
$bMeses = array("void", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
$bDias = array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
$fecha = getdate();
$dias = $bDias[$fecha["wday"]];
$meses = $bMeses[$fecha["mon"]];
$fechaActual = "$dias " . $fecha["mday"] . " de " . $meses . " de " . $fecha["year"] . "";
$horaActual = "" . $fecha["hours"] . ":" . $fecha["minutes"] . ":" . $fecha["seconds"] . "";
if ($SESSION_idTipoUsuario <> 2 && $SESSION_idTipoUsuario <> 3 && $SESSION_idTipoUsuario <> 4) {
    // header ("Location: rediriges a la pagina de logueo".)
    header("Location: ../index.php");
}

$conexion=mysqli_connect('51.222.207.182','rchemuser','gseeHI02TI8DRzoWkOap','regixchem');
$consulta = "SELECT onu, descripcion FROM numUN";
$result=mysqli_query($conexion,$consulta);
?>

<div class="modal fade" id="modalONU" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU" class="table table-bordered" style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                                while ($ver=mysqli_fetch_array($result)) {
                                                    ?>
                                                    <tr>
                                                        <td><?php echo $ver['onu'] ?></td>
                                                        <td><?php echo $ver['descripcion'] ?></td>
                                                        <td></td>
                                                    </tr>
                                                    <?php
                                                }
                                            ?>
                                        </tbody>
                                        <tfoot class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="btnCancelar" class="btn btn-light"
                            data-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Carga de archivo ONU -->
<script type="text/javascript" src="./js/onuLoad.js"></script>











    
