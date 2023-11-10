'use strict';
/*

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/
const parola1 = prompt('Inserisci la prima parola');
const parola2 = prompt('Inserisci la seconda parola');

if (parola1.length < parola2.length) {

  console.log('parola1:', parola1);
  console.log('parola2:', parola2);

} else if (parola2.length < parola1.length) {

  console.log('parola2:', parola2);
  console.log('parola1:', parola1);


} else {

  console.log( 'Le due parole hanno la stessa lunghezza');

}