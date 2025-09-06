const DepartmentService = require("../services/departmentService");

exports.createDepartment = async (req, res) => {
  try {
    const { department_name, description } = req.body;
    const departmentData = {
      department_name,
      description,
    };

    const department = await DepartmentService.create(departmentData);
    res.status(201).json({
      status: "OK",
      message: "Department Create Successfully",
      department,
    });
  } catch (err) {
    res
      .status(400)
      .json({ status: "Fail", message: "Bad Request", error: err.message });
  }
};
