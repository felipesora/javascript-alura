
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomTim () {
    document.querySelector('#som_tecla_tim').play();
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom
listaDeTeclas[1].onclick = tocaSomClap
listaDeTeclas[2].onclick = tocaSomTim
