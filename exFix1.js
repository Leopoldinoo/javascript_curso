const prompt = require ('prompt-sync')({sigint: true});

const listadecompra = [];

const qtd = 10;

for(let i = 1; i <= qtd; i++){
  const item = prompt(`Digite o item ${i}: `);
  listadecompra.push(item);
}

listadecompra.forEach((listadecompra,index) => {
console.log(`${index + 1}.${listadecompra} `);
});