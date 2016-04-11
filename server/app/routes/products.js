const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
module.exports = router;

router.get('/', function (req, res, next) {
  mongoose.model('Product').find({})
  .then(function (products) {
    res.json(products);
  })
  .then(null, next);
});

router.get('/:letter', function(req, res, next){
	var letter = req.params.letter.charAt(0);
	mongoose.model("Product").find({name: new RegExp('^' + letter, 'i') })
	.then(function(products){
		res.json(products);
	})
	.then(null, next);
})