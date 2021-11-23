const {Router} = require ('express');
const router = Router();
const {getRegistros, createRegistro, getRegistro, deleteRegistro, updateRegistro} = require('../controllers/controller');

router.route('/')
// .get((req, res) =>res.send('ruta en routes'))
.get(getRegistros)
.post(createRegistro);


router.route('/:id')
.get(getRegistro)
.delete(deleteRegistro)
.put(updateRegistro);


module.exports = router;