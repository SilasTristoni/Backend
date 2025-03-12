const express = require('express')
const alunoController = require('./controllers/alunoController')  
const app = express()

app.use(express.json())  

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/alunos', alunoController.insert)  
app.get('/alunos', alunoController.findAll)  

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
