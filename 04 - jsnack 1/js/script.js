// alert("Hello world");

$(document).ready(function() {

  // jsnack 1
  // Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  // Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

  // creazione array di oggetti
  const arrayBiciclette = [{
      nome: 'Aaaa',
      peso: 4
    },
    {
      nome: 'Bbbb',
      peso: 5
    },
    {
      nome: 'Cccc',
      peso: 6
    },
    {
      nome: 'Dddd',
      peso: 7
    },
  ];

  // setto il peso minore
  let biciclettaLeggera = 0;

  // condizione per cercare l'elemento con peso minore
  arrayBiciclette.forEach(element => {
    if (biciclettaLeggera == 0 || biciclettaLeggera.peso > element.peso) {
      biciclettaLeggera = element;
    }
  });

  // destructuring
  const {
    nome,
    peso
  } = biciclettaLeggera;

  // stampa con template literal
  console.log(`La bicicletta più leggera è la ${nome} con peso di ${peso} Kg.`);







});









// console.log();
