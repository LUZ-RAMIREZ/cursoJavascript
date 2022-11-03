/*let eval=true
let eval2='salir'
while(eval==true){
    if(eval2=='salir'){
        console.log('adios')
        eval=false
    }
    console.log('hola')

    }

/*-------------------------------------------------------------------------------------------------------*/
/*FOR*/
/*var x = 0, Medida;
var Dias= ["L", "M", "Mi", "J", "V"];
Medida = Dias.length;
 for(; x < Medida; x++)
{
   console.log(Dias[x]);
}
/*  FOR/IN  */
/*var Equipo = ["Jose", "Eduardo", "Ana", "Aura", "Adrian"]; 
var c; 
for (c in Equipo ) 
{
  console.log(Equipo[c]);
}

/*WHILE*/
var i = 0;
while (i <= 30) {
  console.log(i);
  i++;
}
/*DO WHILW*/
var z = 30;
do {
   console.log("Contador en " + z);
  z++;
}
while (z < 30);
/*------------------------------------------------------------------------------------------------------------*/

/*var i
for(i=2; i<=20; i+=2){
  console.log(i)
}

var i
for(i=1; i<=20; i++){
  if(i%2==0){
    console.log(i)
  }else{
    console.log(i)
  }
}*/

/*let vocales ='aeiou'
console.log(vocales.length)
console.log(vocales[4])*/

/*for(i=0; i<vocales.length; i++){
  console.log(vocales[i])
}*/


/*/let texto='hola como estas como te llamas'
let contador=0
for(i=0; i<texto.length; i++){
  if(texto[i]=='a'){
     contador+=1
  }
}
console.log('tienes', contador, 'vocales a')*/


/*let texto='eucalito'
let contador=0
for(i=0; i<texto.length; i++){
  if(texto[i]== 'a'){
     contador+=1
  }
  if(texto[i]== 'e'){
    contador+=1
  }
  if(texto[i]== 'i'){
    contador+=1
  }
  if(texto[i]== 'o'){
    contador+=1
  }
  if(texto[i]== 'u'){
    contador+=1
  }
}
console.log('tienes', contador, 'vocales a')*/

let texto='eucalito'
let contador=0
for(i=0; i<texto.length; i++){
  switch(texto[i]){
    case'a': case'e': case'i': case'o': case'u':
      contador+=1
  }
}
console.log('tienes', contador, 'vacales')
/*methodo*/

/*Hacer un progrma que me muestre el factorial de un numero
5!=4*3*2*1
5!=123
hacer un programa que me determine si un texto es palimdromo

hacer un progrma que me muestre los n primer numeros de la serie de fibonacci
1-2-3-5-8-13
*/



