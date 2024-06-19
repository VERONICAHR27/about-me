"use strict"

const afirmativo = "Si";
const negativo = "No";

let respuesta_correcta = 0;
let respuesta_incorrecta = 0;

function preguntarNombreUsuario() {
  const nombre = prompt("Hola, ¿Cual es tu nombre?");
  alert("Bienvenid@ " + nombre + " ,te invito a conocer mas de mi");
  alert("Te mostrare 5 preguntas y debes adivinar con SI o NO  ");
}

function generadorPregunta() {
  const preguntas = [
      "¿Me gusta los deportes?",
      "¿Participe en alguna competencia Internacional?",
      "¿Mi deportista destacada es Belen Casette?",
      "¿Practico mas de 8 años el ateltismo?",
      "¿Mi lugar de entrenamiento es en Lima?",
  ];
  for (let i = 0; i < preguntas.length; i++) {
      compararRespuesta(preguntas[i]);
  }
}

function compararRespuesta(textodePregunta) {
  const pregunta = prompt(textodePregunta);
  if (afirmativo.toLowerCase() === pregunta.toLowerCase()) {
      alert("Respuesta correcta 👏  ");
      respuesta_correcta += 1;
  } else {
      alert("Respuesta incorrecta 😢 ");
      respuesta_incorrecta += 1;
  }
}
preguntarNombreUsuario();
generadorPregunta();


alert("Continuemos, te hare una pregunta y tendras 4 intentos para poder adivinar, suerte");
const numeroIntentos = 4;
const numeroAdivinar = 23;
let contadorintentos = 1;

while (contadorintentos <= numeroIntentos) {
  const numeroUsuario = Number(prompt("¿Cual es mi edad?"));
  if (numeroUsuario === numeroAdivinar) {
    alert("Adivinaste, tengo " + numeroAdivinar + " años. Lograste en el " + contadorintentos + " intento ")
    respuesta_correcta += 1;
    break;
  } else {
    contadorintentos++;
    if (contadorintentos === numeroIntentos + 1) {
      alert("oh no! Llegaste al numero maximo de intentos");
      respuesta_incorrecta += 1;
    } else {
      if (numeroUsuario < numeroAdivinar) {
        alert("Mi edad  es mayor que " + numeroUsuario);
      } else {
        alert("Mi edad es menor que " + numeroUsuario);
      }
    }
  }
}

alert("Estamos por terminar, para la ultima pregunta tendras 6 intentos, suerte");

let correcta = 0;
const paises = ["ecuador", "argentina", "africa", "brazil", "bolivia"];
let respuestaUsuario = prompt("Menciona algunos paises que conoci con el deporte");


for (let i = 1; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    if (respuestaUsuario === paises[j]) {
      alert("Exelente, Uno de los paises que conoci es " + respuestaUsuario);
      correcta = 1;
      respuesta_correcta += 1;
      break;
    }
  }
  if (correcta == 1) {
    break;
  } else {
    respuestaUsuario = prompt("Sigue intentando");
  }
  if (i == 5 && correcta == 0) {
    alert("oh no! Llegaste al numero maximo de intentos");
    alert(paises[i]);
    respuesta_incorrecta += 1;
  }
}
alert("A continuacion te mostrare cuantas preguntas acertaste o no");
alert("Adivinaste " + respuesta_correcta + " preguntas.");
alert("Oh, tienes " + respuesta_incorrecta + " preguntas erroneas.");





