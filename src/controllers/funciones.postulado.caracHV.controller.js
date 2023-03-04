const caracHVFunctionsCtrl = {};

const { json } = require('express');
const {EstadoLabPostulado} = require('../models/CaracHVPostulado');
const {ProgGobPostulado} = require('../models/CaracHVPostulado');
const {MinRangSalPostulado} = require('../models/CaracHVPostulado');
const {NivEstudiosPostulado} = require('../models/CaracHVPostulado');
const {NivEscolAprobPostulado} = require('../models/CaracHVPostulado');
const {DefNivEstudioPostulado} = require('../models/CaracHVPostulado');
const {ProfPostulado} = require('../models/CaracHVPostulado');
const {NivelIdiomaPostulado} = require('../models/CaracHVPostulado');
const {IdiomaPostulado} = require('../models/CaracHVPostulado');

/*
####################################################################################################
methods get (all)
####################################################################################################
*/
//estado laboral postulado
caracHVFunctionsCtrl.AllEstLabPostulado = async function filterEstLabPostulado(){
    const estLabAllPostulados = await EstadoLabPostulado.find();
    return estLabAllPostulados
}

//programas de gobierno postulado
caracHVFunctionsCtrl.AllProgGobPostulado = async function filterProgGobPostulado(){
    const progGobAllPostulados = await ProgGobPostulado.find();
    return progGobAllPostulados
}

//minimo de rango salarial postulado
caracHVFunctionsCtrl.AllMinRanSalPostulado = async function filterMinRanSalPostulado(){
    const minRangSalAllPostulados = await MinRangSalPostulado.find();
    return minRangSalAllPostulados
}

//nivel estudios postulado
caracHVFunctionsCtrl.AllNivelEstudioPostulado = async function filterNivelEstudioPostulado(){
    const nivelEstudioAllPostulados = await NivEstudiosPostulado.find();
    return nivelEstudioAllPostulados
}

//nivel de escolaridad aprobado postulado
caracHVFunctionsCtrl.AllNivEscAprobPostulado = async function filterNivelEscAprobPostulado(){
    const nivelEscAprobAllPostulados = await NivEscolAprobPostulado.find();
    return nivelEscAprobAllPostulados
}

//definicion de nivel de estudios postulado
caracHVFunctionsCtrl.AllDefNivelEstudioPostulado = async function filterDefNivelEstudioPostulado(){
    const defNivelEstudioAllPostulados = await DefNivEstudioPostulado.find();
    return defNivelEstudioAllPostulados
}

//Profesion postulado
caracHVFunctionsCtrl.AllProfesionPostulado = async function filterProfesionPostulado(){
    const profesionAllPostulados = await ProfPostulado.find();
    return profesionAllPostulados
}

//nivel idioma postulado
caracHVFunctionsCtrl.AllNivelIdiomaPostulado = async function filterNivelIdiomaPostulado(){
    const nivelIdiomaAllPostulados = await NivelIdiomaPostulado.find();
    return nivelIdiomaAllPostulados
}

//idioma postulado
caracHVFunctionsCtrl.AllIdiomaPostulado = async function filterIdiomaPostulado(){
    const idiomaAllPostulados = await IdiomaPostulado.find();
    return idiomaAllPostulados
}

/*
####################################################################################################
methods post
####################################################################################################
*/
//estado laboral postulado
caracHVFunctionsCtrl.CreateEstLabPostulado = async function createEstLabPostulado(EstadoLaboral,user){
    const newEstLabPostulado = new EstadoLabPostulado({
        EstadoLaboral,
        user
    });
    await newEstLabPostulado.save()
} 

//programas de gobierno postulado 
caracHVFunctionsCtrl.CreateProgGobPostulado = async function createProgGobPostulado(ProgramasGobierno,user){
    const newProgGobPostulado = new ProgGobPostulado({
        ProgramasGobierno,
        user
    });
    await newProgGobPostulado.save()
} 

//minimo de rango salarial postulado
caracHVFunctionsCtrl.CreateMinRangSalPostulado = async function createMinRangSalPostulado(MinRangoSalarial, user){
    const newMinRangSalPostulado = new MinRangSalPostulado({
        MinRangoSalarial,
        user
    });
    await newMinRangSalPostulado.save()
} 

//nivel estudios postulado 
caracHVFunctionsCtrl.CreateNivEstudiosPostulado = async function createNivEstudiosPostulado(NivelEstudio, user){
    const newNivEstudiosPostulado = new NivEstudiosPostulado({
        NivelEstudio,
        user
    });
    await newNivEstudiosPostulado.save()
} 

