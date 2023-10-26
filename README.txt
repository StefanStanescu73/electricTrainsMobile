Hello everyone!

This is my first front-end project.
The purpose of this project is not a commercial one but only for the implementation of HTML5, CSS3, and JavaScript knowledge
acquired during the Front-End Web Development course at STEP IT Romania Academy.
This version is for desktop, and @media screen and (max-width: 500px).

1. HTML pages:

1.1 index.html
1.2 promotions.html
1.3 locomotives.html
1.4 productPage.html
1.5 rating.html
1.6 wagons.html
1.7 infrastructure.html
1.8 createAccount.html
1.9 myAccount.html
1.10 favorite.html
1.11 myCart.html
1.12 checkout.html
1.13 orderCompletion.html
1.14 contact.html
1.15 aboutUs.html
1.16 orderProcessing.html
1.17 transportCosts.html - work in progress...
1.18 onlinePayment.html - work in progress...
1.19 termsAndConditions.html - work in progress...
1.20 cookiesPolicy.html - work in progress...
1.21 gdpr.html
1.22 returnPolicy.html - work in progress...

2. Intellectual property rights

The content of the ElectricTrainsSH.ro website, including images, web graphics, scripts, and software, is entirely the property
of Stanescu Stefan Cristian, and is protected by the Law on Copyright and Related Rights and the laws on intellectual and industrial property.
The use without Stanescu Stefan Cristian's consent of the elements listed above is punishable according to the legislation in force. 
The use on ElectricTrainsSH.ro of any registered brand name does not constitute advertising for the respective company.
ElectricTrainsSH.ro does not assume responsibility and cannot be blamed for any damage caused by the use of the site's content.

3. Functional elements in HTML pages

For all HTML pages:
In the header, the search box does not work, and the buttons are all functional. 
In the footer, the two buttons "About us" (Despre noi) and "Contact", and the social network icons are functional.  
Also, all links in the footer are functional (including those to our phone number and email address).

In the pages promotions.html (button "Promotii"), locomotives.html (button "Locomotive"), wagons.html (button "Vagoane"),
infrastructure.html (button "Infrastructura"), the filters are functional* (you can apply one filter at a time),
and the button "Resetare filtre" (for filter reset) is also functional.
* For the category "Produse" (Products), the filters "Pe stoc" (in stock) and "Lipsa stoc" (out of stock) are not functional.

From the locomotives.html page (button "Locomotive"), the product page (productPage.html) for "Locomotiva diesel DS 10" can be accessed
using the "Vezi detalii" (View details) button, and it can be added to the shopping cart by clicking on the cart icon.

From productPage.html, you can add the product to the shopping cart and to the page with favorite products.
For the shopping cart, you can choose any quantity, while for the favorites page, you have to choose one per quantity.
Also, here you can access the product review form or ask questions about the product by clicking on "Pune o intrebare"
(Ask a question) button. Being a front-end project, the question form has a set of three questions and three answers.

In the favorite.html page (button "Favorite"), you have the possibility to delete all products from your favorites list using the
"Sterge toate produsele" button (Delete all products), or you can delete one product at a time. 
In the list, there are ten products preset to which you can add one more from the product page. This can be further added to the
shopping cart.

In the myCart.html page (button "Coș"), you can change the order quantities of each product, add two discount codes (r10 and r15),
and delete products from the cart.
JavaScript functions automatically calculate the total order price without VAT, VAT, the order price with VAT, the discount amount,
and the total payment.
In the shopping cart, there are two default products, to which you can add one more from the product page. 
After adding the new product to the shopping cart, the number of ordered products is updated with the "Actualizeaza coșul" button.

Use the "Finalizare comanda" (checkout) button to complete your order. This will open the checkout.html page.

In order to submit your order, the checkout.html page requires you to fill in your billing and delivery details and to choose how you
would like your products delivered.
JavaScript functions automatically calculate the order price without VAT, VAT, the order price with VAT, the shipping cost, and the
total payment. The discount amount will be taken from the previous step. To send the order, check the checkbox "Validare comanda", and
use the "Trimite comanda" button.
Without this checkbox checked, you can't send the command.
A new page will open, and a message will inform you that your order has been completed. 
