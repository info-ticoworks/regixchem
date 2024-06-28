$(document).ready(function () {

    //Tabla Recetas
    tablaRecetas = $("#tablaRecetas").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditarReceta'>Editar</button><button class='btn btn-danger btnBorrarReceta'>Borrar</button></div></div>"
        }],
        "createdRow": function (row, data, dataIndex) {
            if (data[0]) {
                $(row).addClass('text-center');
            }
            if (data[1]) {
                $(row).addClass('text-center');
            }
            if (data[2]) {
                $(row).addClass('text-center');
            }
        },

        responsive: "true",
        order: [[0, 'asc']],
        dom: 'Bfrtilp',
        buttons: [
            {
                extend: 'copyHtml5',
                text: '<i class="fas fa-copy"></i> ',
                titleAttr: 'Copiar tabla',
                className: 'btn btn-primary'
            },
            {
                extend: 'excelHtml5',
                text: '<i class="fas fa-file-excel"></i> ',
                titleAttr: 'Exportar a Excel',
                className: 'btn btn-success'
            },
            {
                extend: 'pdfHtml5',
                text: '<i class="fas fa-file-pdf"></i> ',
                titleAttr: 'Exportar a PDF',
                className: 'btn btn-danger'
            },
            {
                extend: 'print',
                text: '<i class="fa fa-print"></i> ',
                titleAttr: 'Imprimir',
                className: 'btn btn-info'
            },
            {
                extend: 'csvHtml5',
                text: '<i class="fa fa-file-csv"></i> ',
                titleAttr: 'Exportar a CSV',
                className: 'btn btn-secondary'
            },
        ],

        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas
    tablaRecetas.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaRecetas.row(this).selector.rows).addClass("dtSelected");
    });



    //Tabla Producto 1
    tablaProductosReducida1 = $("#tablaProductosReducida1").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto1' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 1
    tablaProductosReducida1.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida1.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 1
    $('#modalProductosReducida1').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 2
    tablaProductosReducida2 = $("#tablaProductosReducida2").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto2' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 2
    tablaProductosReducida2.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida2.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 2
    $('#modalProductosReducida2').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 3
    tablaProductosReducida3 = $("#tablaProductosReducida3").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto3' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 3
    tablaProductosReducida3.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida3.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 3
    $('#modalProductosReducida3').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 4
    tablaProductosReducida4 = $("#tablaProductosReducida4").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto4' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 4
    tablaProductosReducida4.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida4.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 4
    $('#modalProductosReducida4').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 5
    tablaProductosReducida5 = $("#tablaProductosReducida5").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto5' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 5
    tablaProductosReducida5.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida5.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 5
    $('#modalProductosReducida5').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 6
    tablaProductosReducida6 = $("#tablaProductosReducida6").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto6' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 6
    tablaProductosReducida6.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida6.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 6
    $('#modalProductosReducida6').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 7
    tablaProductosReducida7 = $("#tablaProductosReducida7").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto7' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 7
    tablaProductosReducida7.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida7.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 7
    $('#modalProductosReducida7').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 8
    tablaProductosReducida8 = $("#tablaProductosReducida8").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto8' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 8
    tablaProductosReducida8.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida8.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 8
    $('#modalProductosReducida8').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 9
    tablaProductosReducida9 = $("#tablaProductosReducida9").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto9' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 9
    tablaProductosReducida9.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida9.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 9
    $('#modalProductosReducida9').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 10
    tablaProductosReducida10 = $("#tablaProductosReducida10").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto10' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 10
    tablaProductosReducida10.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida10.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 10
    $('#modalProductosReducida10').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 11
    tablaProductosReducida11 = $("#tablaProductosReducida11").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto11' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 11
    tablaProductosReducida11.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida11.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 11
    $('#modalProductosReducida11').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 12
    tablaProductosReducida12 = $("#tablaProductosReducida12").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto12' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 12
    tablaProductosReducida12.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida12.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 12
    $('#modalProductosReducida12').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 13
    tablaProductosReducida13 = $("#tablaProductosReducida13").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto13' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 13
    tablaProductosReducida13.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida13.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 13
    $('#modalProductosReducida13').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 14
    tablaProductosReducida14 = $("#tablaProductosReducida14").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto14' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 14
    tablaProductosReducida14.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida14.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 14
    $('#modalProductosReducida14').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });


    //Tabla Producto 15
    tablaProductosReducida15 = $("#tablaProductosReducida15").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto15' data-dismiss='modal'>Seleccionar</button></div></div>"
        }],

        responsive: "true",
        order: [[0, 'asc']], //Establece la columna que será el orden de los productos.


        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas Producto 15
    tablaProductosReducida15.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida15.row(this).selector.rows).addClass("dtSelected");
    });

    //Fix de Scroll en Modal 15
    $('#modalProductosReducida15').on('hidden.bs.modal', function (e) {
        $('body').addClass('modal-open');
    });

    //Inicio de botones para buscar ingradientes

    $("#btnBuscarIngrediente1").click(function () {
        $("#formProductosReducida1").trigger("reset");
        $("#modalProductosReducida1").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente2").click(function () {
        $("#formProductosReducida2").trigger("reset");
        $("#modalProductosReducida2").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente3").click(function () {
        $("#formProductosReducida3").trigger("reset");
        $("#modalProductosReducida3").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente4").click(function () {
        $("#formProductosReducida4").trigger("reset");
        $("#modalProductosReducida4").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente5").click(function () {
        $("#formProductosReducida5").trigger("reset");
        $("#modalProductosReducida5").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente6").click(function () {
        $("#formProductosReducida6").trigger("reset");
        $("#modalProductosReducida6").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente7").click(function () {
        $("#formProductosReducida7").trigger("reset");
        $("#modalProductosReducida7").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente8").click(function () {
        $("#formProductosReducida8").trigger("reset");
        $("#modalProductosReducida8").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente9").click(function () {
        $("#formProductosReducida9").trigger("reset");
        $("#modalProductosReducida9").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente10").click(function () {
        $("#formProductosReducida10").trigger("reset");
        $("#modalProductosReducida10").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente11").click(function () {
        $("#formProductosReducida11").trigger("reset");
        $("#modalProductosReducida11").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente12").click(function () {
        $("#formProductosReducida12").trigger("reset");
        $("#modalProductosReducida12").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente13").click(function () {
        $("#formProductosReducida13").trigger("reset");
        $("#modalProductosReducida13").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente14").click(function () {
        $("#formProductosReducida14").trigger("reset");
        $("#modalProductosReducida14").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    $("#btnBuscarIngrediente15").click(function () {
        $("#formProductosReducida15").trigger("reset");
        $("#modalProductosReducida15").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    //Final de botones para buscar ingredientes





    //Inicio de botones para agregar y quitar ingredientes

    $('#btnIngrediente2').on('click', function () {
        cas2 = 'null';
        $("#nombreIngrediente2").attr("required", "required");
        $("#nivel2").attr("required", "required");
        $('#ingrediente2').show();
        $('#modalRecetas').animate({ scrollTop: 100 }, 'fast');
        $('#btnIngrediente2').hide();
        $('#btnQuitarIngrediente2').show();
        $('#btnIngrediente3').show();
    });

    $('#btnQuitarIngrediente2').on('click', function () {
        cas2 = 'null';
        $('#nombreIngrediente2').removeAttr('required');
        $('#nivel2').removeAttr('required');
        $('#ingrediente2').hide();
        $('#modalRecetas').animate({ scrollTop: 100 }, 'fast');
        $('#fabricante2').slideDown(122);
        $("#nombreIngrediente2").val('');
        $("#nivel2").val('');
        $('#btnIngrediente2').show();
    });

    $('#btnIngrediente3').on('click', function () {
        cas3 = 'null';
        $("#nombreIngrediente3").attr("required", "required");
        $("#nivel3").attr("required", "required");
        $('#ingrediente3').show();
        $('#modalRecetas').animate({ scrollTop: 200 }, 'fast');
        $('#btnQuitarIngrediente2').hide();
        $('#btnIngrediente3').hide();
        $('#btnQuitarIngrediente3').show();
        $('#btnIngrediente4').show();
    });

    $('#btnQuitarIngrediente3').on('click', function () {
        cas3 = 'null';
        $('#nombreIngrediente3').removeAttr('required');
        $('#nivel3').removeAttr('required');
        $('#ingrediente3').hide();
        $('#modalRecetas').animate({ scrollTop: 200 }, 'fast');
        $('#fabricante3').slideDown(122);
        $("#nombreIngrediente3").val('');
        $("#nivel3").val('');
        $('#btnQuitarIngrediente2').show();
        $('#btnIngrediente3').show();
    });

    $('#btnIngrediente4').on('click', function () {
        cas4 = 'null';
        $("#nombreIngrediente4").attr("required", "required");
        $("#nivel4").attr("required", "required");
        $('#ingrediente4').show();
        $('#modalRecetas').animate({ scrollTop: 300 }, 'fast');
        $('#btnQuitarIngrediente3').hide();
        $('#btnIngrediente4').hide();
        $('#btnQuitarIngrediente4').show();
        $('#btnIngrediente5').show();
    });

    $('#btnQuitarIngrediente4').on('click', function () {
        cas4 = 'null';
        $('#nombreIngrediente4').removeAttr('required');
        $('#nivel4').removeAttr('required');
        $('#ingrediente4').hide();
        $('#modalRecetas').animate({ scrollTop: 300 }, 'fast');
        $('#fabricante4').slideDown(122);
        $("#nombreIngrediente4").val('');
        $("#nivel4").val('');
        $('#btnQuitarIngrediente3').show();
        $('#btnIngrediente4').show();
    });

    $('#btnIngrediente5').on('click', function () {
        cas5 = 'null';
        $("#nombreIngrediente5").attr("required", "required");
        $("#nivel5").attr("required", "required");
        $('#ingrediente5').show();
        $('#modalRecetas').animate({ scrollTop: 400 }, 'fast');
        $('#btnQuitarIngrediente4').hide();
        $('#btnIngrediente5').hide();
        $('#btnQuitarIngrediente5').show();
        $('#btnIngrediente6').show();
    });

    $('#btnQuitarIngrediente5').on('click', function () {
        cas5 = 'null';
        $('#nombreIngrediente5').removeAttr('required');
        $('#nivel5').removeAttr('required');
        $('#ingrediente5').hide();
        $('#modalRecetas').animate({ scrollTop: 400 }, 'fast');
        $('#fabricante5').slideDown(122);
        $("#nombreIngrediente5").val('');
        $("#nivel5").val('');
        $('#btnQuitarIngrediente4').show();
        $('#btnIngrediente5').show();
    });

    $('#btnIngrediente6').on('click', function () {
        cas6 = 'null';
        $("#nombreIngrediente6").attr("required", "required");
        $("#nivel6").attr("required", "required");
        $('#ingrediente6').show();
        $('#modalRecetas').animate({ scrollTop: 500 }, 'fast');
        $('#btnQuitarIngrediente5').hide();
        $('#btnIngrediente6').hide();
        $('#btnQuitarIngrediente6').show();
        $('#btnIngrediente7').show();
    });

    $('#btnQuitarIngrediente6').on('click', function () {
        cas6 = 'null';
        $('#nombreIngrediente6').removeAttr('required');
        $('#nivel6').removeAttr('required');
        $('#ingrediente6').hide();
        $('#modalRecetas').animate({ scrollTop: 500 }, 'fast');
        $('#fabricante6').slideDown(122);
        $("#nombreIngrediente6").val('');
        $("#nivel6").val('');
        $('#btnQuitarIngrediente5').show();
        $('#btnIngrediente6').show();
    });

    $('#btnIngrediente7').on('click', function () {
        cas7 = 'null';
        $("#nombreIngrediente7").attr("required", "required");
        $("#nivel7").attr("required", "required");
        $('#ingrediente7').show();
        $('#modalRecetas').animate({ scrollTop: 600 }, 'fast');
        $('#btnQuitarIngrediente6').hide();
        $('#btnIngrediente7').hide();
        $('#btnQuitarIngrediente7').show();
        $('#btnIngrediente8').show();
    });

    $('#btnQuitarIngrediente7').on('click', function () {
        cas7 = 'null';
        $('#nombreIngrediente7').removeAttr('required');
        $('#nivel7').removeAttr('required');
        $('#ingrediente7').hide();
        $('#modalRecetas').animate({ scrollTop: 600 }, 'fast');
        $('#fabricante7').slideDown(122);
        $("#nombreIngrediente7").val('');
        $("#nivel7").val('');
        $('#btnQuitarIngrediente6').show();
        $('#btnIngrediente7').show();
    });

    $('#btnIngrediente8').on('click', function () {
        cas8 = 'null';
        $("#nombreIngrediente8").attr("required", "required");
        $("#nivel8").attr("required", "required");
        $('#ingrediente8').show();
        $('#modalRecetas').animate({ scrollTop: 700 }, 'fast');
        $('#btnQuitarIngrediente7').hide();
        $('#btnIngrediente8').hide();
        $('#btnQuitarIngrediente8').show();
        $('#btnIngrediente9').show();
    });

    $('#btnQuitarIngrediente8').on('click', function () {
        cas8 = 'null';
        $('#nombreIngrediente8').removeAttr('required');
        $('#nivel8').removeAttr('required');
        $('#ingrediente8').hide();
        $('#modalRecetas').animate({ scrollTop: 700 }, 'fast');
        $('#fabricante8').slideDown(122);
        $("#nombreIngrediente8").val('');
        $("#nivel8").val('');
        $('#btnQuitarIngrediente7').show();
        $('#btnIngrediente8').show();
    });

    $('#btnIngrediente9').on('click', function () {
        cas9 = 'null';
        $("#nombreIngrediente9").attr("required", "required");
        $("#nivel9").attr("required", "required");
        $('#ingrediente9').show();
        $('#modalRecetas').animate({ scrollTop: 800 }, 'fast');
        $('#btnQuitarIngrediente8').hide();
        $('#btnIngrediente9').hide();
        $('#btnQuitarIngrediente9').show();
        $('#btnIngrediente10').show();
    });

    $('#btnQuitarIngrediente9').on('click', function () {
        cas9 = 'null';
        $('#nombreIngrediente9').removeAttr('required');
        $('#nivel9').removeAttr('required');
        $('#ingrediente9').hide();
        $('#modalRecetas').animate({ scrollTop: 800 }, 'fast');
        $('#fabricante9').slideDown(122);
        $("#nombreIngrediente9").val('');
        $("#nivel9").val('');
        $('#btnQuitarIngrediente8').show();
        $('#btnIngrediente9').show();
    });

    $('#btnIngrediente10').on('click', function () {
        cas10 = 'null';
        $("#nombreIngrediente10").attr("required", "required");
        $("#nivel10").attr("required", "required");
        $('#ingrediente10').show();
        $('#modalRecetas').animate({ scrollTop: 900 }, 'fast');
        $('#btnQuitarIngrediente9').hide();
        $('#btnIngrediente10').hide();
        $('#btnQuitarIngrediente10').show();
        $('#btnIngrediente11').show();
    });

    $('#btnQuitarIngrediente10').on('click', function () {
        cas10 = 'null';
        $('#nombreIngrediente10').removeAttr('required');
        $('#nivel10').removeAttr('required');
        $('#ingrediente10').hide();
        $('#modalRecetas').animate({ scrollTop: 900 }, 'fast');
        $('#fabricante10').slideDown(122);
        $("#nombreIngrediente10").val('');
        $("#nivel10").val('');
        $('#btnQuitarIngrediente9').show();
        $('#btnIngrediente10').show();
    });

    $('#btnIngrediente11').on('click', function () {
        cas11 = 'null';
        $("#nombreIngrediente11").attr("required", "required");
        $("#nivel11").attr("required", "required");
        $('#ingrediente11').show();
        $('#modalRecetas').animate({ scrollTop: 1000 }, 'fast');
        $('#btnQuitarIngrediente10').hide();
        $('#btnIngrediente11').hide();
        $('#btnQuitarIngrediente11').show();
        $('#btnIngrediente12').show();
    });

    $('#btnQuitarIngrediente11').on('click', function () {
        cas11 = 'null';
        $('#nombreIngrediente11').removeAttr('required');
        $('#nivel11').removeAttr('required');
        $('#ingrediente11').hide();
        $('#modalRecetas').animate({ scrollTop: 1000 }, 'fast');
        $('#fabricante11').slideDown(122);
        $("#nombreIngrediente11").val('');
        $("#nivel11").val('');
        $('#btnQuitarIngrediente10').show();
        $('#btnIngrediente11').show();
    });

    $('#btnIngrediente12').on('click', function () {
        cas12 = 'null';
        $("#nombreIngrediente12").attr("required", "required");
        $("#nivel12").attr("required", "required");
        $('#ingrediente12').show();
        $('#modalRecetas').animate({ scrollTop: 1100 }, 'fast');
        $('#btnQuitarIngrediente11').hide();
        $('#btnIngrediente12').hide();
        $('#btnQuitarIngrediente12').show();
        $('#btnIngrediente13').show();
    });

    $('#btnQuitarIngrediente12').on('click', function () {
        cas12 = 'null';
        $('#nombreIngrediente12').removeAttr('required');
        $('#nivel12').removeAttr('required');
        $('#ingrediente12').hide();
        $('#modalRecetas').animate({ scrollTop: 1100 }, 'fast');
        $('#fabricante12').slideDown(122);
        $("#nombreIngrediente12").val('');
        $("#nivel12").val('');
        $('#btnQuitarIngrediente11').show();
        $('#btnIngrediente12').show();
    });

    $('#btnIngrediente13').on('click', function () {
        cas13 = 'null';
        $("#nombreIngrediente13").attr("required", "required");
        $("#nivel13").attr("required", "required");
        $('#ingrediente13').show();
        $('#modalRecetas').animate({ scrollTop: 1200 }, 'fast');
        $('#btnQuitarIngrediente12').hide();
        $('#btnIngrediente13').hide();
        $('#btnQuitarIngrediente13').show();
        $('#btnIngrediente14').show();
    });

    $('#btnQuitarIngrediente13').on('click', function () {
        cas13 = 'null';
        $('#nombreIngrediente13').removeAttr('required');
        $('#nivel13').removeAttr('required');
        $('#ingrediente13').hide();
        $('#modalRecetas').animate({ scrollTop: 1200 }, 'fast');
        $('#fabricante13').slideDown(122);
        $("#nombreIngrediente13").val('');
        $("#nivel13").val('');
        $('#btnQuitarIngrediente12').show();
        $('#btnIngrediente13').show();
    });

    $('#btnIngrediente14').on('click', function () {
        cas14 = 'null';
        $("#nombreIngrediente14").attr("required", "required");
        $("#nivel14").attr("required", "required");
        $('#ingrediente14').show();
        $('#modalRecetas').animate({ scrollTop: 1300 }, 'fast');
        $('#btnQuitarIngrediente13').hide();
        $('#btnIngrediente14').hide();
        $('#btnQuitarIngrediente14').show();
        $('#btnIngrediente15').show();
    });

    $('#btnQuitarIngrediente14').on('click', function () {
        cas14 = 'null';
        $('#nombreIngrediente14').removeAttr('required');
        $('#nivel14').removeAttr('required');
        $('#ingrediente14').hide();
        $('#modalRecetas').animate({ scrollTop: 1300 }, 'fast');
        $('#fabricante14').slideDown(122);
        $("#nombreIngrediente14").val('');
        $("#nivel14").val('');
        $('#btnQuitarIngrediente13').show();
        $('#btnIngrediente14').show();
    });

    $('#btnIngrediente15').on('click', function () {
        cas15 = 'null';
        $("#nombreIngrediente15").attr("required", "required");
        $("#nivel15").attr("required", "required");
        $('#ingrediente15').show();
        $('#modalRecetas').animate({ scrollTop: 1400 }, 'fast');
        $('#btnQuitarIngrediente14').hide();
        $('#btnIngrediente15').hide();
        $('#btnQuitarIngrediente15').show();
    });

    $('#btnQuitarIngrediente15').on('click', function () {
        cas15 = 'null';
        $('#nombreIngrediente15').removeAttr('required');
        $('#nivel15').removeAttr('required');
        $('#ingrediente15').hide();
        $('#modalRecetas').animate({ scrollTop: 1400 }, 'fast');
        $('#fabricante15').slideDown(122);
        $("#nombreIngrediente15").val('');
        $("#nivel15").val('');
        $('#btnQuitarIngrediente14').show();
        $('#btnIngrediente15').show();
    });

    //Final de botones para agregar o eliminar ingredientes





    //Botón para escoger Producto 1
    $(document).on("click", ".btnEscogerProducto1", function () {
        fila1 = $(this).closest("tr");
        cas1 = fila1.find('td:eq(0)').text();
        nombreProducto1 = fila1.find('td:eq(1)').text();
        console.log('CAS1: ', cas1);
        console.log('CAS1: ', cas1);
        $("#nombreIngrediente1").val(cas1);
        $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    //Botón para escoger Producto 2
    $(document).on("click", ".btnEscogerProducto2", function () {
        fila2 = $(this).closest("tr");
        cas2 = fila2.find('td:eq(0)').text();
        nombreProducto2 = fila2.find('td:eq(1)').text();
        console.log('CAS2: ', cas2);
        console.log('CAS2: ', cas2);
        $("#nombreIngrediente2").val(cas2);
    });

    //Botón para escoger Producto 3
    $(document).on("click", ".btnEscogerProducto3", function () {
        fila3 = $(this).closest("tr");
        cas3 = fila3.find('td:eq(0)').text();
        nombreProducto3 = fila3.find('td:eq(1)').text();
        console.log('CAS3: ', cas3);
        console.log('CAS3: ', cas3);
        $("#nombreIngrediente3").val(cas3);
        $('#modalRecetas').modal('show');
    });

    //Botón para escoger Producto 4
    $(document).on("click", ".btnEscogerProducto4", function () {
        fila4 = $(this).closest("tr");
        cas4 = fila4.find('td:eq(0)').text();
        nombreProducto4 = fila4.find('td:eq(1)').text();
        console.log('CAS4: ', cas4);
        console.log('CAS4: ', cas4);
        $("#nombreIngrediente4").val(cas4);
        $('#modalRecetas').modal('show');
    });

    //Botón para escoger Producto 5
    $(document).on("click", ".btnEscogerProducto5", function () {
        fila5 = $(this).closest("tr");
        cas5 = fila5.find('td:eq(0)').text();
        nombreProducto5 = fila5.find('td:eq(1)').text();
        console.log('CAS5: ', cas5);
        console.log('CAS5: ', cas5);
        $("#nombreIngrediente5").val(cas5);
        $('#modalRecetas').modal('show');
    });

    //Botón para escoger Producto 6
    $(document).on("click", ".btnEscogerProducto6", function () {
        fila6 = $(this).closest("tr");
        cas6 = fila6.find('td:eq(0)').text();
        nombreProducto6 = fila6.find('td:eq(1)').text();
        console.log('CAS6: ', cas6);
        console.log('CAS6: ', cas6);
        $("#nombreIngrediente6").val(cas6);
        $('#modalRecetas').modal('show');
    });

    //Botón para escoger Producto 7
    $(document).on("click", ".btnEscogerProducto7", function () {
        fila7 = $(this).closest("tr");
        cas7 = fila7.find('td:eq(0)').text();
        nombreProducto7 = fila7.find('td:eq(1)').text();
        console.log('CAS7: ', cas7);
        console.log('CAS7: ', cas7);
        $("#nombreIngrediente7").val(cas7);
        $('#modalRecetas').modal('show');
    });

    //Botón para escoger Producto 8
    $(document).on("click", ".btnEscogerProducto8", function () {
        fila8 = $(this).closest("tr");
        cas8 = fila8.find('td:eq(0)').text();
        nombreProducto8 = fila8.find('td:eq(1)').text();
        console.log('CAS8: ', cas8);
        console.log('CAS8: ', cas8);
        $("#nombreIngrediente8").val(cas8);
        $('#modalRecetas').modal('show');
    });

    //Botón para escoger Producto 9
    $(document).on("click", ".btnEscogerProducto9", function () {
        fila9 = $(this).closest("tr");
        cas9 = fila9.find('td:eq(0)').text();
        nombreProducto9 = fila9.find('td:eq(1)').text();
        console.log('CAS9: ', cas9);
        console.log('CAS9: ', cas9);
        $("#nombreIngrediente9").val(cas9);
        $('#modalRecetas').modal('show');
    });

    //Botón para escoger Producto 10
    $(document).on("click", ".btnEscogerProducto10", function () {
        fila10 = $(this).closest("tr");
        cas10 = fila10.find('td:eq(0)').text();
        nombreProducto10 = fila10.find('td:eq(1)').text();
        console.log('CAS10: ', cas10);
        console.log('CAS10: ', cas10);
        $("#nombreIngrediente10").val(cas10);
        $('#modalRecetas').modal('show');
    });

    //Botón para escoger Producto 11
    $(document).on("click", ".btnEscogerProducto11", function () {
        fila11 = $(this).closest("tr");
        cas11 = fila11.find('td:eq(0)').text();
        nombreProducto11 = fila11.find('td:eq(1)').text();
        console.log('CAS11: ', cas11);
        console.log('CAS11: ', cas11);
        $("#nombreIngrediente11").val(cas11);
        $('#modalRecetas').modal('show');
    });

    //Botón para escoger Producto 12
    $(document).on("click", ".btnEscogerProducto12", function () {
        fila12 = $(this).closest("tr");
        cas12 = fila12.find('td:eq(0)').text();
        nombreProducto12 = fila12.find('td:eq(1)').text();
        console.log('CAS12: ', cas12);
        console.log('CAS12: ', cas12);
        $("#nombreIngrediente12").val(cas12);
        $('#modalRecetas').modal('show');
    });

    //Botón para escoger Producto 13
    $(document).on("click", ".btnEscogerProducto13", function () {
        fila13 = $(this).closest("tr");
        cas13 = fila13.find('td:eq(0)').text();
        nombreProducto13 = fila13.find('td:eq(1)').text();
        console.log('CAS13: ', cas13);
        console.log('CAS13: ', cas13);
        $("#nombreIngrediente13").val(cas13);
        $('#modalRecetas').modal('show');
    });

    //Botón para escoger Producto 14
    $(document).on("click", ".btnEscogerProducto14", function () {
        fila14 = $(this).closest("tr");
        cas14 = fila14.find('td:eq(0)').text();
        nombreProducto14 = fila14.find('td:eq(1)').text();
        console.log('CAS14: ', cas14);
        console.log('CAS14: ', cas14);
        $("#nombreIngrediente14").val(cas14);
        $('#modalRecetas').modal('show');
    });

    //Botón para escoger Producto 15
    $(document).on("click", ".btnEscogerProducto15", function () {
        fila15 = $(this).closest("tr");
        cas15 = fila15.find('td:eq(0)').text();
        nombreProducto15 = fila15.find('td:eq(1)').text();
        console.log('CAS15: ', cas15);
        console.log('CAS15: ', cas15);
        $("#nombreIngrediente15").val(cas15);
        $('#modalRecetas').modal('show');
    });

    //Botón Nueva Receta
    $("#btnNuevaReceta").click(function () {
        idReceta = 'null';
        $("#formRecetas").trigger("reset");
        $(".modal-header").css("background-color", "#1cc88a");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Nueva Receta");
        $('#ingrediente2').hide();
        $('#ingrediente3').hide();
        $('#ingrediente4').hide();
        $('#ingrediente5').hide();
        $('#ingrediente6').hide();
        $('#ingrediente7').hide();
        $('#ingrediente8').hide();
        $('#ingrediente9').hide();
        $('#ingrediente10').hide();
        $('#ingrediente11').hide();
        $('#ingrediente12').hide();
        $('#ingrediente13').hide();
        $('#ingrediente14').hide();
        $('#ingrediente15').hide();
        $('#btnQuitarIngrediente2').hide();
        $('#btnIngrediente3').hide();
        $('#btnQuitarIngrediente3').hide();
        $('#btnIngrediente4').hide();
        $('#btnQuitarIngrediente4').hide();
        $('#btnIngrediente5').hide();
        $('#btnQuitarIngrediente5').hide();
        $('#btnIngrediente6').hide();
        $('#btnQuitarIngrediente6').hide();
        $('#btnIngrediente7').hide();
        $('#btnQuitarIngrediente7').hide();
        $('#btnIngrediente8').hide();
        $('#btnQuitarIngrediente8').hide();
        $('#btnIngrediente9').hide();
        $('#btnQuitarIngrediente9').hide();
        $('#btnIngrediente10').hide();
        $('#btnQuitarIngrediente10').hide();
        $('#btnIngrediente11').hide();
        $('#btnQuitarIngrediente11').hide();
        $('#btnIngrediente12').hide();
        $('#btnQuitarIngrediente12').hide();
        $('#btnIngrediente13').hide();
        $('#btnQuitarIngrediente13').hide();
        $('#btnIngrediente14').hide();
        $('#btnQuitarIngrediente14').hide();
        $('#btnIngrediente15').hide();
        $('#btnQuitarIngrediente15').hide();
        $('#modalRecetas').modal({ backdrop: 'static', keyboard: false }, 'show');
        // cas1 = 'null';
        // cas2 = 'null';
        // cas3 = 'null';
        // cas4 = 'null';
        // cas5 = 'null';
        // cas6 = 'null';
        // cas7 = 'null';
        // cas8 = 'null';
        // cas9 = 'null';
        // cas10 = 'null';
        // cas11 = 'null';
        // cas12 = 'null';
        // cas13 = 'null';
        // cas14 = 'null';
        // cas15 = 'null';
        // cantidad1 = 0;
        // cantidad2 = 0;
        // cantidad3 = 0;
        // cantidad4 = 0;
        // cantidad5 = 0;
        // cantidad6 = 0;
        // cantidad7 = 0;
        // cantidad8 = 0;
        // cantidad9 = 0;
        // cantidad10 = 0;
        // cantidad11 = 0;
        // cantidad12 = 0;
        // cantidad13 = 0;
        // cantidad14 = 0;
        // cantidad15 = 0;

        opcion = 1; //Nuevo Producto
    });

    var fila; //Capturar la fila para editar o borrar el registro

    //Botón Editar Receta  
    $(document).on("click", ".btnEditarReceta", function () {
        $("#formRecetas").trigger("reset");
        $('#ingrediente2').hide();
        $('#ingrediente3').hide();
        $('#ingrediente4').hide();
        $('#ingrediente5').hide();
        $('#ingrediente6').hide();
        $('#ingrediente7').hide();
        $('#ingrediente8').hide();
        $('#ingrediente9').hide();
        $('#ingrediente10').hide();
        $('#ingrediente11').hide();
        $('#ingrediente12').hide();
        $('#ingrediente13').hide();
        $('#ingrediente14').hide();
        $('#ingrediente15').hide();
        $('#btnQuitarIngrediente2').hide();
        $('#btnIngrediente3').hide();
        $('#btnQuitarIngrediente3').hide();
        $('#btnIngrediente4').hide();
        $('#btnQuitarIngrediente4').hide();
        $('#btnIngrediente5').hide();
        $('#btnQuitarIngrediente5').hide();
        $('#btnIngrediente6').hide();
        $('#btnQuitarIngrediente6').hide();
        $('#btnIngrediente7').hide();
        $('#btnQuitarIngrediente7').hide();
        $('#btnIngrediente8').hide();
        $('#btnQuitarIngrediente8').hide();
        $('#btnIngrediente9').hide();
        $('#btnQuitarIngrediente9').hide();
        $('#btnIngrediente10').hide();
        $('#btnQuitarIngrediente10').hide();
        $('#btnIngrediente11').hide();
        $('#btnQuitarIngrediente11').hide();
        $('#btnIngrediente12').hide();
        $('#btnQuitarIngrediente12').hide();
        $('#btnIngrediente13').hide();
        $('#btnQuitarIngrediente13').hide();
        $('#btnIngrediente14').hide();
        $('#btnQuitarIngrediente14').hide();
        $('#btnIngrediente15').hide();
        $('#btnQuitarIngrediente15').hide();
        fila = $(this).closest("tr");
        idReceta = fila.find('td:eq(0)').text();
        nombreReceta = fila.find('td:eq(1)').text();
        console.log('ID de Receta: ', idReceta);

        $.ajax({
            type: "POST",
            url: "bd/cargarRecetas.php",
            data: "idReceta=" + idReceta,
            success: function (data) {
                //console.log(data);
                dataParse = JSON.parse(data);
                recipe_loaded = dataParse;
                console.log(recipe_loaded);
                loaded_idReceta = recipe_loaded[0].idReceta;
                loaded_nombreReceta = recipe_loaded[0].nombreReceta;
                loaded_idEmpresa = recipe_loaded[0].idEmpresa;
                loaded_cas1 = recipe_loaded[0].cas1;
                loaded_cas2 = recipe_loaded[0].cas2;
                loaded_cas3 = recipe_loaded[0].cas3;
                loaded_cas4 = recipe_loaded[0].cas4;
                loaded_cas5 = recipe_loaded[0].cas5;
                loaded_cas6 = recipe_loaded[0].cas6;
                loaded_cas7 = recipe_loaded[0].cas7;
                loaded_cas8 = recipe_loaded[0].cas8;
                loaded_cas9 = recipe_loaded[0].cas9;
                loaded_cas10 = recipe_loaded[0].cas10;
                loaded_cas11 = recipe_loaded[0].cas11;
                loaded_cas12 = recipe_loaded[0].cas12;
                loaded_cas13 = recipe_loaded[0].cas13;
                loaded_cas14 = recipe_loaded[0].cas14;
                loaded_cas15 = recipe_loaded[0].cas15;
                loaded_cantidad1 = recipe_loaded[0].cantidad1;
                loaded_cantidad2 = recipe_loaded[0].cantidad2;
                loaded_cantidad3 = recipe_loaded[0].cantidad3;
                loaded_cantidad4 = recipe_loaded[0].cantidad4;
                loaded_cantidad5 = recipe_loaded[0].cantidad5;
                loaded_cantidad6 = recipe_loaded[0].cantidad6;
                loaded_cantidad7 = recipe_loaded[0].cantidad7;
                loaded_cantidad8 = recipe_loaded[0].cantidad8;
                loaded_cantidad9 = recipe_loaded[0].cantidad9;
                loaded_cantidad10 = recipe_loaded[0].cantidad10;
                loaded_cantidad11 = recipe_loaded[0].cantidad11;
                loaded_cantidad12 = recipe_loaded[0].cantidad12;
                loaded_cantidad13 = recipe_loaded[0].cantidad13;
                loaded_cantidad14 = recipe_loaded[0].cantidad14;
                loaded_cantidad15 = recipe_loaded[0].cantidad15;
                console.log('ID de Receta: ', loaded_idReceta);
                console.log('Nombre de Receta: ', loaded_nombreReceta);
                console.log('ID de Empresa: ', loaded_idEmpresa);
                console.log('Cas 1: ', loaded_cas1);
                console.log('Cas 2: ', loaded_cas2);
                console.log('Cas 3: ', loaded_cas3);
                console.log('Cas 4: ', loaded_cas4);
                console.log('Cas 5: ', loaded_cas5);
                console.log('Cas 6: ', loaded_cas6);
                console.log('Cas 7: ', loaded_cas7);
                console.log('Cas 8: ', loaded_cas8);
                console.log('Cas 9: ', loaded_cas9);
                console.log('Cas 10: ', loaded_cas10);
                console.log('Cas 11: ', loaded_cas11);
                console.log('Cas 12: ', loaded_cas12);
                console.log('Cas 13: ', loaded_cas13);
                console.log('Cas 14: ', loaded_cas14);
                console.log('Cas 15: ', loaded_cas15);
                console.log('Cantidad 1: ', loaded_cantidad1);
                console.log('Cantidad 2: ', loaded_cantidad2);
                console.log('Cantidad 3: ', loaded_cantidad3);
                console.log('Cantidad 4: ', loaded_cantidad4);
                console.log('Cantidad 5: ', loaded_cantidad5);
                console.log('Cantidad 6: ', loaded_cantidad6);
                console.log('Cantidad 7: ', loaded_cantidad7);
                console.log('Cantidad 8: ', loaded_cantidad8);
                console.log('Cantidad 9: ', loaded_cantidad9);
                console.log('Cantidad 10: ', loaded_cantidad10);
                console.log('Cantidad 11: ', loaded_cantidad11);
                console.log('Cantidad 12: ', loaded_cantidad12);
                console.log('Cantidad 13: ', loaded_cantidad13);
                console.log('Cantidad 14: ', loaded_cantidad14);
                console.log('Cantidad 15: ', loaded_cantidad15);


                loading_timer = 600;
                more_time = 150;

                if (loaded_cas1 != null) {
                    loading_timer = loading_timer + more_time;
                } else {
                    loading_timer = 1000;
                }

                if (loaded_cas2 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas3 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas4 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas5 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas6 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas7 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas8 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas9 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas10 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas11 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas12 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas13 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas14 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas15 != null) {
                    loading_timer = loading_timer + more_time;
                }

                Swal.fire({
                    title: "Cargando Información!",
                    html: "Por favor espere.",
                    timer: loading_timer,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = loading_timer
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        //console.log("I was closed by the timer");
                    }
                });

                $("#nombreReceta").val(loaded_nombreReceta);

                //Precarga de datos de Clases

                if (loaded_cas1 != null) {
                    $("#nombreIngrediente1").val(loaded_cas1);
                    $("#nivel1").val(loaded_cantidad1);
                }

                if (loaded_cas2 != null) {
                    $("#nombreIngrediente2").attr("required", "required");
                    $("#nivel2").attr("required", "required");
                    $('#ingrediente2').show();
                    $('#modalRecetas').animate({ scrollTop: 100 }, 'fast');
                    $("#nombreIngrediente2").val(loaded_cas2);
                    $("#nivel2").val(loaded_cantidad2);
                    $('#btnIngrediente2').hide();
                    $('#btnQuitarIngrediente2').show();
                    $('#btnIngrediente3').show();
                } else {
                    $('#nombreIngrediente2').removeAttr('required');
                    $('#nivel2').removeAttr('required');
                    $('#ingrediente2').hide();
                    $('#modalRecetas').animate({ scrollTop: 100 }, 'fast');
                    $('#fabricante2').slideDown(122);
                    $("#nombreIngrediente2").val('');
                    $("#nivel2").val('');
                    $("#nivel2").val('');
                    $('#btnIngrediente2').show();
                }

                if (loaded_cas3 != null) {
                    $("#nombreIngrediente3").attr("required", "required");
                    $("#nivel3").attr("required", "required");
                    $('#ingrediente3').show();
                    $('#modalRecetas').animate({ scrollTop: 200 }, 'fast');
                    $("#nombreIngrediente3").val(loaded_cas3);
                    $("#nivel3").val(loaded_cantidad3);
                    $('#btnQuitarIngrediente2').hide();
                    $('#btnIngrediente3').hide();
                    $('#btnQuitarIngrediente3').show();
                    $('#btnIngrediente4').show();
                } else {
                    $('#nombreIngrediente3').removeAttr('required');
                    $('#nivel3').removeAttr('required');
                    $('#ingrediente3').hide();
                    $('#modalRecetas').animate({ scrollTop: 200 }, 'fast');
                    $('#fabricante3').slideDown(122);
                    $("#nombreIngrediente3").val('');
                    $("#nivel3").val('');
                    $('#btnQuitarIngrediente2').show();
                    $('#btnIngrediente3').show();
                }

                if (loaded_cas4 != null) {
                    $("#nombreIngrediente4").attr("required", "required");
                    $("#nivel4").attr("required", "required");
                    $('#ingrediente4').show();
                    $('#modalRecetas').animate({ scrollTop: 300 }, 'fast');
                    $("#nombreIngrediente4").val(loaded_cas4);
                    $("#nivel4").val(loaded_cantidad4);
                    $('#btnQuitarIngrediente3').hide();
                    $('#btnIngrediente4').hide();
                    $('#btnQuitarIngrediente4').show();
                    $('#btnIngrediente5').show();
                } else {
                    $('#nombreIngrediente4').removeAttr('required');
                    $('#nivel4').removeAttr('required');
                    $('#ingrediente4').hide();
                    $('#modalRecetas').animate({ scrollTop: 300 }, 'fast');
                    $('#fabricante4').slideDown(122);
                    $("#nombreIngrediente4").val('');
                    $("#nivel4").val('');
                    $('#btnQuitarIngrediente3').show();
                    $('#btnIngrediente4').show();
                }

                if (loaded_cas5 != null) {
                    $("#nombreIngrediente5").attr("required", "required");
                    $("#nivel5").attr("required", "required");
                    $('#ingrediente5').show();
                    $('#modalRecetas').animate({ scrollTop: 400 }, 'fast');
                    $("#nombreIngrediente5").val(loaded_cas5);
                    $("#nivel5").val(loaded_cantidad5);
                    $('#btnQuitarIngrediente4').hide();
                    $('#btnIngrediente5').hide();
                    $('#btnQuitarIngrediente5').show();
                    $('#btnIngrediente6').show();
                } else {
                    $('#nombreIngrediente5').removeAttr('required');
                    $('#nivel5').removeAttr('required');
                    $('#ingrediente5').hide();
                    $('#modalRecetas').animate({ scrollTop: 400 }, 'fast');
                    $('#fabricante5').slideDown(122);
                    $("#nombreIngrediente5").val('');
                    $("#nivel5").val('');
                    $('#btnQuitarIngrediente4').show();
                    $('#btnIngrediente5').show();
                }

                if (loaded_cas6 != null) {
                    $("#nombreIngrediente6").attr("required", "required");
                    $("#nivel6").attr("required", "required");
                    $('#ingrediente6').show();
                    $('#modalRecetas').animate({ scrollTop: 500 }, 'fast');
                    $("#nombreIngrediente6").val(loaded_cas6);
                    $("#nivel6").val(loaded_cantidad6);
                    $('#btnQuitarIngrediente5').hide();
                    $('#btnIngrediente6').hide();
                    $('#btnQuitarIngrediente6').show();
                    $('#btnIngrediente7').show();
                } else {
                    $('#nombreIngrediente6').removeAttr('required');
                    $('#nivel6').removeAttr('required');
                    $('#ingrediente6').hide();
                    $('#modalRecetas').animate({ scrollTop: 500 }, 'fast');
                    $('#fabricante6').slideDown(122);
                    $("#nombreIngrediente6").val('');
                    $("#nivel6").val('');
                    $('#btnQuitarIngrediente5').show();
                    $('#btnIngrediente6').show();
                }

                if (loaded_cas7 != null) {
                    $("#nombreIngrediente7").attr("required", "required");
                    $("#nivel7").attr("required", "required");
                    $('#ingrediente7').show();
                    $('#modalRecetas').animate({ scrollTop: 600 }, 'fast');
                    $("#nombreIngrediente7").val(loaded_cas7);
                    $("#nivel7").val(loaded_cantidad7);
                    $('#btnQuitarIngrediente6').hide();
                    $('#btnIngrediente7').hide();
                    $('#btnQuitarIngrediente7').show();
                    $('#btnIngrediente8').show();
                } else {
                    $('#nombreIngrediente7').removeAttr('required');
                    $('#nivel7').removeAttr('required');
                    $('#ingrediente7').hide();
                    $('#modalRecetas').animate({ scrollTop: 600 }, 'fast');
                    $('#fabricante7').slideDown(122);
                    $("#nombreIngrediente7").val('');
                    $("#nivel7").val('');
                    $('#btnQuitarIngrediente6').show();
                    $('#btnIngrediente7').show();
                }

                if (loaded_cas8 != null) {
                    $("#nombreIngrediente8").attr("required", "required");
                    $("#nivel8").attr("required", "required");
                    $('#ingrediente8').show();
                    $('#modalRecetas').animate({ scrollTop: 700 }, 'fast');
                    $("#nombreIngrediente8").val(loaded_cas8);
                    $("#nivel8").val(loaded_cantidad8);
                    $('#btnQuitarIngrediente7').hide();
                    $('#btnIngrediente8').hide();
                    $('#btnQuitarIngrediente8').show();
                    $('#btnIngrediente9').show();
                } else {
                    $('#nombreIngrediente8').removeAttr('required');
                    $('#nivel8').removeAttr('required');
                    $('#ingrediente8').hide();
                    $('#modalRecetas').animate({ scrollTop: 700 }, 'fast');
                    $('#fabricante8').slideDown(122);
                    $("#nombreIngrediente8").val('');
                    $("#nivel8").val('');
                    $('#btnQuitarIngrediente7').show();
                    $('#btnIngrediente8').show();
                }

                if (loaded_cas9 != null) {
                    $("#nombreIngrediente9").attr("required", "required");
                    $("#nivel9").attr("required", "required");
                    $('#ingrediente9').show();
                    $('#modalRecetas').animate({ scrollTop: 800 }, 'fast');
                    $("#nombreIngrediente9").val(loaded_cas9);
                    $("#nivel9").val(loaded_cantidad9);
                    $('#btnQuitarIngrediente8').hide();
                    $('#btnIngrediente9').hide();
                    $('#btnQuitarIngrediente9').show();
                    $('#btnIngrediente10').show();
                } else {
                    $('#nombreIngrediente9').removeAttr('required');
                    $('#nivel9').removeAttr('required');
                    $('#ingrediente9').hide();
                    $('#modalRecetas').animate({ scrollTop: 800 }, 'fast');
                    $('#fabricante9').slideDown(122);
                    $("#nombreIngrediente9").val('');
                    $("#nivel9").val('');
                    $('#btnQuitarIngrediente8').show();
                    $('#btnIngrediente9').show();
                }

                if (loaded_cas10 != null) {
                    $("#nombreIngrediente10").attr("required", "required");
                    $("#nivel10").attr("required", "required");
                    $('#ingrediente10').show();
                    $('#modalRecetas').animate({ scrollTop: 900 }, 'fast');
                    $("#nombreIngrediente10").val(loaded_cas10);
                    $("#nivel10").val(loaded_cantidad10);
                    $('#btnQuitarIngrediente9').hide();
                    $('#btnIngrediente10').hide();
                    $('#btnQuitarIngrediente10').show();
                    $('#btnIngrediente11').show();
                } else {
                    $('#nombreIngrediente10').removeAttr('required');
                    $('#nivel10').removeAttr('required');
                    $('#ingrediente10').hide();
                    $('#modalRecetas').animate({ scrollTop: 900 }, 'fast');
                    $('#fabricante10').slideDown(122);
                    $("#nombreIngrediente10").val('');
                    $("#nivel10").val('');
                    $('#btnQuitarIngrediente9').show();
                    $('#btnIngrediente10').show();
                }

                if (loaded_cas11 != null) {
                    $("#nombreIngrediente11").attr("required", "required");
                    $("#nivel11").attr("required", "required");
                    $('#ingrediente11').show();
                    $('#modalRecetas').animate({ scrollTop: 1000 }, 'fast');
                    $("#nombreIngrediente11").val(loaded_cas11);
                    $("#nivel11").val(loaded_cantidad11);
                    $('#btnQuitarIngrediente10').hide();
                    $('#btnIngrediente11').hide();
                    $('#btnQuitarIngrediente11').show();
                    $('#btnIngrediente12').show();
                } else {
                    $('#nombreIngrediente11').removeAttr('required');
                    $('#nivel11').removeAttr('required');
                    $('#ingrediente11').hide();
                    $('#modalRecetas').animate({ scrollTop: 1000 }, 'fast');
                    $('#fabricante11').slideDown(122);
                    $("#nombreIngrediente11").val('');
                    $("#nivel11").val('');
                    $('#btnQuitarIngrediente10').show();
                    $('#btnIngrediente11').show();
                }

                if (loaded_cas12 != null) {
                    $("#nombreIngrediente12").attr("required", "required");
                    $("#nivel12").attr("required", "required");
                    $('#ingrediente12').show();
                    $('#modalRecetas').animate({ scrollTop: 1100 }, 'fast');
                    $("#nombreIngrediente12").val(loaded_cas12);
                    $("#nivel12").val(loaded_cantidad12);
                    $('#btnQuitarIngrediente11').hide();
                    $('#btnIngrediente12').hide();
                    $('#btnQuitarIngrediente12').show();
                    $('#btnIngrediente13').show();
                } else {
                    $('#nombreIngrediente12').removeAttr('required');
                    $('#nivel12').removeAttr('required');
                    $('#ingrediente12').hide();
                    $('#modalRecetas').animate({ scrollTop: 1100 }, 'fast');
                    $('#fabricante12').slideDown(122);
                    $("#nombreIngrediente12").val('');
                    $("#nivel12").val('');
                    $('#btnQuitarIngrediente11').show();
                    $('#btnIngrediente12').show();
                }

                if (loaded_cas13 != null) {
                    $("#nombreIngrediente13").attr("required", "required");
                    $("#nivel13").attr("required", "required");
                    $('#ingrediente13').show();
                    $('#modalRecetas').animate({ scrollTop: 1200 }, 'fast');
                    $("#nombreIngrediente13").val(loaded_cas13);
                    $("#nivel13").val(loaded_cantidad13);
                    $('#btnQuitarIngrediente12').hide();
                    $('#btnIngrediente13').hide();
                    $('#btnQuitarIngrediente13').show();
                    $('#btnIngrediente14').show();
                } else {
                    $('#nombreIngrediente13').removeAttr('required');
                    $('#nivel13').removeAttr('required');
                    $('#ingrediente13').hide();
                    $('#modalRecetas').animate({ scrollTop: 1200 }, 'fast');
                    $('#fabricante13').slideDown(122);
                    $("#nombreIngrediente13").val('');
                    $("#nivel13").val('');
                    $('#btnQuitarIngrediente12').show();
                    $('#btnIngrediente13').show();
                }

                if (loaded_cas14 != null) {
                    $("#nombreIngrediente14").attr("required", "required");
                    $("#nivel14").attr("required", "required");
                    $('#ingrediente14').show();
                    $('#modalRecetas').animate({ scrollTop: 1300 }, 'fast');
                    $("#nombreIngrediente14").val(loaded_cas14);
                    $("#nivel14").val(loaded_cantidad14);
                    $('#btnQuitarIngrediente13').hide();
                    $('#btnIngrediente14').hide();
                    $('#btnQuitarIngrediente14').show();
                    $('#btnIngrediente15').show();
                } else {
                    $('#nombreIngrediente14').removeAttr('required');
                    $('#nivel14').removeAttr('required');
                    $('#ingrediente14').hide();
                    $('#modalRecetas').animate({ scrollTop: 1300 }, 'fast');
                    $('#fabricante14').slideDown(122);
                    $("#nombreIngrediente14").val('');
                    $("#nivel14").val('');
                    $('#btnQuitarIngrediente13').show();
                    $('#btnIngrediente14').show();
                }

                if (loaded_cas15 != null) {
                    $("#nombreIngrediente15").attr("required", "required");
                    $("#nivel15").attr("required", "required");
                    $('#ingrediente15').show();
                    $('#modalRecetas').animate({ scrollTop: 1400 }, 'fast');
                    $("#nombreIngrediente15").val(loaded_cas15);
                    $("#nivel15").val(loaded_cantidad15);
                    $('#btnQuitarIngrediente14').hide();
                    $('#btnIngrediente15').hide();
                    $('#btnQuitarIngrediente15').show();
                } else {
                    $('#nombreIngrediente15').removeAttr('required');
                    $('#nivel15').removeAttr('required');
                    $('#ingrediente15').hide();
                    $('#modalRecetas').animate({ scrollTop: 1400 }, 'fast');
                    $('#fabricante15').slideDown(122);
                    $("#nombreIngrediente15").val('');
                    $("#nivel15").val('');
                    $('#btnQuitarIngrediente14').show();
                    $('#btnIngrediente15').show();
                }

            },
            error: function (textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se pudo cargar el producto.',
                    footer: '<a href="">Why do I have this issue?</a>',
                    timer: 3000
                })
            }
        });

        opcion = 2; //Editar Receta
        $(".modal-header").css("background-color", "#4e73df");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Receta");
        $('#modalRecetas').modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    //Botón Eliminar Receta
    $(document).on("click", ".btnBorrarReceta", function () {
        fila = $(this);
        idReceta = $(this).closest("tr").find('td:eq(0)').text();
        nombreReceta = $(this).closest("tr").find('td:eq(1)').text();
        opcion = 3 //borrar
        Swal.fire({
            title: 'Está seguro que desea eliminar la receta "' + nombreReceta + '"?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                $.ajax({
                    url: "bd/bdRecetas.php",
                    type: "POST",
                    dataType: "json",
                    data: { opcion: opcion, idReceta: idReceta },
                    success: function () {
                        tablaRecetas.row(fila.parents('tr')).remove().draw();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'La Receta "' + nombreReceta + '" fue eliminada con éxito',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    },
                    error: function (textStatus, errorThrown) {
                        console.log(textStatus, errorThrown);
                    }
                });
            }
        })
    });

    //Submit Productos
    $("#formRecetas").submit(function (e) {
        e.preventDefault();
        nombreReceta = $.trim($("#nombreReceta").val());
        idEmpresa = $.trim($("#idEmpresa").val());
        cas1 = $.trim($("#nombreIngrediente1").val());
        cas2 = $.trim($("#nombreIngrediente2").val());
        cas3 = $.trim($("#nombreIngrediente3").val());
        cas4 = $.trim($("#nombreIngrediente4").val());
        cas5 = $.trim($("#nombreIngrediente5").val());
        cas6 = $.trim($("#nombreIngrediente6").val());
        cas7 = $.trim($("#nombreIngrediente7").val());
        cas8 = $.trim($("#nombreIngrediente8").val());
        cas9 = $.trim($("#nombreIngrediente9").val());
        cas10 = $.trim($("#nombreIngrediente10").val());
        cas11 = $.trim($("#nombreIngrediente11").val());
        cas12 = $.trim($("#nombreIngrediente12").val());
        cas13 = $.trim($("#nombreIngrediente13").val());
        cas14 = $.trim($("#nombreIngrediente14").val());
        cas15 = $.trim($("#nombreIngrediente15").val());
        cantidad1 = $.trim($("#nivel1").val());
        cantidad2 = $.trim($("#nivel2").val());
        cantidad3 = $.trim($("#nivel3").val());
        cantidad4 = $.trim($("#nivel4").val());
        cantidad5 = $.trim($("#nivel5").val());
        cantidad6 = $.trim($("#nivel6").val());
        cantidad7 = $.trim($("#nivel7").val());
        cantidad8 = $.trim($("#nivel8").val());
        cantidad9 = $.trim($("#nivel9").val());
        cantidad10 = $.trim($("#nivel10").val());
        cantidad11 = $.trim($("#nivel11").val());
        cantidad12 = $.trim($("#nivel12").val());
        cantidad13 = $.trim($("#nivel13").val());
        cantidad14 = $.trim($("#nivel14").val());
        cantidad15 = $.trim($("#nivel15").val());
        console.log('Nombre de la receta: ', nombreReceta);
        console.log('ID de Empresa: ', idEmpresa);
        console.log('CAS 1: ', cas1);
        console.log('CAS 2: ', cas2);
        console.log('CAS 3: ', cas3);
        console.log('CAS 4: ', cas4);
        console.log('CAS 5: ', cas5);
        console.log('CAS 6: ', cas6);
        console.log('CAS 7: ', cas7);
        console.log('CAS 8: ', cas8);
        console.log('CAS 9: ', cas9);
        console.log('CAS 10: ', cas10);
        console.log('CAS 11: ', cas11);
        console.log('CAS 12: ', cas12);
        console.log('CAS 13: ', cas13);
        console.log('CAS 14: ', cas14);
        console.log('CAS 15: ', cas15);
        console.log('Cantidad 1: ', cantidad1);
        console.log('Cantidad 2: ', cantidad2);
        console.log('Cantidad 3: ', cantidad3);
        console.log('Cantidad 4: ', cantidad4);
        console.log('Cantidad 5: ', cantidad5);
        console.log('Cantidad 6: ', cantidad6);
        console.log('Cantidad 7: ', cantidad7);
        console.log('Cantidad 8: ', cantidad8);
        console.log('Cantidad 9: ', cantidad9);
        console.log('Cantidad 10: ', cantidad10);
        console.log('Cantidad 11: ', cantidad11);
        console.log('Cantidad 12: ', cantidad12);
        console.log('Cantidad 13: ', cantidad13);
        console.log('Cantidad 14: ', cantidad14);
        console.log('Cantidad 15: ', cantidad15);

        $.ajax({
            url: "bd/bdRecetas.php",
            type: "POST",
            dataType: "json",
            data: {
                opcion: opcion,
                idReceta: idReceta,
                nombreReceta: nombreReceta,
                idEmpresa: idEmpresa,
                cas1: cas1,
                cas2: cas2,
                cas3: cas3,
                cas4: cas4,
                cas5: cas5,
                cas6: cas6,
                cas7: cas7,
                cas8: cas8,
                cas9: cas9,
                cas10: cas10,
                cas11: cas11,
                cas12: cas12,
                cas13: cas13,
                cas14: cas14,
                cas15: cas15,
                cantidad1: cantidad1,
                cantidad2: cantidad2,
                cantidad3: cantidad3,
                cantidad4: cantidad4,
                cantidad5: cantidad5,
                cantidad6: cantidad6,
                cantidad7: cantidad7,
                cantidad8: cantidad8,
                cantidad9: cantidad9,
                cantidad10: cantidad10,
                cantidad11: cantidad11,
                cantidad12: cantidad12,
                cantidad13: cantidad13,
                cantidad14: cantidad14,
                cantidad15: cantidad15
            },
            success: function (data) {
                //Datos desde el Select de MySQL a la tabla.
                console.log(data);
                idReceta = data[0].idReceta;
                nombreReceta = data[0].nombreReceta;
                nombreEmpresa = data[0].nombreEmpresa;
                if (opcion == 1) {
                    tablaRecetas.row.add([idReceta, nombreReceta, nombreEmpresa]).draw();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'La Receta "' + nombreReceta + '" fue creada exitosamente',
                        showConfirmButton: false,
                        timer: 2000
                    })
                } else {
                    tablaRecetas.row(fila).data([idReceta, nombreReceta, nombreEmpresa]).draw();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'La Receta "' + nombreReceta + '" fue editada exitosamente.',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            },
            error: function (textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ocurrio un error! El producto ya existe o los datos son erróneos.',
                    footer: '<a href="">Why do I have this issue?</a>',
                    timer: 3000
                })
            }

        });
        $("#modalRecetas").modal("hide");
    });













});