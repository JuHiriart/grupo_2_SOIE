const {Router} = require('express');
const router = Router();

const {all, productId} = require('../../controllers/api/productsApi');

router.get('/', all);

router.get('/:id', productId);


module.exports = router;