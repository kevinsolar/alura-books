let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
   const res = await fetch(endpointDaAPI)
   livros = await res.json()//usamos o await aqui para dar tempo de carregar as informacoes.
   //a partir do momento que eu tenho um json ou uma requisicao que esta em json, posso apresentar ao inves de console.log, como console.table, que o navegador mostra muito masi organizado as informacoes fornecidas pelo JSON.
   //console.table(livros)

   let livrosComDesconto = aplicarDesconto(livros)

   exibirLivrosNaTela(livrosComDesconto)//passamos a variavel que esta recebendo a lista de informacoes pelo json como parametro
}