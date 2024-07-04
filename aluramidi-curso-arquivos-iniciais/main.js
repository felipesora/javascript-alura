
function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    // template string
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


// while (contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];

//     // template string
//     const idAudio = `#som_${instrumento}`;
//     //console.log(idAudio);

//     //'#som_{instrumento}'

//     tecla.onclick = function () {
//         tocaSom(idAudio);
//     };

//     contador = contador + 1;

//     //console.log(contador);
// }
