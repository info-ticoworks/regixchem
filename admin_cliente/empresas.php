<?php require_once "vistas/parte_superior.php"?>

<!--INICIO del cont principal-->
<div class="container-fluid">
        <!-- Page Heading -->
        <h1 class="h3 mb-2 text-gray-800">Lista de Empresas</h1>
        <p class="mb-4">Panel de administración de Empresas</p>
    
    
<!-- Inicio de Tabla -->
<div class="card shadow mb-4">
 <?php
include_once './bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$consulta = "SELECT * from vista_empresas";
            
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);
?>
<div class="card-header py-3">
            <div class="col-lg-12">            
            <button id="btnNuevoUsuario" type="button" class="btn btn-success" data-toggle="modal">Agregar Empresa</button>    
            </div>    
    </div>    
<div class="card-body">
                    <div class="table-responsive">        
                        <table id="tablaEmpresas" class="table table-bordered" style="width:100%">
                        <thead class="text-center">
                            <tr>
                                <th>ID Empresa</th>
                                <th>Nombre</th>
                                <th>Teléfono</th>
                                <th>Dirección</th>                                
                                <th>País</th>
                                <th>Status</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php                            
                            foreach($data as $dat) {                                                        
                            ?>
                            <tr>
                                <td><?php echo $dat['idEmpresa'] ?></td>
                                <td><?php echo $dat['nombreEmpresa'] ?></td>
                                <td id='phoneTD' class='text-center'><?php echo $dat['telefonoEmpresa'] ?></td>
                                <td><?php echo $dat['direccionEmpresa'] ?></td>
                                <td><?php echo $dat['nombrePais'] ?></td>
                                <td><?php echo $dat['nombreStatusEmpresa'] ?></td>
                                <td></td>
                            </tr>
                            <?php
                                }
                            ?>                                
                        </tbody>
                        <tfoot class="text-center">
                            <tr>
                                <th>ID Empresa</th>
                                <th>Nombre</th>
                                <th>Teléfono</th>
                                <th>Dirección</th>                                
                                <th>País</th>
                                <th>Status</th>
                                <th>Acciones</th>
                            </tr>
                        </tfoot>     
                       </table>                    
                    </div>
                </div> 
      
<!--Modal para CRUD-->
<div class="modal fade" id="modalEmpresas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
        <form id="formEmpresas">    
            <div class="modal-body">
                <div class="form-group">
                    <label for="newidEmpresa" class="col-form-label">Id de Empresa: *</label>
                    <input type="text" placeholder="Digitar ID otorgado por el Gobierno para la Empresa." class="form-control" id="newidEmpresa" required>
                </div>
                <div class="form-group">
                    <label for="nombreEmpresa" class="col-form-label">Nombre: *</label>
                    <input type="text" placeholder="Campo Obligatorio." class="form-control" id="nombreEmpresa" required>
                </div>
                <div class="form-group">
                    <label for="telefono" class="col-form-label">Teléfono: *</label>
                    <input type="tel" pattern="[0-9]{8}" placeholder="El número debe ser de 8 dígitos, sin guiones ni espacios*" class="form-control" id="telefono" required>
                </div>
                <div class="form-group">
                    <label for="direccionEmpresa" class="col-form-label">Dirección: *</label>
                    <input type="text" placeholder="Campo Obligatorio." class="form-control" id="direccionEmpresa" required>
                </div>
                <div class="form-group">
                    <label for="idPais" class="col-form-label">País: *</label>
                    <select class="form-control" id="idPais">
                        <option selected disabled value="">Elija un País.</option>
                        <?php
                            $consulta = "SELECT * FROM pais
                                        ORDER BY idPais asc";
                            $resultadoPais = $conexion->prepare($consulta);
                            $resultadoPais->execute();
                            $dataPais=$resultadoPais->fetchAll(PDO::FETCH_ASSOC);
                            foreach($dataPais as $datPais) {
                                echo "<option value=" . $datPais['idPais'] . ">" . $datPais['nombrePais'] . "</option>";
                            }
                        ?>
                    </select>
                </div>
                <div class="form-group">
                    <label for="statusEmpresa" class="col-form-label">Status de Empresa: *</label>
                    <select class="form-control" id="statusEmpresa">
                        <option selected disabled value="">Elija el status de la empresa.</option>
                        <?php
                            $consulta = "SELECT * FROM statusEmpresa
                                        ORDER BY idStatusEmpresa asc";
                            $resultadoStatusEmpresa = $conexion->prepare($consulta);
                            $resultadoStatusEmpresa->execute();
                            $dataStatusEmpresa=$resultadoStatusEmpresa->fetchAll(PDO::FETCH_ASSOC);
                            foreach($dataStatusEmpresa as $datStatusEmpresa) {
                                echo "<option value=" . $datStatusEmpresa['idStatusEmpresa'] . ">" . $datStatusEmpresa['nombreStatusEmpresa'] . "</option>";
                            }
                        ?>
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                <button type="submit" id="btnGuardar" class="btn btn-dark">Guardar</button>
            </div>
        </form>    
        </div>
    </div>
</div>  
      
</div>
<!-- /.container-fluid -->
    
</div>
<!--FIN del cont principal-->

<?php require_once "vistas/parte_inferior.php"?>