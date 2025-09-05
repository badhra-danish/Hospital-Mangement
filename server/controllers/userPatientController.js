// const Patient = require("../models/pateintModel");

// exports.createProfile = (req, res) => {
//   const { fullname, dob, gender, bloodgroup, address, emergency_contact } =
//     req.body;
//   const patient_id = req.user.user_id;
//   console.log(patient_id);
//   const newPatient = {
//     patient_id,
//     fullname,
//     dob,
//     gender,
//     bloodgroup,
//     address,
//     emergency_contact,
//   };

//   Patient.create(newPatient, (err) => {
//     if (err) {
//       return res.status(500).json({ error: err });
//     }
//     res.json({ message: "Profile Create Successfully" });
//   });
// };

// exports.updateProfile = (req, res) => {
//   // const  {patient_id} = req.params;
//   const patient_id = req.user.user_id;
//   const { fullname, dob, gender, bloodgroup, address, emergency_contact } =
//     req.body;
//   const updatepatient = {
//     fullname,
//     dob,
//     gender,
//     bloodgroup,
//     address,
//     emergency_contact,
//   };
//   Patient.update(updatepatient, patient_id, (err, result) => {
//     if (err) {
//       res
//         .status(500)
//         .json({ staus: "Fail", message: "Database Error", error: err });
//     }
//     if (result.affectedRows === 0) {
//       return res.status(404).json({
//         status: "fail",
//         message: "Profile Not Found",
//       });
//     }
//     res.status(200).json({
//       staus: "success",
//       message: "Profile update Successfully",
//       result,
//     });
//   });
// };

// exports.getallPatient = (req, res) => {
//   Patient.getallPatient((err, result) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ satus: "Fail", message: "Databse Error", error: err });
//     }
//     res.status(200).json({ satus: "success", message: "All Patients", result });
//   });
// };

// exports.getProfile = (req, res) => {
//   const { patient_id } = req.params;
//   //const patient_id = req.user.user_id;
//   Patient.findByUserId(patient_id, (err, result) => {
//     if (err || result.length === 0) {
//       return res.status(404).json({ error: "Profile not found" });
//     }
//     const patient = result[0];
//     res.status(200).json([patient]);
//   });
// };

const patientService = require("../services/pateintService");

exports.createPatient = async (req, res) => {
  try {
    const { fullname, dob, gender, bloodgroup, address, emergency_contact } =
      req.body;
    const patient_id = req.user.user_id;
    console.log(patient_id);

    const patientData = {
      patient_id,
      fullname,
      dob,
      gender,
      bloodgroup,
      address,
      emergency_contact,
    };
    const patient = await patientService.create(patientData);
    res
      .status(201)
      .json({ status: "OK", message: "Profile Created successfully", patient });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: "Profile Not Created",
      error: err.message,
    });
  }
};

exports.upadatePatient = async (req, res) => {
  try {
    const { fullname, dob, gender, bloodgroup, address, emergency_contact } =
      req.body;
    const patient_id = req.user.user_id;
    console.log(patient_id);

    const updatepatient = {
      fullname,
      dob,
      gender,
      bloodgroup,
      address,
      emergency_contact,
    };
    const updatedPatient = await patientService.update(
      patient_id,
      updatepatient
    );
    res.status(200).json({
      status: "OK",
      message: "Profile Update successfully",
      updatedPatient,
    });
  } catch (error) {
    return (
      res.status(400),
      json({
        status: "Fail",
        message: "profile not updated",
        err,
      })
    );
  }
};
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await patientService.getAll();
    res.json({ status: "OK", message: "Get All Patients", patients });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPatientbyId = async (req, res) => {
  try {
    //const { patient_id } = req.params;
    const patient_id = req.user.user_id;
    const patient = await patientService.findById(patient_id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json({ status: "OK", message: "Your Profile Data", patient });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
