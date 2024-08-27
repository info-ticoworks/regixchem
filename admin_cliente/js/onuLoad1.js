//Tabla ONU 1
tablaONU1 = $("#tablaONU1").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button type='submit' class='btn btn-primary btnEscogerOnu1' data-dismiss='modal'>Seleccionar</button></div></div>"
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

//Highlight de filas ONU 1
tablaONU1.on('mouseenter', 'tr', function () {
    $(document).find('tr').removeClass("dtSelected");
    $(tablaONU1.row(this).selector.rows).addClass("dtSelected");
});

//Fix de Scroll en Modal ONU 1
$('#modalONU1').on('hidden.bs.modal', function (e) {
    $('body').addClass('modal-open');
});