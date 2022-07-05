const route  = require('express').Router();

const {check} = require('express-validator');

const authMiddleware   = require('../middlewares/auth');

const containerController = require('../controllers/container');


route.post('/createContainer',authMiddleware,[check('quantity').isString().isLength({min:3}),check('item').isString().isLength({min:3})],containerController.createContainer);
route.post('/getAllContainers',authMiddleware,containerController.getAllContainers);




module.exports = route;