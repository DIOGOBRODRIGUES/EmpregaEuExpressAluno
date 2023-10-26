// Objetivo: Arquivo de rotas para o recurso Vagas
import express from 'express';  //responsabiliade do express
import vagasController from '../controllers/vagasControllers.js';


//metodo especifico pra gestao de rotas
const routes = express.Router();

//passar a rota e controlador como parametro 
routes.get("/vagas", vagasController.listarVagas);
routes.get("/vagas/:id", vagasController.listarVagasPorId);
routes.post("/vagas", vagasController.cadastrarVaga);
routes.put("/vagas/:id", vagasController.atualizarVaga);
routes.delete("/vagas/:id", vagasController.excluirVaga);

export default routes; //exportar para ser utilizado em outro arquivo
