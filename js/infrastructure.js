// Info Infrastructure
document.getElementsByClassName('productName')[0].innerHTML = product1Infra.productName;
document.getElementsByClassName('productDescription')[0].innerHTML = product1Infra.productDescription;
document.getElementsByClassName('regularPrice')[0].innerHTML = product1Infra.regularPrice;
document.getElementsByClassName('promoPrice')[0].innerHTML = product1Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[0].innerHTML = "<img src=" + product1Infra.productImage + ">";

document.getElementsByClassName('productName')[1].innerHTML = product2Infra.productName;
document.getElementsByClassName('productDescription')[1].innerHTML = product2Infra.productDescription;
document.getElementsByClassName('regularPrice')[1].innerHTML = product2Infra.regularPrice;
document.getElementsByClassName('promoPrice')[1].innerHTML = product2Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[1].innerHTML = "<img src=" + product2Infra.productImage + ">";

document.getElementsByClassName('productName')[2].innerHTML = product3Infra.productName;
document.getElementsByClassName('productDescription')[2].innerHTML = product3Infra.productDescription;
document.getElementsByClassName('regularPrice')[2].innerHTML = product3Infra.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[2].innerHTML = product3Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[2].innerHTML = "<img src=" + product3Infra.productImage + ">";

document.getElementsByClassName('productName')[3].innerHTML = product4Infra.productName;
document.getElementsByClassName('productDescription')[3].innerHTML = product4Infra.productDescription;
document.getElementsByClassName('regularPrice')[3].innerHTML = product4Infra.regularPrice;
document.getElementsByClassName('promoPrice')[3].innerHTML = product4Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[3].innerHTML = "<img src=" + product4Infra.productImage + ">";

document.getElementsByClassName('productName')[4].innerHTML = product5Infra.productName;
document.getElementsByClassName('productDescription')[4].innerHTML = product5Infra.productDescription;
document.getElementsByClassName('regularPrice')[4].innerHTML = product5Infra.regularPrice;
document.getElementsByClassName('promoPrice')[4].innerHTML = product5Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[4].innerHTML = "<img src=" + product5Infra.productImage + ">";

document.getElementsByClassName('productName')[5].innerHTML = product6Infra.productName;
document.getElementsByClassName('productDescription')[5].innerHTML = product6Infra.productDescription;
document.getElementsByClassName('regularPrice')[5].innerHTML = product6Infra.regularPrice;
document.getElementsByClassName('promoPrice')[5].innerHTML = product6Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[5].innerHTML = "<img src=" + product6Infra.productImage + ">";

document.getElementsByClassName('productName')[6].innerHTML = product7Infra.productName;
document.getElementsByClassName('productDescription')[6].innerHTML = product7Infra.productDescription;
document.getElementsByClassName('regularPrice')[6].innerHTML = product7Infra.regularPrice;
document.getElementsByClassName('promoPrice')[6].innerHTML = product7Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[6].innerHTML = "<img src=" + product7Infra.productImage + ">";

document.getElementsByClassName('productName')[7].innerHTML = product8Infra.productName;
document.getElementsByClassName('productDescription')[7].innerHTML = product8Infra.productDescription;
document.getElementsByClassName('regularPrice')[7].innerHTML = product8Infra.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[7].innerHTML = product8Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[7].innerHTML = "<img src=" + product8Infra.productImage + ">";

document.getElementsByClassName('productName')[8].innerHTML = product9Infra.productName;
document.getElementsByClassName('productDescription')[8].innerHTML = product9Infra.productDescription;
document.getElementsByClassName('regularPrice')[8].innerHTML = product9Infra.regularPrice;
document.getElementsByClassName('promoPrice')[8].innerHTML = product9Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[8].innerHTML = "<img src=" + product9Infra.productImage + ">";

document.getElementsByClassName('productName')[9].innerHTML = product10Infra.productName;
document.getElementsByClassName('productDescription')[9].innerHTML = product10Infra.productDescription;
document.getElementsByClassName('regularPrice')[9].innerHTML = product10Infra.regularPrice;
document.getElementsByClassName('promoPrice')[9].innerHTML = product10Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[9].innerHTML = "<img src=" + product10Infra.productImage + ">";

// Filters
function selectAccessoryClass() {
    document.getElementsByClassName("diorama")[0].style = "display: none";
    document.getElementsByClassName("diorama")[1].style = "display: none";
    document.getElementsByClassName("diorama")[2].style = "display: none";
    document.getElementsByClassName("diorama")[3].style = "display: none";
    document.getElementsByClassName("diorama")[4].style = "display: none";
    document.getElementsByClassName("diorama")[5].style = "display: none";
}

function selectDioramaClass() {
    document.getElementsByClassName("accessory")[0].style = "display: none";
    document.getElementsByClassName("accessory")[1].style = "display: none";
    document.getElementsByClassName("accessory")[2].style = "display: none";
    document.getElementsByClassName("accessory")[3].style = "display: none";
}

function selectPackagedProduct() {
    document.getElementsByClassName("unpackedProduct")[0].style = "display: none";
    document.getElementsByClassName("unpackedProduct")[1].style = "display: none";
    document.getElementsByClassName("unpackedProduct")[2].style = "display: none";
    document.getElementsByClassName("unpackedProduct")[3].style = "display: none";
    document.getElementsByClassName("unpackedProduct")[4].style = "display: none";
    document.getElementsByClassName("unpackedProduct")[5].style = "display: none";
    document.getElementsByClassName("unpackedProduct")[6].style = "display: none";
}

