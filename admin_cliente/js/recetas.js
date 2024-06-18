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















    //Botón NUEVA RECETA
    $("#btnNuevaReceta").click(function(){
        $("#formRecetas").trigger("reset");
        $(".modal-header").css("background-color", "#1cc88a");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Nueva Receta");            
        $("#modalRecetas").modal({backdrop: 'static', keyboard: false}, 'show');
        //Seteo de algunas opciones al presionar el botón de Nuevo

        //id=null;
        opcion = 1; //alta
    });

    $("#btnBuscarIngrediente1").click(function(){
        $("#formProductosReducida1").trigger("reset");
        $("#modalProductosReducida1").modal({backdrop: 'static', keyboard: false}, 'show');
        //$('#modalRecetas').modal('hide');
    });

    $("#btnBuscarIngrediente2").click(function(){
        $("#formProductosReducida2").trigger("reset");
        $("#modalProductosReducida2").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $("#btnBuscarIngrediente3").click(function(){
        $("#formProductosReducida3").trigger("reset");
        $("#modalProductosReducida3").modal({backdrop: 'static', keyboard: false}, 'show');
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





















         

});