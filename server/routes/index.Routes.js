const express = require("express");
const router = express.Router();
const userRoutes = require("./users.Routes");
const patientRoutes = require("./patients.Routes");
const doctorRoutes = require("./doctor.Routes");
const departmentRoutes = require("./department.Routes");

router.use("/users", userRoutes);
router.use("/patients", patientRoutes);
router.use("/doctors", doctorRoutes);
router.use("/department", departmentRoutes);

module.exports = router;
