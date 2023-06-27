
//função construtora para validar o cpf
function ValidaCPF(cpfEnviado){
    //definindo a configuração do atributo 'cpfLimpo', colocando um getter dentro dele, ou seja
    //Se precisarmos pegar o cpf, ele retorna ja formatado, sem ponto e traço, somente numeros
    Object.defineProperty(this, 'cpfLimpo', {
        get: function(){
            //retornando o cpf somente com numeros, substituindo pontos e traços por nada
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
}

//Criando um metodo dentro de validacpf, dentro de prototipo, ou seja, outras classes podem herdar sem que o codigo se repita muitas vezes
ValidaCPF.prototype.valida = function(){
    if (this.isSequencia()) return false
    //this.cpfLimpo é um atributo de ValidaCPF
    //se o cpf estiver vazio  entao ele ja retorna falso, ou seja, um cpf vazio nunca é valido
    if (typeof this.cpfLimpo === 'undefined') return false;
    //Se o tamanho do cpf for maior que 11 ele ja retorna falso
    if (this.cpfLimpo.length !== 11) return false;  

    //Logica de criar o primeiro digito, cpfParcial retorna o cpf sem os dois ultimos numeros
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2

    //se for verdade o cpf é valido, se nao é invalido
    return novoCpf === this.cpfLimpo;
}


//Metodo criado para retornar (validar) o primeiro digito do cpf em questao
ValidaCPF.prototype.criaDigito = function(cpfParcial){
    //transforma o cpf recebido em array, pra podermos trabalhar com ele
    const cpfArray = Array.from(cpfParcial);
    //Faz parte da logica de validar o cpf, onde os numeros sao multiplicados de 1 a 7
    let regressivo = cpfArray.length + 1;



    //Importante entender de reduce => voce pode pegar de dentro de um array os seguintes atributos: acumulador, valor(valor do array no index em questao)
    //index e o proprio array, é como se o reduce fizesse um for dentro do array, onde meio que ja te disponibiliza um contador
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo --;
        return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito); //Operador ternario, onde se o digito for maior que 9 ele retorna '0', se nao
    //ele retorna o proprio digito em forma de string
};

ValidaCPF.prototype.isSequencia = function(){
    //verifica se o primeiro digito do cpf repetido o tanto de vezes do tamanho dele for igual ao cpf enviado, entao ele retorna true pra
    //'é sequencia', ja tornando invalido o cpf
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}


const cpf = new ValidaCPF('47829927855');
console.log(cpf.valida());
