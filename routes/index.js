// Here we have all our routes defined for index.js

var express = require("express");
var router = express.Router();

// import mongoose and initialize dbUrl
const moongose = require("mongoose");
const dbUrl = require("../properties").DB_URL;

// connect dbUrl and show a notification saying connected successful to our console
moongose.connect(dbUrl);
moongose.connection.on("Connected", () => {
  console.log("Connected successful");
  console.error();
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express Tutorial by ARC",
    subtitle: "The Youtube channel with the best audience",
  });
});

router.get("/tutorials", function (req, res, next) {
  const courseName = req.query.course;
  const courseTitle = "Angular Tutorial by ARC -" + courseName;
  res.render("index", {
    title: courseTitle,
    subtitle: "The Angular Youtube channel with the best audience",
  });
});

// router.get("/ang", function (req, res, next) {
//   res.render("index", {
//     user: '3FK5 '
//   })
// })

module.exports = router;
