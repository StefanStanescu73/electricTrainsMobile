function createPassword() {
    let password1 = document.getElementById("createPass").value;
    let password2 = document.getElementById("confirmPass").value;

    if (password1 == '' && password2 == '') {
        alert("Nu ați completat toate câmpurile!");
    } else if (password1 == password2) {
        alert("Cont creat cu succes! ");
    } else {
        alert('Parola din cele doua câmpuri, "Parola" si "Confirmă parola", trebuie sa fie identice!');
    }
}