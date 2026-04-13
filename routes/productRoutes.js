const express = require("express");
const router = express.Router();
const productController = require("../controller/productController.js");
const uploadProduct = require("../middlewares/productUploads.js");
const verifyToken = require("../Middleware/verifyToken.js");
const authorizeRole = require("../Middleware/authorizeRole");

router.post("/", uploadProduct.single("productPictureURL"), productController.create);
router.get("/", productController.getAll);
router.get("/:id", productController.getOne);
router.put("/:id", uploadProduct.single("productPictureURL"), productController.update);
router.delete("/:id", productController.delete);

// {---------For Admin Role--------}

router.post("/",verifyToken,authorizeRole("admin"),productController.create);
router.put("/:id",verifyToken,authorizeRole("admin"),productController.update);
router.delete("/:id",verifyToken,authorizeRole("admin"),productController.delete);

module.exports = router;
