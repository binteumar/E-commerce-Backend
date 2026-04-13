const Customer  = require("../models/customerModel.js");

module.exports = {
  
  createCustomer: async (data) => {
    return await Customer.create(data);
  },

  getCustomers: async () => {
    return await Customer.find({ deleted: false });
  },

  getCustomerById: async (id) => {
    return await Customer.findOne({ _id: id, deleted: false });
  },

  updateCustomer: async (id, data) => {
    return await Customer.findByIdAndUpdate(id, data, { new: true });
  },

  deleteCustomer: async (id) => {
    return await Customer.findByIdAndUpdate(
      id,
      { deleted: true, active: false },
      { new: true }
    );
  }
};
