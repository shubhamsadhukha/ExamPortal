var mongoose = require('mongoose');
Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcryptjs');
var Exam = require('./exam.js');
var Result = require('./result.js');

var UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {type: String, unique: true, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    role: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: true, unique: true},
    registration_date: { type: Date, default: Date.now },
    exams: [{ type: Schema.Types.ObjectId, ref: 'Exam' }],
    results: [{ type: Schema.Types.ObjectId, ref: 'Result' }]
  },{timestamps: true});

  UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

  // Before saving the user, hash the password
UserSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) { return next(); }
    bcrypt.genSalt(10, function(err, salt) {
      if (err) { return next(err); }
      bcrypt.hash(user.password, salt, function(error, hash) {
        if (error) { return next(error); }
        user.password = hash;
        next();
      });
    });
  });

  module.exports = mongoose.model('User', UserSchema);