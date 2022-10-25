/*la estructura de decision
seguira un camino distinto
segun la condicion*/
/* Se utiliza para tomar desiciones logicas, se evalua una condicion y dependiendo del resultado de la misma 
que camino o accion se debe realizar
se tiene 3 grupos de condiciones o estructuras selectivas, estos son:
1. condiciones simples.- solo vamos a tener un camino a relizar solo si se cumple una condicion si no el algorimo 
continua el fujo que tenga establecido, esto es para ejecutar una determinada accion cuando se cumple 
una determinada condicion.
  Para evaluar condiciones se usa la palabra SI, donde si el resultado de la condicion es verdadera, se ejecutan 
  las instrucciones dentro del condiones, si caso contrario el resultado es falso, entonces no se hace nada.
2. condiciones dobles.- vamos a tener dos caminos por realizar, se realiza uno o se realiza el otro pero nunca se
van realizar los dos en la mism ejecucion del algorimo.
3. condiciones multiples.- vamos a tener multiples caminos por realizar */
vocal= "e"
switch(vocal){
  case "a":
    console.log("Es una vocal")
    break
  case "e":
    console.log("Es una vocal")
    break
  case "i":
    console.log("Es una vocal")
    break
  case "o":
    console.log("Es una vocal")
    break
  case "u":
    console.log("Es una vocal")
    break
  default:
    console.log("No es una vocal")
}

vocal="A"
switch(vocal){
  case "A": case "E": case "I": case "O": case "U":
    console.log(`la letra ${vocal}, es una vocal`)
    console.log('la letra',vocal,'es una vocal')
    console.log("la letra",vocal,"es una vocal")
    console.log("la letra"+ vocal +"es una vocal")
    break
  default:
    console.log('no es vocal')
}