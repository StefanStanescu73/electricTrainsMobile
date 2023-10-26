// let slides = document.getElementsByClassName("imageCarousel");
// sau
let slides = document.querySelectorAll(".imageCarousel");
// slides este un array cu toate imaginile din carusel

let lastIndex = slides.length - 1;
// console.log(lastIndex);  pozitia ultimului element din carusel(4)

// a poate primi valorile 1 sau -1(inainte/inapoi)
function changeSlide(a) {

    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("imageSelected") == true) {
            if (a == 1 && i != lastIndex) {

                slides[i].classList.remove("imageSelected");
                slides[i].classList.add("imageUnselected");
                slides[i + 1].classList.remove("imageUnselected");
                slides[i + 1].classList.add("imageSelected");
            } else if (a == 1 && i == lastIndex) {
                slides[0].classList.remove("imageUnselected");
                slides[0].classList.add("imageSelected");
                slides[1].classList.remove("imageSelected");
                slides[1].classList.add("imageUnselected");
                slides[2].classList.remove("imageSelected");
                slides[2].classList.add("imageUnselected");
                slides[3].classList.remove("imageSelected");
                slides[3].classList.add("imageUnselected");
                slides[4].classList.remove("imageSelected");
                slides[4].classList.add("imageUnselected");
            }

            if (a == -1 && i != 0) {

                slides[i].classList.remove("imageSelected");
                slides[i].classList.add("imageUnselected");
                slides[i - 1].classList.remove("imageUnselected");
                slides[i - 1].classList.add("imageSelected");
            } else if (a == -1 && i == 0) {
                slides[4].classList.remove("imageUnselected");
                slides[4].classList.add("imageSelected");
                slides[3].classList.remove("imageSelected");
                slides[3].classList.add("imageUnselected");
                slides[2].classList.remove("imageSelected");
                slides[2].classList.add("imageUnselected");
                slides[1].classList.remove("imageSelected");
                slides[1].classList.add("imageUnselected");
                slides[0].classList.remove("imageSelected");
                slides[0].classList.add("imageUnselected");
            }
            break;
        }
    }
    currentDotColor();
}


function selectSlide(n) {
    let currentSlide = n;
    switch (currentSlide) {
        case 1:
            slides[0].classList.remove("imageUnselected");
            slides[0].classList.add("imageSelected");
            slides[1].classList.remove("imageSelected");
            slides[1].classList.add("imageUnselected");
            slides[2].classList.remove("imageSelected");
            slides[2].classList.add("imageUnselected");
            slides[3].classList.remove("imageSelected");
            slides[3].classList.add("imageUnselected");
            slides[4].classList.remove("imageSelected");
            slides[4].classList.add("imageUnselected");
            break;

        case 2:
            slides[0].classList.remove("imageSelected");
            slides[0].classList.add("imageUnselected");
            slides[1].classList.remove("imageUnselected");
            slides[1].classList.add("imageSelected");
            slides[2].classList.remove("imageSelected");
            slides[2].classList.add("imageUnselected");
            slides[3].classList.remove("imageSelected");
            slides[3].classList.add("imageUnselected");
            slides[4].classList.remove("imageSelected");
            slides[4].classList.add("imageUnselected");
            break;
        case 3:
            slides[0].classList.remove("imageSelected");
            slides[0].classList.add("imageUnselected");
            slides[1].classList.remove("imageSelected");
            slides[1].classList.add("imageUnselected");
            slides[2].classList.remove("imageUnselected");
            slides[2].classList.add("imageSelected");
            slides[3].classList.remove("imageSelected");
            slides[3].classList.add("imageUnselected");
            slides[4].classList.remove("imageSelected");
            slides[4].classList.add("imageUnselected");
            break;
        case 4:
            slides[0].classList.remove("imageSelected");
            slides[0].classList.add("imageUnselected");
            slides[1].classList.remove("imageSelected");
            slides[1].classList.add("imageUnselected");
            slides[2].classList.remove("imageSelected");
            slides[2].classList.add("imageUnselected");
            slides[3].classList.remove("imageUnselected");
            slides[3].classList.add("imageSelected");
            slides[4].classList.remove("imageSelected");
            slides[4].classList.add("imageUnselected");
            break;
        case 5:
            slides[0].classList.remove("imageSelected");
            slides[0].classList.add("imageUnselected");
            slides[1].classList.remove("imageSelected");
            slides[1].classList.add("imageUnselected");
            slides[2].classList.remove("imageSelected");
            slides[2].classList.add("imageUnselected");
            slides[3].classList.remove("imageSelected");
            slides[3].classList.add("imageUnselected");
            slides[4].classList.remove("imageUnselected");
            slides[4].classList.add("imageSelected");
            break;
    }

    currentDotColor();
}

