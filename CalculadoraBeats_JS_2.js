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
