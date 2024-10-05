const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');

//Ao clicar quero executar alguma coisa, nesse caso a funcao de filtrar
btnFiltrarLivrosFront.addEventListener('click', filtrarLivrosDeFront)

function filtrarLivrosDeFront() {
   let livrosFiltrados = livros.filter( livro => livro.categoria == 'front-end' )
   console.table(livrosFiltrados)
}