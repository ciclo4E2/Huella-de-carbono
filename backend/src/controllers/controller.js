// 
const Registro = require('../models/modelos');
const registroCtrl = {};

registroCtrl.getRegistros = async (req,res) =>{
    const registros = await Registro.find();
    res.json(registros);
    
}

registroCtrl.createRegistro = async (req,res) =>{
    const {nombre, contraseña} = req.body;
    const newRegistro = new Registro({
        nombre,
        contraseña
    });
    await newRegistro.save();
    res.json('registro guardado')
    
}

module.exports = registroCtrl;