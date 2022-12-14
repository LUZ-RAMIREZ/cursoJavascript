//averiguar el metodo de javascript que me permite saber que tipo de dato tengo
console.log('jose') //String
//El operador typeof
//es un operador unario, lo que quiere decir que solo acepta (y opera) sobre un único argumento; en este caso una variable:

typeof 2; // number
typeof 'Hello World' // string
typeof [1,2,3] // object


//Este operador no es una función; sin embargo, pueden utilizarse paréntesis para agrupar los términos a evaluar:

typeof(2); // number
typeof ('Hello World'); // string
typeof('foo', 4); // number

/*------------------------------------------------------------------------------------------------*/
console.log(typeof 'hola')
console.log(typeof ('hola'))
console.log(typeof NaN)
console.log(typeof undefined)
/*arrays y objeto son tipos de datos, son estructuras*/
let array=[1,'hola', false] /* array*/
let objet={
    edad:45,
    nombre:'merida',
    asistio:true
}/*objecto*/
console.log(typeof objet)

//averiguar por que array y object