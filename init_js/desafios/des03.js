const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];


function checaSeUsuarioUsaCSS(usuario) {
    for (let i = 0; usuario.length > i; i++) {
        if(usuario[i].tecnologias.indexOf('CSS')){
            console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);

            return true;
        } else {
            return false;
        }
    }
}

checaSeUsuarioUsaCSS(usuarios)

function usersList(usuario) {
    for (let i = 0; usuario.length > i; i++) {
        // console.log(`${usuario[i].nome}, trabalha com ${usuario[i].tecnologias}`);
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);

        if(usuarioTrabalhaComCSS) {
            console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
        }
    }
}

const resp = usersList(usuarios);
console.log(resp)