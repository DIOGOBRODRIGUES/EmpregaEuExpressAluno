//import do modelo de empresa criado  na camada models 
import {empresa} from "../models/empresa.js"

/*
*/

class EmpresaController {

  static async listarEmpresa(req, res){
    try{
      const listaEmpresas = await empresa.find({});
      res.status(200).json(listaEmpresas);
    }catch(erro){
      res.status(500).json({message: `Erro ao listar empresas - ${erro.message}`});
    
    }
    } 


    static async listarEmpresaPorId(req, res){
      try{
         
        const id =  req.params.id;
        const empresaEncontrada = await empresa.findById({id});
        res.status(200).json(empresaEncontrada);
      }catch(erro){
        res.status(500).json({message: `Erro ao lista empresa - ${erro.message}`});
      
      }
      } 
    
    static async cadastrarEmpresa(req,res){
        try{
         
            const empresaNova = await empresa.create(req.body);
            res.status(201).send({message: 'Empresa cadastrada com sucesso!', empresa: empresaNova});
        }
        catch(erro){
            res.status(500).json({error:`${erro.message} -falha ao cadatrar empresa`, });
        }
    }

      static async atualizarEmpresa(req, res){
        try{
         
          const id =  req.params.id;
          await empresa.findByIdAndUpdate(id, req.body);
          res.status(200).json({message: `Empresa atualizada com sucesso!`});
        }catch(erro){
          res.status(500).json({message: `Erro ao lista vaga - ${erro.message}`});
        
        }
        } 

          // deletar vagas 
      static async excluirEmpresa(req, res){
        try{
          /*id vai guardar a id passada na requisção 
          findByIdAndDelete método moogose que recebe dois parâmetros
          a id e os dados da vaga que será deletada.
          */
          const id =  req.params.id;
          await empresa.findByIdAndDelete(id, req.body);
          res.status(200).json({message: `Empresa excluida com sucesso!`});
        }catch(erro){
          res.status(500).json({message: `Erro ao deletar Empresa - ${erro.message}`});
        
        }
        } 
}

//exportar clase para ser utilizadas em outras partes 
export default EmpresaController;