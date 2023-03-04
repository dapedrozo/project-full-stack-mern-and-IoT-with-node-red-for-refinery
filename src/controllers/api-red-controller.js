
const nodeRedCTRL = {};

const { json } = require('express');
const {dataTempPlc} = require('../models/NodeRedInfo');
const {operacionesGeneral} = require('../models/NodeRedInfo');
const {operacionesModule} = require('../models/NodeRedInfo');
const {dataValuesModule} = require('../models/NodeRedInfo');
const {alarmaPlc} = require('../models/NodeRedInfo');
const {alarmaModule} = require('../models/NodeRedInfo');


/*
####################################################################################################
methods Node Red
####################################################################################################
*/
nodeRedCTRL.getPlcControl = async (req, res) => {
    const id = req.params.id;
    const lastOrderToPlc = await operacionesGeneral.find({idPlc:id}).sort({ createdAt: -1 }).limit(1)
    res.json({'flujoBomba':lastOrderToPlc[0].flujoBomba,'estado':lastOrderToPlc[0].estado})
}

nodeRedCTRL.getModuleControl = async (req, res) => {
    const id = req.params.id;
    const lastOrderToModule = await operacionesModule.find({idModulo:id}).sort({ createdAt: -1 }).limit(1)
    res.json({'presionFiltrado':lastOrderToModule[0].presionFiltrado,'estado':lastOrderToModule[0].estado})
}

/*
####################################################################################################
methods Node Red verificacion y validacion de errores
####################################################################################################
*/

nodeRedCTRL.postDataTempPlc = async (req, res) => {
    const {temperatura} = req.body
    const id = req.params.id
    const lastOperations = await operacionesGeneral.find({idPlc:id}).sort({ createdAt: -1 }).limit(1)
    const lastOperation = lastOperations[0]
    const newTempPlc = new dataTempPlc({
        temperatura,
        idOperacionGeneral:lastOperation._id
    });
    await newTempPlc.save()
    const lastAlarms = await alarmaPlc.find({idOperacionGeneral:lastOperation._id,AlarmaTemperatura:true}).sort({ createdAt: -1 }).limit(1)
    const lastAlarm = lastAlarms[0]
    if (lastAlarms.length == 0){
        if (temperatura>80){
            const newAlarmaPlc = new alarmaPlc({
                idOperacionGeneral:lastOperation._id
            })
            await newAlarmaPlc.save()
            res.json({'msg':'temperatura de plc registrada y alarma enviada'})
        }else{
        res.json({'msg':'temperatura de plc registrada'})}
    }else{
    if (!lastAlarm.AlarmaTemperatura){
        if (temperatura>80){
            const newAlarmaPlc = new alarmaPlc({
                idOperacionGeneral:lastOperation._id
            })
            await newAlarmaPlc.save()
            res.json({'msg':'temperatura de plc registrada y alarma enviada'})
        }else{
            +new Date
            if ((Date.now()-lastAlarm.createdAt)/1000 >10){
                await operacionesGeneral.findOneAndUpdate({_id: lastOperation._id}, {$set:{estado:-1}})
                await operacionesModule.updateMany({idOperacionGeneral:lastOperation._id},{
                    $set:{estado:-1}})
                res.json({'msg':'el proceso se ha detenido automaticamente'})
            }else{ 
            res.json({'msg':'temperatura de plc registrada'})}}
    }}
}

