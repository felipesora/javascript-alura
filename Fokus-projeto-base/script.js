// Constantes para mudar a cor de fundo
const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
// Mudar a imagem
const banner = document.querySelector('.app__image');
// Mudar o Texto
const titulo = document.querySelector('.app__title');
// Para add e remover classes
const botoes = document.querySelectorAll('.app__card-button');
// Botão iniciar Temporizador 
const startPauseBt = document.querySelector('#start-pause');
// Para adicionar Musica
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused){
        musica.play();
    } else {
        musica.pause();
    }
});

// áudios do temporizador
const audioPlay = new Audio('sons/play.wav');
const audioPausa = new Audio('sons/pause.mp3');
const audioTempoFinalizado = new Audio('sons/beep.mp3')

// mudar a palavra do botao começar
const iniciarOuPausarBt = document.querySelector('#start-pause span');
// mudar imagem do botao começar 
const iconIniciarOuPausarBt = document.querySelector('.app__card-primary-butto-icon');
// printar o temporizador
const tempoNaTela = document.querySelector('#timer');


// temporizador
let tempoDecorridoEmSegundos = 1500;
let intervaloId = null

// Eventos de clicks dos botões
focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    // html.setAttribute('data-contexto', 'foco');
    // banner.setAttribute('src', 'imagens/foco.png');
    // Deixando o código melhor com a Função alterarContexto()
    alterarContexto('foco')
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo')
    longoBt.classList.add('active');
});

// função para otimizar o código
function alterarContexto(contexto) {
    mostrarTempo();
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
            break;
    
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <br> 
                <strong class="app__title-strong">Faça uma pausa curta!</strong>

            `
            break;
        
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície. <br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play()
        alert('Tempo Finalizado');
        const focoAtivo = html.getAttribute('data-contexto') == 'foco'
        if (focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado')
            document.dispatchEvent(evento)
        }
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
};

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar(){
    if (intervaloId){
        audioPausa.play();
        zerar()
        return
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"
    iconIniciarOuPausarBt.setAttribute('src', 'imagens/pause.png');
};

function zerar(){
    clearInterval(intervaloId);
    intervaloId = null
    iniciarOuPausarBt.textContent = "Começar"
    iconIniciarOuPausarBt.setAttribute('src', 'imagens/play_arrow.png');
}

function mostrarTempo () {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()