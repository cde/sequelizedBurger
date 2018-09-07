var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
    db.Burger.findAll({raw: true}).then(function(data){
        let hbsObject = {
            burgers: data
        };
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
   db.Burger.create({ burger_name: req.body.burger_name}).then(function(result) {
        res.json(result);
    });
});

router.put("/api/burgers/:id", function(req, res) {
  console.log(req.params)
  console.log(req.body)
    db.Burger.update(req.body,
        {
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
          db.Burger.findAll({raw: true}).then(function(Burgers){
            console.log(Burgers);
          })
          res.json(result);
        });

});

module.exports = router;
