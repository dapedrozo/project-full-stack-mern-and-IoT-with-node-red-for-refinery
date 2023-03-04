const {Schema, model} = require('mongoose');

//modelo de datos del plc
const PlcSchema= new Schema({
    name: {
        type: String,
        trim: true
    },
},{timestamps:true});

const modelPlc = model('PlcModel',PlcSchema);

//modulos de plc
const ModulosPlcSchema= new Schema({
    name: {
        type: String,
        trim: true
    },
    idPlc:{
        type: String,
        trim: true
    },
},{timestamps:true});

const modulosPlc = model('ModuleModel',ModulosPlcSchema);

//datos recibidos del plc
const DataValuesModuleSchema= new Schema({
    presionEntrada: {
        type: Number,
        trim: true
    },
    volumen: {
        type: Number,
        trim: true
    },
    idOperacionModulo:{
        type:String,
        trim:true
    }
},{timestamps:true});

const dataValuesModule = model('DataValueModule',DataValuesModuleSchema);

//dato de temperatura del plc
const DataTempPlcSchema= new Schema({
    temperatura: {
        type: Number,
        trim: true
    },
    idOperacionGeneral:{
        type: String,
        trim:true
    }
},{timestamps:true});

const dataTempPlc = model('DataTemperaturaPlc',DataTempPlcSchema);

//datos guardar operaciones iniciales globales
//0=continuari, 1=frenado (posible continuar), -1=despresurizado (imposible continuar)
const OperacionGeneralSchema= new Schema({
    flujoBomba:{
        type: Number,
        trim:true
    },
    estado:{
        type:Number,
        default:0,
        trim:true
    },
    idPlc: {
        type: String,
        trim: true
    }
},{timestamps:true});

const operacionesGeneral = model('OperacionGeneral',OperacionGeneralSchema);

//datos guardar operaciones por modulo
//0=continuari, 1=frenado (posible continuar), -1=despresurizado (imposible continuar)
const OperacionModuleSchema= new Schema({
    presionFiltrado:{
        type: Number,
        trim:true
    },
    idOperacionGeneral:{
        type: String,
        trim:true
    },
    estado:{
        type:Number,
        default:0,
        trim:true
    },
    idModulo: {
        type: String,
        trim: true
    }
},{timestamps:true});

const operacionesModule = model('OperacionModulo',OperacionModuleSchema);

//coleccion de alarmas
//alarma plc
const AlarmaPlcSchema= new Schema({
    idOperacionGeneral:{
        type: String,
        trim:true
    },
    AlarmaTemperatura:{
        type: Boolean,
        default:true,
        trim:true
    }
},{timestamps:true});

const alarmaPlc = model('AlarmasPlc',AlarmaPlcSchema);

//alarma modulos
const AlarmaModuleSchema= new Schema({
    idOperacionModulo:{
        type: String,
        trim:true
    },
    AlarmaAtasco:{
        type: Boolean,
        trim:true
    },
    AlarmaFiltroDanado:{
        type: Boolean,
        trim:true
    },
    AlarmaElectrovalvula:{
        type: Boolean,
        trim:true
    }
},{timestamps:true});

const alarmaModule = model('AlarmasModulos',AlarmaModuleSchema);

module.exports= {
    modelPlc:modelPlc,
    dataValuesModule:dataValuesModule,
    modulosPlc:modulosPlc,
    dataTempPlc:dataTempPlc,
    operacionesGeneral:operacionesGeneral,
    operacionesModule:operacionesModule,
    alarmaPlc:alarmaPlc,
    alarmaModule:alarmaModule
};