class Product {
    constructor(_productName, _productDescription, _regularPrice, _promoPrice, _productImage, _productBrand, _productCode) {
        this.productName = _productName;
        this.productDescription = _productDescription;
        this.regularPrice = _regularPrice;
        this.promoPrice = _promoPrice;
        this.productImage = _productImage;
        this.productBrand = _productBrand;
        this.productCode = _productCode;
    }
}


// Locomotives
let product1Loco = new Product('Locomotivă diesel DS 10', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', 950, 875, "<img src='assets/img/locomotives/p1Loco.jpg'/>", 'Berliner TT Bahnen');
let product2Loco = new Product('Locomotivă cu abur AB 10', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', 950, 900, 'assets/img/locomotives/p2Loco.jpg', 'Berliner TT Bahnen');
let product3Loco = new Product('Locomotivă diesel DS 20', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', 950, 900, 'assets/img/locomotives/p3Loco.jpg', 'Berliner TT Bahnen');
let product4Loco = new Product('Locomotivă electrică EL 10 ', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 1050, 'assets/img/locomotives/p4Loco.jpg', 'Berliner TT Bahnen', 'Loco EL10');
let product5Loco = new Product('Locomotivă diesel DS 30', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 500, 'assets/img/locomotives/p5Loco.jpg', 'Berliner TT Bahnen');

let product6Loco = new Product('Locomotivă diesel DS 40', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 975, 'assets/img/locomotives/p6Loco.jpg', 'Berliner TT Bahnen');
let product7Loco = new Product('Locomotivă electrică EL 20', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 725, 'assets/img/locomotives/p7Loco.jpg', 'Berliner TT Bahnen');
let product8Loco = new Product('Locomotivă cu abur AB 20', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 1500, 'assets/img/locomotives/p8Loco.jpg', 'Berliner TT Bahnen');
let product9Loco = new Product('Locomotivă diesel DS 50', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 1100, 'assets/img/locomotives/p9Loco.jpg', 'Berliner TT Bahnen');
let product10Loco = new Product('Locomotivă electrică EL 30', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 1050, 'assets/img/locomotives/p10Loco.jpg', 'Berliner TT Bahnen');

let product11Loco = new Product('Locomotivă diesel DS 60', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 975, 'assets/img/locomotives/p11Loco.jpg', 'Berliner TT Bahnen');
let product12Loco = new Product('Locomotivă cu abur AB 30', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 950, 'assets/img/locomotives/p12Loco.jpg', 'Berliner TT Bahnen');
let product13Loco = new Product('Automotor diesel DS 70', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 1400, 'assets/img/locomotives/p13Loco.jpg', 'Berliner TT Bahnen');
let product14Loco = new Product('Locomotivă electrică EL 40', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 1500, 'assets/img/locomotives/p14Loco.jpg', 'Berliner TT Bahnen');
let product15Loco = new Product('Locomotivă diesel DS 80', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', 950, 900, 'assets/img/locomotives/p15Loco.jpg', 'Berliner TT Bahnen');

// Wagons
let product1Wag = new Product('Vagon călători CL 10', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', 650, 600, 'assets/img/wagons/p1wag.jpg', 'Berliner TT Bahnen');
let product2Wag = new Product('Vagon transport lemne MF 10', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', 550, 500, 'assets/img/wagons/p2wag.jpg', 'Berliner TT Bahnen');
let product3Wag = new Product('Vagon containere MF 20', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', 750, 650, 'assets/img/wagons/p3wag.jpg', 'Berliner TT Bahnen');
let product4Wag = new Product('Vagon tr.camioane MF 30 ', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 750, 'assets/img/wagons/p4wag.jpg', 'Berliner TT Bahnen');
let product5Wag = new Product('Vagon cisternă FINA MF 40', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 800, 'assets/img/wagons/p5wag.jpg', 'Berliner TT Bahnen');

let product6Wag = new Product('Vagon tr.cărbuni MF 50', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 825, 'assets/img/wagons/p6wag.jpg', 'Berliner TT Bahnen');
let product7Wag = new Product('Vagon containere MF 60', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 750, 'assets/img/wagons/p7wag.jpg', 'Berliner TT Bahnen');
let product8Wag = new Product('Vagon călători CL 20', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 650, 'assets/img/wagons/p8wag.jpg', 'Berliner TT Bahnen');
let product9Wag = new Product('Vagon marfă MF 70', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 500, 'assets/img/wagons/p9wag.jpg', 'Berliner TT Bahnen');
let product10Wag = new Product('Vagon bere "Carlsberg" MF 80', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 650, 'assets/img/wagons/p10wag.jpg', 'Berliner TT Bahnen');

let product11Wag = new Product('Vagon călători CL 30', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 650, 'assets/img/wagons/p11wag.jpg', 'Berliner TT Bahnen');
let product12Wag = new Product('Vagon marfă "BB" MF 90', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 650, 'assets/img/wagons/p12wag.jpg', 'Berliner TT Bahnen');
let product13Wag = new Product('Vagon transport ciment MF 100', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', 650, 575, 'assets/img/wagons/p13wag.jpg', 'Berliner TT Bahnen');
let product14Wag = new Product('Vagon poștă MF 110', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 850, 'assets/img/wagons/p14wag.jpg', 'Berliner TT Bahnen');
let product15Wag = new Product('Vagon cisternă MF 120', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 800, 'assets/img/wagons/p15wag.jpg', 'Berliner TT Bahnen');

// Infrastructure
let product1Infra = new Product('Macaz curb dreapta', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 50, 'assets/img/infrastructure/p1Infra.jpg', 'Berliner TT Bahnen');
let product2Infra = new Product('Șină dreaptă scurtă', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 25, 'assets/img/infrastructure/p2Infra.jpg', 'Berliner TT Bahnen');
let product3Infra = new Product('Set șase brazi', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', 60, 50, 'assets/img/infrastructure/p3Infra.jpg', 'Berliner TT Bahnen', 'Infra IF03');
let product4Infra = new Product('Capăt șină', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 45, 'assets/img/infrastructure/p4Infra.jpg', 'Berliner TT Bahnen');
let product5Infra = new Product('Gară călători', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 150, 'assets/img/infrastructure/p5Infra.jpg', 'Berliner TT Bahnen');

let product6Infra = new Product('Machetă TIR scara 1:120', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 50, 'assets/img/infrastructure/p6Infra.jpg', 'Berliner TT Bahnen');
let product7Infra = new Product('Pod', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 75, 'assets/img/infrastructure/p7Infra.jpg', 'Berliner TT Bahnen');
let product8Infra = new Product('Set șase figurine', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', 60, 50, 'assets/img/infrastructure/p8Infra.jpg', 'Berliner TT Bahnen');
let product9Infra = new Product('Șină curbă scurtă', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 25, 'assets/img/infrastructure/p9Infra.jpg', 'Berliner TT Bahnen');
let product10Infra = new Product('Post CFR', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', " ", 100, 'assets/img/infrastructure/p10Infra.jpg', 'Berliner TT Bahnen');