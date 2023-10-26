document.getElementsByClassName('productName')[0].innerHTML = product5Infra.productName;
document.getElementsByClassName('regularPrice')[0].innerHTML = product5Infra.regularPrice;
document.getElementsByClassName('promoPrice')[0].innerHTML = product5Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[0].innerHTML = "<img src=" + product5Infra.productImage + ">";
document.getElementsByClassName('productBrand')[0].innerHTML = product5Infra.productBrand;

document.getElementsByClassName('productName')[1].innerHTML = product5Wag.productName;
document.getElementsByClassName('regularPrice')[1].innerHTML = product5Wag.regularPrice;
document.getElementsByClassName('promoPrice')[1].innerHTML = product5Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[1].innerHTML = "<img src=" + product5Wag.productImage + ">";
document.getElementsByClassName('productBrand')[1].innerHTML = product5Wag.productBrand;

document.getElementsByClassName('productName')[2].innerHTML = product3Infra.productName;
document.getElementsByClassName('regularPrice')[2].innerHTML = product3Infra.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[2].innerHTML = product3Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[2].innerHTML = "<img src=" + product3Infra.productImage + ">";
document.getElementsByClassName('productBrand')[2].innerHTML = product3Infra.productBrand;

document.getElementsByClassName('productName')[3].innerHTML = product13Wag.productName;
document.getElementsByClassName('regularPrice')[3].innerHTML = product13Wag.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[3].innerHTML = product13Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[3].innerHTML = "<img src=" + product13Wag.productImage + ">";
document.getElementsByClassName('productBrand')[3].innerHTML = product13Wag.productBrand;

document.getElementsByClassName('productName')[4].innerHTML = product8Infra.productName;
document.getElementsByClassName('regularPrice')[4].innerHTML = product8Infra.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[4].innerHTML = product8Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[4].innerHTML = "<img src=" + product8Infra.productImage + ">";
document.getElementsByClassName('productBrand')[4].innerHTML = product8Infra.productBrand;

document.getElementsByClassName('productName')[5].innerHTML = product8Loco.productName;
document.getElementsByClassName('regularPrice')[5].innerHTML = product8Loco.regularPrice;
document.getElementsByClassName('promoPrice')[5].innerHTML = product8Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[5].innerHTML = "<img src=" + product8Loco.productImage + ">";
document.getElementsByClassName('productBrand')[5].innerHTML = product8Loco.productBrand;

document.getElementsByClassName('productName')[6].innerHTML = product7Wag.productName;
document.getElementsByClassName('regularPrice')[6].innerHTML = product7Wag.regularPrice;
document.getElementsByClassName('promoPrice')[6].innerHTML = product7Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[6].innerHTML = "<img src=" + product7Wag.productImage + ">";
document.getElementsByClassName('productBrand')[6].innerHTML = product7Wag.productBrand;

document.getElementsByClassName('productName')[7].innerHTML = product14Loco.productName;
document.getElementsByClassName('regularPrice')[7].innerHTML = product14Loco.regularPrice;
document.getElementsByClassName('promoPrice')[7].innerHTML = product14Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[7].innerHTML = "<img src=" + product14Loco.productImage + ">";
document.getElementsByClassName('productBrand')[7].innerHTML = product14Loco.productBrand;

document.getElementsByClassName('productName')[8].innerHTML = product4Loco.productName;
document.getElementsByClassName('regularPrice')[8].innerHTML = product4Loco.regularPrice;
document.getElementsByClassName('promoPrice')[8].innerHTML = product4Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[8].innerHTML = "<img src=" + product4Loco.productImage + ">";
document.getElementsByClassName('productBrand')[8].innerHTML = product4Loco.productBrand;

document.getElementsByClassName('productName')[9].innerHTML = product10Wag.productName;
document.getElementsByClassName('regularPrice')[9].innerHTML = product10Wag.regularPrice;
document.getElementsByClassName('promoPrice')[9].innerHTML = product10Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[9].innerHTML = "<img src=" + product10Wag.productImage + ">";
document.getElementsByClassName('productBrand')[9].innerHTML = product10Wag.productBrand;


