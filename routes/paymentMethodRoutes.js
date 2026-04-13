const express = require("express");
const router = express.Router();
const paymentMethodController = require("../controller/paymentMethodController.js");

router.post("/", paymentMethodController.create);
router.get("/", paymentMethodController.getAll);
router.get("/:id", paymentMethodController.getOne);
router.put("/:id", paymentMethodController.update);
router.delete("/:id", paymentMethodController.delete);

module.exports = router;
