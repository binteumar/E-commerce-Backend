const Payment  = require("../models/paymentModel.js");

module.exports = {
  
  createPayment: async (data) => {
    return await Payment.create(data);
  },

  getPayments: async () => {
    return await Payment.find({ deleted: false });
  },

  getPaymentById: async (id) => {
    return await Payment.findOne({ _id: id, deleted: false });
  },

  updatePayment: async (id, data) => {
    return await Payment.findByIdAndUpdate(id, data, { new: true });
  },

  deletePayment: async (id) => {
    return await Payment.findByIdAndUpdate(
      id,
      { deleted: true, active: false },
      { new: true }
    );
  }
};
