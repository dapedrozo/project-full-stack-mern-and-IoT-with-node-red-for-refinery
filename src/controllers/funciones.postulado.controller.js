const postuladoFunctionsCtrl = {};

const { json } = require('express');
const infoPostulados = require('../models/InfoPostulado');
const estudiosPostulados = require('../models/EstudiosPostulado');
const idiomasPostulados = require('../models/IdiomasPostulado');
const expLabPostulados = require('../models/ExpLabPostulado');

/*
####################################################################################################
methods get (all)
####################################################################################################
*/
//info postulado
postuladoFunctionsCtrl.AllInfoPostulado = async function filterInfoPostulado(){
    const infoAllPostulados = await infoPostulados.find();
    return infoAllPostulados
}

//edtudios postulado
postuladoFunctionsCtrl.AllEstudiosPostulado = async function filterEstudiosPostulado(){
    const estudiosAllPostulados = await estudiosPostulados.find();
    return estudiosAllPostulados
}

//idiomas postulado
postuladoFunctionsCtrl.AllIdiomasPostulado = async function filterIdiomasPostulado(){
    const idiomasAllPostulados = await idiomasPostulados.find();
    return idiomasAllPostulados
}

//experiencia laboral postulado
postuladoFunctionsCtrl.AllExpLabPostulado = async function filterExpLabPostulado(){
    const expLabAllPostulados = await expLabPostulados.find();
    return expLabAllPostulados
}

/*
####################################################################################################
methods post
####################################################################################################
*/
//info postulado
postuladoFunctionsCtrl.CreateInfoPostulado = async function createInfoPostulado(tieneLibretaMilitar,estadoLaboral, programaGobierno, salarioAspira, perfilLaboral,usuario){
    const newInfoPostulado = new infoPostulados({
        tieneLibretaMilitar,
        estadoLaboral,
        programaGobierno,
        salarioAspira,
        perfilLaboral,
        usuario
    });
    await newInfoPostulado.save()
} 

//estudios postulado
postuladoFunctionsCtrl.CreateEstudiosPostulado = async function createEstudiosPostulado(nombreTitulo,nivelEstudio, nivelEscolaridadAprobado, definicionNivel, nombreInstituEducativa, esExtranjero, finalizado,fechaInicio,fechaGrado,usuario){
    const newEstudiosPostulado = new estudiosPostulados({
        nombreTitulo,
        nivelEstudio,
        nivelEscolaridadAprobado,
        definicionNivel,
        nombreInstituEducativa,
        esExtranjero,
        finalizado,
        fechaInicio,
        fechaGrado,
        usuario
    });
    await newEstudiosPostulado.save()
} 

//idiomas postulado
postuladoFunctionsCtrl.CreateIdiomasPostulado = async function createIdiomasPostulado(idioma,nivelIdioma, tieneCertificado, usuario){
    const newIdiomasPostulado = new idiomasPostulados({
        idioma,
        nivelIdioma,
        tieneCertificado,
        usuario
    });
    await newIdiomasPostulado.save()
} 

//experiencia laboral postulado
postuladoFunctionsCtrl.CreateExpLabPostulado = async function createExpLabPostulado(nombreEmpresa,telefonoEmpresa, trabajaActualEstaEmpresa, fechaInicio,fechaFinalizacion,profesiones,cargo,funcionesLaborales,usuario){
    const newExpLabPostulado = new expLabPostulados({
        nombreEmpresa,
        telefonoEmpresa,
        trabajaActualEstaEmpresa,
        fechaInicio,
        fechaFinalizacion,
        profesiones,
        cargo,
        funcionesLaborales,
        usuario
    });
    await newExpLabPostulado.save()
} 

/*
####################################################################################################
methods get (unique)
####################################################################################################
*/

//info postulado
postuladoFunctionsCtrl.OneInfoPostulado = async function filterOneInfoPostulado(id){
    const infoOnePostulado = await infoPostulados.findById(id);
    return infoOnePostulado
}

