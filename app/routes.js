var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/aboutswitch', function (req, res, next) {
  console.log(req.body);
  res.render('aboutswitch',req.body);
})

module.exports = router
