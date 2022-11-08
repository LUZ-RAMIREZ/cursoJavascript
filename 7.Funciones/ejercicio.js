const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(3));
/*---------------------------------------------------------------------------------------------*/
function saludo(nombre,apellido){
    let saludo='hola como estas '+nombre+''+apellido
    return saludo 
}
//para usar una funcion debo llamr a la funcion
console.log(saludo('rafael','olarte'))
/*---------------------------------------------------------------------------------------------*/ 

//function contarVocales(texto){retur contidadvocales}

function contarvocales(texto){
    let contador = 0
    for(  i=0  ; i < texto.length ; i++){
        switch(texto[i]){
            case "a": case "e": case "i": case "o": case "u":  
          contador+=1
    }
}
 return contador
}
console.log(contarvocales('eucalito'))


//function calculadora(num1,num2,operadores){retur toral}
function calculado(num1,num2,operacion){
    if(operacion=='suma'){
        total=num1+num2
    }
return total
}
console.log(calculado(65,55, 'suma'))

function calculadora(num1,num2,operacion){
    if(operacion=='resta'){
        total=num1-num2
    }
return total
}
console.log(calculadora(45,55, 'resta'))

function calcular(num1,num2,operacion){
    if(operacion=='multiplicacion'){
        total=num1*num2
    }
return total
}
console.log(calcular(5,55, 'multiplicacion'))

function calcula(num1,num2,operacion){
    if(operacion=='division'){
        total=num1/num2
    }
return total
}
console.log(calcula(45,55, 'division'))