function deleteProduct(product) {
    let result = confirm("Ștergeți produsul din lista de Favorite?");
    if (result === true) {
        let parentDiv = product.parentNode;
        parentDiv.remove();
        productCounter();
    }
}

function deleteAllProducts(button) {
    let result = confirm("Ștergeți toate produsele din lista de Favorite?");
    if (result === true) {
        let allProductsInFavorite = button.parentNode.nextElementSibling;
        allProductsInFavorite.remove();
        document.getElementById("titleFavorite").innerHTML = "Nu ai produse în lista de Favorite.";
        document.getElementsByClassName("contentPage")[0].style = "margin-bottom: 295px";
        document.getElementById("productsInFavorite1").innerHTML = "[" + 0 + "]";
    }
}

function productCounter() {
    let products = document.getElementsByClassName("infoProduct"); // array cu div-urile clasa infoProduct
    let productsCounter = 0;
    for (let i = 0; i < products.length; i++) {
        productsCounter = i + 1;
    }

    document.getElementById("productsInFavorite1").innerHTML = "[" + productsCounter + "]";
    document.getElementById("productsInFavorite2").innerHTML = "[" + productsCounter + " produse]";

    if (productsCounter == 0) {
        document.getElementById("titleFavorite").innerHTML = "Nu ai produse în lista de Favorite.";
        document.getElementsByClassName("contentPage")[0].style = "margin-bottom: 295px";
    }
}

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let imgProduct = urlParams.get("imageProduct")
let productTitle = urlParams.get("prodName");
let regularPriceProduct = urlParams.get("price1");
let promoPriceProduct = urlParams.get("price2");
let mainProductBrand = urlParams.get("mainBrand");

function addProductToFavorite() {
    let parentDiv = document.getElementById("favoriteSection");
    let newDiv1 = document.createElement("div");
    newDiv1.classList.add("infoProduct");
    parentDiv.append(newDiv1);

    let sourceIcon1 = document.getElementsByClassName("fa fa-trash-o")[0];
    let newIcon1 = sourceIcon1.cloneNode(true);
    newDiv1.append(newIcon1);

    let newAnchor1 = document.createElement("a");
    newDiv1.append(newAnchor1);
    newAnchor1.setAttribute("href", "productPage.html");
    newAnchor1.setAttribute("target", "_blank");

    let newDiv2 = document.createElement("div");
    newDiv2.classList.add("productImage");
    newAnchor1.append(newDiv2);
    let newImg = document.createElement("img");
    newImg.setAttribute("src", imgProduct);
    newDiv2.append(newImg);

    let newH4 = document.createElement("h4");
    newH4.classList.add("productName");
    newH4.innerHTML = productTitle;
    newDiv1.append(newH4);

    let newP1 = document.createElement("p");
    newP1.classList.add("regularPrice");
    newP1.innerHTML = regularPriceProduct;
    newDiv1.append(newP1);

    let newP2 = document.createElement("p");
    let newSpan = document.createElement("span");
    newSpan.classList.add("promoPrice");
    newSpan.innerHTML = promoPriceProduct;
    newP2.append(newSpan);
    // 
    let newAnchor2 = document.createElement("a");
    newP2.append(newAnchor2);
    newAnchor2.setAttribute("href", "myCart.html?imageProduct=assets/img/Locomotives/p1Loco.jpg&prodName=Locomotivă diesel DS 10&span1=Loco DS10&price=875&span2=Lei");
    let sourceIcon2 = document.getElementsByClassName("fa fa-shopping-cart")[1];
    let newIcon2 = sourceIcon2.cloneNode(true);
    newAnchor2.append(newIcon2);
    newDiv1.append(newP2);

    let newP3 = document.createElement("p");
    newP3.classList.add("productBrand");
    newP3.innerHTML = mainProductBrand;
    newDiv1.append(newP3);
    console.log(parentDiv);

    productCounter();
}



if (promoPriceProduct == "875Lei") {
    window.onload = addProductToFavorite();
}
