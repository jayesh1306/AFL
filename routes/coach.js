const express = require("express");
const con = require("../connection");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("coach", {
    msg: ""
  });
});

router.post("/", function(req, res) {
  con.connect(function() {
    var sql =
      "INSERT INTO `coach`(`coach_id`, `coach_name`, `email`, `contact`, `gender`, `team_id`) VALUES ('" +
      req.body.coach_id +
      "','" +
      req.body.name +
      "','" +
      req.body.email +
      "','" +
      req.body.contact +
      "','" +
      req.body.gender +
      "','" +
      req.body.team_id +
      "')";
    con.query(sql, function(err, result) {
      if (err) throw err;
    });
  });
  res.render("coach", {
    msg: "Thankyou for the Registration. You have Registered Successfully"
  });
});


module.exports = router;