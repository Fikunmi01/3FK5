const mongoose = require("mongoose");

// create schema for student database
const studentSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  dob: String,
  department: String,
});

// model is being initialized to the student schema
const StudentModel = mongoose.model("Students", studentSchema);

// export the model
module.exports = StudentModel;
