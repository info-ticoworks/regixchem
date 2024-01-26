<?php require_once "vistas/parte_superior.php"?>

<!--INICIO del cont principal-->
<div class="container-fluid">

<div class="card-header py-3">
        <!-- Page Heading -->
        <h1 class="h3 mb-2 text-gray-800">Detalle de Marcas</h1>
        <p class="mb-4">El orden por defecto es por fecha, la marca más nueva visualiza de primera.</p>
    </div>  

<!-- Inicio de Tabla -->
<div class="card shadow mb-4">
 <?php
include_once './bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$consulta = "SELECT id, marcas.cedula, fecha, hora, ubicacion, latitud, longitud, marcas.idTipoMarca, usuarios.nombre, usuarios.apellido1, usuarios.apellido2, tipoMarca.nombreTipoMarca, nombreLugarTrabajo FROM marcas
            inner join usuarios on marcas.cedula=usuarios.cedula
            inner join tipoMarca on marcas.idTipoMarca=tipoMarca.idTipoMarca
            inner join lugarTrabajo on usuarios.idLugarTrabajo=lugarTrabajo.idLugarTrabajo
            where usuarios.idEmpresa=$SESSION_idEmpresa";
            
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);
?> 
<div class="card-body">
                    <div class="table-responsive">        
                        <table id="tablaMarcas" class="table table-bordered" style="width:100%">
                        <thead class="text-center">
                            <tr>
                                <th>Id</th>
                                <th>Cédula</th>
                                <th>Nombre</th>
                                <th>Primer Apellido</th>                                
                                <th>Segundo Apellido</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Ubicación</th>
                                <th>Latitud</th>
                                <th>Longitud</th>
                                <th>Tipo de Marca</th>
                                <th>Lugar de Trabajo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php                            
                            foreach($data as $dat) {                                                        
                            ?>
                            <tr>
                                <td><?php echo $dat['id'] ?></td>
                                <td><?php echo $dat['cedula'] ?></td>
                                <td><?php echo $dat['nombre'] ?></td>
                                <td><?php echo $dat['apellido1'] ?></td>
                                <td><?php echo $dat['apellido2'] ?></td>
                                <td><?php echo $dat['fecha'] ?></td>
                                <td><?php echo $dat['hora'] ?></td>
                                <td><?php echo $dat['ubicacion'] ?></td>
                                <td><?php echo $dat['latitud'] ?></td>
                                <td><?php echo $dat['longitud'] ?></td>
                                <td><?php echo $dat['nombreTipoMarca'] ?></td>
                                <td><?php echo $dat['nombreLugarTrabajo'] ?></td>
                                <td></td>
                            </tr>
                            <?php
                                }
                            ?>                                
                        </tbody>
                        <tfoot class="text-center">
                            <tr>
                                <th>Id</th>
                                <th>Cédula</th>
                                <th>Nombre</th>
                                <th>Primer Apellido</th>                                
                                <th>Segundo Apellido</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Ubicación</th>
                                <th>Latitud</th>
                                <th>Longitud</th>
                                <th>Tipo de Marca</th>
                                <th>Lugar de Trabajo</th>
                                <th>Acciones</th>
                            </tr>
                        </tfoot>     
                       </table>                    
                    </div>
                </div>
                      
<!--Modal para CRUD-->
<div class="modal fade" id="modalMarcas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
        <form id="formPersonas">    
            <div class="modal-body">
                <div class="info-marcas">
                    <label for="newid" class="col-form-label"><strong>Cédula:</strong>&nbsp;</label>
                    <p id="newid" class="col-form-label"></p>
                </div>
                <div class="info-marcas">
                    <label for="nombre" class="col-form-label"><strong>Nombre:</strong>&nbsp;</label>
                    <p id="nombre" class="col-form-label"></p>&nbsp;
                    <p id="apellido1" class="col-form-label"></p>&nbsp;
                    <p id="apellido2" class="col-form-label"></p>
                </div>
                <div class="info-marcas">
                    <label for="fecha" class="col-form-label"><strong>Fecha:</strong>&nbsp;</label>
                    <p id="fecha" class="col-form-label"></p>
                </div>
                <div class="info-marcas">
                    <label for="hora" class="col-form-label"><strong>Hora:</strong>&nbsp;</label>
                    <p id="hora" class="col-form-label"></p>
                </div>
                <div class="info-marcas">
                    <label for="tipoMarca" class="col-form-label"><strong>Tipo de Marca:</strong>&nbsp;</label>
                    <p id="tipoMarca" class="col-form-label"></p>
                </div>
                <div class="info-marcas">
                    <label for="lugarTrabajo" class="col-form-label"><strong>Lugar de trabajo:</strong>&nbsp;</label>
                    <p id="lugarTrabajo" class="col-form-label"></p>
                </div>
                <div class="form-group">
                    <label for="Map" class="col-form-label"><strong>Ubicación de la marca:</strong></label>
                    <div class="map" id="map"></div>
                    <label for="noMap" class="col-form-label" hidden><strong>Ubicación de la marca:</strong>&nbsp;</label>
                    <p id="noMap" class="col-form-label" hidden></p>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Cerrar</button>
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