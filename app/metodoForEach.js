const elementoParaInserirLivros = document.getElementById('livros');

function exibirLivrosNaTela(listaDeLivros) {

   //Utilizaremos o foreach para cada 'livro' que tiver na lista, para conseguirmos usar as informacoes obtidas sem precisar criar 300 divs na mao, assim ele cria de acordo com o tamanho do nosso array
   listaDeLivros.forEach(livro => {
      elementoParaInserirLivros.innerHTML += `
      <div class="livro">
         <img class="livro__imagens" src="${livro.imagem}"
            alt="${livro.alt}" />
         <h2 class="livro__titulo">
         ${livro.titulo}
         </h2>
         <p class="livro__descricao">${livro.autor}</p>
         <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
         <div class="tags">
            <span class="tag">${livro.categoria}</span>
         </div>
      </div>
      `
      /* Isso aqui funciona igual eu faco com php e html, faco a tag do html e uso  o <? $infoQueEuQuero ?> para mostrar a informacao que eu quero, mas convenhamos que no php eh muito mais facil, pois tem suporte nativo ao html, React que me aguarde... */
   })
   
}