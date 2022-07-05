const route  = require('express').Router();

const {check} = require('express-validator');

const userController = require('../controllers/user');


route.post('/register',[check('name').isString().isLength({min:4}),check('email').isEmail(),check('password').isString().isLength({min:5})],userController.register);
route.post('/login',userController.login);




module.exports = route;