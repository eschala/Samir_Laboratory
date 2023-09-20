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

  function calculate() {
    // Obtener los valores de los inputs
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var resultSpan = document.getElementById("result");

    // Realizar la operación seleccionada
    var result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "*") {
        result = num1 * num2;
    }

    // Mostrar el resultado
    resultSpan.textContent = result;
}