const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Upload directory
const uploadDir = path.join(__dirname, "../uploads/brands");

// Create folder if not exists
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = "brand_" + Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

// Accept images only
const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/jpg", "image/png"];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(new Error("Only JPG, JPEG, PNG images allowed!"), false);
};

module.exports = multer({ storage, fileFilter });
