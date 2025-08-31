const Doctor = require("../models/DoctorModel");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const uploadCloudnary = require("../services/cloudnary");
const { extractPublicId } = require("../utils/extractPublicId");

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
    });
  });
};

// ----------------- Update Doctor -----------------

exports.updateDoctor = async (req, res) => {
  const { doctor_id } = req.params;

  try {
    // 1. Find doctor by ID
    Doctor.getDoctorbyId(doctor_id, async (err, result) => {
      if (err || !result) {
        return res
          .status(404)
          .json({ status: "Fail", message: "Doctor not found" });
      }

      let avatar_url = result.avatar_url;
      let avatar_public_id = extractPublicId(avatar_url);

      try {
        // 2. Handle new file upload
        if (req.files && req.files.doctorImg_url) {
          const localfilePath = req.files.doctorImg_url[0].path;

          // Delete old image from cloudinary
          if (avatar_public_id) {
            await uploadCloudnary.deleteFromCloudinary(avatar_public_id);
          }

          // Upload new image
          const uploadRes = await uploadCloudnary.uploadonCloudnary(
            localfilePath
          );
          avatar_url = uploadRes.secure_url;
        }
      } catch (cloudErr) {
        return res.status(500).json({
          status: "Fail",
          message: "Cloudinary Error",
          error: cloudErr,
        });
      }

      // 3. Extract fields
      const {
        name,
        email,
        specialization,
        license_number,
        qualification,
        experience,
        gender,
        availability,
        conatact_number,
        status,
        department,
      } = req.body;

      // 4. Validation
      if (!doctor_id) {
        return res
          .status(400)
          .json({ status: "Fail", message: "doctor_id is required" });
      }

      if (conatact_number && !/^\d{10}$/.test(conatact_number)) {
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
      const updateDoctor = {
        doctor_id,
        name,
        email,
        specialization,
        license_number,
        qualification,
        experience,
        gender,
        availability,
        conatact_number,
        status,
        department,
        avatar_url,
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
        });
      });
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: "Unexpected Error",
      error: err.message || err,
    });
  }
};

// ----------------- Get All Doctors -----------------
exports.getallDoctors = (req, res) => {
  Doctor.getallDoctor((err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "Fail", message: "Database Error", error: err });
    }
    if (result.length === 0 || !result) {
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
// -----------------Delete Doctor By Id  -----------------
exports.deleteDoctorbyId = (req, res) => {
  const { doctor_id } = req.params;

  Doctor.getDoctorbyId(doctor_id, (err, result) => {
    if (err || !result) {
      return res
        .status(404)
        .json({ status: "Fail", message: "Doctor not found" });
    }
    if (!doctor_id) {
      return res
        .status(400)
        .json({ status: "Fail", message: "doctor_id is required" });
    }

    Doctor.Delete(doctor_id, (err, result) => {
      if (err || !result) {
        return res
          .status(400)
          .json({ status: "Success", message: "Database Error", error: err });
      }
      res
        .status(200)
        .json({ status: "Success", message: "Doctor Delete Successfully" });
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

  const avatar_url = res.avatar_url;
  let avatar_public_id = null;
  if (avatar_url) {
    avatar_public_id = extractPublicId(avatar_url);
  }

  try {
    Doctor.Delete(doctor_id, async (err, result) => {
      if (err) {
        return res.status(500).json({
          status: "Fail",
          message: "Database Error",
          error: err,
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          status: "Fail",
          message: "Doctor not found",
        });
      }

      if (avatar_public_id) {
        await uploadCloudnary.deleteFromCloudinary(avatar_public_id);
      }

      return res.status(200).json({
        status: "Success",
        message: "Doctor deleted successfully",
      });
    });
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      message: "Error while deleting doctor",
      error,
    });
  }
};
