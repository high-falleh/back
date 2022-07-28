const express=require('express')
const cors=require('cors')

const userRouter=require('./routes/userRouter')
const employeeRouter=require('./routes/employeeRouter')
const productRouter=require('./routes/productRouter')
const clientRouter=require('./routes/clientRouter')
const providerRouter=require('./routes/providerRouter')
const historyRouter=require('./routes/historyRouter')

const app=express()



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
