const reactCTRL = {};

const { json } = require("express");
const { operacionesGeneral } = require("../models/NodeRedInfo");
const { operacionesModule } = require("../models/NodeRedInfo");
const { dataTempPlc } = require("../models/NodeRedInfo");
const { dataValuesModule } = require("../models/NodeRedInfo");
const { alarmaPlc } = require("../models/NodeRedInfo");
const { alarmaModule } = require("../models/NodeRedInfo");

/*
####################################################################################################
methods Data
####################################################################################################
*/

reactCTRL.getDataModule = async (req, res) => {
  try {
    const id = req.params.id;
    const DataModules = await dataRecived
      .find({ idModulo: id })
      .sort({ createdAt: -1 })
      .limit(50);
    res.json(DataModules); 
  } catch (error) {
    return res.json({'msg':'ocurrio un error'})
  }
};

/*
####################################################################################################
methods Iniciar operaciones
####################################################################################################
*/

reactCTRL.initOperGeneral = async (req, res) => {
  try {
    const id = req.params.id;
    const { flujoBomba } = req.body;
    const OperGen = new operacionesGeneral({
      flujoBomba,
      idPlc: id,
    });
    await OperGen.save();
    res.json({ msg: "operacion general iniciada" }); 
  } catch (error) {
    return res.json({'msg':'ocurrio un error'})
  }
};

reactCTRL.initOperModule = async (req, res) => {
  try {
    const id = req.params.id;
    const { presionFiltrado } = req.body;
    const OperationGeneral = await operacionesGeneral
      .find({ estado: { $in: [0, 1] } })
      .sort({ createdAt: -1 })
      .limit(1);
    const OperModule = new operacionesModule({
      presionFiltrado,
      idOperacionGeneral: OperationGeneral[0]._id,
      idModulo: id,
    });
    await OperModule.save();
    res.json({ msg: "operacion modulo iniciada" });
  } catch (error) {
    return res.json({'msg':'ocurrio un error'})
  }
};

/*
####################################################################################################
methods cambiar estado de operaciones
####################################################################################################
*/

reactCTRL.cambiarOperGeneral = async (req, res) => {
  try {
    const id = req.params.id;
    const { estadoActual } = req.body;
    const OperGeneral = await operacionesGeneral
      .find({ idPlc: id })
      .sort({ createdAt: -1 })
      .limit(1);
    if (OperGeneral[0].estado != -1) {
      await operacionesGeneral.findOneAndUpdate(
        { _id: OperGeneral[0]._id },
        { $set: { estado: estadoActual } }
      );
      if (estadoActual == 1 || estadoActual == -1) {
        await operacionesModule.updateMany(
          { idOperacionGeneral: OperGeneral[0]._id, estado: { $in: [1, 0] } },
          {
            $set: { estado: estadoActual },
          }
        );
      }
    }
    res.json({ msg: "estado operacion general actualizada" });  
  } catch (error) {
    return res.json({'msg':'ocurrio un error'})
  }
};

reactCTRL.cambiarOperModule = async (req, res) => {
  try {
    const id = req.params.id;
    const { estadoActual } = req.body;
    const OperModule = await operacionesModule
      .find({ idModulo: id })
      .sort({ createdAt: -1 })
      .limit(1);
    if (OperModule[0].estado != -1) {
      await operacionesModule.findOneAndUpdate(
        { _id: OperModule[0]._id },
        {
          $set: { estado: estadoActual },
        }
      );
    }
    res.json({ msg: "estado operacion modulo actualizada" });  
  } catch (error) {
    return res.json({'msg':'ocurrio un error'})
  }
};

/*
####################################################################################################
methods consulta de datos plc y modulos
####################################################################################################
*/

reactCTRL.getTempPlc = async (req, res) => {
  try {
    const id = req.params.id;
    const OperGeneral = await operacionesGeneral
      .find({ idPlc: id })
      .sort({ createdAt: -1 })
      .limit(1);
    const DataTemp = await dataTempPlc
      .find({ idOperacionGeneral: OperGeneral[0]._id })
      .sort({ createdAt: -1 })
      .limit(1);
    res.json(DataTemp[0].temperatura);  
  } catch (error) {
    return res.json({'msg':-1})
  }
  
};

