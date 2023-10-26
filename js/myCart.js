// Cele 2 produse din cosul de cumparaturi
// document.getElementsByClassName('productImage')[0].innerHTML = "<img src=" + product4Loco.productImage + ">";
document.getElementsByClassName('productName')[0].innerHTML = product4Loco.productName;
document.getElementsByClassName('productCode')[0].innerHTML = product4Loco.productCode;
document.getElementsByClassName('promoPrice')[0].innerHTML = product4Loco.promoPrice + " Lei";
document.getElementsByClassName('subtotalPrice')[0].innerHTML = product4Loco.promoPrice + " Lei";

// document.getElementsByClassName('productImage')[1].innerHTML = "<img src=" + product3Infra.productImage + ">";
document.getElementsByClassName('productName')[1].innerHTML = product3Infra.productName;
document.getElementsByClassName('productCode')[1].innerHTML = product3Infra.productCode;
document.getElementsByClassName('promoPrice')[1].innerHTML = product3Infra.promoPrice + " Lei";
document.getElementsByClassName('subtotalPrice')[1].innerHTML = product3Infra.promoPrice + " Lei";

function calculateSubtotal(qta) {
    let orderQuantity = parseInt(qta.value);
    localStorage.setItem("cantitateComandata", orderQuantity);
    let orderPrice = parseInt(qta.parentNode.previousElementSibling.children[0].innerHTML);
    let subtotalCart = orderQuantity * orderPrice;
    localStorage.setItem("valoareSubtotal", subtotalCart);
    qta.parentNode.nextElementSibling.children[0].innerHTML = subtotalCart + " Lei";
    cartCalculation();
    productCounter();
    applyCode();
}

function cartCalculation() {
    let subtotaluri = document.getElementsByClassName("subtotalPrice");
    let subtotal = 0;
    for (let i = 0; i < subtotaluri.length; i++) {
        subtotal = subtotal + parseInt(subtotaluri[i].innerHTML);
    }
    document.getElementById("brutPrice").innerHTML = subtotal.toFixed(2) + " Lei";
    document.getElementById("finalCartPrice").innerHTML = subtotal.toFixed(2) + " Lei";
    return finalTotals(subtotal);
}

function finalTotals(basisOfCalculation) {
    let vatValue = basisOfCalculation * 0.19;
    document.getElementById("tva").innerHTML = vatValue.toFixed(2) + " Lei";
    let netPrice = basisOfCalculation - vatValue;
    document.getElementById("netPrice").innerHTML = netPrice.toFixed(2) + " Lei";
}

function productCounter() {
    let quantities = document.getElementsByClassName("pA"); // array cu inputurile tip number si clasa pA
    let productsCounter = 0;
    for (let i = 0; i < quantities.length; i++) {
        productsCounter = productsCounter + parseInt(quantities[i].value);
    }
    document.getElementById("productsInTheCart1").innerHTML = "[" + productsCounter + "]";
    document.getElementById("productsInTheCart2").innerHTML = "[" + productsCounter + " produse]";

    if (productsCounter == 0) {
        document.getElementById("mainTitleCart").innerHTML = "Coșul de cumparături este gol.";
        document.getElementsByClassName("contentPage")[0].style = "margin-bottom: 285px";
        document.getElementsByClassName("contentMyCart")[0].style = "display: none";
        document.getElementsByClassName("buttonsInfo")[0].style = "display: none";
        document.getElementsByClassName("brand")[0].style = "display: none";

    }
    localStorage.setItem("nrProducts", productsCounter);
}

function deleteItem(element) {

    let result = confirm("Ștergeți produsul din coșul de cumpărături?");
    if (result === true) {
        let tableRow = element.parentNode.parentNode;
        tableRow.remove();
    }
    productCounter();
    cartCalculation();
    applyCode();
}

