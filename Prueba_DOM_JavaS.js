function sumar() {

  var  user  =  "“Camilo”";

  {
  
    let user =  "“Juan”";
  
  console.log(user);
  
  }


  var num1, num2, operacion;
  num1 = parseFloat(document.getElementById("numero-1").value);
  num2 = parseFloat(document.getElementById("numero-2").value);

  operacion = num1 + num2;
  operacion = operacion;
  document.getElementById("resultado").innerHTML = operacion;
  /*     alert(`El resultado es ${operacion}`); */
/*   alert("el tipo de dato de numero 1 es "+typeof(num1)+"<br>"+"el tipo de dato de numero 2 es "+typeof(num2)); */
  
  if (num1 == undefined || num1 == NaN) {
    alert("ingrese algo porfavor");
  }
}

function restar() {
  var num1, num2, operacion;
  num1 = document.getElementById("numero-1").value;
  num2 = document.getElementById("numero-2").value;
  operacion = num1 - num2;
  document.getElementById("resultado").innerHTML = operacion;
  /*     alert(`El resultado es ${operacion}`); */

/*   alert("el tipo de dato de numero 1 es "+typeof(num1)+"<br>"+"el tipo de dato de numero 2 es "+typeof(num2)); */
  
  if (num1.includes("A"||"a"||"B") & num1.includes(undefined)) {
    alert("ESTO TIENE LETRAS");
  }
}

function multiplicar() {
  var num1, num2, operacion;
  num1 = document.getElementById("numero-1").value;
  num2 = document.getElementById("numero-2").value;
  operacion = num1 * num2;
  document.getElementById("resultado").innerHTML = operacion;
  /*     alert(`El resultado es ${operacion}`); */
/*   alert("el tipo de dato de numero 1 es "+typeof(num1)+"<br>"+"el tipo de dato de numero 2 es "+typeof(num2)); */
  
  if (num1 == undefined || num1 == NaN) {
    alert("ingrese algo porfavor");
  }
}
