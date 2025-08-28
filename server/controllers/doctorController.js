const { json } = require("body-parser");
const Doctor = require("../models/DoctorModel");
const { v4: uuidv4 } = require("uuid");
exports.createDoctor = (req, res) => {
  const doctor_id = uuidv4();
  const {
    name,
    specialization,
    license_number,
    qualification,
    experience,
    gender,
    availability,
    conatct_number,
    status,
    department,
  } = req.body;

  const doctor = {
    doctor_id,
    name,
    specialization,
    license_number,
    qualification,
    experience,
    gender,
    availability,
    conatct_number,
    status,
    department,
  };
  Doctor.create(doctor, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "Fail", message: "Database Error", error: err });
    }
    res.status(201).json({
      status: "Success",
      message: "Doctor Create Successfully",
      result,
    });
  });
};

exports.updateDoctor = (req, res) => {
  const { doctor_id } = req.params;
  const {
    name,
    specialization,
    license_number,
    qualification,
    experience,
    gender,
    availability,
    conatct_number,
    status,
    department,
  } = req.body;

  const updateDoctor = {
    name,
    specialization,
    license_number,
    qualification,
    experience,
    gender,
    availability,
    conatct_number,
    status,
    department,
    doctor_id,
  };

  Doctor.update(updateDoctor, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Fail", message: "Database Error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Doctor Not Found",
      });
    }
    res
      .status(200)
      .json({ status: "success", message: "Doctor Update Succsess", result });
  });
};

exports.getallDoctors = (req, res) => {
  Doctor.getallDoctor((err, result) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Fail", message: "Database Error", error: err });
    }
    if (result.length === 0) {
      res.json({ message: "Doctor Not Found" });
    }
    res
      .status(200)
      .json({ status: "success", message: "All Doctor Detail", result });
  });
};

exports.getDoctorbyId = (req, res) => {
  const { doctor_id } = req.params;
  Doctor.getDoctorbyId(doctor_id, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Fail", message: "Database Error", error: err });
    }
    if (result.length === 0) {
      res.json({ message: "Doctor Not Found" });
    }
    res.status(200).json({ status: "Success", result });
  });
};
