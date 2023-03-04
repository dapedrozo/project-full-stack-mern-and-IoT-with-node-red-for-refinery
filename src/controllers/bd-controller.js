const bdCtrl = {};

const { json } = require('express');
const {modelPlc} = require('../models/NodeRedInfo');
const {modulosPlc} = require('../models/NodeRedInfo');

/*
####################################################################################################
methods Plc
####################################################################################################
*/
bdCtrl.getAllPlcs = async (req, res) => {
    const AllPlc = await modelPlc.find()
    res.json(AllPlc)
}

bdCtrl.createPlc = async (req, res) => {
    const {name} = req.body
    const newPlc = new modelPlc({
        name
    });
    await newPlc.save()
    res.json({'msg':'plc creado'})
}

bdCtrl.deletePlc = async (req, res) => {
    const id = req.params.id;
    await modelPlc.findOneAndDelete({_id:id});
    res.json({ "msg": "plc eliminado" })
}

/*
####################################################################################################
methods Modules
####################################################################################################
*/

bdCtrl.getAllModules = async (req, res) => {
    const AllModules = await modulosPlc.find()
    res.json(AllModules)
}

bdCtrl.createModule = async (req, res) => {
    const {name,idPlc} = req.body
    const newModule = new modulosPlc({
        name,
        idPlc
    });
    await newModule.save()
    res.json({'msg':'modulo creado'})
}

bdCtrl.deleteModule = async (req, res) => {
    const id = req.params.id;
    await modulosPlc.findOneAndDelete({_id:id});
    res.json({ "msg": "modulo eliminado" })
}

module.exports = bdCtrl;