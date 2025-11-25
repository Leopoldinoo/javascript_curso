const usuarios = [
  {nome: "João", estado: "SP"},
  {nome: "Marina", estado: "MG"},
  {nome: "Cauã", estado: "MG"},
  {nome: "Bianca", estado: "RJ"}
];

const resultado = usuarios.filter(u => u.estado.includes("MG"));
console.log(resultado);