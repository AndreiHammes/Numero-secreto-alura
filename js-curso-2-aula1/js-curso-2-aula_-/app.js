// document.querySelector para selecionarmos elementos do html dentro do javascript
//innerHTML adicionarmos um texto a variavel que foi criada
let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag, texto)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial() {  
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}

exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')

function verificarChute() {
    // quando temos um input e queremos saber somente o valor usamos .value
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou')
        let palabraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palabraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é mnenor')
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if(quantidadeDeElementosNaLista == 10){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1  
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}


