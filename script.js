document.addEventListener("DOMContentLoaded", function () {
    const showMessageButton = document.getElementById("showMessageButton");
    const messageParagraph = document.getElementById("message");

    showMessageButton.addEventListener("click", function () {
        messageParagraph.textContent = "Olá, meu nome é Arthur Acauan e este é um site simples criado com HTML, CSS e JavaScript!";
    });
});
