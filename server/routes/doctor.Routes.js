const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const DoctorController = require("../controllers/doctorController");

const uploads = require("../middleware/multer.middleware");

router.post(
  "/createdoctor",
  uploads.upload.fields([{ name: "doctorImg_url", maxCount: 1 }]),
  DoctorController.createDoctor
);
router.put(
  "/updatedoctor/:doctor_id",
  uploads.upload.fields([{ name: "doctorImg_url", maxCount: 1 }]),
  DoctorController.updateDoctor
);
router.get("/getalldoctors", DoctorController.getallDoctors);
router.get("/getdoctor/:doctor_id", DoctorController.getDoctorbyId);
router.delete("/deletedoctor/:doctor_id", DoctorController.deleteDoctorbyId);

module.exports = router;
