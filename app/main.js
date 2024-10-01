let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI()

const elementoParaInserirLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI() {
   const res = await fetch(endpointDaAPI)
   livros = await res.json()//usamos o await aqui para dar tempo de carregar as informacoes.

   //a partir do momento que eu tenho um json ou uma requisicao que esta em json, posso apresentar ao inves de console.log, como console.table, que o navegador mostra muito masi organizado as informacoes fornecidas pelo JSON.
   console.table(livros)

   exibirLivrosNaTela(livros)//passamos a variavel que esta recebendo a lista de informacoes pelo json como parametro
}

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
         <p class="livro__preco" id="preco">${livro.preco}</p>
         <div class="tags">
            <span class="tag">${livro.categoria}</span>
         </div>
      </div>
      `
      /* Isso aqui funciona igual eu faco com php e html, faco a tag do html e uso  o <? $infoQueEuQuero ?> para mostrar a informacao que eu quero, mas convenhamos que no php eh muito mais facil, pois tem suporte nativo ao html, React que me aguarde... */
   })
}