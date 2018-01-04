var mongoose = require('mongoose');
Schema = mongoose.Schema;
var Question = require('./question.js');

var QuestionPaperSchema = new mongoose.Schema({
    name: {type: String, required: true},
    total_marks: {type: Number, required: true},
    createdBy: {type: String, required: true},
    total_time: {type: String, required: true},
    category: {type: String, required: true},
    created_date: { type: Date, default: Date.now },
    passing_marks: {type: Number, required: true},
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
  });

  module.exports = mongoose.model('QuestionPaper', QuestionPaperSchema);