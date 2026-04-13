const express = require("express");
const router = express.Router();
const paymentController = require("../controller/paymentController.js");

router.post("/", paymentController.create);
router.get("/", paymentController.getAll);
router.get("/:id", paymentController.getOne);
router.put("/:id", paymentController.update);
router.delete("/:id", paymentController.delete);

module.exports = router;
