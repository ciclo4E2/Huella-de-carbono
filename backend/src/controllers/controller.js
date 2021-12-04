// 
const Registro = require('../models/modelos');
const registroCtrl = {};

registroCtrl.getRegistros = async (req,res) =>{
    const registros = await Registro.find();
    res.json(registros);
    
}

registroCtrl.createRegistro = async (req,res) =>{
    const {nombres, apellido, ciudad, email, contraseña} = req.body;
    const newRegistro = new Registro({
        nombres,
        apellido,
        ciudad,
        email,
        contraseña
    });
    await newRegistro.save();
    res.json(newRegistro)
    
}

registroCtrl.getRegistro = async(req, res)=>{
    const dato = await Registro.findById(req.params.id)
    res.json(dato)
}

registroCtrl.deleteRegistro = async(req, res)=>{
    await Registro.findByIdAndDelete(req.params.id)
    res.json('articulo eliminado')
}

registroCtrl.updateRegistro = async(req, res)=>{
    const {nombres, apellido, ciudad, profesion, contraseña} = req.body
    await Registro.findByIdAndUpdate(req.params.id, {nombres, apellido, ciudad, profesion, contraseña})
    res.json('Registro actualizado')
}

module.exports = registroCtrl;