//estudio postuladdo
postuladoFunctionsCtrl.OneEstudioPostulado = async function filterOneEstudioPostulado(id){
    const estudioOnePostulado = await estudiosPostulados.findById(id);
    return estudioOnePostulado
}

//idioma postuladdo
postuladoFunctionsCtrl.OneIdiomaPostulado = async function filterOneIdiomaPostulado(id){
    const idiomaOnePostulado = await idiomasPostulados.findById(id);
    return idiomaOnePostulado
}

//experiencia laboral postuladdo
postuladoFunctionsCtrl.OneExpLabPostulado = async function filterOneExpLabPostulado(id){
    const expLabOnePostulado = await expLabPostulados.findById(id);
    return expLabOnePostulado
}

/*
####################################################################################################
methods put
####################################################################################################
*/

//info postulado
postuladoFunctionsCtrl.UpdateInfoPostulado = async function updateInfPostulado(id,tieneLibretaMilitar,estadoLaboral,programaGobierno,salarioAspira,perfilLaboral,usuario){
    await infoPostulados.findOneAndUpdate({_id: id}, {
        tieneLibretaMilitar,
        estadoLaboral,
        programaGobierno,
        salarioAspira,
        perfilLaboral,
        usuario
    }); 
}

//estudio postulado
postuladoFunctionsCtrl.UpdateEstudioPostulado = async function updateEstudioPostulado(id,nombreTitulo,nivelEstudio, nivelEscolaridadAprobado, definicionNivel, nombreInstituEducativa, esExtranjero, finalizado,fechaInicio,fechaGrado,usuario){
    await estudiosPostulados.findOneAndUpdate({_id: id}, {
        nombreTitulo,
        nivelEstudio,
        nivelEscolaridadAprobado,
        definicionNivel,
        nombreInstituEducativa,
        esExtranjero,
        finalizado,
        fechaInicio,
        fechaGrado,
        usuario
    }); 
}

//idioma postulado
postuladoFunctionsCtrl.UpdateIdiomaPostulado = async function updateIdiomaPostulado(id,idioma,nivelIdioma,tieneCertificado, usuario){
    await idiomasPostulados.findOneAndUpdate({_id: id}, {
        idioma,
        nivelIdioma,
        tieneCertificado,
        usuario
    }); 
}

//experiencia laboral postulado
postuladoFunctionsCtrl.UpdateExpLabPostulado = async function updateExpLabPostulado(id,nombreEmpresa,telefonoEmpresa, trabajaActualEstaEmpresa, fechaInicio,fechaFinalizacion,profesiones,cargo,funcionesLaborales,usuario){
    await expLabPostulados.findOneAndUpdate({_id: id}, {
        nombreEmpresa,
        telefonoEmpresa,
        trabajaActualEstaEmpresa,
        fechaInicio,
        fechaFinalizacion,
        profesiones,
        cargo,
        funcionesLaborales,
        usuario
    }); 
}

/*
####################################################################################################
methods delete
####################################################################################################
*/

//info postulado
postuladoFunctionsCtrl.delInfoPostulado = async function deleteInfoPostulado(id){
    await infoPostulados.findOneAndDelete({_id:id});
}

//estudio postulado
postuladoFunctionsCtrl.delEstudioPostulado = async function deleteEstudioPostulado(id){
    await estudiosPostulados.findOneAndDelete({_id:id});
}

//idioma postulado
postuladoFunctionsCtrl.delIdiomaPostulado = async function deleteIdiomaPostulado(id){
    await idiomasPostulados.findOneAndDelete({_id:id});
}

//experiencia laboral postulado
postuladoFunctionsCtrl.delExpLabPostulado = async function deleteExpLabPostulado(id){
    await expLabPostulados.findOneAndDelete({_id:id});
}


module.exports = postuladoFunctionsCtrl;