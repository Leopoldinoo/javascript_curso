const prompt = require('prompt-sync')({sigint: true});

const prova1 = Number(prompt("Digite a nota da 1º Prova: "));
const prova2 = Number(prompt("Digite a nota da 2º Prova: "));
const reda = Number(prompt("Digite a nota da Redação: "));

let nota = prova1 + prova2 + reda;

if(nota >= 1500){
  console.log(`Você tirou: ${nota},`,"Você pode estudar na Ufla!");
}

else if(nota >= 1000){
  console.log(`Você tirou: ${nota},`, "Você pode estudar na Unilavras!");
}

else{
  console.log(`Você tirou: ${nota},`, "Volte ano que vem!");
};