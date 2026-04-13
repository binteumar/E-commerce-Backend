const PaymentMethod  = require("../models/paymentMethodModel");

module.exports = {
  
  createPaymentMethod: async (data) => {
    return await PaymentMethod.create(data);
  },

  getPaymentMethods: async () => {
    return await PaymentMethod.find({ deleted: false });
  },

  getPaymentMethodById: async (id) => {
    return await PaymentMethod.findOne({ _id: id, deleted: false });
  },

  updatePaymentMethod: async (id, data) => {
    return await PaymentMethod.findByIdAndUpdate(id, data, { new: true });
  },

  deletePaymentMethod: async (id) => {
    return await PaymentMethod.findByIdAndUpdate(
      id,
      { deleted: true, active: false },
      { new: true }
    );
  }
};
