const db = require("../config/db");

const Doctor = {
  create: (doctor, callback) => {
    const query = `
  INSERT INTO doctors 
  (doctor_id, name, specialization, license_number, qualification, experience, gender, availability, contact_number, status, department_id) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
    (SELECT department_id FROM departments WHERE name = ?)
  )
`;

    db.query(
      query,
      [
        doctor.doctor_id,
        doctor.name,
        doctor.specialization,
        doctor.license_number,
        doctor.qualification,
        doctor.experience,
        doctor.gender,
        doctor.availability,
        doctor.conatct_number,
        doctor.status,
        doctor.department_id,
      ],
      callback
    );
  },

  update: (updateDoctor, callback) => {
    const query = `
    UPDATE doctors 
  SET 
    name = ?, 
    specialization = ?, 
    license_number = ?, 
    qualification = ?, 
    experience = ?, 
    gender = ?, 
    availability = ?, 
    contact_number = ?, 
    status = ?, 
    department_id = (SELECT department_id FROM departments WHERE name = ?) 
  WHERE doctor_id = ?`;

    db.query(
      query,
      [
        updateDoctor.name,
        updateDoctor.specialization,
        updateDoctor.license_number,
        updateDoctor.qualification,
        updateDoctor.experience,
        updateDoctor.gender,
        updateDoctor.availability,
        updateDoctor.conatct_number,
        updateDoctor.status,
        updateDoctor.department_id,
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
};
module.exports = Doctor;
