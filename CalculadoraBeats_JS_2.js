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
      displayViewFORM0.style.display = "flex";

      /*     alert("Selcionada la opcion para calcular el ritmo"); */
      optionInput = 1;
    } else {
      displayViewFORM0.style.display = "none";
    }
    if (optionInput1.checked == true) {
      displayViewFORM1.style.display = "flex";

      /*       alert("Selcionada la opcion para calcular el tiempo"); */
      optionInput = 2;
    } else {
      displayViewFORM1.style.display = "none";
    }
    if (optionInput2.checked == true) {
      displayViewFORM2.style.display = "flex";

      /*       alert("Selcionada la opcion para calcular los compaces"); */
      optionInput = 3;
    } else {
      displayViewFORM2.style.display = "none";
    }
    if (optionInput3.checked == true) {
      displayViewFORM3.style.display = "flex";

      /*       alert("Selcionada la opcion para calcular la duracion de movimientos"); */
      optionInput = 4;
    } else {
      displayViewFORM3.style.display = "none";
    }
    if (optionInput4.checked == true) {
      displayViewFORM4.style.display = "flex";

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

  let Golpes = document.getElementById("beat-forRitmo").value;
  let Tiempo = document.getElementById("time-forRitmo").value;

  let operacion = (Golpes/(Tiempo));
  document.getElementById("result-forRitmo").innerHTML =
    operacion + "Bpm o " + operacion + " Golpes por Minuto"; let Tempo = operacion;

  document.getElementById("bpmScreen").innerHTML = operacion + "Bpm o " + operacion + " Golpes por Minuto";
  operacion =60/Tempo;
  document.getElementById("timeBeatScreen").innerHTML = "La duracion de 1 golpe es de " + operacion + "s"+ " o "+operacion+" Segundos";
  document.getElementById("timeCompasScreen").innerHTML = "La duracion de 1 compás es de " + (operacion*4) + "s"+ " o "+(operacion*4)+" Segundos";
  operacion = Tempo*Tiempo;
  document.getElementById("redondaScreen").innerHTML = "La cantidad de redondas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("blancaScreen").innerHTML = "La cantidad de blancas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("negraScreen").innerHTML = "La cantidad de Negras que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("corcheaScreen").innerHTML = "La cantidad de corcheas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("semiCorcheaScreen").innerHTML = "La cantidad de Semi-corcheas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("fusaScreen").innerHTML = "La cantidad de Fusas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("semiFusaScreen").innerHTML = "La cantidad de Semi-Fusas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";


}

function calcularTIEMPO() {
  /* Tiempo */
  let Tempo = document.getElementById("bpm-forTiempo").value;
  let Golpes = document.getElementById("beat-forTiempo").value;

  let Tiempo  = (Golpes/(Tempo));


  if (Tiempo == 1) {
    document.getElementById("result-forTiempo").innerHTML =
      Tiempo + " minuto o " + Tiempo * 60 + " segundos";

  } else {
    document.getElementById("result-forTiempo").innerHTML =
      Tiempo + " minutos o " + Tiempo * 60 + " segundos";
  }

  document.getElementById("bpmScreen2").innerHTML = Tempo + "Bpm o " + Tempo + " Golpes por Minuto";


  operacion =60/Tempo;


  document.getElementById("timeBeatScreen2").innerHTML = "La duracion de 1 golpe es de " + operacion + "s"+ " o "+operacion+" Segundos";
  document.getElementById("timeCompasScreen2").innerHTML = "La duracion de 1 compás es de " + (operacion*4) + "s"+ " o "+(operacion*4)+" Segundos";
  operacion = Tempo*Tiempo;
  document.getElementById("redondaScreen2").innerHTML = "La cantidad de redondas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("blancaScreen2").innerHTML = "La cantidad de blancas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("negraScreen2").innerHTML = "La cantidad de Negras que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("corcheaScreen2").innerHTML = "La cantidad de corcheas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("semiCorcheaScreen2").innerHTML = "La cantidad de Semi-corcheas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("fusaScreen2").innerHTML = "La cantidad de Fusas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("semiFusaScreen2").innerHTML = "La cantidad de Semi-Fusas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";

}

