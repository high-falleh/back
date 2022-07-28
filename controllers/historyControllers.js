var db = require("../dataBase/connection.js");

const addNewTransaction = (req, res) => {
    db.query('INSERT INTO Transactions Set ? ', req.body, (err, result) => {
        if (err) res.send(['errSQL', err])
        if (result) res.send(['Transaction was added', result])
    })

}

const selectAllTransactionsByUserId = (req, res) => {
    var year = req.body.year
    var month = req.body.month
    var day = req.body.day
    if (year) {
        if (month) {
            if (day) {
                db.query(`select * from transactions where userId=${req.params.userId} and year(transactionDate)=${year} and month(transactionDate)=${month} and day(transactionDate)=${day} `, req.body, (err, result) => {
                    if (err) res.send(['errSQL', err])
                    if (result) res.send([`historytransaction of userId=${req.params.userId} and year=${year} and month=${month} and day=${day}`, result])
                })
            } else {
                db.query(`select * from transactions where userId=${req.params.userId} and year(transactionDate)=${year} and month(transactionDate)=${month}`, req.body, (err, result) => {
                    if (err) res.send(['errSQL', err])
                    if (result) res.send([`historytransaction of userId=${req.params.userId} and year=${year} and month=${month}`, result])
                })
            }

        } else {
            db.query(`select * from transactions where userId=${req.params.userId} and year(transactionDate)=${year} `, req.body, (err, result) => {
                if (err) res.send(['errSQL', err])
                if (result) res.send([`historytransaction of userId=${req.params.userId} and year=${year}`, result])
            })
        }
    } else {
        db.query(`select * from transactions where userId=${req.params.userId} `, req.body, (err, result) => {
            if (err) res.send(['errSQL', err])
            if (result) res.send([`historytransaction of userId=${req.params.userId}`, result])
        })
    }


}

const selectTransactionsByUserIdAndProviderId = (req, res) => {
    var userId = req.params.userId
    var providerId = req.params.providerId
    var year = req.body.year
    var month = req.body.month
    var day = req.body.day
    if (year) {
        if (month) {
            if (day) {
                db.query(`select * from transactions where userId=${userId} and providerId=${providerId} and year(transactionDate)=${year} and month(transactionDate)=${month} and day(transactionDate)=${day}`, req.body, (err, result) => {
                    if (err) res.send(['errSQL1', err])
                    if (result) res.send([`historytransaction of userId=${userId} and providerId=${providerId} and year=${year} and month=${month} and day=${day}`, result])
                })

            } else {
                db.query(`select * from transactions where userId=${userId} and providerId=${providerId} and year(transactionDate)=${year} and month(transactionDate)=${month}`, req.body, (err, result) => {
                    if (err) res.send(['errSQL2', err])
                    if (result) res.send([`historytransaction of userId=${userId} and providerId=${providerId} and year=${year} and month=${month}`, result])
                })
            }
        } else {
            db.query(`select * from transactions where userId=${userId} and providerId=${providerId} and year(transactionDate)=${year}`, req.body, (err, result) => {
                if (err) res.send(['errSQL3', err])
                if (result) res.send([`historytransaction of userId=${userId} and providerId=${providerId} and year=${year}`, result])
            })
        }

    } else {
        db.query(`select * from transactions where userId=${userId} and providerId=${providerId} `, req.body, (err, result) => {
            if (err) res.send(['errSQL4', err])
            if (result) res.send([`historytransaction of userId=${userId} and providerId=${providerId}`, result])
        })
    }

}
const selectTransactionsByUserIdAndEmployeeId = (req, res) => {
    var userId = req.params.userId
    var employeeId = req.params.employeeId
    var year = req.body.year
    var month = req.body.month
    var day = req.body.day
    if (year) {
        if (month) {
            if (day) {
                db.query(`select * from transactions where userId=${userId} and employeeId=${employeeId} and year(transactionDate)=${year} and month(transactionDate)=${month} and day(transactionDate)=${day}`, req.body, (err, result) => {
                    if (err) res.send(['errSQL', err])
                    if (result) res.send([`historytransaction of userId=${userId} and employeeId=${employeeId} and year=${year} and month=${month} and day=${day}`, result])
                })

            } else {
                db.query(`select * from transactions where userId=${userId} and employeeId=${employeeId} and year(transactionDate)=${year} and month(transactionDate)=${month}`, req.body, (err, result) => {
                    if (err) res.send(['errSQL', err])
                    if (result) res.send([`historytransaction of userId=${userId} and employeeId=${employeeId} and year=${year} and month=${month}`, result])
                })
            }
        } else {
            db.query(`select * from transactions where userId=${userId} and employeeId=${employeeId} and year(transactionDate)=${year}`, req.body, (err, result) => {
                if (err) res.send(['errSQL', err])
                if (result) res.send([`historytransaction of userId=${userId} and employeeId=${employeeId} and year=${year}`, result])
            })
        }

    } else {
        db.query(`select * from transactions where userId=${userId} and employeeId=${employeeId} `, req.body, (err, result) => {
            if (err) res.send(['errSQL', err])
            if (result) res.send([`historytransaction of userId=${userId} and employeeId=${employeeId}`, result])
        })
    }

}
// const selectTransactionsByUserIdAndEmployeeIdAndYearAndMonth=(req,res)=>{

