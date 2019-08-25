var express = require('express');
var router = express.Router()
var PersonModel = require('../modules/PersonModel')
var PersonController =  require('../controllers/PersonController')
var ProductController = require('../controllers/ProductController')
var AuthController = require('../controllers/AuthController')

router.use(AuthController.check_token);

router.get('/people', PersonController.all)
router.get('/people/:text', PersonController.search)

router.get('/product', ProductController.all)

router.use(function(req, res, next){
    res.status(404).send('Route does not exists');
})

module.exports = router