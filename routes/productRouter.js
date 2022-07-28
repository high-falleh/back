const router = require("express").Router();
const controllers=require('../controllers/productControllers')

/* Product Categories routes */

router.get('/getAllProductCategories',controllers.selectAllProductCategories)
router.post('/addProductCategory',controllers.addProductCategory)
router.put('/updateProductCategoryLabel/:productCategoryId',controllers.updateProductCategoryLabel)
router.put('/updateProductCategoryPicture/:productCategoryId',controllers.updateProductCategoryPicture)
router.delete('/deleteProductCategory/:productCategoryId',controllers.deleteProductCategory)

/* Product Types routes */

router.get('/getAllProductTypes',controllers.selectAllProductTypes)
router.post('/addproductType',controllers.addProductType)
router.put('/updateProductTypeLabel/:productTypeId',controllers.updateProductTypeLabel)
router.put('/updateProductTypePicture/:productTypeId',controllers.updateProductTypePicture)
router.put('/updateProductTypeCategoryID/:productTypeId',controllers.updateProductTypeCategoryID)
router.delete('/deleteProductType/:productTypeId',controllers.deleteProductType)

/* Product routes */

router.post('/addNewProduct',controllers.addNewProduct)
router.get('/getAllProductsByUserId/:userId',controllers.selectAllProductsInfosByIdUser)
router.post('/getAllProductsByUserIdAndCategoryLabel/:userId',controllers.selectAllProductsInfosByIdUserAndCategoryLabel)
router.put('/updateProductStockByUserIdAndProductIdAndCategoryLabel/:userId/:productId/:productCategoryLabel',controllers.updateProductStockByUserIdAndProductIdAndCategoryLabel)



module.exports=router