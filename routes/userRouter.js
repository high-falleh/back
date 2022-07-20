var router = require("express").Router();
const userController=require('../controllers/userControllers')


router.get('/getAllUser',userController.selectAllUser)
router.post('/register')
router.post('/login')

module.exports=router