// const Users = require("../models/usersModel");
// const jwt = require("jsonwebtoken");

// // Signup controller
// exports.signup = (req, res) => {
//   const { fullname, email, password, phone } = req.body;

//   Users.create(fullname, email, password, phone, (err, result) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).json({ error: err.message });
//     }
//     res.status(201).json({ message: "User created successfully" });
//   });
// };

// // Login controller
// exports.login = (req, res) => {
//   const { email, password } = req.body;

//   Users.findByEmail(email, (err, results) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).json({ error: err.message });
//     }
//     if (results.length === 0) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     const user = results[0];
//     const bcrypt = require("bcryptjs");
//     const isMatch = bcrypt.compareSync(password, user.password);

//     if (!isMatch) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // create JWT token
//     const token = jwt.sign(
//       { user_id: user.user_id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.status(200).json({ message: "Login successful", user, token });
//   });
// };

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/usersModel.js");
const { Op } = require("sequelize");
// ----------------- Signup -----------------
exports.signup = async (req, res) => {
  try {
    const { fullname, email, password, phone } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({
      where: { [Op.or]: [{ email }, { phone }] },
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email or phone already registered" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    await User.create({ fullname, email, password: hashedPassword, phone });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ----------------- Login -----------------

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user by email or phone
    const user = await User.findOne({
      where: { [Op.or]: [{ email }, { phone: email }] },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // generate JWT
    const token = jwt.sign(
      { user_id: user.user_id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      user: {
        user_id: user.user_id,
        fullname: user.fullname,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