function selectDamagedPackaging() {
    document.getElementsByClassName("packagedProduct")[0].style = "display: none";
    document.getElementsByClassName("packagedProduct")[1].style = "display: none";
    document.getElementsByClassName("packagedProduct")[2].style = "display: none";

    document.getElementsByClassName("unpackedProduct")[0].style = "display: none";
    document.getElementsByClassName("unpackedProduct")[1].style = "display: none";
    document.getElementsByClassName("unpackedProduct")[2].style = "display: none";
    document.getElementsByClassName("unpackedProduct")[3].style = "display: none";
    document.getElementsByClassName("unpackedProduct")[4].style = "display: none";
    document.getElementsByClassName("unpackedProduct")[5].style = "display: none";
    document.getElementsByClassName("unpackedProduct")[6].style = "display: none";
}

function selectUnpackedProduct() {
    document.getElementsByClassName("packagedProduct")[0].style = "display: none";
    document.getElementsByClassName("packagedProduct")[1].style = "display: none";
    document.getElementsByClassName("packagedProduct")[2].style = "display: none";
}

function selectPriceRange1() {
    document.getElementsByClassName("r2")[0].style = "display: none";
    document.getElementsByClassName("r2")[1].style = "display: none";
    document.getElementsByClassName("r2")[2].style = "display: none";
}

function selectPriceRange2() {
    document.getElementsByClassName("r1")[0].style = "display: none";
    document.getElementsByClassName("r1")[1].style = "display: none";
    document.getElementsByClassName("r1")[2].style = "display: none";
    document.getElementsByClassName("r1")[3].style = "display: none";
    document.getElementsByClassName("r1")[4].style = "display: none";
    document.getElementsByClassName("r1")[5].style = "display: none";
    document.getElementsByClassName("r1")[6].style = "display: none";
}

function selectPriceRange3() {
    document.getElementsByClassName("r1")[0].style = "display: none";
    document.getElementsByClassName("r1")[1].style = "display: none";
    document.getElementsByClassName("r1")[2].style = "display: none";
    document.getElementsByClassName("r1")[3].style = "display: none";
    document.getElementsByClassName("r1")[4].style = "display: none";
    document.getElementsByClassName("r1")[5].style = "display: none";
    document.getElementsByClassName("r1")[6].style = "display: none";

    document.getElementsByClassName("r2")[0].style = "display: none";
    document.getElementsByClassName("r2")[1].style = "display: none";
    document.getElementsByClassName("r2")[2].style = "display: none";
}

function selectPriceRange4() {
    document.getElementsByClassName("r1")[0].style = "display: none";
    document.getElementsByClassName("r1")[1].style = "display: none";
    document.getElementsByClassName("r1")[2].style = "display: none";
    document.getElementsByClassName("r1")[3].style = "display: none";
    document.getElementsByClassName("r1")[4].style = "display: none";
    document.getElementsByClassName("r1")[5].style = "display: none";
    document.getElementsByClassName("r1")[6].style = "display: none";

    document.getElementsByClassName("r2")[0].style = "display: none";
    document.getElementsByClassName("r2")[1].style = "display: none";
    document.getElementsByClassName("r2")[2].style = "display: none";
}

function selectPromoPrice() {
    document.getElementsByClassName("regular")[0].style = "display: none";
    document.getElementsByClassName("regular")[1].style = "display: none";
    document.getElementsByClassName("regular")[2].style = "display: none";
    document.getElementsByClassName("regular")[3].style = "display: none";
    document.getElementsByClassName("regular")[4].style = "display: none";
    document.getElementsByClassName("regular")[5].style = "display: none";
    document.getElementsByClassName("regular")[6].style = "display: none";
    document.getElementsByClassName("regular")[7].style = "display: none";
}

function resetFilter() {
    document.getElementsByClassName("diorama")[0].style = "display: flex";
    document.getElementsByClassName("diorama")[1].style = "display: flex";
    document.getElementsByClassName("diorama")[2].style = "display: flex";
    document.getElementsByClassName("diorama")[3].style = "display: flex";
    document.getElementsByClassName("diorama")[4].style = "display: flex";
    document.getElementsByClassName("diorama")[5].style = "display: flex";

    document.getElementsByClassName("accessory")[0].style = "display: flex";
    document.getElementsByClassName("accessory")[1].style = "display: flex";
    document.getElementsByClassName("accessory")[2].style = "display: flex";
    document.getElementsByClassName("accessory")[3].style = "display: flex";
}

function chooseFilter(param) {
    let parameter = parseInt(param.value);

    switch (parameter) {
        case 1:
            selectAccessoryClass();
            break;
        case 2:
            selectDioramaClass();
            break;
        case 3:
            selectPackagedProduct();
            break;
        case 4:
            selectDamagedPackaging();
            break;
        case 5:
            selectUnpackedProduct();
            break;
        case 6:
            selectPromoPrice();
            break;
        // case 7:

        //     break;
        // case 8:
        //     ;
        //     break;
        case 9:
            selectPriceRange1();
            break;
        case 10:
            selectPriceRange2();
            break;
        case 11:
            selectPriceRange3();
            break;
        case 12:
            selectPriceRange4();
            break;

        default:
            resetFilter();
            break;
    }
}