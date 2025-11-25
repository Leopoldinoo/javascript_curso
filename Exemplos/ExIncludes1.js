const amigos = [
  {nome: "Wallace", cidade : "Rio de Janeiro", idade: "23"},
  {nome: "Paiva", cidade: "São Paulo", idade: "16"},
  {nome: "Leopoldo", cidade: "Balneário", idade: "16"},
  {nome: "Pietro", cidade: "São Paulo", idade: "16"},
  {nome: "Júlio", cidade: "Salvador", idade: "16"}
];

const resultado = amigos.filter(a => a.cidade.includes("São Paulo"));
console.log(resultado);

const resultado2= amigos.filter(a => a.nome.includes("L"));
console.log(resultado2);

const resultado3 = amigos.filter(a => a.idade.includes(23));
console.log(resultado3); 
