/* alert("Hola"); */

/* 

optionInput = document.getElementById("timeOption");
optionInput = document.getElementById("beatOption");
optionInput = document.getElementById("bpmOption");
optionInput = document.getElementById("timeMoves");
optionInput = document.getElementById("amountMoves");

 */

function calcRitmo() {
  document.getElementsByClassName('forRitmo').style.display='block';
  
}

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
      Compases = document.getElementById('beat-forRitmo').value;
      Tiempo = document.getElementById('time-forRitmo').value;

      operacion = (Compases / Tiempo) * 60;
      /* document.getElementById('result-forRitmo').innerHTML=operacion; */
      /* operacion=documentgetElementById('result-forRitmo').innerHTM; */

      

      document.getElementById('result-forRitmo').innerHTML = operacion;
      alert(typeof(Compases)+"<->"+typeof(Tiempo)+"<->"+typeof(operacion));
      alert(operacion);



    }
    if (optionInput == 2) {
      /* Tiempo */
      Tempo = document.getElementById('bpm-forTiempo').value;
      Compases = document.getElementById('beat-forTiempo').value;

      operacion = ((1 / (Compases / 60)) * Tempo) / 60;
      document.getElementById('result-forTiempo').innerHTML=operacion;
    }
    if (optionInput == 3) {
      /* Compaces */
      Tempo = document.getElementById('bpm-forCompaces').value;
      Tiempo = document.getElementById('time-forCompaces').value;

      operacion = (Compases / Tiempo) * 60;
      document.getElementById('result-forCompaces').innerHTML=operacion;
    }
    if (optionInput == 4) {
      /* Duracion Movimiento */
      Compases = document.getElementById('beat-forDuracionMovimiento').value;
      Tiempo = document.getElementById('time-forDuracionMovimiento').value;

      operacion = (Compases / Tiempo) * 60;
      document.getElementById('result-forDuracionMovimiento').innerHTML=operacion;
    }
    if (optionInput == 5) {
      /* Movimientos */
      Compases = document.getElementById('beat-forMovimientos').value;
      Tiempo = document.getElementById('time-forMovimientos').value;

      operacion = (Compases / Tiempo) * 60;
      document.getElementById('result-forMovimientos').innerHTML=operacion;
    }
  }

}
function calcular(){


    {
        if (optionInput == 1) {




          /* Ritmo/Tempo/Bpm */
          Compases = document.getElementById('beat-forRitmo').value;
          Tiempo = document.getElementById('time-forRitmo').value;
    
          operacion = (Compases / Tiempo) * 60;
          document.getElementById('result-forRitmo').innerHTML=operacion;
        }
        if (optionInput == 2) {
          /* Tiempo */
          Tempo = document.getElementById('bpm-forTiempo').value;
          Compases = document.getElementById('beat-forTiempo').value;
    
          operacion = ((1 / (Compases / 60)) * Tempo) / 60;
          document.getElementById('result-forTiempo').innerHTML=operacion;
        }
        if (optionInput == 3) {
          /* Compaces */
          Tempo = document.getElementById('bpm-forCompaces').value;
          Tiempo = document.getElementById('time-forCompaces').value;
    
          operacion = (Compases / Tiempo) * 60;
          document.getElementById('result-forCompaces').innerHTML=operacion;
        }
        if (optionInput == 4) {
          /* Duracion Movimiento */
          Compases = document.getElementById('beat-forDuracionMovimiento').value;
          Tiempo = document.getElementById('time-forDuracionMovimiento').value;
    
          operacion = (Compases / Tiempo) * 60;
          document.getElementById('result-forDuracionMovimiento').innerHTML=operacion;
        }
        if (optionInput == 5) {
          /* Movimientos */
          Compases = document.getElementById('beat-forMovimientos').value;
          Tiempo = document.getElementById('time-forMovimientos').value;
    
          operacion = (Compases / Tiempo) * 60;
          document.getElementById('result-forMovimientos').innerHTML=operacion;
        }
      }
}
