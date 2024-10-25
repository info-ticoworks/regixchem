$(document).ready(function () {

    var fila; //Capturar la fila para editar o borrar el registro
    const date = 'Fecha de impresión: ' + new Date().toLocaleDateString();
    const date2 = 'Fecha / actualizada el: ' + new Date().toLocaleDateString();
    var originalForm


    //Fórmulas

    //Precarga de tablas.
    window.onload = function() {
        var originalState = $("#formHojaSeguridad").clone();
        originalForm = originalState;
    }



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

    function deleteDuplicatedIDs () {
        console.log('Eliminando duplicados...');

        $('[id]').each(function () {

            var ids = $('[id="' + this.id + '"]');

            if (ids.length>1) {                    
                ids.not(this).remove();            
            }

            return;

        });

    };

    //Botón Previsualizar Hoja de Seguridad
    $(document).on("click", ".btnPrevisualizar", function () {
        $("#formHojaSeguridad").replaceWith(originalForm.clone());
        $("#modalHojaSeguridad").trigger("reset");
        $("#nombreRecetaPrev").empty();
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
                $("#loaded_telefonoFabricanteReceta").text(loaded_telefonoFabricanteReceta);
                $("#loaded_nombreReceta").text(loaded_nombreReceta);
                $('<h3>').text("Hoja de Seguridad para la Receta '" + nombreReceta + "'").appendTo("#nombreRecetaPrev");
                $(".modal-header").css("background-color", "#4e73df");
                $(".modal-header").css("color", "white");
                $(".modal-title").text("Hoja de Seguridad");

                loading_timer = 1000;
                more_time = 300;

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
                    title: "Generando vista previa!",
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
                        deleteDuplicatedIDs();
                        $('#modalHojaSeguridad').modal({ backdrop: 'static', keyboard: false }, 'show');
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
                            cas_loaded1 = dataParse;
                            console.log('Cargando CAS1...');
                            console.log(cas_loaded1);
                            $("#nombreUso").text(cas_loaded1[0].nombreUso);

                            if (cas_loaded1[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded1[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro1-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro1-1").text(cas_loaded1[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro1-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro1-1").attr("id", "loaded_idClasePeligro" + cas_loaded1[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded1[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded1[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro1-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro1-2").text(cas_loaded1[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro1-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro1-2").attr("id", "loaded_idClasePeligro" + cas_loaded1[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded1[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded1[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro1-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro1-3").text(cas_loaded1[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro1-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro1-3").attr("id", "loaded_idClasePeligro" + cas_loaded1[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded1[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded1[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro1-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro1-4").text(cas_loaded1[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro1-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro1-4").attr("id", "loaded_idClasePeligro" + cas_loaded1[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded1[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded1[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro1-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro1-5").text(cas_loaded1[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro1-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro1-5").attr("id", "loaded_idClasePeligro" + cas_loaded1[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded1[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded1[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro1-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro1-6").text(cas_loaded1[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro1-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro1-6").attr("id", "loaded_idClasePeligro" + cas_loaded1[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded1[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded1[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro1-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro1-7").text(cas_loaded1[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro1-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro1-7").attr("id", "loaded_idClasePeligro" + cas_loaded1[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded1[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded1[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro1-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro1-8").text(cas_loaded1[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro1-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro1-8").attr("id", "loaded_idClasePeligro" + cas_loaded1[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded1[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded1[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro1-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro1-9").text(cas_loaded1[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro1-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro1-9").attr("id", "loaded_idClasePeligro" + cas_loaded1[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded1[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded1[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro1-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro1-10").text(cas_loaded1[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro1-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro1-10").attr("id", "loaded_idClasePeligro" + cas_loaded1[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded1[0].idPictograma1 != null && cas_loaded1[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma1-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma1-1").attr("src", "pict/" + cas_loaded1[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma1-1").attr("id", "loaded_imagenPictograma" + cas_loaded1[0].idPictograma1 + "");
                            }

                            if (cas_loaded1[0].idPictograma2 != null && cas_loaded1[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma1-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma1-2").attr("src", "pict/" + cas_loaded1[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma1-2").attr("id", "loaded_imagenPictograma" + cas_loaded1[0].idPictograma2 + "");
                            }

                            if (cas_loaded1[0].idPictograma3 != null && cas_loaded1[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma1-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma1-3").attr("src", "pict/" + cas_loaded1[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma1-3").attr("id", "loaded_imagenPictograma" + cas_loaded1[0].idPictograma3 + "");
                            }

                            if (cas_loaded1[0].idPictograma4 != null && cas_loaded1[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma1-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma1-4").attr("src", "pict/" + cas_loaded1[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma1-4").attr("id", "loaded_imagenPictograma" + cas_loaded1[0].idPictograma4 + "");
                            }

                            if (cas_loaded1[0].idPictograma5 != null && cas_loaded1[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma1-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma1-5").attr("src", "pict/" + cas_loaded1[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma1-5").attr("id", "loaded_imagenPictograma" + cas_loaded1[0].idPictograma5 + "");
                            }

                            if (cas_loaded1[0].idPictograma6 != null && cas_loaded1[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma1-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma1-6").attr("src", "pict/" + cas_loaded1[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma1-6").attr("id", "loaded_imagenPictograma" + cas_loaded1[0].idPictograma6 + "");
                            }

                            if (cas_loaded1[0].idPictograma7 != null && cas_loaded1[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma1-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma1-7").attr("src", "pict/" + cas_loaded1[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma1-7").attr("id", "loaded_imagenPictograma" + cas_loaded1[0].idPictograma7 + "");
                            }

                            if (cas_loaded1[0].idPictograma8 != null && cas_loaded1[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma1-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma1-8").attr("src", "pict/" + cas_loaded1[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma1-8").attr("id", "loaded_imagenPictograma" + cas_loaded1[0].idPictograma8 + "");
                            }

                            if (cas_loaded1[0].idPictograma9 != null && cas_loaded1[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma1-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma1-9").attr("src", "pict/" + cas_loaded1[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma1-9").attr("id", "loaded_imagenPictograma" + cas_loaded1[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu1,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded1 = dataParse;
                            console.log('Cargando ONU1...');
                            console.log(onu_loaded1);
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
                } else {

                }


                if (loaded_cas2 != null) {
                    console.log("Producto 2 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas2,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded2 = dataParse;
                            console.log('Cargando CAS2...');
                            console.log(cas_loaded2);

                            if (cas_loaded2[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded2[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro2-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro2-1").text(cas_loaded2[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro2-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro2-1").attr("id", "loaded_idClasePeligro" + cas_loaded2[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded2[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded2[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro2-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro2-2").text(cas_loaded2[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro2-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro2-2").attr("id", "loaded_idClasePeligro" + cas_loaded2[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded2[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded2[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro2-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro2-3").text(cas_loaded2[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro2-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro2-3").attr("id", "loaded_idClasePeligro" + cas_loaded2[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded2[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded2[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro2-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro2-4").text(cas_loaded2[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro2-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro2-4").attr("id", "loaded_idClasePeligro" + cas_loaded2[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded2[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded2[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro2-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro2-5").text(cas_loaded2[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro2-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro2-5").attr("id", "loaded_idClasePeligro" + cas_loaded2[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded2[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded2[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro2-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro2-6").text(cas_loaded2[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro2-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro2-6").attr("id", "loaded_idClasePeligro" + cas_loaded2[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded2[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded2[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro2-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro2-7").text(cas_loaded2[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro2-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro2-7").attr("id", "loaded_idClasePeligro" + cas_loaded2[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded2[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded2[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro2-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro2-8").text(cas_loaded2[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro2-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro2-8").attr("id", "loaded_idClasePeligro" + cas_loaded2[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded2[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded2[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro2-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro2-9").text(cas_loaded2[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro2-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro2-9").attr("id", "loaded_idClasePeligro" + cas_loaded2[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded2[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded2[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro2-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro2-10").text(cas_loaded2[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro2-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro2-10").attr("id", "loaded_idClasePeligro" + cas_loaded2[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded2[0].idPictograma1 != null && cas_loaded2[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma2-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma2-1").attr("src", "pict/" + cas_loaded2[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma2-1").attr("id", "loaded_imagenPictograma" + cas_loaded2[0].idPictograma1 + "");
                            }

                            if (cas_loaded2[0].idPictograma2 != null && cas_loaded2[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma2-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma2-2").attr("src", "pict/" + cas_loaded2[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma2-2").attr("id", "loaded_imagenPictograma" + cas_loaded2[0].idPictograma2 + "");
                            }

                            if (cas_loaded2[0].idPictograma3 != null && cas_loaded2[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma2-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma2-3").attr("src", "pict/" + cas_loaded2[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma2-3").attr("id", "loaded_imagenPictograma" + cas_loaded2[0].idPictograma3 + "");
                            }

                            if (cas_loaded2[0].idPictograma4 != null && cas_loaded2[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma2-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma2-4").attr("src", "pict/" + cas_loaded2[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma2-4").attr("id", "loaded_imagenPictograma" + cas_loaded2[0].idPictograma4 + "");
                            }

                            if (cas_loaded2[0].idPictograma5 != null && cas_loaded2[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma2-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma2-5").attr("src", "pict/" + cas_loaded2[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma2-5").attr("id", "loaded_imagenPictograma" + cas_loaded2[0].idPictograma5 + "");
                            }

                            if (cas_loaded2[0].idPictograma6 != null && cas_loaded2[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma2-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma2-6").attr("src", "pict/" + cas_loaded2[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma2-6").attr("id", "loaded_imagenPictograma" + cas_loaded2[0].idPictograma6 + "");
                            }

                            if (cas_loaded2[0].idPictograma7 != null && cas_loaded2[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma2-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma2-7").attr("src", "pict/" + cas_loaded2[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma2-7").attr("id", "loaded_imagenPictograma" + cas_loaded2[0].idPictograma7 + "");
                            }

                            if (cas_loaded2[0].idPictograma8 != null && cas_loaded2[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma2-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma2-8").attr("src", "pict/" + cas_loaded2[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma2-8").attr("id", "loaded_imagenPictograma" + cas_loaded2[0].idPictograma8 + "");
                            }

                            if (cas_loaded2[0].idPictograma9 != null && cas_loaded2[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma2-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma2-9").attr("src", "pict/" + cas_loaded2[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma2-9").attr("id", "loaded_imagenPictograma" + cas_loaded2[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu2,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded2 = dataParse;
                            console.log('Cargando ONU2...');
                            console.log(onu_loaded2);
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
                } else {

                }


                if (loaded_cas3 != null) {
                    console.log("Producto 3 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas3,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded3 = dataParse;
                            console.log('Cargando CAS3...');
                            console.log(cas_loaded3);

                            if (cas_loaded3[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded3[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro3-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro3-1").text(cas_loaded3[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro3-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro3-1").attr("id", "loaded_idClasePeligro" + cas_loaded3[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded3[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded3[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro3-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro3-2").text(cas_loaded3[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro3-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro3-2").attr("id", "loaded_idClasePeligro" + cas_loaded3[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded3[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded3[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro3-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro3-3").text(cas_loaded3[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro3-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro3-3").attr("id", "loaded_idClasePeligro" + cas_loaded3[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded3[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded3[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro3-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro3-4").text(cas_loaded3[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro3-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro3-4").attr("id", "loaded_idClasePeligro" + cas_loaded3[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded3[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded3[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro3-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro3-5").text(cas_loaded3[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro3-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro3-5").attr("id", "loaded_idClasePeligro" + cas_loaded3[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded3[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded3[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro3-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro3-6").text(cas_loaded3[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro3-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro3-6").attr("id", "loaded_idClasePeligro" + cas_loaded3[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded3[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded3[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro3-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro3-7").text(cas_loaded3[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro3-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro3-7").attr("id", "loaded_idClasePeligro" + cas_loaded3[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded3[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded3[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro3-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro3-8").text(cas_loaded3[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro3-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro3-8").attr("id", "loaded_idClasePeligro" + cas_loaded3[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded3[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded3[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro3-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro3-9").text(cas_loaded3[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro3-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro3-9").attr("id", "loaded_idClasePeligro" + cas_loaded3[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded3[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded3[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro3-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro3-10").text(cas_loaded3[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro3-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro3-10").attr("id", "loaded_idClasePeligro" + cas_loaded3[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded3[0].idPictograma1 != null && cas_loaded3[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma3-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma3-1").attr("src", "pict/" + cas_loaded3[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma3-1").attr("id", "loaded_imagenPictograma" + cas_loaded3[0].idPictograma1 + "");
                            }

                            if (cas_loaded3[0].idPictograma2 != null && cas_loaded3[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma3-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma3-2").attr("src", "pict/" + cas_loaded3[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma3-2").attr("id", "loaded_imagenPictograma" + cas_loaded3[0].idPictograma2 + "");
                            }

                            if (cas_loaded3[0].idPictograma3 != null && cas_loaded3[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma3-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma3-3").attr("src", "pict/" + cas_loaded3[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma3-3").attr("id", "loaded_imagenPictograma" + cas_loaded3[0].idPictograma3 + "");
                            }

                            if (cas_loaded3[0].idPictograma4 != null && cas_loaded3[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma3-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma3-4").attr("src", "pict/" + cas_loaded3[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma3-4").attr("id", "loaded_imagenPictograma" + cas_loaded3[0].idPictograma4 + "");
                            }

                            if (cas_loaded3[0].idPictograma5 != null && cas_loaded3[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma3-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma3-5").attr("src", "pict/" + cas_loaded3[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma3-5").attr("id", "loaded_imagenPictograma" + cas_loaded3[0].idPictograma5 + "");
                            }

                            if (cas_loaded3[0].idPictograma6 != null && cas_loaded3[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma3-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma3-6").attr("src", "pict/" + cas_loaded3[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma3-6").attr("id", "loaded_imagenPictograma" + cas_loaded3[0].idPictograma6 + "");
                            }

                            if (cas_loaded3[0].idPictograma7 != null && cas_loaded3[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma3-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma3-7").attr("src", "pict/" + cas_loaded3[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma3-7").attr("id", "loaded_imagenPictograma" + cas_loaded3[0].idPictograma7 + "");
                            }

                            if (cas_loaded3[0].idPictograma8 != null && cas_loaded3[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma3-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma3-8").attr("src", "pict/" + cas_loaded3[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma3-8").attr("id", "loaded_imagenPictograma" + cas_loaded3[0].idPictograma8 + "");
                            }

                            if (cas_loaded3[0].idPictograma9 != null && cas_loaded3[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma3-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma3-9").attr("src", "pict/" + cas_loaded3[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma3-9").attr("id", "loaded_imagenPictograma" + cas_loaded3[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu3,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded3 = dataParse;
                            console.log('Cargando ONU3...');
                            console.log(onu_loaded3);
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
                } else {

                }


                if (loaded_cas4 != null) {
                    console.log("Producto 4 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas4,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded4 = dataParse;
                            console.log('Cargando CAS4...');
                            console.log(cas_loaded4);

                            if (cas_loaded4[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded4[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro4-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro4-1").text(cas_loaded4[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro4-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro4-1").attr("id", "loaded_idClasePeligro" + cas_loaded4[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded4[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded4[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro4-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro4-2").text(cas_loaded4[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro4-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro4-2").attr("id", "loaded_idClasePeligro" + cas_loaded4[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded4[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded4[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro4-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro4-3").text(cas_loaded4[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro4-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro4-3").attr("id", "loaded_idClasePeligro" + cas_loaded4[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded4[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded4[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro4-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro4-4").text(cas_loaded4[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro4-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro4-4").attr("id", "loaded_idClasePeligro" + cas_loaded4[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded4[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded4[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro4-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro4-5").text(cas_loaded4[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro4-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro4-5").attr("id", "loaded_idClasePeligro" + cas_loaded4[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded4[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded4[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro4-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro4-6").text(cas_loaded4[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro4-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro4-6").attr("id", "loaded_idClasePeligro" + cas_loaded4[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded4[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded4[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro4-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro4-7").text(cas_loaded4[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro4-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro4-7").attr("id", "loaded_idClasePeligro" + cas_loaded4[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded4[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded4[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro4-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro4-8").text(cas_loaded4[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro4-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro4-8").attr("id", "loaded_idClasePeligro" + cas_loaded4[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded4[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded4[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro4-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro4-9").text(cas_loaded4[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro4-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro4-9").attr("id", "loaded_idClasePeligro" + cas_loaded4[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded4[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded4[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro4-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro4-10").text(cas_loaded4[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro4-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro4-10").attr("id", "loaded_idClasePeligro" + cas_loaded4[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded4[0].idPictograma1 != null && cas_loaded4[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma4-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma4-1").attr("src", "pict/" + cas_loaded4[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma4-1").attr("id", "loaded_imagenPictograma" + cas_loaded4[0].idPictograma1 + "");
                            }

                            if (cas_loaded4[0].idPictograma2 != null && cas_loaded4[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma4-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma4-2").attr("src", "pict/" + cas_loaded4[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma4-2").attr("id", "loaded_imagenPictograma" + cas_loaded4[0].idPictograma2 + "");
                            }

                            if (cas_loaded4[0].idPictograma3 != null && cas_loaded4[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma4-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma4-3").attr("src", "pict/" + cas_loaded4[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma4-3").attr("id", "loaded_imagenPictograma" + cas_loaded4[0].idPictograma3 + "");
                            }

                            if (cas_loaded4[0].idPictograma4 != null && cas_loaded4[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma4-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma4-4").attr("src", "pict/" + cas_loaded4[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma4-4").attr("id", "loaded_imagenPictograma" + cas_loaded4[0].idPictograma4 + "");
                            }

                            if (cas_loaded4[0].idPictograma5 != null && cas_loaded4[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma4-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma4-5").attr("src", "pict/" + cas_loaded4[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma4-5").attr("id", "loaded_imagenPictograma" + cas_loaded4[0].idPictograma5 + "");
                            }

                            if (cas_loaded4[0].idPictograma6 != null && cas_loaded4[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma4-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma4-6").attr("src", "pict/" + cas_loaded4[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma4-6").attr("id", "loaded_imagenPictograma" + cas_loaded4[0].idPictograma6 + "");
                            }

                            if (cas_loaded4[0].idPictograma7 != null && cas_loaded4[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma4-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma4-7").attr("src", "pict/" + cas_loaded4[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma4-7").attr("id", "loaded_imagenPictograma" + cas_loaded4[0].idPictograma7 + "");
                            }

                            if (cas_loaded4[0].idPictograma8 != null && cas_loaded4[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma4-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma4-8").attr("src", "pict/" + cas_loaded4[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma4-8").attr("id", "loaded_imagenPictograma" + cas_loaded4[0].idPictograma8 + "");
                            }

                            if (cas_loaded4[0].idPictograma9 != null && cas_loaded4[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma4-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma4-9").attr("src", "pict/" + cas_loaded4[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma4-9").attr("id", "loaded_imagenPictograma" + cas_loaded4[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu4,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded4 = dataParse;
                            console.log('Cargando ONU4...');
                            console.log(onu_loaded4);
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
                } else {

                }


                if (loaded_cas5 != null) {
                    console.log("Producto 5 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas5,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded5 = dataParse;
                            console.log('Cargando CAS5...');
                            console.log(cas_loaded5);

                            if (cas_loaded5[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded5[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro5-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro5-1").text(cas_loaded5[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro5-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro5-1").attr("id", "loaded_idClasePeligro" + cas_loaded5[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded5[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded5[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro5-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro5-2").text(cas_loaded5[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro5-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro5-2").attr("id", "loaded_idClasePeligro" + cas_loaded5[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded5[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded5[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro5-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro5-3").text(cas_loaded5[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro5-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro5-3").attr("id", "loaded_idClasePeligro" + cas_loaded5[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded5[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded5[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro5-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro5-4").text(cas_loaded5[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro5-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro5-4").attr("id", "loaded_idClasePeligro" + cas_loaded5[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded5[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded5[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro5-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro5-5").text(cas_loaded5[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro5-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro5-5").attr("id", "loaded_idClasePeligro" + cas_loaded5[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded5[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded5[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro5-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro5-6").text(cas_loaded5[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro5-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro5-6").attr("id", "loaded_idClasePeligro" + cas_loaded5[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded5[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded5[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro5-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro5-7").text(cas_loaded5[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro5-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro5-7").attr("id", "loaded_idClasePeligro" + cas_loaded5[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded5[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded5[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro5-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro5-8").text(cas_loaded5[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro5-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro5-8").attr("id", "loaded_idClasePeligro" + cas_loaded5[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded5[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded5[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro5-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro5-9").text(cas_loaded5[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro5-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro5-9").attr("id", "loaded_idClasePeligro" + cas_loaded5[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded5[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded5[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro5-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro5-10").text(cas_loaded5[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro5-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro5-10").attr("id", "loaded_idClasePeligro" + cas_loaded5[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded5[0].idPictograma1 != null && cas_loaded5[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma5-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma5-1").attr("src", "pict/" + cas_loaded5[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma5-1").attr("id", "loaded_imagenPictograma" + cas_loaded5[0].idPictograma1 + "");
                            }

                            if (cas_loaded5[0].idPictograma2 != null && cas_loaded5[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma5-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma5-2").attr("src", "pict/" + cas_loaded5[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma5-2").attr("id", "loaded_imagenPictograma" + cas_loaded5[0].idPictograma2 + "");
                            }

                            if (cas_loaded5[0].idPictograma3 != null && cas_loaded5[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma5-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma5-3").attr("src", "pict/" + cas_loaded5[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma5-3").attr("id", "loaded_imagenPictograma" + cas_loaded5[0].idPictograma3 + "");
                            }

                            if (cas_loaded5[0].idPictograma4 != null && cas_loaded5[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma5-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma5-4").attr("src", "pict/" + cas_loaded5[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma5-4").attr("id", "loaded_imagenPictograma" + cas_loaded5[0].idPictograma4 + "");
                            }

                            if (cas_loaded5[0].idPictograma5 != null && cas_loaded5[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma5-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma5-5").attr("src", "pict/" + cas_loaded5[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma5-5").attr("id", "loaded_imagenPictograma" + cas_loaded5[0].idPictograma5 + "");
                            }

                            if (cas_loaded5[0].idPictograma6 != null && cas_loaded5[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma5-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma5-6").attr("src", "pict/" + cas_loaded5[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma5-6").attr("id", "loaded_imagenPictograma" + cas_loaded5[0].idPictograma6 + "");
                            }

                            if (cas_loaded5[0].idPictograma7 != null && cas_loaded5[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma5-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma5-7").attr("src", "pict/" + cas_loaded5[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma5-7").attr("id", "loaded_imagenPictograma" + cas_loaded5[0].idPictograma7 + "");
                            }

                            if (cas_loaded5[0].idPictograma8 != null && cas_loaded5[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma5-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma5-8").attr("src", "pict/" + cas_loaded5[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma5-8").attr("id", "loaded_imagenPictograma" + cas_loaded5[0].idPictograma8 + "");
                            }

                            if (cas_loaded5[0].idPictograma9 != null && cas_loaded5[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma5-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma5-9").attr("src", "pict/" + cas_loaded5[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma5-9").attr("id", "loaded_imagenPictograma" + cas_loaded5[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu5,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded5 = dataParse;
                            console.log('Cargando ONU5...');
                            console.log(onu_loaded5);
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
                } else {

                }


                if (loaded_cas6 != null) {
                    console.log("Producto 6 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas6,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded6 = dataParse;
                            console.log('Cargando CAS6...');
                            console.log(cas_loaded6);

                            if (cas_loaded6[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded6[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro6-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro6-1").text(cas_loaded6[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro6-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro6-1").attr("id", "loaded_idClasePeligro" + cas_loaded6[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded6[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded6[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro6-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro6-2").text(cas_loaded6[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro6-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro6-2").attr("id", "loaded_idClasePeligro" + cas_loaded6[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded6[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded6[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro6-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro6-3").text(cas_loaded6[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro6-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro6-3").attr("id", "loaded_idClasePeligro" + cas_loaded6[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded6[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded6[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro6-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro6-4").text(cas_loaded6[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro6-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro6-4").attr("id", "loaded_idClasePeligro" + cas_loaded6[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded6[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded6[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro6-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro6-5").text(cas_loaded6[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro6-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro6-5").attr("id", "loaded_idClasePeligro" + cas_loaded6[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded6[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded6[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro6-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro6-6").text(cas_loaded6[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro6-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro6-6").attr("id", "loaded_idClasePeligro" + cas_loaded6[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded6[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded6[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro6-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro6-7").text(cas_loaded6[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro6-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro6-7").attr("id", "loaded_idClasePeligro" + cas_loaded6[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded6[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded6[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro6-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro6-8").text(cas_loaded6[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro6-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro6-8").attr("id", "loaded_idClasePeligro" + cas_loaded6[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded6[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded6[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro6-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro6-9").text(cas_loaded6[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro6-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro6-9").attr("id", "loaded_idClasePeligro" + cas_loaded6[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded6[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded6[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro6-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro6-10").text(cas_loaded6[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro6-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro6-10").attr("id", "loaded_idClasePeligro" + cas_loaded6[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded6[0].idPictograma1 != null && cas_loaded6[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma6-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma6-1").attr("src", "pict/" + cas_loaded6[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma6-1").attr("id", "loaded_imagenPictograma" + cas_loaded6[0].idPictograma1 + "");
                            }

                            if (cas_loaded6[0].idPictograma2 != null && cas_loaded6[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma6-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma6-2").attr("src", "pict/" + cas_loaded6[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma6-2").attr("id", "loaded_imagenPictograma" + cas_loaded6[0].idPictograma2 + "");
                            }

                            if (cas_loaded6[0].idPictograma3 != null && cas_loaded6[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma6-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma6-3").attr("src", "pict/" + cas_loaded6[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma6-3").attr("id", "loaded_imagenPictograma" + cas_loaded6[0].idPictograma3 + "");
                            }

                            if (cas_loaded6[0].idPictograma4 != null && cas_loaded6[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma6-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma6-4").attr("src", "pict/" + cas_loaded6[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma6-4").attr("id", "loaded_imagenPictograma" + cas_loaded6[0].idPictograma4 + "");
                            }

                            if (cas_loaded6[0].idPictograma5 != null && cas_loaded6[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma6-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma6-5").attr("src", "pict/" + cas_loaded6[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma6-5").attr("id", "loaded_imagenPictograma" + cas_loaded6[0].idPictograma5 + "");
                            }

                            if (cas_loaded6[0].idPictograma6 != null && cas_loaded6[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma6-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma6-6").attr("src", "pict/" + cas_loaded6[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma6-6").attr("id", "loaded_imagenPictograma" + cas_loaded6[0].idPictograma6 + "");
                            }

                            if (cas_loaded6[0].idPictograma7 != null && cas_loaded6[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma6-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma6-7").attr("src", "pict/" + cas_loaded6[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma6-7").attr("id", "loaded_imagenPictograma" + cas_loaded6[0].idPictograma7 + "");
                            }

                            if (cas_loaded6[0].idPictograma8 != null && cas_loaded6[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma6-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma6-8").attr("src", "pict/" + cas_loaded6[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma6-8").attr("id", "loaded_imagenPictograma" + cas_loaded6[0].idPictograma8 + "");
                            }

                            if (cas_loaded6[0].idPictograma9 != null && cas_loaded6[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma6-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma6-9").attr("src", "pict/" + cas_loaded6[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma6-9").attr("id", "loaded_imagenPictograma" + cas_loaded6[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu6,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded6 = dataParse;
                            console.log('Cargando ONU6...');
                            console.log(onu_loaded6);
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
                } else {

                }


                if (loaded_cas7 != null) {
                    console.log("Producto 7 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas7,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded7 = dataParse;
                            console.log('Cargando CAS7...');
                            console.log(cas_loaded7);

                            if (cas_loaded7[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded7[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro7-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro7-1").text(cas_loaded7[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro7-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro7-1").attr("id", "loaded_idClasePeligro" + cas_loaded7[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded7[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded7[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro7-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro7-2").text(cas_loaded7[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro7-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro7-2").attr("id", "loaded_idClasePeligro" + cas_loaded7[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded7[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded7[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro7-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro7-3").text(cas_loaded7[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro7-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro7-3").attr("id", "loaded_idClasePeligro" + cas_loaded7[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded7[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded7[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro7-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro7-4").text(cas_loaded7[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro7-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro7-4").attr("id", "loaded_idClasePeligro" + cas_loaded7[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded7[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded7[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro7-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro7-5").text(cas_loaded7[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro7-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro7-5").attr("id", "loaded_idClasePeligro" + cas_loaded7[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded7[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded7[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro7-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro7-6").text(cas_loaded7[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro7-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro7-6").attr("id", "loaded_idClasePeligro" + cas_loaded7[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded7[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded7[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro7-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro7-7").text(cas_loaded7[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro7-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro7-7").attr("id", "loaded_idClasePeligro" + cas_loaded7[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded7[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded7[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro7-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro7-8").text(cas_loaded7[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro7-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro7-8").attr("id", "loaded_idClasePeligro" + cas_loaded7[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded7[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded7[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro7-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro7-9").text(cas_loaded7[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro7-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro7-9").attr("id", "loaded_idClasePeligro" + cas_loaded7[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded7[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded7[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro7-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro7-10").text(cas_loaded7[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro7-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro7-10").attr("id", "loaded_idClasePeligro" + cas_loaded7[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded7[0].idPictograma1 != null && cas_loaded7[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma7-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma7-1").attr("src", "pict/" + cas_loaded7[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma7-1").attr("id", "loaded_imagenPictograma" + cas_loaded7[0].idPictograma1 + "");
                            }

                            if (cas_loaded7[0].idPictograma2 != null && cas_loaded7[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma7-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma7-2").attr("src", "pict/" + cas_loaded7[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma7-2").attr("id", "loaded_imagenPictograma" + cas_loaded7[0].idPictograma2 + "");
                            }

                            if (cas_loaded7[0].idPictograma3 != null && cas_loaded7[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma7-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma7-3").attr("src", "pict/" + cas_loaded7[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma7-3").attr("id", "loaded_imagenPictograma" + cas_loaded7[0].idPictograma3 + "");
                            }

                            if (cas_loaded7[0].idPictograma4 != null && cas_loaded7[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma7-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma7-4").attr("src", "pict/" + cas_loaded7[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma7-4").attr("id", "loaded_imagenPictograma" + cas_loaded7[0].idPictograma4 + "");
                            }

                            if (cas_loaded7[0].idPictograma5 != null && cas_loaded7[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma7-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma7-5").attr("src", "pict/" + cas_loaded7[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma7-5").attr("id", "loaded_imagenPictograma" + cas_loaded7[0].idPictograma5 + "");
                            }

                            if (cas_loaded7[0].idPictograma6 != null && cas_loaded7[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma7-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma7-6").attr("src", "pict/" + cas_loaded7[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma7-6").attr("id", "loaded_imagenPictograma" + cas_loaded7[0].idPictograma6 + "");
                            }

                            if (cas_loaded7[0].idPictograma7 != null && cas_loaded7[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma7-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma7-7").attr("src", "pict/" + cas_loaded7[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma7-7").attr("id", "loaded_imagenPictograma" + cas_loaded7[0].idPictograma7 + "");
                            }

                            if (cas_loaded7[0].idPictograma8 != null && cas_loaded7[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma7-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma7-8").attr("src", "pict/" + cas_loaded7[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma7-8").attr("id", "loaded_imagenPictograma" + cas_loaded7[0].idPictograma8 + "");
                            }

                            if (cas_loaded7[0].idPictograma9 != null && cas_loaded7[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma7-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma7-9").attr("src", "pict/" + cas_loaded7[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma7-9").attr("id", "loaded_imagenPictograma" + cas_loaded7[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu7,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded7 = dataParse;
                            console.log('Cargando ONU7...');
                            console.log(onu_loaded7);
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
                } else {

                }


                if (loaded_cas8 != null) {
                    console.log("Producto 8 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas8,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded8 = dataParse;
                            console.log('Cargando CAS8...');
                            console.log(cas_loaded8);

                            if (cas_loaded8[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded8[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro8-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro8-1").text(cas_loaded8[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro8-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro8-1").attr("id", "loaded_idClasePeligro" + cas_loaded8[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded8[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded8[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro8-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro8-2").text(cas_loaded8[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro8-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro8-2").attr("id", "loaded_idClasePeligro" + cas_loaded8[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded8[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded8[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro8-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro8-3").text(cas_loaded8[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro8-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro8-3").attr("id", "loaded_idClasePeligro" + cas_loaded8[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded8[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded8[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro8-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro8-4").text(cas_loaded8[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro8-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro8-4").attr("id", "loaded_idClasePeligro" + cas_loaded8[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded8[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded8[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro8-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro8-5").text(cas_loaded8[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro8-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro8-5").attr("id", "loaded_idClasePeligro" + cas_loaded8[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded8[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded8[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro8-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro8-6").text(cas_loaded8[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro8-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro8-6").attr("id", "loaded_idClasePeligro" + cas_loaded8[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded8[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded8[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro8-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro8-7").text(cas_loaded8[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro8-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro8-7").attr("id", "loaded_idClasePeligro" + cas_loaded8[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded8[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded8[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro8-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro8-8").text(cas_loaded8[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro8-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro8-8").attr("id", "loaded_idClasePeligro" + cas_loaded8[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded8[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded8[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro8-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro8-9").text(cas_loaded8[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro8-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro8-9").attr("id", "loaded_idClasePeligro" + cas_loaded8[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded8[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded8[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro8-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro8-10").text(cas_loaded8[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro8-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro8-10").attr("id", "loaded_idClasePeligro" + cas_loaded8[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded8[0].idPictograma1 != null && cas_loaded8[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma8-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma8-1").attr("src", "pict/" + cas_loaded8[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma8-1").attr("id", "loaded_imagenPictograma" + cas_loaded8[0].idPictograma1 + "");
                            }

                            if (cas_loaded8[0].idPictograma2 != null && cas_loaded8[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma8-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma8-2").attr("src", "pict/" + cas_loaded8[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma8-2").attr("id", "loaded_imagenPictograma" + cas_loaded8[0].idPictograma2 + "");
                            }

                            if (cas_loaded8[0].idPictograma3 != null && cas_loaded8[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma8-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma8-3").attr("src", "pict/" + cas_loaded8[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma8-3").attr("id", "loaded_imagenPictograma" + cas_loaded8[0].idPictograma3 + "");
                            }

                            if (cas_loaded8[0].idPictograma4 != null && cas_loaded8[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma8-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma8-4").attr("src", "pict/" + cas_loaded8[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma8-4").attr("id", "loaded_imagenPictograma" + cas_loaded8[0].idPictograma4 + "");
                            }

                            if (cas_loaded8[0].idPictograma5 != null && cas_loaded8[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma8-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma8-5").attr("src", "pict/" + cas_loaded8[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma8-5").attr("id", "loaded_imagenPictograma" + cas_loaded8[0].idPictograma5 + "");
                            }

                            if (cas_loaded8[0].idPictograma6 != null && cas_loaded8[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma8-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma8-6").attr("src", "pict/" + cas_loaded8[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma8-6").attr("id", "loaded_imagenPictograma" + cas_loaded8[0].idPictograma6 + "");
                            }

                            if (cas_loaded8[0].idPictograma7 != null && cas_loaded8[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma8-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma8-7").attr("src", "pict/" + cas_loaded8[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma8-7").attr("id", "loaded_imagenPictograma" + cas_loaded8[0].idPictograma7 + "");
                            }

                            if (cas_loaded8[0].idPictograma8 != null && cas_loaded8[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma8-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma8-8").attr("src", "pict/" + cas_loaded8[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma8-8").attr("id", "loaded_imagenPictograma" + cas_loaded8[0].idPictograma8 + "");
                            }

                            if (cas_loaded8[0].idPictograma9 != null && cas_loaded8[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma8-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma8-9").attr("src", "pict/" + cas_loaded8[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma8-9").attr("id", "loaded_imagenPictograma" + cas_loaded8[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu8,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded8 = dataParse;
                            console.log('Cargando ONU8...');
                            console.log(onu_loaded8);
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
                } else {
 
                }


                if (loaded_cas9 != null) {
                    console.log("Producto 9 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas9,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded9 = dataParse;
                            console.log('Cargando CAS9...');
                            console.log(cas_loaded9);

                            if (cas_loaded9[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded9[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro9-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro9-1").text(cas_loaded9[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro9-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro9-1").attr("id", "loaded_idClasePeligro" + cas_loaded9[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded9[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded9[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro9-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro9-2").text(cas_loaded9[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro9-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro9-2").attr("id", "loaded_idClasePeligro" + cas_loaded9[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded9[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded9[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro9-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro9-3").text(cas_loaded9[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro9-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro9-3").attr("id", "loaded_idClasePeligro" + cas_loaded9[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded9[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded9[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro9-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro9-4").text(cas_loaded9[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro9-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro9-4").attr("id", "loaded_idClasePeligro" + cas_loaded9[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded9[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded9[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro9-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro9-5").text(cas_loaded9[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro9-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro9-5").attr("id", "loaded_idClasePeligro" + cas_loaded9[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded9[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded9[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro9-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro9-6").text(cas_loaded9[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro9-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro9-6").attr("id", "loaded_idClasePeligro" + cas_loaded9[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded9[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded9[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro9-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro9-7").text(cas_loaded9[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro9-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro9-7").attr("id", "loaded_idClasePeligro" + cas_loaded9[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded9[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded9[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro9-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro9-8").text(cas_loaded9[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro9-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro9-8").attr("id", "loaded_idClasePeligro" + cas_loaded9[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded9[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded9[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro9-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro9-9").text(cas_loaded9[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro9-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro9-9").attr("id", "loaded_idClasePeligro" + cas_loaded9[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded9[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded9[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro9-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro9-10").text(cas_loaded9[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro9-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro9-10").attr("id", "loaded_idClasePeligro" + cas_loaded9[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded9[0].idPictograma1 != null && cas_loaded9[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma9-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma9-1").attr("src", "pict/" + cas_loaded9[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma9-1").attr("id", "loaded_imagenPictograma" + cas_loaded9[0].idPictograma1 + "");
                            }

                            if (cas_loaded9[0].idPictograma2 != null && cas_loaded9[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma9-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma9-2").attr("src", "pict/" + cas_loaded9[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma9-2").attr("id", "loaded_imagenPictograma" + cas_loaded9[0].idPictograma2 + "");
                            }

                            if (cas_loaded9[0].idPictograma3 != null && cas_loaded9[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma9-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma9-3").attr("src", "pict/" + cas_loaded9[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma9-3").attr("id", "loaded_imagenPictograma" + cas_loaded9[0].idPictograma3 + "");
                            }

                            if (cas_loaded9[0].idPictograma4 != null && cas_loaded9[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma9-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma9-4").attr("src", "pict/" + cas_loaded9[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma9-4").attr("id", "loaded_imagenPictograma" + cas_loaded9[0].idPictograma4 + "");
                            }

                            if (cas_loaded9[0].idPictograma5 != null && cas_loaded9[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma9-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma9-5").attr("src", "pict/" + cas_loaded9[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma9-5").attr("id", "loaded_imagenPictograma" + cas_loaded9[0].idPictograma5 + "");
                            }

                            if (cas_loaded9[0].idPictograma6 != null && cas_loaded9[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma9-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma9-6").attr("src", "pict/" + cas_loaded9[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma9-6").attr("id", "loaded_imagenPictograma" + cas_loaded9[0].idPictograma6 + "");
                            }

                            if (cas_loaded9[0].idPictograma7 != null && cas_loaded9[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma9-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma9-7").attr("src", "pict/" + cas_loaded9[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma9-7").attr("id", "loaded_imagenPictograma" + cas_loaded9[0].idPictograma7 + "");
                            }

                            if (cas_loaded9[0].idPictograma8 != null && cas_loaded9[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma9-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma9-8").attr("src", "pict/" + cas_loaded9[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma9-8").attr("id", "loaded_imagenPictograma" + cas_loaded9[0].idPictograma8 + "");
                            }

                            if (cas_loaded9[0].idPictograma9 != null && cas_loaded9[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma9-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma9-9").attr("src", "pict/" + cas_loaded9[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma9-9").attr("id", "loaded_imagenPictograma" + cas_loaded9[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu9,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded9 = dataParse;
                            console.log('Cargando ONU9...');
                            console.log(onu_loaded9);
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
                } else {

                }


                if (loaded_cas10 != null) {
                    console.log("Producto 10 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas10,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded10 = dataParse;
                            console.log('Cargando CAS10...');
                            console.log(cas_loaded10);

                            if (cas_loaded10[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded10[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro10-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro10-1").text(cas_loaded10[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro10-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro10-1").attr("id", "loaded_idClasePeligro" + cas_loaded10[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded10[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded10[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro10-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro10-2").text(cas_loaded10[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro10-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro10-2").attr("id", "loaded_idClasePeligro" + cas_loaded10[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded10[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded10[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro10-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro10-3").text(cas_loaded10[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro10-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro10-3").attr("id", "loaded_idClasePeligro" + cas_loaded10[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded10[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded10[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro10-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro10-4").text(cas_loaded10[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro10-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro10-4").attr("id", "loaded_idClasePeligro" + cas_loaded10[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded10[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded10[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro10-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro10-5").text(cas_loaded10[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro10-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro10-5").attr("id", "loaded_idClasePeligro" + cas_loaded10[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded10[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded10[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro10-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro10-6").text(cas_loaded10[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro10-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro10-6").attr("id", "loaded_idClasePeligro" + cas_loaded10[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded10[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded10[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro10-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro10-7").text(cas_loaded10[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro10-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro10-7").attr("id", "loaded_idClasePeligro" + cas_loaded10[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded10[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded10[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro10-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro10-8").text(cas_loaded10[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro10-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro10-8").attr("id", "loaded_idClasePeligro" + cas_loaded10[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded10[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded10[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro10-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro10-9").text(cas_loaded10[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro10-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro10-9").attr("id", "loaded_idClasePeligro" + cas_loaded10[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded10[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded10[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro10-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro10-10").text(cas_loaded10[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro10-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro10-10").attr("id", "loaded_idClasePeligro" + cas_loaded10[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded10[0].idPictograma1 != null && cas_loaded10[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma10-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma10-1").attr("src", "pict/" + cas_loaded10[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma10-1").attr("id", "loaded_imagenPictograma" + cas_loaded10[0].idPictograma1 + "");
                            }

                            if (cas_loaded10[0].idPictograma2 != null && cas_loaded10[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma10-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma10-2").attr("src", "pict/" + cas_loaded10[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma10-2").attr("id", "loaded_imagenPictograma" + cas_loaded10[0].idPictograma2 + "");
                            }

                            if (cas_loaded10[0].idPictograma3 != null && cas_loaded10[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma10-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma10-3").attr("src", "pict/" + cas_loaded10[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma10-3").attr("id", "loaded_imagenPictograma" + cas_loaded10[0].idPictograma3 + "");
                            }

                            if (cas_loaded10[0].idPictograma4 != null && cas_loaded10[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma10-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma10-4").attr("src", "pict/" + cas_loaded10[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma10-4").attr("id", "loaded_imagenPictograma" + cas_loaded10[0].idPictograma4 + "");
                            }

                            if (cas_loaded10[0].idPictograma5 != null && cas_loaded10[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma10-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma10-5").attr("src", "pict/" + cas_loaded10[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma10-5").attr("id", "loaded_imagenPictograma" + cas_loaded10[0].idPictograma5 + "");
                            }

                            if (cas_loaded10[0].idPictograma6 != null && cas_loaded10[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma10-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma10-6").attr("src", "pict/" + cas_loaded10[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma10-6").attr("id", "loaded_imagenPictograma" + cas_loaded10[0].idPictograma6 + "");
                            }

                            if (cas_loaded10[0].idPictograma7 != null && cas_loaded10[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma10-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma10-7").attr("src", "pict/" + cas_loaded10[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma10-7").attr("id", "loaded_imagenPictograma" + cas_loaded10[0].idPictograma7 + "");
                            }

                            if (cas_loaded10[0].idPictograma8 != null && cas_loaded10[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma10-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma10-8").attr("src", "pict/" + cas_loaded10[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma10-8").attr("id", "loaded_imagenPictograma" + cas_loaded10[0].idPictograma8 + "");
                            }

                            if (cas_loaded10[0].idPictograma9 != null && cas_loaded10[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma10-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma10-9").attr("src", "pict/" + cas_loaded10[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma10-9").attr("id", "loaded_imagenPictograma" + cas_loaded10[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu10,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded10 = dataParse;
                            console.log('Cargando ONU10...');
                            console.log(onu_loaded10);
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
                } else {

                }


                if (loaded_cas11 != null) {
                    console.log("Producto 11 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas11,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded11 = dataParse;
                            console.log('Cargando CAS11...');
                            console.log(cas_loaded11);

                            if (cas_loaded11[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded11[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro11-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro11-1").text(cas_loaded11[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro11-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro11-1").attr("id", "loaded_idClasePeligro" + cas_loaded11[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded11[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded11[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro11-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro11-2").text(cas_loaded11[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro11-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro11-2").attr("id", "loaded_idClasePeligro" + cas_loaded11[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded11[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded11[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro11-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro11-3").text(cas_loaded11[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro11-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro11-3").attr("id", "loaded_idClasePeligro" + cas_loaded11[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded11[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded11[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro11-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro11-4").text(cas_loaded11[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro11-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro11-4").attr("id", "loaded_idClasePeligro" + cas_loaded11[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded11[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded11[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro11-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro11-5").text(cas_loaded11[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro11-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro11-5").attr("id", "loaded_idClasePeligro" + cas_loaded11[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded11[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded11[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro11-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro11-6").text(cas_loaded11[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro11-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro11-6").attr("id", "loaded_idClasePeligro" + cas_loaded11[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded11[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded11[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro11-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro11-7").text(cas_loaded11[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro11-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro11-7").attr("id", "loaded_idClasePeligro" + cas_loaded11[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded11[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded11[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro11-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro11-8").text(cas_loaded11[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro11-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro11-8").attr("id", "loaded_idClasePeligro" + cas_loaded11[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded11[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded11[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro11-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro11-9").text(cas_loaded11[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro11-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro11-9").attr("id", "loaded_idClasePeligro" + cas_loaded11[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded11[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded11[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro11-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro11-10").text(cas_loaded11[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro11-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro11-10").attr("id", "loaded_idClasePeligro" + cas_loaded11[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded11[0].idPictograma1 != null && cas_loaded11[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma11-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma11-1").attr("src", "pict/" + cas_loaded11[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma11-1").attr("id", "loaded_imagenPictograma" + cas_loaded11[0].idPictograma1 + "");
                            }

                            if (cas_loaded11[0].idPictograma2 != null && cas_loaded11[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma11-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma11-2").attr("src", "pict/" + cas_loaded11[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma11-2").attr("id", "loaded_imagenPictograma" + cas_loaded11[0].idPictograma2 + "");
                            }

                            if (cas_loaded11[0].idPictograma3 != null && cas_loaded11[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma11-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma11-3").attr("src", "pict/" + cas_loaded11[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma11-3").attr("id", "loaded_imagenPictograma" + cas_loaded11[0].idPictograma3 + "");
                            }

                            if (cas_loaded11[0].idPictograma4 != null && cas_loaded11[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma11-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma11-4").attr("src", "pict/" + cas_loaded11[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma11-4").attr("id", "loaded_imagenPictograma" + cas_loaded11[0].idPictograma4 + "");
                            }

                            if (cas_loaded11[0].idPictograma5 != null && cas_loaded11[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma11-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma11-5").attr("src", "pict/" + cas_loaded11[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma11-5").attr("id", "loaded_imagenPictograma" + cas_loaded11[0].idPictograma5 + "");
                            }

                            if (cas_loaded11[0].idPictograma6 != null && cas_loaded11[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma11-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma11-6").attr("src", "pict/" + cas_loaded11[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma11-6").attr("id", "loaded_imagenPictograma" + cas_loaded11[0].idPictograma6 + "");
                            }

                            if (cas_loaded11[0].idPictograma7 != null && cas_loaded11[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma11-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma11-7").attr("src", "pict/" + cas_loaded11[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma11-7").attr("id", "loaded_imagenPictograma" + cas_loaded11[0].idPictograma7 + "");
                            }

                            if (cas_loaded11[0].idPictograma8 != null && cas_loaded11[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma11-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma11-8").attr("src", "pict/" + cas_loaded11[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma11-8").attr("id", "loaded_imagenPictograma" + cas_loaded11[0].idPictograma8 + "");
                            }

                            if (cas_loaded11[0].idPictograma9 != null && cas_loaded11[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma11-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma11-9").attr("src", "pict/" + cas_loaded11[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma11-9").attr("id", "loaded_imagenPictograma" + cas_loaded11[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu11,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded11 = dataParse;
                            console.log('Cargando ONU11...');
                            console.log(onu_loaded11);
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
                } else {

                }


                if (loaded_cas12 != null) {
                    console.log("Producto 12 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas12,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded12 = dataParse;
                            console.log('Cargando CAS12...');
                            console.log(cas_loaded12);

                            if (cas_loaded12[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded12[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro12-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro12-1").text(cas_loaded12[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro12-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro12-1").attr("id", "loaded_idClasePeligro" + cas_loaded12[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded12[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded12[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro12-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro12-2").text(cas_loaded12[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro12-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro12-2").attr("id", "loaded_idClasePeligro" + cas_loaded12[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded12[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded12[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro12-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro12-3").text(cas_loaded12[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro12-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro12-3").attr("id", "loaded_idClasePeligro" + cas_loaded12[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded12[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded12[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro12-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro12-4").text(cas_loaded12[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro12-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro12-4").attr("id", "loaded_idClasePeligro" + cas_loaded12[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded12[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded12[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro12-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro12-5").text(cas_loaded12[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro12-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro12-5").attr("id", "loaded_idClasePeligro" + cas_loaded12[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded12[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded12[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro12-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro12-6").text(cas_loaded12[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro12-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro12-6").attr("id", "loaded_idClasePeligro" + cas_loaded12[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded12[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded12[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro12-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro12-7").text(cas_loaded12[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro12-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro12-7").attr("id", "loaded_idClasePeligro" + cas_loaded12[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded12[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded12[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro12-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro12-8").text(cas_loaded12[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro12-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro12-8").attr("id", "loaded_idClasePeligro" + cas_loaded12[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded12[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded12[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro12-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro12-9").text(cas_loaded12[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro12-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro12-9").attr("id", "loaded_idClasePeligro" + cas_loaded12[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded12[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded12[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro12-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro12-10").text(cas_loaded12[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro12-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro12-10").attr("id", "loaded_idClasePeligro" + cas_loaded12[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded12[0].idPictograma1 != null && cas_loaded12[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma12-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma12-1").attr("src", "pict/" + cas_loaded12[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma12-1").attr("id", "loaded_imagenPictograma" + cas_loaded12[0].idPictograma1 + "");
                            }

                            if (cas_loaded12[0].idPictograma2 != null && cas_loaded12[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma12-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma12-2").attr("src", "pict/" + cas_loaded12[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma12-2").attr("id", "loaded_imagenPictograma" + cas_loaded12[0].idPictograma2 + "");
                            }

                            if (cas_loaded12[0].idPictograma3 != null && cas_loaded12[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma12-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma12-3").attr("src", "pict/" + cas_loaded12[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma12-3").attr("id", "loaded_imagenPictograma" + cas_loaded12[0].idPictograma3 + "");
                            }

                            if (cas_loaded12[0].idPictograma4 != null && cas_loaded12[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma12-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma12-4").attr("src", "pict/" + cas_loaded12[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma12-4").attr("id", "loaded_imagenPictograma" + cas_loaded12[0].idPictograma4 + "");
                            }

                            if (cas_loaded12[0].idPictograma5 != null && cas_loaded12[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma12-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma12-5").attr("src", "pict/" + cas_loaded12[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma12-5").attr("id", "loaded_imagenPictograma" + cas_loaded12[0].idPictograma5 + "");
                            }

                            if (cas_loaded12[0].idPictograma6 != null && cas_loaded12[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma12-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma12-6").attr("src", "pict/" + cas_loaded12[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma12-6").attr("id", "loaded_imagenPictograma" + cas_loaded12[0].idPictograma6 + "");
                            }

                            if (cas_loaded12[0].idPictograma7 != null && cas_loaded12[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma12-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma12-7").attr("src", "pict/" + cas_loaded12[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma12-7").attr("id", "loaded_imagenPictograma" + cas_loaded12[0].idPictograma7 + "");
                            }

                            if (cas_loaded12[0].idPictograma8 != null && cas_loaded12[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma12-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma12-8").attr("src", "pict/" + cas_loaded12[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma12-8").attr("id", "loaded_imagenPictograma" + cas_loaded12[0].idPictograma8 + "");
                            }

                            if (cas_loaded12[0].idPictograma9 != null && cas_loaded12[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma12-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma12-9").attr("src", "pict/" + cas_loaded12[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma12-9").attr("id", "loaded_imagenPictograma" + cas_loaded12[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu12,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded12 = dataParse;
                            console.log('Cargando ONU12...');
                            console.log(onu_loaded12);
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
                } else {

                }


                if (loaded_cas13 != null) {
                    console.log("Producto 13 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas13,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded13 = dataParse;
                            console.log('Cargando CAS13...');
                            console.log(cas_loaded13);

                            if (cas_loaded13[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded13[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro13-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro13-1").text(cas_loaded13[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro13-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro13-1").attr("id", "loaded_idClasePeligro" + cas_loaded13[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded13[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded13[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro13-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro13-2").text(cas_loaded13[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro13-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro13-2").attr("id", "loaded_idClasePeligro" + cas_loaded13[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded13[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded13[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro13-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro13-3").text(cas_loaded13[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro13-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro13-3").attr("id", "loaded_idClasePeligro" + cas_loaded13[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded13[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded13[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro13-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro13-4").text(cas_loaded13[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro13-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro13-4").attr("id", "loaded_idClasePeligro" + cas_loaded13[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded13[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded13[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro13-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro13-5").text(cas_loaded13[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro13-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro13-5").attr("id", "loaded_idClasePeligro" + cas_loaded13[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded13[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded13[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro13-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro13-6").text(cas_loaded13[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro13-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro13-6").attr("id", "loaded_idClasePeligro" + cas_loaded13[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded13[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded13[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro13-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro13-7").text(cas_loaded13[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro13-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro13-7").attr("id", "loaded_idClasePeligro" + cas_loaded13[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded13[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded13[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro13-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro13-8").text(cas_loaded13[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro13-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro13-8").attr("id", "loaded_idClasePeligro" + cas_loaded13[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded13[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded13[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro13-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro13-9").text(cas_loaded13[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro13-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro13-9").attr("id", "loaded_idClasePeligro" + cas_loaded13[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded13[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded13[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro13-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro13-10").text(cas_loaded13[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro13-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro13-10").attr("id", "loaded_idClasePeligro" + cas_loaded13[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded13[0].idPictograma1 != null && cas_loaded13[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma13-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma13-1").attr("src", "pict/" + cas_loaded13[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma13-1").attr("id", "loaded_imagenPictograma" + cas_loaded13[0].idPictograma1 + "");
                            }

                            if (cas_loaded13[0].idPictograma2 != null && cas_loaded13[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma13-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma13-2").attr("src", "pict/" + cas_loaded13[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma13-2").attr("id", "loaded_imagenPictograma" + cas_loaded13[0].idPictograma2 + "");
                            }

                            if (cas_loaded13[0].idPictograma3 != null && cas_loaded13[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma13-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma13-3").attr("src", "pict/" + cas_loaded13[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma13-3").attr("id", "loaded_imagenPictograma" + cas_loaded13[0].idPictograma3 + "");
                            }

                            if (cas_loaded13[0].idPictograma4 != null && cas_loaded13[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma13-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma13-4").attr("src", "pict/" + cas_loaded13[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma13-4").attr("id", "loaded_imagenPictograma" + cas_loaded13[0].idPictograma4 + "");
                            }

                            if (cas_loaded13[0].idPictograma5 != null && cas_loaded13[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma13-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma13-5").attr("src", "pict/" + cas_loaded13[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma13-5").attr("id", "loaded_imagenPictograma" + cas_loaded13[0].idPictograma5 + "");
                            }

                            if (cas_loaded13[0].idPictograma6 != null && cas_loaded13[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma13-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma13-6").attr("src", "pict/" + cas_loaded13[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma13-6").attr("id", "loaded_imagenPictograma" + cas_loaded13[0].idPictograma6 + "");
                            }

                            if (cas_loaded13[0].idPictograma7 != null && cas_loaded13[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma13-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma13-7").attr("src", "pict/" + cas_loaded13[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma13-7").attr("id", "loaded_imagenPictograma" + cas_loaded13[0].idPictograma7 + "");
                            }

                            if (cas_loaded13[0].idPictograma8 != null && cas_loaded13[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma13-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma13-8").attr("src", "pict/" + cas_loaded13[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma13-8").attr("id", "loaded_imagenPictograma" + cas_loaded13[0].idPictograma8 + "");
                            }

                            if (cas_loaded13[0].idPictograma9 != null && cas_loaded13[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma13-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma13-9").attr("src", "pict/" + cas_loaded13[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma13-9").attr("id", "loaded_imagenPictograma" + cas_loaded13[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu13,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded13 = dataParse;
                            console.log('Cargando ONU13...');
                            console.log(onu_loaded13);
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
                } else {

                }


                if (loaded_cas14 != null) {
                    console.log("Producto 14 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas14,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded14 = dataParse;
                            console.log('Cargando CAS14...');
                            console.log(cas_loaded14);

                            if (cas_loaded14[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded14[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro14-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro14-1").text(cas_loaded14[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro14-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro14-1").attr("id", "loaded_idClasePeligro" + cas_loaded14[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded14[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded14[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro14-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro14-2").text(cas_loaded14[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro14-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro14-2").attr("id", "loaded_idClasePeligro" + cas_loaded14[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded14[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded14[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro14-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro14-3").text(cas_loaded14[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro14-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro14-3").attr("id", "loaded_idClasePeligro" + cas_loaded14[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded14[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded14[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro14-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro14-4").text(cas_loaded14[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro14-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro14-4").attr("id", "loaded_idClasePeligro" + cas_loaded14[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded14[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded14[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro14-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro14-5").text(cas_loaded14[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro14-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro14-5").attr("id", "loaded_idClasePeligro" + cas_loaded14[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded14[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded14[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro14-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro14-6").text(cas_loaded14[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro14-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro14-6").attr("id", "loaded_idClasePeligro" + cas_loaded14[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded14[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded14[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro14-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro14-7").text(cas_loaded14[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro14-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro14-7").attr("id", "loaded_idClasePeligro" + cas_loaded14[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded14[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded14[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro14-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro14-8").text(cas_loaded14[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro14-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro14-8").attr("id", "loaded_idClasePeligro" + cas_loaded14[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded14[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded14[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro14-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro14-9").text(cas_loaded14[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro14-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro14-9").attr("id", "loaded_idClasePeligro" + cas_loaded14[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded14[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded14[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro14-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro14-10").text(cas_loaded14[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro14-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro14-10").attr("id", "loaded_idClasePeligro" + cas_loaded14[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded14[0].idPictograma1 != null && cas_loaded14[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma14-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma14-1").attr("src", "pict/" + cas_loaded14[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma14-1").attr("id", "loaded_imagenPictograma" + cas_loaded14[0].idPictograma1 + "");
                            }

                            if (cas_loaded14[0].idPictograma2 != null && cas_loaded14[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma14-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma14-2").attr("src", "pict/" + cas_loaded14[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma14-2").attr("id", "loaded_imagenPictograma" + cas_loaded14[0].idPictograma2 + "");
                            }

                            if (cas_loaded14[0].idPictograma3 != null && cas_loaded14[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma14-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma14-3").attr("src", "pict/" + cas_loaded14[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma14-3").attr("id", "loaded_imagenPictograma" + cas_loaded14[0].idPictograma3 + "");
                            }

                            if (cas_loaded14[0].idPictograma4 != null && cas_loaded14[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma14-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma14-4").attr("src", "pict/" + cas_loaded14[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma14-4").attr("id", "loaded_imagenPictograma" + cas_loaded14[0].idPictograma4 + "");
                            }

                            if (cas_loaded14[0].idPictograma5 != null && cas_loaded14[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma14-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma14-5").attr("src", "pict/" + cas_loaded14[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma14-5").attr("id", "loaded_imagenPictograma" + cas_loaded14[0].idPictograma5 + "");
                            }

                            if (cas_loaded14[0].idPictograma6 != null && cas_loaded14[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma14-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma14-6").attr("src", "pict/" + cas_loaded14[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma14-6").attr("id", "loaded_imagenPictograma" + cas_loaded14[0].idPictograma6 + "");
                            }

                            if (cas_loaded14[0].idPictograma7 != null && cas_loaded14[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma14-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma14-7").attr("src", "pict/" + cas_loaded14[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma14-7").attr("id", "loaded_imagenPictograma" + cas_loaded14[0].idPictograma7 + "");
                            }

                            if (cas_loaded14[0].idPictograma8 != null && cas_loaded14[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma14-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma14-8").attr("src", "pict/" + cas_loaded14[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma14-8").attr("id", "loaded_imagenPictograma" + cas_loaded14[0].idPictograma8 + "");
                            }

                            if (cas_loaded14[0].idPictograma9 != null && cas_loaded14[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma14-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma14-9").attr("src", "pict/" + cas_loaded14[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma14-9").attr("id", "loaded_imagenPictograma" + cas_loaded14[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu14,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded14 = dataParse;
                            console.log('Cargando ONU14...');
                            console.log(onu_loaded14);
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
                } else {

                }


                if (loaded_cas15 != null) {
                    console.log("Producto 15 cargado");
                    $.ajax({
                        type: "POST",
                        url: "bd/cargarProducto.php",
                        data: "cas=" + loaded_cas15,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            cas_loaded15 = dataParse;
                            console.log('Cargando CAS14...');
                            console.log(cas_loaded15);

                            if (cas_loaded15[0].nombreClasePeligro1 != null) {
                                console.log(cas_loaded15[0].nombreClasePeligro1);
                                $('#loaded_nombreCategoriaPeligro15-1').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro15-1").text(cas_loaded15[0].nombreClasePeligro1);
                                $("#loaded_nombreCategoriaPeligro15-1").append('<br />');
                                $("#loaded_nombreCategoriaPeligro15-1").attr("id", "loaded_idClasePeligro" + cas_loaded15[0].idClasePeligro1 + "");
                            }

                            if (cas_loaded15[0].nombreClasePeligro2 != null) {
                                console.log(cas_loaded15[0].nombreClasePeligro2);
                                $('#loaded_nombreCategoriaPeligro15-2').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro15-2").text(cas_loaded15[0].nombreClasePeligro2);
                                $("#loaded_nombreCategoriaPeligro15-2").append('<br />');
                                $("#loaded_nombreCategoriaPeligro15-2").attr("id", "loaded_idClasePeligro" + cas_loaded15[0].idClasePeligro2 + "");
                            }

                            if (cas_loaded15[0].nombreClasePeligro3 != null) {
                                console.log(cas_loaded15[0].nombreClasePeligro3);
                                $('#loaded_nombreCategoriaPeligro15-3').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro15-3").text(cas_loaded15[0].nombreClasePeligro3);
                                $("#loaded_nombreCategoriaPeligro15-3").append('<br />');
                                $("#loaded_nombreCategoriaPeligro15-3").attr("id", "loaded_idClasePeligro" + cas_loaded15[0].idClasePeligro3 + "");
                            }

                            if (cas_loaded15[0].nombreClasePeligro4 != null) {
                                console.log(cas_loaded15[0].nombreClasePeligro4);
                                $('#loaded_nombreCategoriaPeligro15-4').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro15-4").text(cas_loaded15[0].nombreClasePeligro4);
                                $("#loaded_nombreCategoriaPeligro15-4").append('<br />');
                                $("#loaded_nombreCategoriaPeligro15-4").attr("id", "loaded_idClasePeligro" + cas_loaded15[0].idClasePeligro4 + "");
                            }

                            if (cas_loaded15[0].nombreClasePeligro5 != null) {
                                console.log(cas_loaded15[0].nombreClasePeligro5);
                                $('#loaded_nombreCategoriaPeligro15-5').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro15-5").text(cas_loaded15[0].nombreClasePeligro5);
                                $("#loaded_nombreCategoriaPeligro15-5").append('<br />');
                                $("#loaded_nombreCategoriaPeligro15-5").attr("id", "loaded_idClasePeligro" + cas_loaded15[0].idClasePeligro5 + "");
                            }

                            if (cas_loaded15[0].nombreClasePeligro6 != null) {
                                console.log(cas_loaded15[0].nombreClasePeligro6);
                                $('#loaded_nombreCategoriaPeligro15-6').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro15-6").text(cas_loaded15[0].nombreClasePeligro6);
                                $("#loaded_nombreCategoriaPeligro15-6").append('<br />');
                                $("#loaded_nombreCategoriaPeligro15-6").attr("id", "loaded_idClasePeligro" + cas_loaded15[0].idClasePeligro6 + "");
                            }

                            if (cas_loaded15[0].nombreClasePeligro7 != null) {
                                console.log(cas_loaded15[0].nombreClasePeligro7);
                                $('#loaded_nombreCategoriaPeligro15-7').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro15-7").text(cas_loaded15[0].nombreClasePeligro7);
                                $("#loaded_nombreCategoriaPeligro15-7").append('<br />');
                                $("#loaded_nombreCategoriaPeligro15-7").attr("id", "loaded_idClasePeligro" + cas_loaded15[0].idClasePeligro7 + "");
                            }

                            if (cas_loaded15[0].nombreClasePeligro8 != null) {
                                console.log(cas_loaded15[0].nombreClasePeligro8);
                                $('#loaded_nombreCategoriaPeligro15-8').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro15-8").text(cas_loaded15[0].nombreClasePeligro8);
                                $("#loaded_nombreCategoriaPeligro15-8").append('<br />');
                                $("#loaded_nombreCategoriaPeligro15-8").attr("id", "loaded_idClasePeligro" + cas_loaded15[0].idClasePeligro8 + "");
                            }

                            if (cas_loaded15[0].nombreClasePeligro9 != null) {
                                console.log(cas_loaded15[0].nombreClasePeligro9);
                                $('#loaded_nombreCategoriaPeligro15-9').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro15-9").text(cas_loaded15[0].nombreClasePeligro9);
                                $("#loaded_nombreCategoriaPeligro15-9").append('<br />');
                                $("#loaded_nombreCategoriaPeligro15-9").attr("id", "loaded_idClasePeligro" + cas_loaded15[0].idClasePeligro9 + "");
                            }

                            if (cas_loaded15[0].nombreClasePeligro10 != null) {
                                console.log(cas_loaded15[0].nombreClasePeligro10);
                                $('#loaded_nombreCategoriaPeligro15-10').removeAttr('hidden');
                                $("#loaded_nombreCategoriaPeligro15-10").text(cas_loaded15[0].nombreClasePeligro10);
                                $("#loaded_nombreCategoriaPeligro15-10").append('<br />');
                                $("#loaded_nombreCategoriaPeligro15-10").attr("id", "loaded_idClasePeligro" + cas_loaded15[0].idClasePeligro10 + "");
                            }


                            //Aquí se muestran los pictogramas
                            if (cas_loaded15[0].idPictograma1 != null && cas_loaded15[0].idPictograma1 != 10) {
                                $('#loaded_imagenPictograma15-1').removeAttr('hidden');
                                $("#loaded_imagenPictograma15-1").attr("src", "pict/" + cas_loaded15[0].idPictograma1 + ".png");
                                $("#loaded_imagenPictograma15-1").attr("id", "loaded_imagenPictograma" + cas_loaded15[0].idPictograma1 + "");
                            }

                            if (cas_loaded15[0].idPictograma2 != null && cas_loaded15[0].idPictograma2 != 10) {
                                $('#loaded_imagenPictograma15-2').removeAttr('hidden');
                                $("#loaded_imagenPictograma15-2").attr("src", "pict/" + cas_loaded15[0].idPictograma2 + ".png");
                                $("#loaded_imagenPictograma15-2").attr("id", "loaded_imagenPictograma" + cas_loaded15[0].idPictograma2 + "");
                            }

                            if (cas_loaded15[0].idPictograma3 != null && cas_loaded15[0].idPictograma3 != 10) {
                                $('#loaded_imagenPictograma15-3').removeAttr('hidden');
                                $("#loaded_imagenPictograma15-3").attr("src", "pict/" + cas_loaded15[0].idPictograma3 + ".png");
                                $("#loaded_imagenPictograma15-3").attr("id", "loaded_imagenPictograma" + cas_loaded15[0].idPictograma3 + "");
                            }

                            if (cas_loaded15[0].idPictograma4 != null && cas_loaded15[0].idPictograma4 != 10) {
                                $('#loaded_imagenPictograma15-4').removeAttr('hidden');
                                $("#loaded_imagenPictograma15-4").attr("src", "pict/" + cas_loaded15[0].idPictograma4 + ".png");
                                $("#loaded_imagenPictograma15-4").attr("id", "loaded_imagenPictograma" + cas_loaded15[0].idPictograma4 + "");
                            }

                            if (cas_loaded15[0].idPictograma5 != null && cas_loaded15[0].idPictograma5 != 10) {
                                $('#loaded_imagenPictograma15-5').removeAttr('hidden');
                                $("#loaded_imagenPictograma15-5").attr("src", "pict/" + cas_loaded15[0].idPictograma5 + ".png");
                                $("#loaded_imagenPictograma15-5").attr("id", "loaded_imagenPictograma" + cas_loaded15[0].idPictograma5 + "");
                            }

                            if (cas_loaded15[0].idPictograma6 != null && cas_loaded15[0].idPictograma6 != 10) {
                                $('#loaded_imagenPictograma15-6').removeAttr('hidden');
                                $("#loaded_imagenPictograma15-6").attr("src", "pict/" + cas_loaded15[0].idPictograma6 + ".png");
                                $("#loaded_imagenPictograma15-6").attr("id", "loaded_imagenPictograma" + cas_loaded15[0].idPictograma6 + "");
                            }

                            if (cas_loaded15[0].idPictograma7 != null && cas_loaded15[0].idPictograma7 != 10) {
                                $('#loaded_imagenPictograma15-7').removeAttr('hidden');
                                $("#loaded_imagenPictograma15-7").attr("src", "pict/" + cas_loaded15[0].idPictograma7 + ".png");
                                $("#loaded_imagenPictograma15-7").attr("id", "loaded_imagenPictograma" + cas_loaded15[0].idPictograma7 + "");
                            }

                            if (cas_loaded15[0].idPictograma8 != null && cas_loaded15[0].idPictograma8 != 10) {
                                $('#loaded_imagenPictograma15-8').removeAttr('hidden');
                                $("#loaded_imagenPictograma15-8").attr("src", "pict/" + cas_loaded15[0].idPictograma8 + ".png");
                                $("#loaded_imagenPictograma15-8").attr("id", "loaded_imagenPictograma" + cas_loaded15[0].idPictograma8 + "");
                            }

                            if (cas_loaded15[0].idPictograma9 != null && cas_loaded15[0].idPictograma9 != 10) {
                                $('#loaded_imagenPictograma15-9').removeAttr('hidden');
                                $("#loaded_imagenPictograma15-9").attr("src", "pict/" + cas_loaded15[0].idPictograma9 + ".png");
                                $("#loaded_imagenPictograma15-9").attr("id", "loaded_imagenPictograma" + cas_loaded15[0].idPictograma9 + "");
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
                    }),

                    $.ajax({
                        type: "POST",
                        url: "bd/cargarOnu.php",
                        data: "onu=" + loaded_onu15,
                        success: function (data) {
                            //console.log(data);
                            dataParse = JSON.parse(data);
                            onu_loaded15 = dataParse;
                            console.log('Cargando ONU15...');
                            console.log(onu_loaded15);
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
    });
});