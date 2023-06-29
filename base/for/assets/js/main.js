const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]


console.log(elementos[0]['tag'])
const container = document.querySelector(".container");
container.innerHTML = ''
for (let i = 0; i <= elementos.length; i++){   
    //Opção alternativa e mais elegante
    /*
    let { tag, texto } = elementos[i]
    //ao invés de usar indice, usando desestruturação    
    */
    const tag = document.createElement(`${elementos[i].tag}`)
    container.appendChild(tag);
    tag.innerText = `${elementos[i].texto}`
}