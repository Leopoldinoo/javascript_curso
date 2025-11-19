
//Filtrar notas acima da média usando Arrow function
let notas = [4.5, 8.0, 6.5, 9.0, 3.0];

//Versão completa com parênteses
let aprovados = notas.filter((nota) => {
  return nota >= 7;
});
//Todas notas
console.log(notas);
//Aprovados
console.log(aprovados);