function calcularCOMPASES() {
  /* Golpes */
  let Tempo = document.getElementById("bpm-forCompaces").value;
  let Tiempo = document.getElementById("time-forCompaces").value;

  let Golpes = Tempo*Tiempo;
  document.getElementById("result-forCompaces").innerHTML = Golpes +" Golpes";





  document.getElementById("bpmScreen3").innerHTML = Tempo + "Bpm o " + Tempo + " Golpes por Minuto";


  operacion =60/Tempo;


  document.getElementById("timeBeatScreen3").innerHTML = "La duracion de 1 golpe es de " + operacion + "s"+ " o "+operacion+" Segundos";
  document.getElementById("timeCompasScreen3").innerHTML = "La duracion de 1 compás es de " + (operacion*4) + "s"+ " o "+(operacion*4)+" Segundos";
  operacion = Tempo*Tiempo;
  document.getElementById("redondaScreen3").innerHTML = "La cantidad de redondas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("blancaScreen3").innerHTML = "La cantidad de blancas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("negraScreen3").innerHTML = "La cantidad de Negras que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("corcheaScreen3").innerHTML = "La cantidad de corcheas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("semiCorcheaScreen3").innerHTML = "La cantidad de Semi-corcheas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("fusaScreen3").innerHTML = "La cantidad de Fusas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("semiFusaScreen3").innerHTML = "La cantidad de Semi-Fusas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";

}

function calcularTiempoMOVIMIENTO() {
  /* Duracion Movimiento */
  let Golpes = document.getElementById("beat-forDuracionMovimiento").value;
  let Tiempo = document.getElementById("time-forDuracionMovimiento").value;

  let Tempo = (Golpes/(Tiempo));

  let tMoves = (1/Golpes)*(Tiempo*60);/* Movimientos DURACION */
  document.getElementById("result-forDuracionMovimiento").innerHTML ="La Duracion de movimiento es de "+ tMoves + "s o " +tMoves+" segundos";

  document.getElementById("bpmScreen4").innerHTML = Tempo + "Bpm o " + Tempo + " Golpes por Minuto";


  operacion =60/Tempo;


  document.getElementById("timeBeatScreen4").innerHTML = "La duracion de 1 golpe es de " + operacion + "s"+ " o "+operacion+" Segundos";
  document.getElementById("timeCompasScreen4").innerHTML = "La duracion de 1 compás es de " + (operacion*4) + "s"+ " o "+(operacion*4)+" Segundos";
  operacion = Tempo*Tiempo;
  document.getElementById("redondaScreen4").innerHTML = "La cantidad de redondas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("blancaScreen4").innerHTML = "La cantidad de blancas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("negraScreen4").innerHTML = "La cantidad de Negras que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("corcheaScreen4").innerHTML = "La cantidad de corcheas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("semiCorcheaScreen4").innerHTML = "La cantidad de Semi-corcheas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("fusaScreen4").innerHTML = "La cantidad de Fusas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("semiFusaScreen4").innerHTML = "La cantidad de Semi-Fusas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";

}

function calcularMOVIMIENTO() {
  /* Movimientos */
  let Golpes = document.getElementById("beat-forMovimientos").value;
  let Tiempo = document.getElementById("time-forMovimientos").value;

  let Tempo = (Golpes/(Tiempo));

  document.getElementById("result-forMovimientos").innerHTML = Golpes + " movimientos";






    document.getElementById("bpmScreen5").innerHTML = Tempo + "Bpm o " + Tempo + " Golpes por Minuto";


  operacion =60/Tempo;


  document.getElementById("timeBeatScreen5").innerHTML = "La duracion de 1 golpe es de " + operacion + "s"+ " o "+operacion+" Segundos";
  document.getElementById("timeCompasScreen5").innerHTML = "La duracion de 1 compás es de " + (operacion*4) + "s"+ " o "+(operacion*4)+" Segundos";
  operacion = Tempo*Tiempo;
  document.getElementById("redondaScreen5").innerHTML = "La cantidad de redondas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("blancaScreen5").innerHTML = "La cantidad de blancas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("negraScreen5").innerHTML = "La cantidad de Negras que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("corcheaScreen5").innerHTML = "La cantidad de corcheas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("semiCorcheaScreen5").innerHTML = "La cantidad de Semi-corcheas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("fusaScreen5").innerHTML = "La cantidad de Fusas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";
  operacion = operacion*2;
  document.getElementById("semiFusaScreen5").innerHTML = "La cantidad de Semi-Fusas que puede hacer en " + Tiempo + " minutos es de " +(operacion)+" ";

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
