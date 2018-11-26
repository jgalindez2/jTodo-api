const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }]
})

module.exports = mongoose.model('Todo', userSchema)