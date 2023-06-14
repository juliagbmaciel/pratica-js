// Capturar evento de submit do formulário
const form = document.querySelector('#form')

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    // evento target vai indicar que é pra pegar o elemento com o id peso que esteja dentro do elemento clicado, ou seja
    //<form action="/" id="form" method="POST"></form>
    const inputPeso = evento.target.querySelector('#peso')
    const inputAltura = evento.target.querySelector('#altura')
    

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    // se peso nao for verdadeiro, ou seja, se não for um número (no caso ele retornaria NaN == false)
    // Ele mostra a mensagem de peso inválido e para a execução da função
    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura){
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    console.log(imc);

})


function getImc(peso, altura){
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criaP(className){
    // Cria um parágrafo
    const p = document.createElement('p');
    return p;
}


function setResultado(msg, isValid){{
    const resultado = document.querySelector('#resultado')
    //Limpa minha div id resultado
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg
    resultado.appendChild(p)
  
}}

