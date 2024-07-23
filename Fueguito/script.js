// //Voy a crear un programa que asigne tres números al azar entre 0 y 9, y luego me permita ingresar intentos
// //sucesivos de ingresos de número y me vaya diciendo a cuántos de los tres he acertado y cuántos están en el
// //orden correcto hasta que adivine los tres.

function numeroAleatorio(rep) {
  let num = [];
  for (let i = 0; i < rep; i++) {
    num.push(Math.floor(Math.random() * 10));
  }
  return num;
}

//TODAVÍA NO HACE UN BUEN MANEJO DE NUMEROS REPETIDOS

//Ahora tengo que permitir ingresar tres números;

function ingresoNumero() {
  let miArray = [];
  for (let i = 0; i < 3; i++) {
    miArray.push(Number(inputs[i].value));
  }
  return miArray;
}

//creo una función para comparar ambos arrays
function compararArrays(array1, array2) {
  let aciertos = 0;
  let ordenCorrecto = 0;

  console.log("Originales: " + array1);
  console.log("Ingresados: " + array2);

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      ordenCorrecto++;
    } else if (array1.includes(array2[i])) {
      aciertos++;
    }
  }
  if (ordenCorrecto === 3) {
    alert("Ganaste!!");
  }
  return [aciertos, ordenCorrecto];
}

let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");
let feedback = document.querySelector('#respuestas')
//Ejecuto la función que me genera el número a adivinar.
let originales = numeroAleatorio(3);


//Inicio un contador para que me diga que número de intento es...
let count = 0

button.addEventListener("click", function () {
    feedback.style.visibility='visible';
    count++;
  let ingresados = ingresoNumero();
  let resultado = compararArrays(originales, ingresados);
  let respuesta = `Intento ${count}: ${ingresados} <br>Aciertos: ${resultado[0]} <br>En el lugar correcto: ${resultado[1]} <br> `
  feedback.innerHTML += respuesta
  feedback.innerHTML += `<br>`
});
