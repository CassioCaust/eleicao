const prompt = require("prompt-sync")();

const votos1 = [];
const votos2 = [];
const votos3 = [];
const votos4 = [];
const votos5 = [];


const votar = () => {
    let voto = Number(prompt("Para qual candidato deseja votar? Escolha entre 1 e 5. "))
    switch (voto) {
        case 1:
            votos1.push(voto)
        
        break;
        case 2:
            votos2.push(voto)
        
        break;
        case 3:
            votos3.push(voto)
        
        break;
        case 4:
            votos4.push(voto)
        
        break;
        case 5:
            votos5.push(voto)
        
        break;
        default:
            console.log("Você não votou em um candidato válido! ")
            break;
    }
}

const listar = () => {
    console.log(`Existem ${votos1.length} votos para o Candidato 1`)
    console.log(`Existem ${votos2.length} votos para o Candidato 2`)
    console.log(`Existem ${votos3.length} votos para o Candidato 3`)
    console.log(`Existem ${votos4.length} votos para o Candidato 4`)
    console.log(`Existem ${votos5.length} votos para o Candidato 5`)
}

const atualizar = () => {
    let votoAntigo = Number(prompt("Qual foi seu voto anterior? "))
        switch (votoAntigo) {
            case 1:
                votos1.pop()
            
            break;
            case 2:
                votos2.pop()
            
            break;
            case 3:
                votos3.pop()
            
            break;
            case 4:
                votos4.pop()
            
            break;
            case 5:
                votos5.pop()
            
            break;
            default:
                console.log("Você não escolheu um candidato válido! ")
                break;
        }
    let votoNovo = Number(prompt("Qual seu novo voto? "))
        switch (votoNovo) {
            case 1:
                votos1.push(votoNovo)
            
            break;
            case 2:
                votos2.push(votoNovo)
            
            break;
            case 3:
                votos3.push(votoNovo)
            
            break;
            case 4:
                votos4.push(votoNovo)
            
            break;
            case 5:
                votos5.push(votoNovo)
            
            break;
            default:
                console.log("Você não votou em um candidato válido! ")
                break;
        }
    console.log("Voto Atualizado! ")
}

const remover = () => {
    let retirar = Number(prompt("Qual voto deseja remover? "))
    switch (retirar) {
        case 1:
            votos1.pop()
        
        break;
        case 2:
            votos2.pop()
        
        break;
        case 3:
            votos3.pop()
        
        break;
        case 4:
            votos4.pop()
        
        break;
        case 5:
            votos5.pop()
        
        break;
        default:
            console.log("Você não escolheu um candidato válido! ")
            break;
    }
    console.log("Voto Removido!")
}

module.exports = {
    votar,
    listar,
    remover,
    atualizar,
};