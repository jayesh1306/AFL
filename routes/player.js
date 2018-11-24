const express = require("express");
const con = require("../connection");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("player", {
    msg: ""
  });
});

router.post("/", function(req, res) {
  con.connect(function() {
    var sql =
      "INSERT INTO `players`(`usn`, `name`,`age`, `email`, `contact`, `gender`, `team`) VALUES ('" +
      req.body.USN +
      "','" +
      req.body.name +
      "','" +
      req.body.age +
      "','" +
      req.body.email +
      "','" +
      req.body.contact +
      "','" +
      req.body.gender +
      "','" +
      req.body.teams +
      "')";
    con.query(sql, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
  res.render("player", {
    msg: "Thankyou for the Registration. You have Registered Successfully"
  });
});

module.exports = router;
