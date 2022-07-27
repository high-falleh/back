const router = require("express").Router();
const controllers=require('../controllers/historyControllers')

/* history selling routes */

router.post('/addNewTransaction',controllers. addNewTransaction)

router.get('/selectAllTransactionsByUserId/:userId',controllers.selectAllTransactionsByUserId)
router.get('/selectTransactionsByUserIdAndProviderId/:userId/:providerId',controllers.selectTransactionByUserIdAndProviderId)

router.get('/selectTransactionsByUserIdAndEmployeeId/:userId/:employeeId',controllers.selectTransactionByUserIdAndEmployeeId)
router.post('/selectTransactionsByUserIdAndEmployeeIdAndMonth/:userId/:employeeId',controllers.selectTransactionByUserIdAndEmployeeIdAndMonth)

router.get('/selectTransactionsByUserIdAndClientId/:userId/:clientId',controllers.selectTransactionByUserIdAndClientId)
router.get('/selectTransactionsByUserIdAndproductId/:userId/:productId',controllers.selectTransactionByUserIdAndProductId)
module.exports=router