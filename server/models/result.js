var mongoose = require('mongoose');
Schema = mongoose.Schema;
var UserSchema = require('./user.js');
var ExamSchema = require('./exam.js');

var ResultSchema = new mongoose.Schema({
    applicant: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    exam: [{ type: Schema.Types.ObjectId, ref: 'Exam' }],
    marks: Number
  });

  module.exports = mongoose.model('Result', ResultSchema);