const express = require("express");
const router = express.Router();
const DepartmentController = require("../controllers/departmentController");

router.post("/createdepartment", DepartmentController.createDepartment);

module.exports = router;
