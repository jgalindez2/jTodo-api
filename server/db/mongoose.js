const mongoose = require('mongoose')

const connect = () => {
  mongoose.connect('mongodb://localhost:27017/SpiderTodo', { useNewUrlParser: true })
  mongoose.connection.on('error', err => {
      throw new Error('unable to connect to database', err)
  })
  require('../models/Todo')
  require('../models/Todo')
}

module.exports = connect;