$(document).ready(function(){

    let lat;

    //Funciones para ocultar clases

    function hideClase1(){
    $('#btnClase1').hide();
    $('#btnEliminarClase1').hide();
    $('#nombreClase1').prop('selectedIndex', 0);
    $('#nombreClase1').prop('disabled', 'disabled');
    $('#nombreClase1').removeAttr('required');
    $('#nombreCategoria1').prop('selectedIndex', 0);
    $('#nombreCategoria1').prop('disabled', 'disabled');
    $('#nombreCategoria1').removeAttr('required');
    $('#nombrePalabraAdvertencia1').prop('selectedIndex', 0);
    $('#nombrePalabraAdvertencia1').prop('disabled', 'disabled');
    $('#nombrePalabraAdvertencia1').removeAttr('required');
    $('#nombreIndicacion1').prop('selectedIndex', 0);
    $('#nombreIndicacion1').prop('disabled', 'disabled');
    $('#nombreIndicacion1').removeAttr('required');
    $('#clase1').hide();
    $idPictograma1 = 0;
    }
    function hideClase2(){
    $('#btnClase2').hide();
    $('#btnEliminarClase2').hide();
    $('#nombreClase2').prop('selectedIndex', 0);
    $('#nombreClase2').prop('disabled', 'disabled');
    $('#nombreClase2').removeAttr('required');
    $('#nombreCategoria2').prop('selectedIndex', 0);
    $('#nombreCategoria2').prop('disabled', 'disabled');
    $('#nombreCategoria2').removeAttr('required');
    $('#nombrePalabraAdvertencia2').prop('selectedIndex', 0);
    $('#nombrePalabraAdvertencia2').prop('disabled', 'disabled');
    $('#nombrePalabraAdvertencia2').removeAttr('required');
    $('#nombreIndicacion2').prop('selectedIndex', 0);
    $('#nombreIndicacion2').prop('disabled', 'disabled');
    $('#nombreIndicacion2').removeAttr('required');
    $('#clase2').hide();
    $idPictograma2 = 0;
    }
    function hideClase3(){
    $('#btnClase3').hide();
    $('#btnEliminarClase3').hide();
    $('#nombreClase3').prop('selectedIndex', 0);
    $('#nombreClase3').prop('disabled', 'disabled');
    $('#nombreClase3').removeAttr('required');
    $('#nombreCategoria3').prop('selectedIndex', 0);
    $('#nombreCategoria3').prop('disabled', 'disabled');
    $('#nombreCategoria3').removeAttr('required');
    $('#nombrePalabraAdvertencia3').prop('selectedIndex', 0);
    $('#nombrePalabraAdvertencia3').prop('disabled', 'disabled');
    $('#nombrePalabraAdvertencia3').removeAttr('required');
    $('#nombreIndicacion3').prop('selectedIndex', 0);
    $('#nombreIndicacion3').prop('disabled', 'disabled');
    $('#nombreIndicacion3').removeAttr('required');
    $('#clase3').hide();
    $idPictograma3 = 0;
    }
    function hideClase4(){
    $('#btnClase4').hide();
    $('#btnEliminarClase4').hide();
    $('#nombreClase4').prop('selectedIndex', 0);
    $('#nombreClase4').prop('disabled', 'disabled');
    $('#nombreClase4').removeAttr('required');
    $('#nombreCategoria4').prop('selectedIndex', 0);
    $('#nombreCategoria4').prop('disabled', 'disabled');
    $('#nombreCategoria4').removeAttr('required');
    $('#nombrePalabraAdvertencia4').prop('selectedIndex', 0);
    $('#nombrePalabraAdvertencia4').prop('disabled', 'disabled');
    $('#nombrePalabraAdvertencia4').removeAttr('required');
    $('#nombreIndicacion4').prop('selectedIndex', 0);
    $('#nombreIndicacion4').prop('disabled', 'disabled');
    $('#nombreIndicacion4').removeAttr('required');
    $('#clase4').hide();
    $idPictograma4 = 0;
    }
    function hideClase5(){
    $('#btnClase5').hide();
    $('#btnEliminarClase5').hide();
    $('#nombreClase5').prop('selectedIndex', 0);
    $('#nombreClase5').prop('disabled', 'disabled');
    $('#nombreClase5').removeAttr('required');
    $('#nombreCategoria5').prop('selectedIndex', 0);
    $('#nombreCategoria5').prop('disabled', 'disabled');
    $('#nombreCategoria5').removeAttr('required');
    $('#nombrePalabraAdvertencia5').prop('selectedIndex', 0);
    $('#nombrePalabraAdvertencia5').prop('disabled', 'disabled');
    $('#nombrePalabraAdvertencia5').removeAttr('required');
    $('#nombreIndicacion5').prop('selectedIndex', 0);
    $('#nombreIndicacion5').prop('disabled', 'disabled');
    $('#nombreIndicacion5').removeAttr('required');
    $('#clase5').hide();
    $idPictograma5 = 0;
    }
    function hideClase6(){
    $('#btnClase6').hide();
    $('#btnEliminarClase6').hide();
    $('#nombreClase6').prop('selectedIndex', 0);
    $('#nombreClase6').prop('disabled', 'disabled');
    $('#nombreClase6').removeAttr('required');
    $('#nombreCategoria6').prop('selectedIndex', 0);
    $('#nombreCategoria6').prop('disabled', 'disabled');
    $('#nombreCategoria6').removeAttr('required');
    $('#nombrePalabraAdvertencia6').prop('selectedIndex', 0);
    $('#nombrePalabraAdvertencia6').prop('disabled', 'disabled');
    $('#nombrePalabraAdvertencia6').removeAttr('required');
    $('#nombreIndicacion6').prop('selectedIndex', 0);
    $('#nombreIndicacion6').prop('disabled', 'disabled');
    $('#nombreIndicacion6').removeAttr('required');
    $('#clase6').hide();
    $idPictograma6 = 0;
    }
    function hideClase7(){
    $('#btnClase7').hide();
    $('#btnEliminarClase7').hide();
    $('#nombreClase7').prop('selectedIndex', 0);
    $('#nombreClase7').prop('disabled', 'disabled');
    $('#nombreClase7').removeAttr('required');
    $('#nombreCategoria7').prop('selectedIndex', 0);
    $('#nombreCategoria7').prop('disabled', 'disabled');
    $('#nombreCategoria7').removeAttr('required');
    $('#nombrePalabraAdvertencia7').prop('selectedIndex', 0);
    $('#nombrePalabraAdvertencia7').prop('disabled', 'disabled');
    $('#nombrePalabraAdvertencia7').removeAttr('required');
    $('#nombreIndicacion7').prop('selectedIndex', 0);
    $('#nombreIndicacion7').prop('disabled', 'disabled');
    $('#nombreIndicacion7').removeAttr('required');
    $('#clase7').hide();
    $idPictograma7 = 0;
    }
    function hideClase8(){
    $('#btnClase8').hide();
    $('#btnEliminarClase8').hide();
    $('#nombreClase8').prop('selectedIndex', 0);
    $('#nombreClase8').prop('disabled', 'disabled');
    $('#nombreClase8').removeAttr('required');
    $('#nombreCategoria8').prop('selectedIndex', 0);
    $('#nombreCategoria8').prop('disabled', 'disabled');
    $('#nombreCategoria8').removeAttr('required');
    $('#nombrePalabraAdvertencia8').prop('selectedIndex', 0);
    $('#nombrePalabraAdvertencia8').prop('disabled', 'disabled');
    $('#nombrePalabraAdvertencia8').removeAttr('required');
    $('#nombreIndicacion8').prop('selectedIndex', 0);
    $('#nombreIndicacion8').prop('disabled', 'disabled');
    $('#nombreIndicacion8').removeAttr('required');
    $('#clase8').hide();
    $idPictograma8 = 0;
    }
    function hideClase9(){
    $('#btnClase9').hide();
    $('#btnEliminarClase9').hide();
    $('#nombreClase9').prop('selectedIndex', 0);
    $('#nombreClase9').prop('disabled', 'disabled');
    $('#nombreClase9').removeAttr('required');
    $('#nombreCategoria9').prop('selectedIndex', 0);
    $('#nombreCategoria9').prop('disabled', 'disabled');
    $('#nombreCategoria9').removeAttr('required');
    $('#nombrePalabraAdvertencia9').prop('selectedIndex', 0);
    $('#nombrePalabraAdvertencia9').prop('disabled', 'disabled');
    $('#nombrePalabraAdvertencia9').removeAttr('required');
    $('#nombreIndicacion9').prop('selectedIndex', 0);
    $('#nombreIndicacion9').prop('disabled', 'disabled');
    $('#nombreIndicacion9').removeAttr('required');
    $('#clase9').hide();
    $idPictograma9 = 0;
    }
    function hideClase10(){
    $('#btnClase10').hide();
    $('#btnEliminarClase10').hide();
    $('#nombreClase10').prop('selectedIndex', 0);
    $('#nombreClase10').prop('disabled', 'disabled');
    $('#nombreClase10').removeAttr('required');
    $('#nombreCategoria10').prop('selectedIndex', 0);
    $('#nombreCategoria10').prop('disabled', 'disabled');
    $('#nombreCategoria10').removeAttr('required');
    $('#nombrePalabraAdvertencia10').prop('selectedIndex', 0);
    $('#nombrePalabraAdvertencia10').prop('disabled', 'disabled');
    $('#nombrePalabraAdvertencia10').removeAttr('required');
    $('#nombreIndicacion10').prop('selectedIndex', 0);
    $('#nombreIndicacion10').prop('disabled', 'disabled');
    $('#nombreIndicacion10').removeAttr('required');
    $('#clase10').hide();
    $idPictograma10 = 0;
    }
    function hideClases(){
    hideClase1();
    hideClase2();
    hideClase3();
    hideClase4();
    hideClase5();
    hideClase6();
    hideClase7();
    hideClase8();
    hideClase9();
    hideClase10();
    }

    //Tabla Productos
    tablaProductos = $("#tablaProductos").DataTable({
       "columnDefs":[{
        "targets": -1,
        "data":null,
        "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditar'>Editar</button><button class='btn btn-danger btnBorrar'>Borrar</button></div></div>"
       }],
    //    "createdRow": function(row, data, dataIndex) {
    //         if ( data[0] ) {
    //             $(row).addClass( 'text-center' );
    //         }
    //     },
    responsive: "true",
    //order: [[0,'asc']], //Establece la columna que será el orden de los productos.
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

    //Highlight de filas Tabla Productos
    tablaProductos.on('mouseenter', 'tr', function(){
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductos.row(this).selector.rows).addClass("dtSelected");
    });

    //Botón Nuevo Producto
    $("#btnNuevo").click(function(){
        hideClases();
        $("#formProductos").trigger("reset");
        $("#clases").trigger("reset");
        $("#modalCRUD").trigger("reset");
        $(".modal-header").css("background-color", "#1cc88a");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Nuevo Producto");            
        $("#modalCRUD").modal("show");
        $('#btnClase1').show();
        idPictograma1 = 0;
        idPictograma2 = 0;
        idPictograma3 = 0;
        idPictograma4 = 0;
        idPictograma5 = 0;
        idPictograma6 = 0;
        idPictograma7 = 0;
        idPictograma8 = 0;
        idPictograma9 = 0;
        idPictograma10 = 0;

        //Inicio Funciones de los botones para agregar Clases

        function btnClase1(){
            $('#clase1').show();
            $('#btnClase1').hide();
            $('#btnEliminarClase1').show();
            $('#nombreClase1').prop('selectedIndex', 0);
            $('#nombreClase1 option').removeAttr("selected");
            $('#nombreClase1').removeAttr('selected');
            $('#nombreClase1').removeAttr('disabled');
            $("#nombreClase1").attr("required","required");
            $('#nombreCategoria1').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia1').prop('selectedIndex', 0);
            $('#nombreIndicacion1').prop('selectedIndex', 0);
            $('#btnClase2').show();
            $('#modalCRUD').animate({scrollTop:500}, 'slow');
        }

        function btnClase2(){
            $('#btnEliminarClase1').hide();
            $('#clase2').show();
            $('#btnClase2').hide();
            $('#btnEliminarClase2').show();
            $('#nombreClase2').prop('selectedIndex', 0);
            $('#nombreClase2 option').removeAttr("selected");
            $('#nombreClase2').removeAttr('selected');
            $('#nombreClase2').removeAttr('disabled');
            $("#nombreClase2").attr("required","required");
            $('#nombreCategoria2').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia2').prop('selectedIndex', 0);
            $('#nombreIndicacion2').prop('selectedIndex', 0);
            $('#btnClase3').show();
            $('#modalCRUD').animate({scrollTop:1000}, 'slow');
        }

        function btnClase3(){
            $('#btnEliminarClase2').hide();
            $('#clase3').show();
            $('#btnClase3').hide();
            $('#btnEliminarClase3').show();
            $('#nombreClase3').prop('selectedIndex', 0);
            $('#nombreClase3 option').removeAttr("selected");
            $('#nombreClase3').removeAttr('selected');
            $('#nombreClase3').removeAttr('disabled');
            $("#nombreClase3").attr("required","required");
            $('#nombreCategoria3').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia3').prop('selectedIndex', 0);
            $('#nombreIndicacion3').prop('selectedIndex', 0);
            $('#btnClase4').show();
            $('#modalCRUD').animate({scrollTop:1500}, 'slow');
        }

        function btnClase4(){
            $('#btnEliminarClase3').hide();
            $('#clase4').show();
            $('#btnClase4').hide();
            $('#btnEliminarClase4').show();
            $('#nombreClase4').prop('selectedIndex', 0);
            $('#nombreClase4 option').removeAttr("selected");
            $('#nombreClase4').removeAttr('selected');
            $('#nombreClase4').removeAttr('disabled');
            $("#nombreClase4").attr("required","required");
            $('#nombreCategoria4').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia4').prop('selectedIndex', 0);
            $('#nombreIndicacion4').prop('selectedIndex', 0);
            $('#btnClase5').show();
            $('#modalCRUD').animate({scrollTop:2000}, 'slow');
        }

        function btnClase5(){
            $('#btnEliminarClase4').hide();
            $('#clase5').show();
            $('#btnClase5').hide();
            $('#btnEliminarClase5').show();
            $('#nombreClase5').prop('selectedIndex', 0);
            $('#nombreClase5 option').removeAttr("selected");
            $('#nombreClase5').removeAttr('selected');
            $('#nombreClase5').removeAttr('disabled');
            $("#nombreClase5").attr("required","required");
            $('#nombreCategoria5').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia5').prop('selectedIndex', 0);
            $('#nombreIndicacion5').prop('selectedIndex', 0);
            $('#btnClase6').show();
            $('#modalCRUD').animate({scrollTop:2500}, 'slow');
        }

        function btnClase6(){
            $('#btnEliminarClase5').hide();
            $('#clase6').show();
            $('#btnClase6').hide();
            $('#btnEliminarClase6').show();
            $('#nombreClase6').prop('selectedIndex', 0);
            $('#nombreClase6 option').removeAttr("selected");
            $('#nombreClase6').removeAttr('selected');
            $('#nombreClase6').removeAttr('disabled');
            $("#nombreClase6").attr("required","required");
            $('#nombreCategoria6').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia6').prop('selectedIndex', 0);
            $('#nombreIndicacion6').prop('selectedIndex', 0);
            $('#btnClase7').show();
            $('#modalCRUD').animate({scrollTop:3000}, 'slow');
        }

        function btnClase7(){
            $('#btnEliminarClase6').hide();
            $('#clase7').show();
            $('#btnClase7').hide();
            $('#btnEliminarClase7').show();
            $('#nombreClase7').prop('selectedIndex', 0);
            $('#nombreClase7 option').removeAttr("selected");
            $('#nombreClase7').removeAttr('selected');
            $('#nombreClase7').removeAttr('disabled');
            $("#nombreClase7").attr("required","required");
            $('#nombreCategoria7').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia7').prop('selectedIndex', 0);
            $('#nombreIndicacion7').prop('selectedIndex', 0);
            $('#btnClase8').show();
            $('#modalCRUD').animate({scrollTop:3500}, 'slow');
        }

        function btnClase8(){
            $('#btnEliminarClase7').hide();
            $('#clase8').show();
            $('#btnClase8').hide();
            $('#btnEliminarClase8').show();
            $('#nombreClase8').prop('selectedIndex', 0);
            $('#nombreClase8 option').removeAttr("selected");
            $('#nombreClase8').removeAttr('selected');
            $('#nombreClase8').removeAttr('disabled');
            $("#nombreClase8").attr("required","required");
            $('#nombreCategoria8').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia8').prop('selectedIndex', 0);
            $('#nombreIndicacion8').prop('selectedIndex', 0);
            $('#btnClase9').show();
            $('#modalCRUD').animate({scrollTop:4000}, 'slow');
        }

        function btnClase9(){
            $('#btnEliminarClase8').hide();
            $('#clase9').show();
            $('#btnClase9').hide();
            $('#btnEliminarClase9').show();
            $('#nombreClase9').prop('selectedIndex', 0);
            $('#nombreClase9 option').removeAttr("selected");
            $('#nombreClase9').removeAttr('selected');
            $('#nombreClase9').removeAttr('disabled');
            $("#nombreClase9").attr("required","required");
            $('#nombreCategoria9').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia9').prop('selectedIndex', 0);
            $('#nombreIndicacion9').prop('selectedIndex', 0);
            $('#btnClase10').show();
            $('#modalCRUD').animate({scrollTop:4500}, 'slow');
        }

        function btnClase10(){
            $('#btnEliminarClase9').hide();
            $('#clase10').show();
            $('#btnClase10').hide();
            $('#btnEliminarClase10').show();
            $('#nombreClase10').prop('selectedIndex', 0);
            $('#nombreClase10 option').removeAttr("selected");
            $('#nombreClase10').removeAttr('selected');
            $('#nombreClase10').removeAttr('disabled');
            $("#nombreClase10").attr("required","required");
            $('#nombreCategoria10').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia10').prop('selectedIndex', 0);
            $('#nombreIndicacion10').prop('selectedIndex', 0);
            $('#modalCRUD').animate({scrollTop:5000}, 'slow');
        }

        $('#btnClase1').on('click', function() {
            btnClase1();
        });

        $('#btnClase2').on('click', function() {
            btnClase2();
        });

        $('#btnClase3').on('click', function() {
            btnClase3();
        });

        $('#btnClase4').on('click', function() {
            btnClase4();
        });

        $('#btnClase5').on('click', function() {
            btnClase5();
        });

        $('#btnClase6').on('click', function() {
            btnClase6();
        });

        $('#btnClase7').on('click', function() {
            btnClase7();
        });

        $('#btnClase8').on('click', function() {
            btnClase8();
        });

        $('#btnClase9').on('click', function() {
            btnClase9();
        });

        $('#btnClase10').on('click', function() {
            btnClase10();
        });

        //Final Funciones de los botones para agregar Clases

        //Inicio Funciones de los botones para eliminar Clases

        //Funciones

        function btnEliminarClase1(){
            $('#btnClase1').fadeIn(1000);
            $('#btnEliminarClase1').hide();
            $('#nombreClase1').prop('selectedIndex', 0);
            $('#nombreClase1').prop('disabled', 'disabled');
            $('#nombreClase1').removeAttr('required');
            $('#nombreCategoria1').prop('selectedIndex', 0);
            $('#nombreCategoria1').prop('disabled', 'disabled');
            $('#nombreCategoria1').removeAttr('required');
            $('#nombrePalabraAdvertencia1').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia1').prop('disabled', 'disabled');
            $('#nombrePalabraAdvertencia1').removeAttr('required');
            $('#nombreIndicacion1').prop('selectedIndex', 0);
            $('#nombreIndicacion1').prop('disabled', 'disabled');
            $('#nombreIndicacion1').removeAttr('required');
            $('#clase1').slideUp(600);
            $('#btnClase2').slideUp(500);
            $idPictograma1 = 0;
        }

        function btnEliminarClase2(){
            $('#btnEliminarClase1').show();
            $('#btnClase2').fadeIn(1000);
            $('#btnEliminarClase2').hide();
            $('#nombreClase2').prop('selectedIndex', 0);
            $('#nombreClase2').prop('disabled', 'disabled');
            $('#nombreClase2').removeAttr('required');
            $('#nombreCategoria2').prop('selectedIndex', 0);
            $('#nombreCategoria2').prop('disabled', 'disabled');
            $('#nombreCategoria2').removeAttr('required');
            $('#nombrePalabraAdvertencia2').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia2').prop('disabled', 'disabled');
            $('#nombrePalabraAdvertencia2').removeAttr('required');
            $('#nombreIndicacion2').prop('selectedIndex', 0);
            $('#nombreIndicacion2').prop('disabled', 'disabled');
            $('#nombreIndicacion2').removeAttr('required');
            $('#clase2').slideUp(600);
            $('#btnClase3').slideUp(500);
            $idPictograma2 = 0;
        }

        function btnEliminarClase3(){
            $('#btnEliminarClase2').show();
            $('#btnClase3').fadeIn(1000);
            $('#btnEliminarClase3').hide();
            $('#nombreClase3').prop('selectedIndex', 0);
            $('#nombreClase3').prop('disabled', 'disabled');
            $('#nombreClase3').removeAttr('required');
            $('#nombreCategoria3').prop('selectedIndex', 0);
            $('#nombreCategoria3').prop('disabled', 'disabled');
            $('#nombreCategoria3').removeAttr('required');
            $('#nombrePalabraAdvertencia3').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia3').prop('disabled', 'disabled');
            $('#nombrePalabraAdvertencia3').removeAttr('required');
            $('#nombreIndicacion3').prop('selectedIndex', 0);
            $('#nombreIndicacion3').prop('disabled', 'disabled');
            $('#nombreIndicacion3').removeAttr('required');
            $('#clase3').slideUp(600);
            $('#btnClase4').slideUp(500);
            $idPictograma3 = 0;
        }

        function btnEliminarClase4(){
            $('#btnEliminarClase3').show();
            $('#btnClase4').fadeIn(1000);
            $('#btnEliminarClase4').hide();
            $('#nombreClase4').prop('selectedIndex', 0);
            $('#nombreClase4').prop('disabled', 'disabled');
            $('#nombreClase4').removeAttr('required');
            $('#nombreCategoria4').prop('selectedIndex', 0);
            $('#nombreCategoria4').prop('disabled', 'disabled');
            $('#nombreCategoria4').removeAttr('required');
            $('#nombrePalabraAdvertencia4').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia4').prop('disabled', 'disabled');
            $('#nombrePalabraAdvertencia4').removeAttr('required');
            $('#nombreIndicacion4').prop('selectedIndex', 0);
            $('#nombreIndicacion4').prop('disabled', 'disabled');
            $('#nombreIndicacion4').removeAttr('required');
            $('#clase4').slideUp(600);
            $('#btnClase5').slideUp(500);
            $idPictograma4 = 0;
        }

        function btnEliminarClase5(){
            $('#btnEliminarClase4').show();
            $('#btnClase5').fadeIn(1000);
            $('#btnEliminarClase5').hide();
            $('#nombreClase5').prop('selectedIndex', 0);
            $('#nombreClase5').prop('disabled', 'disabled');
            $('#nombreClase5').removeAttr('required');
            $('#nombreCategoria5').prop('selectedIndex', 0);
            $('#nombreCategoria5').prop('disabled', 'disabled');
            $('#nombreCategoria5').removeAttr('required');
            $('#nombrePalabraAdvertencia5').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia5').prop('disabled', 'disabled');
            $('#nombrePalabraAdvertencia5').removeAttr('required');
            $('#nombreIndicacion5').prop('selectedIndex', 0);
            $('#nombreIndicacion5').prop('disabled', 'disabled');
            $('#nombreIndicacion5').removeAttr('required');
            $('#clase5').slideUp(600);
            $('#btnClase6').slideUp(600);
            $idPictograma5 = 0;
        }

        function btnEliminarClase6(){
            $('#btnEliminarClase5').show();
            $('#btnClase6').fadeIn(1000);
            $('#btnEliminarClase6').hide();
            $('#nombreClase6').prop('selectedIndex', 0);
            $('#nombreClase6').prop('disabled', 'disabled');
            $('#nombreClase6').removeAttr('required');
            $('#nombreCategoria6').prop('selectedIndex', 0);
            $('#nombreCategoria6').prop('disabled', 'disabled');
            $('#nombreCategoria6').removeAttr('required');
            $('#nombrePalabraAdvertencia6').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia6').prop('disabled', 'disabled');
            $('#nombrePalabraAdvertencia6').removeAttr('required');
            $('#nombreIndicacion6').prop('selectedIndex', 0);
            $('#nombreIndicacion6').prop('disabled', 'disabled');
            $('#nombreIndicacion6').removeAttr('required');
            $('#clase6').slideUp(700);
            $('#btnClase7').slideUp(700);
            $idPictograma6 = 0;
        }

        function btnEliminarClase7(){
            $('#btnEliminarClase6').show();
            $('#btnClase7').fadeIn(1000);
            $('#btnEliminarClase7').hide();
            $('#nombreClase7').prop('selectedIndex', 0);
            $('#nombreClase7').prop('disabled', 'disabled');
            $('#nombreClase7').removeAttr('required');
            $('#nombreCategoria7').prop('selectedIndex', 0);
            $('#nombreCategoria7').prop('disabled', 'disabled');
            $('#nombreCategoria7').removeAttr('required');
            $('#nombrePalabraAdvertencia7').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia7').prop('disabled', 'disabled');
            $('#nombrePalabraAdvertencia7').removeAttr('required');
            $('#nombreIndicacion7').prop('selectedIndex', 0);
            $('#nombreIndicacion7').prop('disabled', 'disabled');
            $('#nombreIndicacion7').removeAttr('required');
            $('#clase7').slideUp(800);
            $('#btnClase8').slideUp(800);
            $idPictograma7 = 0;
        }

        function btnEliminarClase8(){
            $('#btnEliminarClase7').show();
            $('#btnClase8').fadeIn(1000);
            $('#btnEliminarClase8').hide();
            $('#nombreClase8').prop('selectedIndex', 0);
            $('#nombreClase8').prop('disabled', 'disabled');
            $('#nombreClase8').removeAttr('required');
            $('#nombreCategoria8').prop('selectedIndex', 0);
            $('#nombreCategoria8').prop('disabled', 'disabled');
            $('#nombreCategoria8').removeAttr('required');
            $('#nombrePalabraAdvertencia8').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia8').prop('disabled', 'disabled');
            $('#nombrePalabraAdvertencia8').removeAttr('required');
            $('#nombreIndicacion8').prop('selectedIndex', 0);
            $('#nombreIndicacion8').prop('disabled', 'disabled');
            $('#nombreIndicacion8').removeAttr('required');
            $('#clase8').slideUp(900);
            $('#btnClase9').slideUp(900);
            $idPictograma8 = 0;
        }

        function btnEliminarClase9(){
            $('#btnEliminarClase8').show();
            $('#btnClase9').fadeIn(1000);
            $('#btnEliminarClase9').hide();
            $('#nombreClase9').prop('selectedIndex', 0);
            $('#nombreClase9').prop('disabled', 'disabled');
            $('#nombreClase9').removeAttr('required');
            $('#nombreCategoria9').prop('selectedIndex', 0);
            $('#nombreCategoria9').prop('disabled', 'disabled');
            $('#nombreCategoria9').removeAttr('required');
            $('#nombrePalabraAdvertencia9').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia9').prop('disabled', 'disabled');
            $('#nombrePalabraAdvertencia9').removeAttr('required');
            $('#nombreIndicacion9').prop('selectedIndex', 0);
            $('#nombreIndicacion9').prop('disabled', 'disabled');
            $('#nombreIndicacion9').removeAttr('required');
            $('#clase9').slideUp(900);
            $('#btnClase10').slideUp(900);
            $idPictograma9 = 0;
        }

        function btnEliminarClase10(){
            $('#btnEliminarClase9').show();
            $('#btnClase10').fadeIn(1000);
            $('#btnEliminarClase10').hide();
            $('#nombreClase10').prop('selectedIndex', 0);
            $('#nombreClase10').prop('disabled', 'disabled');
            $('#nombreClase10').removeAttr('required');
            $('#nombreCategoria10').prop('selectedIndex', 0);
            $('#nombreCategoria10').prop('disabled', 'disabled');
            $('#nombreCategoria10').removeAttr('required');
            $('#nombrePalabraAdvertencia10').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia10').prop('disabled', 'disabled');
            $('#nombrePalabraAdvertencia10').removeAttr('required');
            $('#nombreIndicacion10').prop('selectedIndex', 0);
            $('#nombreIndicacion10').prop('disabled', 'disabled');
            $('#nombreIndicacion10').removeAttr('required');
            $('#clase10').slideUp(900);
            $idPictograma10 = 0;
        }

        function eliminarClases(){
            btnEliminarClase1();
            btnEliminarClase2();
            btnEliminarClase3();
            btnEliminarClase4();
            btnEliminarClase5();
            btnEliminarClase6();
            btnEliminarClase7();
            btnEliminarClase8();
            btnEliminarClase9();
            btnEliminarClase10();
        }

        //Botones

        $('#btnEliminarClase1').on('click', function() {
            btnEliminarClase1();
        });

        $('#btnEliminarClase2').on('click', function() {
            btnEliminarClase2();
        });

        $('#btnEliminarClase3').on('click', function() {
            btnEliminarClase3();
        });

        $('#btnEliminarClase4').on('click', function() {
            btnEliminarClase4();
        });

        $('#btnEliminarClase5').on('click', function() {
            btnEliminarClase5();
        });

        $('#btnEliminarClase6').on('click', function() {
            btnEliminarClase6();
        });

        $('#btnEliminarClase7').on('click', function() {
            btnEliminarClase7();
        });

        $('#btnEliminarClase8').on('click', function() {
            btnEliminarClase8();
        });

        $('#btnEliminarClase9').on('click', function() {
            btnEliminarClase9();
        });

        $('#btnEliminarClase10').on('click', function() {
            btnEliminarClase10();
        });

        //Final Funciones de los botones para eliminar Clases


        //Inicio Funciones de carga de Select

        //Carga de Categorías

        function cargarCategoria1(){
            $.ajax({
                type:"POST",
                url:"bd/cat.php",
                data:"cat=" + $('#nombreClase1').val(),
                success:function(r){
                    $('#nombreCategoria1').html(r);
                }
            });
        }

        function cargarCategoria2(){
            $.ajax({
                type:"POST",
                url:"bd/cat.php",
                data:"cat=" + $('#nombreClase2').val(),
                success:function(r){
                    $('#nombreCategoria2').html(r);
                }
            });
        }

        function cargarCategoria3(){
            $.ajax({
                type:"POST",
                url:"bd/cat.php",
                data:"cat=" + $('#nombreClase3').val(),
                success:function(r){
                    $('#nombreCategoria3').html(r);
                }
            });
        }

        function cargarCategoria4(){
            $.ajax({
                type:"POST",
                url:"bd/cat.php",
                data:"cat=" + $('#nombreClase4').val(),
                success:function(r){
                    $('#nombreCategoria4').html(r);
                }
            });
        }

        function cargarCategoria5(){
            $.ajax({
                type:"POST",
                url:"bd/cat.php",
                data:"cat=" + $('#nombreClase5').val(),
                success:function(r){
                    $('#nombreCategoria5').html(r);
                }
            });
        }

        function cargarCategoria6(){
            $.ajax({
                type:"POST",
                url:"bd/cat.php",
                data:"cat=" + $('#nombreClase6').val(),
                success:function(r){
                    $('#nombreCategoria6').html(r);
                }
            });
        }

        function cargarCategoria7(){
            $.ajax({
                type:"POST",
                url:"bd/cat.php",
                data:"cat=" + $('#nombreClase7').val(),
                success:function(r){
                    $('#nombreCategoria7').html(r);
                }
            });
        }

        function cargarCategoria8(){
            $.ajax({
                type:"POST",
                url:"bd/cat.php",
                data:"cat=" + $('#nombreClase8').val(),
                success:function(r){
                    $('#nombreCategoria8').html(r);
                }
            });
        }

        function cargarCategoria9(){
            $.ajax({
                type:"POST",
                url:"bd/cat.php",
                data:"cat=" + $('#nombreClase9').val(),
                success:function(r){
                    $('#nombreCategoria9').html(r);
                }
            });
        }

        function cargarCategoria10(){
            $.ajax({
                type:"POST",
                url:"bd/cat.php",
                data:"cat=" + $('#nombreClase10').val(),
                success:function(r){
                    $('#nombreCategoria10').html(r);
                }
            });
        }

        //Carga de Palabras de Advertencia

        function cargarPalabraAdvertencia1(){
            $.ajax({
                type:"POST",
                url:"bd/palad.php",
                data:"palad=" + $('#nombreClase1').val(),
                success:function(r){
                    $('#nombrePalabraAdvertencia1').html(r);
                }
            });
        }

        function cargarPalabraAdvertencia2(){
            $.ajax({
                type:"POST",
                url:"bd/palad.php",
                data:"palad=" + $('#nombreClase2').val(),
                success:function(r){
                    $('#nombrePalabraAdvertencia2').html(r);
                }
            });
        }

        function cargarPalabraAdvertencia3(){
            $.ajax({
                type:"POST",
                url:"bd/palad.php",
                data:"palad=" + $('#nombreClase3').val(),
                success:function(r){
                    $('#nombrePalabraAdvertencia3').html(r);
                }
            });
        }

        function cargarPalabraAdvertencia4(){
            $.ajax({
                type:"POST",
                url:"bd/palad.php",
                data:"palad=" + $('#nombreClase4').val(),
                success:function(r){
                    $('#nombrePalabraAdvertencia4').html(r);
                }
            });
        }

        function cargarPalabraAdvertencia5(){
            $.ajax({
                type:"POST",
                url:"bd/palad.php",
                data:"palad=" + $('#nombreClase5').val(),
                success:function(r){
                    $('#nombrePalabraAdvertencia5').html(r);
                }
            });
        }

        function cargarPalabraAdvertencia6(){
            $.ajax({
                type:"POST",
                url:"bd/palad.php",
                data:"palad=" + $('#nombreClase6').val(),
                success:function(r){
                    $('#nombrePalabraAdvertencia6').html(r);
                }
            });
        }

        function cargarPalabraAdvertencia7(){
            $.ajax({
                type:"POST",
                url:"bd/palad.php",
                data:"palad=" + $('#nombreClase7').val(),
                success:function(r){
                    $('#nombrePalabraAdvertencia7').html(r);
                }
            });
        }

        function cargarPalabraAdvertencia8(){
            $.ajax({
                type:"POST",
                url:"bd/palad.php",
                data:"palad=" + $('#nombreClase8').val(),
                success:function(r){
                    $('#nombrePalabraAdvertencia8').html(r);
                }
            });
        }

        function cargarPalabraAdvertencia9(){
            $.ajax({
                type:"POST",
                url:"bd/palad.php",
                data:"palad=" + $('#nombreClase9').val(),
                success:function(r){
                    $('#nombrePalabraAdvertencia9').html(r);
                }
            });
        }

        function cargarPalabraAdvertencia10(){
            $.ajax({
                type:"POST",
                url:"bd/palad.php",
                data:"palad=" + $('#nombreClase10').val(),
                success:function(r){
                    $('#nombrePalabraAdvertencia10').html(r);
                }
            });
        }

        //Carga de Pictogramas

        function cargarPictograma1(){
            $.ajax({
                type:"POST",
                url:"bd/pict.php",
                data:"pict=" + $('#nombreCategoria1').val(),
                success:function(r){
                    idPictograma1 = r;
                }
            });
        }

        function cargarPictograma2(){
            $.ajax({
                type:"POST",
                url:"bd/pict.php",
                data:"pict=" + $('#nombreCategoria2').val(),
                success:function(r){
                    idPictograma2 = r;
                }
            });
        }

        function cargarPictograma3(){
            $.ajax({
                type:"POST",
                url:"bd/pict.php",
                data:"pict=" + $('#nombreCategoria3').val(),
                success:function(r){
                    idPictograma3 = r;
                }
            });
        }

        function cargarPictograma4(){
            $.ajax({
                type:"POST",
                url:"bd/pict.php",
                data:"pict=" + $('#nombreCategoria4').val(),
                success:function(r){
                    idPictograma4 = r;
                }
            });
        }

        function cargarPictograma5(){
            $.ajax({
                type:"POST",
                url:"bd/pict.php",
                data:"pict=" + $('#nombreCategoria5').val(),
                success:function(r){
                    idPictograma5 = r;
                }
            });
        }

        function cargarPictograma6(){
            $.ajax({
                type:"POST",
                url:"bd/pict.php",
                data:"pict=" + $('#nombreCategoria6').val(),
                success:function(r){
                    idPictograma6 = r;
                }
            });
        }

        function cargarPictograma7(){
            $.ajax({
                type:"POST",
                url:"bd/pict.php",
                data:"pict=" + $('#nombreCategoria7').val(),
                success:function(r){
                    idPictograma7 = r;
                }
            });
        }

        function cargarPictograma8(){
            $.ajax({
                type:"POST",
                url:"bd/pict.php",
                data:"pict=" + $('#nombreCategoria8').val(),
                success:function(r){
                    idPictograma8 = r;
                }
            });
        }

        function cargarPictograma9(){
            $.ajax({
                type:"POST",
                url:"bd/pict.php",
                data:"pict=" + $('#nombreCategoria9').val(),
                success:function(r){
                    idPictograma9 = r;
                }
            });
        }

        function cargarPictograma10(){
            $.ajax({
                type:"POST",
                url:"bd/pict.php",
                data:"pict=" + $('#nombreCategoria10').val(),
                success:function(r){
                    idPictograma10 = r;
                }
            });
        }

        //Carga de Indicaciones

        function cargarIndicacion1(){
            $.ajax({
                type:"POST",
                url:"bd/ind.php",
                data:"ind=" + $('#nombreClase1').val(),
                success:function(r){
                    $('#nombreIndicacion1').html(r);
                }
            });
        }

        function cargarIndicacion2(){
            $.ajax({
                type:"POST",
                url:"bd/ind.php",
                data:"ind=" + $('#nombreClase2').val(),
                success:function(r){
                    $('#nombreIndicacion2').html(r);
                }
            });
        }

        function cargarIndicacion3(){
            $.ajax({
                type:"POST",
                url:"bd/ind.php",
                data:"ind=" + $('#nombreClase3').val(),
                success:function(r){
                    $('#nombreIndicacion3').html(r);
                }
            });
        }

        function cargarIndicacion4(){
            $.ajax({
                type:"POST",
                url:"bd/ind.php",
                data:"ind=" + $('#nombreClase4').val(),
                success:function(r){
                    $('#nombreIndicacion4').html(r);
                }
            });
        }

        function cargarIndicacion5(){
            $.ajax({
                type:"POST",
                url:"bd/ind.php",
                data:"ind=" + $('#nombreClase5').val(),
                success:function(r){
                    $('#nombreIndicacion5').html(r);
                }
            });
        }

        function cargarIndicacion6(){
            $.ajax({
                type:"POST",
                url:"bd/ind.php",
                data:"ind=" + $('#nombreClase6').val(),
                success:function(r){
                    $('#nombreIndicacion6').html(r);
                }
            });
        }

        function cargarIndicacion7(){
            $.ajax({
                type:"POST",
                url:"bd/ind.php",
                data:"ind=" + $('#nombreClase7').val(),
                success:function(r){
                    $('#nombreIndicacion7').html(r);
                }
            });
        }

        function cargarIndicacion8(){
            $.ajax({
                type:"POST",
                url:"bd/ind.php",
                data:"ind=" + $('#nombreClase8').val(),
                success:function(r){
                    $('#nombreIndicacion8').html(r);
                }
            });
        }

        function cargarIndicacion9(){
            $.ajax({
                type:"POST",
                url:"bd/ind.php",
                data:"ind=" + $('#nombreClase9').val(),
                success:function(r){
                    $('#nombreIndicacion9').html(r);
                }
            });
        }

        function cargarIndicacion10(){
            $.ajax({
                type:"POST",
                url:"bd/ind.php",
                data:"ind=" + $('#nombreClase10').val(),
                success:function(r){
                    $('#nombreIndicacion10').html(r);
                }
            });
        }

        //Final Funciones de carga de Select

        //Inicio Funciones al cambiar opciones de Select

        // Clase 1

        $('#nombreClase1').change(function(){
			cargarCategoria1();
            $('#nombreCategoria1').prop('selectedIndex', 0);
            $('#nombreCategoria1').removeAttr('disabled');
            $("#nombreCategoria1").attr("required","required");
            $('#nombrePalabraAdvertencia1').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia1').prop('disabled', 'disabled');
            $('#nombreIndicacion1').prop('selectedIndex', 0);
            $('#nombreIndicacion1').prop('disabled', 'disabled');
		});

        $('#nombreCategoria1').change(function(){
			cargarPalabraAdvertencia1();
            c = $.trim($("#nombreCategoria1").val());
            if (c > 0) {
                cargarPictograma1();
            };
            $('#nombrePalabraAdvertencia1').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia1').removeAttr('disabled');
            $("#nombrePalabraAdvertencia1").attr("required","required");
            $('#nombreIndicacion1').prop('selectedIndex', 0);
            $('#nombreIndicacion1').prop('disabled', 'disabled');
		});

        $('#nombrePalabraAdvertencia1').change(function(){
			cargarIndicacion1();
            $('#nombreIndicacion1').prop('selectedIndex', 0);
            $('#nombreIndicacion1').removeAttr('disabled');
            $("#nombreIndicacion1").attr("required","required");
		});


        //Clase 2

        $('#nombreClase2').change(function(){
			cargarCategoria2();
            $('#nombreCategoria2').prop('selectedIndex', 0);
            $('#nombreCategoria2').removeAttr('disabled');
            $("#nombreCategoria2").attr("required","required");
            $('#nombrePalabraAdvertencia2').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia2').prop('disabled', 'disabled');
            $('#nombreIndicacion2').prop('selectedIndex', 0);
            $('#nombreIndicacion2').prop('disabled', 'disabled');
		});

        $('#nombreCategoria2').change(function(){
			cargarPalabraAdvertencia2();
            c = $.trim($("#nombreCategoria2").val());
            if (c > 0) {
                cargarPictograma2();
            };
            $('#nombrePalabraAdvertencia2').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia2').removeAttr('disabled');
            $("#nombrePalabraAdvertencia2").attr("required","required");
            $('#nombreIndicacion2').prop('selectedIndex', 0);
            $('#nombreIndicacion2').prop('disabled', 'disabled');
		});

        $('#nombrePalabraAdvertencia2').change(function(){
			cargarIndicacion2();
            $('#nombreIndicacion2').prop('selectedIndex', 0);
            $('#nombreIndicacion2').removeAttr('disabled');
            $("#nombreIndicacion2").attr("required","required");
		});


        //Clase 3

        $('#nombreClase3').change(function(){
			cargarCategoria3();
            $('#nombreCategoria3').prop('selectedIndex', 0);
            $('#nombreCategoria3').removeAttr('disabled');
            $("#nombreCategoria3").attr("required","required");
            $('#nombrePalabraAdvertencia3').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia3').prop('disabled', 'disabled');
            $('#nombreIndicacion3').prop('selectedIndex', 0);
            $('#nombreIndicacion3').prop('disabled', 'disabled');
		});

        $('#nombreCategoria3').change(function(){
			cargarPalabraAdvertencia3();
            c = $.trim($("#nombreCategoria3").val());
            if (c > 0) {
                cargarPictograma3();
            };
            $('#nombrePalabraAdvertencia3').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia3').removeAttr('disabled');
            $("#nombrePalabraAdvertencia3").attr("required","required");
            $('#nombreIndicacion3').prop('selectedIndex', 0);
            $('#nombreIndicacion3').prop('disabled', 'disabled');
		});

        $('#nombrePalabraAdvertencia3').change(function(){
			cargarIndicacion3();
            $('#nombreIndicacion3').prop('selectedIndex', 0);
            $('#nombreIndicacion3').removeAttr('disabled');
            $("#nombreIndicacion3").attr("required","required");
		});


        //Clase 4

        $('#nombreClase4').change(function(){
			cargarCategoria4();
            $('#nombreCategoria4').prop('selectedIndex', 0);
            $('#nombreCategoria4').removeAttr('disabled');
            $("#nombreCategoria4").attr("required","required");
            $('#nombrePalabraAdvertencia4').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia4').prop('disabled', 'disabled');
            $('#nombreIndicacion4').prop('selectedIndex', 0);
            $('#nombreIndicacion4').prop('disabled', 'disabled');
		});

        $('#nombreCategoria4').change(function(){
			cargarPalabraAdvertencia4();
            c = $.trim($("#nombreCategoria4").val());
            if (c > 0) {
                cargarPictograma4();
            };
            $('#nombrePalabraAdvertencia4').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia4').removeAttr('disabled');
            $("#nombrePalabraAdvertencia4").attr("required","required");
            $('#nombreIndicacion4').prop('selectedIndex', 0);
            $('#nombreIndicacion4').prop('disabled', 'disabled');
		});

        $('#nombrePalabraAdvertencia4').change(function(){
			cargarIndicacion4();
            $('#nombreIndicacion4').prop('selectedIndex', 0);
            $('#nombreIndicacion4').removeAttr('disabled');
            $("#nombreIndicacion4").attr("required","required");
		});


        //Clase 5

        $('#nombreClase5').change(function(){
			cargarCategoria5();
            $('#nombreCategoria5').prop('selectedIndex', 0);
            $('#nombreCategoria5').removeAttr('disabled');
            $("#nombreCategoria5").attr("required","required");
            $('#nombrePalabraAdvertencia5').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia5').prop('disabled', 'disabled');
            $('#nombreIndicacion5').prop('selectedIndex', 0);
            $('#nombreIndicacion5').prop('disabled', 'disabled');
		});

        $('#nombreCategoria5').change(function(){
			cargarPalabraAdvertencia5();
            c = $.trim($("#nombreCategoria5").val());
            if (c > 0) {
                cargarPictograma5();
            };
            $('#nombrePalabraAdvertencia5').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia5').removeAttr('disabled');
            $("#nombrePalabraAdvertencia5").attr("required","required");
            $('#nombreIndicacion5').prop('selectedIndex', 0);
            $('#nombreIndicacion5').prop('disabled', 'disabled');
		});

        $('#nombrePalabraAdvertencia5').change(function(){
			cargarIndicacion5();
            $('#nombreIndicacion5').prop('selectedIndex', 0);
            $('#nombreIndicacion5').removeAttr('disabled');
            $("#nombreIndicacion5").attr("required","required");
		});


        //Clase 6

        $('#nombreClase6').change(function(){
			cargarCategoria6();
            $('#nombreCategoria6').prop('selectedIndex', 0);
            $('#nombreCategoria6').removeAttr('disabled');
            $("#nombreCategoria6").attr("required","required");
            $('#nombrePalabraAdvertencia6').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia6').prop('disabled', 'disabled');
            $('#nombreIndicacion6').prop('selectedIndex', 0);
            $('#nombreIndicacion6').prop('disabled', 'disabled');
		});

        $('#nombreCategoria6').change(function(){
			cargarPalabraAdvertencia6();
            c = $.trim($("#nombreCategoria6").val());
            if (c > 0) {
                cargarPictograma6();
            };
            $('#nombrePalabraAdvertencia6').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia6').removeAttr('disabled');
            $("#nombrePalabraAdvertencia6").attr("required","required");
            $('#nombreIndicacion6').prop('selectedIndex', 0);
            $('#nombreIndicacion6').prop('disabled', 'disabled');
		});

        $('#nombrePalabraAdvertencia6').change(function(){
			cargarIndicacion6();
            $('#nombreIndicacion6').prop('selectedIndex', 0);
            $('#nombreIndicacion6').removeAttr('disabled');
            $("#nombreIndicacion6").attr("required","required");
		});


        //Clase 7

        $('#nombreClase7').change(function(){
			cargarCategoria7();
            $('#nombreCategoria7').prop('selectedIndex', 0);
            $('#nombreCategoria7').removeAttr('disabled');
            $("#nombreCategoria7").attr("required","required");
            $('#nombrePalabraAdvertencia7').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia7').prop('disabled', 'disabled');
            $('#nombreIndicacion7').prop('selectedIndex', 0);
            $('#nombreIndicacion7').prop('disabled', 'disabled');
		});

        $('#nombreCategoria7').change(function(){
			cargarPalabraAdvertencia7();
            c = $.trim($("#nombreCategoria7").val());
            if (c > 0) {
                cargarPictograma7();
            };
            $('#nombrePalabraAdvertencia7').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia7').removeAttr('disabled');
            $("#nombrePalabraAdvertencia7").attr("required","required");
            $('#nombreIndicacion7').prop('selectedIndex', 0);
            $('#nombreIndicacion7').prop('disabled', 'disabled');
		});

        $('#nombrePalabraAdvertencia7').change(function(){
			cargarIndicacion7();
            $('#nombreIndicacion7').prop('selectedIndex', 0);
            $('#nombreIndicacion7').removeAttr('disabled');
            $("#nombreIndicacion7").attr("required","required");
		});


        //Clase 8

        $('#nombreClase8').change(function(){
			cargarCategoria8();
            $('#nombreCategoria8').prop('selectedIndex', 0);
            $('#nombreCategoria8').removeAttr('disabled');
            $("#nombreCategoria8").attr("required","required");
            $('#nombrePalabraAdvertencia8').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia8').prop('disabled', 'disabled');
            $('#nombreIndicacion8').prop('selectedIndex', 0);
            $('#nombreIndicacion8').prop('disabled', 'disabled');
		});

        $('#nombreCategoria8').change(function(){
			cargarPalabraAdvertencia8();
            c = $.trim($("#nombreCategoria8").val());
            if (c > 0) {
                cargarPictograma8();
            };
            $('#nombrePalabraAdvertencia8').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia8').removeAttr('disabled');
            $("#nombrePalabraAdvertencia8").attr("required","required");
            $('#nombreIndicacion8').prop('selectedIndex', 0);
            $('#nombreIndicacion8').prop('disabled', 'disabled');
		});

        $('#nombrePalabraAdvertencia8').change(function(){
			cargarIndicacion8();
            $('#nombreIndicacion8').prop('selectedIndex', 0);
            $('#nombreIndicacion8').removeAttr('disabled');
            $("#nombreIndicacion8").attr("required","required");
		});


        //Clase 9

        $('#nombreClase9').change(function(){
			cargarCategoria9();
            $('#nombreCategoria9').prop('selectedIndex', 0);
            $('#nombreCategoria9').removeAttr('disabled');
            $("#nombreCategoria9").attr("required","required");
            $('#nombrePalabraAdvertencia9').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia9').prop('disabled', 'disabled');
            $('#nombreIndicacion9').prop('selectedIndex', 0);
            $('#nombreIndicacion9').prop('disabled', 'disabled');
		});

        $('#nombreCategoria9').change(function(){
			cargarPalabraAdvertencia9();
            c = $.trim($("#nombreCategoria9").val());
            if (c > 0) {
                cargarPictograma9();
            };
            $('#nombrePalabraAdvertencia9').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia9').removeAttr('disabled');
            $("#nombrePalabraAdvertencia9").attr("required","required");
            $('#nombreIndicacion9').prop('selectedIndex', 0);
            $('#nombreIndicacion9').prop('disabled', 'disabled');
		});

        $('#nombrePalabraAdvertencia9').change(function(){
			cargarIndicacion9();
            $('#nombreIndicacion9').prop('selectedIndex', 0);
            $('#nombreIndicacion9').removeAttr('disabled');
            $("#nombreIndicacion9").attr("required","required");
		});


        //Clase 10

        $('#nombreClase10').change(function(){
			cargarCategoria10();
            $('#nombreCategoria10').prop('selectedIndex', 0);
            $('#nombreCategoria10').removeAttr('disabled');
            $("#nombreCategoria10").attr("required","required");
            $('#nombrePalabraAdvertencia10').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia10').prop('disabled', 'disabled');
            $('#nombreIndicacion10').prop('selectedIndex', 0);
            $('#nombreIndicacion10').prop('disabled', 'disabled');
		});

        $('#nombreCategoria10').change(function(){
			cargarPalabraAdvertencia10();
            c = $.trim($("#nombreCategoria10").val());
            if (c > 0) {
                cargarPictograma10();
            };
            $('#nombrePalabraAdvertencia10').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia10').removeAttr('disabled');
            $("#nombrePalabraAdvertencia10").attr("required","required");
            $('#nombreIndicacion10').prop('selectedIndex', 0);
            $('#nombreIndicacion10').prop('disabled', 'disabled');
		});

        $('#nombrePalabraAdvertencia10').change(function(){
			cargarIndicacion10();
            $('#nombreIndicacion10').prop('selectedIndex', 0);
            $('#nombreIndicacion10').removeAttr('disabled');
            $("#nombreIndicacion10").attr("required","required");
		});

        //Final Funciones al cambiar opciones de Select

        //Seteo de algunas opciones al presionar el botón de Nuevo
        document.getElementById('cas').placeholder = 'Chemical Abstracts Service Number *';
        document.getElementById('nombreProducto').placeholder = 'Campo Obligatorio *';
        document.getElementById('nombreProducto').value = '';
        document.getElementById('nombreGrupo').selectedIndex = 0;
        document.getElementById('nombreUso').selectedIndex = 1;
        document.getElementById('nombreFabricante').placeholder = 'Campo Obligatorio *';
        document.getElementById('nombreFabricante').value = '';
        document.getElementById('btnClase2').style.display = 'none';
        document.getElementById('btnClase3').style.display = 'none';
        document.getElementById('btnClase4').style.display = 'none';
        document.getElementById('btnClase5').style.display = 'none';
        document.getElementById('btnClase6').style.display = 'none';
        document.getElementById('btnClase7').style.display = 'none';
        document.getElementById('btnClase8').style.display = 'none';
        document.getElementById('btnClase9').style.display = 'none';
        document.getElementById('btnClase10').style.display = 'none';

        //Botón Cancelar
        $('#btnCancelar').on('click', function() {
            $("#formProductos").trigger("reset");
            //location.reload();
        });

        opcion = 1; //Nuevo Producto
    });
    
    var fila; //Capturar la fila para editar o borrar el registro
    
    //Botón Editar Producto    
    $(document).on("click", ".btnEditar", function(){
        hideClases();
        $("#formProductos").trigger("reset");
        fila = $(this).closest("tr");
        cas = fila.find('td:eq(0)').text();
        nombre = fila.find('td:eq(1)').text();
        nombreGrupo = fila.find('td:eq(2)').text();
        nombreUso = fila.find('td:eq(3)').text();
        nombreFabricante = fila.find('td:eq(4)').text();
        console.log('CAS: ',cas);
        
            $.ajax({
                type:"POST",
                url:"bd/cargarProducto.php",
                data:"cas=" + cas,
                success:function(data){
                    //console.log(data);
                    dataParse = JSON.parse(data);
                    product_loaded = dataParse;
                    loaded_cas = product_loaded[0].cas;
                    loaded_nombreProducto = product_loaded[0].nombreProducto;
                    loaded_nombreGrupo = product_loaded[0].nombreGrupo;
                    loaded_nombreUso = product_loaded[0].nombreUso;
                    loaded_nombreFabricante = product_loaded[0].nombreFabricante;
                    loaded_nombreClase1 = product_loaded[0].nombreClasePeligro1;
                    loaded_nombreCategoria1 = product_loaded[0].nombreCategoriaPeligro1;
                    loaded_palabraAdvertencia1 = product_loaded[0].palabraAdvertencia1;
                    loaded_nombreIndicacion1 = product_loaded[0].nombreIndicacion1;
                    loaded_idPictograma1 = product_loaded[0].idPictograma1;
                    loaded_nombreClase2 = product_loaded[0].nombreClasePeligro2;
                    loaded_nombreCategoria2 = product_loaded[0].nombreCategoriaPeligro2;
                    loaded_palabraAdvertencia2 = product_loaded[0].palabraAdvertencia2;
                    loaded_nombreIndicacion2 = product_loaded[0].nombreIndicacion2;
                    loaded_idPictograma2 = product_loaded[0].idPictograma2;
                    loaded_nombreClase3 = product_loaded[0].nombreClasePeligro3;
                    loaded_nombreCategoria3 = product_loaded[0].nombreCategoriaPeligro3;
                    loaded_palabraAdvertencia3 = product_loaded[0].palabraAdvertencia3;
                    loaded_nombreIndicacion3 = product_loaded[0].nombreIndicacion3;
                    loaded_idPictograma3 = product_loaded[0].idPictograma3;
                    loaded_nombreClase4 = product_loaded[0].nombreClasePeligro4;
                    loaded_nombreCategoria4 = product_loaded[0].nombreCategoriaPeligro4;
                    loaded_palabraAdvertencia4 = product_loaded[0].palabraAdvertencia4;
                    loaded_nombreIndicacion4 = product_loaded[0].nombreIndicacion4;
                    loaded_idPictograma4 = product_loaded[0].idPictograma4;
                    loaded_nombreClase5 = product_loaded[0].nombreClasePeligro5;
                    loaded_nombreCategoria5 = product_loaded[0].nombreCategoriaPeligro5;
                    loaded_palabraAdvertencia5 = product_loaded[0].palabraAdvertencia5;
                    loaded_nombreIndicacion5 = product_loaded[0].nombreIndicacion5;
                    loaded_idPictograma5 = product_loaded[0].idPictograma5;
                    loaded_nombreClase6 = product_loaded[0].nombreClasePeligro6;
                    loaded_nombreCategoria6 = product_loaded[0].nombreCategoriaPeligro6;
                    loaded_palabraAdvertencia6 = product_loaded[0].palabraAdvertencia6;
                    loaded_nombreIndicacion6 = product_loaded[0].nombreIndicacion6;
                    loaded_idPictograma6 = product_loaded[0].idPictograma6;
                    loaded_nombreClase7 = product_loaded[0].nombreClasePeligro7;
                    loaded_nombreCategoria7 = product_loaded[0].nombreCategoriaPeligro7;
                    loaded_palabraAdvertencia7 = product_loaded[0].palabraAdvertencia7;
                    loaded_nombreIndicacion7 = product_loaded[0].nombreIndicacion7;
                    loaded_idPictograma7 = product_loaded[0].idPictograma7;
                    loaded_nombreClase8 = product_loaded[0].nombreClasePeligro8;
                    loaded_nombreCategoria8 = product_loaded[0].nombreCategoriaPeligro8;
                    loaded_palabraAdvertencia8 = product_loaded[0].palabraAdvertencia8;
                    loaded_nombreIndicacion8 = product_loaded[0].nombreIndicacion8;
                    loaded_idPictograma8 = product_loaded[0].idPictograma8;
                    loaded_nombreClase9 = product_loaded[0].nombreClasePeligro9;
                    loaded_nombreCategoria9 = product_loaded[0].nombreCategoriaPeligro9;
                    loaded_palabraAdvertencia9 = product_loaded[0].palabraAdvertencia9;
                    loaded_nombreIndicacion9 = product_loaded[0].nombreIndicacion9;
                    loaded_idPictograma9 = product_loaded[0].idPictograma9;
                    loaded_nombreClase10 = product_loaded[0].nombreClasePeligro10;
                    loaded_nombreCategoria10 = product_loaded[0].nombreCategoriaPeligro10;
                    loaded_palabraAdvertencia10 = product_loaded[0].palabraAdvertencia10;
                    loaded_nombreIndicacion10 = product_loaded[0].nombreIndicacion10;
                    loaded_idPictograma10 = product_loaded[0].idPictograma10;
                    loaded_nivel = product_loaded[0].nivel;
                    loaded_unidad = product_loaded[0].nombreUnidad;

                    console.log('CAS: ',loaded_cas);
                    console.log('Nombre de Producto: ',loaded_nombreProducto);
                    console.log('Grupo: ',loaded_nombreGrupo);
                    console.log('Uso: ',loaded_nombreUso);
                    console.log('Fabricante: ',loaded_nombreFabricante);
                    console.log('Clase 1: ',loaded_nombreClase1);
                    console.log('Categoría 1: ',loaded_nombreCategoria1);
                    console.log('Palabra de Advertencia 1: ',loaded_palabraAdvertencia1);
                    console.log('Indicación 1: ',loaded_nombreIndicacion1);
                    console.log('ID Pictograma 1: ',loaded_idPictograma1);
                    console.log('Clase 2: ',loaded_nombreClase2);
                    console.log('Categoría 2: ',loaded_nombreCategoria2);
                    console.log('Palabra de Advertencia 2: ',loaded_palabraAdvertencia2);
                    console.log('Indicación 2: ',loaded_nombreIndicacion2);
                    console.log('ID Pictograma 2: ',loaded_idPictograma2);
                    console.log('Clase 3: ',loaded_nombreClase3);
                    console.log('Categoría 3: ',loaded_nombreCategoria3);
                    console.log('Palabra de Advertencia 3: ',loaded_palabraAdvertencia3);
                    console.log('Indicación 3: ',loaded_nombreIndicacion3);
                    console.log('ID Pictograma 3: ',loaded_idPictograma3);
                    console.log('Clase 4: ',loaded_nombreClase4);
                    console.log('Categoría 4: ',loaded_nombreCategoria4);
                    console.log('Palabra de Advertencia 4: ',loaded_palabraAdvertencia4);
                    console.log('Indicación 4: ',loaded_nombreIndicacion4);
                    console.log('ID Pictograma 4: ',loaded_idPictograma4);
                    console.log('Clase 5: ',loaded_nombreClase5);
                    console.log('Categoría 5: ',loaded_nombreCategoria5);
                    console.log('Palabra de Advertencia 5: ',loaded_palabraAdvertencia5);
                    console.log('Indicación 5: ',loaded_nombreIndicacion5);
                    console.log('ID Pictograma 5: ',loaded_idPictograma5);
                    console.log('Clase 6: ',loaded_nombreClase6);
                    console.log('Categoría 6: ',loaded_nombreCategoria6);
                    console.log('Palabra de Advertencia 6: ',loaded_palabraAdvertencia6);
                    console.log('Indicación 6: ',loaded_nombreIndicacion6);
                    console.log('ID Pictograma 6: ',loaded_idPictograma6);
                    console.log('Clase 7: ',loaded_nombreClase7);
                    console.log('Categoría 7: ',loaded_nombreCategoria7);
                    console.log('Palabra de Advertencia 7: ',loaded_palabraAdvertencia7);
                    console.log('Indicación 7: ',loaded_nombreIndicacion7);
                    console.log('ID Pictograma 7: ',loaded_idPictograma7);
                    console.log('Clase 8: ',loaded_nombreClase8);
                    console.log('Categoría 8: ',loaded_nombreCategoria8);
                    console.log('Palabra de Advertencia 8: ',loaded_palabraAdvertencia8);
                    console.log('Indicación 8: ',loaded_nombreIndicacion8);
                    console.log('ID Pictograma 8: ',loaded_idPictograma8);
                    console.log('Clase 9: ',loaded_nombreClase9);
                    console.log('Categoría 9: ',loaded_nombreCategoria9);
                    console.log('Palabra de Advertencia 9: ',loaded_palabraAdvertencia9);
                    console.log('Indicación 9: ',loaded_nombreIndicacion9);
                    console.log('ID Pictograma 9: ',loaded_idPictograma9);
                    console.log('Clase 10: ',loaded_nombreClase10);
                    console.log('Categoría 10: ',loaded_nombreCategoria10);
                    console.log('Palabra de Advertencia 10: ',loaded_palabraAdvertencia10);
                    console.log('Indicación 10: ',loaded_nombreIndicacion10);
                    console.log('ID Pictograma 10: ',loaded_idPictograma10);
                    console.log('Nivel: ',loaded_nivel);
                    console.log('Unidad: ',loaded_unidad);

                    $("#cas").val(loaded_cas);
                    $("#nombreProducto").val(loaded_nombreProducto);
                    var selectednombreGrupo = loaded_nombreGrupo;
                    $('#nombreGrupo option').map(function () {
                    if ($(this).text() == selectednombreGrupo) return this;
                    }).attr('selected', 'selected');
                    var selectednombreUso = loaded_nombreUso;
                    $('#nombreUso option').map(function () {
                    if ($(this).text() == selectednombreUso) return this;
                    }).attr('selected', 'selected');
                    $("#nombreFabricante").val(loaded_nombreFabricante);

                },
                error: function(textStatus, errorThrown) {
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


        opcion = 2; //Editar Producto
        $(".modal-header").css("background-color", "#4e73df");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Producto");            
        $("#modalCRUD").modal("show"); 
        //console.log("Edición de Usuario - Paso 1...");
    });

    //Botón Eliminar Producto
    $(document).on("click", ".btnBorrar", function(){    
        fila = $(this);
        cas = $(this).closest("tr").find('td:eq(0)').text();
        nombreProducto = $(this).closest("tr").find('td:eq(1)').text();
        opcion = 3 //borrar
        Swal.fire({
            title: 'Está seguro que desea eliminar el producto "'+ nombreProducto +'"?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    $.ajax({
                        url: "bd/crud.php",
                        type: "POST",
                        dataType: "json",
                        data: {opcion:opcion, cas:cas},
                        success: function(){
                            tablaProductos.row(fila.parents('tr')).remove().draw();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'El producto "'+ nombreProducto +'" fue eliminado con éxito',
                                showConfirmButton: false,
                                timer: 2000
                            })
                        },
                        // error: function(XMLHttpRequest, textStatus, errorThrown) { 
                        //     // alert("Status: " + textStatus); alert("Error: " + errorThrown);
                        //     console.log("Status: " + textStatus);
                        //     console.log("Error: " + errorThrown);
                        // }
                        error: function(textStatus, errorThrown) {
                            console.log(textStatus, errorThrown);
                          }
                    });
                }
        })
    });
    
    //Submit Productos
    $("#formProductos").submit(function(e){
        e.preventDefault();
        // newid = $.trim($("#newid").val());

        idClase1 = 0;
        idCategoria1 = 0;
        idPalabraAdvertencia1 = 0;
        idIndicacion1 = 0;

        cas = $.trim($("#cas").val());
        nombreProducto = $.trim($('#nombreProducto').val());
        idGrupo = $.trim($("#nombreGrupo").val());
        idUso = $.trim($("#nombreUso").val());
        nombreFabricante = $.trim($("#nombreFabricante").val());


        //Captura de datos de Clase 1

        const opClase1 = document.getElementById("nombreClase1");
        if (opClase1.selectedIndex === 0 || opClase1.selectedIndex === '') {
            idClase1 = 'NULL';
        } else {
            idClase1 = $.trim($("#nombreClase1").val());
        }

        const opCategoria1 = document.getElementById("nombreCategoria1");
        if (opCategoria1.selectedIndex === 0) {
            idCategoria1 = 'NULL';
        } else {
            idCategoria1 = $.trim($("#nombreCategoria1").val());
        }

        const opPalabraAdvertencia1 = document.getElementById("nombrePalabraAdvertencia1");
        if (opPalabraAdvertencia1.selectedIndex === 0) {
            idPalabraAdvertencia1 = 'NULL';
        } else {
            idPalabraAdvertencia1 = $.trim($("#nombrePalabraAdvertencia1").val());
        }

        const opIndicacion1 = document.getElementById("nombreIndicacion1");
        if (opIndicacion1.selectedIndex === 0) {
            idIndicacion1 = 'NULL';
        } else {
            idIndicacion1 = $.trim($("#nombreIndicacion1").val());
        }
        
        if (idPictograma1 === 0) {
            idPictograma1 = 'NULL';
        }


        //Captura de datos de Clase 2

        const opClase2 = document.getElementById("nombreClase2");
        if (opClase2.selectedIndex === 0 || opClase2.selectedIndex === '') {
            idClase2 = 'NULL';
        } else {
            idClase2 = $.trim($("#nombreClase2").val());
        }

        const opCategoria2 = document.getElementById("nombreCategoria2");
        if (opCategoria2.selectedIndex === 0) {
            idCategoria2 = 'NULL';
        } else {
            idCategoria2 = $.trim($("#nombreCategoria2").val());
        }

        const opPalabraAdvertencia2 = document.getElementById("nombrePalabraAdvertencia2");
        if (opPalabraAdvertencia2.selectedIndex === 0) {
            idPalabraAdvertencia2 = 'NULL';
        } else {
            idPalabraAdvertencia2 = $.trim($("#nombrePalabraAdvertencia2").val());
        }

        const opIndicacion2 = document.getElementById("nombreIndicacion2");
        if (opIndicacion2.selectedIndex === 0) {
            idIndicacion2 = 'NULL';
        } else {
            idIndicacion2 = $.trim($("#nombreIndicacion2").val());
        }
        
        if (idPictograma2 === 0) {
            idPictograma2 = 'NULL';
        }


        //Captura de datos de Clase 3

        const opClase3 = document.getElementById("nombreClase3");
        if (opClase3.selectedIndex === 0 || opClase3.selectedIndex === '') {
            idClase3 = 'NULL';
        } else {
            idClase3 = $.trim($("#nombreClase3").val());
        }

        const opCategoria3 = document.getElementById("nombreCategoria3");
        if (opCategoria3.selectedIndex === 0) {
            idCategoria3 = 'NULL';
        } else {
            idCategoria3 = $.trim($("#nombreCategoria3").val());
        }

        const opPalabraAdvertencia3 = document.getElementById("nombrePalabraAdvertencia3");
        if (opPalabraAdvertencia3.selectedIndex === 0) {
            idPalabraAdvertencia3 = 'NULL';
        } else {
            idPalabraAdvertencia3 = $.trim($("#nombrePalabraAdvertencia3").val());
        }

        const opIndicacion3 = document.getElementById("nombreIndicacion3");
        if (opIndicacion3.selectedIndex === 0) {
            idIndicacion3 = 'NULL';
        } else {
            idIndicacion3 = $.trim($("#nombreIndicacion3").val());
        }
        
        if (idPictograma3 === 0) {
            idPictograma3 = 'NULL';
        }


        //Captura de datos de Clase 4

        const opClase4 = document.getElementById("nombreClase4");
        if (opClase4.selectedIndex === 0 || opClase4.selectedIndex === '') {
            idClase4 = 'NULL';
        } else {
            idClase4 = $.trim($("#nombreClase4").val());
        }

        const opCategoria4 = document.getElementById("nombreCategoria4");
        if (opCategoria4.selectedIndex === 0) {
            idCategoria4 = 'NULL';
        } else {
            idCategoria4 = $.trim($("#nombreCategoria4").val());
        }

        const opPalabraAdvertencia4 = document.getElementById("nombrePalabraAdvertencia4");
        if (opPalabraAdvertencia4.selectedIndex === 0) {
            idPalabraAdvertencia4 = 'NULL';
        } else {
            idPalabraAdvertencia4 = $.trim($("#nombrePalabraAdvertencia4").val());
        }

        const opIndicacion4 = document.getElementById("nombreIndicacion4");
        if (opIndicacion4.selectedIndex === 0) {
            idIndicacion4 = 'NULL';
        } else {
            idIndicacion4 = $.trim($("#nombreIndicacion4").val());
        }
        
        if (idPictograma4 === 0) {
            idPictograma4 = 'NULL';
        }


        //Captura de datos de Clase 5

        const opClase5 = document.getElementById("nombreClase5");
        if (opClase5.selectedIndex === 0 || opClase5.selectedIndex === '') {
            idClase5 = 'NULL';
        } else {
            idClase5 = $.trim($("#nombreClase5").val());
        }

        const opCategoria5 = document.getElementById("nombreCategoria5");
        if (opCategoria5.selectedIndex === 0) {
            idCategoria5 = 'NULL';
        } else {
            idCategoria5 = $.trim($("#nombreCategoria5").val());
        }

        const opPalabraAdvertencia5 = document.getElementById("nombrePalabraAdvertencia5");
        if (opPalabraAdvertencia5.selectedIndex === 0) {
            idPalabraAdvertencia5 = 'NULL';
        } else {
            idPalabraAdvertencia5 = $.trim($("#nombrePalabraAdvertencia5").val());
        }

        const opIndicacion5 = document.getElementById("nombreIndicacion5");
        if (opIndicacion5.selectedIndex === 0) {
            idIndicacion5 = 'NULL';
        } else {
            idIndicacion5 = $.trim($("#nombreIndicacion5").val());
        }
        
        if (idPictograma5 === 0) {
            idPictograma5 = 'NULL';
        }


        //Captura de datos de Clase 6

        const opClase6 = document.getElementById("nombreClase6");
        if (opClase6.selectedIndex === 0 || opClase6.selectedIndex === '') {
            idClase6 = 'NULL';
        } else {
            idClase6 = $.trim($("#nombreClase6").val());
        }

        const opCategoria6 = document.getElementById("nombreCategoria6");
        if (opCategoria6.selectedIndex === 0) {
            idCategoria6 = 'NULL';
        } else {
            idCategoria6 = $.trim($("#nombreCategoria6").val());
        }

        const opPalabraAdvertencia6 = document.getElementById("nombrePalabraAdvertencia6");
        if (opPalabraAdvertencia6.selectedIndex === 0) {
            idPalabraAdvertencia6 = 'NULL';
        } else {
            idPalabraAdvertencia6 = $.trim($("#nombrePalabraAdvertencia6").val());
        }

        const opIndicacion6 = document.getElementById("nombreIndicacion6");
        if (opIndicacion6.selectedIndex === 0) {
            idIndicacion6 = 'NULL';
        } else {
            idIndicacion6 = $.trim($("#nombreIndicacion6").val());
        }
        
        if (idPictograma6 === 0) {
            idPictograma6 = 'NULL';
        }


        //Captura de datos de Clase 7

        const opClase7 = document.getElementById("nombreClase7");
        if (opClase7.selectedIndex === 0 || opClase7.selectedIndex === '') {
            idClase7 = 'NULL';
        } else {
            idClase7 = $.trim($("#nombreClase7").val());
        }

        const opCategoria7 = document.getElementById("nombreCategoria7");
        if (opCategoria7.selectedIndex === 0) {
            idCategoria7 = 'NULL';
        } else {
            idCategoria7 = $.trim($("#nombreCategoria7").val());
        }

        const opPalabraAdvertencia7 = document.getElementById("nombrePalabraAdvertencia7");
        if (opPalabraAdvertencia7.selectedIndex === 0) {
            idPalabraAdvertencia7 = 'NULL';
        } else {
            idPalabraAdvertencia7 = $.trim($("#nombrePalabraAdvertencia7").val());
        }

        const opIndicacion7 = document.getElementById("nombreIndicacion7");
        if (opIndicacion7.selectedIndex === 0) {
            idIndicacion7 = 'NULL';
        } else {
            idIndicacion7 = $.trim($("#nombreIndicacion7").val());
        }
        
        if (idPictograma7 === 0) {
            idPictograma7 = 'NULL';
        }


        //Captura de datos de Clase 8

        const opClase8 = document.getElementById("nombreClase8");
        if (opClase8.selectedIndex === 0 || opClase8.selectedIndex === '') {
            idClase8 = 'NULL';
        } else {
            idClase8 = $.trim($("#nombreClase8").val());
        }

        const opCategoria8 = document.getElementById("nombreCategoria8");
        if (opCategoria8.selectedIndex === 0) {
            idCategoria8 = 'NULL';
        } else {
            idCategoria8 = $.trim($("#nombreCategoria8").val());
        }

        const opPalabraAdvertencia8 = document.getElementById("nombrePalabraAdvertencia8");
        if (opPalabraAdvertencia8.selectedIndex === 0) {
            idPalabraAdvertencia8 = 'NULL';
        } else {
            idPalabraAdvertencia8 = $.trim($("#nombrePalabraAdvertencia8").val());
        }

        const opIndicacion8 = document.getElementById("nombreIndicacion8");
        if (opIndicacion8.selectedIndex === 0) {
            idIndicacion8 = 'NULL';
        } else {
            idIndicacion8 = $.trim($("#nombreIndicacion8").val());
        }
        
        if (idPictograma8 === 0) {
            idPictograma8 = 'NULL';
        }


        //Captura de datos de Clase 9

        const opClase9 = document.getElementById("nombreClase9");
        if (opClase9.selectedIndex === 0 || opClase9.selectedIndex === '') {
            idClase9 = 'NULL';
        } else {
            idClase9 = $.trim($("#nombreClase9").val());
        }

        const opCategoria9 = document.getElementById("nombreCategoria9");
        if (opCategoria9.selectedIndex === 0) {
            idCategoria9 = 'NULL';
        } else {
            idCategoria9 = $.trim($("#nombreCategoria9").val());
        }

        const opPalabraAdvertencia9 = document.getElementById("nombrePalabraAdvertencia9");
        if (opPalabraAdvertencia9.selectedIndex === 0) {
            idPalabraAdvertencia9 = 'NULL';
        } else {
            idPalabraAdvertencia9 = $.trim($("#nombrePalabraAdvertencia9").val());
        }

        const opIndicacion9 = document.getElementById("nombreIndicacion9");
        if (opIndicacion9.selectedIndex === 0) {
            idIndicacion9 = 'NULL';
        } else {
            idIndicacion9 = $.trim($("#nombreIndicacion9").val());
        }
        
        if (idPictograma9 === 0) {
            idPictograma9 = 'NULL';
        }


        //Captura de datos de Clase 10

        const opClase10 = document.getElementById("nombreClase10");
        if (opClase10.selectedIndex === 0 || opClase10.selectedIndex === '') {
            idClase10 = 'NULL';
        } else {
            idClase10 = $.trim($("#nombreClase10").val());
        }

        const opCategoria10 = document.getElementById("nombreCategoria10");
        if (opCategoria10.selectedIndex === 0) {
            idCategoria10 = 'NULL';
        } else {
            idCategoria10 = $.trim($("#nombreCategoria10").val());
        }

        const opPalabraAdvertencia10 = document.getElementById("nombrePalabraAdvertencia10");
        if (opPalabraAdvertencia10.selectedIndex === 0) {
            idPalabraAdvertencia10 = 'NULL';
        } else {
            idPalabraAdvertencia10 = $.trim($("#nombrePalabraAdvertencia10").val());
        }

        const opIndicacion10 = document.getElementById("nombreIndicacion10");
        if (opIndicacion10.selectedIndex === 0) {
            idIndicacion10 = 'NULL';
        } else {
            idIndicacion10 = $.trim($("#nombreIndicacion10").val());
        }
        
        if (idPictograma10 === 0) {
            idPictograma10 = 'NULL';
        }

        console.log('CAS: ' , cas);
        console.log('Nombre de Producto: ' , nombreProducto);
        console.log('Id de Grupo: ' , idGrupo);
        console.log('Id de Uso: ' , idUso);
        console.log('Nombre del Fabricante: ' , nombreFabricante);
        console.log('Id de Clase de Peligro 1: ' , idClase1);
        console.log('Id de Categoria 1: ' , idCategoria1);
        console.log('Id de Palabra de Advertencia 1: ' , idPalabraAdvertencia1);
        console.log('Id de Indicacion 1: ' , idIndicacion1);
        console.log('Id de Pictograma 1: ' , idPictograma1);
        console.log('Id de Categoria 2: ' , idCategoria2);
        console.log('Id de Palabra de Advertencia 2: ' , idPalabraAdvertencia2);
        console.log('Id de Indicacion 2: ' , idIndicacion2);
        console.log('Id de Pictograma 2: ' , idPictograma2);
        console.log('Id de Categoria 3: ' , idCategoria3);
        console.log('Id de Palabra de Advertencia 3: ' , idPalabraAdvertencia3);
        console.log('Id de Indicacion 3: ' , idIndicacion3);
        console.log('Id de Pictograma 3: ' , idPictograma3);
        console.log('Id de Categoria 4: ' , idCategoria4);
        console.log('Id de Palabra de Advertencia 4: ' , idPalabraAdvertencia4);
        console.log('Id de Indicacion 4: ' , idIndicacion4);
        console.log('Id de Pictograma 4: ' , idPictograma4);
        console.log('Id de Categoria 5: ' , idCategoria5);
        console.log('Id de Palabra de Advertencia 5: ' , idPalabraAdvertencia5);
        console.log('Id de Indicacion 5: ' , idIndicacion5);
        console.log('Id de Pictograma 5: ' , idPictograma5);
        console.log('Id de Categoria 6: ' , idCategoria6);
        console.log('Id de Palabra de Advertencia 6: ' , idPalabraAdvertencia6);
        console.log('Id de Indicacion 6: ' , idIndicacion6);
        console.log('Id de Pictograma 6: ' , idPictograma6);
        console.log('Id de Categoria 7: ' , idCategoria7);
        console.log('Id de Palabra de Advertencia 7: ' , idPalabraAdvertencia7);
        console.log('Id de Indicacion 7: ' , idIndicacion7);
        console.log('Id de Pictograma 7: ' , idPictograma7);
        console.log('Id de Categoria 8: ' , idCategoria8);
        console.log('Id de Palabra de Advertencia 8: ' , idPalabraAdvertencia8);
        console.log('Id de Indicacion 8: ' , idIndicacion8);
        console.log('Id de Pictograma 8: ' , idPictograma8);
        console.log('Id de Categoria 9: ' , idCategoria9);
        console.log('Id de Palabra de Advertencia 9: ' , idPalabraAdvertencia9);
        console.log('Id de Indicacion 9: ' , idIndicacion9);
        console.log('Id de Pictograma 9: ' , idPictograma9);
        console.log('Id de Categoria 10: ' , idCategoria10);
        console.log('Id de Palabra de Advertencia 10: ' , idPalabraAdvertencia10);
        console.log('Id de Indicacion 10: ' , idIndicacion10);
        console.log('Id de Pictograma 10: ' , idPictograma10);

            $.ajax({
                url: "bd/crud.php",
                type: "POST",
                //contentType: 'application/json',
                dataType: "json",
                data: {opcion:opcion,
                    cas:cas,
                    nombreProducto:nombreProducto,
                    idGrupo:idGrupo,
                    idUso:idUso,
                    nombreFabricante:nombreFabricante,
                    idClase1:idClase1,
                    idCategoria1:idCategoria1,
                    idPalabraAdvertencia1:idPalabraAdvertencia1,
                    idIndicacion1:idIndicacion1,
                    idPictograma1:idPictograma1,
                    idClase2:idClase2,
                    idCategoria2:idCategoria2,
                    idPalabraAdvertencia2:idPalabraAdvertencia2,
                    idIndicacion2:idIndicacion2,
                    idPictograma2:idPictograma2,
                    idClase3:idClase3,
                    idCategoria3:idCategoria3,
                    idPalabraAdvertencia3:idPalabraAdvertencia3,
                    idIndicacion3:idIndicacion3,
                    idPictograma3:idPictograma3,
                    idClase4:idClase4,
                    idCategoria4:idCategoria4,
                    idPalabraAdvertencia4:idPalabraAdvertencia4,
                    idIndicacion4:idIndicacion4,
                    idPictograma4:idPictograma4,
                    idClase5:idClase5,
                    idCategoria5:idCategoria5,
                    idPalabraAdvertencia5:idPalabraAdvertencia5,
                    idIndicacion5:idIndicacion5,
                    idPictograma5:idPictograma5,
                    idClase6:idClase6,
                    idCategoria6:idCategoria6,
                    idPalabraAdvertencia6:idPalabraAdvertencia6,
                    idIndicacion6:idIndicacion6,
                    idPictograma6:idPictograma6,
                    idClase7:idClase7,
                    idCategoria7:idCategoria7,
                    idPalabraAdvertencia7:idPalabraAdvertencia7,
                    idIndicacion7:idIndicacion7,
                    idPictograma7:idPictograma7,
                    idClase8:idClase8,
                    idCategoria8:idCategoria8,
                    idPalabraAdvertencia8:idPalabraAdvertencia8,
                    idIndicacion8:idIndicacion8,
                    idPictograma8:idPictograma8,
                    idClase9:idClase9,
                    idCategoria9:idCategoria9,
                    idPalabraAdvertencia9:idPalabraAdvertencia9,
                    idIndicacion9:idIndicacion9,
                    idPictograma9:idPictograma9,
                    idClase10:idClase10,
                    idCategoria10:idCategoria10,
                    idPalabraAdvertencia10:idPalabraAdvertencia10,
                    idIndicacion10:idIndicacion10,
                    idPictograma10:idPictograma10
                },
                success: function(data){
                    //Datos desde el Select de MySQL a la tabla.
                    console.log(data);
                    cas = data[0].cas;
                    nombreProducto = data[0].nombreProducto;
                    nombreGrupo = data[0].nombreGrupo;
                    nombreUso = data[0].nombreUso;
                    nombreFabricante = data[0].nombreFabricante;
                    if(opcion == 1){
                        tablaProductos.row.add([cas,nombreProducto,nombreGrupo,nombreUso,nombreFabricante]).draw();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'El producto "'+ nombreProducto +'" fue creado exitosamente',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }else{
                        tablaProductos.row(fila).data([id,nombreProducto,nombreGrupo,nombreUso,nombreFabricante]).draw();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'El producto "'+ nombreProducto +'" fue editado exitosamente.',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }            
                },
                error: function(textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                    Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ocurrio un error! El producto ya existe o los datos son erróneos.',
                    footer: '<a href="">Why do I have this issue?</a>',
                    timer: 3000
                    })
                  }
                // error: function() {
                //     Swal.fire({
                //         icon: 'error',
                //         title: 'Oops...',
                //         text: 'Ocurrio un error! El producto ya existe o los datos son erróneos.',
                //         footer: '<a href="">Why do I have this issue?</a>',
                //         timer: 3000
                //     })
                // }   
            });
            $("#modalCRUD").modal("hide");
    });

    
});