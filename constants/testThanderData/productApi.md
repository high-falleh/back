  /*get All product Categories*/

      axios.get(`http://localhost:3000/api/product/getAllProductCategories`)

  /* add new Product Category  */

      axios.post(`http://localhost:3000/api/product/addProductCategory`,
      {
          "productCategoryLabel": "animal",
          "productCategoryPicture": ""
      })

  /* update Product Category Label params=>productCategoryId  */

    axios.put(`http://localhost:3000/api/product/updateProductCategoryLabel/:productCategoryId`,
    {
      "newProductCategoryLabel": "cows"
    })

  /* update Product Category Picture params=>productCategoryId  */

    axios.put(`http://localhost:3000/api/product/updateProductCategoryPicture/:productCategoryId`,
    {
      "newProductCategoryPicture": "test"
    })
    
  /*deleteProductCategory params=>productCategoryId */
  
    axios.delete(`http://localhost:3000/api/product/deleteProductCategory/:productCategoryId`)






/*get All product Types  */

    axios.get(`http://localhost:3000/api/product/getAllProductTypes`)

/* add new Product Type  */

    axios.post(`http://localhost:3000/api/product/addproductType`,
    {
      "productTypeLabel": "cow",
      "productTypePicture": "",
      "productCategoryId": 1
    })

/* update Product Type Label params=>productTypeId */

    axios.put(`http://localhost:3000/api/product/updateProductTypeLabel/:productTypeId`,
    {
      "newProductTypeLabel": "cows"
    })

/* update Product Type Picture params=>productTypeId */

    axios.put(`http://localhost:3000/api/product/updateProductTypePicture/:productTypeId`,
    {
      "newProductTypePicture": "test"
    })

  /* update Product Category Id params=>productTypeId */

    axios.put(`http://localhost:3000/api/product/updateProductTypeCategoryID/:productTypeId`,
    {
      "newProductCategoryId": 2
    })
    
  /* delete Product Type params=>productTypeId */
  
    axios.delete(`http://localhost:3000/api/product/deleteProductType/:productTypeId`)




/*get All product ByUserId/:userId*/

    axios.get(`http://localhost:3000/api/product/getAllProductByUserId/:userId`)

/* add new product animal*/

    axios.post(`http://localhost:3000/api/product/addNewProduct`,
    {
      "userId": 1,
      "productTypeId": 1,
      "animalWeight": 50,
      "animalSellingPrice": 1000,
      "animalBuyingPrice": 2000,
      "animalDateOfBirth": "2020-01-01",
      "productPicture": ""
    })

/* add new product plant*/

    axios.post(`http://localhost:3000/api/product/addNewProduct`,
    {
      "userId": 1,
      "productTypeId": 5,
      "plantUnitPrice": 1000,
      "plantStock": 50,
      "productPicture": ""
    })

/* get allProductsByUserIdAndCategoryLabel params=>userId  */

    axios.post(`http://localhost:3000/api/product/getAllProductsByUserIdAndCategoryLabel/:userId`,
    {
      "productCategoryLabel": "plant"
    })

/* updateProductStockByUserIdAndProductIdAndCategoryLabel params=>userId/productId/productCategoryLabel */

    axios.put(`http://localhost:3000/api/product/updateProductStockByUserIdAndProductIdAndCategoryLabel/:userId/:productId/:productCategoryLabel`,
    {
      "newProductStock": 5
    })
