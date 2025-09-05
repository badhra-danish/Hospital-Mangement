// const db = require("../config/db");
// const { v4: uuidv4 } = require("uuid");
// const bcrypt = require("bcryptjs");

// const Users = {
//   //Create the new users
//   create: (fullname, email, password, phone, callback) => {
//     const user_id = uuidv4();
//     const hashedPassword = bcrypt.hashSync(password, 10);
//     const sql =
//       "INSERT INTO users (user_id, fullname, email, password, phone) VALUES (?, ?, ?, ?, ?)";
//     db.query(sql, [user_id, fullname, email, hashedPassword, phone], callback);
//   },

//   // Find user by ID
//   findById: (user_id, callback) => {
//     const sql = "SELECT * FROM users WHERE user_id = ?";
//     db.query(sql, [user_id], callback);
//   },

//   // Find user by email
//   findByEmail: (email, callback) => {
//     const sql = "SELECT * FROM users WHERE email = ? OR phone = ?";
//     db.query(sql, [email, email], callback);
//   },
// };

// module.exports = Users;

const DataTypes = require("sequelize");
const sequelize = require("../config/db.js");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, // Sequelize will auto-generate UUID
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(10),
      unique: true,
    },
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: true,
  }
);

module.exports = User;