//nivel escolaridad aprobado postulado 
caracHVFunctionsCtrl.CreateNivEscolAprobPostulado = async function createNivEscolAprobPostulado(NivelEscolaridadAprobado, user){
    const newNivEscolAprobPostulado = new NivEscolAprobPostulado({
        NivelEscolaridadAprobado,
        user
    });
    await newNivEscolAprobPostulado.save()
} 

//definicion nivel escolaridad aprobado postulado 
caracHVFunctionsCtrl.CreateDefNivEstudioPostulado = async function createDefNivEstudioPostulado(DefinicionNivelEstudio, user){
    const newDefNivEstudioPostulado = new DefNivEstudioPostulado({
        DefinicionNivelEstudio,
        user
    });
    await newDefNivEstudioPostulado.save()
}

//profesion postulado 
caracHVFunctionsCtrl.CreateProfesionPostulado = async function createProfesionPostulado(ProfesionPostulado,user){
    const newProfesionPostulado = new ProfPostulado({
        ProfesionPostulado,
        user
    });
    await newProfesionPostulado.save()
}

//nivel idioma postulado 
caracHVFunctionsCtrl.CreateNivelIdiomaPostulado = async function createNivelIdiomaPostulado(NivelIdioma,user){
    const newNivelIdiomaPostulado = new NivelIdiomaPostulado({
        NivelIdioma,
        user
    });
    await newNivelIdiomaPostulado.save()
}

//idioma postulado 
caracHVFunctionsCtrl.CreateIdiomaPostulado = async function createIdiomaPostulado(Idioma,user){
    const newIdiomaPostulado = new IdiomaPostulado({
        Idioma,
        user
    });
    await newIdiomaPostulado.save()
}

/*
####################################################################################################
methods get (unique)
####################################################################################################
*/

//estado laboral postulado 
caracHVFunctionsCtrl.OneEstadoLabPostulado = async function filterOneEstadoLabPostulado(id){
    const estadoLabOnePostulado = await EstadoLabPostulado.findById(id);
    return estadoLabOnePostulado
}

//programa de gobierno postulado 
caracHVFunctionsCtrl.OneProgGobPostulado = async function filterOneProgGobPostulado(id){
    const progGobOnePostulado = await ProgGobPostulado.findById(id);
    return progGobOnePostulado
}

//minimo de rango salarial postulado 
caracHVFunctionsCtrl.OneMinRangSalPostulado = async function filterOneMinRangSalPostulado(id){
    const minRangSalOnePostulado = await MinRangSalPostulado.findById(id);
    return minRangSalOnePostulado
}

//nivel de estudios postulado 
caracHVFunctionsCtrl.OneNivEstudiosPostulado = async function filterOneNivEstudiosPostulado(id){
    const nivEstudiosOnePostulado = await NivEstudiosPostulado.findById(id);
    return nivEstudiosOnePostulado
}

//nivel de escolaridad aprobado postulado 
caracHVFunctionsCtrl.OneNivEscolAprobPostulado = async function filterOneNivEscolAprobPostulado(id){
    const nivEscolAprobOnePostulado = await NivEscolAprobPostulado.findById(id);
    return nivEscolAprobOnePostulado
}

//definicion de nivel de estudio postulado 
caracHVFunctionsCtrl.OneDefNivEstudioPostulado = async function filterOneDefNivEstudioPostulado(id){
    const defNivEstudioOnePostulado = await DefNivEstudioPostulado.findById(id);
    return defNivEstudioOnePostulado
}

//profesion postulado 
caracHVFunctionsCtrl.OneProfesionPostulado = async function filterOneProfesionPostulado(id){
    const profesionOnePostulado = await ProfPostulado.findById(id);
    return profesionOnePostulado
}

//nivel de idioma postulado 
caracHVFunctionsCtrl.OneNivelIdiomaPostulado = async function filterOneNivelIdiomaPostulado(id){
    const nivelIdiomaOnePostulado = await NivelIdiomaPostulado.findById(id);
    return nivelIdiomaOnePostulado
}

//idioma postulado 
caracHVFunctionsCtrl.OneIdiomaPostulado = async function filterOneIdiomaPostulado(id){
    const idiomaOnePostulado = await IdiomaPostulado.findById(id);
    return idiomaOnePostulado
}

/*
####################################################################################################
methods put
####################################################################################################
*/

//estado laboral postulado
caracHVFunctionsCtrl.UpdateEstadoLabPostulado = async function updateEstadoLabPostulado(id,EstadoLaboral,user){
    await EstadoLabPostulado.findOneAndUpdate({_id: id}, {
        EstadoLaboral,
        user
    }); 
}

