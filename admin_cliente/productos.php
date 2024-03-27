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
        <button id="btnNuevoProducto" type="button" class="btn btn-success" data-toggle="modal">Agregar Producto</button>    
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
                                <th>Fabricante 1</th>
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
                                <td><?php echo $dat['nombreFabricante1'] ?></td>
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
                                <th>Fabricante 1</th>
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

                <div class="form-group">
                    <label for="newcas" class="col-form-label">CAS: *</label>
                    <input type="text" class="form-control" id="newcas" required>
                </div>

                <div class="form-group">
                    <label for="nombreProducto" class="col-form-label">Nombre: *</label>
                    <input type="text" class="form-control" id="nombreProducto" required>
                </div>

                <div class="form-group">
                    <label for="nombreGrupo" class="col-form-label">Grupo: *</label>
                    <select class="form-control" id="nombreGrupo" required>
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
                    <select class="form-control" id="nombreUso" required>
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

                <!-- Fabricantes -->
                <div class="fabricantes" id="fabricantes">
                    <div class="fabricante1" id="fabricante1">
                        <div class="form-group">
                            <label for="nombreFabricante1" class="col-form-label">Fabricante 1: *</label>  
                        </div>
                        <div class="fabricante-box">
                            <div class="fabricante-text">
                                <input type="text" class="form-control" id="nombreFabricante1" required>
                            </div>
                            <div>
                                <button type="button" id="btnFabricante2" class="btn btn-primary" title="Agregar otro fabricante">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="fabricante2" id="fabricante2">
                        <div class="form-group">
                            <label for="nombreFabricante2" class="col-form-label">Fabricante 2: *</label>  
                        </div>
                        <div class="fabricante-box">
                            <div class="fabricante-text">
                                <input type="text" class="form-control" id="nombreFabricante2" required>
                            </div>
                            <div>
                                <button type="button" id="btnEliminarFabricante2" class="btn btn-danger" title="Eliminar fabricante">-</button>
                            </div>
                            <div>
                                <button type="button" id="btnFabricante3" class="btn btn-primary" title="Agregar otro fabricante">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="fabricante3" id="fabricante3">
                        <div class="form-group">
                            <label for="nombreFabricante3" class="col-form-label">Fabricante 3: *</label>  
                        </div>
                        <div class="fabricante-box">
                            <div class="fabricante-text">
                                <input type="text" class="form-control" id="nombreFabricante3" required>
                            </div>
                            <div>
                                <button type="button" id="btnEliminarFabricante3" class="btn btn-danger" title="Eliminar fabricante">-</button>
                            </div>
                            <div>
                                <button type="button" id="btnFabricante3" class="btn btn-primary" title="Agregar otro fabricante">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="fabricante4" id="fabricante4">
                        <div class="form-group">
                            <label for="nombreFabricante4" class="col-form-label">Fabricante 4: *</label>  
                        </div>
                        <div class="fabricante-box">
                            <div class="fabricante-text">
                                <input type="text" class="form-control" id="nombreFabricante4" required>
                            </div>
                            <div>
                                <button type="button" id="btnEliminarFabricante4" class="btn btn-danger" title="Eliminar fabricante">-</button>
                            </div>
                            <div>
                                <button type="button" id="btnFabricante3" class="btn btn-primary" title="Agregar otro fabricante">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="fabricante5" id="fabricante5">
                        <div class="form-group">
                            <label for="nombreFabricante5" class="col-form-label">Fabricante 5: *</label>  
                        </div>
                        <div class="fabricante-box">
                            <div class="fabricante-text">
                                <input type="text" class="form-control" id="nombreFabricante5" required>
                            </div>
                            <div>
                                <button type="button" id="btnEliminarFabricante5" class="btn btn-danger" title="Eliminar fabricante">-</button>
                            </div>
                            <div>
                                <button type="button" id="btnFabricante3" class="btn btn-primary" title="Agregar otro fabricante">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="fabricante6" id="fabricante6">
                        <div class="form-group">
                            <label for="nombreFabricante6" class="col-form-label">Fabricante 6: *</label>  
                        </div>
                        <div class="fabricante-box">
                            <div class="fabricante-text">
                                <input type="text" class="form-control" id="nombreFabricante6" required>
                            </div>
                            <div>
                                <button type="button" id="btnEliminarFabricante6" class="btn btn-danger" title="Eliminar fabricante">-</button>
                            </div>
                            <div>
                                <button type="button" id="btnFabricante3" class="btn btn-primary" title="Agregar otro fabricante">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="fabricante7" id="fabricante7">
                        <div class="form-group">
                            <label for="nombreFabricante7" class="col-form-label">Fabricante 7: *</label>  
                        </div>
                        <div class="fabricante-box">
                            <div class="fabricante-text">
                                <input type="text" class="form-control" id="nombreFabricante7" required>
                            </div>
                            <div>
                                <button type="button" id="btnEliminarFabricante7" class="btn btn-danger" title="Eliminar fabricante">-</button>
                            </div>
                            <div>
                                <button type="button" id="btnFabricante3" class="btn btn-primary" title="Agregar otro fabricante">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="fabricante8" id="fabricante8">
                        <div class="form-group">
                            <label for="nombreFabricante8" class="col-form-label">Fabricante 8: *</label>  
                        </div>
                        <div class="fabricante-box">
                            <div class="fabricante-text">
                                <input type="text" class="form-control" id="nombreFabricante8" required>
                            </div>
                            <div>
                                <button type="button" id="btnEliminarFabricante8" class="btn btn-danger" title="Eliminar fabricante">-</button>
                            </div>
                            <div>
                                <button type="button" id="btnFabricante3" class="btn btn-primary" title="Agregar otro fabricante">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="fabricante9" id="fabricante9">
                        <div class="form-group">
                            <label for="nombreFabricante9" class="col-form-label">Fabricante 9: *</label>  
                        </div>
                        <div class="fabricante-box">
                            <div class="fabricante-text">
                                <input type="text" class="form-control" id="nombreFabricante9" required>
                            </div>
                            <div>
                                <button type="button" id="btnEliminarFabricante9" class="btn btn-danger" title="Eliminar fabricante">-</button>
                            </div>
                            <div>
                                <button type="button" id="btnFabricante3" class="btn btn-primary" title="Agregar otro fabricante">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="fabricante10" id="fabricante10">
                        <div class="form-group">
                            <label for="nombreFabricante10" class="col-form-label">Fabricante 10: *</label>  
                        </div>
                        <div class="fabricante-box">
                            <div class="fabricante-text">
                                <input type="text" class="form-control" id="nombreFabricante10" required>
                            </div>
                            <div>
                                <button type="button" id="btnEliminarFabricante10" class="btn btn-danger" title="Eliminar fabricante">-</button>
                            </div>
                            <div>
                                <button type="button" id="btnFabricante3" class="btn btn-primary" title="Agregar otro fabricante">+</button>
                            </div>
                        </div>
                    </div>





                </div>

                <!-- Clases de Peligro -->
                <div class="clases">

                    <!-- Clase 1 -->
                    <button class="btn btn-success" type="button" id="btnClase1">Agregar Clase de Peligro</button>
                        <div class="clase-box" id='clase1'>
                            <div class="clase-box-top">
                                <label class="clase-box-titulo">Datos de la clase de peligro #1</label>
                                <button class="btn btn-danger" type="button" id="btnEliminarClase1">Eliminar</button>
                            </div>
                        <div class="form-group">
                            <label for="nombreClase1" class="col-form-label">Clase de Peligro: *</label>
                            <select class="form-control" id="nombreClase1" disabled>
                                <option selected disabled value="">Elija una clase de peligro.</option>
                                <?php
                                    $consulta = "SELECT DISTINCT idClasePeligro, nombreClasePeligro FROM vista_categoria_peligro
                                                ORDER BY nombreClasePeligro asc";
                                    $resultadoClase1 = $conexion->prepare($consulta);
                                    $resultadoClase1->execute();
                                    $dataClase1=$resultadoClase1->fetchAll(PDO::FETCH_ASSOC);
                                    foreach($dataClase1 as $datClase1) {
                                        echo "<option value=" . $datClase1['idClasePeligro'] . ">" . $datClase1['nombreClasePeligro'] . "</option>";
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="cont_cat">
                            <div class="cat_select">
                                <div class="form-group">
        		                    <label for='nombreCategoria1' class='col-form-label'>Categoría de Peligro: *</label>
        		                    <select class='form-control' id='nombreCategoria1' disabled>
				                    <option selected disabled value="">Elija una categoría de peligro.</option>
                                    </select>
                                </div>
                            </div>
                            <div class="toxicidad">
                                <div class="form-group">
                                    <label for="nivel1" class="col-form-label">Toxicidad: *</label>
                                    <div class="cont_nivel">
                                        <input type="number" class="form-control" style="width:150px" id="nivel1" min="0" max="9999.99"  step="0.01" disabled>
                                        <p class="cont_nivel p" id="unidad1">N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
        		            <label for='nombrePalabraAdvertencia1' class='col-form-label'>Palabra de Advertencia: *</label>
        		            <select class='form-control' id='nombrePalabraAdvertencia1' disabled>
				            <option selected disabled value="">Elija una palabra de advertencia.</option>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombreIndicacion1' class='col-form-label'>Indicación: *</label>
        		            <select class='form-control' id='nombreIndicacion1' disabled>
				            <option selected disabled value="">Elija una Indicación.</option>
                            </select>
                        </div>
                        </div>
                    <button class="btn btn-success" type="button" id="btnClase2">Agregar otra clase de Peligro</button>

                    <!-- Clase 2 -->
                    <div class="clase-box" id='clase2'>
                        <div class="clase-box-top">
                            <label class="clase-box-titulo">Datos de la clase de peligro #2</label>
                            <button class="btn btn-danger" type="button" id="btnEliminarClase2">Eliminar</button>
                        </div>
                        <div class="form-group">
                            <label for="nombreClase2" class="col-form-label">Clase de Peligro: *</label>
                            <select class="form-control" id="nombreClase2">
                                <option selected disabled value="">Elija una clase de peligro.</option>
                                <?php
                                    $consulta = "SELECT DISTINCT idClasePeligro, nombreClasePeligro FROM vista_categoria_peligro
                                                ORDER BY nombreClasePeligro asc";
                                    $resultadoClase2 = $conexion->prepare($consulta);
                                    $resultadoClase2->execute();
                                    $dataClase2=$resultadoClase2->fetchAll(PDO::FETCH_ASSOC);
                                    foreach($dataClase2 as $datClase2) {
                                        echo "<option value=" . $datClase2['idClasePeligro'] . ">" . $datClase2['nombreClasePeligro'] . "</option>";
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="cont_cat">
                            <div class="cat_select">
                                <div class="form-group">
        		                    <label for='nombreCategoria2' class='col-form-label'>Categoría de Peligro: *</label>
        		                    <select class='form-control' id='nombreCategoria2' disabled>
				                    <option selected disabled value="">Elija una categoría de peligro.</option>
                                    </select>
                                </div>
                            </div>
                            <div class="toxicidad">
                                <div class="form-group">
                                    <label for="nivel2" class="col-form-label">Toxicidad: *</label>
                                    <div class="cont_nivel">
                                        <input type="number" class="form-control" style="width:150px" id="nivel2" min="0" max="9999.99"  step="0.01" disabled>
                                        <p class="cont_nivel p" id="unidad2">N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
        		            <label for='nombrePalabraAdvertencia2' class='col-form-label'>Palabra de Advertencia: *</label>
        		            <select class='form-control' id='nombrePalabraAdvertencia2' disabled>
				            <option selected disabled value="">Elija una palabra de advertencia.</option>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombreIndicacion2' class='col-form-label'>Indicación: *</label>
        		            <select class='form-control' id='nombreIndicacion2' disabled>
				            <option selected disabled value="">Elija una Indicación.</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-success" type="button" id="btnClase3">Agregar otra clase de Peligro</button>

                    <!-- Clase 3 -->
                    <div class="clase-box" id='clase3'>
                        <div class="clase-box-top">
                            <label class="clase-box-titulo">Datos de la clase de peligro #3</label>
                            <button class="btn btn-danger" type="button" id="btnEliminarClase3">Eliminar</button>
                        </div>
                        <div class="form-group">
                            <label for="nombreClase3" class="col-form-label">Clase de Peligro: *</label>
                            <select class="form-control" id="nombreClase3">
                                <option selected disabled value="">Elija una clase de peligro.</option>
                                <?php
                                    $consulta = "SELECT DISTINCT idClasePeligro, nombreClasePeligro FROM vista_categoria_peligro
                                                ORDER BY nombreClasePeligro asc";
                                    $resultadoClase3 = $conexion->prepare($consulta);
                                    $resultadoClase3->execute();
                                    $dataClase3=$resultadoClase3->fetchAll(PDO::FETCH_ASSOC);
                                    foreach($dataClase3 as $datClase3) {
                                        echo "<option value=" . $datClase3['idClasePeligro'] . ">" . $datClase3['nombreClasePeligro'] . "</option>";
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="cont_cat">
                            <div class="cat_select">
                                <div class="form-group">
        		                    <label for='nombreCategoria3' class='col-form-label'>Categoría de Peligro: *</label>
        		                    <select class='form-control' id='nombreCategoria3' disabled>
				                    <option selected disabled value="">Elija una categoría de peligro.</option>
                                    </select>
                                </div>
                            </div>
                            <div class="toxicidad">
                                <div class="form-group">
                                    <label for="nivel3" class="col-form-label">Toxicidad: *</label>
                                    <div class="cont_nivel">
                                        <input type="number" class="form-control" style="width:150px" id="nivel3" min="0" max="9999.99"  step="0.01" disabled>
                                        <p class="cont_nivel p" id="unidad3">N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
        		            <label for='nombrePalabraAdvertencia3' class='col-form-label'>Palabra de Advertencia: *</label>
        		            <select class='form-control' id='nombrePalabraAdvertencia3' disabled>
				            <option selected disabled value="">Elija una palabra de advertencia.</option>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombreIndicacion3' class='col-form-label'>Indicación: *</label>
        		            <select class='form-control' id='nombreIndicacion3' disabled>
				            <option selected disabled value="">Elija una Indicación.</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-success" type="button" id="btnClase4">Agregar otra clase de Peligro</button>

                    <!-- Clase 4 -->
                    <div class="clase-box" id='clase4'>
                        <div class="clase-box-top">
                            <label class="clase-box-titulo">Datos de la clase de peligro #4</label>
                            <button class="btn btn-danger" type="button" id="btnEliminarClase4">Eliminar</button>
                        </div>
                        <div class="form-group">
                            <label for="nombreClase4" class="col-form-label">Clase de Peligro: *</label>
                            <select class="form-control" id="nombreClase4">
                                <option selected disabled value="">Elija una clase de peligro.</option>
                                <?php
                                    $consulta = "SELECT DISTINCT idClasePeligro, nombreClasePeligro FROM vista_categoria_peligro
                                                ORDER BY nombreClasePeligro asc";
                                    $resultadoClase4 = $conexion->prepare($consulta);
                                    $resultadoClase4->execute();
                                    $dataClase4=$resultadoClase4->fetchAll(PDO::FETCH_ASSOC);
                                    foreach($dataClase4 as $datClase4) {
                                        echo "<option value=" . $datClase4['idClasePeligro'] . ">" . $datClase4['nombreClasePeligro'] . "</option>";
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="cont_cat">
                            <div class="cat_select">
                                <div class="form-group">
        		                    <label for='nombreCategoria4' class='col-form-label'>Categoría de Peligro: *</label>
        		                    <select class='form-control' id='nombreCategoria4' disabled>
				                    <option selected disabled value="">Elija una categoría de peligro.</option>
                                    </select>
                                </div>
                            </div>
                            <div class="toxicidad">
                                <div class="form-group">
                                    <label for="nivel4" class="col-form-label">Toxicidad: *</label>
                                    <div class="cont_nivel">
                                        <input type="number" class="form-control" style="width:150px" id="nivel4" min="0" max="9999.99"  step="0.01" disabled>
                                        <p class="cont_nivel p" id="unidad4">N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
        		            <label for='nombrePalabraAdvertencia4' class='col-form-label'>Palabra de Advertencia: *</label>
        		            <select class='form-control' id='nombrePalabraAdvertencia4' disabled>
				            <option selected disabled value="">Elija una palabra de advertencia.</option>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombreIndicacion4' class='col-form-label'>Indicación: *</label>
        		            <select class='form-control' id='nombreIndicacion4' disabled>
				            <option selected disabled value="">Elija una Indicación.</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-success" type="button" id="btnClase5">Agregar otra clase de Peligro</button>

                    <!-- Clase 5 -->
                    <div class="clase-box" id='clase5'>
                        <div class="clase-box-top">
                            <label class="clase-box-titulo">Datos de la clase de peligro #5</label>
                            <button class="btn btn-danger" type="button" id="btnEliminarClase5">Eliminar</button>
                        </div>
                        <div class="form-group">
                            <label for="nombreClase5" class="col-form-label">Clase de Peligro: *</label>
                            <select class="form-control" id="nombreClase5">
                                <option selected disabled value="">Elija una clase de peligro.</option>
                                <?php
                                    $consulta = "SELECT DISTINCT idClasePeligro, nombreClasePeligro FROM vista_categoria_peligro
                                                ORDER BY nombreClasePeligro asc";
                                    $resultadoClase5 = $conexion->prepare($consulta);
                                    $resultadoClase5->execute();
                                    $dataClase5=$resultadoClase5->fetchAll(PDO::FETCH_ASSOC);
                                    foreach($dataClase5 as $datClase5) {
                                        echo "<option value=" . $datClase5['idClasePeligro'] . ">" . $datClase5['nombreClasePeligro'] . "</option>";
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="cont_cat">
                            <div class="cat_select">
                                <div class="form-group">
        		                    <label for='nombreCategoria5' class='col-form-label'>Categoría de Peligro: *</label>
        		                    <select class='form-control' id='nombreCategoria5' disabled>
				                    <option selected disabled value="">Elija una categoría de peligro.</option>
                                    </select>
                                </div>
                            </div>
                            <div class="toxicidad">
                                <div class="form-group">
                                    <label for="nivel5" class="col-form-label">Toxicidad: *</label>
                                    <div class="cont_nivel">
                                        <input type="number" class="form-control" style="width:150px" id="nivel5" min="0" max="9999.99"  step="0.01" disabled>
                                        <p class="cont_nivel p" id="unidad5">N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
        		            <label for='nombrePalabraAdvertencia5' class='col-form-label'>Palabra de Advertencia: *</label>
        		            <select class='form-control' id='nombrePalabraAdvertencia5' disabled>
				            <option selected disabled value="">Elija una palabra de advertencia.</option>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombreIndicacion5' class='col-form-label'>Indicación: *</label>
        		            <select class='form-control' id='nombreIndicacion5' disabled>
				            <option selected disabled value="">Elija una Indicación.</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-success" type="button" id="btnClase6">Agregar otra clase de Peligro</button>

                    <!-- Clase 6 -->
                    <div class="clase-box" id='clase6'>
                        <div class="clase-box-top">
                            <label class="clase-box-titulo">Datos de la clase de peligro #6</label>
                            <button class="btn btn-danger" type="button" id="btnEliminarClase6">Eliminar</button>
                        </div>
                        <div class="form-group">
                            <label for="nombreClase6" class="col-form-label">Clase de Peligro: *</label>
                            <select class="form-control" id="nombreClase6">
                                <option selected disabled value="">Elija una clase de peligro.</option>
                                <?php
                                    $consulta = "SELECT DISTINCT idClasePeligro, nombreClasePeligro FROM vista_categoria_peligro
                                                ORDER BY nombreClasePeligro asc";
                                    $resultadoClase6 = $conexion->prepare($consulta);
                                    $resultadoClase6->execute();
                                    $dataClase6=$resultadoClase6->fetchAll(PDO::FETCH_ASSOC);
                                    foreach($dataClase6 as $datClase6) {
                                        echo "<option value=" . $datClase6['idClasePeligro'] . ">" . $datClase6['nombreClasePeligro'] . "</option>";
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="cont_cat">
                            <div class="cat_select">
                                <div class="form-group">
        		                    <label for='nombreCategoria6' class='col-form-label'>Categoría de Peligro: *</label>
        		                    <select class='form-control' id='nombreCategoria6' disabled>
				                    <option selected disabled value="">Elija una categoría de peligro.</option>
                                    </select>
                                </div>
                            </div>
                            <div class="toxicidad">
                                <div class="form-group">
                                    <label for="nivel6" class="col-form-label">Toxicidad: *</label>
                                    <div class="cont_nivel">
                                        <input type="number" class="form-control" style="width:150px" id="nivel6" min="0" max="9999.99"  step="0.01" disabled>
                                        <p class="cont_nivel p" id="unidad6">N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
        		            <label for='nombrePalabraAdvertencia6' class='col-form-label'>Palabra de Advertencia: *</label>
        		            <select class='form-control' id='nombrePalabraAdvertencia6' disabled>
				            <option selected disabled value="">Elija una palabra de advertencia.</option>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombreIndicacion6' class='col-form-label'>Indicación: *</label>
        		            <select class='form-control' id='nombreIndicacion6' disabled>
				            <option selected disabled value="">Elija una Indicación.</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-success" type="button" id="btnClase7">Agregar otra clase de Peligro</button>

                    <!-- Clase 7 -->
                    <div class="clase-box" id='clase7'>
                        <div class="clase-box-top">
                            <label class="clase-box-titulo">Datos de la clase de peligro #7</label>
                            <button class="btn btn-danger" type="button" id="btnEliminarClase7">Eliminar</button>
                        </div>
                        <div class="form-group">
                            <label for="nombreClase7" class="col-form-label">Clase de Peligro: *</label>
                            <select class="form-control" id="nombreClase7">
                                <option selected disabled value="">Elija una clase de peligro.</option>
                                <?php
                                    $consulta = "SELECT DISTINCT idClasePeligro, nombreClasePeligro FROM vista_categoria_peligro
                                                ORDER BY nombreClasePeligro asc";
                                    $resultadoClase7 = $conexion->prepare($consulta);
                                    $resultadoClase7->execute();
                                    $dataClase7=$resultadoClase7->fetchAll(PDO::FETCH_ASSOC);
                                    foreach($dataClase7 as $datClase7) {
                                        echo "<option value=" . $datClase7['idClasePeligro'] . ">" . $datClase7['nombreClasePeligro'] . "</option>";
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="cont_cat">
                            <div class="cat_select">
                                <div class="form-group">
        		                    <label for='nombreCategoria7' class='col-form-label'>Categoría de Peligro: *</label>
        		                    <select class='form-control' id='nombreCategoria7' disabled>
				                    <option selected disabled value="">Elija una categoría de peligro.</option>
                                    </select>
                                </div>
                            </div>
                            <div class="toxicidad">
                                <div class="form-group">
                                    <label for="nivel7" class="col-form-label">Toxicidad: *</label>
                                    <div class="cont_nivel">
                                        <input type="number" class="form-control" style="width:150px" id="nivel7" min="0" max="9999.99"  step="0.01" disabled>
                                        <p class="cont_nivel p" id="unidad7">N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
        		            <label for='nombrePalabraAdvertencia7' class='col-form-label'>Palabra de Advertencia: *</label>
        		            <select class='form-control' id='nombrePalabraAdvertencia7' disabled>
				            <option selected disabled value="">Elija una palabra de advertencia.</option>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombreIndicacion7' class='col-form-label'>Indicación: *</label>
        		            <select class='form-control' id='nombreIndicacion7' disabled>
				            <option selected disabled value="">Elija una Indicación.</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-success" type="button" id="btnClase8">Agregar otra clase de Peligro</button>

                    <!-- Clase 8 -->
                    <div class="clase-box" id='clase8'>
                        <div class="clase-box-top">
                            <label class="clase-box-titulo">Datos de la clase de peligro #8</label>
                            <button class="btn btn-danger" type="button" id="btnEliminarClase8">Eliminar</button>
                        </div>
                        <div class="form-group">
                            <label for="nombreClase8" class="col-form-label">Clase de Peligro: *</label>
                            <select class="form-control" id="nombreClase8">
                                <option selected disabled value="">Elija una clase de peligro.</option>
                                <?php
                                    $consulta = "SELECT DISTINCT idClasePeligro, nombreClasePeligro FROM vista_categoria_peligro
                                                ORDER BY nombreClasePeligro asc";
                                    $resultadoClase8 = $conexion->prepare($consulta);
                                    $resultadoClase8->execute();
                                    $dataClase8=$resultadoClase8->fetchAll(PDO::FETCH_ASSOC);
                                    foreach($dataClase8 as $datClase8) {
                                        echo "<option value=" . $datClase8['idClasePeligro'] . ">" . $datClase8['nombreClasePeligro'] . "</option>";
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="cont_cat">
                            <div class="cat_select">
                                <div class="form-group">
        		                    <label for='nombreCategoria8' class='col-form-label'>Categoría de Peligro: *</label>
        		                    <select class='form-control' id='nombreCategoria8' disabled>
				                    <option selected disabled value="">Elija una categoría de peligro.</option>
                                    </select>
                                </div>
                            </div>
                            <div class="toxicidad">
                                <div class="form-group">
                                    <label for="nivel8" class="col-form-label">Toxicidad: *</label>
                                    <div class="cont_nivel">
                                        <input type="number" class="form-control" style="width:150px" id="nivel8" min="0" max="9999.99"  step="0.01" disabled>
                                        <p class="cont_nivel p" id="unidad8">N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
        		            <label for='nombrePalabraAdvertencia8' class='col-form-label'>Palabra de Advertencia: *</label>
        		            <select class='form-control' id='nombrePalabraAdvertencia8' disabled>
				            <option selected disabled value="">Elija una palabra de advertencia.</option>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombreIndicacion8' class='col-form-label'>Indicación: *</label>
        		            <select class='form-control' id='nombreIndicacion8' disabled>
				            <option selected disabled value="">Elija una Indicación.</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-success" type="button" id="btnClase9">Agregar otra clase de Peligro</button>

                    <!-- Clase 9 -->
                    <div class="clase-box" id='clase9'>
                        <div class="clase-box-top">
                            <label class="clase-box-titulo">Datos de la clase de peligro #9</label>
                            <button class="btn btn-danger" type="button" id="btnEliminarClase9">Eliminar</button>
                        </div>
                        <div class="form-group">
                            <label for="nombreClase9" class="col-form-label">Clase de Peligro: *</label>
                            <select class="form-control" id="nombreClase9">
                                <option selected disabled value="">Elija una clase de peligro.</option>
                                <?php
                                    $consulta = "SELECT DISTINCT idClasePeligro, nombreClasePeligro FROM vista_categoria_peligro
                                                ORDER BY nombreClasePeligro asc";
                                    $resultadoClase9 = $conexion->prepare($consulta);
                                    $resultadoClase9->execute();
                                    $dataClase9=$resultadoClase9->fetchAll(PDO::FETCH_ASSOC);
                                    foreach($dataClase9 as $datClase9) {
                                        echo "<option value=" . $datClase9['idClasePeligro'] . ">" . $datClase9['nombreClasePeligro'] . "</option>";
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="cont_cat">
                            <div class="cat_select">
                                <div class="form-group">
        		                    <label for='nombreCategoria9' class='col-form-label'>Categoría de Peligro: *</label>
        		                    <select class='form-control' id='nombreCategoria9' disabled>
				                    <option selected disabled value="">Elija una categoría de peligro.</option>
                                    </select>
                                </div>
                            </div>
                            <div class="toxicidad">
                                <div class="form-group">
                                    <label for="nivel9" class="col-form-label">Toxicidad: *</label>
                                    <div class="cont_nivel">
                                        <input type="number" class="form-control" style="width:150px" id="nivel9" min="0" max="9999.99"  step="0.01" disabled>
                                        <p class="cont_nivel p" id="unidad9">N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
        		            <label for='nombrePalabraAdvertencia9' class='col-form-label'>Palabra de Advertencia: *</label>
        		            <select class='form-control' id='nombrePalabraAdvertencia9' disabled>
				            <option selected disabled value="">Elija una palabra de advertencia.</option>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombreIndicacion9' class='col-form-label'>Indicación: *</label>
        		            <select class='form-control' id='nombreIndicacion9' disabled>
				            <option selected disabled value="">Elija una Indicación.</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-success" type="button" id="btnClase10">Agregar otra clase de Peligro</button>

                    <!-- Clase 10 -->
                    <div class="clase-box" id='clase10'>
                        <div class="clase-box-top">
                            <label class="clase-box-titulo">Datos de la clase de peligro #10</label>
                            <button class="btn btn-danger" type="button" id="btnEliminarClase10">Eliminar</button>
                        </div>
                        <div class="form-group">
                            <label for="nombreClase10" class="col-form-label">Clase de Peligro: *</label>
                            <select class="form-control" id="nombreClase10">
                                <option selected disabled value="">Elija una clase de peligro.</option>
                                <?php
                                    $consulta = "SELECT DISTINCT idClasePeligro, nombreClasePeligro FROM vista_categoria_peligro
                                                ORDER BY nombreClasePeligro asc";
                                    $resultadoClase10 = $conexion->prepare($consulta);
                                    $resultadoClase10->execute();
                                    $dataClase10=$resultadoClase10->fetchAll(PDO::FETCH_ASSOC);
                                    foreach($dataClase10 as $datClase10) {
                                        echo "<option value=" . $datClase10['idClasePeligro'] . ">" . $datClase10['nombreClasePeligro'] . "</option>";
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="cont_cat">
                            <div class="cat_select">
                                <div class="form-group">
        		                    <label for='nombreCategoria10' class='col-form-label'>Categoría de Peligro: *</label>
        		                    <select class='form-control' id='nombreCategoria10' disabled>
				                    <option selected disabled value="">Elija una categoría de peligro.</option>
                                    </select>
                                </div>
                            </div>
                            <div class="toxicidad">
                                <div class="form-group">
                                    <label for="nivel10" class="col-form-label">Toxicidad: *</label>
                                    <div class="cont_nivel">
                                        <input type="number" class="form-control" style="width:150px" id="nivel10" min="0" max="9999.99"  step="0.01" disabled>
                                        <p class="cont_nivel p" id="unidad10">N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
        		            <label for='nombrePalabraAdvertencia10' class='col-form-label'>Palabra de Advertencia: *</label>
        		            <select class='form-control' id='nombrePalabraAdvertencia10' disabled>
				            <option selected disabled value="">Elija una palabra de advertencia.</option>
                            </select>
                        </div>
                        <div class="form-group">
        		            <label for='nombreIndicacion10' class='col-form-label'>Indicación: *</label>
        		            <select class='form-control' id='nombreIndicacion10' disabled>
				            <option selected disabled value="">Elija una Indicación.</option>
                            </select>
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
      
</div>
<!-- /.container-fluid -->
    
</div>
<!--FIN del cont principal-->

<?php require_once "vistas/parte_inferior.php"?>