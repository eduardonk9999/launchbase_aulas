const nome = 'Eduardo';
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

if(imc >= 30) {
    console.log("Carlos você está acima do peso");
} else {
    console.log("Carlos você não está acima do peso");
}


// Calc Aponsentadoria
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

if(idade >= 85 && idade >= 95) {
    if(sexo === "F"){
        console.log(`${nome}, você pode se aposentar`);
    } else {
        console.log(`${nome}, você não pode se aposentar`);
    }
} else{
    console.log(`${nome} você ainda não tem a idade para se aposentar`);
}

// essas variáveis irão retornar true ou false
// const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
// const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

// if ( homemPodeAposentar || mulherPodeAposentar) {
//     console.log(`${nome}, você pode se aposentar!`)
// } else {
//     console.log(`${nome}, você não pode se aposentar!`)
// }

