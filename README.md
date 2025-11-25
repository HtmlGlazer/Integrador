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

**Obs**: Caso os testes ocorram da mesma maneira, ou seja, não hajam problemas ou diferenças em relação ao teste original ( Google Chrome ), então a descrição vai ser condensada para o tópico em questão.

**Obs 2:** A maioria das ações vão se repetir na próxima sessão, devido à natureza desse tipo de testagem.

 ***Google Chrome***
- **visualização de todas as páginas e erros críticos:** Em uma primeira verificação, com o menu de inspeção de elemento, verifiquei o comportamento da página, o layout estava adequado, sem problemas, a página não quebrou em momento algum.  
*Imagens de demonstração estão descritas na pasta docs/google_chrome/visualizacao_google como pag_(nome da parte)_g.jpeg*
![alt text](docs/testes_navegadores/google_chrome/visualizacao_google/pag_inicial_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/visualizacao_google/pag_cardapio_g.jpg) ![ ](docs/testes_navegadores/google_chrome/visualizacao_google/pag_contato_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/visualizacao_google/pag_sobre_g.jpg) 
- **Teste de links:** Para essa parte dos testes, vou dividi-la entre **interações**( que descreve como os  botões de interação da página se comportam na ação do usuário), **botões de links** dentro do site ( ou seja, para páginas diferentes do site) , **botões de acesso a informação** ( voltar ao topo, conteúdo principal ) e **links externos** ( redes sociais, ifood e whatsapp )  
*Imagens de demonstração estão descritas na pasta docs/google_chrome/links_google/pasta_do_teste como (ação)_(nome do botão)_g.jpeg*
    - **Interações**: Aqui estão os testes realizados em relação as interações de estados especiais das classes interativas
        - Botão principal: Esses botões têm a classe botao_principal, em hover, ele alterna as cores de texto, fundo e borda, em focus ele faz o mesmo, com uma "outline" branca em volta, simbolizando foco, ao pressionar um desses botões em telas menores, o efeito de hover é aplicado ao último pressionado, identificando a ação escolhida.
        ![alt text](docs/testes_navegadores/google_chrome/links_google/interacoes/focus_principal_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/interacoes/hover_principal_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/interacoes/press_principal_g.jpg)
        - Saudação: Esse campo tem a classe campo_nome, exclusiva da saudação na página index, ela identifica o cliente, em hover, assim como em focus, ela entrelaça a caixa de texto com uma "outline" branca em volta, simbolizando foco, ao escrever dentro da tela, um texto de apresentação aparece, cuja persistência ocorre, mesmo na mudança de telas.
        ![alt text](docs/testes_navegadores/google_chrome/links_google/interacoes/action_saudacao_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/interacoes/active_saudacao_g.jpg) 
        - Menu: Ao interagir com o menu hamburguer, são abertas as opções de escolha de ramificações do site, ao passar o mouse sobre alguma delas, sua descrição fica demarcada em branco, ao utilizar a navegação por teclado, surge um outline em volta da opção selecionada, para telas menores ( celulares) o texto fica oculto, dando maior foco aos icones descritivos.
        ![alt text](docs/testes_navegadores/google_chrome/links_google/interacoes/focus_menu_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/interacoes/hover_menu_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/interacoes/mobile_menu_g.jpg) 
        - Botão de whatsapp - Contato: Ele serve de forma alternativa ao forumlário, para contato com a loja, no site atual, é a única forma, devido a ausência de backend para o forumlário, ao passar o mouse sobre esse item de interação, suas cores alternam, como no botão principal, em focus surge um outline em volta dele.
        ![alt text](docs/testes_navegadores/google_chrome/links_google/interacoes/focus_whatsapp_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/interacoes/hover_whatsapp_g.jpg) 
        - Imagem principal: Imagem em destaque da página inicial, contém um link para o cardápio, que é justamente o foco do site, ao focar na imagem, pela navegação de teclado, surge um outline, demonstrando foco e ao passar o mouse em cima, a imagem alta aos olhos e se torna um pouco transparente, dando efeito de escurecimento devido ao fundo do site.
        ![alt text](docs/testes_navegadores/google_chrome/links_google/interacoes/hover_imgp_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/interacoes/focus_imgp_g.jpg)
    - **Botões de link**: Aqui estão os testes realizados em relação ao direcionamento dos links internos do site, para demonstrar isso, tanto aqui quanto na próxima sessão, vou deixar os links em destaque
        - Menu: Os links internos levam respectivamente para tela inicial, cardápio, sobre e contato
        ![alt text](docs/testes_navegadores/google_chrome/links_google/botoes_link/home_menu_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/botoes_link/cardapio_menu_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/botoes_link/sobre_menu_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/botoes_link/contato_menu_g.jpg)
        - Principal: Tanto a imagem, quanto o botão de cardápio levam para a aba de cardápio, o botão de copyright em toda página leva de volta para a página principal.
        ![alt text](docs/testes_navegadores/google_chrome/links_google/botoes_link/cardapio_principal_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/botoes_link/imgp_principal_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/botoes_link/copyright_g.jpg)
    - **Botões de acesso a informação**: Aqui estão os testes realizados em relação aos links internos da página, ou seja, que levam para outro ponto dentro da própria página.
        - Voltar ao topo: direciona para "#" em todas as páginas, ou seja, o topo da página
        ![alt text](docs/testes_navegadores/google_chrome/links_google/acesso_info/voltar_topo_g.jpg)
        - Principal: Na página principal, redireciona para o texto principal, no cardápio, redireciona para a primeira tabela da página, em sobre, redireciona para a imagem em destaque, em contato, para o formulário.
        ![alt text](docs/testes_navegadores/google_chrome/links_google/acesso_info/principal_principal_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/acesso_info/principal_tabela_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/acesso_info/principal_sobre_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/acesso_info/principal_contato_g.jpg)
    - **Links externos**: Aqui estão os testes realizados em relação aos links externos, que levam para as redes sociais e contato mais próximo do negócio.
        - Menu: Os links externos levam respectivamente para instagram, facebook, ifood e whatsapp
        ![alt text](docs/testes_navegadores/google_chrome/links_google/links_externos/insta_menu_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/links_externos/face_menu_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/links_externos/ifood_menu_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/links_externos/whats_menu_g.jpg)
        - Principal: Na página principal, existem botões com link para o whatsapp e ifood, as duas formas disponíveis de pedido para a loja.
        ![alt text](docs/testes_navegadores/google_chrome/links_google/links_externos/whats_principal_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/links_google/links_externos/ifood_principal_g.jpg)
        - Contato: Um botão de contato alternativo para o whatsapp está presente abaixo do formulário.
        ![alt text](docs/testes_navegadores/google_chrome/links_google/links_externos/whats_contato_g.jpg)


