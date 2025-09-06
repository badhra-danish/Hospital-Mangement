// const db = require("../config/db");

// const Doctor = {
//   create: (doctor, callback) => {
//     const query = `
//   INSERT INTO doctors
//   (doctor_id, name,email, specialization, license_number, qualification, experience, gender, availability, contact_number, status, avatar_url,department_id)
//   VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
//     (SELECT department_id FROM departments WHERE name = ?)
//   )
//   `;

//     db.query(
//       query,
//       [
//         doctor.doctor_id,
//         doctor.name,
//         doctor.email,
//         doctor.specialization,
//         doctor.license_number,
//         doctor.qualification,
//         doctor.experience,
//         doctor.gender,
//         doctor.availability,
//         doctor.conatct_number,
//         doctor.status,
//         doctor.avatar_url,
//         doctor.department,
//       ],
//       callback
//     );
//   },

//   update: (updateDoctor, callback) => {
//     const query = `
//     UPDATE doctors
//   SET
//     name = ?,
//     email = ?,
//     specialization = ?,
//     license_number = ?,
//     qualification = ?,
//     experience = ?,
//     gender = ?,
//     availability = ?,
//     contact_number = ?,
//     status = ?,
//     avatar_url = ?,
//     department_id = (SELECT department_id FROM departments WHERE name = ?)
//   WHERE doctor_id = ?`;

//     db.query(
//       query,
//       [
//         updateDoctor.name,
//         updateDoctor.email,
//         updateDoctor.specialization,
//         updateDoctor.license_number,
//         updateDoctor.qualification,
//         updateDoctor.experience,
//         updateDoctor.gender,
//         updateDoctor.availability,
//         updateDoctor.conatact_number,
//         updateDoctor.status,
//         updateDoctor.avatar_url,
//         updateDoctor.department,
//         updateDoctor.doctor_id,
//       ],
//       callback
//     );
//   },

//   getallDoctor: (callback) => {
//     const query = `SELECT d.* , dept.name AS department_name
//     FROM doctors d
//     JOIN  departments dept ON  d.department_id = dept.department_id
//   `;
//     db.query(query, callback);
//   },

//   getDoctorbyId: (doctorid, callback) => {
//     const query = `SELECT d.* , dept.name AS department_name
//       FROM doctors d
//       JOIN  departments dept ON  d.department_id = dept.department_id
//       WHERE d.doctor_id = ?
//     `;
//     // const query = "SELECT * FROM doctors WHERE doctor_id = ?";
//     db.query(query, [doctorid], callback);
//   },

//   Delete: (doctor_id, callback) => {
//     const query = `DELETE FROM doctors WHERE doctor_id = ?`;
//     db.query(query, [doctor_id], callback);
//   },
// };
// module.exports = Doctor;

// models/Doctor.js
// models/Doctor.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Department = require("../models/departmentModel");

const Doctor = sequelize.define(
  "Doctor",
  {
    doctor_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Name is required" },
      },
    },

    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: { msg: "Email already exists" },
      validate: {
        notEmpty: { msg: "Email is required" },
        isEmail: { msg: "Invalid email format" },
      },
    },

    specialization: {
      type: DataTypes.STRING(100),
    },

    license_number: {
      type: DataTypes.STRING(50),
      unique: { msg: "License number must be unique" },
      allowNull: false,
      validate: {
        notEmpty: { msg: "License number is required" },
      },
    },

    qualification: {
      type: DataTypes.STRING(100),
    },

    experience: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 0,
    },

    gender: {
      type: DataTypes.ENUM("Male", "Female", "Other"),
      allowNull: false,
      validate: {
        isIn: {
          args: [["Male", "Female", "Other"]],
          msg: "Gender must be Male, Female, or Other",
        },
      },
    },

    availability: {
      type: DataTypes.STRING(50),
      validate: {
        notEmpty: { msg: "Availability is required" },
      },
    },

    contact_number: {
      type: DataTypes.STRING(15),
      unique: { msg: "Contact number must be unique" },
      allowNull: false,
      validate: {
        notEmpty: { msg: "Contact number is required" },
        is: {
          args: [/^[0-9]{10,15}$/],
          msg: "Contact number must be 10–15 digits",
        },
      },
    },

    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
      validate: {
        isIn: {
          args: [["active", "inactive"]],
          msg: "Status must be either active or inactive",
        },
      },
    },

    avatar_url: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "doctors",
    timestamps: true,
    underscored: true,
  }
);

// Associations
Doctor.belongsTo(Department, {
  foreignKey: "department_id",
  as: "department",
});

Department.hasMany(Doctor, {
  foreignKey: "department_id",
  as: "doctors",
});

module.exports = Doctor;
