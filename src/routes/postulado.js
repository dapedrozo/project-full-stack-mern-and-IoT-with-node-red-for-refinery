const {Router} = require('express');
const router = Router();
const postuladoCtrl = require('../controllers/postulado.controller');

//rutas informacion general postulado
router.route('/info-postulado')
    .get(postuladoCtrl.getInfoPostulados)
    .post(postuladoCtrl.createInfoPostulados)

router.route('/info-postulado/:id')
    .get(postuladoCtrl.getInfoPostulado)
    .put(postuladoCtrl.updateInfoPostulado)
    .delete(postuladoCtrl.deleteInfoPostulado)

//ruta de estudios
router.route('/estudios')
    .get(postuladoCtrl.getEstudiosPostulados)
    .post(postuladoCtrl.CreateEstudiosPostulados)

router.route('/estudios/:id')
    .get(postuladoCtrl.getEstudioPostulado)
    .put(postuladoCtrl.updateEstudioPostulado)
    .delete(postuladoCtrl.deleteEstudioPostulado)

//ruta de idiomas
router.route('/idiomas')
    .get(postuladoCtrl.getIdiomasPostulados)
    .post(postuladoCtrl.createIdiomasPostulados)

router.route('/idiomas/:id')
    .get(postuladoCtrl.getIdiomaPostulado)
    .put(postuladoCtrl.updateIdiomaPostulado)
    .delete(postuladoCtrl.deleteIdiomaPostulado)

//ruta de exp-laboral
router.route('/exp-laboral')
    .get(postuladoCtrl.getExpeLaboralesPostulados)
    .post(postuladoCtrl.createExpeLaboralesPostulados)

router.route('/exp-laboral/:id')
    .get(postuladoCtrl.getExpeLaboralPostulado)
    .put(postuladoCtrl.updateExpeLaboralPostulado)
    .delete(postuladoCtrl.deleteExpeLaboralPostulado)

//ruta de prueba psico
router.route('/prueba-psico')
    .get(postuladoCtrl.getPsico)
    .post(postuladoCtrl.createPsico)

router.route('prueba-psico/:id')
    .get(postuladoCtrl.getPsicoUnique)
    .delete(postuladoCtrl.deletePsicoUnique)

module.exports = router;