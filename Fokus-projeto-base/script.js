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

// Eventos de clicks dos botões
focoBt.addEventListener('click', () => {
    // html.setAttribute('data-contexto', 'foco');
    // banner.setAttribute('src', 'imagens/foco.png');
    // Deixando o código melhor com a Função alterarContexto()
    alterarContexto('foco')
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active');
});

// função para otimizar o código
function alterarContexto(contexto) {
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