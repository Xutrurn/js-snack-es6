// alert("Hello world");

$(document).ready(function() {

  // jsnack 2
  // Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall 'utente
  // Usiamo i nuovi metodi degli array foreach o filter
  // Esempio:
  //   const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
  // Se l’ utente inserisce 2 numeri: 1, 4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'

  // creazione array di partenza
  const arrayNomi = ['Mario', 'Giuseppe', 'Giovanni', 'Luca', 'Francesco'];

  // richiesta utente
  const posizione1 = parseInt(prompt('Inserisci il valore iniziale compreso tra 0 e 4'));
  const posizione2 = parseInt(prompt('Inserisci il valore finale compreso tra 0 e 4 e maggiore del precedente'));

  // condizione di filtraggio per creazione nuovo array
  const nuovoArray = arrayNomi.filter((element, index) => {
    return posizione1 <= index && posizione2 >= index;
  });

  // stampa risultato
  console.log(nuovoArray);

});









// console.log();
