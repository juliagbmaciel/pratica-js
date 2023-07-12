const apiKey = 'oGEJjil0vGqikn4rgdpZ9m5I8Gq2smuB'

fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`)
.then(response => response.json())
.then(responseOK => mostraBooks(responseOK))

function mostraBooks(bookslist){
    const varDeLivros = bookslist

}