//Ponto de entrada das rotas da aplicação, toda aplicação acessa as rotas por aqui
import express from "express";
import vagasroutes from "./vagasRoutes.js" //importando as rotas da vagas

//Agrupar todas as rotas que vamos receber

const routes=(app)=>{
    app.route("/").get((req, res)=>res.status(200).send("Inicio EmpregaEU"));

    // "use" é um metodo utilizado para incluir um middleware na instancia do express
    //o "use" receb dois parametros, o middleware e a rotas que estãao em vagasRoutes.js
    app.use(express.json(), vagasroutes);
};

export default routes;
