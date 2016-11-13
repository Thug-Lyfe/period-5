'use strict'
var express = require('express');
var router = express.Router();
var shaman = require(__base+'exercises/promises/opg 1.js')
var cameraMan = require(__base+'exercises/promises/opg 2.js')


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
router.get('/api/album', function (req, res, next) {
  cameraMan.getAlbums3(function(err,data) {
    if(err){
      res.end(JSON.stringify(err))
    }else{
      res.end(JSON.stringify(data));
    }

  })
})

router.get('/api/album/:x', function (req, res, next) {
  cameraMan.getAlbumsX(req.params.x,function(err,data) {
    if(err){
      res.end(JSON.stringify(err))
    }else{
      res.end(JSON.stringify(data));
    }

  })
})





module.exports = router;
