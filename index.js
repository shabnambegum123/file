const express = require('express')
const app = express()
app.use(express)
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const dotenv = require('dotenv')
dotenv.config()

const router = require('./routes/productRoutes.js')

app.use('/api/products',router)
let port = process.env.PORT
app.listen(port,()=>{
    console.log(`server is running for ${port}`)
})
