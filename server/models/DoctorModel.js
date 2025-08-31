const db = require("../config/db");

const Doctor = {
  create: (doctor, callback) => {
    const query = `
  INSERT INTO doctors 
  (doctor_id, name,email, specialization, license_number, qualification, experience, gender, availability, contact_number, status, avatar_url,department_id) 
  VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    (SELECT department_id FROM departments WHERE name = ?)
  )
  `;

    db.query(
      query,
      [
        doctor.doctor_id,
        doctor.name,
        doctor.email,
        doctor.specialization,
        doctor.license_number,
        doctor.qualification,
        doctor.experience,
        doctor.gender,
        doctor.availability,
        doctor.conatct_number,
        doctor.status,
        doctor.avatar_url,
        doctor.department,
      ],
      callback
    );
  },

  update: (updateDoctor, callback) => {
    const query = `
    UPDATE doctors 
  SET 
    name = ?, 
    email = ?,
    specialization = ?, 
    license_number = ?, 
    qualification = ?, 
    experience = ?, 
    gender = ?, 
    availability = ?, 
    contact_number = ?, 
    status = ?, 
    avatar_url = ?,
    department_id = (SELECT department_id FROM departments WHERE name = ?) 
  WHERE doctor_id = ?`;

    db.query(
      query,
      [
        updateDoctor.name,
        updateDoctor.email,
        updateDoctor.specialization,
        updateDoctor.license_number,
        updateDoctor.qualification,
        updateDoctor.experience,
        updateDoctor.gender,
        updateDoctor.availability,
        updateDoctor.conatact_number,
        updateDoctor.status,
        updateDoctor.avatar_url,
        updateDoctor.department,
        updateDoctor.doctor_id,
      ],
      callback
    );
  },

  getallDoctor: (callback) => {
    const query = `SELECT d.* , dept.name AS department_name 
    FROM doctors d
    JOIN  departments dept ON  d.department_id = dept.department_id 
  `;
    db.query(query, callback);
  },

  getDoctorbyId: (doctorid, callback) => {
    const query = `SELECT d.* , dept.name AS department_name
      FROM doctors d
      JOIN  departments dept ON  d.department_id = dept.department_id
      WHERE d.doctor_id = ?
    `;
    // const query = "SELECT * FROM doctors WHERE doctor_id = ?";
    db.query(query, [doctorid], callback);
  },

  Delete: (doctor_id, callback) => {
    const query = `DELETE FROM doctors WHERE doctor_id = ?`;
    db.query(query, [doctor_id], callback);
  },
};
module.exports = Doctor;
