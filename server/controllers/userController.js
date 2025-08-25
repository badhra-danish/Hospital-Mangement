const Users = require("../models/usersModel");
const jwt = require("jsonwebtoken");

// Signup controller
exports.signup = (req, res) => {
  const { fullname, email, password, phone } = req.body;

  Users.create(fullname, email, password, phone, (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "User created successfully" });
  });
};

// Login controller
exports.login = (req, res) => {
  const { email, password } = req.body;

  Users.findByEmail(email, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    const user = results[0];
    const bcrypt = require("bcryptjs");
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // create JWT token
    const token = jwt.sign(
      { user_id: user.user_id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({ message: "Login successful", user, token });
  });
};
