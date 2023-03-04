const caracHVCtrl = {};
const caracHVModel = require('./funciones.postulado.caracHV.controller')

/*
####################################################################################################
methods all get
####################################################################################################
*/

//estado laboral postulados
caracHVCtrl.getEstLabPostulados = async (req,res)=>{
    const estLabPostulados = await caracHVModel.AllEstLabPostulado()
    res.json(estLabPostulados)
}

//programas de gobierno postulados
caracHVCtrl.getProgGobPostulados = async (req,res)=>{
    const progGobPostulados = await caracHVModel.AllProgGobPostulado()
    res.json(progGobPostulados)
}

//minimo de rango salarial postulado
caracHVCtrl.getMinRangSalPostulados = async (req,res)=>{
    const MinRangSalPostulados = await caracHVModel.AllMinRanSalPostulado()
    res.json(MinRangSalPostulados)
}

//nivel de estudios postulado
caracHVCtrl.getNivelEstudioPostulados = async (req,res)=>{
    const AllNivelEstudioPostulados = await caracHVModel.AllNivelEstudioPostulado()
    res.json(AllNivelEstudioPostulados)
}

//nivel de escolaridad aprobado postulado 
caracHVCtrl.getNivEscolAprobPostulados = async (req,res)=>{
    const AllNivEscolAprobPostulados = await caracHVModel.AllNivEscAprobPostulado()
    res.json(AllNivEscolAprobPostulados)
}

//definicion de nivel de estudios postulado
caracHVCtrl.getDefNivEstudioPostulados = async (req,res)=>{
    const AllDefNivEstudioPostulados = await caracHVModel.AllDefNivelEstudioPostulado()
    res.json(AllDefNivEstudioPostulados)
}

//profesiones postulado 
caracHVCtrl.getProfesionPostulados = async (req,res)=>{
    const AllProfesionPostulados = await caracHVModel.AllProfesionPostulado()
    res.json(AllProfesionPostulados)
}

//nivel de idiomas postulado 
caracHVCtrl.getNivelIdiomaPostulados = async (req,res)=>{
    const AllNivelIdiomaPostulados = await caracHVModel.AllNivelIdiomaPostulado()
    res.json(AllNivelIdiomaPostulados)
}

//idiomas postulado 
caracHVCtrl.getIdiomaPostulados = async (req,res)=>{
    const AllIdiomaPostulados = await caracHVModel.AllIdiomaPostulado()
    res.json(AllIdiomaPostulados)
}

/*
####################################################################################################
methods post
####################################################################################################
*/

//estado laboral postulados
caracHVCtrl.createEstadoLabPostulados = (req,res)=>{
    const {EstadoLaboral,user} = req.body;
    caracHVModel.CreateEstLabPostulado(EstadoLaboral,user)
    res.json({"msg":"informacion registrada correctamente"})
}

//proramas de gobierno postulados 
caracHVCtrl.createProgramasGobiernoPostulados = (req,res)=>{
    const {ProgramasGobierno,user} = req.body;
    caracHVModel.CreateProgGobPostulado(ProgramasGobierno,user)
    res.json({"msg":"informacion registrada correctamente"})
}

//minimo de rango salarial postulados
caracHVCtrl.createMinRangSalPostulados = (req,res)=>{
    const {MinRangoSalarial,user} = req.body;
    caracHVModel.CreateMinRangSalPostulado(MinRangoSalarial,user)
    res.json({"msg":"informacion registrada correctamente"})
}

//nivel de estudios postulados
caracHVCtrl.createNivEstudiosPostulados = (req,res)=>{
    const {NivelEstudio,user} = req.body;
    caracHVModel.CreateNivEstudiosPostulado(NivelEstudio,user)
    res.json({"msg":"informacion registrada correctamente"})
}

//nivel de escolaridad aprobado postulados
caracHVCtrl.createNivEscolAprobPostulados = (req,res)=>{
    const {NivelEscolaridadAprobado,user} = req.body;
    caracHVModel.CreateNivEscolAprobPostulado(NivelEscolaridadAprobado,user)
    res.json({"msg":"informacion registrada correctamente"})
}

//definicion nivel escolaridad aprobado postulado 
caracHVCtrl.createDefNivEstudioPostulados = (req,res)=>{
    const {DefinicionNivelEstudio,user} = req.body;
    caracHVModel.CreateDefNivEstudioPostulado(DefinicionNivelEstudio,user)
    res.json({"msg":"informacion registrada correctamente"})
}

