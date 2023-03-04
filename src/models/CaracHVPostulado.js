const {Schema, model} = require('mongoose');
//var Float = require('mongoose-float').loadType(mongoose);

//info general postulado
//modelo estado laboral postulados
const EstadoLabPostuladoSchema= new Schema({
    EstadoLaboral: {
        type: String,
        trim: true
    },
    user: {
        type: String,
        trim: true
    }
},{timestamps:true});

const EstadoLabPostulado = model('estadoLabPostulados',EstadoLabPostuladoSchema);

//modelo programas de gobierno postulados
const ProgGobiernoPostuladoSchema= new Schema({
    ProgramasGobierno: {
        type: String,
        trim: true
    },
    user: {
        type: String,
        trim: true
    }
},{timestamps:true});

const ProgGobPostulado = model('ProgGobPostulados',ProgGobiernoPostuladoSchema);

//modelo minimo de rango salarial postulados
const MinRangSalarialPostuladoSchema= new Schema({
    MinRangoSalarial: {
        type: Number,
        trim: true
    },
    user: {
        type: String,
        trim: true
    }
},{timestamps:true});

const MinRangSalPostulado = model('MinRangSalarPostulados',MinRangSalarialPostuladoSchema);

//estudios postulado
//modelo nivel estudio postulados
const NivelEstudioPostuladoSchema= new Schema({
    NivelEstudio: {
        type: String,
        trim: true
    },
    user: {
        type: String,
        trim: true
    }
},{timestamps:true});

const NivEstudiosPostulado = model('NivEstudiosPostulados',NivelEstudioPostuladoSchema);

//modelo nivel escolaridad aprobado postulados
const NivelEscolaridadAprobadoPostuladoSchema= new Schema({
    NivelEscolaridadAprobado: {
        type: Number,
        trim: true
    },
    user: {
        type: String,
        trim: true
    }
},{timestamps:true});

const NivEscolAprobPostulado = model('NivEscolAprobPostulados',NivelEscolaridadAprobadoPostuladoSchema);

//modelo definicion de nivel de estudios definicionNivelEstudio postulados
const DefiNivelEstudioPostuladoSchema= new Schema({
    DefinicionNivelEstudio: {
        type: String,
        trim: true
    },
    user: {
        type: String,
        trim: true
    }
},{timestamps:true});

const DefNivEstudioPostulado = model('DefNivEstudioPostulados',DefiNivelEstudioPostuladoSchema);

//experiencia laboral
//modelo profesion postulados
const ProfesionPostuladoSchema= new Schema({
    ProfesionPostulado: {
        type: String,
        trim: true
    },
    user: {
        type: String,
        trim: true
    }
},{timestamps:true});

const ProfPostulado = model('ProfesionPostulados',ProfesionPostuladoSchema);

//idiomas postulado
//nivel idioma postulados
const NivelIdiomaPostuladoSchema= new Schema({
    NivelIdioma: {
        type: String,
        trim: true
    },
    user: {
        type: String,
        trim: true
    }
},{timestamps:true});

const NivelIdiomaPostulado = model('NivelIdiomaPostulados',NivelIdiomaPostuladoSchema);

//idiomas postulados
const IdiomaPostuladoSchema= new Schema({
    Idioma: {
        type: String,
        trim: true
    },
    user: {
        type: String,
        trim: true
    }
},{timestamps:true});

const IdiomaPostulado = model('IdiomaPostulados',IdiomaPostuladoSchema);

module.exports= {
    EstadoLabPostulado:EstadoLabPostulado,
    ProgGobPostulado:ProgGobPostulado,
    MinRangSalPostulado:MinRangSalPostulado,
    NivEstudiosPostulado:NivEstudiosPostulado,
    NivEscolAprobPostulado:NivEscolAprobPostulado,
    DefNivEstudioPostulado:DefNivEstudioPostulado,
    ProfPostulado:ProfPostulado,
    NivelIdiomaPostulado:NivelIdiomaPostulado,
    IdiomaPostulado:IdiomaPostulado
};