nodeRedCTRL.postDataValModule = async (req, res) => {
    const {presionEntrada,volumen} = req.body
    const id = req.params.id
    const lastOperations = await operacionesModule.find({idModulo:id}).sort({ createdAt: -1 }).limit(1)
    const lastOperation = lastOperations[0]
    const newDataModule = new dataValuesModule({
        presionEntrada,
        volumen,
        idOperacionModulo:lastOperation._id
    });
    await newDataModule.save()
    const lastAlarms = await alarmaModule.find({idOperacionModulo:lastOperation._id}).sort({ createdAt: -1 }).limit(1)
    const lastAlarm = lastAlarms[0]
    const fallaAtasco=(((Date.now()-lastOperation.createdAt)/1000 >420) && (volumen < 10))
    const filtroDano=(presionEntrada-14.69<10)
    const fallaElectro=(((Date.now()-lastOperation.createdAt)/3600000 >1) && (presionEntrada < 0.9*lastOperation.presionFiltrado))
    
    if (lastAlarms.length == 0){
        if (fallaAtasco || filtroDano || fallaElectro){
            const newAlarmaModule = new alarmaModule({
                idOperacionModulo:lastOperation._id,
                AlarmaAtasco:fallaAtasco,
                AlarmaFiltroDanado:filtroDano,
                AlarmaElectrovalvula:fallaElectro   
            })
            await newAlarmaModule.save()
            res.json({'msg':'datos de modulo registrados y alarma de modulo enviada'})
        }else{
        res.json({'msg':'datos de modulo registrados'})}
    }
    else{
    +new Date
    let a = false
    if (lastAlarm.AlarmaElectrovalvula){
        const listaOperModulos = await operacionesModule.find({idOperacionGeneral: lastOperation.idOperacionGeneral})
        let t=0
        for (let i = 0; i < listaOperModulos.length; i++) {
            const alarmas = await alarmaModule.find({idOperacionModulo:listaOperModulos[i]._id})
            t+=alarmas[i].AlarmaElectrovalvula
          }
        if (t==listaOperModulos.length){
            await operacionesModule.updateMany({idOperacionGeneral:lastOperation.idOperacionGeneral},{
                $set:{estado:-1}})
            await operacionesGeneral.findOneAndUpdate({_id:lastOperation.idOperacionGeneral}, {$set:{estado:-1}})
            a=true
        }
        
    }    
    if (fallaAtasco!=lastAlarm.AlarmaAtasco || filtroDano!=lastAlarm.AlarmaFiltroDanado || fallaElectro!=lastAlarm.AlarmaElectrovalvula){
        const newAlarmaModule = new alarmaModule({
            idOperacionModulo:lastOperation._id,
            AlarmaAtasco:fallaAtasco,
            AlarmaFiltroDanado:filtroDano,
            AlarmaElectrovalvula:fallaElectro   
        })
        await newAlarmaModule.save()
        if (a){
            res.json({'msg':'datos de modulo registrados y despresurizados todos los modulos'})
        }else{
        res.json({'msg':'datos de modulo registrados y alarma de modulo enviada'})}
    }else{
        let f=true
    if ((Date.now()-lastAlarm.createdAt)/1000 >10){
        const listaOperModulos = await operacionesModule.findOneAndUpdate({_id: lastOperation._id},{$set:{estado:-1}})
        if (a){
            res.json({'msg':'datos de modulo registrados y despresurizados todos los modulos'})

        }else{
        res.json({'msg':'datos de modulo registrado y despresurizado este modulo'})}
        f=false
    } 
    if (f){
    res.json({'msg':'datos de modulo registrado'})}
    }}
}


//rutas debugo
nodeRedCTRL.getDataTempPlc = async (req, res) => {
    const allTemp = await dataTempPlc.find().sort({ createdAt: -1 })
    res.json(allTemp)
}

nodeRedCTRL.getDataValModule = async (req, res) => {
    const allValue = await dataValuesModule.find().sort({ createdAt: -1 })
    res.json(allValue)
}

nodeRedCTRL.getAlarmaPlc = async (req, res) => {
    const allAlarmaPlcValue = await alarmaPlc.find().sort({ createdAt: -1 })
    res.json(allAlarmaPlcValue)
}

nodeRedCTRL.getAlarmaModule = async (req, res) => {
    const allAlarmaModuleValue = await alarmaModule.find().sort({ createdAt: -1 })
    res.json(allAlarmaModuleValue)
}

nodeRedCTRL.deleteAllDbRed = async (req, res) => {
    await dataTempPlc.deleteMany()
    await operacionesGeneral.deleteMany()
    await operacionesModule.deleteMany()
    await dataValuesModule.deleteMany()
    await alarmaPlc.deleteMany()
    await alarmaModule.deleteMany()
    res.json({'msg':'bd borrada'})
}

module.exports = nodeRedCTRL;