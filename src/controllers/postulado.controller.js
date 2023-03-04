const postuladoCtrl = {};
const postuladosModel = require('./funciones.postulado.controller')

/*
####################################################################################################
methods all get
####################################################################################################
*/

//info postulados
postuladoCtrl.getInfoPostulados = async (req, res) => {
    const infoPostulados = await postuladosModel.AllInfoPostulado()
    res.json(infoPostulados)
}

//estudios postulados
postuladoCtrl.getEstudiosPostulados = async (req, res) => {
    const estudiosPostulados = await postuladosModel.AllEstudiosPostulado()
    res.json(estudiosPostulados)
}

//idiomas postulado
postuladoCtrl.getIdiomasPostulados = async (req, res) => {
    const idiomasPostulados = await postuladosModel.AllIdiomasPostulado()
    res.json(idiomasPostulados)
}

//experiencia laboral postulado
postuladoCtrl.getExpeLaboralesPostulados = async (req, res) => {
    const expLaboralPostulados = await postuladosModel.AllExpLabPostulado()
    res.json(expLaboralPostulados)
}

//test psicotecnico postulado
postuladoCtrl.getPsico = (req, res) => {

}

/*
####################################################################################################
methods post
####################################################################################################
*/

//info postulados
postuladoCtrl.createInfoPostulados = (req, res) => {
    const { tieneLibretaMilitar, estadoLaboral, programaGobierno, salarioAspira, perfilLaboral, usuario } = req.body;
    postuladosModel.CreateInfoPostulado(tieneLibretaMilitar, estadoLaboral, programaGobierno, salarioAspira, perfilLaboral, usuario)
    res.json({ "msg": "informacion registrada correctamente" })
}

//estudios postulados
postuladoCtrl.CreateEstudiosPostulados = (req, res) => {
    const { nombreTitulo, nivelEstudio, nivelEscolaridadAprobado, definicionNivel, nombreInstituEducativa, esExtranjero, finalizado, fechaInicio, fechaGrado, usuario } = req.body;
    postuladosModel.CreateEstudiosPostulado(nombreTitulo, nivelEstudio, nivelEscolaridadAprobado, definicionNivel, nombreInstituEducativa, esExtranjero, finalizado, fechaInicio, fechaGrado, usuario)
    res.json({ "msg": "estudio creado correctamente" })
}

//idiomas postulados
postuladoCtrl.createIdiomasPostulados = (req, res) => {
    const { idioma, nivelIdioma, tieneCertificado, usuario } = req.body;
    postuladosModel.CreateIdiomasPostulado(idioma, nivelIdioma, tieneCertificado, usuario)
    res.json({ "msg": "idioma creado correctamente" })
}

//experiencias laborales postulados
postuladoCtrl.createExpeLaboralesPostulados = (req, res) => {
    const { nombreEmpresa, telefonoEmpresa, trabajaActualEstaEmpresa, fechaInicio, fechaFinalizacion,profesiones,cargo, funcionesLaborales, usuario } = req.body;
    postuladosModel.CreateExpLabPostulado(nombreEmpresa, telefonoEmpresa, trabajaActualEstaEmpresa, fechaInicio, fechaFinalizacion,profesiones,cargo,funcionesLaborales, usuario)
    res.json({ "msg": "experiencia laboral creada correctamente" })
}

//prueba psicologica postulados
postuladoCtrl.createPsico = (req, res) => {

}

/*
####################################################################################################
methods get unique
####################################################################################################
*/

//info postulados
postuladoCtrl.getInfoPostulado = async (req, res) => {
    const id = req.params.id;
    const infoOnePostulado = await postuladosModel.OneInfoPostulado(id)
    res.json(infoOnePostulado)
}

//estudio postulados
postuladoCtrl.getEstudioPostulado = async (req, res) => {
    const id = req.params.id;
    const estudioOnePostulado = await postuladosModel.OneEstudioPostulado(id)
    res.json(estudioOnePostulado)
}

