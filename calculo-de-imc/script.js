//Objetos em javascript

// opção um (mais fácil)
function criaPessoa(nome, idade, sobrenome) {
    return {
        nome, idade, sobrenome,

        fala(){
            console.log(`to falandoo ${this.nome} meu nome é esse`)
        }
    };
}

//opção dois (mais difícil mas da pra entender melhor)
function criaCidade(nome, tempo, populacao) {
    return {
        nome: nome, 
        tempo: tempo,
        populacao: populacao,

        fala(){
            console.log(`to falandoo ${this.nome} meu nome é esse`)
        }
    };
}

//opção atrelada a variavel constante 

const juju = {
    nome: 'julia linda',
    idade: 19,

    fala(){
        console.log(`to falandoo ${this.nome} meu nome é esse`)
    }
};


// Funções em JS

//criação de função de um jeito mais fácil, somente se ela tiver um parâmetro
const quadrado = n => n ** 2


//criação de função caso a mesma tenha mais de um parâmetro, de um jeito simplificado também

const linda = (nome, sobrenome) => nome + sobrenome



//Testes necessários

let pessoa1 = criaPessoa("julia", 19, "maciel")

console.log(pessoa1.nome)
console.log(quadrado(5))
console.log(linda("julia", "gabrielle"))
juju.fala();