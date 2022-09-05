const router = require("express").Router();
const controllers=require('../controllers/employeeControllers')

router.get("/getAllEmployeesByUserId/:userId",controllers.selecAlltEmployeesByUserId)
router.post("/addNewEmployee",controllers.addNewEmployee)
router.put("/updateEmployeeName/:employeeId",controllers.updateEmployeeName)
router.put("/updateEmployeeTel/:employeeId",controllers.updateEmployeeTel)
router.put("/updateEmployeePicture/:employeeId",controllers.updateEmployeePicture)
router.put("/updateEmployeeSalary/:employeeId",controllers.updateEmployeeSalary)
router.put("/updateEmployeeStatus/:employeeId",controllers.updateEmployeeStatus)

module.exports=router