//profesion postulado 
caracHVCtrl.createProfesionPostulados = (req,res)=>{
    const {ProfesionPostulado,user} = req.body;
    caracHVModel.CreateProfesionPostulado(ProfesionPostulado,user)
    res.json({"msg":"informacion registrada correctamente"})
}

//nivel idioma postulado 
caracHVCtrl.createNivelIdiomaPostulados = (req,res)=>{
    const {NivelIdioma,user} = req.body;
    caracHVModel.CreateNivelIdiomaPostulado(NivelIdioma,user)
    res.json({"msg":"informacion registrada correctamente"})
}

//idioma postulado 
caracHVCtrl.createIdiomaPostulados = (req,res)=>{
    const {Idioma,user} = req.body;
    caracHVModel.CreateIdiomaPostulado(Idioma,user)
    res.json({"msg":"informacion registrada correctamente"})
}

/*
####################################################################################################
methods get unique
####################################################################################################
*/

//estado laboral postulado 
caracHVCtrl.getEstadoLabPostulado = async (req,res)=>{
    const id = req.params.id;
    const infoOneEstadoLabPostulado = await caracHVModel.OneEstadoLabPostulado(id)
    res.json(infoOneEstadoLabPostulado)
}

//programa de gobierno postulado 
caracHVCtrl.getProgGobPostulado = async (req,res)=>{
    const id = req.params.id;
    const infoOneProgGobPostulado = await caracHVModel.OneProgGobPostulado(id)
    res.json(infoOneProgGobPostulado)
}

//minimo de rango salarial postulado 
caracHVCtrl.getMinRangSalPostulado = async (req,res)=>{
    const id = req.params.id;
    const infoOneMinRangSalPostulado = await caracHVModel.OneMinRangSalPostulado(id)
    res.json(infoOneMinRangSalPostulado)
}

//nivel de estudio postulado 
caracHVCtrl.getNivEstudiosPostulado = async (req,res)=>{
    const id = req.params.id;
    const infoOneNivEstudiosPostulado = await caracHVModel.OneNivEstudiosPostulado(id)
    res.json(infoOneNivEstudiosPostulado)
}

//nivel de escolaridad aprobado postulado 
caracHVCtrl.getNivEscolAprobPostulado = async (req,res)=>{
    const id = req.params.id;
    const infoOneNivEscolAprobPostulado = await caracHVModel.OneNivEscolAprobPostulado(id)
    res.json(infoOneNivEscolAprobPostulado)
}

//definicion de nivel de estudio postulado 
caracHVCtrl.getDefNivEstudioPostulado = async (req,res)=>{
    const id = req.params.id;
    const infoOneDefNivEstudioPostulado = await caracHVModel.OneDefNivEstudioPostulado(id)
    res.json(infoOneDefNivEstudioPostulado)
}

//profesion postulado 
caracHVCtrl.getProfesionPostulado = async (req,res)=>{
    const id = req.params.id;
    const infoOneProfesionPostulado = await caracHVModel.OneProfesionPostulado(id)
    res.json(infoOneProfesionPostulado)
}

//nivel de idioma postulado 
caracHVCtrl.getNivelIdiomaPostulado = async (req,res)=>{
    const id = req.params.id;
    const infoOneNivelIdiomaPostulado = await caracHVModel.OneNivelIdiomaPostulado(id)
    res.json(infoOneNivelIdiomaPostulado)
}

//idioma postulado 
caracHVCtrl.getIdiomaPostulado = async (req,res)=>{
    const id = req.params.id;
    const infoOneIdiomaPostulado = await caracHVModel.OneIdiomaPostulado(id)
    res.json(infoOneIdiomaPostulado)
}

/*
####################################################################################################
methods update
####################################################################################################
*/ 

//estado laboral postulado
caracHVCtrl.updateEstadoLabPostulado = (req,res)=>{
    const {EstadoLaboral,user} = req.body;
    const id = req.params.id;
    caracHVModel.UpdateEstadoLabPostulado(id,EstadoLaboral,user)
    res.json({"msg":"informacion actualizada"})
}

//programa de gobierno postulado
caracHVCtrl.updateProgGobPostulado = (req,res)=>{
    const {ProgramasGobierno,user} = req.body;
    const id = req.params.id;
    caracHVModel.UpdateProgGobPostulado(id,ProgramasGobierno,user)
    res.json({"msg":"informacion actualizada"})
}

//minimo de rango salarial postulado
caracHVCtrl.updateMinRangSalPostulado = (req,res)=>{
    const {MinRangoSalarial,user} = req.body;
    const id = req.params.id;
    caracHVModel.UpdateMinRangSalPostulado(id,MinRangoSalarial,user)
    res.json({"msg":"informacion actualizada"})
}

