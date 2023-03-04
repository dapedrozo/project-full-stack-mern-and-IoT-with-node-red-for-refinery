const {Schema, model} = require('mongoose');

const EstudioPostuladoSchema= new Schema({
    nombreTitulo: {
        type: String,
        trim: true
    },
    //profesional, tecnico, etc
    nivelEstudio: {
        type: String,
        trim: true
    },
    //n semestres aprobados por ejemplo
    nivelEscolaridadAprobado: Number,
    //semestres, dias, etc
    definicionNivel: {
        type: String,
        trim: true
    },
    nombreInstituEducativa: {
        type: String,
        trim: true
    },
    esExtranjero: Boolean,
    finalizado: Boolean,
    fechaInicio: {type: Date},
    fechaGrado: {type: Date, default:null},
    usuario: {
        type: String,
        trim: true,
        required: true
    },
    fechasMod: {fecha:{type:Date, default: Date.now}}
},{timestamps:true});

module.exports= model('estudiosPostulados',EstudioPostuladoSchema);
