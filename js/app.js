"use strict"
//Pregunta 1 Me gusta los deportes
const respuesta1 = "Si";
//Pregunta 2 Participe en alguna competencia Internacional
const respuesta2 = "Si";
//Pregunta 3 Mi deportista destacada es Belen Casette
const respuesta3 = "No";
//Pregunta 4 Practico mas de 8 años el ateltismo
const respuesta4 = "SI";
//Pregunta 5 Mi lugar de entrenamiento es en Lima
const respuesta5 = "NO";

let respuesta_correcta = 0;
let respuesta_incorrecta = 0;


const nombre = prompt ("Hola, ¿Cual es tu nombre?");
alert("Bienvenid@ "  + nombre + " ,te invito a conocer mas de mi");
alert("Te mostrare 5 preguntas y debes adivinar con SI o NO  ");
const Pregunta1 = prompt("¿Me gusta los deportes?");
if(respuesta1.toLowerCase() === Pregunta1.toLowerCase()){
    console.log("Respuesta correcta 👏  " + nombre) 
    alert("Respuesta correcta 👏 " + nombre)
    respuesta_correcta += 1;
  } else{
    console.log("Respuesta incorrecta 😢 " + nombre);
    alert("Respuesta incorrecta 😢 " + nombre);
    respuesta_incorrecta += 1;
  }

const Pregunta2 = prompt("¿Participe en alguna competencia Internacional?");
if(respuesta2.toLowerCase() === Pregunta2.toLowerCase()){
  console.log("Respuesta correcta 👏  " + nombre) 
  alert("Respuesta correcta 👏 " + nombre)
  respuesta_correcta += 1;
} else{
  console.log("Respuesta incorrecta 😢 " + nombre);
  alert("Respuesta incorrecta 😢 " + nombre);
  respuesta_incorrecta += 1;
}

const Pregunta3 = prompt("¿Mi deportista destacada es Belen Casette?");
if(respuesta3.toLowerCase() === Pregunta3.toLowerCase()){
  console.log("Respuesta correcta 👏  " + nombre) 
  alert("Respuesta correcta 👏 " + nombre)
  respuesta_correcta += 1;
} else{
  console.log("Respuesta incorrecta 😢 " + nombre);
  alert("Respuesta incorrecta 😢 " + nombre);
  respuesta_incorrecta += 1;
}

const Pregunta4 = prompt ("¿Practico mas de 8 años el ateltismo?");
if(respuesta4.toLowerCase() === Pregunta4.toLowerCase()){
  console.log("Respuesta correcta 👏  " + nombre) 
  alert("Respuesta correcta 👏 " + nombre)
  respuesta_correcta += 1;
} else{
  console.log("Respuesta incorrecta 😢 " + nombre);
  alert("Respuesta incorrecta 😢 " + nombre);
  respuesta_incorrecta += 1;
}

const Pregunta5 = prompt("¿Mi lugar de entrenamiento es en Lima?");
if(respuesta5.toLowerCase() === Pregunta5.toLowerCase()){
  console.log("Respuesta correcta 👏  " + nombre) 
  alert("Respuesta correcta 👏 " + nombre)
  respuesta_correcta += 1;
} else{
  console.log("Respuesta incorrecta 😢 " + nombre);
  alert("Respuesta incorrecta 😢 " + nombre);
  respuesta_incorrecta += 1;
}
alert("Continuemos, te hare una pregunta y tendras 4 intentos para poder adivinar, suerte");
const numeroIntentos = 4 ;
const numeroAdivinar= 23;
let contadorintentos= 1; 

while(contadorintentos <=numeroIntentos){
  const numeroUsuario = Number (prompt("¿Cual es mi edad?"));
  if(numeroUsuario===numeroAdivinar){
    alert("Adivinaste, tengo " + numeroAdivinar + " años. Lograste en el " + contadorintentos + " intento ")
    respuesta_correcta += 1;
    break;
  }else{
    contadorintentos++;
    if(contadorintentos===numeroIntentos + 1){
      alert("oh no! Llegaste al numero maximo de intentos");
      respuesta_incorrecta += 1;
    }else{
      if (numeroUsuario < numeroAdivinar){
        alert("Mi edad  es mayor que " + numeroUsuario);
      }else{
        alert("Mi edad es menor que " + numeroUsuario);
      }
    }
  }
}
alert("Estamos por terminar, para la ultima pregunta tendras 6 intentos, suerte");

let correcta=0;
const paises=["ecuador", "argentina","africa","brazil","bolivia"];
let respuestaUsuario=prompt("Menciona algunos paises que conoci con el deporte");


for (let i=1;i<6;i++){
  for(let j=0; j < 6; j++){
    if(respuestaUsuario===paises[j]){
      alert("Exelente, Uno de los paises que conoci es " + respuestaUsuario);
      correcta=1;
      respuesta_correcta += 1;
      break;
    }
  }
  if(correcta==1){
    break;
  }else {
    respuestaUsuario = prompt("Sigue intentando");
  }
  if (i==5 && correcta==0){
    alert("oh no! Llegaste al numero maximo de intentos");
    alert(paises[i]);
    respuesta_incorrecta += 1;
  }
}
alert("A continuacion te mostrare cuantas preguntas acertaste o no");
  alert("Adivinaste " + respuesta_correcta + " preguntas " + nombre + ".");
  alert("Oh, "+ nombre + " tienes "+ respuesta_incorrecta + " preguntas erroneas.");
  


  

