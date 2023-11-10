import mongoose from "mongoose";
//importando modulo especifico  
import {empresaSchema} from "./empresa.js"
const vagaSchema  = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, required: true},
    //dicionando a propiedade empresaSchema
    //juntar dois shcemas 
    empresa:empresaSchema,
    salario: {type: Number}
},{versionKey:false}
);
const vaga =  mongoose.model("Vagas", vagaSchema);

export default vaga;