import mongoose from "mongoose";

const empresaSchema  = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome:{type: String, required: true},
    endereco:{type: String},
    CNPJ: {type: Number}
},{versionKey:false} //ferramenta do mogoose que nao vamos utilizar 
);
//criando modelo mogoose
const empresa =  mongoose.model("Empresa", empresaSchema);
//export do modelo empresa 
export default {empresa, empresaSchema};