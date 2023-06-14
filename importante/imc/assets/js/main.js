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
    const nivelImc = getNivelImc(imc)
    console.log(imc, nivelImc);

    const msg= `Seu imc é ${imc} (${nivelImc})`
    setResultado(msg, true)

})


function getNivelImc(imc){
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3']

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc <  18.5) return nivel[0]
    
}

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
    if (isValid){
        //Adiciona a classe paragrafo-resultado no nosso p
        p.classList.add('paragrafo-resultado')     
    } else{
        p.classList.add('bad')
    }
    p.innerHTML = msg
    resultado.appendChild(p)
  
}}