- **Teste de formulário:** Verificação de requerimento, finalização do formulário e estados  
*Imagens de demonstração estão descritas na pasta docs/google_chrome/form como (ação)_form_g.jpeg*
    - Item em foco/ativo: Surge um outline preto que engloba o item inteiro do formulário, contrastando seu interior claro, assim permitindo a compreensão do usuário, além disso, surge uma linha piscando dentro do item do formulário, indicando necessidade de escrita.
    ![alt text](docs/testes_navegadores/google_chrome/form/active_form_g.jpg)
    - Item em hover: O mesmo outline aparece, mas sem a linha dentro, indicando a interação sem forçar o usuário a digitar, mas indicando através de uma mensagem a necessidade de digitação para completar o formulário
    ![alt text](docs/testes_navegadores/google_chrome/form/hover_form_g.jpg)
    - Envio sem confirmação dos campos: Aparece um requerimento de digitação nos campos vazios do formulário, impedindo o usuário de enviá-lo sem preenchê-lo de forma correta, assim como, redirecionando-o para o comando mais acima imcompleto
    ![alt text](docs/testes_navegadores/google_chrome/form/try_form_g.jpg)

- **Teste de media queries.:** Semelhante ao teste de visualização, mas com detalhes de mudanças de display na página, caso ouver alguma além das mudanças de tamanho de fonte, vou estar excluindo a visualização das media queries de 1200+px pois as prints até agora foram nessa largura de página
    - Menu: Adiciona textos explicativos a partir de 768px de largura
    ![alt text](docs/testes_navegadores/google_chrome/media_queries/menu/768px_menu_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/media_queries/menu/menos_de_768px_menul_g.jpg)
    - Principal: As opções centrais, seguem uma corrente vertical a partir da visualização em tablet, mas fora a isso, sem grandes mudanças
    ![alt text](docs/testes_navegadores/google_chrome/media_queries/principal/menos_de_768px_principal_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/media_queries/principal/768px_principal_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/media_queries/principal/1024px_principal_g.jpg)
    - Cardápio: As opções centrais, seguem uma corrente vertical a partir da visualização em tablet, mas fora a isso, sem grandes mudanças
      ![alt text](docs/testes_navegadores/google_chrome/media_queries/cardapio/menos_de_768px_sobre_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/media_queries/cardapio/768px_sobre_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/media_queries/cardapio/1024px_sobre_g.jpg)
    - Sobre: Sem grandes mudanças
      ![alt text](docs/testes_navegadores/google_chrome/media_queries/sobre/menos_de_768px_sobre_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/media_queries/sobre/768px_sobre_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/media_queries/sobre/1024px_sobre_g.jpg)
    - Contato: Sem grandes mudanças
    ![alt text](docs/testes_navegadores/google_chrome/media_queries/contato/menos_de_768px_contato_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/media_queries/contato/768px_contato_g.jpg) ![alt text](docs/testes_navegadores/google_chrome/media_queries/contato/1024px_contato_g.jpg)



 ***Mozilla Firefox***
