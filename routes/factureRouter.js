const router = require("express").Router();

const controllers=require('../controllers/clientControllers')

router.post("/addNewFature",controllers)



module.exports=router