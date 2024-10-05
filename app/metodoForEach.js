const elementoParaInserirLivros = document.getElementById('livros');

function exibirLivrosNaTela(listaDeLivros) {

   //funcao criada para iniciar sempre como uma string vazia, entao quando for solicitada novamente vai zerar e acrescentar somente a que foi requisitada.
   elementoParaInserirLivros.innerHTML = ''

   //Utilizaremos o foreach para cada 'livro' que tiver na lista, para conseguirmos usar as informacoes obtidas sem precisar criar 300 divs na mao, assim ele cria de acordo com o tamanho do nosso array
   listaDeLivros.forEach(livro => {
      let disponibiliade = verificarDisponibilidadeDoLivro(livro)//cria uma variavel que receba uma funcao para verificar a disponibilidade

      elementoParaInserirLivros.innerHTML += `
      <div class="livro">
         <img class="${disponibiliade}" src="${livro.imagem}"
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

   function verificarDisponibilidadeDoLivro(livro) {
      if (livro.quantidade > 0) {
         return 'livro__imagens'
      } else {
         return 'livro__imagens indisponivel'
      }
   }

}