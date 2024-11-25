let lat;

$(document).ready(function(){

    //tabla USUARIOS
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

    //Botón NUEVO PRODUCTO
    $("#btnNuevo").click(function(){
        $("#formProductos").trigger("reset");
        $(".modal-header").css("background-color", "#1cc88a");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Nuevo Producto");            
        $("#modalCRUD").modal("show");
        $('#btnClase1').show();
        idPictograma1 = 0;

        $('#btnClase1').on('click', function() {
            $('#clase1').show();
            $('#btnClase1').hide();
            $('#btnEliminarClase1').show();
            $('#btnClase2').show();
            $('#nombreClase1').prop('selectedIndex', 0);
            $('#nombreClase1 option').removeAttr("selected");
            $('#nombreClase1').removeAttr('selected');
            $('#nombreClase1').removeAttr('disabled');
            $("#nombreClase1").attr("required","required");
            $('#nombreCategoria1').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia1').prop('selectedIndex', 0);
            $('#nombreIndicacion1').prop('selectedIndex', 0);
        });

        $('#btnClase2').on('click', function() {
            $('#btnEliminarClase1').show();
        });

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

        function cargarCategoria1(){
            $.ajax({
                type:"POST",
                url:"bd/cat1.php",
                data:"cat1=" + $('#nombreClase1').val(),
                success:function(r){
                    $('#nombreCategoria1').html(r);
                }
            });
        }

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

        function cargarPalabraAdvertencia1(){
            $.ajax({
                type:"POST",
                url:"bd/palad1.php",
                data:"palad1=" + $('#nombreClase1').val(),
                success:function(r){
                    $('#nombrePalabraAdvertencia1').html(r);
                }
            });
        }

        function cargarPictograma1(){
            $.ajax({
                type:"POST",
                url:"bd/pict1.php",
                data:"pict1=" + $('#nombreCategoria1').val(),
                success:function(r){
                    idPictograma1 = r;
                }
            });
        }

        $('#nombrePalabraAdvertencia1').change(function(){
			cargarIndicacion1();
            $('#nombreIndicacion1').prop('selectedIndex', 0);
            $('#nombreIndicacion1').removeAttr('disabled');
            $("#nombreIndicacion1").attr("required","required");
		});

        function cargarIndicacion1(){
            $.ajax({
                type:"POST",
                url:"bd/ind1.php",
                data:"ind1=" + $('#nombreClase1').val(),
                success:function(r){
                    $('#nombreIndicacion1').html(r);
                }
            });
        }

        $('#btnEliminarClase1').on('click', function() {
            $('#btnClase1').show();
            $('#btnEliminarClase1').hide();
            $('#btnClase2').hide();
            $('#nombreClase1').prop('selectedIndex', 0);
            $('#nombreClase1').prop('disabled', 'disabled');
            $('#nombreClase1').removeAttr('required');
            $('#nombreCategoria1').prop('selectedIndex', 0);
            $('#nombreCategoria1').prop('disabled', 'disabled');
            $('#nombreCategoria1').removeAttr('required');
            $('#nombrePalabraAdvertencia').prop('selectedIndex', 0);
            $('#nombrePalabraAdvertencia1').prop('disabled', 'disabled');
            $('#nombrePalabraAdvertencia1').removeAttr('required');
            $('#nombreIndicacion1').prop('selectedIndex', 0);
            $('#nombreIndicacion1').prop('disabled', 'disabled');
            $('#nombreIndicacion1').removeAttr('required');
            $idPictograma1 = 0;
            $('#clase1').hide();
          } );

        //Seteo de algunas opciones al presionar el botón de Nuevo
        document.getElementById('cas').placeholder = 'Chemical Abstracts Service Number *';
        document.getElementById('nombreProducto').placeholder = 'Campo Obligatorio *';
        document.getElementById('nombreProducto').value = '';
        document.getElementById('nombreGrupo').selectedIndex = 0;
        document.getElementById('nombreUso').selectedIndex = 1;
        document.getElementById('nombreFabricante').placeholder = 'Campo Obligatorio *';
        document.getElementById('nombreFabricante').value = '';
        document.getElementById('clase1').style.display = 'none';
        document.getElementById('btnClase2').style.display = 'none';
        
        // document.getElementById('nombreGrupo').required = true;
        // document.getElementById('nombreGrupo').placeholder = 'Elija un grupo.';
        // document.getElementById('nombreUso').required = true;
        // document.getElementById('pass2').required = true;
        // document.getElementById('pass2').placeholder = 'Campo Obligatorio *';
        // document.getElementById('wsVerif').checked = false;
        // document.getElementById('nombretipoUsuario').value = '';
        // document.getElementById('nombretipoUsuario').required = true;
        // document.getElementById('lugarTrabajo').required = true;
        // document.getElementById('lugarTrabajo').value = '';
        //id=null;

        $('#btnCancelar').on('click', function() {
            $("#formProductos").trigger("reset");
        });

        opcion = 1; //Nuevo Producto
    });
    
    var fila; //Capturar la fila para editar o borrar el registro
    
    //botón EDITAR    
    $(document).on("click", ".btnEditar", function(){
        $("#formProductos").trigger("reset");
        fila = $(this).closest("tr");
        cas = parseInt(fila.find('td:eq(0)').text());
        nombre = fila.find('td:eq(1)').text();
        nombreGrupo = fila.find('td:eq(2)').text();
        nombreUso = fila.find('td:eq(3)').text();
        nombreFabricante = fila.find('td:eq(4)').text();
        // apellido1 = fila.find('td:eq(2)').text();
        // apellido2 = fila.find('td:eq(3)').text();
        // pass1 = '';
        // pass2 = '';
        // telefono = parseInt(fila.find('td:eq(4)').text());
        // correo = fila.find('td:eq(5)').text();
        // nombretipoUsuario = fila.find('td:eq(6)').text();
        // if (fila.find('td:eq(7)').text() == 'Sí') {
        //     document.getElementById('wsVerif').checked = true;
        // } else if (fila.find('td:eq(7)').text() == 'No') {
        //     document.getElementById('wsVerif').checked = false;
        // }
        // lugarTrabajo = fila.find('td:eq(8)').text();
        //Seteo de algunas opciones al presionar el botón de Editar
        //document.getElementById('newid').autofocus = false;
        // document.getElementById('pass1').required = false;
        // document.getElementById('pass1').placeholder = 'Cambiar contraseña';
        // document.getElementById('pass2').required = false;
        // document.getElementById('pass2').placeholder = 'Repetir nueva contraseña';
        // document.getElementById('nombretipoUsuario').required = true;
        // document.getElementById('lugarTrabajo').required = true;
        $("#newid").val(id);
        $("#nombre").val(nombre);
        var selectednombreGrupo = nombreGrupo;
        $('#nombreGrupo option').map(function () {
        if ($(this).text() == selectednombreGrupo) return this;
        }).attr('selected', 'selected');
        var selectednombreUso = nombreUso;
        $('#nombreUso option').map(function () {
        if ($(this).text() == selectednombreUso) return this;
        }).attr('selected', 'selected');
        var selectednombreFabricante = nombreFabricante;
        $('#nombreFabricante option').map(function () {
        if ($(this).text() == selectednombreFabricante) return this;
        }).attr('selected', 'selected');
        // $("#apellido1").val(apellido1);
        // $("#apellido2").val(apellido2);
        // $("#pass1").val(pass1);
        // $("#pass2").val(pass2);
        // $("#telefono").val(telefono);
        // $("#correo").val(correo);
        // var selectednombretipoUsuario = nombretipoUsuario;
        // $('#nombretipoUsuario option').map(function () {
        //     if ($(this).text() == selectednombretipoUsuario) return this;
        // }).attr('selected', 'selected');
        // $("#wsVerif.value").val(wsVerif);
        // var selectedLugarTrabajo = lugarTrabajo;
        // $('#lugarTrabajo option').map(function () {
        //     if ($(this).text() == selectedLugarTrabajo) return this;
        // }).attr('selected', 'selected');
        opcion = 2; //Editar Producto
        $(".modal-header").css("background-color", "#4e73df");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Producto");            
        $("#modalCRUD").modal("show"); 
        console.log("Edición de Usuario - Paso 1...");
    });

    //botón BORRAR
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

        jsonData = {opcion:opcion,
            cas:cas,
            nombreProducto:nombreProducto,
            idGrupo:idGrupo,
            idUso:idUso,
            nombreFabricante:nombreFabricante,
            idClase1:idClase1,
            idCategoria1:idCategoria1,
            idPalabraAdvertencia1:idPalabraAdvertencia1,
            idIndicacion1:idIndicacion1,
            idPictograma1:idPictograma1}

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
                    idPictograma1:idPictograma1},
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