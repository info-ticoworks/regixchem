<?php require_once "vistas/parte_superior.php"?>

<!--INICIO del cont principal-->
<div class="container-fluid">
        <!-- Page Heading -->
        <h1 class="h3 mb-2 text-gray-800">Lista de Recetas para uso de <?php echo $SESSION_nombreEmpresa?></h1>
        <p class="mb-4">Puede agregar recetas a su lista</p>
    
    
<!-- Inicio de Tabla -->
<div class="card shadow mb-4">
 <?php
include_once './bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$consulta = "SELECT * FROM vista_receta";
            
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);
?>
<div class="card-header py-3">
    <div class="col-lg-12">
        <button id="btnNuevaReceta" type="button" class="btn btn-success" data-toggle="modal">Agregar Receta</button>    
    </div>    
</div>

<div class="card-body">
                    <div class="table-responsive">        
                        <table id="tablaRecetas" class="table table-bordered" style="width:100%">
                        <thead class="text-center">
                            <tr>
                                <th>ID Receta</th>
                                <th>Nombre</th>
                                <th>Empresa</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php                            
                            foreach($data as $dat) {                                                        
                            ?>
                            <tr>
                                <td><?php echo $dat['idReceta'] ?></td>
                                <td><?php echo $dat['nombreReceta'] ?></td>
                                <td><?php echo $dat['nombreEmpresa'] ?></td>
                                <td></td>
                            </tr>
                            <?php
                                }
                            ?>                                
                        </tbody>
                        <tfoot class="text-center">
                            <tr>
                                <th>ID Receta</th>
                                <th>Nombre</th>
                                <th>Empresa</th>
                                <th>Acciones</th>
                            </tr>
                        </tfoot>     
                       </table>                    
                    </div>
</div> 
      
<!--Modal para CRUD-->
<div class="modal fade" id="modalRecetas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formRecetas">
            <div class="modal-body">

                <div class="form-group">
                    <label for="nombreReceta" class="col-form-label">Nombre: *</label>
                    <input type="text" class="form-control" id="nombreReceta" required>
                </div>

                <!-- Ingredientes -->
                <div class="ingredientes" id="ingredientes">
                <label class="clase-box-titulo">Ingredientes:</label>

                <div class="ingrediente1" id="ingrediente1">
                    <div class="ingrediente_display">
                        <div class="ingrediente_izquierda">
                            <div class="form-group">
                                <label for="nombreIngrediente1" class="col-form-label">Ingrediente 1: *</label>  
                            </div>
                            <div class="ingrediente-box">
                                <div class="ingrediente-text">
                                    <input type="text" class="form-control" id="nombreIngrediente1" required disabled>
                                </div>
                                <div>
                                    <button type="button" id="btnBuscarIngrediente" class="btn btn-success" style="margin-right:5px" title="Buscar ingrediente en la base de datos">Buscar</button>
                                </div>
                                <div>
                                    <button type="button" id="btnIngrediente2" class="btn btn-primary" title="Agregar otro ingrediente">+</button>
                                </div>
                            </div>
                        </div>
                        <div class="ingrediente_derecha">
                            <div class="form-group">
                                <label for="nombreIngrediente1" class="col-form-label">Cantidad: *</label>  
                            </div>
                            <div class="cantidad-box">
                                <div class="cantidad-text">
                                    <input type="number" class="form-control" style="width:130px" id="nivel1" min="0" max="100" step="0.01" disabled>
                                    <p class="cont_nivel p" id="cantidad1">%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                

                <div class="ingrediente2" id="ingrediente2">
                        <div class="form-group">
                            <label for="nombreIngrediente2" class="col-form-label">Ingrediente 2: *</label>  
                        </div>
                        <div class="ingrediente-box">
                            <div class="ingrediente-text">
                                <input type="text" class="form-control" id="nombreIngrediente2" required>
                            </div>
                            <div>
                                <button type="button" id="btnEliminarIngrediente2" class="btn btn-danger" title="Eliminar ingrediente">-</button>
                            </div>
                            <div>
                                <button type="button" id="btnIngrediente3" class="btn btn-primary" title="Agregar otro ingrediente">+</button>
                            </div>
                        </div>
                    </div>



                    <div class="ingrediente10" id="ingrediente10">
                        <div class="form-group">
                            <label for="nombreIngrediente10" class="col-form-label">Ingrediente 10: *</label>  
                        </div>
                        <div class="ingrediente-box">
                            <div class="ingrediente-text">
                                <input type="text" class="form-control" id="nombreIngrediente10" required>
                            </div>
                            <div>
                                <button type="button" id="btnEliminarIngrediente10" class="btn btn-danger" title="Eliminar ingrediente">-</button>
                            </div>
                        </div>
                    </div>





                </div>



            </div>
            <div class="modal-footer">
                <button type="button" id="btnCancelar" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                <button type="submit" id="btnGuardar" class="btn btn-dark">Guardar</button>
            </div>
            </form>    
        </div>
    </div>
</div>



<!--Modal para escoger ingrediente-->
<div class="modal fade" id="modalProductosReducida" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida">
                <div class="modal-body">
                <div class="container-fluid">
                    <!-- Page Heading -->
                    <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de <?php echo $SESSION_nombreEmpresa?></h1>
                    <p class="mb-4">Puede agregar productos a la base de datos</p>
                    <!-- Inicio de Tabla -->
                    <div class="card shadow mb-4">
                     <?php
                    // include_once './bd/conexion.php';
                    $consulta1 = "SELECT * FROM vista_productos_reducida";
                                
                    $resultado1 = $conexion->prepare($consulta1);
                    $resultado1->execute();
                    $data1=$resultado1->fetchAll(PDO::FETCH_ASSOC);
                    ?>
                    <div class="card-header py-3">
                        <div class="col-lg-12">
                            <button id="btnNuevoProducto" type="button" class="btn btn-success" data-toggle="modal">Agregar Producto</button>    
                        </div>    
                    </div>
                                
                    <div class="card-body">
                        <div class="table-responsive">        
                            <table id="tablaProductosReducida" class="table table-bordered" style="width:100%">
                            <thead class="text-center">
                                <tr>
                                    <th>CAS</th>
                                    <th>Nombre</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php                            
                                foreach($data1 as $dat1) {                                                        
                                ?>
                                <tr>
                                    <td><?php echo $dat1['cas'] ?></td>
                                    <td><?php echo $dat1['nombreProducto'] ?></td>
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
                <div class="modal-footer">
                    <button type="button" id="btnCancelar" class="btn btn-light" data-dismiss="modal">Cancelar</button>
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