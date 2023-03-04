const {Schema, model} = require('mongoose');

const IdiomasPostuladoSchema= new Schema({
    idioma: {
        type: String,
        trim: true
    },
    nivelIdioma: {
        type: String,
        trim: true
    },
    tieneCertificado:Boolean,
    usuario: {
        type: String,
        trim: true,
        required: true
    },
    fechasMod: {fecha:{type:Date, default: Date.now}}
},{timestamps:true});

module.exports= model('idiomasPostulados',IdiomasPostuladoSchema);