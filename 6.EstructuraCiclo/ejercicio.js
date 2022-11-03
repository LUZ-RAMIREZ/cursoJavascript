let eval=true
let eval2='salir'
while(eval==true){
    if(eval2=='salir'){
        console.log('adios')
        eval=false
    }
    console.log('hola')

    }

/*-------------------------------------------------------------------------------------------------------*/
/*FOR
var x = 0, Medida;
var Dias= ["L", "M", "Mi", "J", "V"];
Medida = Dias.length;
 for(; x < Medida; x++)
{
   console.log(Dias[x]);
}*/
/*  FOR/IN  
var Equipo = ["Jose", "Eduardo", "Ana", "Aura", "Adrian"]; 
var c; 
for (c in Equipo ) 
{
  console.log(Equipo[c]);
}*/

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
