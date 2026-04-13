const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController.js");
const verifyToken = require("../Middleware/verifyToken.js");
const authorizeRole = require("../Middleware/authorizeRole");

router.post("/", orderController.create);
router.get("/", orderController.getAll);
router.get("/:id", orderController.getOne);
router.put("/:id", orderController.update);
router.delete("/:id", orderController.delete);
router.post("/track", orderController.trackOrderById);

// {---------------For Admin Role-----------------}
router.put("/:id",verifyToken,authorizeRole("admin"),orderController.update);
router.post("/", verifyToken, orderController.create);
module.exports = router;
