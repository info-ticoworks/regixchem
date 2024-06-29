$(document).ready(function () {

    var fila; //Capturar la fila para editar o borrar el registro

    //Botón Previsualizar Hoja de Seguridad
    $(document).on("click", ".btnPrevisualizar", function () {
        $("#modalHojaSeguridad").trigger("reset");
        fila = $(this).closest("tr");
        idReceta = fila.find('td:eq(0)').text();
        nombreReceta = fila.find('td:eq(1)').text();
        console.log('ID de Receta: ', idReceta);
        console.log('Nombre de Receta: ', nombreReceta);
        $("#nombreRecetaPrev").empty();
        $('<h3>').text("Hoja de Seguridad para la Receta '" + nombreReceta + "'").appendTo("#nombreRecetaPrev");
        $(".modal-header").css("background-color", "#4e73df");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Hoja de Seguridad");
        $('#modalHojaSeguridad').modal({ backdrop: 'static', keyboard: false }, 'show');
    });

});