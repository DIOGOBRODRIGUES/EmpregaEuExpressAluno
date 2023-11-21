// Objetivo: Arquivo de rotas para o recurso Vagas
import express from 'express';  //responsabiliade do express
import empresaController from '../controllers/empresaControllers.js';


//metodo especifico pra gestao de rotas
const routes = express.Router();

//passar a rota e controlador como parametro 
routes.get("/empresa", empresaController.listarEmpresa);
routes.get("/empresa/:id", empresaController.listarEmpresaPorId);
routes.post("/empresa", empresaController.cadastrarEmpresa);
routes.put("/empresa/:id", empresaController.atualizarEmpresa);
routes.delete("/empresa/:id", empresaController.excluirEmpresa);

export default routes; //exportar para ser utilizado em outro arquivo
