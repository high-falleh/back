const express=require('express')
const cors=require('cors')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


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
    apis: ["./constants/swagger/swagger.js"],
  };
  const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(cors())
app.use(express.json());


app.use("/api/user",userRouter)
app.use("/api/employee",employeeRouter)
app.use("/api/product",productRouter)
app.use("/api/client",clientRouter)
app.use("/api/provider",providerRouter)
app.use("/api/history",historyRouter)



app.listen(3000,()=>{
    console.log('listening on port 3000')
})
