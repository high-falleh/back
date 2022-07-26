var db = require("../dataBase/connection.js");

/* controllers product categories */

const addProductCategory = (req, res) => {
    db.query(`INSERT INTO ProductCategories Set ? `, req.body, (err, result) => {
        if (err) res.send(['errSQL', err])
        if (result) res.send(['Product category is added', result])
    })
}
const selectAllProductCategories = (req, res) => {
    db.query(`select * from ProductCategories  `, (err, result) => {
        if (err) res.send(['errSQL', err])
        if (result) res.send(['all Product categories ', result])
    })

}
const updateProductCategoryLabel = (req, res) => {
    db.query(`update ProductCategories set productCategoryLabel='${req.body.newProductCategoryLabel}'  where productCategoryId = ${req.params.productCategoryId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Label product Category updated', result])
            else res.send(['unknown userId', result])
        }
    })

}
const updateProductCategoryPicture = (req, res) => {
    db.query(`update ProductCategories set productCategoryPicture='${req.body.newProductCategoryPicture}'  where productCategoryId = ${req.params.productCategoryId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Picture product Category updated', result])
            else res.send(['unknown userId', result])
        }
    })

}
const deleteProductCategory = (req, res) => {
    db.query(`delete from ProductCategories where productCategoryId = ${req.params.productCategoryId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['product Category was deleted', result])
            else res.send(['unknown userId', result])
        }
    })
}
/* controllers product categories */
const addProductType = (req, res) => {
    db.query(`INSERT INTO ProductTypes Set ? `, req.body, (err, result) => {
        if (err) res.send(['errSQL', err])
        if (result) res.send(['Product Type is added', result])
    })

}
const selectAllProductTypes = (req, res) => {
    db.query(`select pT.*,pC.* from ProductTypes pT inner join productCategories pC on pT.productCategoryId=pC.productCategoryId `, (err, result) => {
        if (err) res.send(['errSQL', err])
        if (result) res.send(['all Product types ', result])
    })

}
const updateProductTypeLabel = (req, res) => {
    db.query(`update ProductTypes set productTypeLabel='${req.body.newProductTypeLabel}'  where productTypeId = ${req.params.productTypeId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Label product Type updated', result])
            else res.send(['unknown userId', result])
        }
    })

}

const updateProductTypePicture = (req, res) => {
    db.query(`update ProductTypes set productTypePicture='${req.body.newProductTypePicture}'  where productTypeId = ${req.params.productTypeId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['Picture product Type updated', result])
            else res.send(['unknown userId', result])
        }
    })

}
const updateProductTypeCategoryID = (req, res) => {
    db.query(`update ProductTypes set productCategoryId='${req.body.newProductCategoryId}'  where productTypeId = ${req.params.productTypeId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['CategoryId product Type updated', result])
            else res.send(['unknown userId', result])
        }
    })

}
const deleteProductType = (req, res) => {
    db.query(`delete from ProductTypes where productTypeId = ${req.params.productTypeId} `, (err, result) => {
        if (err) {
            res.send(['errSQL', err])
        } else {
            if (result.affectedRows != 0)
                res.send(['product Type was deleted', result])
            else res.send(['unknown userId', result])
        }
    })

}
/* controllers products */
const addNewProduct = (req, res) => {
    db.query(`INSERT INTO Products Set ? `, req.body, (err, result) => {
        if (err) res.send(['errSQL', err])
        if (result) res.send(['Product is added', result])
    })
}
const selectAllProductsInfosByIdUser = (req, res) => {
    db.query(`select p.*,pT.*,pC.* from products p inner join ProductTypes pT on pT.productTypeId=p.productTypeId inner join productCategories pC on pT.productCategoryId=pC.productCategoryId where p.userId=${req.params.userId}`, (err, result) => {
        if (err) res.send(['errSQL', err])
        if (result) res.send([`all Product of userId=${req.params.userId}`, result])
    })
}
const selectAllProductsInfosByIdUserAndCategoryLabel = (req, res) => {
    db.query(`select * from products p inner join ProductTypes pT on pT.productTypeId=p.productTypeId inner join productCategories pC on pT.productCategoryId=pC.productCategoryId where p.userId=${req.params.userId} and pC.productCategoryLabel='${req.body.productCategoryLabel}'`, (err, result) => {
        if (err) res.send(['errSQL', err])
        if (result) res.send([`all Product of userId=${req.params.userId} and categoryLabel= ${req.body.productCategoryLabel} `, result])
    })
}
const updateProductStockByUserIdAndProductIdAndCategoryLabel = (req, res) => {
    console.log(req.params);
    db.query(`select * from products p inner join ProductTypes pT on pT.productTypeId=p.productTypeId inner join productCategories pC on pT.productCategoryId=pC.productCategoryId where p.userId=${req.params.userId} and pC.productCategoryLabel='${req.params.productCategoryLabel}'`, (err, result) => {
        if (err) res.send(['errSQL', err])
        if (result.length) {
            console.log(result);
            totalStock = req.body.newProductStock + result[0].plantStock
            db.query(`update products set plantStock='${totalStock}' where userId=${req.params.userId} and productId=${req.params.productId} `, (err, result) => {
                if (err) res.send(['errSQL', err])
                if (result)
                    if (result.affectedRows != 0)
                        res.send([`stock of ${req.params.productCategoryLabel} was updated`, result])
                        
            })
        }else res.send(['unknown params', result])
    })
}



module.exports = {

    addProductCategory,
    selectAllProductCategories,
    updateProductCategoryLabel,
    updateProductCategoryPicture,
    deleteProductCategory,

    addProductType,
    selectAllProductTypes,
    updateProductTypeLabel,
    updateProductTypePicture,
    updateProductTypeCategoryID,
    deleteProductType,

    addNewProduct,
    selectAllProductsInfosByIdUser,
    selectAllProductsInfosByIdUserAndCategoryLabel,
    updateProductStockByUserIdAndProductIdAndCategoryLabel,

   

}