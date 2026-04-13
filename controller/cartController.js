const cartService = require("../services/cartServices.js");

exports.getCartByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await cartService.getCartByCustomerId(userId);

    if (!cart) {
      return res.status(200).json({ items: [] });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching cart",
      error: error.message,
    });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { customer_id, product_id, quantity } = req.body;

    if (!customer_id || !product_id) {
      return res.status(400).json({
        message: "customer_id and product_id are required",
      });
    }

    let cart = await cartService.getCartByCustomerId(customer_id);

    if (!cart) {
      cart = await cartService.createCart({
        customer_id,
        items: [{ product_id, quantity: quantity || 1 }],
      });
    } else {
      const existingItem = cart.items.find(
        (item) => item.product_id._id?.toString() === product_id || item.product_id.toString() === product_id
      );

      if (existingItem) {
        existingItem.quantity += quantity || 1;
      } else {
        cart.items.push({ product_id, quantity: quantity || 1 });
      }

      await cartService.saveCart(cart);
    }

    const updatedCart = await cartService.getCartByCustomerId(customer_id);

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({
      message: "Error adding to cart",
      error: error.message,
    });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const cart = await cartService.getCartByCustomerId(userId);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => item.product_id._id?.toString() !== productId && item.product_id.toString() !== productId
    );

    await cartService.saveCart(cart);

    const updatedCart = await cartService.getCartByCustomerId(userId);

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({
      message: "Error removing item",
      error: error.message,
    });
  }
};

exports.updateCartQuantity = async (req, res) => {
  try {
    const { customer_id, product_id, quantity } = req.body;

    const cart = await cartService.getCartByCustomerId(customer_id);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find(
      (item) => item.product_id._id?.toString() === product_id || item.product_id.toString() === product_id
    );

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    item.quantity = quantity;
    await cartService.saveCart(cart);

    const updatedCart = await cartService.getCartByCustomerId(customer_id);

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({
      message: "Error updating cart",
      error: error.message,
    });
  }
};