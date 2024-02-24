
$(document).ready(function(){

    let lat;


    //tabla MARCAS
    tablaMarcas = $("#tablaMarcas").DataTable({
        "columnDefs":[{
         "targets": -1,
         "data":null,
         "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-success btnMarcasDetalles'>Detalles</button></div></div>"
        },
        {
            target: 0,
            visible: false,
        },
        {
            target: 7,
            visible: false,
        },
        {
            target: 8,
            visible: false,
        },
        {
            target: 9,
            visible: false,
        }],
    
     responsive: "true",
     order: [[0,'desc']],
     dom: 'Bfrtilp',       
     buttons:[
         {
             extend:    'excelHtml5',
             text:      '<i class="fas fa-file-excel"></i> ',
             titleAttr: 'Exportar a Excel',
             className: 'btn btn-success'
         },
         {
             extend:    'print',
             text:      '<i class="fa fa-print"></i> ',
             titleAttr: 'Imprimir',
             className: 'btn btn-info'
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

    //Highlight de filas Tabla de Marcas
    tablaMarcas.on('mouseenter', 'tr', function(){
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductos.row(this).selector.rows).addClass("dtSelected");
    });

    //botón DETALLE DE MARCAS
    $(document).on("click", ".btnMarcasDetalles", function(){
        fila = $(this).closest("tr");
        id = parseInt(fila.find('td:eq(0)').text());
        idMarca = parseInt(tablaMarcas.cell(fila,0).data());
        ubicacion = tablaMarcas.cell(fila,7).data();
        if (tablaMarcas.cell(fila,8).data()) {
            lati = parseFloat(tablaMarcas.cell(fila,8).data());
        } else {
            lati = 0;
        }
        lngi = parseFloat(tablaMarcas.cell(fila,9).data());
        nombre = fila.find('td:eq(1)').text();
        apellido1 = fila.find('td:eq(2)').text();
        apellido2 = fila.find('td:eq(3)').text();
        fecha = fila.find('td:eq(4)').text();
        hora = fila.find('td:eq(5)').text();
        tipoMarca = fila.find('td:eq(6)').text();
        lugarTrabajo = tablaMarcas.cell(fila,11).data();

        //Seteo de algunas opciones al presionar el botón de Editar
        document.getElementById('newid').innerHTML = id;
        document.getElementById('nombre').innerHTML = nombre;
        document.getElementById('apellido1').innerHTML = apellido1;
        document.getElementById('apellido2').innerHTML = apellido2;
        document.getElementById('fecha').innerHTML = fecha;
        document.getElementById('hora').innerHTML = hora;
        document.getElementById('tipoMarca').innerHTML = tipoMarca;
        document.getElementById('lugarTrabajo').innerHTML = lugarTrabajo;
        document.getElementById('noMap').innerHTML = 'Esta marca no registra ninguna ubicación.';
        //$("#newid").val(id);
        //$("#nombre").val(nombre);
        //$("#apellido1").val(apellido1);
        // $("#apellido2").val(apellido2);
        // $("#fecha").val(fecha);
        // $("#hora").val(hora);
        $("#ubicacion").val(ubicacion);
        $("#lat").val(lati);
        $("#lng").val(lngi);
        $(".modal-header").css("background-color", "#4e73df");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Detalles de marca.");            
        $("#modalMarcas").modal("show");
        console.log("Edición de Usuario - Paso 1...");
    });

    let map;

    async function initMap() {
        // Current Location
        const current_location = { lat: lati, lng: lngi };
        //@ts-ignore
        const { Map } = await google.maps.importLibrary("maps");
        map = new Map(document.getElementById("map"), {
            center: current_location,
            zoom: 16,
        });
        // The marker, positioned at current location
        const marker = new google.maps.Marker({
            position: current_location,
            map: map,
        });
    }

    //Autofocus al presionar el botón Nuevo
    $('#modalCRUD').on('shown.bs.modal', function() {
        // get the locator for an input in your modal. Here I'm focusing on
        // the element with the id of myInput
        $('#newid').focus()
    });

        //Autofocus al presionar el botón Nuevo
    $('#modalMarcas').on('shown.bs.modal', function() {
        console.log(lati);
        if (lati === 0) {
            document.getElementById("map").hidden = true;
            document.getElementById("noMap").hidden = false;
        } else {
            document.getElementById("map").hidden = false;
            document.getElementById("noMap").hidden = true;
            initMap();
        }
    });
    

});