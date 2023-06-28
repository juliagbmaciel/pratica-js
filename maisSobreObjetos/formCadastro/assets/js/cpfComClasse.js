// 705.484.450-52 070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {

        //Aqui ele está definindo configurações do atributo 'cpfLimpo', como se fosse assim:
        /*
         class ValidaCpf {
            constructor(cpfEnviado){
                this.cpfLimpo = cpfEnviado (dai ele configura esse atributo aqui)
            }
         }
         */
      Object.defineProperty(this, 'cpfLimpo', {
        writable: false, //nao pode sobrescrever
        enumerable: true, //vai aparecer no console.log
        configurable: false, //nao pode deletar
        value: cpfEnviado.replace(/\D+/g, '') //substitui os caracteres especiais por nada
      });
    }
  
    éSequência() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  
    geraNovoCpf() {
      const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
      const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
      this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
  
    static geraDigito(cpfSemDigitos) {
      let total = 0;
      let reverso = cpfSemDigitos.length + 1;
  
      for(let stringNumerica of cpfSemDigitos) {
        total += reverso * Number(stringNumerica);
        reverso--;
      }
  
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : '0';
    }
  
    valida() {
      if(!this.cpfLimpo) return false;
      if(typeof this.cpfLimpo !== 'string') return false;
      if(this.cpfLimpo.length !== 11) return false;
      if(this.éSequência()) return false;
      this.geraNovoCpf();
  
      return this.novoCPF === this.cpfLimpo;
    }
  }
  
/*   let validacpf = new ValidaCPF('070.987.720-03');
  
  if (validacpf.valida()) {
    console.log('CPF válido');
  } else {
    console.log('CPF inválido');
  } */
  