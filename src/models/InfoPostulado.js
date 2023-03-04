const {Schema, model} = require('mongoose');

const infoPostuladoSchema= new Schema({
    tieneLibretaMilitar: Boolean,
    estadoLaboral: {
        type: String,
        trim: true
    },
    programaGobierno: {
        type: String,
        trim: true
    },
    salarioAspira: Number,
    perfilLaboral: {
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

module.exports= model('infoPostulados',infoPostuladoSchema);
