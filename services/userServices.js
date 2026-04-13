const User = require("../models/usersModel.js");

module.exports = {
  
  createUser: async (data) => {
    return await User.create(data);
  },

  getUsers: async () => {
    return await User.find({ deleted: false });
  },

  getUserById: async (id) => {
    return await User.findOne({ _id: id, deleted: false });
  },

  updateUser: async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
  },

  deleteUser: async (id) => {
    return await User.findByIdAndUpdate(
      id,
      { deleted: true, active: false },
      { new: true }
    );
  }
};
