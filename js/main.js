//inicio proyecto 2

//variables proyecto
let btnLeft = document.getElementById("btn-left");
let btnRight = document.getElementById("btn-right");
let displayChange = document.getElementById("displayChange");
let contador = 1;
var luzEncendido = 1;
let power = document.getElementById("btn-power");
let restart = document.getElementById("btn-restart");
let powerOff = document.getElementById("light-power-off-on");
let colorGrey = document.getElementById("color-grey");
let colorPurple = document.getElementById("color-purple");
let colorGreen = document.getElementById("color-green");
let colorConsola = document.getElementById("imagen-consola");

//acciones del boton power
power.onclick = function () {
  if (luzEncendido == 0) {
    powerOff.style.backgroundColor = "#ff0000";
    displayChange.src = "./img/imgGames/img-inicio.jpeg";
    luzEncendido++;
    console.log("apagado");
  } else if (luzEncendido == 1) {
    powerOff.style.backgroundColor = "#008000";
    displayChange.src = "./img/imgGames/img-batman.jpeg";
    luzEncendido--;
    console.log("encendido");
  }
};

//acciones del boton restart
if (luzEncendido == 1) {
  restart.onclick = function () {
    if (luzEncendido == 0) {
      displayChange.src = "./img/imgGames/img-batman.jpeg";
      contador = 0;
    } else if (luzEncendido == 1) {
      console.log(`btn apagado`);
    }
  };
}

//accion del boton right

btnRight.onclick = function () {
  if (luzEncendido == 0) {
    if (contador <= 0) {
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
    } else if (contador >= 3) {
      displayChange.src = "./img/imgGames/img-princeOfPersia.jpeg";
      contador++;
      console.log(`contador en ${contador}`);
    }
  } else if (luzEncendido == 1) {
    console.log(`btn apagado`);
  }
};

//accion del boton left

btnLeft.onclick = function () {
  if (luzEncendido == 0) {
    if (contador <= 0) {
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
    } else if (contador >= 3) {
      displayChange.src = "./img/imgGames/img-princeOfPersia.jpeg";
      contador--;
      console.log(`contador en ${contador}`);
    }
  } else if (luzEncendido == 1) {
    console.log(`btn apagado`);
  }
};

//cambiar color de consola
colorGrey.onclick = function () {
  colorConsola.style.backgroundColor = "#A6ACAF";
};
colorPurple.onclick = function () {
  colorConsola.style.backgroundColor = "#8E44AD";
};

colorGreen.onclick = function () {
  colorConsola.style.backgroundColor = "#138D75";
};
