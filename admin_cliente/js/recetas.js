$(document).ready(function () {

    //Precarga de tablas.
    // window.onload = function() {
    //     console.log('Inicio de carga de datos de CAS...');
    //     if (tablaCAS === '') {
    //         //timerCas();
    //         checkCas1 = 0;
    //         waitForMe().then(function(){
    //             console.log('Datos de CAS cargados...')
    //             //$(timerCas).stop();
    //         },
    //         function(err){
    //             console.log('This is error message.', err);
    //         })
    //         function waitForMe(){
    //             return new Promise(function(resolve, reject){
    //                 $.ajax({
    //                     type: "POST",
    //                     url: "bd/casLoad.php",
    //                     success: function (r) {
    //                         tablaCAS = r
    //                         checkCas1 = 0;
    //                         $('#loadCasModal').html(tablaCAS);
    //                         checkCas1 = 1;
    //                     },
    //                     error: function (xhr, ajaxOptions, thrownError) {
    //                         alert(xhr.status);
    //                         alert(thrownError);
    //                     }
    //                 });
    //                 if (checkCas1 === 1) {
    //                     setTimeout(() => {
    //                         resolve();
    //                     }, 800);
    //                 } else {
    //                     setTimeout(() => {
    //                         waitForMe().then(function(){
    //                             console.log('Datos de CAS cargados...')
    //                             //$(timerCas).stop();
    //                         },
    //                         function(err){
    //                             console.log('This is error message.', err);
    //                         })
    //                     }, 800);
    //                 }
    //             })
    //         }

    //     } else {
    //         console.log('Datos de CAS cargados...')
    //     }

    //     console.log('Inicio de carga de datos de ONU...');
    //     if (tablaONU === '') {
    //         timerOnu();
    //         checkOnu1 = 0;
    //         waitForMe().then(function(){
    //             console.log('Datos de ONU cargados...')
    //             $(timerOnu).stop();
    //         },
    //         function(err){
    //             console.log('This is error message.', err);
    //         })
    //         function waitForMe(){
    //             return new Promise(function(resolve, reject){
    //                 $.ajax({
    //                     type: "POST",
    //                     url: "bd/onuLoad.php",
    //                     success: function (j) {
    //                         tablaONU = j
    //                         checkOnu1 = 0;
    //                         $('#loadOnuModal').html(tablaONU);
    //                         checkOnu1 = 1;
    //                     },
    //                     error: function (xhr, ajaxOptions, thrownError) {
    //                         alert(xhr.status);
    //                         alert(thrownError);
    //                     }
    //                 });
    //                 if (checkOnu1 === 1) {
    //                     setTimeout(() => {
    //                         //console.log('Sí hay datos');
    //                         resolve();
    //                     }, 4000);
    //                 } else {
    //                     setTimeout(() => {
    //                         //console.log('No hay datos');
    //                         waitForMe().then(function(){
    //                             console.log('Datos de ONU cargados...')
    //                             $(timerOnu).stop();
    //                         },
    //                         function(err){
    //                             console.log('This is error message.', err);
    //                         })
    //                     }, 4000);
    //                 }
    //             })
    //         }
    //     } else {
    //         console.log('Datos de ONU cargados...')
    //     }
    // }

    tablaCAS = '';
    tablaONU = '';
    ingrNumber = 0;
    onuNumber = 0;

    //Timer de carga de base de datos de CAS y ONU
    function timerCas (delay) {
        Swal.fire({
            title: "Cargando la Base de Datos de CAS!",
            html: "Por favor espere.",
            timer: delay,
            timerProgressBar: false,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup();
              timerInterval = timer
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              //console.log("I was closed by the timer");
            }
        });
    }

    function timerOnu (delay) {
        Swal.fire({
            title: "Cargando la Base de Datos de ONU!",
            html: "Por favor espere.",
            timer: delay,
            timerProgressBar: false,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup();
              timerInterval = timer
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              //console.log("I was closed by the timer");
            }
        });
    }

    //Tabla Recetas
    tablaRecetas = $("#tablaRecetas").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditarReceta'>Editar</button><button class='btn btn-danger btnBorrarReceta'>Borrar</button><button class='btn btn-success btnPrevisualizar'>Previsualizar</button></div></div>"
        }],
        "createdRow": function (row, data, dataIndex) {
            if (data[0]) {
                $(row).addClass('text-center');
            }
            if (data[1]) {
                $(row).addClass('text-center');
            }
            if (data[2]) {
                $(row).addClass('text-center');
            }
        },

        responsive: "true",
        order: [[0, 'asc']],
        dom: 'Bfrtilp',
        buttons: [
            {
                extend: 'copyHtml5',
                text: '<i class="fas fa-copy"></i> ',
                titleAttr: 'Copiar tabla',
                className: 'btn btn-primary'
            },
            {
                extend: 'excelHtml5',
                text: '<i class="fas fa-file-excel"></i> ',
                titleAttr: 'Exportar a Excel',
                className: 'btn btn-success'
            },
            {
                extend: 'pdfHtml5',
                text: '<i class="fas fa-file-pdf"></i> ',
                titleAttr: 'Exportar a PDF',
                className: 'btn btn-danger'
            },
            {
                extend: 'print',
                text: '<i class="fa fa-print"></i> ',
                titleAttr: 'Imprimir',
                className: 'btn btn-info'
            },
            {
                extend: 'csvHtml5',
                text: '<i class="fa fa-file-csv"></i> ',
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
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    //Highlight de filas
    tablaRecetas.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaRecetas.row(this).selector.rows).addClass("dtSelected");
    });


    //Inicio de botones para buscar ingredientes

    $("#btnBuscarIngrediente1").click(function () {
        ingrNumber = 1;
        if (tablaCAS === '') {
            timerCas();
            checkCas1 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas1 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas1 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas1 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente2").click(function () {
        ingrNumber = 2;
        if (tablaCAS === '') {
            timerCas();
            checkCas2 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas2 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas2 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas2 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente3").click(function () {
        ingrNumber = 3;
        if (tablaCAS === '') {
            timerCas();
            checkCas3 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas3 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas3 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas3 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente4").click(function () {
        ingrNumber = 4;
        if (tablaCAS === '') {
            timerCas();
            checkCas4 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas4 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas4 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas4 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente5").click(function () {
        ingrNumber = 5;
        if (tablaCAS === '') {
            timerCas();
            checkCas5 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas5 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas5 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas5 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente6").click(function () {
        ingrNumber = 6;
        if (tablaCAS === '') {
            timerCas();
            checkCas6 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas6 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas6 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas6 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente7").click(function () {
        ingrNumber = 7;
        if (tablaCAS === '') {
            timerCas();
            checkCas7 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas7 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas7 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas7 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente8").click(function () {
        ingrNumber = 8;
        if (tablaCAS === '') {
            timerCas();
            checkCas8 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas8 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas8 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas8 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente9").click(function () {
        ingrNumber = 9;
        if (tablaCAS === '') {
            timerCas();
            checkCas9 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas9 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas9 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas9 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente10").click(function () {
        ingrNumber = 10;
        if (tablaCAS === '') {
            timerCas();
            checkCas10 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas10 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas10 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas10 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente11").click(function () {
        ingrNumber = 11;
        if (tablaCAS === '') {
            timerCas();
            checkCas11 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas11 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas11 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas11 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente12").click(function () {
        ingrNumber = 12;
        if (tablaCAS === '') {
            timerCas();
            checkCas12 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas12 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas12 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas12 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente13").click(function () {
        ingrNumber = 13;
        if (tablaCAS === '') {
            timerCas();
            checkCas13 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas13 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas13 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas13 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente14").click(function () {
        ingrNumber = 14;
        if (tablaCAS === '') {
            timerCas();
            checkCas14 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas14 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas14 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas14 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarIngrediente15").click(function () {
        ingrNumber = 15;
        if (tablaCAS === '') {
            timerCas();
            checkCas15 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/casLoad.php",
                        success: function (r) {
                            tablaCAS = r
                            checkCas15 = 0;
                            $('#loadCasModal').html(tablaCAS);
                            checkCas15 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkCas15 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerCas).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 800);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal');
            $("#modalProductosReducida").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    //Final de botones para buscar ingredientes



    //Inicio de botones para buscar ONU

    $("#btnBuscarOnu1").click(function () {
        onuNumber = 1;
        if (tablaONU === '') {
            timerOnu();
            checkOnu1 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu1 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu1 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu1 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu2").click(function () {
        onuNumber = 2;
        if (tablaONU === '') {
            timerOnu();
            checkOnu2 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu2 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu2 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu2 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu3").click(function () {
        onuNumber = 3;
        if (tablaONU === '') {
            timerOnu();
            checkOnu3 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu3 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu3 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu3 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu4").click(function () {
        onuNumber = 4;
        if (tablaONU === '') {
            timerOnu();
            checkOnu4 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu4 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu4 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu4 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu5").click(function () {
        onuNumber = 5;
        if (tablaONU === '') {
            timerOnu();
            checkOnu5 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu5 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu5 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu5 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu6").click(function () {
        onuNumber = 6;
        if (tablaONU === '') {
            timerOnu();
            checkOnu6 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu6 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu6 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu6 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu7").click(function () {
        onuNumber = 7;
        if (tablaONU === '') {
            timerOnu();
            checkOnu7 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu7 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu7 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu7 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu8").click(function () {
        onuNumber = 8;
        if (tablaONU === '') {
            timerOnu();
            checkOnu8 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu8 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu8 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu8 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu9").click(function () {
        onuNumber = 9;
        if (tablaONU === '') {
            timerOnu();
            checkOnu9 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu9 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu9 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu9 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu10").click(function () {
        onuNumber = 10;
        if (tablaONU === '') {
            timerOnu();
            checkOnu10 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu10 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu10 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu10 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu11").click(function () {
        onuNumber = 11;
        if (tablaONU === '') {
            timerOnu();
            checkOnu11 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu11 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu11 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu11 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu12").click(function () {
        onuNumber = 12;
        if (tablaONU === '') {
            timerOnu();
            checkOnu12 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu12 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu12 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu12 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu13").click(function () {
        onuNumber = 13;
        if (tablaONU === '') {
            timerOnu();
            checkOnu13 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu13 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu13 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu13 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu14").click(function () {
        onuNumber = 14;
        if (tablaONU === '') {
            timerOnu();
            checkOnu14 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu14 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu14 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu14 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    $("#btnBuscarOnu15").click(function () {
        onuNumber = 15;
        if (tablaONU === '') {
            timerOnu();
            checkOnu15 = 0;
            waitForMe().then(function(){
                console.log('Mostrando Modal')
                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                $(timerCas).stop();
            },
            function(err){
                console.log('This is error message.', err);
            })
            function waitForMe(){
                console.log('Inicio');
                return new Promise(function(resolve, reject){
                    $.ajax({
                        type: "POST",
                        url: "bd/onuLoad.php",
                        success: function (j) {
                            tablaONU = j
                            checkOnu15 = 0;
                            $('#loadOnuModal').html(tablaONU);
                            checkOnu15 = 1;
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                    });
                    console.log('Carga normal.')
                    if (checkOnu15 === 1) {
                        setTimeout(() => {
                            console.log('Sí hay datos');
                            resolve();
                        }, 4000);
                    } else {
                        setTimeout(() => {
                            console.log('No hay datos');
                            waitForMe().then(function(){
                                console.log('Mostrando Modal')
                                $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
                                $(timerOnu).stop();
                            },
                            function(err){
                                console.log('This is error message.', err);
                            })
                        }, 4000);
                    }
                })
            }

        } else {
            console.log('Mostrando Modal')
            $("#modalONU").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });
    
    //Final de botones para buscar ONU


    //Inicio de botones para agregar y quitar ingredientes

    $('#btnIngrediente2').on('click', function () {
        cas2 = 'null';
        onu2 = 'null';
        $("#nombreIngrediente2").attr("required", "required");
        $("#nombreOnu2").attr("required", "required");
        $("#nivel2").attr("required", "required");
        $('#ingrediente2').show();
        $('#modalRecetas').animate({ scrollTop: 130 }, 'fast');
        $('#btnIngrediente2').hide();
        $('#btnQuitarIngrediente2').show();
        $('#btnIngrediente3').show();
    });

    $('#btnQuitarIngrediente2').on('click', function () {
        cas2 = 'null';
        onu2 = 'null';
        $('#nombreIngrediente2').removeAttr('required');
        $('#nombreOnu2').removeAttr('required');
        $('#nivel2').removeAttr('required');
        $('#ingrediente2').hide();
        $('#modalRecetas').animate({ scrollTop: 130 }, 'fast');
        $('#fabricante2').slideDown(122);
        $("#nombreIngrediente2").val('');
        $("#nombreOnu2").val('');
        $("#nivel2").val('');
        $('#btnIngrediente2').show();
    });

    $('#btnIngrediente3').on('click', function () {
        cas3 = 'null';
        onu3 = 'null';
        $("#nombreIngrediente3").attr("required", "required");
        $("#nombreOnu").attr("required", "required");
        $("#nivel3").attr("required", "required");
        $('#ingrediente3').show();
        $('#modalRecetas').animate({ scrollTop: 260 }, 'fast');
        $('#btnQuitarIngrediente2').hide();
        $('#btnIngrediente3').hide();
        $('#btnQuitarIngrediente3').show();
        $('#btnIngrediente4').show();
    });

    $('#btnQuitarIngrediente3').on('click', function () {
        cas3 = 'null';
        onu3 = 'null';
        $('#nombreIngrediente3').removeAttr('required');
        $('#nombreOnu3').removeAttr('required');
        $('#nivel3').removeAttr('required');
        $('#ingrediente3').hide();
        $('#modalRecetas').animate({ scrollTop: 260 }, 'fast');
        $('#fabricante3').slideDown(122);
        $("#nombreIngrediente3").val('');
        $("#nombreOnu3").val('');
        $("#nivel3").val('');
        $('#btnQuitarIngrediente2').show();
        $('#btnIngrediente3').show();
    });

    $('#btnIngrediente4').on('click', function () {
        cas4 = 'null';
        onu4 = 'null';
        $("#nombreIngrediente4").attr("required", "required");
        $("#nombreOnu4").attr("required", "required");
        $("#nivel4").attr("required", "required");
        $('#ingrediente4').show();
        $('#modalRecetas').animate({ scrollTop: 390 }, 'fast');
        $('#btnQuitarIngrediente3').hide();
        $('#btnIngrediente4').hide();
        $('#btnQuitarIngrediente4').show();
        $('#btnIngrediente5').show();
    });

    $('#btnQuitarIngrediente4').on('click', function () {
        cas4 = 'null';
        onu4 = 'null';
        $('#nombreIngrediente4').removeAttr('required');
        $('#nombreOnu4').removeAttr('required');
        $('#nivel4').removeAttr('required');
        $('#ingrediente4').hide();
        $('#modalRecetas').animate({ scrollTop: 390 }, 'fast');
        $('#fabricante4').slideDown(122);
        $("#nombreIngrediente4").val('');
        $("#nombreOnu4").val('');
        $("#nivel4").val('');
        $('#btnQuitarIngrediente3').show();
        $('#btnIngrediente4').show();
    });

    $('#btnIngrediente5').on('click', function () {
        cas5 = 'null';
        onu5 = 'null';
        $("#nombreIngrediente5").attr("required", "required");
        $("#nombreOnu5").attr("required", "required");
        $("#nivel5").attr("required", "required");
        $('#ingrediente5').show();
        $('#modalRecetas').animate({ scrollTop: 520 }, 'fast');
        $('#btnQuitarIngrediente4').hide();
        $('#btnIngrediente5').hide();
        $('#btnQuitarIngrediente5').show();
        $('#btnIngrediente6').show();
    });

    $('#btnQuitarIngrediente5').on('click', function () {
        cas5 = 'null';
        onu5 = 'null';
        $('#nombreIngrediente5').removeAttr('required');
        $('#nombreOnu5').removeAttr('required');
        $('#nivel5').removeAttr('required');
        $('#ingrediente5').hide();
        $('#modalRecetas').animate({ scrollTop: 520 }, 'fast');
        $('#fabricante5').slideDown(122);
        $("#nombreIngrediente5").val('');
        $("#nombreOnu5").val('');
        $("#nivel5").val('');
        $('#btnQuitarIngrediente4').show();
        $('#btnIngrediente5').show();
    });

    $('#btnIngrediente6').on('click', function () {
        cas6 = 'null';
        onu6 = 'null';
        $("#nombreIngrediente6").attr("required", "required");
        $("#nombreOnu6").attr("required", "required");
        $("#nivel6").attr("required", "required");
        $('#ingrediente6').show();
        $('#modalRecetas').animate({ scrollTop: 650 }, 'fast');
        $('#btnQuitarIngrediente5').hide();
        $('#btnIngrediente6').hide();
        $('#btnQuitarIngrediente6').show();
        $('#btnIngrediente7').show();
    });

    $('#btnQuitarIngrediente6').on('click', function () {
        cas6 = 'null';
        onu6 = 'null';
        $('#nombreIngrediente6').removeAttr('required');
        $('#nombreOnu6').removeAttr('required');
        $('#nivel6').removeAttr('required');
        $('#ingrediente6').hide();
        $('#modalRecetas').animate({ scrollTop: 650 }, 'fast');
        $('#fabricante6').slideDown(122);
        $("#nombreIngrediente6").val('');
        $("#nombreOnu6").val('');
        $("#nivel6").val('');
        $('#btnQuitarIngrediente5').show();
        $('#btnIngrediente6').show();
    });

    $('#btnIngrediente7').on('click', function () {
        cas7 = 'null';
        onu7 = 'null';
        $("#nombreIngrediente7").attr("required", "required");
        $("#nombreOnu7").attr("required", "required");
        $("#nivel7").attr("required", "required");
        $('#ingrediente7').show();
        $('#modalRecetas').animate({ scrollTop: 780 }, 'fast');
        $('#btnQuitarIngrediente6').hide();
        $('#btnIngrediente7').hide();
        $('#btnQuitarIngrediente7').show();
        $('#btnIngrediente8').show();
    });

    $('#btnQuitarIngrediente7').on('click', function () {
        cas7 = 'null';
        onu7 = 'null';
        $('#nombreIngrediente7').removeAttr('required');
        $('#nombreOnu7').removeAttr('required');
        $('#nivel7').removeAttr('required');
        $('#ingrediente7').hide();
        $('#modalRecetas').animate({ scrollTop: 780 }, 'fast');
        $('#fabricante7').slideDown(122);
        $("#nombreIngrediente7").val('');
        $("#nombreOnu7").val('');
        $("#nivel7").val('');
        $('#btnQuitarIngrediente6').show();
        $('#btnIngrediente7').show();
    });

    $('#btnIngrediente8').on('click', function () {
        cas8 = 'null';
        onu8 = 'null';
        $("#nombreIngrediente8").attr("required", "required");
        $("#nombreOnu8").attr("required", "required");
        $("#nivel8").attr("required", "required");
        $('#ingrediente8').show();
        $('#modalRecetas').animate({ scrollTop: 910 }, 'fast');
        $('#btnQuitarIngrediente7').hide();
        $('#btnIngrediente8').hide();
        $('#btnQuitarIngrediente8').show();
        $('#btnIngrediente9').show();
    });

    $('#btnQuitarIngrediente8').on('click', function () {
        cas8 = 'null';
        onu8 = 'null';
        $('#nombreIngrediente8').removeAttr('required');
        $('#nombreOnu8').removeAttr('required');
        $('#nivel8').removeAttr('required');
        $('#ingrediente8').hide();
        $('#modalRecetas').animate({ scrollTop: 910 }, 'fast');
        $('#fabricante8').slideDown(122);
        $("#nombreIngrediente8").val('');
        $("#nombreOnu8").val('');
        $("#nivel8").val('');
        $('#btnQuitarIngrediente7').show();
        $('#btnIngrediente8').show();
    });

    $('#btnIngrediente9').on('click', function () {
        cas9 = 'null';
        onu9 = 'null';
        $("#nombreIngrediente9").attr("required", "required");
        $("#nombreOnu9").attr("required", "required");
        $("#nivel9").attr("required", "required");
        $('#ingrediente9').show();
        $('#modalRecetas').animate({ scrollTop: 1040 }, 'fast');
        $('#btnQuitarIngrediente8').hide();
        $('#btnIngrediente9').hide();
        $('#btnQuitarIngrediente9').show();
        $('#btnIngrediente10').show();
    });

    $('#btnQuitarIngrediente9').on('click', function () {
        cas9 = 'null';
        onu9 = 'null';
        $('#nombreIngrediente9').removeAttr('required');
        $('#nombreOnu9').removeAttr('required');
        $('#nivel9').removeAttr('required');
        $('#ingrediente9').hide();
        $('#modalRecetas').animate({ scrollTop: 1040 }, 'fast');
        $('#fabricante9').slideDown(122);
        $("#nombreIngrediente9").val('');
        $("#nombreOnu9").val('');
        $("#nivel9").val('');
        $('#btnQuitarIngrediente8').show();
        $('#btnIngrediente9').show();
    });

    $('#btnIngrediente10').on('click', function () {
        cas10 = 'null';
        onu10 = 'null';
        $("#nombreIngrediente10").attr("required", "required");
        $("#nombreOnu10").attr("required", "required");
        $("#nivel10").attr("required", "required");
        $('#ingrediente10').show();
        $('#modalRecetas').animate({ scrollTop: 1170 }, 'fast');
        $('#btnQuitarIngrediente9').hide();
        $('#btnIngrediente10').hide();
        $('#btnQuitarIngrediente10').show();
        $('#btnIngrediente11').show();
    });

    $('#btnQuitarIngrediente10').on('click', function () {
        cas10 = 'null';
        onu10 = 'null';
        $('#nombreIngrediente10').removeAttr('required');
        $('#nombreOnu10').removeAttr('required');
        $('#nivel10').removeAttr('required');
        $('#ingrediente10').hide();
        $('#modalRecetas').animate({ scrollTop: 1170 }, 'fast');
        $('#fabricante10').slideDown(122);
        $("#nombreIngrediente10").val('');
        $("#nombreOnu10").val('');
        $("#nivel10").val('');
        $('#btnQuitarIngrediente9').show();
        $('#btnIngrediente10').show();
    });

    $('#btnIngrediente11').on('click', function () {
        cas11 = 'null';
        onu11 = 'null';
        $("#nombreIngrediente11").attr("required", "required");
        $("#nombreOnu11").attr("required", "required");
        $("#nivel11").attr("required", "required");
        $('#ingrediente11').show();
        $('#modalRecetas').animate({ scrollTop: 1300 }, 'fast');
        $('#btnQuitarIngrediente10').hide();
        $('#btnIngrediente11').hide();
        $('#btnQuitarIngrediente11').show();
        $('#btnIngrediente12').show();
    });

    $('#btnQuitarIngrediente11').on('click', function () {
        cas11 = 'null';
        onu11 = 'null';
        $('#nombreIngrediente11').removeAttr('required');
        $('#nombreOnu11').removeAttr('required');
        $('#nivel11').removeAttr('required');
        $('#ingrediente11').hide();
        $('#modalRecetas').animate({ scrollTop: 1300 }, 'fast');
        $('#fabricante11').slideDown(122);
        $("#nombreIngrediente11").val('');
        $("#nombreOnu11").val('');
        $("#nivel11").val('');
        $('#btnQuitarIngrediente10').show();
        $('#btnIngrediente11').show();
    });

    $('#btnIngrediente12').on('click', function () {
        cas12 = 'null';
        onu12 = 'null';
        $("#nombreIngrediente12").attr("required", "required");
        $("#nombreOnu12").attr("required", "required");
        $("#nivel12").attr("required", "required");
        $('#ingrediente12').show();
        $('#modalRecetas').animate({ scrollTop: 1430 }, 'fast');
        $('#btnQuitarIngrediente11').hide();
        $('#btnIngrediente12').hide();
        $('#btnQuitarIngrediente12').show();
        $('#btnIngrediente13').show();
    });

    $('#btnQuitarIngrediente12').on('click', function () {
        cas12 = 'null';
        onu12 = 'null';
        $('#nombreIngrediente12').removeAttr('required');
        $('#nombreOnu12').removeAttr('required');
        $('#nivel12').removeAttr('required');
        $('#ingrediente12').hide();
        $('#modalRecetas').animate({ scrollTop: 1430 }, 'fast');
        $('#fabricante12').slideDown(122);
        $("#nombreIngrediente12").val('');
        $("#nombreOnu12").val('');
        $("#nivel12").val('');
        $('#btnQuitarIngrediente11').show();
        $('#btnIngrediente12').show();
    });

    $('#btnIngrediente13').on('click', function () {
        cas13 = 'null';
        onu13 = 'null';
        $("#nombreIngrediente13").attr("required", "required");
        $("#nombreOnu13").attr("required", "required");
        $("#nivel13").attr("required", "required");
        $('#ingrediente13').show();
        $('#modalRecetas').animate({ scrollTop: 1560 }, 'fast');
        $('#btnQuitarIngrediente12').hide();
        $('#btnIngrediente13').hide();
        $('#btnQuitarIngrediente13').show();
        $('#btnIngrediente14').show();
    });

    $('#btnQuitarIngrediente13').on('click', function () {
        cas13 = 'null';
        onu13 = 'null';
        $('#nombreIngrediente13').removeAttr('required');
        $('#nombreOnu13').removeAttr('required');
        $('#nivel13').removeAttr('required');
        $('#ingrediente13').hide();
        $('#modalRecetas').animate({ scrollTop: 1560 }, 'fast');
        $('#fabricante13').slideDown(122);
        $("#nombreIngrediente13").val('');
        $("#nombreOnu13").val('');
        $("#nivel13").val('');
        $('#btnQuitarIngrediente12').show();
        $('#btnIngrediente13').show();
    });

    $('#btnIngrediente14').on('click', function () {
        cas14 = 'null';
        onu14 = 'null';
        $("#nombreIngrediente14").attr("required", "required");
        $("#nombreOnu14").attr("required", "required");
        $("#nivel14").attr("required", "required");
        $('#ingrediente14').show();
        $('#modalRecetas').animate({ scrollTop: 1690 }, 'fast');
        $('#btnQuitarIngrediente13').hide();
        $('#btnIngrediente14').hide();
        $('#btnQuitarIngrediente14').show();
        $('#btnIngrediente15').show();
    });

    $('#btnQuitarIngrediente14').on('click', function () {
        cas14 = 'null';
        onu14 = 'null';
        $('#nombreIngrediente14').removeAttr('required');
        $('#nombreOnu14').removeAttr('required');
        $('#nivel14').removeAttr('required');
        $('#ingrediente14').hide();
        $('#modalRecetas').animate({ scrollTop: 1690 }, 'fast');
        $('#fabricante14').slideDown(122);
        $("#nombreIngrediente14").val('');
        $("#nombreOnu14").val('');
        $("#nivel14").val('');
        $('#btnQuitarIngrediente13').show();
        $('#btnIngrediente14').show();
    });

    $('#btnIngrediente15').on('click', function () {
        cas15 = 'null';
        onu15 = 'null';
        $("#nombreIngrediente15").attr("required", "required");
        $("#nombreOnu15").attr("required", "required");
        $("#nivel15").attr("required", "required");
        $('#ingrediente15').show();
        $('#modalRecetas').animate({ scrollTop: 1820 }, 'fast');
        $('#btnQuitarIngrediente14').hide();
        $('#btnIngrediente15').hide();
        $('#btnQuitarIngrediente15').show();
    });

    $('#btnQuitarIngrediente15').on('click', function () {
        cas15 = 'null';
        onu15 = 'null';
        $('#nombreIngrediente15').removeAttr('required');
        $('#nombreOnu15').removeAttr('required');
        $('#nivel15').removeAttr('required');
        $('#ingrediente15').hide();
        $('#modalRecetas').animate({ scrollTop: 1820 }, 'fast');
        $('#fabricante15').slideDown(122);
        $("#nombreIngrediente15").val('');
        $("#nombreOnu15").val('');
        $("#nivel15").val('');
        $('#btnQuitarIngrediente14').show();
        $('#btnIngrediente15').show();
    });

    //Final de botones para agregar o eliminar ingredientes


    //Botón para escoger Producto
    $(document).on("click", ".btnEscogerProducto", function () {
        //alert(ingrNumber);
        //alert(this.id); // or alert($(this).attr('id'));
        if (ingrNumber === 1) {
            fila1 = $(this).closest("tr");
            cas1 = fila1.find('td:eq(0)').text();
            nombreProducto1 = fila1.find('td:eq(1)').text();
            console.log('CAS1: ', cas1);
            console.log('CAS1: ', cas1);
            $("#nombreIngrediente1").val(cas1);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 2) {
            fila2 = $(this).closest("tr");
            cas2 = fila2.find('td:eq(0)').text();
            nombreProducto2 = fila2.find('td:eq(1)').text();
            console.log('CAS2: ', cas2);
            console.log('CAS2: ', cas2);
            $("#nombreIngrediente2").val(cas2);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 3) {
            fila3 = $(this).closest("tr");
            cas3 = fila3.find('td:eq(0)').text();
            nombreProducto3 = fila3.find('td:eq(1)').text();
            console.log('CAS3: ', cas3);
            console.log('CAS3: ', cas3);
            $("#nombreIngrediente3").val(cas3);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 4) {
            fila4 = $(this).closest("tr");
            cas4 = fila4.find('td:eq(0)').text();
            nombreProducto4 = fila4.find('td:eq(1)').text();
            console.log('CAS4: ', cas4);
            console.log('CAS4: ', cas4);
            $("#nombreIngrediente4").val(cas4);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 5) {
            fila5 = $(this).closest("tr");
            cas5 = fila5.find('td:eq(0)').text();
            nombreProducto5 = fila5.find('td:eq(1)').text();
            console.log('CAS5: ', cas5);
            console.log('CAS5: ', cas5);
            $("#nombreIngrediente5").val(cas5);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 6) {
            fila6 = $(this).closest("tr");
            cas6 = fila6.find('td:eq(0)').text();
            nombreProducto6 = fila6.find('td:eq(1)').text();
            console.log('CAS6: ', cas6);
            console.log('CAS6: ', cas6);
            $("#nombreIngrediente6").val(cas6);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 7) {
            fila7 = $(this).closest("tr");
            cas7 = fila7.find('td:eq(0)').text();
            nombreProducto7 = fila7.find('td:eq(1)').text();
            console.log('CAS7: ', cas7);
            console.log('CAS7: ', cas7);
            $("#nombreIngrediente7").val(cas7);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 8) {
            fila8 = $(this).closest("tr");
            cas8 = fila8.find('td:eq(0)').text();
            nombreProducto8 = fila8.find('td:eq(1)').text();
            console.log('CAS8: ', cas8);
            console.log('CAS8: ', cas8);
            $("#nombreIngrediente8").val(cas8);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 9) {
            fila9 = $(this).closest("tr");
            cas9 = fila9.find('td:eq(0)').text();
            nombreProducto9 = fila9.find('td:eq(1)').text();
            console.log('CAS9: ', cas9);
            console.log('CAS9: ', cas9);
            $("#nombreIngrediente9").val(cas9);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 10) {
            fila10 = $(this).closest("tr");
            cas10 = fila10.find('td:eq(0)').text();
            nombreProducto10 = fila10.find('td:eq(1)').text();
            console.log('CAS10: ', cas10);
            console.log('CAS10: ', cas10);
            $("#nombreIngrediente10").val(cas10);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 11) {
            fila11 = $(this).closest("tr");
            cas11 = fila11.find('td:eq(0)').text();
            nombreProducto11 = fila11.find('td:eq(1)').text();
            console.log('CAS11: ', cas11);
            console.log('CAS11: ', cas11);
            $("#nombreIngrediente11").val(cas11);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 12) {
            fila12 = $(this).closest("tr");
            cas12 = fila12.find('td:eq(0)').text();
            nombreProducto12 = fila12.find('td:eq(1)').text();
            console.log('CAS12: ', cas12);
            console.log('CAS12: ', cas12);
            $("#nombreIngrediente12").val(cas12);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 13) {
            fila13 = $(this).closest("tr");
            cas13 = fila13.find('td:eq(0)').text();
            nombreProducto13 = fila13.find('td:eq(1)').text();
            console.log('CAS13: ', cas13);
            console.log('CAS13: ', cas13);
            $("#nombreIngrediente13").val(cas13);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 14) {
            fila14 = $(this).closest("tr");
            cas14 = fila14.find('td:eq(0)').text();
            nombreProducto14 = fila14.find('td:eq(1)').text();
            console.log('CAS14: ', cas14);
            console.log('CAS14: ', cas14);
            $("#nombreIngrediente14").val(cas14);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (ingrNumber === 15) {
            fila15 = $(this).closest("tr");
            cas15 = fila15.find('td:eq(0)').text();
            nombreProducto15 = fila15.find('td:eq(1)').text();
            console.log('CAS15: ', cas15);
            console.log('CAS15: ', cas15);
            $("#nombreIngrediente15").val(cas15);
            $("#modalRecetas").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });

    //Botón para escoger Onu
    $(document).on("click", ".btnEscogerOnu", function () {
        //alert(ingrNumber);
        //alert(this.id); // or alert($(this).attr('id'));
        if (onuNumber === 1) {
            fila1 = $(this).closest("tr");
            onu1 = fila1.find('td:eq(0)').text();
            nombreOnu1 = fila1.find('td:eq(1)').text();
            console.log('ONU1: ', onu1);
            console.log('ONU1: ', onu1);
            $("#nombreOnu1").val(onu1);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 2) {
            fila2 = $(this).closest("tr");
            onu2 = fila2.find('td:eq(0)').text();
            nombreOnu2 = fila2.find('td:eq(1)').text();
            console.log('ONU2: ', onu2);
            console.log('ONU2: ', onu2);
            $("#nombreOnu2").val(onu2);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 3) {
            fila3 = $(this).closest("tr");
            onu3 = fila3.find('td:eq(0)').text();
            nombreOnu3 = fila3.find('td:eq(1)').text();
            console.log('ONU3: ', onu3);
            console.log('ONU3: ', onu3);
            $("#nombreOnu3").val(onu3);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 4) {
            fila4 = $(this).closest("tr");
            onu4 = fila4.find('td:eq(0)').text();
            nombreOnu4 = fila4.find('td:eq(1)').text();
            console.log('ONU4: ', onu4);
            console.log('ONU4: ', onu4);
            $("#nombreOnu4").val(onu4);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 5) {
            fila5 = $(this).closest("tr");
            onu5 = fila5.find('td:eq(0)').text();
            nombreOnu5 = fila5.find('td:eq(1)').text();
            console.log('ONU5: ', onu5);
            console.log('ONU5: ', onu5);
            $("#nombreOnu5").val(onu5);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 6) {
            fila6 = $(this).closest("tr");
            onu6 = fila6.find('td:eq(0)').text();
            nombreOnu6 = fila6.find('td:eq(1)').text();
            console.log('ONU6: ', onu6);
            console.log('ONU6: ', onu6);
            $("#nombreOnu6").val(onu6);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 7) {
            fila7 = $(this).closest("tr");
            onu7 = fila7.find('td:eq(0)').text();
            nombreOnu7 = fila7.find('td:eq(1)').text();
            console.log('ONU7: ', onu7);
            console.log('ONU7: ', onu7);
            $("#nombreOnu7").val(onu7);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 8) {
            fila8 = $(this).closest("tr");
            onu8 = fila8.find('td:eq(0)').text();
            nombreOnu8 = fila8.find('td:eq(1)').text();
            console.log('ONU8: ', onu8);
            console.log('ONU8: ', onu8);
            $("#nombreOnu8").val(onu8);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 9) {
            fila9 = $(this).closest("tr");
            onu9 = fila9.find('td:eq(0)').text();
            nombreOnu9 = fila9.find('td:eq(1)').text();
            console.log('ONU9: ', onu9);
            console.log('ONU9: ', onu9);
            $("#nombreOnu9").val(onu9);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 10) {
            fila10 = $(this).closest("tr");
            onu10 = fila10.find('td:eq(0)').text();
            nombreOnu10 = fila10.find('td:eq(1)').text();
            console.log('ONU10: ', onu10);
            console.log('ONU10: ', onu10);
            $("#nombreOnu10").val(onu10);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 11) {
            fila11 = $(this).closest("tr");
            onu11 = fila11.find('td:eq(0)').text();
            nombreOnu11 = fila11.find('td:eq(1)').text();
            console.log('ONU11: ', onu11);
            console.log('ONU11: ', onu11);
            $("#nombreOnu11").val(onu11);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 12) {
            fila12 = $(this).closest("tr");
            onu12 = fila12.find('td:eq(0)').text();
            nombreOnu12 = fila12.find('td:eq(1)').text();
            console.log('ONU12: ', onu12);
            console.log('ONU12: ', onu12);
            $("#nombreOnu12").val(onu12);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 13) {
            fila13 = $(this).closest("tr");
            onu13 = fila13.find('td:eq(0)').text();
            nombreOnu13 = fila13.find('td:eq(1)').text();
            console.log('ONU13: ', onu13);
            console.log('ONU13: ', onu13);
            $("#nombreOnu13").val(onu13);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 14) {
            fila14 = $(this).closest("tr");
            onu14 = fila14.find('td:eq(0)').text();
            nombreOnu14 = fila14.find('td:eq(1)').text();
            console.log('ONU14: ', onu14);
            console.log('ONU14: ', onu14);
            $("#nombreOnu14").val(onu14);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        } else if (onuNumber === 15) {
            fila15 = $(this).closest("tr");
            onu15 = fila15.find('td:eq(0)').text();
            nombreOnu15 = fila15.find('td:eq(1)').text();
            console.log('ONU15: ', onu15);
            console.log('ONU15: ', onu15);
            $("#nombreOnu15").val(onu15);
            $("#modalOnu").modal({ backdrop: 'static', keyboard: false }, 'show');
        }
    });


    //Botón Nueva Receta
    $("#btnNuevaReceta").click(function () {
        idReceta = 'null';
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





        $('#btnQuitarIngrediente2').hide();
        $('#btnIngrediente3').hide();
        $('#btnQuitarIngrediente3').hide();
        $('#btnIngrediente4').hide();
        $('#btnQuitarIngrediente4').hide();
        $('#btnIngrediente5').hide();
        $('#btnQuitarIngrediente5').hide();
        $('#btnIngrediente6').hide();
        $('#btnQuitarIngrediente6').hide();
        $('#btnIngrediente7').hide();
        $('#btnQuitarIngrediente7').hide();
        $('#btnIngrediente8').hide();
        $('#btnQuitarIngrediente8').hide();
        $('#btnIngrediente9').hide();
        $('#btnQuitarIngrediente9').hide();
        $('#btnIngrediente10').hide();
        $('#btnQuitarIngrediente10').hide();
        $('#btnIngrediente11').hide();
        $('#btnQuitarIngrediente11').hide();
        $('#btnIngrediente12').hide();
        $('#btnQuitarIngrediente12').hide();
        $('#btnIngrediente13').hide();
        $('#btnQuitarIngrediente13').hide();
        $('#btnIngrediente14').hide();
        $('#btnQuitarIngrediente14').hide();
        $('#btnIngrediente15').hide();
        $('#btnQuitarIngrediente15').hide();
        $('#modalRecetas').modal({ backdrop: 'static', keyboard: false }, 'show');

        opcion = 1; //Nuevo Producto
    });

    var fila; //Capturar la fila para editar o borrar el registro

    //Botón Editar Receta  
    $(document).on("click", ".btnEditarReceta", function () {
        $("#formRecetas").trigger("reset");
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
        $('#btnQuitarIngrediente2').hide();
        $('#btnIngrediente3').hide();
        $('#btnQuitarIngrediente3').hide();
        $('#btnIngrediente4').hide();
        $('#btnQuitarIngrediente4').hide();
        $('#btnIngrediente5').hide();
        $('#btnQuitarIngrediente5').hide();
        $('#btnIngrediente6').hide();
        $('#btnQuitarIngrediente6').hide();
        $('#btnIngrediente7').hide();
        $('#btnQuitarIngrediente7').hide();
        $('#btnIngrediente8').hide();
        $('#btnQuitarIngrediente8').hide();
        $('#btnIngrediente9').hide();
        $('#btnQuitarIngrediente9').hide();
        $('#btnIngrediente10').hide();
        $('#btnQuitarIngrediente10').hide();
        $('#btnIngrediente11').hide();
        $('#btnQuitarIngrediente11').hide();
        $('#btnIngrediente12').hide();
        $('#btnQuitarIngrediente12').hide();
        $('#btnIngrediente13').hide();
        $('#btnQuitarIngrediente13').hide();
        $('#btnIngrediente14').hide();
        $('#btnQuitarIngrediente14').hide();
        $('#btnIngrediente15').hide();
        $('#btnQuitarIngrediente15').hide();
        fila = $(this).closest("tr");
        idReceta = fila.find('td:eq(0)').text();
        nombreReceta = fila.find('td:eq(1)').text();
        console.log('ID de Receta: ', idReceta);

        $.ajax({
            type: "POST",
            url: "bd/cargarRecetas.php",
            data: "idReceta=" + idReceta,
            success: function (data) {
                //console.log(data);
                dataParse = JSON.parse(data);
                recipe_loaded = dataParse;
                console.log(recipe_loaded);
                loaded_idReceta = recipe_loaded[0].idReceta;
                loaded_nombreReceta = recipe_loaded[0].nombreReceta;
                loaded_idEmpresa = recipe_loaded[0].idEmpresa;
                loaded_cas1 = recipe_loaded[0].cas1;
                loaded_cas2 = recipe_loaded[0].cas2;
                loaded_cas3 = recipe_loaded[0].cas3;
                loaded_cas4 = recipe_loaded[0].cas4;
                loaded_cas5 = recipe_loaded[0].cas5;
                loaded_cas6 = recipe_loaded[0].cas6;
                loaded_cas7 = recipe_loaded[0].cas7;
                loaded_cas8 = recipe_loaded[0].cas8;
                loaded_cas9 = recipe_loaded[0].cas9;
                loaded_cas10 = recipe_loaded[0].cas10;
                loaded_cas11 = recipe_loaded[0].cas11;
                loaded_cas12 = recipe_loaded[0].cas12;
                loaded_cas13 = recipe_loaded[0].cas13;
                loaded_cas14 = recipe_loaded[0].cas14;
                loaded_cas15 = recipe_loaded[0].cas15;
                loaded_onu1 = recipe_loaded[0].onu1;
                loaded_onu2 = recipe_loaded[0].onu2;
                loaded_onu3 = recipe_loaded[0].onu3;
                loaded_onu4 = recipe_loaded[0].onu4;
                loaded_onu5 = recipe_loaded[0].onu5;
                loaded_onu6 = recipe_loaded[0].onu6;
                loaded_onu7 = recipe_loaded[0].onu7;
                loaded_onu8 = recipe_loaded[0].onu8;
                loaded_onu9 = recipe_loaded[0].onu9;
                loaded_onu10 = recipe_loaded[0].onu10;
                loaded_onu11 = recipe_loaded[0].onu11;
                loaded_onu12 = recipe_loaded[0].onu12;
                loaded_onu13 = recipe_loaded[0].onu13;
                loaded_onu14 = recipe_loaded[0].onu14;
                loaded_onu15 = recipe_loaded[0].onu15;
                loaded_cantidad1 = recipe_loaded[0].cantidad1;
                loaded_cantidad2 = recipe_loaded[0].cantidad2;
                loaded_cantidad3 = recipe_loaded[0].cantidad3;
                loaded_cantidad4 = recipe_loaded[0].cantidad4;
                loaded_cantidad5 = recipe_loaded[0].cantidad5;
                loaded_cantidad6 = recipe_loaded[0].cantidad6;
                loaded_cantidad7 = recipe_loaded[0].cantidad7;
                loaded_cantidad8 = recipe_loaded[0].cantidad8;
                loaded_cantidad9 = recipe_loaded[0].cantidad9;
                loaded_cantidad10 = recipe_loaded[0].cantidad10;
                loaded_cantidad11 = recipe_loaded[0].cantidad11;
                loaded_cantidad12 = recipe_loaded[0].cantidad12;
                loaded_cantidad13 = recipe_loaded[0].cantidad13;
                loaded_cantidad14 = recipe_loaded[0].cantidad14;
                loaded_cantidad15 = recipe_loaded[0].cantidad15;
                console.log('ID de Receta: ', loaded_idReceta);
                console.log('Nombre de Receta: ', loaded_nombreReceta);
                console.log('ID de Empresa: ', loaded_idEmpresa);
                console.log('Cas 1: ', loaded_cas1);
                console.log('Cas 2: ', loaded_cas2);
                console.log('Cas 3: ', loaded_cas3);
                console.log('Cas 4: ', loaded_cas4);
                console.log('Cas 5: ', loaded_cas5);
                console.log('Cas 6: ', loaded_cas6);
                console.log('Cas 7: ', loaded_cas7);
                console.log('Cas 8: ', loaded_cas8);
                console.log('Cas 9: ', loaded_cas9);
                console.log('Cas 10: ', loaded_cas10);
                console.log('Cas 11: ', loaded_cas11);
                console.log('Cas 12: ', loaded_cas12);
                console.log('Cas 13: ', loaded_cas13);
                console.log('Cas 14: ', loaded_cas14);
                console.log('Cas 15: ', loaded_cas15);
                console.log('Onu 1: ', loaded_onu1);
                console.log('Onu 2: ', loaded_onu2);
                console.log('Onu 3: ', loaded_onu3);
                console.log('Onu 4: ', loaded_onu4);
                console.log('Onu 5: ', loaded_onu5);
                console.log('Onu 6: ', loaded_onu6);
                console.log('Onu 7: ', loaded_onu7);
                console.log('Onu 8: ', loaded_onu8);
                console.log('Onu 9: ', loaded_onu9);
                console.log('Onu 10: ', loaded_onu10);
                console.log('Onu 11: ', loaded_onu11);
                console.log('Onu 12: ', loaded_onu12);
                console.log('Onu 13: ', loaded_onu13);
                console.log('Onu 14: ', loaded_onu14);
                console.log('Onu 15: ', loaded_onu15);
                console.log('Cantidad 1: ', loaded_cantidad1);
                console.log('Cantidad 2: ', loaded_cantidad2);
                console.log('Cantidad 3: ', loaded_cantidad3);
                console.log('Cantidad 4: ', loaded_cantidad4);
                console.log('Cantidad 5: ', loaded_cantidad5);
                console.log('Cantidad 6: ', loaded_cantidad6);
                console.log('Cantidad 7: ', loaded_cantidad7);
                console.log('Cantidad 8: ', loaded_cantidad8);
                console.log('Cantidad 9: ', loaded_cantidad9);
                console.log('Cantidad 10: ', loaded_cantidad10);
                console.log('Cantidad 11: ', loaded_cantidad11);
                console.log('Cantidad 12: ', loaded_cantidad12);
                console.log('Cantidad 13: ', loaded_cantidad13);
                console.log('Cantidad 14: ', loaded_cantidad14);
                console.log('Cantidad 15: ', loaded_cantidad15);


                loading_timer = 600;
                more_time = 150;

                if (loaded_cas1 != null) {
                    loading_timer = loading_timer + more_time;
                } else {
                    loading_timer = 1000;
                }

                if (loaded_cas2 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas3 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas4 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas5 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas6 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas7 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas8 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas9 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas10 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas11 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas12 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas13 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas14 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_cas15 != null) {
                    loading_timer = loading_timer + more_time;
                }

                Swal.fire({
                    title: "Cargando Información!",
                    html: "Por favor espere.",
                    timer: loading_timer,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = loading_timer
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        //console.log("I was closed by the timer");
                    }
                });

                $("#nombreReceta").val(loaded_nombreReceta);

                //Precarga de datos de Clases

                if (loaded_cas1 != null) {
                    $("#nombreIngrediente1").val(loaded_cas1);
                    $("#nombreOnu1").val(loaded_onu1);
                    $("#nivel1").val(loaded_cantidad1);
                }

                if (loaded_cas2 != null) {
                    $("#nombreIngrediente2").attr("required", "required");
                    $("#nombreOnu2").attr("required", "required");
                    $("#nivel2").attr("required", "required");
                    $('#ingrediente2').show();
                    $('#modalRecetas').animate({ scrollTop: 100 }, 'fast');
                    $("#nombreIngrediente2").val(loaded_cas2);
                    $("#nombreOnu2").val(loaded_onu2);
                    $("#nivel2").val(loaded_cantidad2);
                    $('#btnIngrediente2').hide();
                    $('#btnQuitarIngrediente2').show();
                    $('#btnIngrediente3').show();
                } else {
                    $('#nombreIngrediente2').removeAttr('required');
                    $('#nombreOnu2').removeAttr('required');
                    $('#nivel2').removeAttr('required');
                    $('#ingrediente2').hide();
                    $('#modalRecetas').animate({ scrollTop: 100 }, 'fast');
                    $('#fabricante2').slideDown(122);
                    $("#nombreIngrediente2").val('');
                    $("#nombreOnu2").val('');
                    $("#nivel2").val('');
                    $("#nivel2").val('');
                    $('#btnIngrediente2').show();
                }

                if (loaded_cas3 != null) {
                    $("#nombreIngrediente3").attr("required", "required");
                    $("#nombreOnu3").attr("required", "required");
                    $("#nivel3").attr("required", "required");
                    $('#ingrediente3').show();
                    $('#modalRecetas').animate({ scrollTop: 200 }, 'fast');
                    $("#nombreIngrediente3").val(loaded_cas3);
                    $("#nombreOnu3").val(loaded_onu3);
                    $("#nivel3").val(loaded_cantidad3);
                    $('#btnQuitarIngrediente2').hide();
                    $('#btnIngrediente3').hide();
                    $('#btnQuitarIngrediente3').show();
                    $('#btnIngrediente4').show();
                } else {
                    $('#nombreIngrediente3').removeAttr('required');
                    $('#nombreOnu3').removeAttr('required');
                    $('#nivel3').removeAttr('required');
                    $('#ingrediente3').hide();
                    $('#modalRecetas').animate({ scrollTop: 200 }, 'fast');
                    $('#fabricante3').slideDown(122);
                    $("#nombreIngrediente3").val('');
                    $("#nombreOnu3").val('');
                    $("#nivel3").val('');
                    $('#btnQuitarIngrediente2').show();
                    $('#btnIngrediente3').show();
                }

                if (loaded_cas4 != null) {
                    $("#nombreIngrediente4").attr("required", "required");
                    $("#nombreOnu4").attr("required", "required");
                    $("#nivel4").attr("required", "required");
                    $('#ingrediente4').show();
                    $('#modalRecetas').animate({ scrollTop: 300 }, 'fast');
                    $("#nombreIngrediente4").val(loaded_cas4);
                    $("#nombreOnu4").val(loaded_onu4);
                    $("#nivel4").val(loaded_cantidad4);
                    $('#btnQuitarIngrediente3').hide();
                    $('#btnIngrediente4').hide();
                    $('#btnQuitarIngrediente4').show();
                    $('#btnIngrediente5').show();
                } else {
                    $('#nombreIngrediente4').removeAttr('required');
                    $('#nombreOnu4').removeAttr('required');
                    $('#nivel4').removeAttr('required');
                    $('#ingrediente4').hide();
                    $('#modalRecetas').animate({ scrollTop: 300 }, 'fast');
                    $('#fabricante4').slideDown(122);
                    $("#nombreIngrediente4").val('');
                    $("#nombreOnu4").val('');
                    $("#nivel4").val('');
                    $('#btnQuitarIngrediente3').show();
                    $('#btnIngrediente4').show();
                }

                if (loaded_cas5 != null) {
                    $("#nombreIngrediente5").attr("required", "required");
                    $("#nombreOnu5").attr("required", "required");
                    $("#nivel5").attr("required", "required");
                    $('#ingrediente5').show();
                    $('#modalRecetas').animate({ scrollTop: 400 }, 'fast');
                    $("#nombreIngrediente5").val(loaded_cas5);
                    $("#nombreOnu5").val(loaded_onu5);
                    $("#nivel5").val(loaded_cantidad5);
                    $('#btnQuitarIngrediente4').hide();
                    $('#btnIngrediente5').hide();
                    $('#btnQuitarIngrediente5').show();
                    $('#btnIngrediente6').show();
                } else {
                    $('#nombreIngrediente5').removeAttr('required');
                    $('#nombreOnu5').removeAttr('required');
                    $('#nivel5').removeAttr('required');
                    $('#ingrediente5').hide();
                    $('#modalRecetas').animate({ scrollTop: 400 }, 'fast');
                    $('#fabricante5').slideDown(122);
                    $("#nombreIngrediente5").val('');
                    $("#nombreOnu5").val('');
                    $("#nivel5").val('');
                    $('#btnQuitarIngrediente4').show();
                    $('#btnIngrediente5').show();
                }

                if (loaded_cas6 != null) {
                    $("#nombreIngrediente6").attr("required", "required");
                    $("#nombreOnu6").attr("required", "required");
                    $("#nivel6").attr("required", "required");
                    $('#ingrediente6').show();
                    $('#modalRecetas').animate({ scrollTop: 500 }, 'fast');
                    $("#nombreIngrediente6").val(loaded_cas6);
                    $("#nombreOnu6").val(loaded_onu6);
                    $("#nivel6").val(loaded_cantidad6);
                    $('#btnQuitarIngrediente5').hide();
                    $('#btnIngrediente6').hide();
                    $('#btnQuitarIngrediente6').show();
                    $('#btnIngrediente7').show();
                } else {
                    $('#nombreIngrediente6').removeAttr('required');
                    $('#nombreOnu6').removeAttr('required');
                    $('#nivel6').removeAttr('required');
                    $('#ingrediente6').hide();
                    $('#modalRecetas').animate({ scrollTop: 500 }, 'fast');
                    $('#fabricante6').slideDown(122);
                    $("#nombreIngrediente6").val('');
                    $("#nombreOnu6").val('');
                    $("#nivel6").val('');
                    $('#btnQuitarIngrediente5').show();
                    $('#btnIngrediente6').show();
                }

                if (loaded_cas7 != null) {
                    $("#nombreIngrediente7").attr("required", "required");
                    $("#nombreOnu7").attr("required", "required");
                    $("#nivel7").attr("required", "required");
                    $('#ingrediente7').show();
                    $('#modalRecetas').animate({ scrollTop: 600 }, 'fast');
                    $("#nombreIngrediente7").val(loaded_cas7);
                    $("#nombreOnu7").val(loaded_onu7);
                    $("#nivel7").val(loaded_cantidad7);
                    $('#btnQuitarIngrediente6').hide();
                    $('#btnIngrediente7').hide();
                    $('#btnQuitarIngrediente7').show();
                    $('#btnIngrediente8').show();
                } else {
                    $('#nombreIngrediente7').removeAttr('required');
                    $('#nombreOnu7').removeAttr('required');
                    $('#nivel7').removeAttr('required');
                    $('#ingrediente7').hide();
                    $('#modalRecetas').animate({ scrollTop: 600 }, 'fast');
                    $('#fabricante7').slideDown(122);
                    $("#nombreIngrediente7").val('');
                    $("#nombreOnu7").val('');
                    $("#nivel7").val('');
                    $('#btnQuitarIngrediente6').show();
                    $('#btnIngrediente7').show();
                }

                if (loaded_cas8 != null) {
                    $("#nombreIngrediente8").attr("required", "required");
                    $("#nombreOnu8").attr("required", "required");
                    $("#nivel8").attr("required", "required");
                    $('#ingrediente8').show();
                    $('#modalRecetas').animate({ scrollTop: 700 }, 'fast');
                    $("#nombreIngrediente8").val(loaded_cas8);
                    $("#nombreOnu8").val(loaded_onu8);
                    $("#nivel8").val(loaded_cantidad8);
                    $('#btnQuitarIngrediente7').hide();
                    $('#btnIngrediente8').hide();
                    $('#btnQuitarIngrediente8').show();
                    $('#btnIngrediente9').show();
                } else {
                    $('#nombreIngrediente8').removeAttr('required');
                    $('#nombreOnu8').removeAttr('required');
                    $('#nivel8').removeAttr('required');
                    $('#ingrediente8').hide();
                    $('#modalRecetas').animate({ scrollTop: 700 }, 'fast');
                    $('#fabricante8').slideDown(122);
                    $("#nombreIngrediente8").val('');
                    $("#nombreOnu8").val('');
                    $("#nivel8").val('');
                    $('#btnQuitarIngrediente7').show();
                    $('#btnIngrediente8').show();
                }

                if (loaded_cas9 != null) {
                    $("#nombreIngrediente9").attr("required", "required");
                    $("#nombreOnu9").attr("required", "required");
                    $("#nivel9").attr("required", "required");
                    $('#ingrediente9').show();
                    $('#modalRecetas').animate({ scrollTop: 800 }, 'fast');
                    $("#nombreIngrediente9").val(loaded_cas9);
                    $("#nombreOnu9").val(loaded_onu9);
                    $("#nivel9").val(loaded_cantidad9);
                    $('#btnQuitarIngrediente8').hide();
                    $('#btnIngrediente9').hide();
                    $('#btnQuitarIngrediente9').show();
                    $('#btnIngrediente10').show();
                } else {
                    $('#nombreIngrediente9').removeAttr('required');
                    $('#nombreOnu9').removeAttr('required');
                    $('#nivel9').removeAttr('required');
                    $('#ingrediente9').hide();
                    $('#modalRecetas').animate({ scrollTop: 800 }, 'fast');
                    $('#fabricante9').slideDown(122);
                    $("#nombreIngrediente9").val('');
                    $("#nombreOnu9").val('');
                    $("#nivel9").val('');
                    $('#btnQuitarIngrediente8').show();
                    $('#btnIngrediente9').show();
                }

                if (loaded_cas10 != null) {
                    $("#nombreIngrediente10").attr("required", "required");
                    $("#nombreOnu10").attr("required", "required");
                    $("#nivel10").attr("required", "required");
                    $('#ingrediente10').show();
                    $('#modalRecetas').animate({ scrollTop: 900 }, 'fast');
                    $("#nombreIngrediente10").val(loaded_cas10);
                    $("#nombreOnu10").val(loaded_onu10);
                    $("#nivel10").val(loaded_cantidad10);
                    $('#btnQuitarIngrediente9').hide();
                    $('#btnIngrediente10').hide();
                    $('#btnQuitarIngrediente10').show();
                    $('#btnIngrediente11').show();
                } else {
                    $('#nombreIngrediente10').removeAttr('required');
                    $('#nombreOnu10').removeAttr('required');
                    $('#nivel10').removeAttr('required');
                    $('#ingrediente10').hide();
                    $('#modalRecetas').animate({ scrollTop: 900 }, 'fast');
                    $('#fabricante10').slideDown(122);
                    $("#nombreIngrediente10").val('');
                    $("#nombreOnu10").val('');
                    $("#nivel10").val('');
                    $('#btnQuitarIngrediente9').show();
                    $('#btnIngrediente10').show();
                }

                if (loaded_cas11 != null) {
                    $("#nombreIngrediente11").attr("required", "required");
                    $("#nombreOnu11").attr("required", "required");
                    $("#nivel11").attr("required", "required");
                    $('#ingrediente11').show();
                    $('#modalRecetas').animate({ scrollTop: 1000 }, 'fast');
                    $("#nombreIngrediente11").val(loaded_cas11);
                    $("#nombreOnu11").val(loaded_onu11);
                    $("#nivel11").val(loaded_cantidad11);
                    $('#btnQuitarIngrediente10').hide();
                    $('#btnIngrediente11').hide();
                    $('#btnQuitarIngrediente11').show();
                    $('#btnIngrediente12').show();
                } else {
                    $('#nombreIngrediente11').removeAttr('required');
                    $('#nombreOnu11').removeAttr('required');
                    $('#nivel11').removeAttr('required');
                    $('#ingrediente11').hide();
                    $('#modalRecetas').animate({ scrollTop: 1000 }, 'fast');
                    $('#fabricante11').slideDown(122);
                    $("#nombreIngrediente11").val('');
                    $("#nombreOnu11").val('');
                    $("#nivel11").val('');
                    $('#btnQuitarIngrediente10').show();
                    $('#btnIngrediente11').show();
                }

                if (loaded_cas12 != null) {
                    $("#nombreIngrediente12").attr("required", "required");
                    $("#nombreOnu12").attr("required", "required");
                    $("#nivel12").attr("required", "required");
                    $('#ingrediente12').show();
                    $('#modalRecetas').animate({ scrollTop: 1100 }, 'fast');
                    $("#nombreIngrediente12").val(loaded_cas12);
                    $("#nombreOnu12").val(loaded_onu12);
                    $("#nivel12").val(loaded_cantidad12);
                    $('#btnQuitarIngrediente11').hide();
                    $('#btnIngrediente12').hide();
                    $('#btnQuitarIngrediente12').show();
                    $('#btnIngrediente13').show();
                } else {
                    $('#nombreIngrediente12').removeAttr('required');
                    $('#nombreOnu12').removeAttr('required');
                    $('#nivel12').removeAttr('required');
                    $('#ingrediente12').hide();
                    $('#modalRecetas').animate({ scrollTop: 1100 }, 'fast');
                    $('#fabricante12').slideDown(122);
                    $("#nombreIngrediente12").val('');
                    $("#nombreOnu12").val('');
                    $("#nivel12").val('');
                    $('#btnQuitarIngrediente11').show();
                    $('#btnIngrediente12').show();
                }

                if (loaded_cas13 != null) {
                    $("#nombreIngrediente13").attr("required", "required");
                    $("#nombreOnu13").attr("required", "required");
                    $("#nivel13").attr("required", "required");
                    $('#ingrediente13').show();
                    $('#modalRecetas').animate({ scrollTop: 1200 }, 'fast');
                    $("#nombreIngrediente13").val(loaded_cas13);
                    $("#nombreOnu13").val(loaded_onu13);
                    $("#nivel13").val(loaded_cantidad13);
                    $('#btnQuitarIngrediente12').hide();
                    $('#btnIngrediente13').hide();
                    $('#btnQuitarIngrediente13').show();
                    $('#btnIngrediente14').show();
                } else {
                    $('#nombreIngrediente13').removeAttr('required');
                    $('#nombreOnu13').removeAttr('required');
                    $('#nivel13').removeAttr('required');
                    $('#ingrediente13').hide();
                    $('#modalRecetas').animate({ scrollTop: 1200 }, 'fast');
                    $('#fabricante13').slideDown(122);
                    $("#nombreIngrediente13").val('');
                    $("#nombreOnu13").val('');
                    $("#nivel13").val('');
                    $('#btnQuitarIngrediente12').show();
                    $('#btnIngrediente13').show();
                }

                if (loaded_cas14 != null) {
                    $("#nombreIngrediente14").attr("required", "required");
                    $("#nombreOnu14").attr("required", "required");
                    $("#nivel14").attr("required", "required");
                    $('#ingrediente14').show();
                    $('#modalRecetas').animate({ scrollTop: 1300 }, 'fast');
                    $("#nombreIngrediente14").val(loaded_cas14);
                    $("#nombreOnu14").val(loaded_onu14);
                    $("#nivel14").val(loaded_cantidad14);
                    $('#btnQuitarIngrediente13').hide();
                    $('#btnIngrediente14').hide();
                    $('#btnQuitarIngrediente14').show();
                    $('#btnIngrediente15').show();
                } else {
                    $('#nombreIngrediente14').removeAttr('required');
                    $('#nombreOnu14').removeAttr('required');
                    $('#nivel14').removeAttr('required');
                    $('#ingrediente14').hide();
                    $('#modalRecetas').animate({ scrollTop: 1300 }, 'fast');
                    $('#fabricante14').slideDown(122);
                    $("#nombreIngrediente14").val('');
                    $("#nombreOnu14").val('');
                    $("#nivel14").val('');
                    $('#btnQuitarIngrediente13').show();
                    $('#btnIngrediente14').show();
                }

                if (loaded_cas15 != null) {
                    $("#nombreIngrediente15").attr("required", "required");
                    $("#nombreOnu15").attr("required", "required");
                    $("#nivel15").attr("required", "required");
                    $('#ingrediente15').show();
                    $('#modalRecetas').animate({ scrollTop: 1400 }, 'fast');
                    $("#nombreIngrediente15").val(loaded_cas15);
                    $("#nombreOnu15").val(loaded_onu15);
                    $("#nivel15").val(loaded_cantidad15);
                    $('#btnQuitarIngrediente14').hide();
                    $('#btnIngrediente15').hide();
                    $('#btnQuitarIngrediente15').show();
                } else {
                    $('#nombreIngrediente15').removeAttr('required');
                    $('#nombreOnu15').removeAttr('required');
                    $('#nivel15').removeAttr('required');
                    $('#ingrediente15').hide();
                    $('#modalRecetas').animate({ scrollTop: 1400 }, 'fast');
                    $('#fabricante15').slideDown(122);
                    $("#nombreIngrediente15").val('');
                    $("#nombreOnu15").val('');
                    $("#nivel15").val('');
                    $('#btnQuitarIngrediente14').show();
                    $('#btnIngrediente15').show();
                }

            },
            error: function (textStatus, errorThrown) {
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

        opcion = 2; //Editar Receta
        $(".modal-header").css("background-color", "#4e73df");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Receta");
        $('#modalRecetas').modal({ backdrop: 'static', keyboard: false }, 'show');
    });

    //Botón Eliminar Receta
    $(document).on("click", ".btnBorrarReceta", function () {
        fila = $(this);
        idReceta = $(this).closest("tr").find('td:eq(0)').text();
        nombreReceta = $(this).closest("tr").find('td:eq(1)').text();
        opcion = 3 //borrar
        Swal.fire({
            title: 'Está seguro que desea eliminar la receta "' + nombreReceta + '"?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                $.ajax({
                    url: "bd/bdRecetas.php",
                    type: "POST",
                    dataType: "json",
                    data: { opcion: opcion, idReceta: idReceta },
                    success: function () {
                        tablaRecetas.row(fila.parents('tr')).remove().draw();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'La Receta "' + nombreReceta + '" fue eliminada con éxito',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    },
                    error: function (textStatus, errorThrown) {
                        console.log(textStatus, errorThrown);
                    }
                });
            }
        })
    });

    //Submit Productos
    $("#formRecetas").submit(function (e) {
        e.preventDefault();
        nombreReceta = $.trim($("#nombreReceta").val());
        idEmpresa = $.trim($("#idEmpresa").val());
        cas1 = $.trim($("#nombreIngrediente1").val());
        cas2 = $.trim($("#nombreIngrediente2").val());
        cas3 = $.trim($("#nombreIngrediente3").val());
        cas4 = $.trim($("#nombreIngrediente4").val());
        cas5 = $.trim($("#nombreIngrediente5").val());
        cas6 = $.trim($("#nombreIngrediente6").val());
        cas7 = $.trim($("#nombreIngrediente7").val());
        cas8 = $.trim($("#nombreIngrediente8").val());
        cas9 = $.trim($("#nombreIngrediente9").val());
        cas10 = $.trim($("#nombreIngrediente10").val());
        cas11 = $.trim($("#nombreIngrediente11").val());
        cas12 = $.trim($("#nombreIngrediente12").val());
        cas13 = $.trim($("#nombreIngrediente13").val());
        cas14 = $.trim($("#nombreIngrediente14").val());
        cas15 = $.trim($("#nombreIngrediente15").val());
        onu1 = $.trim($("#nombreOnu1").val());
        onu2 = $.trim($("#nombreOnu2").val());
        onu3 = $.trim($("#nombreOnu3").val());
        onu4 = $.trim($("#nombreOnu4").val());
        onu5 = $.trim($("#nombreOnu5").val());
        onu6 = $.trim($("#nombreOnu6").val());
        onu7 = $.trim($("#nombreOnu7").val());
        onu8 = $.trim($("#nombreOnu8").val());
        onu9 = $.trim($("#nombreOnu9").val());
        onu10 = $.trim($("#nombreOnu10").val());
        onu11 = $.trim($("#nombreOnu11").val());
        onu12 = $.trim($("#nombreOnu12").val());
        onu13 = $.trim($("#nombreOnu13").val());
        onu14 = $.trim($("#nombreOnu14").val());
        onu15 = $.trim($("#nombreOnu15").val());
        cantidad1 = $.trim($("#nivel1").val());
        cantidad2 = $.trim($("#nivel2").val());
        cantidad3 = $.trim($("#nivel3").val());
        cantidad4 = $.trim($("#nivel4").val());
        cantidad5 = $.trim($("#nivel5").val());
        cantidad6 = $.trim($("#nivel6").val());
        cantidad7 = $.trim($("#nivel7").val());
        cantidad8 = $.trim($("#nivel8").val());
        cantidad9 = $.trim($("#nivel9").val());
        cantidad10 = $.trim($("#nivel10").val());
        cantidad11 = $.trim($("#nivel11").val());
        cantidad12 = $.trim($("#nivel12").val());
        cantidad13 = $.trim($("#nivel13").val());
        cantidad14 = $.trim($("#nivel14").val());
        cantidad15 = $.trim($("#nivel15").val());
        console.log('Nombre de la receta: ', nombreReceta);
        console.log('ID de Empresa: ', idEmpresa);
        console.log('CAS 1: ', cas1);
        console.log('CAS 2: ', cas2);
        console.log('CAS 3: ', cas3);
        console.log('CAS 4: ', cas4);
        console.log('CAS 5: ', cas5);
        console.log('CAS 6: ', cas6);
        console.log('CAS 7: ', cas7);
        console.log('CAS 8: ', cas8);
        console.log('CAS 9: ', cas9);
        console.log('CAS 10: ', cas10);
        console.log('CAS 11: ', cas11);
        console.log('CAS 12: ', cas12);
        console.log('CAS 13: ', cas13);
        console.log('CAS 14: ', cas14);
        console.log('CAS 15: ', cas15);
        console.log('Cantidad 1: ', cantidad1);
        console.log('Cantidad 2: ', cantidad2);
        console.log('Cantidad 3: ', cantidad3);
        console.log('Cantidad 4: ', cantidad4);
        console.log('Cantidad 5: ', cantidad5);
        console.log('Cantidad 6: ', cantidad6);
        console.log('Cantidad 7: ', cantidad7);
        console.log('Cantidad 8: ', cantidad8);
        console.log('Cantidad 9: ', cantidad9);
        console.log('Cantidad 10: ', cantidad10);
        console.log('Cantidad 11: ', cantidad11);
        console.log('Cantidad 12: ', cantidad12);
        console.log('Cantidad 13: ', cantidad13);
        console.log('Cantidad 14: ', cantidad14);
        console.log('Cantidad 15: ', cantidad15);

        $.ajax({
            url: "bd/bdRecetas.php",
            type: "POST",
            dataType: "json",
            data: {
                opcion: opcion,
                idReceta: idReceta,
                nombreReceta: nombreReceta,
                idEmpresa: idEmpresa,
                cas1: cas1,
                cas2: cas2,
                cas3: cas3,
                cas4: cas4,
                cas5: cas5,
                cas6: cas6,
                cas7: cas7,
                cas8: cas8,
                cas9: cas9,
                cas10: cas10,
                cas11: cas11,
                cas12: cas12,
                cas13: cas13,
                cas14: cas14,
                cas15: cas15,
                onu1: onu1,
                onu2: onu2,
                onu3: onu3,
                onu4: onu4,
                onu5: onu5,
                onu6: onu6,
                onu7: onu7,
                onu8: onu8,
                onu9: onu9,
                onu10: onu10,
                onu11: onu11,
                onu12: onu12,
                onu13: onu13,
                onu14: onu14,
                onu15: onu15,
                cantidad1: cantidad1,
                cantidad2: cantidad2,
                cantidad3: cantidad3,
                cantidad4: cantidad4,
                cantidad5: cantidad5,
                cantidad6: cantidad6,
                cantidad7: cantidad7,
                cantidad8: cantidad8,
                cantidad9: cantidad9,
                cantidad10: cantidad10,
                cantidad11: cantidad11,
                cantidad12: cantidad12,
                cantidad13: cantidad13,
                cantidad14: cantidad14,
                cantidad15: cantidad15
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