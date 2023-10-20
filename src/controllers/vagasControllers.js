//import do modelo  de vaga criado na camada models
import vaga from "../models/vagas.js";


/* criar nossa classe sem passar parametros sem retorno*/

class VagasController{

    /*
        ****OBS FUNCAO  ASSICRONA *******
        funções assicronas são aquels que acessam ou buscam algum tipo de recurso
        em um dispositivo externo, como por exemplo um banco de dados.
        Nesse tipo de função, precisamos que nosso código espere a resposta para 
        executar a ação seguinte

        ***OBS FUNCAO STATIC***
        Quandor queresmo utilizar o metodo de uma funcao sem precisar criar 
        uma instancia da classe, chamar eles de forma estatica. 

        Criar um método de listarVagas que recebe dois parametros, o primeiro
        é o controlador que vai manejar as requesições e o segundo  as respostas.
    */
   static async listarVagas(req, res){
        const listaVagas = await vaga.find({});
        res.status(200).json(listaVagas);
   }

   //criar controller para cadastro de vagas, utilizando bloco try e catch
   static async cadastrarVaga(req, res){

   //manejo de erro | SUCESSO
   try{
        /*
        Vaga é o modelo criado na camada models no mogoose e create é um 
        metodo do mogoose para criar uma vaga no banco, e objeto de vaga
        é passado no req.body
        */
       const vagaNova = await vaga.create(req.body);
       //vagaNova é  retorno  do metodo create. 
       res.status(201).send({message:'Vaga cadastrada com sucesso!', vaga:vagaNova});
   }
   catch(erro){
     //500 erro interno do servidor
     //erro.message é a mensagem de erro que o mongoose retorna
     res.status(500).json({error:`${erro.message}-falha ao cadastrar vaga`});
   }
 }
}
//exportar classe para ser utilizada em outras partes da aplicação
export default VagasController;