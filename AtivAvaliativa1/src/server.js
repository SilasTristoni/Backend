const express = require('express')
const projetoController = require('./controllers/projetoController')
const usuarioController = require('./controllers/usuarioController')
const tarefaController = require('./controllers/tarefaController')
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/projeto', projetoController.insert)
app.get('/projeto', projetoController.findAll)
app.put('/projeto/:id', projetoController.update)
app.delete('/projeto/:id', projetoController.delete)


app.post('/usuario', usuarioController.insert)
app.get('/usuario', usuarioController.findAll)
app.put('/usuario/:id', usuarioController.update)
app.delete('/usuario/:id', usuarioController.delete)


app.post('/tarefa', tarefaController.insert)
app.get('/tarefa', tarefaController.findAll)


app.listen(3020, () => {
    console.log('Server is running on http://localhost:3020')
})