//programa de gobierno postulado
caracHVFunctionsCtrl.UpdateProgGobPostulado = async function updateProgGobPostulado(id,ProgramasGobierno,user){
    await ProgGobPostulado.findOneAndUpdate({_id: id}, {
        ProgramasGobierno,
        user
    }); 
}

//minimo de rango salarial postulado
caracHVFunctionsCtrl.UpdateMinRangSalPostulado = async function updateMinRangSalPostulado(id,MinRangoSalarial,user){
    await MinRangSalPostulado.findOneAndUpdate({_id: id}, {
        MinRangoSalarial,
        user
    }); 
}

//nivel de estudio postulado
caracHVFunctionsCtrl.UpdateNivEstudiosPostulado = async function updateNivEstudiosPostulado(id,NivelEstudio,user){
    await NivEstudiosPostulado.findOneAndUpdate({_id: id}, {
        NivelEstudio,
        user
    }); 
}

//nivel de escolaridad aprobado postulado
caracHVFunctionsCtrl.UpdateNivEscolAprobPostulado = async function updateNivEscolAprobPostulado(id,NivelEscolaridadAprobado,user){
    await NivEscolAprobPostulado.findOneAndUpdate({_id: id}, {
        NivelEscolaridadAprobado,
        user
    }); 
}

//definicion nivel de estudiio postulado
caracHVFunctionsCtrl.UpdateDefNivEstudioPostulado = async function updateDefNivEstudioPostulado(id,DefinicionNivelEstudio,user){
    await DefNivEstudioPostulado.findOneAndUpdate({_id: id}, {
        DefinicionNivelEstudio,
        user
    }); 
}

//profesion postulado
caracHVFunctionsCtrl.UpdateProfesionPostulado = async function updateProfesionPostulado(id,ProfesionPostulado,user){
    await ProfPostulado.findOneAndUpdate({_id: id}, {
        ProfesionPostulado,
        user
    }); 
}

//nivel de idioma postulado
caracHVFunctionsCtrl.UpdateNivelIdiomaPostulado = async function updateNivelIdiomaPostulado(id,NivelIdioma,user){
    await NivelIdiomaPostulado.findOneAndUpdate({_id: id}, {
        NivelIdioma,
        user
    }); 
}

//idioma postulado
caracHVFunctionsCtrl.UpdateIdiomaPostulado = async function updateIdiomaPostulado(id,Idioma,user){
    await IdiomaPostulado.findOneAndUpdate({_id: id}, {
        Idioma,
        user
    }); 
}

/*
####################################################################################################
methods delete
####################################################################################################
*/

//estado laboral postulado
caracHVFunctionsCtrl.delEstadoLabPostulado = async function deleteEstadoLabPostulado(id){
    await EstadoLabPostulado.findOneAndDelete({_id:id});
}

//programa de gobierno postulado
caracHVFunctionsCtrl.delProgGobPostulado = async function deleteProgGobPostulado(id){
    await ProgGobPostulado.findOneAndDelete({_id:id});
}

//minimo de rango salarial postulado
caracHVFunctionsCtrl.delMinRangSalPostulado = async function deleteMinRangSalPostulado(id){
    await MinRangSalPostulado.findOneAndDelete({_id:id});
}

//nivel de estudio postulado
caracHVFunctionsCtrl.delNivEstudiosPostulado = async function deleteNivEstudiosPostulado(id){
    await NivEstudiosPostulado.findOneAndDelete({_id:id});
}

//nivel de escolaridad aprobado postulado
caracHVFunctionsCtrl.delNivEscolAprobPostulado = async function deleteNivEscolAprobPostulado(id){
    await NivEscolAprobPostulado.findOneAndDelete({_id:id});
}

//definicion nivel de estudio postulado
caracHVFunctionsCtrl.delDefNivEstudioPostulado = async function deleteDefNivEstudioPostulado(id){
    await DefNivEstudioPostulado.findOneAndDelete({_id:id});
}

//profesion postulado
caracHVFunctionsCtrl.delProfesionPostulado = async function deleteProfesionPostulado(id){
    await ProfPostulado.findOneAndDelete({_id:id});
}

//nivel de idioma postulado
caracHVFunctionsCtrl.delNivelIdiomaPostulado = async function deleteNivelIdiomaPostulado(id){
    await NivelIdiomaPostulado.findOneAndDelete({_id:id});
}

//idioma postulado
caracHVFunctionsCtrl.delIdiomaPostulado = async function deleteIdiomaPostulado(id){
    await IdiomaPostulado.findOneAndDelete({_id:id});
}

module.exports = caracHVFunctionsCtrl;