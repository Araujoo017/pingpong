// Variaveis Da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

// Velocidade Da Bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

let colidiu = false;

// Placar Ddo Jogo
let meusPontos = 0;
let pontosOponente = 0;

// Variaveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente;

// Sons do Jogo
let raquetada;
let trilha;
let ponto;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentoBolinha ();
  verificarColisaoBorda ();
  mostrarRaquete (xRaquete, yRaquete);
  movimentaMinhaRaquete ();
  //verificarColisaoRaquete ();
  verificaColisaoRaquete (xRaquete, yRaquete);
  mostrarRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente ();
  verificaColisaoRaquete (xRaqueteOponente, yRaqueteOponente);
  incluiPlacar ();
  marcaPonto ();
}

  function mostraBolinha (){
    circle(xBolinha,yBolinha,diametro);
}

function movimentoBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificarColisaoBorda(){
   if (xBolinha + raio> width ||
    xBolinha - raio< 0){
   velocidadexBolinha *= -1;
 }
 if (yBolinha + raio> height ||
   yBolinha - raio< 0){
   velocidadeyBolinha *= -1;
 }
}

function mostrarRaquete(x,y){
   rect(x, y, raqueteComprimento, raqueteAltura);
}

function mostrarRaqueteOponente(){
   rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

  function verificarColisaoRaquete(){
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yBolinha){
    raquetada.play();
    }
  }

function  verificaColisaoRaquete(x,y){
 colidiu = 
  collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadexBolinha *= -1; 
  raquetada.play();
  }
}


function movimentaRaqueteOponente(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar (){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }

}





  