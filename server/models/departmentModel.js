// models/Department.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Doctor = require("../models/DoctorModel");
const Department = sequelize.define(
  "Department",
  {
    department_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    department_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "departments",
    timestamps: true,
    underscored: true,
  }
);
// //Associations
// Department.hasMany(Doctor, {
//   foreignKey: "department_id",
//   as: "doctors",
// });

module.exports = Department;
