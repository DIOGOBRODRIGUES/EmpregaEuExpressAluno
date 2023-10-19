/*  Ponto de entrada das rotas da aplicação, toda aplicacao acessa a rota por aqui
*/

import express from 'express';
import vagas from '../routes/vagasRoutes.js'; // importando rotas de vagas


/*
agrupando todas as rotas que vamos receber

*/
const routes =(app)=>{
    app.route("/").get((req, res)=> res.status(200).send("Inicio EmpregaEU"));

    //use é um metodo utilizado pra incluir um middleware na instancia do express
    //dois parametros,  o middleware json  e a rotas  que esta em vagasRoutes.js
    app.use(express.json(), vagas)
};
export default routes;