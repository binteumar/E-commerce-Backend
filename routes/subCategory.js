const express = require("express");
const router = express.Router();
const subCategoryController = require("../controller/subCategoryController.js");

router.post("/", subCategoryController.create);
router.get("/", subCategoryController.getAll);
router.get("/:id", subCategoryController.getOne);
router.put("/:id", subCategoryController.update);
router.delete("/:id", subCategoryController.delete);

module.exports = router;
