const router = require("express").Router();
const controllers=require('../controllers/employeeControllers')

router.post("/addNewEmployee",controllers.addNewEmployee)
router.get("/getAllEmployeesByUserId/:userId",controllers.selecAlltEmployeesByUserId)
router.put("/updateEmployeeName/:employeeId",controllers.updateEmployeeName)
router.put("/updateEmployeeTel/:employeeId",controllers.updateEmployeeTel)

module.exports=router