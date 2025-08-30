const Doctor = require("../models/DoctorModel");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const uploadCloudnary = require("../services/cloudnary");
// ----------------- Create Doctor -----------------
exports.createDoctor = async (req, res) => {
  const doctor_id = uuidv4();
  const {
    name,
    email,
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

  const avatarImgPath = req.files?.doctorImg_url[0]?.path;
  const avatar_url = await uploadCloudnary.uploadonCloudnary(avatarImgPath);
  // 🔹 Validation
  if (!avatarImgPath) {
    return res.status(400).json({
      status: "Fail",
      message: "Avatar Image is Requires",
    });
  }
  if (!avatar_url) {
    return res.status(400).json({
      status: "Fail",
      message: "Avatar Image is Requires",
    });
  }
  if (
    !name ||
    !email ||
    !specialization ||
    !license_number ||
    !qualification ||
    !gender ||
    !conatct_number ||
    !department
  ) {
    return res.status(400).json({
      status: "Fail",
      message:
        "Missing required fields: name, specialization, license_number, qualification, gender, conatct_number, department",
    });
  }

  // if (typeof experience !== "undefined" && isNaN(Number(experience))) {
  //   return res.status(400).json({ status: "Fail", message: "Experience must be a number" });
  // }

  if (!["male", "female", "other"].includes(gender)) {
    return res.status(400).json({
      status: "Fail",
      message: "Gender must be Male, Female, or Other",
    });
  }

  if (!/^\d{10}$/.test(conatct_number)) {
    return res.status(400).json({
      status: "Fail",
      message: "Contact number must be a valid 10-digit number",
    });
  }

  const doctor = {
    doctor_id,
    name,
    email,
    specialization,
    license_number,
    qualification,
    experience,
    gender,
    availability,
    conatct_number,
    status,
    avatar_url: avatar_url.url,
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
      message: "Doctor created successfully",
      result,
    });
  });
};

// ----------------- Update Doctor -----------------
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

  // Validation
  if (!doctor_id) {
    return res
      .status(400)
      .json({ status: "Fail", message: "doctor_id is required" });
  }

  if (conatct_number && !/^\d{10}$/.test(conatct_number)) {
    return res.status(400).json({
      status: "Fail",
      message: "Contact number must be a valid 10-digit number",
    });
  }

  if (gender && !["male", "female", "other"].includes(gender)) {
    return res.status(400).json({
      status: "Fail",
      message: "Gender must be Male, Female, or Other",
    });
  }

  // if (experience && isNaN(Number(experience))) {
  //   //   return res
  //   //     .status(400)
  //   //     .json({ status: "Fail", message: "Experience must be a number" });
  //   // }

  const updateDoctor = {
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

  Doctor.update(updateDoctor, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "Fail", message: "Database Error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({
        status: "Fail",
        message: "Doctor not found",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Doctor updated successfully",
      result,
    });
  });
};

// ----------------- Get All Doctors -----------------
exports.getallDoctors = (req, res) => {
  Doctor.getallDoctor((err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "Fail", message: "Database Error", error: err });
    }
    if (result.length === 0) {
      return res
        .status(404)
        .json({ status: "Fail", message: "No doctors found" });
    }
    res.status(200).json({
      status: "Success",
      message: "All Doctor Details",
      result,
    });
  });
};

// ----------------- Get Doctor by ID -----------------
exports.getDoctorbyId = (req, res) => {
  const { doctor_id } = req.params;
  if (!doctor_id) {
    return res
      .status(400)
      .json({ status: "Fail", message: "doctor_id is required" });
  }

  Doctor.getDoctorbyId(doctor_id, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "Fail", message: "Database Error", error: err });
    }
    if (result.length === 0) {
      return res
        .status(404)
        .json({ status: "Fail", message: "Doctor not found" });
    }
    res.status(200).json({ status: "Success", result });
  });
};
