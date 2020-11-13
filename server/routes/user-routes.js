const express =require('express');
const router = express.Router();
const user_controller = require('../controller/user-controller');

router.post('/signup', user_controller.signup);
router.post('/signin', user_controller.signin);
/*
router.post('/forgetpassword', userController.forgetPassword);
router.post('/forgetpassword/token', userController.tokenValidation);
router.post('/forgetpassword/changepassword', userController.changePassword);
*/
module.exports = router;