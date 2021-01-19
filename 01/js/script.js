// alert("Hello world");

$(document).ready(function() {

  // 1) Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

  let numero = parseInt(prompt('Inserisci un numero'));

  if (numero % 2 == 0) {
    console.log(numero);
  } else {
    ++numero;
    console.log(numero);
  }

});









// console.log();
