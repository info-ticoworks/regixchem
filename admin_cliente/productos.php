<?php require_once "vistas/parte_superior.php"?>

<!--INICIO del cont principal-->
<div class="container-fluid">
        <!-- Page Heading -->
        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de <?php echo $SESSION_nombreEmpresa?></h1>
        <p class="mb-4">Puede agregar peoductos a su lista</p>
    
    
<!-- Inicio de Tabla -->
<div class="card shadow mb-4">
 <?php
include_once './bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$consulta = "SELECT * FROM vista_productos_reducida";
            
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);
?>
<div class="card-header py-3">
            <div class="col-lg-12">
            <button id="btnNuevo" type="button" class="btn btn-success" data-toggle="modal">Agregar Producto</button>    
            </div>    
    </div>
<div class="card-body">
                    <div class="table-responsive">        
                        <table id="tablaProductos" class="table table-bordered" style="width:100%">
                        <thead class="text-center">
                            <tr>
                                <th>Nombre</th>
                                <th>Grupo</th>
                                <th>Uso</th>                                
                                <th>Fabricante</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php                            
                            foreach($data as $dat) {                                                        
                            ?>
                            <tr>
                                <td><?php echo $dat['Nombre'] ?></td>
                                <td><?php echo $dat['Grupo'] ?></td>
                                <td><?php echo $dat['Uso'] ?></td>
                                <td><?php echo $dat['Fabricante'] ?></td>
                                <td></td>
                            </tr>
                            <?php
                                }
                            ?>                                
                        </tbody>
                        <tfoot class="text-center">
                            <tr>
                                <th>Nombre</th>
                                <th>Grupo</th>
                                <th>Uso</th>                                
                                <th>Fabricante</th>
                                <th>Acciones</th>
                            </tr>
                        </tfoot>     
                       </table>                    
                    </div>
                </div> 
      
<!--Modal para CRUD-->
<div class="modal fade" id="modalCRUD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
        <form id="formPersonas">
            <div class="modal-body">
                <div class="form-group">
                    <label for="newid" class="col-form-label">Cédula: *</label>
                    <input type="number" placeholder="Digitar ID tal y como aparece en la cédula." class="form-control" id="newid" required>
                </div>
                <div class="form-group">
                    <label for="nombre" class="col-form-label">Nombre: *</label>
                    <input type="text" class="form-control" id="nombre" required>
                </div>
                    <div class="form-group">
                    <label for="apellido1" class="col-form-label">Primer Apellido: *</label>
                    <input type="text" class="form-control" id="apellido1" required>
                </div>                
                    <div class="form-group">
                    <label for="apellido2" class="col-form-label">Segundo Apellido: *</label>
                    <input type="text" class="form-control" id="apellido2" required>
                </div>  
                    <div class="form-group">
                    <label for="pass1" class="col-form-label">Password:</label>
                    <input type="password" class="form-control" id="pass1">
                </div>
                    <div class="form-group">
                    <label for="pass2" class="col-form-label">Repetir password:</label>
                    <input type="password" class="form-control" id="pass2">
                </div>
                    <div class="form-group">
                    <label for="telefono" class="col-form-label">Teléfono: *</label>
                    <input type="tel" pattern="[0-9]{8}" placeholder="El número debe ser de 8 dígitos, sin guiones ni espacios*" class="form-control" id="telefono" required>
                </div>      
                    <div class="form-group">
                    <label for="correo" class="col-form-label">Correo Electrónico:</label>
                    <input type="email" pattern="[^@\s]+@[^@\s]+.[^@\s]" placeholder="Formato: usuario@dominio.sufijo" class="form-control" id="correo">
                </div>
                <div class="form-group">
                    <label for="nombretipoUsuario" class="col-form-label">Tipo de Usuario: *</label>
                    <select class="form-control" id="nombretipoUsuario">
                        <option selected disabled value="">Elija un tipo de usuario.</option>
                        <?php
                            $consulta = "SELECT * FROM tipoUsuario
                                        WHERE idTipoUsuario < 50
                                        ORDER BY idTipoUsuario ASC";
                            $resultadotipoUsuario = $conexion->prepare($consulta);
                            $resultadotipoUsuario->execute();
                            $datatipoUsuario=$resultadotipoUsuario->fetchAll(PDO::FETCH_ASSOC);
                            foreach($datatipoUsuario as $dattipoUsuario) {
                                echo "<option value=" . $dattipoUsuario['idTipoUsuario'] . ">" . $dattipoUsuario['nombretipoUsuario'] . "</option>";
                            }
                        ?>
                    </select>
                </div>
                <div class="form-group">
                    <label for="wsVerif" class="col-form-label">Recibir notificaciones por WhatsApp:</label>
                    <input type="checkbox" class="custom-checkbox" id="wsVerif" name="wsVerif" value="yes">
                </div>

                <input type="hidden" id="idEmpresa" value= <?php echo $SESSION_idEmpresa ; ?>>

                <div class="form-group">
                    <label for="lugarTrabajo" class="col-form-label">Lugar de Trabajo: *</label>
                    <select class="form-control" id="lugarTrabajo">
                        <option selected disabled value="">Elija el lugar de trabajo del usuario.</option>
                        <?php
                            $consulta = "SELECT * FROM lugarTrabajo
                                        ORDER BY idLugarTrabajo asc";
                            $resultadoEmpresa = $conexion->prepare($consulta);
                            $resultadoEmpresa->execute();
                            $dataEmpresa=$resultadoEmpresa->fetchAll(PDO::FETCH_ASSOC);
                            foreach($dataEmpresa as $datEmpresa) {
                                echo "<option value='" . $datEmpresa['idLugarTrabajo'] . "'>" . $datEmpresa['nombreLugarTrabajo'] . "</option>";
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