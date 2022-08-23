var db = require("../dataBase/connection.js");

const addNewFacture=(req,res)=>{
    var newFactureNum
    var userId=req.body.userId
    db.query(`select factureNum from factures where userId=${userId} order by date DESC limit 1`,(err,result)=>{
        if(err) res.send(['errSQL',err])
        if(result) {
            factureNum=result+1
            console.log(newFactureNum);
        }

    })
    db.query('insert into factures set ?',req.body,(err,result)=>{
        if(err) res.send(['errSQL',err])
        if (result) res.send(['Facture was added', result])
    })
    
}
const selecAlltFactureByUserId=(req,res)=>{

}
const updateFactureNumber=(req,res)=>{

}
const updateFactureClientId=(req,res)=>{

}
const updateFactureDate=(req,res)=>{

}



module.exports={

    addNewFacture,
    selecAlltFactureByUserId,
    updateFactureNumber,
    updateFactureClientId,
    updateFactureDate,
}