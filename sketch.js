canciones=[];
imagenes=[];
var fondo;
indice=0;
nombresCanciones=["safe and sound","Love me again","counting stars","centuries","El 13","inmortals"]

function preload() {
  canciones[0] = loadSound("musica/safeandsound.mp3");
  canciones[1] = loadSound("musica/cancion2.mp3");
  canciones[2] = loadSound("musica/cancion3.mp3");
  canciones[3] = loadSound("musica/cancion4.mp3");
  canciones[4] = loadSound("musica/duro.mp3");
  canciones[5] = loadSound("musica/cancion5.mp3");
  
  imagenes[0] = loadImage("imagenes/imagen1.JPG")
  imagenes[1] = loadImage("imagenes/imagen2.JPG")
  imagenes[2] = loadImage("imagenes/imagen3.JPG")
  imagenes[3] = loadImage("imagenes/imagen4.JPG")
  imagenes[4] = loadImage("imagenes/imagen5.JPG")
  imagenes[5] = loadImage("imagenes/imagen6.JPG")

  fondo = loadImage("imagenes/dj.JPG")
}

function setup() {
  createCanvas(600, 400);
  background("white");
  botonPlay=createButton("PLAY");
  botonPlay.mousePressed(Play);
  botonStop=createButton("STOP");
  botonStop.mousePressed(Stop);
  botonNext=createButton("NEXT");
  botonNext.mousePressed(Next);
}

function draw() {
background("white");
image(fondo,0,0,600,400);
image(imagenes[indice],150,70);
textSize(24);

text(nombresCanciones[indice],200,40);
fill(255)
}

function Play(){
  canciones[indice].play();
  console.log(nombresCanciones[indice]);
}

function Stop(){
  canciones[indice].stop();
}
function Next(){
  Stop();
  if(indice<canciones.length-1){
  indice+=1;
  }
  else{
    indice=0;
  }
  Play();
}



