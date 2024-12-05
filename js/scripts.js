document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos antes de enviar.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            alert("Mensagem enviada com sucesso! Obrigado por entrar em contato.");
            form.reset(); // Reseta o formulário
        });
    }
});

// Função para validar o e-mail usando regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Animação ao rolar a página (scroll)
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("fade-in");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("Site Ajuda RS carregado com sucesso!");
});
