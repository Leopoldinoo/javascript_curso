const prompt = require ('prompt-sync')({sigint: true});

const lanches = [];
const qtd = 4;

for(let i = 1; i <= qtd; i++){
  const lanche = prompt(`Digite o lanche número ${i}: `);
  lanches.push(lanche);
}
  console.log(lanches);
  lanches.pop();
  console.log(lanches);
  lanches.pop();

  lanches.forEach((lanches,index)=> {
  console.table(`${index + 1}.${lanches}`);
  });