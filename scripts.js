const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
     event.preventDefault();

//Verifica se o nome está vazio
if (nameInput.value === "") {
    alert("Por favor, preencha o seu nome");
    return;

}
// Verificar se o e-mail está preenchido e se é valido
if(emailInput.value === "" , !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha o seu email");
    return;
}

// Verificar se a senha está preenchida
if(!validatePassword(passwordInput.value, 8)) {
alert("A senha precisa ter no minimo 8 digitos");
}

// Verificar se a situação foi selecionada
if (jobSelect.value === "") {
    alert("Por favor , selecione a sua situação")
}

// Verificar se a mensagem está preenchida
if(messageTextarea.value === "") {
    alert("Por favor, escreva uma mensagems")
    return;
}

// Se todos os campos estiverem corretamente preechidos, envie o form
form.submit();
});

// Função que valida e-mail
function isEmailValid(email) {
    
    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Za]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }
    
    return false;
}    

// Função que valida a senha
function validatePassword(password){
    let minDigits = 8;

    if(password.length >= minDigits) {
        // Senha válida
        return true
    }

    // Senha inválida
    return false
}

isEmailValid();
validatePassword();