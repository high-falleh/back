const router = require("express").Router();
const controllers=require('../controllers/providerControllers')

router.get("/getAllProvidersByUserId/:userId",controllers.selecAlltProvidersByUserId)
router.post("/addNewProvider",controllers.addNewProvider)
router.put("/updateProviderName/updateProviderName/:providerId",controllers.updateProviderName)
router.put("/updateProviderTel/:providerId",controllers.updateProviderTel)

module.exports=router