//import do modelo de vaga criado  na camada models 
import vaga from "../models/vagas.js";

/*Criando nossa Classe lembrando que comecamos com letra maiuscula, a classe 
não recebe parametros e não tem retorno*/

class VagasController {

    /* 
     vamos criar um função assync pra conectar com banco porisso deverá ser uma funçãao assicrono

    ********* OBS FUCAO ASSINCRONA ************
    funcoes assíncronas são aquelas que acessam ou buscam algum tipo de recurso em um dispositivo externo, 
    como por exemplo um banco de dados, nesse tipo de função precisamos que nosso código 
    espere que a resposta esteja disponível antes de executar a ação seguinte.
    ********************************************


    *******OBS FUNCAO STATIC *********
    Quando queremos utilizar o metodo de uma funcao serm precisar criar uma instancia da
    classe, chamar eles de forma statica. 

     Criar método de listarVagas que recebe dois parametros, será nosso controlador
     que vai manejar as requisicoes e respostas
     */

    
    static async listarVagas(req, res){
      const listaVagas = await vaga.find({});
      res.status(200).json(listaVagas);
    } 

    //criando controller para cadastro dentro de um bloco try catch
    /* manejo de erro sucesso*/
    static async cadastrarVaga(req,res){
        try{
            /* vaga é o modelo criado na camada models no mogoose e create é um metodo do mogoose
            para criar uma vaga la no banco e objeto de vaga é passado dento do req.body */
            const vagaNova = await vaga.create(req.body);

            //vagaNova é o retorno do metodo create do objeto criado 
            res.status(201).send({message: 'Vaga cadastrada com sucesso!', vaga: vagaNova});
        }
        catch(erro){
            // 500 erro interno do servidor  
            //erro.message é a mensagem de erro que o mogoose retorna
            res.status(500).json({error:`${erro.message} -falha ao cadatrar vaga`, });
        }
    }
}

//exportar clase para ser utilizadas em outras partes 
export default VagasController;