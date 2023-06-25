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
    //nao esquecer de mandar como string o nome da chave....
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



//criando objeto com defineProperties, ou seja, configurando varios atributos ao mesmo tempo
function Tvs(marca, valor, cor){
    Object.defineProperties(this, {
        //julia é a chave que sera atribuida, posso colocar literalmente qqr coisa que vai virar o atributo da minha classe
        julia:{
            enumerable: true,
            //value é o valor que esta vindo de marca//julia como parametro
            value: marca,
            writable: false,
            configurable: false
        },
        valor: {
            enumerable: false,
            configurable: false,
            //getter para pegar o valor das tvs
            get: function(){
                return valor;
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
instanciaTvs.cor = 'branco'
console.log(instanciaTvs.cor)
console.log(instanciaTvs.julia)

//Object.entries retorna arrays de chave e valor de dentro de um objeto, consigo usar um for pra iterar dentro
//desse array

console.log(Object.entries(instanciaTvs))

//Mostra como aquele atributo está configurado
//Tem que mandar a instancia do objeto e nao o proprio objeto, senao fica confuso
console.log(Object.getOwnPropertyDescriptors(instanciaTvs, 'marca'))

//PROTOTYPES -- Assim como no java, podemos criar classes pai, que permitem que outras classes herdem funções dela, deixando o codigo menos sujo
// e diminuindo linhas(não conseguimos ver, mas ele repete codigo desnecessariamente)


//Função construtora recebendo o nome e o preco como atributo, mas nao possuindo nenhum metodo dentro dela
function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}


//estamos criando um prototipo dentro da classe produto, ou seja, todas as vezes que ela for instanciada, ela nao vai criar o metodo de novo
//e simm herdar de um lugar como se fosse a classe pai, e comm isso, outras classes podem herdar esse prototipo também
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

//criando instancia da classe produto
const p1 = new Produto('camiseta', 50);


//criando objeto literal, onde ele instancia e ja cria o objeto(ou seja, nao posso criar outras instancias a partir de p2)
const p2 = {
    nome: 'Caneca',
    preco: 15
};


//Agora estou setando para o p2, o prototype de Produto (dentro dele ja contem o meu construtor, entao se eu der um console.log no p2, eu vou ver
// que ele construiu a partir de produto, assim -> Produto {nome: 'caneca', preco: 15})
Object.setPrototypeOf(p2, Produto.prototype)

//AVISO, prototype também é como se fosse um atributo de classe do JS, utilizar o proprio __proto__  é como se eu alterasse diretamente do
//Objeto, ao inves de usar um getter e setter, sabemos que isso é prejudicial, porque exatamente? nao sei!! necessitando descobrir
console.log(Object.getPrototypeOf(p2))
console.log(p2)
p1.aumento(100)
console.log(p1)


//criando um objeto a partir de Produto, como se estivessemos herdando as caracteristicas que estao dentro do prototipo dele
//nesse caso herdamos os dois metodos aumento e desconto, podemos configurar entao os atributos nome e preco
//se quisermos, caso nao queiramos nao precisa, mas nesse caso pra usar o desconto e aumento eu quis configurar pra mostrar
//Detalhe interessante que nao precisamos usar o defineproperties
const p3 = Object.create(Produto.prototype, {
    preco: {
        enumerable: true,
        value: 20,
        writable: true,
        configurable: true
    },
    nome: {
        enumerable: true, 
        value: 'meias'
    }
});
console.log(p3)

