const {Router} = require ('express');
const router = Router();
const {getRegistros, createRegistro} = require('../controllers/controller');

router.route('/')
// .get((req, res) =>res.send('ruta en routes'))
.get(getRegistros)
.post(createRegistro);
module.exports = router;