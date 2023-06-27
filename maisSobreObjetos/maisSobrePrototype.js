
//Criando a classe pai, onde as outras a herdam
function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}
//Criando dois metodos dentro do prototipo, ou seja, herdavel
Produto.prototype.aumento = function(quantia) {
     this.preco += quantia;
}
Produto.prototype.desconto =function(quantia) {
    this.preco -= quantia;
}


//instanciando um produto
const p1 = new Produto('calça', 98)
//testando o metodo do produto
p1.desconto(90)


//Criando função que herda Produto
function Camiseta (nome, preco, cor){
    //Chamando produto como se fosse uma super init, mandando o (objeto atual) this, e os atributos que a classe pai possui, que voce pode mandar
    //pra funcionar como um construtor, mas ainda nao herdou os metodos do prototipo, somente o construtor
    Produto.call(this, nome, preco);
}

//Aqui estamos falando que o prototipo de Camiseta vai ser o prototipo do Produto (ou seja, os metodos que nele possuem)
Camiseta.prototype = Object.create(Produto.prototype)
//Mas encontramos um problema, com essa atitude falamos que o construtor de camiseta é o produto, quando na verdade
//o construtor de camiseta é a propria camiseta, apesar de ter usado o construtor de produto
//Entao aqui declaramos que o construtor de camiseta é a classe Camiseta.
Camiseta.prototype.constructor = Camiseta

//instancia de camiseta
const camiseta = new Camiseta ('Regata', 7.5, 'preta')

//Vendo se aprendi de verdade
function Caneca(nome, preco, cor, tamanho){
    Produto.call(this, nome, preco)
    this.cor = cor;
    this.tamanho = tamanho
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const c1 = new Caneca('Caneca do homem aranha', 70, 'Vermelha', '10cm de altura')
const c2 = new Caneca('Caneca da barbie', 90, 'Rosa', '10cm de altura')
const c3 = new Caneca('Caneca do Lucas', 0, 'Branca', '10cm de altura')
const c4 = new Caneca('Caneca da Julia', 20000, 'Ammarela', '10cm de altura')
console.log(c2)
