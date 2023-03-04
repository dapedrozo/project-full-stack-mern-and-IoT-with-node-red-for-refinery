const {Router} = require('express');
const funcionarioCtrl = require('../controllers/funcionario.controller');
const router = Router();

//ruta de consulta postulados
router.route('/consulta-postulados')
    .get(funcionarioCtrl.getConsultaPostulados)
    //api seleccion de postulados post para excel o pdf
    .post(funcionarioCtrl.generateReport)

router.route('/consulta-postulados/:id')
    .get(funcionarioCtrl.getConsultaPostulado)
    .put(funcionarioCtrl.updateInfoPostulado)

module.exports = router;
