function calcularvalorTotalDeLivrosDisp(livros) {

   //acc -> valor acumulado; livro.preco -> valor do livro, valor em preco; comece do indice -> 0
   return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}