function validaCPF(cpfEnviado){

    Object.defineProperty(this, 'cpfLimpo', {
        get: function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
}

validaCPF.prototype.valida = function(){
    if (typeof this.cpfLimpo === 'undefined') return false

    return true
}
const cpf = new validaCPF('478.299.278-55');
console.log(cpf.valida());