# Integrador

Link figma: https://www.figma.com/design/EratmSDyNhwZrci0JLEjDh/Untitled?node-id=0-1&t=HYitmercXkwQMVXx-1

Para começar, eu sou Lucas Ferreira de Oliveira e fiz o projeto junto com o Paulo Vitor de Melo Rabelo ,um site para a "Parmegiana do Juca" é um restaurante generalista, são diversas opções no menu.

Funções:
Eu: Design de toda estrutura visual, figma, atualizações do git, estruturação do html e css, media queries

Paulo: Escolha de tamanhos de fonte, estruturação das tabelas, esqueleto inicial da página, sugestões

Escolha de restaurante: É um negócio em crescimento, recentemente expandiram perto da casa do Paulo, embora eles tivessem perfis nas redes sociais, não havia um site próprio.
Publico alvo: A localidade é bastante casual, então, são aquelas famílias, pessoas cansadas de uma semana de trabalho, isso é: aqueles que desejam uma refeição mais simples, sem perder o gosto de sair de casa para comer. De maneira mais específica, definiria esse público alvo como adultos de classe média, abrangindo-o para famílias e casais.

Objetivo: Nosso objetivo era criar um site que se adequasse às necessidades atuais do restaurante, nesse caso, a integração nas redes, o site seria de certa forma, o passo final para isso.
Tema: A temática escolhida para o site foi de forno, com um fundo de lenha, e toda atmosfera refletindo uma comida sendo assada.

Paleta de cor: decidi seguir uma paleta semelhante à logo da loja real ( logo_juca.jpg) junto dela, me baseei nas cores que encontrei de uma imagem de parmegiana, algumas cores foram adicionadas conforme o projeto avançava, mas a base é essa, sem contar que elas estão seguindo as diretrizes de contraste da WCAG.

Fonte: Sobre a fonte, fiquei em dúvida por um tempo, mas decidi escolher a Merriweather, ela é bastante legível e passa uma sensação "amigável",

Icones: Bom, em relação aos ícones, consegui encontrar um tutorial de "menu hamburguer" que simplesmente não usa javascript, por isso não tenho certeza se poderia ser de fato chamado disso. Embora não seja perfeito, ajuda bastante a centralizar as opções de navegação do usuário, as opções mais importantes ( cardápio) ficam visíveis na tela inicial, enquanto o resto pode ser acessado por esse menu. O estilo de icone que escolhi foi o arredondado e cheio, mais uma vez para ampliar a sensação de familiaridade e conforto com o site.

Objetivo (Empresa): O site seria usado principalmente como cardápio dentro do próprio restaurante, para acessibilidade do público, mesmo diante um dia lotado, ou uma dificuldade visual relacionada aos cardápios tradicionais. De forma secundária, ele poderia ser utilizado como cartão de apresentação da loja, na página de contato e no sobre tem um mapa direto do google mesmo, assim como um botão para pedir no ifood a comida, caso more perto e do whatsapp, para conversar diretamente com um atendente.

// Novas informações ( parte 2)

estrutura de pastas:

Integrador/
├── index.html
├── sobre.html
├── contato.html
├── cardapio.html
├── cardapio_sanduiches.html
├── cardapio_bebidas.html
├── cardapio_rodizio.html
├── componentes/
│ ├── cabecalho.html
│ ├── rodape.html
│ └── tabela.html
├── css/
│ ├── main.css
│ ├── queries.css
│ └── spacing.css
│ └── colors.css
├── img/
│ ├── caixa_juca.jpg
│ ├──carddapio_logo.svg
│ ├──carddapio_logo.svg
│ ├──carddapio_logo.svg
│ └──
├── js/
│ └── componentes.js
│ └── interacoes.js
│ └── tabelas.js
├── docs/
│ ├── logo.png wireframe-figma.fig (ou .png ou .pdf)
| ├── rubrica.pdf
│ └── [outros]
└── README.md

    - Componentes modularizados: Cabeçalho, rodapé e tabelas, tanto o cabeçalho quanto rodapé aparecem em todas as páginas e as tabelas se repetem bastante entre as páginas de cardápio, por isso modularizar elas torna a manutenção muito mais fácil, já que todos os dados se encontram no mesmo bloco textual

    - As cores, tamanhos de texto, alt de imagem, nomenclatura, estava quase tudo certeiro, o que faltou antes foi só checar a navegação por teclado, que ao testarmos, parece funcional agora

    - Ajustes de responsividade realizados; Adicionei mais um breakpoint, para se ajustar às telas maiores ( assim como a que eu estou usando nesse exato momento ) ele torna a leitura do texto melhor para telas tão grandes quanto essa

    - Integrações externas adicionadas: Já havia sido adicionada desde o começo do projeto, links para instagram, facebook, whatsapp, ifood.. até o google maps, tudo que poderia ser pedido de informação sobre a loja foi adicionado, então imagino que devo ignorar esse item

    - Desafios encontrados e como foram resolvidos: Eu senti bastante dificuldade de lidar com javascript, então essa foi com certeza a parte mais díficil do projeto, fora a isso, não tivemos problemas notáveis.

    - Próximos passos planejados: Não tenho certeza, talvez uma integração do formulário com uma forma de backend, ou algo assim, a estrutura do site é bastante concisa porque foi feita baseada no nosso conhecimento da área no momento, possivelmente a adição de outra página poderia ser benéfica para o projeto
