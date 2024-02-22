<?php require_once "vistas/parte_superior.php"?>

<!--INICIO del cont principal-->
<div class="container-fluid">
        <!-- Page Heading -->
        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de <?php echo $SESSION_nombreEmpresa?></h1>
        <p class="mb-4">Puede agregar productos a su lista</p>
    
    
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
                                <th>CAS</th>
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
                                <td><?php echo $dat['cas'] ?></td>
                                <td><?php echo $dat['nombreProducto'] ?></td>
                                <td><?php echo $dat['nombreGrupo'] ?></td>
                                <td><?php echo $dat['nombreUso'] ?></td>
                                <td><?php echo $dat['nombreFabricante'] ?></td>
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
        <form id="formProductos">
            <div class="modal-body">
                <!-- <div class="form-group">
                    <label for="newid" class="col-form-label">Cédula: *</label>
                    <input type="number" placeholder="Digitar ID tal y como aparece en la cédula." class="form-control" id="newid" required>
                </div> -->

                <div class="form-group">
                    <label for="cas" class="col-form-label">CAS: *</label>
                    <input type="text" class="form-control" id="cas" required>
                </div>

                <div class="form-group">
                    <label for="nombreProducto" class="col-form-label">Nombre: *</label>
                    <input type="text" class="form-control" id="nombreProducto" required>
                </div>

                <div class="form-group">
                    <label for="nombreGrupo" class="col-form-label">Grupo: *</label>
                    <select class="form-control" id="nombreGrupo">
                        <option selected disabled value="">Elija un grupo.</option>
                        <?php
                            $consulta = "SELECT * FROM grupo
                                        ORDER BY idGrupo asc";
                            $resultadoGrupo = $conexion->prepare($consulta);
                            $resultadoGrupo->execute();
                            $dataGrupo=$resultadoGrupo->fetchAll(PDO::FETCH_ASSOC);
                            foreach($dataGrupo as $datGrupo) {
                                echo "<option value=" . $datGrupo['idGrupo'] . ">" . $datGrupo['nombreGrupo'] . "</option>";
                            }
                        ?>
                    </select>
                </div>

                <div class="form-group">
                    <label for="nombreUso" class="col-form-label">Uso: *</label>
                    <select class="form-control" id="nombreUso">
                        <option selected disabled value="">Elija un Uso.</option>
                        <?php
                            $consulta = "SELECT * FROM uso
                                        ORDER BY idUso asc";
                            $resultadoUso = $conexion->prepare($consulta);
                            $resultadoUso->execute();
                            $dataUso=$resultadoUso->fetchAll(PDO::FETCH_ASSOC);
                            foreach($dataUso as $datUso) {
                                echo "<option value=" . $datUso['idUso'] . ">" . $datUso['nombreUso'] . "</option>";
                            }
                        ?>
                    </select>
                </div>

                <div class="form-group">
                    <label for="nombreFabricante" class="col-form-label">Fabricante: *</label>
                    <select class="form-control" id="nombreFabricante">
                        <option selected disabled value="">Elija un Fabricante.</option>
                        <?php
                            $consulta = "SELECT * FROM fabricante
                                        ORDER BY idFabricante asc";
                            $resultadoFabricante = $conexion->prepare($consulta);
                            $resultadoFabricante->execute();
                            $dataFabricante=$resultadoFabricante->fetchAll(PDO::FETCH_ASSOC);
                            foreach($dataFabricante as $datFabricante) {
                                echo "<option value=" . $datFabricante['idFabricante'] . ">" . $datFabricante['nombreFabricante'] . "</option>";
                            }
                        ?>
                    </select>
                </div>

                <div class="clases">
                    <button class="btn btn-success" type="button" id="btnClase1">Agregar Clase de Peligro</button>
                    <div class="clase-box" id='clase1'>
                    <label for="clase1" class="col-form-label">Datos de la clase de peligro #1</label>
                        <div class="form-group">
                            <label for="nombreClase1" class="col-form-label">Clase de Peligro: *</label>
                            <select class="form-control" id="nombreClase1">
                                <option selected disabled value='0'>Elija una clase de peligro.</option>
                                <?php
                                    $consulta = "SELECT DISTINCT idClasePeligro, nombreClasePeligro FROM vista_categoria_peligro
                                                ORDER BY idClasePeligro asc";
                                    $resultadoClase1 = $conexion->prepare($consulta);
                                    $resultadoClase1->execute();
                                    $dataClase1=$resultadoClase1->fetchAll(PDO::FETCH_ASSOC);
                                    foreach($dataClase1 as $datClase1) {
                                        echo "<option value=" . $datClase1['idClasePeligro'] . ">" . $datClase1['nombreClasePeligro'] . "</option>";
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombreCategoria1' class='col-form-label'>Categoría de Peligro: *</label>
        		            <select class='form-control' id='nombreCategoria1' disabled>
				            <option selected disabled value='0'>Elija una categoría de peligro.</option>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombrePalabraAdvertencia1' class='col-form-label'>Palabra de Advertencia: *</label>
        		            <select class='form-control' id='nombrePalabraAdvertencia1' disabled>
				            <option selected disabled value='0'>Elija una palabra de advertencia.</option>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombreIndicacion1' class='col-form-label'>Indicación: *</label>
        		            <select class='form-control' id='nombreIndicacion1' disabled>
				            <option selected disabled value='0'>Elija una Indicación.</option>
                            </select>
                        </div>
                        <button class="btn btn-danger" type="button" id="btnEliminarClase1">Eliminar Clase de Peligro</button>
                    </div>
                    <button class="btn btn-success" type="button" id="btnClase2">Agregar otra clase de Peligro</button>
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