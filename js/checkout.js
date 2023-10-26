document.getElementsByClassName('productImage')[0].innerHTML = "<img src=" + product4Loco.productImage + ">";
document.getElementsByClassName('productName')[0].innerHTML = product4Loco.productName;
document.getElementsByClassName('productCode')[0].innerHTML = product4Loco.productCode;
document.getElementsByClassName('promoPrice')[0].innerHTML = product4Loco.promoPrice + " Lei";

let cant = localStorage.getItem("cantitateComandata");
document.getElementById("orderQuantity").innerHTML = cant;
document.getElementById("orderQuantity").style = "font-weight:bold";
document.getElementById("productsInTheCart1").innerHTML = " " + "[" + cant + "]";

let valSubtotal = localStorage.getItem("valoareSubtotal");
document.getElementById("subtotalPrice").innerHTML = valSubtotal + " Lei";
document.getElementById("subtotalPrice").style = "font-weight:bold";
document.getElementById("netPrice").innerHTML = valSubtotal + " Lei";
let valReducere = localStorage.getItem("valoareDiscount");
document.getElementById("discountCheckout").innerHTML = valReducere + " Lei";


function copyAddress(checkbox) {
    let sourceLastName = checkbox.parentNode.parentNode.previousElementSibling.children[4].value;
    let sourceFirstName = checkbox.parentNode.parentNode.previousElementSibling.children[8].value;
    let sourceDeliveryAddress = checkbox.parentNode.parentNode.previousElementSibling.children[12].value;
    let sourcePhoneNumber = checkbox.parentNode.parentNode.previousElementSibling.children[16].value;

    let copyLastName = checkbox.parentNode.parentNode.children[4];
    let copyFirstName = checkbox.parentNode.parentNode.children[8];
    let copyDeliveryAddress = checkbox.parentNode.parentNode.children[12];
    let copyPhoneNumber = checkbox.parentNode.parentNode.children[16];

    copyLastName.value = sourceLastName;
    copyFirstName.value = sourceFirstName;
    copyDeliveryAddress.value = sourceDeliveryAddress;
    copyPhoneNumber.value = sourcePhoneNumber;
}

function choseCurier(curier) {
    let indexCurier = curier.value;

    if (indexCurier === "fancourier") {
        transportRate = 15;
    } else if (indexCurier === "sameday") {
        transportRate = 20;
    } else if (indexCurier === "easybox") {
        transportRate = 10;
    } else if (indexCurier === "fromStore") {
        transportRate = 0;
    } else {
        transportRate = 0;
    }
    document.getElementById("transport").innerHTML = transportRate + " Lei";
    totalPayment(transportRate);
}

function totalPayment(transportValue) {
    let grandTotal = parseInt(valSubtotal) - parseInt(valReducere) + transportValue;
    document.getElementById("brutPrice").innerHTML = grandTotal + "Lei";
    return vatCalculation(grandTotal);
}

function vatCalculation(baseOfCalculation) {
    let vat = baseOfCalculation * 0.19;
    document.getElementById("tva").innerHTML = vat + "Lei";
}

function validation(elem) {
    let fieldNume1 = document.getElementById("lastName1").value;
    let fieldPrenume1 = document.getElementById("firstName1").value;
    let fieldAdresaDeLivrare1 = document.getElementById("deliveryAddress1").value;
    let fieldTelefon1 = document.getElementById("phone1").value;
    let fieldNume2 = document.getElementById("lastName2").value;
    let fieldPrenume2 = document.getElementById("firstName2").value;
    let fieldAdresaDeLivrare2 = document.getElementById("deliveryAddress2").value;
    let fieldTelefon2 = document.getElementById("phone2").value;

    if (fieldNume1 != "" && fieldNume2 != "" && fieldPrenume1 != "" && fieldPrenume2 != "" && fieldAdresaDeLivrare1 != "" && fieldAdresaDeLivrare2 != "" && fieldTelefon1 != "" && fieldTelefon2 != "" && (document.getElementById('fancourier').checked === true || document.getElementById('sameday').checked === true || document.getElementById('easybox').checked === true || document.getElementById('fromStore').checked === true)) {
        elem.setAttribute("value", "ok");
    } else {
        alert("Completati toate campurile formularului pentru a trimite comanda!");
        document.getElementById("myCheckboxId").checked = false;
    }
}

function sendCmd(elem) {
    let aSend = elem;
    let validationParameter = aSend.previousElementSibling.children[0];

    if (validationParameter.value === "ok") {
        aSend.setAttribute("href", "orderCompletion.html");
    }
}