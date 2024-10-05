let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdernarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
   let livrosOrdenados =  livros.sort((a, b ) => a.preco - b.preco)//a variavel recebe a ordenacao, com comparacao de um item com o outro, mas esse item tem a especificacao de preco, que eh um fator que tenho na minha array.
   exibirLivrosNaTela(livrosOrdenados)
}