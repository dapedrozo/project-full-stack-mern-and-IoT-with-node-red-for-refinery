const {Router} = require('express');
const router = Router();
const plcCtrl = require('../controllers/api-red-controller.js');
const bdCtrl = require('../controllers/bd-controller.js');

//rutas para nodered
//rutas de comando desde el front id=plc
router.route('/plc-control/:id')
    .get(plcCtrl.getPlcControl)

//rutas de comando desde el front id=modulo
router.route('/module-control/:id')
    .get(plcCtrl.getModuleControl)

//rutas de registro temperatura desde node red id=idplc
router.route('/plc-temperatura/:id')
    .post(plcCtrl.postDataTempPlc)

//ruta de registro de valores de cada modulo id=idmoculo
router.route('/modulo-data/:id')
    .post(plcCtrl.postDataValModule)

//rutas debugo
router.route('/plc-temperatura')
    .get(plcCtrl.getDataTempPlc)

router.route('/modulo-data')
    .get(plcCtrl.getDataValModule)

router.route('/alarma-plc-data')
    .get(plcCtrl.getAlarmaPlc)

router.route('/alarma-modulo-data')
    .get(plcCtrl.getAlarmaModule)

router.route('/delete-db-nr')
    .get(plcCtrl.deleteAllDbRed)

//rutas para bd 
//plc
router.route('/plc-bd')
    .get(bdCtrl.getAllPlcs)
    .post(bdCtrl.createPlc)
router.route('/plc-bd/:id')
    .delete(bdCtrl.deletePlc)
//modulos
router.route('/modulos-bd')
    .get(bdCtrl.getAllModules)
    .post(bdCtrl.createModule)
router.route('/modulos-bd/:id')
    .delete(bdCtrl.deleteModule)

module.exports = router;