//Promotions
document.getElementsByClassName('productName')[0].innerHTML = product1Loco.productName;
document.getElementsByClassName('productDescription')[0].innerHTML = product1Loco.productDescription;
document.getElementsByClassName('regularPrice')[0].innerHTML = product1Loco.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[0].innerHTML = product1Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[0].innerHTML = "<img src=" + product1Loco.productImage + ">";

document.getElementsByClassName('productName')[1].innerHTML = product1Wag.productName;
document.getElementsByClassName('productDescription')[1].innerHTML = product1Wag.productDescription;
document.getElementsByClassName('regularPrice')[1].innerHTML = product1Wag.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[1].innerHTML = product1Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[1].innerHTML = "<img src=" + product1Wag.productImage + ">";

document.getElementsByClassName('productName')[2].innerHTML = product3Infra.productName;
document.getElementsByClassName('productDescription')[2].innerHTML = product3Infra.productDescription;
document.getElementsByClassName('regularPrice')[2].innerHTML = product3Infra.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[2].innerHTML = product3Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[2].innerHTML = "<img src=" + product3Infra.productImage + ">";

document.getElementsByClassName('productName')[3].innerHTML = product2Loco.productName;
document.getElementsByClassName('productDescription')[3].innerHTML = product2Loco.productDescription;
document.getElementsByClassName('regularPrice')[3].innerHTML = product2Loco.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[3].innerHTML = product2Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[3].innerHTML = "<img src=" + product2Loco.productImage + ">";

document.getElementsByClassName('productName')[4].innerHTML = product2Wag.productName;
document.getElementsByClassName('productDescription')[4].innerHTML = product2Wag.productDescription;
document.getElementsByClassName('regularPrice')[4].innerHTML = product2Wag.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[4].innerHTML = product2Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[4].innerHTML = "<img src=" + product2Wag.productImage + ">";

document.getElementsByClassName('productName')[5].innerHTML = product3Loco.productName;
document.getElementsByClassName('productDescription')[5].innerHTML = product3Loco.productDescription;
document.getElementsByClassName('regularPrice')[5].innerHTML = product3Loco.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[5].innerHTML = product3Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[5].innerHTML = "<img src=" + product3Loco.productImage + ">";

document.getElementsByClassName('productName')[6].innerHTML = product3Wag.productName;
document.getElementsByClassName('productDescription')[6].innerHTML = product3Wag.productDescription;
document.getElementsByClassName('regularPrice')[6].innerHTML = product3Wag.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[6].innerHTML = product3Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[6].innerHTML = "<img src=" + product3Wag.productImage + ">";

document.getElementsByClassName('productName')[7].innerHTML = product8Infra.productName;
document.getElementsByClassName('productDescription')[7].innerHTML = product8Infra.productDescription;
document.getElementsByClassName('regularPrice')[7].innerHTML = product8Infra.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[7].innerHTML = product8Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[7].innerHTML = "<img src=" + product8Infra.productImage + ">";

document.getElementsByClassName('productName')[8].innerHTML = product15Loco.productName;
document.getElementsByClassName('productDescription')[8].innerHTML = product15Loco.productDescription;
document.getElementsByClassName('regularPrice')[8].innerHTML = product15Loco.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[8].innerHTML = product15Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[8].innerHTML = "<img src=" + product15Loco.productImage + ">";

document.getElementsByClassName('productName')[9].innerHTML = product13Wag.productName;
document.getElementsByClassName('productDescription')[9].innerHTML = product13Wag.productDescription;
document.getElementsByClassName('regularPrice')[9].innerHTML = product13Wag.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[9].innerHTML = product13Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[9].innerHTML = "<img src=" + product13Wag.productImage + ">";

// Filters
function selectLocomotives() {
    document.getElementsByClassName("wag")[0].style = "display: none";
    document.getElementsByClassName("wag")[1].style = "display: none";
    document.getElementsByClassName("wag")[2].style = "display: none";
    document.getElementsByClassName("wag")[3].style = "display: none";

    document.getElementsByClassName("infra")[0].style = "display: none";
    document.getElementsByClassName("infra")[1].style = "display: none";
}

function selectWagons() {
    document.getElementsByClassName("loco")[0].style = "display: none";
    document.getElementsByClassName("loco")[1].style = "display: none";
    document.getElementsByClassName("loco")[2].style = "display: none";
    document.getElementsByClassName("loco")[3].style = "display: none";

    document.getElementsByClassName("infra")[0].style = "display: none";
    document.getElementsByClassName("infra")[1].style = "display: none";
}

function selectInfrastructure() {
    document.getElementsByClassName("loco")[0].style = "display: none";
    document.getElementsByClassName("loco")[1].style = "display: none";
    document.getElementsByClassName("loco")[2].style = "display: none";
    document.getElementsByClassName("loco")[3].style = "display: none";

    document.getElementsByClassName("wag")[0].style = "display: none";
    document.getElementsByClassName("wag")[1].style = "display: none";
    document.getElementsByClassName("wag")[2].style = "display: none";
    document.getElementsByClassName("wag")[3].style = "display: none";

}

