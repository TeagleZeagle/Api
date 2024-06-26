const { Router } = require('express');
const controller = require('../controller/controller');
const router = new Router();

router.get('/', controller.getUsers);
router.post('/update-user', controller.updateUser); // hata
router.post('/create-user', controller.createUser);
router.post('/deleteUser/:id', controller.deleteUser); // çalışıyor gibi gözüküyor çalışmıyor

module.exports = router;