- **visualização de todas as páginas e erros críticos:** Em uma primeira verificação, com o menu de inspeção de elemento, verifiquei o comportamento da página, o layout estava adequado, sem problemas, a página não quebrou em momento algum.  
*Imagens de demonstração estão descritas na pasta docs como pag_(nome da parte)_g.jpeg*
![alt text](image.png)![alt text](image-1.png)![alt text](image-2.png)![alt text](image-3.png)
- **teste de links:**
Para essa parte dos testes, vou dividi-la entre interações( que descreve como os botões de interação da página se comportam na ação do usuário), botões de links dentro do site ( ou seja, para páginas diferentes do site) , botões de acesso a informação ( voltar ao topo, conteúdo principal ) e links externos ( redes sociais, ifood e whatsapp )
Imagens de demonstração estão descritas na pasta docs/google_chrome/links_google/pasta_do_teste como (ação)_(nome do botão)_g.jpeg

Interações: Aqui estão os testes realizados em relação as interações de estados especiais das classes interativas
Botão principal: Esses botões têm a classe botao_principal, em hover, ele alterna as cores de texto, fundo e borda, em focus ele faz o mesmo, com uma "outline" branca em volta, simbolizando foco, ao pressionar um desses botões em telas menores, o efeito de hover é aplicado ao último pressionado, identificando a ação escolhida.
![alt text](image-4.png)![alt text](image-5.png)
Saudação: Esse campo tem a classe campo_nome, exclusiva da saudação na página index, ela identifica o cliente, em hover, assim como em focus, ela entrelaça a caixa de texto com uma "outline" branca em volta, simbolizando foco, ao escrever dentro da tela, um texto de apresentação aparece, cuja persistência ocorre, mesmo na mudança de telas.
![alt text](image-6.png)
Menu: Ao interagir com o menu hamburguer, são abertas as opções de escolha de ramificações do site, ao passar o mouse sobre alguma delas, sua descrição fica demarcada em branco, ao utilizar a navegação por teclado, surge um outline em volta da opção selecionada, para telas menores ( celulares) o texto fica oculto, dando maior foco aos icones descritivos.
![alt text](image-7.png)![alt text](image-8.png)
Botão de whatsapp - Contato: Ele serve de forma alternativa ao forumlário, para contato com a loja, no site atual, é a única forma, devido a ausência de backend para o forumlário, ao passar o mouse sobre esse item de interação, suas cores alternam, como no botão principal, em focus surge um outline em volta dele.
![alt text](image-9.png)
- **teste de formulário:**
 Verificação de requerimento, finalização do formulário e estados
Imagens de demonstração estão descritas na pasta docs/google_chrome/form como (ação)_form_g.jpeg

