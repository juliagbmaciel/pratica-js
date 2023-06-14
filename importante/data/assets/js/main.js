const data = new Date()

//Operador ternário 
//variavel   se dia for < 10        variavel = 0+dia   !    variavel = dia    
const dia = data.getDate() < 10 ? '0' + data.getDate() : data.getDate()
console.log(achaDiaSemana(data))

msg = `${achaDiaSemana(data)}, ${dia} de junho de ${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()} `



//Cria variavel onde iremos armazenar o objeto com a classe container e a tag h1 do documento
const container = document.querySelector(".container h1");

//A partir do container, seleciona a tag h1, e substitui o texto da mesma por msg
container.innerHTML = msg


//substitui o dia da semana de numero para o respectivo nome
function achaDiaSemana(data) {
    day = data.getDay();
    switch (day) {
        case 0:
            return "Domingo"
        case 1:
            return "Segunda-feira"
        case 2:
            return "Terça-feira"
        case 3:
            return "Quarta-feira"
        case 4:
            return "Quinta-feira"
        case 5:
            return "Sexta-feira"
        case 6:
            return "Sábado"
    }
}




/* opção alternativa e mais prática

const h1 document.querySelector('.container h1')
const data = new Date();
const opcoes = {
  dateStyle: 'full',
  timeStyle: 'short'
};
h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);

*/