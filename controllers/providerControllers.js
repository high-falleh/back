var db = require("../dataBase/connection.js");
const addNewProvider=(req,res)=>{
        console.log('add New Provider Controller');
        db.query(`INSERT INTO Providers Set ? `, req.body, (err, result) => {
            if (err) res.send(['errSQL', err])
            if (result) res.send(['Provider was added', result])
        })
    
}
  const  selecAlltProvidersByUserId=(req,res)=>{
    
        db.query(`select * from Providers where userId=${req.params.userId}`, (err, result) => {
            if (err) res.send(['errSQL', err])
            if (result) res.send([`all Providers of userId=${req.params.userId}`, result])
        })
    }
  const updateProviderName=(req,res)=>{
    db.query(`update Providers set providerName='${req.body.newProviderName}'  where providerId = ${req.params.ProviderId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Provider Name was updated', result])
            else res.send(['unknown userId', result])
        }
    })
  }
  const updateProviderTel=(req,res)=>{
    db.query(`update Providers set providerTel='${req.body.newProviderTel}'  where providerId = ${req.params.ProviderId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Provider Tel was updated', result])
            else res.send(['unknown userId', result])
        }
    })
  }
module.exports={
    addNewProvider,
    selecAlltProvidersByUserId,
    updateProviderName,
    updateProviderTel
}