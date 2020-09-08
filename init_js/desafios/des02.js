const dadosRocketseat = {
    Nome: "Rocketseat",
    Cor: "Roxo",
    Foco: "Programação",
    Endereço: {
        Rua: "Rua: Rua Guilherme Gembala",
        Número: 260
    }
}

console.log(`A empresa ${dadosRocketseat.nome} está localizada em ${dadosRocketseat.Endereço.Rua}`);


// 02

const programador = {
    nome: "Eduardo",
    idade: 28,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O ${programador.nome} trabalha com ${programador.tecnologias[2].nome} ${programador.tecnologias[2].especialidade}`);