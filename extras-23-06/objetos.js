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
const objeto = new Objeto('linda')
function Objeto(beleza){
    this.nome = 'julia'
    this.sobrenome = 'gabrielle maciel'
    //maneira de criar metodo dentro de objeto com construtor
    this.fala = function(){
        //se eu nao utilizo return, ele me retorna um valor "undefined"
        return `${this.nome} esta falando..`
    }
    //property que declara se vai permitir ou nao que o usuario configure aquele atributo
    Object.defineProperty(this, beleza, {
        enumerable: true, //define se vai aparecer na tela
        value: beleza, //define qual o valor ele vai ter
        writable: true, //define se pode sobescrever
        configurable: false, //define se pode configurar, exemplo deletar
    })
}
console.log(objeto.nome)

//ou sem a função, podemos criar os atributos diretamente:
objeto.idade = 19
console.log(objeto.fala())

//caso eu queira travar o meu objeto, ou seja, não permitir que seja alterado nada dentro dele:
Object.freeze(objeto)
objeto.nome = 'kethelyn santos'

console.log(objeto)
