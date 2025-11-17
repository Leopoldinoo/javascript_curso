const prompt = require('prompt-sync')({sigint: true});

const qtd = 10;

const frutas = [];

for(let i = 1; i <= qtd; i++){
  const fruta = prompt(`Digite a fruta ${i}: `);
  frutas.push(fruta);
}

console.table(frutas)