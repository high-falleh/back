const express=require('express')
const cors=require('cors')

const userRouter=require('./routes/userRouter')
const productRouter=require('./routes/productRouter')
const clientRouter=require('./routes/clientRouter')
const historyRouter=require('./routes/historyRouter')

const app=express()



app.use(cors())
app.use(express.json());


app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/client",clientRouter)
app.use("/api/history",historyRouter)


app.listen(3000,()=>{
    console.log('listening on port 3000')
})
