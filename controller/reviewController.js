// const reviewService = require("../services/reviewServices.js");

// module.exports = {
  
//   create: async (req, res) => {
//     try {
//       const result = await reviewService.createReview(req.body);
//       res.status(201).json({ success: true, data: result });
//     } catch (err) {
//       res.status(400).json({ success: false, message: err.message });
//     }
//   },

  
//   getAll: async (req, res) => {
//     try {
//       const result = await reviewService.getReviews();
//       res.status(200).json({ success: true, data: result });
//     } catch (err) {
//       res.status(400).json({ success: false, message: err.message });
//     }
//   },

  
//   getOne: async (req, res) => {
//     try {
//       const result = await reviewService.getReviewById(req.params.id);
//       if (!result) {
//         return res.status(404).json({ success: false, message: "review not found" });
//       }
//       res.status(200).json({ success: true, data: result });
//     } catch (err) {
//       res.status(400).json({ success: false, message: err.message });
//     }
//   },

 
//   update: async (req, res) => {
//     try {
//       const result = await reviewService.updateReview(req.params.id, req.body);
//       res.status(200).json({ success: true, data: result });
//     } catch (err) {
//       res.status(400).json({ success: false, message: err.message });
//     }
//   },

  
//   delete: async (req, res) => {
//     try {
//       const result = await reviewService.deleteReview(req.params.id);
//       res.status(200).json({ success: true, data: result });
//     } catch (err) {
//       res.status(400).json({ success: false, message: err.message });
//     }
//   }
// };
