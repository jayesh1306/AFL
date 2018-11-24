const express = require("express");
const router = express.Router();

router.post("/", function(req, res) {
  if (req.body.passwd == "admin") {
    res.render("update", {
      title: "Update Score Here",
      heading: "Update Scores"
    });
  } else {
    res.redirect("/login", {
      title: "Authenticate",
      heading: "Enter Password Again",
      msg: "Invalid Credentials"
    });
  }
});

module.exports = router;