//idioma postulados
postuladoCtrl.getIdiomaPostulado = async (req, res) => {
    const id = req.params.id;
    const idiomaOnePostulado = await postuladosModel.OneIdiomaPostulado(id)
    res.json(idiomaOnePostulado)
}

//expe laboral postulados
postuladoCtrl.getExpeLaboralPostulado = async (req, res) => {
    const id = req.params.id;
    const ExpLabOnePostulado = await postuladosModel.OneExpLabPostulado(id)
    res.json(ExpLabOnePostulado)
}

//prueba psico postulados
postuladoCtrl.getPsicoUnique = (req, res) => {

}

/*
####################################################################################################
methods update
####################################################################################################
*/

//info postulado
postuladoCtrl.updateInfoPostulado = (req, res) => {
    const { tieneLibretaMilitar, estadoLaboral, programaGobierno, salarioAspira, perfilLaboral, usuario } = req.body;
    const id = req.params.id;
    postuladosModel.UpdateInfoPostulado(id, tieneLibretaMilitar, estadoLaboral, programaGobierno, salarioAspira, perfilLaboral, usuario)
    res.json({ "msg": "informacion actualizada" })
}

//estudio postulado
postuladoCtrl.updateEstudioPostulado = (req, res) => {
    const { nombreTitulo, nivelEstudio, nivelEscolaridadAprobado, definicionNivel, nombreInstituEducativa, esExtranjero, finalizado, fechaInicio, fechaGrado, usuario } = req.body;
    const id = req.params.id;
    postuladosModel.UpdateEstudioPostulado(id, nombreTitulo, nivelEstudio, nivelEscolaridadAprobado, definicionNivel, nombreInstituEducativa, esExtranjero, finalizado, fechaInicio, fechaGrado, usuario)
    res.json({ "msg": "informacion actualizada" })
}

//idioma postulado
postuladoCtrl.updateIdiomaPostulado = (req, res) => {
    const { idioma, nivelIdioma, tieneCertificado, usuario } = req.body;
    const id = req.params.id;
    postuladosModel.UpdateIdiomaPostulado(id, idioma, nivelIdioma, tieneCertificado, usuario)
    res.json({ "msg": "informacion actualizada" })
}

//experiencia laboral postulado
postuladoCtrl.updateExpeLaboralPostulado = (req, res) => {
    const { nombreEmpresa, telefonoEmpresa, trabajaActualEstaEmpresa, fechaInicio, fechaFinalizacion,profesiones,cargo, funcionesLaborales, usuario } = req.body;
    const id = req.params.id;
    postuladosModel.UpdateExpLabPostulado(id, nombreEmpresa, telefonoEmpresa, trabajaActualEstaEmpresa, fechaInicio, fechaFinalizacion,profesiones,cargo,funcionesLaborales, usuario)
    res.json({ "msg": "informacion actualizada" })
}

/*
####################################################################################################
methods delete
####################################################################################################
*/

//info postulado
postuladoCtrl.deleteInfoPostulado = async (req, res) => {
    const id = req.params.id;
    await postuladosModel.delInfoPostulado(id)
    res.json({ "msg": "informacion eliminada" })
}

//estudio postulado
postuladoCtrl.deleteEstudioPostulado = async (req, res) => {
    const id = req.params.id;
    await postuladosModel.delEstudioPostulado(id)
    res.json({ "msg": "informacion eliminada" })
}

//idioma postulado
postuladoCtrl.deleteIdiomaPostulado = async (req, res) => {
    const id = req.params.id;
    await postuladosModel.delIdiomaPostulado(id)
    res.json({ "msg": "informacion eliminada" })
}

//experiencia laboral postulado
postuladoCtrl.deleteExpeLaboralPostulado = async (req, res) => {
    const id = req.params.id;
    await postuladosModel.delExpLabPostulado(id)
    res.json({ "msg": "informacion eliminada" })
}

//prueba psico postulado
postuladoCtrl.deletePsicoUnique = (req, res) => {

}

module.exports = postuladoCtrl;