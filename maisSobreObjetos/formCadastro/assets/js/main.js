
/* Aula 107 */

class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos(){
        /* 
        Colocando evento de envio no formulário (submit), ou seja, ao clicar no botao ele ira 
        enviar as informações do formulario pra algum lugar
        */
        this.formulario.addEventListener('submit', e =>{
            //função criada na classe
            this.handleSubmit(e)
        });
    }
    //Aqui a gente criou uma função que previne o verdadeiro envio do formulario
    //e só permite que envie ele caso os campos sejam validos
    handleSubmit(e){
        //previne o envio do formulario
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas){
            alert('Formulário enviado')
            this.formulario.submit();
        }
    }
    //ele criou separado de camposvalidos porque a gente precisa validar os dois ao mesmo tempo (senha e redefinir sneha) como fariamos isso dentro de um for?
    //porque dentro do for voce valida os campos individualmente, entao nao seria possivel
    //serve pra validar as questoes das senhas
    senhasSaoValidas(){
        //mesmo esquema dos outros valids
        let valid = true;


        //aqui ele seleciona o campo senha e repetir senha
        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        //aqui ele valida que se o campo senha for diferente do campo repetir senha, ele cria o erro apos os dois campos, 
        //tanto o de senha quando o de repetir senha, ok, e torna o valid false para que o formulario entenda que a senha esta errada e nao envie
        if (senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais')
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais')
        }

        //Nao tem necessidade de fazer validacao na senha e repetir senha, porque se elas precisam ser iguais, nos podemos validar somente senha
        //Ja que se a repetir senha for diferente o que vai aparecer vai ser que elas tem que ser iguais
        if (senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 3 e 12 caracteres')
        }
        
        //Ok, as duas estao validadas, entao mandamos de retorno a variavel que armazena a informação de validação delas                                                                                                                                                                                                                                                                                                                                                                                                         
        return valid;    
    }

    camposSaoValidos(){
        /* Essa função serve para validar se os campos sao validos para que o formulario possa ser enviado
        ou seja, a variavel valid = true vai ser sempre true, a nao ser que em algum momento dentro dos ifs ela se torne false
        fazendo com que o formulario nao seja enviado (por conta da variavel valid) pois tem um campo errado ainda
        */
        let valid = true;

        //esse for é apenas para remover as mensagens de erro caso elas ja estejam ali, pra nao ficar escrevendo uma embaixo da 
        //outra toda hora
        for (let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }

        /* Esse for serve para pegar todos os campos do formulario, note que todos os inputs possuem uma classe 'validar', e é exatamente
        por ela que estamos selecionando os campos */
        for (let campo of this.formulario.querySelectorAll('.validar')){
            //variavel que armazena o texto presente na label anterior do elemento input, para que possamos saber de qual campo se trata
            const label = campo.previousElementSibling.innerHTML
            //Esse if valida se o valor do campo(input) enviado é falso, ou seja, vazio
            if  (!campo.value) {
                this.criaErro (campo, `Campo "${label}" não pode estar em branco`)
                //torna o valid como false para que o retorno nao seja verdadeiro, pois possui um erro no preenchimento do formulario
                valid = false;
            }
            //If criado pra validar o cpf, se validacpf for falso entao a variavel valid fica falsa 
            if (campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }


            //If criado pra validar o usuario atraves da função criada aqui nesse escopo mesmo
            if (campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid
    }

    validaUsuario(campo) {
        //esse campo.value vai pegar exatamente oq for digitado pelo usuario, a partir dai nós validamos ele
        const usuario = campo.value
        //novamente, valid vai sempre ser true, se nao passar por alguma dessas validações ela vira false
        let valid = true;
        //se o nome do usuario tiver mais de 12 caracteres e menos de 3 então ele é invalido
        if (usuario.length > 12 || usuario.length <3){
            //esse criaerro é uma função criada pra adicionar o erro (a div do erro) abaixo do campo, entao mandamos o campo e a mensagem a ser exibida
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
            valid = false;
        }

        //esse daqui é algo que eu infelizmente nao sei explicar, professor falou que é complexo mas verifica se o nome de usuario possui algo a mais de numeros e letras (exemplo caracteres especiais e espaços nao sao aceirtos)
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números')
        }
        return valid;
    }
    

    /* Aqui é muito legal porque a gente ta usando uma classe que nao ta nesse codigo, mas ta incluido no HTML, entao eu consigo acessar
    (detalhe, so consigo acessar essa classe se no HTML ela tiver posicionada primeiro do que o meu codigo atual(main.js)) */
    validaCPF(campo){
        //instanciando a classe presente no outro codigo e enviando o valor que ta dentro do meu input do cpf para que ele seja validado
        const cpf = new ValidaCPF(campo.value);
        //metodo criado na outra classe (ValidaCPF) que retorna true se o cpf for valido e false se o cpf for invalido
        if (!cpf.valida()){
            this.criaErro(campo, 'CPF inválido');
            return false
        }
        //se passar pela validação acima então o cpf é valido e retorna true 
        return true;
    }

    criaErro(campo, msg){
        //estamos criando a div
        const div = document.createElement('div');
        //adicionando a mensagem recebida dentro dela
        div.innerHTML = msg;
        //adicionando uma classe para que possamos editar ela no css ou trabalhar com ela aqui mesmo, la em camposSaoValidos
        div.classList.add('error-text')
        //aqui ele fala pra inserir apos o elemento campo, a div
        campo.insertAdjacentElement('afterend', div)
    }


}

const valida = new ValidaFormulario();