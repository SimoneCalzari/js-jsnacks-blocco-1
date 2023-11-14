'use strict';

// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.

//creo array vuoto
const array = [];

//creo la variabile somma
let somma = 0;

//creo la variabile d iterazione
let i = 0;

//ciclo while
while (somma < 50) {
  array[i] = Number(prompt('inserisci un numero'));
  somma += array[i];
  console.log(somma);
  i++;
}