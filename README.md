# Integrador

Nome do comércio: Parmegiana do Juca

- **Link figma**: https://www.figma.com/design/EratmSDyNhwZrci0JLEjDh/Untitled?node-id=0-1&t=HYitmercXkwQMVXx-1
- **Link do github pages**: https://htmlglazer.github.io/Integrador/

- **Nomes dos alunos**:
    - Eu: Lucas Ferreira de Oliveira
    - Dupla: Paulo Vitor de Melo Rabelo

- **Funções:**
    - Eu: Design de toda estrutura visual, figma, atualizações do git, estruturação do html, css, javascript e media queries.
    - Paulo: Escolha de tamanhos de fonte, estruturação das tabelas, esqueleto inicial da página, sugestões.

- **Tecnologias utilizadas:**
    - (HTML5, CSS3, JavaScript, Github, Git.)

    ## Escolhas no projeto

        Escolha de restaurante:   
    > É um negócio em crescimento, recentemente expandiram perto da casa do Paulo, embora eles tivessem perfis nas redes sociais, não havia um site próprio.

        Publico alvo: 
     > A localidade é bastante casual, então, são aquelas famílias, pessoas cansadas de uma semana de trabalho, isso é: aqueles que desejam uma refeição mais simples, sem perder o gosto de sair de casa para comer. De maneira mais específica, definiria esse público alvo como adultos de classe média, abrangendo-o para famílias e casais.

        Objetivo: 
     > Nosso objetivo era criar um site que se adequasse às necessidades atuais do restaurante, nesse caso, a integração nas redes, o site seria de certa forma, o passo final para isso.

        Tema: 
     > A temática escolhida para o site foi de forno, com um fundo de lenha, e toda atmosfera refletindo uma comida sendo assada.

        Paleta de cor: 
     >decidi seguir uma paleta semelhante à logo da loja real (logo_juca.webp) junto dela, me baseei nas cores que encontrei de uma imagem de parmegiana (parmegiana.webp), algumas cores foram adicionadas conforme o projeto avançava, mas a base é essa, sem contar que elas estão seguindo as diretrizes de contraste da WCAG.
    ![Prato principal do restaurante](img/imagens_reais/parmegiana.webp) ![Logo do restaurante](img/logos_icone/logo_juca.webp)

        Fonte: 
     > Sobre a fonte, fiquei em dúvida por um tempo, mas decidi escolher a Merriweather, ela é bastante legível e passa uma sensação "amigável".

        Icones: 
     > Bom, em relação aos ícones, consegui encontrar um tutorial de "menu hamburguer" que simplesmente não usa javascript, por isso não tenho certeza se poderia ser de fato chamado disso. Embora não seja perfeito, ajuda bastante a centralizar as opções de navegação do usuário, as opções mais importantes ( cardápio ) ficam visíveis na tela inicial, enquanto o resto pode ser acessado por esse menu. O estilo de icone que escolhi foi o arredondado e cheio, mais uma vez para ampliar a sensação de familiaridade e conforto com o site.

        Objetivo (Empresa): 
     > O site seria usado principalmente como cardápio dentro do próprio restaurante, para acessibilidade do público, mesmo diante um dia lotado, ou uma dificuldade visual relacionada aos cardápios tradicionais. De forma secundária, ele poderia ser utilizado como cartão de apresentação da loja, na página de contato e no sobre tem um mapa direto do google mesmo, assim como um botão para pedir no ifood a comida, caso more perto e do whatsapp, para conversar diretamente com um atendente.

## Estrutura de pastas

Explicação: Temos os arquivos em html na pasta inicial, e o resto dos arquivos separados e referenciados em suas respectivas páginas:

