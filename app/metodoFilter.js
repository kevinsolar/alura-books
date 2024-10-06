const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
   const elementoBtn = document.getElementById(this.id);
   const categoria = elementoBtn.value;

   //Fazendo a verificacao de se o valor do btn "Livros Disponiveis" foi clicado, para mostrar somente os livros disponiveis, mas caso contrario vai filtrar pela categoria.
   let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)

   exibirLivrosNaTela(livrosFiltrados)
   if (categoria == 'disponivel') {
      exibirValorTotalDosLivrosDisponiveisNaTela()
   }
}

function filtrarPorCategoria(categoria) {
   return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
   return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela() {
   elementoComValorTotalDeLivrosDisp.innerHTML = `
      <div class="livros__disponiveis">
         <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
      </div>
   `
}
