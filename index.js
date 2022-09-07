const express=require('express')
const cors=require('cors')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const multer=require('multer')
const fs=require('fs')



const userRouter=require('./routes/userRouter')
const employeeRouter=require('./routes/employeeRouter')
const productRouter=require('./routes/productRouter')
const clientRouter=require('./routes/clientRouter')
const providerRouter=require('./routes/providerRouter')
const historyRouter=require('./routes/historyRouter')

const app=express()

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Library API",
        version: '1.0.0',
      },
    },
    apis: ["./constants/swagger/userSwagger.js","./constants/swagger/employeeSwagger.js","./constants/swagger/clientSwagger.js","./constants/swagger/productSwagger.js","./constants/swagger/providerSwagger.js","./constants/swagger/historyTransactionSwagger.js"],
  };
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use(express.static(''))
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(cors())
app.use(express.json());

const upload=multer({dest:"./uploads"})
app.post('/upload',upload.single('avatar'),(req,res)=>{
  let fileType=req.file.mimetype.split('/')[1]
  let newNameFile=req.file.filename+'.'+fileType
  fs.rename(`./uploads/${req.file.filename}`,newNameFile,()=>{
    console.log('name changed')
    res.status(200).send('file uploaded')
  })

})

app.use("/api/user",userRouter)
app.use("/api/employee",employeeRouter)
app.use("/api/product",productRouter)
app.use("/api/client",clientRouter)
app.use("/api/provider",providerRouter)
app.use("/api/history",historyRouter)

app.use('/HEND',(req,res)=>{
  res.send('hello hend')
})
app.use('/khalil',(req,res)=>{
  res.send('hello KHLHJQDLFJ')
}
)


app.listen(3000,()=>{
    console.log('listening on port 3000')
})