reactCTRL.getDataModulo = async (req, res) => {
  try {
    const id = req.params.id;
    const OperModule = await operacionesModule
      .find({ idModulo: id })
      .sort({ createdAt: -1 })
      .limit(1);
    const DataValues = await dataValuesModule
      .find({ idOperacionModulo: OperModule[0]._id })
      .sort({ createdAt: -1 })
      .limit(1);
    res.json({
      presionEntrada: DataValues[0].presionEntrada,
      Volumen: DataValues[0].volumen,
    });  
  } catch (error) {
    return res.json({presionEntrada: -1,
      Volumen: -1})
  }
};

/*
####################################################################################################
methods consulta de alarmas plc y modulos
####################################################################################################
*/

reactCTRL.getAlarmaPlc = async (req, res) => {
  try {
    const id = req.params.id;
    const OperGeneral = await operacionesGeneral
      .find({ idPlc: id })
      .sort({ createdAt: -1 })
      .limit(1);
    const AlarmaPlc = await alarmaPlc
      .find({ idOperacionGeneral: OperGeneral[0]._id })
      .sort({ createdAt: -1 })
      .limit(1);
    if (AlarmaPlc.length > 0) {
      res.send(AlarmaPlc[0].AlarmaTemperatura);
    } else {
      res.send(false);
    }  
  } catch (error) {
    return res.json({'msg':-1})
  }
};

reactCTRL.getAlarmaModulo = async (req, res) => {
  try {
    const id = req.params.id;
    const OperModule = await operacionesModule
      .find({ idModulo: id })
      .sort({ createdAt: -1 })
      .limit(1);
    const AlarmaModule = await alarmaModule
      .find({ idOperacionModulo: OperModule[0]._id })
      .sort({ createdAt: -1 })
      .limit(1);
    if (AlarmaModule.length > 0) {
      res.json({
        AlarmaAtasco: AlarmaModule[0].AlarmaAtasco,
        AlarmaFiltroDanado: AlarmaModule[0].AlarmaFiltroDanado,
        AlarmaElectrovalvula: AlarmaModule[0].AlarmaElectrovalvula,
      });
    } else {
      res.json({
        AlarmaAtasco: false,
        AlarmaFiltroDanado: false,
        AlarmaElectrovalvula: false,
      });
    }  
  } catch (error) {
    return res.json({
      AlarmaAtasco: -1,
      AlarmaFiltroDanado: -1,
      AlarmaElectrovalvula: -1})
  }
};

/*
####################################################################################################
methods cambiar estado de operaciones
####################################################################################################
*/
reactCTRL.getAllOperationsGen = async (req, res) => {
  try {
    const OperGeneral = await operacionesGeneral.find().sort({ createdAt: -1 });
    res.json(OperGeneral);  
  } catch (error) {
    return res.json({'msg':-1})
  }
};

reactCTRL.getAllOperationsMod = async (req, res) => {
  try {
    const OperMod = await operacionesModule.find().sort({ createdAt: -1 });
    res.json(OperMod);  
  } catch (error) {
    return res.json({'msg':-1})
  }
};

reactCTRL.deleteAllBdReact = async (req, res) => {
    try {
      await operacionesGeneral.deleteMany()
      await operacionesModule.deleteMany()
      await dataTempPlc.deleteMany()
      await dataValuesModule.deleteMany()
      await alarmaPlc.deleteMany()
      await alarmaModule.deleteMany()
      res.json({'msg':'bd borrada'})  
    } catch (error) {
      return res.json({'msg':'ocurrio un error'})
    }
};
/*
####################################################################################################
methods para consultar ultima operacion
####################################################################################################
*/
reactCTRL.consultLastOperGen= async (req,res) =>{
  try {
    const OperGen = await operacionesGeneral.find().sort({ createdAt: -1 }).limit(1)
    if(!OperGen){
      return res.json({'msg':-1})
    }
    res.json(OperGen)
  } catch (error) {
    return res.json({'msg':-1})
  }
};
reactCTRL.consultLastOperModule= async (req,res) =>{
  try {
    const OperGen = await operacionesGeneral.find().sort({ createdAt: -1 }).limit(1)
    const OperMod = await operacionesModule.find({idOperacionGeneral:OperGen[0]._id}).sort({ createdAt: -1 }).limit(1)
    if(!OperMod){
      return res.json({'msg':-1})
    }
    res.json(OperMod)
  } catch (error) {
    return res.json({'msg':-1})
  }
};
module.exports = reactCTRL;
