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

<?php 
$conexion=mysqli_connect('51.222.207.182','rchemuser','gseeHI02TI8DRzoWkOap','regixchem');
$consulta = "SELECT cas, nombreProducto FROM vista_productos_reducida";
$result=mysqli_query($conexion,$consulta);
?>

<div class="modal fade" id="modalProductosReducida1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida1">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida1" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>CAS</th>
                                                <th>Nombre</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                                while ($ver=mysqli_fetch_array($result)) {
                                                    ?>
                                                    <tr>
                                                        <td><?php echo $ver['cas'] ?></td>
                                                        <td><?php echo $ver['nombreProducto'] ?></td>
                                                        <td></td>
                                                    </tr>
                                                    <?php
                                                }
                                            ?>
                                        </tbody>
                                        <tfoot class="text-center">
                                            <tr>
                                                <th>CAS</th>
                                                <th>Nombre</th>
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

<!-- Carga de archivo CAS -->
<script type="text/javascript" src="./js/casLoad1.js"></script>

<!-- Bootstrap core JavaScript-->
<script src="./vendor/jquery/jquery.min.js"></script>
<script src="./vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- Core plugin JavaScript-->
<script src="./vendor/jquery-easing/jquery.easing.min.js"></script>

<!-- Custom scripts for all pages-->
<script src="./js/sb-admin-2.min.js"></script>

<!-- datatables JS -->
<script type="text/javascript" src="./vendor/datatables-1.13.4/datatables.min.js"></script>

<!-- para usar botones en datatables JS -->  
<script src="vendor/datatables-1.13.4/Buttons-1.5.6/js/dataTables.buttons.min.js"></script>  
<script src="vendor/datatables-1.13.4/JSZip-2.5.0/jszip.min.js"></script>    
<script src="vendor/datatables-1.13.4/pdfmake-0.1.36/pdfmake.min.js"></script>    
<script src="vendor/datatables-1.13.4/pdfmake-0.1.36/vfs_fonts.js"></script>
<script src="vendor/datatables-1.13.4/Buttons-1.5.6/js/buttons.html5.min.js"></script>

<!-- jQuery, Popper.js, Bootstrap JS -->
<script src="./vendor/popper/popper.min.js"></script>
<script src="./vendor/bootstrap/js/bootstrap.min.js"></script>
<?php










    
