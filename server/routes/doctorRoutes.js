const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const DoctorController = require("../controllers/doctorController");

router.post("/createdoctor", DoctorController.createDoctor);
router.put("/updatedoctor/:doctor_id", DoctorController.updateDoctor);
router.get("/getalldoctors", DoctorController.getallDoctors);

module.exports = router;
