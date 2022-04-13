//DESCRITIVO PASSO A PASSO DO JOGO PONG
//PENSAMENTO COMPUTACIONAL

// COMO ENSINAR A MONTAR VÁRIAVEIS

// Utilizando o comando let ou var é possivel estabelecer um nome a determinada variável criada, durante a construção ha muitos exemplos de variáveis sendo criadas.

// Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 150;
let diametroBolinha = 15;
let raio = diametroBolinha / 2;

// Velocidade da bolinha
let velocidadexBolinha = 10;
let velocidadeyBolinha = 10;

// Variáveis da Raquete
let xRaquete = 5;
let yRaquete = 125;

// Variáveis da Raquete do Oponente
let xRaqueteOponente = 490;
let yRaqueteOponente = 125;

// Velocidade Raquete
let velocidadeRaquete = 5;
let comprimentoRaquete = 5;
let alturaRaquete = 50;

// Velocidade Raquete Oponente
let velocidadeyOponente;

// Variável Colisão importada
let colidiu = false;

// Variáveis do placar de pontos
let meusPontos = 0;
let oponentePontos = 0;

// Chance de Errar do Oponente
let chanceDeErrar = 0;

// Sons
let ponto;
let raquetada;
let trilha;

// COMO ENSINAR A MONTAR O CANVA

// Quando abrimos um documento no p5, as funções de criar o canva já estão pré-disponiveis
// Em createCanvas(x,y) temos a posição x e y que será preenchida conforme a cor estabelecida
// a cor de fundo é dado pela função de desenho de background]
// as cores variam de preto a branco, sendo preto 0 e branco 255
// será abordado mais formas de escolher cores no futuro.

// Parte da música, explicada no final. 
function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(500, 300);
  trilha.loop();
}

