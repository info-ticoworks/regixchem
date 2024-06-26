$(document).ready(function () {

    //Tabla Recetas
    tablaRecetas = $("#tablaRecetas").DataTable({
       "columnDefs":[{
        "targets": -1,
        "data":null,
        "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditarReceta'>Editar</button><button class='btn btn-danger btnBorrarReceta'>Borrar</button></div></div>"
       }],
       "createdRow": function(row, data, dataIndex) {
            if ( data[0] ) {
                $(row).addClass( 'text-center' );
            }
            if ( data[1] ) {
                $(row).addClass( 'text-center' );
            }
            if ( data[2] ) {
               $(row).addClass( 'text-center' );
           }
        },
     
    responsive: "true",
    order: [[1,'asc']],
    dom: 'Bfrtilp',       
    buttons:[
        {
            extend:    'copyHtml5',
            text:      '<i class="fas fa-copy"></i> ',
            titleAttr: 'Copiar tabla',
            className: 'btn btn-primary'
        },
        {
            extend:    'excelHtml5',
            text:      '<i class="fas fa-file-excel"></i> ',
            titleAttr: 'Exportar a Excel',
            className: 'btn btn-success'
        },
        {
            extend:    'pdfHtml5',
            text:      '<i class="fas fa-file-pdf"></i> ',
            titleAttr: 'Exportar a PDF',
            className: 'btn btn-danger'
        },
        {
            extend:    'print',
            text:      '<i class="fa fa-print"></i> ',
            titleAttr: 'Imprimir',
            className: 'btn btn-info'
        },
        {
            extend:    'csvHtml5',
            text:      '<i class="fa fa-file-csv"></i> ',
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
                "sLast":"Último",
                "sNext":"Siguiente",
                "sPrevious": "Anterior"
             },
             "sProcessing":"Procesando...",
        }
    });

    //Highlight de filas
    tablaRecetas.on('mouseenter', 'tr', function(){
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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
        order: [[0,'asc']], //Establece la columna que será el orden de los productos.
        
        
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

    $("#btnBuscarIngrediente1").click(function(){
        $("#formProductosReducida1").trigger("reset");
        $("#modalProductosReducida1").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente2").click(function(){
        $("#formProductosReducida2").trigger("reset");
        $("#modalProductosReducida2").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente3").click(function(){
        $("#formProductosReducida3").trigger("reset");
        $("#modalProductosReducida3").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente4").click(function(){
        $("#formProductosReducida4").trigger("reset");
        $("#modalProductosReducida4").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente5").click(function(){
        $("#formProductosReducida5").trigger("reset");
        $("#modalProductosReducida5").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente6").click(function(){
        $("#formProductosReducida6").trigger("reset");
        $("#modalProductosReducida6").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente7").click(function(){
        $("#formProductosReducida7").trigger("reset");
        $("#modalProductosReducida7").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente8").click(function(){
        $("#formProductosReducida8").trigger("reset");
        $("#modalProductosReducida8").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente9").click(function(){
        $("#formProductosReducida9").trigger("reset");
        $("#modalProductosReducida9").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente10").click(function(){
        $("#formProductosReducida10").trigger("reset");
        $("#modalProductosReducida10").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente11").click(function(){
        $("#formProductosReducida11").trigger("reset");
        $("#modalProductosReducida11").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente12").click(function(){
        $("#formProductosReducida12").trigger("reset");
        $("#modalProductosReducida12").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente13").click(function(){
        $("#formProductosReducida13").trigger("reset");
        $("#modalProductosReducida13").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente14").click(function(){
        $("#formProductosReducida14").trigger("reset");
        $("#modalProductosReducida14").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente15").click(function(){
        $("#formProductosReducida15").trigger("reset");
        $("#modalProductosReducida15").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    //Botón para escoger Producto 1
    $(document).on("click", ".btnEscogerProducto1", function () {
        fila1 = $(this).closest("tr");
        cas1 = fila1.find('td:eq(0)').text();
        nombreProducto1 = fila1.find('td:eq(1)').text();
        console.log('CAS1: ', cas1);
        console.log('CAS1: ', cas1);
        $("#nombreIngrediente1").val(cas1);
        $("#modalRecetas").modal({backdrop: 'static', keyboard: false}, 'show');
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
        cas1 = 'null'
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
        $('#modalRecetas').modal({backdrop: 'static', keyboard: false}, 'show');
        idUnidad1 = 'null';
        idUnidad2 = 'null';
        idUnidad3 = 'null';
        idUnidad4 = 'null';
        idUnidad5 = 'null';
        idUnidad6 = 'null';
        idUnidad7 = 'null';
        idUnidad8 = 'null';
        idUnidad9 = 'null';
        idUnidad10 = 'null';
        nombreFabricante1 = 'null';
        nombreFabricante2 = 'null';
        nombreFabricante3 = 'null';
        nombreFabricante4 = 'null';
        nombreFabricante5 = 'null';
        nombreFabricante6 = 'null';
        nombreFabricante7 = 'null';
        nombreFabricante8 = 'null';
        nombreFabricante9 = 'null';
        nombreFabricante10 = 'null';

        //Seteo de algunas opciones al presionar el botón de Nuevo

        document.getElementById('nombreReceta').placeholder = 'Campo Obligatorio *';
        document.getElementById('nombreIngrediente1').placeholder = 'Campo Obligatorio *';


        cas='null';
        opcion = 1; //Nuevo Producto


    });


    //Submit Productos
    $("#formRecetas").submit(function (e) {
        e.preventDefault();
        cas1 = 'null';
        cantidad1 = 'null';

        // idEmpresa = $SESSION_idEmpresa

        nombreReceta = $.trim($("#nombreReceta").val());
        cas1 = $.trim($("#nombreIngrediente1").val());
        cantidad1 = $.trim($("#nivel1").val());
        

        console.log('Nombre de la receta: ', nombreReceta);
        console.log('CAS 1: ', cas1);
        console.log('Cantidad 1: ', cantidad1);

        $.ajax({
            url: "bd/bdRecetas.php",
            type: "POST",
            dataType: "json",
            data: {
                opcion: opcion,
                // idEmpresa: idEmpresa,
                nombreReceta: nombreReceta,
                cas1: cas1,
                cantidad1: cantidad1
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