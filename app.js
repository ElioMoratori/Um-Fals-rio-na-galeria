pegaPalavras();

const pegaTítulo = document.querySelector('h1')
const pegaTexto = document.querySelector('p')
const botao = document.querySelector('button')
const divSeletores = document.querySelector('.select-box')

let listaPalavras
let pegaJogadores = document.querySelector('select').value
let palavraEscolhida
let quantidadeJogadores


async function pegaPalavras() {
        try {
            const request = await fetch('./palavras.json')
            const listaJson = await request.json()
            return listaPalavras = await listaJson
        } 
        
        catch {
            alert('Não foi possível buscar as palavras')
            throw error
        }
}


function selecionaPalavra() {
    let palavras = listaPalavras.palavras
    let numero = parseInt(Math.random() * palavras.length + 1)
    palavraEscolhida = palavras[numero]
}

function exibePalavraEscolhida() {
    pegaTítulo.textContent = palavraEscolhida.palavra
    pegaTexto.innerHTML = `A dica é <b>${palavraEscolhida.dica}</b>`
    botao.textContent = 'Próximo Jogador'
    botao.onclick = proximoJogador
}

function proximoJogador() {
    pegaTítulo.textContent = "Jogador nº"
    pegaTexto.innerHTML = "Clique quando estiver pronto"
    botao.textContent = 'Exibir a palavra'
    botao.onclick = exibePalavraEscolhida
}

function jogar() {
    let quantidadeJogadores = document.querySelector('select').value
    divSeletores.classList.remove('select-box')
    divSeletores.classList.add('disabled')
    selecionaPalavra()
    proximoJogador()
}

