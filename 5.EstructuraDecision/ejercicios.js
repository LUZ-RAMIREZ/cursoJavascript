/* CONDICION SIMPLE*/
var calificacion =9;

if(calificacion >=7 && calificacion<=10){
    console.log("esta aprobado")
}

/*CONDICION DOBLE*/
var calificacion =5;

if(calificacion >=7 && calificacion<=10){
    console.log("esta aprobado")
}else{
    console.log("esta desaprobado")
}

/*CONDICION MULTIPLE*/

var calificacion =8;

if(calificacion >=0 && calificacion<=10){
    if(calificacion >=7 && calificacion<=9){
        console.log("aprobado")
    }else if(calificacion == 10){
        console.log("aprobado tuviste una calificación perfecta")
    }else{
        console.log("reprobado")
    }
}else{
    console.log("valor fuera de rango, ingrese un dato valido")
}

/*hacer un programa que apartir de una variable edad determine 
si es mayor o menor*/

let edad = 18;
if(edad >=18){
    console.log("Es mayor de edad")
}else{
    console.log("Es menor de edad")
}

/*hacer un programa que almacene en una variable un password y evalue si el password es correcto, 
imprima un mensaje de Bienvenida si es igual, y un mensaje de error si no lo es.*/

let password = "LUNA123";
if(password=="LUNA123"){
    console.log("BIENVENIDO")
}else{
    console.log("ERROR")
}

/*hacer un programa que almacene dos dividendo y diviso numeros si su divisor es cero se debera mostrar
un mensaje de error caso contrario imprimira el resultado de divicion*/
let dividendo=15
let divisor=18
if(divisor==0){
    console.log("error")
}else{
    console.log(dividendo/divisor)
}


