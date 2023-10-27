//inicio proyecto 2

//inicio botones left y right

let btnLeft = document.getElementById("btn-left");
let btnRight = document.getElementById("btn-right");
let displayChange = document.getElementById("displayChange");
let contador = 0;
let luzEncendido = 0;
let powerOn = document.getElementById("light-power-on");
let powerOff = document.getElementById("light-power-off");

// btnLeft.onclick = function () {
//   displayChange.src = "./img/imgGames/img-sims.jpeg";
// };
// btnRight.onclick = function () {
//   displayChange.src = "./img/imgGames/img-pacMan.jpeg";
// };

//accion del boton right
btnRight.onclick = function () {
  if (contador == 0) {
    displayChange.src = "./img/imgGames/img-sims.jpeg";
    contador++;
    console.log(`contador en ${contador}`);
  } else if (contador == 1) {
    displayChange.src = "./img/imgGames/img-pacMan.jpeg";
    contador++;
    console.log(`contador en ${contador}`);
  } else if (contador == 2) {
    displayChange.src = "./img/imgGames/img-topGear.jpeg";
    contador++;
    console.log(`contador en ${contador}`);
  } else if (contador == 3) {
    displayChange.src = "./img/imgGames/img-princeOfPersia.jpeg";
    contador++;
    console.log(`contador en ${contador}`);
  }
};

//accion del boton left
btnLeft.onclick = function () {
  if (contador == 0) {
    displayChange.src = "./img/imgGames/img-sims.jpeg";
    contador--;
    console.log(`contador en ${contador}`);
  } else if (contador == 1) {
    displayChange.src = "./img/imgGames/img-pacMan.jpeg";
    contador--;
    console.log(`contador en ${contador}`);
  } else if (contador == 2) {
    displayChange.src = "./img/imgGames/img-topGear.jpeg";
    contador--;
    console.log(`contador en ${contador}`);
  } else if (contador == 3) {
    displayChange.src = "./img/imgGames/img-princeOfPersia.jpeg";
    contador--;
    console.log(`contador en ${contador}`);
  }
};

luzEncendido.onclick = function(){
  if (luzEncendido == 0){
    
  }
}
