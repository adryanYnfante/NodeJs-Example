var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    message: "Hola Mundo soy Adryan",
  });
});

router.get('/1', function(req, res, next) {
  res.json({
    message: "Hola Mundo soy Adryan Ynfante",
  });
});
module.exports = router;
