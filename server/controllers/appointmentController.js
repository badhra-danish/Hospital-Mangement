const AppointmentServices = require("../services/appointmentService");

exports.createAppointment = async (req, res) => {
  try {
    const patient_id = req.user.user_id;
    const appointment = await AppointmentServices.create(patient_id, req.body);
    res.status(201).json({
      status: "OK",
      Message: "Appointment Create Successfully",
      appointment,
    });
  } catch (error) {
    res
      .status(400)
      .json({ staus: "Fail", Message: "Bad Request", Error: error.message });
  }
};
