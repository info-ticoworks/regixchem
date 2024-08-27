<!--Inicio Modal para escoger ingrediente 2-->
<div class="modal fade" id="modalProductosReducida2" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida2">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta2 = "SELECT * FROM vista_productos_reducida";
                            $resultado2 = $conexion->prepare($consulta2);
                            $resultado2->execute();
                            $data2 = $resultado2->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida2" class="table table-bordered"
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
                                            foreach ($data2 as $dat2) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat2['cas'] ?></td>
                                                    <td><?php echo $dat2['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 2-->
                                            
<!--Inicio Modal para escoger ingrediente 3-->
<div class="modal fade" id="modalProductosReducida3" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida3">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta3 = "SELECT * FROM vista_productos_reducida";
                            $resultado3 = $conexion->prepare($consulta3);
                            $resultado3->execute();
                            $data3 = $resultado3->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida3" class="table table-bordered"
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
                                            foreach ($data3 as $dat3) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat3['cas'] ?></td>
                                                    <td><?php echo $dat3['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 3-->
                                            
<!--Inicio Modal para escoger ingrediente 4-->
<div class="modal fade" id="modalProductosReducida4" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida4">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta4 = "SELECT * FROM vista_productos_reducida";
                            $resultado4 = $conexion->prepare($consulta4);
                            $resultado4->execute();
                            $data4 = $resultado4->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida4" class="table table-bordered"
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
                                            foreach ($data4 as $dat4) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat4['cas'] ?></td>
                                                    <td><?php echo $dat4['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 4-->
                                            
<!--Inicio Modal para escoger ingrediente 5-->
<div class="modal fade" id="modalProductosReducida5" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida5">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta5 = "SELECT * FROM vista_productos_reducida";
                            $resultado5 = $conexion->prepare($consulta5);
                            $resultado5->execute();
                            $data5 = $resultado5->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida5" class="table table-bordered"
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
                                            foreach ($data5 as $dat5) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat5['cas'] ?></td>
                                                    <td><?php echo $dat5['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 5-->
                                            
<!--Inicio Modal para escoger ingrediente 6-->
<div class="modal fade" id="modalProductosReducida6" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida6">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta6 = "SELECT * FROM vista_productos_reducida";
                            $resultado6 = $conexion->prepare($consulta6);
                            $resultado6->execute();
                            $data6 = $resultado6->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida6" class="table table-bordered"
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
                                            foreach ($data6 as $dat6) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat6['cas'] ?></td>
                                                    <td><?php echo $dat6['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 6-->
                                            
<!--Inicio Modal para escoger ingrediente 7-->
<div class="modal fade" id="modalProductosReducida7" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida7">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta7 = "SELECT * FROM vista_productos_reducida";
                            $resultado7 = $conexion->prepare($consulta7);
                            $resultado7->execute();
                            $data7 = $resultado7->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida7" class="table table-bordered"
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
                                            foreach ($data7 as $dat7) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat7['cas'] ?></td>
                                                    <td><?php echo $dat7['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 7-->
                                            
<!--Inicio Modal para escoger ingrediente 8-->
<div class="modal fade" id="modalProductosReducida8" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida8">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta8 = "SELECT * FROM vista_productos_reducida";
                            $resultado8 = $conexion->prepare($consulta8);
                            $resultado8->execute();
                            $data8 = $resultado8->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida8" class="table table-bordered"
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
                                            foreach ($data8 as $dat8) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat8['cas'] ?></td>
                                                    <td><?php echo $dat8['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 8-->
                                            
<!--Inicio Modal para escoger ingrediente 9-->
<div class="modal fade" id="modalProductosReducida9" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida9">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta9 = "SELECT * FROM vista_productos_reducida";
                            $resultado9 = $conexion->prepare($consulta9);
                            $resultado9->execute();
                            $data9 = $resultado9->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida9" class="table table-bordered"
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
                                            foreach ($data9 as $dat9) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat9['cas'] ?></td>
                                                    <td><?php echo $dat9['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 9-->
                                            
<!--Inicio Modal para escoger ingrediente 10-->
<div class="modal fade" id="modalProductosReducida10" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida10">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta10 = "SELECT * FROM vista_productos_reducida";
                            $resultado10 = $conexion->prepare($consulta10);
                            $resultado10->execute();
                            $data10 = $resultado10->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida10" class="table table-bordered"
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
                                            foreach ($data10 as $dat10) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat10['cas'] ?></td>
                                                    <td><?php echo $dat10['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 10-->
                                            
<!--Inicio Modal para escoger ingrediente 11-->
<div class="modal fade" id="modalProductosReducida11" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida11">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta11 = "SELECT * FROM vista_productos_reducida";
                            $resultado11 = $conexion->prepare($consulta11);
                            $resultado11->execute();
                            $data11 = $resultado11->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida11" class="table table-bordered"
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
                                            foreach ($data11 as $dat11) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat11['cas'] ?></td>
                                                    <td><?php echo $dat11['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 11-->
                                            
<!--Inicio Modal para escoger ingrediente 12-->
<div class="modal fade" id="modalProductosReducida12" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida12">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta12 = "SELECT * FROM vista_productos_reducida";
                            $resultado12 = $conexion->prepare($consulta12);
                            $resultado12->execute();
                            $data12 = $resultado12->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida12" class="table table-bordered"
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
                                            foreach ($data12 as $dat12) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat12['cas'] ?></td>
                                                    <td><?php echo $dat12['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 12-->
                                            
<!--Inicio Modal para escoger ingrediente 13-->
<div class="modal fade" id="modalProductosReducida13" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida13">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta13 = "SELECT * FROM vista_productos_reducida";
                            $resultado13 = $conexion->prepare($consulta13);
                            $resultado13->execute();
                            $data13 = $resultado13->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida13" class="table table-bordered"
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
                                            foreach ($data13 as $dat13) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat13['cas'] ?></td>
                                                    <td><?php echo $dat13['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 13-->
                                            
<!--Inicio Modal para escoger ingrediente 14-->
<div class="modal fade" id="modalProductosReducida14" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida14">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta14 = "SELECT * FROM vista_productos_reducida";
                            $resultado14 = $conexion->prepare($consulta14);
                            $resultado14->execute();
                            $data14 = $resultado14->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida14" class="table table-bordered"
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
                                            foreach ($data14 as $dat14) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat14['cas'] ?></td>
                                                    <td><?php echo $dat14['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 14-->
                                            
<!--Inicio Modal para escoger ingrediente 15-->
<div class="modal fade" id="modalProductosReducida15" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formProductosReducida15">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <h1 class="h3 mb-2 text-gray-800">Lista de Productos para uso de
                            <?php echo $SESSION_nombreEmpresa ?>
                        </h1>
                        <p class="mb-4">Puede agregar productos a la base de datos</p>
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta15 = "SELECT * FROM vista_productos_reducida";
                            $resultado15 = $conexion->prepare($consulta15);
                            $resultado15->execute();
                            $data15 = $resultado15->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <button id="btnNuevoProducto" type="button" class="btn btn-success"
                                        data-toggle="modal">Agregar Producto</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaProductosReducida15" class="table table-bordered"
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
                                            foreach ($data15 as $dat15) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat15['cas'] ?></td>
                                                    <td><?php echo $dat15['nombreProducto'] ?></td>
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
<!--Final Modal para escoger ingrediente 15-->













<!--Inicio Modal para escoger ONU 2-->
<div class="modal fade" id="modalONU2" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <?php
                            $consulta2 = "SELECT * FROM numUN";
                            $resultado2 = $conexion->prepare($consulta2);
                            $resultado2->execute();
                            $data2 = $resultado2->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU2" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data2 as $dat2) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat2['onu'] ?></td>
                                                    <td><?php echo $dat2['desc'] ?></td>
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
<!--Final Modal para escoger ONU 2-->
                                            
<!--Inicio Modal para escoger ONU 3-->
<div class="modal fade" id="modalONU3" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU3">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta3 = "SELECT * FROM numUN";
                            $resultado3 = $conexion->prepare($consulta3);
                            $resultado3->execute();
                            $data3 = $resultado3->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU3" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data3 as $dat3) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat3['onu'] ?></td>
                                                    <td><?php echo $dat3['desc'] ?></td>
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
<!--Final Modal para escoger ONU 3-->
                                            
<!--Inicio Modal para escoger ONU 4-->
<div class="modal fade" id="modalONU4" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU4">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta4 = "SELECT * FROM numUN";
                            $resultado4 = $conexion->prepare($consulta4);
                            $resultado4->execute();
                            $data4 = $resultado4->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU4" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data4 as $dat4) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat4['onu'] ?></td>
                                                    <td><?php echo $dat4['desc'] ?></td>
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
<!--Final Modal para escoger ONU 4-->
                                            
<!--Inicio Modal para escoger ONU 5-->
<div class="modal fade" id="modalONU5" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU5">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta5 = "SELECT * FROM numUN";
                            $resultado5 = $conexion->prepare($consulta5);
                            $resultado5->execute();
                            $data5 = $resultado5->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU5" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data5 as $dat5) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat5['onu'] ?></td>
                                                    <td><?php echo $dat5['desc'] ?></td>
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
<!--Final Modal para escoger ONU 5-->
                                            
<!--Inicio Modal para escoger ONU 6-->
<div class="modal fade" id="modalONU6" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU6">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta6 = "SELECT * FROM numUN";
                            $resultado6 = $conexion->prepare($consulta6);
                            $resultado6->execute();
                            $data6 = $resultado6->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU6" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data6 as $dat6) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat6['onu'] ?></td>
                                                    <td><?php echo $dat6['desc'] ?></td>
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
<!--Final Modal para escoger ONU 6-->
                                            
<!--Inicio Modal para escoger ONU 7-->
<div class="modal fade" id="modalONU7" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU7">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta7 = "SELECT * FROM numUN";
                            $resultado7 = $conexion->prepare($consulta7);
                            $resultado7->execute();
                            $data7 = $resultado7->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU7" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data7 as $dat7) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat7['onu'] ?></td>
                                                    <td><?php echo $dat7['desc'] ?></td>
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
<!--Final Modal para escoger ONU 7-->
                                            
<!--Inicio Modal para escoger ONU 8-->
<div class="modal fade" id="modalONU8" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU8">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta8 = "SELECT * FROM numUN";
                            $resultado8 = $conexion->prepare($consulta8);
                            $resultado8->execute();
                            $data8 = $resultado8->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU8" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data8 as $dat8) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat8['onu'] ?></td>
                                                    <td><?php echo $dat8['desc'] ?></td>
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
<!--Final Modal para escoger ONU 8-->
                                            
<!--Inicio Modal para escoger ONU 9-->
<div class="modal fade" id="modalONU9" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU9">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta9 = "SELECT * FROM numUN";
                            $resultado9 = $conexion->prepare($consulta9);
                            $resultado9->execute();
                            $data9 = $resultado9->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU9" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data9 as $dat9) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat9['onu'] ?></td>
                                                    <td><?php echo $dat9['desc'] ?></td>
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
<!--Final Modal para escoger ONU 9-->
                                            
<!--Inicio Modal para escoger ONU 10-->
<div class="modal fade" id="modalONU10" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU10">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta10 = "SELECT * FROM numUN";
                            $resultado10 = $conexion->prepare($consulta10);
                            $resultado10->execute();
                            $data10 = $resultado10->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU10" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data10 as $dat10) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat10['onu'] ?></td>
                                                    <td><?php echo $dat10['desc'] ?></td>
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
<!--Final Modal para escoger ONU 10-->
                                            
<!--Inicio Modal para escoger ONU 11-->
<div class="modal fade" id="modalONU11" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU11">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta11 = "SELECT * FROM numUN";
                            $resultado11 = $conexion->prepare($consulta11);
                            $resultado11->execute();
                            $data11 = $resultado11->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU11" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data11 as $dat11) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat11['onu'] ?></td>
                                                    <td><?php echo $dat11['desc'] ?></td>
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
<!--Final Modal para escoger ONU 11-->
                                            
<!--Inicio Modal para escoger ONU 12-->
<div class="modal fade" id="modalONU12" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU12">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta12 = "SELECT * FROM numUN";
                            $resultado12 = $conexion->prepare($consulta12);
                            $resultado12->execute();
                            $data12 = $resultado12->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU12" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data12 as $dat12) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat12['onu'] ?></td>
                                                    <td><?php echo $dat12['desc'] ?></td>
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
<!--Final Modal para escoger ONU 12-->
                                            
<!--Inicio Modal para escoger ONU 13-->
<div class="modal fade" id="modalONU13" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU13">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta13 = "SELECT * FROM numUN";
                            $resultado13 = $conexion->prepare($consulta13);
                            $resultado13->execute();
                            $data13 = $resultado13->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU13" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data13 as $dat13) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat13['onu'] ?></td>
                                                    <td><?php echo $dat13['desc'] ?></td>
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
<!--Final Modal para escoger ONU 13-->
                                            
<!--Inicio Modal para escoger ONU 14-->
<div class="modal fade" id="modalONU14" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU14">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta14 = "SELECT * FROM numUN";
                            $resultado14 = $conexion->prepare($consulta14);
                            $resultado14->execute();
                            $data14 = $resultado14->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU14" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data14 as $dat14) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat14['onu'] ?></td>
                                                    <td><?php echo $dat14['desc'] ?></td>
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
<!--Final Modal para escoger ONU 14-->
                                            
<!--Inicio Modal para escoger ONU 15-->
<div class="modal fade" id="modalONU15" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formONU15">
                <div class="modal-body">
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <!-- Inicio de Tabla -->
                        <div class="card shadow mb-4">
                            <?php
                            $consulta15 = "SELECT * FROM numUN";
                            $resultado15 = $conexion->prepare($consulta15);
                            $resultado15->execute();
                            $data15 = $resultado15->fetchAll(PDO::FETCH_ASSOC);
                            ?>
                            <div class="card-header py-3">
                                <div class="col-lg-12">
                                    <h1 class="h3 mb-2 text-gray-800">Lista de números ONU</h1>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="tablaONU15" class="table table-bordered"
                                        style="width:100%">
                                        <thead class="text-center">
                                            <tr>
                                                <th>No ONU</th>
                                                <th>Descripción</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            foreach ($data15 as $dat15) {
                                                ?>
                                                <tr>
                                                    <td><?php echo $dat15['onu'] ?></td>
                                                    <td><?php echo $dat15['desc'] ?></td>
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
<!--Final Modal para escoger ONU 15-->