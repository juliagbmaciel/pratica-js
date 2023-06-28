/* function rand(min, max){
    min  *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
} 
 
 function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    } );



 }


 esperaAi('frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand (1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .catch() */



    const mypromise = new Promise((resolve, reject) =>{
        const name = 'Matheus'

        if(name === 'Matheus'){
            resolve('Usuário Matheus encontrado')
        }else{
            reject('O usuario Matheus não foi encontrado')
        }
    })


    mypromise.then((data) =>{
        console.log(data)
    })

    //Encadeamento de thens

    const mypromise2 = new Promise((resolve, reject) =>{
        const name = 'Matheus'

        if(name === 'Matheus'){
            resolve('Usuário Matheus encontrado')
        }else{
            reject('O usuario Matheus não foi encontrado')
        }
    })


    mypromise2.then((data) =>{
        return data.toLowerCase();
    }).then((stringModificada) =>{
         console.log(stringModificada)
    })

    //Retorno do catch


    /* Promises no caso ajuda na questao de API's, ele espera a resposta da api ou a execução de
    código tal, para realizar determinada função, vamos lá */
    const mypromise3 = new Promise((resolve, reject) =>{
        //Aqui declarei que a variavel name recebe um valor
        const name = 'MathJo~soeus'


        //Aqui a gente verifica se esse valor é igual a Matheus
        if(name === 'Matheus'){
            //Se for igual a Matheus, então vou mandar esse parâmetro pra minha função que está dentro de then
            //E o Then só vai ser executado depois que ele tiver a resposta do resolve(ou do reject)
            //Podemos associar isso a um callback
            resolve('Usuário Matheus encontrado')
        }else{
            //Reject é basicamente caso haja um erro no meu processo, mas o que eu mando pra la?
            //Em sua maioria o que é enviado para o reject é justamente o erro que teve,
            //que creio eu que virá da API.
            reject('Esse é o erro caso Matheus nao seja encontrado')
        }
    })

    //Ok, executei o mypromise3, então ei vou executar essa função que está dentro do meu then, e ah, 
    //essa função automaticamente recebe como parametro a mensagenzinha que eu coloquei ali no meu resolve
    //Para entendermos direito, acredito que o que sera enviado dentro do resolve é a resposta da API
    mypromise3.then((data) =>{
        console.log(data)
        //No catch a gente vai pegar o erro enviado pelo reject, e a partir dai nós decidimos o que será feito
    }).catch((erro) =>{
        console.log(erro)
    })


