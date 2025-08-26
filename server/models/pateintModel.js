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

  update: (updatepatient, patient_id, callback) => {
    const sql = `UPDATE patients 
    SET fullname = ? , dob = ? , gender = ?, bloodgroup = ? ,address = ? , emergency_contact = ? 
    WHERE patient_id = ?`;
    db.query(
      sql,
      [
        updatepatient.fullname,
        updatepatient.dob,
        updatepatient.gender,
        updatepatient.bloodgroup,
        updatepatient.address,
        updatepatient.emergency_contact,
        patient_id,
      ],
      callback
    );
  },

  getallPatient: (callback) => {
    const sql = `
    SELECT 
      p.*,
      u.email
    FROM patients p
    JOIN users u ON p.patient_id = u.user_id
  `;
    db.query(sql, callback);
  },

  findByUserId: (patient_id, callback) => {
    db.query(
      `SELECT p.*, u.email FROM patients p 
       JOIN users u ON p.patient_id = u.user_id
       WHERE patient_id = ?;`,
      [patient_id],
      callback
    );
  },
};

module.exports = Patient;
