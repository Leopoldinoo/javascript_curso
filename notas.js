const prompt = require('prompt-sync')({sigint: true});

const qtd = 4;
const notas = [];

for(let i = 1; i <= qtd; i++){
  const nota = Number(prompt(`Digite a nota ${i}: `));
  notas.push(nota);
}

let soma = 0;

for(let i =0; i < notas.length; i++){
  soma = soma + notas[i];
}

const media = soma / qtd;

console.log(`Soma das notas: ${soma}`);

console.log(`Média das notas: ${media}`);