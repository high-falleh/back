const router = require("express").Router();
const controllers=require('../controllers/historyControllers')

/* history selling routes */

router.post('/addNewHistorySelling',controllers.addNewHistorySelling)
router.get('/getAllHistorySellingByUserId/:userId',controllers.selectHistorySellingByUserId)

module.exports=router