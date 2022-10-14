var scanf = require('scanf');

var listaFrases = [];
console.log('Escriba "cancelar" si desea finalizar el programa\n')

do {
    console.log('Escriba algo por favor');
    var frase = scanf('%S');
    listaFrases.push(frase);
} while (frase != 'cancelar');

listaFrases.pop();
console.clear();

console.log('Frases Almacenadas: \n');
frasesCapturadas = listaFrases.forEach((frase, index) => console.log(`${index + 1} ${frase}`));

console.log('');
console.log('Program Exit..!');