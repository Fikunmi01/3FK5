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
    .catch((err) => res.send(err));

  res.send({
    status: 200,
    message: "User added successfully",
    studentObj: newStudent,
  });
});

// Search all
router.get("/list", (req, res, next) => {
  StudentModel.find()
    .then((students) => {
      res.send({
        status: 200,
        resultsFound: students.length,
        students: students,
      });
    })
    .catch((err) => res.send(err));
});

// find by firstname
router.get("/searchByFirstName", (req, res, next) => {
  const firstNameQuery = req.query.firstName;
  StudentModel.find({ firstName: firstNameQuery })
    .then((firstName) => {
      res.send({
        status: 200,
        resultsFound: firstName.length,
        firstName: firstName,
      });
    })

    .catch((err) => res.send(err));
});

router.get("/searchById", (req, res, next) => {
  const idQuery = req.query.id;
  StudentModel.findById(idQuery)
    .then((student) => {
      res.send({
        status: 200,
        student: student,
      });
    })
    .catch((err) => res.send(err));
});

router.put("/update", (req, res, next) => {
  const department = req.query.department;
  StudentModel.updateOne({ age: 40 }, { department: department })
    .then((student) => {
      res.send({
        status: 200,
        student: student,
      });
    })
    .catch((err) => res.send(err));
});

router.put("/updateUser", (req, res, next) => {
  const id = req.query.id;
  const firstName = req.query.firstName;
  StudentModel.findByIdAndUpdate(id, { firstName: firstName })
    .then((student) => {
      res.send({
        status: 200,
        student: student,
      });
    })
    .catch((err) => res.send(err));
});

router.put("/updateLastName", (req, res, next) => {
  const id = req.query.id;
  const lastName = req.query.lastName;
  StudentModel.findByIdAndUpdate(id, { lastName: lastName })
    .then((student) => {
      res.send({
        status: 200,
        student: student,
      });
    })
    .catch((err) => res.send(err));
});

router.delete("/deleteUser", (req, res) => {
  const idQuery = req.query.id;

  StudentModel.findByIdAndDelete(idQuery)
    .then((student) => {
      res.send({
        status: 200,
        student: student,
      });
    })
    .catch((err) => res.send(err));
});

module.exports = router;
