var mongoose = require('mongoose');
Schema = mongoose.Schema;

var User = require('./user.js');

var ExamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    created_date: { type: Date, default: Date.now },
    applicants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  });

  module.exports = mongoose.model('Exam', ExamSchema);