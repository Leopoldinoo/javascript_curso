const produtos = [
  {id: 1, nome: "Fone Bluetooth"},
  {id: 2, nome: "Mouse Gamer"},
  {id: 3, nome: "Fone com Fio"},
  {id: 4, nome: "Teclado Mecânico"}
];

const resultado = produtos.filter(f => f.nome.includes("Fone"));
console.log(resultado);