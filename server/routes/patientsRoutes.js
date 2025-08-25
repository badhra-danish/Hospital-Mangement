const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const patientsController = require("../controllers/userPatientController");

router.post("/createprofile", authMiddleware, patientsController.createProfile);
router.get(
  "/profile/:patient_id",
  authMiddleware,
  patientsController.getProfile
);

module.exports = router;
