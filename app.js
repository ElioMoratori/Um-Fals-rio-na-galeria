pegaPalavras();

const pegaTítulo = document.querySelector('h1')
const pegaTexto = document.querySelector('p')
const botao = document.querySelector('button')
const divSeletores = document.querySelector('.select-box')
const seletor = document.querySelector('select')
const inputs = document.querySelector('.inputs')


let listaPalavras
let palavraEscolhida

let quantidadeDeJogadores
let Jogador
let jogadoresRodada = 0
let faker

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
    if (jogadoresRodada == faker) {
        pegaTítulo.textContent = "Falsário"
        pegaTítulo.style.color = 'red'
        pegaTexto.innerHTML = `A dica é <b>${palavraEscolhida.dica}</b>`
        botao.textContent = 'Próximo Jogador'
        botao.setAttribute('onclick','proximoJogador()')
        jogadoresRodada++
        return
    }
    
    pegaTítulo.textContent = palavraEscolhida.palavra
    pegaTexto.innerHTML = `A dica é <b>${palavraEscolhida.dica}</b>`
    botao.textContent = 'Próximo Jogador'
    botao.setAttribute('onclick','proximoJogador()')  
    jogadoresRodada++

}


function proximoJogador() {
    if(jogadoresRodada <= jogador) {
        pegaTítulo.style.color = '#f1f1f1'
        pegaTítulo.textContent = "Jogador nº " + jogadoresRodada
        pegaTexto.innerHTML = "Clique quando estiver pronto"
        botao.textContent = 'Exibir a palavra'
        botao.setAttribute('onclick','exibePalavraEscolhida()')
        return
    }

    divSeletores.classList.add('select-box')
    divSeletores.classList.remove('disabled')
    pegaTítulo.textContent = 'Um Falsário na Galeria'
    pegaTexto.textContent = 'Um aplicativo para jogar "A Fake Artist Goes to New York" sem a necessidade de moderador.'
    botao.textContent = 'Começar'
    botao.setAttribute('onclick', 'jogar()')
    seletor.value = ""
    jogadoresRodada = 0
    jogador = null
}


seletor.addEventListener('click', ()=> {
    quantidadeDeJogadores = seletor.value
    jogador = parseInt(quantidadeDeJogadores)
    faker = parseInt((Math.random() * quantidadeDeJogadores + 1))
    selecionaPalavra()
})


function jogar() {
    divSeletores.classList.remove('select-box')
    divSeletores.classList.add('disabled')
    jogadoresRodada++
    proximoJogador()
}