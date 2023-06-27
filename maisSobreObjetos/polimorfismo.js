
//Este código lida com polimorfismo, mas o que é polimorfismo? Basicamente quando duas classes filhas herdam de uma classe pai, 
//mas mudam o seu comportamento, exemplo da conta corrente, ela herda de conta, e muda o comportamento do saque
//agora se criassemos uma classe conta poupança, ela herdaria da classe conta e mudaria o comportamento do saque também, 
//Conta corrente nao tem ligação com conta poupança e nem vice versa, mas ambas tem ligação com a conta Conta(conta pai)


//Classe pai
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.saldo = saldo;
    this.conta = conta;
}

//Criando metodo dentro de prototipo para que outras classes o herdam
Conta.prototype.verSaldo = function(){
    console.log(`Ag./Conta: ${this.agencia}/ ${this.conta}` + 
    ` Saldo: R$${this.saldo.toFixed(2)}`
    )
};
Conta.prototype.sacar = function (valor){
    if (this.saldo < valor) {
        console.log('Saldo insuficiente')
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
};
Conta.prototype.depositar =  function(valor){
    this.saldo += valor;
    this.verSaldo()
};


const conta1 = new Conta(921, 927, 1600);

//Criando classe filha que esta herdando de conta, e adicionando limite
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}


//definindo que o prototipo de contacorrente sera o prototipo de conta, para que assim possa usar os metodos que nele incluem
ContaCorrente.prototype = Object.create(Conta.prototype);
//definindo que o construtor de contacorrente sera a propria conta corrente, senao ele fica com o construtor de Conta
ContaCorrente.prototype.constructor = ContaCorrente;


//Basicamente sobrescrevendo o metodo herdado de Conta, mudando o seu comportamento para se adequar a ocasiao de uso
ContaCorrente.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)){
        console.log('Saldo insuficiente')
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

const conta2 = new ContaCorrente(11, 12, 0, 100);
conta2.depositar(10)
conta2.sacar(115)

//Logo apos, criariamos uma opcao de conta poupança. onde na mesma alterariamos o comportamento de um dos metodos herdados da
//classe pai (conta). Tendo assim, um polimorfismo.