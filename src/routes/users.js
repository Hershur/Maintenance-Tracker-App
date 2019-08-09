const Router = require('express');
const RequestControl = require('../controllers/control');
const router = Router();

router.get('/users', RequestControl.getAllUsers);

router.get('/auth', RequestControl.authenticate);

router.post('/auth/signup', RequestControl.signUpUser);

router.post('/auth/login', RequestControl.loginUser);

module.exports = router;
