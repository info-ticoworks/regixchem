<?php require_once "vistas/parte_superior.php" ?>

<!--INICIO del cont principal-->
<div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Lista de Recetas para uso de <?php echo $SESSION_nombreEmpresa ?></h1>
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
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        ?>
        <div class="card-header py-3">
            <div class="col-lg-12">
                <button id="btnNuevaReceta" type="button" class="btn btn-success" data-toggle="modal">Agregar
                    Receta</button>
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
                        foreach ($data as $dat) {
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
        <div class="modal fade" id="modalRecetas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form id="formRecetas">
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="nombreReceta" class="col-form-label">Nombre: *</label>
                                <input type="text" class="form-control" id="nombreReceta"
                                    placeholder="Campo Obligatorio *" required>
                            </div>

                            <!-- Ingredientes -->
                            <div class="ingredientes" id="ingredientes">
                                <label class="clase-box-titulo">Ingredientes: (Utilizar el porcentaje de concentración
                                    mayor).</label>

                                <!-- Inicio Ingrediente 1 -->
                                <div class="ingrediente1" id="ingrediente1">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label class="col-form-label">Ingrediente 1:*</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente1"
                                                        required data-readonly placeholder="CAS 1*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente1"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu1" required
                                                        data-readonly placeholder="ONU 1*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu1" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente2" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente1" class="col-form-label">Cantidad
                                                    1:*</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel1" min="0" max="100" step="0.01" required>
                                                    <p class="cont_nivel p" id="cantidad1">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 1 -->

                                <!-- Inicio Ingrediente 2 -->
                                <div class="ingrediente2" id="ingrediente2">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente2" class="col-form-label">Ingrediente 2:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">

                                                    <input type="text" class="form-control" id="nombreIngrediente2"
                                                        data-readonly placeholder="CAS 2*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente2"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu2"
                                                        data-readonly placeholder="ONU 2*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu2" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente3" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente2"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente2" class="col-form-label">Cantidad
                                                    2:*</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel2" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad2">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 2 -->

                                <!-- Inicio Ingrediente 3 -->
                                <div class="ingrediente3" id="ingrediente3">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente3" class="col-form-label">Ingrediente 3:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente3"
                                                        data-readonly placeholder="CAS 3*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente3"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu3"
                                                        data-readonly placeholder="ONU 3*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu3" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente4" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente3"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente3" class="col-form-label">Cantidad 3:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel3" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad3">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 3 -->

                                <!-- Inicio Ingrediente 4 -->
                                <div class="ingrediente4" id="ingrediente4">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente4" class="col-form-label">Ingrediente 4:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente4"
                                                        data-readonly placeholder="CAS 4*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente4"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu4"
                                                        data-readonly placeholder="ONU 4*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu4" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente5" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente4"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente4" class="col-form-label">Cantidad 4:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel4" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad4">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 4 -->

                                <!-- Inicio Ingrediente 5 -->
                                <div class="ingrediente5" id="ingrediente5">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente5" class="col-form-label">Ingrediente 5:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente5"
                                                        data-readonly placeholder="CAS 5*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente5"
                                                        class="btn btn-success" style="margin-right:6px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu5"
                                                        data-readonly placeholder="ONU 5*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu5" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente6" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente5"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente5" class="col-form-label">Cantidad 5:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel5" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad5">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 5 -->

                                <!-- Inicio Ingrediente 6 -->
                                <div class="ingrediente6" id="ingrediente6">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente6" class="col-form-label">Ingrediente 6:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente6"
                                                        data-readonly placeholder="CAS 6*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente6"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu6"
                                                        data-readonly placeholder="ONU 6*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu6" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente7" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente6"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente6" class="col-form-label">Cantidad 6:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel6" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad6">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 6 -->

                                <!-- Inicio Ingrediente 7 -->
                                <div class="ingrediente7" id="ingrediente7">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente7" class="col-form-label">Ingrediente 7:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente7"
                                                        data-readonly placeholder="CAS 7*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente7"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu7"
                                                        data-readonly placeholder="ONU 7*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu7" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente8" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente7"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente7" class="col-form-label">Cantidad 7:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel7" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad7">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 7 -->

                                <!-- Inicio Ingrediente 8 -->
                                <div class="ingrediente8" id="ingrediente8">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente8" class="col-form-label">Ingrediente 8:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente8"
                                                        data-readonly placeholder="CAS 8*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente8"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu8"
                                                        data-readonly placeholder="ONU 8*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu8" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente9" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente8"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente8" class="col-form-label">Cantidad 8:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel8" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad8">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 8 -->

                                <!-- Inicio Ingrediente 9 -->
                                <div class="ingrediente9" id="ingrediente9">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente9" class="col-form-label">Ingrediente 9:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente9"
                                                        data-readonly placeholder="CAS 9*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente9"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu9"
                                                        data-readonly placeholder="ONU 9*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu9" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente10" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente9"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente9" class="col-form-label">Cantidad 9:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel9" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad9">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 9 -->

                                <!-- Inicio Ingrediente 10 -->
                                <div class="ingrediente10" id="ingrediente10">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente10" class="col-form-label">Ingrediente 10:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente10"
                                                        data-readonly placeholder="CAS 10*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente10"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu10"
                                                        data-readonly placeholder="ONU 10*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu10" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente11" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente10"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente10" class="col-form-label">Cantidad 10:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel10" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad10">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 10 -->

                                <!-- Inicio Ingrediente 11 -->
                                <div class="ingrediente11" id="ingrediente11">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente11" class="col-form-label">Ingrediente 11:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente11"
                                                        data-readonly placeholder="CAS 11*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente11"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu11"
                                                        data-readonly placeholder="ONU 11*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu11" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente12" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente11"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente11" class="col-form-label">Cantidad 11:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel11" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad11">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 11 -->

                                <!-- Inicio Ingrediente 12 -->
                                <div class="ingrediente12" id="ingrediente12">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente12" class="col-form-label">Ingrediente 12:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente12"
                                                        data-readonly placeholder="CAS 12*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente12"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu12"
                                                        data-readonly placeholder="ONU 12*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu12" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente13" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente12"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente12" class="col-form-label">Cantidad 12:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel12" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad12">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 12 -->

                                <!-- Inicio Ingrediente 13 -->
                                <div class="ingrediente13" id="ingrediente13">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente13" class="col-form-label">Ingrediente 13:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente13"
                                                        data-readonly placeholder="CAS 13*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente13"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu13"
                                                        data-readonly placeholder="ONU 13*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu13" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente14" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente13"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente13" class="col-form-label">Cantidad 13:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel13" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad13">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 13 -->

                                <!-- Inicio Ingrediente 14 -->
                                <div class="ingrediente14" id="ingrediente14">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente14" class="col-form-label">Ingrediente 14:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente14"
                                                        data-readonly placeholder="CAS 14*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente14"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu14"
                                                        data-readonly placeholder="ONU 14*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu14" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnIngrediente15" class="btn btn-primary"
                                                        title="Agregar otro ingrediente">+</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente14"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente14" class="col-form-label">Cantidad 14:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel14" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad14">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 14 -->

                                <!-- Inicio Ingrediente 15 -->
                                <div class="ingrediente15" id="ingrediente15">
                                    <div class="ingrediente_display">
                                        <div class="ingrediente_izquierda">
                                            <div class="form-group">
                                                <label for="nombreIngrediente15" class="col-form-label">Ingrediente 15:
                                                    *</label>
                                            </div>
                                            <div class="ingrediente-box">
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreIngrediente15"
                                                        data-readonly placeholder="CAS 15*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarIngrediente15"
                                                        class="btn btn-success" style="margin-right:5px"
                                                        title="Buscar ingrediente en la base de datos">Buscar</button>
                                                </div>
                                                <div class="ingrediente-text">
                                                    <input type="text" class="form-control" id="nombreOnu15"
                                                        data-readonly placeholder="ONU 15*">
                                                </div>
                                                <div>
                                                    <button type="button" id="btnBuscarOnu15" class="btn btn-success"
                                                        style="margin-right:5px"
                                                        title="Buscar ONU en la base de datos">Buscar</button>
                                                </div>
                                                <div>
                                                    <button type="button" id="btnQuitarIngrediente15"
                                                        class="btn btn-danger" title="Eliminar ingrediente">-</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ingrediente_derecha">
                                            <div class="form-group">
                                                <label for="nombreIngrediente15" class="col-form-label">Cantidad 15:
                                                    *</label>
                                            </div>
                                            <div class="cantidad-box">
                                                <div class="cantidad-text">
                                                    <input type="number" class="form-control" style="width:130px"
                                                        id="nivel15" min="0" max="100" step="0.01">
                                                    <p class="cont_nivel p" id="cantidad15">%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Final Ingrediente 15 -->

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="btnCancelar" class="btn btn-light"
                                data-dismiss="modal">Cancelar</button>
                            <button type="submit" id="btnGuardar" class="btn btn-dark">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Modals de CAS y ONU -->
        <div id="loadCasModal"></div>

        <div id="loadOnuModal"></div>

        <!--Inicio Modal para mostrar hoja de seguridad-->
        <div class="modal fade" id="modalHojaSeguridad" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form id="formHojaSeguridad">
                        <div class="modal-body">
                            <div class="container-fluid">
                                <!-- Page Heading -->
                                <h3 class="h3 mb-2 text-gray-800" id="nombreRecetaPrev" value=""></h3>
                                <p class="mb-4">Esto es solamente una previsualización.</p>
                                <!-- Inicio de Hoja de Seguridad -->
                                <?php require_once "hsprev.php" ?>
                                <!-- Final de Hoja de Seguridad -->
                            </div>
                            <div class="modal-footer">
                                <button id="download-btn" class="btn btn-dark" data-dismiss="modal">Generar Hoja de
                                    Seguridad</button>
                                <button type="button" id="btnCancelar" class="btn btn-light"
                                    data-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--Final Modal para mostrar hoja de seguridad-->


    </div>
    <!-- /.container-fluid -->

</div>
<!--FIN del cont principal-->



<?php require_once "vistas/parte_inferior.php" ?>