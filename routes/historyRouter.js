const router = require("express").Router();
const controllers=require('../controllers/historyControllers')

/* history selling routes */

router.post('/addNewTransaction',controllers. addNewTransaction)
router.get('/selectAllTransactionsByUserId/:userId',controllers.selectAllTransactionsByUserId)
router.get('/selectTransactionByUserIdAndProviderId/:userId/:providerId',controllers.selectTransactionByUserIdAndProviderId)
router.get('/selectTransactionByUserIdAndEmployeeId/:userId/:employeeId',controllers.selectTransactionByUserIdAndEmployeeId)
router.get('/selectTransactionByUserIdAndClientId/:userId/:clientId',controllers.selectTransactionByUserIdAndClientId)

module.exports=router