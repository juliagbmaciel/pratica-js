function criaCalculadora(){
    //retornando um objeto
    return{
        //atributo do meu objeto
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),


        //metodo dentro de objeto
        inicia(){
            //se eu quiser ver quem é o this(self) é só eu dar um console.log
            this.cliqueBotoes();
            this.pressionaEnter();     
        },

        pressionaEnter(){
            //keyup é quando solta a tecla, que nesse caso vai ser validada se é o enter
            this.display.addEventListener('keyup', e => {
                if (e.keycode = 13){
                    this.realizaConta();
                }
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = ''
        },

        apagaUm(){
            //slice vc manda o tamanho da string menos um
            this.display.value = this.display.value.slice(0, -1)
        },
        
        realizaConta(){
            let conta = this.display.value;
            try{
                //eval executa a string como um codigo javascript
                conta = eval(conta);
                //se nao existir conta pra fazer ele da esse alerta
                if (!conta){
                    alert('conta inválida')
                    return
                }
                this.display.value = conta
            }catch(e){
                alert('conta inválida')

            }
        },

        cliqueBotoes(){
            // this -> calculadora
            document.addEventListener('click', function(e){
                // this -> document, mas se eu usar arrowfunction o this mantem sendo a calculadora
                const el = e.target;


                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

            // Aqui ta mandando utilizar o this da calculadora usando o bind PESQUISAR MAIS SOBRE
            }.bind(this));
        },


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
