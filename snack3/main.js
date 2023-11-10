'use strict';

/*

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.


*/

// definisco variabile per la somma e la assegno inizialmente a zero
let somma = 0;


for (let i = 0; i < 10; i++) {

  // input numero utente
  const numero = Number(prompt('inserisci un numero'));

  // mostro il numero inserito di volta in volta
  console.log('Il numero inserito al passo', (i + 1).toString(), 'è', numero);

  // aggiorno la somma ad ogni iterazione
  somma += numero;

}

// stampo risultato finale
console.log('La somma dei numeri inseriti è:', somma);