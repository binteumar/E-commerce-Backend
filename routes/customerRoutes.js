const express = require("express");
const router = express.Router();
const customerController = require("../controller/customerController.js");

router.post("/", customerController.create);
router.get("/", customerController.getAll);
router.get("/:id", customerController.getOne);
router.put("/:id", customerController.update);
router.delete("/:id", customerController.delete);

module.exports = router;
