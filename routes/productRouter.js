const router = require("express").Router();
const controllers=require('../controllers/productControllers')


router.get('/getAllProductCategories',controllers.selectAllProductCategories)
router.post('/addProductCategory',controllers.addProductCategory)
router.put('/updateProductCategoryLabel/:productCategoryId',controllers.updateProductCategoryLabel)
router.put('/updateProductCategoryPicture/:productCategoryId',controllers.updateProductCategoryPicture)
router.delete('/deleteProductCategory/:productCategoryId',controllers.deleteProductCategory)

router.get('/getAllProductTypes',controllers.selectAllProductTypes)
router.post('/addproductType',controllers.addProductType)
router.put('/updateProductTypeLabel/:productTypeId',controllers.updateProductTypeLabel)
router.put('/updateProductTypePicture/:productTypeId',controllers.updateProductTypePicture)
router.delete('/deleteProductType/:productTypeId',controllers.deleteProductType)

module.exports=router