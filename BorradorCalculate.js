{
  /* Funciones */

  if (optionInput == 1) {
    /* Ritmo/Tempo/Bpm */
    Compases = document.getElementById("beat-forRitmo").value;
    Tiempo = document.getElementById("time-forRitmo").value;

    operacion = (Compases / Tiempo) * 60;

    document.getElementById("result-forRitmo").innerHTML = operacion;
    alert(typeof Compases + "<->" + typeof Tiempo + "<->" + typeof operacion);
    alert(operacion);
  }
  if (optionInput == 2) {
    /* Tiempo */
    Tempo = document.getElementById("bpm-forTiempo").value;
    Compases = document.getElementById("beat-forTiempo").value;

    operacion = ((1 / (Compases / 60)) * Tempo) / 60;
    document.getElementById("result-forTiempo").innerHTML = operacion;
  }
  if (optionInput == 3) {
    /* Compaces */
    Tempo = document.getElementById("bpm-forCompaces").value;
    Tiempo = document.getElementById("time-forCompaces").value;

    operacion = (Compases / Tiempo) * 60;
    document.getElementById("result-forCompaces").innerHTML = operacion;
  }
  if (optionInput == 4) {
    /* Duracion Movimiento */
    Compases = document.getElementById("beat-forDuracionMovimiento").value;
    Tiempo = document.getElementById("time-forDuracionMovimiento").value;

    operacion = (Compases / Tiempo) * 60;
    document.getElementById("result-forDuracionMovimiento").innerHTML =
      operacion;
  }
  if (optionInput == 5) {
    /* Movimientos */
    Compases = document.getElementById("beat-forMovimientos").value;
    Tiempo = document.getElementById("time-forMovimientos").value;

    operacion = (Compases / Tiempo) * 60;
    document.getElementById("result-forMovimientos").innerHTML = operacion;
  }
}

function calcular() 
{
  if (optionInput == 1) {
    /* Ritmo/Tempo/Bpm */
    Compases = document.getElementById("beat-forRitmo").value;
    Tiempo = document.getElementById("time-forRitmo").value;

    operacion = (Compases / Tiempo) * 60;
    document.getElementById("result-forRitmo").innerHTML = operacion;
  }
  if (optionInput == 2) {
    /* Tiempo */
    Tempo = document.getElementById("bpm-forTiempo").value;
    Compases = document.getElementById("beat-forTiempo").value;

    operacion = ((1 / (Compases / 60)) * Tempo) / 60;
    document.getElementById("result-forTiempo").innerHTML = operacion;
  }
  if (optionInput == 3) {
    /* Compaces */
    Tempo = document.getElementById("bpm-forCompaces").value;
    Tiempo = document.getElementById("time-forCompaces").value;

    operacion = (Compases / Tiempo) * 60;
    document.getElementById("result-forCompaces").innerHTML = operacion;
  }
  if (optionInput == 4) {
    /* Duracion Movimiento */
    Compases = document.getElementById("beat-forDuracionMovimiento").value;
    Tiempo = document.getElementById("time-forDuracionMovimiento").value;

    operacion = (Compases / Tiempo) * 60;
    document.getElementById("result-forDuracionMovimiento").innerHTML =
      operacion;
  }
  if (optionInput == 5) {
    /* Movimientos */
    Compases = document.getElementById("beat-forMovimientos").value;
    Tiempo = document.getElementById("time-forMovimientos").value;

    operacion = (Compases / Tiempo) * 60;
    document.getElementById("result-forMovimientos").innerHTML = operacion;
  }
}