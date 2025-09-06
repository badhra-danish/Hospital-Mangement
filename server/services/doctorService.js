const Doctor = require("../models/DoctorModel");
const uploadCloudnary = require("./cloudnary");
const { extractPublicId } = require("../utils/extractPublicId");
const Department = require("../models/departmentModel");
const Sequelize = require("../config/db");

// Create Doctor
exports.createDoctor = async (data, file) => {
  if (!file) throw new Error("Avatar image is required");

  const avatarUpload = await uploadCloudnary.uploadonCloudnary(file.path);
  if (!avatarUpload?.secure_url) throw new Error("Cloudinary upload failed");

  const department = await Department.findOne({
    where: { department_name: data.department },
  });
  if (!department) throw new Error("Invalid department name");

  const doctor = await Doctor.create({
    ...data,
    avatar_url: avatarUpload.secure_url,
    department_id: department.department_id,
  });

  return doctor;
};

// Update Doctor
exports.updateDoctor = async (doctor_id, updateData, file) => {
  const doctor = await Doctor.findByPk(doctor_id);
  if (!doctor) throw new Error("Doctor not found");

  let avatar_url = doctor.avatar_url;

  // Handle new image upload
  if (file) {
    const oldPublicId = extractPublicId(avatar_url);
    if (oldPublicId) await uploadCloudnary.deleteFromCloudinary(oldPublicId);

    const uploadRes = await uploadCloudnary.uploadonCloudnary(file.path);
    avatar_url = uploadRes.secure_url;
  }

  const department = await Department.findOne({
    where: { department_name: updateData.department },
  });
  if (!department) throw new Error("Invalid department name");
  const department_id = department.department_id;

  await doctor.update({
    ...updateData,
    avatar_url,
    department_id,
  });

  return doctor;
};

// Get All Doctors
exports.getAllDoctors = async () => {
  return await Doctor.findAll({
    attributes: {
      include: [
        [Sequelize.col("department.department_name"), "department_name"],
      ],
    },
    include: [{ association: "department", attributes: [] }],
  });
};

// Get Doctor by ID
exports.getDoctorById = async (doctor_id) => {
  const doctor = await Doctor.findByPk(doctor_id, {
    attributes: {
      include: [
        [Sequelize.col("department.department_name"), "department_name"],
      ],
    },
    include: [{ association: "department", attributes: [] }],
  });

  if (!doctor) throw new Error("Doctor not found");
  return doctor;
};

// Delete Doctor
exports.deleteDoctor = async (doctor_id) => {
  const doctor = await Doctor.findByPk(doctor_id);
  if (!doctor) throw new Error("Doctor not found");

  const publicId = extractPublicId(doctor.avatar_url);
  if (publicId) await uploadCloudnary.deleteFromCloudinary(publicId);

  await doctor.destroy();
  return true;
};
