const express = require ('express');
const app = express();
const cors = require ('cors');

//settings
app.set('port', process.env.PORT || 4000);


//middlewares
app.use(cors());
app.use(express.json());


//routes
app.use('/api/calc', require('./routes/rutas'))




module.exports = app;