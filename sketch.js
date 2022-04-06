canciones=[];
imagenes=[];
var fondo;
indice=0;
var barra;
var barra2;
var tiempo = 0.1;
nombresCanciones=["Joe Esposito - You're the Best ","Twisted Sister - We're not Gonna Take it","The Beach Boys - I Get Around","Bonnie Tyler - Holding Out For a Hero ","Sweet - The Ballroom Blitz"]

function preload() {
  
  canciones[0] = loadSound("musica/cancion2.mp3");
  canciones[1] = loadSound("musica/cancion4.mp3");
  canciones[2] = loadSound("musica/cancion5.mp3");
  canciones[3] = loadSound("musica/cancion6.mp3");
  canciones[4] = loadSound("musica/cancion7.mp3");
  
 
 
  
  fondo = loadImage("imagenes/dj.JPG");
}

function setup() {
  createCanvas(600, 400);
  background("white");
  barra = createSlider(0,1,0.5,0.01);
  //aqui se supone que iria la duracion del sonido pero no funciono :c sexo
  barra2 = createSlider(0,500,tiempo,0);
 

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

textSize(30);
text(nombresCanciones[indice],10,40);
fill(255)

console.log(canciones[indice].duration());
canciones[indice].setVolume(barra.value());


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



