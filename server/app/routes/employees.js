const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
module.exports = router;

router.get('/', function (req, res, next) {
  mongoose.model('Employee').find({})
  .then(function (employees) {
    res.json(employees);
  })
  .then(null, next);
});