const Department = require("../models/departmentModel");
const { update } = require("./pateintService");

const departmentservices = {
  create: async (data) => {
    return await Department.create(data);
  },

  update: async (department_id, data) => {
    return await Department.update(data, { where: { department_id } });
  },

  getAll: async () => {
    return await Department.findAll();
  },

  getById: async (department_id) => {
    return await Department.findByPk(department_id);
  },

  delete: async (department_id) => {
    return await Department.destroy({
      where: { department_id },
    });
  },
};

module.exports = departmentservices;
