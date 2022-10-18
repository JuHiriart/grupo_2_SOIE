const {Router} = require('express');
const router = Router();

const {all, userId} = require('../../controllers/api/usersApi');

router.get('/', all);

router.get('/:id', userId);


module.exports = router;