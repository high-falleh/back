const router = require("express").Router();
const controllers=require('../controllers/employeeControllers')

router.get("/getAllEmployeesByUserId/:userId",controllers.selecAlltEmployeesByUserId)
router.post("/addNewEmployee",controllers.addNewEmployee)
router.put("/updateEmployeeName/:employeeId",controllers.updateEmployeeName)
router.put("/updateEmployeeTel/:employeeId",controllers.updateEmployeeTel)
router.put("/updateEmployeePicture/:employeeId",controllers.updateEmployeeTel)
router.put("/updateEmployeeSalary/:employeeId",controllers.updateEmployeeTel)

module.exports=router