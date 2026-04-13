const Employee  = require("../models/employeeModel.js");

module.exports = {
  
  createEmployee: async (data) => {
    return await Employee.create(data);
  },

  getEmployees: async () => {
    return await Employee.find({ deleted: false });
  },

  getEmployeeById: async (id) => {
    return await Employee.findOne({ _id: id, deleted: false });
  },

  updateEmployee: async (id, data) => {
    return await Employee.findByIdAndUpdate(id, data, { new: true });
  },

  deleteEmployee: async (id) => {
    return await Employee.findByIdAndUpdate(
      id,
      { deleted: true, active: false },
      { new: true }
    );
  }
};
