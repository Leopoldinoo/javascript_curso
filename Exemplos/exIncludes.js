const filmes = [
  {nome: "Homem-Aranha", categoria : "Ação"},
  {nome: "Divertidamente", categoria: "Animação"},
  {nome: "Vingadores", categoria: "Ação"},
  {nome: "Carros", categoria: "Animação"}
];

const resultado = filmes.filter(u => u.categoria === "Ação");
console.table(resultado);

const resul2 = filmes.filter(u => u.nome.includes("Carros"));
console.log(resul2);