$(document).ready(function(){

    //tabla USUARIOS
    tablaPersonas = $("#tablaPersonas").DataTable({
       "columnDefs":[{
        "targets": -1,
        "data":null,
        "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditar'>Editar</button><button class='btn btn-danger btnBorrar'>Borrar</button></div></div>"
       }],
       "createdRow": function(row, data, dataIndex) {
            if ( data[4] ) {
                $(row).addClass( 'text-center' );
            }
            if ( data[7] ) {
                $(row).addClass( 'text-center' );
            }
        },

    responsive: "true",
    order: [[2,'asc']],
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
    tablaPersonas.on('mouseenter', 'tr', function(){
        $(document).find('tr').removeClass("dtSelected");
        $(tablaPersonas.row(this).selector.rows).addClass("dtSelected");
    });

    //Botón NUEVO USUARIO
    $("#btnNuevo").click(function(){
        $("#formPersonas").trigger("reset");
        $(".modal-header").css("background-color", "#1cc88a");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Nueva Persona");            
        $("#modalCRUD").modal("show");
        //Seteo de algunas opciones al presionar el botón de Nuevo
        document.getElementById('pass1').required = true;
        document.getElementById('pass1').placeholder = 'Campo Obligatorio *';
        document.getElementById('pass2').required = true;
        document.getElementById('pass2').placeholder = 'Campo Obligatorio *';
        document.getElementById('wsVerif').checked = false;
        document.getElementById('nombretipoUsuario').value = '';
        document.getElementById('nombretipoUsuario').required = true;
        document.getElementById('nombreEmpresa').required = true;
        document.getElementById('nombreEmpresa').value = '';
        document.getElementById('lugarTrabajo').required = true;
        document.getElementById('lugarTrabajo').value = '';
        id=null;
        opcion = 1; //alta
    });    
    
    var fila; //Capturar la fila para editar o borrar el registro
    
    //botón EDITAR    
    $(document).on("click", ".btnEditar", function(){
        fila = $(this).closest("tr");
        id = parseInt(fila.find('td:eq(0)').text());
        nombre = fila.find('td:eq(1)').text();
        apellido1 = fila.find('td:eq(2)').text();
        apellido2 = fila.find('td:eq(3)').text();
        pass1 = '';
        pass2 = '';
        telefono = parseInt(fila.find('td:eq(4)').text());
        correo = fila.find('td:eq(5)').text();
        nombretipoUsuario = fila.find('td:eq(6)').text();
        if (fila.find('td:eq(7)').text() == 'Sí') {
            document.getElementById('wsVerif').checked = true;
        } else if (fila.find('td:eq(7)').text() == 'No') {
            document.getElementById('wsVerif').checked = false;
        }
        nombreEmpresa = fila.find('td:eq(8)').text();
        lugarTrabajo = fila.find('td:eq(9)').text();
        //Seteo de algunas opciones al presionar el botón de Editar
        document.getElementById('newid').autofocus = false;
        document.getElementById('pass1').required = false;
        document.getElementById('pass1').placeholder = 'Cambiar contraseña';
        document.getElementById('pass2').required = false;
        document.getElementById('pass2').placeholder = 'Repetir nueva contraseña';
        document.getElementById('nombretipoUsuario').required = true;
        document.getElementById('nombreEmpresa').required = true;
        document.getElementById('lugarTrabajo').required = true;
        $("#newid").val(id);
        $("#nombre").val(nombre);
        $("#apellido1").val(apellido1);
        $("#apellido2").val(apellido2);
        $("#pass1").val(pass1);
        $("#pass2").val(pass2);
        $("#telefono").val(telefono);
        $("#correo").val(correo);
        var selectednombretipoUsuario = nombretipoUsuario;
        $('#nombretipoUsuario option').map(function () {
            if ($(this).text() == selectednombretipoUsuario) return this;
        }).attr('selected', 'selected');
        $("#wsVerif.value").val(wsVerif);
        var selectednombreEmpresa = nombreEmpresa;
        $('#nombreEmpresa option').map(function () {
            if ($(this).text() == selectednombreEmpresa) return this;
        }).attr('selected', 'selected');
        var selectedLugarTrabajo = lugarTrabajo;
        $('#lugarTrabajo option').map(function () {
            if ($(this).text() == selectedLugarTrabajo) return this;
        }).attr('selected', 'selected');
        opcion = 2; //editar
        $(".modal-header").css("background-color", "#4e73df");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Persona");            
        $("#modalCRUD").modal("show"); 
        console.log("Edición de Usuario - Paso 1...");
    });

    //botón BORRAR
    $(document).on("click", ".btnBorrar", function(){    
        fila = $(this);
        id = parseInt($(this).closest("tr").find('td:eq(0)').text());
        nombre = $(this).closest("tr").find('td:eq(1)').text();
        apellido1 = $(this).closest("tr").find('td:eq(2)').text();
        opcion = 3 //borrar
        Swal.fire({
            title: 'Está seguro que desea eliminar el usuario '+ nombre +' '+ apellido1 +'?',
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
                        data: {opcion:opcion, id:id},
                        success: function(){
                            tablaPersonas.row(fila.parents('tr')).remove().draw();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'El usuario '+ nombre +' '+ apellido1 +' fue eliminado con éxito',
                                showConfirmButton: false,
                                timer: 2000
                            })
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                            // alert("Status: " + textStatus); alert("Error: " + errorThrown);
                            console.log("Status: " + textStatus);
                            console.log("Error: " + errorThrown);
                        }
                    });
                }
        })
    });
    
    //submit USUARIOS
    $("#formPersonas").submit(function(e){
        e.preventDefault();
        //id = $.trim($("#newid").val());
        newid = $.trim($("#newid").val());
        nombre = $.trim($("#nombre").val());
        apellido1 = $.trim($("#apellido1").val());
        apellido2 = $.trim($("#apellido2").val());
        pass1 = $.trim($("#pass1").val());
        pass2 = $.trim($("#pass2").val());
        telefono = $.trim($("#telefono").val());
        correo = $.trim($("#correo").val());
        idTipoUsuario = $.trim($('#nombretipoUsuario').val());
        console.log(idTipoUsuario);
        wsNotif = '';
        x = document.getElementById("wsVerif").checked;
        if (x == false) {
            wsNotif = 0;
        } else {
            wsNotif = 1;
        }
        idEmpresa = $.trim($('#nombreEmpresa').val());
        idLugarTrabajo = $.trim($('#lugarTrabajo').val());
        console.log(idEmpresa);
        if (pass1 == pass2){
            $.ajax({
                url: "bd/crud.php",
                type: "POST",
                dataType: "json",
                data: {id:id, newid:newid, nombre:nombre, apellido1:apellido1, apellido2:apellido2, pass1:pass1, pass2:pass2, telefono:telefono, correo:correo, idTipoUsuario:idTipoUsuario, wsNotif:wsNotif, idEmpresa:idEmpresa, idLugarTrabajo:idLugarTrabajo,opcion:opcion},
                success: function(data){
                    //Datos desde el Select de MySQL a la tabla.
                    console.log(data);
                    id = data[0].cedula;
                    nombre = data[0].nombre;
                    apellido1 = data[0].apellido1;
                    apellido2 = data[0].apellido2;
                    telefono = data[0].telefono;
                    correo = data[0].correo;
                    nombretipoUsuario = data[0].nombretipoUsuario;
                    wsNotif = data[0].wsNotif;
                    if (wsNotif == 0) {
                        wsVerif = 'No';
                    } else {
                        wsVerif = 'Sí';
                    }
                    nombreEmpresa = data[0].nombreEmpresa;
                    nombreLugarTrabajo = data[0].nombreLugarTrabajo;
                    console.log(wsVerif);
                    if(opcion == 1){
                        tablaPersonas.row.add([id,nombre,apellido1,apellido2,telefono,correo,nombretipoUsuario,wsVerif,nombreEmpresa,nombreLugarTrabajo]).draw();
                        //var row =  tablaPersonas.row.add([id,nombre,apellido1,apellido2,telefono,correo,nombretipoUsuario,wsVerif,nombreEmpresa,nombreLugarTrabajo]).select().draw().node();
                        //setTimeout(function(){$("#tablaPersonas").DataTable().row(row).deselect();}, 5000);
                        //var row =  $("#example").DataTable().row.add(addrow).select().draw().node();
                        //setTimeout(function(){$("#ablaPersonas").DataTable().row(row).deselect();}, 5000);

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'El usuario '+ nombre +' '+ apellido1 +' fue creado exitosamente',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }else{
                        tablaPersonas.row(fila).data([id,nombre,apellido1,apellido2,telefono,correo,nombretipoUsuario,wsVerif,nombreEmpresa,nombreLugarTrabajo]).draw();
                        $('td:eq(4)').css( 'text-align', 'center' );
                        $('td:eq(7)').css( 'text-align', 'center' );
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'El usuario '+ nombre +' '+ apellido1 +' fue editado exitosamente.',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }            
                },
                error: function() {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ocurrio un error! El ID '+ newid +' ya existe o los datos son erróneos.',
                        footer: '<a href="">Why do I have this issue?</a>',
                        timer: 3000
                    })
                }      
            });
            $("#modalCRUD").modal("hide");
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Lo sentimos...',
                text: 'Las contraseñas no coinciden.',
                footer: 'Favor revisar la información y volver a intentar',
                timer: 3000
            })
        }  
    });
    
    //tabla MARCAS
    tablaMarcas = $("#tablaMarcas").DataTable({
        "columnDefs":[{
         "targets": -1,
         "data":null,
         "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-success btnMarcasDetalles'>Detalles</button></div></div>"
        }],
 
     responsive: "true",
     order: [[4,'desc']],
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

    //botón DETALLE DE MARCAS
    $(document).on("click", ".btnMarcasDetalles", function(){
        fila = $(this).closest("tr");
        id = parseInt(fila.find('td:eq(0)').text());
        nombre = fila.find('td:eq(1)').text();
        apellido1 = fila.find('td:eq(2)').text();
        apellido2 = fila.find('td:eq(3)').text();
        pass1 = '';
        pass2 = '';
        telefono = parseInt(fila.find('td:eq(4)').text());
        correo = fila.find('td:eq(5)').text();
        nombretipoUsuario = fila.find('td:eq(6)').text();
        if (fila.find('td:eq(7)').text() == 'Sí') {
            document.getElementById('wsVerif').checked = true;
        } else if (fila.find('td:eq(7)').text() == 'No') {
            document.getElementById('wsVerif').checked = false;
        }
        nombreEmpresa = fila.find('td:eq(8)').text();
        //Seteo de algunas opciones al presionar el botón de Editar
        document.getElementById('pass1').required = false;
        document.getElementById('pass1').placeholder = 'Cambiar contraseña';
        document.getElementById('pass2').required = false;
        document.getElementById('pass2').placeholder = 'Repetir nueva contraseña';
        document.getElementById('nombretipoUsuario').required = true;
        document.getElementById('nombreEmpresa').required = true;
        $("#newid").val(id);
        $("#nombre").val(nombre);
        $("#apellido1").val(apellido1);
        $("#apellido2").val(apellido2);
        $("#pass1").val(pass1);
        $("#pass2").val(pass2);
        $("#telefono").val(telefono);
        $("#correo").val(correo);
        var selectednombretipoUsuario = nombretipoUsuario;
        $('#nombretipoUsuario option').map(function () {
            if ($(this).text() == selectednombretipoUsuario) return this;
        }).attr('selected', 'selected');
        $("#wsVerif.value").val(wsVerif);
        var selectednombreEmpresa = nombreEmpresa;
        $('#nombreEmpresa option').map(function () {
            if ($(this).text() == selectednombreEmpresa) return this;
        }).attr('selected', 'selected');
        opcion = 2; //editar
        $(".modal-header").css("background-color", "#4e73df");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Detalles de marca.");            
        $("#modalMarcas").modal("show");
        console.log("Edición de Usuario - Paso 1...");
    });

    //Autofocus al presionar el botón Nuevo
    $('#modalCRUD').on('shown.bs.modal', function() {
        // get the locator for an input in your modal. Here I'm focusing on
        // the element with the id of myInput
        $('#newid').focus()
    });
    
});