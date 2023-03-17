var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const StudentModel = require("../models/student-model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Students Route work");
});

router.post("/add", (req, res, next) => {
  let newStudent = new StudentModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    dob: req.body.dob,
    department: req.body.department,
  });

  newStudent
    .save()
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log(err));

  res.send({
    status: 200,
    message: "User added successfully",
    studentObj: newStudent,
  });
});
module.exports = router;



  //   newStudent.save((err, newStudent) => {
  //     if (err) res.send(err);
  //     else
  //       res.send({
  //         status: 200,
  //         message: "User successfully added",
  //         studentObj: newStudent,
  //       });
  //   });