function currentDotColor() {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("imageSelected") == true) {
            document.getElementsByClassName("dot")[i].style = "color: #003190 ; background-color: #003190";
        } else {
            document.getElementsByClassName("dot")[i].style = "color: #3871e2 ; background-color: #3871e2";
        }
    }
}

let myInterval = setInterval(function () {
    changeSlide(1);
}, 3000)


function pauseCarousel() {
    clearInterval(myInterval);
}

function restartCarousel() {
    myInterval = setInterval(function () {
        changeSlide(1);
    }, 3000)
}


// Section Promotions
document.getElementsByClassName('productName')[0].innerHTML = product1Loco.productName;
document.getElementsByClassName('productDescription')[0].innerHTML = product1Loco.productDescription;
document.getElementsByClassName('regularPrice')[0].innerHTML = product1Loco.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[0].innerHTML = product1Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[1].innerHTML = "<img src=" + product1Loco.productImage + ">";

document.getElementsByClassName('productName')[1].innerHTML = product2Loco.productName;
document.getElementsByClassName('productDescription')[1].innerHTML = product2Loco.productDescription;
document.getElementsByClassName('regularPrice')[1].innerHTML = product2Loco.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[1].innerHTML = product2Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[1].innerHTML = "<img src=" + product2Loco.productImage + ">";

document.getElementsByClassName('productName')[2].innerHTML = product3Infra.productName;
document.getElementsByClassName('productDescription')[2].innerHTML = product3Infra.productDescription;
document.getElementsByClassName('regularPrice')[2].innerHTML = product3Infra.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[2].innerHTML = product3Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[2].innerHTML = "<img src=" + product3Infra.productImage + ">";

document.getElementsByClassName('productName')[3].innerHTML = product1Wag.productName;
document.getElementsByClassName('productDescription')[3].innerHTML = product1Wag.productDescription;
document.getElementsByClassName('regularPrice')[3].innerHTML = product1Wag.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[3].innerHTML = product1Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[3].innerHTML = "<img src=" + product1Wag.productImage + ">";

document.getElementsByClassName('productName')[4].innerHTML = product2Wag.productName;
document.getElementsByClassName('productDescription')[4].innerHTML = product2Wag.productDescription;
document.getElementsByClassName('regularPrice')[4].innerHTML = product2Wag.regularPrice + " Lei";
document.getElementsByClassName('promoPrice')[4].innerHTML = product2Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[4].innerHTML = "<img src=" + product2Wag.productImage + ">";


// Section Locomotives
document.getElementsByClassName('productName')[5].innerHTML = product8Loco.productName;
document.getElementsByClassName('productDescription')[5].innerHTML = product8Loco.productDescription;
document.getElementsByClassName('regularPrice')[5].innerHTML = product8Loco.regularPrice;
document.getElementsByClassName('promoPrice')[5].innerHTML = product8Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[5].innerHTML = "<img src=" + product8Loco.productImage + ">";

document.getElementsByClassName('productName')[6].innerHTML = product9Loco.productName;
document.getElementsByClassName('productDescription')[6].innerHTML = product9Loco.productDescription;
document.getElementsByClassName('regularPrice')[6].innerHTML = product9Loco.regularPrice;
document.getElementsByClassName('promoPrice')[6].innerHTML = product9Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[6].innerHTML = "<img src=" + product9Loco.productImage + ">";

document.getElementsByClassName('productName')[7].innerHTML = product14Loco.productName;
document.getElementsByClassName('productDescription')[7].innerHTML = product14Loco.productDescription;
document.getElementsByClassName('regularPrice')[7].innerHTML = product14Loco.regularPrice;
document.getElementsByClassName('promoPrice')[7].innerHTML = product14Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[7].innerHTML = "<img src=" + product14Loco.productImage + ">";

document.getElementsByClassName('productName')[8].innerHTML = product4Loco.productName;
document.getElementsByClassName('productDescription')[8].innerHTML = product4Loco.productDescription;
document.getElementsByClassName('regularPrice')[8].innerHTML = product4Loco.regularPrice;
document.getElementsByClassName('promoPrice')[8].innerHTML = product4Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[8].innerHTML = "<img src=" + product4Loco.productImage + ">";

