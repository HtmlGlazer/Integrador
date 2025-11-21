// Aumenta a imagem e a deixa transparente ao passar o mouse
const imagem = document.querySelector("#imgPrincipal");

if (imagem) {
  imagem.addEventListener("mouseenter", function () {
    imagem.style.opacity = "0.7";
    imagem.style.transform = "scale(1.05)";
    imagem.style.transition = "all 0.3s ease";
  });

  imagem.addEventListener("mouseleave", function () {
    imagem.style.opacity = "1";
    imagem.style.transform = "scale(1)";
  });

  // Acessibilidade: suporte para teclado (focus/blur)
  imagem.addEventListener("focus", function () {
    imagem.style.opacity = "0.7";
    imagem.style.transform = "scale(1.05)";
    imagem.style.transition = "all 0.3s ease";
  });

  imagem.addEventListener("blur", function () {
    imagem.style.opacity = "1";
    imagem.style.transform = "scale(1)";
  });
}

// Saudação ao cliente ao digitar o nome
const campo = document.querySelector("#nomeCliente");
const mensagem = document.querySelector("#mensagemBoasVindas");

if (campo && mensagem) {
  // Adiciona atributo ARIA para leitores de tela
  mensagem.setAttribute("aria-live", "polite");
  mensagem.setAttribute("role", "status");

  campo.addEventListener("input", function () {
    const nome = campo.value.trim();

    if (nome !== "") {
      mensagem.textContent = `Olá, ${nome}! Seja bem-vindo(a)...`;
    } else {
      mensagem.textContent = "";
    }
  });
}

// Gerenciamento do menu hambúrguer com acessibilidade
const menuToggle = document.querySelector("#menu_toggle");
const conteudoMenu = document.querySelector(".conteudo_menu");
const body = document.body;

if (menuToggle && conteudoMenu) {
  // Atualiza aria-expanded quando o menu abre/fecha
  menuToggle.addEventListener("change", function () {
    const isExpanded = menuToggle.checked;
    menuToggle.setAttribute("aria-expanded", isExpanded);

    // Previne scroll do body quando menu está aberto
    if (isExpanded) {
      body.style.overflow = "hidden";
      conteudoMenu.setAttribute("aria-hidden", "false");
    } else {
      body.style.overflow = "";
      conteudoMenu.setAttribute("aria-hidden", "true");
    }
  });

  // Fecha o menu ao pressionar ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuToggle.checked) {
      menuToggle.checked = false;
      menuToggle.dispatchEvent(new Event("change"));
      menuToggle.focus(); // Retorna o foco para o botão do menu
    }
  });

  // Trap focus dentro do menu quando aberto
  conteudoMenu.addEventListener("keydown", function (e) {
    if (!menuToggle.checked) return;

    const focusableElements = conteudoMenu.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Tab normal: se estiver no último, volta pro primeiro
    if (
      e.key === "Tab" &&
      !e.shiftKey &&
      document.activeElement === lastElement
    ) {
      e.preventDefault();
      firstElement.focus();
    }

    // Shift + Tab: se estiver no primeiro, vai pro último
    if (
      e.key === "Tab" &&
      e.shiftKey &&
      document.activeElement === firstElement
    ) {
      e.preventDefault();
      lastElement.focus();
    }
  });
}
