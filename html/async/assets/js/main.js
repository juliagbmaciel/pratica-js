

//Crindo uma arrowfunction que recebe um objeto como parametro, esse objeo é onde vai conter o metodo dele e a url que vai abrir
const request = obj => {
    //retorna a promise, ja que a propria nao consegue receber parametro e nesse caso precisamos receber parametro
    return new Promise((resolve, reject) => {

        //definindo meu objeto XMLHttpRequest, ler documentação melhor depois pra saber oq pode ser feito com ele
        const xhr = new XMLHttpRequest();
        //aqui a gente inicia o objeto, ou seja abre a pagina 
        //=> 1° arg: metodo, que pode ser 'POST'(mande algo) ou 'GET'(pegue algo)
        //=> 2° arg: é a url que será aberta, neste caso estamos recebendo a url de um objeto que vai ser criado laa embaixo
        //=> 3° arg: Se será assincrono ou não, nesse caso sera assincrono, ou seja, o carregamento da pagina não irá depender
        //da resposta desse xml request aqui, pode continuar fazendo outras coisas (pesquisar melhor depois)
        xhr.open(obj.method, obj.url, true);
        //Enviando o request pro objeto, ou seja mandando ele fazer o que eu configurei ali em open
        xhr.send();
    
        //adicionando no xhr o evento load, ou seja, quando for carregado execute a seguinte função(que no caso ali é uma arrowfunction sem parametros)
        xhr.addEventListener('load', () =>{
            /*Depois que ele carregar, a gente tem uma resposta, se deu ou se não deu certo(existe uma tabela de codigos recebidos, posso olhar depois
            e ver pra entender e tratar da melhor forma, mas esse filtro aplicado no if parece me atender bem)*/
            if (xhr.status >= 200 && xhr.status < 300){
                //se o status do xhr depois de carregado estiver entre esses dois valores, então deu certo, ou seja, RESOLVE!!!
                console.log(xhr.response)
                /* estou recebendo dentro do meu objeto xhr.response EXATAMENTE o que tem dentro da minha pagina, ainda nao escolhi o que eu quero que seja pego
                de la de dentro, então só me traz tudo aí, (fica armazenado dentro de response, mas aparentemente ja esta em formato de texto dentro de response,
                entao nao entendi o uso de Text mas ok) */
                resolve(xhr.responseText);
            }else {
                //se der algo errado, ele manda o reject com o status do objeto, retorna o numero 404 (error 404: not found, e podemos tratá-lo a partir disso)
                reject(xhr.statusText)
            }
        })
    })

};

//procedimento padrao adicionando evento na pagina e pegando o elemento, validando se o elemento tem a tag 'a', se sim ele pevine o envio
//ou seja, nao carrega a pagina, e chama a função carrega pagina que é assincrona, mandando o elemento cru la pra dentro, sem ser a tag
document.addEventListener('click', (e) =>{
    const el = e.target;
    const tag = e.target.tagName.toLowerCase();
    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    };
});


//função assincrona que carrega a pagina e obtem a resposta da promise, alem de inicializar ela também
async function carregaPagina(el) {
    //tente fazer, se não, busca o erro que estamos recebendo de dentro da promise e apresenta no console
    try{
        //pegando o que tem dentro do atributo href do elemento, o que no caso é a url(usamos um objeto pra mandar esse parametro la pra 
        //promise, porque ele muda, é de acordo com o link clicado pelo usuario)
        const href = el.getAttribute('href');
        //armazenamos em resposta, a resposta do resolve da promise, e utilizando o await conseguimos realizar esse processo de forma assincrona
        //lembrete: request nada mais é do que a função que recebe objeto como parametro e retorna uma promise
        const resposta = await request({
            method: 'GET',
            url: href,
        })
        //mandando pra função carregaResultado a resposta que obtivemos da função request, e essa resposta é o elemento em formato de texto
        carregaResultado(resposta)
    }catch(e){
        console.log(e)
    }

}

//criamos a div resultado la no index.html, aqui nos apenas selecionamos ela e inserimos atraves do innerHTML a resposta que obtivemos da promise la em cima
//confuso mas faz sentido, a resposta que tivemos foi <h1>Tal coisa</h1>, ou seja, vai inserir no html literalmente como se fosse um elemento, com formatações equivalentes
function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
};

