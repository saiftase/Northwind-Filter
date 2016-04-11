const router = require('express').Router();
module.exports = router;

router.use('/employees', require('./employees'));
router.use('/products', require('./products'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});
