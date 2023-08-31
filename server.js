const http = require ("http") //
const port = 4000; //no servididor local podemos utilizar quqalquer porta

const rotas ={
    '/' :'Bem vindos empregaEu',
    '/Cadastro': 'Tela de cadastro',
    '/Vagas': 'Lista de vagas'
}
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
  })