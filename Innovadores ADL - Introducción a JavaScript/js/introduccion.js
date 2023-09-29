//nombreUsuario= "Carlos";

//fechaNacimiento = prompt("Escriba el año de nacimiento");

//fechaActual = prompt("Escriba el año actual");


//alert(fechaActual-fechaNacimiento);


// n1 = parseInt(prompt("Digite el primer número: "));

// n2 = parseInt(prompt("Digite el segundo número: "));


//suma = n1+n2;


//alert(suma);

//correo= prompt("Digite su correo: ")

//validarCorreo= correo.includes("@gmail.com");

//validarCorreo=== false ? alert("Solo gmail papá") : alert("Buen trabajo panita");


//Ejemplo con let

/*{

let n1= 5;
let n2=10;

let suma = n1+n2;
}*/

//document.write(suma2);

//Ejemplo con VAR

/*{

n1= 5;
n2=10;

suma = n1+n2;

}*/

//document.write(suma);

//Mostrar los números pares del 1 al 100
/*
for (let i=0;i<101;i++){
    if (i % 2== 0){
    document.write("El número: "+i+" es par."+"<br>");
    }
}

*/

//Ejemplo de funciones
/*
function saludar (nombre){

    alert("¿Qué pasó onme?"+" "+nombre);

}


saludar("Juan Carlos");
*/
/*
nombre= "Yurleivy"
document.write(`Hola, este es un saludo para: ${nombre}`);
*/

const pass = document.querySelector("#pass");


function mostrarContra() {

    if (pass.type==="password"){
        pass.type="text";
    }
    
    else{
        pass.type="password";
    }    

}


// document.write(2==="2"?alert("Es igual"):alert("No es igual"));

