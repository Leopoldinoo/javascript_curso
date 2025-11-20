let aniversariantes = [
"Ana-15/03", "Carlos-20/07", "Maria-10/03",
"João-05/12", "Beatriz-25/03", "Pedro-18/06"
];

let aniversarios = aniversariantes.filter(aniversariante => {
  return aniversariante.includes("03");
});

console.log(aniversarios);