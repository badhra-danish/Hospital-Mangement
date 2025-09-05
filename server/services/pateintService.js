const Patient = require("../models/pateintModel");
const User = require("../models/usersModel");
const sequelize = require("../config/db");
const patientService = {
  // Create new patient
  create: async (data) => {
    return await Patient.create(data);
  },

  // Update patient by ID
  update: async (patient_id, data) => {
    return await Patient.update(data, { where: { patient_id } });
  },

  // Get all patients with user email
  getAll: async () => {
    return await Patient.findAll({
      attributes: {
        include: [[sequelize.col("user.email"), "email"]],
      },
      include: [{ model: User, as: "user", attributes: [] }],
      raw: true,
      nest: false,
    });
  },

  // Get patient by ID
  findById: async (patient_id) => {
    return await Patient.findOne({
      attributes: {
        include: [[sequelize.col("user.email"), "email"]],
      },
      where: { patient_id },
      include: [{ model: User, as: "user", attributes: [] }],
    });
  },
};

module.exports = patientService;
