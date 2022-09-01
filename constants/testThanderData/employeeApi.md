/* getAllEmployeesByUserId params=>userId */

    axios.get(`http://localhost:3000/api/employee/getAllEmployeesByUserId/:userId`)/

/* add new employee */

    axios.post(`http://localhost:3000/api/employee/addNewEmployee`,
    {
        "userId": 1,
        "employeeName": "bilel jouini",
        "employeeTel": 99999999
    })

/* update employee Name */

    axios.put(`http://loacalhost:3000/api/employee/updateEmployeeName/:employeeId`,
    {
        "newEmployeeName": "Bilel Jouini"
    })

/* update employee Tel */

    axios.put(`http://loacalhost:3000/api/employee/updateEmployeeTel/:employeeId`,
    {
        "newEmployeeTel": "55223366"
    })

/* update employee Salary */

    axios.put(`http://loacalhost:3000/api/employee/updateEmployeeSalary/:employeeId`,
    {
        "newEmployeeSalary": 550.5
    })

/* update employee Picture */

    axios.put(`http://loacalhost:3000/api/employee/updateEmployeePicture/:employeeId`,
    {
        "newEmployeePicture": "string"
    })

/* update employee status */

    //axios.put(`http://loacalhost:3000/api/employee/updateEmployeeStatus/:employeeId`,
    {
        "newEmployeeStatus": 0
    })
