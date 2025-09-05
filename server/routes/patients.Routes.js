const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const patientsController = require("../controllers/userPatientController");

router.post("/createprofile", authMiddleware, patientsController.createPatient);
router.get("/profile", authMiddleware, patientsController.getPatientbyId);
router.put("/updateprofile", authMiddleware, patientsController.upadatePatient);
router.get("/getallpatients", patientsController.getAllPatients);

module.exports = router;
