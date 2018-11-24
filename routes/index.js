var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Home | Acharya Football League",
    image: "http://www.acharya.ac.in/img/Acharya_Logo1.PNG"
  });
});

module.exports = router;
