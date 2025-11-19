

let alunos = [
    "Ana-15", "Carlos-14", "Maria-15", "João-16",
    "Beatriz-15", "Pedro-13", "Luiza-15", "Ricardo-14"
]

let idade15 = alunos.filter(aluno => {
    let idade = aluno.split("-")[1]
    return idade === "15"
})

console.log(idade15)
