// const Review  = require("../models/reviewsModel.js");

// module.exports = {
  
//   createReview: async (data) => {
//     return await Review.create(data);
//   },

//   getReviews: async () => {
//     return await Review.find({ deleted: false });
//   },

//   getReviewById: async (id) => {
//     return await Review.findOne({ _id: id, deleted: false });
//   },

//   updateReview: async (id, data) => {
//     return await Review.findByIdAndUpdate(id, data, { new: true });
//   },

//   deleteReview: async (id) => {
//     return await Review.findByIdAndUpdate(
//       id,
//       { deleted: true, active: false },
//       { new: true }
//     );
//   }
// };
