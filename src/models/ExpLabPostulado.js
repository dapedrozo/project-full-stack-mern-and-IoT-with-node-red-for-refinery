const {Schema, model} = require('mongoose');

const ExpLabPostuladoSchema= new Schema({
    nombreEmpresa: {
        type: String,
        trim: true
    },
    telefonoEmpresa: {
        type: String,
        trim: true
    },
    trabajaActualEstaEmpresa: Boolean,
    fechaInicio: {
        type: Date
    },
    fechaFinalizacion: {type: Date, default:null},
    profesiones:{
        type: String,
        trim: true
    },
    cargo: {
        type: String,
        trim: true
    },
    funcionesLaborales: {
        type: String,
        trim: true
    },
    usuario: {
        type: String,
        trim: true,
        required: true
    },
    fechasMod: {fecha:{type:Date, default: Date.now}}
},{timestamps:true});

module.exports= model('expLabPostulados',ExpLabPostuladoSchema);