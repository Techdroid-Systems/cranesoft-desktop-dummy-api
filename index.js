const express = require('express')
const initDBConnection = require('./db/dbconnect')
const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')
const paymodeRouter = require('./routes/paymode')
const invoiceRouter = require('./routes/invoice')
const customerRouter = require('./routes/customer')

//Create an express application
const app = express()
const PORT = 8000 || process.env.PORT

initDBConnection()

app.use(express.json())
app.use(productRouter)
app.use(categoryRouter)
app.use(paymodeRouter)
app.use(invoiceRouter)
app.use(customerRouter)

app.get('/test', (req, res) => {
    res.send('test')
})

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`))