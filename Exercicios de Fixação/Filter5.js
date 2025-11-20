let alunos = ["João-TurmaA","Maria-TurmaB","Pedro-TurmaA","Ana-TurmaC","Carlos-TurmaA","Julia-TurmaB"];

let alunosA = alunos.filter(aluno => {
  return aluno.includes("TurmaA");
});

console.log(alunosA);