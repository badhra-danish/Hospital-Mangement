const bcrypt = require("bcryptjs");
const User = require("../models/usersModel.js");

// Create new user
exports.createUser = async (fullname, email, password, phone) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.create({
    fullname,
    email,
    password: hashedPassword,
    phone,
  });
};

// Find by ID
exports.findById = async (user_id) => {
  return await User.findByPk(user_id);
};

// Find by email OR phone
exports.findByEmailOrPhone = async (value) => {
  return await User.findOne({
    where: {
      [Op.or]: [{ email: value }, { phone: value }],
    },
  });
};
