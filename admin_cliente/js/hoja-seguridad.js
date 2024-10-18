$(document).ready(function () {

    var fila; //Capturar la fila para editar o borrar el registro
    const date = 'Fecha de impresión: ' + new Date().toLocaleDateString();
    const date2 = 'Fecha / actualizada el: ' + new Date().toLocaleDateString();


    //Fórmulas



    function irritacion1ingrediente (idCategoria, cantidad) {
        if (idCategoria === 70 && cantidad >= 5) {
            idCategoria = idCategoria
        } else if (idCategoria === 70 && cantidad >= 1 && cantidad <= 5) {
            idCategoria = 71
        } else if (idCategoria === 71 && cantidad >= 10) {
            idCategoria = 71
        } else if (idCategoria === 71 && cantidad >= 1 && cantidad <= 10) {
            idCategoria = 72
        } else if (idCategoria === 72 && cantidad >= 10) {
            idCategoria = 72
        }
    }

    function irritacion2ingredientes (ingrediente1, ingrediente2, cantidad) {
        if (idCategoria === 70 && cantidad >= 5) {
            idCategoria = idCategoria
        } else if (idCategoria === 70 && cantidad >= 1 && cantidad <= 5) {
            idCategoria = 71
        } else if (idCategoria === 71 && cantidad >= 10) {
            idCategoria = 71
        } else if (idCategoria === 71 && cantidad >= 1 && cantidad <= 10) {
            idCategoria = 72
        } else if (idCategoria === 72 && cantidad >= 10) {
            idCategoria = 72
        }
    }

    function irritacion3ingredientes (ingrediente1, ingrediente2, ingrediente3, cantidad) {
        if (idCategoria === 70 && cantidad >= 5) {
            idCategoria = idCategoria
        } else if (idCategoria === 70 && cantidad >= 1 && cantidad <= 5) {
            idCategoria = 71
        } else if (idCategoria === 71 && cantidad >= 10) {
            idCategoria = 71
        } else if (idCategoria === 71 && cantidad >= 1 && cantidad <= 10) {
            idCategoria = 72
        } else if (idCategoria === 72 && cantidad >= 10) {
            idCategoria = 72
        }
    }

    //Botón Previsualizar Hoja de Seguridad
    $(document).on("click", ".btnPrevisualizar", function () {
        $("#nombreRecetaPrev").empty();
        $("#modalHojaSeguridad").trigger("reset");
        fila = $(this).closest("tr");
        idReceta = fila.find('td:eq(0)').text();
        nombreReceta = fila.find('td:eq(1)').text();
        console.log('ID de Receta: ', idReceta);
        console.log('Nombre de Receta: ', nombreReceta);
        console.log('Fecha: ', date);
        $("#fechaImpresion").text(date);
        $("#fechaActualizada").text(date2);


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
                loaded_nombreFabricanteReceta = recipe_loaded[0].nombreFabricanteReceta;
                loaded_direccionFabricanteReceta = recipe_loaded[0].direccionFabricanteReceta;
                loaded_telefonoFabricanteReceta = recipe_loaded[0].telefonoFabricanteReceta;
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
                console.log('Nombre del Fabricante de la Receta: ', loaded_nombreFabricanteReceta);
                console.log('Direción del Fabricante de la Receta: ', loaded_direccionFabricanteReceta);
                console.log('Teléfono del Fabricante de la Receta: ', loaded_telefonoFabricanteReceta);
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

                $("#loaded_nombreFabricanteReceta").text(loaded_nombreFabricanteReceta);
                $("#loaded_direccionFabricanteReceta").text(loaded_direccionFabricanteReceta);




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

                //Precarga de datos de Clases

                if (loaded_cas1 != null) {
                    console.log("Producto 1 cargado");

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas1,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded = dataParse;
                            console.log('Cargando CAS1...');
                            console.log(cas_loaded);
                            $("#nombreUso").text(cas_loaded[0].nombreUso);
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu1,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded = dataParse;
                            console.log('Cargando ONU1...');
                            console.log(onu_loaded);
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

                    $("#loaded_nombreReceta").text(loaded_nombreReceta);
                    


                } else {
                    $("#productos").hide();
                }


                if (loaded_cas2 != null) {

                } else {

                }


                if (loaded_cas3 != null) {

                } else {

                }


                if (loaded_cas4 != null) {

                } else {

                }


                if (loaded_cas5 != null) {

                } else {

                }


                if (loaded_cas6 != null) {

                } else {

                }


                if (loaded_cas7 != null) {

                } else {

                }


                if (loaded_cas8 != null) {

                } else {
 
                }


                if (loaded_cas9 != null) {

                } else {

                }


                if (loaded_cas10 != null) {

                } else {

                }


                if (loaded_cas11 != null) {

                } else {

                }


                if (loaded_cas12 != null) {

                } else {

                }


                if (loaded_cas13 != null) {

                } else {

                }


                if (loaded_cas14 != null) {

                } else {

                }


                if (loaded_cas15 != null) {

                } else {

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

        $('<h3>').text("Hoja de Seguridad para la Receta '" + nombreReceta + "'").appendTo("#nombreRecetaPrev");
        $(".modal-header").css("background-color", "#4e73df");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Hoja de Seguridad");
        $('#modalHojaSeguridad').modal({ backdrop: 'static', keyboard: false }, 'show');

    });

});