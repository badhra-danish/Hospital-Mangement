const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const AppointmentController = require("../controllers/appointmentController");

router.post(
  "/createappointmnet",
  authMiddleware,
  AppointmentController.createAppointment
);

module.exports = router;
