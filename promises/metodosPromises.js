function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);

}


function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('new Error');


        setTimeout(() => { resolve(msg + ' Passei na promise') }, tempo);
    });
}



const promises = [
    esperaAi('Promise 1', 1000),
    esperaAi('Promise 2', 3000),
    esperaAi('Promise 3', 3000)
]

/* 
Nesse caso aqui ele executa todas as promises que estao dentro do meu array
mas se alguma delas der erro ele só vai executar o erro, e mais nenhuma outra Promise
*/
Promise.all(promises)
    .then(valor =>{
        console.log(valor)
    })
    .catch(erro =>{
        console.log(erro)
    })


//Esse mostra  que foi executado primeiro dentro do array(vai ser a string porque ela ja ta basciamente la)
Promise.race(promises)
    .then(valor =>{
        console.log(valor)
    })
    .catch(erro =>{
        console.log(erro)
    });

function baixaPagina(){
    const emCache = false;

    if (emCache){
        //Este metodo ja entrega uma promessa resolvida (nao entendi o porque mai ok, acredito que seja pelo beneficio de usar o then)
        //mesma coisa pra usar o Promise.reject
        return Promise.resolve('Está em cachê')
    }else {
        return esperaAi('Baixando página', 5000)
    }
}

baixaPagina()
    .then(mensagem =>{
        console.log(mensagem)
    })
    .catch(erro =>{
        console.log(erro)
    })