- **Componentes:** Contem as estruturas replicáveis de html.
- **Css:** Contem os arquivos de estilização de classe, cores, escala e media queries.
- **Doc:** Contem documentos ( auto avaliação, imagem do figma, futuros testes do site e etc ) que permitem compreensão maior do insight por trás das escolhas feitas para o site.
- **Img:** Contem as imagens do site, elas estão divididas entre pastas que ditam suas funções, sendo a pasta "outros" para as imagens que não se encaixam nas outras categorias, contudo, pelo próprio nome já ditam suas funções.
- **Js:** Contem os arquivos em Javascript, eles servem para a configuração de interações do usuário e modularização de componentes.
```
Integrador/
├── index.html
├── sobre.html
├── contato.html
├── cardapio.html
├── cardapio_sanduiches.html
├── cardapio_bebidas.html
├── cardapio_rodizio.html
├── componentes/
│   ├── cabecalho.html
│   ├── rodape.html
│   └── tabela.html
├── css/
│   ├── style.css
│   ├── style.min.css
│   ├── queries.css
│   ├── queries.min.css
│   ├── spacing.css
│   ├── spacing.min.css
│   ├── colors.css
│   └── colors.min.css
├── img/
│   ├── imagens_reais/
│   │   ├── caixa_juca.webp
│   │   ├── ladodefora.webp
│   │   └── parmegiana.webp
│   ├── logos_icone/
│   │   ├── favicon.png
│   │   ├── favicon.svg
│   │   └── logo_juca.webp
│   ├── logos_menu/
│   │   ├── logo_cardapio_menu.svg
│   │   ├── logo_contato_menu.svg
│   │   ├── logo_face_menu.svg
│   │   ├── logo_home_menu.svg
│   │   ├── logo_ifood_menu.svg
│   │   ├── logo_insta_menu.svg
│   │   ├── logo_sobre_menu.svg
│   │   └── logo_whatsapp_menu.svg
│   └── outros/
│       ├── fundo_madeira.webp
│       └── logo_whatsapp_botao.webp
├── js/
│   ├── componentes.js
│   ├── componentes.min.js
│   ├── interacoes.js
│   ├── interacoes.min.js
│   ├── tabelas.js
│   └── tabelas.min.js
├── docs/
│   └── rubricaDFE.pdf
└── README.md
```

## Descrição do desenvolvimento do projeto

### Semana inicial (Parte 1)
Idealização inicial do projeto através do figma, organizei html e css iniciais, criação de cardápios, index, contato, sobre e readme, adicionamos integrações externas, com links das redes sociais e localização no mapa da loja, adição de comentários ao css.

### Desenvolvimento (Parte 2)
Separação de arquivos, adição de ferramentas de acessibilidade, modularização de componentes e adição de animações/interações de javascript

#### Descrição dos questionamentos dessa parte do desenvolvimento:

- **Componentes modularizados:** Cabeçalho, rodapé e tabelas, tanto o cabeçalho quanto rodapé aparecem em todas as páginas e as tabelas se repetem bastante entre as páginas de cardápio, por isso modularizar elas torna a manutenção muito mais fácil, todos os dados se encontram no mesmo bloco textual.

- **Acessibilidade:** As cores, tamanhos de texto, alt de imagem, nomenclatura, estava quase tudo certeiro, o que faltou antes foi só checar a navegação por teclado, que ao testarmos, parece funcional agora.

- **Ajustes de responsividade realizados:** Adicionei mais um breakpoint, para se ajustar às telas maiores ( assim como a que eu estou usando nesse exato momento ) ele torna a leitura do texto melhor para telas tão grandes quanto essa.

- **Integrações externas adicionadas:** Já havia sido adicionada desde o começo do projeto, links para instagram, facebook, whatsapp, ifood.. até o google maps, tudo que poderia ser pedido de informação sobre a loja foi adicionado, então imagino que devo ignorar esse item.

- **Desafios encontrados e como foram resolvidos:** Eu senti bastante dificuldade de lidar com javascript, então essa foi com certeza a parte mais díficil do projeto, fora a isso, não tivemos problemas notáveis.

- **Próximos passos planejados:** Não tenho certeza, talvez uma integração do formulário com uma forma de backend, ou algo assim, a estrutura do site é bastante concisa porque foi feita baseada no nosso conhecimento da área no momento, possivelmente a adição de outra página poderia ser benéfica para o projeto.

### Commit final antes da publicação (Parte 3)
Deletei classes não utilizadas, devido às mudanças ao longo do desenvolvimento, principalmente contidas no css, adicionei comentários aos arquivos de js, explicando a função deles, alterei o nome da classe principal de css, ajustei os formatos de imagem e comprimi elas, ampliei as mudanças no projeto iniciadas na parte 2, principalmente no que tange de acessibilidade, minimizei os arquivos js e css.


## Testes em múltiplos navegadores
**Vamos fazer os seguintes testes nas páginas:**  
- visualização de todas as páginas
- verificação de erros críticos
- teste de links
- teste de formulário
- teste de media queries.

A maioria deles vai ser repetido na próxima sessão, devido à natureza desse tipo de teste.

 **Google Chrome:**
- visualização de todas as páginas
- verificação de erros críticos
- teste de links
- teste de formulário
- teste de media queries.


 **Mozilla Firefox:**
- visualização de todas as páginas
- verificação de erros críticos
- teste de links
- teste de formulário
- teste de media queries.
