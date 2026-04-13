const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController.js");
const verifyToken = require("../Middleware/verifyToken.js");
const authorizeRole = require("../Middleware/authorizeRole");

router.post("/", categoryController.create);
router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getOne);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.delete);

// {---------For Admin Role--------}

router.post("/",verifyToken,authorizeRole("admin"),categoryController.create);
router.put("/:id",verifyToken,authorizeRole("admin"),categoryController.update);
router.delete("/:id",verifyToken,authorizeRole("admin"),categoryController.delete);

module.exports = router;
