async function carregarTabela(containerId, dados, headers) {
  try {
    const response = await fetch("components/tabela.html");
    const template = await response.text();

    const container = document.getElementById(containerId);
    container.innerHTML = template;

    const headerRow = container.querySelector("thead tr");
    headerRow.innerHTML = "";

    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });

    const tbody = container.querySelector("tbody");
    tbody.innerHTML = "";

    dados.forEach((item) => {
      const tr = document.createElement("tr");

      Object.values(item).forEach((valor) => {
        const td = document.createElement("td");
        td.textContent = valor;
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Erro ao carregar tabela:", error);
    document.getElementById(containerId).innerHTML =
      "<p>Erro ao carregar o cardápio. Tente novamente.</p>";
  }
}

const dadosCardapioPrincipal = [
  {
    categoria: "Tradicional",
    prato: "Parmegiana de Frango",
    descricao:
      "Filé de frango empanado com molho de tomate e queijo derretido.",
    preco: "R$ 42,90",
  },
  {
    categoria: "Tradicional",
    prato: "Parmegiana de Carne",
    descricao: "Filé bovino empanado com molho artesanal e queijo gratinado.",
    preco: "R$ 46,90",
  },
  {
    categoria: "Especial",
    prato: "Parmegiana à Moda da Casa",
    descricao: "Com molho especial da casa e acompanhamento de batata rústica.",
    preco: "R$ 54,90",
  },
  {
    categoria: "Executivo",
    prato: "Parmegiana Executivo",
    descricao: "Versão individual servida com arroz e batata frita.",
    preco: "R$ 32,90",
  },
  {
    categoria: "Bebidas",
    prato: "Refrigerante 2L",
    descricao: "Sabores variados (Coca-Cola, Guaraná, Fanta).",
    preco: "R$ 12,00",
  },
  {
    categoria: "Sobremesa",
    prato: "Petit Gateau",
    descricao: "Bolo de chocolate quente com sorvete de creme.",
    preco: "R$ 19,90",
  },
];

const headersCardapioPrincipal = ["Categoria", "Prato", "Descrição", "Preço"];

const dadosCardapioSanduiches = [
  {
    prato: "Super Juca",
    descricao:
      "2 burguers artesanais, ovo, queijo, bacon, batata palha, alface e tomate.",
    preco: "R$ 27,90",
  },
  {
    prato: "Do Juca",
    descricao:
      "Picanha suína, anéis de cebola empanados, mussarela, bacon, tomate, alface e molho smash.",
    preco: "R$ 18,90",
  },
  {
    prato: "Chicken Especial",
    descricao:
      "Blend de frango moído com bacon, tomate, cebola, alface e queijo.",
    preco: "R$ 16,90",
  },
  {
    prato: "Cabra Macho",
    descricao: "Burguer artesanal, cheddar, molho picante e cebola.",
    preco: "R$ 16,90",
  },
  {
    prato: "X - Carne Seca",
    descricao: "Carne seca, queijo mussarela e molho especial da casa.",
    preco: "R$ 14,90",
  },
  {
    prato: "Big Clássico",
    descricao: "Burger bovino, queijo, bacon, tomate e alface.",
    preco: "R$ 18,90",
  },
];

const headersCardapioSanduiches = ["Prato", "Descrição", "Preço"];

const dadosCardapioBaguetes = [
  {
    prato: "Baguete de Costela",
    descricao: "Costela desfiada, alface e tomate.",
    preco: "R$ 14,90",
  },
  {
    prato: "Baguete de Pernil",
    descricao: "Pernil desfiado, alface e tomate.",
    preco: "R$ 14,90",
  },
];
const headersCardapioBaguetes = ["Prato", "Descrição", "Preço"];

const dadosCardapioRodizio = [
  {
    sabor: "Calabresa",
    descricao: "Calabresa fatiada, cebola, mussarela e azeitonas.",
  },
  {
    sabor: "Quatro Queijos",
    descricao: "Mussarela, provolone, parmesão e gorgonzola.",
  },
  {
    sabor: "Margherita",
    descricao:
      "Molho de tomate, mussarela de búfala, manjericão fresco e azeite.",
  },
  {
    sabor: "Portuguesa",
    descricao: "Presunto, mussarela, ovos, cebola, azeitonas e ervilha.",
  },
  {
    sabor: "Frango com Catupiry",
    descricao: "Frango desfiado, catupiry cremoso e milho.",
  },
  {
    sabor: "Bacon",
    descricao: "Bacon crocante, mussarela, cebola caramelizada e orégano.",
  },
  {
    sabor: "Chocolate",
    descricao: "Chocolate ao leite derretido com granulado.",
  },
  {
    sabor: "Banana",
    descricao: "Banana fatiada, canela, açúcar e leite condensado.",
  },
  {
    sabor: "Abacaxi",
    descricao: "Abacaxi em cubos, mussarela e canela (opcional).",
  },
];
const headersCardapioRodizio = ["Sabor", "Descrição"];

const dadosBebidasSucosIndividuais = [
  { sabor: "Laranja", preco: "R$ 6,90" },
  { sabor: "Abacaxi", preco: "R$ 6,90" },
  { sabor: "Limão", preco: "R$ 6,90" },
  { sabor: "Morango", preco: "R$ 6,90" },
  { sabor: "Acerola", preco: "R$ 6,90" },
];
const headersBebidasSucosIndividuais = ["Sabor", "Preço"];

const dadosBebidasSucosJarra = [
  { sabor: "Acerola", "750ml": "R$ 14,90", "1,5L": "R$ 23,90" },
  { sabor: "Abacaxi", "750ml": "R$ 14,90", "1,5L": "R$ 23,90" },
  { sabor: "Laranja", "750ml": "R$ 14,90", "1,5L": "R$ 23,90" },
  { sabor: "Limão", "750ml": "R$ 14,90", "1,5L": "R$ 23,90" },
  { sabor: "Morango", "750ml": "R$ 14,90", "1,5L": "R$ 23,90" },
];
const headersBebidasSucosJarra = ["Sabor", "750ml", "1,5L"];

const dadosBebidasDiversas = [
  { tipo: "Água", preco: "R$ 3,90" },
  { tipo: "Refrigerante (310ml)", preco: "R$ 5,90" },
  { tipo: "Schweppes", preco: "R$ 6,90" },
  { tipo: "Aquarius Fresh", preco: "R$ 6,90" },
  { tipo: "Suco em Lata", preco: "R$ 6,90" },
];
const headersBebidasDiversas = ["Tipo", "Preço"];

const dadosBebidasCervejas = [
  { tipo: "Caneca de Cerveja", preco: "R$ 4,90" },
  { tipo: "Antártica (600ml)", preco: "R$ 11,90" },
  { tipo: "Heineken", preco: "R$ 12,90" },
  { tipo: "Budweiser", preco: "R$ 12,90" },
  { tipo: "Itaipava", preco: "R$ 12,90" },
];
const headersBebidasCervejas = ["Tipo", "Preço"];

document.addEventListener("DOMContentLoaded", () => {
  const containerPrincipal = document.getElementById(
    "tabela-cardapio-principal"
  );
  const containerSanduiches = document.getElementById(
    "tabela-cardapio-sanduiches"
  );

  const containerBaguetes = document.getElementById("tabela-cardapio-baguetes");
  const containerRodizio = document.getElementById("tabela-cardapio-rodizio");
  const containerBebidasSucosIndividuais = document.getElementById(
    "tabela-bebidas-sucos-individuais"
  );
  const containerBebidasSucosJarra = document.getElementById(
    "tabela-bebidas-sucos-jarra"
  );
  const containerBebidasDiversas = document.getElementById(
    "tabela-bebidas-diversas"
  );
  const containerBebidasCervejas = document.getElementById(
    "tabela-bebidas-cervejas"
  );

  if (containerPrincipal) {
    carregarTabela(
      "tabela-cardapio-principal",
      dadosCardapioPrincipal,
      headersCardapioPrincipal
    );
  }

  if (containerSanduiches) {
    carregarTabela(
      "tabela-cardapio-sanduiches",
      dadosCardapioSanduiches,
      headersCardapioSanduiches
    );
  }

  if (containerBaguetes) {
    carregarTabela(
      "tabela-cardapio-baguetes",
      dadosCardapioBaguetes,
      headersCardapioBaguetes
    );
  }

  if (containerRodizio) {
    carregarTabela(
      "tabela-cardapio-rodizio",
      dadosCardapioRodizio,
      headersCardapioRodizio
    );
  }

  if (containerBebidasSucosIndividuais) {
    carregarTabela(
      "tabela-bebidas-sucos-individuais",
      dadosBebidasSucosIndividuais,
      headersBebidasSucosIndividuais
    );
  }

  if (containerBebidasSucosJarra) {
    carregarTabela(
      "tabela-bebidas-sucos-jarra",
      dadosBebidasSucosJarra,
      headersBebidasSucosJarra
    );
  }

  if (containerBebidasDiversas) {
    carregarTabela(
      "tabela-bebidas-diversas",
      dadosBebidasDiversas,
      headersBebidasDiversas
    );
  }

  if (containerBebidasCervejas) {
    carregarTabela(
      "tabela-bebidas-cervejas",
      dadosBebidasCervejas,
      headersBebidasCervejas
    );
  }
});
