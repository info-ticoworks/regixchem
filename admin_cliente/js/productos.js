$(document).ready(function () {

    let lat;

    //Inicio de Funciones para ocultar clases

    function hideClase1() {
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
        $('#unidad1').html("N/A");
        $('#nivel1').removeAttr('required');
        $('#nivel1').attr("disabled", "disabled");
        $('#nivel1').val('');
        $('#clase1').hide();
        idClase1 = 0;
        idCategoria1 = 0;
        idPalabraAdvertencia1 = 0;
        idIndicacion1 = 0;
        idPictograma1 = 0;
        nivel1 = 'null';
        idUnidad1 = 'null';
        // console.log(idClase1);
        // console.log(idCategoria1);
        // console.log(idPalabraAdvertencia1);
        // console.log(idIndicacion1);
        // console.log(idPictograma1);
    }

    function hideClase2() {
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
        $('#unidad2').html("N/A");
        $('#nivel2').removeAttr('required');
        $('#nivel2').attr("disabled", "disabled");
        $('#nivel2').val('');
        $('#clase2').hide();
        idClase2 = 0;
        idCategoria2 = 0;
        idPalabraAdvertencia2 = 0;
        idIndicacion2 = 0;
        idPictograma2 = 0;
        nivel2 = 'null';
        idUnidad2 = 'null';
    }

    function hideClase3() {
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
        $('#unidad3').html("N/A");
        $('#nivel3').removeAttr('required');
        $('#nivel3').attr("disabled", "disabled");
        $('#nivel3').val('');
        $('#clase3').hide();
        idClase3 = 0;
        idCategoria3 = 0;
        idPalabraAdvertencia3 = 0;
        idIndicacion3 = 0;
        idPictograma3 = 0;
        nivel3 = 'null';
        idUnidad3 = 'null';
    }

    function hideClase4() {
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
        $('#unidad4').html("N/A");
        $('#nivel4').removeAttr('required');
        $('#nivel4').attr("disabled", "disabled");
        $('#nivel4').val('');
        $('#clase4').hide();
        idClase4 = 0;
        idCategoria4 = 0;
        idPalabraAdvertencia4 = 0;
        idIndicacion4 = 0;
        idPictograma4 = 0;
        nivel4 = 'null';
        idUnidad4 = 'null';
    }

    function hideClase5() {
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
        $('#unidad5').html("N/A");
        $('#nivel5').removeAttr('required');
        $('#nivel5').attr("disabled", "disabled");
        $('#nivel5').val('');
        $('#clase5').hide();
        idClase5 = 0;
        idCategoria5 = 0;
        idPalabraAdvertencia5 = 0;
        idIndicacion5 = 0;
        idPictograma5 = 0;
        nivel5 = 'null';
        idUnidad5 = 'null';
    }

    function hideClase6() {
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
        $('#unidad6').html("N/A");
        $('#nivel6').removeAttr('required');
        $('#nivel6').attr("disabled", "disabled");
        $('#nivel6').val('');
        $('#clase6').hide();
        idClase6 = 0;
        idCategoria6 = 0;
        idPalabraAdvertencia6 = 0;
        idIndicacion6 = 0;
        idPictograma6 = 0;
        nivel6 = 'null';
        idUnidad6 = 'null';
    }

    function hideClase7() {
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
        $('#unidad7').html("N/A");
        $('#nivel7').removeAttr('required');
        $('#nivel7').attr("disabled", "disabled");
        $('#nivel7').val('');
        $('#clase7').hide();
        idClase7 = 0;
        idCategoria7 = 0;
        idPalabraAdvertencia7 = 0;
        idIndicacion7 = 0;
        idPictograma7 = 0;
        nivel7 = 'null';
        idUnidad7 = 'null';
    }

    function hideClase8() {
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
        $('#unidad8').html("N/A");
        $('#nivel8').removeAttr('required');
        $('#nivel8').attr("disabled", "disabled");
        $('#nivel8').val('');
        $('#clase8').hide();
        idClase8 = 0;
        idCategoria8 = 0;
        idPalabraAdvertencia8 = 0;
        idIndicacion8 = 0;
        idPictograma8 = 0;
        nivel8 = 'null';
        idUnidad8 = 'null';
    }

    function hideClase9() {
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
        $('#unidad9').html("N/A");
        $('#nivel9').removeAttr('required');
        $('#nivel9').attr("disabled", "disabled");
        $('#nivel9').val('');
        $('#clase9').hide();
        idClase9 = 0;
        idCategoria9 = 0;
        idPalabraAdvertencia9 = 0;
        idIndicacion9 = 0;
        idPictograma9 = 0;
        nivel9 = 'null';
        idUnidad9 = 'null';
    }

    function hideClase10() {
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
        $('#unidad10').html("N/A");
        $('#nivel10').removeAttr('required');
        $('#nivel10').attr("disabled", "disabled");
        $('#nivel10').val('');
        $('#clase10').hide();
        idClase10 = 0;
        idCategoria10 = 0;
        idPalabraAdvertencia10 = 0;
        idIndicacion10 = 0;
        idPictograma10 = 0;
        nivel10 = 'null';
        idUnidad10 = 'null';
    }

    function hideClases() {
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

    //Final de Funciones para ocultar clases


    //Inicio de las Funciones de los botones para agregar Clases

    function btnClase1() {
        $('#clase1').show();
        $('#btnClase1').hide();
        $('#btnEliminarClase1').show();
        $('#nombreClase1').prop('selectedIndex', 0);
        $('#nombreClase1 option').removeAttr("selected");
        $('#nombreClase1').removeAttr('selected');
        $('#nombreClase1').removeAttr('disabled');
        $("#nombreClase1").attr("required", "required");
        $('#nombreCategoria1').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia1').prop('selectedIndex', 0);
        $('#nombreIndicacion1').prop('selectedIndex', 0);
        $('#btnClase2').show();
        $('#modalCRUD').animate({ scrollTop: 500 }, 'fast');
    }

    function btnClase2() {
        $('#btnEliminarClase1').hide();
        $('#clase2').show();
        $('#btnClase2').hide();
        $('#btnEliminarClase2').show();
        $('#nombreClase2').prop('selectedIndex', 0);
        $('#nombreClase2 option').removeAttr("selected");
        $('#nombreClase2').removeAttr('selected');
        $('#nombreClase2').removeAttr('disabled');
        $("#nombreClase2").attr("required", "required");
        $('#nombreCategoria2').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia2').prop('selectedIndex', 0);
        $('#nombreIndicacion2').prop('selectedIndex', 0);
        $('#btnClase3').show();
        $('#modalCRUD').animate({ scrollTop: 1000 }, 'fast');
    }

    function btnClase3() {
        $('#btnEliminarClase2').hide();
        $('#clase3').show();
        $('#btnClase3').hide();
        $('#btnEliminarClase3').show();
        $('#nombreClase3').prop('selectedIndex', 0);
        $('#nombreClase3 option').removeAttr("selected");
        $('#nombreClase3').removeAttr('selected');
        $('#nombreClase3').removeAttr('disabled');
        $("#nombreClase3").attr("required", "required");
        $('#nombreCategoria3').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia3').prop('selectedIndex', 0);
        $('#nombreIndicacion3').prop('selectedIndex', 0);
        $('#btnClase4').show();
        $('#modalCRUD').animate({ scrollTop: 1500 }, 'fast');
    }

    function btnClase4() {
        $('#btnEliminarClase3').hide();
        $('#clase4').show();
        $('#btnClase4').hide();
        $('#btnEliminarClase4').show();
        $('#nombreClase4').prop('selectedIndex', 0);
        $('#nombreClase4 option').removeAttr("selected");
        $('#nombreClase4').removeAttr('selected');
        $('#nombreClase4').removeAttr('disabled');
        $("#nombreClase4").attr("required", "required");
        $('#nombreCategoria4').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia4').prop('selectedIndex', 0);
        $('#nombreIndicacion4').prop('selectedIndex', 0);
        $('#btnClase5').show();
        $('#modalCRUD').animate({ scrollTop: 2000 }, 'fast');
    }

    function btnClase5() {
        $('#btnEliminarClase4').hide();
        $('#clase5').show();
        $('#btnClase5').hide();
        $('#btnEliminarClase5').show();
        $('#nombreClase5').prop('selectedIndex', 0);
        $('#nombreClase5 option').removeAttr("selected");
        $('#nombreClase5').removeAttr('selected');
        $('#nombreClase5').removeAttr('disabled');
        $("#nombreClase5").attr("required", "required");
        $('#nombreCategoria5').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia5').prop('selectedIndex', 0);
        $('#nombreIndicacion5').prop('selectedIndex', 0);
        $('#btnClase6').show();
        $('#modalCRUD').animate({ scrollTop: 2500 }, 'fast');
    }

    function btnClase6() {
        $('#btnEliminarClase5').hide();
        $('#clase6').show();
        $('#btnClase6').hide();
        $('#btnEliminarClase6').show();
        $('#nombreClase6').prop('selectedIndex', 0);
        $('#nombreClase6 option').removeAttr("selected");
        $('#nombreClase6').removeAttr('selected');
        $('#nombreClase6').removeAttr('disabled');
        $("#nombreClase6").attr("required", "required");
        $('#nombreCategoria6').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia6').prop('selectedIndex', 0);
        $('#nombreIndicacion6').prop('selectedIndex', 0);
        $('#btnClase7').show();
        $('#modalCRUD').animate({ scrollTop: 3000 }, 'fast');
    }

    function btnClase7() {
        $('#btnEliminarClase6').hide();
        $('#clase7').show();
        $('#btnClase7').hide();
        $('#btnEliminarClase7').show();
        $('#nombreClase7').prop('selectedIndex', 0);
        $('#nombreClase7 option').removeAttr("selected");
        $('#nombreClase7').removeAttr('selected');
        $('#nombreClase7').removeAttr('disabled');
        $("#nombreClase7").attr("required", "required");
        $('#nombreCategoria7').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia7').prop('selectedIndex', 0);
        $('#nombreIndicacion7').prop('selectedIndex', 0);
        $('#btnClase8').show();
        $('#modalCRUD').animate({ scrollTop: 3500 }, 'fast');
    }

    function btnClase8() {
        $('#btnEliminarClase7').hide();
        $('#clase8').show();
        $('#btnClase8').hide();
        $('#btnEliminarClase8').show();
        $('#nombreClase8').prop('selectedIndex', 0);
        $('#nombreClase8 option').removeAttr("selected");
        $('#nombreClase8').removeAttr('selected');
        $('#nombreClase8').removeAttr('disabled');
        $("#nombreClase8").attr("required", "required");
        $('#nombreCategoria8').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia8').prop('selectedIndex', 0);
        $('#nombreIndicacion8').prop('selectedIndex', 0);
        $('#btnClase9').show();
        $('#modalCRUD').animate({ scrollTop: 4000 }, 'fast');
    }

    function btnClase9() {
        $('#btnEliminarClase8').hide();
        $('#clase9').show();
        $('#btnClase9').hide();
        $('#btnEliminarClase9').show();
        $('#nombreClase9').prop('selectedIndex', 0);
        $('#nombreClase9 option').removeAttr("selected");
        $('#nombreClase9').removeAttr('selected');
        $('#nombreClase9').removeAttr('disabled');
        $("#nombreClase9").attr("required", "required");
        $('#nombreCategoria9').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia9').prop('selectedIndex', 0);
        $('#nombreIndicacion9').prop('selectedIndex', 0);
        $('#btnClase10').show();
        $('#modalCRUD').animate({ scrollTop: 4500 }, 'fast');
    }

    function btnClase10() {
        $('#btnEliminarClase9').hide();
        $('#clase10').show();
        $('#btnClase10').hide();
        $('#btnEliminarClase10').show();
        $('#nombreClase10').prop('selectedIndex', 0);
        $('#nombreClase10 option').removeAttr("selected");
        $('#nombreClase10').removeAttr('selected');
        $('#nombreClase10').removeAttr('disabled');
        $("#nombreClase10").attr("required", "required");
        $('#nombreCategoria10').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia10').prop('selectedIndex', 0);
        $('#nombreIndicacion10').prop('selectedIndex', 0);
        $('#modalCRUD').animate({ scrollTop: 5000 }, 'fast');
    }

    //Final de las Funciones de los botones para agregar Clases

    //Inicio de los botones para agregar clases

    $('#btnClase1').on('click', function () {
        btnClase1();
    });

    $('#btnClase2').on('click', function () {
        btnClase2();
    });

    $('#btnClase3').on('click', function () {
        btnClase3();
    });

    $('#btnClase4').on('click', function () {
        btnClase4();
    });

    $('#btnClase5').on('click', function () {
        btnClase5();
    });

    $('#btnClase6').on('click', function () {
        btnClase6();
    });

    $('#btnClase7').on('click', function () {
        btnClase7();
    });

    $('#btnClase8').on('click', function () {
        btnClase8();
    });

    $('#btnClase9').on('click', function () {
        btnClase9();
    });

    $('#btnClase10').on('click', function () {
        btnClase10();
    });

    //Final de los botones para agregar clases

    //Inicio de las funciones de los botones para eliminar Clases

    function btnEliminarClase1() {
        idClase1 = 0;
        idCategoria1 = 0;
        idPalabraAdvertencia1 = 0;
        idIndicacion1 = 0;
        idPictograma1 = 0;
        nivel1 = 'null';
        idUnidad1 = 'null';
        // console.log(idClase1);
        // console.log(idCategoria1);
        // console.log(idPalabraAdvertencia1);
        // console.log(idIndicacion1);
        // console.log(idPictograma1);
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
        $('#unidad1').html("N/A");
        $('#nivel1').removeAttr('required');
        $('#nivel1').attr("disabled", "disabled");
        $('#nivel1').val('');
        $('#clase1').slideUp(600);
        $('#btnClase2').slideUp(500); 
    }

    function btnEliminarClase2() {
        idClase2 = 0;
        idCategoria2 = 0;
        idPalabraAdvertencia2 = 0;
        idIndicacion2 = 0;
        idPictograma2 = 0;
        nivel2 = 'null';
        idUnidad2 = 'null';
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
        $('#unidad2').html("N/A");
        $('#nivel2').removeAttr('required');
        $('#nivel2').attr("disabled", "disabled");
        $('#nivel2').val('');
        $('#clase2').slideUp(600);
        $('#btnClase3').slideUp(500);
        $idPictograma2 = 0;
    }

    function btnEliminarClase3() {
        idClase3 = 0;
        idCategoria3 = 0;
        idPalabraAdvertencia3 = 0;
        idIndicacion3 = 0;
        idPictograma3 = 0;
        nivel3 = 'null';
        idUnidad3 = 'null';
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
        $('#unidad3').html("N/A");
        $('#nivel3').removeAttr('required');
        $('#nivel3').attr("disabled", "disabled");
        $('#nivel3').val('');
        $('#clase3').slideUp(600);
        $('#btnClase4').slideUp(500);
        $idPictograma3 = 0;
    }

    function btnEliminarClase4() {
        idClase4 = 0;
        idCategoria4 = 0;
        idPalabraAdvertencia4 = 0;
        idIndicacion4 = 0;
        idPictograma4 = 0;
        nivel4 = 'null';
        idUnidad4 = 'null';
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
        $('#unidad4').html("N/A");
        $('#nivel4').removeAttr('required');
        $('#nivel4').attr("disabled", "disabled");
        $('#nivel4').val('');
        $('#clase4').slideUp(600);
        $('#btnClase5').slideUp(500);
        $idPictograma4 = 0;
    }

    function btnEliminarClase5() {
        idClase5 = 0;
        idCategoria5 = 0;
        idPalabraAdvertencia5 = 0;
        idIndicacion5 = 0;
        idPictograma5 = 0;
        nivel5 = 'null';
        idUnidad5 = 'null';
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
        $('#unidad5').html("N/A");
        $('#nivel5').removeAttr('required');
        $('#nivel5').attr("disabled", "disabled");
        $('#nivel5').val('');
        $('#clase5').slideUp(600);
        $('#btnClase6').slideUp(600);
        $idPictograma5 = 0;
    }

    function btnEliminarClase6() {
        idClase6 = 0;
        idCategoria6 = 0;
        idPalabraAdvertencia6 = 0;
        idIndicacion6 = 0;
        idPictograma6 = 0;
        nivel6 = 'null';
        idUnidad6 = 'null';
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
        $('#unidad6').html("N/A");
        $('#nivel6').removeAttr('required');
        $('#nivel6').attr("disabled", "disabled");
        $('#nivel6').val('');
        $('#clase6').slideUp(700);
        $('#btnClase7').slideUp(700);
        $idPictograma6 = 0;
    }

    function btnEliminarClase7() {
        idClase7 = 0;
        idCategoria7 = 0;
        idPalabraAdvertencia7 = 0;
        idIndicacion7 = 0;
        idPictograma7 = 0;
        nivel7 = 'null';
        idUnidad7 = 'null';
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
        $('#unidad7').html("N/A");
        $('#nivel7').removeAttr('required');
        $('#nivel7').attr("disabled", "disabled");
        $('#nivel7').val('');
        $('#clase7').slideUp(800);
        $('#btnClase8').slideUp(800);
        $idPictograma7 = 0;
    }

    function btnEliminarClase8() {
        idClase8 = 0;
        idCategoria8 = 0;
        idPalabraAdvertencia8 = 0;
        idIndicacion8 = 0;
        idPictograma8 = 0;
        nivel8 = 'null';
        idUnidad8 = 'null';
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
        $('#unidad8').html("N/A");
        $('#nivel8').removeAttr('required');
        $('#nivel8').attr("disabled", "disabled");
        $('#nivel8').val('');
        $('#clase8').slideUp(900);
        $('#btnClase9').slideUp(900);
        $idPictograma8 = 0;
    }

    function btnEliminarClase9() {
        idClase9 = 0;
        idCategoria9 = 0;
        idPalabraAdvertencia9 = 0;
        idIndicacion9 = 0;
        idPictograma9 = 0;
        nivel9 = 'null';
        idUnidad9 = 'null';
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
        $('#unidad9').html("N/A");
        $('#nivel9').removeAttr('required');
        $('#nivel9').attr("disabled", "disabled");
        $('#nivel9').val('');
        $('#clase9').slideUp(900);
        $('#btnClase10').slideUp(900);
        $idPictograma9 = 0;
    }

    function btnEliminarClase10() {
        idClase10 = 0;
        idCategoria10 = 0;
        idPalabraAdvertencia10 = 0;
        idIndicacion10 = 0;
        idPictograma10 = 0;
        nivel10 = 'null';
        idUnidad10 = 'null';
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
        $('#unidad10').html("N/A");
        $('#nivel10').removeAttr('required');
        $('#nivel10').attr("disabled", "disabled");
        $('#nivel10').val('');
        $('#clase10').slideUp(900);
        $idPictograma10 = 0;
    }

    function eliminarClases() {
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

    //Final de las funciones de los botones para eliminar Clases

    //Inicio de las funciones de los botones para eliminar Clases al editar productos

    function eliminarClase1() {
        idClase1 = 0;
        idCategoria1 = 0;
        idPalabraAdvertencia1 = 0;
        idIndicacion1 = 0;
        idPictograma1 = 0;
        nivel1 = 'null';
        idUnidad1 = 'null';
        // console.log(idClase1);
        // console.log(idCategoria1);
        // console.log(idPalabraAdvertencia1);
        // console.log(idIndicacion1);
        // console.log(idPictograma1);
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
        $('#unidad1').html("N/A");
        $('#nivel1').removeAttr('required');
        $('#nivel1').attr("disabled", "disabled");
        $('#nivel1').val('');
        $('#clase1').slideUp(600);
        $('#btnClase2').slideUp(500); 
    }

    function eliminarClase2() {
        idClase2 = 0;
        idCategoria2 = 0;
        idPalabraAdvertencia2 = 0;
        idIndicacion2 = 0;
        idPictograma2 = 0;
        nivel2 = 'null';
        idUnidad2 = 'null';
        $('#btnEliminarClase1').show();
        //$('#btnClase2').fadeIn(1000);
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
        $('#unidad2').html("N/A");
        $('#nivel2').removeAttr('required');
        $('#nivel2').attr("disabled", "disabled");
        $('#nivel2').val('');
        $('#clase2').slideUp(600);
        $('#btnClase3').slideUp(500);
        $idPictograma2 = 0;
    }

    function eliminarClase3() {
        idClase3 = 0;
        idCategoria3 = 0;
        idPalabraAdvertencia3 = 0;
        idIndicacion3 = 0;
        idPictograma3 = 0;
        nivel3 = 'null';
        idUnidad3 = 'null';
        $('#btnEliminarClase2').show();
        //$('#btnClase3').fadeIn(1000);
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
        $('#unidad3').html("N/A");
        $('#nivel3').removeAttr('required');
        $('#nivel3').attr("disabled", "disabled");
        $('#nivel3').val('');
        $('#clase3').slideUp(600);
        $('#btnClase4').slideUp(500);
        $idPictograma3 = 0;
    }

    function eliminarClase4() {
        idClase4 = 0;
        idCategoria4 = 0;
        idPalabraAdvertencia4 = 0;
        idIndicacion4 = 0;
        idPictograma4 = 0;
        nivel4 = 'null';
        idUnidad4 = 'null';
        $('#btnEliminarClase3').show();
        //$('#btnClase4').fadeIn(1000);
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
        $('#unidad4').html("N/A");
        $('#nivel4').removeAttr('required');
        $('#nivel4').attr("disabled", "disabled");
        $('#nivel4').val('');
        $('#clase4').slideUp(600);
        $('#btnClase5').slideUp(500);
        $idPictograma4 = 0;
    }

    function eliminarClase5() {
        idClase5 = 0;
        idCategoria5 = 0;
        idPalabraAdvertencia5 = 0;
        idIndicacion5 = 0;
        idPictograma5 = 0;
        nivel5 = 'null';
        idUnidad5 = 'null';
        $('#btnEliminarClase4').show();
        //$('#btnClase5').fadeIn(1000);
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
        $('#unidad5').html("N/A");
        $('#nivel5').removeAttr('required');
        $('#nivel5').attr("disabled", "disabled");
        $('#nivel5').val('');
        $('#clase5').slideUp(600);
        $('#btnClase6').slideUp(600);
        $idPictograma5 = 0;
    }

    function eliminarClase6() {
        idClase6 = 0;
        idCategoria6 = 0;
        idPalabraAdvertencia6 = 0;
        idIndicacion6 = 0;
        idPictograma6 = 0;
        nivel6 = 'null';
        idUnidad6 = 'null';
        $('#btnEliminarClase5').show();
        //$('#btnClase6').fadeIn(1000);
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
        $('#unidad6').html("N/A");
        $('#nivel6').removeAttr('required');
        $('#nivel6').attr("disabled", "disabled");
        $('#nivel6').val('');
        $('#clase6').slideUp(700);
        $('#btnClase7').slideUp(700);
        $idPictograma6 = 0;
    }

    function eliminarClase7() {
        idClase7 = 0;
        idCategoria7 = 0;
        idPalabraAdvertencia7 = 0;
        idIndicacion7 = 0;
        idPictograma7 = 0;
        nivel7 = 'null';
        idUnidad7 = 'null';
        $('#btnEliminarClase6').show();
        //$('#btnClase7').fadeIn(1000);
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
        $('#unidad7').html("N/A");
        $('#nivel7').removeAttr('required');
        $('#nivel7').attr("disabled", "disabled");
        $('#nivel7').val('');
        $('#clase7').slideUp(800);
        $('#btnClase8').slideUp(800);
        $idPictograma7 = 0;
    }

    function eliminarClase8() {
        idClase8 = 0;
        idCategoria8 = 0;
        idPalabraAdvertencia8 = 0;
        idIndicacion8 = 0;
        idPictograma8 = 0;
        nivel8 = 'null';
        idUnidad8 = 'null';
        $('#btnEliminarClase7').show();
        //$('#btnClase8').fadeIn(1000);
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
        $('#unidad8').html("N/A");
        $('#nivel8').removeAttr('required');
        $('#nivel8').attr("disabled", "disabled");
        $('#nivel8').val('');
        $('#clase8').slideUp(900);
        $('#btnClase9').slideUp(900);
        $idPictograma8 = 0;
    }

    function eliminarClase9() {
        idClase9 = 0;
        idCategoria9 = 0;
        idPalabraAdvertencia9 = 0;
        idIndicacion9 = 0;
        idPictograma9 = 0;
        nivel9 = 'null';
        idUnidad9 = 'null';
        $('#btnEliminarClase8').show();
        //$('#btnClase9').fadeIn(1000);
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
        $('#unidad9').html("N/A");
        $('#nivel9').removeAttr('required');
        $('#nivel9').attr("disabled", "disabled");
        $('#nivel9').val('');
        $('#clase9').slideUp(900);
        $('#btnClase10').slideUp(900);
        $idPictograma9 = 0;
    }

    function eliminarClase10() {
        idClase10 = 0;
        idCategoria10 = 0;
        idPalabraAdvertencia10 = 0;
        idIndicacion10 = 0;
        idPictograma10 = 0;
        nivel10 = 'null';
        idUnidad10 = 'null';
        $('#btnEliminarClase9').show();
        //$('#btnClase10').fadeIn(1000);
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
        $('#unidad10').html("N/A");
        $('#nivel10').removeAttr('required');
        $('#nivel10').attr("disabled", "disabled");
        $('#nivel10').val('');
        $('#clase10').slideUp(900);
        $idPictograma10 = 0;
    }

    function eliminarClases() {
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

    //Final de las funciones de los botones para eliminar Clases al editar productos

    //Inicio de los botones para eliminar clases
    
    $('#btnEliminarClase1').on('click', function () {
        btnEliminarClase1();
    });

    $('#btnEliminarClase2').on('click', function () {
        btnEliminarClase2();
    });

    $('#btnEliminarClase3').on('click', function () {
        btnEliminarClase3();
    });

    $('#btnEliminarClase4').on('click', function () {
        btnEliminarClase4();
    });

    $('#btnEliminarClase5').on('click', function () {
        btnEliminarClase5();
    });

    $('#btnEliminarClase6').on('click', function () {
        btnEliminarClase6();
    });

    $('#btnEliminarClase7').on('click', function () {
        btnEliminarClase7();
    });

    $('#btnEliminarClase8').on('click', function () {
        btnEliminarClase8();
    });

    $('#btnEliminarClase9').on('click', function () {
        btnEliminarClase9();
    });

    $('#btnEliminarClase10').on('click', function () {
        btnEliminarClase10();
    });

    //Final de los botones para eliminar clases


    //Inicio de los botones para agregar y quitar fabricantes

    // function btnFabricante2() {
    //     $('#fabricante2').show();
    //     document.getElementById('nombreFabricante2').placeholder = 'Campo Obligatorio *';
    //     document.getElementById('nombreFabricante2').value = '';
    // }

    // $('#btnFabricante2').on('click', function () {
    //     btnFabricante2();
    // });



    //Final de los botones para agregar y quitar fabricantes

    
    //Inicio de las Funciones de carga de Select
    
    //Carga de Categorías

    function cargarCategoria1() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + $('#nombreClase1').val(),
            success: function (r) {
                $('#nombreCategoria1').html(r);
            }
        });
    }

    function cargarCategoria2() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + $('#nombreClase2').val(),
            success: function (r) {
                $('#nombreCategoria2').html(r);
            }
        });
    }

    function cargarCategoria3() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + $('#nombreClase3').val(),
            success: function (r) {
                $('#nombreCategoria3').html(r);
            }
        });
    }

    function cargarCategoria4() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + $('#nombreClase4').val(),
            success: function (r) {
                $('#nombreCategoria4').html(r);
            }
        });
    }

    function cargarCategoria5() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + $('#nombreClase5').val(),
            success: function (r) {
                $('#nombreCategoria5').html(r);
            }
        });
    }

    function cargarCategoria6() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + $('#nombreClase6').val(),
            success: function (r) {
                $('#nombreCategoria6').html(r);
            }
        });
    }

    function cargarCategoria7() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + $('#nombreClase7').val(),
            success: function (r) {
                $('#nombreCategoria7').html(r);
            }
        });
    }

    function cargarCategoria8() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + $('#nombreClase8').val(),
            success: function (r) {
                $('#nombreCategoria8').html(r);
            }
        });
    }

    function cargarCategoria9() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + $('#nombreClase9').val(),
            success: function (r) {
                $('#nombreCategoria9').html(r);
            }
        });
    }

    function cargarCategoria10() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + $('#nombreClase10').val(),
            success: function (r) {
                $('#nombreCategoria10').html(r);
            }
        });
    }

    //Carga de Palabras de Advertencia

    function cargarPalabraAdvertencia1() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + $('#nombreCategoria1').val(),
            success: function (r) {
                $('#nombrePalabraAdvertencia1').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia2() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + $('#nombreCategoria2').val(),
            success: function (r) {
                $('#nombrePalabraAdvertencia2').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia3() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + $('#nombreCategoria3').val(),
            success: function (r) {
                $('#nombrePalabraAdvertencia3').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia4() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + $('#nombreCategoria4').val(),
            success: function (r) {
                $('#nombrePalabraAdvertencia4').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia5() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + $('#nombreCategoria5').val(),
            success: function (r) {
                $('#nombrePalabraAdvertencia5').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia6() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + $('#nombreCategoria6').val(),
            success: function (r) {
                $('#nombrePalabraAdvertencia6').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia7() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + $('#nombreCategoria7').val(),
            success: function (r) {
                $('#nombrePalabraAdvertencia7').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia8() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + $('#nombreCategoria8').val(),
            success: function (r) {
                $('#nombrePalabraAdvertencia8').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia9() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + $('#nombreCategoria9').val(),
            success: function (r) {
                $('#nombrePalabraAdvertencia9').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia10() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + $('#nombreCategoria10').val(),
            success: function (r) {
                $('#nombrePalabraAdvertencia10').html(r);
            }
        });
    }

    //Carga de Pictogramas

    function cargarPictograma1() {
        $.ajax({
            type: "POST",
            url: "bd/pict.php",
            data: "pict=" + $('#nombreCategoria1').val(),
            success: function (r) {
                idPictograma1 = r;
            }
        });
    }

    function cargarPictograma2() {
        $.ajax({
            type: "POST",
            url: "bd/pict.php",
            data: "pict=" + $('#nombreCategoria2').val(),
            success: function (r) {
                idPictograma2 = r;
            }
        });
    }

    function cargarPictograma3() {
        $.ajax({
            type: "POST",
            url: "bd/pict.php",
            data: "pict=" + $('#nombreCategoria3').val(),
            success: function (r) {
                idPictograma3 = r;
            }
        });
    }

    function cargarPictograma4() {
        $.ajax({
            type: "POST",
            url: "bd/pict.php",
            data: "pict=" + $('#nombreCategoria4').val(),
            success: function (r) {
                idPictograma4 = r;
            }
        });
    }

    function cargarPictograma5() {
        $.ajax({
            type: "POST",
            url: "bd/pict.php",
            data: "pict=" + $('#nombreCategoria5').val(),
            success: function (r) {
                idPictograma5 = r;
            }
        });
    }

    function cargarPictograma6() {
        $.ajax({
            type: "POST",
            url: "bd/pict.php",
            data: "pict=" + $('#nombreCategoria6').val(),
            success: function (r) {
                idPictograma6 = r;
            }
        });
    }

    function cargarPictograma7() {
        $.ajax({
            type: "POST",
            url: "bd/pict.php",
            data: "pict=" + $('#nombreCategoria7').val(),
            success: function (r) {
                idPictograma7 = r;
            }
        });
    }

    function cargarPictograma8() {
        $.ajax({
            type: "POST",
            url: "bd/pict.php",
            data: "pict=" + $('#nombreCategoria8').val(),
            success: function (r) {
                idPictograma8 = r;
            }
        });
    }

    function cargarPictograma9() {
        $.ajax({
            type: "POST",
            url: "bd/pict.php",
            data: "pict=" + $('#nombreCategoria9').val(),
            success: function (r) {
                idPictograma9 = r;
            }
        });
    }

    function cargarPictograma10() {
        $.ajax({
            type: "POST",
            url: "bd/pict.php",
            data: "pict=" + $('#nombreCategoria10').val(),
            success: function (r) {
                idPictograma10 = r;
            }
        });
    }

    //Carga de Indicaciones

    function cargarIndicacion1() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + $('#nombrePalabraAdvertencia1').val(),
            success: function (r) {
                $('#nombreIndicacion1').html(r);
            }
        });
    }

    function cargarIndicacion2() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + $('#nombrePalabraAdvertencia2').val(),
            success: function (r) {
                $('#nombreIndicacion2').html(r);
            }
        });
    }

    function cargarIndicacion3() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + $('#nombrePalabraAdvertencia3').val(),
            success: function (r) {
                $('#nombreIndicacion3').html(r);
            }
        });
    }

    function cargarIndicacion4() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + $('#nombrePalabraAdvertencia4').val(),
            success: function (r) {
                $('#nombreIndicacion4').html(r);
            }
        });
    }

    function cargarIndicacion5() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + $('#nombrePalabraAdvertencia5').val(),
            success: function (r) {
                $('#nombreIndicacion5').html(r);
            }
        });
    }

    function cargarIndicacion6() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + $('#nombrePalabraAdvertencia6').val(),
            success: function (r) {
                $('#nombreIndicacion6').html(r);
            }
        });
    }

    function cargarIndicacion7() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + $('#nombrePalabraAdvertencia7').val(),
            success: function (r) {
                $('#nombreIndicacion7').html(r);
            }
        });
    }

    function cargarIndicacion8() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + $('#nombrePalabraAdvertencia8').val(),
            success: function (r) {
                $('#nombreIndicacion8').html(r);
            }
        });
    }

    function cargarIndicacion9() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + $('#nombrePalabraAdvertencia9').val(),
            success: function (r) {
                $('#nombreIndicacion9').html(r);
            }
        });
    }

    function cargarIndicacion10() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + $('#nombrePalabraAdvertencia10').val(),
            success: function (r) {
                $('#nombreIndicacion10').html(r);
            }
        });
    }

    //Final de las Funciones de carga de Select

    //Inicio de las Funciones para cargar la Unidad
    
    function cargarUnidad1() {
        cat = $.trim($("#nombreCategoria1").val());
        $.ajax({
            type: "POST",
            url: "bd/unidad.php",
            data: "cat=" + $('#nombreCategoria1').val(),
            success: function (data) {
                dataParse = JSON.parse(data);
                unit_loaded = dataParse;
                idUnit = unit_loaded[0].idUnidad;
                nameUnit = unit_loaded[0].nombreUnidad;
                if (idUnit != null) {
                    $('#unidad1').html(nameUnit);
                    $('#nivel1').removeAttr('disabled');
                    $("#nivel1").attr("required", "required");
                    idUnidad1 = idUnit;
                    //console.log('Id de Unidad: ', idUnidad1);
                } else {
                    $('#unidad1').html("N/A");
                    $('#nivel1').removeAttr('required');
                    $('#nivel1').attr("disabled", "disabled");
                    $('#nivel1').val('');
                    idUnidad1 = 'null';
                    //console.log('Id de Unidad: ', idUnidad1);
                }
            }
        });
    }

    function cargarUnidad2() {
        cat = $.trim($("#nombreCategoria2").val());
        $.ajax({
            type: "POST",
            url: "bd/unidad.php",
            data: "cat=" + $('#nombreCategoria2').val(),
            success: function (data) {
                dataParse = JSON.parse(data);
                unit_loaded = dataParse;
                idUnit = unit_loaded[0].idUnidad;
                nameUnit = unit_loaded[0].nombreUnidad;
                if (idUnit != null) {
                    $('#unidad2').html(nameUnit);
                    $('#nivel2').removeAttr('disabled');
                    $("#nivel2").attr("required", "required");
                    idUnidad2 = idUnit;
                    //console.log('Id de Unidad: ', idUnidad2);
                } else {
                    $('#unidad2').html("N/A");
                    $('#nivel2').removeAttr('required');
                    $('#nivel2').attr("disabled", "disabled");
                    $('#nivel2').val('');
                    idUnidad2 = 'null';
                    //console.log('Id de Unidad: ', idUnidad2);
                }
            }
        });
    }

    function cargarUnidad3() {
        cat = $.trim($("#nombreCategoria3").val());
        $.ajax({
            type: "POST",
            url: "bd/unidad.php",
            data: "cat=" + $('#nombreCategoria3').val(),
            success: function (data) {
                dataParse = JSON.parse(data);
                unit_loaded = dataParse;
                idUnit = unit_loaded[0].idUnidad;
                nameUnit = unit_loaded[0].nombreUnidad;
                if (idUnit != null) {
                    $('#unidad3').html(nameUnit);
                    $('#nivel3').removeAttr('disabled');
                    $("#nivel3").attr("required", "required");
                    idUnidad3 = idUnit;
                    //console.log('Id de Unidad: ', idUnidad3);
                } else {
                    $('#unidad3').html("N/A");
                    $('#nivel3').removeAttr('required');
                    $('#nivel3').attr("disabled", "disabled");
                    $('#nivel3').val('');
                    idUnidad3 = 'null';
                    //console.log('Id de Unidad: ', idUnidad3);
                }
            }
        });
    }

    function cargarUnidad4() {
        cat = $.trim($("#nombreCategoria4").val());
        $.ajax({
            type: "POST",
            url: "bd/unidad.php",
            data: "cat=" + $('#nombreCategoria4').val(),
            success: function (data) {
                dataParse = JSON.parse(data);
                unit_loaded = dataParse;
                idUnit = unit_loaded[0].idUnidad;
                nameUnit = unit_loaded[0].nombreUnidad;
                if (idUnit != null) {
                    $('#unidad4').html(nameUnit);
                    $('#nivel4').removeAttr('disabled');
                    $("#nivel4").attr("required", "required");
                    idUnidad4 = idUnit;
                    //console.log('Id de Unidad: ', idUnidad4);
                } else {
                    $('#unidad4').html("N/A");
                    $('#nivel4').removeAttr('required');
                    $('#nivel4').attr("disabled", "disabled");
                    $('#nivel4').val('');
                    idUnidad4 = 'null';
                    //console.log('Id de Unidad: ', idUnidad4);
                }
            }
        });
    }

    function cargarUnidad5() {
        cat = $.trim($("#nombreCategoria5").val());
        $.ajax({
            type: "POST",
            url: "bd/unidad.php",
            data: "cat=" + $('#nombreCategoria5').val(),
            success: function (data) {
                dataParse = JSON.parse(data);
                unit_loaded = dataParse;
                idUnit = unit_loaded[0].idUnidad;
                nameUnit = unit_loaded[0].nombreUnidad;
                if (idUnit != null) {
                    $('#unidad5').html(nameUnit);
                    $('#nivel5').removeAttr('disabled');
                    $("#nivel5").attr("required", "required");
                    idUnidad5 = idUnit;
                    //console.log('Id de Unidad: ', idUnidad5);
                } else {
                    $('#unidad5').html("N/A");
                    $('#nivel5').removeAttr('required');
                    $('#nivel5').attr("disabled", "disabled");
                    $('#nivel5').val('');
                    idUnidad5 = 'null';
                    //console.log('Id de Unidad: ', idUnidad5);
                }
            }
        });
    }

    function cargarUnidad6() {
        cat = $.trim($("#nombreCategoria6").val());
        $.ajax({
            type: "POST",
            url: "bd/unidad.php",
            data: "cat=" + $('#nombreCategoria6').val(),
            success: function (data) {
                dataParse = JSON.parse(data);
                unit_loaded = dataParse;
                idUnit = unit_loaded[0].idUnidad;
                nameUnit = unit_loaded[0].nombreUnidad;
                if (idUnit != null) {
                    $('#unidad6').html(nameUnit);
                    $('#nivel6').removeAttr('disabled');
                    $("#nivel6").attr("required", "required");
                    idUnidad6 = idUnit;
                    //console.log('Id de Unidad: ', idUnidad6);
                } else {
                    $('#unidad6').html("N/A");
                    $('#nivel6').removeAttr('required');
                    $('#nivel6').attr("disabled", "disabled");
                    $('#nivel6').val('');
                    idUnidad6 = 'null';
                    //console.log('Id de Unidad: ', idUnidad6);
                }
            }
        });
    }

    function cargarUnidad7() {
        cat = $.trim($("#nombreCategoria7").val());
        $.ajax({
            type: "POST",
            url: "bd/unidad.php",
            data: "cat=" + $('#nombreCategoria7').val(),
            success: function (data) {
                dataParse = JSON.parse(data);
                unit_loaded = dataParse;
                idUnit = unit_loaded[0].idUnidad;
                nameUnit = unit_loaded[0].nombreUnidad;
                if (idUnit != null) {
                    $('#unidad7').html(nameUnit);
                    $('#nivel7').removeAttr('disabled');
                    $("#nivel7").attr("required", "required");
                    idUnidad7 = idUnit;
                    //console.log('Id de Unidad: ', idUnidad7);
                } else {
                    $('#unidad7').html("N/A");
                    $('#nivel7').removeAttr('required');
                    $('#nivel7').attr("disabled", "disabled");
                    $('#nivel7').val('');
                    idUnidad7 = 'null';
                    //console.log('Id de Unidad: ', idUnidad7);
                }
            }
        });
    }

    function cargarUnidad8() {
        cat = $.trim($("#nombreCategoria8").val());
        $.ajax({
            type: "POST",
            url: "bd/unidad.php",
            data: "cat=" + $('#nombreCategoria8').val(),
            success: function (data) {
                dataParse = JSON.parse(data);
                unit_loaded = dataParse;
                idUnit = unit_loaded[0].idUnidad;
                nameUnit = unit_loaded[0].nombreUnidad;
                if (idUnit != null) {
                    $('#unidad8').html(nameUnit);
                    $('#nivel8').removeAttr('disabled');
                    $("#nivel8").attr("required", "required");
                    idUnidad8 = idUnit;
                    //console.log('Id de Unidad: ', idUnidad8);
                } else {
                    $('#unidad8').html("N/A");
                    $('#nivel8').removeAttr('required');
                    $('#nivel8').attr("disabled", "disabled");
                    $('#nivel8').val('');
                    idUnidad8 = 'null';
                    //console.log('Id de Unidad: ', idUnidad8);
                }
            }
        });
    }

    function cargarUnidad9() {
        cat = $.trim($("#nombreCategoria9").val());
        $.ajax({
            type: "POST",
            url: "bd/unidad.php",
            data: "cat=" + $('#nombreCategoria9').val(),
            success: function (data) {
                dataParse = JSON.parse(data);
                unit_loaded = dataParse;
                idUnit = unit_loaded[0].idUnidad;
                nameUnit = unit_loaded[0].nombreUnidad;
                if (idUnit != null) {
                    $('#unidad9').html(nameUnit);
                    $('#nivel9').removeAttr('disabled');
                    $("#nivel9").attr("required", "required");
                    idUnidad9 = idUnit;
                    //console.log('Id de Unidad: ', idUnidad9);
                } else {
                    $('#unidad9').html("N/A");
                    $('#nivel9').removeAttr('required');
                    $('#nivel9').attr("disabled", "disabled");
                    $('#nivel9').val('');
                    idUnidad9 = 'null';
                    //console.log('Id de Unidad: ', idUnidad9);
                }
            }
        });
    }

    function cargarUnidad10() {
        cat = $.trim($("#nombreCategoria10").val());
        $.ajax({
            type: "POST",
            url: "bd/unidad.php",
            data: "cat=" + $('#nombreCategoria10').val(),
            success: function (data) {
                dataParse = JSON.parse(data);
                unit_loaded = dataParse;
                idUnit = unit_loaded[0].idUnidad;
                nameUnit = unit_loaded[0].nombreUnidad;
                if (idUnit != null) {
                    $('#unidad10').html(nameUnit);
                    $('#nivel10').removeAttr('disabled');
                    $("#nivel10").attr("required", "required");
                    idUnidad10 = idUnit;
                    //console.log('Id de Unidad: ', idUnidad10);
                } else {
                    $('#unidad10').html("N/A");
                    $('#nivel10').removeAttr('required');
                    $('#nivel10').attr("disabled", "disabled");
                    $('#nivel10').val('');
                    idUnidad10 = 'null';
                    //console.log('Id de Unidad: ', idUnidad10);
                }
            }
        });
    }

    //Final de las Funciones para cargar Unidad

    //Inicio de las Funciones de carga de Select para editar el producto

    function cargarCategoria1Edit() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + loaded_idClase1,
            success: function (r) {
                $('#nombreCategoria1').html(r);
            }
        });
    }

    function cargarCategoria2Edit() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + loaded_idClase2,
            success: function (r) {
                $('#nombreCategoria2').html(r);
            }
        });
    }

    function cargarCategoria3Edit() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + loaded_idClase3,
            success: function (r) {
                $('#nombreCategoria3').html(r);
            }
        });
    }

    function cargarCategoria4Edit() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + loaded_idClase4,
            success: function (r) {
                $('#nombreCategoria4').html(r);
            }
        });
    }

    function cargarCategoria5Edit() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + loaded_idClase5,
            success: function (r) {
                $('#nombreCategoria5').html(r);
            }
        });
    }

    function cargarCategoria6Edit() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + loaded_idClase6,
            success: function (r) {
                $('#nombreCategoria6').html(r);
            }
        });
    }

    function cargarCategoria7Edit() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + loaded_idClase7,
            success: function (r) {
                $('#nombreCategoria7').html(r);
            }
        });
    }

    function cargarCategoria8Edit() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + loaded_idClase8,
            success: function (r) {
                $('#nombreCategoria8').html(r);
            }
        });
    }

    function cargarCategoria9Edit() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + loaded_idClase9,
            success: function (r) {
                $('#nombreCategoria9').html(r);
            }
        });
    }

    function cargarCategoria10Edit() {
        $.ajax({
            type: "POST",
            url: "bd/cat.php",
            data: "cat=" + loaded_idClase10,
            success: function (r) {
                $('#nombreCategoria10').html(r);
            }
        });
    }

    //Carga de Palabras de Advertencia

    function cargarPalabraAdvertencia1Edit() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + loaded_idCategoria1,
            success: function (r) {
                $('#nombrePalabraAdvertencia1').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia2Edit() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + loaded_idCategoria2,
            success: function (r) {
                $('#nombrePalabraAdvertencia2').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia3Edit() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + loaded_idCategoria3,
            success: function (r) {
                $('#nombrePalabraAdvertencia3').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia4Edit() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + loaded_idCategoria4,
            success: function (r) {
                $('#nombrePalabraAdvertencia4').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia5Edit() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + loaded_idCategoria5,
            success: function (r) {
                $('#nombrePalabraAdvertencia5').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia6Edit() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + loaded_idCategoria6,
            success: function (r) {
                $('#nombrePalabraAdvertencia6').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia7Edit() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + loaded_idCategoria7,
            success: function (r) {
                $('#nombrePalabraAdvertencia7').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia8Edit() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + loaded_idCategoria8,
            success: function (r) {
                $('#nombrePalabraAdvertencia8').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia9Edit() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + loaded_idCategoria9,
            success: function (r) {
                $('#nombrePalabraAdvertencia9').html(r);
            }
        });
    }

    function cargarPalabraAdvertencia10Edit() {
        $.ajax({
            type: "POST",
            url: "bd/palad.php",
            data: "palad=" + loaded_idCategoria10,
            success: function (r) {
                $('#nombrePalabraAdvertencia10').html(r);
            }
        });
    }

    //Carga de Pictogramas

    function cargarPictograma1Edit() {
        $.ajax({
            type: "POST",
            url: "bd/pictEdit.php",
            data: "pict=" + $('#nombreCategoria1').val(),
            success: function (r) {
                idPictograma1 = r;
            }
        });
    }

    function cargarPictograma2Edit() {
        $.ajax({
            type: "POST",
            url: "bd/pictEdit.php",
            data: "pict=" + $('#nombreCategoria2').val(),
            success: function (r) {
                idPictograma2 = r;
            }
        });
    }

    function cargarPictograma3Edit() {
        $.ajax({
            type: "POST",
            url: "bd/pictEdit.php",
            data: "pict=" + $('#nombreCategoria3').val(),
            success: function (r) {
                idPictograma3 = r;
            }
        });
    }

    function cargarPictograma4Edit() {
        $.ajax({
            type: "POST",
            url: "bd/pictEdit.php",
            data: "pict=" + $('#nombreCategoria4').val(),
            success: function (r) {
                idPictograma4 = r;
            }
        });
    }

    function cargarPictograma5Edit() {
        $.ajax({
            type: "POST",
            url: "bd/pictEdit.php",
            data: "pict=" + $('#nombreCategoria5').val(),
            success: function (r) {
                idPictograma5 = r;
            }
        });
    }

    function cargarPictograma6Edit() {
        $.ajax({
            type: "POST",
            url: "bd/pictEdit.php",
            data: "pict=" + $('#nombreCategoria6').val(),
            success: function (r) {
                idPictograma6 = r;
            }
        });
    }

    function cargarPictograma7Edit() {
        $.ajax({
            type: "POST",
            url: "bd/pictEdit.php",
            data: "pict=" + $('#nombreCategoria7').val(),
            success: function (r) {
                idPictograma7 = r;
            }
        });
    }

    function cargarPictograma8Edit() {
        $.ajax({
            type: "POST",
            url: "bd/pictEdit.php",
            data: "pict=" + $('#nombreCategoria8').val(),
            success: function (r) {
                idPictograma8 = r;
            }
        });
    }

    function cargarPictograma9Edit() {
        $.ajax({
            type: "POST",
            url: "bd/pictEdit.php",
            data: "pict=" + $('#nombreCategoria9').val(),
            success: function (r) {
                idPictograma9 = r;
            }
        });
    }

    function cargarPictograma10Edit() {
        $.ajax({
            type: "POST",
            url: "bd/pictEdit.php",
            data: "pict=" + $('#nombreCategoria10').val(),
            success: function (r) {
                idPictograma10 = r;
            }
        });
    }

    //Carga de Indicaciones

    function cargarIndicacion1Edit() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + loaded_idPalabraAdvertencia1,
            success: function (r) {
                $('#nombreIndicacion1').html(r);
            }
        });
    }

    function cargarIndicacion2Edit() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + loaded_idPalabraAdvertencia2,
            success: function (r) {
                $('#nombreIndicacion2').html(r);
            }
        });
    }

    function cargarIndicacion3Edit() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + loaded_idPalabraAdvertencia3,
            success: function (r) {
                $('#nombreIndicacion3').html(r);
            }
        });
    }

    function cargarIndicacion4Edit() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + loaded_idPalabraAdvertencia4,
            success: function (r) {
                $('#nombreIndicacion4').html(r);
            }
        });
    }

    function cargarIndicacion5Edit() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + loaded_idPalabraAdvertencia5,
            success: function (r) {
                $('#nombreIndicacion5').html(r);
            }
        });
    }

    function cargarIndicacion6Edit() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + loaded_idPalabraAdvertencia6,
            success: function (r) {
                $('#nombreIndicacion6').html(r);
            }
        });
    }

    function cargarIndicacion7Edit() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + loaded_idPalabraAdvertencia7,
            success: function (r) {
                $('#nombreIndicacion7').html(r);
            }
        });
    }

    function cargarIndicacion8Edit() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + loaded_idPalabraAdvertencia8,
            success: function (r) {
                $('#nombreIndicacion8').html(r);
            }
        });
    }

    function cargarIndicacion9Edit() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + loaded_idPalabraAdvertencia9,
            success: function (r) {
                $('#nombreIndicacion9').html(r);
            }
        });
    }

    function cargarIndicacion10Edit() {
        $.ajax({
            type: "POST",
            url: "bd/ind.php",
            data: "ind=" + loaded_idPalabraAdvertencia10,
            success: function (r) {
                $('#nombreIndicacion10').html(r);
            }
        });
    }

    //Final de las Funciones de carga de Select para editar el producto

    //Inicio Funciones al cambiar opciones de Select

    // Clase 1

    $('#nombreClase1').change(function () {
        cargarCategoria1();
        $('#nombreCategoria1').prop('selectedIndex', 0);
        $('#nombreCategoria1').removeAttr('disabled');
        $("#nombreCategoria1").attr("required", "required");
        $('#nombrePalabraAdvertencia1').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia1').prop('disabled', 'disabled');
        $('#nombreIndicacion1').prop('selectedIndex', 0);
        $('#nombreIndicacion1').prop('disabled', 'disabled');
        $('#unidad1').html("N/A");
        $('#nivel1').removeAttr('required');
        $('#nivel1').attr("disabled", "disabled");
    });

    $('#nombreCategoria1').change(function () {
        cargarPalabraAdvertencia1();
        c = $.trim($("#nombreCategoria1").val());
        if (c > 0) {
            cargarPictograma1();
        };
        $('#nombrePalabraAdvertencia1').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia1').removeAttr('disabled');
        $("#nombrePalabraAdvertencia1").attr("required", "required");
        $('#nombreIndicacion1').prop('selectedIndex', 0);
        $('#nombreIndicacion1').prop('disabled', 'disabled');
        cargarUnidad1();
    });

    $('#nombrePalabraAdvertencia1').change(function () {
        cargarIndicacion1();
        $('#nombreIndicacion1').prop('selectedIndex', 0);
        $('#nombreIndicacion1').removeAttr('disabled');
        $("#nombreIndicacion1").attr("required", "required");
    });


    //Clase 2

    $('#nombreClase2').change(function () {
        cargarCategoria2();
        $('#nombreCategoria2').prop('selectedIndex', 0);
        $('#nombreCategoria2').removeAttr('disabled');
        $("#nombreCategoria2").attr("required", "required");
        $('#nombrePalabraAdvertencia2').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia2').prop('disabled', 'disabled');
        $('#nombreIndicacion2').prop('selectedIndex', 0);
        $('#nombreIndicacion2').prop('disabled', 'disabled');
        $('#unidad2').html("N/A");
        $('#nivel2').removeAttr('required');
        $('#nivel2').attr("disabled", "disabled");
    });

    $('#nombreCategoria2').change(function () {
        cargarPalabraAdvertencia2();
        c = $.trim($("#nombreCategoria2").val());
        if (c > 0) {
            cargarPictograma2();
        };
        $('#nombrePalabraAdvertencia2').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia2').removeAttr('disabled');
        $("#nombrePalabraAdvertencia2").attr("required", "required");
        $('#nombreIndicacion2').prop('selectedIndex', 0);
        $('#nombreIndicacion2').prop('disabled', 'disabled');
        cargarUnidad2();
    });

    $('#nombrePalabraAdvertencia2').change(function () {
        cargarIndicacion2();
        $('#nombreIndicacion2').prop('selectedIndex', 0);
        $('#nombreIndicacion2').removeAttr('disabled');
        $("#nombreIndicacion2").attr("required", "required");
    });


    //Clase 3

    $('#nombreClase3').change(function () {
        cargarCategoria3();
        $('#nombreCategoria3').prop('selectedIndex', 0);
        $('#nombreCategoria3').removeAttr('disabled');
        $("#nombreCategoria3").attr("required", "required");
        $('#nombrePalabraAdvertencia3').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia3').prop('disabled', 'disabled');
        $('#nombreIndicacion3').prop('selectedIndex', 0);
        $('#nombreIndicacion3').prop('disabled', 'disabled');
        $('#unidad3').html("N/A");
        $('#nivel3').removeAttr('required');
        $('#nivel3').attr("disabled", "disabled");
    });

    $('#nombreCategoria3').change(function () {
        cargarPalabraAdvertencia3();
        c = $.trim($("#nombreCategoria3").val());
        if (c > 0) {
            cargarPictograma3();
        };
        $('#nombrePalabraAdvertencia3').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia3').removeAttr('disabled');
        $("#nombrePalabraAdvertencia3").attr("required", "required");
        $('#nombreIndicacion3').prop('selectedIndex', 0);
        $('#nombreIndicacion3').prop('disabled', 'disabled');
        cargarUnidad3();
    });

    $('#nombrePalabraAdvertencia3').change(function () {
        cargarIndicacion3();
        $('#nombreIndicacion3').prop('selectedIndex', 0);
        $('#nombreIndicacion3').removeAttr('disabled');
        $("#nombreIndicacion3").attr("required", "required");
    });


    //Clase 4

    $('#nombreClase4').change(function () {
        cargarCategoria4();
        $('#nombreCategoria4').prop('selectedIndex', 0);
        $('#nombreCategoria4').removeAttr('disabled');
        $("#nombreCategoria4").attr("required", "required");
        $('#nombrePalabraAdvertencia4').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia4').prop('disabled', 'disabled');
        $('#nombreIndicacion4').prop('selectedIndex', 0);
        $('#nombreIndicacion4').prop('disabled', 'disabled');
        $('#unidad4').html("N/A");
        $('#nivel4').removeAttr('required');
        $('#nivel4').attr("disabled", "disabled");
    });

    $('#nombreCategoria4').change(function () {
        cargarPalabraAdvertencia4();
        c = $.trim($("#nombreCategoria4").val());
        if (c > 0) {
            cargarPictograma4();
        };
        $('#nombrePalabraAdvertencia4').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia4').removeAttr('disabled');
        $("#nombrePalabraAdvertencia4").attr("required", "required");
        $('#nombreIndicacion4').prop('selectedIndex', 0);
        $('#nombreIndicacion4').prop('disabled', 'disabled');
        cargarUnidad4();
    });

    $('#nombrePalabraAdvertencia4').change(function () {
        cargarIndicacion4();
        $('#nombreIndicacion4').prop('selectedIndex', 0);
        $('#nombreIndicacion4').removeAttr('disabled');
        $("#nombreIndicacion4").attr("required", "required");
    });


    //Clase 5

    $('#nombreClase5').change(function () {
        cargarCategoria5();
        $('#nombreCategoria5').prop('selectedIndex', 0);
        $('#nombreCategoria5').removeAttr('disabled');
        $("#nombreCategoria5").attr("required", "required");
        $('#nombrePalabraAdvertencia5').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia5').prop('disabled', 'disabled');
        $('#nombreIndicacion5').prop('selectedIndex', 0);
        $('#nombreIndicacion5').prop('disabled', 'disabled');
        $('#unidad5').html("N/A");
        $('#nivel5').removeAttr('required');
        $('#nivel5').attr("disabled", "disabled");
    });

    $('#nombreCategoria5').change(function () {
        cargarPalabraAdvertencia5();
        c = $.trim($("#nombreCategoria5").val());
        if (c > 0) {
            cargarPictograma5();
        };
        $('#nombrePalabraAdvertencia5').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia5').removeAttr('disabled');
        $("#nombrePalabraAdvertencia5").attr("required", "required");
        $('#nombreIndicacion5').prop('selectedIndex', 0);
        $('#nombreIndicacion5').prop('disabled', 'disabled');
        cargarUnidad5();
    });

    $('#nombrePalabraAdvertencia5').change(function () {
        cargarIndicacion5();
        $('#nombreIndicacion5').prop('selectedIndex', 0);
        $('#nombreIndicacion5').removeAttr('disabled');
        $("#nombreIndicacion5").attr("required", "required");
    });


    //Clase 6

    $('#nombreClase6').change(function () {
        cargarCategoria6();
        $('#nombreCategoria6').prop('selectedIndex', 0);
        $('#nombreCategoria6').removeAttr('disabled');
        $("#nombreCategoria6").attr("required", "required");
        $('#nombrePalabraAdvertencia6').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia6').prop('disabled', 'disabled');
        $('#nombreIndicacion6').prop('selectedIndex', 0);
        $('#nombreIndicacion6').prop('disabled', 'disabled');
        $('#unidad6').html("N/A");
        $('#nivel6').removeAttr('required');
        $('#nivel6').attr("disabled", "disabled");
    });

    $('#nombreCategoria6').change(function () {
        cargarPalabraAdvertencia6();
        c = $.trim($("#nombreCategoria6").val());
        if (c > 0) {
            cargarPictograma6();
        };
        $('#nombrePalabraAdvertencia6').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia6').removeAttr('disabled');
        $("#nombrePalabraAdvertencia6").attr("required", "required");
        $('#nombreIndicacion6').prop('selectedIndex', 0);
        $('#nombreIndicacion6').prop('disabled', 'disabled');
        cargarUnidad6();
    });

    $('#nombrePalabraAdvertencia6').change(function () {
        cargarIndicacion6();
        $('#nombreIndicacion6').prop('selectedIndex', 0);
        $('#nombreIndicacion6').removeAttr('disabled');
        $("#nombreIndicacion6").attr("required", "required");
    });


    //Clase 7

    $('#nombreClase7').change(function () {
        cargarCategoria7();
        $('#nombreCategoria7').prop('selectedIndex', 0);
        $('#nombreCategoria7').removeAttr('disabled');
        $("#nombreCategoria7").attr("required", "required");
        $('#nombrePalabraAdvertencia7').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia7').prop('disabled', 'disabled');
        $('#nombreIndicacion7').prop('selectedIndex', 0);
        $('#nombreIndicacion7').prop('disabled', 'disabled');
        $('#unidad7').html("N/A");
        $('#nivel7').removeAttr('required');
        $('#nivel7').attr("disabled", "disabled");
    });

    $('#nombreCategoria7').change(function () {
        cargarPalabraAdvertencia7();
        c = $.trim($("#nombreCategoria7").val());
        if (c > 0) {
            cargarPictograma7();
        };
        $('#nombrePalabraAdvertencia7').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia7').removeAttr('disabled');
        $("#nombrePalabraAdvertencia7").attr("required", "required");
        $('#nombreIndicacion7').prop('selectedIndex', 0);
        $('#nombreIndicacion7').prop('disabled', 'disabled');
        cargarUnidad7();
    });

    $('#nombrePalabraAdvertencia7').change(function () {
        cargarIndicacion7();
        $('#nombreIndicacion7').prop('selectedIndex', 0);
        $('#nombreIndicacion7').removeAttr('disabled');
        $("#nombreIndicacion7").attr("required", "required");
    });


    //Clase 8

    $('#nombreClase8').change(function () {
        cargarCategoria8();
        $('#nombreCategoria8').prop('selectedIndex', 0);
        $('#nombreCategoria8').removeAttr('disabled');
        $("#nombreCategoria8").attr("required", "required");
        $('#nombrePalabraAdvertencia8').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia8').prop('disabled', 'disabled');
        $('#nombreIndicacion8').prop('selectedIndex', 0);
        $('#nombreIndicacion8').prop('disabled', 'disabled');
        $('#unidad8').html("N/A");
        $('#nivel8').removeAttr('required');
        $('#nivel8').attr("disabled", "disabled");
    });

    $('#nombreCategoria8').change(function () {
        cargarPalabraAdvertencia8();
        c = $.trim($("#nombreCategoria8").val());
        if (c > 0) {
            cargarPictograma8();
        };
        $('#nombrePalabraAdvertencia8').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia8').removeAttr('disabled');
        $("#nombrePalabraAdvertencia8").attr("required", "required");
        $('#nombreIndicacion8').prop('selectedIndex', 0);
        $('#nombreIndicacion8').prop('disabled', 'disabled');
        cargarUnidad8();
    });

    $('#nombrePalabraAdvertencia8').change(function () {
        cargarIndicacion8();
        $('#nombreIndicacion8').prop('selectedIndex', 0);
        $('#nombreIndicacion8').removeAttr('disabled');
        $("#nombreIndicacion8").attr("required", "required");
    });


    //Clase 9

    $('#nombreClase9').change(function () {
        cargarCategoria9();
        $('#nombreCategoria9').prop('selectedIndex', 0);
        $('#nombreCategoria9').removeAttr('disabled');
        $("#nombreCategoria9").attr("required", "required");
        $('#nombrePalabraAdvertencia9').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia9').prop('disabled', 'disabled');
        $('#nombreIndicacion9').prop('selectedIndex', 0);
        $('#nombreIndicacion9').prop('disabled', 'disabled');
        $('#unidad9').html("N/A");
        $('#nivel9').removeAttr('required');
        $('#nivel9').attr("disabled", "disabled");
    });

    $('#nombreCategoria9').change(function () {
        cargarPalabraAdvertencia9();
        c = $.trim($("#nombreCategoria9").val());
        if (c > 0) {
            cargarPictograma9();
        };
        $('#nombrePalabraAdvertencia9').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia9').removeAttr('disabled');
        $("#nombrePalabraAdvertencia9").attr("required", "required");
        $('#nombreIndicacion9').prop('selectedIndex', 0);
        $('#nombreIndicacion9').prop('disabled', 'disabled');
        cargarUnidad9();
    });

    $('#nombrePalabraAdvertencia9').change(function () {
        cargarIndicacion9();
        $('#nombreIndicacion9').prop('selectedIndex', 0);
        $('#nombreIndicacion9').removeAttr('disabled');
        $("#nombreIndicacion9").attr("required", "required");
    });


    //Clase 10

    $('#nombreClase10').change(function () {
        cargarCategoria10();
        $('#nombreCategoria10').prop('selectedIndex', 0);
        $('#nombreCategoria10').removeAttr('disabled');
        $("#nombreCategoria10").attr("required", "required");
        $('#nombrePalabraAdvertencia10').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia10').prop('disabled', 'disabled');
        $('#nombreIndicacion10').prop('selectedIndex', 0);
        $('#nombreIndicacion10').prop('disabled', 'disabled');
        $('#unidad10').html("N/A");
        $('#nivel10').removeAttr('required');
        $('#nivel10').attr("disabled", "disabled");
    });

    $('#nombreCategoria10').change(function () {
        cargarPalabraAdvertencia10();
        c = $.trim($("#nombreCategoria10").val());
        if (c > 0) {
            cargarPictograma10();
        };
        $('#nombrePalabraAdvertencia10').prop('selectedIndex', 0);
        $('#nombrePalabraAdvertencia10').removeAttr('disabled');
        $("#nombrePalabraAdvertencia10").attr("required", "required");
        $('#nombreIndicacion10').prop('selectedIndex', 0);
        $('#nombreIndicacion10').prop('disabled', 'disabled');
        cargarUnidad10();
    });

    $('#nombrePalabraAdvertencia10').change(function () {
        cargarIndicacion10();
        $('#nombreIndicacion10').prop('selectedIndex', 0);
        $('#nombreIndicacion10').removeAttr('disabled');
        $("#nombreIndicacion10").attr("required", "required");
    });

    //Final Funciones al cambiar opciones de Select

    //Tabla Productos
    tablaProductos = $("#tablaProductos").DataTable({
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditarProducto'>Editar</button><button class='btn btn-danger btnBorrarProducto'>Borrar</button></div></div>"
        }],
        //    "createdRow": function(row, data, dataIndex) {
        //         if ( data[0] ) {
        //             $(row).addClass( 'text-center' );
        //         }
        //     },
        responsive: "true",
        //order: [[0,'asc']], //Establece la columna que será el orden de los productos.
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

    //Highlight de filas Tabla Productos
    tablaProductos.on('mouseenter', 'tr', function () {
        $(document).find('tr').removeClass("dtSelected");
        $(tablaProductos.row(this).selector.rows).addClass("dtSelected");
    });

    //Botón Nuevo Producto
    $("#btnNuevoProducto").click(function () {
        hideClases();
        cas = 'null'
        $("#formProductos").trigger("reset");
        $("#clases").trigger("reset");
        $("#modalCRUD").trigger("reset");
        $(".modal-header").css("background-color", "#1cc88a");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Nuevo Producto");
        $('#fabricantes').show();
        $('#fabricante1').show();
        $('#fabricante2').hide();
        $('#fabricante3').hide();
        $('#fabricante4').hide();
        $('#fabricante5').hide();
        $('#fabricante6').hide();
        $('#fabricante7').hide();
        $('#fabricante8').hide();
        $('#fabricante9').hide();
        $('#fabricante10').hide();
        $('#btnClase1').show();
        $('#modalCRUD').modal({backdrop: 'static', keyboard: false}, 'show');
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
        idUnidad1 = 'null';
        idUnidad2 = 'null';
        idUnidad3 = 'null';
        idUnidad4 = 'null';
        idUnidad5 = 'null';
        idUnidad6 = 'null';
        idUnidad7 = 'null';
        idUnidad8 = 'null';
        idUnidad9 = 'null';
        idUnidad10 = 'null';

        //Seteo de algunas opciones al presionar el botón de Nuevo
        document.getElementById('newcas').placeholder = 'Chemical Abstracts Service Number *';
        document.getElementById('nombreProducto').placeholder = 'Campo Obligatorio *';
        document.getElementById('nombreProducto').value = '';
        document.getElementById('nombreGrupo').selectedIndex = 0;
        document.getElementById('nombreUso').selectedIndex = 1;
        document.getElementById('nombreFabricante1').placeholder = 'Campo Obligatorio *';
        document.getElementById('nombreFabricante1').value = '';
        document.getElementById('btnClase2').style.display = 'none';
        document.getElementById('btnClase3').style.display = 'none';
        document.getElementById('btnClase4').style.display = 'none';
        document.getElementById('btnClase5').style.display = 'none';
        document.getElementById('btnClase6').style.display = 'none';
        document.getElementById('btnClase7').style.display = 'none';
        document.getElementById('btnClase8').style.display = 'none';
        document.getElementById('btnClase9').style.display = 'none';
        document.getElementById('btnClase10').style.display = 'none';
        cas='null';
        opcion = 1; //Nuevo Producto

        // //Botón Cancelar
        // $('#btnCancelar').on('click', function () {
        //     $("#formProductos").trigger("reset");
        //     //location.reload();
        // });

    });

    var fila; //Capturar la fila para editar o borrar el registro

    //Botón Editar Producto    
    $(document).on("click", ".btnEditarProducto", function () {
        hideClases();
        $("#formProductos").trigger("reset");
        fila = $(this).closest("tr");
        cas = fila.find('td:eq(0)').text();
        nombre = fila.find('td:eq(1)').text();
        nombreGrupo = fila.find('td:eq(2)').text();
        nombreUso = fila.find('td:eq(3)').text();
        nombreFabricante1 = fila.find('td:eq(4)').text();
        console.log('CAS: ', cas);

        $.ajax({
            type: "POST",
            url: "bd/cargarProducto.php",
            data: "cas=" + cas,
            success: function (data) {
                //console.log(data);
                dataParse = JSON.parse(data);
                product_loaded = dataParse;
                console.log(product_loaded);
                loaded_cas = product_loaded[0].cas;
                loaded_nombreProducto = product_loaded[0].nombreProducto;
                loaded_nombreGrupo = product_loaded[0].nombreGrupo;
                loaded_nombreUso = product_loaded[0].nombreUso;
                loaded_nombreFabricante1 = product_loaded[0].nombreFabricante1;
                loaded_idClase1 = product_loaded[0].idClasePeligro1;
                loaded_nombreClase1 = product_loaded[0].nombreClasePeligro1;
                loaded_idCategoria1 = product_loaded[0].idCategoriaPeligro1;
                loaded_nombreCategoria1 = product_loaded[0].nombreCategoriaPeligro1;
                loaded_idPalabraAdvertencia1 = product_loaded[0].idPalabraAdvertencia1;
                loaded_nombrePalabraAdvertencia1 = product_loaded[0].nombrePalabraAdvertencia1;
                loaded_idIndicacion1 = product_loaded[0].idIndicacion1;
                loaded_nombreIndicacion1 = product_loaded[0].nombreIndicacion1;
                loaded_idPictograma1 = product_loaded[0].idPictograma1;
                loaded_nivel1 = product_loaded[0].nivel1;
                loaded_idUnidad1 = product_loaded[0].idUnidad1;
                loaded_nombreUnidad1 = product_loaded[0].nombreUnidad1;
                loaded_idClase2 = product_loaded[0].idClasePeligro2;
                loaded_nombreClase2 = product_loaded[0].nombreClasePeligro2;
                loaded_idCategoria2 = product_loaded[0].idCategoriaPeligro2;
                loaded_nombreCategoria2 = product_loaded[0].nombreCategoriaPeligro2;
                loaded_idPalabraAdvertencia2 = product_loaded[0].idPalabraAdvertencia2;
                loaded_nombrePalabraAdvertencia2 = product_loaded[0].nombrePalabraAdvertencia2;
                loaded_idIndicacion2 = product_loaded[0].idIndicacion2;
                loaded_nombreIndicacion2 = product_loaded[0].nombreIndicacion2;
                loaded_idPictograma2 = product_loaded[0].idPictograma2;
                loaded_nivel2 = product_loaded[0].nivel2;
                loaded_idUnidad2 = product_loaded[0].idUnidad2;
                loaded_nombreUnidad2 = product_loaded[0].nombreUnidad2;
                loaded_idClase3 = product_loaded[0].idClasePeligro3;
                loaded_nombreClase3 = product_loaded[0].nombreClasePeligro3;
                loaded_idCategoria3 = product_loaded[0].idCategoriaPeligro3;
                loaded_nombreCategoria3 = product_loaded[0].nombreCategoriaPeligro3;
                loaded_idPalabraAdvertencia3 = product_loaded[0].idPalabraAdvertencia3;
                loaded_nombrePalabraAdvertencia3 = product_loaded[0].nombrePalabraAdvertencia3;
                loaded_idIndicacion3 = product_loaded[0].idIndicacion3;
                loaded_nombreIndicacion3 = product_loaded[0].nombreIndicacion3;
                loaded_idPictograma3 = product_loaded[0].idPictograma3;
                loaded_nivel3 = product_loaded[0].nivel3;
                loaded_idUnidad3 = product_loaded[0].idUnidad3;
                loaded_nombreUnidad3 = product_loaded[0].nombreUnidad3;
                loaded_idClase4 = product_loaded[0].idClasePeligro4;
                loaded_nombreClase4 = product_loaded[0].nombreClasePeligro4;
                loaded_idCategoria4 = product_loaded[0].idCategoriaPeligro4;
                loaded_nombreCategoria4 = product_loaded[0].nombreCategoriaPeligro4;
                loaded_idPalabraAdvertencia4 = product_loaded[0].idPalabraAdvertencia4;
                loaded_nombrePalabraAdvertencia4 = product_loaded[0].nombrePalabraAdvertencia4;
                loaded_idIndicacion4 = product_loaded[0].idIndicacion4;
                loaded_nombreIndicacion4 = product_loaded[0].nombreIndicacion4;
                loaded_idPictograma4 = product_loaded[0].idPictograma4;
                loaded_nivel4 = product_loaded[0].nivel4;
                loaded_idUnidad4 = product_loaded[0].idUnidad4;
                loaded_nombreUnidad4 = product_loaded[0].nombreUnidad4;
                loaded_idClase5 = product_loaded[0].idClasePeligro5;
                loaded_nombreClase5 = product_loaded[0].nombreClasePeligro5;
                loaded_idCategoria5 = product_loaded[0].idCategoriaPeligro5;
                loaded_nombreCategoria5 = product_loaded[0].nombreCategoriaPeligro5;
                loaded_idPalabraAdvertencia5 = product_loaded[0].idPalabraAdvertencia5;
                loaded_nombrePalabraAdvertencia5 = product_loaded[0].nombrePalabraAdvertencia5;
                loaded_idIndicacion5 = product_loaded[0].idIndicacion5;
                loaded_nombreIndicacion5 = product_loaded[0].nombreIndicacion5;
                loaded_idPictograma5 = product_loaded[0].idPictograma5;
                loaded_nivel5 = product_loaded[0].nivel5;
                loaded_idUnidad5 = product_loaded[0].idUnidad5;
                loaded_nombreUnidad5 = product_loaded[0].nombreUnidad5;
                loaded_idClase6 = product_loaded[0].idClasePeligro6;
                loaded_nombreClase6 = product_loaded[0].nombreClasePeligro6;
                loaded_idCategoria6 = product_loaded[0].idCategoriaPeligro6;
                loaded_nombreCategoria6 = product_loaded[0].nombreCategoriaPeligro6;
                loaded_idPalabraAdvertencia6 = product_loaded[0].idPalabraAdvertencia6;
                loaded_nombrePalabraAdvertencia6 = product_loaded[0].nombrePalabraAdvertencia6;
                loaded_idIndicacion6 = product_loaded[0].idIndicacion6;
                loaded_nombreIndicacion6 = product_loaded[0].nombreIndicacion6;
                loaded_idPictograma6 = product_loaded[0].idPictograma6;
                loaded_nivel6 = product_loaded[0].nivel6;
                loaded_idUnidad6 = product_loaded[0].idUnidad6;
                loaded_nombreUnidad6 = product_loaded[0].nombreUnidad6;
                loaded_idClase7 = product_loaded[0].idClasePeligro7;
                loaded_nombreClase7 = product_loaded[0].nombreClasePeligro7;
                loaded_idCategoria7 = product_loaded[0].idCategoriaPeligro7;
                loaded_nombreCategoria7 = product_loaded[0].nombreCategoriaPeligro7;
                loaded_idPalabraAdvertencia7 = product_loaded[0].idPalabraAdvertencia7;
                loaded_nombrePalabraAdvertencia7 = product_loaded[0].nombrePalabraAdvertencia7;
                loaded_idIndicacion7 = product_loaded[0].idIndicacion7;
                loaded_nombreIndicacion7 = product_loaded[0].nombreIndicacion7;
                loaded_idPictograma7 = product_loaded[0].idPictograma7;
                loaded_nivel7 = product_loaded[0].nivel7;
                loaded_idUnidad7 = product_loaded[0].idUnidad7;
                loaded_nombreUnidad7 = product_loaded[0].nombreUnidad7;
                loaded_idClase8 = product_loaded[0].idClasePeligro8;
                loaded_nombreClase8 = product_loaded[0].nombreClasePeligro8;
                loaded_idCategoria8 = product_loaded[0].idCategoriaPeligro8;
                loaded_nombreCategoria8 = product_loaded[0].nombreCategoriaPeligro8;
                loaded_idPalabraAdvertencia8 = product_loaded[0].idPalabraAdvertencia8;
                loaded_nombrePalabraAdvertencia8 = product_loaded[0].nombrePalabraAdvertencia8;
                loaded_idIndicacion8 = product_loaded[0].idIndicacion8;
                loaded_nombreIndicacion8 = product_loaded[0].nombreIndicacion8;
                loaded_idPictograma8 = product_loaded[0].idPictograma8;
                loaded_nivel8 = product_loaded[0].nivel8;
                loaded_idUnidad8 = product_loaded[0].idUnidad8;
                loaded_nombreUnidad8 = product_loaded[0].nombreUnidad8;
                loaded_idClase9 = product_loaded[0].idClasePeligro9;
                loaded_nombreClase9 = product_loaded[0].nombreClasePeligro9;
                loaded_idCategoria9 = product_loaded[0].idCategoriaPeligro9;
                loaded_nombreCategoria9 = product_loaded[0].nombreCategoriaPeligro9;
                loaded_idPalabraAdvertencia9 = product_loaded[0].idPalabraAdvertencia9;
                loaded_nombrePalabraAdvertencia9 = product_loaded[0].nombrePalabraAdvertencia9;
                loaded_idIndicacion9 = product_loaded[0].idIndicacion9;
                loaded_nombreIndicacion9 = product_loaded[0].nombreIndicacion9;
                loaded_idPictograma9 = product_loaded[0].idPictograma9;
                loaded_nivel9 = product_loaded[0].nivel9;
                loaded_idUnidad9 = product_loaded[0].idUnidad9;
                loaded_nombreUnidad9 = product_loaded[0].nombreUnidad9;
                loaded_idClase10 = product_loaded[0].idClasePeligro10;
                loaded_nombreClase10 = product_loaded[0].nombreClasePeligro10;
                loaded_idCategoria10 = product_loaded[0].idCategoriaPeligro10;
                loaded_nombreCategoria10 = product_loaded[0].nombreCategoriaPeligro10;
                loaded_idPalabraAdvertencia10 = product_loaded[0].idPalabraAdvertencia10;
                loaded_nombrePalabraAdvertencia10 = product_loaded[0].nombrePalabraAdvertencia10;
                loaded_idIndicacion10 = product_loaded[0].idIndicacion10;
                loaded_nombreIndicacion10 = product_loaded[0].nombreIndicacion10;
                loaded_idPictograma10 = product_loaded[0].idPictograma10;
                loaded_nivel10 = product_loaded[0].nivel10;
                loaded_idUnidad10 = product_loaded[0].idUnidad10;
                loaded_nombreUnidad10 = product_loaded[0].nombreUnidad10;
                console.log('CAS: ', loaded_cas);
                console.log('Nombre de Producto: ', loaded_nombreProducto);
                console.log('Grupo: ', loaded_nombreGrupo);
                console.log('Uso: ', loaded_nombreUso);
                console.log('Fabricante1: ', loaded_nombreFabricante1);
                console.log('Clase 1: ', loaded_nombreClase1);
                console.log('Categoría 1: ', loaded_nombreCategoria1);
                console.log('Palabra de Advertencia 1: ', loaded_idPalabraAdvertencia1);
                console.log('Indicación 1: ', loaded_idIndicacion1);
                console.log('ID Pictograma 1: ', loaded_idPictograma1);
                console.log('Clase 2: ', loaded_nombreClase2);
                console.log('Categoría 2: ', loaded_nombreCategoria2);
                console.log('Palabra de Advertencia 2: ', loaded_idPalabraAdvertencia2);
                console.log('Indicación 2: ', loaded_nombreIndicacion2);
                console.log('ID Pictograma 2: ', loaded_idPictograma2);
                console.log('Clase 3: ', loaded_nombreClase3);
                console.log('Categoría 3: ', loaded_nombreCategoria3);
                console.log('Palabra de Advertencia 3: ', loaded_idPalabraAdvertencia3);
                console.log('Indicación 3: ', loaded_nombreIndicacion3);
                console.log('ID Pictograma 3: ', loaded_idPictograma3);
                console.log('Clase 4: ', loaded_nombreClase4);
                console.log('Categoría 4: ', loaded_nombreCategoria4);
                console.log('Palabra de Advertencia 4: ', loaded_idPalabraAdvertencia4);
                console.log('Indicación 4: ', loaded_nombreIndicacion4);
                console.log('ID Pictograma 4: ', loaded_idPictograma4);
                console.log('Clase 5: ', loaded_nombreClase5);
                console.log('Categoría 5: ', loaded_nombreCategoria5);
                console.log('Palabra de Advertencia 5: ', loaded_idPalabraAdvertencia5);
                console.log('Indicación 5: ', loaded_nombreIndicacion5);
                console.log('ID Pictograma 5: ', loaded_idPictograma5);
                console.log('Clase 6: ', loaded_nombreClase6);
                console.log('Categoría 6: ', loaded_nombreCategoria6);
                console.log('Palabra de Advertencia 6: ', loaded_idPalabraAdvertencia6);
                console.log('Indicación 6: ', loaded_nombreIndicacion6);
                console.log('ID Pictograma 6: ', loaded_idPictograma6);
                console.log('Clase 7: ', loaded_nombreClase7);
                console.log('Categoría 7: ', loaded_nombreCategoria7);
                console.log('Palabra de Advertencia 7: ', loaded_idPalabraAdvertencia7);
                console.log('Indicación 7: ', loaded_nombreIndicacion7);
                console.log('ID Pictograma 7: ', loaded_idPictograma7);
                console.log('Clase 8: ', loaded_nombreClase8);
                console.log('Categoría 8: ', loaded_nombreCategoria8);
                console.log('Palabra de Advertencia 8: ', loaded_idPalabraAdvertencia8);
                console.log('Indicación 8: ', loaded_nombreIndicacion8);
                console.log('ID Pictograma 8: ', loaded_idPictograma8);
                console.log('Clase 9: ', loaded_nombreClase9);
                console.log('Categoría 9: ', loaded_nombreCategoria9);
                console.log('Palabra de Advertencia 9: ', loaded_idPalabraAdvertencia9);
                console.log('Indicación 9: ', loaded_nombreIndicacion9);
                console.log('ID Pictograma 9: ', loaded_idPictograma9);
                console.log('Clase 10: ', loaded_nombreClase10);
                console.log('Categoría 10: ', loaded_nombreCategoria10);
                console.log('Palabra de Advertencia 10: ', loaded_idPalabraAdvertencia10);
                console.log('Indicación 10: ', loaded_nombreIndicacion10);
                console.log('ID Pictograma 10: ', loaded_idPictograma10);

                loading_timer = 1000;
                more_time = 250;

                if (loaded_nombreClase1 != null) {
                    loading_timer = loading_timer + more_time;
                } else {
                    loading_timer = 400;
                }

                if (loaded_nombreClase2 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_nombreClase3 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_nombreClase4 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_nombreClase5 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_nombreClase6 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_nombreClase7 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_nombreClase8 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_nombreClase9 != null) {
                    loading_timer = loading_timer + more_time;
                }

                if (loaded_nombreClase10 != null) {
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

                $("#newcas").val(loaded_cas);
                $("#nombreProducto").val(loaded_nombreProducto);
                $('#nombreGrupo option').map(function () {
                    if ($(this).text() == loaded_nombreGrupo) return this;
                }).attr('selected', 'selected');
                $('#nombreUso option').map(function () {
                    if ($(this).text() == loaded_nombreUso) return this;
                }).attr('selected', 'selected');
                $("#nombreFabricante1").val(loaded_nombreFabricante1);

                if (loaded_nombreClase1 != null) {
                    cargarCategoria1Edit();
                    cargarPalabraAdvertencia1Edit();
                    cargarIndicacion1Edit();
                    setTimeout(() => {
                        $('#clase1').show();
                        $('#btnClase1').hide();
                        $('#btnEliminarClase1').show();
                        $('#nombreClase1').removeAttr('disabled');
                        $("#nombreClase1").attr("required", "required");
                        $("#nombreClase1").val(loaded_idClase1);
                        $('#nombreCategoria1').removeAttr('disabled');
                        $("#nombreCategoria1").attr("required", "required");
                        $("#nombreCategoria1").val(loaded_idCategoria1);
                        $('#nombrePalabraAdvertencia1').removeAttr('disabled');
                        $("#nombrePalabraAdvertencia1").attr("required", "required");
                        $("#nombrePalabraAdvertencia1").val(loaded_idPalabraAdvertencia1);
                        $('#nombreIndicacion1').removeAttr('disabled');
                        $("#nombreIndicacion1").attr("required", "required");
                        $("#nombreIndicacion1").val(loaded_idIndicacion1);
                        $('#btnClase2').show();
                        if (loaded_idUnidad1 != null) {
                            nivel1 = loaded_nivel1;
                            idUnidad1 = loaded_idUnidad1;
                            nombreUnidad1 = loaded_nombreUnidad1;
                            $('#nivel1').removeAttr('disabled');
                            $("#nivel1").attr("required", "required");
                            $("#nivel1").val(nivel1);
                            $('#unidad1').html(nombreUnidad1);
                            console.log('Nivel 1: ',nivel1);
                            console.log('ID unidad 1: ',idUnidad1);
                            console.log('Nombre Unidad 1: ',nombreUnidad1);
                        } else {
                            nivel1 = 'null';
                            idUnidad1 = 'null';
                            nombreUnidad1 = 'null';
                            $('#unidad1').html("N/A");
                            $('#nivel1').removeAttr('required');
                            $('#nivel1').attr("disabled", "disabled");
                            $('#nivel1').val('');
                            console.log('Nivel 1: ',nivel1);
                            console.log('ID unidad 1: ',idUnidad1);
                            console.log('Nombre Unidad 1: ',nombreUnidad1);
                        }
                        $('#modalCRUD').animate({ scrollTop: 500 }, 'fast');
                        idClase1 = loaded_idClase1;
                        idCategoria1 = loaded_idCategoria1;
                        idPalabraAdvertencia1 = loaded_idPalabraAdvertencia1;
                        idIndicacion1 = loaded_idIndicacion1;
                        idPictograma1 = loaded_idPictograma1;
                    }, 1500);
                } else {
                    $('#btnClase1').show();
                    eliminarClase1();
                }

                if (loaded_nombreClase2 != null) {
                    cargarCategoria2Edit();
                    cargarPalabraAdvertencia2Edit();
                    cargarIndicacion2Edit();
                    setTimeout(() => {
                        $('#clase2').show();
                        $('#btnClase2').hide();
                        $('#btnEliminarClase2').show();
                        $('#nombreClase2').removeAttr('disabled');
                        $("#nombreClase2").attr("required", "required");
                        $("#nombreClase2").val(loaded_idClase2);
                        $('#nombreCategoria2').removeAttr('disabled');
                        $("#nombreCategoria2").attr("required", "required");
                        $("#nombreCategoria2").val(loaded_idCategoria2);
                        $('#nombrePalabraAdvertencia2').removeAttr('disabled');
                        $("#nombrePalabraAdvertencia2").attr("required", "required");
                        $("#nombrePalabraAdvertencia2").val(loaded_idPalabraAdvertencia2);
                        $('#nombreIndicacion2').removeAttr('disabled');
                        $("#nombreIndicacion2").attr("required", "required");
                        $("#nombreIndicacion2").val(loaded_idIndicacion2);
                        $('#btnClase3').show();
                        if (loaded_idUnidad2 != null) {
                            nivel2 = loaded_nivel2;
                            idUnidad2 = loaded_idUnidad2;
                            nombreUnidad2 = loaded_nombreUnidad2;
                            $('#nivel2').removeAttr('disabled');
                            $("#nivel2").attr("required", "required");
                            $("#nivel2").val(nivel2);
                            $('#unidad2').html(nombreUnidad2);
                            console.log('Nivel 2: ',nivel2);
                            console.log('ID unidad 2: ',idUnidad2);
                            console.log('Nombre Unidad 2: ',nombreUnidad2);
                        } else {
                            nivel2 = 'null';
                            idUnidad2 = 'null';
                            nombreUnidad2 = 'null';
                            $('#unidad2').html("N/A");
                            $('#nivel2').removeAttr('required');
                            $('#nivel2').attr("disabled", "disabled");
                            $('#nivel2').val('');
                            console.log('Nivel 2: ',nivel2);
                            console.log('ID unidad 2: ',idUnidad2);
                            console.log('Nombre Unidad 2: ',nombreUnidad2);
                        }
                        $('#modalCRUD').animate({ scrollTop: 1000 }, 'fast');
                        idClase2 = loaded_idClase2;
                        idCategoria2 = loaded_idCategoria2;
                        idPalabraAdvertencia2 = loaded_idPalabraAdvertencia2;
                        idIndicacion2 = loaded_idIndicacion2;
                        idPictograma2 = loaded_idPictograma2;
                    }, 1600);
                } else {
                    //$('#btnClase2').show();
                    eliminarClase2();
                }

                if (loaded_nombreClase3 != null) {
                    cargarCategoria3Edit();
                    cargarPalabraAdvertencia3Edit();
                    cargarIndicacion3Edit();
                    setTimeout(() => {
                        $('#clase3').show();
                        $('#btnClase3').hide();
                        $('#btnEliminarClase3').show();
                        $('#nombreClase3').removeAttr('disabled');
                        $("#nombreClase3").attr("required", "required");
                        $("#nombreClase3").val(loaded_idClase3);
                        $('#nombreCategoria3').removeAttr('disabled');
                        $("#nombreCategoria3").attr("required", "required");
                        $("#nombreCategoria3").val(loaded_idCategoria3);
                        $('#nombrePalabraAdvertencia3').removeAttr('disabled');
                        $("#nombrePalabraAdvertencia3").attr("required", "required");
                        $("#nombrePalabraAdvertencia3").val(loaded_idPalabraAdvertencia3);
                        $('#nombreIndicacion3').removeAttr('disabled');
                        $("#nombreIndicacion3").attr("required", "required");
                        $("#nombreIndicacion3").val(loaded_idIndicacion3);
                        $('#btnClase4').show();
                        if (loaded_idUnidad3 != null) {
                            nivel3 = loaded_nivel3;
                            idUnidad3 = loaded_idUnidad3;
                            nombreUnidad3 = loaded_nombreUnidad3;
                            $('#nivel3').removeAttr('disabled');
                            $("#nivel3").attr("required", "required");
                            $("#nivel3").val(nivel3);
                            $('#unidad3').html(nombreUnidad3);
                            console.log('Nivel 3: ',nivel3);
                            console.log('ID unidad 3: ',idUnidad3);
                            console.log('Nombre Unidad 3: ',nombreUnidad3);
                        } else {
                            nivel3 = 'null';
                            idUnidad3 = 'null';
                            nombreUnidad3 = 'null';
                            $('#unidad3').html("N/A");
                            $('#nivel3').removeAttr('required');
                            $('#nivel3').attr("disabled", "disabled");
                            $('#nivel3').val('');
                            console.log('Nivel 3: ',nivel3);
                            console.log('ID unidad 3: ',idUnidad3);
                            console.log('Nombre Unidad 3: ',nombreUnidad3);
                        }
                        $('#modalCRUD').animate({ scrollTop: 1500 }, 'fast');
                        idClase3 = loaded_idClase3;
                        idCategoria3 = loaded_idCategoria3;
                        idPalabraAdvertencia3 = loaded_idPalabraAdvertencia3;
                        idIndicacion3 = loaded_idIndicacion3;
                        idPictograma3 = loaded_idPictograma3;
                    }, 1700);
                } else {
                    //$('#btnClase3').show();
                    eliminarClase3();
                }

                if (loaded_nombreClase4 != null) {
                    cargarCategoria4Edit();
                    cargarPalabraAdvertencia4Edit();
                    cargarIndicacion4Edit();
                    setTimeout(() => {
                        $('#clase4').show();
                        $('#btnClase4').hide();
                        $('#btnEliminarClase4').show();
                        $('#nombreClase4').removeAttr('disabled');
                        $("#nombreClase4").attr("required", "required");
                        $("#nombreClase4").val(loaded_idClase4);
                        $('#nombreCategoria4').removeAttr('disabled');
                        $("#nombreCategoria4").attr("required", "required");
                        $("#nombreCategoria4").val(loaded_idCategoria4);
                        $('#nombrePalabraAdvertencia4').removeAttr('disabled');
                        $("#nombrePalabraAdvertencia4").attr("required", "required");
                        $("#nombrePalabraAdvertencia4").val(loaded_idPalabraAdvertencia4);
                        $('#nombreIndicacion4').removeAttr('disabled');
                        $("#nombreIndicacion4").attr("required", "required");
                        $("#nombreIndicacion4").val(loaded_idIndicacion4);
                        $('#btnClase5').show();
                        if (loaded_idUnidad4 != null) {
                            nivel4 = loaded_nivel4;
                            idUnidad4 = loaded_idUnidad4;
                            nombreUnidad4 = loaded_nombreUnidad4;
                            $('#nivel4').removeAttr('disabled');
                            $("#nivel4").attr("required", "required");
                            $("#nivel4").val(nivel4);
                            $('#unidad4').html(nombreUnidad4);
                            console.log('Nivel 4: ',nivel4);
                            console.log('ID unidad 4: ',idUnidad4);
                            console.log('Nombre Unidad 4: ',nombreUnidad4);
                        } else {
                            nivel4 = 'null';
                            idUnidad4 = 'null';
                            nombreUnidad4 = 'null';
                            $('#unidad4').html("N/A");
                            $('#nivel4').removeAttr('required');
                            $('#nivel4').attr("disabled", "disabled");
                            $('#nivel4').val('');
                            console.log('Nivel 4: ',nivel4);
                            console.log('ID unidad 4: ',idUnidad4);
                            console.log('Nombre Unidad 4: ',nombreUnidad4);
                        }
                        $('#modalCRUD').animate({ scrollTop: 2000 }, 'fast');
                        idClase4 = loaded_idClase4;
                        idCategoria4 = loaded_idCategoria4;
                        idPalabraAdvertencia4 = loaded_idPalabraAdvertencia4;
                        idIndicacion4 = loaded_idIndicacion4;
                        idPictograma4 = loaded_idPictograma4;
                    }, 1800);
                } else {
                    //$('#btnClase4').show();
                    eliminarClase4();
                }

                if (loaded_nombreClase5 != null) {
                    cargarCategoria5Edit();
                    cargarPalabraAdvertencia5Edit();
                    cargarIndicacion5Edit();
                    setTimeout(() => {
                        $('#clase5').show();
                        $('#btnClase5').hide();
                        $('#btnEliminarClase5').show();
                        $('#nombreClase5').removeAttr('disabled');
                        $("#nombreClase5").attr("required", "required");
                        $("#nombreClase5").val(loaded_idClase5);
                        $('#nombreCategoria5').removeAttr('disabled');
                        $("#nombreCategoria5").attr("required", "required");
                        $("#nombreCategoria5").val(loaded_idCategoria5);
                        $('#nombrePalabraAdvertencia5').removeAttr('disabled');
                        $("#nombrePalabraAdvertencia5").attr("required", "required");
                        $("#nombrePalabraAdvertencia5").val(loaded_idPalabraAdvertencia5);
                        $('#nombreIndicacion5').removeAttr('disabled');
                        $("#nombreIndicacion5").attr("required", "required");
                        $("#nombreIndicacion5").val(loaded_idIndicacion5);
                        $('#btnClase6').show();
                        if (loaded_idUnidad5 != null) {
                            nivel5 = loaded_nivel5;
                            idUnidad5 = loaded_idUnidad5;
                            nombreUnidad5 = loaded_nombreUnidad5;
                            $('#nivel5').removeAttr('disabled');
                            $("#nivel5").attr("required", "required");
                            $("#nivel5").val(nivel5);
                            $('#unidad5').html(nombreUnidad5);
                            console.log('Nivel 5: ',nivel5);
                            console.log('ID unidad 5: ',idUnidad5);
                            console.log('Nombre Unidad 5: ',nombreUnidad5);
                        } else {
                            nivel5 = 'null';
                            idUnidad5 = 'null';
                            nombreUnidad5 = 'null';
                            $('#unidad5').html("N/A");
                            $('#nivel5').removeAttr('required');
                            $('#nivel5').attr("disabled", "disabled");
                            $('#nivel5').val('');
                            console.log('Nivel 5: ',nivel5);
                            console.log('ID unidad 5: ',idUnidad5);
                            console.log('Nombre Unidad 5: ',nombreUnidad5);
                        }
                        $('#modalCRUD').animate({ scrollTop: 2500 }, 'fast');
                        idClase5 = loaded_idClase5;
                        idCategoria5 = loaded_idCategoria5;
                        idPalabraAdvertencia5 = loaded_idPalabraAdvertencia5;
                        idIndicacion5 = loaded_idIndicacion5;
                        idPictograma5 = loaded_idPictograma5;
                    }, 1900);
                } else {
                    //$('#btnClase5').show();
                    eliminarClase5();
                }

                if (loaded_nombreClase6 != null) {
                    cargarCategoria6Edit();
                    cargarPalabraAdvertencia6Edit();
                    cargarIndicacion6Edit();
                    setTimeout(() => {
                        $('#clase6').show();
                        $('#btnClase6').hide();
                        $('#btnEliminarClase6').show();
                        $('#nombreClase6').removeAttr('disabled');
                        $("#nombreClase6").attr("required", "required");
                        $("#nombreClase6").val(loaded_idClase6);
                        $('#nombreCategoria6').removeAttr('disabled');
                        $("#nombreCategoria6").attr("required", "required");
                        $("#nombreCategoria6").val(loaded_idCategoria6);
                        $('#nombrePalabraAdvertencia6').removeAttr('disabled');
                        $("#nombrePalabraAdvertencia6").attr("required", "required");
                        $("#nombrePalabraAdvertencia6").val(loaded_idPalabraAdvertencia6);
                        $('#nombreIndicacion6').removeAttr('disabled');
                        $("#nombreIndicacion6").attr("required", "required");
                        $("#nombreIndicacion6").val(loaded_idIndicacion6);
                        $('#btnClase7').show();
                        if (loaded_idUnidad6 != null) {
                            nivel6 = loaded_nivel6;
                            idUnidad6 = loaded_idUnidad6;
                            nombreUnidad6 = loaded_nombreUnidad6;
                            $('#nivel6').removeAttr('disabled');
                            $("#nivel6").attr("required", "required");
                            $("#nivel6").val(nivel6);
                            $('#unidad6').html(nombreUnidad6);
                            console.log('Nivel 6: ',nivel6);
                            console.log('ID unidad 6: ',idUnidad6);
                            console.log('Nombre Unidad 6: ',nombreUnidad6);
                        } else {
                            nivel6 = 'null';
                            idUnidad6 = 'null';
                            nombreUnidad6 = 'null';
                            $('#unidad6').html("N/A");
                            $('#nivel6').removeAttr('required');
                            $('#nivel6').attr("disabled", "disabled");
                            $('#nivel6').val('');
                            console.log('Nivel 6: ',nivel6);
                            console.log('ID unidad 6: ',idUnidad6);
                            console.log('Nombre Unidad 6: ',nombreUnidad6);
                        }
                        $('#modalCRUD').animate({ scrollTop: 3000 }, 'fast');
                        idClase6 = loaded_idClase6;
                        idCategoria6 = loaded_idCategoria6;
                        idPalabraAdvertencia6 = loaded_idPalabraAdvertencia6;
                        idIndicacion6 = loaded_idIndicacion6;
                        idPictograma6 = loaded_idPictograma6;
                    }, 2000);
                } else {
                    //$('#btnClase6').show();
                    eliminarClase6();
                }

                if (loaded_nombreClase7 != null) {
                    cargarCategoria7Edit();
                    cargarPalabraAdvertencia7Edit();
                    cargarIndicacion7Edit();
                    setTimeout(() => {
                        $('#clase7').show();
                        $('#btnClase7').hide();
                        $('#btnEliminarClase7').show();
                        $('#nombreClase7').removeAttr('disabled');
                        $("#nombreClase7").attr("required", "required");
                        $("#nombreClase7").val(loaded_idClase7);
                        $('#nombreCategoria7').removeAttr('disabled');
                        $("#nombreCategoria7").attr("required", "required");
                        $("#nombreCategoria7").val(loaded_idCategoria7);
                        $('#nombrePalabraAdvertencia7').removeAttr('disabled');
                        $("#nombrePalabraAdvertencia7").attr("required", "required");
                        $("#nombrePalabraAdvertencia7").val(loaded_idPalabraAdvertencia7);
                        $('#nombreIndicacion7').removeAttr('disabled');
                        $("#nombreIndicacion7").attr("required", "required");
                        $("#nombreIndicacion7").val(loaded_idIndicacion7);
                        $('#btnClase8').show();
                        if (loaded_idUnidad7 != null) {
                            nivel7 = loaded_nivel7;
                            idUnidad7 = loaded_idUnidad7;
                            nombreUnidad7 = loaded_nombreUnidad7;
                            $('#nivel7').removeAttr('disabled');
                            $("#nivel7").attr("required", "required");
                            $("#nivel7").val(nivel7);
                            $('#unidad7').html(nombreUnidad7);
                            console.log('Nivel 7: ',nivel7);
                            console.log('ID unidad 7: ',idUnidad7);
                            console.log('Nombre Unidad 7: ',nombreUnidad7);
                        } else {
                            nivel7 = 'null';
                            idUnidad7 = 'null';
                            nombreUnidad7 = 'null';
                            $('#unidad7').html("N/A");
                            $('#nivel7').removeAttr('required');
                            $('#nivel7').attr("disabled", "disabled");
                            $('#nivel7').val('');
                            console.log('Nivel 7: ',nivel7);
                            console.log('ID unidad 7: ',idUnidad7);
                            console.log('Nombre Unidad 7: ',nombreUnidad7);
                        }
                        $('#modalCRUD').animate({ scrollTop: 3500 }, 'fast');
                        idClase7 = loaded_idClase7;
                        idCategoria7 = loaded_idCategoria7;
                        idPalabraAdvertencia7 = loaded_idPalabraAdvertencia7;
                        idIndicacion7 = loaded_idIndicacion7;
                        idPictograma7 = loaded_idPictograma7;
                    }, 2100);
                } else {
                    //$('#btnClase7').show();
                    eliminarClase7();
                }

                if (loaded_nombreClase8 != null) {
                    cargarCategoria8Edit();
                    cargarPalabraAdvertencia8Edit();
                    cargarIndicacion8Edit();
                    setTimeout(() => {
                        $('#clase8').show();
                        $('#btnClase8').hide();
                        $('#btnEliminarClase8').show();
                        $('#nombreClase8').removeAttr('disabled');
                        $("#nombreClase8").attr("required", "required");
                        $("#nombreClase8").val(loaded_idClase8);
                        $('#nombreCategoria8').removeAttr('disabled');
                        $("#nombreCategoria8").attr("required", "required");
                        $("#nombreCategoria8").val(loaded_idCategoria8);
                        $('#nombrePalabraAdvertencia8').removeAttr('disabled');
                        $("#nombrePalabraAdvertencia8").attr("required", "required");
                        $("#nombrePalabraAdvertencia8").val(loaded_idPalabraAdvertencia8);
                        $('#nombreIndicacion8').removeAttr('disabled');
                        $("#nombreIndicacion8").attr("required", "required");
                        $("#nombreIndicacion8").val(loaded_idIndicacion8);
                        $('#btnClase9').show();
                        if (loaded_idUnidad8 != null) {
                            nivel8 = loaded_nivel8;
                            idUnidad8 = loaded_idUnidad8;
                            nombreUnidad8 = loaded_nombreUnidad8;
                            $('#nivel8').removeAttr('disabled');
                            $("#nivel8").attr("required", "required");
                            $("#nivel8").val(nivel8);
                            $('#unidad8').html(nombreUnidad8);
                            console.log('Nivel 8: ',nivel8);
                            console.log('ID unidad 8: ',idUnidad8);
                            console.log('Nombre Unidad 8: ',nombreUnidad8);
                        } else {
                            nivel8 = 'null';
                            idUnidad8 = 'null';
                            nombreUnidad8 = 'null';
                            $('#unidad8').html("N/A");
                            $('#nivel8').removeAttr('required');
                            $('#nivel8').attr("disabled", "disabled");
                            $('#nivel8').val('');
                            console.log('Nivel 8: ',nivel8);
                            console.log('ID unidad 8: ',idUnidad8);
                            console.log('Nombre Unidad 8: ',nombreUnidad8);
                        }
                        $('#modalCRUD').animate({ scrollTop: 4000 }, 'fast');
                        idClase8 = loaded_idClase8;
                        idCategoria8 = loaded_idCategoria8;
                        idPalabraAdvertencia8 = loaded_idPalabraAdvertencia8;
                        idIndicacion8 = loaded_idIndicacion8;
                        idPictograma8 = loaded_idPictograma8;
                    }, 2200);
                } else {
                    //$('#btnClase8').show();
                    eliminarClase8();
                }

                if (loaded_nombreClase9 != null) {
                    cargarCategoria9Edit();
                    cargarPalabraAdvertencia9Edit();
                    cargarIndicacion9Edit();
                    setTimeout(() => {
                        $('#clase9').show();
                        $('#btnClase9').hide();
                        $('#btnEliminarClase9').show();
                        $('#nombreClase9').removeAttr('disabled');
                        $("#nombreClase9").attr("required", "required");
                        $("#nombreClase9").val(loaded_idClase9);
                        $('#nombreCategoria9').removeAttr('disabled');
                        $("#nombreCategoria9").attr("required", "required");
                        $("#nombreCategoria9").val(loaded_idCategoria9);
                        $('#nombrePalabraAdvertencia9').removeAttr('disabled');
                        $("#nombrePalabraAdvertencia9").attr("required", "required");
                        $("#nombrePalabraAdvertencia9").val(loaded_idPalabraAdvertencia9);
                        $('#nombreIndicacion9').removeAttr('disabled');
                        $("#nombreIndicacion9").attr("required", "required");
                        $("#nombreIndicacion9").val(loaded_idIndicacion9);
                        $('#btnClase10').show();
                        if (loaded_idUnidad9 != null) {
                            nivel9 = loaded_nivel9;
                            idUnidad9 = loaded_idUnidad9;
                            nombreUnidad9 = loaded_nombreUnidad9;
                            $('#nivel9').removeAttr('disabled');
                            $("#nivel9").attr("required", "required");
                            $("#nivel9").val(nivel9);
                            $('#unidad9').html(nombreUnidad9);
                            console.log('Nivel 9: ',nivel9);
                            console.log('ID unidad 9: ',idUnidad9);
                            console.log('Nombre Unidad 9: ',nombreUnidad9);
                        } else {
                            nivel9 = 'null';
                            idUnidad9 = 'null';
                            nombreUnidad9 = 'null';
                            $('#unidad9').html("N/A");
                            $('#nivel9').removeAttr('required');
                            $('#nivel9').attr("disabled", "disabled");
                            $('#nivel9').val('');
                            console.log('Nivel 9: ',nivel9);
                            console.log('ID unidad 9: ',idUnidad9);
                            console.log('Nombre Unidad 9: ',nombreUnidad9);
                        }
                        $('#modalCRUD').animate({ scrollTop: 4500 }, 'fast');
                        idClase9 = loaded_idClase9;
                        idCategoria9 = loaded_idCategoria9;
                        idPalabraAdvertencia9 = loaded_idPalabraAdvertencia9;
                        idIndicacion9 = loaded_idIndicacion9;
                        idPictograma9 = loaded_idPictograma9;
                    }, 2300);
                } else {
                    //$('#btnClase9').show();
                    eliminarClase9();
                }

                if (loaded_nombreClase10 != null) {
                    cargarCategoria10Edit();
                    cargarPalabraAdvertencia10Edit();
                    cargarIndicacion10Edit();
                    setTimeout(() => {
                        $('#clase10').show();
                        $('#btnClase10').hide();
                        $('#btnEliminarClase10').show();
                        $('#nombreClase10').removeAttr('disabled');
                        $("#nombreClase10").attr("required", "required");
                        $("#nombreClase10").val(loaded_idClase10);
                        $('#nombreCategoria10').removeAttr('disabled');
                        $("#nombreCategoria10").attr("required", "required");
                        $("#nombreCategoria10").val(loaded_idCategoria10);
                        $('#nombrePalabraAdvertencia10').removeAttr('disabled');
                        $("#nombrePalabraAdvertencia10").attr("required", "required");
                        $("#nombrePalabraAdvertencia10").val(loaded_idPalabraAdvertencia10);
                        $('#nombreIndicacion10').removeAttr('disabled');
                        $("#nombreIndicacion10").attr("required", "required");
                        $("#nombreIndicacion10").val(loaded_idIndicacion10);
                        if (loaded_idUnidad10 != null) {
                            nivel10 = loaded_nivel10;
                            idUnidad10 = loaded_idUnidad10;
                            nombreUnidad10 = loaded_nombreUnidad10;
                            $('#nivel10').removeAttr('disabled');
                            $("#nivel10").attr("required", "required");
                            $("#nivel10").val(nivel10);
                            $('#unidad10').html(nombreUnidad10);
                            console.log('Nivel 10: ',nivel10);
                            console.log('ID unidad 10: ',idUnidad10);
                            console.log('Nombre Unidad 10: ',nombreUnidad10);
                        } else {
                            nivel10 = 'null';
                            idUnidad10 = 'null';
                            nombreUnidad10 = 'null';
                            $('#unidad10').html("N/A");
                            $('#nivel10').removeAttr('required');
                            $('#nivel10').attr("disabled", "disabled");
                            $('#nivel10').val('');
                            console.log('Nivel 10: ',nivel10);
                            console.log('ID unidad 10: ',idUnidad10);
                            console.log('Nombre Unidad 10: ',nombreUnidad10);
                        }
                        $('#modalCRUD').animate({ scrollTop: 5000 }, 'fast');
                        idClase10 = loaded_idClase10;
                        idCategoria10 = loaded_idCategoria10;
                        idPalabraAdvertencia10 = loaded_idPalabraAdvertencia10;
                        idIndicacion10 = loaded_idIndicacion10;
                        idPictograma10 = loaded_idPictograma10;
                    }, 2400);
                } else {
                    //$('#btnClase10').show();
                    eliminarClase10();
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

        opcion = 2; //Editar Producto
        $(".modal-header").css("background-color", "#4e73df");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Producto");
        $('#modalCRUD').modal({backdrop: 'static', keyboard: false}, 'show');
        //console.log("Edición de Usuario - Paso 1...");
    });

    //Botón Eliminar Producto
    $(document).on("click", ".btnBorrarProducto", function () {
        fila = $(this);
        cas = $(this).closest("tr").find('td:eq(0)').text();
        nombreProducto = $(this).closest("tr").find('td:eq(1)').text();
        opcion = 3 //borrar
        Swal.fire({
            title: 'Está seguro que desea eliminar el producto "' + nombreProducto + '"?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                $.ajax({
                    url: "bd/bdProductos.php",
                    type: "POST",
                    dataType: "json",
                    data: { opcion: opcion, cas: cas },
                    success: function () {
                        tablaProductos.row(fila.parents('tr')).remove().draw();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'El producto "' + nombreProducto + '" fue eliminado con éxito',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    },
                    // error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    //     // alert("Status: " + textStatus); alert("Error: " + errorThrown);
                    //     console.log("Status: " + textStatus);
                    //     console.log("Error: " + errorThrown);
                    // }
                    error: function (textStatus, errorThrown) {
                        console.log(textStatus, errorThrown);
                    }
                });
            }
        })
    });

    //Submit Productos
    $("#formProductos").submit(function (e) {
        e.preventDefault();
        idClase1 = 'null';
        idCategoria1 = 'null';
        idPalabraAdvertencia1 = 'null';
        idIndicacion1 = 'null';

        newcas = $.trim($("#newcas").val());
        nombreProducto = $.trim($('#nombreProducto').val());
        idGrupo = $.trim($("#nombreGrupo").val());
        idUso = $.trim($("#nombreUso").val());
        nombreFabricante1 = $.trim($("#nombreFabricante1").val());

        //Captura de datos de Clase 1

        const opClase1 = document.getElementById("nombreClase1");
        if (opClase1.selectedIndex === 0 || opClase1.selectedIndex === '') {
            idClase1 = 'null';
        } else {
            idClase1 = $.trim($("#nombreClase1").val());
        }

        const opCategoria1 = document.getElementById("nombreCategoria1");
        if (opCategoria1.selectedIndex === 0) {
            idCategoria1 = 'null';
        } else {
            idCategoria1 = $.trim($("#nombreCategoria1").val());
        }

        const opPalabraAdvertencia1 = document.getElementById("nombrePalabraAdvertencia1");
        if (opPalabraAdvertencia1.selectedIndex === 0) {
            idPalabraAdvertencia1 = 'null';
        } else {
            idPalabraAdvertencia1 = $.trim($("#nombrePalabraAdvertencia1").val());
        }

        const opIndicacion1 = document.getElementById("nombreIndicacion1");
        if (opIndicacion1.selectedIndex === 0) {
            idIndicacion1 = 'null';
        } else {
            idIndicacion1 = $.trim($("#nombreIndicacion1").val());
        }

        if (idPictograma1 === 0) {
            idPictograma1 = 'null';
        }

        if (idUnidad1 != 'null') {
            nivel1 = $.trim($("#nivel1").val());
        } else {
            nivel1 = 'null';
        }

        //Captura de datos de Clase 2

        const opClase2 = document.getElementById("nombreClase2");
        if (opClase2.selectedIndex === 0 || opClase2.selectedIndex === '') {
            idClase2 = 'null';
        } else {
            idClase2 = $.trim($("#nombreClase2").val());
        }

        const opCategoria2 = document.getElementById("nombreCategoria2");
        if (opCategoria2.selectedIndex === 0) {
            idCategoria2 = 'null';
        } else {
            idCategoria2 = $.trim($("#nombreCategoria2").val());
        }

        const opPalabraAdvertencia2 = document.getElementById("nombrePalabraAdvertencia2");
        if (opPalabraAdvertencia2.selectedIndex === 0) {
            idPalabraAdvertencia2 = 'null';
        } else {
            idPalabraAdvertencia2 = $.trim($("#nombrePalabraAdvertencia2").val());
        }

        const opIndicacion2 = document.getElementById("nombreIndicacion2");
        if (opIndicacion2.selectedIndex === 0) {
            idIndicacion2 = 'null';
        } else {
            idIndicacion2 = $.trim($("#nombreIndicacion2").val());
        }

        if (idPictograma2 === 0) {
            idPictograma2 = 'null';
        }

        if (idUnidad2 != 'null') {
            nivel2 = $.trim($("#nivel2").val());
        } else {
            nivel2 = 'null';
        }


        //Captura de datos de Clase 3

        const opClase3 = document.getElementById("nombreClase3");
        if (opClase3.selectedIndex === 0 || opClase3.selectedIndex === '') {
            idClase3 = 'null';
        } else {
            idClase3 = $.trim($("#nombreClase3").val());
        }

        const opCategoria3 = document.getElementById("nombreCategoria3");
        if (opCategoria3.selectedIndex === 0) {
            idCategoria3 = 'null';
        } else {
            idCategoria3 = $.trim($("#nombreCategoria3").val());
        }

        const opPalabraAdvertencia3 = document.getElementById("nombrePalabraAdvertencia3");
        if (opPalabraAdvertencia3.selectedIndex === 0) {
            idPalabraAdvertencia3 = 'null';
        } else {
            idPalabraAdvertencia3 = $.trim($("#nombrePalabraAdvertencia3").val());
        }

        const opIndicacion3 = document.getElementById("nombreIndicacion3");
        if (opIndicacion3.selectedIndex === 0) {
            idIndicacion3 = 'null';
        } else {
            idIndicacion3 = $.trim($("#nombreIndicacion3").val());
        }

        if (idPictograma3 === 0) {
            idPictograma3 = 'null';
        }
        
        if (idUnidad3 != 'null') {
            nivel3 = $.trim($("#nivel3").val());
        } else {
            nivel3 = 'null';
        }


        //Captura de datos de Clase 4

        const opClase4 = document.getElementById("nombreClase4");
        if (opClase4.selectedIndex === 0 || opClase4.selectedIndex === '') {
            idClase4 = 'null';
        } else {
            idClase4 = $.trim($("#nombreClase4").val());
        }

        const opCategoria4 = document.getElementById("nombreCategoria4");
        if (opCategoria4.selectedIndex === 0) {
            idCategoria4 = 'null';
        } else {
            idCategoria4 = $.trim($("#nombreCategoria4").val());
        }

        const opPalabraAdvertencia4 = document.getElementById("nombrePalabraAdvertencia4");
        if (opPalabraAdvertencia4.selectedIndex === 0) {
            idPalabraAdvertencia4 = 'null';
        } else {
            idPalabraAdvertencia4 = $.trim($("#nombrePalabraAdvertencia4").val());
        }

        const opIndicacion4 = document.getElementById("nombreIndicacion4");
        if (opIndicacion4.selectedIndex === 0) {
            idIndicacion4 = 'null';
        } else {
            idIndicacion4 = $.trim($("#nombreIndicacion4").val());
        }

        if (idPictograma4 === 0) {
            idPictograma4 = 'null';
        }

        if (idUnidad4 != 'null') {
            nivel4 = $.trim($("#nivel4").val());
        } else {
            nivel4 = 'null';
        }


        //Captura de datos de Clase 5

        const opClase5 = document.getElementById("nombreClase5");
        if (opClase5.selectedIndex === 0 || opClase5.selectedIndex === '') {
            idClase5 = 'null';
        } else {
            idClase5 = $.trim($("#nombreClase5").val());
        }

        const opCategoria5 = document.getElementById("nombreCategoria5");
        if (opCategoria5.selectedIndex === 0) {
            idCategoria5 = 'null';
        } else {
            idCategoria5 = $.trim($("#nombreCategoria5").val());
        }

        const opPalabraAdvertencia5 = document.getElementById("nombrePalabraAdvertencia5");
        if (opPalabraAdvertencia5.selectedIndex === 0) {
            idPalabraAdvertencia5 = 'null';
        } else {
            idPalabraAdvertencia5 = $.trim($("#nombrePalabraAdvertencia5").val());
        }

        const opIndicacion5 = document.getElementById("nombreIndicacion5");
        if (opIndicacion5.selectedIndex === 0) {
            idIndicacion5 = 'null';
        } else {
            idIndicacion5 = $.trim($("#nombreIndicacion5").val());
        }

        if (idPictograma5 === 0) {
            idPictograma5 = 'null';
        }

        if (idUnidad5 != 'null') {
            nivel5 = $.trim($("#nivel5").val());
        } else {
            nivel5 = 'null';
        }


        //Captura de datos de Clase 6

        const opClase6 = document.getElementById("nombreClase6");
        if (opClase6.selectedIndex === 0 || opClase6.selectedIndex === '') {
            idClase6 = 'null';
        } else {
            idClase6 = $.trim($("#nombreClase6").val());
        }

        const opCategoria6 = document.getElementById("nombreCategoria6");
        if (opCategoria6.selectedIndex === 0) {
            idCategoria6 = 'null';
        } else {
            idCategoria6 = $.trim($("#nombreCategoria6").val());
        }

        const opPalabraAdvertencia6 = document.getElementById("nombrePalabraAdvertencia6");
        if (opPalabraAdvertencia6.selectedIndex === 0) {
            idPalabraAdvertencia6 = 'null';
        } else {
            idPalabraAdvertencia6 = $.trim($("#nombrePalabraAdvertencia6").val());
        }

        const opIndicacion6 = document.getElementById("nombreIndicacion6");
        if (opIndicacion6.selectedIndex === 0) {
            idIndicacion6 = 'null';
        } else {
            idIndicacion6 = $.trim($("#nombreIndicacion6").val());
        }

        if (idPictograma6 === 0) {
            idPictograma6 = 'null';
        }

        if (idUnidad6 != 'null') {
            nivel6 = $.trim($("#nivel6").val());
        } else {
            nivel6 = 'null';
        }


        //Captura de datos de Clase 7

        const opClase7 = document.getElementById("nombreClase7");
        if (opClase7.selectedIndex === 0 || opClase7.selectedIndex === '') {
            idClase7 = 'null';
        } else {
            idClase7 = $.trim($("#nombreClase7").val());
        }

        const opCategoria7 = document.getElementById("nombreCategoria7");
        if (opCategoria7.selectedIndex === 0) {
            idCategoria7 = 'null';
        } else {
            idCategoria7 = $.trim($("#nombreCategoria7").val());
        }

        const opPalabraAdvertencia7 = document.getElementById("nombrePalabraAdvertencia7");
        if (opPalabraAdvertencia7.selectedIndex === 0) {
            idPalabraAdvertencia7 = 'null';
        } else {
            idPalabraAdvertencia7 = $.trim($("#nombrePalabraAdvertencia7").val());
        }

        const opIndicacion7 = document.getElementById("nombreIndicacion7");
        if (opIndicacion7.selectedIndex === 0) {
            idIndicacion7 = 'null';
        } else {
            idIndicacion7 = $.trim($("#nombreIndicacion7").val());
        }

        if (idPictograma7 === 0) {
            idPictograma7 = 'null';
        }

        if (idUnidad7 != 'null') {
            nivel7 = $.trim($("#nivel7").val());
        } else {
            nivel7 = 'null';
        }


        //Captura de datos de Clase 8

        const opClase8 = document.getElementById("nombreClase8");
        if (opClase8.selectedIndex === 0 || opClase8.selectedIndex === '') {
            idClase8 = 'null';
        } else {
            idClase8 = $.trim($("#nombreClase8").val());
        }

        const opCategoria8 = document.getElementById("nombreCategoria8");
        if (opCategoria8.selectedIndex === 0) {
            idCategoria8 = 'null';
        } else {
            idCategoria8 = $.trim($("#nombreCategoria8").val());
        }

        const opPalabraAdvertencia8 = document.getElementById("nombrePalabraAdvertencia8");
        if (opPalabraAdvertencia8.selectedIndex === 0) {
            idPalabraAdvertencia8 = 'null';
        } else {
            idPalabraAdvertencia8 = $.trim($("#nombrePalabraAdvertencia8").val());
        }

        const opIndicacion8 = document.getElementById("nombreIndicacion8");
        if (opIndicacion8.selectedIndex === 0) {
            idIndicacion8 = 'null';
        } else {
            idIndicacion8 = $.trim($("#nombreIndicacion8").val());
        }

        if (idPictograma8 === 0) {
            idPictograma8 = 'null';
        }

        if (idUnidad8 != 'null') {
            nivel8 = $.trim($("#nivel8").val());
        } else {
            nivel8 = 'null';
        }


        //Captura de datos de Clase 9

        const opClase9 = document.getElementById("nombreClase9");
        if (opClase9.selectedIndex === 0 || opClase9.selectedIndex === '') {
            idClase9 = 'null';
        } else {
            idClase9 = $.trim($("#nombreClase9").val());
        }

        const opCategoria9 = document.getElementById("nombreCategoria9");
        if (opCategoria9.selectedIndex === 0) {
            idCategoria9 = 'null';
        } else {
            idCategoria9 = $.trim($("#nombreCategoria9").val());
        }

        const opPalabraAdvertencia9 = document.getElementById("nombrePalabraAdvertencia9");
        if (opPalabraAdvertencia9.selectedIndex === 0) {
            idPalabraAdvertencia9 = 'null';
        } else {
            idPalabraAdvertencia9 = $.trim($("#nombrePalabraAdvertencia9").val());
        }

        const opIndicacion9 = document.getElementById("nombreIndicacion9");
        if (opIndicacion9.selectedIndex === 0) {
            idIndicacion9 = 'null';
        } else {
            idIndicacion9 = $.trim($("#nombreIndicacion9").val());
        }

        if (idPictograma9 === 0) {
            idPictograma9 = 'null';
        }

        if (idUnidad9 != 'null') {
            nivel9 = $.trim($("#nivel9").val());
        } else {
            nivel9 = 'null';
        }


        //Captura de datos de Clase 10

        const opClase10 = document.getElementById("nombreClase10");
        if (opClase10.selectedIndex === 0 || opClase10.selectedIndex === '') {
            idClase10 = 'null';
        } else {
            idClase10 = $.trim($("#nombreClase10").val());
        }

        const opCategoria10 = document.getElementById("nombreCategoria10");
        if (opCategoria10.selectedIndex === 0) {
            idCategoria10 = 'null';
        } else {
            idCategoria10 = $.trim($("#nombreCategoria10").val());
        }

        const opPalabraAdvertencia10 = document.getElementById("nombrePalabraAdvertencia10");
        if (opPalabraAdvertencia10.selectedIndex === 0) {
            idPalabraAdvertencia10 = 'null';
        } else {
            idPalabraAdvertencia10 = $.trim($("#nombrePalabraAdvertencia10").val());
        }

        const opIndicacion10 = document.getElementById("nombreIndicacion10");
        if (opIndicacion10.selectedIndex === 0) {
            idIndicacion10 = 'null';
        } else {
            idIndicacion10 = $.trim($("#nombreIndicacion10").val());
        }

        if (idPictograma10 === 0) {
            idPictograma10 = 'null';
        }

        if (idUnidad10 != 'null') {
            nivel10 = $.trim($("#nivel10").val());
        } else {
            nivel10 = 'null';
        }

        // if (cas == undefined) {
        //     console.log('CAS: ', newcas);
        // } else {
        //     console.log('CAS: ', cas);
        //     console.log('New CAS: ', newcas);
        // }
        console.log('CAS: ', cas);
        console.log('Nombre de Producto: ', nombreProducto);
        console.log('Id de Grupo: ', idGrupo);
        console.log('Id de Uso: ', idUso);
        console.log('Nombre del Fabricante1: ', nombreFabricante1);
        console.log('Id de Clase de Peligro 1: ', idClase1);
        console.log('Id de Categoria 1: ', idCategoria1);
        console.log('Id de Palabra de Advertencia 1: ', idPalabraAdvertencia1);
        console.log('Id de Indicacion 1: ', idIndicacion1);
        console.log('Id de Pictograma 1: ', idPictograma1);
        console.log('Nivel 1: ', nivel1);
        console.log('Unidad 1: ', idUnidad1);
        console.log('Id de Categoria 2: ', idCategoria2);
        console.log('Id de Palabra de Advertencia 2: ', idPalabraAdvertencia2);
        console.log('Id de Indicacion 2: ', idIndicacion2);
        console.log('Id de Pictograma 2: ', idPictograma2);
        console.log('Nivel 2: ', nivel2);
        console.log('Unidad 2: ', idUnidad2);
        console.log('Id de Categoria 3: ', idCategoria3);
        console.log('Id de Palabra de Advertencia 3: ', idPalabraAdvertencia3);
        console.log('Id de Indicacion 3: ', idIndicacion3);
        console.log('Id de Pictograma 3: ', idPictograma3);
        console.log('Nivel 3: ', nivel3);
        console.log('Unidad 3: ', idUnidad3);
        console.log('Id de Categoria 4: ', idCategoria4);
        console.log('Id de Palabra de Advertencia 4: ', idPalabraAdvertencia4);
        console.log('Id de Indicacion 4: ', idIndicacion4);
        console.log('Id de Pictograma 4: ', idPictograma4);
        console.log('Nivel 4: ', nivel4);
        console.log('Unidad 4: ', idUnidad4);
        console.log('Id de Categoria 5: ', idCategoria5);
        console.log('Id de Palabra de Advertencia 5: ', idPalabraAdvertencia5);
        console.log('Id de Indicacion 5: ', idIndicacion5);
        console.log('Id de Pictograma 5: ', idPictograma5);
        console.log('Nivel 5: ', nivel5);
        console.log('Unidad 5: ', idUnidad5);
        console.log('Id de Categoria 6: ', idCategoria6);
        console.log('Id de Palabra de Advertencia 6: ', idPalabraAdvertencia6);
        console.log('Id de Indicacion 6: ', idIndicacion6);
        console.log('Id de Pictograma 6: ', idPictograma6);
        console.log('Nivel 6: ', nivel6);
        console.log('Unidad 6: ', idUnidad6);
        console.log('Id de Categoria 7: ', idCategoria7);
        console.log('Id de Palabra de Advertencia 7: ', idPalabraAdvertencia7);
        console.log('Id de Indicacion 7: ', idIndicacion7);
        console.log('Id de Pictograma 7: ', idPictograma7);
        console.log('Nivel 7: ', nivel7);
        console.log('Unidad 7: ', idUnidad7);
        console.log('Id de Categoria 8: ', idCategoria8);
        console.log('Id de Palabra de Advertencia 8: ', idPalabraAdvertencia8);
        console.log('Id de Indicacion 8: ', idIndicacion8);
        console.log('Id de Pictograma 8: ', idPictograma8);
        console.log('Nivel 8: ', nivel8);
        console.log('Unidad 8: ', idUnidad8);
        console.log('Id de Categoria 9: ', idCategoria9);
        console.log('Id de Palabra de Advertencia 9: ', idPalabraAdvertencia9);
        console.log('Id de Indicacion 9: ', idIndicacion9);
        console.log('Id de Pictograma 9: ', idPictograma9);
        console.log('Nivel 9: ', nivel9);
        console.log('Unidad 9: ', idUnidad9);
        console.log('Id de Categoria 10: ', idCategoria10);
        console.log('Id de Palabra de Advertencia 10: ', idPalabraAdvertencia10);
        console.log('Id de Indicacion 10: ', idIndicacion10);
        console.log('Id de Pictograma 10: ', idPictograma10);
        console.log('Nivel 10: ', nivel10);
        console.log('Unidad 10: ', idUnidad10);

        $.ajax({
            url: "bd/bdProductos.php",
            type: "POST",
            dataType: "json",
            data: {
                opcion: opcion,
                cas: cas,
                newcas: newcas,
                nombreProducto: nombreProducto,
                idGrupo: idGrupo,
                idUso: idUso,
                nombreFabricante1: nombreFabricante1,
                idClase1: idClase1,
                idCategoria1: idCategoria1,
                idPalabraAdvertencia1: idPalabraAdvertencia1,
                idIndicacion1: idIndicacion1,
                idPictograma1: idPictograma1,
                nivel1: nivel1,
                idUnidad1: idUnidad1,
                idClase2: idClase2,
                idCategoria2: idCategoria2,
                idPalabraAdvertencia2: idPalabraAdvertencia2,
                idIndicacion2: idIndicacion2,
                idPictograma2: idPictograma2,
                nivel2: nivel2,
                idUnidad2: idUnidad2,
                idClase3: idClase3,
                idCategoria3: idCategoria3,
                idPalabraAdvertencia3: idPalabraAdvertencia3,
                idIndicacion3: idIndicacion3,
                idPictograma3: idPictograma3,
                nivel3: nivel3,
                idUnidad3: idUnidad3,
                idClase4: idClase4,
                idCategoria4: idCategoria4,
                idPalabraAdvertencia4: idPalabraAdvertencia4,
                idIndicacion4: idIndicacion4,
                idPictograma4: idPictograma4,
                nivel4: nivel4,
                idUnidad4: idUnidad4,
                idClase5: idClase5,
                idCategoria5: idCategoria5,
                idPalabraAdvertencia5: idPalabraAdvertencia5,
                idIndicacion5: idIndicacion5,
                idPictograma5: idPictograma5,
                nivel5: nivel5,
                idUnidad5: idUnidad5,
                idClase6: idClase6,
                idCategoria6: idCategoria6,
                idPalabraAdvertencia6: idPalabraAdvertencia6,
                idIndicacion6: idIndicacion6,
                idPictograma6: idPictograma6,
                nivel6: nivel6,
                idUnidad6: idUnidad6,
                idClase7: idClase7,
                idCategoria7: idCategoria7,
                idPalabraAdvertencia7: idPalabraAdvertencia7,
                idIndicacion7: idIndicacion7,
                idPictograma7: idPictograma7,
                nivel7: nivel7,
                idUnidad7: idUnidad7,
                idClase8: idClase8,
                idCategoria8: idCategoria8,
                idPalabraAdvertencia8: idPalabraAdvertencia8,
                idIndicacion8: idIndicacion8,
                idPictograma8: idPictograma8,
                nivel8: nivel8,
                idUnidad8: idUnidad8,
                idClase9: idClase9,
                idCategoria9: idCategoria9,
                idPalabraAdvertencia9: idPalabraAdvertencia9,
                idIndicacion9: idIndicacion9,
                idPictograma9: idPictograma9,
                nivel9: nivel9,
                idUnidad9: idUnidad9,
                idClase10: idClase10,
                idCategoria10: idCategoria10,
                idPalabraAdvertencia10: idPalabraAdvertencia10,
                idIndicacion10: idIndicacion10,
                idPictograma10: idPictograma10,
                nivel10: nivel10,
                idUnidad10: idUnidad10
            },
            success: function (data) {
                //Datos desde el Select de MySQL a la tabla.
                console.log(data);
                cas = data[0].cas;
                nombreProducto = data[0].nombreProducto;
                nombreGrupo = data[0].nombreGrupo;
                nombreUso = data[0].nombreUso;
                nombreFabricante1 = data[0].nombreFabricante1;
                if (opcion == 1) {
                    tablaProductos.row.add([cas, nombreProducto, nombreGrupo, nombreUso, nombreFabricante1]).draw();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'El producto "' + nombreProducto + '" fue creado exitosamente',
                        showConfirmButton: false,
                        timer: 2000
                    })
                } else {
                    tablaProductos.row(fila).data([cas, nombreProducto, nombreGrupo, nombreUso, nombreFabricante1]).draw();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'El producto "' + nombreProducto + '" fue editado exitosamente.',
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