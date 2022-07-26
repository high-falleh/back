const router = require("express").Router();
const controllers=require('../controllers/providerControllers')

router.post("/addNewProvider",controllers.addNewProvider)
router.get("/getAllProvidersByUserId/:userId",controllers.selecAlltProvidersByUserId)
router.put("/updateProviderName/:providerId",controllers.updateProviderName)
router.put("/updateProviderTel/:providerId",controllers.updateProviderTel)

module.exports=router