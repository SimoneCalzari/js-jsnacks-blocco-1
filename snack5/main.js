'use strict';

// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

const n = Number(prompt('Inserisci un numero'));

let arrays = [];

let i = 0;

while (i < n) {
  for (let j = 0; j < 10; j++){
    arrays[j] = Math.floor(Math.random() * 100) + 1;
    if (j === 9) {
      alert(arrays);
    }
  }
  i++
}