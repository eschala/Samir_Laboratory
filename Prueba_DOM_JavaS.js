



function sumar(){
    var num1,num2,operacion;
    num1 =parseFloat(document.getElementById("numero-1").value);
    num2 =parseFloat(document.getElementById("numero-2").value);

    operacion= num1+num2;
    operacion=(operacion);
    document.getElementById("resultado").innerHTML=operacion;
/*     alert(`El resultado es ${operacion}`); */

}

function restar(){
    var num1,num2,operacion;
    num1 =(document.getElementById("numero-1").value);
    num2 =(document.getElementById("numero-2").value);
    operacion= num1-num2;
    document.getElementById("resultado").innerHTML=operacion;
/*     alert(`El resultado es ${operacion}`); */

}

function multiplicar(){
    var num1,num2,operacion;
    num1 =(document.getElementById("numero-1").value);
    num2 =(document.getElementById("numero-2").value);
    operacion= num1*num2;
    document.getElementById("resultado").innerHTML=operacion;
/*     alert(`El resultado es ${operacion}`); */

}
