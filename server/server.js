const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const db = require("./config/db");
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  //res.json();
  res.status(200).json({
    data: {
      id: 1,
      name: "badhra",
      city: "basu",
    },
    message: "Data Fecth successfully",
  });
});

app.get("/getUser", (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Server error" });
    }
    res.json(result);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
