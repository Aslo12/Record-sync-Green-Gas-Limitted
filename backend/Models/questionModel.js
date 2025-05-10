// Models/questionModel.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: String,
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'dept',
  },
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'emp',
  },
  answers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'answer'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Question', questionSchema);
