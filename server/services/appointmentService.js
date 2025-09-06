const Appointment = require("../models/appointmentModel");
const Doctor = require("../models/DoctorModel");
const Patient = require("../models/pateintModel");

const appointmentService = {
  // Create Appointment
  create: async (patient_id, data) => {
    const patient = await Patient.findByPk(patient_id);

    const doctor = await Doctor.findOne({
      where: { specialization: data.service },
    });
    if (!doctor) throw new Error("Doctor Not Found");
    if (!patient) throw new Error("patient Not Found");

    const doctor_id = doctor.doctor_id;
    const appointment = Appointment.create({
      patient_id,
      doctor_id,
      ...data,
    });

    return appointment;
  },

  // Update Appointment
  update: async (appointment_id, updateData) => {
    const appointment = await Appointment.findByPk(appointment_id);
    if (!appointment) throw new Error("Appointment not found");

    await appointment.update(updateData);
    return appointment;
  },

  // Get all appointments (with doctor + patient info)
  getAllAppointment: async () => {
    return await Appointment.findAll({
      include: [
        {
          model: Doctor,
          as: "doctor",
          attributes: ["doctor_id", "name", "specialization"],
        },
        {
          model: Patient,
          as: "patient",
          attributes: ["patient_id", "fullname", "dob", "gender"],
        },
      ],
    });
  },

  // Get all appointments by patient
  getAppointmentsByPatientId: async (patient_id) => {
    return await Appointment.findAll({
      where: { patient_id },
      include: [
        {
          model: Doctor,
          as: "doctor",
          attributes: ["doctor_id", "name", "specialization"],
        },
      ],
    });
  },

  // Get all appointments by doctor
  getAppointmentsByDoctorId: async (doctor_id) => {
    return await Appointment.findAll({
      where: { doctor_id },
      include: [
        {
          model: Patient,
          as: "patient",
          attributes: ["patient_id", "fullname", "dob", "gender"],
        },
      ],
    });
  },

  // Get single appointment by ID
  getAppointmentById: async (appointment_id) => {
    return await Appointment.findByPk(appointment_id, {
      include: [
        {
          model: Doctor,
          as: "doctor",
          attributes: ["doctor_id", "name", "specialization"],
        },
        {
          model: Patient,
          as: "patient",
          attributes: ["patient_id", "fullname", "dob", "gender"],
        },
      ],
    });
  },
};

module.exports = appointmentService;
