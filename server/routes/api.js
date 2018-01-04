const express = require('express');
var router = express.Router();
var cors = require('cors');
var mongoose = require('mongoose');
var Book = require('../models/book.js');
var User = require('../models/user.js');
var Exam = require('../models/exam.js');
var Result = require('../models/result.js');
var Question = require('../models/question.js');
var QuestionPaper = require('../models/question_paper.js');


  // options for cors midddleware
  const options = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "Access-Control-Request-Method", "Access-Control-Request-Headers"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false
  };

  router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  // router.use(cors(options));

/* GET api listing. */

/*-----------------------------------------
      ROUTES FOR BOOKS
-------------------------------------------*/
/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* COUNT BOOKS */
router.get('/count', function(req, res, next) {
  Book.count(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});




/*-----------------------------------------
      ROUTES FOR USER
-------------------------------------------*/
/* GET ALL USERS */
router.get('/user/all', function(req, res, next) {
  User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* COUNT USERS */
router.get('/user/count', function(req, res, next) {
  User.count(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE USER BY ID */
router.get('/user/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE USER */
router.post('/user/add', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE USER */
router.put('/user/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE USER */
router.delete('/user/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/*-----------------------------------------
      ROUTES FOR RESULT
-------------------------------------------*/
/* GET ALL RESULTS */
router.get('/result/all', function(req, res, next) {
  Result.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* COUNT RESULTS */
router.get('/result/count', function(req, res, next) {
  Result.count(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE RESULT BY ID */
router.get('/result/:id', function(req, res, next) {
  Result.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE RESULT */
router.post('/result/add', function(req, res, next) {
  Result.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE RESULT */
router.put('/result/:id', function(req, res, next) {
  Result.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE RESULT */
router.delete('/result/:id', function(req, res, next) {
  Result.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/*-----------------------------------------
      ROUTES FOR EXAM
-------------------------------------------*/
/* GET ALL EXAM */
router.get('/exam/all', function(req, res, next) {
  Exam.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* COUNT EXAMS */
router.get('/exam/count', function(req, res, next) {
  Exam.count(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE EXAM BY ID */
router.get('/exam/:id', function(req, res, next) {
  Exam.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE EXAM */
router.post('/exam/add', function(req, res, next) {
  Exam.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE EXAM */
router.put('/exam/:id', function(req, res, next) {
  Exam.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE EXAM */
router.delete('/exam/:id', function(req, res, next) {
  Exam.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/*-----------------------------------------
      ROUTES FOR QUESTION PAPER
-------------------------------------------*/
/* GET ALL QUESTION PAPER */
router.get('/quespaper/all', function(req, res, next) {
  QuestionPaper.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* COUNT QUESTION PAPERS */
router.get('/quespaper/count', function(req, res, next) {
  QuestionPaper.count(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE QUESTION PAPER BY ID */
router.get('/quespaper/:id', function(req, res, next) {
  QuestionPaper.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE QUESTION PAPER */
router.post('/quespaper/add', function(req, res, next) {
  QuestionPaper.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE QUESTION PAPER */
router.put('/quespaper/:id', function(req, res, next) {
  QuestionPaper.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE QUESTION PAPER */
router.delete('/quespaper/:id', function(req, res, next) {
  QuestionPaper.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/*-----------------------------------------
      ROUTES FOR QUESTION
-------------------------------------------*/
/* GET ALL QUESTIONS */
router.get('/ques/all', function(req, res, next) {
  Question.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* COUNT QUESTIONS */
router.get('/ques/count', function(req, res, next) {
  Question.count(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE QUESTION BY ID */
router.get('/ques/:id', function(req, res, next) {
  Question.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE QUESTION */
router.post('/ques/add', function(req, res, next) {
  Question.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE QUESTION */
router.put('/ques/:id', function(req, res, next) {
  Question.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE QUESTION */
router.delete('/ques/:id', function(req, res, next) {
  Question.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/*=========END OF ROUTES==========*/
module.exports = router;