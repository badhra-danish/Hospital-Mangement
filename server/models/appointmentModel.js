// models/Appointment.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Doctor = require("./DoctorModel");
const Patient = require("./pateintModel");

const Appointment = sequelize.define(
  "Appointment",
  {
    appointment_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    patient_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Patient,
        key: "patient_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },

    doctor_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Doctor,
        key: "doctor_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },

    appointment_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Appointment date is required" },
        isDate: { msg: "Appointment date must be a valid date" },
        isAfter: {
          args: new Date().toISOString(),
          msg: "Appointment date must be in the future",
        },
      },
    },

    status: {
      type: DataTypes.ENUM(
        "pending",
        "confirmed",
        "completed",
        "cancelled",
        "rescheduled",
        "no_show"
      ),
      defaultValue: "pending",
      allowNull: false,
      validate: {
        isIn: {
          args: [
            [
              "pending",
              "confirmed",
              "completed",
              "cancelled",
              "rescheduled",
              "no_show",
            ],
          ],
          msg: "Invalid appointment status",
        },
      },
    },

    notes: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [0, 500],
          msg: "Notes must be less than 500 characters",
        },
      },
    },
  },
  {
    tableName: "appointments",
    timestamps: true,
    underscored: true,
  }
);

Appointment.belongsTo(Patient, {
  foreignKey: "patient_id",
  as: "patient",
});

Appointment.belongsTo(Doctor, {
  foreignKey: "doctor_id",
  as: "doctor",
});

module.exports = Appointment;
