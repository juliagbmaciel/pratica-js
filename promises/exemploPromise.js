//Função criada apenas para gerar um numero aleatorio que retorna um numero
//que sera usado como milissegundos para executar a função esperaAi

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);

}



/* Essa função retorna uma Promise, basicamente um codigo que espera obter o resultado primeiro e envia para
o then(se der certo), ou o catch(se der errado), através do resolve e reject (isso tudo dentro de uma função)*/
function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        //Se o tipo de mensagem recebida for diferente de string ele manda o reject que cai direto no catch e ignora os thens que faltam
        //tipo um try catch mais ou menos
        if (typeof msg !== 'string') reject(new Error('ERRO'));


        //ele manda a mensagem pro then através do resolve assim que passar o tanto de tempo(em milissegundos) que foi enviado pra função
        setTimeout(() => { resolve(msg) }, tempo);
    });
}


//chamando a função e mandando a mensagem que ela tem que executar depois de x segundos
//dentro da função a gente tem uma promise que espera um then pra ser executada, ou seja, se nao tiver then ela nao executa nada
//ja que a mensagem ta dentro do resolve (ou do reject)
esperaAi ('Conexão com o BD', rand(1, 3))
    //Então... dentro dela tem que ser criada uma funcao (que nesse caso é arrow function) que recebe como parâmetro a resposta que ta vindo da promise
    //no RESOLVE
    .then(respostaPromise => {
        //console.log no que está vindo de dentro da promise de dentro do resolve
        console.log(respostaPromise)
        //retorna ele chamando a promise DENOVOOO.
        return esperaAi('Buscando dados da BASE', rand(1, 3))
    })
    //Ok, a promise que ta dentro do then anterior vai ser executada e novamente precisamos de um then pra captrurar o resolve que ta la dentro e usar e etc
    .then(respostaPromise => {
        console.log(respostaPromise)
        return esperaAi("Tratando dados do BD", rand(1,3))
    })
    .then(respostaPromise => {
        console.log(respostaPromise)
        //não to chamando promise de novo para que encerre o ciclo
    })
    .then(() =>{
        console.log('Acabouuu')
    })
    .catch( e => {
        //se der erro cai aqui a mensagem que foi passada dentro do catch na promise, pula todos os thens que estão depois da promise que deu erro
        console.log(`${e}`)
    })