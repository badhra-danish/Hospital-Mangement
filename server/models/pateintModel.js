const db = require("../config/db");

const Patient = {
  create: (patient, callback) => {
    const query =
      "INSERT INTO patients (patient_id,fullname,dob, gender,bloodgroup, address,emergency_contact) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        patient.patient_id,
        patient.fullname,
        patient.dob,
        patient.gender,
        patient.bloodgroup,
        patient.address,
        patient.emergency_contact,
      ],
      callback
    );
  },

  findByUserId: (patient_id, callback) => {
    db.query(
      "SELECT * FROM patients WHERE patient_id = ?",
      [patient_id],
      callback
    );
  },
};

module.exports = Patient;
