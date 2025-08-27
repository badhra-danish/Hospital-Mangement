const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const DoctorController = require("../controllers/doctorController");

router.post("/createdoctor", DoctorController.createDoctor);
router.put("updatedoctor/", DoctorController.updateDoctor);
module.exports = router;
