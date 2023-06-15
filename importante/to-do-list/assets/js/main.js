const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')


function criaLi(){
    //cria e retorna o elemento Li
    const li = document.createElement('li')
    return li;
}

function criaTarefa(textoInput){
    //Pega o elemento li(?cria)
    const li = criaLi();
    //Atribui a li o texto digitado pelo usuário
    li.innerHTML = textoInput
    //adiciona a li na ul
    tarefas.appendChild(li)
    limpaInput();
    criaBotaoApagar(li)
    salvarTarefas();
}

function criaBotaoApagar(li){
    //nao entendi ainda
    li.innerHTML += ' '
    //cria o elemento botao
    const botaoApagar = document.createElement('button');
    //Adiciona a mensagem apagar no botao
    botaoApagar.innerText = 'Apagar'
    //Claramente o attribute seta um atributo, ou seja cria um classe, um titulo, um id que seja
    botaoApagar.setAttribute('class', 'apagar')
    //adiciona o botao na li
    li.appendChild(botaoApagar)

}

//Limpa o input determinando que o valor dele é igual a nada
function limpaInput(){
    inputTarefa.value = "";
    inputTarefa.focus();
}


//Keypress é o evento de tecla clicada, e.keyCode se refere ao codigo da tecla clicada
/*Inserimos no input o evento de clicar em determinada tecla, assim que clicar realiza a função
13 é igual a enter, se precisar ver qual o codigo de determinada tecla do seu teclado
é só dar um console.log no evento e ver as especificações (o evento é o parametro 'e' da função)
*/
inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
})

//Adicionando evento pro botao tarefa, só irá cria-lá caso a mesma nao seja vazia
btnTarefa.addEventListener('click', function(){
    // Se o input estiver vazio, ele para e não retorna nada
    //inputTarefa é igual ao que foi digitado dentro do input do usuario
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
})

/* Aqui estamos adicionando um evento de clique na pagina inteira, porém ele só irá realizar a 
ação se o clique for no botao que contem a classe apagar, com isso ele remove o elemento pai
do botao clicado*/
document.addEventListener('click', function(e){
    //Cria elemento da onde foi clicado, exemplo nesse caso botao apagar(pra isso serve o target)
    const el = e.target;
    if (el.classList.contains('apagar')){
        //Precisamos apagar o pai do elemento
        el.parentElement.remove();
        //salva de novo pra remover as que foram removidas
        salvarTarefas()
    }

})

/*Atenção nesse bloco
de dentro de tarefas, estou selecionando todas as li's
criei uma lista vazia para armazenar minhas tarefas
iterando sobre a li que estou recebendo do meu tarefas, eu armazeno cada uma delas na
variável tarefaTexto, em seguida substituo a palavra apagar por nada
*/
//pra acessar localstorage = setinhas que ficam perto do console, aplicativo, armazenamento local
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()//trim remove espaço sobrando na ponta de strings
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas); //torna salvável no pc e transforma em string
    localStorage.setItem('tarefas', tarefasJSON) //localStorage nada mais é um espaço que o navegador fornece para salvar coisas nele
}


//Pega as tarefas salvas no localstorage
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const tarefaLista = JSON.parse(tarefas);//convertendo de string pra lista, era string e voltou a ser lista
    for (let tarefa of tarefaLista){
        criaTarefa(tarefa)//agora pra cada tarefa que está dentro do meu array recuperado do storage, eu crio elas novamente.
    }
}
adicionaTarefasSalvas();



