<?php 
$conexion=mysqli_connect('51.222.207.182','rchemuser','gseeHI02TI8DRzoWkOap','regixchem');
$onu=$_POST['onu'];
$consulta = "SELECT onu, descripcion FROM numUN";
$result=mysqli_query($conexion,$consulta);
?>

<div class="modal fade" id="modalONU2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU2">
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
                                    <table id="tablaONU2" class="table table-bordered" style="width:100%">
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
<script type="text/javascript" src="./js/onuLoad2.js"></script>

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










    
