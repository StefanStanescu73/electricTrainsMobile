function showForm() {
    document.getElementById("questionsForm").style = "display: block";
    let newBtnFunction = document.getElementById("switch").innerHTML;
    document.getElementById("switch").innerHTML = "Ascunde formular";

    if (newBtnFunction === "Ascunde formular") {
        hideForm();
        document.getElementById("switch").innerHTML = "Pune o întrebare";
    }
}

function hideForm() {
    document.getElementById("questionsForm").style = "display: none";
}

function sendQuestion() {
    document.getElementById("userQuestions").style = "display:block";
    document.getElementById("questionsForm").style = "display: none";
    document.getElementById("switch").innerHTML = "Pune o întrebare";

    // Creare dinamica bloc(div) intrebari si raspunsuri 
    let parentDiv = document.getElementById("userQuestions");
    let newBtn = document.createElement("button");
    newBtn.classList.add("questionStyle");
    parentDiv.append(newBtn);
    let newDiv = document.createElement("div");
    newDiv.classList.add("panel");
    parentDiv.append(newDiv);
    for (let i = 0; i < 3; i++) {
        let newPForm = document.createElement("p");
        newDiv.append(newPForm);
    }

    // Captarea valorilor din input-uri si asignarea lor in variabile
    let userLastName = document.getElementById("lastName").value;
    let userFirstName = document.getElementById("firstName").value;
    let userContentQuestion = document.getElementById("contentQuestion").value;
    // In butonul creat(newBtn) afisez dinamic intrebarea de la utilizator
    newBtn.innerHTML = userContentQuestion;

    // Primul p din newDiv va primi dinamic numele utilizatorului
    newDiv.children[0].innerHTML = "<strong>" + "Nume utilizator: " + "</strong>" + userLastName;
    // Al doilea p din newDiv va primi dinamic prenumele utilizatorului
    newDiv.children[1].innerHTML = "<strong>" + "Prenume utilizator: " + "</strong>" + userFirstName;
    // In al treilea p din newDiv se va afisa raspunsul la intrebarea utilizatorului(pentru exemplificare am presetat 3 perechi intrebare/raspuns)

    if (userContentQuestion === "Când revine produsul pe stoc?") {
        newDiv.children[2].innerHTML = "<strong>" + "Răspuns consultant site: " + "</strong>" + "Produsul va intra pe stoc în două săptămâni.";
    } else if (userContentQuestion === "Produsul va avea același preț?") {
        newDiv.children[2].innerHTML = "<strong>" + "Răspuns consultant site: " + "</strong>" + "Nu, prețul va fi puțin mai mare.";
    } else if (userContentQuestion === "Puteți aduce și piese de schimb pentru acest model?") {
        newDiv.children[2].innerHTML = "<strong>" + "Răspuns consultant site: " + "</strong>" + "Da, dar doar cu precomandă.";
    }

    console.log(parentDiv);
}

// este chemata la onchange pe input-ul pentru cantitatea comandata
function orderQuantity() {
    let qnt = document.getElementById("quantity").value; //in qnt asignez val.din inputul pt.cant.comandata cu id quantity 
    localStorage.setItem("orderQuantity", qnt); // salvez ultima valoare din input in memoria locala
    console.log(qnt);
}		