var db = require("../dataBase/connection.js");

const addNewHistorySelling=(req,res)=>{
    db.query('insert into historySelling set=?',req.body,(err,result)=>{
        if (err)res.send(['errSQL',err])
        if (result)res.send(['historySelling was added',result])
    })

}

const selectHistorySellingByUserId=()=>{

}

const addNewHistoryBuying=(req,res)=>{
    db.query('insert into historyBuying set=?',req.body,(err,result)=>{
        if (err)res.send(['errSQL',err])
        if (result)res.send(['historyBuying was added',result])
    })

}
const selectHistoryBuyingByUserId=()=>{

}
module.exports={
    addNewHistorySelling,
    selectHistorySellingByUserId,



    addNewHistoryBuying,
    selectHistoryBuyingByUserId,
}