function draw() {
  background(0);

  aparecerBolinha();
  // COMO ENSINAR CRIAR A BOLINHA

  // Para criar um circulo, vá na aba de ajuda e referências, no site que abrir encontre a função que possibilite a criação de um circulo.
  // Em inglês shape, significa formas. Então clicando nessa palavra, somos direcionado para a parte do site que explica funções que criam formas.
  // circle (x,y,d) é a função que vamos utilizar. 
  // Entenda quais seus atributos e crie variveis para eles.
  // Coloque a bolinha no centro do canva e de um tamanho adequado.
  // Crie as váriaveis para as coordenadas x, y e diametro

  movimentarBolinha();
  // COMO ENSINAR A BOLINHA SE MOVER

  // Adicione 1 a posição da bolinha
  // xBolinha = xBolinha + 1
  // Entenda que o número 1 é a velocidade da bolinha e crie uma variável
  // xBolinha = xBolinha + velocidadexBolinha
  // Para deixar mais elegante, podemos usar a operação +=
  // Faça o mesmo processo para o eixo y

  efeitobordaBolinha();
  // COMO ENSINAR A BOLINHA TOCAR NA BORDA E VOLTAR

  // Se a bolinha tocar na borda
  // if (bolinha tocar na borda)
  // if (xBolinha estiver tocando  width)
  // if (xBolinha >  width){} os "bigodes" indicam que você quer fazer algo
  // if (xBolinha >  width){velocidadexBolinha *= -1}
  // as duas barras || significam o comando ou
  // Correção da borda da bolinha criando a variavel raio e somando e subtraindo ela do centro da bolinha

  mostrarRaquete(xRaquete, yRaquete);
  // COMO ENSINAR CRIAR RAQUETE

  // Primeiro, encontramos o comando para criar um retangulo na aba de referências
  // rect (x, y, width, height)
  // Para melhorar nosso programa, criamos as váriaveis para cada coordenada da raquete
  // rect (xRaquete, yRaquete, larguraRaquete, alturaRaquete)
  // Feito isso, podemos substituir nosso comando por uma função deixando o programa mais organizado.

  // COMO ENSINAR REFATURAR CÓDIGO ATRAVES DE FUNÇÕES

  // Para criar uma função, iremos usar o comando
  // function (){}
  // Sendo dentro do "bigode" onde devemos descrever a função
  // Exemplo, a função de aparecer a bolinha
  // function aparecerBolinha (){
  //  circle(xBolinha,yBolinha,diametroBolinha)
  // }
  // Agora repita o procedimento com as outras funções do jogo

  movimentaMinhaRaquete();
  // COMO ENSINAR MOVIMENTAR RAQUETE

  // Podemos utilizar o comando que usamos para movimentar a raquete no scratch como base para fazer o mesmo aqui, utilizando a mesma lógica e com o auxilio do documento de refêrencia, podemos desvendar esse comando.
  // If (keyIsDown(NOME_DA_TECLA)){Movimentar no eixo y }
  // Para movimentar para cima, eu subtraio do eixo y uma quantidade
  // If (keyIsDown(NOME_DA_TECLA)){ yRaquete -= valor }
  // O valor será a velocidade da raquete, portanto, criamos essa variável também.
  // If (keyIsDown(UP_ARROW)){ yRaquete -= velocidadeRaquete }
  // Agora é só fazer o mesmo procedimento para movimentar a raquete para baixo
  // Para organizar melhor o programa, criamos uma função.

  //rebateRaquete();
  // COMO ENSINAR A RAQUETE REBATER A BOLINHA

  // Para simplificar, vamos deixar a bolinha somente se movimentando na horizoltal e depois vamos trabalhar a colisão
  // Podemos usar a mesma lógica que usamos com a borda, usando o comando if
  //
  //if (xBolinha - raio < xRaquete + comprimentoRaquete) {
  //    velocidadexBolinha *= -1
  //}
  //
  // Porém, só reconhecemos a largura e não a altura da raquete. Para isso precisamos relacionar o ybolinha com as coordenadas y da raquete
  // quando adicionamos uma nova condição, podemos utilizar o && como adicional
  //
  // if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete){
  //velocidadexBolinha *= -1
  //}
  //
  // Assim reconheceos quando a raquete está acima da altura da bolinha e impossibilitamos a colisão.. Agora a parte de baixo, vamos somar o raio e só usaremos o ponto y em que a raquete está localizada
  //
  // if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
  //    velocidadexBolinha *= -1
  //
  // Feito isso, podemos voltar a velocidade y da bolinha e temos todas as condições para o jogo
  // Agora é só criar uma função e organizar o código

  verificarColisaoRaquete(xRaquete, yRaquete);
  //colisaoMinhaRaqueteBiblioteca();
  // COMO ENSINAR A IMPORTAR SOLUÇÕES

  // Na aba ajuda e em Referências, podemos encontrar uma solução para a colisão da bolinha com o retângulo. Algo que alguém já passou e já criou uma função.
  // Dentro do site do P5, na parte de "libraries" (Biblioteca), podemos encontrar a solução p5.collid2D e importar essa solução para nosso arquivo. Ao clicar no link, seremos direcionados a uma plantaforma, chamada GitHub, que vai auxiliar futuramente a colocarmos os nossos trabalhos.
  // Vamos baixar a solução inteira, depois de conferir a função collideRectCircle()
  // Agora escolhemos a pasta, fazemos a descompactação do arquivo e selecionamos o arquivo p5.collid.2d.js para carregar no p5
  // Para carregar o arquivo, utilize a seta do lado do nome sketch.js, selecione a seta para bano no "Arquivos do esboço" e selecione "Carregar Arquivo"
  // Agora que temos o arquivo, podemos usar as informações da função collideRectCircle()
  // criamos uma variavel para a colisão "colidiu = false", que seria o hit, nas informações (na informação ele usa var e a gente está usando let, agora não faz diferença)
  // Apos isso, criamos uma função e copiamos a parte do código ->  hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100); <-
  // trocamos o hit por colidiu e as informações de dentro da função equivalente as informações do nosso código
  // hit = collideRectCircle(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete,xBolinha, yBolinha, diametroBolinha);
  // Por fim, devemos referênciar o codigo no nosso arquivo index.html colocando a instrução <script src="p5.collide2d.js"></script>

  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  // COMO ENSINAR A CRIAR A RAQUETE DO OPONENTE

  // Assim como criamos a nossa raquete, podemos criar uma função para mostrar a raquete do oponente
  //
  // function mostraRaqueteOponente (){
  // rect(xRaqueteOponente, yRaqueteOponente, comprimentoRaquete, alturaRaquete)
  //}
  //
  // Repare que para o comprimento e altura, usamos uma variável geral para definir todas as raquetes.
  // Para simplificar, podemos unir as duas funções de mostrar as raquetes e colocar um valor genério x e y nos parenteses e nas variaveis, passando na função que a gente escrever as coordenadas de cada uma das raquetes
  // Então a função fica assim:
  //
  //function mostrarRaquete(x,y) {
  //  rect(x, y, comprimentoRaquete, alturaRaquete);
  //}
  //
  // Para escrever cada uma das funções mostrar as raquetes, ficamos assim:
  //
  //mostrarRaquete(xRaqueteOponente, yRaqueteOponente)
  //mostrarRaquete(xRaquete, yRaquete)

  movimentaRaqueteOponente();
  // COMO ENSINAR A MOVIMENTAR A RAQUETE DO OPONENTE

  // Primeiramente temos que criar uma variável para a velocidade da raquete do oponente, mas não atribuimos nenhum valor, para que ela se movimente segundo o y da bolinha "let velocidadeyOponente"
  // Agora na função, criamos a condição para que a raquete se movimente com a bolinha, fazendo uma operação entre o a posição y da bolinha, a posição y da raquete, a metade do comprimento da raquete e uma margem de erro para a bolinha não acertar sempre;
  // Ficamos com
  //
  //velocidadeyOponente = yBolinha - yRaqueteOponente -   comprimentoRaquete / 2 - 30;
  //
  // Agora, adicionamos a posição y da raquete, a velocidade que ela deve ter, como calculamos ali em cima.
  //
  // yRaqueteOponente += velocidadeyOponente

  verificarColisaoRaquete(xRaqueteOponente, yRaqueteOponente);

  // COMO ENSINAR A FAZER AS DUAS RAQUETES COLIDIREM.

  // Assim como a nossa raquete, também queremos que a raquete do oponente reconheça a bolinha. Para isso vamos reorganizar a função que pegamos na biblioteca.
  // Se duplicarmos a função de colisão "colisaoMinhaRaqueteBiblioteca()" e reescrevermos para a raquete do oponente, teriamos o resultado desejado. Porém, queremos simplificar o nosso código. Para isso podemos usar do mesmo recurso que utilizamos para mostrar as raquetes. Modificando a função para uma geral como "verificarColisaoRaquete"
  // Colocamos dois termos genéricos, x e y, como padrões da função.
  //
  // function verificarColisaoRaquete(x, y) {
  //  colidiu = collideRectCircle(
  //    x,
  //    y,
  //    comprimentoRaquete,
  //    alturaRaquete,
  //    xBolinha,
  //    yBolinha,
  //   diametroBolinha
  //  );
  //  if (colidiu) {
  //   velocidadexBolinha *= -1;
  //  }
  //
  // Substituimos os valores das coordenadas da função por esse padrão e chamamos duas vezes a função de colisão, para cada uma das variáveis.
  //
  // function verificarColisaoRaquete(xRaquete, yRaquete)
  // function verificarColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  //

  placarDePontos();
  // COMO ENSINAR A FAZER O PLACAR
  //
  // Vamos começar fazendo as variáveis onde iremos guardar os pontos e igualar o começo delas como zero "let meusPontos = 0" e "let oponentePontos = 0"
  // Criamos a função para mostrar o placar, e dentro dessa função usamos o comando text(variavel, x, y) para indicar o que estará escrito e sua posição
  // Como nosso fundo é preto, temos que usar o fill, para preencher o texto com a coloração branca. Esse comando vai em cima dos textos.
  //

  somarPontos();
  // COMO ENSINAR A FAZER O PLACAR SOMAR OS PONTOS
  //
  // Para fazer com que os pontos contem, precimos fazer com que, cada vez que a bolinha se aproxime das bordas 0 e 500, acresente o ponto no placar. Bem similar ao que foi feito no scratch
  // Para isso usaremos o comando if

  // function somarPontos(){
  // if (xBolinha < 9) {
  // oponentePontos += + 1
  //}
  //}

  // Testei com o 10 e soma os pontos de 3 em 3.. O mais sensível e sem erro foi o 9.. Mas também consegui fazer com o 8 e o 7. É importante levar em conta o raio da bolinha, o tamanho do comprimento da raquete e também a distância que ela está da borda.
  // Com isso repetimos o mesmo processo para os pontos do oponente

  // COMO ARRUMAR O PLACAR IGUAL DO SCRATCH

  // Para isso iremos utilizar alguns comandos como stroke() (contorno), textAlign() (alinhamento), textSize() (tamanho) e o rect() que são os quadrados.

  // COMO COLOCAR SOM

  // Para colocarmos os sons, precisamos dos arquivos deles, assim que ja tivermos os arquivos mp3, podemos carregalos no nosso código, como fizemos quando pegamos a solução da biblioteca. Carregando os arquivos deles para dentro do p5
  // Após isso criamos as variaveis para guardar os sons com o comando let
  // Usamos a função preload para carregar os sons no nosso jogo dando a direção deles, colocando o nome do arquiv
  //
  //function preload() {
  //  trilha = loadSound("trilha.mp3");
  //  ponto = loadSound("ponto.mp3");
  //  raquetada = loadSound("raquetada.mp3");
  //}
  //
  // Agora incluimos os sons nas funções em que há colisão com a raquete, na função setup e na hora da pontuação
  // Para fazer o som ficar em loop, usamos o comando "som".loop(), onde entre as aspas colocamos o som que queremos ver em loop.
  // Para tocar somente uma vez, utilizamos o comando "som".play()

  calculaChanceDeErrar();
  // COMO ENSINAR A AUMENTAR A CHANCE DO OPONENTE ERRAR
  
  // Criamos a variável "let chanceDeErrar"
  // Somamos ela a velocidade y da raquete 
  //
}


