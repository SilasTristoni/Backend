const express = require('express')
const ProductController = require('./controllers/productController')
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/products', ProductController.insert)
app.get('/products', ProductController.findAll)

app.listen(3010, () => {
    console.log('Server is running on http://localhost:3010')
})