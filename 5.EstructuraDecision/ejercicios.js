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