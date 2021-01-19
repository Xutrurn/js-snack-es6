// alert("Hello world");

$(document).ready(function() {

  // 2) Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


  const arrayNumeri = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < arrayNumeri.length; i++) {
    if (arrayNumeri[i] % 2 != 0) {
      document.getElementById('rosso').innerHTML += `${arrayNumeri[i]}${' - '}`;
    } else {
      document.getElementById('verde').innerHTML += `${arrayNumeri[i]}${' - '}`;
    }
  }

});









// console.log();
