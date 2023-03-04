const {Schema, model} = require('mongoose');

const formatString = new Schema({
    s:{
        type: String,
        trim: true
    }
},{_id:false})

const llenadoPor = new Schema({llenadoPor:
    {
        type: formatString,
        required: true
    }
},{
    timestamps:{createdAt:false, updatedAt:true}
})

const estudio = new Schema({
    nombreTitulo: formatString,
    //profesional, tecnico, etc
    nivelEstudio: formatString,
    //n semestres aprobados por ejemplo
    nivelEscolaridadAprobado: Number,
    //semestres, dias, etc
    definicionNivel: formatString,
    nombreInstituEducativa: formatString,
    esExtranjero: Boolean,
    finalizado: Boolean,
    fechaInicio: Date,
    fechaGrado: Date,
    autores: [llenadoPor]
},{timestamps:true});

const experiencia = new Schema({
    profesion: formatString,
    funcion: formatString,
    nombreEmpresa: formatString,
    telefonoEmpresa: formatString,
    emailEmpresa: formatString,
    celularEmpresa: formatString,
    cargo: formatString,
    autores: [llenadoPor]
},{timestamps:true});

const idioma = new Schema({
    idioma: formatString,
    nivelIdioma: formatString,
    autores: [llenadoPor]
},{timestamps:true});

const testPsicologico=new Schema({
    pregunta1: formatString,
    autores: [llenadoPor]
},{timestamps:true});

const infoGeneral = new Schema({
    tieneLibretaMilitar: Boolean,
    estadoLaboral: formatString,
    programaGobierno: formatString,
    salarioAspira: Number,
    perfilLaboral: formatString,
    aceptaTerminos: Boolean,
    autores: [llenadoPor]
});

const postuladoSchema= new Schema({
    tipoDoc: {
        type: String,
        required: true
    },
    numDoc: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    email: formatString,
    contacto: [formatString],
    infoGeneral: [infoGeneral],
    estudios:[estudio],
    experiencias:[experiencia],
    idiomas: [idioma],
    testPsico: testPsicologico,
    autores: [llenadoPor]},
    {timestamps:true}
);

module.exports= model('Postulados',postuladoSchema);
