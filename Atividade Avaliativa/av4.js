const mensagens = [
  "Hoje o dia está lindo",
  "Não gostei desse trabalho",
  "A aula foi muito divertida",
  "Que tarefa chata"
];

const proibidas = ["chato","chata","Não gostei"];

const resultado = mensagens.filter(msg =>
  proibidas.some(palavra => msg.includes(palavra)
));
console.log(resultado);