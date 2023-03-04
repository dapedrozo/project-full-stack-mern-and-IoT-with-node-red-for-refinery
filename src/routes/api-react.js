const {Router} = require('express');
const router = Router();
const reactCtrl = require('../controllers/react-controller.js');
const bdCtrl = require('../controllers/bd-controller.js');

//rutas para react
//rutas creacion de operaciones
//creacion de operacion general id=idplc
router.route('/iniciar-operacion-general/:id')
    .post(reactCtrl.initOperGeneral)

//creacion de operacion modulos id=idmodulo
router.route('/iniciar-operacion-modulo/:id')
    .post(reactCtrl.initOperModule)

//consultar ultima operacion id=idplc
router.route('/consultar-operacion-general/:id')
    .get(reactCtrl.consultLastOperGen)

//consultar ultima operacion por modulo id=idmodulo
router.route('/consultar-operacion-modulo/:id')
    .get(reactCtrl.consultLastOperModule)

//debugo
router.route('/debug-operaciones-general')
    .get(reactCtrl.getAllOperationsGen)
router.route('/debug-operaciones-modulos')
    .get(reactCtrl.getAllOperationsMod)
router.route('/delete-db-react')
    .get(reactCtrl.deleteAllBdReact)

//cambiar estado operacion general id=plc
router.route('/cambiar-estado-plc/:id')
    .put(reactCtrl.cambiarOperGeneral)

//cambiar estado operacion module id=modulo
router.route('/cambiar-estado-module/:id')
    .put(reactCtrl.cambiarOperModule)

//conulta de datos plc id=idplc
router.route('/consultar-temp-plc/:id')
    .get(reactCtrl.getTempPlc)

//conulta de datos modulo id=idmodulo
router.route('/consultar-datos-modulo/:id')
    .get(reactCtrl.getDataModulo)

//conulta de alarmas general id=idplc
router.route('/consultar-alarmas-plc/:id')
    .get(reactCtrl.getAlarmaPlc)

//conulta de alarmas modulo id=idmodulo
router.route('/consultar-alarmas-modulo/:id')
    .get(reactCtrl.getAlarmaModulo)

module.exports = router;