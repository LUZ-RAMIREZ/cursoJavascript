//averiguar las diferencias entre let y var

//Tanto var como let se utilizan para crear variables. La diferencia es el tiempo de vida de las mismas. Con var, la variable creada existe dentro de la función; 
//en tanto que con let, la variable existe unicamente en su bloque, es decir, en su par de llaves más próximo. 

//La diferencia es el alcance de cada una de estas instrucciones. La instrucción let declara una variable que existirá solo dentro del bloque o expresión
// que ha sido declarada. Al contrario, la instrucción var declara la variable globalmente. ¿Porque existen estas dos instrucciones? ¿Que ventajas tienen? Veamos algunos ejemplos.

var numero1 = 5; 
 
var numero2 = 10; 
 
 
 
if (numero1 === 5) { 
 
  let numero1 = 4; // El alcance es dentro del bloque if 
 
  var numero2 = 1; // El alcance es global 
 
 
 
  console.log(numero1);  // 4 
 
  console.log(numero2);  // 1 
 
}  
 
 
 
console.log(numero1); // 5 
 
console.log(numero2); // 1

//la cocina del codigo esta en youtube
//hosting, scope
//contexto global y local
/*---------------------------------------------------------------------------------------------------------*/
//let su contexto de ejecucion es de bloques o scope
let nombre='alavaro'
if(true){
  console.log(nombre)
}

if(true){
  let nombre2='alavaro'
}
console.log(nombre2)

if(true){
  var nombre1='alavaro'
}
console.log(nombre1)
