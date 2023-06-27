class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    //estranhamente esses metodos ja estao dentro de prototipos  
    falar(){ console.log(`${this.nome} está falando`) }
    comer(){ console.log(`${this.nome} está comendo`) }
    beber(){ console.log(`${this.nome} está bebendo`) }
}

const julia = new Pessoa('julia', 'gabrielle')
julia.falar()


//forma de privar atributos (???^}Ç?)
const _velocidade = Symbol()
class Carro{
    constructor(nome){
        this.nome = nome;
        //privando o atributo
        this[_velocidade] = 0;
    }

    get velocidade(){
        return this[_velocidade]
    }

    set velocidade(valor){
        if (typeof valor != 'number') return;
        if  (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar(){
        if (this[_velocidade] >= 100) return;
        this[_velocidade] ++;
        console.log(this[_velocidade])
    }

    freiar(){
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro ('Fusca')
c1.velocidade = '99'
console.log(c1.velocidade)

//Claasses com herança

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if (this.ligado) {
            console.log(this.nome + ' já ligado')
            return;
        }
        this.ligado = true;
        console.log('ligueii')
    }

    desligar(){
        if (this.ligado) {
            this.ligado = false;
            console.log('desligueii')
            return;
        }
        
        console.log('já to desligado fia')
    }
}

const d1 = new DispositivoEletronico('smartphone')

//extends serve pra herdar de determinada classe
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        //super: faz com que voce configure esses atributos, basicamente mandando
        //o parametro nome pro construtor da classe pai (chamqa o construtor da classe pai dentro da classe filha)
        //Caso voce nao entenda, voltar no curso na aula 104 no minuto 7:00 
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }

    //criando metodo static, mas o que é metodo stat8ic?
    //Metodo static basicamente é onde voce cria uma função que faz algo mas nao está
    //ligada a nenhuma intancia, segue exemplos
    static falaOiPraTestar(){
        console.log('Oi pra testar metodo static')
    }
}
const d2 = new Smartphone('iPhone', 'preto', 'iphone 7')
console.log(d2)
Smartphone.falaOiPraTestar()//assim funciona porque ta ligado diretamente a classe
d2.falaOiPraTestar()//assim não funciona porque ta ligado a uma instancia