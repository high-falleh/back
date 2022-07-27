var db = require("../dataBase/connection.js");

const addNewTransaction=(req,res)=>{
    db.query('INSERT INTO Transactions Set ? ',req.body,(err,result)=>{
        if (err)res.send(['errSQL',err])
        if (result)res.send(['Transaction was added',result])
    })

}

const selectAllTransactionsByUserId=(req,res)=>{
    db.query(`select * from transactions where userId=${req.params.userId} `,req.body,(err,result)=>{
        if (err)res.send(['errSQL',err])
        if (result)res.send([`historytransaction of userId=${req.params.userId}`,result])
    })
}

const selectTransactionByUserIdAndProviderId=(req,res)=>{
    db.query(`select * from transactions where userId=${req.params.userId} and providerId=${req.params.providerId} `,req.body,(err,result)=>{
        if (err)res.send(['errSQL',err])
        if (result)res.send([`historytransaction of userId=${req.params.userId} and providerId=${req.params.providerId}`,result])
    })

}
const selectTransactionByUserIdAndEmployeeId=(req,res)=>{
    db.query(`select * from transactions where userId=${req.params.userId} and employeeId=${req.params.employeeId} `,req.body,(err,result)=>{
        if (err)res.send(['errSQL',err])
        if (result)res.send([`historytransaction of userId=${req.params.userId} and employeeId=${req.params.employeeId}`,result])
    })
}
const selectTransactionByUserIdAndEmployeeIdAndMonth=(req,res)=>{
    
    
    db.query(`select * from transactions where userId=${req.params.userId} and employeeId=${req.params.employeeId} and year(transactionDate) = year(${req.body.date})`,req.body,(err,result)=>{
        if (err)res.send(['errSQL',err])
        if (result)res.send([`historytransaction of userId=${req.params.userId} and employeeId=${req.params.employeeId} and month=${req.body.date}`,result])
    })
}
const selectTransactionByUserIdAndClientId=(req,res)=>{
    db.query(`select * from transactions where userId=${req.params.userId} and clientId=${req.params.clientId} `,req.body,(err,result)=>{
        if (err)res.send(['errSQL',err])
        if (result)res.send([`historytransaction of userId=${req.params.userId} and clientId=${req.params.clientId}`,result])
    })
}
const selectTransactionByUserIdAndProductId=(req,res)=>{
    db.query(`select * from transactions t inner join products p on t.productId=p.productId inner join clients c on t.clientId=c.clientId where t.userId=${req.params.userId} and t.productId=${req.params.productId} `,req.body,(err,result)=>{
        if (err)res.send(['errSQL',err])
        if (result)res.send([`historytransaction of userId=${req.params.userId} and productId=${req.params.productId}`,result])
    })
}
module.exports={
    addNewTransaction,

    selectAllTransactionsByUserId,

    selectTransactionByUserIdAndProviderId,

    selectTransactionByUserIdAndEmployeeId,
    selectTransactionByUserIdAndEmployeeIdAndMonth,

    selectTransactionByUserIdAndClientId,

    selectTransactionByUserIdAndProductId
}