//nivel de estudio postulado
caracHVCtrl.updateNivEstudiosPostulado = (req,res)=>{
    const {NivelEstudio,user} = req.body;
    const id = req.params.id;
    caracHVModel.UpdateNivEstudiosPostulado(id,NivelEstudio,user)
    res.json({"msg":"informacion actualizada"})
}

//nivel de escolaridad aprobado postulado
caracHVCtrl.updateNivEscolAprobPostulado = (req,res)=>{
    const {NivelEscolaridadAprobado,user} = req.body;
    const id = req.params.id;
    caracHVModel.UpdateNivEscolAprobPostulado(id,NivelEscolaridadAprobado,user)
    res.json({"msg":"informacion actualizada"})
}

//definicion nivel de estudiio postulado
caracHVCtrl.updateDefNivEstudioPostulado = (req,res)=>{
    const {DefinicionNivelEstudio,user} = req.body;
    const id = req.params.id;
    caracHVModel.UpdateDefNivEstudioPostulado(id,DefinicionNivelEstudio,user)
    res.json({"msg":"informacion actualizada"})
}

//profesion postulado
caracHVCtrl.updateProfesionPostulado = (req,res)=>{
    const {ProfesionPostulado,user} = req.body;
    const id = req.params.id;
    caracHVModel.UpdateProfesionPostulado(id,ProfesionPostulado,user)
    res.json({"msg":"informacion actualizada"})
}

//nivel de idioma postulado
caracHVCtrl.updateNivelIdiomaPostulado = (req,res)=>{
    const {NivelIdioma,user} = req.body;
    const id = req.params.id;
    caracHVModel.UpdateNivelIdiomaPostulado(id,NivelIdioma,user)
    res.json({"msg":"informacion actualizada"})
}

//idioma postulado
caracHVCtrl.updateIdiomaPostulado = (req,res)=>{
    const {Idioma,user} = req.body;
    const id = req.params.id;
    caracHVModel.UpdateIdiomaPostulado(id,Idioma,user)
    res.json({"msg":"informacion actualizada"})
}

/*
####################################################################################################
methods delete
####################################################################################################
*/

//estado laboral postulado
caracHVCtrl.deleteEstadoLabPostulado = async (req,res)=>{
    const id = req.params.id;
    await caracHVModel.delEstadoLabPostulado(id)
    res.json({"msg":"informacion eliminada"})
}

//programa de gobierno postulado
caracHVCtrl.deleteProgGobPostulado = async (req,res)=>{
    const id = req.params.id;
    await caracHVModel.delProgGobPostulado(id)
    res.json({"msg":"informacion eliminada"})
}

//minimo de rango salarial postulado
caracHVCtrl.deleteMinRangSalPostulado = async (req,res)=>{
    const id = req.params.id;
    await caracHVModel.delMinRangSalPostulado(id)
    res.json({"msg":"informacion eliminada"})
}

//nivel de estudio postulado
caracHVCtrl.deleteNivEstudiosPostulado = async (req,res)=>{
    const id = req.params.id;
    await caracHVModel.delNivEstudiosPostulado(id)
    res.json({"msg":"informacion eliminada"})
}

//nivel de escolaridad aprobado postulado
caracHVCtrl.deleteNivEscolAprobPostulado = async (req,res)=>{
    const id = req.params.id;
    await caracHVModel.delNivEscolAprobPostulado(id)
    res.json({"msg":"informacion eliminada"})
}

//definicion nivel de estudio postulado
caracHVCtrl.deleteDefNivEstudioPostulado = async (req,res)=>{
    const id = req.params.id;
    await caracHVModel.delDefNivEstudioPostulado(id)
    res.json({"msg":"informacion eliminada"})
}

//profesion postulado
caracHVCtrl.deleteProfesionPostulado = async (req,res)=>{
    const id = req.params.id;
    await caracHVModel.delProfesionPostulado(id)
    res.json({"msg":"informacion eliminada"})
}

//nivel de idioma postulado
caracHVCtrl.deleteNivelIdiomaPostulado = async (req,res)=>{
    const id = req.params.id;
    await caracHVModel.delNivelIdiomaPostulado(id)
    res.json({"msg":"informacion eliminada"})
}

//idioma postulado
caracHVCtrl.deleteIdiomaPostulado = async (req,res)=>{
    const id = req.params.id;
    await caracHVModel.delIdiomaPostulado(id)
    res.json({"msg":"informacion eliminada"})
}

module.exports = caracHVCtrl;