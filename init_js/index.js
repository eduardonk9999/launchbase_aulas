/*
Variavel é tudo aquilo que vou guardar em memoria no computador.

*/

// const nome = 'Eduardo';
// console.log(nome);

// const nota = 8.2;
// const nota2 = 6;
// const nota3 = 2;
// console.log(typeof nota);

// //  Cindicionais
// const media = (nota + nota2 + nota3) / 3;
// console.log(media);

// if(media > 5) {
//     console.log('Aluno Passo');
// } else {
//     console.log('Aluno ñ passo')
// }



// // Operadores
// // &&
// console.log(5 == 5 && 6 == 6) // true
// console.log(5 == 5 && 6 != 6) // false

// // ||
// console.log(5 != 5 || 6 == 6) // true
// console.log(5 == 5 || 6 != 6) // false

// // ! 
// console.log(!(5 > 6)) // true
// console.log(!(5 < 6)) // false



// // Objetos
// const aluno01 = {
//     nome: "Eduardo",
//     nota: 8.0;
// }

// const alunaStatus = aluno01.nome;


// Arrays
const alunosTurmaA = [
    {
        nome: "AlunoUm",
        nota: 9.8
    },
    {
        nome: "AlunoDois",
        nota: 10
    },
    {
        nome: "AlunoDois",
        nota: 10
    }
]
const alunosTurmaB = [
    {
        nome: "AlunoUm",
        nota: 9.8
    },
    {
        nome: "AlunoDois",
        nota: 10
    },
    {
        nome: "AlunoDois",
        nota: 10
    },
    {
        nome: "AlunoDois",
        nota: 10
    }

]

// const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 2;


// Funções

function calculaMedia(alunos) {
    // return media = (alunosTurmaB[0].nota + alunosTurmaB[1].nota + alunosTurmaB[2].nota) / 2;
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota;
    }

    const media = soma / alunos.length;
    return media;
}

const notas = calculaMedia(alunosTurmaB);
console.log(notas);
