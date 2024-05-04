$(document).ready(function () {

    //tabla RECETAS
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

    tablaProductosReducida = $("#tablaProductosReducida").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerProducto' data-dismiss='modal'>Seleccionar</button></div></div>"
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

    //Highlight de filas Tabla Productos
    tablaProductosReducida.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductosReducida.row(this).selector.rows).addClass("dtSelected");
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

    $("#btnBuscarIngrediente").click(function(){
        $("#formProductosReducida").trigger("reset");
        $(".modal-header").css("background-color", "#1cc88a");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Escoger Producto");            
        $("#modalProductosReducida").modal({backdrop: 'static', keyboard: false}, 'show');
    });

    $(document).on("click", ".btnEscogerProducto", function () {
        fila = $(this).closest("tr");
        cas = fila.find('td:eq(0)').text();
        nombreProducto = fila.find('td:eq(1)').text();
        console.log('CAS: ', cas);
        
        // Swal.fire({
        //     title: 'Está seguro que desea escoger el producto "' + nombreProducto + '"?',
        //     showDenyButton: false,
        //     showCancelButton: true,
        //     confirmButtonText: 'Escoger',
        //     denyButtonText: `Cancelar`,
        // }).then((result) => {
        //     /* Read more about isConfirmed, isDenied below */
        //     if (result.isConfirmed) {
                console.log('CAS: ', cas);
                $("#nombreIngrediente1").val(cas);
        //     }
        // })
        // $("#modalRecetas").modal({backdrop: 'static', keyboard: false}, 'show');
        // $("#modalProductosReducida").modal("hide");
    });





















         

});