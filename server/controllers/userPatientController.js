const Patient = require("../models/pateintModel");

exports.createProfile = (req, res) => {
  const { fullname, dob, gender, bloodgroup, address, emergency_contact } =
    req.body;
  const patient_id = req.user.user_id;
  console.log(patient_id);
  const newPatient = {
    patient_id,
    fullname,
    dob,
    gender,
    bloodgroup,
    address,
    emergency_contact,
  };

  Patient.create(newPatient, (err) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ message: "Profile Create Successfully" });
  });
};

exports.getProfile = (req, res) => {
  const { patient_id } = req.params;
  Patient.findByUserId(patient_id, (err, result) => {
    if (err || result.length === 0) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.json(result[0]);
  });
};