Item em foco/ativo: Surge um outline preto que engloba o item inteiro do formulário, contrastando seu interior claro, assim permitindo a compreensão do usuário, além disso, surge uma linha piscando dentro do item do formulário, indicando necessidade de escrita.
![alt text](image-11.png)
- **teste de media queries.:**
Semelhante ao teste de visualização, mas com detalhes de mudanças de display na página, caso ouver alguma além das mudanças de tamanho de fonte, vou estar excluindo a visualização das media queries de 1200+px pois as prints até agora foram nessa largura de página
![alt text](image-12.png)![alt text](image-13.png)![alt text](image-14.png)![alt text](image-15.png)![alt text](image-16.png)

## Reflexão Individual - Lucas Ferreira


**Aprendizados Técnicos:** Aprendi bastante sobre cada um dos conceitos associados ao front end, mas principalmente sobre html, css e o rigor técnico necessário para a criação de bons sites, como já disse antes em outras partes do projeto, javascript de longe, não é meu forte.

**Aprendizados de Processo:** Eu fiz a maior parte do site sem ajuda, quando falo no singular quer dizer que fiz praticamente sem auxílio o tópico, mas alguns tópicos aqui e ali realmente foram necessários serem pedidos, posso certamente dar crédito a ele pelos testes no firefox, tabelas, a base de algumas das funções, como os botões de voltar ao topo e conteudo principal, em geral, eu sinto que poderia ter havido mais cooperação, visto que me cansei muito.  

**Desafios Enfrentados:** O maior desafio sem duvidas é a falta de tempo para fazer esse trabalho assim como os outros, não é o tipo de problema que pode ser resolvido facilmente, seria necessária uma mudança completa de vida, mas sem dúvidas, começar as coisas mais cedo em alguns dos momentos teria ajudado bastante


## Reflexão Individual - Paulo Vitor

**Aprendizados Técnicos:**
- Quais foram as principais habilidades técnicas que você desenvolveu?
Organização
- Qual foi a tecnologia ou conceito mais desafiador de aprender?
Modularizar
- O que você domina melhor agora comparado ao início do projeto?
Html

**Aprendizados de Processo:**
- Como foi trabalhar em dupla? Quais foram os desafios?
Bom. Entregar o trabalho no tempo limite
- Como vocês organizaram as tarefas e a comunicação?
Comunicava pelo whatsapp

**Desafios Enfrentados:**
- Qual foi o maior desafio do projeto? Tempo de entrega
- Como vocês superaram? Fazendo o mais rápido possivel
- Se pudesse voltar no tempo, o que faria diferente? Nada.

## Reflexão da dupla

**Evolução do Projeto:** O projeto se tornou principalmente mais organizado e acessível, ele também deve carregar de forma relativamente rápida, devido às otimizações dele, o resultado final atende de forma relativamente agradável à meta inicial.

**Feedbacks Recebidos:** Não recebemos ainda
- O que vocês aprenderam com a avaliação dos colegas?
- Quais feedbacks foram mais úteis?
- Como pretendem aplicar essas sugestões?

**Relevância para o Negócio:** O site certamente agregaria valor ao negócio original, seja ele usado como uma apresentação para o restaurante, ou um site menu em si, ele funciona de diversas maneiras, infelizmente não somos psíquicos de saber o que o dono diria sobre o site, além disso, eu ( Lucas ) pessoalmente não usaria esse trabalho em meu portifólio porque não sinto que ainda chega em nível profissional

## Créditos/Ferramentas utilizadas:

**Icones:**
	- https://www.flaticon.com
	- https://www.svgrepo.com
	- https://br.freepik.com
	- https://fonts.google.com/icons
	- https://iconscout.com

**Escolha de cores:**
	- https://colorshark.io
	- https://colordesigner.io
	- https://coolors.co

**Escolha de fonte:**
	- https://fonts.google.com/specimen/Merriweather

Imagens ( Não icones ):**
	- Imagem sobre: https://img.restaurantguru.com/r7e2-Parmegiana-do-Juca-interior.jpg
	- Fundo da página: https://stock.adobe.com/br/images/brown-wood-texture-abstract-background/72383843?clickref=1110lwgyUgy&mv=affiliate&mv2=pz&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=bany0
	- Imagem parmegiana: https://www.shutterstock.com/pt/image-photo/chicken-parmigiana-tomatoes-378525874?trackingId=58f4f83a-c2c6-4c62-b7fd-2dfc74148f8a
	- Logo: https://www.instagram.com/parmegianadojuca/