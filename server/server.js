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

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("DB connection error:", err));

sequelize
  .sync({ force: true })
  .then(() => console.log("Tables synced with database"))
  .catch((err) => console.error("Sync error:", err));

// ................API Routes ...................
const routes = require("./routes/index.Routes");

app.use("/api", routes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
