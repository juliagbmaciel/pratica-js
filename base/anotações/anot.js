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




//Atribuição via desestruturação em obj
//Se nao existir vai atribuir a "nao existe"
const { nome = "nao existe", idade } = juju;
console.log(nome, idade)

//Caso sua variável nao tenha o mesmo nome do atributo do obj
const { nome: nameN = "nao existe", idade: age} = juju;
console.log(nameN, age)


//Pega o resto dos atributos e vira um dict
const { ...resto } = juju;
console.log(resto)


// Funções em JS

//criação de função de um jeito mais fácil, somente se ela tiver um parâmetro
const quadrado = n => n ** 2


//criação de função caso a mesma tenha mais de um parâmetro, de um jeito simplificado também

const linda = (nome, sobrenome) => nome + sobrenome

/* Se eu mandar parametros pra minha função declarada com function, independente se eu declaro que recebi
na função ou nao ele vai receber como arguments(um objeto chamado arguments)*/
function testandoArguments(){
    console.log(arguments)
}
 
testandoArguments('oiiiiiiiiiiiiiiiiiiiiiiiiiiii', 'oie2', 'teste')

//Testes necessários

let pessoa1 = criaPessoa("julia", 19, "maciel")

console.log(pessoa1.nome)
console.log(quadrado(5))
console.log(linda("julia", "gabrielle"))
juju.fala();



// operação ternária
const pontoUsuario = 500;

// condicao ? 'valor se verdadeiro' : 'valor se falso'
const nivelUsuario = pontoUsuario > 1000 ? "Vip" : "Normal";
console.log(nivelUsuario)


// se existir cor, ela será igual a ela mesma, se não, será igual a azul
const corUsuario = null;
const corPadrao = corUsuario || 'azul';
console.log(corPadrao)



// objeto date
const data = new Date()
//const data = new Date(ano, mes, dia, hora, minuto, segundo, milissegundo)
console.log(data.toString())
console.log(data.getDate())//dia
console.log(data.getFullYear())//ano
console.log(data.getMinutes())//minutos
console.log(data.getHours())//horas
console.log(data.getMonth() + 1)//mês

//etc
function formatadata(data){
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`
}

const dataBrasil = formatadata(data)
console.log(dataBrasil)


const curious = ['ola', 'como', 'vai', 'você']

// for igual o for i in lista do python (for in) let no inicio é aparentemente opcional
for(indice  in curious){
    console.log(curious[indice])
}


//for pra iterar em objeto
for (chave in juju){
    console.log(chave)
}


//for of itera string e imprime as letras
for (valor of juju.nome){
    console.log(valor)
}

//forEach só esta disponivel dentro de arrays
const arrayteste = ['num', 'num1', 'num2','num3 i tal']

arrayteste.forEach(function(valor, indice, arrayCompleto){
  console.log(arrayCompleto[indice]);
})

//Try catch (except) funciona assim
try{
    console.log("eu te amooo")
}catch(erro){
    console.log("eu nao te amo")
}
// erro é literalmente o erro, onde você pode tratar dependendo do caso
// throw (throw new Error mostra o erro bonitinho) é quando você cria um erro e exibe a mensagem, como se você modificasse
// a mensagem de erro literamente
// finally executa independentemente se entrar no  try ou no catch

// Closure, função que retorna outra função
function criaMultiplicador (multiplicador) {
    return function (n){
        return n * multiplicador
    };
};

const duplica =  criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(quadriplica(50000))


// console.dir, mostra os escopos(entre outras coisas) que uma função tem acesso, entre outros... 


/*
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) +
    min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    //callback é basicamente quando enviamos uma função pra dentro da função, para executarmos ela, é só chamarmos callback()
    //vamos executar algo depois de executar outra coisa
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}
*/


//função anonima executada imediatamente após criação 
//ta dando errado sla pq
/*
(function(idade, peso, altura) {
    const sobrenome = 'Miranda';
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }
    function falanome(){
        console.log(criaNome('Luiz'));
    }

    falanome();
    
})();
*/

//OUTRA FORMA DE CRIAR OBJETO PARECIDA COM JAVA
// constructor function: 
function Pessoa(nome, sobrenome){
  const ID = 12345; //só existe dentro do método
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function(){
    console.log('sou um método')
  };
}


//Tem que usar o new pra instanciar, igual no java
const p1 = new Pessoa('julia', 'gabrielle')
p1.metodo()

const array = ['JULIA', 'GABRIELLE', 'MACIEL']

const remov = array.splice(-2, array.length, 'gabrielleeeeee', 'teste')
console.log(remov)
console.log(array)

//metodo concat concatena um array com outro, ou seja array.concat(array2)
//ou usa os tres pontinhos pra pegar tudo ou o que sobrou de um array, exemplo array = [...a1, ...a2]


//map com array, onde posso alterar os valores dos arrays caso precise

const arraysss = [1, 2, 3, 4, 5, 6, 7, 8];
const NumerosemDobro = arraysss.map(function(valor){
  return `oláa, esse é o meu valor dobrado ${valor*2}`
})
console.log(NumerosemDobro)

//ou com arrowfunction
// NumerosemDobro = arraysss.map (valor => valor *2)

//Mas como eu altero e/ou mostro apenas determinado valor de um =>Objeto<=??????
const pessoas = [
  {nome: 'julia', idade: 19 },
  {nome: 'Juliano', idade: 20 },
  {nome: 'Lucas', idade: 21 },
  {nome: 'Alemanha', idade: 22 },
  {nome: 'Joao da silva', idade: 23 },
  {nome: 'Gabriel', idade: 24 },
  {nome: 'Vetores', idade: 25 }
]


const nomes = pessoas.map(valor => valor.nome)
const idades = pessoas.map(valor => valor.idade)
//deletar algo do objeto
const idadesSemNomes = pessoas.map(obj =>{
  delete obj.nome
  return obj
})

console.log(nomes, idades, idadesSemNomes)

//adicionar chave dentro do objeto 

const comIds = pessoas.map(function(obj, indice){
  obj.id = indice
  return obj;
})
console.log(comIds)

//Fazendo isso estou alterando o objeto original, como faço para duplicar esse objeto sem mandar por referencia?

const obj = pessoas.map(function(obj){
  const newObj = {...obj}//estou mandando tudo o que tem dentro de objeto para o novo objeto
  return newObj
})


//como funciona o reduce???
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const total = numeros.reduce(function(acumulador, valorAtual, indice, arrayOriginal){
  return acumulador
}, 0);//esse zero representa o numero inicial em que o acumulador estara
//nesse caso, ele começa em zero, e toda vez que andar um index do array e retornar algo, nós
//podemos atribuir algo a ele, como acumulador++, ou acumulador --, ou acumulador +=, é livre
