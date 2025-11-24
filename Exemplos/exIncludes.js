const filmes = [
  {nome: "Homem-Aranha", categoria : "Ação"},
  {nome: "Divertidamente", categoria: "Animação"},
  {nome: "Vingadores", categoria: "Ação"},
  {nome: "Carros", categoria: "Animação"}
];

const resultado = filmes.filter(f => f.categoria === "Ação");
console.table(resultado);

const resul2 = filmes.filter(f => f.nome.includes("Carros"));
console.log(resul2);

const resultado3 = filmes.filter(f => f.nome.includes("V"));
console.log(resultado3);