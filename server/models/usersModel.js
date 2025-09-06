const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, // auto-generate UUID
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // ensures valid email format
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(10),
      unique: true,
      validate: {
        isNumeric: true, // only digits
        len: [10, 10], // exactly 10 digits
      },
    },
  },
  {
    tableName: "users",
    timestamps: true, // adds created_at & updated_at
    underscored: true, // snake_case columns (created_at, updated_at)
  }
);

module.exports = User;
