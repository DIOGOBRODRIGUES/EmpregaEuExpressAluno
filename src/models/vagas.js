import mongoose from "mongoose";

const vagaSchema  = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, required: true},
    empresa:{type: String},
    salario: {type: Number}
},{versionKey:false}
);
const vaga =  mongoose.model("Vagas", vagaSchema);

export default vaga;