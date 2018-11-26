const express = require('express')
const bodyParser = require('body-parser')
const Todo = require('./models/Todo')
require('./db/mongoose')()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/todos', (req, res) => {
  const todo = new Todo()
  todo.title = req.body.title
  todo.save()
    .then(doc => res.json(doc))
    .catch(err => res.status(400).json({ err }))
})

app.listen(3000, () => {
  console.log('Starting on port 3000')
})