function selectPackagedProduct() {
    document.getElementsByClassName("unpackedProduct")[0].style = "display: none";

    document.getElementsByClassName("damagedPackaging")[0].style = "display: none";
    document.getElementsByClassName("damagedPackaging")[1].style = "display: none";
    document.getElementsByClassName("damagedPackaging")[2].style = "display: none";
    document.getElementsByClassName("damagedPackaging")[3].style = "display: none";
}

function selectDamagedPackaging() {
    document.getElementsByClassName("packagedProduct")[0].style = "display: none";
    document.getElementsByClassName("packagedProduct")[1].style = "display: none";
    document.getElementsByClassName("packagedProduct")[2].style = "display: none";
    document.getElementsByClassName("packagedProduct")[3].style = "display: none";
    document.getElementsByClassName("packagedProduct")[4].style = "display: none";

    document.getElementsByClassName("unpackedProduct")[0].style = "display: none";
}

function selectUnpackedProduct() {
    document.getElementsByClassName("packagedProduct")[0].style = "display: none";
    document.getElementsByClassName("packagedProduct")[1].style = "display: none";
    document.getElementsByClassName("packagedProduct")[2].style = "display: none";
    document.getElementsByClassName("packagedProduct")[3].style = "display: none";
    document.getElementsByClassName("packagedProduct")[4].style = "display: none";

    document.getElementsByClassName("damagedPackaging")[0].style = "display: none";
    document.getElementsByClassName("damagedPackaging")[1].style = "display: none";
    document.getElementsByClassName("damagedPackaging")[2].style = "display: none";
    document.getElementsByClassName("damagedPackaging")[3].style = "display: none";
}

function selectPriceRange1() {
    document.getElementsByClassName("r2")[0].style = "display: none";

    document.getElementsByClassName("r3")[0].style = "display: none";
    document.getElementsByClassName("r3")[1].style = "display: none";
    document.getElementsByClassName("r3")[2].style = "display: none";
    document.getElementsByClassName("r3")[3].style = "display: none";
    document.getElementsByClassName("r3")[4].style = "display: none";
    document.getElementsByClassName("r3")[5].style = "display: none";
    document.getElementsByClassName("r3")[6].style = "display: none";
}

function selectPriceRange2() {
    document.getElementsByClassName("r1")[0].style = "display: none";
    document.getElementsByClassName("r1")[1].style = "display: none";

    document.getElementsByClassName("r3")[0].style = "display: none";
    document.getElementsByClassName("r3")[1].style = "display: none";
    document.getElementsByClassName("r3")[2].style = "display: none";
    document.getElementsByClassName("r3")[3].style = "display: none";
    document.getElementsByClassName("r3")[4].style = "display: none";
    document.getElementsByClassName("r3")[5].style = "display: none";
    document.getElementsByClassName("r3")[6].style = "display: none";
}

function selectPriceRange3() {
    document.getElementsByClassName("r1")[0].style = "display: none";
    document.getElementsByClassName("r1")[1].style = "display: none";

    document.getElementsByClassName("r2")[0].style = "display: none";
}

function selectPriceRange4() {
    document.getElementsByClassName("r1")[0].style = "display: none";
    document.getElementsByClassName("r1")[1].style = "display: none";

    document.getElementsByClassName("r2")[0].style = "display: none";

    document.getElementsByClassName("r3")[0].style = "display: none";
    document.getElementsByClassName("r3")[1].style = "display: none";
    document.getElementsByClassName("r3")[2].style = "display: none";
    document.getElementsByClassName("r3")[3].style = "display: none";
    document.getElementsByClassName("r3")[4].style = "display: none";
    document.getElementsByClassName("r3")[5].style = "display: none";
    document.getElementsByClassName("r3")[6].style = "display: none";
}

function resetFilter() {
    document.getElementsByClassName("loco")[0].style = "display: flex";
    document.getElementsByClassName("loco")[1].style = "display: flex";
    document.getElementsByClassName("loco")[2].style = "display: flex";
    document.getElementsByClassName("loco")[3].style = "display: flex";

    document.getElementsByClassName("wag")[0].style = "display: flex";
    document.getElementsByClassName("wag")[1].style = "display: flex";
    document.getElementsByClassName("wag")[2].style = "display: flex";
    document.getElementsByClassName("wag")[3].style = "display: flex";

    document.getElementsByClassName("infra")[0].style = "display: flex";
    document.getElementsByClassName("infra")[1].style = "display: flex";
}

function chooseFilter(param) {
    let parameter = parseInt(param.value);

    switch (parameter) {
        case 1:
            selectLocomotives();
            break;
        case 2:
            selectWagons();
            break;
        case 3:
            selectInfrastructure();
            break;
        case 4:
            selectPackagedProduct();
            break;
        case 5:
            selectDamagedPackaging();
            break;
        case 6:
            selectUnpackedProduct();
            break;
        // case 7:
        //     
        //     break;
        // case 8:
        //     
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