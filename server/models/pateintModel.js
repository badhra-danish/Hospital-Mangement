// const db = require("../config/db");

// const Patient = {
//   create: (patient, callback) => {
//     const query =
//       "INSERT INTO patients (patient_id,fullname,dob, gender,bloodgroup, address,emergency_contact) VALUES (?, ?, ?, ?, ?, ?, ?)";
//     db.query(
//       query,
//       [
//         patient.patient_id,
//         patient.fullname,
//         patient.dob,
//         patient.gender,
//         patient.bloodgroup,
//         patient.address,
//         patient.emergency_contact,
//       ],
//       callback
//     );
//   },

//   update: (updatepatient, patient_id, callback) => {
//     const sql = `UPDATE patients
//     SET fullname = ? , dob = ? , gender = ?, bloodgroup = ? ,address = ? , emergency_contact = ?
//     WHERE patient_id = ?`;
//     db.query(
//       sql,
//       [
//         updatepatient.fullname,
//         updatepatient.dob,
//         updatepatient.gender,
//         updatepatient.bloodgroup,
//         updatepatient.address,
//         updatepatient.emergency_contact,
//         patient_id,
//       ],
//       callback
//     );
//   },

//   getallPatient: (callback) => {
//     const sql = `
//     SELECT
//       p.*,
//       u.email
//     FROM patients p
//     JOIN users u ON p.patient_id = u.user_id
//   `;
//     db.query(sql, callback);
//   },

//   findByUserId: (patient_id, callback) => {
//     db.query(
//       `SELECT p.*, u.email FROM patients p
//        JOIN users u ON p.patient_id = u.user_id
//        WHERE patient_id = ?;`,
//       [patient_id],
//       callback
//     );
//   },
// };

// module.exports = Patient;

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("../models/usersModel");

const Patient = sequelize.define(
  "Patient",
  {
    patient_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: User,
        key: "user_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Full name cannot be empty" },
      },
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM("Male", "Female", "Other"),
      allowNull: true,
    },
    bloodgroup: {
      type: DataTypes.STRING(5),
      allowNull: true,
      validate: {
        isIn: {
          args: [["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]],
          msg: "Invalid blood group",
        },
      },
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    emergency_contact: {
      type: DataTypes.STRING(15),
      allowNull: true,
      validate: {
        isNumeric: { msg: "Emergency contact must be numeric" },
        len: {
          args: [7, 15],
          msg: "Emergency contact must be between 7–15 digits",
        },
      },
    },
  },
  {
    tableName: "patients",
    timestamps: true,
    underscored: true,
  }
);

// Associations
Patient.belongsTo(User, { foreignKey: "patient_id", as: "user" });
User.hasOne(Patient, { foreignKey: "patient_id", as: "patient" });

module.exports = Patient;
