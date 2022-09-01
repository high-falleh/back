var router = require("express").Router();
const userControllers=require('../controllers/userControllers')


router.get('/getAllUser',userControllers.selectAllUsers)
router.post('/register',userControllers.register)
router.post('/login',userControllers.login)
router.put('/updatePassword/:userId',userControllers.updatePassword)
router.put('/updateEmail/:userId',userControllers.updateEmail)
router.put('/updateFullname/:userId',userControllers.updateFullName)
router.put('/updatePhone/:userId',userControllers.updatePhone)
router.get("/getSession/:userId", userControllers.selectSession),
router.delete("/deleteSession/:userId", userControllers.deleteSession),
router.post("/addSession", userControllers.insertSession);

module.exports=router