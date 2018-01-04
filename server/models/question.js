var mongoose = require('mongoose');
Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
    type: {type: String, required: true},
    category: {type: String, required: true},
    question_content: String,
    answers: [{
        opt_1: String,
        opt_2: String,
        opt_3: String,
        opt_4: String
    }],
    correctIndex: { type: String, default: "1" },
    updated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Question', QuestionSchema);