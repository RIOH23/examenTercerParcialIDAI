var panesForm = document.getElementsByName("panesForm");

function calcularTotal() {
    var total = 0;

    var especialidad = document.getElementById("especialidad").value;

    switch (especialidad) {
        case "clasica":
            total += 80;
            break;
        case "bbq":
            total += 100;
            break;
        case "tocino":
            total += 120;
            break;
        case "doble":
            total += 150;
            break;
        case "hawaiana":
            total += 180;
            break;
    }

    var tipoPan = document.getElementById("pan").value;

    if (tipoPan == "clasico") {
        total += 0;
    }
    else if (tipoPan == "ajonjoli") {
        total += 20;
    }
    else if (tipoPan == "integral"){
        total += 20;
    }
    else if (tipoPan == "brioche"){
        total += 50;
    }
    else {
        alert("Seleccione un tipo de pan válido.");
        return;
    }


    var costoExtra = 5;
    var extras = document.getElementsByName("extras");
    var extrasMarcados = 0;
    for (var i = 0; i < extras.length; i++) {
        if (extras[i].checked) {
            extrasMarcados++;
        }
    }
    total += (extrasMarcados * costoExtra);


    document.getElementById("total").innerText = "Total a pagar: $" + total;

}