//Formas de acessar objetos
const pessoa = {
    nome: 'julia',
    sobrenome: 'gabrielle maciel',
    idade: 19
}


//da primeira forma é melhor em ocasioes nas quais a chave será recebida dentro de uma variável(ou seja, você nao sabe o nome da chave)
console.log(pessoa['nome'])
console.log(pessoa.nome)

//Maneira de criar objeto com construtor
function Objeto(variavel, variavel2){
    this.nome = 'julia';
    this.sobrenome = 'gabrielle maciel';
    //maneira de criar metodo dentro de objeto com construtor
    // this.fala = function(){
    //     //se eu nao utilizo return, ele me retorna um valor "undefined"
    //     return `${this.nome} esta falando..`
    // }
    //property que declara se vai permitir ou nao que o usuario configure aquele atributo
    //nao esquecer de mandar como string....
    Object.defineProperty(this, 'variavel', {
        enumerable: true, //define se vai aparecer na tela
        value: variavel, //define qual o valor ele vai ter
        writable: true, //define se pode sobescrever
        configurable: true //define se pode configurar, exemplo deletar
    });
}
const objeto = new Objeto('oi', 'tdbem')


//ou sem a função, podemos criar os atributos diretamente:
//objeto.idade = 19


//caso eu queira travar o meu objeto, ou seja, não permitir que seja alterado nada dentro dele:
//Object.freeze(objeto)

//ver chaves do objeto 
console.log(Object.keys(objeto))



//criando objeto com defineProperties
function Tvs(marca, valor, cor){
    let valorTvs = valor;
    Object.defineProperties(this, {
        //julia é a chave que sera atribuida, posso colocar literalmente qqr coisa que vai virar o atributo da minha classe
        julia:{
            enumerable: true,
            //value é o valor que esta vindo de marca como parametro
            value: marca,
            writable: false,
            configurable: false
        },
        valor: {
            enumerable: false,
            configurable: false,
            //getter para pegar o valor das tvs
            get: function(){
                return valorTvs;
            },
            set: function(teste){
                if (typeof teste != 'number'){
                    console.log('digite um numero')
                }
            }
        },
        cor: {
            enumerable: true,
            value: cor,
            writable: false,
            configurable: false
        }
    });
}


const instanciaTvs = new Tvs('LG', 1900, 'preto')
instanciaTvs.valor = 'julinha'
console.log(instanciaTvs.julia)