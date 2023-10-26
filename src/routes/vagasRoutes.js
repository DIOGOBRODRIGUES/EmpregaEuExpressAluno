// Arquivo de rotas da aplicação
import express from "express";
import vagasController from '../controllers/vagasControllers.js'

//metodo especifico  para gestão de rotas
const routes = express.Router();

//passar a rota e controller como parametro
routes.get("/vagas", vagasController.listarVagas);
routes.get("/vagas/:id", vagasController.listarVagasPorId);
routes.post("/vagas", vagasController.cadastrarVaga);
routes.put("/vagas/:id", vagasController.atualizarVaga);

export default routes;