document.getElementsByClassName('productName')[9].innerHTML = product5Loco.productName;
document.getElementsByClassName('productDescription')[9].innerHTML = product5Loco.productDescription;
document.getElementsByClassName('regularPrice')[9].innerHTML = product5Loco.regularPrice;
document.getElementsByClassName('promoPrice')[9].innerHTML = product5Loco.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[9].innerHTML = "<img src=" + product5Loco.productImage + ">";


// Section Wagons
document.getElementsByClassName('productName')[10].innerHTML = product6Wag.productName;
document.getElementsByClassName('productDescription')[10].innerHTML = product6Wag.productDescription;
document.getElementsByClassName('regularPrice')[10].innerHTML = product6Wag.regularPrice;
document.getElementsByClassName('promoPrice')[10].innerHTML = product6Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[10].innerHTML = "<img src=" + product6Wag.productImage + ">";

document.getElementsByClassName('productName')[11].innerHTML = product7Wag.productName;
document.getElementsByClassName('productDescription')[11].innerHTML = product7Wag.productDescription;
document.getElementsByClassName('regularPrice')[11].innerHTML = product7Wag.regularPrice;
document.getElementsByClassName('promoPrice')[11].innerHTML = product7Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[11].innerHTML = "<img src=" + product7Wag.productImage + ">";

document.getElementsByClassName('productName')[12].innerHTML = product8Wag.productName;
document.getElementsByClassName('productDescription')[12].innerHTML = product8Wag.productDescription;
document.getElementsByClassName('regularPrice')[12].innerHTML = product8Wag.regularPrice;
document.getElementsByClassName('promoPrice')[12].innerHTML = product8Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[12].innerHTML = "<img src=" + product8Wag.productImage + ">";

document.getElementsByClassName('productName')[13].innerHTML = product4Wag.productName;
document.getElementsByClassName('productDescription')[13].innerHTML = product4Wag.productDescription;
document.getElementsByClassName('regularPrice')[13].innerHTML = product4Wag.regularPrice;
document.getElementsByClassName('promoPrice')[13].innerHTML = product4Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[13].innerHTML = "<img src=" + product4Wag.productImage + ">";

document.getElementsByClassName('productName')[14].innerHTML = product5Wag.productName;
document.getElementsByClassName('productDescription')[14].innerHTML = product5Wag.productDescription;
document.getElementsByClassName('regularPrice')[14].innerHTML = product5Wag.regularPrice;
document.getElementsByClassName('promoPrice')[14].innerHTML = product5Wag.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[14].innerHTML = "<img src=" + product5Wag.productImage + ">";


// Section infrastructure
document.getElementsByClassName('productName')[15].innerHTML = product1Infra.productName;
document.getElementsByClassName('productDescription')[15].innerHTML = product1Infra.productDescription;
document.getElementsByClassName('regularPrice')[15].innerHTML = product1Infra.regularPrice;
document.getElementsByClassName('promoPrice')[15].innerHTML = product1Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[15].innerHTML = "<img src=" + product1Infra.productImage + ">";

document.getElementsByClassName('productName')[16].innerHTML = product2Infra.productName;
document.getElementsByClassName('productDescription')[16].innerHTML = product2Infra.productDescription;
document.getElementsByClassName('regularPrice')[16].innerHTML = product2Infra.regularPrice;
document.getElementsByClassName('promoPrice')[16].innerHTML = product2Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[16].innerHTML = "<img src=" + product2Infra.productImage + ">";

document.getElementsByClassName('productName')[17].innerHTML = product10Infra.productName;
document.getElementsByClassName('productDescription')[17].innerHTML = product10Infra.productDescription;
document.getElementsByClassName('regularPrice')[17].innerHTML = product10Infra.regularPrice;
document.getElementsByClassName('promoPrice')[17].innerHTML = product10Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[17].innerHTML = "<img src=" + product10Infra.productImage + ">";

document.getElementsByClassName('productName')[18].innerHTML = product4Infra.productName;
document.getElementsByClassName('productDescription')[18].innerHTML = product4Infra.productDescription;
document.getElementsByClassName('regularPrice')[18].innerHTML = product4Infra.regularPrice;
document.getElementsByClassName('promoPrice')[18].innerHTML = product4Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[18].innerHTML = "<img src=" + product4Infra.productImage + ">";

document.getElementsByClassName('productName')[19].innerHTML = product5Infra.productName;
document.getElementsByClassName('productDescription')[19].innerHTML = product5Infra.productDescription;
document.getElementsByClassName('regularPrice')[19].innerHTML = product5Infra.regularPrice;
document.getElementsByClassName('promoPrice')[19].innerHTML = product5Infra.promoPrice + " Lei";
// document.getElementsByClassName('productImage')[19].innerHTML = "<img src=" + product5Infra.productImage + ">";
