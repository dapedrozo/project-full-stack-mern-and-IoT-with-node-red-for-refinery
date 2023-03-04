const {Router} = require('express');
const router = Router();
const caracHVCtrl = require('../controllers/postulado.caracHV');

//rutas informacion estado laboral postulado
router.route('/estado-laboral')
    .get(caracHVCtrl.getEstLabPostulados)
    .post(caracHVCtrl.createEstadoLabPostulados)

router.route('/estado-laboral/:id')
    .get(caracHVCtrl.getEstadoLabPostulado)
    .put(caracHVCtrl.updateEstadoLabPostulado)
    .delete(caracHVCtrl.deleteEstadoLabPostulado)

//rutas informacion programas gobierno postulado
router.route('/programas-gobierno')
    .get(caracHVCtrl.getProgGobPostulados)
    .post(caracHVCtrl.createProgramasGobiernoPostulados)

router.route('/programas-gobierno/:id')
    .get(caracHVCtrl.getProgGobPostulado)
    .put(caracHVCtrl.updateProgGobPostulado)
    .delete(caracHVCtrl.deleteProgGobPostulado)

//rutas informacion minimo rango salarial postulado
router.route('/min-rango-salarial')
    .get(caracHVCtrl.getMinRangSalPostulados)
    .post(caracHVCtrl.createMinRangSalPostulados)

router.route('/min-rango-salarial/:id')
    .get(caracHVCtrl.getMinRangSalPostulado)
    .put(caracHVCtrl.updateMinRangSalPostulado)
    .delete(caracHVCtrl.deleteMinRangSalPostulado)

//ruta de informacion de nivel de estudios postulado
router.route('/nivel-estudios')
    .get(caracHVCtrl.getNivelEstudioPostulados)
    .post(caracHVCtrl.createNivEstudiosPostulados)

router.route('/nivel-estudios/:id')
    .get(caracHVCtrl.getNivEstudiosPostulado)
    .put(caracHVCtrl.updateNivEstudiosPostulado)
    .delete(caracHVCtrl.deleteNivEstudiosPostulado)

//ruta de informacion de nivel de escolaridad aprobado postulado
router.route('/nivel-esc-aprobado')
    .get(caracHVCtrl.getNivEscolAprobPostulados)
    .post(caracHVCtrl.createNivEscolAprobPostulados)

router.route('/nivel-esc-aprobado/:id')
    .get(caracHVCtrl.getNivEscolAprobPostulado)
    .put(caracHVCtrl.updateNivEscolAprobPostulado)
    .delete(caracHVCtrl.deleteNivEscolAprobPostulado)

//ruta de informacion de definicion de nivel de estudios postulado
router.route('/def-niv-estudio')
    .get(caracHVCtrl.getDefNivEstudioPostulados)
    .post(caracHVCtrl.createDefNivEstudioPostulados)

router.route('/def-niv-estudio/:id')
    .get(caracHVCtrl.getDefNivEstudioPostulado)
    .put(caracHVCtrl.updateDefNivEstudioPostulado)
    .delete(caracHVCtrl.deleteDefNivEstudioPostulado)

//ruta de informacion de profesiones postulado 
router.route('/profesiones-post')
    .get(caracHVCtrl.getProfesionPostulados)
    .post(caracHVCtrl.createProfesionPostulados)

router.route('/profesiones-post/:id')
    .get(caracHVCtrl.getProfesionPostulado)
    .put(caracHVCtrl.updateProfesionPostulado)
    .delete(caracHVCtrl.deleteProfesionPostulado)

//ruta de informacion de nivel de idiomas postulado
router.route('/niv-idiomas')
    .get(caracHVCtrl.getNivelIdiomaPostulados)
    .post(caracHVCtrl.createNivelIdiomaPostulados)

router.route('/niv-idiomas/:id')
    .get(caracHVCtrl.getNivelIdiomaPostulado)
    .put(caracHVCtrl.updateNivelIdiomaPostulado)
    .delete(caracHVCtrl.deleteNivelIdiomaPostulado)

//ruta de informacion de idiomas postulado
router.route('/idiomas-post')
    .get(caracHVCtrl.getIdiomaPostulados)
    .post(caracHVCtrl.createIdiomaPostulados)

router.route('/idiomas-post/:id')
    .get(caracHVCtrl.getIdiomaPostulado)
    .put(caracHVCtrl.updateIdiomaPostulado)
    .delete(caracHVCtrl.deleteIdiomaPostulado)

module.exports = router;