const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const db = require("./config/db");
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// ................Routes ...................

const userRoutes = require("./routes/usersRoutes");
const patientRoutes = require("./routes/patientsRoutes");
const doctorRoutes = require("./routes/doctorRoutes");

app.use("/api/users", userRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
