fetch ('./pessoas.json')
.then(resposta => resposta.json())
.then (jsonArray => imprimeNomes(jsonArray))


const table = document.createElement('table')
const resultado = document.querySelector('.resultado')



function imprimeNomes(json){
    try{
        for (let pessoa of json){
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            let td2 = document.createElement('td')
            td.innerHTML = pessoa.nome
            tr.appendChild(td)
            td2.innerHTML = pessoa.email
            tr.appendChild(td2)
            table.appendChild(tr)
        }
        resultado.appendChild(table)
    }catch(e){
        console.warn(e)
    }

}