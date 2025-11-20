let cidades = [
"São Paulo-SP",
"Rio de Janeiro-RJ",
"Campinas-SP",
"Belo Horizonte-MG",
"Santos-SP"
];

let cdd = cidades.filter(cidade => {
  return cidade.includes("-SP");
});

console.log(cdd);