// FUNÇÕES
function aparecerBolinha() {
  circle(xBolinha, yBolinha, diametroBolinha);
}
function movimentarBolinha() {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}
function efeitobordaBolinha() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeyBolinha *= -1;
  }
}
function mostrarRaquete(x, y) {
  rect(x, y, comprimentoRaquete, alturaRaquete);
}
function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= velocidadeRaquete;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += velocidadeRaquete;
  }
}
function rebateRaquete() {
  if (
    xBolinha - raio < xRaquete + comprimentoRaquete &&
    yBolinha - raio < yRaquete + alturaRaquete &&
    yBolinha + raio > yRaquete
  ) {
    velocidadexBolinha *= -1;
  }
}
//function colisaoMinhaRaqueteBiblioteca() {
//  colidiu = collideRectCircle(
//    xRaquete,
//    yRaquete,
//    comprimentoRaquete,
//    alturaRaquete,
//    xBolinha,
//    yBolinha,
//    diametroBolinha
//  );
//  if (colidiu) {
//    velocidadexBolinha *= -1;
//  }
//}
function verificarColisaoRaquete(x, y) {
  colidiu = collideRectCircle(
    x,
    y,
    comprimentoRaquete,
    alturaRaquete,
    xBolinha,
    yBolinha,
    diametroBolinha
  );
  if (colidiu) {
    velocidadexBolinha *= -1;
    raquetada.play()
  }
}
function movimentaRaqueteOponente() {
  velocidadeyOponente =
    yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 50;
  yRaqueteOponente += velocidadeyOponente + chanceDeErrar;
}

function placarDePontos() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(80, 10, 40, 20);
  fill(255);
  text(meusPontos, 100, 26);
  fill(color(255, 140, 0));
  rect(380, 10, 40, 20);
  fill(255);
  text(oponentePontos, 400, 26);
}

function somarPontos() {
  if (xBolinha < 9) {
    oponentePontos += +1;
    ponto.play();
  }
  if (xBolinha > 492) {
    meusPontos += +1;
    ponto.play();
  }
}

function calculaChanceDeErrar(){
    if (oponentePontos >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
