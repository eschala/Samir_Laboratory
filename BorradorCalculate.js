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