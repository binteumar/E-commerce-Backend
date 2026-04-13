const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");

router.get("/:userId", cartController.getCartByUser);
router.post("/add", cartController.addToCart);
router.delete("/remove/:productId/:userId", cartController.removeFromCart);
router.put("/update", cartController.updateCartQuantity);

module.exports = router;