let nomes = ["Ana", "Carlos", "Amanda", "João", "Alice", "Pedro"];

let aprovados = nomes.filter((nome) => {
return nome.startsWith("A");
});
console.log(nomes);
console.log(aprovados);