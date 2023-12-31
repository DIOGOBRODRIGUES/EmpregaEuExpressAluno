import express from "express";
import connectDatabase from "./Config/dbconect.js";
//import vaga from "./models/vagas.js"; --- nao precisa importar modelo de vaga
import routes from "./routes/index.js";
import cors from "cors";

const conexao = await connectDatabase();

conexao.on("error", (erro)=>{
  console.error("erro de conexão", erro)
})

conexao.once("open",  ()=>{
  console.log("conexao com banco de dados ok :D")
})
const app = express();
// * todas as origens permitidas 
app.use(cors({origin:"*"}))
routes(app);
//app.use(express.json())
// const vagas = [
//     {id: 1, "titulo": "Dev back-end"},
//     {id: 2, "titulo": "Dev Mobile"}
//   ]
  // app.get('/', (req, res) => {
  //   res.status(200).send('Inicio EmpregaEU');
  // }) 

  // foi para camadas do controller e rotas 
  // app.get('/vagas', async(req, res) => {
  //   const listaVagas = await vaga.find({});
  //     res.status(200).json(listaVagas);
  // })

  // app.post('/vagas', (req, res) => {
  //   vagas.push(req.body);
  //   res.status(201).send('Vaga cagastrada com Sucesso!')
  // })

  // app.put('/vagas/:id', (req, res) => {
  //   let index = buscaVaga(req.params.id);
  //   vagas[index].titulo = req.body.titulo;
  //   res.json(vagas);
  // })
  
  //  app.get('/vagas/:id', (req, res)=>{
  //   const index = buscaVaga(req.params.id);
  //   res.status(201).json(vagas[index]);

  //  })

  //  app.delete('/vagas/:id',(req, res)=>{
  //   const index = buscaVaga(req.params.id);
  //   vagas.slice(index,1)
  //   res.status(201).json(vagas)

  //  })

  // function buscaVaga(id) {
  //   return vagas.findIndex(vagas => vagas.id == id)
  // }
  export default app // preciso exporta para que outro arquivo fazer uso 

  	  

