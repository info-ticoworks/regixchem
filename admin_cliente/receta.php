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
                                <label for="nombreReceta" class="col-form-label">Nombre de receta: *</label>
                                <input type="text" class="form-control" id="nombreReceta"
                                    placeholder="Campo Obligatorio *" required>
                            </div>
                            <div class="form-group">
                                <label for="nombreReceta" class="col-form-label">Nombre del fabricante: *</label>
                                <input type="text" class="form-control" id="nombreFabricanteReceta"
                                    placeholder="Campo Obligatorio *" required>
                            </div>
                            <div class="form-group">
                                <label for="nombreReceta" class="col-form-label">Dirección del fabricante: *</label>
                                <input type="text" class="form-control" id="direccionFabricanteReceta"
                                    placeholder="Campo Obligatorio *" required>
                            </div>
                            <div class="form-group">
                                <label for="nombreReceta" class="col-form-label">Teléfono del fabricante: *</label>
                                <input type="text" class="form-control" id="telefonoFabricanteReceta"
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
                                <div class="content">
                                    <div class="page-container">
                                        <p class="titulo1">Hoja de Seguridad</p>
                                        <br/>
                                        <p class="subtext">Según Decreto Ejecutivo : 40705, Reglamento Técnico RTCR 478:2015 de Costa Rica y en concordancia con el GHS-SGA Naciones Unidas Revisión 6ta.</p>
                                        <div class="solid"></div>
                                        <p class="leftText">BASF Hoja de Seguridad</p>
                                        <p class="leftText" id="fechaActualizada">Fecha / actualizada el: 17.10.2023</p>
                                        <p class="rightText">Versión: 2.0</p>
                                        <div class="solid"></div>
                                        <p class="rightText" id="fechaImpresion">Fecha de impresión</p>


                                        
                                        <ol id="l1">
                                            <div id="idReceta">
                                                <p class="titulo2">1. Identificación de la sustancia o preparado y de la sociedad o empresa</p>
                                                    <div class="textDIV">
                                                        <p class="titulo" id="loaded_nombreReceta"></p>
                                                        <p class="subtitulo">Principales usos recomendados:</p>
                                                        <p class="leftText" id="nombreUso"></p>
                                                        <br/>
                                                        <p class="subtitulo">Fabricantes:</p>
                                                        <div class="leftRightDIV">
                                                            <div class="leftDIV">
                                                                <p class="leftText" id="loaded_nombreFabricanteReceta"></p>
                                                            </div>
                                                            <div class="rightDIV">
                                                                <p class="leftText" id="loaded_direccionFabricanteReceta"></p>
                                                            </div>
                                                        </div>






                                                        <p style="padding-top: 6pt;text-indent: 0pt;text-align: left;">
                                                            <br /></p>
                                                        <p style="padding-left: 76pt;text-indent: 0pt;text-align: left;">
                                                        </p>
                                                        <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                        <p
                                                            style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                        </p>
                                                    </div>




                                            </div>

                                            <div id="peligros" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 18pt;text-indent: -5pt;line-height: 190%;text-align: left;">
                                                    <a name="bookmark1">&zwnj;</a>2. Identificación de los peligros
                                                    <span class="s4">Clasificación de la
                                                        sustancia o de la mezcla </span><span class="s3">De acuerdo con
                                                        los criterios del GHS (ONU)</span>
                                                </h3>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;text-indent: 0pt;text-align: left;">
                                                    Sustancias y mezclas
                                                    corrosivas para los metales. Cat 1. Toxicidad aguda. Cat 4. POR
                                                    INGESTION Corrosion/irritacion cutaneas.
                                                    Cat 1.</p>
                                                <p style="padding-left: 18pt;text-indent: 0pt;text-align: left;">
                                                    Lesiones oculares graves/irritación ocular.
                                                    Categoría 1</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <h4 style="padding-left: 18pt;text-indent: 0pt;text-align: left;">
                                                    Elementos de la etiqueta</h4>
                                                <p
                                                    style="padding-top: 10pt;padding-left: 18pt;text-indent: 0pt;line-height: 200%;text-align: left;">
                                                    <u>De
                                                        acuerdo con los criterios del GHS (ONU)</u> Pictograma:</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    BASF Hoja de Seguridad
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Fecha / actualizada el:
                                                    17.10.2023</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    Producto: <b>Ácido
                                                        fosforoso</b></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;padding-left: 15pt;line-height: 23pt;text-align: left;">
                                                    Versión: 2.0 (30034745/SDS_GEN_AR/ES)</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                    Fecha de impresión
                                                    17.10.2023</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 105pt;text-indent: 0pt;text-align: left;"> </p>
                                                <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Palabra
                                                    de advertencia:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Peligro
                                                </p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p class="s5"
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Indicaciones
                                                    de peligro: <span class="p">Puede ser corrosiva para los
                                                        metales.</span></p>
                                                <p style="padding-left: 198pt;text-indent: 0pt;text-align: left;">Nocivo
                                                    en caso de ingestión</p>
                                                <p style="padding-left: 198pt;text-indent: 0pt;text-align: left;">
                                                    Provoca quemaduras graves en la piel y
                                                    lesiones oculares graves Provoca lesiones oculares graves</p>
                                                <p style="padding-top: 10pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Consejos de prudencia (prevención):</p>
                                                <table style="border-collapse:collapse;margin-left:79.734pt"
                                                    cellspacing="0">
                                                    <tr style="height:23pt">
                                                        <td style="width:70pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                P210</p>
                                                        </td>
                                                        <td style="width:358pt">
                                                            <p class="s6"
                                                                style="padding-left: 44pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Mantener alejado del calor, de superficies calientes, de
                                                                chispas, de</p>
                                                            <p class="s6"
                                                                style="padding-left: 44pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                llamas abiertas y de cualquier otra fuente de ignición.
                                                                No fumar.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td
                                                            style="width:70pt;border-left-style:solid;border-left-width:2pt">
                                                            <p class="s6"
                                                                style="padding-left: 3pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                P280</p>
                                                        </td>
                                                        <td style="width:358pt">
                                                            <p class="s6"
                                                                style="padding-left: 44pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Llevar guantes protectores y gafas o máscara de
                                                                protección.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:70pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                P271</p>
                                                        </td>
                                                        <td style="width:358pt">
                                                            <p class="s6"
                                                                style="padding-left: 44pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Utilizar únicamente en exteriores o en un lugar bien
                                                                ventilado.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:70pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                P243</p>
                                                        </td>
                                                        <td style="width:358pt">
                                                            <p class="s6"
                                                                style="padding-left: 44pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Tomar medidas de precaución contra las descargas
                                                                electrostáticas.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td
                                                            style="width:70pt;border-left-style:solid;border-left-width:2pt">
                                                            <p class="s6"
                                                                style="padding-left: 3pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                P280</p>
                                                        </td>
                                                        <td style="width:358pt">
                                                            <p class="s6"
                                                                style="padding-left: 44pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Llevar protección ocular.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td
                                                            style="width:70pt;border-left-style:solid;border-left-width:2pt">
                                                            <p class="s6"
                                                                style="padding-left: 3pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                P261</p>
                                                        </td>
                                                        <td style="width:358pt">
                                                            <p class="s6"
                                                                style="padding-left: 44pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Evite respirar la niebla, vapores o aerosoles.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:70pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                P273</p>
                                                        </td>
                                                        <td style="width:358pt">
                                                            <p class="s6"
                                                                style="padding-left: 44pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Evitar su liberación al medio ambiente.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:24pt">
                                                        <td
                                                            style="width:70pt;border-left-style:solid;border-left-width:2pt">
                                                            <p class="s6"
                                                                style="padding-left: 3pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                P241</p>
                                                        </td>
                                                        <td style="width:358pt">
                                                            <p class="s6"
                                                                style="padding-left: 44pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                Utilizar un material eléctrico, de ventilación y de
                                                                iluminación antideflagrante.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:24pt">
                                                        <td style="width:70pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                P240</p>
                                                        </td>
                                                        <td style="width:358pt">
                                                            <p class="s6"
                                                                style="padding-left: 44pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                Toma de tierra y enlace equipotencial del recipiente y
                                                                del equipo receptor.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:70pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                P242</p>
                                                        </td>
                                                        <td style="width:358pt">
                                                            <p class="s6"
                                                                style="padding-left: 44pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Utilizar únicamente herramientas que no produzcan
                                                                chispas.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:23pt">
                                                        <td
                                                            style="width:70pt;border-left-style:solid;border-left-width:2pt">
                                                            <p class="s6"
                                                                style="padding-left: 3pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                P264</p>
                                                        </td>
                                                        <td style="width:358pt">
                                                            <p class="s6"
                                                                style="padding-left: 44pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                Tras la manipulación, lavarse concienzudamente las
                                                                partes del cuerpo contaminadas.</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Consejos de prudencia (respuesta):</p>
                                                <table style="border-collapse:collapse;margin-left:79.734pt"
                                                    cellspacing="0">
                                                    <tr style="height:23pt">
                                                        <td
                                                            style="width:105pt;border-left-style:solid;border-left-width:2pt">
                                                            <p class="s6"
                                                                style="padding-left: 3pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                P312</p>
                                                        </td>
                                                        <td style="width:324pt">
                                                            <p class="s6"
                                                                style="padding-left: 9pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                Llamar a un CENTRO DE TOXICOLOGÍA o a un médico si la
                                                                persona se encuentra mal.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:35pt">
                                                        <td style="width:105pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                P305 + P351 + P338</p>
                                                        </td>
                                                        <td style="width:324pt">
                                                            <p class="s6"
                                                                style="padding-left: 9pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                EN
                                                                CASO DE CONTACTO CON LOS OJOS: Aclarar cuidadosamente
                                                            </p>
                                                            <p class="s6"
                                                                style="padding-left: 9pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                con
                                                                agua durante varios minutos. Quitar las lentes de
                                                                contacto, si lleva y resulta fácil. Seguir
                                                                aclarando.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:35pt">
                                                        <td
                                                            style="width:105pt;border-left-style:solid;border-left-width:2pt">
                                                            <p class="s6"
                                                                style="padding-left: 3pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                P303 + P361 + P353</p>
                                                        </td>
                                                        <td style="width:324pt">
                                                            <p class="s6"
                                                                style="padding-left: 9pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                EN
                                                                CASO DE CONTACTO CON LA PIEL (o el pelo): Quitar</p>
                                                            <p class="s6"
                                                                style="padding-left: 9pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                inmediatamente todas las prendas contaminadas. Aclararse
                                                                la piel con agua o ducharse.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:23pt">
                                                        <td style="width:105pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                P304 + P340</p>
                                                        </td>
                                                        <td style="width:324pt">
                                                            <p class="s6"
                                                                style="padding-left: 9pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                EN
                                                                CASO DE INHALACIÓN: Transportar a la persona al aire
                                                                libre y mantenerla en una posición que
                                                                le facilite la respiración.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td
                                                            style="width:105pt;border-left-style:solid;border-left-width:2pt">
                                                            <p class="s6"
                                                                style="padding-left: 3pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                P370 + P378</p>
                                                        </td>
                                                        <td style="width:324pt">
                                                            <p class="s6"
                                                                style="padding-left: 9pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                En
                                                                caso de incendio, Utilizar… para la extinción.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td
                                                            style="width:105pt;border-left-style:solid;border-left-width:2pt">
                                                            <p class="s6"
                                                                style="padding-left: 3pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                P337 + P313</p>
                                                        </td>
                                                        <td style="width:324pt">
                                                            <p class="s6"
                                                                style="padding-left: 9pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Si
                                                                persiste la irritación ocular: Consultar a un médico.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Consejos de prudencia (almacenamiento):</p>
                                                <table style="border-collapse:collapse;margin-left:80.684pt"
                                                    cellspacing="0">
                                                    <tr style="height:12pt">
                                                        <td style="width:86pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                P233</p>
                                                        </td>
                                                        <td style="width:313pt">
                                                            <p class="s6"
                                                                style="padding-left: 25pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Mantener el recipiente herméticamente cerrado.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:86pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                P403 + P235</p>
                                                        </td>
                                                        <td style="width:313pt">
                                                            <p class="s6"
                                                                style="padding-left: 25pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Almacenar en un lugar bien ventilado. Mantener en lugar
                                                                fresco.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:86pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                P405</p>
                                                        </td>
                                                        <td style="width:313pt">
                                                            <p class="s6"
                                                                style="padding-left: 25pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Guardar bajo llave.</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Consejos de prudencia (eliminación):</p>
                                                <table style="border-collapse:collapse;margin-left:79.734pt"
                                                    cellspacing="0">
                                                    <tr style="height:23pt">
                                                        <td
                                                            style="width:70pt;border-left-style:solid;border-left-width:2pt">
                                                            <p class="s6"
                                                                style="padding-left: 3pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                P501</p>
                                                        </td>
                                                        <td style="width:327pt">
                                                            <p class="s6"
                                                                style="padding-left: 44pt;padding-right: 1pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                Eliminar el contenido y el recipiente en un punto de
                                                                recogida de residuos especiales o
                                                                peligrosos.</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    BASF Hoja de Seguridad
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Fecha / actualizada el:
                                                    17.10.2023</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    Producto: <b>Ácido
                                                        fosforoso</b></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;padding-left: 15pt;line-height: 23pt;text-align: left;">
                                                    Versión: 2.0 (30034745/SDS_GEN_AR/ES)</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                    Fecha de impresión
                                                    17.10.2023</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p class="s3"
                                                    style="padding-left: 20pt;text-indent: 0pt;text-align: left;">De
                                                    acuerdo con los criterios del
                                                    GHS (ONU)</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Etiquetado de preparados especiales:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">La
                                                    exposición repetida puede provocar
                                                    sequedad o formación de grietas en la piel.</p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Otros peligros</h4>
                                                <p class="s3"
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    De acuerdo con
                                                    los criterios del GHS (ONU)</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Otros
                                                    Peligros (GHS):</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Si es
                                                    aplicable, se facilita en esta
                                                    sección la información sobre otros peligros que no den lugar a la
                                                    clasificación pero que puedan
                                                    contribuir al peligro global de la sustancia o mezcla.</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Ver Sección 12 -
                                                    Resultados del ensayo de PBT y mPmB.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Valoración PBT / mPmB:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Según
                                                    el Anexo XIII del Reglamento (CE) Nº
                                                    1907/2006 relativo al registro, la evaluación, la autorización y la
                                                    restricción de las sustancias y
                                                    preparados químicos (REACH): El producto no cumple con los criterios
                                                    de clasificación para sustancias
                                                    PBT (persistente/bioacumulable/tóxico) y mPmB (muy persistente/muy
                                                    bioacumulable).. Autoclasificación
                                                </p>
                                                <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="composicion" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                                                    <a name="bookmark2">&zwnj;</a>3. Composición/Información sobre los
                                                    componentes</h3>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Sustancia</h4>
                                                <p style="padding-top: 5pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p class="s3"
                                                    style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Descripción Química</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p class="s7"
                                                    style="padding-top: 4pt;padding-left: 72pt;text-indent: 0pt;text-align: left;">
                                                    NOMBRE</p>
                                                <p style="padding-left: 72pt;text-indent: 0pt;text-align: left;">Ácido
                                                    fosforoso</p>
                                                <p class="s7"
                                                    style="padding-top: 4pt;padding-left: 79pt;text-indent: 0pt;text-align: left;">
                                                    N.CAS
                                                    COMPOSICION</p>
                                                <p class="s5"
                                                    style="padding-top: 3pt;padding-left: 72pt;text-indent: 0pt;text-align: left;">
                                                    13598-36-2
                                                    <span class="p">98-100%</span>
                                                </p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Para
                                                    las indicaciones de peligro no
                                                    detalladas en su totalidad en esta sección, el texto completo
                                                    aparece en la sección 16.</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    BASF Hoja de Seguridad
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Fecha / actualizada el:
                                                    17.10.2023</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    Producto: <b>Ácido
                                                        fosforoso</b></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;padding-left: 15pt;line-height: 23pt;text-align: left;">
                                                    Versión: 2.0 (30034745/SDS_GEN_AR/ES)</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                    Fecha de impresión
                                                    17.10.2023</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="p-auxilios" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                                                    <a name="bookmark3">&zwnj;</a>4. Medidas de primeros auxilios</h3>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Indicaciones generales:
                                                </p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">En caso
                                                    de riesgo de pérdida de
                                                    conocimiento, el paciente debe colocarse y transportarse en posición
                                                    lateral estable. Si la persona
                                                    afectada no respira, practicar respiración artificial. Quitarse la
                                                    ropa contaminada. La persona que
                                                    auxilie debe autoprotegerse.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Tras inhalación:</p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    En caso de malestar tras
                                                    inhalación de vapor/aerosol: respirar aire fresco, buscar ayuda
                                                    médica.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Tras
                                                    contacto con la piel:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Lavar
                                                    abundantemente con agua y jabón.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Tras contacto con los
                                                    ojos:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Lavar
                                                    abundantemente bajo agua corriente
                                                    durante15 minutos y con los párpados abiertos, control posterior por
                                                    el oftalmólogo.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Tras
                                                    ingestión:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Lavar
                                                    inmediatamente la boca y beber
                                                    posteriormente 200-300 ml de agua, buscar ayuda médica.</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Indicaciones para el
                                                    médico:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Síntomas: Información, eso es, información
                                                    adicional sobre síntomas y efectos puede estar disponible en las
                                                    frases del etiquetado GHS, en la
                                                    Sección 2, y en la evaluación toxicológica, en la Sección 11.</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Tratamiento: Tratamiento sintomático
                                                    (descontaminación, funciones vitales), no es conocido ningún
                                                    antídoto específico.</p>
                                                <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="m-incendios" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                                                    <a name="bookmark4">&zwnj;</a>5. Medidas de lucha contra incendios
                                                </h3>
                                                <p
                                                    style="padding-top: 12pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Medios de extinción
                                                    adecuados:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">agua
                                                    pulverizada, extintor de polvo, espuma
                                                    resistente a los alcoholes, dióxido de carbono</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Riesgos especiales:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">El
                                                    producto es combustible. Enfriar los
                                                    recipientes en peligro con agua pulverizada.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Información adicional:
                                                </p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Acumular separadamente el agua de extinción
                                                    contaminada, al no poder ser vertida al alcantarillado general o a
                                                    los desagües.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Vestimenta de protección especial:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Protéjase con un equipo respiratorio
                                                    autónomo.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="m-vertido-accidental" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                                                    <a name="bookmark5">&zwnj;</a>6. Medidas en caso de vertido
                                                    accidental</h3>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 23pt;text-align: left;">
                                                    Precauciones personales,
                                                    equipos de protección y medidas de emergencia Medidas de protección
                                                    para las personas:</p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Evítese el contacto con
                                                    los ojos. evitar la inhalación. Mantener alejado de fuentes de
                                                    ignición.</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    BASF Hoja de Seguridad
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Fecha / actualizada el:
                                                    17.10.2023</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    Producto: <b>Ácido
                                                        fosforoso</b></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;padding-left: 15pt;line-height: 23pt;text-align: left;">
                                                    Versión: 2.0 (30034745/SDS_GEN_AR/ES)</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                    Fecha de impresión
                                                    17.10.2023</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Medidas
                                                    de protección para el medio
                                                    ambiente:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Evitar
                                                    el vertido en el suelo/subsuelo.
                                                    Evitar el vertido en el alcantarillado, aguas superficiales o
                                                    subterráneas.</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Método para la
                                                    limpieza/recogida:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Para
                                                    grandes cantidades: Bombear el
                                                    producto.</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Para
                                                    residuos: Recoger con material
                                                    absorbente (p. ej. arena, serrín, absorbente universal, tierra de
                                                    diatomeas). Eliminar el material
                                                    recogido teniendo en consideración las disposiciones locales.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="manipulacion" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                                                    <a name="bookmark6">&zwnj;</a>7. Manipulación y almacenamiento</h3>
                                                <p
                                                    style="padding-top: 6pt;padding-left: 20pt;text-indent: 0pt;line-height: 18pt;text-align: left;">
                                                    <u>Manipulación</u> Medidas Técnicas:
                                                </p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Evitar
                                                    la inhalación de vapores. Manipular
                                                    de acuerdo con las normas de seguridad para productos químicos.
                                                    Llevar indumentaria de trabajo cerrada
                                                    es un requisito adicional en las indicaciones sobre equipo de
                                                    protección personal.</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Protección de Fuego y
                                                    Explosión:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Evitar
                                                    la acumulación de cargas
                                                    electrostáticas. Mantener alejado de fuentes de ignición. Extintor
                                                    accesible.</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Precauciones/
                                                    Orientaciones para el manipuleo seguro.: Buena aireación/ventilación
                                                    del almacén y zonas de trabajo.</p>
                                                <p style="padding-top: 6pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p class="s3"
                                                    style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Almacenamiento</p>
                                                <p style="padding-top: 5pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Otras
                                                    especificaciones sobre condiciones
                                                    almacenamiento: Mantener el recipiente bien cerrado, en lugar fresco
                                                    y ventilado.</p>
                                                <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="control-exposicion" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                                                    <a name="bookmark7">&zwnj;</a>8. Controles de exposición /
                                                    Protección personal</h3>
                                                <p class="s3"
                                                    style="padding-top: 12pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Parámetros de
                                                    control específico</p>
                                                <p style="padding-top: 5pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Componentes con valores límites de
                                                    exposición en el lugar de trabajo:</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <table style="border-collapse:collapse;margin-left:80.684pt"
                                                    cellspacing="0">
                                                    <tr style="height:12pt">
                                                        <td style="width:367pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                109-60-4: Acetato de propilo</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:81pt">
                                                        <td style="width:367pt">
                                                            <p class="s6"
                                                                style="padding-left: 91pt;padding-right: 2pt;text-indent: 0pt;line-height: 200%;text-align: justify;">
                                                                Valor VLA-ED 200 ppm (Decreto 351/79 - Resolución
                                                                295/03) Valor VLA-EC 250 ppm (Decreto
                                                                351/79 - Resolución 295/03) Valor VLA-EC 150 ppm (ACGIH)
                                                            </p>
                                                            <p class="s6"
                                                                style="padding-left: 91pt;text-indent: 0pt;line-height: 11pt;text-align: justify;">
                                                                Valor
                                                                VLA-ED 100 ppm (ACGIH)</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    BASF Hoja de Seguridad
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Fecha / actualizada el:
                                                    17.10.2023</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    Producto: <b>Ácido
                                                        fosforoso</b></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;padding-left: 15pt;line-height: 23pt;text-align: left;">
                                                    Versión: 2.0 (30034745/SDS_GEN_AR/ES)</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                    Fecha de impresión
                                                    17.10.2023</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 18pt;text-align: left;">
                                                    <u>Equipo de protección
                                                        personal</u> Protección de los ojos:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">gafas
                                                    protectoras con protección lateral
                                                    (gafas con montura) (EN 166)</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Protección de la piel y
                                                    cuerpo:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Seleccionar la protección corporal
                                                    dependiendo de la actividad y de la posible exposición, p.ej.
                                                    delantal, botas de protección, traje de
                                                    protección resistente a productos químicos (según EN 14605 en caso
                                                    de salpicaduras o bien EN ISO 13982
                                                    en caso de formación de polvo)</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Protección de las manos:
                                                </p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Guantes de protección
                                                    resistentes a productos químicos (EN ISO 374-1).</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Materiales adecuados para un contacto
                                                    directo y prolongado (se recomienda: factor de protección 6, que
                                                    corresponde a &gt; 480 minutos de
                                                    tiempo de permeabilidad según EN ISO 374-1):</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">caucho
                                                    butílico (butilo) - 0.7 mm espesor
                                                    del recubrimiento</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Debido
                                                    a la gran variedad de tipos, se debe
                                                    tener en cuenta el manual de instrucciones del fabricante.</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Indicaciones adicionales: Los datos son los
                                                    resultados de nuestros ensayos, bibliografía e informaciones sobre
                                                    los fabricantes de guantes, o bien,
                                                    de datos análogos de sustancias similares. Hay que considerar, que
                                                    en la práctica el tiempo de uso
                                                    diario de unos guantes de protección resistentes a los productos
                                                    químicos es claramente inferior, debido
                                                    a muchos factores (por ej. la temperatura), que el tiempo
                                                    determinado por los ensayos de permeabilidad.
                                                </p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Protección de las vías
                                                    respiratorias:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Protección de las vías respiratorias en
                                                    caso de ventilación insuficiente. Filtro para gas para gases/vapores
                                                    orgánicos (punto de ebullición &gt;
                                                    65 ºC, p.ej. EN 14387 tipo A).</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="p-fisicas-quimicas" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 18pt;text-indent: -13pt;text-align: left;">
                                                    <a name="bookmark8">&zwnj;</a>9. Propiedades físicas y químicas</h3>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Olor:
                                                    Valor pH:</p>
                                                <p
                                                    style="padding-top: 4pt;padding-left: 69pt;text-indent: 0pt;text-align: left;">
                                                    sólido (cristalinas)</p>
                                                <table style="border-collapse:collapse;margin-left:3pt" cellspacing="0">
                                                    <tr style="height:18pt">
                                                        <td style="width:99pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Estado de la materia:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:18pt">
                                                        <td style="width:99pt">
                                                            <p class="s6"
                                                                style="padding-top: 5pt;padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Forma:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:99pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Color:</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p style="text-indent: 0pt;text-align: left;" />
                                                <p style="padding-left: 69pt;text-indent: 0pt;text-align: left;">(20 °C,
                                                    1.013 hPa)</p>
                                                <p style="padding-left: 69pt;text-indent: 0pt;text-align: left;">Solido
                                                    blanquecino característico</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 69pt;text-indent: 0pt;text-align: left;">no
                                                    aplicable</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Temperaturas específicas o rangos de
                                                    temperaturas en los cuales ocurren cambios en el estado físico.</p>
                                                <table style="border-collapse:collapse;margin-left:80.684pt"
                                                    cellspacing="0">
                                                    <tr style="height:23pt">
                                                        <td style="width:285pt">
                                                            <p class="s6"
                                                                style="padding-right: 100pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                                                                Temperatura de solidificación: -93,4 °C</p>
                                                            <p class="s6"
                                                                style="padding-left: 105pt;padding-right: 100pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                                                                (1.013 mbar)</p>
                                                        </td>
                                                        <td style="width:134pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (otro(a)(s))</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:23pt">
                                                        <td style="width:285pt">
                                                            <p class="s6"
                                                                style="padding-right: 112pt;text-indent: 0pt;line-height: 11pt;text-align: right;">
                                                                intervalo
                                                                de ebullición: 101 - 102 °C</p>
                                                            <p class="s6"
                                                                style="padding-right: 116pt;text-indent: 0pt;line-height: 11pt;text-align: right;">
                                                                (1.013
                                                                hPa)</p>
                                                        </td>
                                                        <td style="width:134pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (otro(a)(s))</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:285pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Punto de inflamación: 11,8 °C</p>
                                                        </td>
                                                        <td style="width:134pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                (DIN 53213-1, copa cerrada)</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:69pt">
                                                        <td style="width:285pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Límite inferior de explosividad:</p>
                                                            <p class="s6"
                                                                style="padding-left: 115pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                Para líquidos no relevante para la clasificación y el
                                                                etiquetado, El punto de explosión
                                                                inferior puede estar 5 - 15 ºC por debajo del punto de
                                                                inflamación.</p>
                                                        </td>
                                                        <td style="width:134pt">
                                                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    BASF Hoja de Seguridad
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Fecha / actualizada el:
                                                    17.10.2023</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    Producto: <b>Ácido
                                                        fosforoso</b></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;padding-left: 15pt;line-height: 23pt;text-align: left;">
                                                    Versión: 2.0 (30034745/SDS_GEN_AR/ES)</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                    Fecha de impresión
                                                    17.10.2023</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <table style="border-collapse:collapse;margin-left:79.734pt"
                                                    cellspacing="0">
                                                    <tr style="height:35pt">
                                                        <td style="width:286pt" colspan="2">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Límite superior de explosividad:</p>
                                                            <p class="s6"
                                                                style="padding-left: 117pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                Para líquidos no relevante para la clasificación y el
                                                                etiquetado</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:23pt">
                                                        <td style="width:431pt" colspan="3">
                                                            <p class="s6"
                                                                style="padding-left: 117pt;padding-right: 1pt;text-indent: -113pt;line-height: 11pt;text-align: left;">
                                                                Descomposición térmica: Ninguna descomposición, si se
                                                                almacena y aplica como se indica/está
                                                                prescrito.</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:29pt">
                                                        <td style="width:286pt" colspan="2">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Capacidad de calentamiento propio: no aplicable, el</p>
                                                            <p class="s6"
                                                                style="padding-left: 117pt;text-indent: 0pt;text-align: left;">
                                                                producto es un
                                                                líquido</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:41pt">
                                                        <td style="width:107pt">
                                                            <p class="s6"
                                                                style="padding-top: 5pt;padding-left: 4pt;text-indent: 0pt;text-align: left;">
                                                                Riesgo de explosión:</p>
                                                        </td>
                                                        <td style="width:179pt">
                                                            <p class="s6"
                                                                style="padding-top: 5pt;padding-left: 11pt;text-indent: 0pt;text-align: left;">
                                                                Basado en su estructura química no</p>
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                existe ninguna indicación de propiedades explosivas.</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:23pt">
                                                        <td style="width:286pt" colspan="2">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Propiedades comburentes: Debido a la estructura el
                                                                producto</p>
                                                            <p class="s6"
                                                                style="padding-left: 117pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                no se clasifica como comburente.</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:23pt">
                                                        <td style="width:107pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Presión de vapor:</p>
                                                        </td>
                                                        <td style="width:179pt">
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                33,9 mbar</p>
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (20 °C)</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p class="s6"
                                                                style="padding-left: 5pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (medido)</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:35pt">
                                                        <td style="width:286pt;border-left-style:solid;border-left-width:2pt"
                                                            colspan="2">
                                                            <p class="s6"
                                                                style="padding-left: 3pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Densidad relativa de vapor (aire): &gt; 1</p>
                                                            <p class="s6"
                                                                style="padding-left: 116pt;text-indent: 0pt;text-align: left;">
                                                                (20 °C)</p>
                                                            <p class="s6"
                                                                style="padding-left: 116pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Más pesado que el aire.</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p class="s6"
                                                                style="padding-left: 5pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (estimado)</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:24pt">
                                                        <td style="width:107pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                Densidad:</p>
                                                        </td>
                                                        <td style="width:179pt">
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                0,887 - 0,889 g/cm3</p>
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (20 °C)</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p class="s6"
                                                                style="padding-left: 5pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                (DIN 51757)</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:35pt">
                                                        <td style="width:107pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                densidad relativa:</p>
                                                        </td>
                                                        <td style="width:179pt">
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                0,89</p>
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (20 °C)</p>
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Indicación bibliográfica.</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:35pt">
                                                        <td style="width:107pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Solubilidad en agua:</p>
                                                        </td>
                                                        <td style="width:179pt">
                                                            <p class="s6"
                                                                style="padding-left: 11pt;padding-right: 45pt;text-indent: 0pt;text-align: left;">
                                                                Indicación bibliográfica. 18,9 g/l,</p>
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (20 °C)</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p class="s6"
                                                                style="padding-left: 5pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (otro(a)(s))</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:23pt">
                                                        <td style="width:286pt" colspan="2">
                                                            <p class="s6"
                                                                style="padding-left: 117pt;text-indent: -113pt;line-height: 11pt;text-align: left;">
                                                                Solubilidad (cualitativo) Disolvente(s): solventes
                                                                orgánicos soluble</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:23pt">
                                                        <td style="width:286pt" colspan="2">
                                                            <p class="s6"
                                                                style="padding-right: 36pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                                                                Coeficiente de reparto n-octanol/agua (log Pow): 1,4</p>
                                                            <p class="s6"
                                                                style="padding-right: 18pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                                                                (25 °C)
                                                            </p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p class="s6"
                                                                style="padding-left: 5pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (Directiva 117 de la OCDE)</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:23pt">
                                                        <td style="width:107pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Tensión superficial:</p>
                                                        </td>
                                                        <td style="width:179pt">
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                24,28 mN/m</p>
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (20 °C)</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p class="s6"
                                                                style="padding-left: 5pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (otro(a)(s))</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:286pt" colspan="2">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Temperatura de autoignición: 380 °C</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p class="s6"
                                                                style="padding-left: 5pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                (DIN 51794)</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:35pt">
                                                        <td style="width:107pt">
                                                            <p class="s6"
                                                                style="padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Autoinflamabilidad:</p>
                                                        </td>
                                                        <td style="width:179pt">
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Temperatura: 380 °C</p>
                                                            <p class="s6"
                                                                style="padding-left: 11pt;text-indent: 0pt;text-align: left;">
                                                                Presión: 1.013 hPa
                                                            </p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p class="s6"
                                                                style="padding-left: 5pt;padding-right: 6pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                                tipo test: Autoignición a temperatura elevada. (Método:
                                                                otro(a)(s))</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:46pt">
                                                        <td style="width:286pt" colspan="2">
                                                            <p class="s6"
                                                                style="padding-left: 117pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                no es autoinflamable</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p class="s6"
                                                                style="padding-left: 5pt;text-indent: 0pt;text-align: left;">
                                                                tipo test:
                                                                Autoinflamabilidad espontánea a temperatura ambiente.
                                                            </p>
                                                            <p class="s6"
                                                                style="padding-left: 5pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                (Método: otro(a)(s))</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:23pt">
                                                        <td style="width:286pt" colspan="2">
                                                            <p class="s6"
                                                                style="padding-right: 139pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                                                                Valor
                                                                límite de olor perceptible:</p>
                                                            <p class="s6"
                                                                style="padding-left: 55pt;padding-right: 36pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                                                                no determinado</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:46pt">
                                                        <td style="width:286pt" colspan="2">
                                                            <p class="s6"
                                                                style="padding-left: 5pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Velocidad de evaporación:</p>
                                                            <p class="s6"
                                                                style="padding-left: 117pt;text-indent: 0pt;text-align: left;">
                                                                Los valores pueden
                                                                ser aproximados de la constante de la ley de Henry o</p>
                                                            <p class="s6"
                                                                style="padding-left: 117pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                de la presión de vapor.</p>
                                                        </td>
                                                        <td style="width:145pt">
                                                            <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Infllamabilidad: Fácilmente inflamable.</p>
                                                <p style="padding-left: 84pt;text-indent: 0pt;text-align: left;">
                                                    Viscosidad, dinámica: 0,58 mPa.s</p>
                                                <p
                                                    style="padding-left: 197pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    (20 °C)</p>
                                                <p
                                                    style="padding-left: 197pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Indicación
                                                    bibliográfica.</p>
                                                <p style="padding-left: 190pt;text-indent: 0pt;text-align: left;">
                                                    sustancia problema La sustancia o producto
                                                    se comercializa o</p>
                                                <p style="padding-left: 321pt;text-indent: 0pt;text-align: left;">
                                                    utiliza en forma no sólida o granular</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    BASF Hoja de Seguridad
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Fecha / actualizada el:
                                                    17.10.2023</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    Producto: <b>Ácido
                                                        fosforoso</b></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;padding-left: 15pt;line-height: 23pt;text-align: left;">
                                                    Versión: 2.0 (30034745/SDS_GEN_AR/ES)</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                    Fecha de impresión
                                                    17.10.2023</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 84pt;text-indent: 0pt;text-align: left;">Masa
                                                    molar: 102,13 g/mol</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <table style="border-collapse:collapse;margin-left:80.684pt"
                                                    cellspacing="0">
                                                    <tr style="height:12pt">
                                                        <td style="width:99pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Corrosión del metal:</p>
                                                        </td>
                                                        <td style="width:142pt">
                                                            <p class="s6"
                                                                style="padding-left: 6pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                No
                                                                es corrosivo para metales.</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="estabilidad-reactividad" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 82pt;text-indent: -20pt;text-align: left;">
                                                    <a name="bookmark9">&zwnj;</a>10. Estabilidad y reactividad</h3>
                                                <p
                                                    style="padding-top: 5pt;padding-left: 82pt;text-indent: 0pt;text-align: left;">
                                                    Reactividad:</p>
                                                <p
                                                    style="padding-top: 4pt;padding-left: 82pt;text-indent: 0pt;text-align: left;">
                                                    Corrosivos para los
                                                    metales.</p>
                                                <p
                                                    style="padding-top: 4pt;padding-left: 82pt;text-indent: 0pt;text-align: left;">
                                                    Estabilidad química:</p>
                                                <p
                                                    style="padding-top: 4pt;padding-left: 82pt;text-indent: 0pt;text-align: left;">
                                                    Sólido higroscópico.</p>
                                                <p
                                                    style="padding-top: 4pt;padding-left: 82pt;text-indent: 0pt;text-align: left;">
                                                    Reacciones peligrosas:</p>
                                                <p
                                                    style="padding-top: 4pt;padding-left: 82pt;text-indent: 0pt;line-height: 143%;text-align: left;">
                                                    Reacciones con agentes oxidantes fuertes. Condiciones a evitar:</p>
                                                <p
                                                    style="padding-left: 82pt;text-indent: 0pt;line-height: 143%;text-align: left;">
                                                    Evitar todas las fuentes
                                                    de ignición: calor, chispas, llama abierta. Materiales y sustancias
                                                    incompatibles:</p>
                                                <p
                                                    style="padding-left: 82pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    fuertes agentes oxidantes
                                                </p>
                                                <p
                                                    style="padding-top: 4pt;padding-left: 82pt;text-indent: 0pt;text-align: left;">
                                                    Productos peligrosos de
                                                    descomposición:</p>
                                                <p
                                                    style="padding-top: 4pt;padding-left: 82pt;text-indent: 0pt;line-height: 143%;text-align: left;">
                                                    No se
                                                    presentan productos peligrosos de descomposición, si se tienen en
                                                    consideración las normas/ indicaciones
                                                    sobre almacenamiento y manipulación.</p>
                                                <p style="padding-top: 2pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                            </div>

                                            <div id="i-toxicologicas" hidden>
                                                <h3 style="padding-left: 82pt;text-indent: -20pt;text-align: left;"><a
                                                        name="bookmark10">&zwnj;</a>11. Informaciones toxicológicas</h3>
                                                <h4
                                                    style="padding-top: 7pt;padding-left: 82pt;text-indent: 0pt;text-align: left;">
                                                    Toxicidad aguda</h4>
                                                <p
                                                    style="padding-top: 6pt;padding-left: 82pt;text-indent: 0pt;text-align: left;">
                                                    Valoración de toxicidad
                                                    aguda:</p>
                                                <p
                                                    style="padding-top: 6pt;padding-left: 82pt;text-indent: 0pt;line-height: 155%;text-align: left;">
                                                    Después
                                                    de una única ingestión oral prácticamente no es tóxico.
                                                    Prácticamente no tóxico por un único contacto
                                                    cutáneo. Prácticamente no tóxico, después de una única inhalación.
                                                </p>
                                                <p
                                                    style="padding-left: 82pt;text-indent: 0pt;line-height: 155%;text-align: left;">
                                                    DL50 rata, macho(Por
                                                    ingestión): aprox. 8.700 mg/kg Indicación bibliográfica.</p>
                                                <p
                                                    style="padding-left: 82pt;text-indent: 0pt;line-height: 155%;text-align: left;">
                                                    CL50 rata, no hay datos
                                                    disponibles (Por inhalación): aprox. 32 mg/l 4 h Indicación
                                                    bibliográfica. El vapor se ha ensayado.</p>
                                                <p
                                                    style="padding-left: 82pt;text-indent: 0pt;line-height: 155%;text-align: left;">
                                                    DL50 conejo, macho
                                                    (dérmica): &gt; 17.800 mg/kg Indicación bibliográfica.</p>
                                                <h4 style="padding-left: 82pt;text-indent: 0pt;text-align: left;">
                                                    Efectos Locales</h4>
                                                <p
                                                    style="padding-top: 6pt;padding-left: 82pt;text-indent: 0pt;text-align: left;">
                                                    Valoración de efectos
                                                    irritantes:</p>
                                                <p
                                                    style="padding-top: 6pt;padding-left: 82pt;text-indent: 0pt;line-height: 155%;text-align: left;">
                                                    No es
                                                    irritante para la piel. En contacto con los ojos causa irritaciones.
                                                    Irritación primaria en piel conejo:
                                                    no irritante</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    BASF Hoja de Seguridad
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Fecha / actualizada el:
                                                    17.10.2023</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    Producto: <b>Ácido
                                                        fosforoso</b></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;padding-left: 15pt;line-height: 23pt;text-align: left;">
                                                    Versión: 2.0 (30034745/SDS_GEN_AR/ES)</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                    Fecha de impresión
                                                    17.10.2023</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Irritación de los ojos conejo: Irritante.
                                                    Indicación bibliográfica.</p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Valoración de otros
                                                    efectos agudos.</h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Valoración de otros
                                                    efectos agudos.:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Posibles efectos narcóticos (somnolencia,
                                                    vértigo)</p>
                                                <p style="padding-top: 11pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <h4 style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Sensibilización</h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Valoración de
                                                    sensibilización:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: justify;">No
                                                    sensibilizante en piel según
                                                    experimentación animal. El producto no ha sido ensayado. La
                                                    indicación se ha deducido a partir de
                                                    sustancias o productos de una estructura o composición similar.</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Ensayo de maximización
                                                    en cobaya cobaya: El producto no es sensibilizante.</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Indicación bibliográfica. Analogía:
                                                    evaluación procedente de productos químicamente similares.</p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Toxicidad genética
                                                </h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Valoración de
                                                    mutagenicidad:</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">La
                                                    sustancia no presentó efectos mutágenos
                                                    en bacterias. La sustancia no ha presentado indicaciones de
                                                    propiedades mutagénicas en cultivos
                                                    celulares de mamíferos.</p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Carcinogenicidad</h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Valoración de
                                                    carcinogenicidad:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Estudios no necesarios por razones
                                                    científicas.</p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Toxicidad en la
                                                    reproducción</h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Valoración de
                                                    toxicidad en la reproducción:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Durante los ensayos en el animal no se
                                                    observaron efectos que perjudican la fertilidad.</p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Toxicidad en el
                                                    desarrollo</h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Valoración de
                                                    teratogenicidad:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: justify;">En
                                                    experimentación animal no se ha
                                                    presentado ningún indicio de efectos perjudiciales para la
                                                    fertilidad.</p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Toxicidad en caso de
                                                    administración repetida</h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Valoración de toxicidad
                                                    en caso de aplicación frecuente: Tras ingestión repetida el efecto
                                                    principal es la irritación local.</p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Peligro de Aspiración
                                                </h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Ensayo de toxicidad por
                                                    aspiración: no aplicable</p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: justify;">
                                                    Experiencias en
                                                    personas</h4>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    BASF Hoja de Seguridad
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Fecha / actualizada el:
                                                    17.10.2023</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    Producto: <b>Ácido
                                                        fosforoso</b></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;padding-left: 15pt;line-height: 23pt;text-align: left;">
                                                    Versión: 2.0 (30034745/SDS_GEN_AR/ES)</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                    Fecha de impresión
                                                    17.10.2023</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Altas
                                                    concentraciones provocan un efecto
                                                    narcótico.</p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Otras indicaciones de
                                                    toxicidad</h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Tiene efecto
                                                    desengrasante sobre la piel.</p>
                                                <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="i-ecologica" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 81pt;text-indent: -20pt;text-align: left;">
                                                    <a name="bookmark11">&zwnj;</a>12. Información ecológica</h3>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Posibles efectos
                                                    ambientales, comportamiento e impacto.</p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Ecotoxicidad</h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Valoración de toxicidad
                                                    acuática:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Nocividad aguda para organismos acuáticos.
                                                    Durante un vertido en pequeñas concentraciones en las plantas de
                                                    tratamiento biológico, no son de
                                                    esperar variaciones en la función del lodo activado.</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Toxicidad en peces:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">CL50
                                                    (96 h) 60 mg/l, Pimephales promelas
                                                    (otro(a)(s), Flujo continuo.)</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    &#39;Los datos sobre el efecto tóxico se
                                                    refieren a la concentración determinada analíticamente.</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Invertebrados acuáticos:
                                                </p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">CE50
                                                    (48 h) 91,5 mg/l, Daphnia magna
                                                    (Directiva 202, parte 1 de la OCDE, estático)</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    &#39;Los datos sobre el efecto tóxico se
                                                    refieren a la concentración determinada analíticamente.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Plantas acuáticas:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">CE50
                                                    (72 h) 672 mg/l (tasa de crecimiento),
                                                    Pseudokirchneriella subcapitata (Directiva 201 de la OCDE, estático)
                                                </p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    &#39;Los datos sobre el efecto tóxico se
                                                    refieren a la concentración determinada analíticamente.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Microorganismos/efecto sobre el lodo
                                                    activado:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Concentración límite toxicidad (16 h) 170
                                                    mg/l, Pseudomonas putida (DIN 38412 Parte 8) La indicación del
                                                    efecto tóxico se refiere a la
                                                    concentración nominal.</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Toxicidad crónica peces:
                                                </p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">No hay
                                                    datos disponibles.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Toxicidad crónica
                                                    invertebrados acuátic.:</p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    No hay datos disponibles.
                                                </p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Valoración de toxicidad terrestre:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">No hay
                                                    datos disponibles.</p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Persistencia y
                                                    degradabilidad</h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Valoración de
                                                    biodegradación y eliminación (H2O):</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Fácilmente biodegradable (según criterios
                                                    OCDE)</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Indicaciones para la
                                                    eliminación:</p>
                                                <p style="padding-left: 20pt;text-indent: 2pt;text-align: left;">62 %
                                                    DBO de la demanda teórica de oxígeno
                                                    (5 Días) (APHA &#39;Standard Methods&#39;, No. 219, 1971) (aerobio,
                                                    aguas residuales domésticas, no
                                                    adaptadas)</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    BASF Hoja de Seguridad
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Fecha / actualizada el:
                                                    17.10.2023</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    Producto: <b>Ácido
                                                        fosforoso</b></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;padding-left: 15pt;line-height: 23pt;text-align: left;">
                                                    Versión: 2.0 (30034745/SDS_GEN_AR/ES)</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                    Fecha de impresión
                                                    17.10.2023</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <h4 style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Comportamiento esperado del producto en el
                                                    ambiente /posible impacto ambiental</h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Evaluación de la
                                                    estabilidad en agua:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">No hay
                                                    datos disponibles.</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Información sobre
                                                    estabilidad en agua (hidrólisis):</p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    No hay datos disponibles.
                                                </p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Bioacumulación</h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Evaluación del potencial
                                                    de bioacumulación:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">No se
                                                    espera una acumulación significactiva
                                                    en el organismo, debido al coeficiente de distribución en
                                                    n-octanol/agua (log Pow).</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Potencial de
                                                    bioacumulación:</p>
                                                <p
                                                    style="padding-left: 20pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    No hay datos disponibles.
                                                </p>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Movilidad</h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Evaluación de la
                                                    movilidad entre compartimentos medioambientales:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">La
                                                    sustancia se evapora lentamente a la
                                                    atmósfera, desde la superfice del agua Es posible una absorción en
                                                    las partículas sólidas del suelo.</p>
                                                <table style="border-collapse:collapse;margin-left:80.684pt"
                                                    cellspacing="0">
                                                    <tr style="height:12pt">
                                                        <td style="width:256pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Adsorción/agua-suelo: KOC: 10,17; log KOC: 1</p>
                                                        </td>
                                                        <td style="width:85pt">
                                                            <p class="s6"
                                                                style="padding-left: 33pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                (calculado)</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <h4
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Indicaciones adicionales
                                                </h4>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Más informaciones
                                                    ecotoxicológicas:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">El
                                                    producto no debe ser vertido al
                                                    alcantarillado sin un tratamiento previo.</p>
                                                <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="c-eliminacion" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 81pt;text-indent: -20pt;text-align: left;">
                                                    <a name="bookmark12">&zwnj;</a>13. Consideraciones relativas a la
                                                    eliminación</h3>
                                                <p
                                                    style="padding-top: 12pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Métodos de disposición
                                                    seguros y ambientalmente adecuados.</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Producto: Debe ser eliminado o incinerado
                                                    según la legislación local vigente.</p>
                                                <p
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Residuos de productos:
                                                    Debe ser eliminado o incinerado según la legislación local vigente.
                                                </p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Envase
                                                    contaminado:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Los
                                                    envases contaminados deben ser vaciados
                                                    de forma óptima de manera que después de una limpieza a fondo pueden
                                                    ser reutilizados</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="i-transporte" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 81pt;text-indent: -20pt;text-align: left;">
                                                    <a name="bookmark13">&zwnj;</a>14. Información para el transporte
                                                </h3>
                                                <p class="s8"
                                                    style="padding-top: 11pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Transporte
                                                    Terrestre</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p class="s2"
                                                    style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Transporte por carretera</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <table style="border-collapse:collapse;margin-left:80.924pt"
                                                    cellspacing="0">
                                                    <tr style="height:12pt">
                                                        <td style="width:112pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Clase:</p>
                                                        </td>
                                                        <td style="width:46pt">
                                                            <p class="s6"
                                                                style="padding-left: 21pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                8
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:112pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Grupo de Embalaje:</p>
                                                        </td>
                                                        <td style="width:46pt">
                                                            <p class="s6"
                                                                style="padding-left: 21pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                III</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:112pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Nº
                                                                ONU:</p>
                                                        </td>
                                                        <td style="width:46pt">
                                                            <p class="s6"
                                                                style="padding-left: 21pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                2834</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    BASF Hoja de Seguridad
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Fecha / actualizada el:
                                                    17.10.2023</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    Producto: <b>Ácido
                                                        fosforoso</b></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;padding-left: 15pt;line-height: 23pt;text-align: left;">
                                                    Versión: 2.0 (30034745/SDS_GEN_AR/ES)</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                    Fecha de impresión
                                                    17.10.2023</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <table style="border-collapse:collapse;margin-left:3pt" cellspacing="0">
                                                    <tr style="height:12pt">
                                                        <td style="width:92pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Etiqueta de Riesgo:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:92pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Nº
                                                                Riesgo:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:92pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Nombre:</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p style="text-indent: 0pt;text-align: left;" />
                                                <p style="padding-left: 214pt;text-indent: 0pt;text-align: left;">8</p>
                                                <p style="padding-left: 214pt;text-indent: 0pt;text-align: left;">80</p>
                                                <p style="padding-left: 214pt;text-indent: 0pt;text-align: left;">Ácido
                                                    fosforoso</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p class="s2"
                                                    style="padding-top: 4pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Transporte
                                                    Ferroviario</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <table style="border-collapse:collapse;margin-left:80.924pt"
                                                    cellspacing="0">
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Clase:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Grupo de Embalaje:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Nº
                                                                ONU:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Etiqueta de Riesgo:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Nº
                                                                Riesgo:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Nombre:</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p style="padding-top: 10pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p style="padding-left: 21pt;text-indent: 0pt;text-align: left;">8</p>
                                                <p style="padding-left: 21pt;text-indent: 0pt;text-align: left;">III</p>
                                                <p style="padding-left: 21pt;text-indent: 0pt;text-align: left;">2834
                                                </p>
                                                <p style="padding-left: 21pt;text-indent: 0pt;text-align: left;">3</p>
                                                <p style="padding-left: 21pt;text-indent: 0pt;text-align: left;">80</p>
                                                <p style="padding-left: 21pt;text-indent: 0pt;text-align: left;">Ácido
                                                    fosforoso</p>
                                                <p style="padding-top: 11pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p class="s8"
                                                    style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Transporte Fluvial</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <table style="border-collapse:collapse;margin-left:3pt" cellspacing="0">
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Clase:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Grupo de Embalaje:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Nº
                                                                ONU:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Etiqueta de Riesgo:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Nº
                                                                Riesgo:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Nombre:</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p style="text-indent: 0pt;text-align: left;" />
                                                <p style="padding-left: 214pt;text-indent: 0pt;text-align: left;">8</p>
                                                <p style="padding-left: 214pt;text-indent: 0pt;text-align: left;">III
                                                </p>
                                                <p style="padding-left: 214pt;text-indent: 0pt;text-align: left;">2834
                                                </p>
                                                <p style="padding-left: 214pt;text-indent: 0pt;text-align: left;">3</p>
                                                <p style="padding-left: 214pt;text-indent: 0pt;text-align: left;">80</p>
                                                <p style="padding-left: 214pt;text-indent: 0pt;text-align: left;">Ácido
                                                    fosforoso</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p class="s8"
                                                    style="padding-top: 4pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Transporte
                                                    Maritimo</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">IMDG
                                                </p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <table style="border-collapse:collapse;margin-left:80.924pt"
                                                    cellspacing="0">
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Clase:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Grupo de Embalaje:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Nº
                                                                ONU:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Etiqueta de Riesgo:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Polución Marina:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:94pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Nombre:</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p style="padding-top: 5pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p class="s2"
                                                    style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Sea
                                                    transport</p>
                                                <table style="border-collapse:collapse;margin-left:3pt" cellspacing="0">
                                                    <tr style="height:12pt">
                                                        <td style="width:106pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Hazard class:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:106pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Packing group:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:106pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                UN
                                                                Number:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:106pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Hazard label:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:106pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Marine pollutant:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:106pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Proper shipping name:</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p style="text-indent: 0pt;text-align: left;" />
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">IMDG
                                                </p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p class="s8"
                                                    style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Transporte Aéreo</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    IATA/ICAO</p>
                                                <p
                                                    style="padding-top: 5pt;padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Clase:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Grupo
                                                    de Embalaje: Nº ONU:</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    Etiqueta de Riesgo: Nombre:</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">8</p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">III</p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">2834
                                                </p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">80</p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">NO</p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">Ácido
                                                    fosforoso</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">8</p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">III</p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">2834
                                                </p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">80</p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">NO</p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">Ácido
                                                    fosforoso</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">8</p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">III</p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">2834
                                                </p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">80</p>
                                                <p style="padding-left: 32pt;text-indent: 0pt;text-align: left;">Ácido
                                                    fosforoso</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    BASF Hoja de Seguridad
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                    Fecha / actualizada el:
                                                    17.10.2023</p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 12pt;text-align: left;">
                                                    Producto: <b>Ácido
                                                        fosforoso</b></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 18pt;padding-left: 15pt;line-height: 23pt;text-align: left;">
                                                    Versión: 2.0 (30034745/SDS_GEN_AR/ES)</p>
                                                <p style="text-indent: 0pt;text-align: left;"></p>
                                                <p
                                                    style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                    Fecha de impresión
                                                    17.10.2023</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p class="s2"
                                                    style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Air
                                                    transport</p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">
                                                    IATA/ICAO</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <table style="border-collapse:collapse;margin-left:80.924pt"
                                                    cellspacing="0">
                                                    <tr style="height:12pt">
                                                        <td style="width:118pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Hazard class:</p>
                                                        </td>
                                                        <td style="width:87pt">
                                                            <p class="s6"
                                                                style="padding-left: 15pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                80
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:118pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Packing group:</p>
                                                        </td>
                                                        <td style="width:87pt">
                                                            <p class="s6"
                                                                style="padding-left: 15pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                III</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:118pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                UN
                                                                Number:</p>
                                                        </td>
                                                        <td style="width:87pt" rowspan="3">
                                                            <p class="s6"
                                                                style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                2834</p>
                                                            <p class="s6"
                                                                style="padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                                                80</p>
                                                            <p class="s6"
                                                                style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Ácido fosforoso</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:118pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                                Hazard label:</p>
                                                        </td>
                                                    </tr>
                                                    <tr style="height:12pt">
                                                        <td style="width:118pt">
                                                            <p class="s6"
                                                                style="padding-left: 2pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                                Proper shipping name:</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="reglamentaciones" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 81pt;text-indent: -20pt;text-align: left;">
                                                    <a name="bookmark14">&zwnj;</a>15. Reglamentaciones</h3>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p class="s8"
                                                    style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Otras
                                                    reglamentaciones</p>
                                                <p style="padding-top: 6pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">En este
                                                    subapartado se encuentra aquella
                                                    información reglamentaria aplicable que no está mencionada en otros
                                                    apartados de esta Ficha de datos de
                                                    seguridad.</p>
                                                <p style="padding-top: 11pt;text-indent: 0pt;text-align: left;"><br />
                                                </p>
                                                <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Esta
                                                    hoja de seguridad fue realizada de
                                                    acuerdo a los requerimientos de Resolución 801/15 de la SRT</p>
                                                <p style="text-indent: 0pt;text-align: left;"><br /></p>
                                                <p
                                                    style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                                </p>
                                            </div>

                                            <div id="o-informaciones" hidden>
                                                <h3
                                                    style="padding-top: 5pt;padding-left: 81pt;text-indent: -20pt;text-align: left;">
                                                    <a name="bookmark15">&zwnj;</a>16. Otras informaciones</h3>
                                            </div>

                                        </ol>
                                        <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
                                        <p style="padding-left: 20pt;text-indent: 0pt;text-align: left;">Texto completo
                                            de las frases de peligro, si se
                                            mencionan en la sección 3:</p>
                                        <table style="border-collapse:collapse;margin-left:82.494pt" cellspacing="0">
                                            <tr style="height:12pt">
                                                <td style="width:69pt;border-left-style:solid;border-left-width:2pt">
                                                    <p class="s6"
                                                        style="text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                        H225</p>
                                                </td>
                                                <td style="width:220pt">
                                                    <p class="s6"
                                                        style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                        Líquido y
                                                        vapores muy inflamables.</p>
                                                </td>
                                            </tr>
                                            <tr style="height:12pt">
                                                <td style="width:69pt;border-left-style:solid;border-left-width:2pt">
                                                    <p class="s6"
                                                        style="text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                        H319</p>
                                                </td>
                                                <td style="width:220pt">
                                                    <p class="s6"
                                                        style="padding-left: 15pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                        Provoca
                                                        irritación ocular grave.</p>
                                                </td>
                                            </tr>
                                            <tr style="height:12pt">
                                                <td style="width:69pt;border-left-style:solid;border-left-width:2pt">
                                                    <p class="s6"
                                                        style="text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                        H336</p>
                                                </td>
                                                <td style="width:220pt">
                                                    <p class="s6"
                                                        style="padding-left: 15pt;text-indent: 0pt;line-height: 11pt;text-align: left;">
                                                        Puede
                                                        provocar somnolencia o vértigo.</p>
                                                </td>
                                            </tr>
                                            <tr style="height:12pt">
                                                <td style="width:69pt;border-left-style:solid;border-left-width:2pt">
                                                    <p class="s6"
                                                        style="text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                        H402</p>
                                                </td>
                                                <td style="width:220pt">
                                                    <p class="s6"
                                                        style="padding-left: 15pt;text-indent: 0pt;line-height: 10pt;text-align: left;">
                                                        Nocivo
                                                        para los organismos acuáticos.</p>
                                                </td>
                                            </tr>
                                        </table>
                                        <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                                        <p
                                            style="padding-left: 15pt;text-indent: 0pt;line-height: 1pt;text-align: left;">
                                        </p>
                                        <p style="padding-left: 15pt;text-indent: 0pt;text-align: left;">Las variaciones
                                            respecto a la versión anterior se
                                            han señalado para su comodidad mediante líneas verticales situadas en el
                                            margen izquierdo del texto.</p>
                                        <p
                                            style="padding-top: 11pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                                            Los datos contenidos en esta hoja
                                            de seguridad se basan en nuestros conocimientos y experiencia actuales y
                                            describen el producto considerando los
                                            requerimientos de seguridad. Los datos no describen en ningún caso las
                                            propiedades del producto (especificación
                                            de producto). La garantía en relación a ciertas propiedades o a la
                                            adecuación del producto para una aplicación
                                            específica no pueden deducirse a partir de los datos de la Hoja de
                                            Seguridad. Es responsabilidad del receptor de
                                            nuestros productos asegurar que se observen los derechos de propiedad y las
                                            leyes y reglamentaciones existentes.
                                        </p>
                                    </div>
                                </div>
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