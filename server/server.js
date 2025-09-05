const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const db = require("./config/db");
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
const sequelize = require("./config/db");
app.use(express.urlencoded({ extended: true }));
// ................Routes ...................
sequelize
  .sync({ alter: true })
  .then(() => console.log("Tables synced with database"))
  .catch((err) => console.error("Sync error:", err));

const userRoutes = require("./routes/users.Routes");
const patientRoutes = require("./routes/patients.Routes");
const doctorRoutes = require("./routes/doctor.Routes");

app.use("/api/users", userRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
