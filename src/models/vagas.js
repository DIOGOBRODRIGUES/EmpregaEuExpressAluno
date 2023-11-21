import mongoose from "mongoose";
//importando modulo especifico  adicionando schema como propriedade 
import {empresaSchema} from "../models/empresa.js"
const vagaSchema  = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, required: true},
    //dicionando a propiedade empresaSchema
    //juntar dois shcemas 
    empresa:empresaSchema,
    // empresa:{type: String, required: true},
    salario: {type: Number}
},{versionKey:false}
);
const vaga =  mongoose.model("Vagas", vagaSchema);

export default vaga;