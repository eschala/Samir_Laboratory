alert("Hola");

let Tempo, Tiempo, Movimientos, Duracion_Moves,bpm,mv,Compases, operacion;
let Redonda,Blanca,Negra,Corchea,Semicorchea,Fusa,Semifusa;
var respuesta;
alert("Escriba que desea calcular");
alert(
"1 Calcular bpm"+"</br>"+
"2 Calcular Tiempo"+"<br>"+
"3 Calcular Golpes o compases"+"<br>"+
"4 Calcular duracion de movimientos"+"<br/>"+
"5 Calcular la cantidad de movimientos"+"<br/>");

respuesta = prompt();

if(respuesta="1"){ 
    Compases = prompt("Escriba cuantos golpes se usaron");
    Tiempo = prompt("Escriba cuantos minutos se usaron");

    operacion = (Compases/Tiempo)*60;

}else
if(respuesta="2"){ 
    bpm = prompt("Escriba Cual es el Bpm");
    Compases = prompt("Escriba cuantos golpes se usaron");

    operacion = ((1/(Compases/60))*bpm)/60;

}else
if(respuesta="3"){ 
    bpm = prompt("Escriba Cual es el Bpm");
    Tiempo = prompt("Escriba cuantos minutos se usaron");


    operacion = (Compases/Tiempo)*60;
}else
if(respuesta="4"){ 
    Compases = prompt("Escriba cuantos golpes se usaron");
    Tiempo = prompt("Escriba cuantos minutos se usaron");

    operacion = (Compases/Tiempo)*60;

}else
if(respuesta="5"){ 
    Compases = prompt("Escriba cuantos golpes se usaron");
    Tiempo = prompt("Escriba cuantos minutos se usaron");

    operacion = (Compases/Tiempo)*60;

}else{

}

Tempo = prompt("Escriba los Bpm");

Tiempo = prompt("Escriba el tiempo en minutos");

Movimientos = prompt("Cuantos movimientos uso?");



Duracion_Moves = (((60/Tempo)*4)/60)*Tiempo;

/* Tempo = document.getElementById("Label-tempo").onmouseleave;
Tiempo = document.getElementById("label-tiempo").onmouseleave;
Movimientos = document.getElementById("Label-Movimientos").onmousemove; */
mv = Movimientos;

bpm = (1/Tempo)*(60*4);
Duracion_Moves = bpm/4;

document.write("La duracion de ");
document.write("El compas dura "+Duracion_Moves*4+" Segundos <br/>");
document.write("Es equivalente a Una Redonda");
document.write(" o "+Duracion_Moves/60*4+" Minutos <br/>");
Redonda = bpm;
Blanca = bpm*(1/2);
Negra = bpm*(1/4);
Corchea = bpm*(1/8);
Semicorchea = bpm*(1/16);
Fusa = bpm*(1/32);
Semifusa = bpm*(1/64);



    document.write("Un movimiento dura "+Negra+" segundos a "+Tempo +" Bpm");
    document.write("<br/>");
    document.write("una redonda dura "+Redonda+" segundos a "+Tempo +" Bpm");
    document.write("<br/>");
    document.write("una Blanca dura "+Blanca+" segundos a "+Tempo +" Bpm");
    document.write("<br/>");
    document.write("una Negra dura "+Negra+" segundos a "+Tempo +" Bpm");
    document.write("<br/>");
    document.write("una Corchea dura "+Corchea+" segundos a "+Tempo +" Bpm");
    document.write("<br/>");
    document.write("una Semicorchea dura "+Semicorchea+" segundos a "+Tempo +" Bpm");
    document.write("<br/>");
    document.write("una Fusa dura "+Fusa+" segundos a "+Tempo +" Bpm");
    document.write("<br/>");
    document.write("una Semifusa dura "+Semifusa+" segundos a "+Tempo +" Bpm");
    document.write("<br/>");

Compases =  (Tempo/60)*60*Tiempo;
Movimientos = ((60/Tempo)*Tiempo*60);

document.write("Los movimientos que puede hacer son "+Movimientos+" en "+ Tiempo +" Minutos o "+60*Tiempo+ " Segundos");
document.write(" que es equivalente a "+Movimientos+" Negras");
document.write("<br/>");

Tiempo = (mv/(60/Tempo));
document.write("Si usas "+mv +" Movimientos entonces ");
document.write("el tiempo es de "+Tiempo+" segundos o "+Tiempo/60 +" Minutos");

document.write("<br/>");
document.write("los Bpm o Tempo es de "+Compases+"Bpm");

document.write("<br/>");
document.write("<br/>");

respuesta= prompt("Desea calcular otra vez?"+" Escriba Si o No");

while(respuesta="Si"||"SI"||"si" ){

    Duracion_Moves = (((60/Tempo)*4)/60)*Tiempo;

    mv = Movimientos;
    
    bpm = (1/Tempo)*(60*4);
    Duracion_Moves = bpm/4;
    
    document.write("La duracion de ");
    document.write("El compas dura "+Duracion_Moves*4+" Segundos <br/>");
    document.write("Es equivalente a Una Redonda");
    document.write(" o "+Duracion_Moves/60*4+" Minutos <br/>");
    Redonda = bpm;
    Blanca = bpm*(1/2);
    Negra = bpm*(1/4);
    Corchea = bpm*(1/8);
    Semicorchea = bpm*(1/16);
    Fusa = bpm*(1/32);
    Semifusa = bpm*(1/64);
    
        document.write("Un movimiento dura "+Negra+" segundos a "+Tempo +" Bpm");
        document.write("<br/>");
        document.write("una redonda dura "+Redonda+" segundos a "+Tempo +" Bpm");
        document.write("<br/>");
        document.write("una Blanca dura "+Blanca+" segundos a "+Tempo +" Bpm");
        document.write("<br/>");
        document.write("una Negra dura "+Negra+" segundos a "+Tempo +" Bpm");
        document.write("<br/>");
        document.write("una Corchea dura "+Corchea+" segundos a "+Tempo +" Bpm");
        document.write("<br/>");
        document.write("una Semicorchea dura "+Semicorchea+" segundos a "+Tempo +" Bpm");
        document.write("<br/>");
        document.write("una Fusa dura "+Fusa+" segundos a "+Tempo +" Bpm");
        document.write("<br/>");
        document.write("una Semifusa dura "+Semifusa+" segundos a "+Tempo +" Bpm");
        document.write("<br/>");
    
    Compases =  (Tempo/60)*60*Tiempo;
    Movimientos = ((60/Tempo)*Tiempo*60);
    
    document.write("Los movimientos que puede hacer son "+Movimientos+" en "+ Tiempo +" Minutos o "+60*Tiempo+ " Segundos");
    document.write(" que es equivalente a "+Movimientos+" Negras");
    document.write("<br/>");
    
    Tiempo = (mv/(60/Tempo));
    document.write("Si usas "+mv +" Movimientos entonces ");
    document.write("el tiempo es de "+Tiempo+" segundos o "+Tiempo/60 +" Minutos");
    
    document.write("<br/>");
    document.write("los Bpm o Tempo es de "+Compases+"Bpm");
    
    document.write("<br/>");
    document.write("<br/>");
    
    respuesta= prompt("Desea calcular otra vez?"+" Escriba Si o No"); 

}
if(!((respuesta="Si"||"SI"||"si" )||(respuesta="No"||"NO"||"no" ))){


alert("Chao xD");


}
