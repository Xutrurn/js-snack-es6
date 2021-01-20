// alert("Hello world");

$(document).ready(function() {

  // 3) Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

  const parola1 = prompt('Inserisci una parola');
  const parola2 = prompt('Inserisci una parola');

  const lunghezzaParola = () => {
    if (parola1.length > parola2.length) {
      console.log(parola1);
    } else if (parola2.length > parola1.length) {
      console.log(parola2);
    } else {
      console.log(`${parola1}${' ha la stessa lunghezza di '}${parola2}`);
    }
  }

  lunghezzaParola();

});









// console.log();
