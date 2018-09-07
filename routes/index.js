var express = require('express');
var router = express.Router();
var db = require("../models");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data){
    console.log(data)

    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

module.exports = router;
