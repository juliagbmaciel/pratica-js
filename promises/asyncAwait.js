function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);

}



function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string'){
                reject('CAI NO ERRO')
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}



//mesma coisa que o promise mas mais organizado
async function executa() {
    try{
        //armazeno a resposta da promise em fase1 como se fosse o parametro que eu recebo la no then, mas note que se eu tirar o await (que é como se fosse o then)
        //ele da um console log em Promise { <pending> } porque quando eu dei console log ela ainda nao tinha executado, entao nao tinha como mostrar algo que ainda nao foi 
        //executado
        const fase1 = esperaAi('Fase 1', rand());
        console.log(fase1)

        //assim como no then, a fase2 espera a fase1 pra ser executada
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3)
        const fase4 = await esperaAi('Fase 4', rand());
        console.log(fase4)
        console.log('terminamos na fase', fase4)
     //O try catch pega o erro que foi enviado da promise, e aqui eu posso colocar o catch tanto pra cada uma das fases quanto pra todas elas, eu que decido   
    }catch(e){
        console.log(e)
    }

}

executa()