/* alert("Hola"); */

/* 

optionInput = document.getElementById("timeOption");
optionInput = document.getElementById("beatOption");
optionInput = document.getElementById("bpmOption");
optionInput = document.getElementById("timeMoves");
optionInput = document.getElementById("amountMoves");

 */

function enviar() {
  var optionInput;

  {
    if (document.getElementById("bpmOption").checked == true) {
      optionInput = document.getElementById("bpmOption").checked;

      alert("Selcionada la opcion para calcular el ritmo");
      optionInput = 1;
    } else if (document.getElementById("timeOption").checked == true) {
      optionInput = document.getElementById("timeOption").checked;

      alert("Selcionada la opcion para calcular el tiempo");
      optionInput = 2;
    } else if (document.getElementById("beatOption").checked == true) {
      optionInput = document.getElementById("beatOption").checked;

      alert("Selcionada la opcion para calcular los compaces");
      optionInput = 3;
    } else if (document.getElementById("timeMoves").checked == true) {
      optionInput = document.getElementById("timeMoves").checked;

      alert("Selcionada la opcion para calcular la duracion de movimientos");
      optionInput = 4;
    } else if (document.getElementById("amountMoves").checked == true) {
      optionInput = document.getElementById("amountMoves").checked;

      alert("Selcionada la opcion para calcular la cantidad de movimientos");
      optionInput = 5;
    } else {
      alert("que paso mijo");
    }
  }

  
  {
    if (optionInput == 1) {
      /* Ritmo/Tempo/Bpm */
      Compases = prompt("Escriba cuantos compases se usaron");
      Tiempo = prompt("Escriba cuanto de usó en minutos");

      operacion = (Compases / Tiempo) * 60;
    }
    if (optionInput == 2) {
      /* Tiempo */
      Tempo = prompt("Escriba Cual es el ritmo/Bpm");
      Compases = prompt("Escriba cuantos compases se usaron");

      operacion = ((1 / (Compases / 60)) * Tempo) / 60;
    }
    if (optionInput == 3) {
      /* Compaces */
      Tempo = prompt("Escriba Cual es el ritmo/Bpm");
      Tiempo = prompt("Escriba cuanto de usó en minutos");

      operacion = (Compases / Tiempo) * 60;
    }
    if (optionInput == 4) {
      /* Duracion Movimiento */
      Compases = prompt("Escriba cuantos compases se usaron");
      Tiempo = prompt("Escriba cuanto de usó en minutos");

      operacion = (Compases / Tiempo) * 60;
    }
    if (optionInput == 5) {
      /* Movimientos */
      Compases = prompt("Escriba cuantos compases se usaron");
      Tiempo = prompt("Escriba cuanto de usó en minutos");

      operacion = (Compases / Tiempo) * 60;
    }
  }


}
