const router = require("express").Router();
const controllers=require('../controllers/historyControllers')

/* history transation routes */
router.post('/addNewTransaction',controllers. addNewTransaction)
router.post('/selectAllTransactionsByUserId/:userId',controllers.selectAllTransactionsByUserId)

/* history provider transactions routes */
router.post('/selectTransactionsByUserIdAndProviderId/:userId/:providerId',controllers.selectTransactionsByUserIdAndProviderId)

/* history employee transactions routes */
router.post('/selectTransactionsByUserIdAndEmployeeId/:userId/:employeeId',controllers.selectTransactionsByUserIdAndEmployeeId)


/* history client transactions routes */
router.post('/selectTransactionsByUserIdAndClientId/:userId/:clientId',controllers.selectTransactionsByUserIdAndClientId)
/*history product transactions */
router.post('/selectTransactionsByUserIdAndProductId/:userId/:productId',controllers.selectTransactionsByUserIdAndProductId)


module.exports=router