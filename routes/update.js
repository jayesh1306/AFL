const express = require("express");
const router = express.Router();
const con = require("../connection");

router.post("/", function (req, res) {
  if (req.body.passwd === "admin") {
    res.render("update", {
      title: "Update Score Here",
      heading: "Update Scores"
    });
  } else {
    res.redirect("/login", 400, {
      title: "Authenticate",
      heading: "Enter Password Again",
      msg: "Invalid Credentials"
    });
  }
});

router.post("/insert", function (req, res) {
  if (req.body.goal1 == "") {
    var x = req.body.goal2;
  }
  if (req.body.goal2 == "") {
    var x = req.body.goal1
  }
  con.connect(function () {
    var sql =
      "INSERT INTO `goals`(`goal`, `player_usn`) VALUES ('" +
      x +
      "','" +
      req.body.player_usn +
      "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
  });
});

module.exports = router;