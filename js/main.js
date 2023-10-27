//inicio proyecto 2

//inicio botones left y right

let btnLeft = document.getElementById("btn-left");
let btnRight = document.getElementById("btn-right");
let displayChange = document.getElementById("displayChange");

btnLeft.onclick = function () {
  displayChange.src = "./img/imgGames/img-sims.jpeg";
};

btnRight.onclick = function () {
  displayChange.src = "./img/imgGames/img-pacMan.jpeg";
};
