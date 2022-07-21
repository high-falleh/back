var db = require("../dataBase/connection.js");

/* controllers product categories */

const addProductCategory=(req,res)=>{
    db.query(`INSERT INTO ProductCategories Set ? `, req.body, (err, result) => {
        if (err) res.send(['errSQL',err])
        if (result) res.send(['Product category is added',result])
    })
}
const selectAllProductCategories=(req,res)=>{
    db.query(`select * from ProductCategories  `,(err, result) => {
        if (err) res.send(['errSQL',err])
        if (result) res.send(['all Product categories ',result])
    })

}
const updateProductCategoryLabel=(req,res)=>{
    db.query(`update ProductCategories set productCategoryLabel='${req.body.newProductCategoryLabel}'  where productCategoryId = ${req.params.productCategoryId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if(result.affectedRows!=0)
            res.send(['Label product Category updated',result])
            else res.send (['unknown userId',result])
        }
    })

}
const updateProductCategoryPicture=(req,res)=>{
    db.query(`update ProductCategories set productCategoryPicture='${req.body.newProductCategoryPicture}'  where productCategoryId = ${req.params.productCategoryId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if(result.affectedRows!=0)
            res.send(['Picture product Category updated',result])
            else res.send (['unknown userId',result])
        }
    })

}
const deleteProductCategory=()=>{

}
/* controllers product categories */
const addProductType=(req,res)=>{

}
const selectAllProductTypes=(req,res)=>{

}
const updateProductTypeLabel=(req,res)=>{
    
}

const updateProductTypePicture=(req,res)=>{

}
const deleteProductType=()=>{

}
/* controllers products */


module.exports={

    addProductCategory,
    selectAllProductCategories,
    updateProductCategoryLabel,
    updateProductCategoryPicture,
    deleteProductCategory,
    
    addProductType,
    selectAllProductTypes,
    updateProductTypeLabel,
    updateProductTypePicture,
    deleteProductType,
}