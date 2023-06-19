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

