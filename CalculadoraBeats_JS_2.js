function enviar() {
  {
    /* Seleccion */

    var optionInput0 = document.getElementById("bpmOption");
    var optionInput1 = document.getElementById("timeOption");
    var optionInput2 = document.getElementById("beatOption");
    var optionInput3 = document.getElementById("timeMoves");
    var optionInput4 = document.getElementById("amountMoves");

    var displayViewFORM0 = document.getElementById("FormRitmo");
    var displayViewFORM1 = document.getElementById("FormTiempo");
    var displayViewFORM2 = document.getElementById("FormCompaces");
    var displayViewFORM3 = document.getElementById("FormDuraMovimiento");
    var displayViewFORM4 = document.getElementById("FormMovimiento");

    if (optionInput0.checked == true) {
      displayViewFORM0.style.display = "block";

      /*     alert("Selcionada la opcion para calcular el ritmo"); */
      optionInput = 1;
    } else {
      displayViewFORM0.style.display = "none";
    }
    if (optionInput1.checked == true) {
      displayViewFORM1.style.display = "block";

      /*       alert("Selcionada la opcion para calcular el tiempo"); */
      optionInput = 2;
    } else {
      displayViewFORM1.style.display = "none";
    }
    if (optionInput2.checked == true) {
      displayViewFORM2.style.display = "block";

      /*       alert("Selcionada la opcion para calcular los compaces"); */
      optionInput = 3;
    } else {
      displayViewFORM2.style.display = "none";
    }
    if (optionInput3.checked == true) {
      displayViewFORM3.style.display = "block";

      /*       alert("Selcionada la opcion para calcular la duracion de movimientos"); */
      optionInput = 4;
    } else {
      displayViewFORM3.style.display = "none";
    }
    if (optionInput4.checked == true) {
      displayViewFORM4.style.display = "block";

      /*       alert("Selcionada la opcion para calcular la cantidad de movimientos"); */
      optionInput = 5;
    } else {
      displayViewFORM4.style.display = "none";
      /* alert("que paso mijo"); */
    }
  }
}

function changeColor() {
  let colorH3 = document.getElementById("result-forRitmo");
  colorH3.style.color = "black";
  colorH3.style.fontWeight = "700";
}
function changeColor2() {
  let colorH3 = document.getElementById("result-forTiempo");
  colorH3.style.color = "black";
  colorH3.style.fontWeight = "700";
}
function changeColor3() {
  let colorH3 = document.getElementById("result-forCompaces");
  colorH3.style.color = "black";
  colorH3.style.fontWeight = "700";
}
function changeColor4() {
  let colorH3 = document.getElementById("result-forDuracionMovimiento");
  colorH3.style.color = "black";
  colorH3.style.fontWeight = "700";
}
function changeColor5() {
  let colorH3 = document.getElementById("result-forMovimientos");
  colorH3.style.color = "black";
  colorH3.style.fontWeight = "700";
}
function changeColor() {
  var colorH3 = document.getElementById("result-forRitmo");
  colorH3.style.color = "black";
  colorH3.style.fontWeight = "700";

  colorH3 = document.getElementById("result-forTiempo");
  colorH3.style.color = "black";
  colorH3.style.fontWeight = "700";

  colorH3 = document.getElementById("result-forCompaces");
  colorH3.style.color = "black";
  colorH3.style.fontWeight = "700";

  colorH3 = document.getElementById("result-forDuracionMovimiento");
  colorH3.style.color = "black";
  colorH3.style.fontWeight = "700";

  colorH3 = document.getElementById("result-forMovimientos");
  colorH3.style.color = "black";
  colorH3.style.fontWeight = "700";
}

function calcularRITMO() {
  /* Ritmo/Tempo/Bpm */

  let Compases = document.getElementById("beat-forRitmo").value;
  let Tiempo = document.getElementById("time-forRitmo").value;

  operacion = (Compases/(Tiempo));
  document.getElementById("result-forRitmo").innerHTML =
    operacion + "Bpm o " + operacion + " Golpes por Minuto";
}

function calcularTIEMPO() {
  /* Tiempo */
  let Tempo = document.getElementById("bpm-forTiempo").value;
  let Compases = document.getElementById("beat-forTiempo").value;

  operacion = (Compases/(Tempo));
  if (operacion == 1) {
    document.getElementById("result-forTiempo").innerHTML =
      operacion + " minuto o " + operacion * 60 + " segundos";
  } else {
    document.getElementById("result-forTiempo").innerHTML =
      operacion + " minutos o " + operacion * 60 + " segundos";
  }
}

function calcularCOMPASES() {
  /* Compases */
  let Tempo = document.getElementById("bpm-forCompaces").value;
  let Tiempo = document.getElementById("time-forCompaces").value;

  operacion = Tempo*Tiempo;
  document.getElementById("result-forCompaces").innerHTML = operacion +" compases";
}

function calcularTiempoMOVIMIENTO() {
  /* Duracion Movimiento */
  let Compases = document.getElementById("beat-forDuracionMovimiento").value;
  let Tiempo = document.getElementById("time-forDuracionMovimiento").value;

  operacion = (1/Compases)*(Tiempo*60);
  document.getElementById("result-forDuracionMovimiento").innerHTML = operacion + "s o " +operacion+" segundos";
}

function calcularMOVIMIENTO() {
  /* Movimientos */
  let Tempo = document.getElementById("beat-forMovimientos").value;
  let Tiempo = document.getElementById("time-forMovimientos").value;

  operacion = (Tempo*(Tiempo));
  document.getElementById("result-forMovimientos").innerHTML = operacion + " movimientos";
}

function changeColor_calcularRITMO() {
  changeColor();
  calcularRITMO();
}
function changeColor_calcularTIEMPO() {
  changeColor2();
  calcularTIEMPO();
}
function changeColor_calcularCOMPASES() {
  changeColor3();
  calcularCOMPASES();
}
function changeColor_calcularTMOVES() {
  changeColor4();
  calcularTiempoMOVIMIENTO();
}
function changeColor_calcularMOVES() {
  changeColor5();
  calcularMOVIMIENTO();
}