function applyCode() {
    let totalSumWithTva = parseInt(document.getElementById("brutPrice").innerHTML);
    let discountCode = document.getElementById("voucher").value;

    if (discountCode == "r10") {
        discountValue = totalSumWithTva * 0.10;
        localStorage.setItem("valoareDiscount", discountValue);
        let grandTotal = totalSumWithTva - discountValue;
        document.getElementById("finalCartPrice").innerHTML = grandTotal.toFixed(2) + " Lei";
        document.getElementById("discount").innerHTML = discountValue.toFixed(2) + " Lei";
    } else if (discountCode == "r15") {
        discountValue = totalSumWithTva * 0.15;
        localStorage.setItem("valoareDiscount", discountValue);
        let grandTotal = totalSumWithTva - discountValue;
        document.getElementById("finalCartPrice").innerHTML = grandTotal.toFixed(2) + " Lei";
        document.getElementById("discount").innerHTML = discountValue.toFixed(2) + " Lei";
    } else {
        discountValue = 0;
        document.getElementById("discount").innerHTML = " ";
        localStorage.setItem("valoareDiscount", discountValue);
    }
}

function updateCart() {
    cartCalculation();
    productCounter();
    applyCode();
}

// Al treilea produs din cosul de cumparaturi adus cu functia addProductToCart()
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let imgProduct = urlParams.get("imageProduct")
let productTitle = urlParams.get("prodName");
let spanTitleProduct = urlParams.get("span1");
let priceProduct = urlParams.get("price");
let spanCurrency = urlParams.get("span2");
let qntProduct = localStorage.getItem("orderQuantity");

function addProductToCart() {
    let parentTable = document.getElementById("productCart");
    let parentTBody = parentTable.children[1];

    // Creare rand nou in tabel
    let newTr = document.createElement("tr");
    parentTBody.append(newTr);
    // Pe randul nou creat, creez 6 coloane noi
    for (let i = 0; i < 6; i++) {
        let newTd = document.createElement("td");
        newTr.append(newTd);
    }

    // Definesc fiecare coloana nou creata:
    // Column 1
    newTr.children[0].classList.add("productImage");
    let newImg = document.createElement("img");
    newImg.setAttribute("src", imgProduct);
    newTr.children[0].append(newImg);

    // Column 2
    newTr.children[1].classList.add("titleProductCart");
    let newH3 = document.createElement('h3');
    newH3.classList.add("productName");
    newH3.innerHTML = productTitle;
    newTr.children[1].append(newH3);
    let newP1 = document.createElement("p");
    newTr.children[1].append(newP1);
    newP1.innerHTML = "Cod produs: ";
    let newSpan1 = document.createElement("span");
    newSpan1.classList.add("productCode");
    newP1.append(newSpan1);
    newSpan1.innerHTML = spanTitleProduct;

    // Column 3
    let newP2 = document.createElement("p");
    newP2.classList.add("promoPrice");
    newP2.innerHTML = priceProduct;
    newTr.children[2].append(newP2);
    let newSpan2 = document.createElement("span");
    newP2.append(newSpan2);
    newSpan2.innerHTML = " " + spanCurrency;

    // Column 4
    newTr.children[3].classList.add("productAmount");
    let newInputNumber = document.createElement("input");
    newTr.children[3].append(newInputNumber);
    newInputNumber.setAttribute("type", "number");
    newInputNumber.setAttribute("min", "1");
    newInputNumber.setAttribute("max", "10");
    newInputNumber.classList.add("pA");
    newInputNumber.setAttribute("onchange", "calculateSubtotal(this)");
    newInputNumber.value = qntProduct;

    // Column 5
    let newP3 = document.createElement("p");
    newP3.classList.add("subtotalPrice");
    newP3.innerHTML = qntProduct * priceProduct + spanCurrency;
    newTr.children[4].append(newP3);

    // Column 6
    newTr.children[5].classList.add("deleteProductCart");
    let existingDeleteIcon = document.getElementsByClassName("fa fa-times-circle")[0];
    let newDeleteIcon = existingDeleteIcon.cloneNode(true);
    newTr.children[5].append(newDeleteIcon);

    console.log(parentTBody);
}

if (priceProduct == 875) {
    window.onload = addProductToCart();
}