//     if(req.body.year){
//         if(req.body.month){
//             db.query(`select * from transactions where userId=${req.params.userId} and employeeId=${req.params.employeeId} and year(transactionDate) = ${req.body.year} and month(transactionDate)=${req.body.month}`,req.body,(err,result)=>{
//                 if (err)res.send(['errSQL',err])
//                 if (result)res.send([`historytransaction of userId=${req.params.userId} and employeeId=${req.params.employeeId} of year=${req.body.year} and month=${req.body.month}`,result])
//             })
//         }else{
//             db.query(`select * from transactions where userId=${req.params.userId} and employeeId=${req.params.employeeId} and year(transactionDate) = ${req.body.year}`,req.body,(err,result)=>{
//                 if (err)res.send(['errSQL',err])
//                 if (result)res.send([`historytransaction of userId=${req.params.userId} and employeeId=${req.params.employeeId} `,result])
//             })
//         }

//     }else{
//         res.send(['year was missed'])

//     }

// }
const selectTransactionsByUserIdAndClientId = (req, res) => {
    var userId = req.params.userId
    var clientId = req.params.clientId
    var year = req.body.year
    var month = req.body.month
    var day = req.body.day
    if (year) {
        if (month) {
            if (day) {
                db.query(`select * from transactions where userId=${userId} and clientId=${clientId} and year(transactionDate)=${year} and month(transactionDate)=${month} and day(transactionDate)=${day}`, req.body, (err, result) => {
                    if (err) res.send(['errSQL', err])
                    if (result) res.send([`historytransaction of userId=${userId} and clientId=${clientId} and year=${year} and month=${month} and day=${day}`, result])
                })

            } else {
                db.query(`select * from transactions where userId=${userId} and clientId=${clientId} and year(transactionDate)=${year} and month(transactionDate)=${month}`, req.body, (err, result) => {
                    if (err) res.send(['errSQL', err])
                    if (result) res.send([`historytransaction of userId=${userId} and clientId=${clientId} and year=${year} and month=${month}`, result])
                })
            }
        } else {
            db.query(`select * from transactions where userId=${userId} and clientId=${clientId} and year(transactionDate)=${year}`, req.body, (err, result) => {
                if (err) res.send(['errSQL', err])
                if (result) res.send([`historytransaction of userId=${userId} and clientId=${clientId} and year=${year}`, result])
            })
        }

    } else {
        db.query(`select * from transactions where userId=${userId} and clientId=${clientId} `, req.body, (err, result) => {
            if (err) res.send(['errSQL', err])
            if (result) res.send([`historytransaction of userId=${userId} and clientId=${clientId}`, result])
        })
    }
}
const selectTransactionsByUserIdAndProductId = (req, res) => {
    var userId = req.params.userId
    var productId = req.params.productId
    var year = req.body.year
    var month = req.body.month
    var day = req.body.day
    if (year) {
        if (month) {
            if (day) {
                db.query(`select * from transactions t inner join products p on t.productId=p.productId inner join clients c on t.clientId=c.clientId where t.userId=${userId} and t.productId=${productId} and year(t.transactionDate)=${year} and month(t.transactionDate)=${month} and day(t.transactionDate)=${day}`, req.body, (err, result) => {
                    if (err) res.send(['errSQL', err])
                    if (result) res.send([`historytransaction of userId=${userId} and productId=${productId} and year=${year} and month=${month} and day=${day}`, result])
                })

            } else {
                db.query(`select * from transactions t inner join products p on t.productId=p.productId inner join clients c on t.clientId=c.clientId where t.userId=${userId} and t.productId=${productId} and year(t.transactionDate)=${year} and month(t.transactionDate)=${month}`, req.body, (err, result) => {
                    if (err) res.send(['errSQL', err])
                    if (result) res.send([`historytransaction of userId=${userId} and productId=${productId} and year=${year} and month=${month}`, result])
                })
            }
        } else {
            db.query(`select * from transactions t inner join products p on t.productId=p.productId inner join clients c on t.clientId=c.clientId where t.userId=${userId} and t.productId=${productId} and year(t.transactionDate)=${year}`, req.body, (err, result) => {
                if (err) res.send(['errSQL', err])
                if (result) res.send([`historytransaction of userId=${userId} and productId=${productId} and year=${year}`, result])
            })
        }

    } else {
        db.query(`select * from transactions t inner join products p on t.productId=p.productId inner join clients c on t.clientId=c.clientId where t.userId=${userId} and t.productId=${productId} `, req.body, (err, result) => {
            if (err) res.send(['errSQL', err])
            if (result) res.send([`historytransaction of userId=${userId} and productId=${productId}`, result])
        })
    }
}
    

module.exports = {
    addNewTransaction,

    selectAllTransactionsByUserId,

    selectTransactionsByUserIdAndProviderId,

    selectTransactionsByUserIdAndEmployeeId,
    // selectTransactionsByUserIdAndEmployeeIdAndYearAndMonth,

    selectTransactionsByUserIdAndClientId,

    selectTransactionsByUserIdAndProductId
}