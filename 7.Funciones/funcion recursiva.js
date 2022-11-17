/*¿Qué es una función recursiva Javascript?
Es el acto de una función llamándose a sí misma. La recursión es utilizada para resolver problemas que
contienen subproblemas más pequeños. Una función recursiva puede recibir 2 entradas: un caso base
(finaliza la recursión) o un un caso recursivo (continúa la recursión).

ejemplo:

*/

function parImpar (numero) {
    if (numero === 0) {
        return 'Par';
    } else if (numero === 1) {
        return 'Impar';
    } else {
        return parImpar(numero - 2);
    }
};
console.log(parImpar(20))
console.log(parImpar(75))
console.log(parImpar(98))
console.log(parImpar(113))


function potencia(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * potencia(x, n - 1);
    }
  }
  
  console.log(potencia(2,3))
  console.log(potencia(2,5))
  console.log(potencia(2,6))