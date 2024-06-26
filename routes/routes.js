const { Router } = require('express');
const controller = require('../controller/controller');
const router = new Router();

router.get('/', controller.getUsers);
router.post('/update-user', controller.updateUser);
router.post('/create-user', controller.createUser);
router.post('/deleteUser/:id', controller.deleteUser);

module.exports = router;