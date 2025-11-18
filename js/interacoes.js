// aumenta a imagem  e a deixa transparente ao passar o mouse

const imagem = document.querySelector("#imgPrincipal");

if (imagem) {
  imagem.onmouseover = function () {
    imagem.style.opacity = "0.7";
    imagem.style.transform = "scale(1.05)";
    imagem.style.transition = "all 0.3s ease";
  };

  imagem.onmouseout = function () {
    imagem.style.opacity = "1";
    imagem.style.transform = "scale(1)";
  };
}

// saudação ao cliente ao digitar o nome

const campo = document.querySelector("#nomeCliente");
const mensagem = document.querySelector("#mensagemBoasVindas");

if (campo && mensagem) {
  campo.oninput = function () {
    if (campo.value.trim() !== "") {
      mensagem.innerHTML = "Olá, " + campo.value + "! Seja bem-vindo(a)...";
    } else {
      mensagem.innerHTML = "";
    }
  };
}
