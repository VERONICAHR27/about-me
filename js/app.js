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

const nombre = prompt ("Cual es tu nombre");
alert("Bienbenido "  + nombre + " ,te invito a conocer mas de mi");

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

  alert("Adivinaste " + respuesta_correcta + " preguntas " + nombre + ".")
  alert("Oh, "+ nombre + " tienes "+ respuesta_incorrecta + " preguntas erroneas.")
  


  

