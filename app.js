pegaPalavras();

const pegaTítulo = document.querySelector('h1')
const pegaTexto = document.querySelector('p')
const botao = document.querySelector('button')

let listaPalavras
let pegaJogadores = document.querySelector('select').value
let palavraEscolhida


async function pegaPalavras() {
    const request = await fetch('./palavras.json')
    const listaJson = await request.json()
    return listaPalavras = await listaJson
    
}


function selecionaPalavra() {
    let palavras = listaPalavras.palavras
    let numero = parseInt(Math.random() * palavras.length + 1)
    palavraEscolhida = palavras[numero]
}




