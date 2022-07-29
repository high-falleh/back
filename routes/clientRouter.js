const router = require("express").Router();
const controllers=require('../controllers/clientControllers')

router.get("/getAllClientsByUserId/:userId",controllers.selecAlltClientsByUserId)
router.post("/addNewClient",controllers.addNewClient)
router.put("/updateClientName/:clientId",controllers.updateClientName)
router.put("/updateClientTel/:clientId",controllers.updateClientTel)

module.exports=router