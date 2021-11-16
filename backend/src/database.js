const mongoose = require('mongoose');

const URI = 'mongodb+srv://huella_carbono:Huella de Carbono@cluster0.ztykf.mongodb.net/Database?retryWrites=true&w=majority';
mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open',()=>{console.log('base de datos conectada y funcionando')})