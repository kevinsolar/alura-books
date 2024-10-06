const botoes = document.querySelectorAll('.btn');
botoes.forEach( btn => btn.addEventListener('click', filtrarLivros) )

function filtrarLivros() {
   const elementoBtn = document.getElementById(this.id);
   const categoria = elementoBtn.value;

   //Fazendo a verificacao de se o valor do btn "Livros Disponiveis" foi clicado, para mostrar somente os livros disponiveis, mas caso contrario vai filtrar pela categoria.
   let livrosFiltrados =  categoria == 'disponivel' ? livros.filter( livro => livro.quantidade > 0 ) : livros.filter( livro => livro.categoria == categoria )

   exibirLivrosNaTela(livrosFiltrados)
}