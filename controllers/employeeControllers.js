var db = require("../dataBase/connection.js");
const addNewEmployee=(req,res)=>{
        console.log('add New Employee Controller');
        db.query(`INSERT INTO Employees Set ? `, req.body, (err, result) => {
            if (err) res.send(['errSQL', err])
            if (result) res.send(['Employee was added', result])
        })
    
}
  const  selecAlltEmployeesByUserId=(req,res)=>{
    
        db.query(`select * from Employees where userId=${req.params.userId}`, (err, result) => {
            if (err) res.send(['errSQL', err])
            if (result) res.send([`all Employees of userId=${req.params.userId}`, result])
        })
    }
  const updateEmployeeName=(req,res)=>{
    db.query(`update Employees set employeeName='${req.body.newEmployeeName}'  where EmployeeId = ${req.params.employeeId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Employee Name was updated', result])
            else res.send(['unknown userId', result])
        }
    })
  }
  const updateEmployeeTel=(req,res)=>{
    db.query(`update Employees set employeeTel='${req.body.newEmployeeTel}'  where EmployeeId = ${req.params.employeeId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Employee Tel was updated', result])
            else res.send(['unknown userId', result])
        }
    })
  }
  const updateEmployeePicture=(req,res)=>{
    db.query(`update Employees set employeePicture='${req.body.newEmployeePicture}'  where EmployeeId = ${req.params.employeeId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Employee picture was updated', result])
            else res.send(['unknown userId', result])
        }
    })
  }
  const updateEmployeeSalary=(req,res)=>{
    db.query(`update Employees set employeeSalary='${req.body.newEmployeeSalary}'  where EmployeeId = ${req.params.employeeId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Employee Salary was updated', result])
            else res.send(['unknown userId', result])
        }
    })
  }
  const updateEmployeeStatus=(req,res)=>{
    db.query(`update Employees set employeeStatus='${req.body.newEmployeeStatus}'  where EmployeeId = ${req.params.employeeId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Employee Status was updated', result])
            else res.send(['unknown userId', result])
        }
    })
  }
module.exports={
    addNewEmployee,
    selecAlltEmployeesByUserId,
    updateEmployeeName,
    updateEmployeeTel,
    updateEmployeePicture,
    updateEmployeeSalary,
    updateEmployeeStatus
    
}