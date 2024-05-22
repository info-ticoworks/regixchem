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
    });

    $("#btnBuscarIngrediente2").click(function(){
        $("#formProductosReducida2").trigger("reset");
        $("#modalProductosReducida2").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $(document).on("click", ".btnEscogerProducto1", function () {
        fila1 = $(this).closest("tr");
        cas1 = fila1.find('td:eq(0)').text();
        nombreProducto1 = fila1.find('td:eq(1)').text();
        console.log('CAS1: ', cas1);
        console.log('CAS1: ', cas1);
        $("#nombreIngrediente1").val(cas1);
    });

    $(document).on("click", ".btnEscogerProducto2", function () {
        fila2 = $(this).closest("tr");
        cas2 = fila2.find('td:eq(0)').text();
        nombreProducto2 = fila2.find('td:eq(1)').text();
        console.log('CAS2: ', cas2);
        console.log('CAS2: ', cas2);
        $("#nombreIngrediente2").val(cas2);
    });





















         

});