const express = require("express");
const router = express.Router();
const brandController = require("../controller/brandController.js");
const uploadBrand = require("../middlewares/brandUploads.js");
const verifyToken = require("../Middleware/verifyToken.js");
const authorizeRole = require("../Middleware/authorizeRole");


router.post("/", uploadBrand.single("brandPictureURL"), brandController.create);
router.get("/all", brandController.getAll);
router.get("/:id", brandController.getOne);
router.put("/:id", uploadBrand.single("brandPictureURL"), brandController.update);
router.delete("/:id", brandController.delete);

// {---------For Admin Role--------}

router.post("/",verifyToken,authorizeRole("admin"),brandController.create);
router.put("/:id",verifyToken,authorizeRole("admin"),brandController.update);
router.delete("/:id",verifyToken,authorizeRole("admin"),brandController.delete);

module.exports = router;
