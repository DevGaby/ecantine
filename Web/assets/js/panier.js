$(document).ready(function() {


    var histo = new Array();
    histo[0] = new Array();


    histo[0].push("orange");
    histo[0].push("5");
    histo[1] = new Array();
    histo[1].push("pomme");
    histo[1].push("5");
    histo[2] = new Array();
    histo[2].push("poire");
    histo[2].push("5");

    console.log(histo);
    var i;

    function CreateHisto(histo) {
        i = 0;
        $(".histo-elem").remove();
        histo.forEach(function () {
            $(".cadre").append('<div class="row tab-histo histo-elem">\n' +
                '<div class="col-6 nameOfFood" value="'+histo[i][0]+'">\n' +
                histo[i][0] +
                '</div>\n' +
                '<div class="col-2 Price">\n' +
                histo[i][1] +
                '€</div>\n' +
                '<div class="col-4 deletteButton">\n' +
                'Annuler\n' +
                '</div>\n' +
                '</div>');
            i++;
        });
    }

    CreateHisto(histo);

    $('body').on("click", ".deletteButton", function () {
        var nameOfFood = $(this).parent().find(".nameOfFood").attr("value");

        i = 0;
        histo.forEach(function () {
            console.log(nameOfFood);
            console.log(histo[i][0]);
            if (histo[i][0] === nameOfFood)
            {
                console.log("???");
                histo.splice(i, 1);
            }
        i++
        });
        CreateHisto(histo);
    });
});