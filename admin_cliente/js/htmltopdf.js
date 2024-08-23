$(document).ready(function () {

    console.log('PDF Precargado');

    let download_button = document.getElementById("download-btn");
    let hoja = document.getElementById("page-container");

    download_button.addEventListener
        ("click", function () {
            const hojaSeguridad = hoja;

            const docDefinition = {

                content: [
                    {
                        text: 'Hoja de Seguridad',
                        style: 'header'
                    },
                    hojaSeguridad
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        margin: [0, 0, 0, 10]
                    }
                }
            };
            pdfMake.createPdf(docDefinition).open();
        }
        );

});