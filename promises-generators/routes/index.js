var express = require('express');
var router = express.Router();
var shaman = require(__base+'exercises/promises/opg 1.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  shaman.hex((err,data)=>{
    res.render('index', { title: 'Express',jokes: data });
  })

});
router.get('/api/secureRandoms', function(req, res, next) {
  shaman.hex((err,data)=>{
    res.json(data).pretty();
  })

});



module.exports = router;
