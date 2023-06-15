function criaHr(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT',
    });
}


const iniciar = document.querySelector('.iniciar')
const zerar = document.querySelector('.zerar')
const pausar = document.querySelector('.pausar')
const timer = document.querySelector('.timer')
let segundos = 0;
let timerDois;


function iniciaRelogio() {
    timerDois = setInterval(function () {
        segundos++
        timer.innerHTML = `${criaHr(segundos)}`
    }, 1000);
}

pausar.addEventListener('click', function (event) {
    clearInterval(timerDois)
})

iniciar.addEventListener('click', function (event) {
    iniciaRelogio();
})

zerar.addEventListener('click', function (event) {
    clearInterval(timerDois);
    segundos = 0;
    timer.innerHTML = `00:00:00`
})


