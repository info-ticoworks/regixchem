$(document).ready(function(){

    //tabla USUARIOS
    tablaPaises = $("#tablaPaises").DataTable({
       "columnDefs":[{
        "targets": -1,
        "data":null,
        "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditarUsuario'>Editar</button><button class='btn btn-danger btnBorrarUsuario'>Borrar</button></div></div>"
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
    tablaPaises.on('mouseenter', 'tr', function(){
        $(document).find('tr').removeClass("dtSelected");
        $(tablaPaises.row(this).selector.rows).addClass("dtSelected");
    });

    //Botón NUEVO USUARIO
    $("#btnNuevoUsuario").click(function(){
        $("#formPersonas").trigger("reset");
        $(".modal-header").css("background-color", "#1cc88a");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Nueva Persona");            
        $("#modalUsuarios").modal("show");
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
        id=null;
        opcion = 1; //alta
    });    
    
    var fila; //Capturar la fila para editar o borrar el registro
    
    //botón EDITAR    
    $(document).on("click", ".btnEditarUsuario", function(){
        fila = $(this).closest("tr");
        id = parseInt(fila.find('td:eq(0)').text());
        tipoCedula = fila.find('td:eq(1)').text();
        nombre = fila.find('td:eq(2)').text();
        apellido1 = fila.find('td:eq(3)').text();
        apellido2 = fila.find('td:eq(4)').text();
        pass1 = '';
        pass2 = '';
        telefono = parseInt(fila.find('td:eq(5)').text());
        correo = fila.find('td:eq(6)').text();
        nombretipoUsuario = fila.find('td:eq(7)').text();
        if (fila.find('td:eq(8)').text() == 'Sí') {
            document.getElementById('wsVerif').checked = true;
        } else if (fila.find('td:eq(8)').text() == 'No') {
            document.getElementById('wsVerif').checked = false;
        }
        nombrePais = fila.find('td:eq(9)').text();
        nombreEmpresa = fila.find('td:eq(10)').text();

        //Seteo de algunas opciones al presionar el botón de Editar
        document.getElementById('newid').autofocus = false;
        document.getElementById('tipoCedula').required = true;
        document.getElementById('pass1').required = false;
        document.getElementById('pass1').placeholder = 'Cambiar contraseña';
        document.getElementById('pass2').required = false;
        document.getElementById('pass2').placeholder = 'Repetir nueva contraseña';
        document.getElementById('nombretipoUsuario').required = true;
        document.getElementById('idPais').required = true;
        document.getElementById('nombreEmpresa').required = true;




        $("#newid").val(id);
        var selectedtipoCedula = tipoCedula;
        $('#tipoCedula option').map(function () {
            if ($(this).text() == selectedtipoCedula) return this;
        }).attr('selected', 'selected');
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
        var selectedPais = nombrePais;
        $('#idPais option').map(function () {
            if ($(this).text() == selectedPais) return this;
        }).attr('selected', 'selected');
        var selectednombreEmpresa = nombreEmpresa;
        $('#nombreEmpresa option').map(function () {
            if ($(this).text() == selectednombreEmpresa) return this;
        }).attr('selected', 'selected');
        opcion = 2; //editar
        $(".modal-header").css("background-color", "#4e73df");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Persona");            
        $("#modalUsuarios").modal("show"); 
        console.log("Edición de Usuario - Paso 1...");
    });

    //botón BORRAR
    $(document).on("click", ".btnBorrarUsuario", function(){    
        fila = $(this);
        id = parseInt($(this).closest("tr").find('td:eq(0)').text());
        nombre = $(this).closest("tr").find('td:eq(2)').text();
        apellido1 = $(this).closest("tr").find('td:eq(3)').text();
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
                        url: "bd/bdUsuarios.php",
                        type: "POST",
                        dataType: "json",
                        data: {opcion:opcion, id:id},
                        success: function(){
                            tablaPaises.row(fila.parents('tr')).remove().draw();
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
        newid = $.trim($("#newid").val());
        nombre = $.trim($("#nombre").val());
        tipoCedula = $.trim($("#tipoCedula").val());
        apellido1 = $.trim($("#apellido1").val());
        apellido2 = $.trim($("#apellido2").val());
        pass1 = $.trim($("#pass1").val());
        pass2 = $.trim($("#pass2").val());
        telefono = $.trim($("#telefono").val());
        correo = $.trim($("#correo").val());
        idPais = $.trim($("#idPais").val());
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
        console.log(idEmpresa);
        if (pass1 == pass2){
            $.ajax({
                url: "bd/bdUsuarios.php",
                type: "POST",
                dataType: "json",
                data: {id:id, newid:newid, tipoCedula:tipoCedula, nombre:nombre, apellido1:apellido1, apellido2:apellido2, pass1:pass1, pass2:pass2, telefono:telefono, correo:correo, idTipoUsuario:idTipoUsuario, wsNotif:wsNotif, idPais:idPais, idEmpresa:idEmpresa, opcion:opcion},
                success: function(data){
                    //Datos desde el Select de MySQL a la tabla.
                    console.log(data);
                    id = data[0].cedula;
                    tipoCedula = data[0].tipoCedula;
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
                    idPais = data[0].pais;
                    nombreEmpresa = data[0].nombreEmpresa;
                    console.log(wsVerif);
                    if(opcion == 1){
                        tablaPaises.row.add([id,tipoCedula,nombre,apellido1,apellido2,telefono,correo,nombretipoUsuario,wsVerif,idPais,nombreEmpresa]).draw();

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'El usuario '+ nombre +' '+ apellido1 +' fue creado exitosamente',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }else{
                        tablaPaises.row(fila).data([id,tipoCedula,nombre,apellido1,apellido2,telefono,correo,nombretipoUsuario,wsVerif,idPais,nombreEmpresa]).draw();
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
            $("#modalUsuarios").modal("hide");
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

    //Autofocus al presionar el botón Nuevo
    $('#modalUsuarios').on('shown.bs.modal', function() {
        // get the locator for an input in your modal. Here I'm focusing on
        // the element with the id of myInput
        $('#newid').focus()
    });
    
});