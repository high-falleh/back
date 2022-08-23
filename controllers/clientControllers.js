var db = require("../dataBase/connection.js");
const addNewClient=(req,res)=>{
        console.log('add New Client Controller');
        db.query(`INSERT INTO Clients Set ? `, req.body, (err, result) => {
            if (err) res.send(['errSQL', err])
            if (result) res.send(['Client was added', result])
        })
    
}
  const  selecAlltClientsByUserId=(req,res)=>{
    
        db.query(`select * from clients where userId=${req.params.userId}`, (err, result) => {
            if (err) res.send(['errSQL', err])
            if (result) res.send([`all Clients of userId=${req.params.userId}`, result])
        })
    }
  const updateClientName=(req,res)=>{
    db.query(`update clients set clientName='${req.body.newClientName}'  where clientId = ${req.params.clientId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Client Name was updated', result])
            else res.send(['unknown userId', result])
        }
    })
  }
  const updateClientTel=(req,res)=>{
    db.query(`update clients set clientTel='${req.body.newClientTel}'  where clientId = ${req.params.clientId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Client Tel was updated', result])
            else res.send(['unknown userId', result])
        }
    })
  }
module.exports={
    addNewClient,
    selecAlltClientsByUserId,
    updateClientName,
    updateClientTel
}